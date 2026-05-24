import { Link } from 'react-router-dom';
import type { Progress } from '../types';

interface Props { 
  progress: Progress;
  onReset?: () => void;
}

export function Header({ progress, onReset }: Props) {
  const { xp, streak, learnedIds } = progress;
  return (
    <header className="hdr no-print">
      <Link to="/" className="hdr-logo-hidden">⛩️ Hành Trình Tiếng Nhật</Link>
      <div className="hdr-stats">
        <div className="badge">🔥 {streak} ngày</div>
        <div className="badge">⭐ {xp} XP</div>
        <div className="badge">📖 {learnedIds.length}/110</div>
        {onReset && (
           <button onClick={() => { if(confirm('Bạn có chắc muốn xóa 100% dữ liệu để cày lại từ đầu?')) onReset() }} style={{ marginLeft: 10, padding: '4px 8px', fontSize: 12, background: 'var(--red)', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
             Reset Toàn Bộ
           </button>
        )}
      </div>
    </header>
  );
}
