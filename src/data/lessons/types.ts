export interface LessonWord {
  id: string;
  word: string;     // Chữ Nhật (kanji/kana)
  reading: string;  // Hiragana
  romaji: string;   // Romaji
  meaning: string;  // Nghĩa tiếng Việt
  type: string;     // Loại từ
  hint?: string;    // Mẹo nhớ (Mnemonic)
  kanjiBreakdown?: {
    hanviet: string;
    components: string;
    story: string;
    examples: string;
  };
}

export interface ReadingQuestion {
  question: string;  // Câu hỏi (tiếng Việt)
  options: string[];
  answer: string;
}

export interface LessonReading {
  title: string;
  titleVn: string;
  lines: { kanji?: string; jp: string; romaji: string; vn: string }[];
  questions: ReadingQuestion[];
}

export interface NihongoLesson {
  id: number;
  chapter: string;
  title: string;
  titleVn: string;
  theme: string;
  words: LessonWord[];
  readings: LessonReading[];
  poem?: any;
}
