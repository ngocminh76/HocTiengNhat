// src/data/kanji-n5.ts
// 80 Kanji chuẩn JLPT N5 — verified readings, vocab, examples, mnemonics
import type { KanjiItem } from '../types';

// Ảnh từ Pexels CDN — public, không cần API key, CORS open
const P = (id: number, w = 400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=260&fit=crop`;

const IMAGES: Record<number, string> = {
  1:  P(1646953),   // 一 — ngọn nến đơn
  2:  P(1367269),   // 二 — hai người bạn
  3:  P(39811),     // 三 — tam giác núi
  4:  P(1671325),   // 四 — bốn mùa hoa
  5:  P(4480728),   // 五 — bàn tay 5 ngón
  6:  P(4792733),   // 六 — tổ ong lục giác
  7:  P(1525041),   // 七 — cầu vồng 7 màu
  8:  P(3825903),   // 八 — bạch tuộc 8 cánh
  9:  P(617278),    // 九 — con mèo (9 mạng)
  10: P(5428833),   // 十 — đám đông
  11: P(36717),     // 日 — bầu trời nắng
  12: P(238651),    // 月 — trăng tròn
  13: P(51152),     // 火 — lửa trại
  14: P(40446),     // 水 — thác nước
  15: P(167698),    // 木 — rừng cây
  16: P(210600),    // 金 — đồng xu vàng
  17: P(1416662),   // 土 — tay nắm đất
  18: P(1563968),   // 年 — lá mùa thu
  19: P(1095601),   // 時 — đồng hồ cổ
  20: P(280277),    // 分 — đồng hồ bấm giờ
  21: P(302083),    // 人 — hai người đứng
  22: P(415829),    // 本 — sách vở
  23: P(159711),    // 山 — núi non
  24: P(547115),    // 川 — dòng sông
  25: P(33044),     // 田 — ruộng lúa
  26: P(1108099),   // 目 — con mắt
  27: P(374703),    // 口 — miệng mở
  28: P(1438761),   // 手 — bàn tay
  29: P(1059120),   // 足 — đôi chân
  30: P(35537),     // 大 — to lớn
};

export const KANJI_N5: KanjiItem[] = [
  {
    id: 1, kanji: '一', on: 'イチ', on_rom: 'ichi',
    kun: 'ひと・ひとつ', kun_rom: 'hito / hitotsu',
    meaning: 'Một (1)', group: '数字',
    mnemonic: 'Một nét ngang duy nhất → số MỘT',
    imageUrl: IMAGES[1],
    vocab: [
      { word: '一人', reading: 'ひとり', romaji: 'hitori', meaning: 'một người' },
      { word: '一日', reading: 'いちにち', romaji: 'ichinichi', meaning: 'một ngày' },
      { word: '一つ', reading: 'ひとつ', romaji: 'hitotsu', meaning: 'một cái' },
    ],
    example: { jp: '一人で勉強します。', romaji: 'Hitori de benkyou shimasu.', vn: 'Tôi học một mình.' },
    grammar: { pattern: '〜人 (にん／り)', note: '一人 (ひとり) đặc biệt — không đọc là いちにん' },
  },
  {
    id: 2, kanji: '二', on: 'ニ', on_rom: 'ni',
    kun: 'ふた・ふたつ', kun_rom: 'futa / futatsu',
    meaning: 'Hai (2)', group: '数字',
    mnemonic: 'Hai nét ngang chồng lên → số HAI',
    imageUrl: IMAGES[2],
    vocab: [
      { word: '二人', reading: 'ふたり', romaji: 'futari', meaning: 'hai người' },
      { word: '二日', reading: 'ふつか', romaji: 'futsuka', meaning: 'ngày mồng hai' },
      { word: '二つ', reading: 'ふたつ', romaji: 'futatsu', meaning: 'hai cái' },
    ],
    example: { jp: '二人で食べましょう。', romaji: 'Futari de tabemashou.', vn: 'Hãy cùng nhau ăn (hai người).' },
    grammar: { pattern: '〜で (together with)', note: '二人で = cùng nhau, で chỉ bối cảnh' },
  },
  {
    id: 3, kanji: '三', on: 'サン', on_rom: 'san',
    kun: 'み・みっつ', kun_rom: 'mi / mittsu',
    meaning: 'Ba (3)', group: '数字',
    mnemonic: 'Ba nét ngang xếp chồng → số BA',
    imageUrl: IMAGES[3],
    vocab: [
      { word: '三人', reading: 'さんにん', romaji: 'sannin', meaning: 'ba người' },
      { word: '三日', reading: 'みっか', romaji: 'mikka', meaning: 'ngày mồng ba' },
      { word: '三時', reading: 'さんじ', romaji: 'sanji', meaning: '3 giờ' },
    ],
    example: { jp: '三時に会いましょう。', romaji: 'Sanji ni aimashou.', vn: 'Hãy gặp nhau lúc 3 giờ.' },
    grammar: { pattern: '〜時に (at [time])', note: 'に sau thời gian = vào lúc. 三時に = vào lúc 3 giờ' },
  },
  {
    id: 4, kanji: '四', on: 'シ・ヨン', on_rom: 'shi / yon',
    kun: 'よ・よつ', kun_rom: 'yo / yotsu',
    meaning: 'Bốn (4)', group: '数字',
    mnemonic: 'Tránh đọc し (shi) vì nghe như 死 (chết) → nên nói よん trong hội thoại',
    imageUrl: IMAGES[4],
    vocab: [
      { word: '四人', reading: 'よにん', romaji: 'yonin', meaning: 'bốn người' },
      { word: '四日', reading: 'よっか', romaji: 'yokka', meaning: 'ngày mồng bốn' },
      { word: '四月', reading: 'しがつ', romaji: 'shigatsu', meaning: 'tháng Tư' },
    ],
    example: { jp: '四月に日本へ行きます。', romaji: 'Shigatsu ni Nihon e ikimasu.', vn: 'Tôi đi Nhật vào tháng Tư.' },
    grammar: { pattern: '〜へ行きます', note: 'へ + 行きます = đến/đi đến [nơi nào đó]' },
  },
  {
    id: 5, kanji: '五', on: 'ゴ', on_rom: 'go',
    kun: 'いつ・いつつ', kun_rom: 'itsu / itsutsu',
    meaning: 'Năm (5)', group: '数字',
    mnemonic: '五 trông như bàn tay 5 ngón → số NĂM',
    imageUrl: IMAGES[5],
    vocab: [
      { word: '五人', reading: 'ごにん', romaji: 'gonin', meaning: 'năm người' },
      { word: '五日', reading: 'いつか', romaji: 'itsuka', meaning: 'ngày mồng năm' },
      { word: '五時', reading: 'ごじ', romaji: 'goji', meaning: '5 giờ' },
    ],
    example: { jp: '五時に起きます。', romaji: 'Goji ni okimasu.', vn: 'Tôi thức dậy lúc 5 giờ.' },
    grammar: { pattern: '〜に起きます', note: '起きます (okimasu) = thức dậy, dùng với giờ giấc' },
  },
  {
    id: 6, kanji: '六', on: 'ロク', on_rom: 'roku',
    kun: 'む・むつ', kun_rom: 'mu / mutsu',
    meaning: 'Sáu (6)', group: '数字',
    mnemonic: 'ROK-u → nhớ như chữ "rock" âm nhạc',
    imageUrl: IMAGES[6],
    vocab: [
      { word: '六人', reading: 'ろくにん', romaji: 'rokunin', meaning: 'sáu người' },
      { word: '六日', reading: 'むいか', romaji: 'muika', meaning: 'ngày mồng sáu' },
      { word: '六月', reading: 'ろくがつ', romaji: 'rokugatsu', meaning: 'tháng Sáu' },
    ],
    example: { jp: '六月は雨が多いです。', romaji: 'Rokugatsu wa ame ga ooi desu.', vn: 'Tháng Sáu có nhiều mưa.' },
    grammar: { pattern: '〜は〜が多いです', note: 'は chủ đề, が chủ ngữ trong mệnh đề con' },
  },
  {
    id: 7, kanji: '七', on: 'シチ・ナナ', on_rom: 'shichi / nana',
    kun: 'なな・ななつ', kun_rom: 'nana / nanatsu',
    meaning: 'Bảy (7)', group: '数字',
    mnemonic: 'Hay dùng なな hơn しち để tránh nhầm với một (ichi)',
    imageUrl: IMAGES[7],
    vocab: [
      { word: '七人', reading: 'しちにん', romaji: 'shichinin', meaning: 'bảy người' },
      { word: '七日', reading: 'なのか', romaji: 'nanoka', meaning: 'ngày mồng bảy' },
      { word: '七時', reading: 'しちじ', romaji: 'shichiji', meaning: '7 giờ' },
    ],
    example: { jp: '七時に学校へ行きます。', romaji: 'Shichiji ni gakkou e ikimasu.', vn: 'Tôi đến trường lúc 7 giờ.' },
    grammar: { pattern: '〜時に〜へ行きます', note: 'Kết hợp: thời gian + địa điểm + động từ đi' },
  },
  {
    id: 8, kanji: '八', on: 'ハチ', on_rom: 'hachi',
    kun: 'や・やつ', kun_rom: 'ya / yatsu',
    meaning: 'Tám (8)', group: '数字',
    mnemonic: '八 mở ra hai hướng → số 8 cũng đối xứng',
    imageUrl: IMAGES[8],
    vocab: [
      { word: '八人', reading: 'はちにん', romaji: 'hachinin', meaning: 'tám người' },
      { word: '八日', reading: 'ようか', romaji: 'youka', meaning: 'ngày mồng tám' },
      { word: '八月', reading: 'はちがつ', romaji: 'hachigatsu', meaning: 'tháng Tám' },
    ],
    example: { jp: '八月は暑いです。', romaji: 'Hachigatsu wa atsui desu.', vn: 'Tháng Tám thì nóng.' },
    grammar: { pattern: '〜は〜いです (tính từ -i)', note: '暑い (atsui) = nóng → 暑いです = thì nóng' },
  },
  {
    id: 9, kanji: '九', on: 'ク・キュウ', on_rom: 'ku / kyuu',
    kun: 'ここの・ここのつ', kun_rom: 'kokono / kokonotsu',
    meaning: 'Chín (9)', group: '数字',
    mnemonic: 'キュウ → "Q" → queue (xếp hàng chờ số 9)',
    imageUrl: IMAGES[9],
    vocab: [
      { word: '九人', reading: 'きゅうにん', romaji: 'kyuunin', meaning: 'chín người' },
      { word: '九日', reading: 'ここのか', romaji: 'kokonoka', meaning: 'ngày mồng chín' },
      { word: '九時', reading: 'くじ', romaji: 'kuji', meaning: '9 giờ' },
    ],
    example: { jp: '九時に寝ます。', romaji: 'Kuji ni nemasu.', vn: 'Tôi đi ngủ lúc 9 giờ.' },
    grammar: { pattern: '〜に寝ます', note: '寝ます (nemasu) = ngủ → hay dùng với giờ giấc' },
  },
  {
    id: 10, kanji: '十', on: 'ジュウ', on_rom: 'juu',
    kun: 'とお・と', kun_rom: 'too / to',
    meaning: 'Mười (10)', group: '数字',
    mnemonic: 'Nét dọc cắt ngang → dấu + → 10!',
    imageUrl: IMAGES[10],
    vocab: [
      { word: '十人', reading: 'じゅうにん', romaji: 'juunin', meaning: 'mười người' },
      { word: '十日', reading: 'とおか', romaji: 'tooka', meaning: 'ngày mồng mười' },
      { word: '二十', reading: 'にじゅう', romaji: 'nijuu', meaning: 'hai mươi' },
    ],
    example: { jp: 'クラスに十人います。', romaji: 'Kurasu ni juunin imasu.', vn: 'Trong lớp có mười người.' },
    grammar: { pattern: '〜に〜います', note: 'います = tồn tại (người/ĐV). に = ở [nơi]' },
  },
  {
    id: 11, kanji: '日', on: 'ニチ・ジツ', on_rom: 'nichi / jitsu',
    kun: 'ひ・か', kun_rom: 'hi / ka',
    meaning: 'Mặt Trời, Ngày', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Hình dạng của mặt trời (nét mờ ở giữa là vệt sáng)',
    imageUrl: IMAGES[11],
    vocab: [
      { word: '日曜日', reading: 'にちようび', romaji: 'nichiyoubi', meaning: 'Chủ nhật' },
      { word: '今日', reading: 'きょう', romaji: 'kyou', meaning: 'Hôm nay' },
      { word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: 'Mỗi ngày' },
    ],
    example: { jp: '日曜日は休みです。', romaji: 'Nichiyoubi wa yasumi desu.', vn: 'Chủ nhật là ngày nghỉ.' },
    grammar: { pattern: '〜は休みです', note: '休み (yasumi) = sự nghỉ ngơi, ngày nghỉ' },
  },
  {
    id: 12, kanji: '月', on: 'ゲツ・ガツ', on_rom: 'getsu / gatsu',
    kun: 'つき', kun_rom: 'tsuki',
    meaning: 'Mặt Trăng, Tháng', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Cổ nhân vẽ Mặt trang khuyết có những đám mây tạt ngang',
    imageUrl: IMAGES[12],
    vocab: [
      { word: '月曜日', reading: 'げつようび', romaji: 'getsuyoubi', meaning: 'Thứ hai' },
      { word: '今月', reading: 'こんげつ', romaji: 'kongetsu', meaning: 'Tháng này' },
      { word: '来月', reading: 'らいげつ', romaji: 'raigetsu', meaning: 'Tháng sau' },
    ],
    example: { jp: '来月、日本へ行きます。', romaji: 'Raigetsu, Nihon e ikimasu.', vn: 'Tháng sau tôi đi Nhật.' },
    grammar: { pattern: 'Thời gian + Động từ', note: 'Thời gian tương đối (hôm nay, tháng sau...) KHÔNG đi cùng に.' },
  },
  {
    id: 13, kanji: '火', on: 'カ', on_rom: 'ka',
    kun: 'ひ', kun_rom: 'hi',
    meaning: 'Lửa', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Hình ảnh ngọn lửa đang bùng bùng cháy',
    imageUrl: IMAGES[13],
    vocab: [
      { word: '火曜日', reading: 'かようび', romaji: 'kayoubi', meaning: 'Thứ ba' },
      { word: '花火', reading: 'はなび', romaji: 'hanabi', meaning: 'Pháo hoa' },
    ],
    example: { jp: '火曜日に買い物をします。', romaji: 'Kayoubi ni kaimono wo shimasu.', vn: 'Tôi đi mua sắm vào Thứ Ba.' },
    grammar: { pattern: '〜をします', note: 'します (làm) kết hợp danh từ -> Động từ (Mua sắm)' },
  },
  {
    id: 14, kanji: '水', on: 'スイ', on_rom: 'sui',
    kun: 'みず', kun_rom: 'mizu',
    meaning: 'Nước', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Dòng nước chảy ở giữa và các bọt nước bắn ở 2 bên',
    imageUrl: IMAGES[14],
    vocab: [
      { word: '水曜日', reading: 'すいようび', romaji: 'suiyoubi', meaning: 'Thứ tư' },
      { word: '水', reading: 'みず', romaji: 'mizu', meaning: 'Nước uống' },
      { word: '水道', reading: 'すいどう', romaji: 'suidou', meaning: 'Nước máy' },
    ],
    example: { jp: '水を飲みます。', romaji: 'Mizu o nomimasu.', vn: 'Tôi uống nước.' },
    grammar: { pattern: '〜を〜ます', note: 'Hạt từ を chỉ đối tượng của hành động (飲みます - uống)' },
  },
  {
    id: 15, kanji: '木', on: 'モク・ボク', on_rom: 'moku / boku',
    kun: 'き', kun_rom: 'ki',
    meaning: 'Cây, Gỗ', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Cái cây có cành (nét ngang), thân (nét dọc) và rễ (2 nét phẩy)',
    imageUrl: IMAGES[15],
    vocab: [
      { word: '木曜日', reading: 'もくようび', romaji: 'mokuyoubi', meaning: 'Thứ năm' },
      { word: '木', reading: 'き', romaji: 'ki', meaning: 'Cây cối' },
    ],
    example: { jp: '木村さんは先生です。', romaji: 'Kimura-san wa sensei desu.', vn: 'Ông Kimura là giáo viên.' },
    grammar: { pattern: 'A は B です', note: 'Kimura (木村 - Mộc Thôn) là 1 họ Nhật Bản có chứa chữ Mộc.' },
  },
  {
    id: 16, kanji: '金', on: 'キン・コン', on_rom: 'kin / kon',
    kun: 'かね', kun_rom: 'kane',
    meaning: 'Vàng, Tiền', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Quặng vàng lấp lánh chôn dưới đất che bởi ngọn núi',
    imageUrl: IMAGES[16],
    vocab: [
      { word: '金曜日', reading: 'きんようび', romaji: 'kinyoubi', meaning: 'Thứ sáu' },
      { word: 'お金', reading: 'おかね', romaji: 'okane', meaning: 'Tiền bạc' },
    ],
    example: { jp: 'お金がありません。', romaji: 'Okane ga arimasen.', vn: 'Tôi không có tiền.' },
    grammar: { pattern: '〜があります / ありません', note: 'Sở hữu đồ vật đi với hạt từ が' },
  },
  {
    id: 17, kanji: '土', on: 'ド・ト', on_rom: 'do / to',
    kun: 'つち', kun_rom: 'tsuchi',
    meaning: 'Đất', group: 'Tự Nhiên & Thời Gian',
    mnemonic: 'Mầm cây (nét 十) đâm chồi từ dưới mặt đất (nét ngang dài)',
    imageUrl: IMAGES[17],
    vocab: [
      { word: '土曜日', reading: 'どようび', romaji: 'doyoubi', meaning: 'Thứ bảy' },
      { word: '土', reading: 'つち', romaji: 'tsuchi', meaning: 'Đất' },
    ],
    example: { jp: '土曜日と日曜日は休みです。', romaji: 'Doyoubi to nichiyoubi wa yasumi desu.', vn: 'Thứ 7 và CN là ngày nghỉ.' },
    grammar: { pattern: 'A と B', note: 'Hạt từ と dùng để nối 2 danh từ (nghĩa là "và")' },
  },
  {
    id: 18, kanji: '年', on: 'ネン', on_rom: 'nen',
    kun: 'とし', kun_rom: 'toshi',
    meaning: 'Năm', group: 'Thời Gian',
    mnemonic: 'Người vác bó lúa về sau một Năm trồng trọt',
    imageUrl: IMAGES[18],
    vocab: [
      { word: '今年', reading: 'ことし', romaji: 'kotoshi', meaning: 'Năm nay' },
      { word: '去年', reading: 'きょねん', romaji: 'kyonen', meaning: 'Năm ngoái' },
      { word: '来年', reading: 'らいねん', romaji: 'rainen', meaning: 'Năm sau' },
    ],
    example: { jp: '去年、日本へ来ました。', romaji: 'Kyonen, Nihon e kimashita.', vn: 'Năm ngoái, tôi đã đến Nhật.' },
    grammar: { pattern: 'Thể quá khứ 〜ました', note: 'Hành động trong quá khứ đổi ます thành ました (kimashita).' },
  },
  {
    id: 19, kanji: '時', on: 'ジ', on_rom: 'ji',
    kun: 'とき', kun_rom: 'toki',
    meaning: 'Thời Gian, Giờ', group: 'Thời Gian',
    mnemonic: 'Quan sát mặt trời (日) qua ngôi đền (寺 - Tự) để biết Giờ',
    imageUrl: IMAGES[19],
    vocab: [
      { word: '時計', reading: 'とけい', romaji: 'tokei', meaning: 'Đồng hồ' },
      { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: 'Thời gian, tiếng đồng hồ' },
      { word: '時々', reading: 'ときどき', romaji: 'tokidoki', meaning: 'Thỉnh thoảng' },
      { word: '何時', reading: 'なんじ', romaji: 'nanji', meaning: 'Mấy giờ' },
    ],
    example: { jp: '今、何時ですか。', romaji: 'Ima, nanji desu ka.', vn: 'Bây giờ là mấy giờ thế?' },
    grammar: { pattern: 'Từ để hỏi + ですか', note: '何 (cái gì) + 時 (giờ) = Mấy giờ? (nanji)' },
  },
  {
    id: 20, kanji: '分', on: 'ブン・フン・プン', on_rom: 'bun / fun / pun',
    kun: 'わ(かる)', kun_rom: 'wa(karu)',
    meaning: 'Phút, Hiểu', group: 'Thời Gian',
    mnemonic: 'Dùng con dao (刀) cắt số 8 (八) => Chia ra / Phân nhỏ thành Phút',
    imageUrl: IMAGES[20],
    vocab: [
      { word: '半分', reading: 'はんぶん', romaji: 'hanbun', meaning: 'Một nửa' },
      { word: '十分', reading: 'じゅっぷん', romaji: 'juppun', meaning: '10 phút' },
      { word: '分かります', reading: 'わかります', romaji: 'wakarimasu', meaning: 'Hiểu' },
    ],
    example: { jp: '漢字が分かります。', romaji: 'Kanji ga wakarimasu.', vn: 'Tôi hiểu Kanji.' },
    grammar: { pattern: '〜が分かります', note: 'Động từ "hiểu/biết" luôn dùng với hạt từ が' },
  },
  // ── Số lớn ────────────────────────────────────────────────────────────────
  {
    id: 21, kanji: '百', on: 'ヒャク', on_rom: 'hyaku',
    kun: '—', kun_rom: '—',
    meaning: 'Một trăm (100)', group: '数字',
    mnemonic: '💡 Nhớ: "hyaku" nghe như "hack-u" — một cú hack để nhân lên 100 lần!',
    vocab: [
      { word: '百円', reading: 'ひゃくえん', romaji: 'hyakuen', meaning: '100 yên' },
      { word: '三百', reading: 'さんびゃく', romaji: 'sanbyaku', meaning: 'ba trăm' },
    ],
    example: { jp: 'これは百円です。', romaji: 'Kore wa hyakuen desu.', vn: 'Cái này là 100 yên.' },
    grammar: { pattern: 'これは〜です', note: 'これ = cái này; 百 + 円 = 100 yen (tiền Nhật)' },
  },
  {
    id: 22, kanji: '千', on: 'セン', on_rom: 'sen',
    kun: 'ち', kun_rom: 'chi',
    meaning: 'Một nghìn (1000)', group: '数字',
    mnemonic: '💡 "Sen" → nghĩ đến "SEN" trong "one thousand" (thousand ≈ sen-d). Nét "/" xuyên qua "十" để thành 千!',
    vocab: [
      { word: '千円', reading: 'せんえん', romaji: 'senen', meaning: '1000 yên' },
      { word: '三千', reading: 'さんぜん', romaji: 'sanzen', meaning: 'ba nghìn' },
    ],
    example: { jp: '千円をください。', romaji: 'Senen wo kudasai.', vn: 'Xin cho tôi 1000 yên.' },
    grammar: { pattern: '〜をください', note: 'くださいsau danh từ/số tiền = xin hãy cho tôi...' },
  },
  {
    id: 23, kanji: '万', on: 'マン・バン', on_rom: 'man / ban',
    kun: '—', kun_rom: '—',
    meaning: 'Mười nghìn (10.000)', group: '数字',
    mnemonic: '💡 万 có hình dạng như cánh chim bay lên — vươn tới con số mười nghìn!',
    vocab: [
      { word: '一万', reading: 'いちまん', romaji: 'ichiman', meaning: '10.000' },
      { word: '万円', reading: 'まんえん', romaji: 'manen', meaning: '10.000 yên' },
    ],
    example: { jp: 'このかばんは一万円です。', romaji: 'Kono kaban wa ichiman en desu.', vn: 'Cái túi này là 10.000 yên.' },
    grammar: { pattern: 'この〜は〜円です', note: 'この = cái này (gần người nói)' },
  },
  {
    id: 24, kanji: '円', on: 'エン', on_rom: 'en',
    kun: 'まる', kun_rom: 'maru',
    meaning: 'Yên (¥), Tròn', group: '数字',
    mnemonic: '💡 円 có nét khoanh tròn bên ngoài → đồng xu tròn → tiền Yên!',
    vocab: [
      { word: '百円', reading: 'ひゃくえん', romaji: 'hyakuen', meaning: '100 yên' },
      { word: '千円', reading: 'せんえん', romaji: 'senen', meaning: '1000 yên' },
      { word: '円い', reading: 'まるい', romaji: 'marui', meaning: 'Tròn (tính từ)' },
    ],
    example: { jp: 'すみません、千円ありますか。', romaji: 'Sumimasen, senen arimasu ka.', vn: 'Xin lỗi, có 1000 yên không?' },
    grammar: { pattern: '〜ありますか', note: 'Hỏi về sự tồn tại của đồ vật: あります/ありません' },
  },
  {
    id: 25, kanji: '半', on: 'ハン', on_rom: 'han',
    kun: 'なか(ば)', kun_rom: 'naka(ba)',
    meaning: 'Nửa, Rưỡi', group: 'Thời Gian',
    mnemonic: '💡 半 = 八 (tám) + 十 (mười) chia đôi → một nửa. Nhớ: "han" như "half"!',
    vocab: [
      { word: '半分', reading: 'はんぶん', romaji: 'hanbun', meaning: 'Một nửa' },
      { word: '三時半', reading: 'さんじはん', romaji: 'sanji han', meaning: '3 giờ rưỡi' },
    ],
    example: { jp: '今、三時半です。', romaji: 'Ima, sanji han desu.', vn: 'Bây giờ là 3 giờ rưỡi.' },
    grammar: { pattern: '〜時半', note: '半 sau giờ = ...rưỡi. 三時半 = 3:30' },
  },
  // ── Người & Thân Thể ──────────────────────────────────────────────────────
  {
    id: 26, kanji: '人', on: 'ジン・ニン', on_rom: 'jin / nin',
    kun: 'ひと', kun_rom: 'hito',
    meaning: 'Người', group: 'Con Người',
    mnemonic: '💡 人 = hình người đang chống gậy đứng → NGƯỜI. Chữ này giống dấu phẩy nghiêng!',
    imageUrl: IMAGES[21],
    vocab: [
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: 'Người nước ngoài' },
      { word: '日本人', reading: 'にほんじん', romaji: 'nihonjin', meaning: 'Người Nhật' },
      { word: '一人', reading: 'ひとり', romaji: 'hitori', meaning: 'Một mình' },
    ],
    example: { jp: 'あの人はだれですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai vậy?' },
    grammar: { pattern: '〜はだれですか', note: 'だれ = ai (who). あの = người/vật xa cả hai người nói' },
  },
  {
    id: 27, kanji: '口', on: 'コウ・ク', on_rom: 'kou / ku',
    kun: 'くち', kun_rom: 'kuchi',
    meaning: 'Miệng, Cửa', group: 'Thân Thể',
    mnemonic: '💡 口 = hình vuông nhỏ → miệng mở → MIỆNG. Đơn giản nhất!',
    imageUrl: IMAGES[27],
    vocab: [
      { word: '入口', reading: 'いりぐち', romaji: 'iriguchi', meaning: 'Lối vào' },
      { word: '出口', reading: 'でぐち', romaji: 'deguchi', meaning: 'Lối ra' },
      { word: '口', reading: 'くち', romaji: 'kuchi', meaning: 'Miệng' },
    ],
    example: { jp: '入口はどこですか。', romaji: 'Iriguchi wa doko desu ka.', vn: 'Lối vào ở đâu vậy?' },
    grammar: { pattern: '〜はどこですか', note: 'どこ = ở đâu (where). Hỏi vị trí.' },
  },
  {
    id: 28, kanji: '手', on: 'シュ', on_rom: 'shu',
    kun: 'て', kun_rom: 'te',
    meaning: 'Tay, Bàn tay', group: 'Thân Thể',
    mnemonic: '💡 手 = hình bàn tay xòe ra với các ngón tay (5 nét chính) → TAY!',
    imageUrl: IMAGES[28],
    vocab: [
      { word: '手', reading: 'て', romaji: 'te', meaning: 'Bàn tay' },
      { word: '上手', reading: 'じょうず', romaji: 'jouzu', meaning: 'Giỏi, khéo tay' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: 'Vụng về' },
    ],
    example: { jp: '日本語が上手ですね。', romaji: 'Nihongo ga jouzu desu ne.', vn: 'Tiếng Nhật của bạn giỏi nhỉ.' },
    grammar: { pattern: '〜がじょうずです', note: 'Kỹ năng/môn học dùng hạt từ が trước 上手/下手/好き' },
  },
  {
    id: 29, kanji: '足', on: 'ソク', on_rom: 'soku',
    kun: 'あし・た(りる)', kun_rom: 'ashi / ta(riru)',
    meaning: 'Chân, Đủ', group: 'Thân Thể',
    mnemonic: '💡 足 = phần trên là 口 (miệng) + phần dưới là "chân bước" → CHÂN. Nhớ: "soku" như soccer (bóng đá = dùng chân)!',
    imageUrl: IMAGES[29],
    vocab: [
      { word: '足', reading: 'あし', romaji: 'ashi', meaning: 'Chân, cẳng chân' },
      { word: '足りる', reading: 'たりる', romaji: 'tariru', meaning: 'Đủ, đầy đủ' },
      { word: '一足', reading: 'いっそく', romaji: 'issoku', meaning: 'Một đôi (giày/vớ)' },
    ],
    example: { jp: 'お金が足りません。', romaji: 'Okane ga tarimasen.', vn: 'Tiền không đủ.' },
    grammar: { pattern: '〜が足りません', note: '足りません = không đủ; dùng hạt từ が' },
  },
  {
    id: 30, kanji: '目', on: 'モク・ボク', on_rom: 'moku / boku',
    kun: 'め', kun_rom: 'me',
    meaning: 'Mắt', group: 'Thân Thể',
    mnemonic: '💡 目 = hình con mắt nhìn thẳng về phía trước (nét ngang giữa là con ngươi) → MẮT!',
    imageUrl: IMAGES[26],
    vocab: [
      { word: '目', reading: 'め', romaji: 'me', meaning: 'Mắt' },
      { word: '一番目', reading: 'いちばんめ', romaji: 'ichibanme', meaning: 'Thứ nhất' },
      { word: '目上', reading: 'めうえ', romaji: 'meue', meaning: 'Người trên (bậc trên)' },
    ],
    example: { jp: '目が痛いです。', romaji: 'Me ga itai desu.', vn: 'Mắt tôi bị đau.' },
    grammar: { pattern: '〜が痛いです', note: '痛い (itai) = đau; bộ phận cơ thể + が + 痛いです' },
  },
  {
    id: 31, kanji: '耳', on: 'ジ', on_rom: 'ji',
    kun: 'みみ', kun_rom: 'mimi',
    meaning: 'Tai', group: 'Thân Thể',
    mnemonic: '💡 耳 = hình dạng cái tai nhìn từ phía trước. Hai nét ngang giữa là lỗ tai.',
    vocab: [
      { word: '耳', reading: 'みみ', romaji: 'mimi', meaning: 'Tai' },
      { word: '耳鼻科', reading: 'じびか', romaji: 'jibika', meaning: 'Khoa tai mũi họng' },
    ],
    example: { jp: '耳が聞こえません。', romaji: 'Mimi ga kikoemasen.', vn: 'Tôi không nghe được.' },
    grammar: { pattern: '〜が聞こえません', note: '聞こえる (kikoeru) = nghe thấy (khả năng tự nhiên)' },
  },
  {
    id: 32, kanji: '力', on: 'リョク・リキ', on_rom: 'ryoku / riki',
    kun: 'ちから', kun_rom: 'chikara',
    meaning: 'Sức mạnh', group: 'Con Người',
    mnemonic: '💡 力 = hình cánh tay đang gồng sức mạnh (như cơ bắp uốn lên) → SỨC MẠNH!',
    vocab: [
      { word: '力', reading: 'ちから', romaji: 'chikara', meaning: 'Sức mạnh' },
      { word: '体力', reading: 'たいりょく', romaji: 'tairyoku', meaning: 'Thể lực' },
      { word: '努力', reading: 'どりょく', romaji: 'doryoku', meaning: 'Nỗ lực' },
    ],
    example: { jp: '毎日努力します。', romaji: 'Mainichi doryoku shimasu.', vn: 'Tôi cố gắng mỗi ngày.' },
    grammar: { pattern: '〜をします', note: '努力をします = nỗ lực (danh từ + をします = thực hiện hành động)' },
  },
  {
    id: 33, kanji: '気', on: 'キ・ケ', on_rom: 'ki / ke',
    kun: '—', kun_rom: '—',
    meaning: 'Khí, Tinh thần, Cảm giác', group: 'Con Người',
    mnemonic: '💡 気 = chữ 米 (gạo) + hơi nước bay lên → KHÍ lực, tinh thần. Nhớ: "ki" như "key" — chìa khóa cảm xúc!',
    vocab: [
      { word: '元気', reading: 'げんき', romaji: 'genki', meaning: 'Khỏe mạnh, năng động' },
      { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: 'Thời tiết' },
      { word: '気をつけて', reading: 'きをつけて', romaji: 'ki wo tsukete', meaning: 'Cẩn thận nhé' },
    ],
    example: { jp: '今日の天気はいいですね。', romaji: 'Kyou no tenki wa ii desu ne.', vn: 'Thời tiết hôm nay đẹp nhỉ.' },
    grammar: { pattern: '〜の〜', note: 'の kết nối danh từ: 今日の天気 = thời tiết của hôm nay' },
  },
  {
    id: 34, kanji: '男', on: 'ダン・ナン', on_rom: 'dan / nan',
    kun: 'おとこ', kun_rom: 'otoko',
    meaning: 'Nam, Đàn ông', group: 'Con Người',
    mnemonic: '💡 男 = 田 (ruộng) + 力 (sức mạnh) → người đàn ông làm ruộng bằng sức mạnh → ĐÀN ÔNG!',
    vocab: [
      { word: '男の人', reading: 'おとこのひと', romaji: 'otoko no hito', meaning: 'Người đàn ông' },
      { word: '男の子', reading: 'おとこのこ', romaji: 'otoko no ko', meaning: 'Con trai' },
      { word: '男性', reading: 'だんせい', romaji: 'dansei', meaning: 'Nam giới' },
    ],
    example: { jp: 'あの男の人はだれですか。', romaji: 'Ano otoko no hito wa dare desu ka.', vn: 'Người đàn ông kia là ai vậy?' },
    grammar: { pattern: '〜の人', note: 'の nối danh từ bổ nghĩa: 男の人 = người của phái nam' },
  },
  {
    id: 35, kanji: '女', on: 'ジョ・ニョ', on_rom: 'jo / nyo',
    kun: 'おんな・め', kun_rom: 'onna / me',
    meaning: 'Nữ, Phụ nữ', group: 'Con Người',
    mnemonic: '💡 女 = hình người phụ nữ ngồi khoanh tay thanh thản → PHỤ NỮ!',
    vocab: [
      { word: '女の人', reading: 'おんなのひと', romaji: 'onna no hito', meaning: 'Người phụ nữ' },
      { word: '女の子', reading: 'おんなのこ', romaji: 'onna no ko', meaning: 'Con gái' },
      { word: '女性', reading: 'じょせい', romaji: 'josei', meaning: 'Nữ giới' },
    ],
    example: { jp: 'あの女の人は先生です。', romaji: 'Ano onna no hito wa sensei desu.', vn: 'Người phụ nữ kia là giáo viên.' },
    grammar: { pattern: 'A は B です', note: 'Cấu trúc cơ bản: A là B.' },
  },
  {
    id: 36, kanji: '子', on: 'シ・ス', on_rom: 'shi / su',
    kun: 'こ', kun_rom: 'ko',
    meaning: 'Trẻ em, Con', group: 'Con Người',
    mnemonic: '💡 子 = hình em bé đang vung tay chân → TRẺ EM! "Ko" nghe như "con" trong tiếng Việt!',
    vocab: [
      { word: '子ども', reading: 'こども', romaji: 'kodomo', meaning: 'Trẻ em' },
      { word: '女の子', reading: 'おんなのこ', romaji: 'onna no ko', meaning: 'Bé gái' },
      { word: '男の子', reading: 'おとこのこ', romaji: 'otoko no ko', meaning: 'Bé trai' },
    ],
    example: { jp: '子どもが二人います。', romaji: 'Kodomo ga futari imasu.', vn: 'Tôi có hai đứa con.' },
    grammar: { pattern: '〜がいます', note: 'います = tồn tại (người/ĐV). 二人 = hai người' },
  },
  {
    id: 37, kanji: '父', on: 'フ', on_rom: 'fu',
    kun: 'ちち', kun_rom: 'chichi',
    meaning: 'Bố, Cha', group: 'Gia Đình',
    mnemonic: '💡 父 = hình người đàn ông cầm gậy chỉ đạo → BỐ. Kun "chichi" → nhớ "papa chi" = bố!',
    vocab: [
      { word: '父', reading: 'ちち', romaji: 'chichi', meaning: 'Bố (của tôi)' },
      { word: 'お父さん', reading: 'おとうさん', romaji: 'otousan', meaning: 'Bố (lịch sự)' },
    ],
    example: { jp: '父は会社員です。', romaji: 'Chichi wa kaishain desu.', vn: 'Bố tôi là nhân viên công ty.' },
    grammar: { pattern: '〜は〜です', note: 'ちち (chichi) = bố mình; おとうさん = bố người khác (kính ngữ)' },
  },
  {
    id: 38, kanji: '母', on: 'ボ', on_rom: 'bo',
    kun: 'はは', kun_rom: 'haha',
    meaning: 'Mẹ', group: 'Gia Đình',
    mnemonic: '💡 母 = 女 (phụ nữ) thêm hai nét chấm → hai bầu sữa → MẸ đang cho con bú!',
    vocab: [
      { word: '母', reading: 'はは', romaji: 'haha', meaning: 'Mẹ (của tôi)' },
      { word: 'お母さん', reading: 'おかあさん', romaji: 'okaasan', meaning: 'Mẹ (lịch sự)' },
    ],
    example: { jp: '母は料理が上手です。', romaji: 'Haha wa ryouri ga jouzu desu.', vn: 'Mẹ tôi nấu ăn giỏi.' },
    grammar: { pattern: '〜が上手です', note: 'はは (haha) = mẹ mình; おかあさん = mẹ người khác' },
  },
  {
    id: 39, kanji: '友', on: 'ユウ', on_rom: 'yuu',
    kun: 'とも', kun_rom: 'tomo',
    meaning: 'Bạn bè', group: 'Con Người',
    mnemonic: '💡 友 = hình hai bàn tay nắm chặt → BẠN BÈ. "Tomo" nhớ như "tomorrow" — bạn bè sát cánh mỗi ngày!',
    vocab: [
      { word: '友だち', reading: 'ともだち', romaji: 'tomodachi', meaning: 'Bạn bè' },
      { word: '友人', reading: 'ゆうじん', romaji: 'yuujin', meaning: 'Người bạn (trang trọng)' },
    ],
    example: { jp: '友だちと映画を見ます。', romaji: 'Tomodachi to eiga wo mimasu.', vn: 'Tôi xem phim với bạn bè.' },
    grammar: { pattern: '〜と〜ます', note: 'と = cùng với (ai đó). 友だちと = cùng bạn bè' },
  },
  // ── Tự Nhiên ──────────────────────────────────────────────────────────────
  {
    id: 40, kanji: '山', on: 'サン', on_rom: 'san',
    kun: 'やま', kun_rom: 'yama',
    meaning: 'Núi', group: 'Tự Nhiên',
    mnemonic: '💡 山 = ba đỉnh núi nhô lên → NÚI. Giống hệt hình vẽ núi! "San" = viết tắt của Sankaku (tam giác)!',
    imageUrl: IMAGES[23],
    vocab: [
      { word: '山', reading: 'やま', romaji: 'yama', meaning: 'Núi' },
      { word: '富士山', reading: 'ふじさん', romaji: 'Fujisan', meaning: 'Núi Fujisan' },
      { word: '火山', reading: 'かざん', romaji: 'kazan', meaning: 'Núi lửa' },
    ],
    example: { jp: '富士山はきれいです。', romaji: 'Fujisan wa kirei desu.', vn: 'Núi Phú Sĩ rất đẹp.' },
    grammar: { pattern: '〜はきれいです', note: 'きれい (kirei) = đẹp/sạch → きれいです tính từ な' },
  },
  {
    id: 41, kanji: '川', on: 'セン', on_rom: 'sen',
    kun: 'かわ', kun_rom: 'kawa',
    meaning: 'Sông, Suối', group: 'Tự Nhiên',
    mnemonic: '💡 川 = ba nét sóng chảy → SÔNG. Trông như dòng nước chảy xuôi!',
    imageUrl: IMAGES[24],
    vocab: [
      { word: '川', reading: 'かわ', romaji: 'kawa', meaning: 'Sông' },
      { word: '小川', reading: 'おがわ', romaji: 'ogawa', meaning: 'Suối nhỏ' },
    ],
    example: { jp: 'この川はきれいですね。', romaji: 'Kono kawa wa kirei desu ne.', vn: 'Con sông này đẹp nhỉ.' },
    grammar: { pattern: 'この〜はきれいですね', note: 'ね cuối câu = phải không? / nhỉ (tìm sự đồng thuận)' },
  },
  {
    id: 42, kanji: '田', on: 'デン', on_rom: 'den',
    kun: 'た', kun_rom: 'ta',
    meaning: 'Ruộng lúa', group: 'Tự Nhiên',
    mnemonic: '💡 田 = lưới ô ruộng nhìn từ trên cao → RUỘNG LÚA. Giống ô cờ vua!',
    imageUrl: IMAGES[25],
    vocab: [
      { word: '田んぼ', reading: 'たんぼ', romaji: 'tanbo', meaning: 'Ruộng lúa' },
      { word: '田舎', reading: 'いなか', romaji: 'inaka', meaning: 'Nông thôn' },
    ],
    example: { jp: '田んぼに水を入れます。', romaji: 'Tanbo ni mizu wo iremasu.', vn: 'Đổ nước vào ruộng lúa.' },
    grammar: { pattern: '〜に〜を入れます', note: 'に chỉ điểm đến; を chỉ đối tượng hành động' },
  },
  {
    id: 43, kanji: '空', on: 'クウ', on_rom: 'kuu',
    kun: 'そら・あ(く)', kun_rom: 'sora / a(ku)',
    meaning: 'Bầu trời, Trống', group: 'Tự Nhiên',
    mnemonic: '💡 空 = 穴 (hang) + 工 (công cụ) → đào hang lên → RỖNG, TRỐNG, TRỜI. "Sora" → bầu trời khoáng đãng!',
    vocab: [
      { word: '空', reading: 'そら', romaji: 'sora', meaning: 'Bầu trời' },
      { word: '空港', reading: 'くうこう', romaji: 'kuukou', meaning: 'Sân bay' },
      { word: '空く', reading: 'あく', romaji: 'aku', meaning: 'Trống rỗng, rảnh' },
    ],
    example: { jp: '空がとても青いです。', romaji: 'Sora ga totemo aoi desu.', vn: 'Bầu trời rất xanh.' },
    grammar: { pattern: '〜がとても〜いです', note: 'とても = rất (very). 青い (aoi) = xanh (trời/nước)' },
  },
  {
    id: 44, kanji: '雨', on: 'ウ', on_rom: 'u',
    kun: 'あめ・あま', kun_rom: 'ame / ama',
    meaning: 'Mưa', group: 'Tự Nhiên',
    mnemonic: '💡 雨 = mây (nét trên) + các giọt mưa rơi xuống (4 chấm) → MƯA. Đơn giản và trực quan!',
    vocab: [
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: 'Mưa' },
      { word: '大雨', reading: 'おおあめ', romaji: 'ooame', meaning: 'Mưa lớn' },
      { word: '雨季', reading: 'うき', romaji: 'uki', meaning: 'Mùa mưa' },
    ],
    example: { jp: '今日は雨です。', romaji: 'Kyou wa ame desu.', vn: 'Hôm nay trời mưa.' },
    grammar: { pattern: '今日は〜です', note: '雨です = (trời) mưa. Thời tiết dùng は + danh từ + です' },
  },
  // ── Kích Thước & Màu Sắc ─────────────────────────────────────────────────
  {
    id: 45, kanji: '大', on: 'ダイ・タイ', on_rom: 'dai / tai',
    kun: 'おお(きい)', kun_rom: 'oo(kii)',
    meaning: 'To, Lớn', group: 'Kích Thước',
    mnemonic: '💡 大 = người (人) dang rộng tay → ĐẠI/TO LỚN. Người dang tay = "tôi to lắm!"',
    imageUrl: IMAGES[30],
    vocab: [
      { word: '大きい', reading: 'おおきい', romaji: 'ookii', meaning: 'To, lớn' },
      { word: '大学', reading: 'だいがく', romaji: 'daigaku', meaning: 'Đại học' },
      { word: '大好き', reading: 'だいすき', romaji: 'daisuki', meaning: 'Rất thích' },
    ],
    example: { jp: 'この部屋は大きいです。', romaji: 'Kono heya wa ookii desu.', vn: 'Phòng này rộng (lớn).' },
    grammar: { pattern: '〜は〜いです', note: '大きい là tính từ -i → 大きいです = to/lớn' },
  },
  {
    id: 46, kanji: '小', on: 'ショウ', on_rom: 'shou',
    kun: 'ちい(さい)・こ', kun_rom: 'chii(sai) / ko',
    meaning: 'Nhỏ, Bé', group: 'Kích Thước',
    mnemonic: '💡 小 = 1 nét dọc ở giữa + 2 chấm hai bên nhỏ → NHỎ. Đối lập với 大!',
    vocab: [
      { word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: 'Nhỏ, bé' },
      { word: '小学校', reading: 'しょうがっこう', romaji: 'shougakkou', meaning: 'Trường tiểu học' },
    ],
    example: { jp: 'この犬は小さいですね。', romaji: 'Kono inu wa chiisai desu ne.', vn: 'Con chó này nhỏ nhỉ.' },
    grammar: { pattern: '〜はちいさいです', note: '小さい (chiisai) = nhỏ, bé (tính từ -i)' },
  },
  {
    id: 47, kanji: '高', on: 'コウ', on_rom: 'kou',
    kun: 'たか(い)', kun_rom: 'taka(i)',
    meaning: 'Cao, Đắt', group: 'Kích Thước',
    mnemonic: '💡 高 = hình tòa tháp cao tầng → CAO. Cũng nghĩa là ĐẮT (giá cao)!',
    vocab: [
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: 'Cao, đắt (tiền)' },
      { word: '高校', reading: 'こうこう', romaji: 'koukou', meaning: 'Trường trung học phổ thông' },
      { word: '高校生', reading: 'こうこうせい', romaji: 'koukousei', meaning: 'Học sinh THPT' },
    ],
    example: { jp: 'このかばんはとても高いです。', romaji: 'Kono kaban wa totemo takai desu.', vn: 'Cái túi này rất đắt.' },
    grammar: { pattern: '〜はとても高いです', note: '高い có 2 nghĩa: cao (chiều cao) và đắt (giá tiền)' },
  },
  {
    id: 48, kanji: '白', on: 'ハク・ビャク', on_rom: 'haku / byaku',
    kun: 'しろ・しろ(い)', kun_rom: 'shiro / shiro(i)',
    meaning: 'Màu trắng', group: 'Màu Sắc',
    mnemonic: '💡 白 = 日 (mặt trời) + 一 (nét ngang) → ánh sáng mặt trời trắng xóa → TRẮNG!',
    vocab: [
      { word: '白い', reading: 'しろい', romaji: 'shiroi', meaning: 'Trắng' },
      { word: '白板', reading: 'はくばん', romaji: 'hakuban', meaning: 'Bảng trắng' },
      { word: '白鳥', reading: 'はくちょう', romaji: 'hakuchou', meaning: 'Con thiên nga' },
    ],
    example: { jp: '白いシャツを着ています。', romaji: 'Shiroi shatsu wo kite imasu.', vn: 'Tôi đang mặc áo sơ mi trắng.' },
    grammar: { pattern: '〜を着ています', note: '着ています (kite imasu) = đang mặc (trạng thái)' },
  },
  // ── Phương Hướng & Vị Trí ─────────────────────────────────────────────────
  {
    id: 49, kanji: '上', on: 'ジョウ', on_rom: 'jou',
    kun: 'うえ・あ(げる)', kun_rom: 'ue / a(geru)',
    meaning: 'Trên, Phía trên', group: 'Phương Hướng',
    mnemonic: '💡 上 = mũi tên chỉ lên → TRÊN. Nét dọc hướng lên trên!',
    vocab: [
      { word: '上', reading: 'うえ', romaji: 'ue', meaning: 'Phía trên' },
      { word: '上手', reading: 'じょうず', romaji: 'jouzu', meaning: 'Giỏi' },
      { word: '上げる', reading: 'あげる', romaji: 'ageru', meaning: 'Nâng lên, cho' },
    ],
    example: { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', vn: 'Trên bàn có sách.' },
    grammar: { pattern: '〜の上に〜があります', note: '〜の上に = trên [cái gì đó]. Chỉ vị trí.' },
  },
  {
    id: 50, kanji: '下', on: 'カ・ゲ', on_rom: 'ka / ge',
    kun: 'した・さ(げる)・くだ(る)', kun_rom: 'shita / sa(geru) / kuda(ru)',
    meaning: 'Dưới, Phía dưới', group: 'Phương Hướng',
    mnemonic: '💡 下 = mũi tên chỉ xuống → DƯỚI. Đối lập hoàn toàn với 上!',
    vocab: [
      { word: '下', reading: 'した', romaji: 'shita', meaning: 'Phía dưới' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: 'Vụng về, kém' },
      { word: '地下', reading: 'ちか', romaji: 'chika', meaning: 'Tầng hầm, ngầm' },
    ],
    example: { jp: 'テーブルの下に猫がいます。', romaji: 'Teburu no shita ni neko ga imasu.', vn: 'Dưới bàn có con mèo.' },
    grammar: { pattern: '〜の下に〜がいます', note: 'います cho người/động vật. あります cho đồ vật.' },
  },
  {
    id: 51, kanji: '左', on: 'サ', on_rom: 'sa',
    kun: 'ひだり', kun_rom: 'hidari',
    meaning: 'Trái, Bên trái', group: 'Phương Hướng',
    mnemonic: '💡 左 = Có bộ Công (工) ở dưới. Tay trái cầm thước thợ (công cụ) làm việc!',
    vocab: [
      { word: '左', reading: 'ひだり', romaji: 'hidari', meaning: 'Bên trái' },
      { word: '左手', reading: 'ひだりて', romaji: 'hidarite', meaning: 'Tay trái' },
    ],
    example: { jp: '銀行は左にあります。', romaji: 'Ginkou wa hidari ni arimasu.', vn: 'Ngân hàng ở bên trái.' },
    grammar: { pattern: '〜は〜にあります', note: 'Chỉ vị trí tồn tại của đồ vật/địa điểm (dùng あります)' },
  },
  {
    id: 52, kanji: '右', on: 'ウ・ユウ', on_rom: 'u / yuu',
    kun: 'みぎ', kun_rom: 'migi',
    meaning: 'Phải, Bên phải', group: 'Phương Hướng',
    mnemonic: '💡 右 = Có bộ Khẩu (口 - miệng) ở dưới. Tay phải cầm đồ ăn đưa vào miệng!',
    vocab: [
      { word: '右', reading: 'みぎ', romaji: 'migi', meaning: 'Bên phải' },
      { word: '右手', reading: 'みぎて', romaji: 'migite', meaning: 'Tay phải' },
      { word: '左右', reading: 'さゆう', romaji: 'sayuu', meaning: 'Trái phải' },
    ],
    example: { jp: '右へ曲がってください。', romaji: 'Migi e magatte kudasai.', vn: 'Hãy rẽ phải.' },
    grammar: { pattern: '〜へ曲がります', note: 'へ (e) chỉ hướng di chuyển, 曲がる (magaru) = rẽ/quẹo.' },
  },
  // ── Vị trí & Không gian ───────────────────────────────────────────────────
  {
    id: 53, kanji: '中', on: 'チュウ', on_rom: 'chuu',
    kun: 'なか', kun_rom: 'naka',
    meaning: 'Trong, Giữa', group: 'Phương Hướng',
    mnemonic: '💡 中 = Một nét dọc xuyên qua chính GIỮA hình chữ nhật.',
    vocab: [
      { word: '中', reading: 'なか', romaji: 'naka', meaning: 'Bên trong' },
      { word: '中国', reading: 'ちゅうごく', romaji: 'Chuugoku', meaning: 'Trung Quốc' },
      { word: '一日中', reading: 'いちにちじゅう', romaji: 'ichinichijuu', meaning: 'Suốt cả ngày' },
    ],
    example: { jp: 'かばんの中に本があります。', romaji: 'Kaban no naka ni hon ga arimasu.', vn: 'Trong cặp có sách.' },
    grammar: { pattern: '〜の中に', note: 'A の 中 (naka) = bên trong của A.' },
  },
  {
    id: 54, kanji: '外', on: 'ガイ・ゲ', on_rom: 'gai / ge',
    kun: 'そと・はず(す)', kun_rom: 'soto / hazu(su)',
    meaning: 'Ngoài, Bên ngoài', group: 'Phương Hướng',
    mnemonic: '💡 外 = Gồm 夕 (chiều tối) và 卜 (bói toán). Đi ra NGOÀI bói toán vào buổi tối.',
    vocab: [
      { word: '外', reading: 'そと', romaji: 'soto', meaning: 'Bên ngoài' },
      { word: '外国', reading: 'がいこく', romaji: 'gaikoku', meaning: 'Nước ngoài' },
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: 'Người nước ngoài' },
    ],
    example: { jp: '外は寒いです。', romaji: 'Soto wa samui desu.', vn: 'Bên ngoài trời lạnh.' },
    grammar: { pattern: '〜は〜いです', note: '寒い (samui) = lạnh (thời tiết). Tính từ -i.' },
  },
  {
    id: 55, kanji: '前', on: 'ゼン', on_rom: 'zen',
    kun: 'まえ', kun_rom: 'mae',
    meaning: 'Trước, Phía trước', group: 'Phương Hướng',
    mnemonic: '💡 前 = Nhớ hình ảnh con dao (刂) cắt thịt nằm trên thớt, thịt bày ra PHÍA TRƯỚC mặt!',
    vocab: [
      { word: '前', reading: 'まえ', romaji: 'mae', meaning: 'Phía trước, trước đây' },
      { word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: 'Sáng (AM)' },
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: 'Tên' },
    ],
    example: { jp: '駅の前にいます。', romaji: 'Eki no mae ni imasu.', vn: 'Tôi đang ở trước nhà ga.' },
    grammar: { pattern: '名詞＋の＋前', note: 'Trước một địa điểm/danh từ nào đó dùng の前.' },
  },
  {
    id: 56, kanji: '後', on: 'ゴ・コウ', on_rom: 'go / kou',
    kun: 'うし(ろ)・あと', kun_rom: 'ushi(ro) / ato',
    meaning: 'Sau, Phía sau', group: 'Phương Hướng',
    mnemonic: '💡 後 = Có chữ "đi bộ" (彳) và "sợi chỉ" (幺), bước đi CHẬM lại PHÍA SAU!',
    vocab: [
      { word: '後ろ', reading: 'うしろ', romaji: 'ushiro', meaning: 'Phía sau' },
      { word: '午後', reading: 'ごご', romaji: 'gogo', meaning: 'Chiều (PM)' },
      { word: '後で', reading: 'あとで', romaji: 'ato de', meaning: 'Lát nữa, sau đó' },
    ],
    example: { jp: '後ろを見てください。', romaji: 'Ushiro wo mite kudasai.', vn: 'Hãy nhìn ra phía sau.' },
    grammar: { pattern: '〜てください', note: 'V-て + ください = Hãy làm V (yêu cầu lịch sự).' },
  },
  // ── Chiều không gian & Cảnh quan ──────────────────────────────────────────
  {
    id: 57, kanji: '東', on: 'トウ', on_rom: 'tou',
    kun: 'ひがし', kun_rom: 'higashi',
    meaning: 'Đông (Hướng)', group: 'Phương Hướng',
    mnemonic: '💡 東 = Hình ảnh Mặt trời (日) mọc lấp ló sau cái cây (木) → phương ĐÔNG!',
    vocab: [
      { word: '東', reading: 'ひがし', romaji: 'higashi', meaning: 'Hướng Đông' },
      { word: '東京', reading: 'とうきょう', romaji: 'Toukyou', meaning: 'Tokyo (Đông Kinh)' },
    ],
    example: { jp: '太陽は東から昇ります。', romaji: 'Taiyou wa higashi kara noborimasu.', vn: 'Mặt trời mọc từ hướng Đông.' },
    grammar: { pattern: '〜から', note: 'から = từ (from). Chỉ điểm xuất phát.' },
  },
  {
    id: 58, kanji: '西', on: 'セイ・サイ', on_rom: 'sei / sai',
    kun: 'にし', kun_rom: 'nishi',
    meaning: 'Tây (Hướng)', group: 'Phương Hướng',
    mnemonic: '💡 西 = Hình ảnh con chim về tổ lúc chiều tà → mặt trời lặn hướng TÂY!',
    vocab: [
      { word: '西', reading: 'にし', romaji: 'nishi', meaning: 'Hướng Tây' },
      { word: '西口', reading: 'にしぐち', romaji: 'nishiguchi', meaning: 'Cửa Tây' },
    ],
    example: { jp: '駅の西口で会いましょう。', romaji: 'Eki no nishiguchi de aimashou.', vn: 'Hãy gặp nhau ở cửa Tây nhà ga.' },
    grammar: { pattern: '〜で会いましょう', note: 'で chỉ nơi xảy ra hành động. 〜ましょう = Hãy cùng làm...' },
  },
  {
    id: 59, kanji: '南', on: 'ナン', on_rom: 'nan',
    kun: 'みなみ', kun_rom: 'minami',
    meaning: 'Nam (Hướng)', group: 'Phương Hướng',
    mnemonic: '💡 南 = Có chữ Yen (円) bị lộn ngược bên trong, phương NAM ở phía dưới bản đồ!',
    vocab: [
      { word: '南', reading: 'みなみ', romaji: 'minami', meaning: 'Hướng Nam' },
      { word: '東南アジア', reading: 'とうなんアジア', romaji: 'tounan ajia', meaning: 'Đông Nam Á' },
    ],
    example: { jp: '私の部屋は南にあります。', romaji: 'Watashi no heya wa minami ni arimasu.', vn: 'Phòng của tôi nằm ở phía nam.' },
    grammar: { pattern: '〜は〜にあります', note: 'Chỉ vị trí của phòng/địa điểm (vật vô tri).' },
  },
  {
    id: 60, kanji: '北', on: 'ホク', on_rom: 'hoku',
    kun: 'きた', kun_rom: 'kita',
    meaning: 'Bắc (Hướng)', group: 'Phương Hướng',
    mnemonic: '💡 北 = Hai người ngồi xoay lưng vào nhau → đối lập, lạnh lẽo → phương BẮC!',
    vocab: [
      { word: '北', reading: 'きた', romaji: 'kita', meaning: 'Hướng Bắc' },
      { word: '北海道', reading: 'ほっかいどう', romaji: 'Hokkaidou', meaning: 'Hokkaido (Bắc Hải Đạo)' },
    ],
    example: { jp: '北の風が冷たいです。', romaji: 'Kita no kaze ga tsumetai desu.', vn: 'Gió phương Bắc rất lạnh.' },
    grammar: { pattern: 'N1 の N2', note: 'kita no kaze = gió của hướng Bắc.' },
  },
  // ── Thời Gian (Tiếp) ──────────────────────────────────────────────────────
  {
    id: 61, kanji: '今', on: 'コン・キン', on_rom: 'kon / kin',
    kun: 'いま', kun_rom: 'ima',
    meaning: 'Bây giờ, Nay', group: 'Thời Gian',
    mnemonic: '💡 今 = Hình cái nắp/mái nhà che lại, BÂY GIỜ ngay ở dưới đó!',
    vocab: [
      { word: '今', reading: 'いま', romaji: 'ima', meaning: 'Bây giờ' },
      { word: '今日', reading: 'きょう', romaji: 'kyou', meaning: 'Hôm nay' },
      { word: '今月', reading: 'こんげつ', romaji: 'kongetsu', meaning: 'Tháng này' },
    ],
    example: { jp: '今は何時ですか。', romaji: 'Ima wa nanji desu ka.', vn: 'Bây giờ là mấy giờ?' },
    grammar: { pattern: '今は何時ですか', note: 'Câu hỏi kinh điển về giờ: nanji = mấy giờ.' },
  },
  {
    id: 62, kanji: '週', on: 'シュウ', on_rom: 'shuu',
    kun: '—', kun_rom: '—',
    meaning: 'Tuần', group: 'Thời Gian',
    mnemonic: '💡 週 = Bộ chu/chu vi (周) kết hợp với bộ xước (辶 - bộ hành). Chu kỳ xoay vòng đi bộ → 1 TUẦN!',
    vocab: [
      { word: '今週', reading: 'こんしゅう', romaji: 'konshuu', meaning: 'Tuần này' },
      { word: '来週', reading: 'らいしゅう', romaji: 'raishuu', meaning: 'Tuần sau' },
      { word: '先週', reading: 'せんしゅう', romaji: 'senshuu', meaning: 'Tuần trước' },
    ],
    example: { jp: '来週、テストがあります。', romaji: 'Raishuu, tesuto ga arimasu.', vn: 'Tuần sau có bài kiểm tra.' },
    grammar: { pattern: '〜があります', note: 'Sự việc/sự kiện (test, party) được tổ chức cũng dùng あります.' },
  },
  {
    id: 63, kanji: '午', on: 'ゴ', on_rom: 'go',
    kun: '—', kun_rom: '—',
    meaning: 'Buổi Trưa', group: 'Thời Gian',
    mnemonic: '💡 午 = Giống chữ Thập (十) có nét ngang ngắn trên đỉnh. Giữa TRƯA mặt trời đứng bóng!',
    vocab: [
      { word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: 'Sáng (từ 0h - 12h)' },
      { word: '午後', reading: 'ごご', romaji: 'gogo', meaning: 'Chiều (từ 12h - 24h)' },
    ],
    example: { jp: '午後の会議は三時からです。', romaji: 'Gogo no kaigi wa sanji kara desu.', vn: 'Cuộc họp chiều từ 3 giờ.' },
    grammar: { pattern: '〜から', note: 'Thời gian + kara = Bắt đầu từ lúc...' },
  },
  {
    id: 64, kanji: '毎', on: 'マイ', on_rom: 'mai',
    kun: '—', kun_rom: '—',
    meaning: 'Mỗi', group: 'Thời Gian',
    mnemonic: '💡 毎 = Người mẹ (母) đội nón đi làm MỖI ngày!',
    vocab: [
      { word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: 'Mỗi ngày' },
      { word: '毎年', reading: 'まいとし', romaji: 'maitoshi', meaning: 'Mỗi năm' },
      { word: '毎月', reading: 'まいつき', romaji: 'maitsuki', meaning: 'Mỗi tháng' },
    ],
    example: { jp: '毎日、日本語を勉強します。', romaji: 'Mainichi, nihongo wo benkyou shimasu.', vn: 'Mỗi ngày tôi đều học tiếng Nhật.' },
    grammar: { pattern: '毎〜 V-ます', note: 'Chỉ thói quen lặp lại, động từ luôn ở thì hiện tại/tương lai (ます).' },
  },
  {
    id: 65, kanji: '何', on: 'カ', on_rom: 'ka',
    kun: 'なに・なん', kun_rom: 'nani / nan',
    meaning: 'Cái gì', group: 'Cơ Bản',
    mnemonic: '💡 何 = Người (亻) vác cái hộp vuông mở miệng hỏi "CÁI GÌ ĐÂY?"',
    vocab: [
      { word: '何', reading: 'なに', romaji: 'nani', meaning: 'Cái gì' },
      { word: '何時', reading: 'なんじ', romaji: 'nanji', meaning: 'Mấy giờ' },
      { word: '何か', reading: 'なにか', romaji: 'nanika', meaning: 'Cái gì đó' },
    ],
    example: { jp: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', vn: 'Cái này là cái gì?' },
    grammar: { pattern: '何ですか (nan desu ka)', note: 'Đứng trước desu/d/t/n, 何 đọc là "nan". Đứng 1 mình đọc "nani".' },
  },
  // ── Động Từ Cơ Bản ────────────────────────────────────────────────────────
  {
    id: 66, kanji: '食', on: 'ショク・ジキ', on_rom: 'shoku / jiki',
    kun: 'た(べる)・く(う)', kun_rom: 'ta(beru) / ku(u)',
    meaning: 'Ăn', group: 'Động Từ',
    mnemonic: '💡 食 = Người (人) ngồi trước cái hộp thức ăn (良) rất ngon bèn ĂN liền!',
    vocab: [
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: 'Ăn' },
      { word: '食事', reading: 'しょくじ', romaji: 'shokuji', meaning: 'Bữa ăn' },
      { word: '食堂', reading: 'しょくどう', romaji: 'shokudou', meaning: 'Nhà ăn, căng tin' },
    ],
    example: { jp: '朝ごはんを食べます。', romaji: 'Asagohan wo tabemasu.', vn: 'Tôi ăn sáng.' },
    grammar: { pattern: '〜を食べます', note: 'を (wo) chỉ đối tượng bị tác động bởi hành động ăn.' },
  },
  {
    id: 67, kanji: '飲', on: 'イン', on_rom: 'in',
    kun: 'の(む)', kun_rom: 'no(mu)',
    meaning: 'Uống', group: 'Động Từ',
    mnemonic: '💡 飲 = Gồm bộ Thực (食 - ăn) và chữ Thiếm (欠 - thiếu). Ăn mà THIẾU thì phải... UỐNG cho đủ!',
    vocab: [
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: 'Uống' },
      { word: '飲み物', reading: 'のみもの', romaji: 'nomimono', meaning: 'Đồ uống' },
      { word: '飲食店', reading: 'いんしょくてん', romaji: 'inshokuten', meaning: 'Quán ăn uống' },
    ],
    example: { jp: 'お茶を飲みます。', romaji: 'Ocha wo nomimasu.', vn: 'Tôi uống trà xanh.' },
    grammar: { pattern: '〜を飲みます', note: '飲みます (nomimasu) = hành động uống.' },
  },
  {
    id: 68, kanji: '見', on: 'ケン', on_rom: 'ken',
    kun: 'み(る)・み(える)', kun_rom: 'mi(ru) / mi(eru)',
    meaning: 'Nhìn, Xem', group: 'Động Từ',
    mnemonic: '💡 見 = Bộ Mục (目 - Mắt) mọc ra đôi chân (儿) chạy đi XEM mọi thứ!',
    vocab: [
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: 'Nhìn, xem' },
      { word: '見せる', reading: 'みせる', romaji: 'miseru', meaning: 'Cho xem' },
      { word: '花見', reading: 'はなみ', romaji: 'hanami', meaning: 'Ngắm hoa anh đào' },
    ],
    example: { jp: '毎晩、テレビを見ます。', romaji: 'Maiban, terebi wo mimasu.', vn: 'Mỗi tối tôi xem tivi.' },
    grammar: { pattern: '〜を見ます', note: '見ます = Xem (TV, phim), nhìn.' },
  },
  {
    id: 69, kanji: '聞', on: 'ブン・モン', on_rom: 'bun / mon',
    kun: 'き(く)・き(こえる)', kun_rom: 'ki(ku) / ki(koeru)',
    meaning: 'Nghe, Hỏi', group: 'Động Từ',
    mnemonic: '💡 聞 = Có lỗ tai (耳) kẹp giữa cấu trúc cánh cửa lớn (門 - Môn). Ghé MÔN TAI nghe lén!',
    vocab: [
      { word: '聞く', reading: 'きく', romaji: 'kiku', meaning: 'Nghe, hỏi' },
      { word: '聞こえる', reading: 'きこえる', romaji: 'kikoeru', meaning: 'Có thể nghe thấy' },
      { word: '新聞', reading: 'しんぶん', romaji: 'shinbun', meaning: 'Tờ báo (tin mới nghe)' },
    ],
    example: { jp: '先生に質問を聞きます。', romaji: 'Sensei ni shitsumon wo kikimasu.', vn: 'Tôi hỏi giáo viên câu hỏi.' },
    grammar: { pattern: '人 ＋ に聞く', note: 'Hỏi AI ĐÓ dùng に. Nghe CÁI GÌ dùng を.' },
  },
  {
    id: 70, kanji: '読', on: 'ドク', on_rom: 'doku',
    kun: 'よ(む)', kun_rom: 'yo(mu)',
    meaning: 'Đọc', group: 'Động Từ',
    mnemonic: '💡 読 = Gồm bộ Ngôn (言 - Lời nói) và Mại (売 - Bán). Lời người Bán hàng hay ĐỌC ra rả!',
    vocab: [
      { word: '読む', reading: 'よむ', romaji: 'yomu', meaning: 'Đọc' },
      { word: '読書', reading: 'どくしょ', romaji: 'dokusho', meaning: 'Việc đọc sách' },
    ],
    example: { jp: '図書館で本を読みます。', romaji: 'Toshokan de hon wo yomimasu.', vn: 'Tôi đọc sách ở thư viện.' },
    grammar: { pattern: '場所 ＋ で ＋ アクション', note: 'で (de) chỉ NƠI CHỐN diễn ra hành động.' },
  },
  {
    id: 71, kanji: '書', on: 'ショ', on_rom: 'sho',
    kun: 'か(く)', kun_rom: 'ka(ku)',
    meaning: 'Viết, Sách', group: 'Động Từ',
    mnemonic: '💡 書 = Một bàn tay (phần trên) cầm cây bút (phần giữa) VIẾT lên tờ giấy (日)!',
    vocab: [
      { word: '書く', reading: 'かく', romaji: 'kaku', meaning: 'Viết' },
      { word: '辞書', reading: 'じしょ', romaji: 'jisho', meaning: 'Từ điển' },
      { word: '図書館', reading: 'としょかん', romaji: 'toshokan', meaning: 'Thư viện' },
    ],
    example: { jp: 'ノートに名前を書きます。', romaji: 'Nouto ni namae wo kakimasu.', vn: 'Tôi viết tên vào vở.' },
    grammar: { pattern: '物に〜を書きます', note: 'Viết VÀO đâu dùng trợ từ に.' },
  },
  {
    id: 72, kanji: '話', on: 'ワ', on_rom: 'wa',
    kun: 'はな(す)・はなし', kun_rom: 'hana(su) / hanashi',
    meaning: 'Nói chuyện', group: 'Động Từ',
    mnemonic: '💡 話 = Lời nói (言 - Ngôn) phát ra từ cái lưỡi (舌 - Thiệt). Dùng miệng NÓI.',
    vocab: [
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: 'Nói chuyện' },
      { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: 'Điện thoại' },
      { word: '会話', reading: 'かいわ', romaji: 'kaiwa', meaning: 'Hội thoại' },
    ],
    example: { jp: '友達と日本語で話します。', romaji: 'Tomodachi to nihongo de hanashimasu.', vn: 'Tôi nói chuyện bằng tiếng Nhật với bạn.' },
    grammar: { pattern: '〜語（で）話す', note: 'で (de) chỉ Phương Tiện/Công cụ (ví dụ: ngôn ngữ).' },
  },
  {
    id: 73, kanji: '買', on: 'バイ', on_rom: 'bai',
    kun: 'か(う)', kun_rom: 'ka(u)',
    meaning: 'Mua', group: 'Động Từ',
    mnemonic: '💡 買 = Con mắt (目) dán chặt vào vỏ sò/tiền (貝). Thèm khát MUA đồ!',
    vocab: [
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: 'Mua' },
      { word: '買い物', reading: 'かいもの', romaji: 'kaimono', meaning: 'Mua sắm' },
    ],
    example: { jp: 'スーパーで肉を買います。', romaji: 'Suupaa de niku wo kaimasu.', vn: 'Tôi mua thịt ở siêu thị.' },
    grammar: { pattern: '〜を買います', note: 'Mua: 買います (kaimasu).' },
  },
  {
    id: 74, kanji: '行', on: 'コウ・ギョウ', on_rom: 'kou / gyou',
    kun: 'い(く)・ゆ(く)・おこな(う)', kun_rom: 'i(ku) / yu(ku) / okona(u)',
    meaning: 'Đi', group: 'Động Từ',
    mnemonic: '💡 行 = Hình ngã tư đường (nhìn như nét băng qua). Tới ngã tư thì ĐI tiếp!',
    vocab: [
      { word: '行く', reading: 'いく', romaji: 'iku', meaning: 'Đi' },
      { word: '旅行', reading: 'りょこう', romaji: 'ryokou', meaning: 'Du lịch' },
      { word: '銀行', reading: 'ぎんこう', romaji: 'ginkou', meaning: 'Ngân hàng' },
    ],
    example: { jp: '日曜日、東京へ行きます。', romaji: 'Nichiyoubi, Toukyou e ikimasu.', vn: 'Chủ nhật, tôi đi Tokyo.' },
    grammar: { pattern: '場所 ＋ へ行く', note: 'へ (e) kết hợp động từ di chuyển (ikimasu) = hướng về.' },
  },
  {
    id: 75, kanji: '出', on: 'シュツ・スイ', on_rom: 'shutsu / sui',
    kun: 'で(る)・だ(す)', kun_rom: 'de(ru) / da(su)',
    meaning: 'Ra, Xuất', group: 'Động Từ',
    mnemonic: '💡 出 = Hai quả núi (山) chồng lên nhau vươn RA ngoài. Đâm chồi/Ra khỏi!',
    vocab: [
      { word: '出る', reading: 'でる', romaji: 'deru', meaning: 'Đi ra, xuất hiện' },
      { word: '出す', reading: 'だす', romaji: 'dasu', meaning: 'Nộp, lấy ra' },
      { word: '出口', reading: 'でぐち', romaji: 'deguchi', meaning: 'Cửa ra' },
    ],
    example: { jp: '部屋を出ます。', romaji: 'Heya wo demasu.', vn: 'Tôi rời khỏi phòng.' },
    grammar: { pattern: '場所 ＋ を出る', note: 'RỜI KHỎI đâu đó dùng trợ từ を (wo).' },
  },
  {
    id: 76, kanji: '入', on: 'ニュウ・ジュ', on_rom: 'nyuu / ju',
    kun: 'はい(る)・い(れる)', kun_rom: 'hai(ru) / i(reru)',
    meaning: 'Vào, Nhập', group: 'Động Từ',
    mnemonic: '💡 入 = Giống chữ 人(Người) nhưng nét dài hơn bên ngoài tỳ VÀO nét ngắn. ĐI VÀO!',
    vocab: [
      { word: '入る', reading: 'はいる', romaji: 'hairu', meaning: 'Vào (tự động từ)' },
      { word: '入れる', reading: 'いれる', romaji: 'ireru', meaning: 'Cho vào (tha động từ)' },
      { word: '入口', reading: 'いりぐち', romaji: 'iriguchi', meaning: 'Cửa vào' },
    ],
    example: { jp: 'お風呂に入ります。', romaji: 'Ofuro ni hairimasu.', vn: 'Tôi vào bồn tắm.' },
    grammar: { pattern: '場所 ＋ に入る', note: 'ĐI VÀO đâu đó dùng trợ từ に (ni).' },
  },
  {
    id: 77, kanji: '休', on: 'キュウ', on_rom: 'kyuu',
    kun: 'やす(む)・やす(み)', kun_rom: 'yasu(mu) / yasu(mi)',
    meaning: 'Nghỉ ngơi', group: 'Động Từ',
    mnemonic: '💡 休 = Người (亻) tựa lưng vào bóng Cây (木) để NGHỈ NGƠI.',
    vocab: [
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: 'Nghỉ ngơi, vắng mặt' },
      { word: '休み', reading: 'やすみ', romaji: 'yasumi', meaning: 'Kỳ nghỉ, việc nghỉ ngơi' },
      { word: '夏休み', reading: 'なつやすみ', romaji: 'natsuyasumi', meaning: 'Nghỉ hè' },
    ],
    example: { jp: '今日は学校を休みます。', romaji: 'Kyou wa gakkou wo yasumimasu.', vn: 'Hôm nay tôi nghỉ học.' },
    grammar: { pattern: '名詞＋を休む', note: 'Nghỉ CÁI GÌ (nghỉ học/làm) dùng を (wo).' },
  },
  {
    id: 78, kanji: '来', on: 'ライ', on_rom: 'rai',
    kun: 'く(る)・きた(る)', kun_rom: 'ku(ru) / kita(ru)',
    meaning: 'Đến, Tương lai', group: 'Động Từ',
    mnemonic: '💡 来 = Hình ảnh một chậu lúa non. Thóc lúa mọc lên mang lại TƯƠNG LAI rực rỡ mang ĐẾN mùa màng!',
    vocab: [
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: 'Đến (kuru)' },
      { word: '来ます', reading: 'きます', romaji: 'kimasu', meaning: 'Đến (lịch sự)' },
      { word: '来週', reading: 'らいしゅう', romaji: 'raishuu', meaning: 'Tuần sau' },
    ],
    example: { jp: '田中さんがうちに来ました。', romaji: 'Tanaka-san ga uchi ni kimashita.', vn: 'Anh Tanaka đã đến nhà tôi.' },
    grammar: { pattern: '〜に来る (kimasu)', note: 'Đây là động từ nhóm 3 (bất quy tắc): kuru → kimasu.' },
  },
  {
    id: 79, kanji: '立', on: 'リツ・リュウ', on_rom: 'ritsu / ryuu',
    kun: 'た(つ)・た(てる)', kun_rom: 'ta(tsu) / ta(teru)',
    meaning: 'Đứng, Thành lập', group: 'Động Từ',
    mnemonic: '💡 立 = Con người dang hai tay, chân duỗi thẳng bám chặt mặt đất → ĐỨNG',
    vocab: [
      { word: '立つ', reading: 'たつ', romaji: 'tatsu', meaning: 'Đứng lên, đứng dậy' },
      { word: '国立', reading: 'こくりつ', romaji: 'kokuritsu', meaning: 'Quốc lập (quốc gia)' },
    ],
    example: { jp: '立ってください。', romaji: 'Tatte kudasai.', vn: 'Xin hãy đứng lên.' },
    grammar: { pattern: 'V-てください', note: 'Hãy... (Tatsu → Tatte kudasai).' },
  },
  {
    id: 80, kanji: '学', on: 'ガク', on_rom: 'gaku',
    kun: 'まな(ぶ)', kun_rom: 'mana(bu)',
    meaning: 'Học', group: 'Động Từ',
    mnemonic: '💡 学 = Một đứa trẻ (子 - tử) ngồi dưới mài lợp (ngoặc trên) để HỌC kiến thức!',
    vocab: [
      { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: 'Học sinh, sinh viên' },
      { word: '学校', reading: 'がっこう', romaji: 'gakkou', meaning: 'Trường học' },
      { word: '学ぶ', reading: 'まなぶ', romaji: 'manabu', meaning: 'Học, nghiên cứu' },
    ],
    example: { jp: '日本語の学校で勉強します。', romaji: 'Nihongo no gakkou de benkyou shimasu.', vn: 'Tôi học tại trường tiếng Nhật.' },
    grammar: { pattern: '〜で〜ます', note: 'Trợ từ で chỉ địa điểm xảy ra hành động (benkyou - học)' },
  },
  // ── Đời Sống & Hiện Đại ───────────────────────────────────────────────────
  {
    id: 81, kanji: '車', on: 'シャ', on_rom: 'sha',
    kun: 'くるま', kun_rom: 'kuruma',
    meaning: 'Xe, Ô tô', group: 'Đời Sống',
    mnemonic: '💡 車 = Hình ròng rọc hoặc chiếc xe ngựa đẩy có 2 bánh ở trên và dưới',
    vocab: [
      { word: '車', reading: 'くるま', romaji: 'kuruma', meaning: 'Ô tô' },
      { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: 'Tàu điện' },
      { word: '自転車', reading: 'じてんしゃ', romaji: 'jitensha', meaning: 'Xe đạp' },
    ],
    example: { jp: '車で会社へ行きます。', romaji: 'Kuruma de kaisha e ikimasu.', vn: 'Tôi đi đến công ty bằng ô tô.' },
    grammar: { pattern: 'Phương tiện + で', note: 'Đi bằng phương tiện gì dùng trợ từ で.' },
  },
  {
    id: 82, kanji: '電', on: 'デン', on_rom: 'den',
    kun: '—', kun_rom: '—',
    meaning: 'Điện', group: 'Đời Sống',
    mnemonic: '💡 電 = Bộ Vũ (雨 - Mưa) và điền (田 - Ruộng) cùng cái đuôi sấm sét. Mưa bão có ĐIỆN chớp xẹt dứa ruộng!',
    vocab: [
      { word: '電気', reading: 'でんき', romaji: 'denki', meaning: 'Điện, đèn điện' },
      { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: 'Tàu điện' },
      { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: 'Điện thoại' },
    ],
    example: { jp: '電気を消してください。', romaji: 'Denki wo keshite kudasai.', vn: 'Vui lòng tắt điện.' },
    grammar: { pattern: '〜を消す (kesu)', note: 'Tắt thiết bị điện dùng động từ kesu.' },
  },
  {
    id: 83, kanji: '語', on: 'ゴ', on_rom: 'go',
    kun: 'かた(る)', kun_rom: 'kata(ru)',
    meaning: 'Ngôn ngữ', group: 'Xã Hội',
    mnemonic: '💡 語 = Lời nói (言) chia ra năm (五) cái miệng (口). Ngôn ngữ để giao tiếp!',
    vocab: [
      { word: '日本語', reading: 'にほんご', romaji: 'nihongo', meaning: 'Tiếng Nhật' },
      { word: '英語', reading: 'えいご', romaji: 'eigo', meaning: 'Tiếng Anh' },
      { word: '外国語', reading: 'がいこくご', romaji: 'gaikokugo', meaning: 'Ngoại ngữ' },
    ],
    example: { jp: '英語が少し分かります。', romaji: 'Eigo ga sukoshi wakarimasu.', vn: 'Tôi hiểu một chút tiếng Anh.' },
    grammar: { pattern: '少し〜 (sukoshi)', note: 'Phó từ chỉ mức độ (một chút).' },
  },
  {
    id: 84, kanji: '国', on: 'コク', on_rom: 'koku',
    kun: 'くに', kun_rom: 'kuni',
    meaning: 'Quốc gia', group: 'Xã Hội',
    mnemonic: '💡 国 = Viên ngọc (玉) được bao quanh bởi bức tường (囗) là biên giới Quốc Gia',
    vocab: [
      { word: '国', reading: 'くに', romaji: 'kuni', meaning: 'Đất nước' },
      { word: '外国', reading: 'がいこく', romaji: 'gaikoku', meaning: 'Nước ngoài' },
      { word: '中国', reading: 'ちゅうごく', romaji: 'Chuugoku', meaning: 'Trung Quốc' },
    ],
    example: { jp: '私のお国はベトナムです。', romaji: 'Watashi no okuni wa Betonamu desu.', vn: 'Đất nước của tôi là Việt Nam.' },
    grammar: { pattern: 'お国 (okuni)', note: 'Dùng お để thể hiện sự lịch sự khi nói về nước của người khác.' },
  },
  {
    id: 85, kanji: '生', on: 'セイ・ショウ', on_rom: 'sei / shou',
    kun: 'い(きる)・う(まれる)', kun_rom: 'i(kiru) / u(mareru)',
    meaning: 'Sinh, Sống', group: 'Xã Hội',
    mnemonic: '💡 生 = Cây non đâm chồi vươn lên mặt đất → Sự Tồn Tại, Sống sót.',
    vocab: [
      { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: 'Giáo viên' },
      { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: 'Học sinh' },
      { word: '生まれる', reading: 'うまれる', romaji: 'umareru', meaning: 'Được sinh ra' },
    ],
    example: { jp: '私は日本で生まれました。', romaji: 'Watashi wa Nihon de umaremashita.', vn: 'Tôi được sinh ra ở Nhật Bản.' },
    grammar: { pattern: '〜で生まれました', note: 'で (de) sử dụng để diễn đạt nơi chốn sinh ra.' },
  },
  {
    id: 86, kanji: '先', on: 'セン', on_rom: 'sen',
    kun: 'さき', kun_rom: 'saki',
    meaning: 'Trước', group: 'Xã Hội',
    mnemonic: '💡 先 = Người (儿) đội đất đai (土) bước ĐI TRƯỚC dẫn đường.',
    vocab: [
      { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: 'Giáo viên' },
      { word: '先週', reading: 'せんしゅう', romaji: 'senshuu', meaning: 'Tuần trước' },
      { word: '来月', reading: 'らいげつ', romaji: 'raigetsu', meaning: 'Tháng sau' },
    ],
    example: { jp: '先週、京都へ行きました。', romaji: 'Senshuu, Kyouto e ikimashita.', vn: 'Tuần trước, tôi đã đi Kyoto.' },
    grammar: { pattern: '〜へ行きました', note: 'Quá khứ của ikimasu -> ikimashita.' },
  },
  {
    id: 87, kanji: '名', on: 'メイ・ミョウ', on_rom: 'mei / myou',
    kun: 'な', kun_rom: 'na',
    meaning: 'Tên, Danh', group: 'Xã Hội',
    mnemonic: '💡 名 = Chữ Khẩu (口 - Miệng) và Tịch (夕 - Chiều tối). Trong đêm tối ko thấy gì phải MỞ MIỆNG gọi TÊN!',
    vocab: [
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: 'Tên' },
      { word: '有名', reading: 'ゆうめい', romaji: 'yuumei', meaning: 'Nổi tiếng' },
    ],
    example: { jp: 'お名前は何ですか。', romaji: 'Onamae wa nan desu ka.', vn: 'Tên bạn là gì?' },
    grammar: { pattern: 'お名前 (onamae)', note: 'お + namae = lịch sự khi hỏi tên người khác.' },
  },
  {
    id: 88, kanji: '本', on: 'ホン', on_rom: 'hon',
    kun: 'もと', kun_rom: 'moto',
    meaning: 'Sách, Gốc', group: 'Sự Vật',
    mnemonic: '💡 本 = Cây (木) bị đánh dấu một vạch ở DƯỚI GỐC → Gốc rễ. Gỗ mỏng gập lại thành SÁCH.',
    vocab: [
      { word: '本', reading: 'ほん', romaji: 'hon', meaning: 'Sách' },
      { word: '日本', reading: 'にほん', romaji: 'nihon', meaning: 'Nhật Bản (Gốc của Mặt Trời)' },
      { word: '山田さん', reading: 'やまださん', romaji: 'Yamada-san', meaning: 'Anh Yamada' },
    ],
    example: { jp: 'この本はおもしろいです。', romaji: 'Kono hon wa omoshiroi desu.', vn: 'Cuốn sách này thú vị.' },
    grammar: { pattern: 'Kono N は', note: 'Kono + danh từ = Cái (danh từ) này...' },
  },
  // ── Tính từ Kích độ/Màu sắc ───────────────────────────────────────────────
  {
    id: 89, kanji: '黒', on: 'コク', on_rom: 'koku',
    kun: 'くろ・くろ(い)', kun_rom: 'kuro / kuro(i)',
    meaning: 'Đen', group: 'Màu Sắc',
    mnemonic: '💡 黒 = Làng (里) bị lửa (灬) đốt cháy rụi thành tro ĐEN!',
    vocab: [
      { word: '黒い', reading: 'くろい', romaji: 'kuroi', meaning: 'Màu đen' },
      { word: '黒板', reading: 'こくばん', romaji: 'kokuban', meaning: 'Bảng đen' },
    ],
    example: { jp: '黒いかばんを買いました。', romaji: 'Kuroi kaban wo kaimashita.', vn: 'Tôi đã mua chiếc cặp màu đen.' },
    grammar: { pattern: 'Tính từ + Danh từ', note: 'Kuroi là tính từ đuôi i, đi trực tiếp với kaban.' },
  },
  {
    id: 90, kanji: '赤', on: 'セキ・シャク', on_rom: 'seki / shaku',
    kun: 'あか・あか(い)', kun_rom: 'aka / aka(i)',
    meaning: 'Đỏ', group: 'Màu Sắc',
    mnemonic: '💡 赤 = Lửa cháy (灬) bốc lên ngùn ngụt ĐỎ rực trên ngọn đất (土)!',
    vocab: [
      { word: '赤い', reading: 'あかい', romaji: 'akai', meaning: 'Đỏ' },
      { word: '赤ちゃん', reading: 'あかちゃん', romaji: 'akachan', meaning: 'Em bé sơ sinh' },
    ],
    example: { jp: 'このりんごは赤いです。', romaji: 'Kono ringo wa akai desu.', vn: 'Quả táo này màu đỏ.' },
    grammar: { pattern: '〜はあかいです', note: 'akai hoạt động như một tính từ chỉ màu sắc.' },
  },
  {
    id: 91, kanji: '青', on: 'セイ・ショウ', on_rom: 'sei / shou',
    kun: 'あお・あお(い)', kun_rom: 'ao / ao(i)',
    meaning: 'Xanh', group: 'Màu Sắc',
    mnemonic: '💡 青 = Ở trên là bộ Sinh (生-Sinh trưởng), ở dưới là Nguyệt (月). Cây sinh trưởng có lá XANH ngắt!',
    vocab: [
      { word: '青い', reading: 'あおい', romaji: 'aoi', meaning: 'Màu xanh (dương/lục)' },
      { word: '青年', reading: 'せいねん', romaji: 'seinen', meaning: 'Thanh niên' },
    ],
    example: { jp: '海がとても青いです。', romaji: 'Umi ga totemo aoi desu.', vn: 'Biển rất xanh.' },
    grammar: { pattern: 'とても (totemo)', note: 'Theo sau là tính từ, mang nghĩa "rất".' },
  },
  {
    id: 92, kanji: '長', on: 'チョウ', on_rom: 'chou',
    kun: 'なが(い)', kun_rom: 'naga(i)',
    meaning: 'Dài, Trưởng', group: 'Kích Thước',
    mnemonic: '💡 長 = Ông già (trưởng bối) có bộ râu rất DÀI kéo xuống.',
    vocab: [
      { word: '長い', reading: 'ながい', romaji: 'nagai', meaning: 'Dài' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachou', meaning: 'Giám đốc' },
      { word: '校長', reading: 'こうちょう', romaji: 'kouchou', meaning: 'Hiệu trưởng' },
    ],
    example: { jp: '彼女の髪は長いです。', romaji: 'Kanojo no kami wa nagai desu.', vn: 'Tóc của cô ấy dài.' },
    grammar: { pattern: '彼女 / 彼', note: 'Kanojo = cô ấy, Kare = anh ấy.' },
  },
  {
    id: 93, kanji: '多', on: 'タ', on_rom: 'ta',
    kun: 'おお(い)', kun_rom: 'oo(i)',
    meaning: 'Nhiều', group: 'Kích Thước',
    mnemonic: '💡 多 = Hai chữ Tịch (夕 - Buổi chiều) chồng lên nhau → Hết ngày này qua ngày khác → RẤT NHIỀU!',
    vocab: [
      { word: '多い', reading: 'おおい', romaji: 'ooi', meaning: 'Nhiều' },
      { word: '多分', reading: 'たぶん', romaji: 'tabun', meaning: 'Có lẽ, đa phần' },
    ],
    example: { jp: '公園に人が多いです。', romaji: 'Kouen ni hito ga ooi desu.', vn: 'Ở công viên có nhiều người.' },
    grammar: { pattern: 'N + が多い', note: 'Vật gì nhiều ta không bổ nghĩa trực tiếp mà dùng cấu trúc [N] ga ooi.' },
  },
  {
    id: 94, kanji: '少', on: 'ショウ', on_rom: 'shou',
    kun: 'すく(ない)・すこ(し)', kun_rom: 'suku(nai) / suko(shi)',
    meaning: 'Ít, Thiếu', group: 'Kích Thước',
    mnemonic: '💡 少 = Chữ Tiểu (小) bị khuyết đi 1 phần ở dưới → Đã bé lại còn ÍT.',
    vocab: [
      { word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: 'Ít (Số lượng)' },
      { word: '少し', reading: 'すこし', romaji: 'sukoshi', meaning: 'Một chút' },
    ],
    example: { jp: '時間が少ないです。', romaji: 'Jikan ga sukunai desu.', vn: 'Thời gian còn ít.' },
    grammar: { pattern: 'N + が少ない', note: 'Tương tự ooi (nhiều), ta dùng N ga sukunai.' },
  },
  {
    id: 95, kanji: '安', on: 'アン', on_rom: 'an',
    kun: 'やす(い)', kun_rom: 'yasu(i)',
    meaning: 'Rẻ, An toàn', group: 'Tính Từ',
    mnemonic: '💡 安 = Người phụ nữ (女) ở dưới mái nhà (宀) cảm thấy AN TOÀN và bình YÊN.',
    vocab: [
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: 'Rẻ' },
      { word: '安全', reading: 'あんぜん', romaji: 'anzen', meaning: 'An toàn' },
    ],
    example: { jp: 'あの店のパンは安いです。', romaji: 'Ano mise no pan wa yasui desu.', vn: 'Bánh mì cửa hàng kia rẻ.' },
    grammar: { pattern: '〜は安いです', note: 'Thường dùng để mô tả giá cả hoặc sự an toàn.' },
  },
  {
    id: 96, kanji: '新', on: 'シン', on_rom: 'shin',
    kun: 'あたら(しい)', kun_rom: 'atara(shii)',
    meaning: 'Mới', group: 'Tính Từ',
    mnemonic: '💡 新 = Đứng trên cây cầm cái rìu (斤) chặt đốn → Tạo ra điều MỚI MẺ!',
    vocab: [
      { word: '新しい', reading: 'あたらしい', romaji: 'atarashii', meaning: 'Mới' },
      { word: '新聞', reading: 'しんぶん', romaji: 'shinbun', meaning: 'Báo chí (tin mới)' },
      { word: '新年', reading: 'しんねん', romaji: 'shinnen', meaning: 'Năm mới' },
    ],
    example: { jp: '新しいパソコンを買いました。', romaji: 'Atarashii pasokon wo kaimashita.', vn: 'Tôi đã mua máy tính mới.' },
    grammar: { pattern: 'Tính từ + N', note: 'atarashii đứng trước danh từ để bổ nghĩa.' },
  },
  {
    id: 97, kanji: '古', on: 'コ', on_rom: 'ko',
    kun: 'ふる(い)', kun_rom: 'furu(i)',
    meaning: 'Cũ', group: 'Tính Từ',
    mnemonic: '💡 古 = Chữ Thập (十 - Mười) đặt trên Khẩu (口 - Miệng): Một câu nói lưu truyền 10 đời -> Rất CŨ/CỔ.',
    vocab: [
      { word: '古い', reading: 'ふるい', romaji: 'furui', meaning: 'Cũ' },
      { word: '中古', reading: 'ちゅうこ', romaji: 'chuuko', meaning: 'Đồ dùng rồi, Seconhand' },
    ],
    example: { jp: 'この時計は古いです。', romaji: 'Kono tokei wa furui desu.', vn: 'Cái đồng hồ này cũ.' },
    grammar: { pattern: '〜は古いです', note: 'Chỉ dùng furui cho đồ vật cũ, không dùng cho người già.' },
  },
  {
    id: 98, kanji: '早', on: 'ソウ', on_rom: 'sou',
    kun: 'はや(い)', kun_rom: 'haya(i)',
    meaning: 'Sớm, Nhanh', group: 'Thời Gian',
    mnemonic: '💡 早 = Mặt trời (日) đội mũ Thập (十 - Vương miện) vừa nhô lên -> Trời sáng SỚM.',
    vocab: [
      { word: '早い', reading: 'はやい', romaji: 'hayai', meaning: 'Sớm, nhanh' },
      { word: '早く', reading: 'はやく', romaji: 'hayaku', meaning: 'Sớm (trạng từ)' },
    ],
    example: { jp: '早く起きてください。', romaji: 'Hayaku okite kudasai.', vn: 'Xin hãy dậy sớm.' },
    grammar: { pattern: '〜く + V', note: 'Tính từ -i đổi i thành ku sẽ trở thành trạng từ.' },
  },
  // ── Địa điểm & Cơ sở ──────────────────────────────────────────────────────
  {
    id: 99, kanji: '会', on: 'カイ・エ', on_rom: 'kai / e',
    kun: 'あ(う)', kun_rom: 'a(u)',
    meaning: 'Gặp gỡ, Hội', group: 'Động Từ',
    mnemonic: '💡 会 = Hai người đứng dưới mái nhà tụ HỘI nói CHUYỆN (云 - vân) với nhau.',
    vocab: [
      { word: '会う', reading: 'あう', romaji: 'au', meaning: 'Gặp gỡ' },
      { word: '会社', reading: 'かいしゃ', romaji: 'kaisha', meaning: 'Công ty' },
      { word: '会話', reading: 'かいわ', romaji: 'kaiwa', meaning: 'Hội thoại' },
    ],
    example: { jp: '明日、友達に会います。', romaji: 'Ashita, tomodachi ni aimasu.', vn: 'Ngày mai tôi gặp bạn.' },
    grammar: { pattern: '人 ＋ に会う', note: 'Gặp ai dùng trợ từ に (ni).' },
  },
  {
    id: 100, kanji: '社', on: 'シャ・ジャ', on_rom: 'sha / ja',
    kun: 'やしろ', kun_rom: 'yashiro',
    meaning: 'Công ty, Xã', group: 'Xã Hội',
    mnemonic: '💡 社 = Thổ (土 - Đất đai) kết hợp với Thị (Thần linh chỉ thị): Tụ hội XÃ hội, công ty...',
    vocab: [
      { word: '会社', reading: 'かいしゃ', romaji: 'kaisha', meaning: 'Công ty' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachou', meaning: 'Cổ đông, giám đốc' },
      { word: '社会', reading: 'しゃかい', romaji: 'shakai', meaning: 'Xã hội' },
    ],
    example: { jp: '父は会社で働いています。', romaji: 'Chichi wa kaisha de hataraite imasu.', vn: 'Bố tôi đang làm việc ở công ty.' },
    grammar: { pattern: '〜で働いています', note: 'Diễn tả trạng thái nghề nghiệp hiện tại (hataraite imasu).' },
  },
  {
    id: 101, kanji: '店', on: 'テン', on_rom: 'ten',
    kun: 'みせ', kun_rom: 'mise',
    meaning: 'Cửa hàng', group: 'Xã Hội',
    mnemonic: '💡 店 = Mái hiên ở trên và bảng hiệu ở dưới. Đó chính là CỬA HÀNG!',
    vocab: [
      { word: '店', reading: 'みせ', romaji: 'mise', meaning: 'Cửa tiệm' },
      { word: '喫茶店', reading: 'きっさてん', romaji: 'kissaten', meaning: 'Quán nước, quán cafe' },
      { word: '店員', reading: 'てんいん', romaji: 'tenin', meaning: 'Nhân viên cửa hàng' },
    ],
    example: { jp: 'あの店はおいしいです。', romaji: 'Ano mise wa oishii desu.', vn: 'Cửa hàng kia ngon.' },
    grammar: { pattern: 'あの (Ano)', note: 'Ano = Kia, dùng chỉ thứ ở xa cả người nói và người nghe.' },
  },
  {
    id: 102, kanji: '駅', on: 'エキ', on_rom: 'eki',
    kun: '—', kun_rom: '—',
    meaning: 'Nhà ga', group: 'Đời Sống',
    mnemonic: '💡 駅 = Con ngựa (馬) dừng chân lại đo đạc tấc đất nghỉ ngơi trước khi lên TÀU.',
    vocab: [
      { word: '駅', reading: 'えき', romaji: 'eki', meaning: 'Nhà ga' },
      { word: '駅員', reading: 'えきいん', romaji: 'ekiin', meaning: 'Nhân viên nhà ga' },
      { word: '東京駅', reading: 'とうきょうえき', romaji: 'Toukyou-eki', meaning: 'Ga Tokyo' },
    ],
    example: { jp: '駅まで歩きます。', romaji: 'Eki made arukimasu.', vn: 'Tôi đi bộ đến ga.' },
    grammar: { pattern: '〜まで', note: 'made = đến hạn mức/địa điểm (Tới nhà ga).' },
  },
  {
    id: 103, kanji: '道', on: 'ドウ・トウ', on_rom: 'dou / tou',
    kun: 'みち', kun_rom: 'michi',
    meaning: 'Đường, Đạo', group: 'Đời Sống',
    mnemonic: '💡 道 = Người có chiếc cổ (首 - thủ) cao đang bước ĐI trên ĐƯỜNG!',
    vocab: [
      { word: '道', reading: 'みち', romaji: 'michi', meaning: 'Đường phố' },
      { word: '水道', reading: 'すいどう', romaji: 'suidou', meaning: 'Đường ống nước' },
      { word: '書道', reading: 'しょどう', romaji: 'shodou', meaning: 'Thư pháp' },
    ],
    example: { jp: '道を教えてください。', romaji: 'Michi wo oshiete kudasai.', vn: 'Làm ơn chỉ đường cho tôi.' },
    grammar: { pattern: '〜を教える', note: 'oshiete kudasai = xin hãy chỉ cho tôi / dạy cho tôi.' },
  },
  // ── Phụ trợ N5 bổ sung ────────────────────────────────────────────────────
  {
    id: 104, kanji: '天', on: 'テン', on_rom: 'ten',
    kun: 'あまつ', kun_rom: 'amatsu',
    meaning: 'Trời, Thiên', group: 'Tự Nhiên',
    mnemonic: '💡 天 = Người (大) vươn cao với 2 tay 2 chân, còn ở trên đầu (一) chính là TRỜI (Thiên).',
    vocab: [
      { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: 'Thời tiết' },
      { word: '天国', reading: 'てんごく', romaji: 'tengoku', meaning: 'Thiên đường' },
    ],
    example: { jp: '今日はいい天気ですね。', romaji: 'Kyou wa ii tenki desu ne.', vn: 'Hôm nay thời tiết đẹp nhỉ.' },
    grammar: { pattern: 'いい (ii)', note: 'いい có nghĩa là Tốt/Đẹp, bất quy tắc của yoi.' },
  },
  {
    id: 105, kanji: '花', on: 'カ', on_rom: 'ka',
    kun: 'はな', kun_rom: 'hana',
    meaning: 'Hoa', group: 'Tự Nhiên',
    mnemonic: '💡 花 = Cây cỏ (艹) hóa (化) thành HOA.',
    vocab: [
      { word: '花', reading: 'はな', romaji: 'hana', meaning: 'Bông hoa' },
      { word: '花見', reading: 'はなみ', romaji: 'hanami', meaning: 'Lễ hội ngắm hoa' },
      { word: '花火', reading: 'はなび', romaji: 'hanabi', meaning: 'Pháo hoa' },
    ],
    example: { jp: 'きれいな花が咲きました。', romaji: 'Kirei na hana ga sakimashita.', vn: 'Hoa đẹp đã nở.' },
    grammar: { pattern: 'Na-Adj + な + NDanh Từ', note: 'Kirei là tính từ Na -> kirei na hana.' },
  },
  {
    id: 106, kanji: '帰', on: 'キ', on_rom: 'ki',
    kun: 'かえ(る)', kun_rom: 'kae(ru)',
    meaning: 'Hồi, Trở về', group: 'Động Từ',
    mnemonic: '💡 帰 = Sắp xếp đồ đạc bằng cây chổi/cào và vác lên vai TRỞ VỀ nhà.',
    vocab: [
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: 'Trở Về' },
      { word: '帰り', reading: 'かえり', romaji: 'kaeri', meaning: 'Việc đi về, chiều về' },
    ],
    example: { jp: '六時にうちへ帰ります。', romaji: 'Rokuji ni uchi e kaerimasu.', vn: 'Tôi về nhà lúc 6 giờ.' },
    grammar: { pattern: '〜に Vます', note: 'Chỉ thời gian cố định thực hiện hành động.' },
  },
  {
    id: 107, kanji: '言', on: 'ゲン・ゴン', on_rom: 'gen / gon',
    kun: 'い(う)・こと', kun_rom: 'i(u) / koto',
    meaning: 'Ngôn, Nói', group: 'Động Từ',
    mnemonic: '💡 言 = Những nếp nhăn và cái miệng mở ra khi NÓI chuyện.',
    vocab: [
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: 'Nói' },
      { word: '言葉', reading: 'ことば', romaji: 'kotoba', meaning: 'Từ vựng, Ngôn ngữ' },
    ],
    example: { jp: '先生は「がんばって」と言いました。', romaji: 'Sensei wa "Ganbatte" to iimashita.', vn: 'Cô giáo đã nói "Cố lên".' },
    grammar: { pattern: '〜と言う (to iu)', note: 'Trích dẫn lời nói trực tiếp dùng to iu.' },
  },
  {
    id: 108, kanji: '校', on: 'コウ', on_rom: 'kou',
    kun: '—', kun_rom: '—',
    meaning: 'Trường học, Hiệu', group: 'Xã Hội',
    mnemonic: '💡 校 = Có chữ Mộc (Cây) và Giao (Giao nhau). Nơi cây cối râm mát giao lưu bạn bè = TRƯỜNG HỌC.',
    vocab: [
      { word: '学校', reading: 'がっこう', romaji: 'gakkou', meaning: 'Trường học' },
      { word: '校長', reading: 'こうちょう', romaji: 'kouchou', meaning: 'Hiệu trưởng' },
      { word: '小学校', reading: 'しょうがっこう', romaji: 'shougakkou', meaning: 'Trường tiểu học' },
    ],
    example: { jp: '私は学校で日本語を勉強します。', romaji: 'Watashi wa gakkou de nihongo wo benkyou shimasu.', vn: 'Tôi học tiếng Nhật ở trường.' },
    grammar: { pattern: '〜で〜をV', note: 'Làm gì tại địa điểm nào đó dùng trợ từ de.' },
  },
  {
    id: 109, kanji: '売', on: 'バイ', on_rom: 'bai',
    kun: 'う(る)・う(れる)', kun_rom: 'u(ru) / u(reru)',
    meaning: 'Bán', group: 'Động Từ',
    mnemonic: '💡 売 = Trái ngược với việc đi mua. Có 1 võ sĩ (士) dũng cảm đứng lên trên vương miệng (冖) đi BÁN hàng.',
    vocab: [
      { word: '売る', reading: 'うる', romaji: 'uru', meaning: 'Bán' },
      { word: '売り場', reading: 'うりば', romaji: 'uriba', meaning: 'Quầy bán hàng' },
    ],
    example: { jp: 'この店でパンを売っています。', romaji: 'Kono mise de pan wo utte imasu.', vn: 'Cửa hàng này bán bánh mì.' },
    grammar: { pattern: '〜ています (Te iru)', note: 'Chỉ sự việc đang diễn ra hoặc tình trạng kéo dài (đang bán).' },
  },
  {
    id: 110, kanji: '茶', on: 'チャ・サ', on_rom: 'cha / sa',
    kun: '—', kun_rom: '—',
    meaning: 'Trà', group: 'Đời Sống',
    mnemonic: '💡 茶 = Trên là thảo (草), dưới là người hái trà -> TRÀ!',
    vocab: [
      { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: 'Trà xanh' },
      { word: '喫茶店', reading: 'きっさてん', romaji: 'kissaten', meaning: 'Quán cafe, quán nước' },
      { word: '紅茶', reading: 'こうちゃ', romaji: 'koucha', meaning: 'Hồng trà' },
    ],
    example: { jp: 'お茶を飲みませんか。', romaji: 'Ocha wo nomimasen ka.', vn: 'Cùng uống trà đi nhé?' },
    grammar: { pattern: '〜ませんか (masen ka)', note: 'Trợ từ đưa ra lời rủ rê (Có uống trà cùng không).' },
  },
];


/** Lấy 4 đáp án: 1 đúng + 3 sai ngẫu nhiên từ pool */
export function buildOptions(
  correct: KanjiItem,
  field: keyof KanjiItem,
  pool: KanjiItem[],
): string[] {
  const answer = correct[field] as string;
  const wrongs = pool
    .filter((k) => k.id !== correct.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((k) => k[field] as string);
  return [...wrongs, answer].sort(() => Math.random() - 0.5);
}

/** Lấy 4 đáp án từ vựng (1 đúng đọc, 3 sai) từ pool */
export function buildVocabOptions(
  correctWord: string,
  correctReading: string,
  pool: KanjiItem[]
): string[] {
  const allVocabs = pool.flatMap((k) => k.vocab);
  const uniqueWrongs = Array.from(new Set(
    allVocabs
      .filter((v) => v.reading !== correctReading && v.word !== correctWord)
      .map((v) => v.reading)
  ));
  
  const wrongs = uniqueWrongs
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
    
  return [...wrongs, correctReading].sort(() => Math.random() - 0.5);
}

