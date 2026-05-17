// src/hooks/usePlan.ts
// Flexible study goal: học đủ TARGET_MIN phút/ngày (tính từ sessionLogs thực tế)

import type { SessionLog } from '../types';

export const TARGET_MIN = 120; // 2 giờ mỗi ngày

export interface StudyGoal {
  todayMin: number;       // tổng phút học hôm nay
  targetMin: number;      // mục tiêu (120)
  pct: number;            // % hoàn thành (0-100)
  isGoalReached: boolean; // đạt mục tiêu chưa
  breakdown: {            // chi tiết từng loại
    learn: number;
    quiz: number;
    exercise: number;
  };
}

export function useStudyGoal(sessionLogs: SessionLog[]): StudyGoal {
  const now = new Date();
  const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10); // YYYY-MM-DD Local

  const todayLogs = sessionLogs.filter(l => l.date === today);

  const breakdown = {
    learn:    todayLogs.filter(l => l.type === 'learn').reduce((s, l) => s + l.durationMin, 0),
    quiz:     todayLogs.filter(l => l.type === 'quiz').reduce((s, l) => s + l.durationMin, 0),
    exercise: todayLogs.filter(l => l.type === 'exercise').reduce((s, l) => s + l.durationMin, 0),
  };

  const todayMin = breakdown.learn + breakdown.quiz + breakdown.exercise;
  const pct = Math.min(100, Math.round((todayMin / TARGET_MIN) * 100));

  return {
    todayMin,
    targetMin: TARGET_MIN,
    pct,
    isGoalReached: todayMin >= TARGET_MIN,
    breakdown,
  };
}
