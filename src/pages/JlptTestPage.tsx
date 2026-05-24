// src/pages/JlptTestPage.tsx
import { useState, useMemo, useEffect } from 'react';
import type { JlptTest, JlptQuestion } from '../data/jlpt-tests';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  test: JlptTest;
  onBack: () => void;
  onHome: () => void;
}

export function JlptTestPage({ test, onBack, onHome }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes limit
  const { speak, supported } = useSpeech();
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelect = (questionId: string, option: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const score = useMemo(() => {
    if (!submitted) return 0;
    return test.questions.filter(q => answers[q.id] === q.answer).length;
  }, [submitted, answers, test.questions]);

  const handleSubmit = () => {
    if (Object.keys(answers).length < test.questions.length) {
      if (!window.confirm('Bạn chưa làm hết các câu hỏi. Vẫn muốn nộp bài?')) {
        return;
      }
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="screen" style={{ paddingBottom: 100 }}>
      <div className="top-bar" style={{ marginBottom: 24 }}>
        <button className="btn btn-ghost" onClick={onBack}>← Danh sách đề</button>
        <span style={{ fontWeight: 600, marginLeft: 8 }}>{test.title}</span>
      </div>

      <div style={{ 
        position: 'fixed',
        top: 80,
        right: 20,
        zIndex: 100,
        fontSize: 18, 
        fontWeight: 700, 
        fontVariantNumeric: 'tabular-nums',
        color: timeLeft < 60 && !submitted ? 'var(--red)' : 'var(--gold)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 16px',
        background: 'var(--bg-card)',
        borderRadius: 8,
        border: `2px solid ${timeLeft < 60 && !submitted ? 'var(--red)' : 'var(--border)'}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}>
        ⏱ {formatTime(timeLeft)}
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {submitted && (
          <div style={{ 
            background: score === test.questions.length ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 152, 0, 0.1)',
            border: `1px solid ${score === test.questions.length ? 'var(--green)' : '#ff9800'}`,
            borderRadius: 16, padding: 24, marginBottom: 32, textAlign: 'center'
          }}>
            <h2 style={{ margin: '0 0 8px' }}>Kết Quả: {score} / {test.questions.length}</h2>
            <p style={{ margin: 0, color: 'var(--mute)' }}>
              {score === test.questions.length ? 'Tuyệt vời! Bạn đã đúng tất cả.' : 'Hãy xem lại những câu làm sai bên dưới nhé.'}
            </p>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {test.questions.map((q, i) => (
            <div key={q.id} style={{ 
              background: 'var(--bg-card)', 
              borderRadius: 16, 
              border: '1px solid var(--border)',
              padding: 24,
              boxShadow: submitted && answers[q.id] !== q.answer ? '0 0 0 2px var(--red)' : 'none'
            }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <div style={{ 
                  background: 'var(--primary-fade)', color: 'var(--primary)',
                  fontWeight: 800, fontSize: 13, padding: '4px 8px', borderRadius: 6, height: 'fit-content'
                }}>
                  Câu {i + 1}
                </div>
                {q.type === 'stars' && (
                  <div style={{ background: '#ffeb3b20', color: '#fbc02d', fontWeight: 700, fontSize: 13, padding: '4px 8px', borderRadius: 6, height: 'fit-content' }}>
                    ★ Dấu Sao
                  </div>
                )}
                {q.type === 'reading' && (
                  <div style={{ background: '#ce93d820', color: '#ba68c8', fontWeight: 700, fontSize: 13, padding: '4px 8px', borderRadius: 6, height: 'fit-content' }}>
                    📖 Đọc Hiểu
                  </div>
                )}
                {q.type === 'listening' && (
                  <div style={{ background: '#29b6f620', color: '#29b6f6', fontWeight: 700, fontSize: 13, padding: '4px 8px', borderRadius: 6, height: 'fit-content' }}>
                    🎧 Nghe Hiểu
                  </div>
                )}
              </div>

              {q.readingPassage && (
                <div style={{ 
                  background: 'rgba(255,255,255,0.02)', padding: 16, borderRadius: 8, 
                  marginBottom: 16, borderLeft: '3px solid var(--mute)',
                  fontSize: 15, lineHeight: 1.6
                }}>
                  {q.readingPassage}
                </div>
              )}

              <div className="q-row">
                <div className="q-col-left">
                  {q.type === 'listening' ? (
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                      <button 
                        className="btn" 
                        style={{ padding: '16px 32px', fontSize: 24, borderRadius: 100, background: 'var(--primary-fade)', color: 'var(--primary)', border: '2px solid var(--primary)' }}
                        onClick={() => {
                          const textToSpeak = q.question.split('|')[1] || q.question.split('|')[0];
                          speak(textToSpeak, 0.9);
                        }}
                      >
                        ▶ Phát Âm Thanh
                      </button>
                      <p style={{ marginTop: 12, color: 'var(--mute)', fontSize: 14 }}>Nghe và chọn từ vựng tiếng Nhật tương ứng.</p>
                    </div>
                  ) : (
                    <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 20, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                      {q.question}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {q.options.map((opt, optIndex) => {
                      const isSelected = answers[q.id] === opt;
                      const isCorrect = opt === q.answer;
                      
                      let bg = 'rgba(255,255,255,0.03)';
                      let borderColor = 'var(--border)';
                      let color = 'inherit';

                      if (submitted) {
                        if (isCorrect) {
                          bg = 'rgba(76, 175, 80, 0.1)';
                          borderColor = 'var(--green)';
                          color = 'var(--green)';
                        } else if (isSelected) {
                          bg = 'rgba(244, 67, 54, 0.1)';
                          borderColor = 'var(--red)';
                          color = 'var(--red)';
                        }
                      } else if (isSelected) {
                        bg = 'var(--primary-fade)';
                        borderColor = 'var(--primary)';
                        color = 'var(--primary)';
                      }

                      return (
                        <button key={optIndex}
                          onClick={() => handleSelect(q.id, opt)}
                          disabled={submitted}
                          style={{
                            padding: '12px 16px',
                            background: bg,
                            border: `1px solid ${borderColor}`,
                            color: color,
                            borderRadius: 8,
                            fontSize: 15,
                            textAlign: 'left',
                            cursor: submitted ? 'default' : 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            width: '100%'
                          }}
                        >
                          <div style={{ 
                            width: 24, height: 24, borderRadius: '50%', 
                            border: `1px solid ${isSelected || (submitted && isCorrect) ? 'currentColor' : 'var(--mute)'}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 12, flexShrink: 0
                          }}>
                            {submitted && isCorrect ? '✓' : submitted && isSelected ? '✕' : isSelected ? '●' : ''}
                          </div>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 16 }} className="no-print">
                    {q.explanation && (
                      <button
                        onClick={() => setRevealedExplanations(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                        style={{
                          background: 'transparent',
                          color: 'var(--gold)',
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '6px 12px',
                          borderRadius: 20,
                          transition: 'all 0.15s',
                          backgroundColor: revealedExplanations[q.id] ? 'rgba(255, 184, 108, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 184, 108, 0.2)'
                        }}
                      >
                        💡 {revealedExplanations[q.id] ? 'Ẩn giải thích' : 'Xem gợi ý / giải thích'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Right column: Explanation or Placeholder */}
                {submitted || revealedExplanations[q.id] ? (
                  <div className="q-col-right">
                    <div style={{ marginTop: 0, background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', height: '100%', boxSizing: 'border-box' }}>
                      {submitted && (
                        <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
                          <strong style={{ color: answers[q.id] === q.answer ? 'var(--green)' : 'var(--red)' }}>
                            {answers[q.id] === q.answer ? '✅ Đúng' : '❌ Sai'} 
                          </strong>
                          <span style={{ color: 'var(--mute)', fontSize: 13 }}>| Kết quả bài làm</span>
                        </div>
                      )}
                      <div style={{ padding: 16, fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                        {q.translation && (
                          <div style={{ marginBottom: 12 }}>
                            <strong style={{ color: 'var(--gold)' }}>Dịch nghĩa:</strong> {q.translation}
                          </div>
                        )}
                        {q.explanation && (
                          <div>
                            <strong style={{ color: 'var(--primary)' }}>Giải thích chi tiết:</strong><br />{q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="q-col-right q-col-right-placeholder">
                    <div className="q-placeholder">
                      <span style={{ fontSize: 24, marginBottom: 8 }}>💡</span>
                      <span style={{ fontSize: 13 }}>Nhấn nút "Xem gợi ý" để xem giải thích chi tiết tại đây.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!submitted ? (
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '16px 48px', fontSize: 18 }} onClick={handleSubmit}>
              Nộp Bài
            </button>
          </div>
        ) : (
          <div style={{ marginTop: 40, textAlign: 'center', display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button className="btn btn-ghost" onClick={onBack}>Về Danh Sách</button>
            <button className="btn btn-primary" onClick={() => {
              setSubmitted(false);
              setAnswers({});
              setTimeLeft(25 * 60);
              window.scrollTo(0,0);
            }}>Làm Lại</button>
          </div>
        )}
      </div>
    </div>
  );
}
