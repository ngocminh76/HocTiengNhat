import React, { useState, useEffect } from 'react';
import { DOKKAI_REVIEWS } from '../data/dokkai-reviews';

interface Props {
  reviewId: string;
  onHome: () => void;
  addXP: (amount: number) => void;
  onComplete?: (isPassed: boolean, score: number) => void;
}

export function DokkaiReviewPage({ reviewId, onHome, addXP, onComplete }: Props) {
  const review = DOKKAI_REVIEWS.find(r => r.id === reviewId);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (submitted) return;
    
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  if (!review) {
    return (
      <div className="screen" style={{ textAlign: 'center', paddingTop: 100 }}>
        <h2 style={{ color: 'var(--mute)' }}>Đang cập nhật...</h2>
        <button className="btn btn-primary" onClick={onHome}>Quay lại</button>
      </div>
    );
  }

  const handleSelect = (questionId: string, optIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optIndex }));
  };

  const handleSubmit = () => {
    if (submitted) return;
    setSubmitted(true);
    let correct = 0;
    let totalQs = 0;
    review.passages.forEach(p => {
      p.questions.forEach(q => {
        totalQs++;
        if (answers[q.id] === q.correctIndex) correct++;
      });
    });
    
    if (correct > 0) {
      addXP(correct * 10);
    }

    if (onComplete) {
      onComplete(correct >= 15, correct);
    }
  };

  let globalQuestionIndex = 1;
  const isPassed = submitted && Object.values(answers).reduce((acc, _, idx) => {
      let qList: any[] = [];
      review.passages.forEach(p => qList = qList.concat(p.questions));
      const q = qList[idx];
      if (answers[q.id] === q.correctIndex) return acc + 1;
      return acc;
  }, 0) >= 15;

  return (
    <div className="screen" style={{ padding: '16px 0', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn-back" onClick={onHome}>← Quay lại</button>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: 'var(--green)' }}>{review.title}</h2>
            <div style={{ fontSize: 13, color: 'var(--mute)' }}>{review.description}</div>
          </div>
        </div>
        
        {/* TIMER UI */}
        <div style={{ 
          background: timeLeft < 180 ? 'rgba(239,71,111,0.1)' : 'var(--bg-card)', 
          border: `2px solid ${timeLeft < 180 ? 'var(--red)' : 'var(--border)'}`,
          padding: '8px 16px',
          borderRadius: 20,
          fontWeight: 900,
          fontSize: 20,
          color: timeLeft < 180 ? 'var(--red)' : 'var(--text)',
          animation: (timeLeft < 60 && !submitted) ? 'pulse 1s infinite' : 'none'
        }}>
          ⏱ {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', paddingRight: 8, paddingBottom: 64 }}>
        {review.passages.map((passage, pIdx) => {
          let typeLabel = '';
          switch(passage.type) {
            case 'moji_mondai1': typeLabel = '文字・語彙 問題１ (Đọc Kanji)'; break;
            case 'moji_mondai2': typeLabel = '文字・語彙 問題２ (Viết Kanji / Katakana)'; break;
            case 'moji_mondai3': typeLabel = '文字・語彙 問題３ (Điền từ vựng)'; break;
            case 'moji_mondai4': typeLabel = '文字・語彙 問題４ (Tìm câu đồng nghĩa)'; break;
            case 'mondai1': typeLabel = '文法 問題１ (Ngữ pháp / Trợ từ)'; break;
            case 'mondai2': typeLabel = '文法 問題２ (Sắp xếp câu ★)'; break;
            case 'mondai3': typeLabel = '文法 問題３ (Đục lỗ đoạn văn)'; break;
            case 'mondai4': typeLabel = '読解 問題４ (Đoạn văn ngắn)'; break;
            case 'mondai5': typeLabel = '読解 問題５ (Đoạn văn trung bình)'; break;
            case 'mondai6': typeLabel = '読解 問題６ (Tìm kiếm thông tin)'; break;
          }
          
          return (
            <div key={passage.id} style={{
              background: 'var(--bg-card)',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              marginBottom: 24
            }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--gold)', marginBottom: 16, borderBottom: '1px dashed var(--border)', paddingBottom: 8 }}>
                {typeLabel}
              </div>

              {/* Passage Content */}
              <div style={{ marginBottom: 24 }}>
                {passage.htmlContent ? (
                  <div dangerouslySetInnerHTML={{ __html: passage.htmlContent }} />
                ) : (
                  <div style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text)', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: 8, borderLeft: '4px solid #64b5f6' }}>
                    {passage.text?.map((para, i) => (
                      <p key={i} style={{ margin: '0 0 12px 0' }}>{para}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {passage.questions.map(q => {
                  const qNum = globalQuestionIndex++;
                  const isAnswered = answers[q.id] !== undefined;
                  const isCorrect = answers[q.id] === q.correctIndex;

                  return (
                    <div key={q.id}>
                      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
                        <span style={{ display: 'inline-block', background: 'var(--text)', color: 'var(--bg)', borderRadius: '50%', width: 24, height: 24, textAlign: 'center', lineHeight: '24px', fontSize: 14, marginRight: 8 }}>
                          {qNum}
                        </span>
                        {q.question}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 32 }}>
                        {q.options.map((opt, oIdx) => {
                          const isSelected = answers[q.id] === oIdx;
                          let bg = 'var(--surface-alt)';
                          let border = '1px solid var(--border)';
                          
                          if (submitted) {
                            if (oIdx === q.correctIndex) {
                              bg = 'rgba(6,214,160,0.1)';
                              border = '1px solid var(--green)';
                            } else if (isSelected) {
                              bg = 'rgba(239,71,111,0.1)';
                              border = '1px solid var(--red)';
                            }
                          } else if (isSelected) {
                            bg = 'rgba(100,181,246,0.1)';
                            border = '1px solid #64b5f6';
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelect(q.id, oIdx)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: 12,
                                padding: '12px 16px', borderRadius: 8,
                                background: bg, border: border,
                                textAlign: 'left', cursor: submitted ? 'default' : 'pointer',
                                transition: 'all 0.2s', color: 'var(--text)'
                              }}
                            >
                              <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${isSelected ? (submitted ? (isCorrect ? 'var(--green)' : 'var(--red)') : '#64b5f6') : 'var(--mute)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {isSelected && <div style={{ width: 12, height: 12, borderRadius: '50%', background: submitted ? (isCorrect ? 'var(--green)' : 'var(--red)') : '#64b5f6' }} />}
                              </div>
                              <span style={{ fontSize: 16 }}>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div style={{ marginTop: 16, paddingLeft: 32 }}>
                          {isCorrect ? (
                            <div style={{ color: 'var(--green)', fontSize: 14, fontWeight: 700 }}>✅ Chính xác!</div>
                          ) : (
                            <div style={{ color: 'var(--red)', fontSize: 14, fontWeight: 700 }}>❌ Sai rồi!</div>
                          )}
                          {q.explanation && (
                            <div style={{ marginTop: 8, fontSize: 13, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: 8 }}>
                              <strong>Giải thích:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}

        {/* Submit Button */}
        {!submitted ? (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button 
              className="btn btn-primary"
              style={{ fontSize: 16, padding: '16px 48px', borderRadius: 30 }}
              onClick={handleSubmit}
            >
              Nộp Bài Lấy Điểm
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>
              {isPassed ? '🎉' : '💪'}
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: isPassed ? 'var(--green)' : 'var(--red)', marginBottom: 8 }}>
              {isPassed ? 'HOÀN THÀNH XUẤT SẮC!' : 'CẦN CỐ GẮNG THÊM!'}
            </div>
            <div style={{ fontSize: 16, color: 'var(--text)', marginBottom: 24 }}>
              Bạn đã làm đúng <strong>{Object.values(answers).reduce((acc, _, idx) => {
                  let qList: any[] = [];
                  review.passages.forEach(p => qList = qList.concat(p.questions));
                  const q = qList[idx];
                  if (answers[q.id] === q.correctIndex) return acc + 1;
                  return acc;
              }, 0)} / 21</strong> câu. 
              {!isPassed && ' (Cần đạt 15/21 để qua ải)'}
            </div>
            <button 
              className={isPassed ? "btn btn-primary" : "btn btn-ghost"}
              style={{ fontSize: 16, padding: '12px 32px' }}
              onClick={onHome}
            >
              {isPassed ? 'Tiếp tục hành trình →' : '← Trở về'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
