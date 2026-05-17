// src/pages/exercises/ReadingExercise.tsx
// Bài đọc hiểu văn bản N5: đoạn văn 3-5 câu JP → trả lời câu hỏi → xem bản dịch
// Layout 2 cột: trái = đoạn văn + câu hỏi | phải = panel từ vựng
import { useState } from 'react';
import type { ReadingPassage } from '../../types';
import { useSpeech } from '../../hooks/useSpeech';

const PARTICLE_TIPS: { word: string; meaning: string }[] = [
  { word: "に", meaning: "Trợ từ: ở/tại (vị trí tồn tại) hoặc thời gian cụ thể" },
  { word: "が", meaning: "Trợ từ: đánh dấu chủ ngữ của hành động/trạng thái" },
  { word: "を", meaning: "Trợ từ: đánh dấu tân ngữ (chịu tác động của động từ)" },
  { word: "は", meaning: "Trợ từ: đánh dấu chủ đề câu (đọc là wa)" },
  { word: "と", meaning: "Trợ từ: mang nghĩa 'và' / 'cùng với' hoặc dùng để trích dẫn" },
  { word: "へ", meaning: "Trợ từ: chỉ hướng đi (đến/về phía), đọc là e" },
  { word: "も", meaning: "Trợ từ: mang nghĩa 'cũng'" },
  { word: "で", meaning: "Trợ từ: chỉ nơi diễn ra hành động hoặc công cụ phương tiện" },
  { word: "います", meaning: "Động từ: Có / Ở (dành cho người, động vật)" },
  { word: "あります", meaning: "Động từ: Có / Ở (dành cho đồ vật)" },
  { word: "です", meaning: "Thì / Là (kết thúc câu lịch sự)" },
  { word: "か", meaning: "Trợ từ: đặt ở cuối đuôi để tạo câu hỏi" },
  { word: "ましょう", meaning: "Ngữ pháp: Rủ rê (Chúng ta cùng làm nhé)" },
  { word: "たい", meaning: "Ngữ pháp: Muốn làm gì đó" },
  { word: "てください", meaning: "Ngữ pháp: Hãy làm gì đó (yêu cầu)" },
  { word: "ています", meaning: "Ngữ pháp: Đang làm gì đó" },
];

interface Props {
  passages: ReadingPassage[];
  onFinish: () => void;
}

export function ReadingExercise({ passages, onFinish }: Props) {
  const [passageIdx, setPassageIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [revealedLines, setRevealedLines] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [finished, setFinished] = useState(false);
  const { speak, supported } = useSpeech();

  const passage = passages[passageIdx];
  const question = passage.questions[questionIdx];
  const isCorrect = selectedAnswer === question.correctIndex;

  const handleSelect = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setTotalAnswered(t => t + 1);
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (questionIdx < passage.questions.length - 1) {
      setQuestionIdx(q => q + 1);
      setSelectedAnswer(null);
      setShowTranslation(false);
    } else {
      setShowTranslation(true);
    }
  };

  const handleNextPassage = () => {
    if (passageIdx < passages.length - 1) {
      setPassageIdx(p => p + 1);
      setQuestionIdx(0);
      setSelectedAnswer(null);
      setShowTranslation(false);
      setRevealedLines([]);
    } else {
      setFinished(true);
    }
  };

  // Màn hình kết quả
  if (finished) {
    const pct = Math.round((score / totalAnswered) * 100);
    return (
      <div className="screen" style={{ paddingTop: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>{pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</div>
        <h2 style={{ marginBottom: 8 }}>Kết quả Đọc Hiểu</h2>
        <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--gold)', marginBottom: 8 }}>
          {score}/{totalAnswered}
        </div>
        <div style={{ color: 'var(--mute)', marginBottom: 32 }}>
          Đã đọc {passages.length} đoạn văn · Đúng {pct}%
        </div>
        <button className="btn btn-primary" onClick={onFinish} style={{ padding: '12px 40px', fontSize: 16 }}>
          🏠 Về trang chủ
        </button>
      </div>
    );
  }

  const progress = Math.round(((passageIdx * passage.questions.length + questionIdx) / (passages.length * passage.questions.length)) * 100);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 16px' }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 13 }}>
        <span style={{ color: 'var(--mute)' }}>📖 Bài {passageIdx + 1}/{passages.length} — {passage.title}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}/{totalAnswered}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 24, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      {/* ═══ LAYOUT 2 CỘT ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, alignItems: 'start' }}>

        {/* ── CỘT TRÁI: Đoạn văn + Câu hỏi ── */}
        <div>
          {/* Đoạn văn JP */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 12,
            border: '1px solid var(--border)',
            padding: '20px 24px',
            marginBottom: 20,
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 16, paddingBottom: 12,
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 600 }}>
                📄 Đọc đoạn văn sau:
              </span>
              <div style={{ fontSize: 11, color: 'var(--blue)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {passage.grammarUsed.map((g, i) => (
                  <span key={i} style={{
                    background: 'rgba(100, 181, 246, 0.1)',
                    padding: '2px 8px', borderRadius: 99,
                  }}>{g}</span>
                ))}
              </div>
            </div>

            {passage.lines.map((line, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                marginBottom: i < passage.lines.length - 1 ? 14 : 0,
              }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 20, lineHeight: 1.6, fontWeight: 500 }}>
                    {line.jp}
                  </span>
                  {revealedLines.includes(i) && (
                    <div style={{ marginTop: 8, padding: 12, background: 'rgba(255, 255, 255, 0.03)', borderRadius: 8, borderLeft: '3px solid var(--gold)' }}>
                      {line.segments ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', marginBottom: 8 }}>
                          {line.segments.map((seg, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                              <span style={{ fontSize: 16, fontWeight: 600 }}>{seg.jp}</span>
                              <span style={{ fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>{seg.vn}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                         <div style={{ fontSize: 14, color: 'var(--gold)', marginBottom: 8 }}>{line.vn}</div>
                      )}
                      
                      <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--mute)', borderTop: line.segments ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingTop: line.segments ? 8 : 0 }}>
                        {line.romaji}
                      </div>

                      {PARTICLE_TIPS.filter(t => line.jp.includes(t.word)).length > 0 && (
                        <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                          <div style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 4 }}>💡 Từ khóa & Trợ từ:</div>
                          {PARTICLE_TIPS.filter(t => line.jp.includes(t.word)).map((tip, idx) => (
                            <div key={idx} style={{ fontSize: 13, marginBottom: 2 }}>
                              <strong style={{ color: 'var(--blue)', display: 'inline-block', minWidth: 50 }}>{tip.word}</strong>
                              <span style={{ color: 'var(--text)' }}> {tip.meaning}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div style={{ display: 'flex', gap: 8, marginTop: 4, flexShrink: 0 }}>
                  <button 
                    className="btn-icon" 
                    onClick={() => setRevealedLines(prev => 
                      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
                    )}
                    style={{ fontSize: 16, opacity: revealedLines.includes(i) ? 0.5 : 1 }} 
                    title={revealedLines.includes(i) ? "Ẩn Romaji & Phân tích" : "Hiện Romaji & Phân tích"}
                  >
                    {revealedLines.includes(i) ? '🙈' : '👁️'}
                  </button>
                  {supported && (
                    <button className="btn-icon" onClick={() => speak(line.jp, 0.85)}
                      style={{ fontSize: 16 }} title="Nghe câu này">
                      🔊
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bản dịch (sau khi trả lời hết) */}
          {showTranslation ? (
            <>
              <div style={{
                background: 'var(--bg-card)', borderRadius: 12,
                border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 20,
              }}>
                <div style={{
                  padding: '10px 16px', background: 'rgba(255,255,255,0.04)',
                  borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 13, color: 'var(--mute)',
                }}>
                  📝 Bản dịch chi tiết
                </div>
                {passage.lines.map((line, i) => (
                  <div key={i} style={{
                    padding: '12px 16px',
                    borderBottom: i < passage.lines.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{line.jp}</div>
                    <div style={{ fontSize: 13, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{line.romaji}</div>
                    <div style={{ fontSize: 14, color: 'var(--gold)' }}>🇻🇳 {line.vn}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" onClick={handleNextPassage}
                style={{ width: '100%', padding: 14, fontSize: 16 }}>
                {passageIdx < passages.length - 1 ? '📖 Bài tiếp theo →' : '🏆 Xem kết quả'}
              </button>
            </>
          ) : (
            /* Câu hỏi comprehension */
            <div style={{
              background: 'var(--bg-card)', borderRadius: 12,
              border: '1px solid var(--border)', padding: '20px 24px',
            }}>
              <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 12 }}>
                ❓ Câu {questionIdx + 1}/{passage.questions.length}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, lineHeight: 1.5 }}>
                {question.question}
              </div>

              <div style={{ display: 'grid', gap: 10 }}>
                {question.options.map((opt, i) => {
                  let bg = 'var(--surface-alt)';
                  let border = 'transparent';
                  let color = 'var(--text)';
                  if (selectedAnswer !== null) {
                    if (i === question.correctIndex) {
                      bg = 'rgba(76, 175, 80, 0.15)'; border = 'var(--green)'; color = 'var(--green)';
                    } else if (i === selectedAnswer && !isCorrect) {
                      bg = 'rgba(244, 67, 54, 0.15)'; border = '#e53935'; color = '#e53935';
                    }
                  }
                  return (
                    <button key={i} onClick={() => handleSelect(i)} disabled={selectedAnswer !== null}
                      style={{
                        padding: '14px 18px', borderRadius: 10, border: `2px solid ${border}`,
                        background: bg, color, fontSize: 15, textAlign: 'left',
                        cursor: selectedAnswer !== null ? 'default' : 'pointer',
                        fontWeight: selectedAnswer !== null && i === question.correctIndex ? 700 : 400,
                        transition: 'all 0.2s',
                      }}>
                      <span style={{ marginRight: 10, fontWeight: 700, opacity: 0.5 }}>
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: isCorrect ? 'var(--green)' : '#e53935' }}>
                    {isCorrect ? '✅ Chính xác!' : `❌ Sai rồi! Đáp án đúng: ${String.fromCharCode(65 + question.correctIndex)}`}
                  </div>
                  <button className="btn btn-secondary" onClick={handleNextQuestion}
                    style={{ padding: '8px 20px', fontSize: 14 }}>
                    {questionIdx < passage.questions.length - 1 ? 'Câu tiếp →' : '📝 Xem bản dịch'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── CỘT PHẢI: Panel từ vựng ── */}
        <div style={{
          background: 'var(--bg-card)', borderRadius: 12,
          border: '1px solid var(--border)', overflow: 'hidden',
          position: 'sticky', top: 16,
        }}>
          <div style={{
            padding: '10px 14px', borderBottom: '1px solid var(--border)',
            fontWeight: 700, fontSize: 13, background: 'rgba(255,255,255,0.04)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span>📖 Từ vựng trong bài</span>
            <span style={{
              background: 'var(--gold)', color: 'var(--bg)',
              borderRadius: 99, padding: '2px 10px', fontSize: 12, fontWeight: 800,
            }}>{passage.vocab.length}</span>
          </div>

          <div style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
            {passage.vocab.map((v, i) => (
              <div key={i} style={{
                padding: '10px 14px',
                borderBottom: i < passage.vocab.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex', alignItems: 'center', gap: 10,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 2 }}>
                    {v.word}
                  </div>
                  <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)' }}>
                    {v.reading}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--gold)', marginTop: 2 }}>
                    🇻🇳 {v.meaning}
                  </div>
                </div>
                {supported && (
                  <button className="btn-icon" onClick={() => speak(v.reading, 0.85)}
                    style={{ fontSize: 14, flexShrink: 0 }} title="Nghe từ này">
                    🔊
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
