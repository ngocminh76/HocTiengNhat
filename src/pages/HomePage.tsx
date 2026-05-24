// src/pages/HomePage.tsx
import { useState, useMemo } from 'react';
import type { Progress } from '../types';
import { HistoryTracker } from '../components/HistoryTracker';

interface Props {
  progress: Progress;
  onStartLearn: (queue: any[]) => void;
  onStartReview: () => void;
  onShowList: () => void;
  onShowGuide: () => void;
  onShowPlan: () => void;
  onShowGrammar: () => void;
  onShowExercise: () => void;
  onShowReading: () => void;
  onShowParticles: () => void;
  onShowKatakana: () => void;
  onShowNihongo: () => void;
  onShowListening: () => void;
  onShowJlptTestList: () => void;
}

export function HomePage({
  progress,
  onShowKatakana,
  onShowNihongo,
  onShowListening,
  onShowJlptTestList,
  onShowPlan,
  onShowGrammar,
  onShowList,
}: Props) {
  const [jlptFocus, setJlptFocus] = useState<'N5' | 'N4+'>(
    () => (localStorage.getItem('jlpt_focus_mode') as 'N5' | 'N4+') || 'N5'
  );

  const hour = new Date().getHours();
  const greeting = hour < 12 ? '☀️ Buổi sáng tốt lành!' : hour < 18 ? '🌤️ Buổi chiều năng động!' : '🌙 Buổi tối tập trung!';

  // Calculate some progress indicators
  const completedLessonsCount = useMemo(() => {
    return Object.values(progress.nihongoMastery || {}).filter((l) => l.isCompleted).length;
  }, [progress.nihongoMastery]);

  const totalLearnedKanjis = progress.learnedIds.length;

  const coreModules = [
    {
      id: 'nihongo',
      icon: '📖',
      title: 'みんなの日本語',
      desc: '25 bài học Từ vựng, Ngữ pháp và Đọc hiểu theo giáo trình chuẩn quốc tế N5.',
      badge: `${completedLessonsCount}/25 bài đã học`,
      color: '#80cbc4',
      bgGlow: 'rgba(128, 203, 196, 0.15)',
      onClick: onShowNihongo,
      actionText: 'Học bài mới',
    },
    {
      id: 'jlpt',
      icon: '🏆',
      title: 'Thi Thử JLPT N5',
      desc: 'Kho đề thi thử mô phỏng cấu trúc đề thi năng lực Nhật ngữ thực tế.',
      badge: 'Mô phỏng JLPT Mock',
      color: '#ffb74d',
      bgGlow: 'rgba(255, 183, 77, 0.15)',
      onClick: onShowJlptTestList,
      actionText: 'Làm đề thi',
    },
    {
      id: 'katakana',
      icon: '🎴',
      title: 'Bảng Chữ Cái',
      desc: 'Luyện nhớ bảng chữ Hiragana & Katakana kèm mẹo nhớ hình ảnh trực quan.',
      badge: 'Chữ cái & ví dụ',
      color: '#ce93d8',
      bgGlow: 'rgba(206, 147, 216, 0.15)',
      onClick: onShowKatakana,
      actionText: 'Luyện tập ngay',
    },
    {
      id: 'listening',
      icon: '🎧',
      title: 'Luyện Nghe & Dịch',
      desc: 'Tuyển tập 50 bài hội thoại nghe hiểu giao tiếp thực tế kèm dịch nghĩa.',
      badge: '50 hội thoại giao tiếp',
      color: '#64b5f6',
      bgGlow: 'rgba(100, 181, 246, 0.15)',
      onClick: onShowListening,
      actionText: 'Luyện nghe nói',
    },
  ];

  return (
    <div className="screen" style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* 1. Header Banner Chào mừng */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(247, 56, 89, 0.12) 0%, rgba(255, 184, 108, 0.08) 100%)',
          borderRadius: 18,
          padding: '28px 32px',
          border: '1px solid rgba(247, 56, 89, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <div>
          <div style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
            {greeting}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: 0, lineHeight: 1.2 }}>
            Chinh Phục JLPT N5<br />
            <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--text)' }}>
              Đồng hành cùng bạn trên con đường làm chủ tiếng Nhật từ con số 0.
            </span>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: 12, border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--gold)' }}>🔥 {progress.streak}</div>
            <div style={{ fontSize: 10, color: 'var(--mute)', textTransform: 'uppercase' }}>Streak ngày</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: 12, border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--green)' }}>⭐ {progress.xp}</div>
            <div style={{ fontSize: 10, color: 'var(--mute)', textTransform: 'uppercase' }}>Tổng tích lũy</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: 12, border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#64b5f6' }}>{totalLearnedKanjis}</div>
            <div style={{ fontSize: 10, color: 'var(--mute)', textTransform: 'uppercase' }}>Kanji đã học</div>
          </div>
        </div>
      </div>

      {/* 2. Core Curriculum Cards (Chương Trình Học Trung Tâm) */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          🚀 Chương Trình Học N5
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {coreModules.map((module) => (
            <div
              key={module.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 220,
                boxShadow: `0 8px 24px ${module.bgGlow}`,
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = module.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              onClick={module.onClick}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${module.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                    }}
                  >
                    {module.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: module.color,
                      background: `${module.color}10`,
                      padding: '4px 8px',
                      borderRadius: 20,
                      letterSpacing: 0.5,
                    }}
                  >
                    {module.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{module.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.5, margin: 0 }}>{module.desc}</p>
              </div>
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, color: module.color, fontWeight: 700, fontSize: 13 }}>
                {module.actionText} <span style={{ transition: 'transform 0.2s' }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Phân bổ Cột Phụ: Lộ Trình & Thống Kê */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 24, flexWrap: 'wrap', alignItems: 'start' }} className="print-grid">
        {/* CỘT TRÁI: Thống kê & Mục tiêu hiển thị */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Cài đặt Kanji */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 14, padding: 18, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', marginBottom: 12 }}>
              ⚙️ Cài đặt mục tiêu
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Hiển thị chữ Hán Kanji</div>
            <p style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 12, lineHeight: 1.4 }}>
              {jlptFocus === 'N5'
                ? 'Đang ẩn chữ N4+ (chuyển sang dạng Hiragana) để dồn toàn bộ tâm trí ôn thi N5.'
                : 'Đang mở rộng hiển thị toàn bộ chữ Kanji (bao gồm cả N4+) để tăng phản xạ thực tế.'}
            </p>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 4 }}>
              <button
                onClick={() => {
                  setJlptFocus('N5');
                  localStorage.setItem('jlpt_focus_mode', 'N5');
                }}
                style={{
                  flex: 1,
                  padding: '6px 0',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  background: jlptFocus === 'N5' ? 'var(--gold)' : 'transparent',
                  color: jlptFocus === 'N5' ? '#000' : 'var(--mute)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Mục Tiêu N5
              </button>
              <button
                onClick={() => {
                  setJlptFocus('N4+');
                  localStorage.setItem('jlpt_focus_mode', 'N4+');
                }}
                style={{
                  flex: 1,
                  padding: '6px 0',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  background: jlptFocus === 'N4+' ? 'var(--green)' : 'transparent',
                  color: jlptFocus === 'N4+' ? '#000' : 'var(--mute)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Mở Rộng N4+
              </button>
            </div>
          </div>

          <HistoryTracker logs={progress.sessionLogs || []} />
        </div>

        {/* CỘT PHẢI: Lộ trình tối ưu */}
        <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: '24px 28px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
            💡 Lộ trình học tối ưu
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, background: 'rgba(115, 218, 202, 0.15)', color: 'var(--green)', flexShrink: 0 }}>
                1
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Bảng chữ cái (Hiragana & Katakana)</h4>
                <p style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.4, margin: 0 }}>
                  Nền tảng đầu tiên phải vượt qua. Hãy sử dụng các ví dụ sinh động và mẹo liên tưởng hình ảnh để thuộc mặt chữ trong vòng 3 ngày.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, background: 'rgba(255, 184, 108, 0.15)', color: 'var(--gold)', flexShrink: 0 }}>
                2
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Chinh phục 25 bài khóa Minna no Nihongo</h4>
                <p style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.4, margin: 0 }}>
                  Học xen kẽ Từ vựng và Ngữ pháp. Trải nghiệm đầy đủ 10 dạng bài tập (Flash Quiz, Ghép từ, Dịch câu, Nghe gõ) của mỗi bài để nhớ sâu.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, background: 'rgba(100, 181, 246, 0.15)', color: '#64b5f6', flexShrink: 0 }}>
                3
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Tổng ôn tập Kanji & Giải đề JLPT N5</h4>
                <p style={{ fontSize: 12, color: 'var(--mute)', lineHeight: 1.4, margin: 0 }}>
                  Học bộ chữ Kanji N5 cơ bản bằng thơ thơ ghi nhớ, sau đó chuyển sang làm các đề thi thử JLPT Mock Test để làm quen với áp lực thời gian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
