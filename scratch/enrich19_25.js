import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extra = {
  19: [
    { word: 'ダイエット', reading: 'ダイエット', romaji: 'daietto', meaning: 'Ăn kiêng', type: 'Danh từ' },
    { word: '何回も', reading: 'なんかいも', romaji: 'nankaimo', meaning: 'Nhiều lần', type: 'Phó từ' },
    { word: 'しかし', reading: 'しかし', romaji: 'shikashi', meaning: 'Nhưng, tuy nhiên', type: 'Liên từ' },
    { word: '無理（な）', reading: 'むり', romaji: 'muri', meaning: 'Không thể, quá sức', type: 'Tính từ na' },
    { word: '体にいい', reading: 'からだにいい', romaji: 'karada ni ii', meaning: 'Tốt cho cơ thể', type: 'Mẫu câu' },
    { word: 'ケーキ', reading: 'ケーキ', romaji: 'keeki', meaning: 'Bánh ngọt', type: 'Danh từ' }
  ],
  20: [
    { word: 'ビザが要ります', reading: 'ビザがいります', romaji: 'biza ga irimasu', meaning: 'Cần visa', type: 'Động từ' },
    { word: 'パスポート', reading: 'パスポート', romaji: 'pasupooto', meaning: 'Hộ chiếu', type: 'Danh từ' },
    { word: 'よかったら', reading: 'よかったら', romaji: 'yokattara', meaning: 'Nếu được / Nếu bạn thích', type: 'Mẫu câu' },
    { word: 'いろいろ', reading: 'いろいろ', romaji: 'iroiro', meaning: 'Nhiều thứ', type: 'Phó từ' },
    { word: 'みんなで', reading: 'みんなで', romaji: 'minna de', meaning: 'Cùng nhau (tất cả mọi người)', type: 'Phó từ' },
    { word: 'けど', reading: 'けど', romaji: 'kedo', meaning: 'Nhưng (cách nói thân mật của が)', type: 'Liên từ' }
  ],
  21: [
    { word: '思います', reading: 'おもいます', romaji: 'omoimasu', meaning: 'Nghĩ rằng', type: 'Động từ' },
    { word: '言います', reading: 'いいます', romaji: 'iimasu', meaning: 'Nói', type: 'Động từ' },
    { word: '足ります', reading: 'たります', romaji: 'tarimasu', meaning: 'Đủ', type: 'Động từ' },
    { word: '勝ちます', reading: 'かちます', romaji: 'kachimasu', meaning: 'Thắng', type: 'Động từ' },
    { word: '負けます', reading: 'まけます', romaji: 'makemasu', meaning: 'Thua', type: 'Động từ' },
    { word: 'あります[お祭りが〜]', reading: 'あります', romaji: 'arimasu', meaning: 'Được tổ chức (lễ hội)', type: 'Động từ' },
    { word: '役に立ちます', reading: 'やくにたちます', romaji: 'yaku ni tachimasu', meaning: 'Có ích, hữu ích', type: 'Động từ' },
    { word: '交通', reading: 'こうつう', romaji: 'koutsuu', meaning: 'Giao thông', type: 'Danh từ' },
    { word: '最近', reading: 'さいきん', romaji: 'saikin', meaning: 'Gần đây', type: 'Danh từ' },
    { word: '多分', reading: 'たぶん', romaji: 'tabun', meaning: 'Có lẽ', type: 'Phó từ' },
    { word: 'きっと', reading: 'きっと', romaji: 'kitto', meaning: 'Chắc chắn', type: 'Phó từ' },
    { word: 'ほんとうに', reading: 'ほんとうに', romaji: 'hontouni', meaning: 'Thật sự', type: 'Phó từ' },
    { word: 'そんなに', reading: 'そんなに', romaji: 'sonnani', meaning: 'Không... lắm', type: 'Phó từ' },
    { word: '〜について', reading: '〜について', romaji: '~nitsuite', meaning: 'Về ~', type: 'Trợ từ' },
    { word: 'しかたがありません', reading: 'しかたがありません', romaji: 'shikata ga arimasen', meaning: 'Không còn cách nào khác', type: 'Mẫu câu' },
    { word: 'もちろん', reading: 'もちろん', romaji: 'mochiron', meaning: 'Tất nhiên', type: 'Phó từ' }
  ],
  22: [
    { word: 'します（ネクタイを〜）', reading: 'します', romaji: 'shimasu', meaning: 'Đeo (cà vạt)', type: 'Động từ' },
    { word: '眼鏡', reading: 'めがね', romaji: 'megane', meaning: 'Kính mắt', type: 'Danh từ' },
    { word: 'よく', reading: 'よく', romaji: 'yoku', meaning: 'Thường, hay (Làm gì đó)', type: 'Phó từ' },
    { word: 'おめでとうございます', reading: 'おめでとうございます', romaji: 'omedetou gozaimasu', meaning: 'Chúc mừng!', type: 'Mẫu câu' },
    { word: 'うーん', reading: 'うーん', romaji: 'uun', meaning: 'Ừm... (suy nghĩ)', type: 'Từ cảm thán' },
    { word: 'ダイニングキッチ', reading: 'ダイニングキッチ', romaji: 'dainingu kicchin', meaning: 'Bếp ăn', type: 'Danh từ' }
  ],
  23: [
    { word: '引きます', reading: 'ひきます', romaji: 'hikimasu', meaning: 'Kéo', type: 'Động từ' },
    { word: '触ります（ドアに〜）', reading: 'さわります', romaji: 'sawarimasu', meaning: 'Sờ, chạm vào', type: 'Động từ' },
    { word: '出ます（お釣りが〜）', reading: 'でます', romaji: 'demasu', meaning: 'Chạy ra (tiền thừa)', type: 'Động từ' },
    { word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: 'Buồn, cô đơn', type: 'Tính từ i' },
    { word: 'お湯', reading: 'おゆ', romaji: 'oyu', meaning: 'Nước nóng', type: 'Danh từ' },
    { word: '橋', reading: 'はし', romaji: 'hashi', meaning: 'Cây cầu', type: 'Danh từ' },
    { word: '歩道', reading: 'ほどう', romaji: 'hodou', meaning: 'Vỉa hè', type: 'Danh từ' },
    { word: '駐車場', reading: 'ちゅうしゃじょう', romaji: 'chuushajou', meaning: 'Bãi đỗ xe', type: 'Danh từ' },
    { word: '建物', reading: 'たてもの', romaji: 'tatemono', meaning: 'Tòa nhà', type: 'Danh từ' },
    { word: '何度も', reading: 'なんども', romaji: 'nandomo', meaning: 'Nhiều lần', type: 'Phó từ' },
    { word: '〜目', reading: '〜め', romaji: '~me', meaning: 'Thứ ~ (số thứ tự)', type: 'Hậu tố' }
  ],
  24: [
    { word: 'おじいさん', reading: 'おじいさん', romaji: 'ojiisan', meaning: 'Ông, cụ ông', type: 'Danh từ' },
    { word: 'おばあさん', reading: 'おばあさん', romaji: 'obaasan', meaning: 'Bà, cụ bà', type: 'Danh từ' },
    { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: 'Sự chuẩn bị', type: 'Danh từ' },
    { word: '意味', reading: 'いみ', romaji: 'imi', meaning: 'Ý nghĩa', type: 'Danh từ' },
    { word: 'お菓子', reading: 'おかし', romaji: 'okashi', meaning: 'Bánh kẹo', type: 'Danh từ' },
    { word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: 'Tất cả', type: 'Danh từ' },
    { word: '自分で', reading: 'じぶんで', romaji: 'jibun de', meaning: 'Tự mình', type: 'Phó từ' },
    { word: 'ほかに', reading: 'ほかに', romaji: 'hokani', meaning: 'Ngoài ra', type: 'Phó từ' },
    { word: 'お弁当', reading: 'おべんとう', romaji: 'obentou', meaning: 'Cơm hộp', type: 'Danh từ' }
  ],
  25: [
    { word: '年を取ります', reading: 'としをとります', romaji: 'toshi o torimasu', meaning: 'Thêm tuổi, già đi', type: 'Động từ' },
    { word: '足ります', reading: 'たります', romaji: 'tarimasu', meaning: 'Đủ', type: 'Động từ' },
    { word: '田舎', reading: 'いなか', romaji: 'inaka', meaning: 'Nông thôn, quê hương', type: 'Danh từ' },
    { word: 'チャンス', reading: 'チャンス', romaji: 'chansu', meaning: 'Cơ hội', type: 'Danh từ' },
    { word: '億', reading: 'おく', romaji: 'oku', meaning: 'Một trăm triệu', type: 'Danh từ' },
    { word: 'もし（〜たら）', reading: 'もし', romaji: 'moshi', meaning: 'Nếu (~ thì)', type: 'Phó từ' },
    { word: 'いくら（〜ても）', reading: 'いくら', romaji: 'ikura', meaning: 'Cho dù (~ đi nữa)', type: 'Phó từ' },
    { word: 'こと', reading: 'こと', romaji: 'koto', meaning: 'Sự việc, việc', type: 'Danh từ' },
    { word: 'どうぞお元気で', reading: 'どうぞおげんきで', romaji: 'douzo ogenki de', meaning: 'Chúc mạnh khỏe', type: 'Mẫu câu' }
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
  console.log(`Injected ${injected} new words into 19-25.`);
}

run();
