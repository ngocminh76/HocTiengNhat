import { KANJI_N5 } from '../data/kanji-n5';

const N5_KANJI_CHARS = new Set(KANJI_N5.map(k => k.kanji));

export function getWordKanjiLevel(word: string): 'N5' | 'N4+' | 'Kana' {
  const kanjiMatches = word.match(/[\u4e00-\u9faf]/g);
  if (!kanjiMatches || kanjiMatches.length === 0) return 'Kana';
  for (const char of kanjiMatches) {
    if (!N5_KANJI_CHARS.has(char)) return 'N4+';
  }
  return 'N5';
}
