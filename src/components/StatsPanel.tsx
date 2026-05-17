// src/components/StatsPanel.tsx
// Biểu đồ thống kê 7 ngày gần nhất
import type { SessionLog } from '../types';

interface DayStat {
  date: string;      // YYYY-MM-DD
  label: string;     // T2, T3, ...
  xp: number;
  kanji: number;
  quizAvg: number;   // % đúng trung bình
  studied: boolean;
}

function buildDayStats(logs: SessionLog[]): DayStat[] {
  const days: DayStat[] = [];
  const dayLabels = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const label = dayLabels[d.getDay()];

    const dayLogs = logs.filter(l => l.date === dateStr);
    const xp    = dayLogs.reduce((s, l) => s + l.xp, 0);
    const kanji = dayLogs.reduce((s, l) => s + l.kanjiCount, 0);

    const quizLogs = dayLogs.filter(l => l.quizScore != null && l.quizTotal);
    const quizAvg  = quizLogs.length
      ? Math.round(quizLogs.reduce((s, l) => s + (l.quizScore! / (l.quizTotal || 1)) * 100, 0) / quizLogs.length)
      : 0;

    days.push({ date: dateStr, label, xp, kanji, quizAvg, studied: dayLogs.length > 0 });
  }
  return days;
}

interface Props {
  logs: SessionLog[];
}

export function StatsPanel({ logs }: Props) {
  const days  = buildDayStats(logs);
  const maxXp = Math.max(...days.map(d => d.xp), 1);

  const totalXp    = logs.reduce((s: number, l) => s + l.xp, 0);
  const quizLogs   = logs.filter(l => l.quizScore != null && l.quizTotal);
  const avgAccuracy = quizLogs.length
    ? Math.round(quizLogs.reduce((s, l) => s + (l.quizScore! / (l.quizTotal || 1)) * 100, 0) / quizLogs.length)
    : 0;

  return (
    <div className="stats-panel">
      <h3 className="stats-title">📊 Thống Kê 7 Ngày</h3>

      {/* Summary badges */}
      <div className="stats-badges">
        <div className="stat-badge">
          <div className="stat-num">{totalXp}</div>
          <div className="stat-lbl">Tổng XP</div>
        </div>
        <div className="stat-badge">
          <div className="stat-num">{days.filter(d => d.studied).length}/7</div>
          <div className="stat-lbl">Ngày học</div>
        </div>
        <div className="stat-badge">
          <div className="stat-num">{avgAccuracy}%</div>
          <div className="stat-lbl">Độ chính xác</div>
        </div>
      </div>

      {/* XP Bar chart */}
      <div className="bar-chart">
        {days.map(d => (
          <div key={d.date} className="bar-col">
            <div className="bar-xp-label">{d.xp > 0 ? d.xp : ''}</div>
            <div className="bar-track">
              <div
                className={`bar-fill ${d.studied ? 'active' : ''}`}
                style={{ height: `${(d.xp / maxXp) * 100}%` }}
              />
            </div>
            <div className={`bar-label ${d.studied ? 'studied' : ''}`}>{d.label}</div>
            {d.quizAvg > 0 && (
              <div className="bar-score">{d.quizAvg}%</div>
            )}
          </div>
        ))}
      </div>
      <div className="bar-chart-legend">
        <span style={{ color: 'var(--mute)', fontSize: 11 }}>Số bên trên bar = XP · % dưới = điểm quiz</span>
      </div>
    </div>
  );
}
