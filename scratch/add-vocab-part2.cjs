const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/nihongo-lessons.ts');
let code = fs.readFileSync(filePath, 'utf8');

const extraWords = {
  1: [
    { word: 'だれ', reading: 'だれ', romaji: 'dare', meaning: 'Ai', type: 'Từ để hỏi' },
    { word: 'どなた', reading: 'どなた', romaji: 'donata', meaning: 'Ai (lịch sự)', type: 'Từ để hỏi' },
    { word: 'おなまえは？', reading: 'おなまえは？', romaji: 'onamae wa?', meaning: 'Tên bạn là gì?', type: 'Mẫu câu' },
    { word: 'しつれいですが', reading: 'しつれいですが', romaji: 'shitsurei desu ga', meaning: 'Xin lỗi (khi hỏi thông tin)', type: 'Mẫu câu' },
    { word: 'インドネシア', reading: 'インドネシア', romaji: 'Indoneshia', meaning: 'Indonesia', type: 'Danh từ' },
    { word: 'タイ', reading: 'タイ', romaji: 'Tai', meaning: 'Thái Lan', type: 'Danh từ' },
    { word: 'ドイツ', reading: 'ドイツ', romaji: 'Doitsu', meaning: 'Đức', type: 'Danh từ' },
    { word: 'IMC', reading: 'アイエムシー', romaji: 'ai emu shii', meaning: 'Công ty IMC', type: 'Danh từ' },
    { word: 'パワーでんき', reading: 'パワーでんき', romaji: 'Pawaa denki', meaning: 'Công ty Power', type: 'Danh từ' },
    { word: 'ブラジルエアー', reading: 'ブラジルエアー', romaji: 'Burajiru eaa', meaning: 'Hàng không Brazil', type: 'Danh từ' },
    { word: 'AKC', reading: 'エーケーシー', romaji: 'ee kee shii', meaning: 'Viện nghiên cứu AKC', type: 'Danh từ' },
    { word: '神戸病院', reading: 'こうべびょういん', romaji: 'Koube byouin', meaning: 'Bệnh viện Kobe', type: 'Danh từ' },
    { word: 'さくら大学', reading: 'さくらだいがく', romaji: 'Sakura daigaku', meaning: 'Đại học Sakura', type: 'Danh từ' },
    { word: '富士大学', reading: 'ふじだいがく', romaji: 'Fuji daigaku', meaning: 'Đại học Fuji', type: 'Danh từ' }
  ],
  2: [
    { word: 'これ', reading: 'これ', romaji: 'kore', meaning: 'Cái này', type: 'Đại từ' },
    { word: 'それ', reading: 'それ', romaji: 'sore', meaning: 'Cái đó', type: 'Đại từ' },
    { word: 'あれ', reading: 'あれ', romaji: 'are', meaning: 'Cái kia', type: 'Đại từ' },
    { word: 'この～', reading: 'この～', romaji: 'kono~', meaning: '~ này', type: 'Đại từ' },
    { word: 'その～', reading: 'その～', romaji: 'sono~', meaning: '~ đó', type: 'Đại từ' },
    { word: 'あの～', reading: 'あの～', romaji: 'ano~', meaning: '~ kia', type: 'Đại từ' },
    { word: '本', reading: 'ほん', romaji: 'hon', meaning: 'Sách', type: 'Danh từ' },
    { word: '辞書', reading: 'じしょ', romaji: 'jisho', meaning: 'Từ điển', type: 'Danh từ' },
    { word: '雑誌', reading: 'ざっし', romaji: 'zasshi', meaning: 'Tạp chí', type: 'Danh từ' },
    { word: 'ノート', reading: 'ノート', romaji: 'nooto', meaning: 'Vở', type: 'Danh từ' },
    { word: '名刺', reading: 'めいし', romaji: 'meishi', meaning: 'Danh thiếp', type: 'Danh từ' },
    { word: '時計', reading: 'とけい', romaji: 'tokei', meaning: 'Đồng hồ', type: 'Danh từ' },
    { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: 'Cái ô', type: 'Danh từ' },
    { word: 'かばん', reading: 'かばん', romaji: 'kaban', meaning: 'Cặp, túi xách', type: 'Danh từ' },
    { word: 'カセットテープ', reading: 'カセットテープ', romaji: 'kasetto teepu', meaning: 'Băng cassette', type: 'Danh từ' },
    { word: 'テープレコーダー', reading: 'テープレコーダー', romaji: 'teepu rekoodaa', meaning: 'Máy ghi âm', type: 'Danh từ' },
    { word: 'カメラ', reading: 'カメラ', romaji: 'kamera', meaning: 'Máy ảnh', type: 'Danh từ' },
    { word: 'お土産', reading: 'おみやげ', romaji: 'omiyage', meaning: 'Quà lưu niệm', type: 'Danh từ' },
    { word: 'ちがいます', reading: 'ちがいます', romaji: 'chigaimasu', meaning: 'Không phải', type: 'Mẫu câu' },
    { word: 'そうですか', reading: 'そうですか', romaji: 'sou desu ka', meaning: 'Thế à?', type: 'Mẫu câu' }
  ],
  3: [
    { word: 'ここ', reading: 'ここ', romaji: 'koko', meaning: 'Chỗ này', type: 'Đại từ' },
    { word: 'そこ', reading: 'そこ', romaji: 'soko', meaning: 'Chỗ đó', type: 'Đại từ' },
    { word: 'あそこ', reading: 'あそこ', romaji: 'asoko', meaning: 'Chỗ kia', type: 'Đại từ' },
    { word: 'どこ', reading: 'どこ', romaji: 'doko', meaning: 'Ở đâu', type: 'Từ để hỏi' },
    { word: 'こちら', reading: 'こちら', romaji: 'kochira', meaning: 'Phía này', type: 'Đại từ' },
    { word: 'そちら', reading: 'そちら', romaji: 'sochira', meaning: 'Phía đó', type: 'Đại từ' },
    { word: 'あちら', reading: 'あちら', romaji: 'achira', meaning: 'Phía kia', type: 'Đại từ' },
    { word: 'どちら', reading: 'どちら', romaji: 'dochira', meaning: 'Phía nào', type: 'Từ để hỏi' },
    { word: '階段', reading: 'かいだん', romaji: 'kaidan', meaning: 'Cầu thang', type: 'Danh từ' },
    { word: 'エレベーター', reading: 'エレベーター', romaji: 'erebeetaa', meaning: 'Thang máy', type: 'Danh từ' },
    { word: 'エスカレーター', reading: 'エスカレーター', romaji: 'esukareetaa', meaning: 'Thang cuốn', type: 'Danh từ' },
    { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: 'Điện thoại', type: 'Danh từ' },
    { word: 'お国', reading: 'おくに', romaji: 'okuni', meaning: 'Đất nước', type: 'Danh từ' },
    { word: 'ワイン', reading: 'ワイン', romaji: 'wain', meaning: 'Rượu vang', type: 'Danh từ' },
    { word: 'たばこ', reading: 'たばこ', romaji: 'tabako', meaning: 'Thuốc lá', type: 'Danh từ' },
    { word: '～階', reading: '～かい（がい）', romaji: '~kai', meaning: 'Tầng thứ ~', type: 'Hậu tố' },
    { word: '何階', reading: 'なんがい', romaji: 'nangai', meaning: 'Tầng mấy', type: 'Từ để hỏi' },
    { word: 'すみません', reading: 'すみません', romaji: 'sumimasen', meaning: 'Xin lỗi', type: 'Mẫu câu' },
    { word: 'じゃ', reading: 'じゃ', romaji: 'ja', meaning: 'Thế thì', type: 'Liên từ' },
    { word: '～をみせてください', reading: '～をみせてください', romaji: '~o misete kudasai', meaning: 'Cho tôi xem ~', type: 'Mẫu câu' },
    { word: '～をください', reading: '～をください', romaji: '~o kudasai', meaning: 'Cho tôi ~', type: 'Mẫu câu' },
    { word: 'イタリア', reading: 'イタリア', romaji: 'Itaria', meaning: 'Ý', type: 'Danh từ' },
    { word: 'スイス', reading: 'スイス', romaji: 'Suisu', meaning: 'Thụy Sĩ', type: 'Danh từ' }
  ],
  4: [
    { word: 'デパート', reading: 'デパート', romaji: 'depaato', meaning: 'Bách hóa', type: 'Danh từ' },
    { word: '銀行', reading: 'ぎんこう', romaji: 'ginkou', meaning: 'Ngân hàng', type: 'Danh từ' },
    { word: '郵便局', reading: 'ゆうびんきょく', romaji: 'yuubinkyoku', meaning: 'Bưu điện', type: 'Danh từ' },
    { word: '図書館', reading: 'としょかん', romaji: 'toshokan', meaning: 'Thư viện', type: 'Danh từ' },
    { word: '美術館', reading: 'びじゅつかん', romaji: 'bijutsukan', meaning: 'Bảo tàng', type: 'Danh từ' },
    { word: '～時', reading: '～じ', romaji: '~ji', meaning: '~ Giờ', type: 'Hậu tố' },
    { word: '～分', reading: '～ふん', romaji: '~fun', meaning: '~ Phút', type: 'Hậu tố' },
    { word: '半', reading: 'はん', romaji: 'han', meaning: 'Rưỡi', type: 'Hậu tố' },
    { word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: 'Sáng', type: 'Danh từ' },
    { word: '午後', reading: 'ごご', romaji: 'gogo', meaning: 'Chiều', type: 'Danh từ' },
    { word: '朝', reading: 'あさ', romaji: 'asa', meaning: 'Sáng sớm', type: 'Danh từ' },
    { word: '昼', reading: 'ひる', romaji: 'hiru', meaning: 'Buổi trưa', type: 'Danh từ' },
    { word: '晩', reading: 'ばん', romaji: 'ban', meaning: 'Buổi tối', type: 'Danh từ' },
    { word: '夜', reading: 'よる', romaji: 'yoru', meaning: 'Ban đêm', type: 'Danh từ' },
    { word: 'おととい', reading: 'おととい', romaji: 'ototoi', meaning: 'Hôm kia', type: 'Danh từ' },
    { word: 'きのう', reading: 'きのう', romaji: 'kinou', meaning: 'Hôm qua', type: 'Danh từ' },
    { word: 'きょう', reading: 'きょう', romaji: 'kyou', meaning: 'Hôm nay', type: 'Danh từ' },
    { word: 'あした', reading: 'あした', romaji: 'ashita', meaning: 'Ngày mai', type: 'Danh từ' },
    { word: 'あさって', reading: 'あさって', romaji: 'asatte', meaning: 'Ngày kia', type: 'Danh từ' },
    { word: 'けさ', reading: 'けさ', romaji: 'kesa', meaning: 'Sáng nay', type: 'Danh từ' },
    { word: '今晩', reading: 'こんばん', romaji: 'konban', meaning: 'Tối nay', type: 'Danh từ' },
    { word: '北京', reading: 'ペキン', romaji: 'Pekin', meaning: 'Bắc Kinh', type: 'Danh từ' },
    { word: 'バンコク', reading: 'バンコク', romaji: 'Bankoku', meaning: 'Bangkok', type: 'Danh từ' },
    { word: 'ロンドン', reading: 'ロンドン', romaji: 'Rondon', meaning: 'Luân Đôn', type: 'Danh từ' }
  ],
  5: [
    { word: '先週', reading: 'せんしゅう', romaji: 'senshuu', meaning: 'Tuần trước', type: 'Danh từ' },
    { word: '今週', reading: 'こんしゅう', romaji: 'konshuu', meaning: 'Tuần này', type: 'Danh từ' },
    { word: '来週', reading: 'らいしゅう', romaji: 'raishuu', meaning: 'Tuần sau', type: 'Danh từ' },
    { word: '先月', reading: 'せんげつ', romaji: 'sengetsu', meaning: 'Tháng trước', type: 'Danh từ' },
    { word: '今月', reading: 'こんげつ', romaji: 'kongetsu', meaning: 'Tháng này', type: 'Danh từ' },
    { word: '来月', reading: 'らいげつ', romaji: 'raigetsu', meaning: 'Tháng sau', type: 'Danh từ' },
    { word: '去年', reading: 'きょねん', romaji: 'kyonen', meaning: 'Năm ngoái', type: 'Danh từ' },
    { word: '今年', reading: 'ことし', romaji: 'kotoshi', meaning: 'Năm nay', type: 'Danh từ' },
    { word: '来年', reading: 'らいねん', romaji: 'rainen', meaning: 'Năm sau', type: 'Danh từ' },
    { word: '～月', reading: '～がつ', romaji: '~gatsu', meaning: 'Tháng ~', type: 'Hậu tố' },
    { word: '何月', reading: 'なんがつ', romaji: 'nangatsu', meaning: 'Tháng mấy', type: 'Từ để hỏi' },
    { word: 'いつ', reading: 'いつ', romaji: 'itsu', meaning: 'Khi nào', type: 'Từ để hỏi' },
    { word: '誕生日', reading: 'たんじょうび', romaji: 'tanjoubi', meaning: 'Sinh nhật', type: 'Danh từ' },
    { word: '普通', reading: 'ふつう', romaji: 'futsuu', meaning: 'Tàu thường', type: 'Danh từ' },
    { word: '急行', reading: 'きゅうこう', romaji: 'kyuukou', meaning: 'Tốc hành', type: 'Danh từ' },
    { word: '特急', reading: 'とっきゅう', romaji: 'tokkyuu', meaning: 'Tốc hành đặc biệt', type: 'Danh từ' },
    { word: '次の', reading: 'つぎの', romaji: 'tsugi no', meaning: 'Tiếp theo', type: 'Danh từ' },
    { word: 'どういたしまして', reading: 'どういたしまして', romaji: 'dou itashimashite', meaning: 'Không có chi', type: 'Mẫu câu' },
    { word: '～番線', reading: '～ばんせん', romaji: '~bansen', meaning: 'Sân ga số ~', type: 'Hậu tố' }
  ]
};

const ls = code.split(/\\r?\\n/);
let ex = { 1: [], 2: [], 3: [], 4: [], 5: [] };
let id = -1;
let inW = false;

// Gather existing words
for (let l of ls) {
  let m = l.match(/\\s*id:\\s*(\\d+),/);
  if (m && !l.includes('L')) id = parseInt(m[1], 10);
  if (l.includes('words: [')) inW = true;
  if (inW && l.match(/word:\\s*'([^']+)'/)) {
    if (ex[id]) {
      ex[id].push(l.match(/word:\\s*'([^']+)'/)[1]);
    }
  }
  if (inW && l.match(/^\\s*\\],/)) inW = false;
}

let out = [];
let count = 0;
id = -1;
inW = false;

for (let l of ls) {
  out.push(l);
  let m = l.match(/\\s*id:\\s*(\\d+),/);
  if (m && !l.includes('L')) id = parseInt(m[1], 10);
  if (l.includes('words: [')) inW = true;
  
  if (inW && l.match(/^\\s*\\],/)) {
    if (extraWords[id]) {
      let nextNum = (ex[id] || []).length + 1;
      let inj = [];
      for (let w of extraWords[id]) {
        if (!ex[id].includes(w.word)) {
          let s = nextNum < 10 ? '0' + nextNum : nextNum.toString();
          inj.push("      { id: 'L" + id + "_" + s + "', word: '" + w.word + "', reading: '" + w.reading + "', romaji: '" + w.romaji + "', meaning: '" + w.meaning + "', type: '" + w.type + "' },");
          nextNum++;
        }
      }
      if (inj.length > 0) {
        out.pop(); // Remove the "    ]," line
        out.push(...inj);
        out.push(l); // Put "    ]," back
        count++;
      }
    }
    inW = false;
  }
}

console.log('Injected lessons:', count);
fs.writeFileSync(filePath, out.join('\\n'), 'utf8');
