import React from 'react';
import pitchAccentsData from '../data/pitch-accents.json';

const pitchMap = pitchAccentsData as Record<string, number[]>;

interface Props {
  word: string;
  reading: string;
  className?: string;
  style?: React.CSSProperties;
}

export function splitIntoMoras(reading: string): string[] {
  const moras: string[] = [];
  const combineChars = new Set([
    'ゃ', 'ゅ', 'ょ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ',
    'ャ', 'ュ', 'ョ', 'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ヮ', 'ゎ'
  ]);

  for (let i = 0; i < reading.length; i++) {
    const char = reading[i];
    if (i > 0 && combineChars.has(char)) {
      moras[moras.length - 1] += char;
    } else {
      moras.push(char);
    }
  }
  return moras;
}

function getPitchHeights(accent: number, moraCount: number): ('H' | 'L')[] {
  const heights: ('H' | 'L')[] = [];
  if (moraCount === 0) return [];

  if (accent === 0) {
    heights.push('L');
    for (let i = 1; i < moraCount; i++) {
      heights.push('H');
    }
    return heights;
  }

  if (accent === 1) {
    heights.push('H');
    for (let i = 1; i < moraCount; i++) {
      heights.push('L');
    }
    return heights;
  }

  // Accent > 1
  heights.push('L');
  for (let i = 1; i < moraCount; i++) {
    if (i < accent) {
      heights.push('H');
    } else {
      heights.push('L');
    }
  }
  return heights;
}

export function PitchAccent({ word, reading, className = '', style }: Props) {
  // Strip trailing question marks or punctuation for database lookup
  const cleanWord = word.replace(/[？\?！!]/g, '').trim();
  const cleanReading = reading.replace(/[？\?！!]/g, '').trim();
  const lookupKey = `${cleanWord}_${cleanReading}`;

  const accents = pitchMap[lookupKey] || [];

  if (accents.length === 0) {
    // Fallback: just display reading as raw text if no accent data is found
    return <span className={className} style={style}>{reading}</span>;
  }

  const moras = splitIntoMoras(cleanReading);

  return (
    <div 
      className={`pitch-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        gap: '4px',
        alignItems: 'flex-start',
        verticalAlign: 'middle',
        ...style 
      }}
    >
      {accents.map((accentNum, aIdx) => {
        const heights = getPitchHeights(accentNum, moras.length);

        return (
          <div 
            key={aIdx} 
            className="pitch-word" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              lineHeight: 1.2 
            }}
          >
            {moras.map((mora, mIdx) => {
              const height = heights[mIdx];
              const prevHeight = mIdx > 0 ? heights[mIdx - 1] : null;
              const nextHeight = mIdx < moras.length - 1 ? heights[mIdx + 1] : null;

              const isHigh = height === 'H';
              const showLeftBorder = mIdx > 0 && height !== prevHeight;

              return (
                <span 
                  key={mIdx} 
                  className="pitch-mora"
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    padding: '2px 2px 3px 2px',
                    fontSize: '0.9em',
                    userSelect: 'none'
                  }}
                >
                  {/* Top Line */}
                  {isHigh && (
                    <span 
                      className="pitch-line-top"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        background: 'var(--red, #f73859)'
                      }}
                    />
                  )}

                  {/* Bottom Line */}
                  {!isHigh && (
                    <span 
                      className="pitch-line-bottom"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        background: 'var(--red, #f73859)'
                      }}
                    />
                  )}

                  {/* Vertical Line */}
                  {showLeftBorder && (
                    <span 
                      className="pitch-line-vertical"
                      style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: '1.5px',
                        background: 'var(--red, #f73859)'
                      }}
                    />
                  )}
                  {mora}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
