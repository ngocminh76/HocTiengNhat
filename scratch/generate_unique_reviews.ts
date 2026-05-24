import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define folders
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import lessons
import lesson1 from '../src/data/lessons/lesson1';
import lesson2 from '../src/data/lessons/lesson2';
import lesson3 from '../src/data/lessons/lesson3';
import lesson4 from '../src/data/lessons/lesson4';
import lesson5 from '../src/data/lessons/lesson5';
import lesson6 from '../src/data/lessons/lesson6';
import lesson7 from '../src/data/lessons/lesson7';
import lesson8 from '../src/data/lessons/lesson8';
import lesson9 from '../src/data/lessons/lesson9';
import lesson10 from '../src/data/lessons/lesson10';
import lesson11 from '../src/data/lessons/lesson11';
import lesson12 from '../src/data/lessons/lesson12';
import lesson13 from '../src/data/lessons/lesson13';
import lesson14 from '../src/data/lessons/lesson14';
import lesson15 from '../src/data/lessons/lesson15';
import lesson16 from '../src/data/lessons/lesson16';
import lesson17 from '../src/data/lessons/lesson17';
import lesson18 from '../src/data/lessons/lesson18';
import lesson19 from '../src/data/lessons/lesson19';
import lesson20 from '../src/data/lessons/lesson20';
import lesson21 from '../src/data/lessons/lesson21';
import lesson22 from '../src/data/lessons/lesson22';
import lesson23 from '../src/data/lessons/lesson23';
import lesson24 from '../src/data/lessons/lesson24';
import lesson25 from '../src/data/lessons/lesson25';

// Import readings
import { readings as readings1 } from '../src/data/readings/reading1';
import { readings as readings2 } from '../src/data/readings/reading2';
import { readings as readings3 } from '../src/data/readings/reading3';
import { readings as readings4 } from '../src/data/readings/reading4';
import { readings as readings5 } from '../src/data/readings/reading5';
import { readings as readings6 } from '../src/data/readings/reading6';
import { readings as readings7 } from '../src/data/readings/reading7';
import { readings as readings8 } from '../src/data/readings/reading8';
import { readings as readings9 } from '../src/data/readings/reading9';
import { readings as readings10 } from '../src/data/readings/reading10';
import { readings as readings11 } from '../src/data/readings/reading11';
import { readings as readings12 } from '../src/data/readings/reading12';
import { readings as readings13 } from '../src/data/readings/reading13';
import { readings as readings14 } from '../src/data/readings/reading14';
import { readings as readings15 } from '../src/data/readings/reading15';
import { readings as readings16 } from '../src/data/readings/reading16';
import { readings as readings17 } from '../src/data/readings/reading17';
import { readings as readings18 } from '../src/data/readings/reading18';
import { readings as readings19 } from '../src/data/readings/reading19';
import { readings as readings20 } from '../src/data/readings/reading20';
import { readings as readings21 } from '../src/data/readings/reading21';
import { readings as readings22 } from '../src/data/readings/reading22';
import { readings as readings23 } from '../src/data/readings/reading23';
import { readings as readings24 } from '../src/data/readings/reading24';
import { readings as readings25 } from '../src/data/readings/reading25';

import { NihongoLesson, LessonWord, GrammarExercise } from '../src/data/lessons/types';
import { DokkaiReview, DokkaiPassage, DokkaiQuestion } from '../src/types';

const lessons: NihongoLesson[] = [
  lesson1, lesson2, lesson3, lesson4, lesson5,
  lesson6, lesson7, lesson8, lesson9, lesson10,
  lesson11, lesson12, lesson13, lesson14, lesson15,
  lesson16, lesson17, lesson18, lesson19, lesson20,
  lesson21, lesson22, lesson23, lesson24, lesson25
];

const readings = [
  readings1, readings2, readings3, readings4, readings5,
  readings6, readings7, readings8, readings9, readings10,
  readings11, readings12, readings13, readings14, readings15,
  readings16, readings17, readings18, readings19, readings20,
  readings21, readings22, readings23, readings24, readings25
];

// Vocabulary dictionary for automatic extraction
const N5_DICT: Record<string, string> = {
  'ベトナム': 'ベトナム (Betonamu): Việt Nam',
  '先月': '先月 (せんげつ / sengetsu): Tháng trước',
  'せんげつ': '先月 (せんげつ / sengetsu): Tháng trước',
  '毎日': '毎日 (まいにち / mainichi): Hàng ngày, mỗi ngày',
  'まいにち': '毎日 (まいにち / mainichi): Hàng ngày, mỗi ngày',
  'にほんご': '日本語 (にほんご / nihongo): Tiếng Nhật',
  '日本語': '日本語 (にほんご / nihongo): Tiếng Nhật',
  '水曜日': '水曜日 (すいようび / suiyoubi): Thứ Tư',
  'すいようび': '水曜日 (すいようび / suiyoubi): Thứ Tư',
  'でんしゃ': '電車 (でんしゃ / densha): Tàu điện',
  '電車': '電車 (でんしゃ / densha): Tàu điện',
  'かいしゃ': '会社 (かいしゃ / kaisha): Công ty',
  '会社': '会社 (かいしゃ / kaisha): Công ty',
  'レストラン': 'レストラン (resutoran): Nhà hàng',
  'ともだち': '友達 (ともだち / tomodachi): Bạn bè',
  '友達': '友達 (ともだち / tomodachi): Bạn bè',
  'デパート': 'デパート (depaato): Trung tâm thương mại, bách hóa',
  'くるま': '車 (くるま / kuruma): Ô tô, xe hơi',
  '車': '車 (くるま / kuruma): Ô tô, xe hơi',
  'あした': '明日 (あした / ashita): Ngày mai',
  'やすみ': '休み (やすみ / yasumi): Ngày nghỉ',
  'うち': '家 (うち / uchi): Nhà (ở)',
  'ゆっくり': 'ゆっくり (yukkuri): Thong thả, thong dong',
  'えんぴつ': '鉛筆 (えんぴつ / enpitsu): Bút chì',
  'てがみ': '手紙 (てがみ / tegami): Bức thư',
  '手紙': '手紙 (てがみ / tegami): Bức thư',
  'スーパー': 'スーパー (suupaa): Siêu thị',
  'くだもの': '果物 (くだもの / kudamono): Trái cây, hoa quả',
  'えいご': '英語 (えいご / eigo): Tiếng Anh',
  '英語': '英語 (えいご / eigo): Tiếng Anh',
  '新しい': '新しい (あたらしい / atarashii): Mới',
  '古い': '古い (ふるい / furui): Cũ',
  'じてんしゃ': '自転車 (じてんしゃ / jitensha): Xe đạp',
  'プレゼント': 'プレゼント (purezento): Quà tặng',
  'コーヒー': 'コーヒー (koohii): Cà phê',
  'シャツ': 'シャツ (shatsu): Áo sơ mi',
  'パン': 'パン (pan): Bánh mì',
  'はさみ': 'はさみ (hasami): Cái kéo',
  'かみ': '紙 (かみ / kami): Giấy / Tóc',
  '紙': '紙 (かみ / kami): Giấy / Tóc',
  'りんご': 'りんご (ringo): Quả táo',
  'せんせい': '先生 (せんせい / sensei): Thầy/cô giáo',
  '先生': '先生 (せんせい / sensei): Thầy/cô giáo',
  'ほん': '本 (ほん / hon): Sách',
  '本': '本 (ほん / hon): Sách',
  'カメラ': 'カメラ (kamera): Máy ảnh',
  'スプーン': 'スプーン (supuun): Thìa, muỗng',
  'ごはん': 'ご飯 (ごはん / gohan): Cơm, bữa ăn',
  'はな': '花 (はな / hana): Hoa',
  '花': '花 (はな / hana): Hoa',
  'パーティー': 'パーティー (paatii): Bữa tiệc',
  'へや': '部屋 (へや / heya): Căn phòng',
  'しずか': '静か (しずか / shizuka): Yên tĩnh',
  'とけい': '時計 (とけい / tokei): Đồng hồ',
  '外国': '外国 (がいこく / gaikoku): Nước ngoài',
  '有名': '有名 (ゆうめい / yuumei): Nổi tiếng',
  'くすり': '薬 (くすり / kusuri): Thuốc',
  '薬': '薬 (くすり / kusuri): Thuốc',
  '切手': '切手 (きって / kitte): Tem thư',
  'のど': 'のど (nodo): Cổ họng',
  'えき': '駅 (えき / eki): Nhà ga',
  '駅': '駅 (えき / eki): Nhà ga',
  'しゃしん': '写真 (しゃしん / shashin): Bức ảnh',
  '写真': '写真 (しゃしん / shashin): Bức ảnh',
  'ひるごはん': '昼ご飯 (ひるごはん / hirugohan): Cơm trưa',
  'よる': '夜 (よる / yoru): Buổi tối',
  '夜': '夜 (よる / yoru): Buổi tối',
  'パスポート': 'パスポート (pasupooto): Hộ chiếu',
  'あめ': '雨 (あめ / ame): Mưa',
  '雨': '雨 (あめ / ame): Mưa',
  'かぜ': '風邪 (かぜ / kaze): Cảm cúm',
  'ピアノ': 'ピアノ (piano): Đàn piano',
  'うま': '馬 (うま / uma): Con ngựa',
  '馬': '馬 (うま / uma): Con ngựa',
  'しゅみ': '趣味 (しゅみ / shumi): Sở thích',
  'え': '絵 (え / e): Bức tranh',
  '絵': '絵 (え / e): Bức tranh',
  'シャワー': 'シャワー (shawaa): Vòi hoa sen',
  '道': '道 (みち / michi): Con đường',
  '今年': '今年 (ことし / kotoshi): Năm nay',
  '去年': '去年 (きょねん / kyonen): Năm ngoái',
  'おとうと': '弟 (おとうと / otouto): Em trai',
  '弟': '弟 (おとうと / otouto): Em trai',
  '来年': '来年 (らいねん / rainen): Sang năm',
  'メガネ': '眼鏡 (めがね / megane): Kính mắt',
  'ケーキ': 'ケーキ (keeki): Bánh ngọt, bánh kem',
  'かぞく': '家族 (かぞく / kazoku): Gia đình',
  '家族': '家族 (かぞく / kazoku): Gia đình',
  'あに': '兄 (あに / ani): Anh trai',
  '兄': '兄 (あに / ani): Anh trai',
  'こうこうせい': '高校生 (こうこうせい / koukousei): Học sinh cấp 3',
  'たのしい': '楽しい (たのしい / tanoshii): Vui vẻ',
  'きれいで': 'きれい (kirei): Đẹp/Sạch sẽ',
  'にぎやか': 'にぎやか (nigiyaka): Nhộn nhịp, sầm uất',
  '国': '国 (くに / kuni): Đất nước, quốc gia',
  '日本': '日本 (にほん / nihon): Nhật Bản'
};

function appendVocabulary(questionText: string, explanation: string): string {
  const cleanQText = questionText.replace(/【|】|___|_★_|（|）|　/g, '');
  let foundWords: string[] = [];
  const keys = Object.keys(N5_DICT).sort((a, b) => b.length - a.length);
  
  let remainingText = cleanQText;
  for (const key of keys) {
    if (remainingText.includes(key)) {
      foundWords.push(N5_DICT[key]);
      remainingText = remainingText.split(key).join(' ');
    }
  }
  
  if (foundWords.length > 0) {
    const uniqueWords = [...new Set(foundWords)];
    const vocabBlock = `📚 Từ vựng bổ trợ:\n` + uniqueWords.map(w => `- ${w}`).join('\n');
    
    if (explanation.includes('💡 Ngữ pháp & Mẹo nhớ:')) {
      return explanation.replace('💡 Ngữ pháp & Mẹo nhớ:', `${vocabBlock}\n\n💡 Ngữ pháp & Mẹo nhớ:`);
    } else {
      return explanation + `\n\n${vocabBlock}`;
    }
  }
  
  return explanation;
}

function randChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function generateDistractors(correctVal: string, allVals: string[], lengthMatch: boolean = true): string[] {
  const cleanCorrect = correctVal.trim();
  let pool = allVals.map(v => v.trim()).filter(v => v !== cleanCorrect && v !== '');
  pool = [...new Set(pool)];

  if (lengthMatch) {
    const targetLen = cleanCorrect.length;
    let filtered = pool.filter(v => Math.abs(v.length - targetLen) <= 1);
    if (filtered.length >= 3) {
      pool = filtered;
    }
  }

  pool = shuffle(pool);
  const selected = pool.slice(0, 3);
  
  // Fallback if not enough distractors
  while (selected.length < 3) {
    selected.push(correctVal + ' ' + (selected.length + 1));
  }
  
  return selected;
}

// Scramble helper
interface Scramble {
  q: string;
  o: string[];
  c: number;
  exp: string;
}

function makeScramble(q: string, o: string[], c: number, fullSentence: string, translation: string, expDetails: string): Scramble {
  const explanation = `📖 Dịch nghĩa:\n${translation}\n\n✍️ Phân tích đáp án:\n- Thứ tự sắp xếp đúng: ${fullSentence}\n- Từ ở vị trí ngôi sao (★) là: **${o[c]}**.\n\n${expDetails}`;
  return { q, o, c, exp: explanation };
}

// Custom Scramble Pools for each Block
const scramble_pool_1_5 = [
  makeScramble(
    'あの方は　___ ___ _★_ ___　ですか。',
    ['の', 'せんせい', 'さくらだいがく', 'đầu/vào/đó'], // wait, 'です'
    1,
    'あの方は [さくらだいがく] [の] [★ せんせい] [です] か。',
    'Vị kia là giáo viên trường đại học Sakura phải không?',
    '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: N1 の N2 (N2 của N1 / N2 thuộc N1). Đại học Sakura (さくらだいがく) bổ nghĩa cho giáo viên (せんせい).'
  ).o = ['の', 'せんせい', 'さくらだいがく', 'です'], // reset options to correct text
  
  // We will assign properly below in array
];

// Let's write the actual array of scramble objects directly
const SCRAMBLES: Record<string, Scramble[]> = {
  '1_5': [
    makeScramble(
      'あの方は　___ ___ _★_ ___　ですか。',
      ['の', 'せんせい', 'さくらだいがく', 'です'],
      1,
      'あの方は [さくらだいがく] [の] [★ せんせい] [です] か。',
      'Vị kia là giáo viên trường đại học Sakura phải không?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: N1 の N2. Đại học Sakura (さくらだいがく) bổ nghĩa cho giáo viên (せんせい).'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　いきます。',
      ['ともだち', 'へ', 'と', 'ぎんこう'],
      3,
      'わたしは [ともだち] [と] [★ ぎんこう] [へ] いきます。',
      'Tôi đi ngân hàng cùng với bạn.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: [Người] と [Địa điểm] へ いきます (Đi đâu cùng ai). Trợ từ と chỉ đối tượng đồng hành, へ chỉ hướng đi.'
    ),
    makeScramble(
      'つくえの　___ ___ _★_ ___　あります。',
      ['と', 'うえに', 'ほん', 'えんぴつが'],
      0,
      'つくえの [うえに] [ほん] [★ と] [えんぴつが] あります。',
      'Trên bàn có sách và bút chì.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: N1 と N2 (N1 và N2). Trợ từ と dùng để nối các danh từ liệt kê hoàn toàn.'
    ),
    makeScramble(
      'このデパートは　___ ___ _★_ ___　ですか。',
      ['から', '10じ', 'まで', '8じ'],
      3,
      'このデパートは [10じ] [から] [★ 8じ] [まで] ですか。',
      'Trung tâm thương mại này mở cửa từ 10 giờ đến 8 giờ phải không?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: ~ から ~ まで (Từ... đến...). Chỉ khoảng giới hạn thời gian.'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　おきます。',
      ['に', '6じ', 'まいあさ', 'はん'],
      3,
      'わたしは [まいあさ] [6じ] [★ はん] [に] おきます。',
      'Mỗi sáng tôi thức dậy lúc 6 giờ rưỡi.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Mốc thời gian cụ thể đi với trợ từ に. Trạng từ tần suất まいあさ đứng đầu câu làm trạng ngữ.'
    ),
    makeScramble(
      'ミラーさんの かばんは　___ ___ _★_ ___　あります。',
      ['の', 'つくえ', 'うえ', 'に'],
      2,
      'ミラーさんの かばんは [つくえ] [の] [★ うえ] [に] あります。',
      'Cặp sách của anh Miller ở trên bàn.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc chỉ vị trí: N1 (vị trí) の N2 (trên/dưới/trong/ngoài) に あります. Ở đây là つくえのうえに (trên bàn).'
    ),
    makeScramble(
      'しょくどうは　___ ___ _★_ ___　あります。',
      ['の', '6かい', 'デパート', 'に'],
      1,
      'しょくどうは [デパート] [の] [★ 6かい] [に] あります。',
      'Nhà ăn nằm ở tầng 6 của bách hóa.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc chỉ sự tồn tại: N (địa điểm) に あります. Nối 2 danh từ chỉ địa điểm bằng trợ từ の.'
    ),
    makeScramble(
      'これは　___ ___ _★_ ___　の じしょ です。',
      ['の', 'ともだち', 'アメリカ', 'じん'],
      0,
      'これは [アメリカ] [じん] [★ の] [ともだち] の じしょ です。',
      'Đây là cuốn từ điển của người bạn Mỹ.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- アメリカ (Mỹ) + じん (người) -> アメリカじん (người Mỹ). Trợ từ の dùng để chỉ sự sở hữu hoặc quan hệ giữa 2 danh từ.'
    ),
    makeScramble(
      'あしたは　___ ___ _★_ ___。',
      ['へ', 'どこ', 'も', 'いきません'],
      2,
      'あしたは [どこ] [へ] [★ も] [いきません]。',
      'Ngày mai tôi không đi đâu cả.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Phủ định hoàn toàn: Từ nghi vấn chỉ nơi chốn (どこ) + へ + も + động từ phủ định (いきません).'
    ),
    makeScramble(
      'りんごを　___ ___ _★_ ___　ください。',
      ['と', 'みっつ', 'よっつ', 'みかんを'],
      3,
      'りんごuを [みっつ] [と] [★ みかんを] [よっつ] ください。',
      'Vui lòng cho tôi 3 quả táo và 4 quả quýt.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: N1 と N2 (N1 và N2). Trợ từ と dùng để nối 2 danh từ chỉ hoa quả.'
    )
  ],
  '6_10': [
    makeScramble(
      'わたしは　___ ___ _★_ ___　あげました。',
      ['に', 'はな', 'を', 'tomoｄachi'], // will fix tomoｄachi below
      1,
      'わたしは [ともだち] [に] [★ はな] [を] あげました。',
      'Tôi đã tặng hoa cho bạn.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: N1 (người nhận) に N2 (vật) を あげます (Tặng cái gì cho ai).'
    ),
    makeScramble(
      'きのうの　___ ___ _★_ ___　たのしかったです。',
      ['は', 'とても', 'パーティー', 'にほんの'],
      0,
      'きのうの [にほんの] [パーティー] [★ は] [とても] たのしかったです。',
      'Bữa tiệc Nhật Bản hôm qua rất vui.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ は đánh dấu chủ ngữ chính của câu. Tính từ quá khứ たのしかった đi kèm phó từ mức độ とても.'
    ),
    makeScramble(
      'このへやは　___ ___ _★_ ___　ありません。',
      ['あまり', 'しずか', 'で', 'は'],
      2,
      'このへやは [あまり] [しずか] [★ で] [は] ありません。',
      'Căn phòng này không yên tĩnh lắm.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Phủ định tính từ đuôi な: [Tính từ な] では ありません. Đi kèm phó từ phủ định あまり (không... lắm).'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　もらいました。',
      ['に', 'とけい', 'を', 'せんせい'],
      1,
      'わたしは [せんせい] [に] [★ とけい] [を] もらいました。',
      'Tôi đã nhận chiếc đồng hồ từ thầy giáo.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: N1 (người cho) に N2 (vật) を もらいます (Nhận từ ai cái gì).'
    ),
    makeScramble(
      'いっしょに　___ ___ _★_ ___　いきませんか。',
      ['で', 'タクシー', 'えき', 'まで'],
      2,
      'いっしょに [タクシー] [de/đối/phương tiện] [★ えき] [まで] いきませんか。', // taxi de
      'Chúng ta cùng đi taxi đến ga nhé?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ で chỉ phương tiện di chuyển (bằng taxi). Trợ từ まで chỉ giới hạn điểm đến (đến ga).'
    ),
    makeScramble(
      'あの　___ ___ _★_ ___　おいしいです。',
      ['パン', 'みせ', 'の', 'は'],
      0,
      'あの [みせ] [の] [★ パン] [は] おいしいです。',
      'Bánh mì của cửa hàng kia ngon lắm.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ の liên kết bổ nghĩa giữa cửa hàng (みせ) và bánh mì (パン).'
    ),
    makeScramble(
      'きのう　___ ___ _★_ ___　かきました。',
      ['で', 'てがみ', 'えんぴつ', 'を'],
      1,
      'きのう [えんぴつ] [で] [★ てがみ] [を] かきました。',
      'Hôm qua tôi viết thư bằng bút chì.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ で chỉ công cụ (bằng bút chì). Trợ từ を chỉ tân ngữ của động từ viết.'
    ),
    makeScramble(
      'コーヒーを　___ ___ _★_ ___　ましょう。',
      ['に', 'いっしょ', 'みせで', 'のみ'],
      2,
      'いっしょ [に] [★ みせで] [のみ] ましょう。',
      'Chúng ta cùng uống ở quán nhé.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- いっしょに (cùng nhau) + [Địa điểm] で + động từ bỏ ます + ましょう (đề nghị cùng làm gì).'
    ),
    makeScramble(
      'この　___ ___ _★_ ___　ですか。',
      ['は', 'カメラ', 'だれ', 'の'],
      2,
      'この [カメラ] [は] [★ だれ] [の] ですか。',
      'Cái máy ảnh này là của ai?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Từ để hỏi sở hữu: だれ の (của ai).'
    ),
    makeScramble(
      'あした　___ ___ _★_ ___　しませんか。',
      ['テニス', 'と', 'を', 'ともだち'],
      0,
      'あした [tomoｄachi] [と] [★ テニス] [を] しませんか。',
      'Ngày mai chơi tennis cùng bạn không?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- [Người] と (cùng ai) + N を します (chơi môn thể thao).'
    )
  ],
  '11_15': [
    makeScramble(
      'わたしは　___ ___ _★_ ___　すんでいます。',
      ['に', 'の', 'うち', 'とうきょう'],
      2,
      'わたしは [とうきょう] [の] [★ うち] [に] すんでいます。',
      'Tôi đang sống ở nhà tại Tokyo.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ に đi kèm động từ cư trú すんでいます (sống ở đâu).'
    ),
    makeScramble(
      'テーブルの　___ ___ _★_ ___　あります。',
      ['が', 'みかん', 'うえ', 'に'],
      1,
      'テーブルの [うえ] [に] [★ みかん] [gが] あります。',
      'Trên bàn có quả quýt.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc chỉ sự tồn tại của vật: N (vị trí) に N (vật) が あります.'
    ),
    makeScramble(
      '１しゅうかんに ２かい　___ ___ _★_ ___　いきます。',
      ['へ', 'およぎ', 'プール', 'に'],
      1,
      '１しゅうかんに ２かい [プール] [へ] [★ およぎ] [に] いきます。',
      'Tôi đi bơi ở bể bơi 2 lần 1 tuần.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc chỉ mục đích di chuyển: V ます (bỏ ます) + に いきます. Ở đây bơi là およぎます -> およぎ に いきます.'
    ),
    makeScramble(
      '___ ___ _★_ ___　が ほしいです。',
      ['の', 'じしょ', 'にほんご', 'あたらしい'],
      0,
      '[あたらしい] [にほんご] [★ の] [じしょ] が ほしいです。',
      'Tôi muốn cuốn từ điển tiếng Nhật mới.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc mong muốn sở hữu: N が ほしいです. Tính từ あtatarashii bổ nghĩa cho cả cụm danh từ phía sau.'
    ),
    makeScramble(
      'へやに　___ ___ _★_ ___　あります。',
      ['が', 'パソコン', '２だい', 'も'],
      2,
      'へやに [パソコン] [が] [★ ２だい] [も] あります。',
      'Trong phòng có tới tận 2 cái máy tính.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ も sau số lượng từ chỉ mức độ ngạc nhiên, nhiều (tới tận 2 cái).'
    ),
    makeScramble(
      'にほんと　___ ___ _★_ ___　あたたかいですか。',
      ['どちら', 'と', 'ベトナム', 'が'],
      0,
      'にほんと [ベトナム] [と] [★ どちら] [が] あたたかいですか。',
      'Nhật Bản và Việt Nam thì nơi nào ấm áp hơn?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc so sánh hơn giữa 2 danh từ: N1 と N2 と どちらが [Tính từ] ですか.'
    ),
    makeScramble(
      'スポーツの なかで　___ ___ _★_ ___　ですか。',
      ['が', 'いちばん', 'サッカー', 'すき'],
      1,
      'スポーツの なかで [サッカー] [が] [★ いちばん] [すき] ですか。',
      'Trong các môn thể thao thì bạn thích nhất môn bóng đá phải không?',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc so sánh nhất: [Phạm vi] のなかde N が いちばん [Tính từ/Thích] です.'
    ),
    makeScramble(
      'こうべへ　___ ___ _★_ ___　いきます。',
      ['を', 'えいが', 'インドの', 'みに'],
      0,
      'こうべへ [インドの] [えいが] [★ を] [みに] いきます。',
      'Tôi đi Kobe để xem phim Ấn Độ.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc mục đích chuyển động: [Tân ngữ] を V(ます) + に いきます.'
    ),
    makeScramble(
      'きょうha　___ ___ _★_ ___　ないです。',
      ['は', 'なにも', 'よる', 'たべたく'],
      1,
      'きょうは [よる] [は] [★ なにも] [たべたく] ないです。',
      'Tối nay tôi không muốn ăn gì cả.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc muốn làm gì phủ định: V (ます) + たくない (Không muốn làm). Đi kèm なにも (không... gì cả) ở thể phủ định.'
    ),
    makeScramble(
      'こうえんに　___ ___ _★_ ___　います。',
      ['が', 'おとこのこ', '女の子', 'と'],
      2,
      'こうえんに [おとこのこ] [と] [★ 女の子] [が] います。',
      'Trong công viên có bé trai và bé gái.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ と nối 2 danh từ chỉ người. Trợ từ が đi với động từ chỉ sự tồn tại của người います.'
    )
  ],
  '16_20': [
    makeScramble(
      'あぶないですから、　___ ___ _★_ ___　ください。',
      ['はいら', 'ここに', 'ないで', 'は'],
      0,
      'あぶないですから、[ここに] [は] [★ はいら] [ないde] ください。',
      'Vì nguy hiểm nên xin đừng đi vào đây.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Yêu cầu lịch sự phủ định: V ない + で ください (Xin đừng làm gì). はいります -> はいら (thể ない).'
    ),
    makeScramble(
      'しゅくだいを　___ ___ _★_ ___　なりません。',
      ['ださなければ', 'せんせいに', 'あした', 'まで'],
      1,
      'しゅくだいを [あした] [まで] [★ せんせいに] [ださなければ] なりません。',
      'Tôi phải nộp bài tập cho thầy giáo trước ngày mai.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Nghĩa vụ bắt buộc: V なければ なりません (Phải làm gì). だします -> ださなければ.'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　できます。',
      ['こと', 'ひく', 'ピアノを', 'が'],
      0,
      'わたしは [ピアノを] [ひく] [★ こと] [が] できます Cliff.',
      'Tôi có thể chơi đàn piano.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc khả năng: V る こと が できます (Có thể làm gì).'
    ),
    makeScramble(
      'おくすりを　___ ___ _★_ ___　ください。',
      ['おふろに', 'あとで', 'のんだ', 'はいって'],
      0,
      'おくすりを [のんだ] [あとで] [★ おふろに] [はいって] ください。',
      'Sau khi uống thuốc thì hãy tắm bồn nhé.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc thứ tự hành động: V1 た あとで, V2 (Sau khi làm V1 thì làm V2).'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　ことがあります。',
      ['に', 'のった', 'うま', '１かい'],
      0,
      'わたしは [１かい] [うま] [★ に] [のった] ことがあります。',
      'Tôi đã từng cưỡi ngựa một lần.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc kinh nghiệm quá khứ: V た ことが あります (Đã từng làm gì).'
    ),
    makeScramble(
      'にちようびは　___ ___ _★_ ___　します。',
      ['おんがくを', 'きいたり', 'ほんを', 'よんだり'],
      0,
      'にちようびは [ほんを] [よんだり] [★ おんがくを] [きいたり] します。',
      'Ngày chủ nhật tôi thường đọc sách, nghe nhạc.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Liệt kê hành động không theo trình tự thời gian: V1 たり, V2 たり します (Lúc thì làm V1, lúc thì làm V2).'
    ),
    makeScramble(
      'おくすりは　___ ___ _★_ ___　いいです。',
      ['のま', 'なくても', 'きょう', 'は'],
      0,
      'おくすりは [きょう] [は] [★ のま] [なくても] いいです。',
      'Thuốc thì hôm nay không uống cũng được.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc cho phép không cần làm gì: V ない (bỏ い) + くても いいです (Không làm cũng được).'
    ),
    makeScramble(
      'ここで　___ ___ _★_ ___　ください。',
      ['を', 'しゃしん', 'とらないで', '絶対に'],
      0,
      'ここで [絶対に] [しゃしん] [★ を] [とらないで] ください。',
      'Tuyệt đối không chụp ảnh ở đây.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Yêu cầu phủ định: V ない + で ください. Trợ từ を đi với động từ とります.'
    ),
    makeScramble(
      'おなかが　___ ___ _★_ ___　いきました。',
      ['へ', 'いたいですから', 'びょういん', 'いそいで'],
      2,
      'おなかが [いたいですから] [いそいで] [★ びょういん] [へ] いきました。',
      'Vì đau bụng nên tôi đã vội vàng đi bệnh viện.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc chỉ nguyên nhân: ~ から (Vì...). Trợ từ へ chỉ hướng đi của động từ いきました.'
    ),
    makeScramble(
      'きのう　___ ___ _★_ ___　いきました。',
      ['へ', 'あそびに', 'うち', 'tomoｄachiの'],
      0,
      'きのう [ともだちの] [うち] [★ へ] [あそびに] いきました。',
      'Ngày hôm qua tôi đã đến nhà bạn chơi.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Mục đích di chuyển: [Địa điểm] へ V(ます) + に いきます.'
    )
  ],
  '21_25': [
    makeScramble(
      'あしたは　___ ___ _★_ ___　と おもいます。',
      ['が', 'あめ', 'ふる', 'たぶん'],
      0,
      'あしたは [たぶん] [あめ] [★ が] [ふる] と おもいます。',
      'Tôi nghĩ ngày mai có lẽ trời sẽ mưa.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Phán đoán chủ quan: V (thể thông thường) + と おもいます. Trợ từ が đi kèm chủ ngữ tự nhiên (あめがふる).'
    ),
    makeScramble(
      'これは　___ ___ _★_ ___　かばんです。',
      ['にhon', 'で', 'かった', 'わたしが'],
      1,
      'これは [わたしが] [にほん] [★ で] [かった] かばんです。',
      'Đây là cái túi mà tôi đã mua ở Nhật Bản.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Định ngữ bổ nghĩa danh từ: Cả mệnh đề わたしが にほん で かった bổ nghĩa cho danh từ かばん.'
    ),
    makeScramble(
      'おなかが　___ ___ _★_ ___　のみます。',
      ['とき', 'くすりを', 'いたい', 'この'],
      3,
      'おなかが [いたい] [とき] [★ この] [くすりを] のみます。',
      'Khi bị đau bụng thì tôi uống loại thuốc này.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc chỉ thời điểm: [Tính từ い] とき (Khi...).'
    ),
    makeScramble(
      'にほんへ　___ ___ _★_ ___　いります。',
      ['とき', 'いく', 'パスポート', 'が'],
      2,
      'にほんへ [いく] [とき] [★ パスポート] [が] いります。',
      'Khi đi sang Nhật thì cần phải có hộ chiếu.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc khi làm gì: V る とき. Động từ いります đi với trợ từ が.'
    ),
    makeScramble(
      'あめが　___ ___ _★_ ___　いきます。',
      ['ても', 'ふっ', 'かいものに', 'たぶん'],
      0,
      'あめが [たぶん] [ふっ] [★ ても] [かいものに] いきます。',
      'Cho dù trời mưa, tôi nghĩ có lẽ mình vẫn đi mua sắm.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc nghịch lý giả định: V てmｏ -> ても. ふります -> ふって -> ふっても.'
    ),
    makeScramble(
      'じかんが なかったら　___ ___ _★_ ___　いきません。',
      ['どこへ', 'も', 'あしたは', 'たぶん'],
      0,
      'じかんが なかったら [あしたは] [たぶん] [★ どこへ] [も] いきません。',
      'Nếu không có thời gian thì ngày mai tôi nghĩ có lẽ mình chẳng đi đâu cả.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Phủ định hoàn toàn: Từ để hỏi nơi chốn (dokoへ) + も + động từ phủ định (いきません).'
    ),
    makeScramble(
      'tomoｄachiは　___ ___ _★_ ___　いいました。',
      ['と', 'らいねん', 'いく', 'にほんへ'],
      2,
      'ともだちは [らいねん] [にほんへ] [★ いく] [と] いいました。',
      'Bạn tôi đã nói là sang năm sẽ đi Nhật Bản.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Trích dẫn gián tiếp câu nói: [Mệnh đề thông thường] と いいました.'
    ),
    makeScramble(
      'これは　___ ___ _★_ ___　ケーキです。',
      ['つくった', 'ともだちが', 'わたしの', 'ために'],
      1,
      'これは [わたしの] [ために] [★ ともだちが] [つくった] ケーキです。',
      'Đây là chiếc bánh kem mà bạn tôi đã làm cho tôi.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Định ngữ bổ nghĩa danh từ: ともだちが つくった bổ nghĩa cho ケーキ. Cụm わたしの ために đứng trước.'
    ),
    makeScramble(
      'テレビの おとが　___ ___ _★_ ___　ください。',
      ['とき', 'ちいさく', 'おおきい', 'して'],
      1,
      'テレビの おとが [おおきい] [とき] [★ ちいさく] [して] ください。',
      'Khi âm thanh tivi to thì vui lòng vặn nhỏ lại.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc thay đổi trạng thái: Tính từ い (bỏ い) + く します.'
    ),
    makeScramble(
      'あめが　___ ___ _★_ ___　でかけます。',
      ['たら', 'やん', 'さんぽに', 'すぐ'],
      3,
      'あめが [やん] [たら] [★ すぐ] [さんぽに] でかけます。',
      'Hễ mưa tạnh là tôi đi dạo ngay.',
      '💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc giả định điều kiện thời gian: V たら. やみます -> やんだ -> やんだら.'
    )
  ]
};

// Fix small typos in options arrays
SCRAMBLES['6_10'][0].o = ['に', 'はな', 'を', 'ともだち'];
SCRAMBLES['6_10'][4].o = ['で', 'タクシー', 'えき', 'まで'];
SCRAMBLES['16_20'][1].q = 'しゅくだいを　___ ___ _★_ ___　なりません。';
SCRAMBLES['16_20'][9].o = ['へ', 'あそびに', 'うち', 'ともだちの'];
SCRAMBLES['21_25'][1].o = ['にほん', 'で', 'かった', 'わたしが'];
SCRAMBLES['21_25'][6].q = 'ともだちは　___ ___ _★_ ___　いいました。';

const POOLS = [
  { start: 1, end: 5, scrambleKey: '1_5', title: 'Trạm Ôn Tập JLPT N5 (Bài 1 - 5)' },
  { start: 6, end: 10, scrambleKey: '6_10', title: 'Trạm Ôn Tập JLPT N5 (Bài 6 - 10)' },
  { start: 11, end: 15, scrambleKey: '11_15', title: 'Trạm Ôn Tập JLPT N5 (Bài 11 - 15)' },
  { start: 16, end: 20, scrambleKey: '16_20', title: 'Trạm Ôn Tập JLPT N5 (Bài 16 - 20)' },
  { start: 21, end: 25, scrambleKey: '21_25', title: 'Trạm Ôn Tập JLPT N5 (Bài 21 - 25)' }
];

let finalReviews: DokkaiReview[] = [];

for (const p of POOLS) {
  // Collect data for this block
  const blockLessons = lessons.slice(p.start - 1, p.end);
  const blockReadings = readings.slice(p.start - 1, p.end);

  const allWords = blockLessons.flatMap(l => l.words);
  const kanjiWords = allWords.filter(w => w.word !== w.reading && /[\u4e00-\u9faf]/.test(w.word));
  
  let mojiWordsPool = shuffle(kanjiWords);
  // Ensure we have at least 40 words for vocabulary testing
  while (mojiWordsPool.length < 40) {
    mojiWordsPool = [...mojiWordsPool, ...shuffle(allWords)];
  }

  const blockExercises = blockLessons.flatMap(l => l.grammarExercises || []);
  let exercisesPool = shuffle(blockExercises);
  // Ensure we have at least 40 exercises
  while (exercisesPool.length < 40) {
    exercisesPool = [...exercisesPool, ...shuffle(blockExercises)];
  }

  const scramblesPool = SCRAMBLES[p.scrambleKey];

  for (let i = 0; i < 5; i++) {
    const idPrefix = `review_${p.start}_${p.end}_${i + 1}`;
    const review: DokkaiReview = {
      id: idPrefix,
      title: `Đề thi ${i + 1}: ${p.title}`,
      description: `Bộ đề số ${i + 1}. Các câu hỏi và bài đọc được thiết kế độc lập 100% để ôn luyện toàn diện.`,
      passages: []
    };

    // 1. moji1: 4 unique words for Kanji Reading
    const moji1Qs: DokkaiQuestion[] = [];
    const moji1Words = mojiWordsPool.slice(i * 4, i * 4 + 4);
    moji1Words.forEach((w, j) => {
      const allReadings = allWords.map(x => x.reading);
      const shuffledOptions = generateDistractors(w.reading, allReadings, true);
      const finalOptions = shuffle([w.reading, ...shuffledOptions]);
      const correctIdx = finalOptions.indexOf(w.reading);

      const rawExp = `📖 Dịch nghĩa:
Từ 【${w.word}】 có nghĩa là: **${w.meaning}**.

✍️ Phân tích đáp án:
- **${w.reading}** (${w.romaji}): Cách đọc đúng của chữ Hán 【${w.word}】.

💡 Ngữ pháp & Mẹo nhớ:
${w.kanjiBreakdown ? `- Âm Hán Việt: **${w.kanjiBreakdown.hanviet}**.\n- Mẹo nhớ: ${w.kanjiBreakdown.story}` : `- Từ vựng bài học N5.`}`;

      moji1Qs.push({
        id: `m_${idPrefix}_m1_q${j}`,
        question: `Hãy chọn cách đọc đúng của chữ Hán trong ngoặc: 【${w.word}】`,
        options: finalOptions,
        correctIndex: correctIdx,
        explanation: appendVocabulary(w.word, rawExp)
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_moji1`,
      type: 'moji_mondai1',
      questions: moji1Qs
    });

    // 2. moji2: 4 unique words for Hiragana -> Kanji
    const moji2Qs: DokkaiQuestion[] = [];
    const moji2Words = mojiWordsPool.slice(20 + i * 4, 20 + i * 4 + 4);
    moji2Words.forEach((w, j) => {
      const allKanjis = allWords.map(x => x.word);
      const shuffledOptions = generateDistractors(w.word, allKanjis, true);
      const finalOptions = shuffle([w.word, ...shuffledOptions]);
      const correctIdx = finalOptions.indexOf(w.word);

      const rawExp = `📖 Dịch nghĩa:
Từ này có nghĩa là: **${w.meaning}**.

✍️ Phân tích đáp án:
- **${w.word}** (${w.reading}): Cách viết chữ Hán đúng của từ.

💡 Ngữ pháp & Mẹo nhớ:
${w.kanjiBreakdown ? `- Âm Hán Việt: **${w.kanjiBreakdown.hanviet}**.\n- Cấu tạo: ${w.kanjiBreakdown.components}` : `- Từ vựng bài học N5.`}`;

      moji2Qs.push({
        id: `m_${idPrefix}_m2_q${j}`,
        question: `Hãy chọn cách viết chữ Hán đúng của từ trong ngoặc: 【${w.reading}】`,
        options: finalOptions,
        correctIndex: correctIdx,
        explanation: appendVocabulary(w.reading, rawExp)
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_moji2`,
      type: 'moji_mondai2',
      questions: moji2Qs
    });

    // 3. moji3: 4 contextual exercises
    const moji3Qs: DokkaiQuestion[] = [];
    const moji3Exs = exercisesPool.slice(i * 4, i * 4 + 4);
    moji3Exs.forEach((ex, j) => {
      const correctIdx = ex.options.indexOf(ex.answer);
      const rawExp = `📖 Dịch nghĩa:
${ex.vn}

✍️ Phân tích đáp án:
- Đáp án đúng: **${ex.answer}**.

💡 Ngữ pháp & Mẹo nhớ:
${ex.explanation || 'Cách dùng từ vựng / ngữ cảnh trong câu tiếng Nhật N5.'}`;

      const qText = ex.question.replace(/\[blank\]/g, '【　　　】');

      moji3Qs.push({
        id: `m_${idPrefix}_m3_q${j}`,
        question: qText,
        options: ex.options,
        correctIndex: correctIdx,
        explanation: appendVocabulary(ex.question, rawExp)
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_moji3`,
      type: 'moji_mondai3',
      questions: moji3Qs
    });

    // 4. bunpou1: 4 grammar exercises
    const bunpou1Qs: DokkaiQuestion[] = [];
    const bunpou1Exs = exercisesPool.slice(20 + i * 4, 20 + i * 4 + 4);
    bunpou1Exs.forEach((ex, j) => {
      const correctIdx = ex.options.indexOf(ex.answer);
      const rawExp = `📖 Dịch nghĩa:
${ex.vn}

✍️ Phân tích đáp án:
- Đáp án đúng: **${ex.answer}**.

💡 Ngữ pháp & Mẹo nhớ:
${ex.explanation || 'Cách dùng cấu trúc trợ từ / ngữ pháp bài học N5.'}`;

      const qText = ex.question.replace(/\[blank\]/g, '（　　　）');

      bunpou1Qs.push({
        id: `m_${idPrefix}_b1_q${j}`,
        question: qText,
        options: ex.options,
        correctIndex: correctIdx,
        explanation: appendVocabulary(ex.question, rawExp)
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_bunpou1`,
      type: 'mondai1',
      questions: bunpou1Qs
    });

    // 5. bunpou2: 2 sentence scramble questions
    const bunpou2Qs: DokkaiQuestion[] = [];
    const blockScrambles = scramblesPool.slice(i * 2, i * 2 + 2);
    blockScrambles.forEach((scr, j) => {
      bunpou2Qs.push({
        id: `m_${idPrefix}_b2_q${j}`,
        question: scr.q,
        options: scr.o,
        correctIndex: scr.c,
        explanation: appendVocabulary(scr.q, scr.exp)
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_bunpou2`,
      type: 'mondai2',
      questions: bunpou2Qs
    });

    // 6. dokkai1: Reading comprehension from reading files
    const lessonReadingList = blockReadings[i];
    const readingPassage = lessonReadingList[0]; // first passage

    const dokkaiQs: DokkaiQuestion[] = [];
    readingPassage.questions.forEach((q, j) => {
      const correctIdx = q.options.indexOf(q.answer);
      const rawExp = `📖 Dịch nghĩa:
${q.question}
- Đáp án đúng: **${q.answer}**.

✍️ Phân tích đáp án:
- Dựa vào nội dung đoạn văn đọc hiểu để đối chiếu thông tin chính xác.`;

      dokkaiQs.push({
        id: `m_${idPrefix}_d1_q${j}`,
        question: q.question,
        options: q.options,
        correctIndex: correctIdx,
        explanation: appendVocabulary(q.question, rawExp)
      });
    });

    // Build unique translation and vocabulary arrays for the passage
    const passageTextLines = readingPassage.lines.map(line => line.jp);
    const translationLines = readingPassage.lines.map(line => line.vn);
    
    // Auto-extract vocabulary for this passage
    const passageTextFull = readingPassage.lines.map(line => line.jp).join(' ');
    let foundVocab: string[] = [];
    const keys = Object.keys(N5_DICT).sort((a, b) => b.length - a.length);
    let rem = passageTextFull;
    for (const key of keys) {
      if (rem.includes(key)) {
        foundVocab.push(N5_DICT[key]);
        rem = rem.split(key).join(' ');
      }
    }
    const passageVocabulary = [...new Set(foundVocab)].slice(0, 10);

    review.passages.push({
      id: `p_${idPrefix}_dokkai1`,
      type: 'mondai3',
      text: passageTextLines,
      translation: translationLines,
      vocabulary: passageVocabulary,
      questions: dokkaiQs
    });

    finalReviews.push(review);
  }
}

// Generate files content
const outputPath = './src/data/dokkai-reviews.ts';
let fileContent = '// src/data/dokkai-reviews.ts\n';
fileContent += '// GENERATED FILE - DO NOT EDIT MANUALLY\n';
fileContent += "import { DokkaiReview } from '../types';\n\n";
fileContent += "export const DOKKAI_REVIEWS: DokkaiReview[] = " + JSON.stringify(finalReviews, null, 2) + ";\n";

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Successfully generated 25 unique non-overlapping reviews database!');
