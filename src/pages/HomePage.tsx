// src/pages/HomePage.tsx
import { useState } from 'react';
import type { Progress } from '../types';
import type { KanjiItem } from '../types';
import { HistoryTracker } from '../components/HistoryTracker';

interface Props {
  progress: Progress;
  onStartLearn: (queue: KanjiItem[]) => void;
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

export function HomePage({ progress, onShowKatakana, onShowNihongo, onShowListening, onShowJlptTestList }: Props) {
  const [jlptFocus, setJlptFocus] = useState<'N5' | 'N4+'>(() => (localStorage.getItem('jlpt_focus_mode') as 'N5' | 'N4+') || 'N5');
  const hour  = new Date().getHours();
  const greeting = hour < 12 ? '☀️ Buổi sáng' : hour < 18 ? '🌤 Buổi chiều' : '🌙 Buổi tối';

  const MAIN_TOOLS = [
    { icon: '📖', label: 'みんなの日本語', sub: '25 bài học cốt lõi (N5)', color: '#80cbc4', onClick: onShowNihongo },
    { icon: '📝', label: 'Luyện Đề JLPT N5', sub: 'Mô phỏng đề thi thật', color: '#ffb74d', onClick: onShowJlptTestList },
    { icon: 'カ', label: 'Bảng Chữ Cái', sub: 'Hiragana & Katakana', color: '#ce93d8', onClick: onShowKatakana },
    { icon: '🎧', label: 'Luyện Nghe / Dịch', sub: 'Tuyển tập 50 hội thoại', color: '#64b5f6', onClick: onShowListening },
  ];

  return (
    <div className="screen" style={{ padding: '16px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'var(--bg-card)', borderRadius: 14, padding: '16px 18px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 12, color: 'var(--mute)', marginBottom: 4 }}>{greeting}</div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>Chinh Phục N5</div>
          </div>
          <NavGroup title="🚀 Chương Trình Học" items={MAIN_TOOLS} />
          
          {/* Settings */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 14, padding: '16px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', marginBottom: 12 }}>⚙️ Cài đặt hiển thị</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Mục tiêu học Kanji</div>
            <div style={{ fontSize: 11, color: 'var(--mute)', marginBottom: 10, lineHeight: 1.4 }}>
              {jlptFocus === 'N5' 
                ? 'Đang bật: Ẩn các Kanji N4+ (chuyển thành Hiragana) để dồn sức ôn thi N5.' 
                : 'Đang bật: Hiển thị toàn bộ Kanji thực tế (cả N5 và N4+) để quen mặt chữ.'}
            </div>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 4 }}>
              <button 
                onClick={() => { setJlptFocus('N5'); localStorage.setItem('jlpt_focus_mode', 'N5'); }} 
                style={{ flex: 1, padding: '6px 0', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 700, background: jlptFocus === 'N5' ? 'var(--gold)' : 'transparent', color: jlptFocus === 'N5' ? '#000' : 'var(--mute)', cursor: 'pointer', transition: 'all 0.2s' }}
              >Ôn N5 Nhanh</button>
              <button 
                onClick={() => { setJlptFocus('N4+'); localStorage.setItem('jlpt_focus_mode', 'N4+'); }} 
                style={{ flex: 1, padding: '6px 0', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 700, background: jlptFocus === 'N4+' ? 'var(--green)' : 'transparent', color: jlptFocus === 'N4+' ? '#000' : 'var(--mute)', cursor: 'pointer', transition: 'all 0.2s' }}
              >Mở rộng N4+</button>
            </div>
          </div>

          <HistoryTracker logs={progress.sessionLogs || []} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(255,196,0,0.12), rgba(100,181,246,0.08))', borderRadius: 16, padding: '28px 32px', border: '1px solid rgba(255,196,0,0.2)' }}>
            <div style={{ fontSize: 13, color: 'var(--mute)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              {greeting} — Bắt đầu ngay!
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 8px', lineHeight: 1.2 }}>
              Minna no Nihongo<br />
              <span style={{ fontSize: 16, fontWeight: 400, color: 'var(--mute)' }}>Tập trung 100% hỏa lực vào 25 bài học cốt lõi</span>
            </h1>
            <button
              className="btn btn-primary"
              style={{ marginTop: 16, padding: '12px 24px', fontSize: 15 }}
              onClick={onShowNihongo}
            >
              📚 Bắt Đầu Học
            </button>
          </div>

          <div style={{ background: 'var(--bg-card)', borderRadius: 14, padding: '18px 20px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
              💡 Lộ trình tối ưu
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, background: 'var(--green)', color: '#000', flexShrink: 0 }}>1</div>
                <span>Thuộc lòng bảng chữ cái Hiragana & Katakana</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, background: 'var(--green)', color: '#000', flexShrink: 0 }}>2</div>
                <span>Cày nát Từ Vựng + Ngữ Pháp qua 25 bài Nihongo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, background: 'var(--green)', color: '#000', flexShrink: 0 }}>3</div>
                <span>Hoàn thành 100% Dịch Câu & Nghe - Gõ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar nav group
function NavGroup({ title, items }: {
  title: string;
  items: { icon: string; label: string; sub: string; color: string; onClick: () => void }[];
}) {
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ padding: '10px 14px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--mute)', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)' }}>
        {title}
      </div>
      {items.map((item, i) => (
        <button
          key={item.label}
          onClick={item.onClick}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px', background: 'transparent', border: 'none',
            borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            cursor: 'pointer', textAlign: 'left', transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <span style={{ fontSize: 18, width: 28, textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: item.color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</div>
            <div style={{ fontSize: 11, color: 'var(--mute)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.sub}</div>
          </div>
          <span style={{ fontSize: 12, color: 'var(--mute)', flexShrink: 0 }}>›</span>
        </button>
      ))}
    </div>
  );
}
