import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import type { NihongoLesson, LessonWord, LessonReading } from '../data/nihongo-lessons';
import { KANJI_N5 } from '../data/kanji-n5';
import * as wanakana from 'wanakana';

import { getWordKanjiLevel, N5_KANJI_CHARS } from '../utils/kanji';

interface WordMastery { streak: number; total: number; correct: number; }
type MasteryMap = Record<string, WordMastery>;
const MASTERY_THRESHOLD = 3;

export function getWordMastery(m: MasteryMap, id: string): WordMastery {
  return m[id] || { streak: 0, total: 0, correct: 0 };
}
export function getMasteryBadge(w: WordMastery): { icon: string; color: string; label: string } {
  if (w.correct >= 7) return { icon: '🔮', color: '#a78bfa', label: `Thuộc sâu (${w.correct})` };
  if (w.correct >= MASTERY_THRESHOLD) return { icon: '✅', color: 'var(--green)', label: 'Thuộc rồi!' };
  if (w.correct === 2) return { icon: '🔥', color: '#ff9800', label: `${w.total} lần` };
  if (w.correct === 1) return { icon: '👍', color: 'var(--gold)', label: `${w.total} lần` };
  return { icon: '👀', color: 'var(--mute)', label: w.total > 0 ? `${w.total} lần` : 'Mới' };
}
export function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }
export function buildDrillWords(words: LessonWord[], mastery: MasteryMap): LessonWord[] {
  const mastered = words.filter(w => getWordMastery(mastery, w.id).correct >= MASTERY_THRESHOLD);
  const learning = words.filter(w => getWordMastery(mastery, w.id).correct < MASTERY_THRESHOLD);
  
  if (learning.length === 0) return shuffle(mastered).slice(0, 5); // Review 5 words if fully mastered
  
  const reviewCount = Math.min(3, Math.ceil(mastered.length * 0.15)); // Keep max 3 words for review
  return shuffle([...learning, ...shuffle(mastered).slice(0, reviewCount)]);
}

export function buildDrillSentences(
  sentences: any[], 
  mastery: Record<string, { listenCount: number; translateCount: number }>, 
  type: 'listen' | 'translate'
): any[] {
  const mastered = sentences.filter(s => {
    const sm = mastery[s.jp] || { listenCount: 0, translateCount: 0 };
    return (type === 'listen' ? sm.listenCount : sm.translateCount) >= 3;
  });
  const learning = sentences.filter(s => {
    const sm = mastery[s.jp] || { listenCount: 0, translateCount: 0 };
    return (type === 'listen' ? sm.listenCount : sm.translateCount) < 3;
  });
  
  if (learning.length === 0) return shuffle(mastered).slice(0, 3);

  const reviewCount = Math.min(2, Math.ceil(mastered.length * 0.15));
  return shuffle([...learning, ...shuffle(mastered).slice(0, reviewCount)]);
}

export function VocabTab({ words, mastery, speak, supported }: {
  words: LessonWord[]; mastery: MasteryMap;
  speak: (t: string, r?: number) => void; supported: boolean;
}) {
  const [filter, setFilter] = useState<'all' | 'weak' | 'mastered'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const filtered = words.filter(w => {
    const m = getWordMastery(mastery, w.id);
    let tabMatch = true;
    if (filter === 'weak') tabMatch = m.correct < 3 && m.total > 0;
    if (filter === 'mastered') tabMatch = m.correct >= 3;
    if (!tabMatch) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      (w.word && w.word.toLowerCase().includes(q)) ||
      (w.reading && w.reading.toLowerCase().includes(q)) ||
      (w.meaning && w.meaning.toLowerCase().includes(q))
    );
  });
  const weakCount = words.filter(w => { const m = getWordMastery(mastery, w.id); return m.correct < 3 && m.total > 0; }).length;
  const masteredCount = words.filter(w => getWordMastery(mastery, w.id).correct >= 3).length;

  return (
    <div>
      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
        {([
          { key: 'all', label: `Tất cả (${words.length})` },
          { key: 'weak', label: `Cần ôn (${weakCount})` },
          { key: 'mastered', label: `Đã thuộc (${masteredCount})` },
        ] as const).map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)} style={{
            padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, cursor: 'pointer',
            border: filter === f.key ? '2px solid var(--gold)' : '1px solid var(--border)',
            background: filter === f.key ? 'rgba(255,196,0,0.12)' : 'var(--bg-card)',
            color: filter === f.key ? 'var(--gold)' : 'var(--mute)',
          }}>
            {f.label}
          </button>
        ))}
        <input 
          type="text" 
          placeholder="🔍 Tìm kiếm..." 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            marginLeft: 8,
            padding: '4px 12px',
            borderRadius: 20,
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text)',
            fontSize: 13,
            outline: 'none',
            width: 150
          }}
        />
        <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--mute)' }}>
          {filtered.length} từ · 5 thẻ/hàng
        </span>
      </div>

      {/* 5-col card grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
        {filtered.map(w => {
          const m = getWordMastery(mastery, w.id);
          const badge = getMasteryBadge(m);
          return (
            <div key={w.id} style={{
              background: 'var(--bg-card)', borderRadius: 12,
              border: '1px solid var(--border)',
              borderTop: `3px solid ${badge.color}`,
              padding: '12px 12px 10px',
              display: 'flex', flexDirection: 'column', gap: 5,
            }}>
              {/* Word + speaker */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 22, fontWeight: 800, lineHeight: 1 }}>{w.word}</span>
                  {(() => {
                    const level = getWordKanjiLevel(w.word);
                    if (level === 'N5') return <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', borderRadius: 4, fontWeight: 700 }}>N5</span>;
                    if (level === 'N4+') return <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(255, 152, 0, 0.1)', color: '#ff9800', borderRadius: 4, fontWeight: 700 }}>N4+</span>;
                    return null;
                  })()}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 13 }}>{badge.icon}</span>
                  {supported && (
                    <button className="btn-icon" style={{ fontSize: 12, padding: '2px 4px' }} onClick={() => speak(w.reading, 0.8)} title="Nghe phát âm">🔊</button>
                  )}
                  <a
                    href={`https://jisho.org/search/${encodeURIComponent(w.word)}%20%23kanji`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Xem nét viết trên Jisho.org"
                    style={{
                      fontSize: 12,
                      padding: '2px 4px',
                      borderRadius: 4,
                      background: 'rgba(100,181,246,0.15)',
                      border: '1px solid rgba(100,181,246,0.4)',
                      color: '#64b5f6',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(100,181,246,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(100,181,246,0.15)'}
                  >
                    ✍️
                  </a>
                </div>
              </div>
              {/* Reading / romaji */}
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)', lineHeight: 1.3 }}>
                {w.reading} · {w.romaji}
              </div>
              {/* Meaning */}
              <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 600, lineHeight: 1.3 }}>{w.meaning}</div>
              {/* Type + mastery */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                <span style={{ fontSize: 10, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '1px 5px', borderRadius: 4 }}>{w.type}</span>
                <span style={{ fontSize: 10, color: badge.color, fontWeight: 700 }}>{badge.label}</span>
              </div>
              {w.hint && (
                <div style={{ marginTop: 6, padding: '6px 8px', background: 'rgba(255,196,0,0.1)', border: '1px dashed rgba(255,196,0,0.3)', borderRadius: 6, fontSize: 11, color: 'var(--gold)', lineHeight: 1.4 }}>
                  💡 {w.hint}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}



// ── Poem Tab ─────────────────────────────────────────────────
export function PoemTab({ poem, words, speak, supported }: {
  poem: NihongoLesson['poem'];
  words: LessonWord[];
  speak: (t: string, r?: number) => void;
  supported: boolean;
}) {
  const [showKanji, setShowKanji] = useState(true);
  const [showRomaji, setShowRomaji] = useState(false);
  const [showVn, setShowVn] = useState(true);
  const [showNote, setShowNote] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleAutoPlay = async () => {
    if (!supported || playing) return;
    setPlaying(true);
    for (let i = 0; i < poem.lines.length; i++) {
      setActiveIdx(i);
      await new Promise<void>(res => {
        const u = new SpeechSynthesisUtterance(poem.lines[i].jp);
        u.lang = 'ja-JP'; u.rate = 0.75;
        u.onend = () => res();
        window.speechSynthesis.speak(u);
      });
      await new Promise(r => setTimeout(r, 300));
    }
    setActiveIdx(null);
    setPlaying(false);
  };
  const stopPlay = () => { window.speechSynthesis.cancel(); setPlaying(false); setActiveIdx(null); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* ── Top bar ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
        background: 'linear-gradient(135deg, rgba(167,139,250,0.12), rgba(99,102,241,0.06))',
        borderRadius: 12, border: '1px solid rgba(167,139,250,0.25)',
        padding: '10px 14px', marginBottom: 10,
      }}>
        <span style={{ fontSize: 18 }}>🎵</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 800 }}>{poem.title}</span>
          <span style={{ fontSize: 11, color: '#c4b5fd', marginLeft: 8 }}>{poem.titleVn}</span>
        </div>
        {/* Controls inline */}
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          {supported && (
            !playing
              ? <button className="btn btn-primary" style={{ fontSize: 11, padding: '4px 10px', background: '#7c3aed', border: '1px solid #7c3aed' }} onClick={handleAutoPlay}>▶ Phát</button>
              : <button className="btn btn-ghost" style={{ fontSize: 11, padding: '4px 10px' }} onClick={stopPlay}>⏹</button>
          )}
          <button className={`btn ${showKanji ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: 10, padding: '4px 8px' }} onClick={() => setShowKanji(v => !v)}>Kanji</button>
          <button className={`btn ${showRomaji ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: 10, padding: '4px 8px' }} onClick={() => setShowRomaji(v => !v)}>Romaji</button>
          <button className={`btn ${showVn ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: 10, padding: '4px 8px' }} onClick={() => setShowVn(v => !v)}>VN</button>
          <button className={`btn ${showNote ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: 10, padding: '4px 8px' }} onClick={() => setShowNote(v => !v)}>Từ</button>
        </div>
      </div>

      {/* ── Poem lines — 2 columns ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        alignContent: 'start',
      }}>
        {poem.lines.map((line, i) => {
          const isActive = activeIdx === i;
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: supported ? '1fr auto' : '1fr',
              alignItems: 'center',
              padding: '12px 14px',
              background: isActive ? 'rgba(167,139,250,0.1)' : 'var(--bg-card)',
              borderRadius: 12,
              border: `1px solid ${isActive ? 'rgba(167,139,250,0.4)' : 'var(--border)'}`,
              borderLeft: `4px solid ${isActive ? '#a78bfa' : 'transparent'}`,
              transition: 'all 0.25s',
              gap: 8,
            }}>
              {/* Main content */}
              <div>
                {/* Kanji — toggle */}
                {showKanji && (line as any).kanji && (
                  <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>
                    {(line as any).kanji}
                  </div>
                )}
                {/* JP — always visible */}
                <div style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: 0.5 }}>
                  {line.jp}
                </div>
                {/* Romaji — toggle */}
                {showRomaji && (
                  <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)', marginTop: 2 }}>
                    {line.romaji}
                  </div>
                )}
                {/* VN — toggle */}
                {showVn && (
                  <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>
                    → {line.vn}
                  </div>
                )}
                {/* Note tags — toggle */}
                {showNote && line.note && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                    {line.note.split(' · ').map(tag => (
                      <span key={tag} style={{
                        fontSize: 10, padding: '2px 6px', borderRadius: 6,
                        background: 'rgba(167,139,250,0.1)', color: '#c4b5fd',
                        border: '1px solid rgba(167,139,250,0.2)',
                      }}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              {/* Speaker btn */}
              {supported && (
                <button className="btn-icon" style={{ fontSize: 15, opacity: isActive ? 1 : 0.4, transition: 'opacity 0.2s', flexShrink: 0 }}
                  onClick={() => speak(line.jp, 0.75)}>🔊</button>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Tip footer ── */}
      <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 8, textAlign: 'center', opacity: 0.7 }}>
        💡 Đọc to 3 lần mỗi dòng · Bật <strong>Từ</strong> để xem vocab tags · Bật <strong>▶ Phát</strong> để nghe toàn bài
      </div>
    </div>
  );
}


// ── Flash Quiz Tab ────────────────────────────────────────────
export function FlashTab({ words, mastery, onUpdate, speak, supported }: {
  words: LessonWord[]; mastery: MasteryMap;
  onUpdate: (id: string, correct: boolean) => void;
  speak: (t: string, r?: number) => void; supported: boolean;
}) {
  const [session, setSession] = useState(0);
  // Dùng mastery tại thời điểm bắt đầu để xây dựng danh sách drill
  const questions = useMemo(() => buildDrillWords(words, mastery), [words, session]);
  const masteredCount = useMemo(() => words.filter(w => getWordMastery(mastery, w.id).correct >= MASTERY_THRESHOLD).length, [mastery]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const cur = questions[idx];
  
  // Ctrl+Space → nghe lại
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        if (supported && cur) speak(cur.reading, 0.8);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cur, supported, speak]);

  const options = useMemo(() => {
    const wrong = shuffle(words.filter(w => w.id !== cur.id)).slice(0, 3);
    return shuffle([cur.meaning, ...wrong.map(w => w.meaning)]);
  }, [idx]);

  const handleSelect = (opt: string) => {
    if (selected) return;
    const correct = opt === cur.meaning;
    setSelected(opt);
    onUpdate(cur.id, correct);
    if (correct) { setScore(s => s + 1); if (supported) speak(cur.reading, 0.8); }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) setDone(true);
    else { setIdx(i => i + 1); setSelected(null); setShowHint(false); }
  };

  if (done) return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 64 }}>{score / questions.length >= 0.8 ? '🏆' : '📖'}</div>
      <h3 style={{ margin: '12px 0 4px' }}>{score}/{questions.length} câu đúng</h3>
      <p style={{ color: 'var(--mute)' }}>Kết quả Flash Quiz</p>
      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setSession(s => s + 1); setIdx(0); setSelected(null); setScore(0); setDone(false); }}>
        🔄 Làm Lại
      </button>
    </div>
  );

  const pct = Math.round((idx / questions.length) * 100);
  const m = getWordMastery(mastery, cur.id);
  const badge = getMasteryBadge(m);
  const skippedCount = words.length - questions.length;

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      {skippedCount > 0 && (
        <div style={{ fontSize: 11, color: '#a78bfa', textAlign: 'center', marginBottom: 8, padding: '4px 10px', borderRadius: 20, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}>
          ⭐ {skippedCount} từ đã thuộc sâu — xuất hiện ít hơn ({words.filter(w => getWordMastery(mastery, w.id).correct >= MASTERY_THRESHOLD).length}/{words.length})
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
        <span>⚡ Flash Quiz · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      {/* Word card */}
      <div style={{ textAlign: 'center', background: 'var(--bg-card)', borderRadius: 16, padding: '32px 20px', marginBottom: 20, border: '1px solid var(--border)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 18 }} title={badge.label}>{badge.icon}</div>
        <div style={{ fontSize: 42, fontWeight: 700, marginBottom: 8 }}>{cur.word}</div>
        <div style={{ fontSize: 14, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{cur.reading} · {cur.romaji}</div>
        <div style={{ fontSize: 11, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '2px 8px', borderRadius: 4 }}>{cur.type}</div>
        {supported && (
          <div style={{ marginTop: 10 }}>
            <button className="btn-icon" style={{ fontSize: 18 }} onClick={() => speak(cur.reading, 0.8)}>🔊</button>
            <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4, opacity: 0.6 }}>
              <kbd style={{ fontSize: 9, padding: '1px 4px', borderRadius: 3, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.06)', fontFamily: 'monospace' }}>Ctrl+Space</kbd> để nghe lại
            </div>
          </div>
        )}
        {cur.hint && (
          <div style={{ marginTop: 12 }}>
            {!showHint ? (
              <button className="btn btn-ghost" style={{ fontSize: 11, padding: '4px 10px', color: 'var(--gold)' }} onClick={() => setShowHint(true)}>💡 Xem mẹo nhớ</button>
            ) : (
              <div style={{ fontSize: 12, color: 'var(--text)', background: 'rgba(255,196,0,0.1)', padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(255,196,0,0.2)', animation: 'fadeIn 0.2s' }}>💡 {cur.hint}</div>
            )}
          </div>
        )}
        <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 8 }}>Từ này có nghĩa là gì?</div>
      </div>

      {/* Options */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {options.map(opt => {
          const isSelected = selected === opt;
          const isRight = opt === cur.meaning;
          let bg = 'var(--bg-card)', border = '1px solid var(--border)', color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.15)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (isSelected) { bg = 'rgba(229,57,53,0.15)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => handleSelect(opt)} style={{ padding: '12px', borderRadius: 10, border, background: bg, color, fontSize: 13, fontWeight: 600, cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s', textAlign: 'left' }}>
              {opt}
            </button>
          );
        })}
      </div>

      <div style={{ minHeight: 46, marginBottom: 12 }}>
        {selected && (
          <div style={{ padding: 12, borderRadius: 10, background: selected === cur.meaning ? 'rgba(6,214,160,0.08)' : 'rgba(229,57,53,0.08)', border: `1px solid ${selected === cur.meaning ? 'var(--green)' : '#e53935'}`, fontSize: 13, animation: 'fadeIn 0.2s' }}>
            {selected === cur.meaning ? '✅ Đúng!' : `❌ Sai! Đáp án: ${cur.meaning}`}
            {m.total > 0 && <span style={{ float: 'right', color: badge.color }}>{badge.icon} {badge.label}</span>}
          </div>
        )}
      </div>
      <button className="btn btn-primary" style={{ width: '100%', padding: 12 }} disabled={!selected} onClick={handleNext}>
        {idx + 1 >= questions.length ? 'Xem kết quả 🏁' : 'Tiếp →'}
      </button>
    </div>
  );
}

// ── Listen & Type Tab ────────────────────────────────────────
export function ListenTab({ words, mastery, onUpdate, speak, supported }: {
  words: LessonWord[]; mastery: MasteryMap;
  onUpdate: (id: string, correct: boolean) => void;
  speak: (t: string, r?: number) => void; supported: boolean;
}) {
  const [session, setSession] = useState(0);
  const questions = useMemo(() => buildDrillWords(words, mastery), [words, session]);
  const skippedCount = words.length - questions.length;
  const inputRef = useRef<HTMLInputElement>(null);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong' | 'show'>('idle');
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const cur = questions[idx];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (supported) {
      timeout = setTimeout(() => speak(cur.reading, 0.7), 1000);
    }
    return () => clearTimeout(timeout);
  }, [idx, cur.reading, speak, supported]);

  useEffect(() => {
    if (status === 'idle') {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [status, idx]);

  // Ctrl+Space → nghe lại
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        if (supported) speak(cur.reading, 0.7);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cur, supported, speak]);

  const handleCheck = () => {
    const norm = (s: string) => s.trim().toLowerCase().replace(/[\s~～〜\-]/g, '');
    const isCorrect = norm(input) === norm(cur.romaji) || norm(input) === norm(cur.reading) || norm(input) === norm(cur.word);
    onUpdate(cur.id, isCorrect);
    if (isCorrect) { setScore(s => s + 1); setStatus('correct'); }
    else { setStatus('wrong'); }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) setDone(true);
    else { setIdx(i => i + 1); setInput(''); setStatus('idle'); }
  };

  if (done) return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 64 }}>{score / questions.length >= 0.8 ? '🎧' : '📖'}</div>
      <h3 style={{ margin: '12px 0 4px' }}>{score}/{questions.length} câu đúng</h3>
      <p style={{ color: 'var(--mute)' }}>Kết quả Nghe &amp; Gõ</p>
      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setSession(s => s + 1); setIdx(0); setInput(''); setStatus('idle'); setScore(0); setDone(false); }}>
        🔄 Làm Lại
      </button>
    </div>
  );

  const pct = Math.round((idx / questions.length) * 100);

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      {skippedCount > 0 && (
        <div style={{ fontSize: 11, color: '#a78bfa', textAlign: 'center', marginBottom: 8, padding: '4px 10px', borderRadius: 20, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}>
          ⭐ {skippedCount} từ thuộc sâu đang được ôn nhẹ
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
        <span>🎧 Nghe & Gõ · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: '#64b5f6', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      <div style={{ textAlign: 'center', background: 'var(--bg-card)', borderRadius: 16, padding: '32px 20px', marginBottom: 20, border: '1px solid var(--border)' }}>
        {status === 'idle' || status === 'wrong' ? (
          <>
            <div style={{ fontSize: 48 }}>🎧</div>
            <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 8 }}>Nghe từ vựng và gõ lại bằng romaji</div>
            <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>Nghĩa: <strong style={{ color: 'var(--gold)' }}>{cur.meaning}</strong></div>
            {supported && (
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 8, opacity: 0.6 }}>
                <kbd style={{ fontSize: 10, padding: '1px 5px', borderRadius: 4, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.06)', fontFamily: 'monospace' }}>Ctrl+Space</kbd>
                {' '}để nghe lại
              </div>
            )}
          </>
        ) : (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <div style={{ fontSize: 36, fontWeight: 700 }}>{cur.word}</div>
            <div style={{ fontSize: 14, color: 'var(--mute)', fontFamily: 'monospace' }}>{cur.reading} · {cur.romaji}</div>
            <div style={{ color: 'var(--gold)', marginTop: 4 }}>{cur.meaning}</div>
          </div>
        )}
        {supported && (
          <button className="btn-icon" style={{ fontSize: 24, marginTop: 12 }} onClick={() => speak(cur.reading, 0.7)} title="Nghe lại">🔊</button>
        )}
      </div>

      <div style={{ position: 'relative', marginBottom: 12 }}>
        <input
          ref={inputRef}
          autoFocus
          className={`ex-input ${status === 'correct' ? 'correct' : status === 'wrong' ? 'wrong' : ''}`}
          value={input}
          onChange={e => { setInput(wanakana.toKana(e.target.value, { IMEMode: true })); if (status === 'wrong') setStatus('idle'); }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if (status === 'idle') handleCheck();
              else if (status === 'correct' || status === 'show') handleNext();
            }
          }}
          placeholder="Gõ romaji của từ vừa nghe..."
          readOnly={status === 'correct' || status === 'show'}
          style={{ width: '100%', outline: 'none' }}
        />
      </div>

      {status === 'wrong' && (
        <div style={{ padding: 12, borderRadius: 10, background: 'rgba(229,57,53,0.08)', border: '1px solid #e53935', marginBottom: 12, fontSize: 13 }}>
          ❌ Chưa đúng! Thử lại hoặc bấm "Xem đáp án"
        </div>
      )}
      {status === 'correct' && (
        <div style={{ padding: 12, borderRadius: 10, background: 'rgba(6,214,160,0.08)', border: '1px solid var(--green)', marginBottom: 12, fontSize: 13, animation: 'fadeIn 0.2s' }}>
          ✅ Đúng! <strong>{cur.word}</strong> = {cur.meaning}
        </div>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        {status !== 'correct' && status !== 'show' && (
          <>
            <button className="btn btn-primary" style={{ flex: 1 }} disabled={!input.trim()} onClick={handleCheck}>Kiểm tra</button>
            {status === 'wrong' && (
              <button className="btn btn-ghost" onClick={() => { setStatus('show'); onUpdate(cur.id, false); }}>Xem đáp án</button>
            )}
          </>
        )}
        {(status === 'correct' || status === 'show') && (
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleNext}>
            {idx + 1 >= questions.length ? 'Xem kết quả 🏁' : 'Tiếp →'}
          </button>
        )}
      </div>
    </div>
  );
}

// ── Reading Tab ───────────────────────────────────────────────
export function ReadingTab({ reading, speak, supported }: {
  reading: NihongoLesson['readings'][0];
  speak: (t: string, r?: number) => Promise<void>; supported: boolean;
}) {
  const [mode, setMode] = useState<'read' | 'listen'>('read');
  const [showKanji, setShowKanji] = useState(true);
  const [showVn, setShowVn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [revealText, setRevealText] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playIdx, setPlayIdx] = useState(-1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const correctCount = reading.questions.filter((q, i) => answers[i] === q.answer).length;
  const answeredAll = Object.keys(answers).length >= reading.questions.length;
  const isListen = mode === 'listen';

  const switchMode = (m: 'read' | 'listen') => {
    setMode(m); setAnswers({}); setChecked(false);
    setRevealText(false); setPlayIdx(-1); setPlaying(false); setShowVn(false); setShowRomaji(false);
  };

  const playAll = async () => {
    if (!supported || playing) return;
    setPlaying(true);
    for (let i = 0; i < reading.lines.length; i++) {
      setPlayIdx(i);
      await speak(reading.lines[i].jp, 0.7);
      await new Promise(r => setTimeout(r, 1500));
    }
    setPlayIdx(-1);
    setPlaying(false);
  };

  return (
    <div>
      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center' }}>
        {(['read', 'listen'] as const).map(m => (
          <button key={m} onClick={() => switchMode(m)} style={{
            padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700, cursor: 'pointer',
            border: mode === m ? `2px solid ${m === 'read' ? 'var(--gold)' : '#64b5f6'}` : '1px solid var(--border)',
            background: mode === m ? `rgba(${m === 'read' ? '255,196,0' : '100,181,246'},0.12)` : 'var(--bg-card)',
            color: mode === m ? (m === 'read' ? 'var(--gold)' : '#64b5f6') : 'var(--mute)',
          }}>
            {m === 'read' ? '📖 Đọc Hiểu' : '🎧 Nghe Hiểu'}
          </button>
        ))}
        {isListen && <span style={{ marginLeft: 'auto', fontSize: 11, color: '#64b5f6', fontStyle: 'italic' }}>Nghe → trả lời → xem lại bài</span>}
      </div>

      {/* 2-col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

        {/* LEFT */}
        <div style={{ background: 'var(--bg-card)', borderRadius: 14, border: `1px solid ${isListen ? 'rgba(100,181,246,0.3)' : 'var(--border)'}`, padding: '18px 20px', position: 'sticky', top: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>
              {reading.title}
              <span style={{ fontSize: 12, color: 'var(--mute)', fontWeight: 400, marginLeft: 6 }}>— {reading.titleVn}</span>
            </h3>
            <div style={{ display: 'flex', gap: 5 }}>
              {isListen && supported && (
                <button className="btn btn-ghost" style={{ fontSize: 11, padding: '3px 8px', color: '#64b5f6', border: '1px solid rgba(100,181,246,0.3)' }}
                  onClick={playAll} disabled={playing}>
                  {playing ? `⏵ ${playIdx + 1}/${reading.lines.length}` : '▶ Phát toàn bài'}
                </button>
              )}
              {!isListen && (
                <>
                  <button className="btn btn-ghost" style={{ fontSize: 11, padding: '3px 8px' }} onClick={() => setShowKanji(v => !v)}>
                    {showKanji ? '🙈 Kanji' : '👁️ Kanji'}
                  </button>
                  <button className="btn btn-ghost" style={{ fontSize: 11, padding: '3px 8px' }} onClick={() => setShowRomaji(v => !v)}>
                    {showRomaji ? '🙈 Romaji' : '👁️ Romaji'}
                  </button>
                  <button className="btn btn-ghost" style={{ fontSize: 11, padding: '3px 8px' }} onClick={() => setShowVn(v => !v)}>
                    {showVn ? '🙈 Dịch' : '👁️ Dịch'}
                  </button>
                </>
              )}
              {isListen && checked && (
                <button className="btn btn-ghost" style={{ fontSize: 11, padding: '3px 8px' }} onClick={() => setRevealText(v => !v)}>
                  {revealText ? '🙈 Ẩn' : '👁️ Xem lại'}
                </button>
              )}
            </div>
          </div>

          {isListen && !revealText && (
            <div style={{ background: 'rgba(100,181,246,0.07)', border: '1px dashed rgba(100,181,246,0.25)', borderRadius: 8, padding: '10px 14px', marginBottom: 12, fontSize: 12, color: '#64b5f6', textAlign: 'center' }}>
              🎧 Bài đọc đang ẩn · Nhấn ▶ để nghe, rồi trả lời câu hỏi
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {reading.lines.map((line, i) => {
              const isCur = playIdx === i;
              const blurred = isListen && !revealText;
              return (
                <div key={i} style={{
                  borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: 10,
                  background: isCur ? 'rgba(100,181,246,0.08)' : 'transparent',
                  borderRadius: isCur ? 8 : 0,
                  padding: isCur ? '8px 10px' : '0 0 10px',
                  transition: 'all 0.25s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <div style={{ flex: 1, filter: blurred ? 'blur(6px)' : 'none', userSelect: blurred ? 'none' : 'auto', transition: 'filter 0.3s' }}>
                      {/* Kanji toggle */}
                      {showKanji && (line as any).kanji && (
                        <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.4, marginBottom: 4, color: 'var(--text)' }}>
                          {(line as any).kanji}
                        </div>
                      )}
                      {/* Hiragana always visible */}
                      <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                        {line.jp}
                      </div>
                    </div>
                    {supported && (
                      <button className="btn-icon" style={{ fontSize: 12, flexShrink: 0, color: isCur ? '#64b5f6' : undefined }}
                        onClick={() => { setPlayIdx(i); speak(line.jp, 0.75); setTimeout(() => setPlayIdx(-1), 2500); }}>🔊</button>
                    )}
                  </div>
                  {(!blurred && showRomaji) && (
                    <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)', marginTop: 2, transition: 'filter 0.3s' }}>
                      {line.romaji}
                    </div>
                  )}
                  {!blurred && (showVn || (isListen && revealText)) && (
                    <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 3, animation: 'fadeIn 0.2s' }}>→ {line.vn}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 14, color: isListen ? '#64b5f6' : 'var(--gold)' }}>
              {isListen ? '🎧 Câu hỏi nghe hiểu' : '📝 Câu hỏi đọc hiểu'}
            </h4>
            {checked && (
              <span style={{ fontSize: 13, fontWeight: 700, color: correctCount === reading.questions.length ? 'var(--green)' : 'var(--gold)' }}>
                {correctCount}/{reading.questions.length} đúng
              </span>
            )}
          </div>

          {reading.questions.map((q, qi) => {
            const selected = answers[qi];
            const isCheckedCorrect = checked && selected === q.answer;
            return (
              <div key={qi} style={{
                background: 'var(--bg-card)', borderRadius: 12, padding: '14px', border: '1px solid var(--border)',
                borderLeft: checked ? `3px solid ${isCheckedCorrect ? 'var(--green)' : '#e53935'}` : '1px solid var(--border)',
              }}>
                <div style={{ fontWeight: 600, marginBottom: 10, fontSize: 13, lineHeight: 1.4 }}>
                  {qi + 1}. {q.question}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {q.options.map(opt => {
                    const isSelected = selected === opt;
                    const isRight = opt === q.answer;
                    const accent = isListen ? '#64b5f6' : 'var(--gold)';
                    let bg = 'transparent', border = '1px solid var(--border)', color = 'var(--text)';
                    if (isSelected && !checked) { bg = isListen ? 'rgba(100,181,246,0.1)' : 'rgba(255,196,0,0.1)'; border = `1px solid ${accent}`; color = accent; }
                    if (checked && isRight) { bg = 'rgba(6,214,160,0.1)'; border = '1px solid var(--green)'; color = 'var(--green)'; }
                    if (checked && isSelected && !isRight) { bg = 'rgba(229,57,53,0.1)'; border = '1px solid #e53935'; color = '#e53935'; }
                    return (
                      <button key={opt} onClick={() => { if (!checked) setAnswers(prev => ({ ...prev, [qi]: opt })); }}
                        style={{ padding: '7px 10px', borderRadius: 7, border, background: bg, color, fontSize: 12, cursor: checked ? 'default' : 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {!checked ? (
            <button className="btn btn-primary" style={{ padding: '10px', fontSize: 13 }}
              disabled={!answeredAll} onClick={() => setChecked(true)}>
              ✅ Kiểm tra đáp án ({Object.keys(answers).length}/{reading.questions.length})
            </button>
          ) : (
            <button className="btn btn-ghost" style={{ padding: '10px', fontSize: 13 }}
              onClick={() => { setAnswers({}); setChecked(false); setRevealText(false); }}>
              🔄 Làm lại
            </button>
          )}
        </div>
      </div>
    </div>
  );
}



// ── Stats Tab ────────────────────────────────────────────────
export function StatsTab({ words, mastery, masteredCount, passMode, setPassMode }: {
  words: LessonWord[]; mastery: MasteryMap; masteredCount: number;
  passMode?: 'strict' | 'flexible'; setPassMode?: (mode: 'strict' | 'flexible') => void;
}) {
  const sorted = [...words].sort((a, b) => {
    const ma = getWordMastery(mastery, a.id);
    const mb = getWordMastery(mastery, b.id);
    return mb.total - ma.total;
  });

  const totalAttempts = words.reduce((sum, w) => sum + getWordMastery(mastery, w.id).total, 0);
  const avgAttempts = words.length > 0 ? (totalAttempts / words.length).toFixed(1) : '0';
  const notStarted = words.filter(w => getWordMastery(mastery, w.id).total === 0).length;
  const learning = words.filter(w => { const m = getWordMastery(mastery, w.id); return m.total > 0 && m.correct < 3; }).length;

  const kanjiStats = useMemo(() => {
    const chars = new Set<string>();
    words.forEach(w => {
      const kanjis = w.word.match(/[\u4e00-\u9faf]/g);
      if (kanjis) kanjis.forEach(k => chars.add(k));
    });
    let n5 = 0;
    let n4plus = 0;
    chars.forEach(c => {
      if (N5_KANJI_CHARS.has(c)) n5++;
      else n4plus++;
    });
    return { total: chars.size, n5, n4plus };
  }, [words]);

  return (
    <div>
      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { icon: '✅', label: 'Thuộc rồi', value: masteredCount, color: 'var(--green)' },
          { icon: '💛', label: 'Đang học', value: learning, color: 'var(--gold)' },
          { icon: '🌱', label: 'Chưa học', value: notStarted, color: 'var(--mute)' },
          { icon: '🔁', label: 'Lần ôn TB/từ', value: avgAttempts, color: 'var(--blue-light)' },
        ].map(s => (
          <div key={s.label} style={{ background: 'var(--bg-card)', borderRadius: 12, padding: '16px 12px', textAlign: 'center', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 28 }}>{s.icon}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
          <span>Tiến độ thuộc bài</span>
          <span style={{ fontWeight: 700, color: 'var(--gold)' }}>{masteredCount}/{words.length} từ ({Math.round(masteredCount / words.length * 100)}%)</span>
        </div>
        <div style={{ height: 10, background: 'var(--surface-alt)', borderRadius: 5, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(masteredCount / words.length) * 100}%`, background: 'var(--green)', borderRadius: 5, transition: 'width 0.6s' }} />
        </div>
      </div>

      {/* Kanji Stats */}
      {kanjiStats.total > 0 && (
        <div style={{ marginBottom: 24, padding: 16, background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>⛩️ Thống kê Kanji xuất hiện trong bài</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--gold)' }}>{kanjiStats.total}</div>
              <div style={{ fontSize: 11, color: 'var(--mute)' }}>Tổng chữ Kanji</div>
            </div>
            <div style={{ width: 1, background: 'var(--border)' }} />
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#4caf50' }}>{kanjiStats.n5}</div>
              <div style={{ fontSize: 11, color: 'var(--mute)' }}>Kanji N5 (Cần biết viết)</div>
            </div>
            <div style={{ width: 1, background: 'var(--border)' }} />
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#ff9800' }}>{kanjiStats.n4plus}</div>
              <div style={{ fontSize: 11, color: 'var(--mute)' }}>Kanji N4+ (Chỉ cần nhớ mặt)</div>
            </div>
          </div>
        </div>
      )}

      {/* Settings */}
      {passMode && setPassMode && (
        <div style={{ marginBottom: 24, padding: 16, background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>⚙️ Điều Kiện Qua Bài (Mở khóa Thi Thử)</div>
              <div style={{ fontSize: 12, color: 'var(--mute)' }}>
                {passMode === 'strict' 
                  ? 'Kỷ luật thép: Phải thuộc 100% Từ Vựng VÀ 100% Câu Văn.' 
                  : 'Linh động: Chỉ cần thuộc 100% Từ Vựng HOẶC 100% Câu Văn.'}
              </div>
            </div>
            <button 
              onClick={() => setPassMode(passMode === 'strict' ? 'flexible' : 'strict')}
              style={{
                padding: '6px 12px', borderRadius: 20, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 12,
                background: passMode === 'strict' ? 'var(--gold)' : 'var(--green)', color: '#000', transition: 'all 0.2s'
              }}
            >
              {passMode === 'strict' ? 'Đang bật: Khắt Khe' : 'Đang bật: Linh Động'}
            </button>
          </div>
        </div>
      )}

      {/* Per-word breakdown */}
      <h4 style={{ color: 'var(--gold)', marginBottom: 12 }}>📊 Chi tiết từng từ (sắp xếp theo số lần ôn)</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {sorted.map(w => {
          const m = getWordMastery(mastery, w.id);
          const badge = getMasteryBadge(m);
          const pct = m.total > 0 ? Math.round((m.correct / m.total) * 100) : 0;
          return (
            <div key={w.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <span style={{ fontSize: 16 }}>{badge.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{w.word}</span>
                  <span style={{ fontSize: 12, color: 'var(--gold)' }}>{w.meaning}</span>
                </div>
                <div style={{ height: 4, background: 'var(--surface-alt)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: m.streak >= 3 ? 'var(--green)' : 'var(--gold)', borderRadius: 2 }} />
                </div>
              </div>
              <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--mute)', minWidth: 60 }}>
                {m.total > 0 ? <><div style={{ color: badge.color, fontWeight: 700 }}>{m.total} lần</div><div>{pct}% đúng</div></> : <span>Chưa học</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Match Tab (Ghép Từ) ───────────────────────────────────────────
export function MatchTab({ words, skipCount }: { words: LessonWord[], skipCount: number }) {
  const [cards, setCards] = useState<{ id: string, text: string, pairId: string, side: 'word' | 'romaji' }[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [activeWordId, setActiveWordId] = useState<string | null>(null);

  const initGame = useCallback(() => {
    // Chỉ chọn những từ có Kanji (từ gốc khác với cách đọc hiragana)
    const kanjiWords = words.filter(w => w.word !== w.reading);

    // Xây dựng pool bằng cách chọn tối đa 8 từ có Kanji (để có 16 thẻ)
    const pool = [...kanjiWords].sort(() => Math.random() - 0.5).slice(0, 8);
    const built: any[] = [];
    pool.forEach((w, i) => {
      const pairId = w.id; // Lưu id thực tế của từ để lấy data hiển thị sau này
      built.push({ id: `w_${w.id}`, text: w.word, pairId, side: 'word' });
      built.push({ id: `r_${w.id}`, text: w.reading, pairId, side: 'romaji' }); // Note: side ID kept as 'romaji' for styling, but it displays reading (Hiragana/Katakana)
    });
    setCards(built.sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched(new Set());
    setWrong([]);
    setMoves(0);
    setActiveWordId(null);
  }, [words]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleClick = (card: any) => {
    // Nếu bấm vào thẻ đã match, show popup thông tin chữ Hán
    if (matched.has(card.pairId)) {
      setActiveWordId(card.pairId);
      return;
    }

    // Bấm vào thẻ Kanji (word) → luôn hiện bảng phân tích bộ thủ
    if (card.side === 'word') {
      setActiveWordId(card.pairId);
    }

    if (wrong.length > 0 || flipped.includes(card.id) || flipped.length >= 2) return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [id1, id2] = newFlipped;
      const c1 = cards.find(c => c.id === id1)!;
      const c2 = cards.find(c => c.id === id2)!;

      if (c1.pairId === c2.pairId && c1.side !== c2.side) {
        setMatched(new Set([...matched, c1.pairId]));
        setFlipped([]);
        // Khi match thành công, lập tức hiện thông tin Hán Việt
        setActiveWordId(c1.pairId);
      } else {
        setWrong(newFlipped);
        setTimeout(() => { setWrong([]); setFlipped([]); }, 800);
      }
    }
  };

  const total = cards.length / 2;
  const pct = total === 0 ? 0 : Math.round((matched.size / total) * 100);
  const activeWord = words.find(w => w.id === activeWordId);

  return (
    <div style={{ display: 'flex', gap: 20, maxWidth: activeWord && activeWord.kanjiBreakdown ? 960 : 700, margin: '0 auto', paddingTop: 20, transition: 'max-width 0.3s ease-out' }}>

      {/* CỘT TRÁI: Bàn chơi game */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {skipCount > 0 && (
          <div style={{ fontSize: 11, color: '#a78bfa', textAlign: 'center', marginBottom: 8, padding: '4px 10px', borderRadius: 20, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}>
            ⭐ Tập trung ôn các từ ngẫu nhiên trong bài
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--mute)' }}>🔗 Ghép Đôi Từ Vựng</span>
          <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--mute)' }}>
            <span>✅ {matched.size}/{total} cặp</span>
            <span>🎯 {moves} lần chọn</span>
          </div>
        </div>
        <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'var(--green)', borderRadius: 3, transition: 'width 0.4s' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {cards.map(card => {
            const isMatched = matched.has(card.pairId);
            const isFlipped = flipped.includes(card.id);
            const isWrong = wrong.includes(card.id);
            const isWord = card.side === 'word';
            const isActive = activeWordId === card.pairId;

            let bg = 'var(--bg-card)', border = '1px solid var(--border)', color = 'var(--text)', transform = 'scale(1)', opacity = '1';

            if (isMatched) {
              bg = isActive ? 'rgba(76,175,80,0.25)' : 'rgba(76,175,80,0.12)';
              border = isActive ? '2px solid var(--green)' : '1.5px solid var(--green)';
              color = 'var(--green)';
              opacity = isActive ? '1' : '0.4';
            }
            else if (isWrong) { bg = 'rgba(229,57,53,0.15)'; border = '1.5px solid #e53935'; color = '#e53935'; transform = 'scale(0.96)'; }
            else if (isFlipped) { bg = isWord ? 'rgba(33,150,243,0.15)' : 'rgba(255,193,7,0.12)'; border = isWord ? '1.5px solid var(--blue)' : '1.5px solid var(--gold)'; color = isWord ? 'var(--blue)' : 'var(--gold)'; transform = 'scale(1.03)'; }

            return (
              <button key={card.id} onClick={() => handleClick(card)} style={{ background: bg, border, borderRadius: 10, padding: '10px 8px', minHeight: 80, fontSize: card.text.length > 20 ? 11 : isWord ? 20 : 13, fontWeight: 700, color, cursor: 'pointer', transform, opacity, transition: 'all 0.18s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', whiteSpace: 'pre-line', gap: 4 }}>
                {isMatched && <span style={{ fontSize: 14 }}>✅</span>}
                <span>{card.text}</span>
                {isWord && (() => {
                  const level = getWordKanjiLevel(card.text);
                  if (level === 'N5') return <span style={{ fontSize: 9, padding: '1px 5px', background: 'rgba(76, 175, 80, 0.15)', color: '#4caf50', borderRadius: 4, fontWeight: 700, border: '1px solid rgba(76, 175, 80, 0.3)', marginTop: 2 }}>N5</span>;
                  if (level === 'N4+') return <span style={{ fontSize: 9, padding: '1px 5px', background: 'rgba(255, 152, 0, 0.15)', color: '#ff9800', borderRadius: 4, fontWeight: 700, border: '1px solid rgba(255, 152, 0, 0.3)', marginTop: 2 }}>N4+</span>;
                  return null;
                })()}
              </button>
            );
          })}
        </div>

        {matched.size === total && total > 0 && (
          <div style={{ marginTop: 24, padding: 20, borderRadius: 12, background: 'rgba(76,175,80,0.1)', border: '1px solid var(--green)', textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--green)' }}>Đã ghép xong {total} cặp trong {moves} lần chọn!</div>
            <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={initGame}>
              Ván mới
            </button>
          </div>
        )}
      </div>

      {/* CỘT PHẢI: Bảng phân tích Kanji */}
      {activeWord && activeWord.kanjiBreakdown && (
        <div style={{ width: 280, flexShrink: 0, background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--gold)', padding: 20, alignSelf: 'flex-start', position: 'sticky', top: 20, animation: 'fadeInRight 0.3s' }}>
          <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 16, letterSpacing: 1, borderBottom: '1px solid rgba(255,196,0,0.2)', paddingBottom: 8 }}>
            ⛩️ Phân tích Kanji
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, color: 'var(--text)' }}>{activeWord.word}</div>
            <div style={{ fontSize: 14, fontFamily: 'monospace', color: 'var(--mute)', paddingBottom: 6 }}>{activeWord.reading}</div>
          </div>

          <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 16 }}>
            Âm Hán Việt: <strong style={{ color: 'var(--gold)', fontSize: 15 }}>{activeWord.kanjiBreakdown.hanviet}</strong>
          </div>

          <div style={{ fontSize: 12, background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: 8, marginBottom: 12, border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--mute)', marginBottom: 6, fontWeight: 700, fontSize: 11 }}>BỘ THỦ CẤU THÀNH:</div>
            <div style={{ color: '#64b5f6', lineHeight: 1.4 }}>{activeWord.kanjiBreakdown.components}</div>
          </div>

          <div style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>
            <div style={{ color: 'var(--mute)', marginBottom: 4, fontWeight: 700, fontSize: 11 }}>CÂU CHUYỆN GHI NHỚ:</div>
            <div style={{ color: 'var(--green)' }}>{activeWord.kanjiBreakdown.story}</div>
          </div>

          {activeWord.kanjiBreakdown.examples && (
            <div style={{ fontSize: 12, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
              <div style={{ color: 'var(--mute)', marginBottom: 4, fontWeight: 700, fontSize: 11 }}>VÍ DỤ TỪ GHÉP:</div>
              <div style={{ color: 'var(--text)', lineHeight: 1.4 }}>{activeWord.kanjiBreakdown.examples}</div>
            </div>
          )}

          <a 
            href={`https://jisho.org/search/${activeWord.word}%20%23kanji`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block', marginTop: 16, padding: '8px 0', background: 'rgba(255,196,0,0.1)', color: 'var(--gold)', textAlign: 'center', borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 700, border: '1px solid rgba(255,196,0,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,196,0,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,196,0,0.1)'}
          >
            ✍️ Xem cách viết nét chữ
          </a>

          <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 16, fontStyle: 'italic', opacity: 0.7, textAlign: 'center' }}>
            Nhấp vào thẻ xanh để xem lại các từ đã ghép
          </div>
        </div>
      )}

      {activeWord && !activeWord.kanjiBreakdown && (
        <div style={{ width: 280, flexShrink: 0, fontFamily: 'monospace', fontSize: 12, color: 'var(--mute)', alignSelf: 'center', textAlign: 'center', padding: 20, border: '1px dashed var(--border)', borderRadius: 12 }}>
          (Chữ Kanji này chưa có dữ liệu phân tích bộ thủ)
        </div>
      )}
    </div>
  );
}

// ── Translate Tab (Dịch Tiếng Việt -> Tiếng Nhật) ─────────────────
export function TranslateTab({ lesson, speak, supported, sentenceMastery, updateSentenceMastery }: { lesson: NihongoLesson, speak: (t: string, r?: number) => void, supported: boolean, sentenceMastery: Record<string, { listenCount: number; translateCount: number }>, updateSentenceMastery: (k: string, t: 'listen' | 'translate') => void }) {
  const [session, setSession] = useState(0);

  const sentences = useMemo(() => {
    const list: any[] = [];
    lesson.readings.forEach(r => list.push(...r.lines));
    if (lesson.poem) list.push(...lesson.poem.lines);
    return buildDrillSentences(list, sentenceMastery, 'translate');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.readings, lesson.poem, session]);

  const [idx, setIdx] = useState(0);
  const cur = sentences[idx];
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'wrong' | 'correct' | 'show'>('idle');
  const [score, setScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === 'idle') setTimeout(() => inputRef.current?.focus(), 50);
  }, [status, idx]);

  // Ctrl+Space → nghe lại câu hiện tại
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        if (supported && cur) speak((cur as any).kanji || cur.jp, 0.8);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cur, supported, speak]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const kana = wanakana.toKana(text, { IMEMode: true });
    setInput(kana);
    if (status === 'wrong') setStatus('idle');
  };

  const removePunctuation = (s: string) => {
    let clean = s.trim().normalize('NFKC');
    // Xóa an toàn tiền tố hội thoại A:, B: (kể cả khi đã bị wanakana convert thành thường a:, b:)
    clean = clean.replace(/^[a-zA-Z][：:]\s*/, '');
    // Xóa bỏ khoảng trắng và các dấu câu tiếng Nhật / Anh / Các loại dấu gạch ngang, ngoặc vuông, ngoặc kép
    clean = clean.replace(/[\s。、？！?!—\-–~〜・「」『』（）()\[\]【】'".,]/g, '');
    return clean.toLowerCase();
  };

  const normalizeAcronyms = (str: string) => {
    return str
      .replace(/ディーブイディ[ー]?/g, 'dvd')
      .replace(/エーティーエム/g, 'atm')
      .replace(/アイエムシ[ー]?/g, 'imc')
      .replace(/エーケーシ[ー]?/g, 'akc')
      .replace(/ジェーティーシ[ー]?/g, 'jtc')
      .replace(/シーディ[ー]?/g, 'cd');
  };

  const handleCheck = () => {
    if (status === 'correct' || status === 'show' || !input.trim()) return;

    // Tiền xử lý cur.jp: Xóa A:, B:, dấu câu TRƯỚC, sau đó mới toHiragana. 
    // Tránh việc chữ 'A' bị quy đổi thành 'あ' làm sai lệch kết quả.
    const expected = wanakana.toHiragana(removePunctuation(cur.jp || ''));

    let actual = removePunctuation(input);
    actual = normalizeAcronyms(actual);
    const actualHiragana = wanakana.toHiragana(actual);
    const romajiCheck = removePunctuation(cur.romaji || '');

    if (actual === expected || actual === romajiCheck || actualHiragana === expected) {
      setStatus('correct');
      setScore(s => s + 1);
      if (supported) speak((cur as any).kanji || cur.jp, 0.8);
      updateSentenceMastery(cur.jp || '', 'translate');
    } else {
      setStatus('wrong');
    }
  };

  const handleNext = () => {
    setIdx(i => i + 1);
    setInput('');
    setStatus('idle');
  };

  if (idx >= sentences.length) return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 64 }}>🎓</div>
      <h3 style={{ margin: '12px 0 4px' }}>{score}/{sentences.length} câu</h3>
      <p style={{ color: 'var(--mute)' }}>Hoàn thành bài tập Dịch câu!</p>
      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setSession(s => s + 1); setIdx(0); setScore(0); setInput(''); setStatus('idle'); }}>🔄 Làm Lại</button>
    </div>
  );

  const progress = Math.round((idx / sentences.length) * 100);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', paddingTop: 20 }}>
      {sentences.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>Chưa có dữ liệu bài đọc cho bài này.</div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
            <span>✍️ Dịch Câu · {idx + 1}/{sentences.length}</span>
            <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
          </div>
          <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#64b5f6', borderRadius: 3, transition: 'width 0.4s' }} />
          </div>

          <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: '32px 20px', marginBottom: 20, border: '1px solid var(--border)', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 11, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 6, display: 'flex', gap: 6 }}>
              <span>✍️ {(sentenceMastery[cur.jp || '']?.translateCount || 0)}/3</span>
              <span>🎧 {(sentenceMastery[cur.jp || '']?.listenCount || 0)}/3</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--mute)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Dịch câu sau:</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--gold)', lineHeight: 1.4 }}>{cur.vn}</div>
            {supported && (
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 12, opacity: 0.6 }}>
                <kbd style={{ fontSize: 10, padding: '1px 5px', borderRadius: 4, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.06)', fontFamily: 'monospace' }}>Ctrl+Space</kbd>
                {' '}để nghe câu
              </div>
            )}
          </div>

          {(status === 'show' || status === 'correct') && (
            <div style={{ padding: '16px', borderRadius: 12, background: status === 'correct' ? 'rgba(6,214,160,0.1)' : 'rgba(100,181,246,0.1)', border: `1px solid ${status === 'correct' ? 'var(--green)' : 'rgba(100,181,246,0.3)'}`, marginBottom: 20, textAlign: 'center', animation: 'fadeIn 0.3s' }}>
              {status === 'correct' ? <div style={{ fontSize: 13, color: 'var(--green)', fontWeight: 700, marginBottom: 8 }}>✅ Đúng rồi!</div> : <div style={{ fontSize: 13, color: '#64b5f6', fontWeight: 700, marginBottom: 8 }}>Đáp án:</div>}
              {(cur as any).kanji && <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{(cur as any).kanji}</div>}
              <div style={{ fontSize: 16 }}>{cur.jp}</div>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--mute)', marginTop: 4 }}>{cur.romaji}</div>
              {supported && <button className="btn-icon" style={{ fontSize: 18, marginTop: 10 }} onClick={() => speak((cur as any).kanji || cur.jp, 0.8)}>🔊</button>}
            </div>
          )}

          <div style={{ position: 'relative', marginBottom: 12 }}>
            <input ref={inputRef} className={`ex-input ${status === 'correct' ? 'correct' : status === 'wrong' ? 'wrong' : ''}`} value={input} onChange={handleChange} onKeyDown={e => {
              if (e.key === 'Enter') {
                if (status === 'idle') handleCheck();
                else if (status === 'correct' || status === 'show') handleNext();
              }
            }} placeholder="Gõ Tiếng Nhật hoặc Romaji..." style={{ width: '100%', outline: 'none' }} readOnly={status === 'correct' || status === 'show'} />
          </div>

          {status === 'wrong' && (
            <div style={{ padding: 12, borderRadius: 10, background: 'rgba(229,57,53,0.08)', border: '1px solid #e53935', marginBottom: 12, fontSize: 13, textAlign: 'center' }}>
              ❌ Chưa đúng. Cố gắng thêm nhé!
            </div>
          )}

          <div style={{ display: 'flex', gap: 8 }}>
            {status !== 'correct' && status !== 'show' ? (
              <>
                <button className="btn btn-primary" style={{ flex: 1 }} disabled={!input} onClick={handleCheck}>Kiểm tra</button>
                <button className="btn btn-ghost" onClick={() => setStatus('show')}>Xem đáp án</button>
              </>
            ) : (
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleNext}>Tiếp tục →</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ── Listen Sentence Tab (Nghe Audio -> Gõ Tiếng Nhật) ─────────────────
export function ListenSentenceTab({ lesson, speak, supported, sentenceMastery, updateSentenceMastery }: { lesson: NihongoLesson, speak: (t: string, r?: number) => void, supported: boolean, sentenceMastery: Record<string, { listenCount: number; translateCount: number }>, updateSentenceMastery: (k: string, t: 'listen' | 'translate') => void }) {
  const [session, setSession] = useState(0);

  const sentences = useMemo(() => {
    const list: any[] = [];
    lesson.readings.forEach(r => list.push(...r.lines));
    if (lesson.poem) list.push(...lesson.poem.lines);
    return buildDrillSentences(list, sentenceMastery, 'listen');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.readings, lesson.poem, session]);

  const [idx, setIdx] = useState(0);
  const cur = sentences[idx];
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'wrong' | 'correct' | 'show'>('idle');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const playCur = useCallback(() => {
    if (supported && cur) speak((cur as any).kanji || cur.jp, 0.75);
  }, [speak, supported, cur]);

  useEffect(() => {
    if (status === 'idle') {
      setTimeout(() => inputRef.current?.focus(), 50);
      playCur();
    }
    setShowHint(false);
  }, [status, idx, playCur]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        playCur();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [playCur]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const kana = wanakana.toKana(text, { IMEMode: true });
    setInput(kana);
    if (status === 'wrong') setStatus('idle');
  };

  const removePunctuation = (s: string) => {
    let clean = s.trim().normalize('NFKC');
    clean = clean.replace(/^[a-zA-Z][：:]\s*/, '');
    clean = clean.replace(/[\s。、？！?!—\-–~〜・「」『』（）()\[\]【】'".,]/g, '');
    return clean.toLowerCase();
  };

  const normalizeAcronyms = (str: string) => {
    return str
      .replace(/ディーブイディ[ー]?/g, 'dvd')
      .replace(/エーティーエム/g, 'atm')
      .replace(/アイエムシ[ー]?/g, 'imc')
      .replace(/エーケーシ[ー]?/g, 'akc')
      .replace(/ジェーティーシ[ー]?/g, 'jtc')
      .replace(/シーディ[ー]?/g, 'cd');
  };

  const handleCheck = () => {
    if (status === 'correct' || status === 'show' || !input.trim()) return;

    const expected = wanakana.toHiragana(removePunctuation(cur.jp || ''));
    let actual = removePunctuation(input);
    actual = normalizeAcronyms(actual);
    const actualHiragana = wanakana.toHiragana(actual);
    const romajiCheck = removePunctuation(cur.romaji || '');

    if (actual === expected || actual === romajiCheck || actualHiragana === expected) {
      setStatus('correct');
      setScore(s => s + 1);
      if (supported) speak((cur as any).kanji || cur.jp, 0.85);
      updateSentenceMastery(cur.jp || '', 'listen');
    } else {
      setStatus('wrong');
    }
  };

  const handleNext = () => {
    setIdx(i => i + 1);
    setInput('');
    setStatus('idle');
  };

  if (idx >= sentences.length) return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 64 }}>🎓</div>
      <h3 style={{ margin: '12px 0 4px' }}>{score}/{sentences.length} câu</h3>
      <p style={{ color: 'var(--mute)' }}>Hoàn thành bài tập Nghe Gõ Câu!</p>
      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setSession(s => s + 1); setIdx(0); setScore(0); setInput(''); setStatus('idle'); }}>🔄 Làm Lại</button>
    </div>
  );

  const progress = Math.round((idx / sentences.length) * 100);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', paddingTop: 20 }}>
      {sentences.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>Chưa có dữ liệu bài đọc cho bài này.</div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
            <span>⌨️ Nghe Gõ Câu · {idx + 1}/{sentences.length}</span>
            <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
          </div>
          <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#64b5f6', borderRadius: 3, transition: 'width 0.4s' }} />
          </div>

          <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: '32px 20px', marginBottom: 20, border: '1px solid var(--border)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 11, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 6, display: 'flex', gap: 6 }}>
              <span>✍️ {(sentenceMastery[cur.jp || '']?.translateCount || 0)}/3</span>
              <span>🎧 {(sentenceMastery[cur.jp || '']?.listenCount || 0)}/3</span>
            </div>
            <button className="btn btn-primary" style={{ height: 80, width: 80, borderRadius: '50%', fontSize: 32 }} onClick={playCur}>🔊</button>
            <div style={{ fontSize: 13, color: 'var(--mute)' }}>Nghe và gõ lại câu tiếng Nhật bằng Romaji</div>
            {showHint ? (
              <div style={{ fontSize: 14, color: 'var(--text)', background: 'rgba(255,196,0,0.1)', padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(255,196,0,0.2)' }}>💡 Nghĩa VN: {cur.vn}</div>
            ) : (
              <button className="btn btn-ghost" style={{ fontSize: 12, padding: '2px 8px' }} onClick={() => setShowHint(true)}>Hiển thị gợi ý</button>
            )}
          </div>

          {(status === 'show' || status === 'correct') && (
            <div style={{ padding: '16px', borderRadius: 12, background: status === 'correct' ? 'rgba(6,214,160,0.1)' : 'rgba(100,181,246,0.1)', border: `1px solid ${status === 'correct' ? 'var(--green)' : 'rgba(100,181,246,0.3)'}`, marginBottom: 20, textAlign: 'center', animation: 'fadeIn 0.3s' }}>
              {status === 'correct' ? <div style={{ fontSize: 13, color: 'var(--green)', fontWeight: 700, marginBottom: 8 }}>✅ Đúng rồi!</div> : <div style={{ fontSize: 13, color: '#64b5f6', fontWeight: 700, marginBottom: 8 }}>Đáp án:</div>}
              {(cur as any).kanji && <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{(cur as any).kanji}</div>}
              <div style={{ fontSize: 16 }}>{cur.jp}</div>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--mute)', marginTop: 4 }}>{cur.romaji}</div>
              <div style={{ fontSize: 14, color: 'var(--gold)', marginTop: 8, fontWeight: 600 }}>{cur.vn}</div>
            </div>
          )}

          <div style={{ position: 'relative', marginBottom: 12 }}>
            <input ref={inputRef} className={`ex-input ${status === 'correct' ? 'correct' : status === 'wrong' ? 'wrong' : ''}`} value={input} onChange={handleChange} onKeyDown={e => {
              if (e.key === 'Enter') {
                if (status === 'idle') handleCheck();
                else if (status === 'correct' || status === 'show') handleNext();
              }
            }} placeholder="Gõ Romaji hoặc Tiếng Nhật..." style={{ width: '100%', outline: 'none' }} readOnly={status === 'correct' || status === 'show'} />
          </div>

          {status === 'wrong' && (
            <div style={{ padding: 12, borderRadius: 10, background: 'rgba(229,57,53,0.08)', border: '1px solid #e53935', marginBottom: 12, fontSize: 13, textAlign: 'center' }}>
              ❌ Chưa đúng. Nghe lại và thử thêm nhé!
            </div>
          )}

          <div style={{ display: 'flex', gap: 8 }}>
            {status !== 'correct' && status !== 'show' ? (
              <>
                <button className="btn btn-primary" style={{ flex: 1 }} disabled={!input} onClick={handleCheck}>Kiểm tra</button>
                <button className="btn btn-ghost" onClick={() => setStatus('show')}>Bỏ qua</button>
              </>
            ) : (
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleNext}>Tiếp tục →</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ── N5 Exam Tab (Thi thử Moji/Goi N5) ──────────────────────────────
type N5QuestionType = 'yomikata' | 'kakikata' | 'imi';

interface N5Question {
  type: N5QuestionType;
  prompt: string;         // e.g., "〇〇の読み方はどれですか。"
  promptVn: string;       // Dịch nghĩa câu hỏi
  promptRomaji: string;   // Romaji của câu hỏi
  targetWord: string;     // The word being tested
  options: string[];      // 4 choices
  correctAnswer: string;
  meaning: string;
  romaji: string;
}

export function shuffleExam<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function N5ExamTab({ words, onComplete }: { words: LessonWord[]; onComplete?: (pct: number, rank: string) => void }) {
  const [state, setState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [questions, setQuestions] = useState<N5Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const generateExam = useCallback(() => {
    // 0. Chuyển đổi Kanji N4+ thành Hiragana (Mô phỏng đề thi thật N5)
    const examWords = words.map(w => {
      if (getWordKanjiLevel(w.word) === 'N4+') {
        return { ...w, word: w.reading }; // Thi N5 sẽ không in Kanji N4+ mà in Hiragana
      }
      return w;
    });

    // 1. Phân loại từ vựng
    const kanjiWords = examWords.filter(w => w.word !== w.reading); // Từ có chứa Kanji (Bây giờ chỉ còn Kanji N5)
    const allWords = [...examWords];

    const generateOptions = (correct: string, pool: string[]): string[] => {
      let distractors = pool.filter(p => p !== correct);
      distractors = shuffleExam([...distractors]).slice(0, 3);
      // Đảm bảo đủ 4 đáp án (nếu bài ít từ quá thì fake thêm)
      while (distractors.length < 3) {
        distractors.push('fake_' + Math.random().toString(36).substring(2, 6));
      }
      return shuffleExam([correct, ...distractors]);
    };

    const targetSize = Math.min(kanjiWords.length * 2 + allWords.length, 15);
    const size = targetSize > 10 ? 15 : targetSize; // Nếu bài nhiều từ, cố định 15
    const qCount1 = Math.floor(size / 3);
    const qCount2 = Math.floor(size / 3);
    const qCount3 = size - qCount1 - qCount2; // Phần còn lại (nghĩa)

    const qs: N5Question[] = [];

    // Phần 1: Cách đọc Kanji (yomikata)
    if (kanjiWords.length > 0) {
      const q1Pool = shuffleExam(kanjiWords).slice(0, Math.max(qCount1, 1));
      q1Pool.forEach(w => {
        qs.push({
          type: 'yomikata',
          prompt: `「${w.word}」の読み方はどれですか。`,
          promptVn: `Cách đọc của từ 「${w.word}」 là đáp án nào?`,
          promptRomaji: `「...」 no yomikata wa dore desu ka.`, // Giấu romaji để không lội đáp án
          targetWord: w.word,
          options: generateOptions(w.reading, kanjiWords.map(k => k.reading)),
          correctAnswer: w.reading,
          meaning: w.meaning,
          romaji: w.romaji,
        });
      });
    }

    // Phần 2: Cách viết Kanji (kakikata)
    if (kanjiWords.length > 0) {
      const q2Pool = shuffleExam(kanjiWords).slice(0, Math.max(qCount2, 1));
      q2Pool.forEach(w => {
        qs.push({
          type: 'kakikata',
          prompt: `「${w.reading}」は漢字でどう書きますか。`,
          promptVn: `Từ 「${w.reading}」 viết bằng Kanji như thế nào?`,
          promptRomaji: `「${w.romaji}」 wa kanji de dou kakimasu ka.`,
          targetWord: w.reading,
          options: generateOptions(w.word, kanjiWords.map(k => k.word)),
          correctAnswer: w.word,
          meaning: w.meaning,
          romaji: w.romaji,
        });
      });
    }

    // Phần 3: Ý nghĩa (imi)
    const q3Pool = shuffleExam(allWords).slice(0, qCount3);
    q3Pool.forEach(w => {
      qs.push({
        type: 'imi',
        prompt: `「${w.meaning}」はどれですか。`,
        promptVn: `Đáp án nào có nghĩa là 「${w.meaning}」?`,
        promptRomaji: `「...」 wa dore desu ka.`,
        targetWord: w.meaning,
        options: generateOptions(w.word, allWords.map(k => k.word)),
        correctAnswer: w.word,
        meaning: w.meaning,
        romaji: w.romaji,
      });
    });

    setQuestions(qs);
    setCurrentIdx(0);
    setAnswers({});
    setState('playing');
  }, [words]);

  const handleSelect = (idx: number, opt: string) => {
    setAnswers(prev => ({ ...prev, [idx]: opt }));
  };

  const scoreInfo = useMemo(() => {
    let corr = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) corr++;
    });
    const pct = questions.length > 0 ? (corr / questions.length) * 100 : 0;
    let rank = 'F';
    if (pct >= 90) rank = 'S';
    else if (pct >= 80) rank = 'A';
    else if (pct >= 60) rank = 'B';
    else if (pct >= 50) rank = 'C';
    return { count: corr, pct, rank };
  }, [answers, questions]);

  if (state === 'intro') {
    return (
      <div style={{ maxWidth: 640, margin: '40px auto', textAlign: 'center', background: 'var(--bg-card)', padding: '50px 30px', borderRadius: 20, border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>📝</div>
        <h2 style={{ fontSize: 24, margin: '0 0 10px' }}>Mini JLPT N5 Exam</h2>
        <p style={{ color: 'var(--mute)', fontSize: 13, marginBottom: 30, lineHeight: 1.5 }}>
          Bài thi mô phỏng định dạng phần thi <strong>Kiến thức Ngôn ngữ (Moji・Goi)</strong> của JLPT N5, sử dụng chính các từ vựng trong bài học này.<br />
          Bao gồm 3 phần: Câu hỏi cách đọc chữ Hán, câu hỏi cách viết chữ Hán, và câu hỏi ý nghĩa ngữ nghĩa.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 40 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#64b5f6' }}>{Math.min(words.length, 15)}</div>
            <div style={{ fontSize: 11, color: 'var(--mute)' }}>Câu hỏi</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>Đa dạng</div>
            <div style={{ fontSize: 11, color: 'var(--mute)' }}>Moji & Goi</div>
          </div>
        </div>
        <button className="btn btn-primary" style={{ padding: '14px 40px', fontSize: 16, borderRadius: 30, fontWeight: 800 }} onClick={generateExam}>
          BẮT ĐẦU LÀM BÀI →
        </button>
      </div>
    );
  }

  if (state === 'result') {
    return (
      <div style={{ maxWidth: 960, margin: '40px auto', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: 30 }}>
        {/* Điểm & Rank */}
        <div style={{ textAlign: 'center', background: 'var(--bg-card)', padding: '50px 30px', borderRadius: 20, border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', height: 'fit-content', position: 'sticky', top: 40 }}>
          <div style={{ fontSize: 80, marginBottom: 10, fontWeight: 900, color: scoreInfo.rank === 'S' ? 'var(--gold)' : scoreInfo.rank === 'A' ? 'var(--green)' : scoreInfo.rank === 'B' ? '#64b5f6' : 'var(--mute)' }}>
            Rank {scoreInfo.rank}
          </div>
          <h2 style={{ fontSize: 28, margin: '0 0 20px', color: 'var(--text)' }}>
            {scoreInfo.count} / {questions.length} <span style={{ fontSize: 16, color: 'var(--mute)' }}>câu đúng</span>
          </h2>
          <div style={{ marginBottom: 40, fontSize: 15, color: 'var(--mute)' }}>
            Đạt {scoreInfo.pct.toFixed(0)}%.
            {scoreInfo.rank === 'S' && ' Bạn hoàn toàn làm chủ từ vựng bài này! 🥇'}
            {scoreInfo.rank === 'A' && ' Rất tuyệt vời, gần như hoàn hảo! 🥈'}
            {scoreInfo.rank === 'B' && ' Tốt lắm, nhớ ôn tập thêm chút nhé! 🥉'}
            {scoreInfo.rank === 'C' && ' Cố lên, bạn đã nắm được phần lớn!'}
            {scoreInfo.rank === 'F' && ' Cần ôn kỹ lại từ vựng bài này!'}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: 20 }} onClick={() => setState('intro')}>
              Làm đề khác
            </button>
          </div>
        </div>

        {/* Panel Review */}
        <div style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '20px', borderRadius: 20, border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', maxHeight: '75vh', overflowY: 'auto' }}>
          <h3 style={{ fontSize: 16, marginTop: 0, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--border)', color: 'var(--mute)', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 800 }}>📌 CHI TIẾT KẾT QUẢ</span>
            <span style={{ color: 'var(--gold)' }}>{scoreInfo.count}/{questions.length}</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {questions.map((q, i) => {
              const uAns = answers[i];
              const isRight = uAns === q.correctAnswer;
              return (
                <div key={i} style={{ padding: '16px', borderRadius: 12, background: 'rgba(0,0,0,0.1)', border: '1px solid var(--border)', borderLeft: `4px solid ${isRight ? 'var(--green)' : '#e53935'}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                    Câu {i + 1}: {q.prompt}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.4 }}>
                    <span style={{ fontFamily: 'monospace', color: '#64b5f6' }}>{q.promptRomaji}</span><br />
                    {q.promptVn}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--mute)', fontStyle: 'italic', background: 'rgba(255,255,255,0.03)', padding: '4px 8px', borderRadius: 6, display: 'inline-block', width: 'fit-content' }}>
                    💡 Nghĩa: <strong>{q.meaning}</strong> • <span style={{ fontFamily: 'monospace', color: '#64b5f6' }}>{q.romaji}</span>
                  </div>
                  <div style={{ fontSize: 14, marginTop: 4 }}>
                    <span style={{ color: 'var(--mute)' }}>Đã chọn: </span>
                    <span style={{ color: isRight ? 'var(--green)' : '#e53935', fontWeight: 800, textDecoration: !isRight ? 'line-through' : 'none' }}>{uAns || '(Bỏ trống)'}</span>
                    {!isRight && <span style={{ color: 'var(--green)', fontWeight: 800, marginLeft: 12 }}>→ Đáp án: {q.correctAnswer}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // PLAYING STATE
  const curQ = questions[currentIdx];
  const answeredAll = Object.keys(answers).length === questions.length;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', paddingTop: 20 }}>
      {questions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>Chưa có đủ từ vựng để tạo bài thi.</div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 700, letterSpacing: 1 }}>
              ĐỀ THI MINI N5
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: 12 }}>
              {Object.keys(answers).length} / {questions.length} đã trả lời
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border)', overflow: 'hidden' }}>
            {/* Header Indicator */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)' }}>
              {questions.map((q, i) => (
                <button key={i} onClick={() => setCurrentIdx(i)} style={{
                  flex: 1, padding: '8px 0', border: 'none',
                  background: currentIdx === i ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: currentIdx === i ? 'var(--gold)' : answers[i] ? 'var(--text)' : 'var(--mute)',
                  borderBottom: currentIdx === i ? '2px solid var(--gold)' : '2px solid transparent',
                  cursor: 'pointer', fontSize: 12, fontWeight: 700
                }}>
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Question Area */}
            <div style={{ padding: '40px 30px', minHeight: 320 }}>
              <div style={{ fontSize: 14, color: '#64b5f6', fontWeight: 800, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{curQ.type === 'yomikata' ? '問題１' : curQ.type === 'kakikata' ? '問題２' : '問題３'}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--mute)' }}>— {curQ.type === 'yomikata' ? 'Cách đọc' : curQ.type === 'kakikata' ? 'Cách viết' : 'Ý nghĩa'}</span>
              </div>

              <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8, lineHeight: 1.5 }}>
                {curQ.prompt}
              </div>
              <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 30, lineHeight: 1.5 }}>
                <span style={{ fontFamily: 'monospace', color: '#64b5f6' }}>{curQ.promptRomaji}</span><br />
                {curQ.promptVn}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {curQ.options.map((opt, i) => {
                  const num = i + 1;
                  const isSelected = answers[currentIdx] === opt;
                  return (
                    <button key={opt} onClick={() => handleSelect(currentIdx, opt)} style={{
                      padding: '16px', borderRadius: 12,
                      border: isSelected ? '2px solid var(--gold)' : '2px solid var(--border)',
                      background: isSelected ? 'rgba(255,196,0,0.1)' : 'rgba(255,255,255,0.02)',
                      color: isSelected ? 'var(--gold)' : 'var(--text)',
                      fontSize: 18, fontWeight: 600, textAlign: 'left',
                      display: 'flex', alignItems: 'center', gap: 12,
                      cursor: 'pointer', transition: 'all 0.15s'
                    }}>
                      <span style={{ fontSize: 13, background: isSelected ? 'var(--gold)' : 'rgba(255,255,255,0.1)', color: isSelected ? 'var(--bg)' : 'var(--mute)', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {num}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Area */}
            <div style={{ padding: '20px 30px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                {currentIdx > 0 && (
                  <button className="btn btn-ghost" onClick={() => setCurrentIdx(i => i - 1)}>← Câu trước</button>
                )}
              </div>
              <div>
                {currentIdx < questions.length - 1 ? (
                  <button className="btn btn-primary" onClick={() => setCurrentIdx(i => i + 1)}>Câu tiếp →</button>
                ) : answeredAll ? (
                  <button className="btn btn-primary" style={{ background: 'var(--green)', border: 'none' }} onClick={() => {
                    setState('result');
                    if (onComplete) onComplete(scoreInfo.pct, scoreInfo.rank);
                  }}>NỘP BÀI ✅</button>
                ) : (
                  <span style={{ color: '#e53935', fontSize: 13, fontWeight: 600 }}>Chưa trả lời hết câu hỏi</span>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function TypingTab({ words, mastery, onUpdate, speak, supported }: { words: LessonWord[], mastery: MasteryMap, onUpdate: (id: string, correct: boolean) => void, speak: (t: string, r?: number) => void, supported: boolean }) {
  const [session, setSession] = useState(0);
  const pool = useMemo(() => buildDrillWords(words, mastery), [words, session]);
  const [idx, setIdx] = useState(0);
  const cur = pool[idx];
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'wrong' | 'correct' | 'show'>('idle');
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState<1 | 2>(1); // 1: Kanji -> Kana, 2: Kana -> Kanji (Trắc nghiệm)
  const [options, setOptions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!cur) return;
    const newMode = Math.random() > 0.5 ? 1 : 2;
    setMode(newMode);

    if (newMode === 2) {
      const hasKanji = words.filter(w => w.word !== cur.word && w.word !== w.reading);
      const distractors = shuffle(hasKanji).slice(0, 3).map(w => w.word);
      if (distractors.length < 3) {
        const others = words.filter(w => w.word !== cur.word && !distractors.includes(w.word));
        distractors.push(...shuffle(others).slice(0, 3 - distractors.length).map(w => w.word));
      }
      setOptions(shuffle([cur.word, ...distractors]));
    }
  }, [idx, cur, words]);

  useEffect(() => {
    if (status === 'idle') setTimeout(() => inputRef.current?.focus(), 50);
  }, [status, idx]);

  // Ctrl+Space → nghe lại
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        if (supported && cur) speak(cur.reading, 0.8);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cur, supported, speak]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const kana = mode === 1 ? wanakana.toKana(text, { IMEMode: true }) : text;
    setInput(kana);
    if (status === 'wrong') setStatus('idle');
  };

  const normalizeAcronyms = (str: string) => {
    return str
      .replace(/ディーブイディ[ー]?/g, 'dvd')
      .replace(/エーティーエム/g, 'atm')
      .replace(/アイエムシ[ー]?/g, 'imc')
      .replace(/エーケーシ[ー]?/g, 'akc')
      .replace(/ジェーティーシ[ー]?/g, 'jtc')
      .replace(/シーディ[ー]?/g, 'cd');
  };

  const removePunctuation = (s: string) => {
    let clean = s.trim().normalize('NFKC');
    clean = clean.replace(/[\s。、？！?!—\-–~〜・「」『』（）()\[\]【】'".,]/g, '');
    return clean.toLowerCase();
  };

  const handleCheck = () => {
    if (status === 'correct' || status === 'show' || !input.trim()) return;

    if (mode === 1) {
      // Mode 1: Nhìn Kanji -> Gõ Hiragana
      let expectedKana = cur.reading || cur.word;
      expectedKana = normalizeAcronyms(removePunctuation(expectedKana));
      const expected = wanakana.toHiragana(expectedKana);

      let actual = removePunctuation(input);
      actual = normalizeAcronyms(actual);
      const actualHiragana = wanakana.toHiragana(actual);

      if (actualHiragana === expected || actual === expectedKana) {
        setStatus('correct');
        setScore(s => s + 1);
        onUpdate(cur.id, true);
        if (supported) speak(cur.reading, 0.8);
      } else {
        setStatus('wrong');
        onUpdate(cur.id, false);
      }
    } else {
      // Mode 2: Nhìn Hiragana -> Gõ Kanji (hoặc Katakana)
      // Chấp nhận cả việc user gõ chữ Hán, hoặc nếu lười gõ Hán thì gõ Hiragana đúng cũng tính là đúng?
      // KHÔNG! Mode 2 bắt buộc phải giống hệt cur.word để luyện gõ Kanji.
      let expectedWord = normalizeAcronyms(removePunctuation(cur.word));
      let actual = normalizeAcronyms(removePunctuation(input));

      // Tuy nhiên nếu từ đó là Katakana/Hiragana thuần thì cho phép wanakana convert để linh hoạt hơn
      if (actual === expectedWord || wanakana.toHiragana(actual) === wanakana.toHiragana(expectedWord)) {
        setStatus('correct');
        setScore(s => s + 1);
        onUpdate(cur.id, true);
        if (supported) speak(cur.reading, 0.8);
      } else {
        setStatus('wrong');
        onUpdate(cur.id, false);
      }
    }
  };

  const handleOptionClick = (opt: string) => {
    if (status === 'correct' || status === 'show') return;
    
    if (opt === cur.word) {
      setStatus('correct');
      setScore(s => s + 1);
      onUpdate(cur.id, true);
      if (supported) speak(cur.reading, 0.8);
    } else {
      setStatus('wrong');
      onUpdate(cur.id, false);
    }
  };

  const handleNext = () => {
    setIdx(i => i + 1);
    setInput('');
    setStatus('idle');
  };

  if (!cur) return null;

  if (idx >= pool.length) return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 64 }}>⌨️</div>
      <h3 style={{ margin: '12px 0 4px' }}>{score}/{pool.length} từ</h3>
      <p style={{ color: 'var(--mute)' }}>Hoàn thành bài tập Gõ Từ Vựng!</p>
      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setSession(s => s + 1); setIdx(0); setScore(0); setInput(''); setStatus('idle'); }}>🔄 Luyện Lại</button>
    </div>
  );

  const progress = Math.round((idx / pool.length) * 100);

  return (
    <div style={{ display: 'flex', gap: 20, maxWidth: (status === 'show' || status === 'correct') && cur.kanjiBreakdown ? 960 : 600, margin: '0 auto', paddingTop: 20, transition: 'max-width 0.3s ease-out', alignItems: 'flex-start' }}>
      {/* Left Column */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
          <span>⌨️ Gõ Từ Vựng · {idx + 1}/{pool.length}</span>
          <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
        </div>
        <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: '#64b5f6', borderRadius: 3, transition: 'width 0.4s' }} />
        </div>

        <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: '32px 20px', marginBottom: 20, border: '1px solid var(--border)', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 12, color: 'var(--mute)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
            {mode === 1 ? 'Viết cách đọc (Hiragana) của từ này:' : 'Viết Kanji / Katakana của từ này:'}
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: mode === 1 ? 'var(--text)' : '#64b5f6', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {mode === 1 ? cur.word : cur.reading}
          </div>
          {mode === 2 && (
            <div style={{ fontSize: 14, color: 'var(--gold)', marginTop: 8 }}>
              ( Nghĩa: {cur.meaning} )
            </div>
          )}
          {supported && (
            <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 16, opacity: 0.6 }}>
              <kbd style={{ fontSize: 10, padding: '1px 5px', borderRadius: 4, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.06)', fontFamily: 'monospace' }}>Ctrl+Space</kbd>
              {' '}để nghe lại
            </div>
          )}
        </div>

        {(status === 'show' || status === 'correct') && (
          <div style={{ padding: '16px', borderRadius: 12, background: status === 'correct' ? 'rgba(6,214,160,0.1)' : 'rgba(100,181,246,0.1)', border: `1px solid ${status === 'correct' ? 'var(--green)' : 'rgba(100,181,246,0.3)'}`, marginBottom: 20, textAlign: 'center', animation: 'fadeIn 0.3s' }}>
            {status === 'correct' ? <div style={{ fontSize: 13, color: 'var(--green)', fontWeight: 700, marginBottom: 8 }}>✅ Chính xác!</div> : <div style={{ fontSize: 13, color: '#64b5f6', fontWeight: 700, marginBottom: 8 }}>Đáp án:</div>}
            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{cur.word}</div>
            <div style={{ fontSize: 18, color: 'var(--gold)', fontWeight: 600 }}>{cur.reading}</div>
            <div style={{ fontSize: 14, color: 'var(--mute)', marginTop: 4 }}>{cur.meaning}</div>
            {supported && <button className="btn-icon" style={{ fontSize: 18, marginTop: 10 }} onClick={() => speak(cur.reading, 0.8)}>🔊</button>}
          </div>
        )}

        {mode === 1 ? (
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <input ref={inputRef} className={`ex-input ${status === 'correct' ? 'correct' : status === 'wrong' ? 'wrong' : ''}`} value={input} onChange={handleChange} onKeyDown={e => {
              if (e.key === 'Enter') {
                if (status === 'idle') handleCheck();
                else if (status === 'correct' || status === 'show') handleNext();
              }
            }} placeholder="Gõ cách đọc (Hiragana)..." style={{ width: '100%', outline: 'none', textAlign: 'center', fontSize: 20 }} readOnly={status === 'correct' || status === 'show'} />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            {options.map((opt, i) => {
              const isSelectedCorrect = status === 'correct' && opt === cur.word;
              const isShowCorrect = status === 'show' && opt === cur.word;
              
              let bg = 'var(--bg-card)';
              let border = '2px solid var(--border)';
              if (isSelectedCorrect || isShowCorrect) {
                bg = 'rgba(6,214,160,0.1)';
                border = '2px solid var(--green)';
              }

              return (
                <button key={i} onClick={() => handleOptionClick(opt)} style={{
                  padding: '16px', borderRadius: 12, border, background: bg,
                  color: isSelectedCorrect || isShowCorrect ? 'var(--green)' : 'var(--text)',
                  fontSize: 24, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                  opacity: (status === 'correct' || status === 'show') && opt !== cur.word ? 0.5 : 1
                }}>
                  {opt}
                </button>
              )
            })}
          </div>
        )}

        {status === 'wrong' && (
          <div style={{ padding: 12, borderRadius: 10, background: 'rgba(229,57,53,0.08)', border: '1px solid #e53935', marginBottom: 12, fontSize: 13, textAlign: 'center' }}>
            ❌ Sai rồi. Bạn thử lại nhé!
          </div>
        )}

        <div style={{ display: 'flex', gap: 8 }}>
          {status !== 'correct' && status !== 'show' ? (
            <>
              {mode === 1 && <button className="btn btn-primary" style={{ flex: 1 }} disabled={!input} onClick={handleCheck}>Kiểm tra</button>}
              <button className="btn btn-ghost" style={{ flex: mode === 2 ? 1 : undefined }} onClick={() => setStatus('show')}>Xem đáp án</button>
            </>
          ) : (
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleNext}>Tiếp tục →</button>
          )}
        </div>
      </div>

      {/* Right Column */}
      {(status === 'show' || status === 'correct') && cur.kanjiBreakdown && (
        <div style={{ width: 280, flexShrink: 0, background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--gold)', padding: 20, alignSelf: 'flex-start', position: 'sticky', top: 20, animation: 'fadeInRight 0.3s' }}>
          <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 16, letterSpacing: 1, borderBottom: '1px solid rgba(255,196,0,0.2)', paddingBottom: 8 }}>
            ⛩️ Phân tích Kanji
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, color: 'var(--text)' }}>{cur.word}</div>
            <div style={{ fontSize: 14, fontFamily: 'monospace', color: 'var(--mute)', paddingBottom: 6 }}>{cur.reading}</div>
          </div>

          <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 16 }}>
            Âm Hán Việt: <strong style={{ color: 'var(--gold)', fontSize: 15 }}>{cur.kanjiBreakdown.hanviet}</strong>
          </div>

          <div style={{ fontSize: 12, background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: 8, marginBottom: 12, border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--mute)', marginBottom: 6, fontWeight: 700, fontSize: 11 }}>BỘ THỦ CẤU THÀNH:</div>
            <div style={{ color: '#64b5f6', lineHeight: 1.4 }}>{cur.kanjiBreakdown.components}</div>
          </div>

          <div style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>
            <div style={{ color: 'var(--mute)', marginBottom: 4, fontWeight: 700, fontSize: 11 }}>CÂU CHUYỆN GHI NHỚ:</div>
            <div style={{ color: 'var(--green)' }}>{cur.kanjiBreakdown.story}</div>
          </div>

          {cur.kanjiBreakdown.examples && (
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>
              <div style={{ color: 'var(--mute)', marginBottom: 4, fontWeight: 700, fontSize: 11 }}>VÍ DỤ TỪ VỰNG:</div>
              <div style={{ color: 'var(--text)' }}>{cur.kanjiBreakdown.examples}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Grammar Tab ─────────────────────────────────────────────
export function GrammarTab({ grammar, speak, supported }: {
  grammar: import('../data/lessons/types').GrammarPoint[];
  speak: (t: string, r?: number) => void;
  supported: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: 'var(--gold)' }}>📖 Ngữ Pháp</h2>
        <div style={{ fontSize: 13, color: 'var(--mute)' }}>Các điểm ngữ pháp chính trong bài</div>
      </div>
      
      {grammar.map((g, i) => (
        <div key={i} style={{ background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', background: 'rgba(255,196,0,0.05)', borderBottom: '1px solid rgba(255,196,0,0.1)' }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--gold)' }}>{i + 1}. {g.title}</h3>
            {g.structure && (
              <div style={{ marginTop: 8, padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 8, fontFamily: 'monospace', fontSize: 14, color: '#64b5f6', border: '1px dashed rgba(100,181,246,0.3)' }}>
                {g.structure}
              </div>
            )}
          </div>
          
          <div style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text)', marginBottom: 16, whiteSpace: 'pre-wrap' }}>
              {g.usage}
            </div>
            
            {g.examples.length > 0 && (
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>📝 Ví dụ:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {g.examples.map((ex, exIdx) => (
                    <div key={exIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: 10, border: '1px solid var(--border)' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{ex.jp}</div>
                        <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{ex.romaji}</div>
                        <div style={{ fontSize: 13, color: 'var(--green)' }}>{ex.vn}</div>
                      </div>
                      {supported && (
                        <button className="btn-icon" style={{ fontSize: 14, padding: '4px 8px' }} onClick={() => speak(ex.jp, 0.8)}>🔊</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Grammar Quiz Tab ─────────────────────────────────────────
export function GrammarQuizTab({ exercises, speak, supported }: {
  exercises: import('../data/lessons/types').GrammarExercise[];
  speak: (t: string, r?: number) => void;
  supported: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [session, setSession] = useState(0);

  // Restart
  if (done) return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 64 }}>{score / exercises.length >= 0.8 ? '🎯' : '💪'}</div>
      <h3 style={{ margin: '12px 0 4px' }}>{score}/{exercises.length} câu đúng</h3>
      <p style={{ color: 'var(--mute)' }}>Kết quả Luyện Ngữ Pháp</p>
      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setSession(s => s + 1); setIdx(0); setSelected(null); setScore(0); setDone(false); }}>
        🔄 Làm Lại
      </button>
    </div>
  );

  const cur = exercises[idx];
  const isCorrect = selected === cur.answer;

  const handleSelect = (opt: string) => {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === cur.answer) {
      setScore(s => s + 1);
    }
    if (supported) {
      speak(cur.question.replace('[blank]', cur.answer), 0.85);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= exercises.length) setDone(true);
    else { setIdx(i => i + 1); setSelected(null); }
  };

  const pct = Math.round((idx / exercises.length) * 100);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
        <span>🧩 Luyện Ngữ Pháp · {idx + 1}/{exercises.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border)', padding: '30px 24px', textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.6, marginBottom: 12 }}>
          {cur.question.split('[blank]').map((part, pIdx, arr) => (
            <span key={pIdx}>
              {part}
              {pIdx < arr.length - 1 && (
                <span style={{ 
                  display: 'inline-block', minWidth: selected ? 50 : 60,
                  borderBottom: selected ? 'none' : '2px dashed var(--gold)',
                  margin: '0 8px',
                  color: selected ? (isCorrect ? 'var(--green)' : '#e53935') : 'transparent',
                  fontWeight: 800, fontSize: selected ? 28 : 24,
                }}>
                  {selected ? cur.answer : '___'}
                </span>
              )}
            </span>
          ))}
          {supported && (
            <button className="btn-icon" onClick={() => speak(cur.question.replace('[blank]', cur.answer), 0.85)}
              style={{ fontSize: 16, display: 'inline-block', marginLeft: 12 }} title="Nghe câu này">
              🔊
            </button>
          )}
        </div>
        <div style={{ fontSize: 15, color: 'var(--mute)' }}>🇻🇳 {cur.vn}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
        {cur.options.map(opt => {
          let bg = 'var(--surface-alt)', border = 'transparent', color = 'var(--text)';
          if (selected) {
            if (opt === cur.answer) { bg = 'rgba(76, 175, 80, 0.15)'; border = 'var(--green)'; color = 'var(--green)'; }
            else if (opt === selected && !isCorrect) { bg = 'rgba(244, 67, 54, 0.15)'; border = '#e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={selected !== null}
              style={{ padding: '20px', borderRadius: 12, fontSize: 24, fontWeight: 700, background: bg, border: `2px solid ${border}`, color, cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s' }}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <div style={{ animation: 'fadeIn 0.3s' }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: isCorrect ? 'var(--green)' : '#e53935', marginBottom: 16, textAlign: 'center' }}>
            {isCorrect ? '✨ Chính xác!' : `❌ Sai rồi! Nhớ dùng [${cur.answer}] nhé.`}
          </div>
          {cur.explanation && (
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: 12, fontSize: 14, lineHeight: 1.5, marginBottom: 20, border: '1px solid var(--border)' }}>
              💡 <strong>Giải thích:</strong> {cur.explanation}
            </div>
          )}
          <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', padding: '16px', fontSize: 18 }}>
            Tiếp tục ⏭️
          </button>
        </div>
      )}
    </div>
  );
}

// ── Summary Table Tab ────────────────────────────────────────
export function SummaryTableTab({ words, speak, supported }: {
  words: LessonWord[]; speak: (t: string, r?: number) => void; supported: boolean;
}) {
  const [mode, setMode] = useState<'type_jp' | 'type_vn'>('type_jp');
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [inputs2, setInputs2] = useState<Record<string, string>>({});

  const norm = (s: string) => s.trim().toLowerCase().replace(/[\s~～〜\-]/g, '');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 60 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)', padding: '16px', borderRadius: 12, border: '1px solid var(--border)' }}>
        <h3 style={{ margin: 0, fontSize: 16 }}>Bảng Tổng Hợp ({words.length} từ)</h3>
        <div style={{ display: 'flex', gap: 8 }} className="no-print">
           <button 
             className="btn btn-ghost"
             onClick={() => window.print()}
             style={{ padding: '8px 16px', fontSize: 13, marginRight: 8, background: 'rgba(255,255,255,0.05)' }}
             title="In bảng để luyện viết"
           >
             🖨️ PDF
           </button>
           <button 
             className={`btn ${mode === 'type_jp' ? 'btn-primary' : 'btn-ghost'}`}
             onClick={() => { setMode('type_jp'); setInputs({}); setInputs2({}); }}
             style={{ padding: '8px 16px', fontSize: 13 }}
           >
             Nhìn Việt - Gõ Nhật
           </button>
           <button 
             className={`btn ${mode === 'type_vn' ? 'btn-primary' : 'btn-ghost'}`}
             onClick={() => { setMode('type_vn'); setInputs({}); setInputs2({}); }}
             style={{ padding: '8px 16px', fontSize: 13 }}
           >
             Nhìn Nhật - Gõ Việt
           </button>
        </div>
      </div>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
            <th style={{ padding: '14px 16px', textAlign: 'center', borderBottom: '1px solid var(--border)', width: '60px', color: 'var(--mute)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
              STT
            </th>
            <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid var(--border)', width: '30%', color: 'var(--mute)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
              {mode === 'type_jp' ? 'Tiếng Việt' : 'Tiếng Nhật'}
            </th>
            <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid var(--border)', width: '35%', color: 'var(--mute)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
              Lần 1
            </th>
            <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid var(--border)', width: '35%', color: 'var(--mute)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
              Lần 2
            </th>
          </tr>
        </thead>
        <tbody>
          {words.map((w, index) => {
             const val = inputs[w.id] || '';
             const val2 = inputs2[w.id] || '';
             let isCorrect = false;
             let isCorrect2 = false;
             if (val) {
               const nVal = norm(val);
               if (mode === 'type_jp') {
                 isCorrect = nVal === norm(w.romaji) || nVal === norm(w.reading) || nVal === norm(w.word);
               } else {
                 isCorrect = nVal === norm(w.meaning);
               }
             }
             if (val2) {
               const nVal2 = norm(val2);
               if (mode === 'type_jp') {
                 isCorrect2 = nVal2 === norm(w.romaji) || nVal2 === norm(w.reading) || nVal2 === norm(w.word);
               } else {
                 isCorrect2 = nVal2 === norm(w.meaning);
               }
             }

             return (
               <tr key={w.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s', background: (isCorrect || isCorrect2) ? 'rgba(6,214,160,0.05)' : 'transparent' }}>
                 <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 600, color: 'var(--mute)', verticalAlign: 'middle' }}>
                   {index + 1}
                 </td>
                 <td style={{ padding: '14px 16px', fontWeight: 600, verticalAlign: 'middle' }}>
                   {mode === 'type_jp' ? (
                     <div style={{ color: 'var(--gold)', fontSize: 15 }}>{w.meaning}</div>
                   ) : (
                     <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                       <span style={{ fontSize: 20, fontWeight: 700 }}>{w.word}</span>
                       <span style={{ fontSize: 13, color: 'var(--mute)', fontFamily: 'monospace' }}>{w.reading}</span>
                       {supported && (
                         <button className="btn-icon" style={{ fontSize: 14 }} onClick={() => speak(w.reading, 0.8)} title="Nghe đọc">🔊</button>
                       )}
                     </div>
                   )}
                 </td>
                 <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                   <div style={{ position: 'relative' }}>
                     <input 
                       type="text"
                       className="ex-input"
                       style={{ 
                         width: '100%', 
                         padding: '10px 14px',
                         border: isCorrect ? '2px solid var(--green)' : '1px solid var(--border)',
                         background: isCorrect ? 'rgba(6,214,160,0.1)' : 'var(--surface-alt)',
                         borderRadius: 8,
                         outline: 'none',
                         color: isCorrect ? 'var(--green)' : 'var(--text)',
                         fontSize: 14,
                         transition: 'all 0.2s'
                       }}
                       placeholder={mode === 'type_jp' ? "Gõ romaji..." : "Gõ nghĩa tiếng việt..."}
                       value={val}
                       onChange={e => {
                         const newVal = mode === 'type_jp' ? wanakana.toKana(e.target.value, { IMEMode: true }) : e.target.value;
                         setInputs(prev => ({ ...prev, [w.id]: newVal }));
                       }}
                     />
                     {isCorrect && (
                       <div className="no-print" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>✅</div>
                     )}
                   </div>
                 </td>
                 <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                   <div style={{ position: 'relative' }}>
                     <input 
                       type="text"
                       className="ex-input"
                       style={{ 
                         width: '100%', 
                         padding: '10px 14px',
                         border: isCorrect2 ? '2px solid var(--green)' : '1px solid var(--border)',
                         background: isCorrect2 ? 'rgba(6,214,160,0.1)' : 'var(--surface-alt)',
                         borderRadius: 8,
                         outline: 'none',
                         color: isCorrect2 ? 'var(--green)' : 'var(--text)',
                         fontSize: 14,
                         transition: 'all 0.2s'
                       }}
                       placeholder={mode === 'type_jp' ? "Gõ romaji..." : "Gõ nghĩa tiếng việt..."}
                       value={val2}
                       onChange={e => {
                         const newVal = mode === 'type_jp' ? wanakana.toKana(e.target.value, { IMEMode: true }) : e.target.value;
                         setInputs2(prev => ({ ...prev, [w.id]: newVal }));
                       }}
                     />
                     {isCorrect2 && (
                       <div className="no-print" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>✅</div>
                     )}
                   </div>
                 </td>
               </tr>
             );
          })}
        </tbody>
      </table>
    </div>
  );
}

