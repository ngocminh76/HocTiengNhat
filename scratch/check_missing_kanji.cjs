const fs = require('fs');
const path = require('path');

// read all lesson files
const dir = './src/data/lessons';
const files = fs.readdirSync(dir).filter(f => f.startsWith('lesson') && f.endsWith('.ts'));

const kanjiRegex = /[\u4e00-\u9faf]/;
let totalMissing = 0;
let missingList = [];

for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    // Extract words array string
    const wordsMatch = content.match(/"words"\s*:\s*\[([\s\S]*?)\]\s*,\s*"grammar"/);
    if (!wordsMatch) continue;
    
    const wordsStr = wordsMatch[1];
    // Split by { ... }
    let wordBlocks = wordsStr.split(/},\s*{/);
    
    for (let block of wordBlocks) {
        if (!block.startsWith('{')) block = '{' + block;
        if (!block.endsWith('}')) block = block + '}';
        
        // Find word
        const wordMatch = block.match(/"word"\s*:\s*"([^"]+)"/);
        if (wordMatch) {
            const word = wordMatch[1];
            if (kanjiRegex.test(word)) {
                if (!block.includes('"kanjiBreakdown"')) {
                    const idMatch = block.match(/"id"\s*:\s*"([^"]+)"/);
                    const meaningMatch = block.match(/"meaning"\s*:\s*"([^"]+)"/);
                    missingList.push({
                      file: file,
                      id: idMatch ? idMatch[1] : 'unknown',
                      word: word,
                      meaning: meaningMatch ? meaningMatch[1] : 'unknown'
                    });
                    totalMissing++;
                }
            }
        }
    }
}
console.log('Total Missing:', totalMissing);
fs.writeFileSync('./scratch/missing_kanji.json', JSON.stringify(missingList, null, 2));
