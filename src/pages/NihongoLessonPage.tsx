// src/pages/NihongoLessonPage.tsx
// Module học từ vựng theo giáo trình みんなの日本語
// Bao gồm: Vocabulary list + Flash Quiz + Nghe & Gõ + Đọc Hiểu + Bộ đếm thuộc bài

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import type { NihongoLesson, LessonWord, LessonReading } from '../data/nihongo-lessons';
import { useSpeech } from '../hooks/useSpeech';
import { VocabTab, FlashTab, ListenTab, StatsTab, MatchTab, TranslateTab, ListenSentenceTab, N5ExamTab, ReadingTab, TypingTab, GrammarTab, GrammarQuizTab, SummaryTableTab, DialogueTab } from './NihongoLessonTabs';
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

  return (
    <div className="screen" style={{ padding: '16px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 12, paddingTop: 16, borderBottom: '1px solid var(--border)', position: 'sticky', top: 50, zIndex: 40, background: 'var(--bg)' }}>
        <button className="btn-back" onClick={onHome}>← Danh sách bài</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 700, letterSpacing: 1 }}>{isCombined ? 'Tổng Ôn Luyện' : lessons[0].chapter}</div>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>
            {isCombined ? `Gộp ${lessons.length} bài học` : lessons[0].title}
            <span style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 400 }}>— {isCombined ? 'Review Mode' : lessons[0].titleVn}</span>
          </h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: masteredCount === mergedWords.length ? 'var(--green)' : 'var(--gold)' }}>
            {masteredCount}/{mergedWords.length} thuộc
          </div>
        </div>
      </div>

      {/* 2-col: sidebar + content */}
      <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 16, alignItems: 'start' }}>

        {/* LEFT SIDEBAR */}
        <div style={{ position: 'sticky', top: 140 }}>
          <div style={{ background: 'var(--bg-card)', borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden' }}>

            <div style={{ padding: '8px 12px', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)' }}>
              📚 Học & Luyện Tập
            </div>
            {([
              { id: 'vocab', icon: '📋', label: 'Từ Vựng', sub: `${mergedWords.length} từ`, hidden: isCombined },
              { id: 'grammar', icon: '📖', label: 'Ngữ Pháp', sub: 'Lý thuyết & Ví dụ', hidden: isCombined || !lessons[0]?.grammar },
              { id: 'grammar_quiz', icon: '🧩', label: 'Luyện Ngữ Pháp', sub: 'Trắc nghiệm đục lỗ', hidden: isCombined || !lessons[0]?.grammarExercises },
              { id: 'flash', icon: '⚡', label: 'Flash Quiz', sub: '' },
              { id: 'listen', icon: '🎧', label: 'Nghe & Gõ Từ', sub: '' },
              { id: 'match', icon: '🔗', label: 'Ghép Từ', sub: 'Hiragana ↔ Kanji' },
              { id: 'typing', icon: '⌨️', label: 'Gõ Từ Vựng', sub: 'Kanji ↔ Hiragana' },
              { id: 'summary', icon: '📝', label: 'Điền Từ (Bảng)', sub: 'Việt ↔ Nhật', hidden: isCombined },
              { id: 'dialogue', icon: '🗣️', label: 'Luyện Nghe', sub: 'Hội thoại thực tế', hidden: isCombined || !lessons[0]?.dialogue },
              { id: 'translate', icon: '✍️', label: 'Dịch Câu', sub: 'Việt → Nhật' },
              { id: 'listen_sentence', icon: '⌨️', label: 'Nghe Gõ Câu', sub: 'Nghe → Romaji', hidden: !supported },
              { id: 'exam', icon: '📝', label: 'Thi Thử N5', sub: 'JLPT Mock', locked: !isExamUnlocked },
            ] as const).filter(t => !t.hidden).map(t => {
              const isLocked = 'locked' in t ? t.locked : false;
              return (
              <button key={t.id} onClick={() => !isLocked && setTab(t.id as Tab)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
                border: 'none', background: tab === t.id ? 'rgba(255,196,0,0.1)' : 'transparent',
                borderLeft: `3px solid ${tab === t.id ? 'var(--gold)' : 'transparent'}`,
                cursor: isLocked ? 'not-allowed' : 'pointer', transition: 'all 0.15s', textAlign: 'left',
                opacity: isLocked ? 0.5 : 1
              }}>
                <span style={{ fontSize: 16 }}>{isLocked ? '🔒' : t.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: tab === t.id ? 800 : 600, color: tab === t.id ? 'var(--gold)' : 'var(--text)' }}>{t.label}</div>
                  {t.sub && <div style={{ fontSize: 10, color: 'var(--mute)' }}>{t.sub}</div>}
                </div>
              </button>
            )})}

            <div style={{ padding: '8px 12px', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              📖 Bài Đọc Hiểu
            </div>
            {mergedReadings.map((r, i) => {
              const tabId = `read${i + 1}`;
              const isReadingTab = tab === tabId;
              return (
                <button key={i} onClick={() => setTab(tabId)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
                  border: 'none', background: isReadingTab ? 'rgba(255,196,0,0.1)' : 'transparent',
                  borderLeft: `3px solid ${isReadingTab ? 'var(--gold)' : 'transparent'}`,
                  cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left',
                }}>
                  <span style={{ fontSize: 16 }}>📑</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: isReadingTab ? 800 : 600, color: isReadingTab ? 'var(--gold)' : 'var(--text)' }}>
                      Bài {i + 1}
                    </div>
                  </div>
                </button>
              );
            })}

            <div style={{ borderTop: '1px solid var(--border)' }}>
              <button onClick={() => setTab('stats')} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
                border: 'none', background: tab === 'stats' ? 'rgba(6,214,160,0.1)' : 'transparent',
                borderLeft: `3px solid ${tab === 'stats' ? 'var(--green)' : 'transparent'}`,
                cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left',
              }}>
                <span style={{ fontSize: 16 }}>📊</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: tab === 'stats' ? 'var(--green)' : 'var(--text)' }}>Tổng Kết</div>
                  <div style={{ fontSize: 10, color: tab === 'stats' ? 'var(--green)' : 'var(--mute)' }}>{masteredCount}/{mergedWords.length} thuộc</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ flex: 1, minWidth: 0, paddingBottom: 100 }}>
          {tab === 'vocab' && !isCombined && <VocabTab words={mergedWords} mastery={mastery} speak={speak} supported={supported} />}
          {tab === 'grammar' && !isCombined && lessons[0]?.grammar && <GrammarTab grammar={lessons[0].grammar} speak={speak} supported={supported} />}
          {tab === 'grammar_quiz' && !isCombined && lessons[0]?.grammarExercises && <GrammarQuizTab exercises={lessons[0].grammarExercises} speak={speak} supported={supported} />}
          {tab === 'flash' && <FlashTab words={mergedWords} mastery={mastery} onUpdate={updateMastery} speak={speak} supported={supported} />}
          {tab === 'listen' && <ListenTab words={mergedWords} mastery={mastery} onUpdate={updateMastery} speak={speak} supported={supported} />}
          {tab === 'match' && <MatchTab words={mergedWords} skipCount={masteredCount} />}
          {tab === 'typing' && <TypingTab words={mergedWords} mastery={mastery} onUpdate={updateMastery} speak={speak} supported={supported} />}
          {tab === 'summary' && !isCombined && <SummaryTableTab words={mergedWords} speak={speak} supported={supported} />}
          {tab === 'dialogue' && !isCombined && lessons[0]?.dialogue && <DialogueTab dialogue={lessons[0].dialogue} speak={speak} supported={supported} />}
          { tab === 'translate' && <TranslateTab lesson={{ words: mergedWords, readings: mergedReadings } as any} speak={speak} supported={supported} sentenceMastery={sentenceMastery} updateSentenceMastery={updateSentenceMastery} /> }
          { tab === 'listen_sentence' && <ListenSentenceTab lesson={{ words: mergedWords, readings: mergedReadings } as any} speak={speak} supported={supported} sentenceMastery={sentenceMastery} updateSentenceMastery={updateSentenceMastery} /> }
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
    </div>
  );
}

// ── Vocab Tab ────────────────────────────────────────────────
