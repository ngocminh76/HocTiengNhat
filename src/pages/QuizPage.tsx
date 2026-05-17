// src/pages/QuizPage.tsx
import { useState, useCallback } from 'react';
import type { QuizQuestion } from '../types';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  questions: QuizQuestion[];
  on답Done: (correct: boolean, kanjiId: number) => void; // per-question callback
  onFinish: (score: number, total: number, xpGained: number) => void;
  onHome: () => void;
}

export function QuizPage({ questions, on답Done, onFinish, onHome }: Props) {
  const [idx,      setIdx]      = useState(0);
  const [lives,    setLives]    = useState(3);
  const [score,    setScore]    = useState(0);
  const [xp,       setXp]       = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState('');
  const { speak, supported }    = useSpeech();

  const cur = questions[idx];

  const handleSelect = useCallback((opt: string) => {
    if (answered) return;
    setAnswered(true);
    setSelected(opt);

    const correct = opt === cur.answer;
    if (correct) {
      setScore((s) => s + 1);
      setXp((x) => x + 10);
      speak(cur.kanji.kanji); // phát âm khi đúng
    } else {
      setLives((l) => l - 1);
    }
    on답Done(correct, cur.kanji.id);

    setTimeout(() => {
      const nextIdx = idx + 1;
      const newLives = correct ? lives : lives - 1;
      if (newLives <= 0 || nextIdx >= questions.length) {
        onFinish(correct ? score + 1 : score, questions.length, correct ? xp + 10 : xp);
      } else {
        setIdx(nextIdx);
        setAnswered(false);
        setSelected('');
      }
    }, 1100);
  }, [answered, cur, idx, lives, onFinish, on답Done, questions, score, speak, xp]);

  if (!cur) return null;

  const progress = Math.round((idx / questions.length) * 100);

  return (
    <div className="screen">
      {/* Header row */}
      <div className="quiz-hdr">
        <button className="btn-back" onClick={onHome}>← Thoát</button>
        <div className="qtype-badge">
          {cur.type === 'meaning' ? '📖 Chọn nghĩa' : cur.type === 'on' ? '🔊 Âm On' : '📝 Cách đọc từ vựng'}
        </div>
        <div className="lives">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`heart ${i >= lives ? 'lost' : ''}`}>❤️</span>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--mute)', marginBottom: 6 }}>
        Câu {idx + 1}/{questions.length} · ⭐ {xp} XP
      </div>
      <div className="prog-track" style={{ marginBottom: 20 }}>
        <div className="prog-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Kanji display */}
      <div className="quiz-kanji-display">
        <div className="big">{cur.kanji.kanji}</div>
        {supported && (
          <button className="btn-icon" title="Nghe phát âm" onClick={() => speak(cur.kanji.kanji)}>
            🔊
          </button>
        )}
      </div>
      <div className="quiz-question">{cur.subtitle}</div>

      {/* Options */}
      <div className="options">
        {cur.options.map((opt) => {
          let cls = 'opt-btn';
          if (answered) {
            if (opt === cur.answer) cls += ' correct';
            else if (opt === selected) cls += ' wrong';
          }
          return (
            <button key={opt} className={cls} disabled={answered} onClick={() => handleSelect(opt)}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
