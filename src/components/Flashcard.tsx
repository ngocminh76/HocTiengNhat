// src/components/Flashcard.tsx
import { useState } from 'react';
import type { KanjiItem } from '../types';
import { useSpeech } from '../hooks/useSpeech';
import { KANJI_POEMS } from '../data/kanji-poems';

interface Props {
  kanji: KanjiItem;
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function Flashcard({ kanji, index, total, onNext, onPrev: _onPrev, onHome, isLast }: Props) {
  const [flipped, setFlipped] = useState(false);
  const { speak, supported } = useSpeech();

  const handleNext = () => { setFlipped(false); setTimeout(onNext, 50); };

  const dots = Array.from({ length: total }, (_, i) => (
    <div key={i} className={`dot ${i < index ? 'done' : i === index ? 'active' : ''}`} />
  ));

  return (
    <>
      <div className="learn-hdr">
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <h2>📚 Học Bài Mới · {index + 1}/{total}</h2>
        <div className="dots">{dots}</div>
      </div>

      {/* Flashcard */}
      <div className="fc-scene">
        <div className={`fc ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((f) => !f)}>

          {/* FRONT — chỉ hiện Kanji */}
          <div className="fc-face fc-front">
            <span className="kanji-big">{kanji.kanji}</span>
            <div className="fc-hint">👆 Nhấn để xem nghĩa và cách đọc</div>
          </div>

          {/* BACK — On, Kun, Nghĩa, Từ vựng, Câu ví dụ, Ngữ pháp */}
          <div className="fc-face fc-back">
            {/* Âm On / Kun */}
            <div className="read-row">
              <div className="read-block">
                <div className="lbl">Âm On (音読み)</div>
                <div className="val on">{kanji.on}</div>
                <div className="rom">{kanji.on_rom}</div>
              </div>
              <div className="read-block">
                <div className="lbl">Âm Kun (訓読み)</div>
                <div className="val kun">{kanji.kun}</div>
                <div className="rom">{kanji.kun_rom}</div>
              </div>
            </div>

            {/* Nghĩa + nút nghe + link Jisho */}
            <div className="audio-row">
              <div className="meaning-big">「{kanji.meaning}」</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} onClick={e => e.stopPropagation()}>
                {supported && (
                  <button
                    className="btn-icon"
                    title="Nghe phát âm"
                    onClick={(e) => { e.stopPropagation(); speak(kanji.kanji); }}
                  >🔊</button>
                )}
                <a
                  href={`https://jisho.org/search/${encodeURIComponent(kanji.kanji)}%20%23kanji`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Xem nét viết trên Jisho.org"
                  onClick={e => e.stopPropagation()}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    padding: '4px 10px', borderRadius: 8, fontSize: 13, fontWeight: 700,
                    background: 'rgba(100,181,246,0.15)', border: '1px solid rgba(100,181,246,0.4)',
                    color: '#64b5f6', textDecoration: 'none', transition: 'background 0.2s',
                  }}
                >
                  ✍️ Nét viết
                </a>
              </div>
            </div>

            {/* Ảnh minh họa */}
            {kanji.imageUrl && (
              <div className="fc-image-wrap" onClick={e => e.stopPropagation()}>
                <img
                  src={kanji.imageUrl}
                  alt={kanji.meaning}
                  className="fc-image"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            )}

            {/* Gợi nhớ / Thơ */}
            {KANJI_POEMS[kanji.id] ? (
              <div style={{
                background: 'linear-gradient(135deg, rgba(167,139,250,0.1), rgba(99,102,241,0.05))',
                border: '1px solid rgba(167,139,250,0.25)',
                padding: '12px 16px',
                borderRadius: 12,
                marginTop: 10,
                textAlign: 'left'
              }} onClick={e => e.stopPropagation()}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', marginBottom: 8 }}>
                  🎵 Thơ Ghi Nhớ
                </div>
                {KANJI_POEMS[kanji.id].lines.map((ln, i) => {
                  const parts = ln.split(/\*\*(.*?)\*\*/g);
                  return (
                    <div key={i} style={{ marginBottom: 4, lineHeight: 1.6, fontSize: 14 }}>
                      {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: 'var(--gold)' }}>{p}</strong> : p)}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mnemonic">💡 {kanji.mnemonic}</div>
            )}

            {/* Từ vựng */}
            <div className="vocab-list">
              {kanji.vocab.map((v) => (
                <div key={v.word} className="vocab-row">
                  <span className="vw">{v.word}</span>
                  <span className="vr">{v.reading} ({v.romaji})</span>
                  <span className="vm">= {v.meaning}</span>
                  {supported && (
                    <button
                      className="btn-icon"
                      style={{ fontSize: 14 }}
                      title={`Nghe: ${v.word}`}
                      onClick={(e) => { e.stopPropagation(); speak(v.word, 0.8); }}
                    >🔊</button>
                  )}
                </div>
              ))}
            </div>

            {/* Câu ví dụ */}
            <div className="ex-box">
              <div className="ex-jp">
                {kanji.example.jp}
                {supported && (
                  <button
                    className="btn-icon"
                    style={{ fontSize: 14, marginLeft: 6 }}
                    onClick={(e) => { e.stopPropagation(); speak(kanji.example.jp, 0.75); }}
                  >🔊</button>
                )}
              </div>
              <div className="ex-rom">{kanji.example.romaji}</div>
              <div className="ex-vn">→ {kanji.example.vn}</div>
            </div>

            {/* Ngữ pháp */}
            <div className="grammar-box">
              <div className="pat">📌 {kanji.grammar.pattern}</div>
              <div className="note">{kanji.grammar.note}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="learn-nav">
        <button className="btn btn-ghost" onClick={() => setFlipped((f) => !f)}>🔄 Lật thẻ</button>
        <button className="btn btn-primary" onClick={handleNext}>
          {isLast ? '✅ Xong — Vào Quiz!' : 'Tiếp →'}
        </button>
      </div>
    </>
  );
}
