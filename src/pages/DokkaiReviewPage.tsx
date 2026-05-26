import React, { useState, useEffect } from 'react';
import { DOKKAI_REVIEWS } from '../data/dokkai-reviews';
import { cleanSentenceForN5 } from '../utils/kanji';

interface Props {
  reviewId: string;
  onHome: () => void;
  addXP: (amount: number) => void;
  onComplete?: (isPassed: boolean, score: number) => void;
}

const PASSAGE_TRANSLATIONS: Record<string, string[]> = {
  'review_1_5': [
    'Hôm qua là sinh nhật của tôi.',
    'Tôi đã đi đến nhà hàng cùng với bạn bè. (1)',
    'Chúng tôi đã ăn bữa ăn ngon ở nhà hàng.',
    'Sau đó, chúng tôi đã xem phim. (2) Nó đã rất vui.'
  ],
  'review_6_10': [
    'Hôm nay là sinh nhật của tôi.',
    'Buổi sáng, tôi đã nhận được quà từ mẹ. Đó là một chiếc áo sơ mi và một chiếc mũ.',
    'Áo sơ mi màu trắng. Mũ màu đen.',
    'Buổi tối, tôi cùng gia đình đi ăn tối tại nhà hàng.'
  ],
  'review_11_15': [
    'Gia đình của tôi có 4 người.',
    'Anh trai tôi là sinh viên đại học. Hiện tại đang sống ở Tokyo. (1)',
    'Tôi là học sinh cấp ba (trung học phổ thông).',
    'Sang năm tôi muốn vào đại học. (2)'
  ],
  'review_16_20': [
    'Tôi thức dậy lúc 6 giờ mỗi sáng.',
    'Trước khi ăn sáng, tôi chạy bộ. (1)',
    'Chạy bộ là sở thích của tôi.',
    'Và sau khi tắm vòi hoa sen, tôi ăn cơm.'
  ],
  'review_21_25': [
    'Hôm qua tôi đã đến nhà bạn bè chơi.',
    'Bạn tôi đã làm bánh kem ngon cho tôi ăn. (1)',
    'Bánh đã rất ngon.',
    'Tôi nghĩ là mình muốn ăn bánh kem lại lần nữa. (2)'
  ]
};

const getPassageTranslation = (reviewId: string) => {
  if (!reviewId) return null;
  const normalized = reviewId.toLowerCase();
  if (normalized.includes('review_1_5')) return PASSAGE_TRANSLATIONS['review_1_5'];
  if (normalized.includes('review_6_10')) return PASSAGE_TRANSLATIONS['review_6_10'];
  if (normalized.includes('review_11_15')) return PASSAGE_TRANSLATIONS['review_11_15'];
  if (normalized.includes('review_16_20')) return PASSAGE_TRANSLATIONS['review_16_20'];
  if (normalized.includes('review_21_25')) return PASSAGE_TRANSLATIONS['review_21_25'];
  return null;
};

const PASSAGE_VOCABULARY: Record<string, string[]> = {
  'review_1_5': [
    'きのう (kinou): Hôm qua',
    'たんじょうび (tanjoubi): Sinh nhật',
    'ともだち (tomodachi): Bạn bè',
    'レストラン (resutoran): Nhà hàng',
    'おいしい (oishii): Ngon',
    'ごはん (gohan): Cơm, bữa ăn',
    'それから (sorekara): Sau đó, tiếp theo',
    'えいが (eiga): Bộ phim, điện ảnh',
    'たのしかった (tanoshikatta): Đã rất vui (quá khứ của たのしい)'
  ],
  'review_6_10': [
    'きょう (kyou): Hôm nay',
    'あsа (asa): Buổi sáng',
    'はは (haha): Mẹ (của mình)',
    'プレゼント (purezento): Quà tặng',
    'もらいました (moraimashita): Đã nhận (từ もらいます)',
    'シャツ (shatsu): Áo sơ mi',
    'ぼうし (boushi): Mũ, nón',
    'しろい (shiroi): Màu trắng',
    'くろい (kuroi): Màu đen',
    'よる (yoru): Buổi tối, ban đêm',
    'かぞく (kazoku): Gia đình',
    'いっしょに (isshoni): Cùng nhau, cùng với',
    'しょくじを します (shokuji wo shimasu): Dùng bữa, ăn uống'
  ],
  'review_11_15': [
    'かぞく (kazoku): Gia đình',
    '４にん (yonin): 4 người',
    'あに (ani): Anh trai',
    'だいがくせい (daigakusei): Sinh viên đại học',
    'とうきょう (toukyou): Tokyo',
    'すんでいます (sundeimasu): Đang sống (từ すみます)',
    'こうこうsei (koukousei): Học sinh cấp ba',
    'らいねん (rainen): Sang năm'
  ],
  'review_16_20': [
    'まいあさ (maiasa): Mỗi sáng, hàng sáng',
    'おきます (okimasu): Thức dậy',
    'あsaごはん (asagohan): Bữa sáng, cơm sáng',
    'まえに (maeni): Trước khi',
    'ジョギング (jogingu): Chạy bộ',
    'しゅみ (shumi): Sở thích',
    'シャワーを あびます (shawaa wo abimasu): Tắm vòi hoa sen',
    'あびてから (abitekara): Sau khi tắm (Vて + から)'
  ],
  'review_21_25': [
    'きのう (kinou): Hôm qua',
    'ともだち (tomodachi): Bạn bè',
    'うちへ いきました (uchi e ikimashita): Đi đến nhà (ai đó) chơi',
    'ケーキ (keeki): Bánh ngọt, bánh kem',
    'つくります (tsukurimasu): Làm, chế tạo (thể て là つくって)',
    'くれました (kuremashita): Cho/tặng tôi (làm việc gì đó cho tôi)',
    'おいしかった (oishikatta): Đã ngon (quá khứ của おいしい)',
    'また (mata): Lại, lần nữa',
    'たべたい (tabetai): Muốn ăn (thể Vたい của たべます)',
    'おもいます (omoimasu): Nghĩ, suy nghĩ'
  ]
};

const getPassageVocabulary = (reviewId: string) => {
  if (!reviewId) return null;
  const normalized = reviewId.toLowerCase();
  if (normalized.includes('review_1_5')) return PASSAGE_VOCABULARY['review_1_5'];
  if (normalized.includes('review_6_10')) return PASSAGE_VOCABULARY['review_6_10'];
  if (normalized.includes('review_11_15')) return PASSAGE_VOCABULARY['review_11_15'];
  if (normalized.includes('review_16_20')) return PASSAGE_VOCABULARY['review_16_20'];
  if (normalized.includes('review_21_25')) return PASSAGE_VOCABULARY['review_21_25'];
  return null;
};

const cleanExplanation = (html: string) => {
  if (!html) return '';
  let cleaned = html.replace(/<br\/?>\s*<br\/?>\s*<strong[^>]*>📝\s*Dịch nghĩa toàn bộ đoạn văn:<\/strong>[\s\S]*?<\/span>/gi, '');
  cleaned = cleaned.replace(/<br\/?>\s*<br\/?>\s*<strong[^>]*>📚\s*Từ vựng trong đoạn văn:<\/strong>[\s\S]*?<\/span>/gi, '');
  cleaned = cleaned.trim().replace(/(?:<br\/?>\s*)+$/gi, '').trim();
  return cleaned;
};


export function DokkaiReviewPage({ reviewId, onHome, addXP, onComplete }: Props) {
  const jlptFocus = localStorage.getItem('jlpt_focus_mode') || 'N5';

  const review = React.useMemo(() => {
    const rawReview = DOKKAI_REVIEWS.find(r => r.id === reviewId);
    if (!rawReview) return undefined;
    if (jlptFocus !== 'N5') return rawReview;

    return {
      ...rawReview,
      passages: rawReview.passages.map(p => {
        const resolvedTranslation = p.translation || getPassageTranslation(rawReview.id) || undefined;
        const resolvedVocabulary = p.vocabulary || getPassageVocabulary(rawReview.id) || undefined;
        return {
          ...p,
          text: p.text ? p.text.map(t => cleanSentenceForN5(t)) : undefined,
          translation: resolvedTranslation ? resolvedTranslation.map(t => cleanSentenceForN5(t)) : undefined,
          vocabulary: resolvedVocabulary ? resolvedVocabulary.map(v => cleanSentenceForN5(v)) : undefined,
          questions: p.questions.map(q => ({
            ...q,
            question: cleanSentenceForN5(q.question),
            options: q.options.map(opt => cleanSentenceForN5(opt)),
            explanation: cleanSentenceForN5(q.explanation),
          }))
        };
      })
    };
  }, [reviewId, jlptFocus]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

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
  
  // Flat list of all questions in the review
  const allQuestions = React.useMemo(() => {
    let qList: any[] = [];
    review.passages.forEach(p => {
      qList = qList.concat(p.questions);
    });
    return qList;
  }, [review]);

  const correctCount = React.useMemo(() => {
    return allQuestions.filter(q => answers[q.id] === q.correctIndex).length;
  }, [allQuestions, answers]);

  const isPassed = submitted && correctCount >= 15;

  return (
    <div className="screen" style={{ padding: '16px 0', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn-back no-print" onClick={onHome}>← Quay lại</button>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: 'var(--green)' }}>{review.title}</h2>
            <div style={{ fontSize: 13, color: 'var(--mute)' }}>{review.description}</div>
          </div>
        </div>
        
        {/* TIMER UI */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="no-print">
          <button className="btn btn-ghost" onClick={() => window.print()} style={{ padding: '8px 16px', borderRadius: 20, background: 'rgba(255,255,255,0.05)' }}>
            🖨️ PDF
          </button>
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
              {(passage.text || passage.htmlContent) && (
                <div style={{ marginBottom: 24 }}>
                  {passage.htmlContent ? (
                    <div dangerouslySetInnerHTML={{ __html: passage.htmlContent }} />
                  ) : (() => {
                    const translation = passage.translation || getPassageTranslation(review.id);
                    const vocabulary = passage.vocabulary || getPassageVocabulary(review.id);
                    return translation ? (
                      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', width: '100%' }}>
                        {/* Cột 1: Đoạn văn chính */}
                        <div style={{ flex: '1.2 1 300px', minWidth: '280px', fontSize: 18, lineHeight: 1.8, color: 'var(--text)', background: 'rgba(122, 162, 247, 0.02)', padding: '20px', borderRadius: 12, borderLeft: '4px solid var(--blue)', boxSizing: 'border-box' }}>
                          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--blue)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Đoạn văn chính (日本語)</div>
                          {passage.text?.map((para, i) => (
                            <p key={i} style={{ margin: '0 0 12px 0' }}>{para}</p>
                          ))}
                        </div>
                        
                        {/* Cột 2: Bản dịch nghĩa */}
                        <div style={{ flex: '1 1 280px', minWidth: '280px', fontSize: 16, lineHeight: 1.8, color: 'var(--text)', background: 'rgba(255, 184, 108, 0.02)', padding: '20px', borderRadius: 12, borderLeft: '4px solid var(--gold)', fontStyle: 'italic', boxSizing: 'border-box' }}>
                          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--gold)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5, fontStyle: 'normal' }}>Dịch nghĩa (Tiếng Việt)</div>
                          {translation.map((para, i) => (
                            <p key={i} style={{ margin: '0 0 12px 0' }}>{para}</p>
                          ))}
                        </div>

                        {/* Cột 3: Từ vựng trọng tâm */}
                        {vocabulary && (
                          <div style={{ flex: '1 1 280px', minWidth: '280px', fontSize: 15, lineHeight: 1.6, color: 'var(--text)', background: 'rgba(115, 218, 202, 0.02)', padding: '20px', borderRadius: 12, borderLeft: '4px solid var(--green)', boxSizing: 'border-box' }}>
                            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--green)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Từ vựng trọng tâm (単語)</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {vocabulary.map((vocabItem, i) => {
                                const parts = vocabItem.split(':');
                                const term = parts[0];
                                const def = parts.slice(1).join(':');
                                return (
                                  <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '4px', fontSize: 14 }}>
                                    <strong style={{ color: 'var(--green)' }}>{term}</strong>:{def}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text)', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: 8, borderLeft: '4px solid #64b5f6' }}>
                        {passage.text?.map((para, i) => (
                          <p key={i} style={{ margin: '0 0 12px 0' }}>{para}</p>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {passage.questions.map(q => {
                  const qNum = globalQuestionIndex++;
                  const isAnswered = answers[q.id] !== undefined;
                  const isCorrect = answers[q.id] === q.correctIndex;

                  return (
                    <div key={q.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 24, marginBottom: 12 }}>
                      <div className="q-row">
                        {/* Left column: Question, Options, Button */}
                        <div className="q-col-left">
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
                                    transition: 'all 0.2s', color: 'var(--text)',
                                    width: '100%'
                                  }}
                                >
                                  <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${isSelected ? (submitted ? (isCorrect ? 'var(--green)' : 'var(--red)') : '#64b5f6') : 'var(--mute)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    {isSelected && <div style={{ width: 12, height: 12, borderRadius: '50%', background: submitted ? (isCorrect ? 'var(--green)' : 'var(--red)') : '#64b5f6' }} />}
                                  </div>
                                  <span style={{ fontSize: 16 }}>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 16, paddingLeft: 32 }} className="no-print">
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
                            <div className="explanation-card">
                              {submitted && (
                                <div style={{ color: isCorrect ? 'var(--green)' : 'var(--red)', fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
                                  {isCorrect ? '✅ Chính xác!' : '❌ Sai rồi!'}
                                </div>
                              )}
                              {q.explanation && (
                                <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                                  <strong style={{ color: 'var(--gold)', fontSize: 15 }}>💡 Giải thích chi tiết:</strong><br />
                                  <div dangerouslySetInnerHTML={{ __html: cleanExplanation(q.explanation) }} />
                                </div>
                              )}
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
                  );
                })}
              </div>

            </div>
          );
        })}

        {/* Submit Button */}
        {!submitted ? (
          <div className="no-print" style={{ textAlign: 'center', marginTop: 32 }}>
            <button 
              className="btn btn-primary"
              style={{ fontSize: 16, padding: '16px 48px', borderRadius: 30 }}
              onClick={handleSubmit}
            >
              Nộp Bài Lấy Điểm
            </button>
          </div>
        ) : (
          <div className="no-print" style={{ textAlign: 'center', marginTop: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>
              {isPassed ? '🎉' : '💪'}
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: isPassed ? 'var(--green)' : 'var(--red)', marginBottom: 8 }}>
              {isPassed ? 'HOÀN THÀNH XUẤT SẮC!' : 'CẦN CỐ GẮNG THÊM!'}
            </div>
            <div style={{ fontSize: 16, color: 'var(--text)', marginBottom: 24 }}>
              Bạn đã làm đúng <strong>{correctCount} / {allQuestions.length}</strong> câu. 
              {!isPassed && ` (Cần đạt 15/${allQuestions.length} để qua ải)`}
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
