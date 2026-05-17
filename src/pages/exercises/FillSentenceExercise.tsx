// src/pages/exercises/FillSentenceExercise.tsx
// Bài: Ẩn từ vựng trong câu ví dụ → user tự điền (3 lần thử + hint)
// Layout 2 cột: trái = bài tập, phải = panel danh sách tích lũy realtime
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import type { KanjiItem } from '../../types';
import { useSpeech } from '../../hooks/useSpeech';
import { generateHintLevel1, generateHintLevel2 } from '../../utils/stringHelper';
import { KANJI_N5 } from '../../data/kanji-n5';

interface Props {
  pool: KanjiItem[];
  learnedIds: number[];
  onFinish: (score: number, total: number) => void;
}

interface SentenceQuestion {
  kanji: KanjiItem;
  sentence: string;
  hiddenWord: string;
  acceptedAnswers: string[];
  display: string;
  vn: string;
  reading: string;
}

interface AnsweredItem {
  sentence: string;
  hiddenWord: string;
  reading: string;
  vn: string;
  isCorrect: boolean;
}

function buildSentenceQuestions(pool: KanjiItem[], _learnedIds: number[]): SentenceQuestion[] {
  const qs: SentenceQuestion[] = [];
  for (const k of pool) {
    // Ưu tiên: tìm vocab DÀI NHẤT khớp trong câu ví dụ
    // (tránh chọn 手 thay vì 上手, hay 時 thay vì 何時)
    const matchedVocab = k.vocab
      .filter(v => k.example.jp.includes(v.word))
      .sort((a, b) => b.word.length - a.word.length)[0] || null;

    if (matchedVocab) {
      const display = k.example.jp.replace(matchedVocab.word, '＿＿＿');
      qs.push({
        kanji: k,
        sentence: k.example.jp,
        hiddenWord: matchedVocab.word,
        acceptedAnswers: [matchedVocab.word, matchedVocab.reading, matchedVocab.romaji],
        display,
        vn: k.example.vn,
        reading: matchedVocab.reading,
      });
    } else {
      // Fallback: ẩn chính chữ Kanji gốc trong câu ví dụ
      const kanjiChar = k.kanji;
      if (k.example.jp.includes(kanjiChar)) {
        const display = k.example.jp.replace(kanjiChar, '＿');
        const kunFirst = k.kun.split('・')[0] || '';
        const kunRomFirst = k.kun_rom.split('/')[0]?.trim() || '';
        qs.push({
          kanji: k,
          sentence: k.example.jp,
          hiddenWord: kanjiChar,
          acceptedAnswers: [kanjiChar, kunFirst, kunRomFirst, k.on, k.on_rom].filter(Boolean),
          display,
          vn: k.example.vn,
          reading: kunFirst || k.on,
        });
      } else {
        // Fallback cuối: dùng vocab đầu tiên làm câu hỏi riêng
        const v = k.vocab[0];
        if (v) {
          qs.push({
            kanji: k,
            sentence: v.word + ' = ' + v.meaning,
            hiddenWord: v.word,
            acceptedAnswers: [v.word, v.reading, v.romaji],
            display: '＿＿＿ = ' + v.meaning,
            vn: v.meaning,
            reading: v.reading,
          });
        }
      }
    }
  }
  const limit = Math.min(50, qs.length);
  return qs.sort(() => Math.random() - 0.5).slice(0, limit);
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, '');
}

export function FillSentenceExercise({ pool, learnedIds, onFinish }: Props) {
  const questionsRef = useRef<SentenceQuestion[]>(buildSentenceQuestions(pool, learnedIds));
  const questions    = questionsRef.current;

  const [idx, setIdx]         = useState(0);
  const [input, setInput]     = useState('');
  // idle | wrong1 | wrong2 | show_answer | correct
  const [status, setStatus]   = useState<'idle' | 'wrong1' | 'wrong2' | 'show_answer' | 'correct'>('idle');
  const [score, setScore]     = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [wiggle, setWiggle]   = useState(false);
  const [answeredList, setAnsweredList] = useState<AnsweredItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { speak, supported } = useSpeech();

  if (questions.length === 0) {
    return (
      <div className="ex-wrap" style={{ textAlign: 'center', paddingTop: 40 }}>
        <div style={{ fontSize: 40 }}>📭</div>
        <p style={{ marginTop: 12, color: 'var(--mute)' }}>
          Cần học thêm Kanji có từ vựng trong câu ví dụ để dùng bài tập này!
        </p>
      </div>
    );
  }

  const cur = questions[idx];

  // Hint dựa theo romaji của hiddenWord (dùng utils giống Ải 1)
  const hintTarget = cur.acceptedAnswers[2] || cur.acceptedAnswers[0]; // romaji ưu tiên

  const goNext = useCallback((isCorrect: boolean, addToList: AnsweredItem) => {
    setAnsweredList(prev => [...prev, addToList]);
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
    // Lần 3 sai → đang hiện đáp án, bấm "Tiếp tục"
    if (status === 'show_answer') {
      goNext(false, {
        sentence: cur.sentence,
        hiddenWord: cur.hiddenWord,
        reading: cur.reading,
        vn: cur.vn,
        isCorrect: false,
      });
      return;
    }

    if (status === 'correct' || !input.trim()) return;

    const isCorrect = cur.acceptedAnswers.map(normalize).includes(normalize(input));

    if (isCorrect) {
      setStatus('correct');
      const scoredCorrect = failCount === 0; // chỉ tính điểm nếu đúng lần đầu
      if (scoredCorrect) setScore(s => s + 1);
      if (supported) speak(cur.sentence);
      setTimeout(() => goNext(scoredCorrect, {
        sentence: cur.sentence,
        hiddenWord: cur.hiddenWord,
        reading: cur.reading,
        vn: cur.vn,
        isCorrect: scoredCorrect,
      }), 1200);
    } else {
      const currentFail = failCount + 1;
      setFailCount(currentFail);
      setWiggle(true);
      setTimeout(() => setWiggle(false), 400);

      if (currentFail === 1) {
        setStatus('wrong1');
        setTimeout(() => inputRef.current?.focus(), 50);
      } else if (currentFail === 2) {
        setStatus('wrong2');
        setTimeout(() => inputRef.current?.focus(), 50);
      } else {
        // Lần 3 sai → hiện đáp án, disable input
        setStatus('show_answer');
        setTimeout(() => inputRef.current?.blur(), 50);
      }
    }
  }, [cur, failCount, goNext, input, speak, status, supported]);

  const progress = Math.round((idx / questions.length) * 100);
  const parts = cur.display.split('＿＿＿');

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (
        e.key === 'F2' ||
        e.key === '`' ||
        (e.ctrlKey && (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp'))
      ) {
        e.preventDefault();
        speak(cur.sentence);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [speak, cur.sentence]);

  // Render hint box
  const renderHint = () => {
    if (status === 'idle' || status === 'correct') return null;
    if (status === 'show_answer') {
      return (
        <div className="ex-feedback wrong" style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
          <div><strong>📝 Cần ghi nhớ:</strong></div>
          <div>Từ cần điền: <strong style={{ color: 'var(--blue)', fontSize: 18 }}>{cur.hiddenWord}</strong> ({cur.reading})</div>
          <div>Romaji: <span style={{ fontFamily: 'monospace', color: 'var(--gold)' }}>{hintTarget}</span></div>
          <div>Câu đầy đủ: {cur.sentence}</div>
          <div style={{ color: 'var(--mute)', fontSize: 13, marginTop: 4 }}>
            Nhấn "Tiếp tục" để qua câu tiếp theo.
          </div>
        </div>
      );
    }

    // wrong1: gợi ý dạng _ _ _ _ (word length)
    // wrong2: gợi ý 3 ký tự đầu
    const hintText = status === 'wrong1'
      ? generateHintLevel1(hintTarget)
      : generateHintLevel2(hintTarget);

    const attemptLeft = status === 'wrong1' ? 1 : 0;

    return (
      <div style={{ marginTop: 12, padding: '10px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
        <div style={{ fontSize: 12, color: 'var(--mute)', marginBottom: 6 }}>
          💡 Gợi ý lần {status === 'wrong1' ? 1 : 2}/2 — còn {attemptLeft} lần thử:
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 17, letterSpacing: 2, color: 'var(--gold)' }}>
          {hintText}
        </div>
        <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>
          Nghĩa: <strong style={{ color: 'var(--text)' }}>{cur.vn}</strong>
        </div>
      </div>
    );
  };

  // --- Panel từ vựng trong câu (hiện khi correct / show_answer) ---
  const sentenceVocab = useMemo(() => {
    const jp = cur.sentence;
    const list: Array<{word: string, reading: string, romaji: string, meaning: string}> = [];
    const seen = new Set<string>();

    const matchWord = (word: string) => {
      if (jp.includes(word)) return true;
      const last = word.slice(-1);
      if (/[\u3040-\u309F]/.test(last)) {
        const stem = word.slice(0, -1);
        if (/[\u4e00-\u9faf]/.test(stem) && jp.includes(stem)) return true;
      }
      return false;
    };

    const add = (v: {word: string, reading: string, romaji: string, meaning: string}) => {
      if (!seen.has(v.word)) { seen.add(v.word); list.push(v); }
    };

    // 1. Vocab của Kanji hiện tại
    for (const v of cur.kanji.vocab) { if (matchWord(v.word)) add(v); }

    // 2. Quét toàn bộ N5 nếu Kanji khác xuất hiện trong câu
    for (const k of KANJI_N5) {
      if (k.id === cur.kanji.id) continue;
      if (jp.includes(k.kanji)) {
        for (const v of k.vocab) { if (matchWord(v.word)) add(v); }
      }
    }
    return list;
  }, [cur]);

  const renderVocabPanel = () => (
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
        background: 'rgba(255,255,255,0.02)',
        flexShrink: 0,
      }}>
        📖 Từ vựng trong câu
      </div>
      <div style={{ overflowY: 'auto', flex: 1, padding: '10px 0' }}>
        {sentenceVocab.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px 12px', color: 'var(--mute)', fontSize: 13 }}>
            Không có từ vựng 🤷
          </div>
        ) : sentenceVocab.map((v, i) => (
          <div key={i} style={{
            padding: '8px 12px',
            borderBottom: i < sentenceVocab.length - 1 ? '1px solid var(--border)' : 'none',
            animation: 'fadeIn 0.3s',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{v.word}</span>
              {supported && (
                <button className="btn-icon" style={{ fontSize: 13 }} onClick={() => speak(v.word, 0.85)} title="Nghe">🔊</button>
              )}
            </div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--mute)' }}>{v.reading} · {v.romaji}</div>
            <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>{v.meaning}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // Panel danh sách tích lũy
  const renderAnsweredPanel = () => (
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
        {[...answeredList].reverse().map((item, i) => (
          <div key={i} style={{
            padding: '10px 14px',
            borderBottom: '1px solid var(--border)',
            borderLeft: `3px solid ${item.isCorrect ? 'var(--green)' : '#e53935'}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: item.isCorrect ? 'var(--green)' : '#e53935' }}>
                {item.isCorrect ? '✅' : '❌'} {item.hiddenWord}
                {item.reading && (
                  <span style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 400, marginLeft: 5 }}>
                    ({item.reading})
                  </span>
                )}
              </span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.5 }}>{item.sentence}</div>
            <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>🇻🇳 {item.vn}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 20 }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 13 }}>
        <span style={{ color: 'var(--mute)' }}>📝 Điền vào câu · {idx + 1}/{questions.length}</span>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>⭐ {score}</span>
      </div>
      <div style={{ height: 5, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--gold)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      {/* 3 cột */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px 220px', gap: 20, alignItems: 'start' }}>

        {/* CỘT TRÁI */}
        <div>
          {/* Câu ví dụ */}
          <div className="ex-card sentence-card" style={{ marginBottom: 16 }}>
            <div className="sentence-jp">
              <span>{parts[0]}</span>
              <span className="sentence-blank" style={{
                color: status === 'correct' ? 'var(--green)'
                  : status === 'show_answer' ? 'var(--blue)' : undefined
              }}>
                {status !== 'idle' ? cur.hiddenWord : '＿＿＿'}
              </span>
              <span>{parts[1]}</span>
              {supported && (
                <button className="btn-icon" style={{ fontSize: 16, marginLeft: 6 }}
                  onClick={() => speak(cur.sentence)} title="Nghe câu này (Phím tắt: ` hoặc F2)">🔊</button>
              )}
            </div>
            <div className="sentence-vn">→ {cur.vn}</div>
            <div className="sentence-kanji-hint">
              Kanji liên quan: <strong style={{ color: 'var(--gold)' }}>{cur.kanji.kanji}</strong>
              &nbsp;·&nbsp;{cur.kanji.meaning}
            </div>
          </div>

          <p className="ex-instruction" style={{ marginBottom: 12 }}>
            Điền từ bị ẩn — chấp nhận: <span className="ex-hint">Kanji / Hiragana / romaji</span>
            {status !== 'idle' && status !== 'correct' && status !== 'show_answer' && (
              <span style={{ marginLeft: 8, color: failCount >= 2 ? '#e53935' : 'var(--mute)', fontWeight: 600 }}>
                · Lần thử {failCount + 1}/3
              </span>
            )}
          </p>

          {/* Input */}
          <div className="ex-input-row" style={{ animation: wiggle ? 'wiggle 0.4s ease-in-out' : 'none' }}>
            <input
              ref={inputRef}
              className={`ex-input ${status === 'correct' ? 'correct' : (status === 'wrong1' || status === 'wrong2') ? 'wrong' : ''}`}
              value={input}
              onChange={e => {
                setInput(e.target.value);
                if (status === 'wrong1' || status === 'wrong2') {
                  if (e.target.value.length < input.length) setStatus('idle');
                }
              }}
              onKeyDown={e => e.key === 'Enter' && handleCheck()}
              placeholder="Nhập từ còn thiếu..."
              disabled={status === 'correct' || status === 'show_answer'}
              autoFocus
            />
            <button
              className="btn btn-primary"
              onClick={handleCheck}
              disabled={status === 'correct' || (!input.trim() && status !== 'show_answer')}
            >
              {status === 'show_answer' ? 'Tiếp tục ⏭' : (status === 'wrong1' || status === 'wrong2') ? 'Thử Lại' : 'Kiểm tra'}
            </button>
          </div>

          {/* Feedback & Hint */}
          {status === 'correct' && (
            <div className="ex-feedback correct" style={{ marginTop: 12 }}>
              ✅ Đúng! &nbsp;<strong>{cur.hiddenWord}</strong> ({cur.reading})
            </div>
          )}
          {renderHint()}
        </div>

        {/* CỘT GIỮA: Từ vựng */}
        <div style={{ height: 480, position: 'sticky', top: 16 }}>
          {renderVocabPanel()}
        </div>

        {/* CỘT PHẢI: Danh sách tích lũy */}
        <div style={{ height: 480, position: 'sticky', top: 16 }}>
          {renderAnsweredPanel()}
        </div>
      </div>
    </div>
  );
}
