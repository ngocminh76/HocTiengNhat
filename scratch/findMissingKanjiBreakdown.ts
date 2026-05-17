import { NIHONGO_LESSONS } from '../src/data/nihongo-lessons';

let missingCount = 0;
let totalKanjiWords = 0;

console.log("=== MISSING KANJI BREAKDOWN ===");
for (const lesson of NIHONGO_LESSONS) {
  let missingInLesson = [];
  for (const w of lesson.words) {
    // Check if it has Kanji (word contains kanji, roughly word !== reading is a good proxy, or regex)
    const hasKanji = w.word !== w.reading && !/^[ぁ-んァ-ンー]+$/.test(w.word);
    
    if (hasKanji) {
      totalKanjiWords++;
      if (!w.kanjiBreakdown) {
        missingInLesson.push(w.word + ' (' + w.meaning + ')');
        missingCount++;
      }
    }
  }
  if (missingInLesson.length > 0) {
    console.log(`Bài ${lesson.id}: Thiếu ${missingInLesson.length} từ: ` + missingInLesson.join(', '));
  }
}

console.log(`\nTổng kết: ${missingCount}/${totalKanjiWords} từ có Kanji bị thiếu kanjiBreakdown.`);
