import { NihongoLesson } from './types';
import { readings } from '../readings/reading10';

const lesson: NihongoLesson = {
  "id": 10,
  "chapter": "第10課",
  "title": "あそこにあります",
  "titleVn": "Bài 10: Có ở đằng kia",
  "theme": "Sự tồn tại · Vị trí đồ vật và con người",
  "words": [
    {
      "id": "L10_01",
      "word": "あります",
      "reading": "あります",
      "romaji": "arimasu",
      "meaning": "Có (đồ vật, cây cối)",
      "type": "Động từ"
    },
    {
      "id": "L10_02",
      "word": "います",
      "reading": "います",
      "romaji": "imasu",
      "meaning": "Có (người, động vật)",
      "type": "Động từ"
    },
    {
      "id": "L10_03",
      "word": "男の人",
      "reading": "おとこのひと",
      "romaji": "otoko no hito",
      "meaning": "Người đàn ông",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NAM NHÂN",
        "components": "男 (Nam) + 人 (Nhân)",
        "story": "Người (人) làm việc ngoài đồng ruộng (田) bằng sức lực (力) là người Đàn ông (Nam).",
        "examples": "男 (Đàn ông)"
      }
    },
    {
      "id": "L10_04",
      "word": "女の人",
      "reading": "おんなのひと",
      "romaji": "onna no hito",
      "meaning": "Người phụ nữ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NỮ NHÂN",
        "components": "女 (Nữ) + 人 (Nhân)",
        "story": "Hình dáng người phụ nữ (女) đang quỳ gối dang tay.",
        "examples": "女 (Phụ nữ)"
      }
    },
    {
      "id": "L10_05",
      "word": "男の子",
      "reading": "おとこのこ",
      "romaji": "otoko no ko",
      "meaning": "Bé trai",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NAM TỬ",
        "components": "男 (Nam) + 子 (Tử)",
        "story": "Đứa trẻ (Tử) mang giới tính Nam.",
        "examples": "男の子 (Bé trai)"
      }
    },
    {
      "id": "L10_06",
      "word": "女の子",
      "reading": "おんなのこ",
      "romaji": "onna no ko",
      "meaning": "Bé gái",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NỮ TỬ",
        "components": "女 (Nữ) + 子 (Tử)",
        "story": "Đứa trẻ (Tử) mang giới tính Nữ.",
        "examples": "女の子 (Bé gái)"
      }
    },
    {
      "id": "L10_07",
      "word": "犬",
      "reading": "いぬ",
      "romaji": "inu",
      "meaning": "Con chó",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KHUYỂN",
        "components": "犬 = 大 (Đại) + 丶 (Chấm)",
        "story": "Con chó (犬) là loài vật to lớn (大) hơn con mèo một chút (丶).",
        "examples": "犬 (Con chó)"
      }
    },
    {
      "id": "L10_08",
      "word": "猫",
      "reading": "ねこ",
      "romaji": "neko",
      "meaning": "Con mèo",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MIÊU",
        "components": "猫 = 犭 (Khuyển - Chó/Động vật) + 苗 (Miêu - Mầm cây)",
        "story": "Loài động vật (犭) kêu meo meo nghe như chữ Miêu (苗) là con MÈO.",
        "examples": "猫 (Con mèo)"
      }
    },
    {
      "id": "L10_09",
      "word": "木",
      "reading": "き",
      "romaji": "ki",
      "meaning": "Cây, gỗ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỘC",
        "components": "木 = Trực quan",
        "story": "Hình dáng một cái cây với thân và các nhánh rễ đâm xuống đất.",
        "examples": "木 (Cây)"
      }
    },
    {
      "id": "L10_10",
      "word": "物",
      "reading": "もの",
      "romaji": "mono",
      "meaning": "Đồ vật, vật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "VẬT",
        "components": "物 = 牛 (Ngưu - Con bò) + 勿 (Vật - Không)",
        "story": "Con bò (牛) là một loài ĐỘNG VẬT (Vật) không (勿) thể thiếu của nhà nông.",
        "examples": "動物 (Động vật), 荷物 (Hành lý)"
      }
    },
    {
      "id": "L10_11",
      "word": "箱",
      "reading": "はこ",
      "romaji": "hako",
      "meaning": "Cái hộp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TƯƠNG",
        "components": "箱 = 竹 (Trúc) + 相 (Tương - Nhìn nhau)",
        "story": "Dùng tre trúc (竹) đan thành cái HỘP (Tương) để đựng đồ cho nhau.",
        "examples": "箱 (Cái hộp)"
      }
    },
    {
      "id": "L10_12",
      "word": "冷蔵庫",
      "reading": "れいぞうこ",
      "romaji": "reizouko",
      "meaning": "Tủ lạnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LÃNH TÀNG KHỐ",
        "components": "冷 (Lãnh - Lạnh) + 蔵 (Tàng - Tàng trữ) + 庫 (Khố - Kho chứa)",
        "story": "Kho chứa (Khố) để tàng trữ (Tàng) đồ ăn ở nhiệt độ lạnh (Lãnh) là Tủ lạnh.",
        "examples": "冷蔵庫 (Tủ lạnh)"
      }
    },
    {
      "id": "L10_13",
      "word": "ベッド",
      "reading": "ベッド",
      "romaji": "beddo",
      "meaning": "Cái giường",
      "type": "Danh từ"
    },
    {
      "id": "L10_14",
      "word": "テーブル",
      "reading": "テーブル",
      "romaji": "teeburu",
      "meaning": "Cái bàn",
      "type": "Danh từ"
    },
    {
      "id": "L10_15",
      "word": "棚",
      "reading": "たな",
      "romaji": "tana",
      "meaning": "Giá sách, kệ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BẰNG",
        "components": "木 (Mộc - Gỗ) + 朋 (Bằng - Bạn bè)",
        "story": "Lấy gỗ (Mộc) đóng thành cái giá/kệ để cất quà của bạn bè (Bằng).",
        "examples": "棚 (Giá/Kệ)"
      }
    },
    {
      "id": "L10_16",
      "word": "ドア",
      "reading": "ドア",
      "romaji": "doa",
      "meaning": "Cửa ra vào",
      "type": "Danh từ"
    },
    {
      "id": "L10_17",
      "word": "窓",
      "reading": "まど",
      "romaji": "mado",
      "meaning": "Cửa sổ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SONG",
        "components": "穴 (Huyệt - Cái hố) + 厶 (Khư - Riêng tư) + 心 (Tâm - Trái tim)",
        "story": "Khoét một cái hố (Huyệt) trên tường để mang lại tâm trạng (Tâm) thư thái riêng tư (Khư) là Cửa sổ.",
        "examples": "窓 (Cửa sổ)"
      }
    },
    {
      "id": "L10_18",
      "word": "ポスト",
      "reading": "ポスト",
      "romaji": "posuto",
      "meaning": "Hộp thư",
      "type": "Danh từ"
    },
    {
      "id": "L10_19",
      "word": "ビル",
      "reading": "ビル",
      "romaji": "biru",
      "meaning": "Tòa nhà",
      "type": "Danh từ"
    },
    {
      "id": "L10_20",
      "word": "公園",
      "reading": "こうえん",
      "romaji": "kouen",
      "meaning": "Công viên",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CÔNG VIÊN",
        "components": "公 (Công - Công cộng) + 園 (Viên - Vườn)",
        "story": "Khu vườn (Viên) dành cho mục đích công cộng (Công) là CÔNG VIÊN.",
        "examples": "公園 (Công viên)"
      }
    },
    {
      "id": "L10_21",
      "word": "喫茶店",
      "reading": "きっさてん",
      "romaji": "kissaten",
      "meaning": "Quán giải khát, quán cafe",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KHIẾT TRÀ ĐIẾM",
        "components": "喫 (Khiết - Hút/Uống) + 茶 (Trà) + 店 (Điếm)",
        "story": "Quán giải khát/Cà phê.",
        "examples": "喫茶店 (Quán cà phê)"
      }
    },
    {
      "id": "L10_22",
      "word": "本屋",
      "reading": "ほんや",
      "romaji": "honya",
      "meaning": "Hiệu sách",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BẢN ỐC",
        "components": "本 (Bản - Sách) + 屋 (Ốc - Cửa tiệm/Mái nhà)",
        "story": "Cửa tiệm (Ốc) chuyên bán sách (Bản) là HIỆU SÁCH.",
        "examples": "本屋 (Hiệu sách)"
      }
    },
    {
      "id": "L10_23",
      "word": "乗り場",
      "reading": "のりば",
      "romaji": "noriba",
      "meaning": "Bến xe, điểm lên xe",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỪA TRƯỜNG",
        "components": "乗 (Thừa) + 場 (Trường)",
        "story": "Bến xe/Nơi lên tàu xe.",
        "examples": "乗り場 (Bến xe)"
      }
    },
    {
      "id": "L10_24",
      "word": "中",
      "reading": "なか",
      "romaji": "naka",
      "meaning": "Trong, bên trong",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRUNG",
        "components": "中 = 口 (Khẩu - Miệng) + 丨 (Sổ)",
        "story": "Một mũi tên bắn xuyên TRÚNG vào chính GIỮA (Trung) cái hồng tâm (口).",
        "examples": "中 (Bên trong)"
      }
    },
    {
      "id": "L10_25",
      "word": "外",
      "reading": "そと",
      "romaji": "soto",
      "meaning": "Ngoài, bên ngoài",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGOẠI",
        "components": "外 = 夕 (Tịch - Buổi chiều) + 卜 (Bốc - Bói toán)",
        "story": "Vào buổi chiều tà (夕), người ta ra BÊN NGOÀI (Ngoại) để xem bói (卜).",
        "examples": "外 (Bên ngoài), 外国 (Nước ngoài)"
      }
    },
    {
      "id": "L10_26",
      "word": "隣",
      "reading": "となり",
      "romaji": "tonari",
      "meaning": "Bên cạnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LÂN",
        "components": "阝 (Phụ) + 粦 (Lân)",
        "story": "Hàng xóm bên cạnh.",
        "examples": "隣 (Bên cạnh)"
      }
    },
    {
      "id": "L10_27",
      "word": "近く",
      "reading": "ちかく",
      "romaji": "chikaku",
      "meaning": "Gần",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CẬN",
        "components": "近 (Cận)",
        "story": "Gần đây.",
        "examples": "近く (Gần)"
      }
    },
    {
      "id": "L10_28",
      "word": "間",
      "reading": "あいだ",
      "romaji": "aida",
      "meaning": "Giữa, ở giữa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIAN",
        "components": "門 (Môn) + 日 (Nhật)",
        "story": "Mặt trời rọi qua khe cửa (Ở giữa).",
        "examples": "間 (Ở giữa)"
      }
    },
    {
      "id": "L10_29",
      "word": "～や～など",
      "reading": "～や～など",
      "romaji": "~ya~nado",
      "meaning": "~ và ~ v.v...",
      "type": "Mẫu câu"
    },
    {
      "id": "L10_30",
      "word": "いろいろ（な）",
      "reading": "いろいろ",
      "romaji": "iroiro",
      "meaning": "Nhiều, đa dạng",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "N/A",
        "components": "Không có Kanji ở N5",
        "story": "Nhiều loại, đa dạng.",
        "examples": "いろいろ (Nhiều loại)"
      }
    },
    {
      "id": "L10_31",
      "word": "フィルム",
      "reading": "フィルム",
      "romaji": "firumu",
      "meaning": "Phim",
      "type": "Danh từ"
    },
    {
      "id": "L10_32",
      "word": "電池",
      "reading": "でんち",
      "romaji": "denchi",
      "meaning": "Pin",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỆN TRÌ",
        "components": "電 (Điện) + 池 (Trì - Cái ao)",
        "story": "Cái ao (Trì) chứa đầy năng lượng điện (Điện) chính là Cục pin.",
        "examples": "電池 (Pin)"
      }
    },
    {
      "id": "L10_33",
      "word": "スイッチ",
      "reading": "スイッチ",
      "romaji": "suicchi",
      "meaning": "Công tắc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SWITCH",
        "components": "Từ ngoại lai",
        "story": "Công tắc.",
        "examples": "スイッチ (Công tắc)"
      }
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "上、下、中、外",
    "titleVn": "📦 Trên, Dưới, Trong, Ngoài",
    "intro": "Tóm tắt từ vựng miêu tả vị trí không gian và các sinh vật/đồ vật xung quanh của Bài 10.",
    "lines": [
      {
        "kanji": "箱の中に何がありますか？",
        "jp": "はこの なかに なにが ありますか？",
        "romaji": "Hako no naka ni nani ga arimasu ka?",
        "vn": "Trong chiếc hộp có cái gì?",
        "note": "箱 · 中"
      },
      {
        "kanji": "本や時計などがあります。",
        "jp": "ほんや とけいなどが あります。",
        "romaji": "Hon ya tokei nado ga arimasu.",
        "vn": "Có sách và đồng hồ v.v...",
        "note": "～や～など"
      },
      {
        "kanji": "木の下にだれがいますか？",
        "jp": "きの したに だれが いますか？",
        "romaji": "Ki no shita ni dare ga imasu ka?",
        "vn": "Dưới gốc cây có ai ở đó?",
        "note": "木 · 下"
      },
      {
        "kanji": "男の子と犬がいます。",
        "jp": "おとこのこと いぬが います。",
        "romaji": "Otoko no ko to inu ga imasu.",
        "vn": "Có một bé trai và một chú chó.",
        "note": "男の子 · 犬"
      },
      {
        "kanji": "本屋はどこにありますか？",
        "jp": "ほんやは どこに ありますか？",
        "romaji": "Honya wa doko ni arimasu ka?",
        "vn": "Hiệu sách nằm ở chỗ nào vậy?",
        "note": "本屋"
      },
      {
        "kanji": "銀行と喫茶店の間です！",
        "jp": "ぎんこうと きっさてんの あいだ です！",
        "romaji": "Ginkou to kissaten no aida desu!",
        "vn": "Nó nằm giữa ngân hàng và quán cafe!",
        "note": "間"
      }
    ]
  }
};

export default lesson;
