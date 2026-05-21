const fs = require('fs');

for (let i = 1; i <= 5; i++) {
  try {
    let f = 'src/data/lessons/lesson' + i + '.ts';
    let t = fs.readFileSync(f, 'utf8');
    t = t.replace(/,\s*"dialogue"\s*:\s*\{[\s\S]*\}\s*};\s*$/m, '\n};\n');
    fs.writeFileSync(f, t);
    console.log('Processed', f);
  } catch (e) {
    console.error(e);
  }
}

// Remove dialogue from types.ts
let tFile = 'src/data/lessons/types.ts';
let tContent = fs.readFileSync(tFile, 'utf8');
tContent = tContent.replace(/dialogue\?:\s*LessonDialogue;/, '');
fs.writeFileSync(tFile, tContent);
console.log('done');
