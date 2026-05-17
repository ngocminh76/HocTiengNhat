const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/pages/NihongoLessonPage.tsx');
const tabsDir = path.join(__dirname, '../src/pages/lesson-tabs');

if (!fs.existsSync(tabsDir)) {
  fs.mkdirSync(tabsDir);
}

const code = fs.readFileSync(srcFile, 'utf8');

// We will manually extract everything after line 230 to a new file `NihongoLessonTabs.tsx`
// Wait, a better way is to just leave them in one file but named `NihongoLessonTabs.tsx` 
// and import them. This is safer.

const splitPoint = code.indexOf('function VocabTab');
if (splitPoint === -1) {
  console.log('Already split or not found');
  process.exit(0);
}

const topPart = code.substring(0, splitPoint);
const bottomPart = code.substring(splitPoint);

// Common imports needed for the tabs
const importsForTabs = `import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import type { NihongoLesson, LessonWord, LessonReading } from '../../data/nihongo-lessons';
import * as wanakana from 'wanakana';

interface WordMastery { streak: number; total: number; correct: number; }
type MasteryMap = Record<string, WordMastery>;
const DEEP_MASTERY_THRESHOLD = 7;

function getWordMastery(m: MasteryMap, id: string): WordMastery {
  return m[id] || { streak: 0, total: 0, correct: 0 };
}
function getMasteryBadge(w: WordMastery): { icon: string; color: string; label: string } {
  if (w.correct >= DEEP_MASTERY_THRESHOLD) return { icon: '🔮', color: '#a78bfa', label: \`Thuộc sâu (\${w.correct})\` };
  if (w.streak >= 3) return { icon: '✅', color: 'var(--green)', label: 'Thuộc rồi!' };
  if (w.streak === 2) return { icon: '🔥', color: '#ff9800', label: \`\${w.total} lần\` };
  if (w.streak === 1) return { icon: '👍', color: 'var(--gold)', label: \`\${w.total} lần\` };
  return { icon: '👀', color: 'var(--mute)', label: w.total > 0 ? \`\${w.total} lần\` : 'Mới' };
}
function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }
function buildDrillWords(words: LessonWord[], mastery: MasteryMap): LessonWord[] {
  const mastered = words.filter(w => getWordMastery(mastery, w.id).correct >= DEEP_MASTERY_THRESHOLD);
  const learning = words.filter(w => getWordMastery(mastery, w.id).correct < DEEP_MASTERY_THRESHOLD);
  const reviewCount = Math.max(learning.length > 0 ? 0 : 1, Math.ceil(mastered.length * 0.25));
  return shuffle([...learning, ...shuffle(mastered).slice(0, reviewCount)]);
}

`;

const tabsFileContent = importsForTabs + bottomPart;
const tabsFilePath = path.join(__dirname, '../src/pages/NihongoLessonTabs.tsx');
fs.writeFileSync(tabsFilePath, tabsFileContent, 'utf8');

// Now update NihongoLessonPage.tsx
// We need to add the imports for the tabs
const newImports = `import { VocabTab, FlashTab, ListenTab, StatsTab, MatchTab, TranslateTab, ListenSentenceTab } from './NihongoLessonTabs';\n`;

// Find where to insert the new imports
const importIndex = topPart.indexOf('import * as wanakana');
const finalTopPart = topPart.substring(0, importIndex) + newImports + topPart.substring(importIndex);

fs.writeFileSync(srcFile, finalTopPart, 'utf8');

console.log('Successfully extracted tabs to NihongoLessonTabs.tsx');
