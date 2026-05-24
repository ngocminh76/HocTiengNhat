// src/components/Header.tsx
import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Progress, KanjiItem } from '../types';
import type { LessonWord } from '../data/lessons/types';
import { KANJI_N5 } from '../data/kanji-n5';
import { NIHONGO_LESSONS } from '../data/nihongo-lessons';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  progress: Progress;
  onReset?: () => void;
}

function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase();
}

export function Header({ progress, onReset }: Props) {
  const { xp, streak, learnedIds } = progress;
  const navigate = useNavigate();
  const { speak } = useSpeech();

  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // States for viewing detail popups
  const [selectedWord, setSelectedWord] = useState<{ word: LessonWord; lessonId: number; chapter: string } | null>(null);
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);

  // Click-away listener to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter words and kanji based on query
  const searchResults = useMemo(() => {
    if (!query.trim()) return { words: [], kanjis: [] };
    const q = removeAccents(query.trim().toLowerCase());

    // Filter Kanji N5
    const matchedKanjis = KANJI_N5.filter((k) => {
      return (
        k.kanji.toLowerCase().includes(q) ||
        removeAccents(k.meaning).includes(q) ||
        k.on.toLowerCase().includes(q) ||
        k.kun.toLowerCase().includes(q) ||
        (k.on_rom && k.on_rom.toLowerCase().includes(q)) ||
        (k.kun_rom && k.kun_rom.toLowerCase().includes(q))
      );
    }).slice(0, 5); // Max 5 Kanji results

    // Filter Vocab Nihongo
    const matchedWords: { word: any; lessonId: number; chapter: string }[] = [];
    NIHONGO_LESSONS.forEach((l) => {
      l.words.forEach((w) => {
        const isMatch =
          w.word.toLowerCase().includes(q) ||
          w.reading.toLowerCase().includes(q) ||
          w.romaji.toLowerCase().includes(q) ||
          removeAccents(w.meaning).includes(q);
        if (isMatch) {
          matchedWords.push({ word: w, lessonId: l.id, chapter: l.chapter });
        }
      });
    });
    const limitedWords = matchedWords.slice(0, 15); // Max 15 Vocab results

    return { words: limitedWords, kanjis: matchedKanjis };
  }, [query]);

  const handleKanjiClick = (k: KanjiItem) => {
    setSelectedKanji(k);
    setQuery('');
    setShowDropdown(false);
  };

  const handleWordClick = (item: { word: LessonWord; lessonId: number; chapter: string }) => {
    setSelectedWord(item);
    setQuery('');
    setShowDropdown(false);
  };

  return (
    <header className="hdr no-print">
      <Link to="/" className="hdr-logo-hidden">
        ⛩️ Hành Trình Tiếng Nhật
      </Link>

      {/* Instant Search Bar */}
      <div className="hdr-search-container" ref={searchContainerRef}>
        <span className="hdr-search-icon">🔍</span>
        <input
          type="text"
          className="hdr-search-input"
          placeholder="Tìm nhanh từ vựng, Kanji..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
        />
        {query && (
          <button
            className="hdr-search-clear"
            onClick={() => {
              setQuery('');
              setShowDropdown(false);
            }}
          >
            ✕
          </button>
        )}

        {/* Autocomplete Dropdown */}
        {showDropdown && query.trim() && (
          <div className="hdr-search-dropdown">
            {searchResults.kanjis.length === 0 && searchResults.words.length === 0 ? (
              <div className="search-no-results">Không tìm thấy kết quả nào</div>
            ) : (
              <>
                {/* Kanji Section */}
                {searchResults.kanjis.length > 0 && (
                  <>
                    <div className="search-section-title">⛩️ Chữ Hán N5</div>
                    {searchResults.kanjis.map((k) => (
                      <button
                        key={k.id}
                        onClick={() => handleKanjiClick(k)}
                        className="search-item"
                      >
                        <div
                          className="search-item-title"
                          style={{ fontSize: 22, width: 36, textAlign: 'center' }}
                        >
                          {k.kanji}
                        </div>
                        <div>
                          <div className="search-item-subtitle">
                            {k.on} · {k.kun}
                          </div>
                          <div className="search-item-meaning">{k.meaning}</div>
                        </div>
                        <div
                          className="search-item-meta"
                          style={{ color: 'var(--gold)', background: 'rgba(255,184,108,0.1)' }}
                        >
                          Kanji {k.id}
                        </div>
                      </button>
                    ))}
                  </>
                )}

                {/* Vocabulary Section */}
                {searchResults.words.length > 0 && (
                  <>
                    <div className="search-section-title">📋 Từ Vựng</div>
                    {searchResults.words.map(({ word: w, lessonId, chapter }) => (
                      <div
                        key={w.id}
                        onClick={() => handleWordClick({ word: w, lessonId, chapter })}
                        className="search-item"
                        style={{ cursor: 'pointer' }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span className="search-item-title">{w.word}</span>
                            <span className="search-item-subtitle">({w.reading})</span>
                          </div>
                          <div className="search-item-meaning">{w.meaning}</div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Ngăn sự kiện click cha
                            speak(w.reading, 0.85);
                          }}
                          className="btn-icon"
                          style={{ fontSize: 16, padding: 4, marginRight: 8 }}
                          title="Nghe phát âm"
                        >
                          🔊
                        </button>

                        <div className="search-item-meta">{chapter}</div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="hdr-stats">
        <div className="badge">🔥 {streak} ngày</div>
        <div className="badge">⭐ {xp} XP</div>
        <div className="badge">📖 {learnedIds.length}/110</div>
        {onReset && (
          <button
            onClick={() => {
              if (confirm('Bạn có chắc muốn xóa 100% dữ liệu để cày lại từ đầu?')) onReset();
            }}
            style={{
              marginLeft: 10,
              padding: '4px 8px',
              fontSize: 12,
              background: 'var(--red)',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            Reset Toàn Bộ
          </button>
        )}
      </div>

      {/* Vocabulary Detail Modal */}
      {selectedWord && (
        <div className="search-detail-modal-backdrop" onClick={() => setSelectedWord(null)}>
          <div className="search-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="search-detail-close" onClick={() => setSelectedWord(null)}>✕</button>
            
            <div className="search-detail-header">
              <span className="search-detail-badge badge-chapter">{selectedWord.chapter}</span>
              {selectedWord.word.type && (
                <span className="search-detail-badge badge-type">{selectedWord.word.type}</span>
              )}
            </div>

            <div className="search-detail-body">
              <h1 className="search-detail-word">{selectedWord.word.word}</h1>
              <div className="search-detail-reading">
                <span className="reading-text">{selectedWord.word.reading}</span>
                <span className="dot">·</span>
                <span className="romaji-text">{selectedWord.word.romaji}</span>
                <button
                  onClick={() => speak(selectedWord.word.reading, 0.85)}
                  className="search-detail-audio-btn"
                  title="Nghe phát âm"
                >
                  🔊 Phát âm
                </button>
              </div>

              <div className="search-detail-divider"></div>

              <div className="search-detail-meaning-section">
                <span className="meaning-label">Nghĩa tiếng Việt:</span>
                <div className="meaning-text">{selectedWord.word.meaning}</div>
              </div>

              {selectedWord.word.hint && (
                <div className="search-detail-hint">
                  <strong>💡 Mẹo nhớ:</strong> {selectedWord.word.hint}
                </div>
              )}

              {selectedWord.word.kanjiBreakdown && (
                <div className="search-detail-breakdown">
                  <h3>⛩️ Chi Tiết Chữ Hán (Kanji Breakdown)</h3>
                  <div className="breakdown-grid">
                    <div className="breakdown-item">
                      <strong>Hán Việt:</strong> <span className="highlight-gold">{selectedWord.word.kanjiBreakdown.hanviet}</span>
                    </div>
                    <div className="breakdown-item">
                      <strong>Cấu thành:</strong> <span className="components-text">{selectedWord.word.kanjiBreakdown.components}</span>
                    </div>
                    <div className="breakdown-item">
                      <strong>Câu chuyện:</strong>
                      <p className="story-text">{selectedWord.word.kanjiBreakdown.story}</p>
                    </div>
                    {selectedWord.word.kanjiBreakdown.examples && (
                      <div className="breakdown-item">
                        <strong>Ví dụ khác:</strong> <span className="examples-text">{selectedWord.word.kanjiBreakdown.examples}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="search-detail-footer">
              <a
                href={`https://jisho.org/search/${encodeURIComponent(selectedWord.word.word)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-search-action btn-jisho"
              >
                ✍️ Nét viết (Jisho)
              </a>
              <button
                onClick={() => {
                  navigate(`/nihongo/lessons/${selectedWord.lessonId}`);
                  setSelectedWord(null);
                }}
                className="btn-search-action btn-go-lesson"
              >
                📖 Đến bài học tương ứng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Kanji Detail Modal */}
      {selectedKanji && (
        <div className="search-detail-modal-backdrop" onClick={() => setSelectedKanji(null)}>
          <div className="search-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="search-detail-close" onClick={() => setSelectedKanji(null)}>✕</button>

            <div className="search-detail-header">
              <span className="search-detail-badge badge-chapter">Kanji #{selectedKanji.id}</span>
              {selectedKanji.group && (
                <span className="search-detail-badge badge-type">{selectedKanji.group}</span>
              )}
            </div>

            <div className="search-detail-body">
              <h1 className="search-detail-kanji">{selectedKanji.kanji}</h1>
              <div className="search-detail-meaning-kanji">{selectedKanji.meaning}</div>

              <div className="kanji-readings-grid">
                <div className="reading-block">
                  <span className="reading-label">Âm ON (音読み)</span>
                  <span className="reading-value">{selectedKanji.on}</span>
                  <span className="reading-romaji">({selectedKanji.on_rom})</span>
                </div>
                <div className="reading-block">
                  <span className="reading-label">Âm KUN (訓読み)</span>
                  <span className="reading-value">{selectedKanji.kun}</span>
                  <span className="reading-romaji">({selectedKanji.kun_rom})</span>
                </div>
              </div>

              <div className="search-detail-divider"></div>

              {selectedKanji.mnemonic && (
                <div className="search-detail-hint">
                  <strong>💡 Gợi nhớ:</strong> {selectedKanji.mnemonic}
                </div>
              )}

              {selectedKanji.example && (
                <div className="search-detail-example">
                  <h3>💡 Ví dụ mẫu (Example)</h3>
                  <div className="example-box">
                    <div className="example-jp">{selectedKanji.example.jp}</div>
                    <div className="example-romaji">{selectedKanji.example.romaji}</div>
                    <div className="example-vn">{selectedKanji.example.vn}</div>
                  </div>
                </div>
              )}

              {selectedKanji.vocab && selectedKanji.vocab.length > 0 && (
                <div className="search-detail-vocab-list">
                  <h3>📋 Từ vựng liên quan</h3>
                  <div className="vocab-list-grid">
                    {selectedKanji.vocab.map((v, index) => (
                      <div key={index} className="vocab-list-item">
                        <div className="vocab-item-jp-row">
                          <strong className="vocab-word">{v.word}</strong>
                          <span className="vocab-reading">({v.reading})</span>
                          <button
                            onClick={() => speak(v.reading, 0.85)}
                            className="btn-icon-mini"
                            title="Nghe phát âm"
                          >
                            🔊
                          </button>
                        </div>
                        <div className="vocab-meaning">{v.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="search-detail-footer">
              <a
                href={`https://jisho.org/search/${encodeURIComponent(selectedKanji.kanji)}%20%23kanji`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-search-action btn-jisho"
                style={{ width: '100%' }}
              >
                ✍️ Xem nét viết trên Jisho.org
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
