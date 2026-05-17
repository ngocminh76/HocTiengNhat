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
    },
    {
      "id": "L9_38",
      "word": "ひらがな",
      "reading": "ひらがな",
      "romaji": "hiragana",
      "meaning": "Chữ Hiragana",
      "type": "Danh từ"
    },
    {
      "id": "L9_39",
      "word": "かたかな",
      "reading": "かたかな",
      "romaji": "katakana",
      "meaning": "Chữ Katakana",
      "type": "Danh từ"
    },
    {
      "id": "L9_40",
      "word": "ローマ字",
      "reading": "ローマじ",
      "romaji": "roomaji",
      "meaning": "Chữ Romaji",
      "type": "Danh từ"
    },
    {
      "id": "L9_41",
      "word": "～から",
      "reading": "～から",
      "romaji": "~kara",
      "meaning": "Vì ~ (chỉ lý do)",
      "type": "Liên từ"
    },
    {
      "id": "L9_42",
      "word": "どうして",
      "reading": "どうして",
      "romaji": "doushite",
      "meaning": "Tại sao",
      "type": "Từ hỏi"
    },
    {
      "id": "L9_43",
      "word": "残念です",
      "reading": "ざんねんです",
      "romaji": "zannen desu",
      "meaning": "Thật đáng tiếc nhỉ",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "TÀN NIỆM",
        "components": "残 (Tàn - Tàn dư/Sót lại) + 念 (Niệm - Ý niệm/Suy nghĩ)",
        "story": "Ý niệm (Niệm) tiếc nuối vẫn còn sót lại (Tàn).",
        "examples": "残念です (Thật đáng tiếc)"
      }
    },
    {
      "id": "L9_44",
      "word": "すみません",
      "reading": "すみません",
      "romaji": "sumimasen",
      "meaning": "Xin lỗi",
      "type": "Mẫu câu"
    }
  ],
  "grammar": [
    {
      "title": "N が あります / わかります",
      "structure": "N(đối tượng) が あります / わかります",
      "usage": "Động từ chỉ sự sở hữu (あります - có) và động từ chỉ sự hiểu biết/khả năng (わかります - hiểu) lấy trợ từ が để chỉ đối tượng (khác với động từ hành động dùng を).",
      "examples": [
        {
          "jp": "わたしは くるまが あります。",
          "romaji": "watashi wa kuruma ga arimasu.",
          "vn": "Tôi có ô tô."
        },
        {
          "jp": "わたしは にほんごが わかります。",
          "romaji": "watashi wa nihongo ga wakarimasu.",
          "vn": "Tôi hiểu tiếng Nhật."
        }
      ]
    },
    {
      "title": "N が 好き / 嫌い / 上手 / 下手 です",
      "structure": "N(đối tượng) が すき / きらい / じょうず / へた です",
      "usage": "Các tính từ chỉ sở thích (すき - thích, きらい - ghét) và tính từ chỉ năng lực (じょうず - giỏi, へた - kém) cũng lấy trợ từ が để biểu thị đối tượng.",
      "examples": [
        {
          "jp": "わたしは イタリアりょうりが すきです。",
          "romaji": "watashi wa itaria ryouri ga suki desu.",
          "vn": "Tôi thích món ăn Ý."
        },
        {
          "jp": "やまださんは ダンスが じょうずです。",
          "romaji": "yamada san wa dansu ga jouzu desu.",
          "vn": "Anh Yamada khiêu vũ giỏi."
        }
      ]
    },
    {
      "title": "どんな N が好きですか",
      "structure": "どんな N が すきですか",
      "usage": "Dùng để hỏi sở thích cụ thể về một thứ/một người nằm trong nhóm danh từ N lớn.",
      "examples": [
        {
          "jp": "どんな スポーツが すきですか。",
          "romaji": "donna supootsu ga suki desu ka.",
          "vn": "Bạn thích môn thể thao nào?"
        },
        {
          "jp": "サッカーが すきです。",
          "romaji": "sakkaa ga suki desu.",
          "vn": "Tôi thích bóng đá."
        }
      ]
    },
    {
      "title": "Phó từ chỉ mức độ",
      "structure": "よく / だいたい / たくさん / 少し / あまり / 全然",
      "usage": "Phó từ đặt trước động từ/tính từ. Khẳng định: よく (rất, rõ), だいたい (đại khái), たくさん (nhiều), すこし (một chút). Phủ định: あまり (không... lắm), ぜんぜん (hoàn toàn không). Dùng たくさん cho tiền bạc/đồ vật. Dùng よく cho hiểu biết.",
      "examples": [
        {
          "jp": "えいごが よく わかります。",
          "romaji": "eigo ga yoku wakarimasu.",
          "vn": "Tôi hiểu rất rõ tiếng Anh."
        },
        {
          "jp": "おかねが ぜんぜん ありません。",
          "romaji": "okane ga zenzen arimasen.",
          "vn": "Tôi hoàn toàn không có tiền."
        }
      ]
    },
    {
      "title": "Mệnh đề chỉ lý do: ～から",
      "structure": "S1(lý do) から、S2(kết quả)",
      "usage": "Trợ từ から nối 2 mệnh đề có quan hệ nhân quả. S1 là lý do, S2 là kết quả (Vì S1 nên S2). Có thể tách S1 và S2 thành 2 câu riêng biệt.",
      "examples": [
        {
          "jp": "じかんが ありませんから、しんぶんを よみません。",
          "romaji": "jikan ga arimasen kara, shinbun wo yomimasen.",
          "vn": "Vì không có thời gian nên tôi không đọc báo."
        }
      ]
    },
    {
      "title": "どうして (Tại sao)",
      "structure": "どうして ～ か",
      "usage": "Từ để hỏi lý do (Tại sao?). Câu trả lời phải kết thúc bằng ～から.",
      "examples": [
        {
          "jp": "どうして しんぶんを よみませんか。",
          "romaji": "doushite shinbun wo yomimasen ka.",
          "vn": "Tại sao bạn không đọc báo?"
        },
        {
          "jp": "じかんが ありませんから。",
          "romaji": "jikan ga arimasen kara.",
          "vn": "Bởi vì tôi không có thời gian."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "わたしは 日本語(にほんご) [blank] 好(す)きです。",
      "options": ["が", "を", "に", "で"],
      "answer": "が",
      "vn": "Tôi thích tiếng Nhật.",
      "explanation": "Tính từ chỉ sở thích (すき - thích, きらい - ghét) dùng trợ từ が để chỉ đối tượng."
    },
    {
      "question": "わたしは 英語(えいご) [blank] 分(わ)かります。",
      "options": ["が", "を", "に", "へ"],
      "answer": "が",
      "vn": "Tôi hiểu tiếng Anh.",
      "explanation": "Động từ chỉ khả năng hiểu biết (わかります) dùng trợ từ が."
    },
    {
      "question": "やまださんは ピアノ [blank] 上手(じょうず)です。",
      "options": ["が", "を", "の", "に"],
      "answer": "が",
      "vn": "Anh Yamada giỏi piano.",
      "explanation": "Tính từ chỉ năng lực (じょうず - giỏi, へた - kém) dùng trợ từ が."
    },
    {
      "question": "[blank] スポーツが 好(す)きですか。 ...サッカーが 好きです。",
      "options": ["どんな", "どう", "なに", "だれ"],
      "answer": "どんな",
      "vn": "Bạn thích môn thể thao nào? ...Tôi thích bóng đá.",
      "explanation": "Hỏi về một loại hình cụ thể trong một nhóm (thể thao) dùng どんな + Danh từ."
    },
    {
      "question": "わたしは 日本語(にほんご)が [blank] 分(わ)かります。",
      "options": ["よく", "たくさん", "あまり", "ぜんぜん"],
      "answer": "よく",
      "vn": "Tôi hiểu tiếng Nhật rất rõ.",
      "explanation": "Đi với mức độ hiểu biết (わかります) và mang nghĩa khẳng định tích cực nhất thì dùng よく (rất, rõ)."
    },
    {
      "question": "わたしは お金(かね)が [blank] あります。",
      "options": ["たくさん", "よく", "だいたい", "ぜんぜん"],
      "answer": "たくさん",
      "vn": "Tôi có nhiều tiền.",
      "explanation": "Đi với số lượng của đồ vật, tiền bạc (あります) mang nghĩa khẳng định dùng たくさん (nhiều)."
    },
    {
      "question": "英語(えいご)が [blank] 分(わ)かりません。",
      "options": ["あまり", "よく", "たくさん", "すこし"],
      "answer": "あまり",
      "vn": "Tôi không hiểu tiếng Anh cho lắm.",
      "explanation": "Câu có đuôi phủ định (わかりません) nên đi với phó từ あまり (không... lắm) hoặc ぜんぜん (hoàn toàn không)."
    },
    {
      "question": "お金(かね)が [blank] ありません。",
      "options": ["ぜんぜん", "よく", "たくさん", "だいたい"],
      "answer": "ぜんぜん",
      "vn": "Tôi hoàn toàn không có tiền.",
      "explanation": "Câu ở thể phủ định (ありません) chỉ có thể đi với phó từ あまり hoặc ぜんぜん."
    },
    {
      "question": "時間(じかん)が ありません [blank]、テレビを 見(み)ません。",
      "options": ["から", "が", "そして", "で"],
      "answer": "から",
      "vn": "Vì không có thời gian nên tôi không xem tivi.",
      "explanation": "Nối 2 vế có quan hệ nhân quả (Vì... nên) dùng liên từ から."
    },
    {
      "question": "[blank] 昨日(きのう) 早(はや)く 帰(かえ)りましたか。 ...用事(ようじ)が ありましたから。",
      "options": ["どうして", "どんな", "どう", "だれ"],
      "answer": "どうして",
      "vn": "Tại sao hôm qua bạn về sớm? ...Vì tôi có việc bận.",
      "explanation": "Câu trả lời kết thúc bằng ～から (Vì) nên câu hỏi là どうして (Tại sao)."
    },
    {
      "question": "どうして けさ コーヒーを 飲(の)みませんでしたか。 ...時間(じかん)が ありませんでした [blank]。",
      "options": ["から", "が", "で", "に"],
      "answer": "から",
      "vn": "Tại sao sáng nay bạn không uống cà phê? ...Vì tôi không có thời gian.",
      "explanation": "Câu trả lời cho câu hỏi どうして (Tại sao) phải kết thúc bằng từ から."
    },
    {
      "question": "わたしは 歌(うた)が [blank] です。ぜんぜん 上手(じょうず)じゃありません。",
      "options": ["下手(へた)", "上手(じょうず)", "好(す)き", "嫌(きら)い"],
      "answer": "下手(へた)",
      "vn": "Tôi hát dở. Hoàn toàn không giỏi chút nào.",
      "explanation": "Vế sau là 'hoàn toàn không giỏi' (ぜんぜん 上手じゃありません) nên vế trước phải là 'hát dở' (下手)."
    },
    {
      "question": "どんな [blank] が 好(す)きですか。 ...クラシックが 好きです。",
      "options": ["音楽(おんがく)", "スポーツ", "食(た)べ物(もの)", "飲(の)み物(もの)"],
      "answer": "音楽(おんがく)",
      "vn": "Bạn thích âm nhạc nào? ...Tôi thích nhạc cổ điển.",
      "explanation": "Câu trả lời クラシック (nhạc cổ điển) là một loại 音楽 (âm nhạc)."
    },
    {
      "question": "きょうは 早(はや)く 帰(かえ)ります。子(こ)どもの 誕生日(たんじょうび) [blank]。",
      "options": ["ですから", "ですが", "ですそして", "ですで"],
      "answer": "ですから",
      "vn": "Hôm nay tôi về sớm. Vì là sinh nhật của con tôi.",
      "explanation": "Nêu lý do đi liền với danh từ (誕生日) cần có です + から (ですから - Vì là)."
    },
    {
      "question": "あの 映画(えいが)は [blank] おもしろくないです。",
      "options": ["ぜんぜん", "とても", "たくさん", "よく"],
      "answer": "ぜんぜん",
      "vn": "Bộ phim đó hoàn toàn không thú vị.",
      "explanation": "Đuôi câu là phủ định (おもしろくないです - Không thú vị) nên phải đi với ぜんぜん (Hoàn toàn không)."
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
