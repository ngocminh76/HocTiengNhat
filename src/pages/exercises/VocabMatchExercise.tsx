// src/pages/exercises/VocabMatchExercise.tsx
// Bài: Ghép đôi — tất cả thẻ xáo trộn vào 1 grid, bấm 2 thẻ để ghép cặp (kiểu game trí nhớ)
import { useState, useCallback } from 'react';
import type { KanjiItem } from '../../types';

interface Props {
  pool: KanjiItem[];
  onFinish: (score: number, total: number) => void;
}

interface Card {
  id: string;
  text: string;
  pairId: string;
  side: 'word' | 'meaning';
}

function buildCards(pool: KanjiItem[]): Card[] {
  const pairs: { left: string; right: string }[] = [];

  pool.forEach(k => {
    // Kanji ↔ On/Kun reading
    if (k.on || k.kun) {
      pairs.push({ left: k.kanji, right: (k.on || k.kun) + (k.on_rom ? ` · ${k.on_rom}` : '') });
    }
    // Vocab ↔ Nghĩa / Reading
    k.vocab.forEach(v => {
      pairs.push({
        left: v.word,
        right: Math.random() > 0.5 ? v.meaning : v.reading,
      });
    });
    // Câu ví dụ ↔ nghĩa VN
    if (k.example?.jp && k.example?.vn) {
      pairs.push({ left: k.example.jp, right: k.example.vn });
    }
  });

  // Giới hạn 10 cặp (20 thẻ) = vừa mắt
  const selected = pairs.sort(() => Math.random() - 0.5).slice(0, 10);

  const cards: Card[] = [];
  selected.forEach((p, i) => {
    const pairId = `pair_${i}`;
    cards.push({ id: `w_${i}`, text: p.left,  pairId, side: 'word' });
    cards.push({ id: `m_${i}`, text: p.right, pairId, side: 'meaning' });
  });

  // Xáo trộn tất cả vào 1 mảng
  return cards.sort(() => Math.random() - 0.5);
}

export function VocabMatchExercise({ pool, onFinish }: Props) {
  const [cards]    = useState<Card[]>(() => buildCards(pool));
  const [flipped, setFlipped]   = useState<string[]>([]);   // <= 2 id đang chọn
  const [matched, setMatched]   = useState<Set<string>>(new Set()); // pairId đã khớp
  const [wrong, setWrong]       = useState<string[]>([]);   // id đang flash đỏ
  const [score, setScore]       = useState(0);
  const [moves, setMoves]       = useState(0);

  const total = cards.length / 2;

  const handleClick = useCallback((card: Card) => {
    if (matched.has(card.pairId)) return;
    if (wrong.length > 0) return;
    if (flipped.includes(card.id)) return;
    if (flipped.length >= 2) return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [id1, id2] = newFlipped;
      const c1 = cards.find(c => c.id === id1)!;
      const c2 = cards.find(c => c.id === id2)!;

      if (c1.pairId === c2.pairId && c1.side !== c2.side) {
        // ✅ Đúng cặp!
        const newMatched = new Set([...matched, c1.pairId]);
        setMatched(newMatched);
        setScore(s => s + 1);
        setFlipped([]);
        if (newMatched.size === total) {
          setTimeout(() => onFinish(score + 1, total), 500);
        }
      } else {
        // ❌ Sai — flash đỏ rồi reset
        setWrong(newFlipped);
        setTimeout(() => {
          setWrong([]);
          setFlipped([]);
        }, 900);
      }
    }
  }, [cards, flipped, matched, wrong, score, total, onFinish]);

  const pct = Math.round((matched.size / total) * 100);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', paddingTop: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>🔗 Ghép Đôi</span>
        <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--mute)' }}>
          <span>✅ {matched.size}/{total} cặp</span>
          <span>🎯 {moves} lần chọn</span>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: 6, background: 'var(--surface-alt)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--green)', borderRadius: 3, transition: 'width 0.4s' }} />
      </div>

      <p style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 18, textAlign: 'center' }}>
        Nhấn 2 thẻ bất kỳ để ghép cặp — Tiếng Nhật ↔ Tiếng Việt / Romaji
      </p>

      {/* Grid thẻ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 10,
      }}>
        {cards.map(card => {
          const isMatched  = matched.has(card.pairId);
          const isFlipped  = flipped.includes(card.id);
          const isWrong    = wrong.includes(card.id);
          const isWord     = card.side === 'word';

          let bg = 'var(--bg-card)';
          let border = '1px solid var(--border)';
          let color = 'var(--text)';
          let transform = 'scale(1)';
          let opacity = '1';

          if (isMatched) {
            bg = 'rgba(76,175,80,0.12)';
            border = '1.5px solid var(--green)';
            color = 'var(--green)';
            opacity = '0.5';
          } else if (isWrong) {
            bg = 'rgba(229,57,53,0.15)';
            border = '1.5px solid #e53935';
            color = '#e53935';
            transform = 'scale(0.96)';
          } else if (isFlipped) {
            bg = isWord ? 'rgba(33,150,243,0.15)' : 'rgba(255,193,7,0.12)';
            border = isWord ? '1.5px solid var(--blue)' : '1.5px solid var(--gold)';
            color = isWord ? 'var(--blue)' : 'var(--gold)';
            transform = 'scale(1.03)';
          }

          return (
            <button
              key={card.id}
              onClick={() => handleClick(card)}
              disabled={isMatched}
              style={{
                background: bg,
                border,
                borderRadius: 10,
                padding: '10px 8px',
                minHeight: 70,
                fontSize: card.text.length > 12 ? 11 : card.text.length > 6 ? 13 : 16,
                fontWeight: 600,
                color,
                cursor: isMatched ? 'default' : 'pointer',
                transform,
                opacity,
                transition: 'all 0.18s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                lineHeight: 1.35,
                wordBreak: 'break-word',
                boxShadow: isFlipped && !isWrong ? '0 4px 16px rgba(0,0,0,0.25)' : 'none',
              }}
            >
              {isMatched ? '✅' : card.text}
            </button>
          );
        })}
      </div>

      {/* Hoàn thành */}
      {matched.size === total && (
        <div style={{
          marginTop: 24, padding: 20, borderRadius: 12,
          background: 'rgba(76,175,80,0.1)', border: '1.5px solid var(--green)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
          <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--green)' }}>
            Ghép đúng hết {total}/{total} cặp trong {moves} lần chọn!
          </div>
        </div>
      )}
    </div>
  );
}
