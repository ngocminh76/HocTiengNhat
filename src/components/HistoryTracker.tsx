// src/components/HistoryTracker.tsx
import type { SessionLog } from '../types';

interface Props {
  logs: SessionLog[];
}

export function HistoryTracker({ logs }: Props) {
  // Group logs by date
  const logsByDate = logs.reduce((acc, log) => {
    if (!acc[log.date]) acc[log.date] = { xp: 0, duration: 0, count: 0 };
    acc[log.date].xp += log.xp;
    acc[log.date].duration += log.durationMin;
    acc[log.date].count += 1;
    return acc;
  }, {} as Record<string, { xp: number; duration: number; count: number }>);

  const sortedDates = Object.keys(logsByDate).sort((a, b) => b.localeCompare(a));
  
  // Lấy 7 ngày gần nhất để vẽ mini-heatmap
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });

  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 14, padding: '18px 20px', border: '1px solid var(--border)', marginTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: 1 }}>
          🔥 Lịch Sử Cày Cuốc
        </div>
        <div style={{ fontSize: 12, color: 'var(--mute)' }}>{logs.length} sessions</div>
      </div>

      {/* Heatmap 7 ngày */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        {last7Days.map(date => {
          const hasData = logsByDate[date];
          const color = hasData ? (hasData.xp > 50 ? 'var(--gold)' : 'var(--blue)') : 'rgba(255,255,255,0.05)';
          const dayName = new Date(date).toLocaleDateString('vi-VN', { weekday: 'short' });
          return (
            <div key={date} title={hasData ? `${hasData.xp} XP - ${hasData.duration} phút` : 'Chưa học'} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: '100%', height: 28, borderRadius: 6, background: color, border: '1px solid rgba(255,255,255,0.1)', opacity: hasData ? 1 : 0.5 }} />
              <div style={{ fontSize: 9, color: 'var(--mute)' }}>{dayName}</div>
            </div>
          );
        })}
      </div>

      {/* List chi tiết */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 150, overflowY: 'auto', paddingRight: 4 }}>
        {sortedDates.length === 0 && <div style={{ fontSize: 13, color: 'var(--mute)', textAlign: 'center', padding: '10px 0' }}>Chưa có dữ liệu học tập</div>}
        {sortedDates.slice(0, 5).map(date => {
          const stat = logsByDate[date];
          return (
            <div key={date} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{date.split('-').reverse().join('/')}</div>
              <div style={{ display: 'flex', gap: 12, fontSize: 13, color: 'var(--mute)' }}>
                <span>⏱ {stat.duration}p</span>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>+{stat.xp} XP</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
