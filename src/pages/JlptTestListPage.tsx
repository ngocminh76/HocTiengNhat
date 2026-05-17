import { useState, useMemo } from 'react';
import type { JlptTest } from '../data/jlpt-tests';
import { NIHONGO_LESSONS } from '../data/nihongo-lessons';
import { generateJlptTest } from '../data/JlptTestGenerator';

interface Props {
  progress: any; // We'll pass progress from App
  onGenerateTest: (test: JlptTest) => void;
  onHome: () => void;
}

export function JlptTestListPage({ progress, onGenerateTest, onHome }: Props) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  const mastery = progress.nihongoMastery || {};
  const sentenceMastery = progress.sentenceMastery || {};

  const handleToggle = (id: number, isUnlocked: boolean) => {
    if (!isUnlocked) return; // Cannot select if not unlocked
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const getUnlockedLessons = () => {
    return NIHONGO_LESSONS.filter((lesson, idx) => {
      // Mở khóa bài thi nếu bài học đó đã được hoàn thành (isCompleted)
      // Bài 1 luôn mở để dùng thử nghiệm
      return idx === 0 || !!mastery[lesson.id]?.isCompleted;
    });
  };

  const handleSelectAllEligible = () => {
    const eligible = getUnlockedLessons().map(l => l.id);
    if (selectedIds.length === eligible.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(eligible);
    }
  };

  const handleGenerate = () => {
    if (selectedIds.length === 0) return;
    const test = generateJlptTest(selectedIds, 20); // Generate 20 questions
    onGenerateTest(test);
  };

  const unlockedLessons = getUnlockedLessons();
  const eligibleCount = unlockedLessons.length;

  return (
    <div className="screen" style={{ paddingBottom: 100 }}>
      <div className="top-bar">
        <button className="btn btn-ghost" onClick={onHome}>← Màn Hình Chính</button>
      </div>

      <div style={{ maxWidth: 800, margin: '40px auto 0' }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>📝 JLPT N5 Dynamic Test</h1>
        <p style={{ color: 'var(--mute)', marginBottom: 32, lineHeight: 1.6 }}>
          Hệ thống sẽ tạo đề thi ngẫu nhiên dựa trên các bài bạn chọn.<br/>
          <span style={{ color: 'var(--gold)' }}>⚠️ Điều kiện: Bạn phải hoàn thành trọn vẹn bài học tương ứng để mở khóa đề thi!</span>
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>
            Đã chọn {selectedIds.length} / {eligibleCount} bài đủ điều kiện
          </div>
          <button className="btn btn-ghost" onClick={handleSelectAllEligible} style={{ fontSize: 14 }}>
            {selectedIds.length === eligibleCount && eligibleCount > 0 ? 'Bỏ chọn tất cả' : 'Chọn tất cả bài đủ điều kiện'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {NIHONGO_LESSONS.map((lesson, idx) => {
            const isEligible = unlockedLessons.some(l => l.id === lesson.id);
            const isSelected = selectedIds.includes(lesson.id);

            return (
              <div 
                key={lesson.id}
                onClick={() => handleToggle(lesson.id, isEligible)}
                style={{
                  background: isSelected ? 'rgba(255,196,0,0.1)' : 'var(--bg-card)',
                  border: `2px solid ${isSelected ? 'var(--gold)' : (isEligible ? 'var(--border)' : 'rgba(255,255,255,0.05)')}`,
                  borderRadius: 12,
                  padding: 16,
                  cursor: isEligible ? 'pointer' : 'not-allowed',
                  opacity: isEligible ? 1 : 0.5,
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <div style={{
                  width: 20, height: 20, borderRadius: 4, 
                  border: `2px solid ${isSelected ? 'var(--gold)' : 'var(--border)'}`,
                  background: isSelected ? 'var(--gold)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {isSelected && <span style={{ color: '#000', fontSize: 14, fontWeight: 900 }}>✓</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: isSelected ? 'var(--gold)' : 'var(--text)' }}>
                    Bài {lesson.id}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--mute)' }}>
                    {isEligible ? 'Đã mở khóa' : 'Chưa hoàn thành'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <button 
            className="btn btn-primary" 
            style={{ padding: '16px 40px', fontSize: 18, width: '100%', maxWidth: 400 }}
            disabled={selectedIds.length === 0}
            onClick={handleGenerate}
          >
            🚀 Bắt Đầu Tạo Đề Thi
          </button>
        </div>
      </div>
    </div>
  );
}
