const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/data/nihongo-lessons.ts');
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

// 2. Parse the existing TS file to extract lessons
// It's a bit hard to parse nested brackets with Regex.
// So let's compile it to JS and require it.
const { execSync } = require('child_process');

// Make a temporary JS file
const tempJs = path.join(__dirname, 'temp-lessons.js');
let code = fs.readFileSync(srcFile, 'utf8');

// Replace export interfaces and export const
code = code.replace(/export interface[\s\S]+?export const NIHONGO_LESSONS/g, 'const NIHONGO_LESSONS');
code = code + '\\nmodule.exports = NIHONGO_LESSONS;';
code = code.replace(/export interface [^{]+\\{[^}]+\\}/g, ''); // just in case

// Since there are multiple interfaces, we'll just strip all exports.
let jsCode = fs.readFileSync(srcFile, 'utf8');
jsCode = jsCode.replace(/export\s+interface\s+\w+\s*\{[\s\S]*?\n\}/g, ''); // Doesn't handle nested braces well.
jsCode = jsCode.replace(/export\s+const\s+NIHONGO_LESSONS\s*:\s*NihongoLesson\[\]\s*=\s*/, 'module.exports = ');
// Remove TypeScript specific type annotations if they break Node.
// Actually, it's mostly plain JS objects.
// Let's use standard ts-node if available, or just tsc.
try {
  fs.writeFileSync(path.join(__dirname, 'temp.ts'), jsCode, 'utf8');
  execSync('npx tsc scratch/temp.ts --target ES2015 --module CommonJS');
  const lessons = require('./temp.js');
  
  // 3. Write each lesson to a file
  let imports = [];
  let exportsArr = [];
  
  for (const lesson of lessons) {
    const filename = 'lesson' + lesson.id + '.ts';
    const filepath = path.join(targetDir, filename);
    const content = "import { NihongoLesson } from './types';\\n\\nconst lesson: NihongoLesson = " + JSON.stringify(lesson, null, 2) + ";\\n\\nexport default lesson;\\n";
    fs.writeFileSync(filepath, content, 'utf8');
    
    imports.push("import lesson" + lesson.id + " from './lessons/lesson" + lesson.id + "';");
    exportsArr.push("lesson" + lesson.id);
  }
  
  // 4. Update the main nihongo-lessons.ts
  const newMainContent = "export * from './lessons/types';\\nimport { NihongoLesson } from './lessons/types';\\n\\n" + imports.join('\\n') + "\\n\\nexport const NIHONGO_LESSONS: NihongoLesson[] = [\\n  " + exportsArr.join(',\\n  ') + "\\n];\\n";
  fs.writeFileSync(srcFile, newMainContent, 'utf8');
  
  console.log('Successfully split lessons into separate files!');
} catch (e) {
  console.error('Failed to split:', e);
}
