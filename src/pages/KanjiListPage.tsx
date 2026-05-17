// src/pages/KanjiListPage.tsx
import { useState } from 'react';
import { KANJI_N5 } from '../data/kanji-n5';
import type { KanjiItem, Progress } from '../types';

interface Props {
  progress: Progress;
  onSelect: (k: KanjiItem) => void;
  onReviewSet: (queue: KanjiItem[]) => void;
  onHome: () => void;
}

export function KanjiListPage({ progress, onSelect, onReviewSet, onHome }: Props) {
  const [selectedSets, setSelectedSets] = useState<Set<number>>(new Set());

  const sets: KanjiItem[][] = [];
  for (let i = 0; i < KANJI_N5.length; i += 5) {
    sets.push(KANJI_N5.slice(i, i + 5));
  }

  const MAX_COMBO = 3;

  const handleToggleSet = (idx: number) => {
    setSelectedSets((prev: Set<number>) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        if (next.size >= MAX_COMBO) {
          alert(`⚠️ Tối đa ${MAX_COMBO} bộ! Bỏ chọn 1 bộ trước khi chọn thêm.`);
          return prev;
        }
        next.add(idx);
      }
      return next;
    });
  };

  const handleComboReview = () => {
    const queue: KanjiItem[] = [];
    selectedSets.forEach(idx => {
      queue.push(...sets[idx]);
    });
    // Shuffle the combined queue
    onReviewSet(queue.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <h2 style={{ flex: 1, fontSize: 16, fontWeight: 700 }}>📋 Danh Sách 22 Bộ Kanji N5</h2>
        <span style={{ fontSize: 11, color: 'var(--mute)' }}>✅ Đã học &nbsp; ⚠️ Cần ôn &nbsp; ⬜ Chưa</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {sets.map((set, idx) => {
          const allLearned = set.every(k => progress.learnedIds.includes(k.id));
          const someLearned = set.some(k => progress.learnedIds.includes(k.id));

          return (
            <div key={idx} style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius)', overflow: 'hidden', border: `1px solid ${allLearned ? 'var(--green)' : 'var(--border)'}` }}>
              <div style={{ padding: '16px 20px', display: 'flex', justifyItems: 'center', justifyContent: 'space-between', alignItems: 'center', background: allLearned ? 'rgba(6,214,160,0.1)' : 'var(--bg-panel)' }}>
                <h3 style={{ fontSize: 16, color: allLearned ? 'var(--green)' : 'var(--text)', display: 'flex', alignItems: 'center', gap: 12, cursor: someLearned ? 'pointer' : 'default' }} onClick={() => someLearned && handleToggleSet(idx)}>
                  {someLearned && (
                    <input 
                      type="checkbox" 
                      checked={selectedSets.has(idx)} 
                      onChange={() => {}} 
                      style={{ width: 18, height: 18, accentColor: 'var(--gold)', cursor: 'pointer' }} 
                    />
                  )}
                  📦 Bộ {idx + 1} <span style={{ fontSize: 12, color: 'var(--mute)' }}>(Kanji {set[0].id} - {set[set.length-1].id})</span>
                </h3>
                {someLearned && (
                  <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 13 }} onClick={(e) => { e.stopPropagation(); onReviewSet(set); }}>
                    ⚔️ Ôn Nhánh Này
                  </button>
                )}
              </div>
              <div>
                {set.map((k) => {
                  const learned = progress.learnedIds.includes(k.id);
                  const weak    = progress.weakIds.includes(k.id);
                  const badge   = weak ? '⚠️' : learned ? '✅' : '⬜';
                  return (
                    <div key={k.id} className="kl-row" style={{ padding: '8px 20px', borderTop: '1px solid var(--border)', borderBottom: 'none' }} onClick={() => onSelect(k)}>
                      <span className="kl-id">{k.id}</span>
                      <span className="kl-char">{k.kanji}</span>
                      <div className="kl-info">
                        <div className="kl-read">
                          <span style={{ color: 'var(--red-soft)' }}>{k.on}</span>
                          {' · '}
                          <span style={{ color: 'var(--blue)' }}>{k.kun}</span>
                        </div>
                        <div className="kl-mean">{k.meaning}</div>
                      </div>
                      <span className="kl-status">{badge}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {selectedSets.size >= 1 && (
        <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-panel)', border: '2px solid var(--gold)', borderRadius: 12, padding: '16px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: 24, zIndex: 100 }}>
          <div>
            <div style={{ fontSize: 13, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Chế độ Challenge (tối đa {MAX_COMBO} bộ)</div>
            <div style={{ fontSize: 16, fontWeight: 'bold' }}>Đã chọn {selectedSets.size}/{MAX_COMBO} Bộ ({selectedSets.size * 5} chữ)</div>
          </div>
          <button className="btn btn-primary" style={{ background: 'var(--gold)', color: '#000', fontSize: 16, padding: '12px 24px' }} onClick={handleComboReview}>
            ⚔️ LUYỆN TẬP CUỐN CHIẾU
          </button>
        </div>
      )}
    </div>
  );
}
