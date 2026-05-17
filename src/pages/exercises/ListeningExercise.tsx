import { useState, useMemo, useEffect } from 'react';
import type { KanjiItem } from '../../types';
import { normalizeString, generateHintLevel1, generateHintLevel2 } from '../../utils/stringHelper';
import { useSpeech } from '../../hooks/useSpeech';

interface Props {
  pool: KanjiItem[];
  onFinish: (score: number, total: number) => void;
}

interface ListeningQuestion {
  kanjiId: number;
  type: 'vocab' | 'sentence';
  jpText: string;
  correctRomaji: string;
  vnMeaning: string;
  reading?: string;
  on?: string;
  on_rom?: string;
  kun?: string;
}

export function ListeningExercise({ pool, onFinish }: Props) {
  const { speak } = useSpeech();

  const questions = useMemo(() => {
    const qs: ListeningQuestion[] = [];
    pool.forEach(k => {
      if (k.example && k.example.jp && k.example.romaji) {
        qs.push({
          kanjiId: k.id,
          type: 'sentence',
          jpText: k.example.jp,
          correctRomaji: k.example.romaji,
          vnMeaning: k.example.vn,
          reading: k.on || k.kun || '',
          on: k.on || '',
          on_rom: k.on_rom || '',
          kun: k.kun || '',
        });
      }
      if (k.vocab && k.vocab.length > 0) {
        k.vocab.forEach(v => {
          qs.push({
            kanjiId: k.id,
            type: 'vocab',
            jpText: v.word,
            correctRomaji: v.romaji,
            vnMeaning: v.meaning,
            reading: v.reading || '',
            on: k.on || '',
            on_rom: k.on_rom || '',
            kun: k.kun || '',
          });
        });
      }
    });
    const limit = Math.min(50, qs.length);
    return qs.sort(() => Math.random() - 0.5).slice(0, limit);
  }, [pool]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [hintLevel, setHintLevel] = useState(0);
  const [showError, setShowError] = useState(false);
  // Danh sách từ đã trả lời đúng — tích lũy realtime
  const [answeredList, setAnsweredList] = useState<ListeningQuestion[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (questions[currentIndex] && !isDone) {
      speak(questions[currentIndex].jpText, 0.85);
    }
  }, [currentIndex, questions, speak, isDone]);

  // Global hotkey listener
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (
        e.key === 'F2' ||
        e.key === '`' ||
        (e.ctrlKey && (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp'))
      ) {
        if (!questions[currentIndex]) return;
        e.preventDefault();
        speak(questions[currentIndex].jpText, 0.85);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [speak, questions, currentIndex]);

  if (questions.length === 0) {
    return <div style={{ textAlign: 'center', marginTop: 40 }}>Không đủ dữ liệu ví dụ. Hãy học thêm Kanji!</div>;
  }

  const q = questions[currentIndex];

  const goNext = (newScore: number, answered: ListeningQuestion) => {
    // Thêm vào danh sách ngay lập tức
    setAnsweredList(prev => [...prev, answered]);
    if (currentIndex + 1 >= questions.length) {
      setIsDone(true);
    } else {
      setCurrentIndex(i => i + 1);
      setInputVal('');
      setHintLevel(0);
      setShowError(false);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;
    const isCorrect = normalizeString(inputVal) === normalizeString(q.correctRomaji);
    if (isCorrect) {
      setScore(s => s + 1);
      goNext(score + 1, q);
    } else {
      setShowError(true);
      if (hintLevel < 3) setHintLevel(h => h + 1);
      setTimeout(() => setShowError(false), 800);
    }
  };

  const handleSkip = () => {
    goNext(Math.max(0, score - 1), q);
  };

  const promptHint = () => {
    if (hintLevel < 3) setHintLevel(h => h + 1);
  };

  const renderHint = () => {
    if (hintLevel === 0) return null;
    let hintText = '';
    if (hintLevel === 1) hintText = generateHintLevel1(q.correctRomaji);
    if (hintLevel === 2) hintText = generateHintLevel2(q.correctRomaji);
    if (hintLevel === 3) hintText = q.correctRomaji;
    return (
      <div style={{ marginTop: 14, padding: 12, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
        <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 6 }}>
          💡 Gợi ý {hintLevel}/3 — Nghĩa: <strong style={{ color: 'var(--text)' }}>{q.vnMeaning}</strong>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 15, letterSpacing: 1.5, color: hintLevel === 3 ? 'var(--blue)' : 'var(--text)' }}>
          {hintText}
        </div>
        {hintLevel === 3 && (
          <div style={{ marginTop: 6, fontSize: 16, fontWeight: 'bold' }}>Kanji: {q.jpText}</div>
        )}
      </div>
    );
  };

  // Panel danh sách từ (dùng cho cả realtime và cuối bài)
  const renderAnsweredList = () => (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 12,
      border: '1px solid var(--border)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {/* Header */}
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
        <span>📋 Đã nghe được</span>
        <span style={{
          background: 'var(--gold)',
          color: 'var(--bg)',
          borderRadius: 99,
          padding: '2px 10px',
          fontSize: 12,
          fontWeight: 800,
        }}>{answeredList.length}</span>
      </div>

      {/* Empty state */}
      {answeredList.length === 0 && (
        <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--mute)', fontSize: 13 }}>
          Gõ đúng từ đầu tiên<br />để bắt đầu danh sách 👂
        </div>
      )}

      {/* List rows */}
      <div style={{ overflowY: 'auto', flex: 1 }}>
        {[...answeredList].reverse().map((item, idx) => (
          <div key={idx} style={{
            padding: '10px 14px',
            borderBottom: '1px solid var(--border)',
            animation: idx === 0 ? 'fadeIn 0.3s ease' : undefined,
          }}>
            {/* Row 1: Kana to nghĩa */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)' }}>
                {item.jpText}
                {item.reading && (
                  <span style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 400, marginLeft: 6 }}>({item.reading})</span>
                )}
              </span>
              <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                🇻🇳 {item.vnMeaning}
              </span>
            </div>
            {/* Row 2: Romaji + on/kun */}
            <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--mute)', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--blue)', fontFamily: 'monospace' }}>{item.correctRomaji}</span>
              {item.on && <span><strong style={{ color: 'var(--blue)' }}>On:</strong> {item.on}{item.on_rom ? ` (${item.on_rom})` : ''}</span>}
              {item.kun && <span><strong style={{ color: 'var(--green)' }}>Kun:</strong> {item.kun}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── MÀN HÌNH KẾT QUẢ CUỐI ───────────────────────────────────────────────
  if (isDone) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div style={{ maxWidth: 800, margin: '0 auto', paddingTop: 16 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 48 }}>{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📖'}</div>
          <h2 style={{ margin: '8px 0 4px', fontSize: 20 }}>{score}/{questions.length} câu đúng — {pct}%</h2>
          <p style={{ color: 'var(--mute)', fontSize: 13, margin: '0 0 20px' }}>
            {pct >= 80 ? 'Xuất sắc! Tai nghe của bạn rất tốt 🔥' : pct >= 50 ? 'Khá đấy! Luyện thêm sẽ tốt hơn 💪' : 'Hãy luyện nghe thêm nhé 📚'}
          </p>
        </div>

        {/* Danh sách toàn bộ */}
        <div style={{ height: 400 }}>
          {renderAnsweredList()}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => onFinish(score, questions.length)}
          style={{ width: '100%', padding: '13px 0', fontSize: 15, fontWeight: 700, borderRadius: 10, marginTop: 16 }}
        >
          ✅ Hoàn thành Ải 5
        </button>
      </div>
    );
  }

  // ── MÀN HÌNH LÀM BÀI — layout 2 cột ────────────────────────────────────
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 20 }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 24 }}>
        {questions.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 5, borderRadius: 3,
            backgroundColor: i < currentIndex ? 'var(--gold)' : i === currentIndex ? 'var(--gold-light)' : 'var(--surface-alt)'
          }} />
        ))}
      </div>

      {/* 2 cột */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>

        {/* CỘT TRÁI: Bài tập */}
        <div>
          {/* Nút nghe */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
              {q.type === 'vocab' ? '🎧 Nghe Từ Vựng' : '🎧 Nghe Câu'} — Câu {currentIndex + 1}/{questions.length}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => speak(q.jpText, 0.85)}
              style={{ width: 90, height: 90, borderRadius: '50%', fontSize: 36, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
              title="Phát Âm Lại"
            >
              🔊
            </button>
            <div style={{ color: 'var(--mute)', fontSize: 12 }}>Nhấn để nghe lại (đề bài đang được che)</div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <input
              autoFocus
              className={`ex-input ${showError ? 'shake error' : ''}`}
              type="text"
              value={inputVal}
              onChange={e => { setInputVal(e.target.value); setShowError(false); }}
              placeholder="Nhập Romaji bạn vừa nghe (vd: watashi wa...)"
              style={{ width: '100%', outline: 'none' }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ position: 'absolute', right: 8, top: 8, bottom: 8, padding: '0 20px', borderRadius: 8 }}
              disabled={!inputVal.trim()}
            >
              Check
            </button>
          </form>

          {renderHint()}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
            <button type="button" className="btn btn-ghost" onClick={promptHint} disabled={hintLevel >= 3}>
              💡 Xin gợi ý ({hintLevel}/3)
            </button>
            {hintLevel === 3 && (
              <button type="button" className="btn btn-secondary" onClick={handleSkip}>
                Bỏ qua ⏭️
              </button>
            )}
          </div>
        </div>

        {/* CỘT PHẢI: Danh sách tích lũy */}
        <div style={{ height: 460, position: 'sticky', top: 16 }}>
          {renderAnsweredList()}
        </div>
      </div>
    </div>
  );
}
