import { NihongoLesson } from './types';
import { readings } from '../readings/reading9';

const lesson: NihongoLesson = {
  "id": 9,
  "chapter": "第9課",
  "title": "残念です",
  "titleVn": "Bài 9: Tiếc quá",
  "theme": "Sở thích · Năng lực · Giải thích lý do",
  "words": [
    {
      "id": "L9_01",
      "word": "好き（な）",
      "reading": "すき",
      "romaji": "suki",
      "meaning": "Thích",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "HẢO",
        "components": "好 = 女 (Nữ - Phụ nữ) + 子 (Tử - Đứa trẻ)",
        "story": "Người phụ nữ (女) yêu thương, THÍCH (Hảo) che chở cho đứa trẻ (子).",
        "examples": "好き (Thích), 大好き (Rất thích)"
      }
    },
    {
      "id": "L9_02",
      "word": "嫌い（な）",
      "reading": "きらい",
      "romaji": "kirai",
      "meaning": "Ghét",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "HIỀM",
        "components": "嫌 = 女 (Nữ - Phụ nữ) + 兼 (Kiêm - Gộp/Đồng thời)",
        "story": "Người phụ nữ (女) mà ôm đồm gộp (兼) quá nhiều việc thì thường hay bị GHÉT, hiềm khích.",
        "examples": "嫌い (Ghét)"
      }
    },
    {
      "id": "L9_03",
      "word": "上手（な）",
      "reading": "じょうず",
      "romaji": "jouzu",
      "meaning": "Giỏi, khéo",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "THƯỢNG THỦ",
        "components": "上 (Thượng - Trên) + 手 (Thủ - Tay)",
        "story": "Người có tay (手) nghề thuộc hàng trên (上), tức là làm rất GIỎI, khéo léo.",
        "examples": "上手 (Giỏi)"
      }
    },
    {
      "id": "L9_04",
      "word": "下手（な）",
      "reading": "へた",
      "romaji": "heta",
      "meaning": "Kém, dở",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "HẠ THỦ",
        "components": "下 (Hạ - Dưới) + 手 (Thủ - Tay)",
        "story": "Người có tay (手) nghề thuộc hàng dưới (下), tức là làm KÉM, dở tệ.",
        "examples": "下手 (Kém)"
      }
    },
    {
      "id": "L9_05",
      "word": "飲み物",
      "reading": "のみもの",
      "romaji": "nomimono",
      "meaning": "Đồ uống",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ẨM VẬT",
        "components": "飲 (Ẩm - Uống) + 物 (Vật - Đồ)",
        "story": "Đồ (Vật) dùng để uống (Ẩm).",
        "examples": "飲み物 (Đồ uống)"
      }
    },
    {
      "id": "L9_06",
      "word": "料理",
      "reading": "りょうり",
      "romaji": "ryouri",
      "meaning": "Món ăn, việc nấu ăn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LIÊU LÝ",
        "components": "料 (Liêu - Vật liệu) + 理 (Lý - Xử lý/Lý lẽ)",
        "story": "Xử lý (理) các vật liệu (料) để tạo thành MÓN ĂN (Liêu Lý).",
        "examples": "料理 (Món ăn)"
      }
    },
    {
      "id": "L9_07",
      "word": "スポーツ",
      "reading": "スポーツ",
      "romaji": "supootsu",
      "meaning": "Thể thao",
      "type": "Danh từ"
    },
    {
      "id": "L9_08",
      "word": "野球",
      "reading": "やきゅう",
      "romaji": "yakyuu",
      "meaning": "Bóng chày",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DÃ CẦU",
        "components": "野 (Dã - Cánh đồng) + 球 (Cầu - Quả bóng)",
        "story": "Môn thể thao đánh quả bóng (球) trên cánh đồng (野) rộng là BÓNG CHÀY.",
        "examples": "野球 (Bóng chày)"
      }
    },
    {
      "id": "L9_09",
      "word": "ダンス",
      "reading": "ダンス",
      "romaji": "dansu",
      "meaning": "Khiêu vũ, nhảy",
      "type": "Danh từ"
    },
    {
      "id": "L9_10",
      "word": "音楽",
      "reading": "おんがく",
      "romaji": "ongaku",
      "meaning": "Âm nhạc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ÂM LẠC",
        "components": "音 (Âm - Âm thanh) + 楽 (Lạc - Vui vẻ/Nhạc)",
        "story": "Âm thanh (音) mang lại sự vui vẻ (Lạc) chính là ÂM NHẠC.",
        "examples": "音楽 (Âm nhạc)"
      }
    },
    {
      "id": "L9_11",
      "word": "歌",
      "reading": "うた",
      "romaji": "uta",
      "meaning": "Bài hát",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CA",
        "components": "歌 = 可 (Khả - Khả dĩ) + 可 + 欠 (Khiếm - Thiếu/Mở miệng)",
        "story": "Há miệng (欠) ra ca hát (Khả) để phát ra BÀI HÁT (Ca).",
        "examples": "歌 (Bài hát), 歌う (Hát)"
      }
    },
    {
      "id": "L9_12",
      "word": "クラシック",
      "reading": "クラシック",
      "romaji": "kurashikku",
      "meaning": "Nhạc cổ điển",
      "type": "Danh từ"
    },
    {
      "id": "L9_13",
      "word": "ジャズ",
      "reading": "ジャズ",
      "romaji": "jazu",
      "meaning": "Nhạc Jazz",
      "type": "Danh từ"
    },
    {
      "id": "L9_14",
      "word": "コンサート",
      "reading": "コンサート",
      "romaji": "konsaato",
      "meaning": "Buổi hòa nhạc",
      "type": "Danh từ"
    },
    {
      "id": "L9_15",
      "word": "カラオケ",
      "reading": "カラオケ",
      "romaji": "karaoke",
      "meaning": "Karaoke",
      "type": "Danh từ"
    },
    {
      "id": "L9_16",
      "word": "歌舞伎",
      "reading": "かぶき",
      "romaji": "kabuki",
      "meaning": "Kịch Kabuki",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CA VŨ KỸ",
        "components": "歌 (Ca - Hát) + 舞 (Vũ - Múa) + 伎 (Kỹ - Kỹ năng)",
        "story": "Loại hình nghệ thuật yêu cầu kỹ năng (Kỹ) vừa hát (Ca) vừa múa (Vũ) là Kabuki.",
        "examples": "歌舞伎 (Kịch Kabuki)"
      }
    },
    {
      "id": "L9_17",
      "word": "絵",
      "reading": "え",
      "romaji": "e",
      "meaning": "Tranh, bức tranh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỘI",
        "components": "絵 = 糸 (Mịch - Sợi tơ) + 会 (Hội - Gặp gỡ)",
        "story": "Dùng sợi tơ (糸) thêu dệt lại những cảnh gặp gỡ (会) thành một BỨC TRANH (Hội).",
        "examples": "絵 (Bức tranh)"
      }
    },
    {
      "id": "L9_18",
      "word": "字",
      "reading": "じ",
      "romaji": "ji",
      "meaning": "Chữ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỰ",
        "components": "字 = 宀 (Miên - Mái nhà) + 子 (Tử - Trẻ con)",
        "story": "Trẻ con (子) ở trong nhà (宀) thì phải học CHỮ (Tự).",
        "examples": "字 (Chữ), 漢字 (Hán tự)"
      }
    },
    {
      "id": "L9_19",
      "word": "漢字",
      "reading": "かんじ",
      "romaji": "kanji",
      "meaning": "Chữ Hán",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HÁN TỰ",
        "components": "漢 (Hán - Nước Hán) + 字 (Tự - Chữ)",
        "story": "Chữ (Tự) do người Hán (Hán) tạo ra.",
        "examples": "漢字 (Chữ Hán)"
      }
    },
    {
      "id": "L9_20",
      "word": "細かいお金",
      "reading": "こまかいおかね",
      "romaji": "komakai okane",
      "meaning": "Tiền lẻ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẾ KIM",
        "components": "細 (Tế - Nhỏ/Chi tiết) + お金 (Tiền)",
        "story": "Sợi chỉ (Mịch) đi qua cánh đồng (Điền) bị đứt thành những đoạn nhỏ (Tế). Tiền nhỏ là Tiền lẻ.",
        "examples": "細かい (Nhỏ/Chi tiết)"
      }
    },
    {
      "id": "L9_21",
      "word": "チケット",
      "reading": "チケット",
      "romaji": "chiketto",
      "meaning": "Vé",
      "type": "Danh từ"
    },
    {
      "id": "L9_22",
      "word": "時間",
      "reading": "じかん",
      "romaji": "jikan",
      "meaning": "Thời gian",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỜI GIAN",
        "components": "時 (Thời - Giờ) + 間 (Gian - Ở giữa/Khoảng)",
        "story": "Khoảng ở giữa (Gian) các mốc giờ (Thời) là THỜI GIAN.",
        "examples": "時間 (Thời gian), 一時間 (1 tiếng)"
      }
    },
    {
      "id": "L9_23",
      "word": "用事",
      "reading": "ようじ",
      "romaji": "youji",
      "meaning": "Việc bận",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DỤNG SỰ",
        "components": "用 (Dụng - Dùng) + 事 (Sự - Sự việc)",
        "story": "Sự việc (事) cần phải dùng (用) đến thời gian để giải quyết là VIỆC BẬN.",
        "examples": "用事 (Việc bận)"
      }
    },
    {
      "id": "L9_24",
      "word": "約束",
      "reading": "やくそく",
      "romaji": "yakusoku",
      "meaning": "Cuộc hẹn, lời hứa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ƯỚC THÚC",
        "components": "約 (Ước - Giao ước) + 束 (Thúc - Buộc/Bó)",
        "story": "Giao ước (Ước) ràng buộc (Thúc) lẫn nhau là một CUỘC HẸN, LỜI HỨA.",
        "examples": "約束 (Lời hứa)"
      }
    },
    {
      "id": "L9_25",
      "word": "ご主人",
      "reading": "ごしゅじん",
      "romaji": "goshujin",
      "meaning": "Chồng (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHỦ NHÂN",
        "components": "主 (Chủ - Ông chủ) + 人 (Nhân - Người)",
        "story": "Người làm chủ gia đình là Chồng.",
        "examples": "ご主人 (Chồng người khác)"
      }
    },
    {
      "id": "L9_26",
      "word": "夫",
      "reading": "おっと",
      "romaji": "otto",
      "meaning": "Chồng (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHU",
        "components": "夫 (Phu - Chồng/Đàn ông)",
        "story": "Người đàn ông (Đại) đội mũ (Nhất) để đi làm lễ trưởng thành, sẵn sàng làm Chồng.",
        "examples": "夫 (Chồng mình)"
      }
    },
    {
      "id": "L9_27",
      "word": "奥さん",
      "reading": "おくさん",
      "romaji": "okusan",
      "meaning": "Vợ (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ÁO",
        "components": "奥 (Áo - Phía trong/Sâu)",
        "story": "Người vợ thường ở phía sâu bên trong ngôi nhà để lo nội trợ.",
        "examples": "奥さん (Vợ người khác)"
      }
    },
    {
      "id": "L9_28",
      "word": "妻",
      "reading": "つま",
      "romaji": "tsuma",
      "meaning": "Vợ (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THÊ",
        "components": "妻 (Thê - Vợ)",
        "story": "Người phụ nữ (Nữ) tay cầm chổi lo việc nhà là Vợ.",
        "examples": "妻 (Vợ mình)"
      }
    },
    {
      "id": "L9_29",
      "word": "子ども",
      "reading": "こども",
      "romaji": "kodomo",
      "meaning": "Trẻ con, con cái",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỬ",
        "components": "子 (Tử - Đứa trẻ)",
        "story": "Hình ảnh đứa trẻ sơ sinh đang được quấn tã.",
        "examples": "子ども (Trẻ em/Con cái)"
      }
    },
    {
      "id": "L9_30",
      "word": "よく",
      "reading": "よく",
      "romaji": "yoku",
      "meaning": "Rõ, tốt, thường",
      "type": "Phó từ"
    },
    {
      "id": "L9_31",
      "word": "だいたい",
      "reading": "だいたい",
      "romaji": "daitai",
      "meaning": "Đại khái, khoảng",
      "type": "Phó từ"
    },
    {
      "id": "L9_32",
      "word": "たくさん",
      "reading": "たくさん",
      "romaji": "takusan",
      "meaning": "Nhiều",
      "type": "Phó từ"
    },
    {
      "id": "L9_33",
      "word": "少し",
      "reading": "すこし",
      "romaji": "sukoshi",
      "meaning": "Một chút, ít",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "THIỂU",
        "components": "少 (Thiểu - Ít)",
        "story": "Nhỏ (Tiểu) lại còn bị gạch thêm một nét (Phiệt) nên càng Ít (Thiểu).",
        "examples": "少し (Một chút), 少ない (Ít)"
      }
    },
    {
      "id": "L9_34",
      "word": "全然",
      "reading": "ぜんぜん",
      "romaji": "zenzen",
      "meaning": "Hoàn toàn không (~ phủ định)",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "TOÀN NHIÊN",
        "components": "全 (Toàn - Hoàn toàn) + 然 (Nhiên - Quả nhiên)",
        "story": "Hoàn toàn (Toàn) quả nhiên (Nhiên) là không có gì cả.",
        "examples": "全然 (Hoàn toàn không)"
      }
    },
    {
      "id": "L9_35",
      "word": "早く",
      "reading": "はやく",
      "romaji": "hayaku",
      "meaning": "Sớm, nhanh",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "TẢO",
        "components": "早 (Tảo - Sớm)",
        "story": "Sớm/Nhanh.",
        "examples": "早く (Nhanh/Sớm lên)"
      }
    },
    {
      "id": "L9_36",
      "word": "分かります",
      "reading": "わかります",
      "romaji": "wakarimasu",
      "meaning": "Hiểu, nắm được",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "PHÂN",
        "components": "八 (Bát) + 刀 (Đao)",
        "story": "Dùng dao chia thành 8 phần rành mạch (Hiểu).",
        "examples": "分かります (Hiểu)"
      }
    },
    {
      "id": "L9_37",
      "word": "あります",
      "reading": "あります",
      "romaji": "arimasu",
      "meaning": "Có (sở hữu)",
      "type": "Động từ"
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "好きなこと、できること",
    "titleVn": "❤️ Điều yêu thích, Việc có thể làm",
    "intro": "Tóm tắt bài 9 qua cách diễn đạt Sở thích, Năng lực và Lý do (～から).",
    "lines": [
      {
        "kanji": "私は音楽が好きです、ダンスも好きです。",
        "jp": "わたしは おんがくが すき です、ダンスも すき です。",
        "romaji": "Watashi wa ongaku ga suki desu, dansu mo suki desu.",
        "vn": "Tôi thích âm nhạc, khiêu vũ cũng thích luôn.",
        "note": "好き"
      },
      {
        "kanji": "でも、歌が下手です。全然上手じゃありません。",
        "jp": "でも、うたが へた です。ぜんぜん じょうずじゃ ありません。",
        "romaji": "Demo, uta ga heta desu. Zenzen jouzu ja arimasen.",
        "vn": "Nhưng mà hát thì dở. Hoàn toàn không giỏi chút nào.",
        "note": "歌 · 下手 · 全然 · 上手"
      },
      {
        "kanji": "日本語が少しわかります。漢字もわかります。",
        "jp": "にほんごが すこし わかります。かんじも わかります。",
        "romaji": "Nihongo ga sukoshi wakarimasu. Kanji mo wakarimasu.",
        "vn": "Tôi hiểu tiếng Nhật một chút. Chữ Hán cũng hiểu.",
        "note": "少し · 漢字"
      },
      {
        "kanji": "今日、早く帰ります。用事がありますから。",
        "jp": "きょう、はやく かえります。ようじが ありますから。",
        "romaji": "Kyou, hayaku kaerimasu. Youji ga arimasu kara.",
        "vn": "Hôm nay tôi sẽ về sớm. Bởi vì tôi có việc bận.",
        "note": "早く · 用事 · ～から"
      },
      {
        "kanji": "映画のチケットがあります。一緒に見ませんか？",
        "jp": "えいがの チケットが あります。いっしょに みませんか？",
        "romaji": "Eiga no chiketto ga arimasu. Issho ni mimasen ka?",
        "vn": "Tôi có vé xem phim. Cùng đi xem không?",
        "note": "チケット"
      }
    ]
  }
};

export default lesson;
