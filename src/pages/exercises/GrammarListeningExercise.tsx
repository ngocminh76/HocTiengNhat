// src/pages/exercises/GrammarListeningExercise.tsx
import { useState, useEffect } from 'react';
import type { GrammarExample } from '../../types';
import { useSpeech } from '../../hooks/useSpeech';
import { normalizeString } from '../../utils/stringHelper';

interface Props {
  examples: GrammarExample[];
  onFinish: () => void;
}

interface AnsweredItem {
  jp: string;
  romaji: string;
  vn: string;
  correct: boolean;
}

export function GrammarListeningExercise({ examples, onFinish }: Props) {
  const [idx, setIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [answeredList, setAnsweredList] = useState<AnsweredItem[]>([]);
  const { speak, supported } = useSpeech();

  const cur = examples[idx];

  // Global hotkey listener
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      // Phím F2, Ctrl+Space, Ctrl+Up, hoặc phím ` (backquote - dưới nút Esc)
      if (
        e.key === 'F2' ||
        e.key === '`' ||
        (e.ctrlKey && (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp'))
      ) {
        e.preventDefault();
        speak(cur.jp, 0.9);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [speak, cur.jp]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Nếu đã sai 3 lần, bấm nút sẽ cho qua luôn không cần xét gõ đúng hay sai
    if (errorCount >= 3) {
      setAnsweredList(prev => [{ jp: cur.jp, romaji: cur.romaji, vn: cur.vn, correct: false }, ...prev]);
      const next = idx + 1;
      if (next >= examples.length) {
        setTimeout(() => onFinish(), 800);
      } else {
        setIdx(next);
        setInputVal('');
        setErrorCount(0);
        if (supported) {
           setTimeout(() => speak(examples[next].jp, 0.9), 400);
        }
      }
      return;
    }

    if (!inputVal.trim()) return;

    const isCorrect = normalizeString(inputVal) === normalizeString(cur.romaji) || 
                      normalizeString(inputVal) === normalizeString(cur.jp);

    if (isCorrect) {
      // Add to list and move to next
      setAnsweredList(prev => [{ jp: cur.jp, romaji: cur.romaji, vn: cur.vn, correct: errorCount < 3 }, ...prev]);
      
      const next = idx + 1;
      if (next >= examples.length) {
        setTimeout(() => onFinish(), 800);
      } else {
        setIdx(next);
        setInputVal('');
        setErrorCount(0);
        if (supported) {
           setTimeout(() => speak(examples[next].jp, 0.9), 400);
        }
      }
    } else {
      setErrorCount(prev => prev + 1);
    }
  };

  const pct = Math.round((idx / examples.length) * 100);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', paddingTop: 10 }}>
       <h3 style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
         <span>🎧 Luyện Nghe Ví Dụ Ngữ Pháp</span>
         <span style={{ color: 'var(--gold)' }}>{idx}/{examples.length}</span>
       </h3>
       <div className="prog-track" style={{ marginBottom: 24 }}>
          <div className="prog-fill" style={{ width: `${pct}%`, background: 'var(--blue)' }} />
       </div>

       <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
         {/* Trái: Vùng nhập liệu */}
         <div className="ex-card">
           <div style={{ textAlign: 'center', marginBottom: 24 }}>
             <button
               className="btn-icon"
               onClick={() => speak(cur.jp, 0.9)}
               style={{ fontSize: 40, background: 'rgba(255,255,255,0.05)', padding: 24, borderRadius: '50%' }}
               title="Nghe lại (Phím tắt: ` hoặc F2)"
             >
               🔊
             </button>
             <p style={{ marginTop: 12, color: 'var(--mute)' }}>Nghe và gõ lại bằng Romaji (hoặc tiếng Nhật)</p>
           </div>
           
           <form onSubmit={handleSubmit}>
             <input
               className={`ex-input ${errorCount > 0 && inputVal.length > 0 ? 'wrong' : ''}`}
               value={inputVal}
               onChange={e => setInputVal(e.target.value)}
               placeholder="Nhập romaji..."
               autoFocus
             />
             <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 12 }} disabled={!inputVal.trim() && errorCount < 3}>
               {errorCount >= 3 ? 'Nhìn rõ đáp án & Tiếp tục ⏭️' : 'Kiểm tra'}
             </button>
           </form>
           
           {/* Hint progressive */}
           {errorCount > 0 && (
             <div style={{ marginTop: 16, color: '#e53935', textAlign: 'center', fontWeight: 'bold' }}>
               ❌ Sai rồi! {
                 errorCount === 1 ? `Gợi ý: ${cur.romaji.slice(0, 3)}...` : 
                 errorCount === 2 ? `Gợi ý: ${cur.romaji.slice(0, Math.ceil(cur.romaji.length / 2))}...` :
                 `Đáp án: ${cur.romaji}`
               }
             </div>
           )}
           <div style={{ marginTop: 24, textAlign: 'center' }}>
             <button className="btn btn-ghost" onClick={() => speak(cur.jp, 0.7)}>🐌 Nghe chậm lại</button>
           </div>
         </div>

         {/* Phải: Danh sách đã nghe được */}
         <div style={{ 
            background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', 
            height: 400, display: 'flex', flexDirection: 'column' 
          }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 13, background: 'rgba(255,255,255,0.02)' }}>
              📋 Lịch sử luyện ({answeredList.length})
            </div>
            <div style={{ overflowY: 'auto', flex: 1, padding: '10px 0' }}>
               {answeredList.length === 0 && (
                 <div style={{ textAlign: 'center', color: 'var(--mute)', padding: 20, fontSize: 13 }}>Chưa có câu nào</div>
               )}
               {answeredList.map((ans, i) => (
                 <div key={i} style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', borderLeft: `3px solid ${ans.correct ? 'var(--blue)' : 'var(--red)'}` }}>
                   <div style={{ fontWeight: 700, color: ans.correct ? 'var(--blue)' : 'var(--red)', marginBottom: 4 }}>
                     {ans.jp} {!ans.correct && '❌'}
                   </div>
                   <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--mute)', marginBottom: 4 }}>{ans.romaji}</div>
                   <div style={{ fontSize: 12, color: 'var(--gold)' }}>🇻🇳 {ans.vn}</div>
                 </div>
               ))}
            </div>
         </div>
       </div>
    </div>
  );
}
