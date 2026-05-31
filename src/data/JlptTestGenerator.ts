import { JlptTest, JlptQuestion } from './jlpt-tests';
import { NIHONGO_LESSONS } from './nihongo-lessons';
import { JLPT_SENTENCE_BANK } from './jlpt-sentence-bank';
import { getWordKanjiLevel } from '../utils/kanji';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function generateJlptTest(lessonIds: number[], numQuestions: number = 20): JlptTest {
  const isN5Only = localStorage.getItem('jlpt_focus_mode') !== 'N4+';
  const lessons = NIHONGO_LESSONS.filter(l => lessonIds.includes(l.id));
  
  const words = lessons.flatMap(l => l.words).map(w => {
    if (isN5Only && getWordKanjiLevel(w.word) === 'N4+') {
      return { ...w, word: w.reading };
    }
    return w;
  });
  
  const readings = lessons.flatMap(l => l.readings);

  const questions: JlptQuestion[] = [];
  let idCounter = 1;

  // We want roughly 40% vocab (yomikata/kakikata), 30% bunmyaku (fill-in-the-blank), 30% listening
  // If not enough bunmyaku sentences, fallback to more vocab
  const availableSentences = JLPT_SENTENCE_BANK.filter(s => lessonIds.includes(s.lessonId)).map(s => {
    if (isN5Only && getWordKanjiLevel(s.targetWord) === 'N4+') {
      return { ...s, targetWord: s.targetReading };
    }
    return s;
  });
  const bunmyakuCount = Math.min(Math.floor(numQuestions * 0.3), availableSentences.length);
  
  const listenCount = Math.floor(numQuestions * 0.3);
  const vocabCount = numQuestions - bunmyakuCount - listenCount;

  const selectedWords = shuffle(words).slice(0, vocabCount + listenCount);
  const vocabWords = selectedWords.slice(0, vocabCount);
  const listenWords = selectedWords.slice(vocabCount);

  // 1. Vocab questions (Moji/Goi) & Bunmyaku
  // We will try to use the sentence bank for as many questions as possible.
  const sentenceQuestionsCount = Math.min(vocabCount + bunmyakuCount, availableSentences.length);
  
  const selectedSentences = shuffle(availableSentences).slice(0, sentenceQuestionsCount);
  
  selectedSentences.forEach((s, i) => {
    // Distribute into 3 types: Yomikata, Kakikata, Bunmyaku
    const hasKanji = s.targetWord !== s.targetReading;
    
    // Determine type based on index to ensure a mix
    let type: 'yomikata' | 'kakikata' | 'bunmyaku';
    if (!hasKanji) {
      type = 'bunmyaku'; // If no Kanji, only bunmyaku makes sense
    } else {
      const remainder = i % 3;
      if (remainder === 0) type = 'yomikata';
      else if (remainder === 1) type = 'kakikata';
      else type = 'bunmyaku';
    }

    if (type === 'yomikata') {
      const otherWords = shuffle(words.filter(w => w.reading !== s.targetReading && w.reading !== s.targetWord)).slice(0, 3);
      const options = shuffle([s.targetReading, ...otherWords.map(w => w.reading)]);
      questions.push({
        id: `q_${idCounter++}`,
        type: 'vocab',
        question: `＿＿＿の ことばは ひらがなで どう かきますか。\n(Từ gạch chân đọc là gì?)\n\n${s.text.replace('{word}', `__${s.targetWord}__`)}`,
        options,
        answer: s.targetReading,
        explanation: `「${s.targetWord}」 đọc là ${s.targetReading}\nRomaji: ${s.romaji.replace('{word}', s.targetReading)}`,
        translation: s.translation
      });
    } else if (type === 'kakikata') {
      const otherWords = shuffle(words.filter(w => w.word !== s.targetWord && w.word !== s.targetReading)).slice(0, 3);
      const options = shuffle([s.targetWord, ...otherWords.map(w => w.word !== w.reading ? w.word : w.reading)]);
      questions.push({
        id: `q_${idCounter++}`,
        type: 'vocab',
        question: `＿＿＿の ことばは どう かきますか。\n(Từ gạch chân viết Kanji là gì?)\n\n${s.text.replace('{word}', `__${s.targetReading}__`)}`,
        options,
        answer: s.targetWord,
        explanation: `「${s.targetReading}」 viết là ${s.targetWord}\nRomaji: ${s.romaji.replace('{word}', s.targetReading)}`,
        translation: s.translation
      });
    } else {
      let distractors: string[];
      if (s.bunmyakuDistractors && s.bunmyakuDistractors.length === 3) {
        distractors = s.bunmyakuDistractors;
      } else {
        const otherWords = shuffle(words.filter(w => w.word !== s.targetWord && w.reading !== s.targetWord)).slice(0, 3);
        distractors = otherWords.map(w => w.word !== w.reading ? w.word : w.reading);
      }
      const options = shuffle([s.targetWord, ...distractors]);
      questions.push({
        id: `q_${idCounter++}`,
        type: 'vocab',
        question: `（　　　）に なにを いれますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。\n(Điền từ nào vào chỗ trống cho hợp ngữ cảnh?)\n\n${s.text.replace('{word}', `（　　　）`)}`,
        options,
        answer: s.targetWord,
        explanation: `Câu hoàn chỉnh: ${s.text.replace('{word}', s.targetWord)}\nRomaji: ${s.romaji.replace('{word}', s.targetReading)}`,
        translation: s.translation
      });
    }
  });

  // 2. Listening questions
  listenWords.forEach(w => {
    const otherWords = shuffle(words.filter(ow => ow.id !== w.id)).slice(0, 3);
    const options = shuffle([w.word, ...otherWords.map(ow => ow.word)]);

    questions.push({
      id: `q_${idCounter++}`,
      type: 'listening',
      question: `${w.word}|${w.reading}`, // Encode word & reading for TTS in UI
      options,
      answer: w.word,
      explanation: `Từ bạn vừa nghe là ${w.word} (${w.reading})`,
      translation: `Nghĩa là: ${w.meaning}`
    });
  });



  // If we couldn't fill the gap (e.g. not enough sentences or listening), fill with more vocab
  let remainingNeeded = numQuestions - questions.length;
  if (remainingNeeded > 0) {
    // Ưu tiên dùng từ có Kanji trước
    let pool: typeof words = [];
    
    // Trộn các từ có Kanji
    const shuffledKanji = shuffle(kanjiWords);
    
    // Nếu từ có Kanji ít quá, bổ sung thêm từ không có Kanji
    if (shuffledKanji.length < remainingNeeded) {
      const nonKanjiWords = words.filter(w => w.word === w.reading);
      pool = [...shuffledKanji, ...shuffle(nonKanjiWords)];
    } else {
      pool = [...shuffledKanji];
    }
    
    // Nếu vẫn không đủ (rất hiếm, trừ khi test 1 bài quá ít từ), đành phải lặp lại pool
    while (pool.length < remainingNeeded) {
      pool = [...pool, ...shuffle(words)];
    }

    // Lấy đúng số lượng cần thiết
    const wordsToUse = pool.slice(0, remainingNeeded);

    wordsToUse.forEach(w => {
      const isKanji = w.word !== w.reading;
      
      if (isKanji) {
        const isYomikata = Math.random() > 0.5;

        if (isYomikata) {
          const otherWords = shuffle(words.filter(ow => ow.id !== w.id && ow.reading !== w.reading)).slice(0, 3);
          const options = shuffle([w.reading, ...otherWords.map(ow => ow.reading)]);
          questions.push({
            id: `q_${idCounter++}`,
            type: 'vocab',
            question: `＿＿＿の ことばは ひらがなで どう かきますか。\n(Từ gạch chân đọc là gì?)\n\n__${w.word}__`,
            options,
            answer: w.reading,
            explanation: `「${w.word}」 đọc là ${w.reading} (${w.meaning})`,
            translation: `Từ gạch chân đọc là gì?`
          });
        } else {
          const otherWords = shuffle(kanjiWords.filter(ow => ow.id !== w.id && ow.word !== w.word)).slice(0, 3);
          const options = shuffle([w.word, ...otherWords.map(ow => ow.word)]);
          questions.push({
            id: `q_${idCounter++}`,
            type: 'vocab',
            question: `＿＿＿の ことばは どう かきますか。\n(Từ gạch chân viết Kanji là gì?)\n\n__${w.reading}__`,
            options,
            answer: w.word,
            explanation: `「${w.reading}」 viết là ${w.word} (${w.meaning})`,
            translation: `Từ gạch chân viết Kanji là gì?`
          });
        }
      } else {
        // Fallback for non-kanji words
        const otherWords = shuffle(words.filter(ow => ow.id !== w.id)).slice(0, 3);
        const options = shuffle([w.meaning, ...otherWords.map(ow => ow.meaning)]);
        questions.push({
          id: `q_${idCounter++}`,
          type: 'vocab',
          question: `Ý nghĩa của từ 『${w.word}』 là gì?`,
          options,
          answer: w.meaning,
          explanation: `Từ ${w.word} có nghĩa là: ${w.meaning}.`,
          translation: `Ý nghĩa là gì?`
        });
      }
    });
  }

  return {
    id: `dynamic_test_${Date.now()}`,
    title: `Đề Thi Từ Vựng Moji/Goi N5 (${lessonIds.length} Bài)`,
    description: `Đề thi tạo ngẫu nhiên từ ${lessonIds.length} bài đã chọn, bám sát format JLPT N5 (Yomikata, Kakikata, Bunmyaku và Nghe hiểu).`,
    questions: shuffle(questions)
  };
}
