const fs = require('fs');
for(let i=1; i<=25; i++) {
  let f = 'src/data/lessons/lesson'+i+'.ts';
  if(fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    let hasR = c.indexOf('"readings": []') === -1 && c.indexOf('readings: []') === -1;
    console.log('Lesson ' + i + ' has readings: ' + hasR);
  }
}
