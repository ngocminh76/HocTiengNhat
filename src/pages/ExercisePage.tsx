// src/pages/ExercisePage.tsx
// Router cho 3 dạng luyện tập: điền romaji, điền câu, ghép đôi
import { useState, useMemo } from 'react';
import type { KanjiItem, Progress } from '../types';
import { FillRomajiExercise } from './exercises/FillRomajiExercise';
import { FillSentenceExercise } from './exercises/FillSentenceExercise';
import { VocabMatchExercise } from './exercises/VocabMatchExercise';
import { TranslationExercise } from './exercises/TranslationExercise';
import { ListeningExercise } from './exercises/ListeningExercise';
import { GrammarListeningExercise } from './exercises/GrammarListeningExercise';
import { GRAMMAR_N5 } from '../data/grammar-n5';

type ExMode = 'pick' | 'romaji' | 'sentence' | 'match' | 'translation' | 'listening' | 'grammar-listening' | 'done';

interface Props {
  pool: KanjiItem[];        // Kanji đã học
  progress: Progress;
  onHome: () => void;
  onLogSession: (score: number, total: number) => void;
  onUpdateStage: (stage: number) => void;
  isDeepPractice?: boolean;
  onStartDeepQuiz?: (queue: KanjiItem[]) => void;
}

const MODES = [
  {
    id: 'romaji' as const,
    icon: '✍️',
    title: 'Điền Romaji',
    desc: 'Nhìn Kanji → nhập cách đọc On bằng romaji',
    color: 'var(--blue)',
  },
  {
    id: 'sentence' as const,
    icon: '📝',
    title: 'Điền vào Câu',
    desc: 'Câu ví dụ bị ẩn từ đã học — tự điền lại',
    color: 'var(--gold)',
  },
  {
    id: 'match' as const,
    icon: '🔗',
    title: 'Ghép Đôi',
    desc: 'Nối từ vựng tiếng Nhật với nghĩa tiếng Việt',
    color: 'var(--green)',
  },
  {
    id: 'translation' as const,
    icon: '🗣️',
    title: 'Dịch Câu',
    desc: 'Dịch câu qua lại Nhật-Việt (Gõ Romaji hoặc Tiếng Việt)',
    color: 'var(--purple)',
  },
  {
    id: 'listening' as const,
    icon: '🎧',
    title: 'Luyện Nghe (Chính tả)',
    desc: 'Nghe máy đọc tự động và gõ lại đúng Romaji (Shadowing)',
    color: 'var(--red)',
  },
  {
    id: 'grammar-listening' as const,
    icon: '🗣',
    title: 'Nghe Ngữ Pháp',
    desc: 'Luyện nghe câu thực tế để phản xạ',
    color: 'var(--gold)',
  },
];

export function ExercisePage({ pool, progress, onHome, onLogSession, onUpdateStage, onStartDeepQuiz }: Props) {
  // Deep Practice Flow variables
  const DEEP_MODES: ExMode[] = ['romaji', 'sentence', 'match', 'translation', 'listening', 'grammar-listening'];
  
  const [deepStage, setDeepStage] = useState(() => {
    return progress.deepStageMap?.[pool[0]?.id] || 0;
  });

  const [mode, setMode]           = useState<ExMode>('pick');
  const [result, setResult]       = useState<{ score: number; total: number } | null>(null);

  const grammarExamples = useMemo(() => {
    if (!pool || pool.length === 0) return [];
    
    // Tìm ID Kanji NHỎ NHẤT trong đợt học hiện tại (chống lỗi khi pool bị shuffle lộn xộn)
    const minId = Math.min(...pool.map(k => k.id));
    const batchIndex = Math.floor((minId - 1) / 5);
    
    // Mỗi batch (1 đợt học Kanji) học 1 mẫu ngữ pháp -> 5 ví dụ
    const startIndex = batchIndex;
    const grammars = [
      GRAMMAR_N5[startIndex % GRAMMAR_N5.length]
    ].filter(Boolean);

    return grammars.flatMap(g => g.examples).sort(() => Math.random() - 0.5);
  }, [pool]);

  const handleFinish = (score: number, total: number) => {
    onLogSession(score, total);
    
    // Tìm index của mode hiện tại để biết đang làm ải số mấy
    const currentModeIdx = DEEP_MODES.indexOf(mode);

    // Chỉ thăng cấp deepStage nếu người dùng MỚI vượt qua ải CAO NHẤT hiện tại của họ
    if (currentModeIdx === deepStage && deepStage < DEEP_MODES.length) {
      const nextStage = deepStage + 1;
      setDeepStage(nextStage);
      onUpdateStage(nextStage);
    }
    
    setMode('pick');
  };

  const startMode = (m: ExMode) => {
    setMode(m);
    setResult(null);
  };

  if (pool.length === 0) {
    return (
      <div className="screen" style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{ fontSize: 56 }}>📚</div>
        <h2 style={{ marginTop: 12 }}>Chưa học Kanji nào!</h2>
        <p style={{ color: 'var(--mute)', margin: '8px 0 24px' }}>
          Hãy học ít nhất 1 Kanji trước khi luyện tập.
        </p>
        <button className="btn btn-primary" onClick={onHome}>Về Trang Chủ</button>
      </div>
    );
  }

  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <h2 style={{ flex: 1, fontSize: 18, fontWeight: 700 }}>
          🔥 Luyện Tập Sâu ({Math.min(6, deepStage + 1)}/6)
        </h2>
      </div>

      {mode !== 'done' && (
        <div style={{ marginBottom: 24, fontSize: 13, color: 'var(--mute)', textAlign: 'center' }}>
          Bạn cần hoàn thành toàn bộ 6 bài tập trước khi làm Bài Kiểm Tra
        </div>
      )}

      {/* MODE PICKER */}
      {mode === 'pick' && (
        <>
          <p style={{ color: 'var(--mute)', fontSize: 13, marginBottom: 20 }}>
            Vượt ải để nhận các ấn vàng. Phá đảo đủ 6 ải để hoàn thành phiên huấn luyện. {pool.length} chữ Kanji.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {DEEP_MODES.map((modeId, idx) => {
              const m = MODES.find(x => x.id === modeId)!;
              const isCompleted = idx < deepStage;
              const isUnlocked = idx === deepStage;
              const isLocked = idx > deepStage;

              return (
                <button
                  key={m.id}
                  className="ex-mode-card"
                  style={{ 
                    '--mode-color': isLocked ? '#666' : isCompleted ? '#4CAF50' : m.color, 
                    opacity: isLocked ? 0.5 : 1,
                    background: isCompleted ? 'rgba(76, 175, 80, 0.05)' : 'var(--bg-card)',
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    border: isUnlocked ? `2px solid ${m.color}` : '1px solid var(--border)',
                    boxShadow: isUnlocked ? `0 0 12px ${m.color}40` : 'none',
                    position: 'relative'
                  } as React.CSSProperties}
                  onClick={() => { if(!isLocked) startMode(m.id) }}
                  disabled={isLocked}
                >
                  <span className="ex-mode-icon" style={{ filter: isLocked ? 'grayscale(1)' : 'none' }}>
                    {isCompleted ? '✅' : isLocked ? '🔒' : m.icon}
                  </span>
                  <div className="ex-mode-info" style={{ opacity: isLocked ? 0.7 : 1 }}>
                    <div className="ex-mode-title" style={{ textDecoration: isCompleted ? 'line-through' : 'none', color: isLocked ? 'var(--mute)' : '#ffffff' }}>
                      Ải {idx + 1}: {m.title}
                    </div>
                    <div className="ex-mode-desc">{m.desc}</div>
                  </div>
                  <span style={{ display: 'inline-block' }}>
                    {isCompleted ? (
                       <span style={{ fontSize: 12, color: 'var(--green)', border: '1px solid var(--green)', padding: '6px 12px', borderRadius: 4, fontWeight: 'bold' }}>🔄 Làm Lại</span>
                    ) : isUnlocked ? (
                       <span style={{ fontSize: 13, color: 'var(--bg)', background: 'var(--gold)', padding: '6px 16px', borderRadius: 4, fontWeight: 'bold' }}>Vào Thi 👉</span>
                    ) : null}
                  </span>
                </button>
              );
            })}
            
            {/* LÚC HOÀN THÀNH TOÀN BỘ 6 ẢI TRONG ROADMAP */}
            {deepStage === DEEP_MODES.length && (
              <div style={{ marginTop: 24, textAlign: 'center', padding: 20, background: 'rgba(76, 175, 80, 0.1)', borderRadius: 12, border: '2px solid #4CAF50' }}>
                <h3 style={{ color: '#4CAF50', marginBottom: 12, fontSize: 20 }}>🎉 Chúc mừng! Đã dọn sạch 6 ải luyện tập!</h3>
                <p style={{ color: 'var(--mute)', marginBottom: 20 }}>
                  Bạn đã ghi nhớ cực sâu bộ chữ Kanji này ở mọi góc độ chữ Hán, Phát Âm, Chính tả và Dịch.
                </p>
                <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: 16, width: '100%' }} onClick={() => onStartDeepQuiz?.(pool)}>
                  📝 KHAI MỞ BÀI TEST TỔNG (20 CÂU) DUYỆT ĐIỂM
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* EXERCISES */}
      {mode === 'romaji' && <FillRomajiExercise pool={pool} onFinish={handleFinish} />}
      {mode === 'sentence' && <FillSentenceExercise pool={pool} learnedIds={progress.learnedIds} onFinish={handleFinish} />}
      {mode === 'match' && <VocabMatchExercise pool={pool} onFinish={handleFinish} />}
      {mode === 'translation' && <TranslationExercise pool={pool} onFinish={handleFinish} />}
      {mode === 'listening' && <ListeningExercise pool={pool} onFinish={handleFinish} />}
      {mode === 'grammar-listening' && <GrammarListeningExercise examples={grammarExamples} onFinish={() => handleFinish(10, 10)} />}

      {/* DONE SCREEN */}
      {mode === 'done' && result && (
        <div style={{ textAlign: 'center', paddingTop: 24 }}>
          <div style={{ fontSize: 64 }}>
            {result.score / result.total >= 0.8 ? '🏆' : result.score / result.total >= 0.5 ? '👍' : '📖'}
          </div>
          <h2 style={{ marginTop: 12, fontSize: 22 }}>
            {result.score}/{result.total} câu đúng
          </h2>
          <p style={{ color: 'var(--mute)', margin: '6px 0 28px' }}>
            {result.score / result.total >= 0.8
              ? 'Xuất sắc! Bạn nhớ rất tốt 🔥'
              : result.score / result.total >= 0.5
              ? 'Khá! Tiếp tục ôn thêm nhé 💪'
              : 'Cần ôn thêm — thử lại sau khi xem lại Flashcard 📚'}
          </p>
          <div className="result-stats" style={{ justifyContent: 'center', marginBottom: 24 }}>
            <div className="r-stat">
              <div className="num">{result.score}</div>
              <div className="lbl">Câu đúng</div>
            </div>
            <div className="r-stat">
              <div className="num">{Math.round((result.score / result.total) * 100)}%</div>
              <div className="lbl">Độ chính xác</div>
            </div>
            <div className="r-stat">
              <div className="num">+{result.score * 8} XP</div>
              <div className="lbl">Kiếm được</div>
            </div>
          </div>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => onStartDeepQuiz?.(pool)}>
              📝 Bắt đầu Làm Bài Test (Để được đi tiếp)
            </button>
            <button className="btn btn-ghost" onClick={onHome}>Về Trang Chủ</button>
          </div>
        </div>
      )}
    </div>
  );
}
