// src/hooks/useProgress.ts
// localStorage wrapper — persist XP, streak, learnedIds, weakIds, sessionLogs

import { useState, useCallback } from 'react';
import type { Progress, SessionLog } from '../types';

const KEY = 'kanjiN5Progress';

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Progress;
      // Auto-unlock lessons 1 to 4 for existing users based on feedback
      if (!p.nihongoMastery) p.nihongoMastery = {};
      if (!p.nihongoMastery[1]) p.nihongoMastery[1] = { isCompleted: true };
      if (!p.nihongoMastery[2]) p.nihongoMastery[2] = { isCompleted: true };
      if (!p.nihongoMastery[3]) p.nihongoMastery[3] = { isCompleted: true };
      if (!p.nihongoMastery[4]) p.nihongoMastery[4] = { isCompleted: true };
      return p;
    }
  } catch { /* ignore */ }
  return { 
    xp: 0, streak: 0, learnedIds: [], weakIds: [], lastQuizDate: '', sessionLogs: [], deepStageMap: {}, learnedGrammarIds: [],
    nihongoMastery: { 1: { isCompleted: true }, 2: { isCompleted: true }, 3: { isCompleted: true }, 4: { isCompleted: true } }
  };
}

function save(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(load);

  const addXP = useCallback((amount: number) => {
    setProgress((prev) => {
      const next = { ...prev, xp: prev.xp + amount };
      save(next);
      return next;
    });
  }, []);

  const markLearned = useCallback((id: number) => {
    setProgress((prev) => {
      if (prev.learnedIds.includes(id)) return prev;
      const next = { ...prev, learnedIds: [...prev.learnedIds, id] };
      save(next);
      return next;
    });
  }, []);

  const markWeak = useCallback((id: number) => {
    setProgress((prev) => {
      if (prev.weakIds.includes(id)) return prev;
      const next = { ...prev, weakIds: [...prev.weakIds, id] };
      save(next);
      return next;
    });
  }, []);

  const clearWeak = useCallback((id: number) => {
    setProgress((prev) => {
      const next = { ...prev, weakIds: prev.weakIds.filter((x) => x !== id) };
      save(next);
      return next;
    });
  }, []);

  const updateDeepStage = useCallback((kanjiBlockId: number, stage: number) => {
    setProgress((prev) => {
      const next = { ...prev, deepStageMap: { ...prev.deepStageMap, [kanjiBlockId]: stage } };
      save(next);
      return next;
    });
  }, []);

  // ── Streak: reset về 1 nếu bỏ ngày ─────────────────────
  const bumpStreak = useCallback(() => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    setProgress((prev) => {
      if (prev.lastQuizDate === today) return prev; // đã tính hôm nay rồi
      const newStreak = prev.lastQuizDate === yesterday
        ? prev.streak + 1  // hôm qua có học → tiếp tục streak
        : 1;               // bỏ ngày → reset về 1
      const next = { ...prev, streak: newStreak, lastQuizDate: today };
      save(next);
      return next;
    });
  }, []);

  // ── Lưu lịch sử session học ──────────────────────────────
  const logSession = useCallback((log: Omit<SessionLog, 'date'>) => {
    const now = new Date();
    const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10); // YYYY-MM-DD Local
    setProgress((prev) => {
      const existing = prev.sessionLogs ?? [];
      // Cộng dồn nếu đã có log cùng ngày + loại
      const idx = existing.findIndex(l => l.date === date && l.type === log.type);
      let next: SessionLog[];
      if (idx >= 0) {
        next = existing.map((l, i) => i === idx ? {
          ...l,
          xp: l.xp + log.xp,
          kanjiCount: l.kanjiCount + log.kanjiCount,
          quizScore: log.quizScore ?? l.quizScore,
          quizTotal: log.quizTotal ?? l.quizTotal,
          durationMin: l.durationMin + log.durationMin,
        } : l);
      } else {
        next = [...existing, { date, ...log }];
      }
      const updated = { ...prev, sessionLogs: next };
      save(updated);
      return updated;
    });
  }, []);

  const resetAll = useCallback(() => {
    const fresh: Progress = { xp: 0, streak: 0, learnedIds: [], weakIds: [], lastQuizDate: '', sessionLogs: [], deepStageMap: {} };
    save(fresh);
    setProgress(fresh);
  }, []);

  const markGrammarLearned = useCallback((id: number) => {
    setProgress((prev) => {
      const arr = prev.learnedGrammarIds || [];
      if (arr.includes(id)) return prev;
      const next = { ...prev, learnedGrammarIds: [...arr, id] };
      save(next);
      return next;
    });
  }, []);

  const markNihongoLessonCompleted = useCallback((lessonId: number) => {
    setProgress((prev) => {
      const mastery = prev.nihongoMastery || {};
      if (mastery[lessonId]?.isCompleted) return prev;
      const next = { ...prev, nihongoMastery: { ...mastery, [lessonId]: { isCompleted: true } } };
      save(next);
      return next;
    });
  }, []);

  const updateSentenceMastery = useCallback((sentenceKey: string, type: 'listen' | 'translate') => {
    setProgress((prev) => {
      const db = prev.sentenceMastery || {};
      const cur = db[sentenceKey] || { listenCount: 0, translateCount: 0 };
      const nextCur = { ...cur, [type + 'Count']: cur[(type + 'Count') as keyof typeof cur] + 1 };
      
      const next = { ...prev, sentenceMastery: { ...db, [sentenceKey]: nextCur } };
      save(next);
      return next;
    });
  }, []);

  const incrementLessonReviewCount = useCallback((lessonId: number) => {
    setProgress((prev) => {
      const counts = prev.lessonReviewCounts || {};
      const current = counts[lessonId] || 0;
      const next = { ...prev, lessonReviewCounts: { ...counts, [lessonId]: current + 1 } };
      save(next);
      return next;
    });
  }, []);

  return { progress, addXP, markLearned, markWeak,    clearWeak,
    bumpStreak,
    logSession,
    updateDeepStage,
    resetAll,
    markGrammarLearned,
    markNihongoLessonCompleted,
    updateSentenceMastery,
    incrementLessonReviewCount,
  };
}
