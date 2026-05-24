// src/pages/NihongoLessonPage.tsx
// Module học từ vựng theo giáo trình みんなの日本語
// Bao gồm: Vocabulary list + Flash Quiz + Nghe & Gõ + Đọc Hiểu + Bộ đếm thuộc bài

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import type { NihongoLesson, LessonWord, LessonReading } from '../data/nihongo-lessons';
import { useSpeech } from '../hooks/useSpeech';
import { VocabTab, FlashTab, ListenTab, StatsTab, MatchTab, TranslateTab, ListenSentenceTab, N5ExamTab, ReadingTab, TypingTab, GrammarTab, GrammarQuizTab, SummaryTableTab } from './NihongoLessonTabs';
import { getWordKanjiLevel } from '../utils/kanji';
import * as wanakana from 'wanakana';

interface Props {
  lessons: NihongoLesson[];
  onHome: () => void;
  onLessonComplete?: (lessonId: number) => void;
  sentenceMastery: Record<string, { listenCount: number; translateCount: number }>;
  updateSentenceMastery: (key: string, type: 'listen' | 'translate') => void;
  addXP?: (amount: number) => void;
}

// ── Mastery types ──────────────────────────────────────────
interface WordMastery {
  streak: number;      // Số lần đúng liên tiếp (>=3 = thuộc)
  total: number;       // Tổng số lần đã luyện
  correct: number;     // Số lần đúng
}
type MasteryMap = Record<string, WordMastery>;

const MASTERY_KEY = 'nihongo_mastery';

function loadMastery(): MasteryMap {
  try { return JSON.parse(localStorage.getItem(MASTERY_KEY) || '{}'); } catch { return {}; }
}
function saveMastery(m: MasteryMap) {
  localStorage.setItem(MASTERY_KEY, JSON.stringify(m));
}
function getWordMastery(m: MasteryMap, id: string): WordMastery {
  return m[id] || { streak: 0, total: 0, correct: 0 };
}

type Tab = 'vocab' | 'flash' | 'listen' | 'poem' | 'stats' | string;

// ── Component ──────────────────────────────────────────────
export function NihongoLessonPage({ lessons, onHome, onLessonComplete, sentenceMastery, updateSentenceMastery, addXP }: Props) {
  const isCombined = lessons.length > 1;
  const lessonIdsDep = lessons.map(l => l.id).join(',');
  const mergedWords = useMemo(() => {
    let all = lessons.flatMap(l => l.words);
    const jlptFocus = localStorage.getItem('jlpt_focus_mode') || 'N5';
    if (jlptFocus === 'N5') {
      all = all.map(w => {
        if (getWordKanjiLevel(w.word) === 'N4+') {
          return { ...w, word: w.reading };
        }
        return w;
      });
    }
    return all;
  }, [lessonIdsDep]);
  const mergedReadings = useMemo(() => {
    let all = lessons.flatMap(l => l.readings);
    const jlptFocus = localStorage.getItem('jlpt_focus_mode') || 'N5';
    if (jlptFocus === 'N5') {
      const allWords = lessons.flatMap(l => l.words);
      const n4plusWords = allWords.filter(w => getWordKanjiLevel(w.word) === 'N4+');
      all = all.map(r => ({
        ...r,
        lines: r.lines.map(line => {
          let modifiedKanji = (line as any).kanji;
          if (modifiedKanji) {
            n4plusWords.forEach(w => {
              modifiedKanji = modifiedKanji.split(w.word).join(w.reading);
            });
          }
          return { ...line, kanji: modifiedKanji };
        })
      }));
    }
    return all;
  }, [lessonIdsDep]);

  const [tab, setTab] = useState<Tab>(isCombined ? 'flash' : 'vocab');
  const [mastery, setMastery] = useState<MasteryMap>(loadMastery);
  const { speak, supported } = useSpeech();

  const updateMastery = useCallback((wordId: string, isCorrect: boolean) => {
    if (isCorrect && addXP) addXP(2); // 2 XP per correct vocab answer
    // Không cập nhật độ thuộc từ vựng trong chế độ tổng ôn để tránh spam
    if (isCombined) return;
    setMastery(prev => {
      const cur = getWordMastery(prev, wordId);
      const updated: MasteryMap = {
        ...prev,
        [wordId]: {
          total: cur.total + 1,
          correct: cur.correct + (isCorrect ? 1 : 0),
          streak: isCorrect ? cur.streak + 1 : 0,
        },
      };
      saveMastery(updated);
      return updated;
    });
  }, [isCombined]);

  const masteredCount = mergedWords.filter(w => getWordMastery(mastery, w.id).correct >= 3).length;
  const totalAttempts = Object.values(mastery).filter((_, i) =>
    mergedWords.some(w => w.id === Object.keys(mastery)[i])
  ).reduce((a, b) => a + b.total, 0);

  const isPracticed = useMemo(() => {
    if (isCombined) return true;
    for (const r of mergedReadings) {
      for (const line of r.lines) {
        const sm = sentenceMastery[line.jp] || { listenCount: 0, translateCount: 0 };
        if (sm.listenCount < 3 || sm.translateCount < 3) return false;
      }
    }
    return true;
  }, [mergedReadings, sentenceMastery, isCombined]);

  const [passMode, setPassMode] = useState<'strict' | 'flexible'>(() => {
    return (localStorage.getItem('n5_pass_mode') as 'strict' | 'flexible') || 'strict';
  });

  useEffect(() => {
    localStorage.setItem('n5_pass_mode', passMode);
  }, [passMode]);

  const isExamUnlocked = lessons[0]?.id === 1 || isCombined || (
    passMode === 'strict'
      ? (masteredCount === mergedWords.length && isPracticed)
      : (masteredCount === mergedWords.length || isPracticed)
  );

  const getCategoryForTab = (currentTab: string): string => {
    if (currentTab === 'vocab' || currentTab === 'grammar') return 'theory';
    if (['flash', 'listen', 'match', 'typing', 'summary'].includes(currentTab)) return 'vocab_practice';
    if (['grammar_quiz', 'translate', 'listen_sentence'].includes(currentTab)) return 'sentence_practice';
    if (currentTab === 'exam' || currentTab.startsWith('read')) return 'reading_exam';
    if (currentTab === 'stats') return 'summary_stats';
    return 'theory';
  };

  const activeCategory = getCategoryForTab(tab);

  const handleCategoryClick = (catId: string) => {
    if (catId === 'theory') setTab('vocab');
    else if (catId === 'vocab_practice') setTab('flash');
    else if (catId === 'sentence_practice') {
      if (lessons.some(l => l.grammarExercises)) setTab('grammar_quiz');
      else setTab('translate');
    }
    else if (catId === 'reading_exam') {
      if (mergedReadings.length > 0) setTab('read1');
      else setTab('exam');
    }
    else if (catId === 'summary_stats') setTab('stats');
  };

  const categories = [
    { id: 'theory', icon: '📚', label: 'Lý Thuyết' },
    { id: 'vocab_practice', icon: '🧩', label: 'Luyện Từ' },
    { id: 'sentence_practice', icon: '✍️', label: 'Luyện Câu' },
    { id: 'reading_exam', icon: '📑', label: 'Đọc & Thi' },
    { id: 'summary_stats', icon: '📊', label: 'Tổng Kết' },
  ];

  const renderSubButton = (id: string, label: string) => {
    const isActive = tab === id;
    return (
      <button
        key={id}
        onClick={() => setTab(id)}
        style={{
          padding: '8px 16px',
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 700,
          background: isActive ? 'rgba(255, 196, 0, 0.12)' : 'rgba(255, 255, 255, 0.02)',
          border: isActive ? '1px solid var(--gold)' : '1px solid var(--border)',
          color: isActive ? 'var(--gold)' : 'var(--mute)',
          cursor: 'pointer',
          transition: 'all 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="screen" style={{ padding: '16px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--border)', sticky: 'top', background: 'var(--bg)' }}>
        <button className="btn-back no-print" onClick={onHome}>← Danh sách bài</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 700, letterSpacing: 1 }}>{isCombined ? 'Tổng Ôn Luyện' : lessons[0].chapter}</div>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>
            {isCombined ? `Gộp ${lessons.length} bài học` : lessons[0].title}
            <span style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 400 }}>— {isCombined ? 'Review Mode' : lessons[0].titleVn}</span>
          </h2>
        </div>
        <div className="no-print" style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: masteredCount === mergedWords.length ? 'var(--green)' : 'var(--gold)' }}>
            {masteredCount}/{mergedWords.length} thuộc
          </div>
        </div>
      </div>

      {/* Categories Horizontal Menu (Row 1) */}
      <div style={{ display: 'flex', gap: 8, background: 'var(--bg-card)', padding: '8px', borderRadius: 12, border: '1px solid var(--border)', overflowX: 'auto', marginBottom: 14 }} className="no-print">
        {categories.map(cat => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '10px 16px', borderRadius: 8, fontSize: 13, fontWeight: 700,
                background: isActive ? 'var(--red)' : 'transparent',
                color: isActive ? '#fff' : 'var(--mute)',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
                minWidth: 110,
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: 15 }}>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Sub Tabs Horizontal Menu (Row 2) */}
      <div style={{ display: 'flex', gap: 8, padding: '0 4px', marginBottom: 24, overflowX: 'auto' }} className="no-print">
        {activeCategory === 'theory' && [
          { id: 'vocab', label: '📋 Bảng Từ Vựng' },
          { id: 'grammar', label: '📖 Ngữ Pháp Lý Thuyết', hidden: !lessons.some(l => l.grammar) }
        ].filter(t => !t.hidden).map(sub => renderSubButton(sub.id, sub.label))}

        {activeCategory === 'vocab_practice' && [
          { id: 'flash', label: '⚡ Flash Quiz' },
          { id: 'listen', label: '🎧 Nghe & Gõ Từ' },
          { id: 'match', label: '🔗 Ghép Cặp Từ' },
          { id: 'typing', label: '⌨️ Gõ Từ Vựng' },
          { id: 'summary', label: '📝 Điền Từ Bảng' }
        ].map(sub => renderSubButton(sub.id, sub.label))}

        {activeCategory === 'sentence_practice' && [
          { id: 'grammar_quiz', label: '🧩 Luyện Ngữ Pháp', hidden: !lessons.some(l => l.grammarExercises) },
          { id: 'translate', label: '✍️ Dịch Câu Nhật' },
          { id: 'listen_sentence', label: '⌨️ Nghe Gõ Câu' }
        ].filter(t => !t.hidden).map(sub => renderSubButton(sub.id, sub.label))}

        {activeCategory === 'reading_exam' && [
          ...mergedReadings.map((_, i) => ({ id: `read${i + 1}`, label: `📑 Bài Đọc ${i + 1}` })),
          { id: 'exam', label: '📝 Thi Thử JLPT N5' }
        ].map(sub => renderSubButton(sub.id, sub.label))}

        {activeCategory === 'summary_stats' && [
          { id: 'stats', label: '📊 Tổng Kết Độ Thuộc' }
        ].map(sub => renderSubButton(sub.id, sub.label))}
      </div>

      {/* Main Content Area (Full Width) */}
      <div style={{ width: '100%', paddingBottom: 80 }}>
        {tab === 'vocab' && <VocabTab words={mergedWords} mastery={mastery} speak={speak} supported={supported} />}
        {tab === 'grammar' && lessons.some(l => l.grammar) && <GrammarTab grammar={lessons.flatMap(l => l.grammar || [])} speak={speak} supported={supported} />}
        {tab === 'grammar_quiz' && lessons.some(l => l.grammarExercises) && <GrammarQuizTab exercises={lessons.flatMap(l => l.grammarExercises || [])} speak={speak} supported={supported} />}
        {tab === 'flash' && <FlashTab words={mergedWords} mastery={mastery} onUpdate={updateMastery} speak={speak} supported={supported} />}
        {tab === 'listen' && <ListenTab words={mergedWords} mastery={mastery} onUpdate={updateMastery} speak={speak} supported={supported} />}
        {tab === 'match' && <MatchTab words={mergedWords} skipCount={masteredCount} />}
        {tab === 'typing' && <TypingTab words={mergedWords} mastery={mastery} onUpdate={updateMastery} speak={speak} supported={supported} />}
        {tab === 'summary' && <SummaryTableTab words={mergedWords} speak={speak} supported={supported} />}
        {tab === 'translate' && <TranslateTab lesson={{ words: mergedWords, readings: mergedReadings } as any} speak={speak} supported={supported} sentenceMastery={sentenceMastery} updateSentenceMastery={updateSentenceMastery} />}
        {tab === 'listen_sentence' && <ListenSentenceTab lesson={{ words: mergedWords, readings: mergedReadings } as any} speak={speak} supported={supported} sentenceMastery={sentenceMastery} updateSentenceMastery={updateSentenceMastery} />}
        {tab === 'exam' && (
          <N5ExamTab
            words={mergedWords}
            onComplete={isCombined ? undefined : (pct, rank) => {
              if ((rank === 'A' || rank === 'S') && onLessonComplete) {
                onLessonComplete(lessons[0].id);
              }
            }}
          />
        )}
        {tab.startsWith('read') && (
          <ReadingTab
            reading={mergedReadings[parseInt(tab.replace('read', '')) - 1]}
            speak={speak}
            supported={supported}
          />
        )}
        {tab === 'stats' && <StatsTab words={mergedWords} mastery={mastery} masteredCount={masteredCount} passMode={passMode} setPassMode={setPassMode} />}
      </div>
    </div>
  );
}

// ── Vocab Tab ────────────────────────────────────────────────
