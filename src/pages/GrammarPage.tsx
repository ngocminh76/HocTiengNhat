// src/pages/GrammarPage.tsx
// Trang học Ngữ Pháp: Flashcard -> Carousel ví dụ
import { useState, useMemo } from 'react';
import type { GrammarPattern } from '../types';
import { useSpeech } from '../hooks/useSpeech';
import { GrammarListeningExercise } from './exercises/GrammarListeningExercise';
import { cleanSentenceForN5 } from '../utils/kanji';

interface Props {
  data: GrammarPattern[];
  progress?: { learnedGrammarIds?: number[] };
  onMarkLearned?: (id: number) => void;
  onHome: () => void;
  onShowReading?: () => void;
}

export function GrammarPage({ data: rawData, progress, onMarkLearned, onHome, onShowReading }: Props) {
  const data = useMemo(() => {
    const jlptFocus = localStorage.getItem('jlpt_focus_mode') || 'N5';
    if (jlptFocus === 'N5') {
      return rawData.map(p => ({
        ...p,
        examples: p.examples.map(ex => ({
          ...ex,
          jp: cleanSentenceForN5(ex.jp),
          blank: cleanSentenceForN5(ex.blank)
        }))
      }));
    }
    return rawData;
  }, [rawData]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState<'list' | 'flashcard' | 'examples' | 'exercise'>('list');
  const { speak, supported } = useSpeech();

  if (data.length === 0) {
    return (
      <div className="screen" style={{ textAlign: 'center', paddingTop: 60 }}>
        <p>Danh sách ngữ pháp trống.</p>
        <button className="btn btn-ghost" onClick={onHome}>Về trang chủ</button>
      </div>
    );
  }

  const p = data[currentIndex];
  
  const handleNextPattern = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(i => i + 1);
      setView('flashcard');
    }
  };

  const handlePrevPattern = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setView('flashcard');
    }
  };

  const renderList = () => (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <h2>Bảng Tổng Hợp Ngữ Pháp N5</h2>
        <p style={{ color: 'var(--mute)' }}>Chọn một mẫu ngữ pháp để xem chi tiết và luyện tập</p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
        {data.map((p, idx) => (
          <div
            key={p.id}
            onClick={() => {
              setCurrentIndex(idx);
              setView('flashcard');
            }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '16px 20px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'var(--gold)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: 'var(--mute)' }}>
                Bài {p.id} {progress?.learnedGrammarIds?.includes(p.id) && <span style={{ marginLeft: 4, color: '#4ade80' }}>✔</span>}
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: 99, fontSize: 11, color: 'var(--blue)' }}>{p.group}</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--gold)', marginBottom: 6 }}>{p.pattern}</div>
            <div style={{ fontSize: 14, color: 'var(--text)' }}>Nghĩa: {p.meaning}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFlashcard = () => (
    <div className="card-container" style={{ minHeight: 400 }}>
      <div className="card-inner" style={{ transform: 'none' }}>
        <div className="card-front" style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
             <span style={{ color: 'var(--mute)', fontSize: 13, fontWeight: 600 }}>📖 Ngữ Pháp #{p.id}/{data.length}</span>
             <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: 99, fontSize: 11, color: 'var(--blue)' }}>
               {p.group}
             </span>
          </div>

          <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--gold)', marginBottom: 8, letterSpacing: 1 }}>{p.pattern}</div>
             <div style={{ fontSize: 16, color: 'var(--text)', fontFamily: 'monospace', background: 'rgba(255,255,255,0.03)', padding: '8px 16px', borderRadius: 8, display: 'inline-block', margin: '0 auto' }}>
               {p.structure}
             </div>
             
             <div style={{ marginTop: 32, textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: 16, borderRadius: 12, border: '1px solid var(--border)' }}>
               <div style={{ marginBottom: 12 }}>
                 <span style={{ fontSize: 18, marginRight: 8 }}>✏️</span>
                 <strong style={{ fontSize: 15 }}>Nghĩa:</strong> <span style={{ color: 'var(--gold)' }}>{p.meaning}</span>
               </div>
               <div style={{ marginBottom: p.warning ? 12 : 0 }}>
                 <span style={{ fontSize: 18, marginRight: 8 }}>🕐</span>
                 <strong style={{ fontSize: 15 }}>Dùng khi:</strong> {p.when}
               </div>
               {p.warning && (
                 <div style={{ color: 'var(--red)', fontSize: 14 }}>
                   <span style={{ fontSize: 18, marginRight: 8 }}>⚠️</span>
                   <strong>Lưu ý:</strong> {p.warning}
                 </div>
               )}
             </div>
          </div>

           <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
             {!progress?.learnedGrammarIds?.includes(p.id) && (
               <button 
                  className="btn btn-secondary" 
                  style={{ flex: 1, padding: 14 }}
                  onClick={() => {
                     onMarkLearned?.(p.id);
                     // Set a small toast or visual feedback? Already handled by react state update which checks the box in the list
                  }}
               >
                  Đánh dấu đã hiểu ✔
               </button>
             )}
             <button 
                className="btn btn-primary" 
                style={{ flex: 1, padding: 14 }}
                onClick={() => setView('examples')}
             >
                Xem 5 câu ví dụ ⏭️
             </button>
           </div>
        </div>
      </div>
    </div>
  );

  const renderExamples = () => {
    return (
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ color: 'var(--mute)', fontSize: 13, fontWeight: 600 }}>💬 5 câu ví dụ — {p.pattern}</span>
          <button className="btn-icon" onClick={() => setView('flashcard')} style={{ fontSize: 14 }}>↩️ Quay lại mẫu</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, alignItems: 'start' }}>

          {/* CỘT TRÁI: Bảng 5 câu ví dụ */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 12,
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 50px',
              gap: 0,
              padding: '10px 16px',
              background: 'rgba(255,255,255,0.04)',
              borderBottom: '1px solid var(--border)',
              fontWeight: 700,
              fontSize: 12,
              color: 'var(--mute)',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              <span>🇯🇵 Câu gốc</span>
              <span>📝 Romaji</span>
              <span>🇻🇳 Nghĩa</span>
              <span style={{ textAlign: 'center' }}>🔊</span>
            </div>

            {/* Rows */}
            {p.examples.map((ex, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 50px',
                gap: 0,
                padding: '14px 16px',
                borderBottom: i < p.examples.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'center',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>{ex.jp}</span>
                <span style={{ fontSize: 14, fontFamily: 'monospace', color: 'var(--mute)', letterSpacing: 0.5 }}>{ex.romaji}</span>
                <span style={{ fontSize: 14, color: 'var(--gold)' }}>{ex.vn}</span>
                {supported && (
                  <button
                    className="btn-icon"
                    onClick={() => speak(ex.jp, 0.9)}
                    style={{ fontSize: 20, textAlign: 'center', justifySelf: 'center' }}
                    title="Nghe câu này (Phím tắt: ` hoặc F2)"
                  >
                    🔊
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CỘT PHẢI: Panel từ vựng trọng tâm */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 12,
            border: '1px solid var(--border)',
            overflow: 'hidden',
            position: 'sticky',
            top: 16,
          }}>
            <div style={{
              padding: '10px 14px',
              borderBottom: '1px solid var(--border)',
              fontWeight: 700,
              fontSize: 13,
              background: 'rgba(255,255,255,0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span>📖 Từ vựng trọng tâm</span>
              <span style={{
                background: 'var(--gold)', color: 'var(--bg)',
                borderRadius: 99, padding: '2px 10px', fontSize: 12, fontWeight: 800,
              }}>{p.examples.length}</span>
            </div>

            {p.examples.map((ex, i) => (
              <div key={i} style={{
                padding: '12px 14px',
                borderBottom: i < p.examples.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>
                    {ex.blank}
                  </div>
                  <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--mute)' }}>
                    {ex.blankHint}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--gold)', marginTop: 3 }}>
                    🇻🇳 {ex.blankMeaning || ex.vn}
                  </div>
                </div>
                {supported && (
                  <button
                    className="btn-icon"
                    onClick={() => speak(ex.blank, 0.85)}
                    style={{ fontSize: 16, flexShrink: 0 }}
                    title="Nghe từ này"
                  >
                    🔊
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Nút luyện nghe */}
        <button className="btn btn-secondary" style={{ marginTop: 24, fontSize: 16, width: '100%', padding: 14 }} onClick={() => setView('exercise')}>
          🎧 Luyện Nghe 5 Câu Này
        </button>
      </div>
    );
  };

  return (
    <div className="screen" style={{ paddingTop: 20 }}>
      {/* Header điều hướng */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, padding: '0 10px' }}>
         {view === 'list' ? (
           <button className="btn-icon" onClick={onHome} style={{ fontSize: 20 }}>🏠 Về trang chủ</button>
         ) : (
           <button className="btn-icon" onClick={() => setView('list')} style={{ fontSize: 20 }}>🔙 Bảng tổng hợp</button>
         )}
         
         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
           {view !== 'list' && (
             <div style={{ fontSize: 13, color: 'var(--mute)' }}>
               Chuyển mẫu: {currentIndex + 1}/{data.length}
             </div>
           )}
           {onShowReading && (
             <button className="btn btn-secondary" onClick={onShowReading} style={{ padding: '6px 14px', fontSize: 13 }}>
               📖 Đọc Hiểu
             </button>
           )}
         </div>
      </div>

      {view === 'list' && renderList()}
      {view === 'flashcard' && renderFlashcard()}
      {view === 'examples' && renderExamples()}
      {view === 'exercise' && (
        <GrammarListeningExercise 
           examples={p.examples} 
           onFinish={() => {
             onMarkLearned?.(p.id);
             setView('list');
           }} 
        />
      )}
      
      {/* Nút chuyển nhanh mẫu (trước/sau) */}
      {view !== 'list' && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, padding: '0 10px' }}>
           <button className="btn btn-ghost" onClick={handlePrevPattern} disabled={currentIndex === 0}>
             ← Mẫu trước
           </button>
           <button className="btn btn-ghost" onClick={handleNextPattern} disabled={currentIndex === data.length - 1}>
             Mẫu tiếp →
           </button>
        </div>
      )}

    </div>
  );
}
