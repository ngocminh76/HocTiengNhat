// src/types/index.ts

export interface VocabItem {
  word: string;        // 一人
  reading: string;     // ひとり
  romaji: string;      // hitori
  meaning: string;     // một người
}

export interface GrammarTip {
  pattern: string;     // 〜時に (at [time])
  note: string;        // に sau thời gian = vào lúc
}

export interface ExampleSentence {
  jp: string;          // 一人で勉強します。
  romaji: string;      // Hitori de benkyou shimasu.
  vn: string;          // Tôi học một mình.
}

export interface KanjiItem {
  id: number;
  kanji: string;       // 一
  on: string;          // イチ
  on_rom: string;      // ichi
  kun: string;         // ひと・ひとつ
  kun_rom: string;     // hito / hitotsu
  meaning: string;     // Một (1)
  mnemonic: string;    // Gợi nhớ: Một nét ngang...
  imageUrl?: string;   // Ảnh minh họa nghĩa từ web
  vocab: VocabItem[];
  example: ExampleSentence;
  grammar: GrammarTip;
  group: string;       // 数字
}

// Quiz
export type QuizType = 'meaning' | 'on' | 'vocab';

export interface QuizQuestion {
  type: QuizType;
  kanji: KanjiItem;
  options: string[];
  answer: string;
  subtitle: string;
}

// Session log — lưu lịch sử học từng ngày
export interface SessionLog {
  date: string;          // YYYY-MM-DD
  type: 'learn' | 'quiz' | 'exercise';
  xp: number;
  kanjiCount: number;    // Kanji học mới (0 nếu quiz)
  quizScore?: number;    // % đúng (quiz/exercise)
  quizTotal?: number;    // tổng số câu
  durationMin: number;   // phút học
}

// Grammar
export interface GrammarExample {
  jp: string;
  romaji: string;
  vn: string;
  blank: string;        // từ bị ẩn trong bài tập
  blankHint: string;    // romaji của blank để hint
  blankMeaning?: string; // nghĩa riêng của từ vựng trọng tâm
}

export interface GrammarPattern {
  id: number;
  pattern: string;    // 〜てください
  structure: string;  // Động từ (て) + ください
  meaning: string;    // Xin hãy làm ~
  when: string;       // Dùng khi yêu cầu lịch sự
  warning?: string;   // Lưu ý đặc biệt
  group: string;      // Nhóm mẫu câu
  examples: GrammarExample[];
}

// Reading Comprehension
export interface ReadingPassage {
  id: number;
  batchIds: number[];           // bộ Kanji liên quan (vd: [1,2])
  title: string;
  lines: {
    jp: string;
    romaji: string;
    vn: string;
    segments?: { jp: string; vn: string }[];
  }[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
  }[];
  grammarUsed: string[];        // mẫu ngữ pháp xuất hiện
  vocab: {                       // từ vựng trọng tâm trong đoạn
    word: string;                // Kanji/từ gốc
    reading: string;             // cách đọc (Hiragana/Romaji)
    meaning: string;             // nghĩa tiếng Việt
  }[];
}

// App navigation
export type Screen =
  | { name: 'home' }
  | { name: 'learn'; queue: KanjiItem[] }
  | { name: 'learn-complete'; queue: KanjiItem[] }
  | { name: 'quiz'; questions: QuizQuestion[] }
  | { name: 'result'; score: number; total: number; xpGained: number }
  | { name: 'list' }
  | { name: 'guide' }
  | { name: 'plan' }
  | { name: 'exercise'; queue?: KanjiItem[] }
  | { name: 'grammar' }
  | { name: 'reading' }
  | { name: 'particles' }
  | { name: 'katakana' }
  | { name: 'katakana-ex' }
  | { name: 'nihongo' }
  | { name: 'nihongo-lesson'; lessonId?: number; lessonIds?: number[] }
  | { name: 'jlpt-test-list' }
  | { name: 'jlpt-test'; testData: any };


// Progress (saved to localStorage)
export interface Progress {
  xp: number;
  streak: number;
  learnedIds: number[];
  weakIds: number[];
  lastQuizDate: string;
  sessionLogs: SessionLog[];
  deepStageMap: Record<number, number>; // Lưu vết ải hiện tại của cụm Kanji theo id Kanji đầu tiên
  learnedGrammarIds?: number[]; // Tracking ngữ pháp đã học
  nihongoMastery?: Record<number, { isCompleted: boolean }>;
  sentenceMastery?: Record<string, { listenCount: number; translateCount: number }>;
  lessonReviewCounts?: Record<number, number>; // Track how many times each lesson was fully reviewed
}

export interface ParticleQuestion {
  id: number;
  sentence: string; // e.g. "私 [blank] りんごを 食べます。"
  romaji: string;
  vn: string;
  options: string[];
  answer: string;
  explanation: string;
  structure: {
    S?: string;
    V?: string;
    O?: string;
    P?: string; // Place
    T?: string; // Time
    [key: string]: string | undefined; // Other components if any
  };
}
