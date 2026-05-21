import { DOKKAI_REVIEWS } from '../data/dokkai-reviews';

interface Props {
  checkpointId: string; // e.g. "checkpoint_1_5"
  checkpointMastery: Record<string, { isPassed: boolean; score: number }>;
  onHome: () => void;
  onSelectTest: (reviewId: string) => void;
}

export function CheckpointDashboardPage({ checkpointId, checkpointMastery, onHome, onSelectTest }: Props) {
  // Find all tests that belong to this checkpoint prefix
  const tests = DOKKAI_REVIEWS.filter(r => r.id.startsWith(checkpointId));
  
  const passedCount = tests.filter(t => checkpointMastery[t.id]?.isPassed).length;
  const isAllPassed = passedCount === tests.length && tests.length > 0;

  return (
    <div className="screen" style={{ padding: '16px 0', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexShrink: 0 }}>
        <button className="btn-back" onClick={onHome}>← Quay lại</button>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: 'var(--green)' }}>Trạm Ôn Tập Cuốn Chiếu</h2>
          <div style={{ fontSize: 13, color: 'var(--mute)' }}>Vượt qua tất cả các đề để đi tiếp!</div>
        </div>
      </div>

      <div style={{ background: 'rgba(6,214,160,0.1)', border: '2px solid var(--green)', borderRadius: 14, padding: '20px', textAlign: 'center', marginBottom: 32 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>{isAllPassed ? '🏆' : '🔥'}</div>
        <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--green)', marginBottom: 8 }}>
          {isAllPassed ? 'ĐÃ VƯỢT TRẠM THÀNH CÔNG!' : 'THỬ THÁCH VƯỢT TRẠM'}
        </div>
        <div style={{ fontSize: 15, color: 'var(--text)' }}>
          Bạn đã hoàn thành <strong>{passedCount} / {tests.length}</strong> bộ đề.
        </div>
        {!isAllPassed && (
          <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 8 }}>
            (Cần vượt qua {tests.length} bộ đề để mở khóa các bài học tiếp theo)
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tests.map((test, index) => {
          const mastery = checkpointMastery[test.id];
          const isPassed = mastery?.isPassed;
          const isLocked = index > 0 && !checkpointMastery[tests[index - 1].id]?.isPassed;

          return (
            <button
              key={test.id}
              onClick={() => !isLocked && onSelectTest(test.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 20px', borderRadius: 14,
                background: isPassed ? 'rgba(6,214,160,0.1)' : 'var(--bg-card)',
                border: isPassed ? '2px solid var(--green)' : isLocked ? '2px dashed var(--border)' : '2px solid var(--gold)',
                opacity: isLocked ? 0.5 : 1,
                cursor: isLocked ? 'not-allowed' : 'pointer',
                textAlign: 'left', transition: 'all 0.2s',
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: isPassed ? 'var(--green)' : 'rgba(255,196,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                {isPassed ? '✓' : isLocked ? '🔒' : '📝'}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: isPassed ? 'var(--green)' : 'var(--text)' }}>
                  {test.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }}>
                  {test.description}
                </div>
                {mastery && (
                  <div style={{ fontSize: 12, marginTop: 8, color: isPassed ? 'var(--green)' : 'var(--red)', fontWeight: 700 }}>
                    Điểm cao nhất: {mastery.score} / 21 câu {isPassed ? '(ĐẠT)' : '(CHƯA ĐẠT)'}
                  </div>
                )}
              </div>
              <div style={{ fontSize: 24, color: 'var(--mute)' }}>
                {isLocked ? '' : '▶'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
