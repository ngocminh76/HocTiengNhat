// src/pages/ResultPage.tsx
interface Props {
  score: number;
  total: number;
  xpGained: number;
  weakCount: number;
  onReview: () => void;
  onLearnMore: () => void;
  onHome: () => void;
}

export function ResultPage({ score, total, xpGained, weakCount, onReview, onLearnMore, onHome }: Props) {
  const pct   = Math.round((score / total) * 100);
  const isPassed = pct >= 75; // 15/20 = 75%
  const emoji = isPassed ? (pct >= 90 ? '🏆' : '👍') : '💔';
  
  const msg = isPassed 
    ? 'Tuyệt vời! Bạn đã ĐẠT bài kiểm tra.' 
    : 'CHƯA ĐẠT. Bạn cần đúng từ 75% (15/20) trở lên để đi tiếp!';

  return (
    <div className="result-screen screen">
      <div style={{ fontSize: 72 }}>{emoji}</div>
      <h2 style={{ color: isPassed ? 'var(--green)' : 'var(--red)' }}>{msg}</h2>
      <p>{weakCount > 0 ? `Có ${weakCount} từ bạn hay quên cần ôn thêm.` : 'Hoàn hảo, không sai lỗi nào!'}</p>

      <div className="result-stats">
        <div className="r-stat"><div className="num">{score}/{total}</div><div className="lbl">Câu đúng</div></div>
        <div className="r-stat"><div className="num">{pct}%</div><div className="lbl">Tỉ lệ</div></div>
        <div className="r-stat"><div className="num">+{xpGained}</div><div className="lbl">XP</div></div>
      </div>

      <div className="btn-row">
        {!isPassed ? (
          <button className="btn btn-primary" onClick={onReview}>
            🔄 Làm Lại / Ôn Tập Lỗi Sai
          </button>
        ) : (
          <>
            {weakCount > 0 && (
              <button className="btn btn-primary" onClick={onReview}>
                🔄 Ôn từ yếu ({weakCount})
              </button>
            )}
            <button className="btn btn-secondary" onClick={onLearnMore}>📚 Học bài mới</button>
          </>
        )}
        <button className="btn btn-ghost" onClick={onHome}>🏠 Trang chủ</button>
      </div>
    </div>
  );
}
