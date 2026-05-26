// src/pages/ReadingSelectPage.tsx
// Trang chọn bộ Kanji để luyện đọc hiểu (tối đa 3 bộ)
import { useState, useMemo } from 'react';
import type { ReadingPassage, Progress } from '../types';
import { ReadingExercise } from './exercises/ReadingExercise';
import { cleanSentenceForN5 } from '../utils/kanji';

interface Props {
  passages: ReadingPassage[];
  progress: Progress;
  onHome: () => void;
}

// Mapping bộ Kanji → tên + ngữ pháp
const BATCH_INFO: Record<number, { label: string; grammar: string; kanjiRange: string }> = {
  1: { label: 'Bộ 1', grammar: '〜てください', kanjiRange: '一二三四五' },
  2: { label: 'Bộ 2', grammar: '〜ています', kanjiRange: '六七八九十' },
  3: { label: 'Bộ 3', grammar: '〜たいです', kanjiRange: '日月火水木' },
  4: { label: 'Bộ 4', grammar: '〜ましょう', kanjiRange: '金土山川田' },
  5: { label: 'Bộ 5', grammar: '〜てもいいですか', kanjiRange: '人口目耳手' },
  6: { label: 'Bộ 6', grammar: '〜はいけません', kanjiRange: '足力車門戸' },
  7: { label: 'Bộ 7', grammar: '〜ないでください', kanjiRange: '雨竹石糸貝' },
  8: { label: 'Bộ 8', grammar: '〜なければなりません', kanjiRange: '花草虫犬猫' },
  9: { label: 'Bộ 9', grammar: '〜なくてもいいです', kanjiRange: '男女子学生' },
  10: { label: 'Bộ 10', grammar: '〜ことができます', kanjiRange: '先王国会社' },
};

export function ReadingSelectPage({ passages, progress, onHome }: Props) {
  const [selected, setSelected] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  // Tìm các bộ có dữ liệu đọc hiểu
  const availableBatches = useMemo(() => {
    const ids = new Set<number>();
    passages.forEach(p => p.batchIds.forEach(b => ids.add(b)));
    return Array.from(ids).sort((a, b) => a - b);
  }, [passages]);

  // Chỉ cần bộ đã học (learnedIds >= 5 Kanji tương ứng)
  const unlockedBatches = useMemo(() => {
    return availableBatches.filter(batchId => {
      const startKanji = (batchId - 1) * 5 + 1;
      const endKanji = batchId * 5;
      const learned = progress.learnedIds.filter(id => id >= startKanji && id <= endKanji);
      return learned.length >= 5;
    });
  }, [availableBatches, progress.learnedIds]);

  const toggleBatch = (id: number) => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(x => x !== id));
    } else if (selected.length < 3) {
      setSelected(prev => [...prev, id]);
    }
  };

  // Lọc passages theo bộ đã chọn
  const filteredPassages = useMemo(() => {
    const rawFiltered = passages.filter(p =>
      p.batchIds.some(b => selected.includes(b))
    );
    const jlptFocus = localStorage.getItem('jlpt_focus_mode') || 'N5';
    if (jlptFocus !== 'N5') return rawFiltered;

    return rawFiltered.map(p => ({
      ...p,
      title: cleanSentenceForN5(p.title),
      lines: p.lines.map(line => ({
        ...line,
        jp: cleanSentenceForN5(line.jp),
        segments: line.segments ? line.segments.map(seg => ({
          ...seg,
          jp: cleanSentenceForN5(seg.jp),
        })) : undefined,
      })),
      questions: p.questions.map(q => ({
        ...q,
        question: cleanSentenceForN5(q.question),
        options: q.options.map(opt => cleanSentenceForN5(opt)),
      })),
      vocab: p.vocab.map(v => ({
        ...v,
        word: cleanSentenceForN5(v.word),
      }))
    }));
  }, [passages, selected]);

  if (started && filteredPassages.length > 0) {
    return (
      <ReadingExercise
        passages={filteredPassages}
        onFinish={() => {
          setStarted(false);
          setSelected([]);
        }}
      />
    );
  }

  return (
    <div className="screen" style={{ paddingTop: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <button className="btn-icon" onClick={onHome} style={{ fontSize: 20 }}>🏠</button>
        <h2 style={{ margin: 0, fontSize: 20 }}>📖 Đọc Hiểu Văn Bản</h2>
        <div style={{ width: 40 }} />
      </div>

      <p style={{ color: 'var(--mute)', fontSize: 14, textAlign: 'center', marginBottom: 24 }}>
        Chọn <strong style={{ color: 'var(--gold)' }}>tối đa 3 bộ</strong> Kanji để luyện đọc hiểu.
        <br />Đoạn văn sẽ dùng từ vựng + ngữ pháp của các bộ đã chọn.
      </p>

      {/* Grid chọn bộ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, maxWidth: 600, margin: '0 auto' }}>
        {availableBatches.map(batchId => {
          const info = BATCH_INFO[batchId];
          if (!info) return null;
          const isSelected = selected.includes(batchId);
          const isLocked = !unlockedBatches.includes(batchId);

          return (
            <button
              key={batchId}
              onClick={() => !isLocked && toggleBatch(batchId)}
              disabled={isLocked || (!isSelected && selected.length >= 3)}
              style={{
                padding: '14px 16px',
                borderRadius: 12,
                border: `2px solid ${isSelected ? 'var(--gold)' : isLocked ? 'var(--border)' : 'var(--border)'}`,
                background: isSelected ? 'rgba(255, 193, 7, 0.1)' : isLocked ? 'rgba(255,255,255,0.02)' : 'var(--bg-card)',
                cursor: isLocked ? 'not-allowed' : 'pointer',
                textAlign: 'left',
                opacity: isLocked ? 0.4 : 1,
                transition: 'all 0.2s',
                position: 'relative',
              }}
            >
              {isSelected && (
                <div style={{
                  position: 'absolute', top: -6, right: -6,
                  background: 'var(--gold)', color: 'var(--bg)',
                  width: 24, height: 24, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 14,
                }}>✓</div>
              )}
              {isLocked && (
                <div style={{
                  position: 'absolute', top: -6, right: -6,
                  background: 'var(--mute)', color: 'var(--bg)',
                  width: 24, height: 24, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12,
                }}>🔒</div>
              )}
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                {info.label}
                <span style={{ fontSize: 16, marginLeft: 6 }}>{info.kanjiRange}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--blue)', fontFamily: 'monospace' }}>
                📖 {info.grammar}
              </div>
            </button>
          );
        })}
      </div>

      {/* Info đã chọn */}
      <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--mute)' }}>
        Đã chọn: <strong style={{ color: 'var(--gold)' }}>{selected.length}/3</strong> bộ
        {selected.length > 0 && (
          <span> — {filteredPassages.length} bài đọc hiểu</span>
        )}
      </div>

      {/* Nút bắt đầu */}
      <button
        className="btn btn-primary"
        disabled={selected.length === 0 || filteredPassages.length === 0}
        onClick={() => setStarted(true)}
        style={{ display: 'block', width: '100%', maxWidth: 400, margin: '20px auto', padding: 14, fontSize: 16 }}
      >
        📖 Bắt đầu Đọc Hiểu ({filteredPassages.length} bài)
      </button>
    </div>
  );
}
