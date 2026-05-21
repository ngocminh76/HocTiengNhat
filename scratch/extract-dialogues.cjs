const fs = require('fs');

let out = 'export interface ListeningLesson {\n  id: number;\n  title: string;\n  titleVn: string;\n  lines: import("./lessons/types").DialogueLine[];\n}\n\nexport const LISTENING_LESSONS: ListeningLesson[] = [\n';

for (let i = 1; i <= 5; i++) {
  try {
    const content = fs.readFileSync('src/data/lessons/lesson' + i + '.ts', 'utf8');
    // We want to capture from "dialogue": { to the end of the object.
    const match = content.match(/"dialogue"\s*:\s*(\{[\s\S]*?\})\n\s*\};/);
    if (match) {
      let objStr = match[1];
      // Insert "id": i as the first property
      objStr = objStr.replace(/\{/, '{\n    "id": ' + i + ',');
      out += '  ' + objStr + ',\n';
    }
  } catch (e) {
    console.error(e);
  }
}

out += '];\n';
fs.writeFileSync('src/data/listening-lessons.ts', out);
console.log('done');
