const fs = require('fs');
const path = require('path');

const jlptPath = path.join(__dirname, '../src/data/jlpt-tests.ts');
let jlptData = fs.readFileSync(jlptPath, 'utf8');

const extra6 = `      {
        id: 'q_11_08', type: 'vocab',
        question: 'にほんに（____）います。',
        options: ['１ねん', '１ねんかん', '１にち', '１じかん'],
        answer: '１ねん',
        translation: 'Tôi sống ở Nhật Bản 1 năm.',
        explanation: 'Thời gian ở lại lâu dài dùng １ねん (1 năm). Không cần かん.',
      },
      {
        id: 'q_11_09', type: 'reading',
        readingPassage: 'きのうは ８じかん はたらきました。とても つかれました。',
        question: 'どのくらい はたらきましたか。',
        options: ['８じ', '８じかん', 'はちじ', 'はちじかん'],
        answer: '８じかん',
        translation: 'Câu hỏi: Đã làm việc bao lâu? / Đáp án: 8 tiếng.',
        explanation: 'Trong bài ghi ８じかん はたらきました.',
      },
      {
        id: 'q_11_10', type: 'particles',
        question: 'きょうだいは わたし ___ ３にんです。',
        options: ['が', 'で', 'と', 'に'],
        answer: 'で',
        translation: 'Anh em nhà tôi tổng cộng có 3 người.',
        explanation: 'ぜんぶで / 全部で dùng trợ từ で (tổng cộng).',
      },
      {
        id: 'q_12_08', type: 'vocab',
        question: 'とうきょうは ひとが（____）です。',
        options: ['おおきい', 'おおい', 'すくない', 'はやい'],
        answer: 'おおい',
        translation: 'Tokyo có nhiều người.',
        explanation: 'Người đông/nhiều dùng おおい.',
      },
      {
        id: 'q_12_09', type: 'particles',
        question: 'スポーツ ___ なにが いちばん すきですか。',
        options: ['で', 'に', 'は', 'を'],
        answer: 'で',
        translation: 'Trong các môn thể thao, môn nào bạn thích nhất?',
        explanation: 'Giới hạn phạm vi (trong số các môn thể thao) dùng で.',
      },
      {
        id: 'q_12_10', type: 'stars',
        question: 'くるま ___  ___  ★  ___ です。',
        options: ['は', 'のほうが', 'じてんしゃ', 'はやい'],
        answer: 'のほうが',
        translation: 'Ô tô thì nhanh hơn xe đạp.',
        explanation: 'Thứ tự đúng: くるま (は) じてんしゃ (のほうが - wait, A は B より / A のほうが B より). Let\\'s fix: くるま (と) じてんしゃ (と) どちらが はやい ですか. No, くるま (のほうが) じてんしゃ (より) はやい です. Options: は, のほうが, じてんしゃ, はやい. Wait! "くるま は じてんしゃ より はやい です" is correct. Options: は, より, じてんしゃ, はやい. Let me write: くるま は じてんしゃ より はやい です.',
      }`;

jlptData = jlptData.replace(
  "question: 'くるま ___  ___  ★  ___ です。',\n        options: ['は', 'のほうが', 'じてんしゃ', 'はやい'],\n        answer: 'のほうが',\n        translation: 'Ô tô thì nhanh hơn xe đạp.',\n        explanation: 'Thứ tự đúng: くるま (は) じてんしゃ (のほうが - wait, A は B より / A のほうが B より). Let\\'s fix: くるま (と) じてんしゃ (と) どちらが はやい ですか. No, くるま (のほうが) じてんしゃ (より) はやい です. Options: は, のほうが, じてんしゃ, はやい. Wait! \"くるま は じてんしゃ より はやい です\" is correct. Options: は, より, じてんしゃ, はやい. Let me write: くるま は じてんしゃ より はやい です.',",
  "question: 'くるま ___  ___  ★  ___ です。',\n        options: ['は', 'より', 'じてんしゃ', 'はやい'],\n        answer: 'より',\n        translation: 'Ô tô thì nhanh hơn xe đạp.',\n        explanation: 'Thứ tự đúng: くるま (は) じてんしゃ (より) はやい です。 Dấu sao số 3 là より.',"
);

// Append the 6 questions properly to Test 4 array
jlptData = jlptData.replace(/\s*\]\s*\}\s*\];\s*$/, ',\n' + extra6 + '\n    ]\n  }\n];');

// Fix the replace syntax I just did since it had an error in my string block
jlptData = jlptData.replace(
  "question: 'くるま ___  ___  ★  ___ です。',\n        options: ['は', 'のほうが', 'じてんしゃ', 'はやい'],",
  "question: 'くるま ___  ___  ★  ___ です。',\n        options: ['は', 'より', 'じてんしゃ', 'はやい'],"
);
jlptData = jlptData.replace(
  "answer: 'のほうが',\n        translation: 'Ô tô thì nhanh hơn xe đạp.',\n        explanation: 'Thứ tự đúng: くるま (は) じてんしゃ (のほうが - wait",
  "answer: 'より',\n        translation: 'Ô tô thì nhanh hơn xe đạp.',\n        explanation: 'Thứ tự đúng: くるま (は) じてんしゃ (より) はやい です. Dấu sao số 3 là より."
);

fs.writeFileSync(jlptPath, jlptData, 'utf8');
console.log('Added 6 more questions');
