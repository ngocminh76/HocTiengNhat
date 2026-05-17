const fs = require('fs');
let missingKanji = [];
for(let i=1; i<=25; i++) {
  let f = 'src/data/lessons/lesson'+i+'.ts';
  if(fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    // Extract words array loosely or run match. Actually, it's a TS file exporting NihongoLesson.
    // It's safer to read the data using ts-node or just parse it. Let's do a simple regex or import.
  }
}
