import { useState, useMemo, useEffect } from 'react';
import type { KanjiItem } from '../../types';
import { normalizeString, generateHintLevel1, generateHintLevel2 } from '../../utils/stringHelper';
import { useSpeech } from '../../hooks/useSpeech';
import { KANJI_N5 } from '../../data/kanji-n5';

interface Props {
  pool: KanjiItem[];
  onFinish: (score: number, total: number) => void;
}

type Direction = 'vn-to-jp' | 'jp-to-vn';

interface TranslationQuestion {
  kanjiId: number;
  direction: Direction;
  questionText: string;
  correctAnswer: string; // The raw answer we will normalize against
  displayAnswer: string; // The canonical answer the user should learn
  romajiHintText: string; // Used for hinting
  jpText: string; // Dùng để đọc text-to-speech
  kanjiItem: KanjiItem; // Chứa grammar và vocab gốc
}

interface AnsweredTranslation {
  questionText: string;
  displayAnswer: string;
  direction: Direction;
  isCorrect: boolean;
  kanjiId: number;
}

export function TranslationExercise({ pool, onFinish }: Props) {
  const questions = useMemo(() => {
    // Lọc ra các kanji có example hợp lệ
    const valid = pool.filter(k => k.example && k.example.jp && k.example.vn && k.example.romaji);
    const qs: TranslationQuestion[] = [];
    
    // Không nhân bản ngẫu nhiên nữa, mỗi câu xuất hiện 1 lần
    const shuffled = [...valid].sort(() => Math.random() - 0.5);
    const count = Math.min(30, shuffled.length);
    
    for (let i = 0; i < count; i++) {
        const k = shuffled[i];
        // 50% chance VN -> JP (nhập romaji), 50% JP -> VN (nhập tiếng việt)
        const direction: Direction = Math.random() > 0.5 ? 'vn-to-jp' : 'jp-to-vn';

        if (direction === 'vn-to-jp') {
            qs.push({
                kanjiId: k.id,
                direction: 'vn-to-jp',
                questionText: k.example.vn,
                correctAnswer: k.example.romaji,
                displayAnswer: k.example.jp + ' (' + k.example.romaji + ')',
                romajiHintText: k.example.romaji,
                jpText: k.example.jp,
                kanjiItem: k
            });
        } else {
            qs.push({
                kanjiId: k.id,
                direction: 'jp-to-vn',
                questionText: k.example.jp + ' (' + k.example.romaji + ')',
                correctAnswer: k.example.vn,
                displayAnswer: k.example.vn,
                romajiHintText: k.example.vn,
                jpText: k.example.jp,
                kanjiItem: k
            });
        }
    }
    return qs;
  }, [pool]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [hintLevel, setHintLevel] = useState(0); // 0 -> 1 -> 2 -> 3
  const [showError, setShowError] = useState(false);
  const [status, setStatus] = useState<'playing' | 'revealed'>('playing');
  const [answeredList, setAnsweredList] = useState<AnsweredTranslation[]>([]);
  const { speak, supported } = useSpeech();

  // Chỉ hiển thị từ vựng của câu hiện tại và các câu đã trả lời
  const displayedVocab = useMemo(() => {
    if (questions.length === 0) return [];
    const currentQ = questions[currentIndex];
    
    // Thu thập các ID kanji đã/đang làm
    const activeIds = new Set<number>();
    if (currentQ) activeIds.add(currentQ.kanjiId);
    answeredList.forEach(ans => activeIds.add(ans.kanjiId));

    const list: Array<{word: string, reading: string, meaning: string}> = [];
    const seen = new Set<string>();

    const addVocab = (v: {word: string, reading: string, meaning: string}) => {
       if (!seen.has(v.word)) {
          seen.add(v.word);
          list.unshift(v); 
       }
    };

    const matchWordInSentence = (word: string, sentence: string) => {
       if (sentence.includes(word)) return true;
       // Fuzzy match cho động từ/tính từ bị chia (Vd: 食べる -> 食べます, 休む -> 休み)
       const lastChar = word.slice(-1);
       const isHiragana = /[\u3040-\u309F]/.test(lastChar);
       if (isHiragana) {
           const stem = word.slice(0, -1);
           // Phải chứa Kanji thì mới xét stem để tránh match nhầm kana linh tinh
           if (/[\u4e00-\u9faf]/.test(stem)) {
               if (sentence.includes(stem)) return true;
           }
       }
       return false;
    };

    // 1. Chỉ lấy đúng từ khóa gốc của Kanji đang làm (hoặc đã làm) NẾU nó có trong câu
    for (const kanji of pool) {
      if (activeIds.has(kanji.id)) {
        for (const v of kanji.vocab) {
           if (currentQ && matchWordInSentence(v.word, currentQ.jpText)) {
               addVocab(v);
           } else if (!currentQ) {
               // Fallback nếu không có câu hỏi (hoàn thành)
               addVocab(v);
           }
        }
      }
    }

    // 2. Thêm TẤT CẢ các từ vựng khác thuộc N5 nếu Kanji của chúng xuất hiện trong câu hiện tại
    if (currentQ) {
       for (const kanji of KANJI_N5) {
          if (activeIds.has(kanji.id)) continue;
          
          if (currentQ.jpText.includes(kanji.kanji)) {
             for (const v of kanji.vocab) {
                if (matchWordInSentence(v.word, currentQ.jpText)) {
                   addVocab(v);
                }
             }
          }
       }
    }

    return list;
  }, [pool, questions, currentIndex, answeredList]);

  if (questions.length === 0) {
    return <div style={{textAlign: 'center', marginTop: 40}}>Không đủ dữ liệu câu ví dụ. Hãy học thêm Kanji!</div>;
  }

  const q = questions[currentIndex];

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (
        e.key === 'F2' ||
        e.key === '`' ||
        (e.ctrlKey && (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp'))
      ) {
        if (!questions[currentIndex]) return;
        e.preventDefault();
        speak(questions[currentIndex].jpText, 0.8);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [speak, questions, currentIndex]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim() && status === 'playing') return;

    if (status === 'revealed') {
         handleNext();
         return;
    }

    const isCorrect = normalizeString(inputVal) === normalizeString(q.correctAnswer);
    if (isCorrect) {
        setScore(s => s + 1);
        setStatus('revealed');
        if (supported) speak(q.jpText, 0.85);
    } else {
        setShowError(true);
        if (hintLevel < 3) {
            setHintLevel(h => h + 1);
        } else {
            setStatus('revealed');
            if (supported) speak(q.jpText, 0.85);
        }
        setTimeout(() => setShowError(false), 800);
    }
  };

  const skipQuestion = () => {
      setStatus('revealed');
      if (supported) speak(q.jpText, 0.85);
  };

  const handleNext = () => {
    const isCorrect = normalizeString(inputVal) === normalizeString(q.correctAnswer);
    setAnsweredList(prev => [{
      questionText: q.questionText,
      displayAnswer: q.displayAnswer,
      direction: q.direction,
      isCorrect,
      kanjiId: q.kanjiId
    }, ...prev]);

    if (currentIndex + 1 >= questions.length) {
      setTimeout(() => onFinish(score + (status === 'revealed' && isCorrect ? 0 : 0), questions.length), 300);
    } else {
      setCurrentIndex(i => i + 1);
      setInputVal('');
      setHintLevel(0);
      setShowError(false);
      setStatus('playing');
    }
  };

  const promptHint = () => {
      if (hintLevel < 3) setHintLevel(h => h + 1);
  };

  const renderHint = () => {
      if (hintLevel === 0) return null;
      
      let hintText = '';
      if (hintLevel === 1) hintText = generateHintLevel1(q.romajiHintText);
      if (hintLevel === 2) hintText = generateHintLevel2(q.romajiHintText);
      if (hintLevel === 3) hintText = q.correctAnswer;

      return (
          <div style={{ marginTop: 16, padding: 12, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginBottom: 4 }}>
                  💡 Gợi ý {hintLevel}/3:
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 16, letterSpacing: 1.5, color: hintLevel === 3 ? 'var(--blue)' : 'var(--text)' }}>
                  {hintText}
              </div>
          </div>
      );
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 10 }}>
      {/* Thanh tiến trình chung ở trên cùng */}
      <h3 style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
        <span>🗣️ Ải 4: Dịch Câu</span>
        <span style={{ color: 'var(--gold)' }}>{currentIndex}/{questions.length}</span>
      </h3>
      <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
        {questions.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 6, borderRadius: 3,
            backgroundColor: i < currentIndex ? 'var(--blue)' : i === currentIndex ? 'var(--blue-light)' : 'var(--surface-alt)'
          }} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 300px', gap: 20 }}>
        {/* CỘT TRÁI: Khu vực làm bài */}
        <div className="ex-card" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: 14, color: 'var(--mute)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
          {q.direction === 'vn-to-jp' ? '🇯🇵 Dịch sang tiếng Nhật (Romaji)' : '🇻🇳 Dịch sang tiếng Việt'}
          {q.direction === 'jp-to-vn' && (
            <button className="btn-icon" onClick={() => speak(q.jpText, 0.8)} style={{ marginLeft: 8, transform: 'translateY(-2px)' }} title="Nghe câu này (Phím tắt: ` hoặc F2)">
              🔊
            </button>
          )}
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          {q.questionText}
        </div>
        {/* Gợi ý cấu trúc — luôn hiển thị, không cần bấm */}
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          borderRadius: 8,
          background: 'rgba(255,255,255,0.04)',
          border: '1px dashed var(--border)',
          fontFamily: 'monospace',
          fontSize: 14,
          letterSpacing: 2,
          color: 'var(--mute)',
        }}>
          {generateHintLevel1(q.romajiHintText)}
        </div>
        <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 5, opacity: 0.6 }}>
          Cấu trúc câu trả lời ({q.romajiHintText.trim().split(/\s+/).length} từ)
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
        <input
          autoFocus
          className={`ex-input ${showError ? 'shake error' : ''}`}
          type="text"
          value={inputVal}
          onChange={e => {
            setInputVal(e.target.value);
            setShowError(false);
          }}
          disabled={status === 'revealed'}
          placeholder={q.direction === 'vn-to-jp' ? 'Nhập Romaji... (vd: hitori de)' : 'Nhập tiếng Việt... (vd: tôi học)'}
          style={{ width: '100%', outline: 'none' }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ position: 'absolute', right: 8, top: 8, bottom: 8, padding: '0 24px', borderRadius: 8 }}
          disabled={!inputVal.trim() && status === 'playing'}
        >
          {status === 'revealed' ? 'Tiếp tục ⏭️' : 'Check'}
        </button>
      </form>

      {status === 'playing' ? (
         <>
            {renderHint()}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button type="button" className="btn btn-ghost" onClick={promptHint} disabled={hintLevel >= 3}>
                    💡 Xin gợi ý ({hintLevel}/3)
                  </button>
                </div>
                
                {hintLevel >= 2 && (
                    <button type="button" className="btn btn-secondary" onClick={skipQuestion}>
                        Xem đáp án & Phân tích ⏭️
                    </button>
                )}
            </div>
         </>
      ) : (
         <div style={{ marginTop: 20, padding: 20, background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid var(--border)', animation: 'fadeIn 0.3s' }}>
             <h4 style={{ color: 'var(--gold)', marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
                <span>🎯 PHÂN TÍCH ĐÁP ÁN</span>
                {normalizeString(inputVal) === normalizeString(q.correctAnswer) ? <span style={{ color: 'var(--green)' }}>Đúng! +1đ</span> : <span style={{ color: 'var(--red)' }}>Sai! X</span>}
             </h4>
             <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{q.kanjiItem.example.jp}</div>
             <div style={{ fontSize: 13, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{q.kanjiItem.example.romaji}</div>
             <div style={{ fontSize: 14, color: 'var(--blue-light)', marginBottom: 16 }}>🇻🇳 {q.kanjiItem.example.vn}</div>
             
             {/* Ngữ pháp & Từ vựng */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 }}>
                 <div>
                    <span style={{ fontSize: 11, background: 'var(--gold)', color: '#000', padding: '2px 6px', borderRadius: 4, fontWeight: 800, marginRight: 8 }}>NGỮ PHÁP</span>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{q.kanjiItem.grammar.pattern}</span>
                    <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }}>{q.kanjiItem.grammar.note}</div>
                 </div>

                 {displayedVocab.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                        <span style={{ fontSize: 11, background: 'var(--blue)', color: '#000', padding: '2px 6px', borderRadius: 4, fontWeight: 800, marginRight: 8 }}>TỪ VỰNG TRONG CÂU</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
                             {displayedVocab.map((v, i) => (
                                 <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '8px 12px', borderRadius: 8, minWidth: 80 }}>
                                     <span style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{v.word}</span>
                                     <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)' }}>{v.reading}</span>
                                     <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{v.romaji}</span>
                                     <span style={{ fontSize: 12, color: 'var(--gold)', textAlign: 'center' }}>{v.meaning}</span>
                                 </div>
                             ))}
                        </div>
                    </div>
                 )}
             </div>
             <div style={{ marginTop: 20 }}>
                 <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', padding: 14, fontSize: 16 }}>Câu tiếp theo ⏭️</button>
             </div>
         </div>
      )}
      </div>

      {/* CỘT PHẢI: Panel lịch sử câu đã dịch */}
      <div style={{ 
          background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', 
          height: 400, display: 'flex', flexDirection: 'column' 
      }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 13, background: 'rgba(255,255,255,0.02)' }}>
            📋 Lịch sử dịch ({answeredList.length})
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: '10px 0' }}>
            {answeredList.length === 0 && (
              <div style={{ textAlign: 'center', color: 'var(--mute)', padding: 20, fontSize: 13 }}>Chưa có câu nào</div>
            )}
            {answeredList.map((ans, i) => (
              <div key={i} style={{ 
                padding: '10px 14px', borderBottom: '1px solid var(--border)', 
                borderLeft: `3px solid ${ans.isCorrect ? 'var(--green)' : 'var(--red)'}` 
              }}>
                <div style={{ fontWeight: 700, color: ans.isCorrect ? 'var(--green)' : 'var(--red)', marginBottom: 4, fontSize: 14 }}>
                  {ans.isCorrect ? '✅' : '❌'} {ans.direction === 'vn-to-jp' ? '🇯🇵' : '🇻🇳'} CÂU GỐC
                </div>
                <div style={{ fontSize: 12, color: 'var(--mute)', marginBottom: 6 }}>{ans.questionText}</div>
                <div style={{ fontWeight: 600, color: 'var(--gold)', fontSize: 13 }}>ĐÁP ÁN:</div>
                <div style={{ fontSize: 13, color: 'var(--text)' }}>
                  {ans.displayAnswer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
