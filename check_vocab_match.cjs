// Script kiểm tra: vocab nào không khớp trong câu ví dụ
const fs = require('fs');
const raw = fs.readFileSync('./src/data/kanji-n5.ts', 'utf8');

// Trích xuất tất cả các block Kanji
const regex = /id:\s*(\d+),\s*kanji:\s*'([^']+)'/g;
let match;
const ids = [];
while ((match = regex.exec(raw)) !== null) {
  ids.push({ id: parseInt(match[1]), kanji: match[2] });
}

// Tìm tất cả example.jp và vocab[].word cho mỗi id
for (const { id, kanji } of ids) {
  // Tìm block cho id này
  const blockRegex = new RegExp(`id:\\s*${id},([\\s\\S]*?)(?=\\n\\s*\\{\\s*id:|$)`, 'g');
  const blockMatch = blockRegex.exec(raw);
  if (!blockMatch) continue;
  const block = blockMatch[1];
  
  // Tìm example.jp
  const exampleMatch = block.match(/example:\s*\{[^}]*jp:\s*'([^']+)'/);
  if (!exampleMatch) continue;
  const exampleJp = exampleMatch[1];
  
  // Tìm tất cả vocab words
  const vocabWords = [];
  const vocabRegex = /word:\s*'([^']+)'/g;
  let vm;
  while ((vm = vocabRegex.exec(block)) !== null) {
    vocabWords.push(vm[1]);
  }
  
  // Kiểm tra có vocab nào xuất hiện trong câu ví dụ không
  const hasMatch = vocabWords.some(w => exampleJp.includes(w));
  // Kiểm tra chữ Kanji gốc có trong câu không
  const kanjiInExample = exampleJp.includes(kanji);
  
  if (!hasMatch) {
    console.log(`❌ ID ${id} (${kanji}): Không có vocab nào khớp trong câu ví dụ!`);
    console.log(`   Câu: ${exampleJp}`);
    console.log(`   Vocab: ${vocabWords.join(', ')}`);
    console.log(`   Kanji "${kanji}" trong câu: ${kanjiInExample ? 'CÓ (fallback OK)' : 'KHÔNG (cần sửa data!)'}`);
    console.log();
  }
}
console.log('✅ Scan hoàn tất!');
