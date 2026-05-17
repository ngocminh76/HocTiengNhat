import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extra = {
  13: [
    { word: '渇きます', reading: 'かわきます', romaji: 'kawakimasu', meaning: 'Khát', type: 'Động từ' },
    { word: 'すきます', reading: 'すきます', romaji: 'sukimasu', meaning: 'Đói', type: 'Động từ' },
    { word: 'お祭り', reading: 'おまつり', romaji: 'omatsuri', meaning: 'Lễ hội', type: 'Danh từ' },
    { word: 'スキー', reading: 'スキー', romaji: 'sukii', meaning: 'Trượt tuyết', type: 'Danh từ' },
    { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: 'Cuộc họp', type: 'Danh từ' },
    { word: '登録', reading: 'とうろく', romaji: 'touroku', meaning: 'Đăng ký', type: 'Danh từ' },
    { word: 'ごろ', reading: 'ごろ', romaji: 'goro', meaning: 'Khoảng ~ (thời gian)', type: 'Hậu tố' },
    { word: 'ご注文は？', reading: 'ごちゅうもんは？', romaji: 'gochuumon wa?', meaning: 'Quý khách gọi món gì?', type: 'Mẫu câu' },
    { word: '定食', reading: 'ていしょく', romaji: 'teishoku', meaning: 'Suất ăn, set ăn', type: 'Danh từ' },
    { word: '牛どん', reading: 'ぎゅうどん', romaji: 'gyuudon', meaning: 'Cơm thịt bò', type: 'Danh từ' },
    { word: 'お待ちください', reading: 'おまちください', romaji: 'omachi kudasai', meaning: 'Xin vui lòng đợi', type: 'Mẫu câu' },
    { word: '別々に', reading: 'べつべつに', romaji: 'betsubetsuni', meaning: 'Tính riêng ra', type: 'Phó từ' }
  ],
  14: [
    { word: 'コピーします', reading: 'コピーします', romaji: 'kopiishimasu', meaning: 'Copy', type: 'Động từ' },
    { word: 'エアコン', reading: 'エアコン', romaji: 'eakon', meaning: 'Máy điều hòa', type: 'Danh từ' },
    { word: 'パスポート', reading: 'パスポート', romaji: 'pasupooto', meaning: 'Hộ chiếu', type: 'Danh từ' },
    { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: 'Tên', type: 'Danh từ' },
    { word: '住所', reading: 'じゅうしょ', romaji: 'juusho', meaning: 'Địa chỉ', type: 'Danh từ' },
    { word: '地図', reading: 'ちず', romaji: 'chizu', meaning: 'Bản đồ', type: 'Danh từ' },
    { word: '塩', reading: 'しお', romaji: 'shio', meaning: 'Muối', type: 'Danh từ' },
    { word: '砂糖', reading: 'さとう', romaji: 'satou', meaning: 'Đường', type: 'Danh từ' },
    { word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: 'Vấn đề / Câu hỏi', type: 'Danh từ' },
    { word: '答え', reading: 'こたえ', romaji: 'kotae', meaning: 'Câu trả lời', type: 'Danh từ' },
    { word: '読み方', reading: 'よみかた', romaji: 'yomikata', meaning: 'Cách đọc', type: 'Danh từ' },
    { word: 'まっすぐ', reading: 'まっすぐ', romaji: 'massugu', meaning: 'Đi thẳng', type: 'Phó từ' },
    { word: 'ゆっくり', reading: 'ゆっくり', romaji: 'yukkuri', meaning: 'Chậm lại, thong thả', type: 'Phó từ' },
    { word: 'すぐ', reading: 'すぐ', romaji: 'sugu', meaning: 'Ngay lập tức', type: 'Phó từ' },
    { word: 'また', reading: 'また', romaji: 'mata', meaning: 'Lại (lần nữa)', type: 'Phó từ' },
    { word: 'あとで', reading: 'あとで', romaji: 'ato de', meaning: 'Sau, lát nữa', type: 'Phó từ' },
    { word: 'もう少し', reading: 'もうすこし', romaji: 'mou sukoshi', meaning: 'Thêm một chút nữa', type: 'Phó từ' },
    { word: 'さあ', reading: 'さあ', romaji: 'saa', meaning: 'Nào, thôi nào', type: 'Từ cảm thán' },
    { word: 'あれ？', reading: 'あれ？', romaji: 'are?', meaning: 'Ủa?', type: 'Từ cảm thán' }
  ],
  15: [
    { word: 'いらっしゃいます', reading: 'いらっしゃいます', romaji: 'irasshaimasu', meaning: 'Có (kính ngữ của imasu)', type: 'Động từ' },
    { word: 'プレイガイド', reading: 'プレイガイド', romaji: 'pureigaido', meaning: 'Quầy bán vé', type: 'Danh từ' },
    { word: '経済', reading: 'けいざい', romaji: 'keizai', meaning: 'Kinh tế', type: 'Danh từ' },
    { word: '市役所', reading: 'しやくしょ', romaji: 'shiyakusho', meaning: 'Tòa thị chính', type: 'Danh từ' },
    { word: '皆', reading: 'みな', romaji: 'mina', meaning: 'Mọi người', type: 'Đại từ' },
    { word: '皆さん', reading: 'みなさん', romaji: 'minasan', meaning: 'Các bạn, mọi người (lịch sự)', type: 'Đại từ' }
  ],
  16: [
    { word: '見学します', reading: 'けんがくします', romaji: 'kengakushimasu', meaning: 'Tham quan học tập', type: 'Động từ' },
    { word: '電話します', reading: 'でんわします', romaji: 'denwashimasu', meaning: 'Gọi điện thoại', type: 'Động từ' },
    { word: 'シャワー', reading: 'シャワー', romaji: 'shawaa', meaning: 'Vòi hoa sen', type: 'Danh từ' },
    { word: '緑', reading: 'みどり', romaji: 'midori', meaning: 'Màu xanh lá cây', type: 'Danh từ' },
    { word: 'お寺', reading: 'おてら', romaji: 'otera', meaning: 'Chùa', type: 'Danh từ' },
    { word: '神社', reading: 'じんじゃ', romaji: 'jinja', meaning: 'Đền Thần đạo', type: 'Danh từ' },
    { word: '留学生', reading: 'りゅうがくせい', romaji: 'ryuugakusei', meaning: 'Du học sinh', type: 'Danh từ' },
    { word: 'どうやって', reading: 'どうやって', romaji: 'douyatte', meaning: 'Làm thế nào', type: 'Từ để hỏi' },
    { word: 'どの〜', reading: 'どの〜', romaji: 'dono~', meaning: '~ nào', type: 'Từ để hỏi' },
    { word: 'どれ', reading: 'どれ', romaji: 'dore', meaning: 'Cái nào (từ 3 cái trở lên)', type: 'Đại từ' },
    { word: 'すごいですね', reading: 'すごいですね', romaji: 'sugoi desu ne', meaning: 'Tuyệt quá nhỉ', type: 'Mẫu câu' },
    { word: 'まだまだです', reading: 'まだまだです', romaji: 'mada mada desu', meaning: 'Vẫn còn kém lắm (khiêm nhường)', type: 'Mẫu câu' },
    { word: 'まず', reading: 'まず', romaji: 'mazu', meaning: 'Trước tiên', type: 'Phó từ' },
    { word: 'キャッシュカード', reading: 'キャッシュカード', romaji: 'kyasshu kaado', meaning: 'Thẻ ATM', type: 'Danh từ' },
    { word: '暗証番号', reading: 'あんしょうばんごう', romaji: 'anshou bangou', meaning: 'Mã PIN', type: 'Danh từ' },
    { word: '金額', reading: 'きんがく', romaji: 'kingaku', meaning: 'Số tiền', type: 'Danh từ' },
    { word: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: 'Xác nhận', type: 'Danh từ' },
    { word: 'ボタン', reading: 'ボタン', romaji: 'botan', meaning: 'Nút bấm', type: 'Danh từ' }
  ],
  17: [
    { word: '健康保険証', reading: 'けんこうほけんしょう', romaji: 'kenkou hokenshou', meaning: 'Thẻ bảo hiểm y tế', type: 'Danh từ' },
    { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: 'Cảm cúm', type: 'Danh từ' },
    { word: '病気', reading: 'びょうき', romaji: 'byouki', meaning: 'Ốm, bệnh', type: 'Danh từ' },
    { word: '上着', reading: 'うわぎ', romaji: 'uwagi', meaning: 'Áo khoác', type: 'Danh từ' },
    { word: '下着', reading: 'したぎ', romaji: 'shitagi', meaning: 'Quần áo lót', type: 'Danh từ' },
    { word: '２、３日', reading: 'に、さんにち', romaji: 'ni, san nichi', meaning: '2, 3 ngày', type: 'Danh từ' },
    { word: '〜までに', reading: '〜までに', romaji: '~madeni', meaning: 'Trước ~ (thời hạn)', type: 'Trợ từ' },
    { word: 'ですから', reading: 'ですから', romaji: 'desukara', meaning: 'Vì thế, do đó', type: 'Liên từ' },
    { word: 'どうしましたか', reading: 'どうしましたか', romaji: 'dou shimashita ka', meaning: 'Bạn bị sao vậy?', type: 'Mẫu câu' },
    { word: 'のど', reading: 'のど', romaji: 'nodo', meaning: 'Cổ họng', type: 'Danh từ' },
    { word: 'お大事に', reading: 'おだいじに', romaji: 'odaiji ni', meaning: 'Chúc mau khỏe nhé', type: 'Mẫu câu' }
  ],
  18: [
    { word: '特に', reading: 'とくに', romaji: 'tokuni', meaning: 'Đặc biệt là', type: 'Phó từ' },
    { word: 'へえ', reading: 'へえ', romaji: 'hee', meaning: 'Thế à (ngạc nhiên)', type: 'Từ cảm thán' },
    { word: 'それはおもしろいですね', reading: 'それはおもしろいですね', romaji: 'sore wa omoshiroi desu ne', meaning: 'Điều đó thú vị nhỉ', type: 'Mẫu câu' },
    { word: 'なかなか', reading: 'なかなか', romaji: 'nakanaka', meaning: 'Mãi mà không (đi với phủ định)', type: 'Phó từ' },
    { word: '本当ですか', reading: 'ほんとうですか', romaji: 'hontou desu ka', meaning: 'Thật không?', type: 'Mẫu câu' },
    { word: 'ぜひ', reading: 'ぜひ', romaji: 'zehi', meaning: 'Nhất định', type: 'Phó từ' }
  ]
};

async function run() {
  let injected = 0;
  for (const [lessonId, newWords] of Object.entries(extra)) {
    const p = path.join(__dirname, '../src/data/lessons', `lesson${lessonId}.ts`);
    if (!fs.existsSync(p)) continue;
    
    const mod = await import(`file://${p}`);
    const lesson = mod.default;
    
    const existingWords = lesson.words.map(w => w.word);
    let idCounter = lesson.words.length + 1;
    
    for (const nw of newWords) {
      if (!existingWords.includes(nw.word)) {
        lesson.words.push({
          id: `L${lessonId}_${idCounter.toString().padStart(2, '0')}`,
          word: nw.word,
          reading: nw.reading,
          romaji: nw.romaji,
          meaning: nw.meaning,
          type: nw.type
        });
        idCounter++;
        injected++;
      }
    }
    
    const content = `import { NihongoLesson } from './types';

const lesson: NihongoLesson = ${JSON.stringify(lesson, null, 2)};

export default lesson;
`;
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Lesson ${lessonId} updated. Total words: ${lesson.words.length}`);
  }
  console.log(`Injected ${injected} new words into 13-18.`);
}

run();
