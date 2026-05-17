const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(process.cwd(), 'src', 'data', 'lessons');
const readingsDir = path.join(process.cwd(), 'src', 'data', 'readings');

if (!fs.existsSync(readingsDir)) {
  fs.mkdirSync(readingsDir);
}

for (let i = 1; i <= 25; i++) {
  const lessonFile = path.join(lessonsDir, `lesson${i}.ts`);
  if (!fs.existsSync(lessonFile)) continue;

  let content = fs.readFileSync(lessonFile, 'utf8');

  // Skip if already refactored
  if (content.includes(`import { readings } from '../readings/reading${i}';`)) continue;

  // We need to find the "readings": [ ... ] block
  const readingsIndex = content.indexOf('"readings": [');
  if (readingsIndex === -1) {
    // maybe it doesn't have readings, or it's formatted differently
    console.log(`Warning: "readings": [ not found in lesson${i}.ts`);
    continue;
  }

  // Bracket counting to extract the array
  let bracketCount = 0;
  let arrayStart = content.indexOf('[', readingsIndex);
  let arrayEnd = -1;

  for (let j = arrayStart; j < content.length; j++) {
    if (content[j] === '[') bracketCount++;
    if (content[j] === ']') bracketCount--;
    if (bracketCount === 0) {
      arrayEnd = j;
      break;
    }
  }

  if (arrayEnd === -1) {
    console.log(`Error: Could not find matching bracket in lesson${i}.ts`);
    continue;
  }

  const readingsArrayString = content.substring(arrayStart, arrayEnd + 1);

  // Write to readingX.ts
  const readingContent = `import { Reading } from '../lessons/types';\n\nexport const readings: Reading[] = ${readingsArrayString};\n`;
  fs.writeFileSync(path.join(readingsDir, `reading${i}.ts`), readingContent, 'utf8');

  // Modify lessonX.ts
  // Remove the "readings": [...] block, including a trailing comma if present
  let before = content.substring(0, readingsIndex);
  let after = content.substring(arrayEnd + 1);
  
  if (after.trim().startsWith(',')) {
    after = after.replace(/^\s*,\s*/, '\n  ');
  }

  // Insert import at the top
  const importStatement = `import { readings } from '../readings/reading${i}';\n`;
  
  // We want to add "readings," inside the lesson object.
  // The easiest way is to put it where "readings": [...] used to be.
  let newContent = before + `"readings": readings,\n  ` + after;
  
  // Add import statement after the first import or at the top
  if (newContent.includes('import { NihongoLesson }')) {
    newContent = newContent.replace('import { NihongoLesson } from \'./types\';\n', `import { NihongoLesson } from './types';\n${importStatement}`);
  } else {
    newContent = importStatement + newContent;
  }

  fs.writeFileSync(lessonFile, newContent, 'utf8');
  console.log(`Refactored lesson ${i}`);
}
