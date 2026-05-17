// src/pages/LearnPage.tsx
import { useState } from 'react';
import { Flashcard } from '../components/Flashcard';
import type { KanjiItem } from '../types';

interface Props {
  queue: KanjiItem[];
  onCardDone: (id: number) => void;
  onComplete: (queue: KanjiItem[]) => void;
  onHome: () => void;
}

export function LearnPage({ queue, onCardDone, onComplete, onHome }: Props) {
  const [idx, setIdx] = useState(0);

  const handleNext = () => {
    onCardDone(queue[idx].id);
    if (idx < queue.length - 1) setIdx((i) => i + 1);
    else onComplete(queue);
  };

  const handlePrev = () => {
    if (idx > 0) setIdx((i) => i - 1);
  };

  if (queue.length === 0) return null;

  return (
    <div className="screen">
      <Flashcard
        kanji={queue[idx]}
        index={idx}
        total={queue.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onHome={onHome}
        isFirst={idx === 0}
        isLast={idx === queue.length - 1}
      />
    </div>
  );
}
