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
    },
    {
      "id": "L11_37",
      "word": "サンドイッチ",
      "reading": "サンドイッチ",
      "romaji": "sandoitchi",
      "meaning": "Bánh sandwich",
      "type": "Danh từ"
    },
    {
      "id": "L11_38",
      "word": "カレー",
      "reading": "カレー",
      "romaji": "karee",
      "meaning": "Món cà ri",
      "type": "Danh từ"
    },
    {
      "id": "L11_39",
      "word": "アイスクリーム",
      "reading": "アイスクリーム",
      "romaji": "aisukurīmu",
      "meaning": "Kem",
      "type": "Danh từ"
    },
    {
      "id": "L11_40",
      "word": "兄",
      "reading": "あに",
      "romaji": "ani",
      "meaning": "Anh trai (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HUYNH",
        "components": "口 (Khẩu) + 儿 (Nhân)",
        "story": "Người (Nhân) mở miệng (Khẩu) nói chuyện để dạy bảo em là Anh trai.",
        "examples": "兄 (Anh trai)"
      }
    },
    {
      "id": "L11_41",
      "word": "お兄さん",
      "reading": "おにいさん",
      "romaji": "oniisan",
      "meaning": "Anh trai (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HUYNH",
        "components": "兄 (Huynh)",
        "story": "Người anh trai trong gia đình.",
        "examples": "お兄さん (Anh trai), 兄弟 (Huynh đệ)"
      }
    },
    {
      "id": "L11_42",
      "word": "姉",
      "reading": "あね",
      "romaji": "ane",
      "meaning": "Chị gái (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỶ",
        "components": "女 (Nữ) + 市 (Thị)",
        "story": "Người phụ nữ (Nữ) đi chợ (Thị) mua đồ cho cả nhà là Chị gái.",
        "examples": "姉 (Chị gái)"
      }
    },
    {
      "id": "L11_43",
      "word": "お姉さん",
      "reading": "おねえさん",
      "romaji": "oneesan",
      "meaning": "Chị gái (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỶ",
        "components": "姉 (Tỷ)",
        "story": "Người chị gái trong gia đình.",
        "examples": "お姉さん (Chị gái), 姉妹 (Chị em gái)"
      }
    },
    {
      "id": "L11_44",
      "word": "弟",
      "reading": "おとうと",
      "romaji": "otouto",
      "meaning": "Em trai (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỆ",
        "components": "丷 + 弓 (Cung) + 丨 + 丿",
        "story": "Em trai thường thích chơi cung tên.",
        "examples": "弟 (Em trai)"
      }
    },
    {
      "id": "L11_45",
      "word": "弟さん",
      "reading": "おとうとさん",
      "romaji": "otoutosan",
      "meaning": "Em trai (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỆ",
        "components": "弟 (Đệ)",
        "story": "Người em trai trong gia đình.",
        "examples": "弟さん (Em trai), 兄弟 (Huynh đệ)"
      }
    },
    {
      "id": "L11_46",
      "word": "妹",
      "reading": "いもうと",
      "romaji": "imouto",
      "meaning": "Em gái (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MUỘI",
        "components": "女 (Nữ) + 未 (Vị - Chưa)",
        "story": "Người phụ nữ (Nữ) vị thành niên (Vị) là Em gái.",
        "examples": "妹 (Em gái)"
      }
    },
    {
      "id": "L11_47",
      "word": "妹さん",
      "reading": "いもうとさん",
      "romaji": "imoutosan",
      "meaning": "Em gái (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MUỘI",
        "components": "妹 (Muội)",
        "story": "Người em gái trong gia đình.",
        "examples": "妹さん (Em gái), 姉妹 (Chị em gái)"
      }
    },
    {
      "id": "L11_48",
      "word": "外国",
      "reading": "がいこく",
      "romaji": "gaikoku",
      "meaning": "Nước ngoài",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGOẠI QUỐC",
        "components": "外 (Ngoại - Bên ngoài) + 国 (Quốc - Đất nước)",
        "story": "Bên ngoài đất nước mình là Nước ngoài.",
        "examples": "外国 (Nước ngoài), 外国人 (Người nước ngoài)"
      }
    },
    {
      "id": "L11_49",
      "word": "クラス",
      "reading": "クラス",
      "romaji": "kurasu",
      "meaning": "Lớp học",
      "type": "Danh từ"
    }
  ],
  "grammar": [
    {
      "title": "Vị trí của Lượng từ (Số từ + Đơn vị đếm)",
      "structure": "Danh từ を/が + Lượng từ + Động từ",
      "usage": "Trong tiếng Nhật, lượng từ (ví dụ: 2 cái, 3 người) thường đứng NGAY TRƯỚC động từ mà nó bổ nghĩa, sau trợ từ.",
      "examples": [
        {
          "jp": "りんごを ４つ かいました。",
          "romaji": "ringo o yottsu kaimashita.",
          "vn": "Tôi đã mua 4 quả táo."
        },
        {
          "jp": "がいこくじんの がくせいが ふたり います。",
          "romaji": "gaikokujin no gakusei ga futari imasu.",
          "vn": "Có 2 học sinh người nước ngoài."
        }
      ]
    },
    {
      "title": "Khoảng thời gian: どのくらい",
      "structure": "どのくらい Vますか",
      "usage": "Dùng để hỏi mất bao lâu (thời gian) hoặc mất bao nhiêu (tiền). Có thể dùng các lượng từ thời gian để trả lời (～時間, ～週間, ～か月, ～年).",
      "examples": [
        {
          "jp": "どのくらい にほんごを べんきょうしましたか。",
          "romaji": "dono kurai nihongo o benkyou shimashita ka.",
          "vn": "Bạn đã học tiếng Nhật khoảng bao lâu?"
        },
        {
          "jp": "くにで ２かげつ べんきょうしました。",
          "romaji": "kuni de nikagetsu benkyou shimashita.",
          "vn": "Tôi đã học 2 tháng ở nước nhà."
        }
      ]
    },
    {
      "title": "Tần suất: Khoảng thời gian に ～回",
      "structure": "Thời gian に ～回(lần) Vます",
      "usage": "Dùng để diễn tả tần suất làm một việc gì đó trong một khoảng thời gian.",
      "examples": [
        {
          "jp": "１かげつに ２かい えいがを みます。",
          "romaji": "ikkagetsu ni nikai eiga o mimasu.",
          "vn": "Tôi xem phim 2 lần 1 tháng."
        },
        {
          "jp": "１しゅうかんに １かい テニスを します。",
          "romaji": "isshuukan ni ikkai tenisu o shimasu.",
          "vn": "Tôi chơi tennis 1 lần 1 tuần."
        }
      ]
    },
    {
      "title": "Trợ từ だけ (Chỉ)",
      "structure": "Danh từ / Lượng từ + だけ",
      "usage": "Được đặt sau số từ hoặc danh từ để biểu thị sự giới hạn (chỉ có chừng đó thôi). Đi kèm với thể khẳng định.",
      "examples": [
        {
          "jp": "やすみは にちようびだけです。",
          "romaji": "yasumi wa nichiyoubi dake desu.",
          "vn": "Ngày nghỉ chỉ có chủ nhật."
        },
        {
          "jp": "がいこくじんが ひとりだけ います。",
          "romaji": "gaikokujin ga hitori dake imasu.",
          "vn": "Chỉ có 1 người nước ngoài."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "りんごが（　　）あります。",
      "options": ["４", "４つ", "４こ", "４まい"],
      "answer": "４つ",
      "vn": "Có 4 quả táo.",
      "explanation": "Đếm trái cây, đồ vật hình khối dùng hệ thống đếm つ (１つ、２つ...). 4 quả là ４つ (よっつ)."
    },
    {
      "question": "クラスに がくせいが ２０（　　）います。",
      "options": ["つ", "だい", "にん", "まい"],
      "answer": "にん",
      "vn": "Trong lớp có 20 học sinh.",
      "explanation": "Đếm người dùng đơn vị đếm là 人 (にん)."
    },
    {
      "question": "８０円の 切手(きって)を ５（　　）買いました。",
      "options": ["つ", "まい", "だい", "にん"],
      "answer": "まい",
      "vn": "Tôi đã mua 5 cái tem 80 Yên.",
      "explanation": "Đếm vật mỏng (như tem, áo sơ mi, giấy) dùng 枚 (まい)."
    },
    {
      "question": "うちから 会社まで 車で（　　）かかりますか。",
      "options": ["いくつ", "なんにん", "どのくらい", "どれ"],
      "answer": "どのくらい",
      "vn": "Từ nhà đến công ty đi ô tô mất khoảng bao lâu?",
      "explanation": "Hỏi về khoảng thời gian cần thiết dùng どのくらい."
    },
    {
      "question": "１週間（　　）３回 日本語を 勉強します。",
      "options": ["に", "で", "を", "が"],
      "answer": "に",
      "vn": "Tôi học tiếng Nhật 3 lần 1 tuần.",
      "explanation": "Biểu thị tần suất làm việc gì đó trong một khoảng thời gian dùng trợ từ に (khoảng thời gian + に + tần suất)."
    },
    {
      "question": "外国人の 先生が １人（　　）います。",
      "options": ["から", "まで", "だけ", "しか"],
      "answer": "だけ",
      "vn": "Chỉ có 1 giáo viên người nước ngoài.",
      "explanation": "だけ mang nghĩa 'chỉ', đi với câu khẳng định. Ở đây 'Chỉ có 1 người'."
    },
    {
      "question": "A：家族は （　　）ですか。 ...B：４人です。",
      "options": ["いくつ", "なんにん", "だれ", "どのくらい"],
      "answer": "なんにん",
      "vn": "A: Gia đình bạn có mấy người? ...B: 4 người.",
      "explanation": "Hỏi số lượng người dùng 何人 (なんにん)."
    },
    {
      "question": "日本に ３（　　）いました。",
      "options": ["ねん", "ねんかん", "かい", "つ"],
      "answer": "ねん",
      "vn": "Tôi đã ở Nhật Bản 3 năm.",
      "explanation": "Đếm số năm dùng 年 (ねん), không cần thêm 間 (かん)."
    },
    {
      "question": "テレビを ２（　　）買いました。",
      "options": ["まい", "だい", "にん", "つ"],
      "answer": "だい",
      "vn": "Tôi đã mua 2 cái ti vi.",
      "explanation": "Đếm máy móc, xe cộ (đồ vật lớn, phức tạp) dùng 台 (だい)."
    },
    {
      "question": "りんごを ３つ（　　）みかんを ２つ 食べました。",
      "options": ["と", "や", "が", "を"],
      "answer": "と",
      "vn": "Tôi đã ăn 3 quả táo và 2 quả quýt.",
      "explanation": "Liệt kê toàn bộ các đồ vật (táo và quýt) dùng trợ từ と."
    },
    {
      "question": "毎日 ８（　　）働きます。",
      "options": ["じ", "じかん", "ふん", "かい"],
      "answer": "じかん",
      "vn": "Mỗi ngày tôi làm việc 8 tiếng.",
      "explanation": "Chỉ khoảng thời gian (lượng thời gian kéo dài) phải dùng 時間 (じかん). ８じ (8 giờ) là mốc thời gian."
    },
    {
      "question": "ハノイから ホーチミンまで 飛行機で ２時間（　　）かかります。",
      "options": ["ぐらい", "ごろ", "だけ", "しか"],
      "answer": "ぐらい",
      "vn": "Từ Hà Nội đến Hồ Chí Minh đi máy bay mất khoảng 2 tiếng.",
      "explanation": "Đi sau lượng từ (chỉ số lượng thời gian, số đếm) mang nghĩa 'khoảng' dùng ぐらい. ごろ dùng cho mốc thời gian."
    },
    {
      "question": "A：机の 上に 写真が （　　）ありますか。 ...B：５枚 あります。",
      "options": ["なんまい", "なんだい", "いくつ", "なんにん"],
      "answer": "なんまい",
      "vn": "A: Trên bàn có mấy tấm ảnh? ...B: Có 5 tấm.",
      "explanation": "Đếm ảnh (vật mỏng) dùng 枚 (まい), câu hỏi là 何枚 (なんまい)."
    },
    {
      "question": "わたしの 会社に 外国人が ５人（　　）います。",
      "options": ["を", "が", "で", "Ｘ（không điền gì）"],
      "answer": "Ｘ（không điền gì）",
      "vn": "Ở công ty tôi có 5 người nước ngoài.",
      "explanation": "Lượng từ (５人) có thể đứng ngay trước động từ mà KHÔNG cần trợ từ đi kèm phía sau."
    },
    {
      "question": "はがきは １枚 ５０円ですから、（　　）２５０円です。",
      "options": ["みんなで", "ぜんぶで", "いつも", "たくさん"],
      "answer": "ぜんぶで",
      "vn": "Bưu thiếp 1 tấm 50 Yên nên tổng cộng là 250 Yên.",
      "explanation": "Chỉ tổng số lượng tiền bạc, đồ vật dùng 全部で (ぜんぶで)."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "いくつ、何回、どのくらい？",
    "titleVn": "❤️ Bao nhiêu cái, mấy lần, bao lâu?",
    "intro": "Tóm tắt Bài 11 qua cách đếm, tần suất và khoảng thời gian.",
    "lines": [
      {
        "kanji": "りんごを三つ買いました。全部でいくらですか。",
        "jp": "りんごを みっつ かいました。ぜんぶで いくらですか。",
        "romaji": "Ringo o mittsu kaimashita. Zenbu de ikura desu ka.",
        "vn": "Tôi đã mua 3 quả táo. Tổng cộng là bao nhiêu tiền?",
        "note": "三つ · 全部で"
      },
      {
        "kanji": "一週間に一回だけ、テニスをします。",
        "jp": "いっしゅうかんに いっかいだけ、テニスを します。",
        "romaji": "Isshuukan ni ikkai dake, tenisu o shimasu.",
        "vn": "Một tuần tôi chơi tennis chỉ 1 lần.",
        "note": "一回 · だけ"
      },
      {
        "kanji": "日本にどのくらいいますか。三年います。",
        "jp": "にほんに どのくらい いますか。さんねん います。",
        "romaji": "Nihon ni dono kurai imasu ka. Sannen imasu.",
        "vn": "Bạn ở Nhật khoảng bao lâu? Tôi ở 3 năm.",
        "note": "どのくらい · 三年"
      },
      {
        "kanji": "車で一時間ぐらいかかります。",
        "jp": "くるまで いちじかんぐらい かかります。",
        "romaji": "Kuruma de ichijikan gurai kakarimasu.",
        "vn": "Đi bằng ô tô mất khoảng 1 tiếng.",
        "note": "一時間 · ぐらい · かかります"
      }
    ]
  }
};

export default lesson;
