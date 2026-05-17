import { NihongoLesson } from './types';
import { readings } from '../readings/reading25';

const lesson: NihongoLesson = {
  "id": 25,
  "chapter": "第25課",
  "title": "たら・ても",
  "titleVn": "Bài 25: Nếu và Mặc dù",
  "theme": "Điều kiện giả định",
  "words": [
    {
      "id": "L25_01",
      "word": "考えます",
      "reading": "かんがえます",
      "romaji": "kangaemasu",
      "meaning": "Suy nghĩ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KHẢO",
        "components": "老 (Lão) + 丂 (Khảo)",
        "story": "Người già thường Suy nghĩ.",
        "examples": "考えます (Suy nghĩ)"
      }
    },
    {
      "id": "L25_02",
      "word": "着きます",
      "reading": "つきます",
      "romaji": "tsukimasu",
      "meaning": "Đến (ga, nơi chốn)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRƯỚC",
        "components": "着 (Trước - Đến)",
        "story": "Đến đích.",
        "examples": "着きます (Đến (ga, nơi chốn))"
      }
    },
    {
      "id": "L25_03",
      "word": "留学します",
      "reading": "りゅうがくします",
      "romaji": "ryuugakushimasu",
      "meaning": "Du học",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LƯU HỌC",
        "components": "留 (Lưu) + 学 (Học)",
        "story": "Ở lại học là Du học.",
        "examples": "留学します (Du học)"
      }
    },
    {
      "id": "L25_04",
      "word": "取ります",
      "reading": "とります",
      "romaji": "torimasu",
      "meaning": "Lấy (tuổi)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ",
        "components": "取 (Thủ - Lấy)",
        "story": "Thêm tuổi/Lấy.",
        "examples": "年を取ります"
      }
    },
    {
      "id": "L25_05",
      "word": "田舎",
      "reading": "いなか",
      "romaji": "inaka",
      "meaning": "Nông thôn, quê",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỀN XÁ",
        "components": "田 (Điền - Đồng ruộng) + 舎 (Xá - Quán trọ)",
        "story": "Nơi chỉ có đồng ruộng và lều cỏ là Nông thôn.",
        "examples": "田舎 (Nông thôn, quê)"
      }
    },
    {
      "id": "L25_06",
      "word": "大使館",
      "reading": "たいしかん",
      "romaji": "taishikan",
      "meaning": "Đại sứ quán",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI SỨ QUÁN",
        "components": "大 (Đại) + 使 (Sứ) + 館 (Quán)",
        "story": "Nơi làm việc của vị sứ giả lớn là Đại sứ quán.",
        "examples": "大使館 (Đại sứ quán)"
      }
    },
    {
      "id": "L25_07",
      "word": "グループ",
      "reading": "グループ",
      "romaji": "guruupu",
      "meaning": "Nhóm",
      "type": "Danh từ"
    },
    {
      "id": "L25_08",
      "word": "チャンス",
      "reading": "チャンス",
      "romaji": "chansu",
      "meaning": "Cơ hội",
      "type": "Danh từ"
    },
    {
      "id": "L25_09",
      "word": "億",
      "reading": "おく",
      "romaji": "oku",
      "meaning": "Trăm triệu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ỨC",
        "components": "亻 (Nhân) + 意 (Ý)",
        "story": "Trăm triệu.",
        "examples": "億 (Trăm triệu)"
      }
    },
    {
      "id": "L25_10",
      "word": "もし",
      "reading": "もし",
      "romaji": "moshi",
      "meaning": "Nếu",
      "type": "Phó từ"
    },
    {
      "id": "L25_11",
      "word": "いくら",
      "reading": "いくら",
      "romaji": "ikura",
      "meaning": "Cho dù",
      "type": "Phó từ"
    },
    {
      "id": "L25_12",
      "word": "転勤",
      "reading": "てんきん",
      "romaji": "tenkin",
      "meaning": "Chuyển công tác",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHUYỂN CẦN",
        "components": "転 (Chuyển) + 勤 (Cần - Đi làm)",
        "story": "Chuyển nơi làm việc.",
        "examples": "転勤 (Chuyển công tác)"
      }
    },
    {
      "id": "L25_13",
      "word": "こと",
      "reading": "こと",
      "romaji": "koto",
      "meaning": "Việc",
      "type": "Danh từ"
    },
    {
      "id": "L25_14",
      "word": "一杯飲みましょう",
      "reading": "いっぱいのみましょう",
      "romaji": "ippai nomimashou",
      "meaning": "Cùng uống 1 ly nhé",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "BÔI ẨM",
        "components": "杯 (Bôi - Ly) + 飲 (Ẩm - Uống)",
        "story": "Cùng nâng ly uống nhé.",
        "examples": "一杯飲みましょう (Cùng uống 1 ly nhé)"
      }
    },
    {
      "id": "L25_15",
      "word": "いろいろお世話になりました",
      "reading": "いろいろおせわになりました",
      "romaji": "iroiro osewa ni narimashita",
      "meaning": "Cảm ơn đã giúp đỡ tôi",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "THẾ THOẠI",
        "components": "世話 (Thế Thoại)",
        "story": "Cảm ơn đã giúp đỡ.",
        "examples": "お世話になりました (Cảm ơn đã giúp đỡ tôi)"
      }
    },
    {
      "id": "L25_16",
      "word": "頑張ります",
      "reading": "がんばります",
      "romaji": "ganbarimasu",
      "meaning": "Cố gắng",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NGOAN TRƯƠNG",
        "components": "頑 (Ngoan - Cứng đầu) + 張 (Trương - Kéo căng)",
        "story": "Kéo căng sức mạnh ý chí kiên định (Cố gắng).",
        "examples": "頑張ります (Cố gắng)"
      }
    },
    {
      "id": "L25_17",
      "word": "どうぞお元気で",
      "reading": "どうぞおげんきで",
      "romaji": "douzo ogenki de",
      "meaning": "Chúc mạnh khỏe (Khi chia tay)",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "NGUYÊN KHÍ",
        "components": "元気 (Nguyên khí)",
        "story": "Chúc mạnh khỏe.",
        "examples": "どうぞお元気で (Chúc mạnh khỏe)"
      }
    },
    {
      "id": "L25_18",
      "word": "年を取ります",
      "reading": "としをとります",
      "romaji": "toshi o torimasu",
      "meaning": "Thêm tuổi, già đi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NIÊN THỦ",
        "components": "年 (Niên - Năm) + 取 (Thủ - Lấy)",
        "story": "Lấy thêm năm (Thêm tuổi).",
        "examples": "年を取ります (Thêm tuổi, già đi)"
      }
    },
    {
      "id": "L25_19",
      "word": "足ります",
      "reading": "たります",
      "romaji": "tarimasu",
      "meaning": "Đủ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TÚC",
        "components": "足 (Túc - Chân/Đầy đủ)",
        "story": "Hình ảnh cái chân, hàm ý Đủ.",
        "examples": "足ります (Đủ)"
      }
    },
    {
      "id": "L25_20",
      "word": "もし（〜たら）",
      "reading": "もし",
      "romaji": "moshi",
      "meaning": "Nếu (~ thì)",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "NHƯỢC",
        "components": "Không có Kanji ở N5",
        "story": "Nếu... thì...",
        "examples": "もし (Nếu (~ thì))"
      }
    },
    {
      "id": "L25_21",
      "word": "いくら（〜ても）",
      "reading": "いくら",
      "romaji": "ikura",
      "meaning": "Cho dù (~ đi nữa)",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "BẤT CƯ",
        "components": "Không có Kanji ở N5",
        "story": "Cho dù...",
        "examples": "いくら (Cho dù (~ đi nữa))"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
