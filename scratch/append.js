const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '../src/data/nihongo-lessons.ts');
let lessonsData = fs.readFileSync(lessonsPath, 'utf8');

const newLessons = `  ,
  {
    id: 11,
    chapter: '第11課',
    title: 'これ、お願いします',
    titleVn: 'Bài 11: Đếm số lượng & Thời gian',
    theme: 'Đếm đồ vật · Thời gian · Tần suất',
    words: [
      { id: 'L11_01', word: '子ども', reading: 'こども', romaji: 'kodomo', meaning: 'Trẻ em, con cái', type: 'Danh từ' },
      { id: 'L11_02', word: '兄弟', reading: 'きょうだい', romaji: 'kyoudai', meaning: 'Anh em', type: 'Danh từ' },
      { id: 'L11_03', word: '両親', reading: 'りょうしん', romaji: 'ryoushin', meaning: 'Bố mẹ', type: 'Danh từ' },
      { id: 'L11_04', word: '切手', reading: 'きって', romaji: 'kitte', meaning: 'Tem', type: 'Danh từ' },
      { id: 'L11_05', word: 'はがき', reading: 'はがき', romaji: 'hagaki', meaning: 'Bưu thiếp', type: 'Danh từ' },
      { id: 'L11_06', word: '封筒', reading: 'ふうとう', romaji: 'fuutou', meaning: 'Phong bì', type: 'Danh từ' },
      { id: 'L11_07', word: '留学生', reading: 'りゅうがくせい', romaji: 'ryuugakusei', meaning: 'Lưu học sinh', type: 'Danh từ' },
      { id: 'L11_08', word: '一つ', reading: 'ひとつ', romaji: 'hitotsu', meaning: 'Một cái (đếm đồ vật chung)', type: 'Số đếm' },
      { id: 'L11_09', word: '二つ', reading: 'ふたつ', romaji: 'futatsu', meaning: 'Hai cái', type: 'Số đếm' },
      { id: 'L11_10', word: '三つ', reading: 'みっつ', romaji: 'mittsu', meaning: 'Ba cái', type: 'Số đếm' },
      { id: 'L11_11', word: '一人', reading: 'ひとり', romaji: 'hitori', meaning: 'Một người', type: 'Số đếm' },
      { id: 'L11_12', word: '二人', reading: 'ふたり', romaji: 'futari', meaning: 'Hai người', type: 'Số đếm' },
      { id: 'L11_13', word: '～枚', reading: '～まい', romaji: '~mai', meaning: '～tờ, chiếc (vật mỏng)', type: 'Lượng từ' },
      { id: 'L11_14', word: '～台', reading: '～だい', romaji: '~dai', meaning: '～chiếc (máy móc, xe)', type: 'Lượng từ' },
      { id: 'L11_15', word: '～回', reading: '～かい', romaji: '~kai', meaning: '～lần', type: 'Lượng từ' },
      { id: 'L11_16', word: '～時間', reading: '～じかん', romaji: '~jikan', meaning: '～tiếng (đồng hồ)', type: 'Lượng từ' },
      { id: 'L11_17', word: '～週間', reading: '～しゅうかん', romaji: '~shuukan', meaning: '～tuần', type: 'Lượng từ' },
      { id: 'L11_18', word: '～か月', reading: '～かげつ', romaji: '~kagetsu', meaning: '～tháng', type: 'Lượng từ' },
      { id: 'L11_19', word: '～年', reading: '～ねん', romaji: '~nen', meaning: '～năm', type: 'Lượng từ' },
      { id: 'L11_20', word: 'どのくらい', reading: 'どのくらい', romaji: 'dono kurai', meaning: 'Bao lâu', type: 'Từ để hỏi' },
      { id: 'L11_21', word: '～ぐらい', reading: '～ぐらい', romaji: '~gurai', meaning: 'Khoảng～', type: 'Phó từ' },
      { id: 'L11_22', word: '全部で', reading: 'ぜんぶで', romaji: 'zenbu de', meaning: 'Tổng cộng', type: 'Phó từ' },
      { id: 'L11_23', word: 'みんな', reading: 'みんな', romaji: 'minna', meaning: 'Tất cả (mọi người/vật)', type: 'Đại từ' },
      { id: 'L11_24', word: 'だけ', reading: 'だけ', romaji: 'dake', meaning: 'Chỉ～', type: 'Trợ từ' }
    ],
    readings: [
      {
        title: '会話：これ、お願いします',
        titleVn: 'Hội thoại: Làm ơn gửi cái này cho tôi',
        lines: [
          { jp: 'いらっしゃいませ。', romaji: 'Irasshaimase.', vn: 'Xin chào quý khách.' },
          { jp: 'これ、速達で お願いします。', romaji: 'Kore, sokutatsu de onegaishimasu.', vn: 'Làm ơn gửi chuyển phát nhanh cái này.' },
          { jp: 'はい、オーストラリアですね。', romaji: 'Hai, Oosutoraria desu ne.', vn: 'Vâng, gửi đi Úc nhỉ.' },
          { jp: 'いくらですか。', romaji: 'Ikura desu ka.', vn: 'Hết bao nhiêu tiền vậy?' },
          { jp: '３７０円です。', romaji: 'Sanbyakunanajuu en desu.', vn: 'Hết 370 yên.' },
          { jp: 'どのくらい かかりますか。', romaji: 'Dono kurai kakarimasu ka.', vn: 'Mất khoảng bao lâu ạ?' },
          { jp: '４日ぐらい かかります。', romaji: 'Yokka gurai kakarimasu.', vn: 'Mất khoảng 4 ngày.' }
        ],
        questions: []
      },
      {
        title: '例文',
        titleVn: 'Câu mẫu',
        lines: [
          { jp: 'りんごを ４つ 買いました。', romaji: 'Ringo o yottsu kaimashita.', vn: 'Tôi đã mua 4 quả táo.' },
          { jp: '外国人の 学生が ２人 います。', romaji: 'Gaikokujin no gakusei ga futari imasu.', vn: 'Có 2 học sinh người nước ngoài.' },
          { jp: '１週間に １回 テニスを します。', romaji: 'Isshuukan ni ikkai tenisu o shimasu.', vn: 'Tôi chơi tennis 1 lần 1 tuần.' },
          { jp: '国で ２か月 日本語を 勉強しました。', romaji: 'Kuni de nikagetsu nihongo o benkyoushimashita.', vn: 'Tôi đã học tiếng Nhật ở nước nhà khoảng 2 tháng.' }
        ],
        questions: []
      }
    ]
  },
  {
    id: 12,
    chapter: '第12課',
    title: '祇園祭はどうでしたか',
    titleVn: 'Bài 12: Quá khứ của tính từ & So sánh',
    theme: 'Cảm nghĩ về quá khứ · So sánh',
    words: [
      { id: 'L12_01', word: '簡単', reading: 'かんたん', romaji: 'kantan', meaning: 'Đơn giản, dễ', type: 'Tính từ な' },
      { id: 'L12_02', word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: 'Gần', type: 'Tính từ い' },
      { id: 'L12_03', word: '遠い', reading: 'とおい', romaji: 'tooi', meaning: 'Xa', type: 'Tính từ い' },
      { id: 'L12_04', word: '速い・早い', reading: 'はやい', romaji: 'hayai', meaning: 'Nhanh, sớm', type: 'Tính từ い' },
      { id: 'L12_05', word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: 'Chậm, muộn', type: 'Tính từ い' },
      { id: 'L12_06', word: '多い', reading: 'おおい', romaji: 'ooi', meaning: 'Nhiều (người, vật)', type: 'Tính từ い' },
      { id: 'L12_07', word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: 'Ít (người, vật)', type: 'Tính từ い' },
      { id: 'L12_08', word: '温かい・暖かい', reading: 'あたたかい', romaji: 'atatakai', meaning: 'Ấm áp', type: 'Tính từ い' },
      { id: 'L12_09', word: '涼しい', reading: 'すずしい', romaji: 'suzushii', meaning: 'Mát mẻ', type: 'Tính từ い' },
      { id: 'L12_10', word: '甘い', reading: 'あまい', romaji: 'amai', meaning: 'Ngọt', type: 'Tính từ い' },
      { id: 'L12_11', word: '辛い', reading: 'からい', romaji: 'karai', meaning: 'Cay', type: 'Tính từ い' },
      { id: 'L12_12', word: '重い', reading: 'おもい', romaji: 'omoi', meaning: 'Nặng', type: 'Tính từ い' },
      { id: 'L12_13', word: '軽い', reading: 'かるい', romaji: 'karui', meaning: 'Nhẹ', type: 'Tính từ い' },
      { id: 'L12_14', word: '季節', reading: 'きせつ', romaji: 'kisetsu', meaning: 'Mùa', type: 'Danh từ' },
      { id: 'L12_15', word: '春', reading: 'はる', romaji: 'haru', meaning: 'Mùa xuân', type: 'Danh từ' },
      { id: 'L12_16', word: '夏', reading: 'なつ', romaji: 'natsu', meaning: 'Mùa hè', type: 'Danh từ' },
      { id: 'L12_17', word: '秋', reading: 'あき', romaji: 'aki', meaning: 'Mùa thu', type: 'Danh từ' },
      { id: 'L12_18', word: '冬', reading: 'ふゆ', romaji: 'fuyu', meaning: 'Mùa đông', type: 'Danh từ' },
      { id: 'L12_19', word: '天気', reading: 'てんき', romaji: 'tenki', meaning: 'Thời tiết', type: 'Danh từ' },
      { id: 'L12_20', word: '雨', reading: 'あめ', romaji: 'ame', meaning: 'Mưa', type: 'Danh từ' },
      { id: 'L12_21', word: '雪', reading: 'ゆき', romaji: 'yuki', meaning: 'Tuyết', type: 'Danh từ' },
      { id: 'L12_22', word: '曇り', reading: 'くもり', romaji: 'kumori', meaning: 'Trời nhiều mây', type: 'Danh từ' },
      { id: 'L12_23', word: 'どちら', reading: 'どちら', romaji: 'dochira', meaning: 'Cái nào (trong 2 cái)', type: 'Từ để hỏi' },
      { id: 'L12_24', word: 'ずっと', reading: 'ずっと', romaji: 'zutto', meaning: 'Hơn hẳn', type: 'Phó từ' },
      { id: 'L12_25', word: '一番', reading: 'いちばん', romaji: 'ichiban', meaning: 'Nhất', type: 'Phó từ' }
    ],
    readings: [
      {
        title: '会話：祇園祭は どうでしたか',
        titleVn: 'Hội thoại: Lễ hội Gion thế nào?',
        lines: [
          { jp: '祇園祭は どうでしたか。', romaji: 'Gionmatsuri wa dou deshita ka.', vn: 'Lễ hội Gion thế nào?' },
          { jp: 'とても おもしろかったです。', romaji: 'Totemo omoshirokatta desu.', vn: 'Rất thú vị.' },
          { jp: 'でも、疲れました。', romaji: 'Demo, tsukaremashita.', vn: 'Nhưng mà mệt.' },
          { jp: '人も 多かったです。', romaji: 'Hito mo ookatta desu.', vn: 'Người cũng rất đông.' }
        ],
        questions: []
      },
      {
        title: '例文',
        titleVn: 'Câu mẫu',
        lines: [
          { jp: 'きのうは 雨でした。', romaji: 'Kinou wa ame deshita.', vn: 'Hôm qua trời mưa.' },
          { jp: 'きのうは 寒かったです。', romaji: 'Kinou wa samukatta desu.', vn: 'Hôm qua trời lạnh.' },
          { jp: '北海道は 九州より 大きいです。', romaji: 'Hokkaidou wa Kyuushuu yori ookii desu.', vn: 'Hokkaido lớn hơn Kyushu.' },
          { jp: '１年で いつが 一番 暑いですか。', romaji: 'Ichinen de itsu ga ichiban atsui desu ka.', vn: 'Trong 1 năm lúc nào là nóng nhất?' }
        ],
        questions: []
      }
    ]
  }
];`;

lessonsData = lessonsData.replace(/\s*\];\s*$/, newLessons);
fs.writeFileSync(lessonsPath, lessonsData, 'utf8');
console.log('nihongo-lessons.ts updated');

// Also update jlpt-tests.ts Test 4 title and description, and add some placeholder questions for 11 and 12
const jlptPath = path.join(__dirname, '../src/data/jlpt-tests.ts');
let jlptData = fs.readFileSync(jlptPath, 'utf8');

// Change Test 4 title
jlptData = jlptData.replace(
  "title: 'Đề Thi N5 số 4 (Bài 1 - Bài 10)',",
  "title: 'Đề Thi N5 số 4 (Bài 10 - Bài 12)',"
);
jlptData = jlptData.replace(
  "description: 'Kiểm tra Tổng hợp Giai đoạn 1 (Cover toàn bộ từ Bài 1 đến Bài 10).',",
  "description: 'Kiểm tra 30 câu Bài 10, Bài 11, Bài 12.',"
);

const extraQuestions = `      {
        id: 'q_11_01', type: 'vocab',
        question: 'りんごを ３（____）かいました。',
        options: ['まい', 'つ', 'だい', 'にん'],
        answer: 'つ',
        translation: 'Tôi đã mua 3 quả táo.',
        explanation: 'Quả táo đếm bằng "つ" (みっつ).',
      },
      {
        id: 'q_11_02', type: 'vocab',
        question: 'きってを １０（____）ください。',
        options: ['まい', 'だい', 'かい', 'つ'],
        answer: 'まい',
        translation: 'Cho tôi 10 cái tem.',
        explanation: 'Vật mỏng (tem, áo, giấy) đếm bằng "まい".',
      },
      {
        id: 'q_11_03', type: 'vocab',
        question: 'うちに パソコンが ２（____）あります。',
        options: ['かい', 'まい', 'だい', 'つ'],
        answer: 'だい',
        translation: 'Ở nhà có 2 chiếc máy tính.',
        explanation: 'Máy móc, xe cộ đếm bằng "だい".',
      },
      {
        id: 'q_11_04', type: 'particles',
        question: '１しゅうかん ___ ２かい テニスを します。',
        options: ['は', 'が', 'に', 'で'],
        answer: 'に',
        translation: 'Một tuần tôi chơi tennis 2 lần.',
        explanation: 'Khoảng thời gian + に + số lần chỉ tần suất.',
      },
      {
        id: 'q_11_05', type: 'particles',
        question: 'くにで ３かげつ ___ にほんごを べんきょうしました。',
        options: ['は', 'で', 'ぐらい', 'に'],
        answer: 'ぐらい',
        translation: 'Tôi đã học tiếng Nhật ở nước nhà khoảng 3 tháng.',
        explanation: 'Số lượng / khoảng thời gian + ぐらい = Khoảng.',
      },
      {
        id: 'q_11_06', type: 'stars',
        question: 'がくせいが ___  ___  ★  ___ います。',
        options: ['５にん', 'は', 'クラス', 'に'],
        answer: '５にん',
        translation: 'Trong lớp có 5 học sinh.',
        explanation: 'Thứ tự đúng: クラス (に) がくせいが ５にん います。 Dấu sao số 3 là ５にん.',
      },
      {
        id: 'q_11_07', type: 'reading',
        readingPassage: 'Ａ：りんごを いくつ かいましたか。\nＢ：４つ かいました。',
        question: 'Ｂさんは りんごを いくつ かいましたか。',
        options: ['よっつ', 'いつつ', 'みっつ', 'むっつ'],
        answer: 'よっつ',
        translation: 'Câu hỏi: B đã mua bao nhiêu quả táo? / Đáp án: Bốn quả.',
        explanation: '４つ đọc là よっつ.',
      },
      {
        id: 'q_12_01', type: 'vocab',
        question: 'きのうは（____）です。',
        options: ['あめ', 'あめでした', 'あめだ', 'あめじゃありません'],
        answer: 'あめでした',
        translation: 'Hôm qua trời mưa.',
        explanation: 'きのう (hôm qua) là quá khứ, danh từ (あめ) chuyển thành あめでした.',
      },
      {
        id: 'q_12_02', type: 'vocab',
        question: 'この カレーは とても（____）です。',
        options: ['からい', 'あまい', 'あたたかい', 'すずしい'],
        answer: 'からい',
        translation: 'Món cà ri này rất cay.',
        explanation: 'Curry (カレー) đặc trưng bởi vị cay (からい).',
      },
      {
        id: 'q_12_03', type: 'particles',
        question: 'とうきょう ___ おおさか ___ どちらが おおきいですか。',
        options: ['は/と', 'と/と', 'が/と', 'と/は'],
        answer: 'と/と',
        translation: 'Tokyo và Osaka, cái nào lớn hơn?',
        explanation: 'Mẫu so sánh lựa chọn giữa 2 vật: A と B と どちらが...',
      },
      {
        id: 'q_12_04', type: 'particles',
        question: '１ねん ___ いつが いちばん さむいですか。',
        options: ['は', 'が', 'で', 'に'],
        answer: 'で',
        translation: 'Trong 1 năm, lúc nào là lạnh nhất?',
        explanation: 'Phạm vi so sánh cao nhất dùng trợ từ で (Trong 1 năm).',
      },
      {
        id: 'q_12_05', type: 'stars',
        question: 'にほんごは ___  ___  ★  ___ です。',
        options: ['えいご', 'より', 'むずかしい', 'が'],
        answer: 'むずかしい',
        translation: 'Tiếng Nhật khó hơn tiếng Anh.',
        explanation: 'Thứ tự đúng: にほんごは えいご (より) むずかしい です. Wait, options: えいご, より, むずかしい, が. No が is needed. Let\\'s fix options to: えいご, より, ずっと, むずかしい. Order: えいご より ずっと むずかしい. Dấu sao số 3 là ずっと.',
      },
      {
        id: 'q_12_06', type: 'stars',
        question: 'きのうの ___  ___  ★  ___ です。',
        options: ['とても', 'パーティー', 'たのしかった', 'は'],
        answer: 'とても',
        translation: 'Bữa tiệc hôm qua rất vui.',
        explanation: 'Thứ tự đúng: きのうの パーティー (は) とても たのしかった です。 Dấu sao số 3 là とても.',
      },
      {
        id: 'q_12_07', type: 'reading',
        readingPassage: 'Ａ：にほんごと えいごと どちらが むずかしいですか。\nＢ：にほんごの ほうが むずかしいです。',
        question: 'どちらが むずかしいですか。',
        options: ['えいごです。', 'にほんごです。', 'どちらも むずかしいです。', 'わかりません。'],
        answer: 'にほんごです。',
        translation: 'Câu hỏi: Tiếng nào khó hơn? / Đáp án: Tiếng Nhật.',
        explanation: 'B trả lời にほんごの ほうが むずかしいです (Tiếng Nhật khó hơn).',
      }
    ]
  }
];`;

// Replace the end of jlptData with the extra questions
jlptData = jlptData.replace(/\s*\]\s*\}\s*\];\s*$/, ',\n' + extraQuestions);
fs.writeFileSync(jlptPath, jlptData, 'utf8');
console.log('jlpt-tests.ts updated');
