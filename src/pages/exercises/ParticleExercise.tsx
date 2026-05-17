import { useState, useMemo } from 'react';
import type { ParticleQuestion } from '../../types';
import { useSpeech } from '../../hooks/useSpeech';
import { PARTICLE_QUESTIONS } from '../../data/particles-n5';

interface Props {
  onHome: () => void;
}

export function ParticleExercise({ onHome }: Props) {
  // Randomize exactly 10 questions (or all if < 10)
  const pool = useMemo(() => {
    const shuffled = [...PARTICLE_QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  
  const { speak, supported } = useSpeech();

  const q = pool[currentIndex];

  const handleSelect = (ans: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(ans);
    if (ans === q.answer) {
      setScore(s => s + 1);
      // Phát âm cả câu với đáp án đúng để nghe cho quen tai
      if (supported) {
         speak(q.sentence.replace('[blank]', q.answer), 0.85);
      }
    } else {
      if (supported) {
         speak(q.sentence.replace('[blank]', q.answer), 0.85);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < pool.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const pct = Math.round((score / pool.length) * 100);
    return (
      <div className="screen" style={{ paddingTop: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>{pct >= 80 ? '🎯' : pct >= 50 ? '👍' : '💪'}</div>
        <h2 style={{ marginBottom: 8 }}>Chinh Phục Trợ Từ</h2>
        <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--gold)', marginBottom: 8 }}>
          {score} / {pool.length}
        </div>
        <button className="btn btn-primary" onClick={onHome} style={{ padding: '12px 40px', fontSize: 16, marginTop: 20 }}>
          🏠 Về trang chủ
        </button>
      </div>
    );
  }

  const isCorrect = selectedAnswer === q.answer;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '20px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <button className="btn-icon" onClick={onHome} style={{ fontSize: 20 }}>🏠</button>
        <span style={{ color: 'var(--mute)', fontWeight: 600 }}>Câu hỏi {currentIndex + 1} / {pool.length}</span>
        <div style={{ width: 40, textAlign: 'right', fontWeight: 800, color: 'var(--gold)' }}>⭐ {score}</div>
      </div>

      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 16,
        border: '1px solid var(--border)',
        padding: '30px 24px',
        textAlign: 'center',
        marginBottom: 20,
      }}>
        <div style={{ fontSize: 13, color: 'var(--blue)', marginBottom: 16, fontWeight: 700 }}>Trợ từ nào phù hợp nhất?</div>
        
        <div style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.6, marginBottom: 12 }}>
          {q.sentence.split('[blank]').map((part, idx, arr) => (
            <span key={idx}>
              {part}
              {idx < arr.length - 1 && (
                <span style={{ 
                  display: 'inline-block', 
                  minWidth: selectedAnswer ? 50 : 60,
                  borderBottom: selectedAnswer ? 'none' : '2px dashed var(--gold)',
                  margin: '0 8px',
                  color: selectedAnswer ? (isCorrect ? 'var(--green)' : '#e53935') : 'transparent',
                  fontWeight: 800,
                  fontSize: selectedAnswer ? 28 : 24,
                }}>
                  {selectedAnswer ? q.answer : '___'}
                </span>
              )}
            </span>
          ))}
          {supported && (
            <button className="btn-icon" onClick={() => speak(q.sentence.replace('[blank]', q.answer), 0.85)}
              style={{ fontSize: 16, display: 'inline-block', marginLeft: 12 }} title="Nghe câu này">
              🔊
            </button>
          )}
        </div>
        
        <div style={{ fontSize: 15, color: 'var(--mute)' }}>🇻🇳 {q.vn}</div>
      </div>

      {/* Grid Options */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
        {q.options.map(opt => {
          let bg = 'var(--surface-alt)';
          let border = 'transparent';
          let color = 'var(--text)';
          if (selectedAnswer) {
            if (opt === q.answer) {
              bg = 'rgba(76, 175, 80, 0.15)'; border = 'var(--green)'; color = 'var(--green)';
            } else if (opt === selectedAnswer && !isCorrect) {
              bg = 'rgba(244, 67, 54, 0.15)'; border = '#e53935'; color = '#e53935';
            }
          }
          return (
            <button 
              key={opt}
              onClick={() => handleSelect(opt)}
              disabled={selectedAnswer !== null}
              style={{
                padding: '20px',
                borderRadius: 12,
                fontSize: 24,
                fontWeight: 700,
                background: bg,
                border: `2px solid ${border}`,
                color: color,
                cursor: selectedAnswer ? 'default' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {/* Kết quả & Giải thích */}
      {selectedAnswer && (
        <div style={{ animation: 'fadeIn 0.3s' }}>
          <div style={{ 
            fontSize: 18, fontWeight: 700, 
            color: isCorrect ? 'var(--green)' : '#e53935',
            marginBottom: 16, textAlign: 'center'
          }}>
            {isCorrect ? '✨ Chính xác!' : `❌ Sai rồi! Nhớ dùng [${q.answer}] nhé.`}
          </div>

          <div style={{
            background: 'var(--surface-alt)',
            borderRadius: 12,
            padding: '20px',
            marginBottom: 20
          }}>
            <strong style={{ display: 'block', marginBottom: 16, color: 'var(--gold)', fontSize: 14 }}>
               BÓC TÁCH CẤU TRÚC (S-V-O)
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {Object.entries(q.structure).map(([role, text]) => {
                let badgeColor = 'var(--mute)';
                if (role.includes('S')) badgeColor = '#64b5f6'; // Blue
                if (role.includes('V')) badgeColor = '#ef5350'; // Red
                if (role.includes('O')) badgeColor = '#81c784'; // Green
                if (role.includes('P')) badgeColor = '#ffb74d'; // Orange
                if (role.includes('T')) badgeColor = '#ba68c8'; // Purple
                return (
                  <div key={role} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ 
                      minWidth: 40, textAlign: 'center',
                      background: badgeColor, color: '#000', 
                      borderRadius: 6, padding: '2px 8px', fontSize: 12, fontWeight: 800 
                    }}>{role}</span>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{text}</span>
                  </div>
                )
              })}
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: 8, fontSize: 14, lineHeight: 1.5 }}>
               💡 <strong>Giải thích:</strong> {q.explanation}
            </div>
          </div>

          <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', padding: '16px', fontSize: 18 }}>
            Tiếp tục ⏭️
          </button>
        </div>
      )}
    </div>
  )
}
