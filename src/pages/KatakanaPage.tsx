// src/pages/KatakanaPage.tsx — Redesigned
import { useState, useMemo, useCallback, useEffect } from 'react';
import { KATAKANA } from '../data/katakana';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  onHome: () => void;
  onStartExercise: () => void;
}

// ── Data ──────────────────────────────────────────────────
const ROWS = [
  { label: 'A',   chars: ['ア','イ','ウ','エ','オ'] },
  { label: 'K',   chars: ['カ','キ','ク','ケ','コ'] },
  { label: 'S',   chars: ['サ','シ','ス','セ','ソ'] },
  { label: 'T',   chars: ['タ','チ','ツ','テ','ト'] },
  { label: 'N',   chars: ['ナ','ニ','ヌ','ネ','ノ'] },
  { label: 'H',   chars: ['ハ','ヒ','フ','ヘ','ホ'] },
  { label: 'M',   chars: ['マ','ミ','ム','メ','モ'] },
  { label: 'Y',   chars: ['ヤ','ユ','ヨ'] },
  { label: 'R',   chars: ['ラ','リ','ル','レ','ロ'] },
  { label: 'W/N', chars: ['ワ','ヲ','ン'] },
  // ── Hàng dễ nhầm ──────────────────────────────
  { label: '⚠️ Nhóm 1', chars: ['シ','ツ','ソ','ン','ウ','ク'], confusable: true,
    hint: 'シ・ツ (shi/tsu) · ソ・ン (so/n) · ウ・ク (u/ku)' },
  { label: '⚠️ Nhóm 2', chars: ['ア','マ','テ','チ','ナ','メ'], confusable: true,
    hint: 'ア・マ (a/ma) · テ・チ (te/chi) · ナ・メ (na/me)' },
];

type PracticeWord = { char: string; word: string; romaji: string; meaning: string; origin: string };

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[\s\-]/g, '');
}

// ── Main Page ─────────────────────────────────────────────
export function KatakanaPage({ onHome, onStartExercise }: Props) {
  const [selected, setSelected]     = useState<string | null>(null);
  const [flipped, setFlipped]       = useState(false);
  const [pickedWords, setPickedWords] = useState<PracticeWord[]>([]);
  const [practicing, setPracticing] = useState(false);
  const { speak, supported } = useSpeech();

  const MAX_PICK = 999; // không giới hạn — ôn cả hàng luôn

  const selectedData = KATAKANA.find(k => k.char === selected);

  const handleSelect = (char: string) => {
    setSelected(s => s === char ? null : char);
    setFlipped(false);
  };

  // Thêm vocab từ 1 char vào picked list
  const addVocabFromChar = useCallback((char: string) => {
    const data = KATAKANA.find(k => k.char === char);
    if (!data) return;
    setPickedWords(prev => {
      const newWords: PracticeWord[] = data.vocab
        .filter(v => !prev.find(p => p.word === v.word))
        .map(v => ({ char, word: v.word, romaji: v.romaji, meaning: v.meaning, origin: v.origin }));
      return [...prev, ...newWords];
    });
  }, []);

  // Thêm cả hàng
  const addVocabFromRow = useCallback((rowChars: string[]) => {
    const allVocab: PracticeWord[] = [];
    for (const char of rowChars) {
      const data = KATAKANA.find(k => k.char === char);
      if (data) {
        allVocab.push(...data.vocab.map(v => ({ char, word: v.word, romaji: v.romaji, meaning: v.meaning, origin: v.origin })));
      }
    }
    setPickedWords(prev => {
      const combined = [...prev];
      for (const w of allVocab) {
        if (!combined.find(p => p.word === w.word)) combined.push(w);
      }
      return combined;
    });
  }, []);

  const removeWord = (word: string) => setPickedWords(prev => prev.filter(p => p.word !== word));

  if (practicing && pickedWords.length > 0) {
    return <PracticeMode words={pickedWords} onBack={() => setPracticing(false)} speak={speak} supported={supported} />;
  }

  return (
    <div className="screen" style={{ padding: '16px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <h2 style={{ flex: 1, fontSize: 18, fontWeight: 800, margin: 0 }}>カタカナ Katakana — 46 chữ</h2>
        <button className="btn btn-primary" style={{ padding: '8px 18px', fontSize: 13 }} onClick={onStartExercise}>
          🎮 Luyện Tập
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '290px 1fr 240px', gap: 20, alignItems: 'start' }}>

        {/* ── CỘT TRÁI: Bảng chữ ─── */}
        <div style={{ position: 'sticky', top: 16 }}>
          {/* Bảng chữ */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', background: 'rgba(255,255,255,0.02)' }}>
              Bảng Katakana · Bấm để xem · Giữ để ôn
            </div>
            <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ROWS.map(row => {
                const isConfusable = (row as any).confusable;
                return (
                <div key={row.label}>
                  {/* Divider trước hàng dễ nhầm */}
                  {isConfusable && row.label.includes('1') && (
                    <div style={{ margin: '4px 0 10px', borderTop: '1px solid rgba(229,57,53,0.3)', paddingTop: 8 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: '#e53935', letterSpacing: 1, textTransform: 'uppercase' }}>⚠️ Chữ Dễ Nhầm — Ôn Kỹ!</div>
                    </div>
                  )}
                  <div style={{
                    padding: isConfusable ? '8px 8px 4px' : '0',
                    borderRadius: isConfusable ? 8 : 0,
                    background: isConfusable ? 'rgba(229,57,53,0.06)' : 'transparent',
                    border: isConfusable ? '1px dashed rgba(229,57,53,0.3)' : 'none',
                    marginBottom: isConfusable ? 4 : 0,
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: isConfusable ? '#e53935' : 'var(--mute)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      {row.label}
                      <button
                        onClick={() => addVocabFromRow(row.chars)}
                        style={{ marginLeft: 8, fontSize: 10, color: isConfusable ? '#ff7961' : 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 700 }}
                      >
                        + Ôn {isConfusable ? 'nhóm' : 'hàng'}
                      </button>
                    </div>
                    {(row as any).hint && (
                      <div style={{ fontSize: 9, color: 'rgba(229,57,53,0.7)', marginBottom: 6, fontStyle: 'italic' }}>{(row as any).hint}</div>
                    )}
                    {/* Grid cứng — tối đa 6 cột cho hàng confusable */}
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isConfusable ? 6 : 5}, 48px)`, gap: 5 }}>
                      {row.chars.map(char => {
                        const data = KATAKANA.find(k => k.char === char);
                        const isSelected = selected === char;
                        return (
                          <button
                            key={char}
                            onClick={() => handleSelect(char)}
                            style={{
                              width: 48, height: 54,
                              borderRadius: 8,
                              border: isSelected
                                ? '2px solid var(--gold)'
                                : isConfusable ? '1px solid rgba(229,57,53,0.4)' : '1px solid var(--border)',
                              background: isSelected
                                ? 'rgba(255,196,0,0.12)'
                                : isConfusable ? 'rgba(229,57,53,0.06)' : 'rgba(255,255,255,0.03)',
                              cursor: 'pointer',
                              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                              gap: 1, transition: 'all 0.15s',
                              boxShadow: isSelected ? '0 0 8px rgba(255,196,0,0.25)' : 'none',
                            }}
                          >
                            <span style={{ fontSize: 20, fontWeight: 700, color: isSelected ? 'var(--gold)' : isConfusable ? '#ff8a80' : 'var(--text)', lineHeight: 1 }}>
                              {char}
                            </span>
                            <span style={{ fontSize: 9, color: 'var(--mute)', fontFamily: 'monospace', lineHeight: 1 }}>
                              {data?.romaji}
                            </span>
                          </button>
                        );
                      })}
                      {/* Ô trống cho hàng không đủ 5 (chỉ áp dụng non-confusable) */}
                      {!isConfusable && Array.from({ length: 5 - row.chars.length }, (_, i) => (
                        <div key={`empty-${i}`} style={{ width: 48, height: 54 }} />
                      ))}
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>

        {/* ── CỘT GIỮA: Chi tiết chữ ────── */}
        {selectedData ? (
          <div>
            {/* Flashcard */}
            <div
              onClick={() => setFlipped(f => !f)}
              style={{
                background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border)',
                padding: '36px 28px', marginBottom: 14, textAlign: 'center', cursor: 'pointer',
                minHeight: 180, transition: 'all 0.3s', position: 'relative',
              }}
            >
              <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, marginBottom: 8 }}>{selectedData.char}</div>
              {!flipped ? (
                <div style={{ color: 'var(--mute)', fontSize: 13 }}>👆 Bấm để xem chi tiết</div>
              ) : (
                <div style={{ animation: 'fadeIn 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 2 }}>Romaji</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: '#64b5f6' }}>{selectedData.romaji}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 2 }}>Hiragana</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--green)' }}>{selectedData.hiragana}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--gold)', padding: '10px 14px', background: 'rgba(255,196,0,0.08)', borderRadius: 8, border: '1px dashed rgba(255,196,0,0.3)', textAlign: 'left' }}>
                    💡 {selectedData.mnemonic}
                  </div>
                </div>
              )}
              {supported && (
                <button className="btn-icon" style={{ position: 'absolute', top: 12, right: 12, fontSize: 18 }}
                  onClick={e => { e.stopPropagation(); speak(selectedData.char, 0.8); }}>🔊</button>
              )}
            </div>

            {/* Links + actions */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
              <a
                href={`https://jisho.org/search/${encodeURIComponent(selectedData.char)}%20%23kanji`}
                target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', borderRadius: 10, background: 'rgba(100,181,246,0.1)', border: '1px solid rgba(100,181,246,0.3)', color: '#64b5f6', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
              >
                ✍️ Xem nét viết Jisho
              </a>
              <button
                onClick={() => addVocabFromChar(selectedData.char)}
                disabled={selectedData.vocab.every(v => pickedWords.find(p => p.word === v.word))}
                style={{ flex: 1, padding: '10px', borderRadius: 10, background: 'rgba(255,196,0,0.1)', border: '1px solid rgba(255,196,0,0.3)', color: 'var(--gold)', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
              >
                + Thêm vào ôn tập
              </button>
            </div>

            {/* Vocab list */}
            <div style={{ background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ padding: '10px 16px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 13, background: 'rgba(255,255,255,0.02)' }}>
                📖 Từ vựng ví dụ — {selectedData.char}
              </div>
              {selectedData.vocab.map((v, i) => {
                const inPicked = !!pickedWords.find(p => p.word === v.word);
                return (
                  <div key={i} style={{ padding: '12px 16px', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                        <span style={{ fontSize: 18, fontWeight: 700 }}>{v.word}</span>
                        {supported && (
                          <button className="btn-icon" style={{ fontSize: 13 }} onClick={() => speak(v.word, 0.8)}>🔊</button>
                        )}
                      </div>
                      <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)' }}>{v.romaji}</div>
                      <div style={{ display: 'flex', gap: 12, marginTop: 2 }}>
                        <span style={{ fontSize: 13, color: 'var(--gold)' }}>{v.meaning}</span>
                        <span style={{ fontSize: 11, color: 'var(--mute)', fontStyle: 'italic' }}>← {v.origin}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (inPicked) removeWord(v.word);
                        else setPickedWords(prev => [...prev, { char: selectedData.char, word: v.word, romaji: v.romaji, meaning: v.meaning, origin: v.origin }]);
                      }}
                      style={{
                        padding: '5px 10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer',
                        background: inPicked ? 'rgba(229,57,53,0.1)' : 'rgba(255,196,0,0.1)',
                        border: inPicked ? '1px solid rgba(229,57,53,0.4)' : '1px solid rgba(255,196,0,0.4)',
                        color: inPicked ? '#e53935' : 'var(--gold)',
                      }}
                    >
                      {inPicked ? '✕' : '+'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--mute)' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>カ</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Chọn 1 chữ Katakana</div>
            <div style={{ fontSize: 13 }}>Bấm vào bảng bên trái để xem chi tiết, mẹo nhớ và từ vựng ví dụ</div>
            <div style={{ marginTop: 20, fontSize: 13, color: 'var(--mute)' }}>
              Hoặc bấm <strong style={{ color: 'var(--gold)' }}>+ Ôn hàng</strong> để thêm nhanh từ vựng cả hàng vào ôn tập
            </div>
          </div>
        )}

        {/* ── CỘT PHẢI: Vocab Picker ─────────── */}
        <div style={{ position: 'sticky', top: 16 }}>
          <div style={{ background: 'var(--bg-card)', borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>🎧 Ôn Từ Vựng</span>
              {pickedWords.length > 0 && (
                <button onClick={() => setPickedWords([])} style={{ fontSize: 10, color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer' }}>Xóa hết</button>
              )}
            </div>
            <div style={{ padding: '12px 14px' }}>
              {pickedWords.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 8px', color: 'var(--mute)', fontSize: 12 }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>🎧</div>
                  Bấm "+ Ôn hàng" hoặc<br />thêm từng từ vào đây
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12, maxHeight: 420, overflowY: 'auto' }}>
                  {pickedWords.map(w => (
                    <div key={w.word} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', background: 'rgba(255,255,255,0.04)', borderRadius: 8 }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{w.word}</div>
                        <div style={{ fontSize: 10, color: 'var(--gold)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{w.meaning}</div>
                      </div>
                      <button onClick={() => removeWord(w.word)} style={{ fontSize: 12, color: 'var(--mute)', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>✕</button>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ fontSize: 11, color: 'var(--mute)', textAlign: 'center', marginBottom: 8 }}>
                {pickedWords.length} từ đã chọn
              </div>
              <button
                className="btn btn-primary"
                style={{ width: '100%', padding: '10px', fontSize: 13, opacity: pickedWords.length === 0 ? 0.4 : 1 }}
                disabled={pickedWords.length === 0}
                onClick={() => setPracticing(true)}
              >
                🎧 Bắt Đầu Ôn
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


// ── Helpers ─────────────────────────────────────────────────
type DrillMode = 'meaning' | 'listen' | 'write' | 'phrase';

interface DrillProps {
  words: PracticeWord[];
  onBack: () => void;
  speak: (t: string, r?: number) => void;
  supported: boolean;
}

function useHotkey(callback: () => void, dep: string) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'F2' || e.key === '`' ||
        (e.ctrlKey && (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp'))) {
        e.preventDefault(); callback();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [dep]);
}

function makeOptions(words: PracticeWord[], cur: PracticeWord, key: keyof PracticeWord): string[] {
  const wrong = shuffle(words.filter(w => w.word !== cur.word)).slice(0, 3).map(w => w[key] as string);
  return shuffle([cur[key] as string, ...wrong]);
}

function ScoreBar({ idx, total, score, color }: { idx: number; total: number; score: number; color: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
      <span>{idx + 1}/{total}</span>
      <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 3, margin: '0 12px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(idx / total) * 100}%`, background: color, borderRadius: 3, transition: 'width 0.3s' }} />
      </div>
      <span style={{ color, fontWeight: 700 }}>⭐ {score}</span>
    </div>
  );
}

function ResultScreen({ score, total, onBack, onRetry }: { score: number; total: number; onBack: () => void; onRetry: () => void }) {
  const pct = score / total;
  return (
    <div style={{ textAlign: 'center', padding: '48px 20px' }}>
      <div style={{ fontSize: 72 }}>{pct >= 0.8 ? '🏆' : pct >= 0.6 ? '💪' : '📖'}</div>
      <h2 style={{ margin: '16px 0 6px' }}>{score}/{total} câu đúng</h2>
      <p style={{ color: 'var(--mute)' }}>{pct >= 0.8 ? 'Xuất sắc!' : pct >= 0.6 ? 'Tốt lắm! Ôn thêm nhé!' : 'Cần ôn thêm nhiều hơn!'}</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
        <button className="btn btn-ghost" onClick={onBack}>← Chọn kiểu ôn</button>
        <button className="btn btn-primary" onClick={onRetry}>🔄 Làm Lại</button>
      </div>
    </div>
  );
}

// ── Mode Selector ────────────────────────────────────────────
function PracticeMode({ words, onBack, speak, supported }: DrillProps) {
  const [mode, setMode] = useState<DrillMode | null>(null);

  const MODES = [
    { id: 'meaning' as DrillMode, icon: '🃏', title: 'Theo Nghĩa', desc: 'Nhìn từ Katakana → chọn nghĩa đúng', color: '#64b5f6' },
    { id: 'listen'  as DrillMode, icon: '🎧', title: 'Theo Nghe',  desc: 'Nghe phát âm → chọn từ Katakana đúng', color: 'var(--green)' },
    { id: 'write'   as DrillMode, icon: '✍️', title: 'Theo Viết',  desc: 'Nhìn nghĩa → gõ romaji từ nhớ được', color: 'var(--gold)' },
    { id: 'phrase'  as DrillMode, icon: '📖', title: 'Cụm Từ',     desc: 'Điền từ vào câu được tạo sẵn từ bộ từ này', color: '#ce93d8' },
  ];

  if (mode === 'meaning') return <MeaningDrill words={words} onBack={() => setMode(null)} speak={speak} supported={supported} />;
  if (mode === 'listen')  return <ListenDrill  words={words} onBack={() => setMode(null)} speak={speak} supported={supported} />;
  if (mode === 'write')   return <WriteDrill   words={words} onBack={() => setMode(null)} speak={speak} supported={supported} />;
  if (mode === 'phrase')  return <PhraseDrill  words={words} onBack={() => setMode(null)} speak={speak} supported={supported} />;

  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <button className="btn-back" onClick={onBack}>← Chọn từ lại</button>
        <h2 style={{ flex: 1, fontSize: 18, fontWeight: 800, margin: 0 }}>🎮 Chọn Kiểu Ôn</h2>
        <span style={{ fontSize: 13, color: 'var(--mute)' }}>{words.length} từ đã chọn</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 640, margin: '0 auto' }}>
        {MODES.map(m => (
          <button key={m.id} onClick={() => setMode(m.id)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8,
            padding: '24px 20px', borderRadius: 16, cursor: 'pointer', textAlign: 'left',
            background: 'var(--bg-card)', border: `2px solid ${m.color}22`,
            boxShadow: `0 0 20px ${m.color}11`, transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.border = `2px solid ${m.color}`; e.currentTarget.style.boxShadow = `0 0 24px ${m.color}33`; }}
            onMouseLeave={e => { e.currentTarget.style.border = `2px solid ${m.color}22`; e.currentTarget.style.boxShadow = `0 0 20px ${m.color}11`; }}
          >
            <span style={{ fontSize: 36 }}>{m.icon}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: m.color, marginBottom: 4 }}>{m.title}</div>
              <div style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.4 }}>{m.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Word chips */}
      <div style={{ marginTop: 28, padding: '14px 18px', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', maxWidth: 640, margin: '28px auto 0' }}>
        <div style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase' }}>Từ trong bộ ôn</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {words.map(w => (
            <span key={w.word} style={{ padding: '3px 10px', borderRadius: 20, background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', fontSize: 13, fontWeight: 700 }}>
              {w.word} <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 400 }}>{w.meaning}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mode 1: Theo Nghĩa ───────────────────────────────────────
function MeaningDrill({ words, onBack, speak, supported }: DrillProps) {
  const qs = useMemo(() => shuffle(words), []);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const cur = qs[idx];
  const opts = useMemo(() => makeOptions(words, cur, 'meaning'), [idx]);

  useHotkey(() => supported && speak(cur.word, 0.75), cur.word);

  const pick = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === cur.meaning) { setScore(s => s + 1); if (supported) speak(cur.word, 0.8); }
  };
  const next = () => { if (idx + 1 >= qs.length) setDone(true); else { setIdx(i => i + 1); setSelected(null); } };

  if (done) return <ResultScreen score={score} total={qs.length} onBack={onBack} onRetry={() => { setIdx(0); setSelected(null); setScore(0); setDone(false); }} />;

  return (
    <div className="screen" style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button className="btn-back" onClick={onBack}>← Kiểu ôn</button>
        <h3 style={{ flex: 1, margin: 0, fontSize: 15, fontWeight: 700 }}>🃏 Theo Nghĩa</h3>
      </div>
      <ScoreBar idx={idx} total={qs.length} score={score} color="#64b5f6" />
      <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '2px solid rgba(100,181,246,0.3)', padding: '40px 24px', textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 12 }}>{cur.word}</div>
        {supported && <button className="btn-icon" style={{ fontSize: 20 }} onClick={() => speak(cur.word, 0.75)}>🔊</button>}
        <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 8 }}>Ctrl+Space để nghe lại · Chọn nghĩa đúng</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {opts.map(opt => {
          const isRight = opt === cur.meaning;
          let bg = 'var(--bg-card)', border = '1px solid var(--border)', color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.1)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (selected === opt) { bg = 'rgba(229,57,53,0.1)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => pick(opt)} style={{ padding: '14px 12px', borderRadius: 12, border, background: bg, color, fontSize: 14, fontWeight: 600, cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s', textAlign: 'left' }}>
              {opt}
            </button>
          );
        })}
      </div>
      {selected && <button className="btn btn-primary" style={{ width: '100%', marginTop: 14, padding: 12 }} onClick={next}>{idx + 1 >= qs.length ? 'Xem kết quả 🏁' : 'Tiếp →'}</button>}
    </div>
  );
}

// ── Mode 2: Theo Nghe ────────────────────────────────────────
function ListenDrill({ words, onBack, speak, supported }: DrillProps) {
  const qs = useMemo(() => shuffle(words), []);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const cur = qs[idx];
  // options = katakana words to pick from
  const opts = useMemo(() => makeOptions(words, cur, 'word'), [idx]);

  useEffect(() => { if (supported) setTimeout(() => speak(cur.word, 0.75), 400); }, [idx]);
  useHotkey(() => supported && speak(cur.word, 0.75), cur.word);

  const pick = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === cur.word) setScore(s => s + 1);
  };
  const next = () => { if (idx + 1 >= qs.length) setDone(true); else { setIdx(i => i + 1); setSelected(null); } };

  if (done) return <ResultScreen score={score} total={qs.length} onBack={onBack} onRetry={() => { setIdx(0); setSelected(null); setScore(0); setDone(false); }} />;

  return (
    <div className="screen" style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button className="btn-back" onClick={onBack}>← Kiểu ôn</button>
        <h3 style={{ flex: 1, margin: 0, fontSize: 15, fontWeight: 700 }}>🎧 Theo Nghe</h3>
      </div>
      <ScoreBar idx={idx} total={qs.length} score={score} color="var(--green)" />
      <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '2px solid rgba(6,214,160,0.3)', padding: '40px 24px', textAlign: 'center', marginBottom: 16 }}>
        <button className="btn-icon" style={{ fontSize: 56 }} onClick={() => speak(cur.word, 0.75)}>🔊</button>
        <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 12 }}>
          Nghĩa: <strong style={{ color: 'var(--gold)' }}>{cur.meaning}</strong>
        </div>
        <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 4 }}>Ctrl+Space để nghe lại · Chọn chữ Katakana đúng</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {opts.map(opt => {
          const isRight = opt === cur.word;
          let bg = 'var(--bg-card)', border = '1px solid var(--border)', color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.1)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (selected === opt) { bg = 'rgba(229,57,53,0.1)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => pick(opt)} style={{ padding: '18px 12px', borderRadius: 12, border, background: bg, color, fontSize: 28, fontWeight: 700, cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s', textAlign: 'center' }}>
              {opt}
              {selected && isRight && <div style={{ fontSize: 11, marginTop: 4, fontWeight: 400 }}>{cur.romaji}</div>}
            </button>
          );
        })}
      </div>
      {selected && <button className="btn btn-primary" style={{ width: '100%', marginTop: 14, padding: 12 }} onClick={next}>{idx + 1 >= qs.length ? 'Xem kết quả 🏁' : 'Tiếp →'}</button>}
    </div>
  );
}

// ── Mode 3: Theo Viết ────────────────────────────────────────
function WriteDrill({ words, onBack, speak, supported }: DrillProps) {
  const qs = useMemo(() => shuffle(words), []);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const cur = qs[idx];
  useHotkey(() => supported && speak(cur.word, 0.75), cur.word);

  const check = () => {
    const ok = normalize(input) === normalize(cur.romaji);
    if (ok) { setScore(s => s + 1); setStatus('correct'); if (supported) speak(cur.word, 0.8); }
    else setStatus('wrong');
  };
  const next = () => { if (idx + 1 >= qs.length) setDone(true); else { setIdx(i => i + 1); setInput(''); setStatus('idle'); } };

  if (done) return <ResultScreen score={score} total={qs.length} onBack={onBack} onRetry={() => { setIdx(0); setInput(''); setStatus('idle'); setScore(0); setDone(false); }} />;

  return (
    <div className="screen" style={{ maxWidth: 520, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button className="btn-back" onClick={onBack}>← Kiểu ôn</button>
        <h3 style={{ flex: 1, margin: 0, fontSize: 15, fontWeight: 700 }}>✍️ Theo Viết</h3>
      </div>
      <ScoreBar idx={idx} total={qs.length} score={score} color="var(--gold)" />
      <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '2px solid rgba(244,196,48,0.3)', padding: '36px 24px', textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Nhìn nghĩa → Gõ romaji</div>
        <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--gold)', marginBottom: 4 }}>{cur.meaning}</div>
        <div style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--mute)' }}>← {cur.origin}</div>
        {status !== 'idle' && (
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 12, animation: 'fadeIn 0.2s' }}>{cur.word}</div>
        )}
        {supported && <button className="btn-icon" style={{ fontSize: 18, marginTop: 8 }} onClick={() => speak(cur.word, 0.75)}>🔊 Ctrl+Space</button>}
      </div>
      <input autoFocus className={`ex-input ${status === 'correct' ? 'correct' : status === 'wrong' ? 'wrong' : ''}`}
        value={input} onChange={e => { setInput(e.target.value); if (status === 'wrong') setStatus('idle'); }}
        onKeyDown={e => e.key === 'Enter' && status === 'idle' && input.trim() && check()}
        placeholder="Gõ romaji..." disabled={status === 'correct'} style={{ width: '100%', marginBottom: 10 }} />
      {status !== 'idle' && (
        <div style={{ padding: 10, borderRadius: 10, marginBottom: 10, animation: 'fadeIn 0.2s', background: status === 'correct' ? 'rgba(6,214,160,0.08)' : 'rgba(229,57,53,0.08)', border: `1px solid ${status === 'correct' ? 'var(--green)' : '#e53935'}`, fontSize: 13 }}>
          {status === 'correct' ? <span style={{ color: 'var(--green)', fontWeight: 700 }}>✅ Đúng! {cur.word} = {cur.romaji}</span>
            : <span style={{ color: '#e53935', fontWeight: 700 }}>❌ Đáp án: <strong>{cur.romaji}</strong> · {cur.word}</span>}
        </div>
      )}
      <div style={{ display: 'flex', gap: 8 }}>
        {status === 'idle' && <button className="btn btn-primary" style={{ flex: 1, padding: 12 }} disabled={!input.trim()} onClick={check}>Kiểm tra</button>}
        {status === 'wrong' && <><button className="btn btn-ghost" style={{ flex: 1 }} onClick={() => { setStatus('idle'); setInput(''); }}>Thử lại</button><button className="btn btn-primary" style={{ flex: 1 }} onClick={next}>Bỏ qua →</button></>}
        {status === 'correct' && <button className="btn btn-primary" style={{ flex: 1, padding: 12 }} onClick={next}>{idx + 1 >= qs.length ? 'Xem kết quả 🏁' : 'Tiếp →'}</button>}
      </div>
    </div>
  );
}

// ── Mode 4: Cụm Từ ───────────────────────────────────────────
const TMPL = [
  (w: PracticeWord) => ({ jp: `___はおいしいです。`, hint: `"${w.meaning} thật ngon"` }),
  (w: PracticeWord) => ({ jp: `___が好きです。`, hint: `"Tôi thích ${w.meaning}"` }),
  (w: PracticeWord) => ({ jp: `これは___です。`, hint: `"Đây là ${w.meaning}"` }),
  (w: PracticeWord) => ({ jp: `___を買います。`, hint: `"Tôi mua ${w.meaning}"` }),
  (w: PracticeWord) => ({ jp: `___があります。`, hint: `"Có ${w.meaning} ở đây"` }),
  (w: PracticeWord) => ({ jp: `___を使います。`, hint: `"Tôi dùng ${w.meaning}"` }),
];

function PhraseDrill({ words, onBack, speak, supported }: DrillProps) {
  const qs = useMemo(() => shuffle(words).map((w, i) => {
    const t = TMPL[i % TMPL.length](w);
    return { ...w, sentence: t.jp.replace('___', w.word), blank: t.jp, hint: t.hint };
  }), []);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const cur = qs[idx];
  const opts = useMemo(() => makeOptions(words, cur, 'word'), [idx]);

  useEffect(() => { if (supported) setTimeout(() => speak(cur.sentence, 0.7), 400); }, [idx]);
  useHotkey(() => supported && speak(cur.sentence, 0.7), cur.sentence);

  const pick = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === cur.word) { setScore(s => s + 1); if (supported) speak(cur.sentence, 0.75); }
  };
  const next = () => { if (idx + 1 >= qs.length) setDone(true); else { setIdx(i => i + 1); setSelected(null); } };

  if (done) return <ResultScreen score={score} total={qs.length} onBack={onBack} onRetry={() => { setIdx(0); setSelected(null); setScore(0); setDone(false); }} />;

  return (
    <div className="screen" style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button className="btn-back" onClick={onBack}>← Kiểu ôn</button>
        <h3 style={{ flex: 1, margin: 0, fontSize: 15, fontWeight: 700 }}>📖 Cụm Từ</h3>
      </div>
      <ScoreBar idx={idx} total={qs.length} score={score} color="#ce93d8" />
      <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '2px solid rgba(206,147,216,0.3)', padding: '32px 24px', textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: '#ce93d8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Điền từ Katakana vào câu</div>
        {/* Câu với chỗ trống */}
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 2, marginBottom: 8, lineHeight: 1.6 }}>
          {cur.blank.replace('___',
            selected
              ? <span style={{ color: selected === cur.word ? 'var(--green)' : '#e53935' }}>{cur.word}</span> as any
              : '＿＿＿'
          )}
        </div>
        {/* Hint */}
        <div style={{ fontSize: 13, color: 'var(--gold)', fontStyle: 'italic', marginBottom: 8 }}>{cur.hint}</div>
        {selected && (
          <div style={{ fontSize: 16, color: 'var(--mute)', animation: 'fadeIn 0.2s' }}>
            → <span style={{ color: 'var(--text)', fontWeight: 700 }}>{cur.sentence}</span>
          </div>
        )}
        {supported && <button className="btn-icon" style={{ fontSize: 16, marginTop: 8 }} onClick={() => speak(selected ? cur.sentence : cur.hint, 0.7)}>🔊</button>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {opts.map(opt => {
          const isRight = opt === cur.word;
          let bg = 'var(--bg-card)', border = '1px solid var(--border)', color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.1)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (selected === opt) { bg = 'rgba(229,57,53,0.1)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => pick(opt)} style={{ padding: '16px 12px', borderRadius: 12, border, background: bg, color, fontSize: 22, fontWeight: 700, cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s', textAlign: 'center' }}>
              {opt}
              <div style={{ fontSize: 10, color: 'var(--mute)', fontWeight: 400, marginTop: 4 }}>{words.find(w => w.word === opt)?.meaning}</div>
            </button>
          );
        })}
      </div>
      {selected && <button className="btn btn-primary" style={{ width: '100%', marginTop: 14, padding: 12 }} onClick={next}>{idx + 1 >= qs.length ? 'Xem kết quả 🏁' : 'Tiếp →'}</button>}
    </div>
  );
}


