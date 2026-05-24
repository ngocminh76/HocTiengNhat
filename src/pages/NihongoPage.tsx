// src/pages/NihongoPage.tsx
// Trang chọn bài học (danh sách bài みんなの日本語)
import React, { useState } from 'react';
import { NIHONGO_LESSONS } from '../data/nihongo-lessons';

interface Props {
  mastery: Record<number, { isCompleted: boolean }>;
  sentenceMastery: Record<string, { listenCount: number; translateCount: number }>;
  checkpointMastery: Record<string, { isPassed: boolean; score: number }>;
  onHome: () => void;
  onSelectLesson: (lessonIds: number[]) => void;
  onShowDokkaiReview: (reviewId: string) => void;
}

export function NihongoPage({
  mastery,
  sentenceMastery,
  checkpointMastery,
  onHome,
  onSelectLesson,
  onShowDokkaiReview,
}: Props) {
  const [selectedForReview, setSelectedForReview] = useState<number[]>([]);

  const handleToggleReview = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSelectedForReview((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev; // Max 3
      return [...prev, id];
    });
  };

  const handleStartReview = () => {
    if (selectedForReview.length > 0) {
      onSelectLesson(selectedForReview);
    }
  };

  const TOTAL_LESSONS = 25;

  return (
    <div className="screen" style={{ padding: '16px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button className="btn-back no-print" onClick={onHome}>
          ← Về trang chủ
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'var(--mute)', fontWeight: 700, letterSpacing: 1 }}>
            みんなの日本語 BOOK 1
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>Từ Vựng Theo Giáo Trình</h2>
        </div>
        <div style={{ fontSize: 13, color: 'var(--mute)' }}>
          {NIHONGO_LESSONS.length}/{TOTAL_LESSONS} bài đã mở khóa
        </div>
      </div>

      {/* Info block */}
      <div
        style={{
          padding: '14px 18px',
          borderRadius: 12,
          background: 'rgba(100,181,246,0.06)',
          border: '1px solid rgba(100,181,246,0.2)',
          marginBottom: 24,
          fontSize: 13,
          color: 'var(--text)',
          lineHeight: 1.5,
        }}
      >
        💡 <strong>Cách học tối ưu:</strong> Hãy thi đậu đề thi thử <strong>Thi Thử N5</strong> ở mỗi bài để mở khóa bài tiếp theo. Bạn có thể chọn tối đa 3 bài đã học bằng checkbox góc trên thẻ để gộp chung ôn tập.
      </div>

      {/* Combined Review Mode Panel */}
      {selectedForReview.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255,196,0,0.12)',
            border: '2px solid var(--gold)',
            borderRadius: 16,
            padding: '16px 20px',
            marginBottom: 24,
            animation: 'fadeIn 0.2s',
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 800 }}>CHẾ ĐỘ TỔNG ÔN LUYỆN 🔥</div>
            <div style={{ fontSize: 12, color: 'var(--mute)' }}>Đã chọn bài: {selectedForReview.join(', ')} để gộp từ vựng</div>
          </div>
          <button
            onClick={handleStartReview}
            style={{
              background: 'var(--gold)',
              border: 'none',
              color: '#000',
              padding: '10px 20px',
              borderRadius: 10,
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: 13,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#ffe082')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Bắt đầu gộp →
          </button>
        </div>
      )}

      {/* 3-Column Responsive Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}
      >
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

          const isPrevCompleted = idx > 0 ? !!mastery[NIHONGO_LESSONS[idx - 1].id]?.isCompleted : true;

          let isUnlocked = isPrevCompleted;
          // TRẠM KIỂM TRA: Khóa bài nếu chưa qua các Trạm Ôn Tập trước đó
          for (let cp = 5; cp < lesson.id; cp += 5) {
            const blockStart = cp - 4;
            const blockEnd = cp;
            for (let i = 1; i <= 5; i++) {
              if (!checkpointMastery[`review_${blockStart}_${blockEnd}_${i}`]?.isPassed) {
                isUnlocked = false;
                break;
              }
            }
          }

          const isCompleted = mastery[lesson.id]?.isCompleted;
          const isSelected = selectedForReview.includes(lesson.id);

          return (
            <React.Fragment key={lesson.id}>
              {/* Card bài học */}
              <div
                onClick={() => {
                  if (isUnlocked) onSelectLesson([lesson.id]);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px',
                  borderRadius: 16,
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  background: isUnlocked ? 'var(--bg-card)' : 'rgba(255,255,255,0.01)',
                  border: isUnlocked
                    ? isCompleted
                      ? '1.5px solid var(--green)'
                      : '1.5px solid var(--border)'
                    : '1.5px dashed var(--border)',
                  boxShadow: isUnlocked ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                  opacity: isUnlocked ? 1 : 0.5,
                  position: 'relative',
                  minHeight: 180,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (isUnlocked) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = isCompleted ? 'var(--green)' : 'var(--gold)';
                    e.currentTarget.style.boxShadow = isCompleted
                      ? '0 6px 20px rgba(6,214,160,0.15)'
                      : '0 6px 20px rgba(255,196,0,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isUnlocked) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = isCompleted ? 'var(--green)' : 'var(--border)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }
                }}
              >
                {/* Checkbox gộp bài ở góc trên */}
                {isUnlocked && (
                  <div
                    onClick={(e) => handleToggleReview(e, lesson.id)}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      border: '2px solid var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isSelected ? 'var(--gold)' : 'transparent',
                      color: '#000',
                      fontSize: 12,
                      fontWeight: 900,
                      cursor: 'pointer',
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 10,
                      boxShadow: isSelected ? '0 0 8px var(--gold)' : 'none',
                    }}
                  >
                    {isSelected && '✓'}
                  </div>
                )}

                {/* Lesson Header */}
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: isUnlocked ? 'var(--gold)' : 'var(--mute)',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      marginBottom: 8,
                    }}
                  >
                    Bài {lesson.id} · 第{lesson.id}課
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      margin: '0 0 6px 0',
                      color: '#fff',
                      paddingRight: 32, // Tránh chồng lấp checkbox
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {lesson.title}
                    {isCompleted && <span style={{ fontSize: 14 }}>🏆</span>}
                  </h3>
                  <div style={{ fontSize: 12, color: 'var(--mute)', fontStyle: 'italic', marginBottom: 12 }}>
                    {lesson.titleVn}
                  </div>
                </div>

                {/* Lesson Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 12 }}>
                  <div style={{ fontSize: 11, color: 'var(--mute)' }}>
                    📚 {lesson.words.length} từ vựng · 📑 {lesson.readings.length} bài đọc
                  </div>
                  {isUnlocked ? (
                    <span style={{ fontSize: 11, fontWeight: 700, color: isCompleted ? 'var(--green)' : 'var(--gold)' }}>
                      {isCompleted ? 'Hoàn thành' : 'Học ngay →'}
                    </span>
                  ) : (
                    <span style={{ fontSize: 11, color: 'var(--mute)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 10 }}>
                      🔒 Khóa
                    </span>
                  )}
                </div>
              </div>

              {/* CHECKPOINT divider full width sau mỗi 5 bài */}
              {lesson.id % 5 === 0 && (
                <div style={{ gridColumn: '1 / -1', margin: '12px 0', display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={() => onShowDokkaiReview(`review_${lesson.id - 4}_${lesson.id}`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '20px 24px',
                      borderRadius: 16,
                      background: 'linear-gradient(135deg, rgba(6, 214, 160, 0.08), rgba(6, 214, 160, 0.16))',
                      border: '2px solid var(--green)',
                      boxShadow: '0 8px 24px rgba(6, 214, 160, 0.12)',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'all 0.2s',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(6, 214, 160, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(6, 214, 160, 0.12)';
                    }}
                  >
                    <div style={{ fontSize: 32 }}>🚩</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 900, fontSize: 16, color: 'var(--green)' }}>
                        TRẠM ÔN TẬP: ĐỌC HIỂU N5 (BÀI {lesson.id - 4} - {lesson.id})
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 4 }}>
                        Tổng hợp từ vựng và ngữ pháp 5 bài. Mô phỏng bài thi Dokkai JLPT N5 để vượt trạm.
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: '#000',
                        background: 'var(--green)',
                        padding: '10px 20px',
                        borderRadius: 10,
                        boxShadow: '0 4px 12px rgba(6, 214, 160, 0.3)',
                      }}
                    >
                      BẮT ĐẦU VƯỢT TRẠM →
                    </div>
                  </button>
                </div>
              )}
            </React.Fragment>
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
            <div
              key={lessonNum}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border)',
                opacity: 0.4,
                minHeight: 180,
              }}
            >
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                  Bài {lessonNum} · 第{lessonNum}課
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 6px 0', color: 'var(--mute)' }}>
                  {info ? info.title : `Bài học ${lessonNum}`}
                </h3>
                <div style={{ fontSize: 12, color: 'var(--mute)' }}>{info ? info.theme : 'Sắp ra mắt...'}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 12 }}>
                <span style={{ fontSize: 11, color: 'var(--mute)' }}>Đang xây dựng nội dung</span>
                <span style={{ fontSize: 11, color: 'var(--mute)', background: 'rgba(255,255,255,0.03)', padding: '2px 8px', borderRadius: 10 }}>
                  🔒 Sắp ra
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
