// src/pages/PlanPage.tsx
import { useStudyGoal } from '../hooks/usePlan';
import { StatsPanel } from '../components/StatsPanel';
import type { Progress } from '../types';

const DAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

function CircularProgress({ pct, todayMin, targetMin }: { pct: number; todayMin: number; targetMin: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct / 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* Track */}
        <circle cx="70" cy="70" r={radius} fill="none" stroke="var(--bg-panel)" strokeWidth="12" />
        {/* Progress */}
        <circle
          cx="70" cy="70" r={radius}
          fill="none"
          stroke={pct >= 100 ? 'var(--green)' : 'var(--gold)'}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 70 70)"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
        {/* Text */}
        <text x="70" y="62" textAnchor="middle" fill="var(--fg)" fontSize="22" fontWeight="700">
          {todayMin}
        </text>
        <text x="70" y="80" textAnchor="middle" fill="var(--mute)" fontSize="11">
          / {targetMin} phút
        </text>
        <text x="70" y="96" textAnchor="middle" fill={pct >= 100 ? 'var(--green)' : 'var(--gold)'} fontSize="13" fontWeight="600">
          {pct}%
        </text>
      </svg>
    </div>
  );
}

export function PlanPage({ progress, onHome }: { progress: Progress; onHome: () => void }) {
  const { todayMin, targetMin, pct, isGoalReached, breakdown } = useStudyGoal(progress.sessionLogs ?? []);

  // Build week overview from sessionLogs
  const getWeekStats = () => {
    const result: Array<{ day: string; pct: number; isToday: boolean }> = [];
    const now = new Date();
    // Get Monday of this week
    const dayOfWeek = now.getDay(); // 0=Sun,1=Mon,...
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + mondayOffset + i);
      const dateStr = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      const todayStr = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      const dayLogs = (progress.sessionLogs ?? []).filter(l => l.date === dateStr);
      const mins = dayLogs.reduce((s, l) => s + l.durationMin, 0);
      const dayPct = Math.min(100, Math.round((mins / targetMin) * 100));
      result.push({ day: DAYS[i], pct: dayPct, isToday: dateStr === todayStr });
    }
    return result;
  };

  const weekStats = getWeekStats();

  const breakdownItems = [
    { label: '📖 Học Kanji', min: breakdown.learn, color: 'var(--gold)' },
    { label: '📝 Quiz', min: breakdown.quiz, color: '#60a5fa' },
    { label: '✍️ Luyện tập', min: breakdown.exercise, color: '#a78bfa' },
  ];

  return (
    <div className="screen">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <h2 style={{ flex: 1, fontSize: 18, fontWeight: 700 }}>🎯 Lộ Trình 3 Tháng N5</h2>
      </div>

      {/* Goal Ring */}
      <div className="guide-box" style={{ padding: '24px 16px', textAlign: 'center', marginBottom: 16 }}>
        <h3 style={{ marginBottom: 20, fontSize: 15 }}>Mục tiêu hôm nay — học đủ 2 giờ</h3>
        <CircularProgress pct={pct} todayMin={todayMin} targetMin={targetMin} />

        {isGoalReached ? (
          <div style={{ marginTop: 16, color: 'var(--green)', fontWeight: 700, fontSize: 15 }}>
            🎉 Tuyệt vời! Bạn đã đạt mục tiêu hôm nay!
          </div>
        ) : (
          <div style={{ marginTop: 16, color: 'var(--mute)', fontSize: 13 }}>
            Còn <strong style={{ color: 'var(--fg)' }}>{targetMin - todayMin} phút</strong> nữa là đạt mục tiêu 💪
          </div>
        )}
      </div>

      {/* Breakdown */}
      <div className="guide-box" style={{ padding: '16px', marginBottom: 16 }}>
        <h3 style={{ marginBottom: 14, fontSize: 14 }}>Chi tiết hôm nay</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {breakdownItems.map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, width: 110, color: 'var(--mute)' }}>{item.label}</span>
              <div style={{ flex: 1, background: 'var(--bg)', borderRadius: 6, height: 8, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${Math.min(100, Math.round((item.min / targetMin) * 100))}%`,
                  background: item.color,
                  borderRadius: 6,
                  transition: 'width 0.5s ease',
                }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, minWidth: 40, textAlign: 'right' }}>
                {item.min}p
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Week Overview */}
      <div className="guide-box" style={{ padding: '20px 16px', marginBottom: 16 }}>
        <h3 style={{ marginBottom: 16, fontSize: 14 }}>Thống kê Tuần này</h3>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
          {weekStats.map(({ day, pct: dayPct, isToday }) => (
            <div key={day} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: 11, color: isToday ? 'var(--gold)' : 'var(--mute)', marginBottom: 6, fontWeight: isToday ? 700 : 400 }}>
                {day}
              </div>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', margin: '0 auto',
                background: dayPct >= 100 ? 'var(--green)' : dayPct > 0 ? 'var(--gold)' : 'var(--bg-panel)',
                border: isToday ? '2px solid var(--gold)' : '2px solid transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700,
                color: dayPct >= 100 ? '#fff' : dayPct > 0 ? '#000' : 'var(--mute)',
              }}>
                {dayPct >= 100 ? '✓' : dayPct > 0 ? `${dayPct}%` : '-'}
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 14, fontSize: 12, color: 'var(--mute)', textAlign: 'center' }}>
          Mục tiêu: Hoàn thành ít nhất 5 ngày / tuần để ghi nhớ vĩnh viễn Kanji vào não bộ 🧠
        </p>
      </div>

      {/* Stats Panel — lịch sử 7 ngày */}
      <div style={{ marginTop: 8 }}>
        <StatsPanel logs={progress.sessionLogs ?? []} />
      </div>
    </div>
  );
}
