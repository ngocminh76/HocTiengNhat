// src/pages/KatakanaExercisePage.tsx
// 3 bài tập ôn Katakana: Nhận diện nhanh | Đọc Loanword | Cặp dễ nhầm
import { useState, useMemo, useCallback } from 'react';
import { KATAKANA } from '../data/katakana';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  onHome: () => void;
}

type Mode = 'pick' | 'flash' | 'loanword' | 'confusable' | 'done';

// Cặp dễ nhầm (confusable pairs)
const CONFUSABLE_CHARS = ['シ','ツ','ソ','ン','ウ','ク','ア','マ','ヲ','ラ','リ','ル'];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildFlashQuestions() {
  return shuffle(KATAKANA).map(k => {
    const wrong = shuffle(KATAKANA.filter(x => x.char !== k.char)).slice(0, 3);
    return {
      char: k.char,
      correct: k.romaji,
      options: shuffle([k.romaji, ...wrong.map(x => x.romaji)]),
      mnemonic: k.mnemonic,
    };
  });
}

function buildLoanwordQuestions() {
  const all = KATAKANA.flatMap(k => k.vocab.map(v => ({
    word: v.word,
    romaji: v.romaji,
    meaning: v.meaning,
    origin: v.origin,
  })));
  const shuffled = shuffle(all).slice(0, 20);
  return shuffled.map(q => {
    const wrongs = shuffle(all.filter(x => x.meaning !== q.meaning)).slice(0, 3);
    return {
      ...q,
      options: shuffle([q.meaning, ...wrongs.map(x => x.meaning)]),
    };
  });
}

function buildConfusableQuestions() {
  const chars = KATAKANA.filter(k => CONFUSABLE_CHARS.includes(k.char));
  const repeated = [...chars, ...chars, ...chars]; // 3 lần để luyện kỹ
  return shuffle(repeated).slice(0, 20).map(k => {
    const wrong = shuffle(KATAKANA.filter(x => x.char !== k.char)).slice(0, 3);
    return {
      char: k.char,
      correct: k.romaji,
      options: shuffle([k.romaji, ...wrong.map(x => x.romaji)]),
      mnemonic: k.mnemonic,
    };
  });
}

// ── Component con: Flash Quiz ─────────────────────────────
function FlashQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const questions = useMemo(() => buildFlashQuestions(), []);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const { speak, supported } = useSpeech();

  const cur = questions[idx];
  const isCorrect = selected === cur.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === cur.correct) {
      setScore(s => s + 1);
      if (supported) speak(cur.char, 0.9);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      onFinish(score + (selected === cur.correct ? 1 : 0), questions.length);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
    }
  };

  const pct = Math.round((idx / questions.length) * 100);

  return (
    <div style={{ maxWidth: 520, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
        <span>⚡ Nhận Diện · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 24, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      {/* Big Katakana */}
      <div style={{ textAlign: 'center', background: 'var(--bg-card)', borderRadius: 16, padding: '40px 20px', marginBottom: 24, border: '1px solid var(--border)' }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>{cur.char}</div>
        <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 8 }}>Đây là chữ Katakana gì?</div>
      </div>

      {/* Options */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        {cur.options.map(opt => {
          const isSelected = selected === opt;
          const isRight = opt === cur.correct;
          let bg = 'var(--bg-card)';
          let border = '1px solid var(--border)';
          let color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.15)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (isSelected) { bg = 'rgba(229,57,53,0.15)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => handleSelect(opt)} style={{
              padding: '16px', borderRadius: 12, border, background: bg, color,
              fontSize: 18, fontWeight: 700, fontFamily: 'monospace',
              cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s',
            }}>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {selected && (
        <div style={{ marginBottom: 16, padding: 14, borderRadius: 12, background: isCorrect ? 'rgba(6,214,160,0.08)' : 'rgba(229,57,53,0.08)', border: `1px solid ${isCorrect ? 'var(--green)' : '#e53935'}`, animation: 'fadeIn 0.2s' }}>
          <div style={{ fontWeight: 700, color: isCorrect ? 'var(--green)' : '#e53935', marginBottom: 4 }}>
            {isCorrect ? '✅ Đúng!' : `❌ Sai! Đáp án đúng là: ${cur.correct}`}
          </div>
          <div style={{ fontSize: 13, color: 'var(--mute)' }}>💡 {cur.mnemonic}</div>
        </div>
      )}

      <button className="btn btn-primary" style={{ width: '100%', padding: 14, fontSize: 16 }} onClick={selected ? handleNext : undefined} disabled={!selected}>
        {idx + 1 >= questions.length ? 'Xem kết quả 🏁' : 'Tiếp theo →'}
      </button>
    </div>
  );
}

// ── Component con: Loanword Quiz ───────────────────────────
function LoanwordQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const questions = useMemo(() => buildLoanwordQuestions(), []);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const { speak, supported } = useSpeech();

  const cur = questions[idx];
  const isCorrect = selected === cur.meaning;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === cur.meaning) {
      setScore(s => s + 1);
      if (supported) speak(cur.word, 0.8);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      onFinish(score + (selected === cur.meaning ? 1 : 0), questions.length);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
    }
  };

  const pct = Math.round((idx / questions.length) * 100);

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
        <span>📖 Đọc Loanword · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 24, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      <div style={{ textAlign: 'center', background: 'var(--bg-card)', borderRadius: 16, padding: '32px 20px', marginBottom: 24, border: '1px solid var(--border)' }}>
        <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>{cur.word}</div>
        <div style={{ fontSize: 14, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{cur.romaji}</div>
        {supported && (
          <button className="btn-icon" style={{ fontSize: 18 }} onClick={() => speak(cur.word, 0.8)}>🔊</button>
        )}
        <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 8 }}>Từ này có nghĩa là gì?</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        {cur.options.map(opt => {
          const isSelected = selected === opt;
          const isRight = opt === cur.meaning;
          let bg = 'var(--bg-card)';
          let border = '1px solid var(--border)';
          let color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.15)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (isSelected) { bg = 'rgba(229,57,53,0.15)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => handleSelect(opt)} style={{
              padding: '14px', borderRadius: 12, border, background: bg, color,
              fontSize: 14, fontWeight: 600, cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s',
            }}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <div style={{ marginBottom: 16, padding: 14, borderRadius: 12, background: isCorrect ? 'rgba(6,214,160,0.08)' : 'rgba(229,57,53,0.08)', border: `1px solid ${isCorrect ? 'var(--green)' : '#e53935'}`, animation: 'fadeIn 0.2s' }}>
          <div style={{ fontWeight: 700, color: isCorrect ? 'var(--green)' : '#e53935' }}>
            {isCorrect ? '✅ Đúng!' : `❌ Sai! Đáp án: ${cur.meaning}`}
          </div>
          <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>← Mượn từ: {cur.origin}</div>
        </div>
      )}

      <button className="btn btn-primary" style={{ width: '100%', padding: 14, fontSize: 16 }} onClick={selected ? handleNext : undefined} disabled={!selected}>
        {idx + 1 >= questions.length ? 'Xem kết quả 🏁' : 'Tiếp theo →'}
      </button>
    </div>
  );
}

// ── Component con: Confusable Pairs ───────────────────────
function ConfusableQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const questions = useMemo(() => buildConfusableQuestions(), []);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const { speak, supported } = useSpeech();

  const cur = questions[idx];
  const isCorrect = selected === cur.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === cur.correct) {
      setScore(s => s + 1);
      if (supported) speak(cur.char, 0.9);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      onFinish(score + (selected === cur.correct ? 1 : 0), questions.length);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
    }
  };

  const pct = Math.round((idx / questions.length) * 100);

  return (
    <div style={{ maxWidth: 520, margin: '0 auto' }}>
      <div style={{ marginBottom: 16, padding: '10px 14px', background: 'rgba(229,57,53,0.08)', borderRadius: 8, border: '1px solid rgba(229,57,53,0.3)', fontSize: 13 }}>
        ⚠️ <strong>Cặp dễ nhầm:</strong> シ vs ツ &nbsp;|&nbsp; ソ vs ン &nbsp;|&nbsp; ウ vs ク &nbsp;|&nbsp; ア vs マ
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--mute)', marginBottom: 8 }}>
        <span>🎯 Cặp Dễ Nhầm · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 24, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: '#e53935', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      <div style={{ textAlign: 'center', background: 'var(--bg-card)', borderRadius: 16, padding: '40px 20px', marginBottom: 24, border: '2px solid rgba(229,57,53,0.3)' }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>{cur.char}</div>
        <div style={{ fontSize: 12, color: '#e53935', marginTop: 8, fontWeight: 600 }}>⚠️ Chú ý hướng nét!</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        {cur.options.map(opt => {
          const isSelected = selected === opt;
          const isRight = opt === cur.correct;
          let bg = 'var(--bg-card)';
          let border = '1px solid var(--border)';
          let color = 'var(--text)';
          if (selected) {
            if (isRight) { bg = 'rgba(6,214,160,0.15)'; border = '2px solid var(--green)'; color = 'var(--green)'; }
            else if (isSelected) { bg = 'rgba(229,57,53,0.15)'; border = '2px solid #e53935'; color = '#e53935'; }
          }
          return (
            <button key={opt} onClick={() => handleSelect(opt)} style={{
              padding: '16px', borderRadius: 12, border, background: bg, color,
              fontSize: 20, fontWeight: 700, fontFamily: 'monospace',
              cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s',
            }}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <div style={{ marginBottom: 16, padding: 14, borderRadius: 12, background: isCorrect ? 'rgba(6,214,160,0.08)' : 'rgba(229,57,53,0.08)', border: `1px solid ${isCorrect ? 'var(--green)' : '#e53935'}`, animation: 'fadeIn 0.2s' }}>
          <div style={{ fontWeight: 700, color: isCorrect ? 'var(--green)' : '#e53935', marginBottom: 6 }}>
            {isCorrect ? '✅ Đúng!' : `❌ Sai! Đáp án: ${cur.correct}`}
          </div>
          <div style={{ fontSize: 13, color: 'var(--mute)' }}>💡 {cur.mnemonic}</div>
        </div>
      )}

      <button className="btn btn-primary" style={{ width: '100%', padding: 14, fontSize: 16, background: '#e53935' }} onClick={selected ? handleNext : undefined} disabled={!selected}>
        {idx + 1 >= questions.length ? 'Xem kết quả 🏁' : 'Tiếp theo →'}
      </button>
    </div>
  );
}

// ── Màn hình kết quả ─────────────────────────────────────
function ResultScreen({ score, total, modeName, onRetry, onHome }: {
  score: number; total: number; modeName: string;
  onRetry: () => void; onHome: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '👍' : pct >= 50 ? '📖' : '💪';
  const msg = pct >= 90 ? 'Xuất sắc! Bạn nhớ cực kỹ!' : pct >= 70 ? 'Khá tốt! Ôn thêm một chút!' : pct >= 50 ? 'Tiếp tục cố gắng nhé!' : 'Luyện thêm — bạn sẽ nhớ được!';
  return (
    <div style={{ textAlign: 'center', paddingTop: 40, maxWidth: 480, margin: '0 auto' }}>
      <div style={{ fontSize: 72 }}>{emoji}</div>
      <h2 style={{ margin: '12px 0 4px' }}>{score}/{total} câu đúng</h2>
      <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--gold)', marginBottom: 8 }}>{pct}%</div>
      <p style={{ color: 'var(--mute)', marginBottom: 28 }}>{modeName} · {msg}</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button className="btn btn-ghost" onClick={onRetry}>🔄 Làm Lại</button>
        <button className="btn btn-primary" onClick={onHome}>← Về Katakana</button>
      </div>
    </div>
  );
}

// ── Trang chính ────────────────────────────────────────────
export function KatakanaExercisePage({ onHome }: Props) {
  const [mode, setMode] = useState<Mode>('pick');
  const [result, setResult] = useState<{ score: number; total: number; modeName: string } | null>(null);

  const handleFinish = useCallback((score: number, total: number, modeName: string) => {
    setResult({ score, total, modeName });
    setMode('done');
  }, []);

  const handleRetry = () => {
    setMode('pick');
    setResult(null);
  };

  const MODES = [
    {
      id: 'flash' as const,
      icon: '⚡',
      title: 'Nhận Diện Nhanh',
      desc: 'Nhìn Katakana → Chọn romaji đúng từ 4 lựa chọn',
      count: `${KATAKANA.length} chữ`,
      color: 'var(--blue)',
    },
    {
      id: 'loanword' as const,
      icon: '📖',
      title: 'Đọc Loanword',
      desc: 'Nhìn từ tiếng Nhật → Đoán nghĩa tiếng Việt',
      count: '20 câu',
      color: 'var(--gold)',
    },
    {
      id: 'confusable' as const,
      icon: '🎯',
      title: 'Cặp Dễ Nhầm',
      desc: 'Chỉ tập trung: シ↔ツ  ソ↔ン  ウ↔ク  ア↔マ',
      count: '20 câu',
      color: '#e53935',
    },
  ];

  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button className="btn-back" onClick={mode === 'pick' ? onHome : () => { setMode('pick'); setResult(null); }}>
          {mode === 'pick' ? '← Về Katakana' : '← Chọn bài khác'}
        </button>
        <h2 style={{ flex: 1, fontSize: 18, fontWeight: 700 }}>🎮 Luyện Tập Katakana</h2>
      </div>

      {mode === 'pick' && (
        <>
          <p style={{ color: 'var(--mute)', fontSize: 13, marginBottom: 24 }}>
            Chọn bài tập phù hợp với trình độ hiện tại của bạn:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {MODES.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className="ex-mode-card"
                style={{ '--mode-color': m.color, border: `1px solid var(--border)` } as React.CSSProperties}
              >
                <span className="ex-mode-icon" style={{ background: `${m.color}20`, fontSize: 28 }}>{m.icon}</span>
                <div className="ex-mode-info">
                  <div className="ex-mode-title" style={{ color: m.color }}>{m.title}</div>
                  <div className="ex-mode-desc">{m.desc}</div>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--mute)', whiteSpace: 'nowrap' }}>{m.count}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {mode === 'flash' && <FlashQuiz onFinish={(s, t) => handleFinish(s, t, 'Nhận Diện Nhanh')} />}
      {mode === 'loanword' && <LoanwordQuiz onFinish={(s, t) => handleFinish(s, t, 'Đọc Loanword')} />}
      {mode === 'confusable' && <ConfusableQuiz onFinish={(s, t) => handleFinish(s, t, 'Cặp Dễ Nhầm')} />}
      {mode === 'done' && result && (
        <ResultScreen {...result} onRetry={handleRetry} onHome={() => { setMode('pick'); setResult(null); }} />
      )}
    </div>
  );
}
