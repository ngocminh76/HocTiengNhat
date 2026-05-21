// src/pages/NihongoPage.tsx
// Trang chọn bài học (danh sách bài みんなの日本語)
import { useState } from 'react';
import { NIHONGO_LESSONS } from '../data/nihongo-lessons';

interface Props {
  mastery: Record<number, { isCompleted: boolean }>;
  sentenceMastery: Record<string, { listenCount: number; translateCount: number }>;
  checkpointMastery: Record<string, { isPassed: boolean; score: number }>;
  onHome: () => void;
  onSelectLesson: (lessonIds: number[]) => void;
  onShowDokkaiReview: (reviewId: string) => void;
}

export function NihongoPage({ mastery, sentenceMastery, checkpointMastery, onHome, onSelectLesson, onShowDokkaiReview }: Props) {
  const [selectedForReview, setSelectedForReview] = useState<number[]>([]);
  
  const handleToggleReview = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSelectedForReview(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= 3) return prev; // Max 3
      return [...prev, id];
    });
  };

  const handleStartReview = () => {
    if (selectedForReview.length > 0) {
      onSelectLesson(selectedForReview);
    }
  };
  // Tổng 25 bài — hiện tại có Bài 1, còn lại "Sắp ra mắt"
  const TOTAL_LESSONS = 25;

  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 700, letterSpacing: 1 }}>みんなの日本語 BOOK 1</div>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>Từ Vựng Theo Giáo Trình</h2>
        </div>
        <div style={{ fontSize: 13, color: 'var(--mute)' }}>{NIHONGO_LESSONS.length}/{TOTAL_LESSONS} bài</div>
      </div>

      <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(100,181,246,0.08)', border: '1px solid rgba(100,181,246,0.3)', marginBottom: 24, fontSize: 13, color: 'var(--mute)' }}>
        💡 <strong>Điều Kiện Mở Bài:</strong> Tùy theo Cài đặt ở phần Tổng Kết bài học.
        <br />- <strong>Khắt Khe:</strong> Phải thi đậu N5 bài trước <strong>VÀ</strong> luyện gõ Dịch/Nghe đạt 3/3 điểm cho tất cả các câu Đọc Hiểu.
        <br />- <strong>Linh Động:</strong> Chỉ cần thi đậu N5 bài trước là được mở bài mới!
      </div>

      {selectedForReview.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,196,0,0.15)', border: '2px solid var(--gold)', borderRadius: 14, padding: '12px 20px', marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 800 }}>CHẾ ĐỘ TỔNG ÔN LUYỆN 🔥</div>
            <div style={{ fontSize: 12, color: 'var(--mute)' }}>Đã chọn {selectedForReview.length}/3 bài để gộp chung</div>
          </div>
          <button onClick={handleStartReview} style={{
            background: 'var(--gold)', border: 'none', color: '#000', padding: '10px 20px',
            borderRadius: 10, fontWeight: 800, cursor: 'pointer'
          }}>Bắt đầu luôn →</button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Bài đã có */}
        {NIHONGO_LESSONS.map((lesson, idx) => {
          
          let prevPracticed = true;
          if (idx > 0) {
            const prev = NIHONGO_LESSONS[idx - 1];
            for (const r of prev.readings) {
              for (const line of r.lines) {
                const sm = sentenceMastery[line.jp] || { listenCount: 0, translateCount: 0 };
                if (sm.listenCount < 3 || sm.translateCount < 3) prevPracticed = false;
              }
            }
          }

          const passMode = localStorage.getItem('n5_pass_mode') === 'flexible' ? 'flexible' : 'strict';
          const isPrevCompleted = idx > 0 ? !!mastery[NIHONGO_LESSONS[idx - 1].id]?.isCompleted : true;
          
          let isUnlocked = isPrevCompleted;
          // TRẠM KIỂM TRA: Nếu qua Bài 5, phải làm xong checkpoint_1_5 (Gồm 5 đề)
          if (lesson.id > 5) {
            // Checkpoint 1-5 có 5 đề: review_1_5_1 đến review_1_5_5
            const passed1 = checkpointMastery['review_1_5_1']?.isPassed;
            const passed2 = checkpointMastery['review_1_5_2']?.isPassed;
            const passed3 = checkpointMastery['review_1_5_3']?.isPassed;
            const passed4 = checkpointMastery['review_1_5_4']?.isPassed;
            const passed5 = checkpointMastery['review_1_5_5']?.isPassed;
            if (!(passed1 && passed2 && passed3 && passed4 && passed5)) {
              isUnlocked = false; // Khóa nếu chưa qua Trạm Ôn Tập 1-5
            }
          }

          const isCompleted = mastery[lesson.id]?.isCompleted;
          const isSelected = selectedForReview.includes(lesson.id);

          return (
            <>
            <button
              key={lesson.id}
              onClick={() => {
                if (isUnlocked) {
                  onSelectLesson([lesson.id]);
                }
              }}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 20px', borderRadius: 14, cursor: isUnlocked ? 'pointer' : 'not-allowed',
                background: 'var(--bg-card)', border: isUnlocked ? '2px solid var(--gold)' : '2px solid var(--border)',
                boxShadow: isUnlocked ? '0 0 16px rgba(255,196,0,0.15)' : 'none',
                opacity: isUnlocked ? 1 : 0.6,
                textAlign: 'left', width: '100%', transition: 'all 0.2s',
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(255,196,0,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 11, color: isUnlocked ? 'var(--gold)' : 'var(--mute)', fontWeight: 800 }}>{lesson.chapter}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
                  {lesson.title}
                  {isCompleted && <span style={{ fontSize: 14 }}>🏆</span>}
                  <span style={{ fontSize: 12, color: 'var(--mute)', fontWeight: 400 }}>{lesson.titleVn}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--mute)' }}>{lesson.theme}</div>
                <div style={{ fontSize: 11, color: isUnlocked ? 'var(--gold)' : 'var(--mute)', marginTop: 4 }}>
                  {lesson.words.length} từ vựng · {lesson.readings.length} bài đọc
                </div>
              </div>
              
              {isUnlocked ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div 
                    onClick={(e) => handleToggleReview(e, lesson.id)}
                    style={{
                      width: 24, height: 24, borderRadius: 6, border: '2px solid var(--gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isSelected ? 'var(--gold)' : 'transparent',
                      color: '#000', fontSize: 14, fontWeight: 900
                    }}
                  >
                    {isSelected && '✓'}
                  </div>
                  <span style={{ fontSize: 20 }}>▶</span>
                </div>
              ) : (
                <span style={{ fontSize: 12, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 20 }}>🔒 Khóa</span>
              )}
            </button>
            
            {/* CHECKPOINT SAU MỖI 5 BÀI */}
            {lesson.id % 5 === 0 && (
              <div style={{ margin: '12px 0 24px 0', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => onShowDokkaiReview(`review_${lesson.id - 4}_${lesson.id}`)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '16px 24px', borderRadius: 14,
                    background: 'linear-gradient(135deg, rgba(6,214,160,0.1), rgba(6,214,160,0.2))',
                    border: '2px solid var(--green)',
                    boxShadow: '0 0 16px rgba(6,214,160,0.2)',
                    cursor: 'pointer',
                    opacity: 1,
                    width: '100%',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontSize: 28 }}>🚩</div>
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--green)' }}>
                      TRẠM ÔN TẬP: ĐỌC HIỂU N5 (BÀI {lesson.id - 4} - {lesson.id})
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }}>
                      Tổng hợp từ vựng và ngữ pháp 5 bài. Mô phỏng bài thi Dokkai JLPT N5.
                    </div>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#000', background: 'var(--green)', padding: '8px 16px', borderRadius: 8 }}>
                    LÀM BÀI →
                  </div>
                </button>
              </div>
            )}
            </>
          );
        })}

        {/* Các bài sắp ra mắt */}
        {Array.from({ length: TOTAL_LESSONS - NIHONGO_LESSONS.length }, (_, i) => {
          const lessonNum = NIHONGO_LESSONS.length + i + 1;
          const comingTitles: Record<number, { title: string; theme: string }> = {
            2: { title: 'これはなんですか', theme: 'Đồ vật · Địa điểm · Danh từ cơ bản' },
            3: { title: 'あれはわたしのかばんです', theme: 'Sở hữu · Đây/Đó/Kia' },
            4: { title: 'この本はいくらですか', theme: 'Mua bán · Số tiền · Hỏi giá' },
            5: { title: 'なんじですか', theme: 'Thời gian · Giờ giấc · Lịch trình' },
          };
          const info = comingTitles[lessonNum];
          return (
            <div key={lessonNum} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '14px 20px', borderRadius: 14,
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              opacity: 0.5,
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(255,255,255,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 800 }}>第{lessonNum}課</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2, color: 'var(--mute)' }}>
                  {info ? info.title : `Bài ${lessonNum}`}
                </div>
                <div style={{ fontSize: 12, color: 'var(--mute)' }}>{info ? info.theme : 'Sắp ra mắt...'}</div>
              </div>
              <span style={{ fontSize: 12, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 20 }}>🔒 Sắp ra</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
