// src/pages/exercises/FillRomajiExercise.tsx
// Bài: Nhìn Kanji → Nhập romaji cách đọc On
// Layout 2 cột: trái = bài tập, phải = panel danh sách tích lũy realtime
import { useState, useRef, useCallback, useEffect } from 'react';
import type { KanjiItem, VocabItem } from '../../types';
import { useSpeech } from '../../hooks/useSpeech';

interface Props {
  pool: KanjiItem[];
  onFinish: (score: number, total: number) => void;
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, '');
}

interface VocabQuestion {
  vocab: VocabItem;
  kanji: KanjiItem;
}

interface AnsweredItem {
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  kanjiChar: string;
  isCorrect: boolean;
}

export function FillRomajiExercise({ pool, onFinish }: Props) {
  const limit = 50;
  const questionsRef = useRef<VocabQuestion[]>(
    pool.flatMap(k => k.vocab.map(v => ({ vocab: v, kanji: k })))
      .sort(() => Math.random() - 0.5).slice(0, limit)
  );
  const questions = questionsRef.current;

  const [idx, setIdx]             = useState(0);
  const [input, setInput]         = useState('');
  const [status, setStatus]       = useState<'idle' | 'correct' | 'wrong' | 'wrong2' | 'show_answer'>('idle');
  const [score, setScore]         = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [failedList, setFailedList] = useState<string[]>([]);
  const [wiggle, setWiggle]       = useState(false);
  const [answeredList, setAnsweredList] = useState<AnsweredItem[]>([]);
  const inputRef                  = useRef<HTMLInputElement>(null);
  const { speak, supported }      = useSpeech();

  const cur = questions[idx];
  const correctRomaji = normalize(cur.vocab.romaji);

  // Global hotkey listener — F2, `, Ctrl+Space, Ctrl+Up
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (
        e.key === 'F2' ||
        e.key === '`' ||
        (e.ctrlKey && (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp'))
      ) {
        e.preventDefault();
        speak(cur.vocab.reading);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [speak, cur.vocab.word]);

  // Hint 1: Partial matching from left
  const getPartialHintText = () => {
    let hint = '';
    const userLower = normalize(input);
    for (let i = 0; i < correctRomaji.length; i++) {
        if (i < userLower.length && userLower[i] === correctRomaji[i]) {
             hint += correctRomaji[i];
        } else {
             hint += '_ ';
        }
    }
    return hint.trim();
  };

  // Hint 2: Show first 3 characters
  const getFirst3HintText = () => {
    const revealed = correctRomaji.slice(0, 3);
    const blanks = Array.from({ length: Math.max(0, correctRomaji.length - 3) }).fill('_').join(' ');
    if (correctRomaji.length <= 3) return revealed.split('').join(' ');
    return `${revealed} ${blanks}`;
  };

  const handleNext = useCallback((isCorrect: boolean) => {
      const next = idx + 1;
      if (next >= questions.length) {
         onFinish(isCorrect ? score + 1 : score, questions.length);
      } else {
         setIdx(next);
         setInput('');
         setStatus('idle');
         setFailCount(0);
         setTimeout(() => inputRef.current?.focus(), 50);
      }
  }, [idx, questions.length, onFinish, score]);

  const handleCheck = useCallback(() => {
    if (status === 'show_answer') {
       // Khi ở trạng thái show_answer → ghi nhận sai và đi tiếp
       setAnsweredList(prev => [{
         word: cur.vocab.word,
         reading: cur.vocab.reading,
         romaji: cur.vocab.romaji,
         meaning: cur.vocab.meaning,
         kanjiChar: cur.kanji.kanji,
         isCorrect: false,
       }, ...prev]);
       handleNext(false);
       return;
    }

    if (status === 'correct' || !input.trim()) return;
    
    const userInput     = normalize(input);
    const isCorrect     = userInput === correctRomaji || userInput === normalize(cur.vocab.reading);

    if (isCorrect) {
      setStatus('correct');
      if (failCount === 0) setScore(s => s + 1);
      if (supported) speak(cur.vocab.reading);
      // Ghi nhận đã trả lời đúng
      setAnsweredList(prev => [{
        word: cur.vocab.word,
        reading: cur.vocab.reading,
        romaji: cur.vocab.romaji,
        meaning: cur.vocab.meaning,
        kanjiChar: cur.kanji.kanji,
        isCorrect: failCount === 0,
      }, ...prev]);
      setTimeout(() => handleNext(failCount === 0), 1300);
    } else {
      const currentFail = failCount + 1;
      setFailCount(currentFail);

      if (currentFail === 1) {
          setStatus('wrong');
      } else if (currentFail === 2) {
          setStatus('wrong2');
      } else {
          setStatus('show_answer');
          if (!failedList.includes(cur.vocab.word)) {
              setFailedList(prev => [...prev, cur.vocab.word]);
          }
      }

      setWiggle(true);
      setTimeout(() => setWiggle(false), 400); 
      if (currentFail < 3) {
         setTimeout(() => inputRef.current?.focus(), 50);
      } else {
         setTimeout(() => inputRef.current?.blur(), 50);
      }
    }
  }, [cur, failCount, failedList, handleNext, input, correctRomaji, speak, status, supported, answeredList]);

  const progress = Math.round(((idx) / questions.length) * 100);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 20 }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 13 }}>
        <span style={{ color: 'var(--mute)' }}>✍️ Điền romaji · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      {/* 2 cột */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

        {/* CỘT TRÁI: Bài tập */}
        <div>
          <div className="ex-card">
            <div className="ex-kanji-big">{cur.vocab.word}</div>
            <div className="ex-meaning">{cur.vocab.meaning}</div>
            <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 8 }}>Từ ghép chứa Kanji: {cur.kanji.kanji} ({cur.kanji.meaning})</div>
            {supported && (
              <button className="btn-icon" onClick={() => speak(cur.vocab.reading)} title="Nghe lại (Phím tắt: ` hoặc F2)">🔊</button>
            )}
          </div>

          <p className="ex-instruction">
            Nhập cách đọc của <strong>Từ Vựng</strong> này theo romaji:
          </p>

          {/* Hiển thị Hint */}
          {(status === 'wrong' || status === 'wrong2') && (
             <div style={{ textAlign: 'center', marginBottom: 12, color: 'var(--gold)', fontWeight: 600, fontSize: 18, letterSpacing: 4 }}>
                 Hint: {status === 'wrong' ? getPartialHintText() : getFirst3HintText()}
             </div>
          )}

          <div className="ex-input-row" style={{ animation: wiggle ? 'wiggle 0.4s ease-in-out' : 'none' }}>
            <input
              ref={inputRef}
              className={`ex-input ${status === 'correct' ? 'correct' : (status === 'wrong' || status === 'wrong2') ? 'wrong' : ''}`}
              value={input}
              onChange={e => {
                  setInput(e.target.value);
                  if ((status === 'wrong' || status === 'wrong2') && e.target.value.length < input.length) {
                     setStatus('idle');
                     setFailCount(0);
                  }
              }}
              onKeyDown={e => e.key === 'Enter' && handleCheck()}
              placeholder="Nhập romaji..."
              disabled={status === 'correct' || status === 'show_answer'}
              autoFocus
            />
            <button
              className={`btn btn-primary`}
              onClick={handleCheck}
              disabled={status === 'correct' || (!input.trim() && status !== 'show_answer')}
            >
               {status === 'show_answer' ? 'Tiếp Tục ⏭' : (status === 'wrong' || status === 'wrong2') ? 'Thử Lại' : 'Kiểm tra'}
            </button>
          </div>

          {status === 'correct' && (
            <div className="ex-feedback correct">✅ Đúng! &nbsp; {cur.vocab.word} · {cur.vocab.romaji}</div>
          )}
          {(status === 'wrong' || status === 'wrong2') && (
            <div className="ex-feedback wrong">
              ❌ Sai rồi. Sửa lại theo gợi ý phía trên nhé!
            </div>
          )}
          {status === 'show_answer' && (
             <div className="ex-feedback wrong" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
               <div><strong>📝 Cần ghi nhớ:</strong></div>
               <div>Từ Vựng: {cur.vocab.word} ({cur.vocab.reading} / {cur.vocab.romaji})</div>
               <div>Nghĩa: {cur.vocab.meaning}</div>
               <div>Kanji gốc: {cur.kanji.kanji} ({cur.kanji.meaning})</div>
               <div style={{ color: 'var(--text)', fontSize: 14, marginTop: 4 }}>
                 Từ này đã được lưu vào danh sách cần ôn tập thêm. Nhấn "Tiếp Tục" để qua câu.
               </div>
             </div>
          )}
        </div>

        {/* CỘT PHẢI: Panel lịch sử */}
        <div style={{ height: 480, position: 'sticky', top: 16 }}>
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 12,
            border: '1px solid var(--border)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <div style={{
              padding: '10px 14px',
              borderBottom: '1px solid var(--border)',
              fontWeight: 700,
              fontSize: 13,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.02)',
              flexShrink: 0,
            }}>
              <span>📋 Đã làm</span>
              <div style={{ display: 'flex', gap: 8, fontSize: 12 }}>
                <span style={{ color: 'var(--green)' }}>✅ {answeredList.filter(a => a.isCorrect).length}</span>
                <span style={{ color: '#e53935' }}>❌ {answeredList.filter(a => !a.isCorrect).length}</span>
                <span style={{
                  background: 'var(--gold)', color: 'var(--bg)',
                  borderRadius: 99, padding: '1px 8px', fontWeight: 800,
                }}>{answeredList.length}</span>
              </div>
            </div>

            {answeredList.length === 0 && (
              <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--mute)', fontSize: 13 }}>
                Trả lời câu đầu tiên<br />để bắt đầu danh sách ✏️
              </div>
            )}

            <div style={{ overflowY: 'auto', flex: 1 }}>
              {answeredList.map((item, i) => (
                <div key={i} style={{
                  padding: '10px 14px',
                  borderBottom: '1px solid var(--border)',
                  borderLeft: `3px solid ${item.isCorrect ? 'var(--green)' : '#e53935'}`,
                  animation: i === 0 ? 'fadeIn 0.3s ease' : undefined,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: item.isCorrect ? 'var(--green)' : '#e53935' }}>
                      {item.isCorrect ? '✅' : '❌'} {item.word}
                      <span style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 400, marginLeft: 5 }}>
                        ({item.reading})
                      </span>
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--mute)' }}>{item.kanjiChar}</span>
                  </div>
                  <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--gold)' }}>{item.romaji}</div>
                  <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>🇻🇳 {item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

