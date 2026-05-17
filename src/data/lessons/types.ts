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

export interface GrammarExample {
  jp: string;
  romaji: string;
  vn: string;
}

export interface GrammarPoint {
  title: string;       // Ví dụ: N1 は N2 です
  structure: string;   // Công thức
  usage: string;       // Cách dùng / Giải thích
  examples: GrammarExample[];
}

export interface GrammarExercise {
  question: string;    // Câu hỏi (có chứa chuỗi '[blank]')
  options: string[];   // Các đáp án (ví dụ: ["は", "が", "を", "に"])
  answer: string;      // Đáp án đúng
  vn: string;          // Dịch nghĩa câu
  explanation?: string;// Giải thích
}

export interface NihongoLesson {
  id: number;
  chapter: string;
  title: string;
  titleVn: string;
  theme: string;
  words: LessonWord[];
  readings: LessonReading[];
  grammar?: GrammarPoint[];
  grammarExercises?: GrammarExercise[];
  poem?: any;
}
