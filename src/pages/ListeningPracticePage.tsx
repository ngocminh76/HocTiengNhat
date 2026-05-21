// src/pages/ListeningPracticePage.tsx
import { useState } from 'react';
import { LISTENING_LESSONS } from '../data/listening-lessons';
import { useSpeech } from '../hooks/useSpeech';
import * as wanakana from 'wanakana';

interface Props {
  onHome: () => void;
}

export function ListeningPracticePage({ onHome }: Props) {
  const [activeLessonId, setActiveLessonId] = useState<number>(LISTENING_LESSONS[0]?.id || 1);
  const { speak, supported } = useSpeech();

  const lesson = LISTENING_LESSONS.find(l => l.id === activeLessonId) || LISTENING_LESSONS[0];

  return (
    <div className="screen" style={{ padding: '16px 0', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
        <button className="btn btn-ghost" onClick={onHome}>← Về trang chủ</button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>🎧 Luyện Nghe Hội Thoại</h2>
      </div>

      <div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{ width: 260, background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: 1 }}>Danh sách bài nghe</div>
            <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>Tổng cộng {LISTENING_LESSONS.length} bài</div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
            {LISTENING_LESSONS.map(l => (
              <button
                key={l.id}
                onClick={() => setActiveLessonId(l.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  background: l.id === activeLessonId ? 'rgba(100,181,246,0.1)' : 'transparent',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  color: l.id === activeLessonId ? '#64b5f6' : 'var(--text)',
                  fontWeight: l.id === activeLessonId ? 700 : 500,
                  marginBottom: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}
              >
                <span style={{ fontSize: 14 }}>Bài {l.id}</span>
                <span style={{ fontSize: 12, opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.titleVn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: 8 }}>
          {lesson ? (
            <DialogueTab dialogue={lesson} speak={speak} supported={supported} />
          ) : (
            <div style={{ textAlign: 'center', color: 'var(--mute)', marginTop: 40 }}>Chưa có dữ liệu bài học này.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Dialogue Tab (Extracted) ──────────────────────────────────────────────
export function DialogueTab({ dialogue, speak, supported }: {
  dialogue: import('../data/listening-lessons').ListeningLesson;
  speak: (t: string, r?: number) => void;
  supported: boolean;
}) {
  const [mode, setMode] = useState<'listen' | 'write'>('listen');
  const [showAnswer, setShowAnswer] = useState(false);
  const [showVn, setShowVn] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [inputs, setInputs] = useState<Record<number, string>>({});

  const hasBlanks = dialogue.lines.some(l => l.blankJp);

  const handleAutoPlay = async () => {
    if (!supported || playing) return;
    setPlaying(true);
    for (let i = 0; i < dialogue.lines.length; i++) {
      setActiveIdx(i);
      await new Promise<void>(res => {
        const u = new SpeechSynthesisUtterance(dialogue.lines[i].jp);
        u.lang = 'ja-JP'; u.rate = 0.75;
        u.onend = () => res();
        window.speechSynthesis.speak(u);
      });
      await new Promise(r => setTimeout(r, 500));
    }
    setActiveIdx(null);
    setPlaying(false);
  };
  const stopPlay = () => { window.speechSynthesis.cancel(); setPlaying(false); setActiveIdx(null); };

  const norm = (s: string) => s.trim().toLowerCase().replace(/[\s~～〜\-、。！？]/g, '');

  const renderAnswer = (jp: string, blankJp?: string, meanings?: string[]) => {
    if (!blankJp) return jp;
    try {
      const escaped = blankJp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regexStr = '^' + escaped.replace(/（　　　）/g, '(.*)').replace(/\[blank\]/g, '(.*)') + '$';
      const regex = new RegExp(regexStr);
      const match = jp.match(regex);
      
      if (match) {
        const parts = blankJp.split(/（　　　）|\[blank\]/);
        const result: React.ReactNode[] = [];
        for (let i = 0; i < parts.length; i++) {
          result.push(<span key={`t-${i}`}>{parts[i]}</span>);
          if (i < match.length - 1) {
            const ans = match[i + 1];
            const meaning = meanings?.[i];
            result.push(
              <span key={`a-${i}`} style={{ color: 'var(--green)', fontWeight: 'bold' }}>
                {ans}
                {meaning && <span style={{ fontSize: '0.85em', color: 'var(--green)', opacity: 0.8, marginLeft: 6, fontWeight: 'normal' }}>({meaning})</span>}
              </span>
            );
          }
        }
        return result;
      }
    } catch (e) {
      console.error(e);
    }
    return jp;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 60 }}>
      {/* Mode Switch */}
      <div style={{ display: 'flex', gap: 8, background: 'var(--bg-card)', padding: '6px', borderRadius: 12, border: '1px solid var(--border)' }}>
        <button 
          className={`btn ${mode === 'listen' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setMode('listen')}
          style={{ flex: 1, padding: '10px', fontSize: 14 }}
        >
          🎧 Luyện Nghe Hội Thoại
        </button>
        <button 
          className={`btn ${mode === 'write' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => { setMode('write'); setInputs({}); }}
          style={{ flex: 1, padding: '10px', fontSize: 14 }}
        >
          ✍️ Luyện Viết (Dịch)
        </button>
      </div>

      {mode === 'listen' && (
        <>
          {/* Top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)', padding: '16px', borderRadius: 12, border: '1px solid var(--border)' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>{dialogue.title}</h3>
              <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }}>{dialogue.titleVn}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
               {supported && (
                 !playing
                   ? <button className="btn btn-primary" style={{ fontSize: 13, padding: '8px 16px', background: '#64b5f6', border: '1px solid #64b5f6' }} onClick={handleAutoPlay}>▶ Nghe toàn bài</button>
                   : <button className="btn btn-ghost" style={{ fontSize: 13, padding: '8px 16px' }} onClick={stopPlay}>⏹ Dừng</button>
               )}
               <button 
                 className={`btn ${showVn ? 'btn-primary' : 'btn-ghost'}`}
                 onClick={() => setShowVn(v => !v)}
                 style={{ padding: '8px 16px', fontSize: 13 }}
               >
                 {showVn ? '🙈 Ẩn Dịch' : '👁️ Dịch Nghĩa'}
               </button>
               {hasBlanks && (
                 <button 
                   className={`btn ${showAnswer ? 'btn-primary' : 'btn-ghost'}`}
                   onClick={() => setShowAnswer(v => !v)}
                   style={{ padding: '8px 16px', fontSize: 13, color: showAnswer ? undefined : 'var(--gold)' }}
                 >
                   {showAnswer ? '🙈 Ẩn Bài Giải' : '💡 Bài Giải'}
                 </button>
               )}
            </div>
          </div>
          
          {/* Dialogue list */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', padding: '20px' }}>
            {dialogue.lines.map((line, i) => {
              const isActive = activeIdx === i;
              
              let displayJp: React.ReactNode = line.jp;
              if (hasBlanks && line.blankJp) {
                if (showAnswer) {
                  displayJp = renderAnswer(line.jp, line.blankJp, line.blankMeanings);
                } else {
                  displayJp = line.blankJp;
                }
              }

              return (
                <div key={i} style={{
                  display: 'flex',
                  gap: 16,
                  padding: '12px',
                  borderRadius: 8,
                  background: isActive ? 'rgba(100,181,246,0.1)' : 'transparent',
                  borderLeft: `4px solid ${isActive ? '#64b5f6' : 'transparent'}`,
                  marginBottom: 8,
                  transition: 'all 0.2s'
                }}>
                  {/* Speaker name */}
                  <div style={{ width: 80, fontWeight: 700, color: 'var(--mute)', flexShrink: 0, marginTop: 2 }}>
                    {line.speaker}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 500, letterSpacing: 0.5, marginBottom: 4 }}>
                      {displayJp}
                    </div>
                    {showVn && (
                      <div style={{ fontSize: 14, color: 'var(--gold)', marginTop: 4 }}>
                        {line.vn}
                      </div>
                    )}
                  </div>
                  {/* Audio button */}
                  {supported && (
                    <button className="btn-icon" style={{ fontSize: 16, height: 32, opacity: isActive ? 1 : 0.4 }} onClick={() => speak(line.jp, 0.75)}>🔊</button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {mode === 'write' && (
        <div style={{ background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Dịch sang Tiếng Nhật</h3>
            <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }}>Gõ Romaji hoặc Kana để dịch các câu hội thoại sang tiếng Nhật.</div>
          </div>
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {dialogue.lines.map((line, i) => {
              const val = inputs[i] || '';
              const nVal = norm(val);
              const isCorrect = val && (nVal === norm(line.jp) || nVal === norm(line.romaji));

              return (
                <div key={i} style={{ 
                  padding: '16px', 
                  borderRadius: 12, 
                  border: `1px solid ${isCorrect ? 'var(--green)' : 'var(--border)'}`,
                  background: isCorrect ? 'rgba(6,214,160,0.05)' : 'var(--surface-alt)',
                  transition: 'all 0.2s'
                }}>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 80, fontWeight: 700, color: 'var(--mute)', flexShrink: 0, paddingTop: 2 }}>
                      {line.speaker}
                    </div>
                    <div style={{ flex: 1, fontSize: 16, color: 'var(--gold)', fontWeight: 500, lineHeight: 1.5 }}>
                      {line.vn}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div style={{ width: 80, flexShrink: 0 }} />
                    <div style={{ flex: 1, position: 'relative' }}>
                      <input 
                        type="text"
                        className="ex-input"
                        style={{ 
                          width: '100%', 
                          padding: '12px 16px',
                          border: `1px solid ${isCorrect ? 'var(--green)' : 'var(--border)'}`,
                          background: isCorrect ? 'rgba(6,214,160,0.1)' : 'var(--bg-card)',
                          borderRadius: 8,
                          outline: 'none',
                          color: isCorrect ? 'var(--green)' : 'var(--text)',
                          fontSize: 15,
                          transition: 'all 0.2s'
                        }}
                        placeholder="Gõ tiếng Nhật (Romaji/Kana)..."
                        value={val}
                        onChange={e => {
                          const newVal = wanakana.toKana(e.target.value, { IMEMode: true });
                          setInputs(prev => ({ ...prev, [i]: newVal }));
                        }}
                      />
                      {isCorrect && (
                        <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 18 }}>✅</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
