const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/nihongo-lessons.ts');
let code = fs.readFileSync(filePath, 'utf8');

// Regex to match `hint: '...', ` or `hint: "...", `
// We also want to remove optional trailing/leading spaces.
const regex = /hint:\s*['"](.*?)['"],\s*/g;
const newCode = code.replace(regex, '');

fs.writeFileSync(filePath, newCode, 'utf8');
console.log('Successfully removed all hints from nihongo-lessons.ts');
