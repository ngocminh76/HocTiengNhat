import { NihongoLesson } from './types';
import { readings } from '../readings/reading11';

const lesson: NihongoLesson = {
  "id": 11,
  "chapter": "第11課",
  "title": "これ、お願いします",
  "titleVn": "Bài 11: Đếm số lượng & Thời gian",
  "theme": "Đếm đồ vật · Thời gian · Tần suất",
  "words": [
    {
      "id": "L11_01",
      "word": "子ども",
      "reading": "こども",
      "romaji": "kodomo",
      "meaning": "Trẻ em, con cái",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỬ",
        "components": "子 (Tử - Đứa trẻ)",
        "story": "Hình ảnh đứa trẻ sơ sinh đang được quấn tã.",
        "examples": "子ども (Trẻ em/Con cái)"
      }
    },
    {
      "id": "L11_02",
      "word": "兄弟",
      "reading": "きょうだい",
      "romaji": "kyoudai",
      "meaning": "Anh em",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HUYNH ĐỆ",
        "components": "兄 (Huynh - Anh trai) + 弟 (Đệ - Em trai)",
        "story": "Anh em trong nhà.",
        "examples": "兄弟 (Anh em)"
      }
    },
    {
      "id": "L11_03",
      "word": "両親",
      "reading": "りょうしん",
      "romaji": "ryoushin",
      "meaning": "Bố mẹ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LƯỠNG THÂN",
        "components": "両 (Lưỡng - Hai) + 親 (Thân - Cha mẹ/Người thân)",
        "story": "Hai (Lưỡng) đấng sinh thành thân thiết (Thân) là Bố mẹ.",
        "examples": "両親 (Bố mẹ)"
      }
    },
    {
      "id": "L11_04",
      "word": "切手",
      "reading": "きって",
      "romaji": "kitte",
      "meaning": "Tem",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THIẾT THỦ",
        "components": "切 (Thiết - Cắt) + 手 (Thủ - Tay)",
        "story": "Cái tem nhỏ bằng ngón tay (Thủ) được cắt (Thiết) ra từ tờ lớn.",
        "examples": "切手 (Tem)"
      }
    },
    {
      "id": "L11_05",
      "word": "はがき",
      "reading": "はがき",
      "romaji": "hagaki",
      "meaning": "Bưu thiếp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DIỆP THƯ",
        "components": "葉書 (Diệp Thư - Thư viết trên lá)",
        "story": "Ngày xưa người ta viết thư (Thư) lên lá cây (Diệp) để gửi đi, đó là Bưu thiếp.",
        "examples": "はがき (Bưu thiếp)"
      }
    },
    {
      "id": "L11_06",
      "word": "封筒",
      "reading": "ふうとう",
      "romaji": "fuutou",
      "meaning": "Phong bì",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHONG ĐỒNG",
        "components": "封 (Phong - Phong bì) + 筒 (Đồng - Ống/Thùng)",
        "story": "Cái bao (Đồng) để phong bì (Phong) thư lại.",
        "examples": "封筒 (Phong bì)"
      }
    },
    {
      "id": "L11_07",
      "word": "留学生",
      "reading": "りゅうがくせい",
      "romaji": "ryuugakusei",
      "meaning": "Lưu học sinh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LƯU HỌC SINH",
        "components": "留 (Lưu) + 学生 (Học sinh)",
        "story": "Học sinh ở lại nước ngoài học.",
        "examples": "留学生 (Du học sinh)"
      }
    },
    {
      "id": "L11_08",
      "word": "一つ",
      "reading": "ひとつ",
      "romaji": "hitotsu",
      "meaning": "Một cái (đếm đồ vật chung)",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NHẤT",
        "components": "一 (Nhất)",
        "story": "Một cái.",
        "examples": "一つ"
      }
    },
    {
      "id": "L11_09",
      "word": "二つ",
      "reading": "ふたつ",
      "romaji": "futatsu",
      "meaning": "Hai cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NHỊ",
        "components": "二 (Nhị)",
        "story": "Hai cái.",
        "examples": "二つ"
      }
    },
    {
      "id": "L11_10",
      "word": "三つ",
      "reading": "みっつ",
      "romaji": "mittsu",
      "meaning": "Ba cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "TAM",
        "components": "三 (Tam)",
        "story": "Ba cái.",
        "examples": "三つ"
      }
    },
    {
      "id": "L11_11",
      "word": "一人",
      "reading": "ひとり",
      "romaji": "hitori",
      "meaning": "Một người",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NHẤT NHÂN",
        "components": "一 + 人",
        "story": "Một người.",
        "examples": "一人"
      }
    },
    {
      "id": "L11_12",
      "word": "二人",
      "reading": "ふたり",
      "romaji": "futari",
      "meaning": "Hai người",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NHỊ NHÂN",
        "components": "二 + 人",
        "story": "Hai người.",
        "examples": "二人"
      }
    },
    {
      "id": "L11_13",
      "word": "～枚",
      "reading": "～まい",
      "romaji": "~mai",
      "meaning": "～tờ, chiếc (vật mỏng)",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "MAI",
        "components": "木 (Mộc) + ⽁ (Phộc)",
        "story": "Tờ/Chiếc mỏng.",
        "examples": "一枚 (1 tờ)"
      }
    },
    {
      "id": "L11_14",
      "word": "～台",
      "reading": "～だい",
      "romaji": "~dai",
      "meaning": "～chiếc (máy móc, xe)",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÀI",
        "components": "台 (Đài)",
        "story": "Chiếc (máy móc/xe cộ).",
        "examples": "一台 (1 chiếc)"
      }
    },
    {
      "id": "L11_15",
      "word": "～回",
      "reading": "～かい",
      "romaji": "~kai",
      "meaning": "～lần",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "HỒI",
        "components": "回 (Hồi)",
        "story": "Lần.",
        "examples": "一回 (1 lần)"
      }
    },
    {
      "id": "L11_16",
      "word": "～時間",
      "reading": "～じかん",
      "romaji": "~jikan",
      "meaning": "～tiếng (đồng hồ)",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "THỜI GIAN",
        "components": "時 (Thời) + 間 (Gian)",
        "story": "Tiếng đồng hồ.",
        "examples": "一時間 (1 tiếng)"
      }
    },
    {
      "id": "L11_17",
      "word": "～週間",
      "reading": "～しゅうかん",
      "romaji": "~shuukan",
      "meaning": "～tuần",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "CHU GIAN",
        "components": "週 (Chu) + 間 (Gian)",
        "story": "Tuần.",
        "examples": "一週間 (1 tuần)"
      }
    },
    {
      "id": "L11_18",
      "word": "～か月",
      "reading": "～かげつ",
      "romaji": "~kagetsu",
      "meaning": "～tháng",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "NGUYỆT",
        "components": "月 (Nguyệt)",
        "story": "Tháng.",
        "examples": "一か月 (1 tháng)"
      }
    },
    {
      "id": "L11_19",
      "word": "～年",
      "reading": "～ねん",
      "romaji": "~nen",
      "meaning": "～năm",
      "type": "Lượng từ",
      "kanjiBreakdown": {
        "hanviet": "NIÊN",
        "components": "年 (Niên)",
        "story": "Năm.",
        "examples": "一年 (1 năm)"
      }
    },
    {
      "id": "L11_20",
      "word": "どのくらい",
      "reading": "どのくらい",
      "romaji": "dono kurai",
      "meaning": "Bao lâu",
      "type": "Từ để hỏi"
    },
    {
      "id": "L11_21",
      "word": "～ぐらい",
      "reading": "～ぐらい",
      "romaji": "~gurai",
      "meaning": "Khoảng～",
      "type": "Phó từ"
    },
    {
      "id": "L11_22",
      "word": "全部で",
      "reading": "ぜんぶで",
      "romaji": "zenbu de",
      "meaning": "Tổng cộng",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "TOÀN BỘ",
        "components": "全部 (Toàn bộ)",
        "story": "Tổng cộng.",
        "examples": "全部で"
      }
    },
    {
      "id": "L11_23",
      "word": "みんな",
      "reading": "みんな",
      "romaji": "minna",
      "meaning": "Tất cả (mọi người/vật)",
      "type": "Đại từ"
    },
    {
      "id": "L11_24",
      "word": "だけ",
      "reading": "だけ",
      "romaji": "dake",
      "meaning": "Chỉ～",
      "type": "Trợ từ"
    },
    {
      "id": "L11_25",
      "word": "います",
      "reading": "います",
      "romaji": "imasu",
      "meaning": "Có (con cái)",
      "type": "Động từ"
    },
    {
      "id": "L11_26",
      "word": "かかります",
      "reading": "かかります",
      "romaji": "kakarimasu",
      "meaning": "Mất (thời gian, tiền bạc)",
      "type": "Động từ"
    },
    {
      "id": "L11_27",
      "word": "休みます",
      "reading": "やすみます",
      "romaji": "yasumimasu",
      "meaning": "Nghỉ (làm việc)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HƯU",
        "components": "休 (Hưu)",
        "story": "Nghỉ ngơi.",
        "examples": "休みます"
      }
    },
    {
      "id": "L11_28",
      "word": "四つ",
      "reading": "よっつ",
      "romaji": "yottsu",
      "meaning": "4 cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "TỨ",
        "components": "四 (Tứ)",
        "story": "Bốn cái.",
        "examples": "四つ"
      }
    },
    {
      "id": "L11_29",
      "word": "五つ",
      "reading": "いつつ",
      "romaji": "itsutsu",
      "meaning": "5 cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NGŨ",
        "components": "五 (Ngũ)",
        "story": "Năm cái.",
        "examples": "五つ"
      }
    },
    {
      "id": "L11_30",
      "word": "六つ",
      "reading": "むっつ",
      "romaji": "muttsu",
      "meaning": "6 cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "LỤC",
        "components": "六 (Lục)",
        "story": "Sáu cái.",
        "examples": "六つ"
      }
    },
    {
      "id": "L11_31",
      "word": "七つ",
      "reading": "ななつ",
      "romaji": "nanatsu",
      "meaning": "7 cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "THẤT",
        "components": "七 (Thất)",
        "story": "Bảy cái.",
        "examples": "七つ"
      }
    },
    {
      "id": "L11_32",
      "word": "八つ",
      "reading": "やっつ",
      "romaji": "yattsu",
      "meaning": "8 cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "BÁT",
        "components": "八 (Bát)",
        "story": "Tám cái.",
        "examples": "八つ"
      }
    },
    {
      "id": "L11_33",
      "word": "九つ",
      "reading": "ここのつ",
      "romaji": "kokonotsu",
      "meaning": "9 cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "CỬU",
        "components": "九 (Cửu)",
        "story": "Chín cái.",
        "examples": "九つ"
      }
    },
    {
      "id": "L11_34",
      "word": "とお",
      "reading": "とお",
      "romaji": "too",
      "meaning": "10 cái",
      "type": "Số đếm"
    },
    {
      "id": "L11_35",
      "word": "いくつ",
      "reading": "いくつ",
      "romaji": "ikutsu",
      "meaning": "Mấy cái",
      "type": "Từ để hỏi"
    },
    {
      "id": "L11_36",
      "word": "～人",
      "reading": "～にん",
      "romaji": "~nin",
      "meaning": "~ người",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "NHÂN",
        "components": "人 (Nhân)",
        "story": "Người.",
        "examples": "三人 (3 người)"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
