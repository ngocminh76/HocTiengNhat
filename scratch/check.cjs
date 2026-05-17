const fs = require('fs');

let counts = [];
for (let i = 1; i <= 25; i++) {
  let file = 'src/data/lessons/lesson' + i + '.ts';
  if (fs.existsSync(file)) {
    const code = fs.readFileSync(file, 'utf8');
    let m = 0;
    let lines = code.split('\n');
    for (let l of lines) {
      if (l.includes('"word":')) m++;
    }
    counts.push('Lesson ' + i + ': ' + m + ' words');
  }
}
console.log(counts.join('\n'));
