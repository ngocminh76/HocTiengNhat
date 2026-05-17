import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { NIHONGO_LESSONS } from '../src/data/nihongo-lessons.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.join(__dirname, '../src/data/lessons');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Create types.ts
const typesContent = `export interface LessonWord {
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
`;
fs.writeFileSync(path.join(targetDir, 'types.ts'), typesContent, 'utf8');

// 3. Write each lesson to a file
let imports = [];
let exportsArr = [];

for (const lesson of NIHONGO_LESSONS) {
  const filename = `lesson${lesson.id}.ts`;
  const filepath = path.join(targetDir, filename);
  const content = `import { NihongoLesson } from './types';

const lesson: NihongoLesson = ${JSON.stringify(lesson, null, 2)};

export default lesson;
`;
  fs.writeFileSync(filepath, content, 'utf8');
  
  imports.push(`import lesson${lesson.id} from './lesson${lesson.id}';`);
  exportsArr.push(`lesson${lesson.id}`);
}

// 4. Update the main nihongo-lessons.ts
const srcFile = path.join(__dirname, '../src/data/nihongo-lessons.ts');
const newMainContent = `export * from './lessons/types';
import { NihongoLesson } from './lessons/types';

${imports.join('\n')}

export const NIHONGO_LESSONS: NihongoLesson[] = [
  ${exportsArr.join(',\n  ')}
];
`;
fs.writeFileSync(srcFile, newMainContent, 'utf8');

console.log('Successfully split ' + NIHONGO_LESSONS.length + ' lessons into separate files!');
