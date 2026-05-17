import { NihongoLesson } from './types';
import { readings } from '../readings/reading7';

const lesson: NihongoLesson = {
  "id": 7,
  "chapter": "第7課",
  "title": "ごめんください",
  "titleVn": "Bài 7: Xin lỗi, có ai ở nhà không?",
  "theme": "Công cụ · Cho và Nhận",
  "words": [
    {
      "id": "L7_01",
      "word": "切ります",
      "reading": "きります",
      "romaji": "kirimasu",
      "meaning": "Cắt",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THIẾT",
        "components": "切 = 七 (Thất) + 刀 (Đao - Dao)",
        "story": "Dùng dao (刀) cắt đồ vật ra thành bảy (七) phần bằng nhau.",
        "examples": "切る (Cắt), 親切 (Tốt bụng), 大切 (Quan trọng)"
      }
    },
    {
      "id": "L7_02",
      "word": "送ります",
      "reading": "おくります",
      "romaji": "okurimasu",
      "meaning": "Gửi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TỐNG",
        "components": "送 = 辶 (Sước - Đi/Trượt) + 关 (Quan - Cửa quan)",
        "story": "Đi (辶) ra tới cửa quan (关) để tiễn đưa, gửi gắm.",
        "examples": "送る (Gửi), 送り仮名 (Okurigana), 放送 (Phát sóng)"
      }
    },
    {
      "id": "L7_03",
      "word": "あげます",
      "reading": "あげます",
      "romaji": "agemasu",
      "meaning": "Cho, tặng",
      "type": "Động từ"
    },
    {
      "id": "L7_04",
      "word": "もらいます",
      "reading": "もらいます",
      "romaji": "moraimasu",
      "meaning": "Nhận",
      "type": "Động từ"
    },
    {
      "id": "L7_05",
      "word": "貸します",
      "reading": "かします",
      "romaji": "kashimasu",
      "meaning": "Cho mượn, cho vay",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THẢI",
        "components": "貸 = 代 (Đại - Thay thế) + 貝 (Bối - Tiền bạc)",
        "story": "Đưa tiền (貝) cho người khác dùng tạm thay thế (代) cho bản thân, đó là cho vay mượn.",
        "examples": "貸す (Cho mượn), 貸し出し (Sự cho vay)"
      }
    },
    {
      "id": "L7_06",
      "word": "借ります",
      "reading": "かります",
      "romaji": "karimasu",
      "meaning": "Mượn, vay",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TÁ",
        "components": "借 = 亻 (Nhân) + 昔 (Tích - Ngày xưa)",
        "story": "Người (亻) thời xưa (昔) thường phải đi vay mượn lương thực.",
        "examples": "借りる (Mượn), 借金 (Tiền vay)"
      }
    },
    {
      "id": "L7_07",
      "word": "教えます",
      "reading": "おしえます",
      "romaji": "oshiemasu",
      "meaning": "Dạy",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "GIÁO",
        "components": "教 = 孝 (Hiếu - Hiếu thảo) + 攵 (Phộc - Đánh đập/Dạy dỗ)",
        "story": "Cầm roi (攵) dạy dỗ con cái phải biết hiếu thảo (孝).",
        "examples": "教える (Dạy), 教室 (Phòng học), 教育 (Giáo dục)"
      }
    },
    {
      "id": "L7_08",
      "word": "習います",
      "reading": "ならいます",
      "romaji": "naraimasu",
      "meaning": "Học",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TẬP",
        "components": "習 = 羽 (Vũ - Lông chim) + 白 (Bạch - Trắng)",
        "story": "Cầm chiếc lông chim (羽) trắng (白) để tập viết chữ.",
        "examples": "習う (Học hỏi), 練習 (Luyện tập), 復習 (Ôn tập)"
      }
    },
    {
      "id": "L7_09",
      "word": "かけます",
      "reading": "かけます",
      "romaji": "kakemasu",
      "meaning": "Gọi (điện thoại)",
      "type": "Động từ"
    },
    {
      "id": "L7_10",
      "word": "手",
      "reading": "て",
      "romaji": "te",
      "meaning": "Tay",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ",
        "components": "手 (Thủ - Bàn tay)",
        "story": "Hình ảnh bàn tay có 5 ngón.",
        "examples": "手 (Tay), 手紙 (Bức thư)"
      }
    },
    {
      "id": "L7_11",
      "word": "はし",
      "reading": "はし",
      "romaji": "hashi",
      "meaning": "Đũa",
      "type": "Danh từ"
    },
    {
      "id": "L7_12",
      "word": "スプーン",
      "reading": "すぷーん",
      "romaji": "supuun",
      "meaning": "Thìa",
      "type": "Danh từ"
    },
    {
      "id": "L7_13",
      "word": "ナイフ",
      "reading": "ないふ",
      "romaji": "naifu",
      "meaning": "Dao",
      "type": "Danh từ"
    },
    {
      "id": "L7_14",
      "word": "フォーク",
      "reading": "ふぉーく",
      "romaji": "fooku",
      "meaning": "Dĩa",
      "type": "Danh từ"
    },
    {
      "id": "L7_15",
      "word": "はさみ",
      "reading": "はさみ",
      "romaji": "hasami",
      "meaning": "Kéo",
      "type": "Danh từ"
    },
    {
      "id": "L7_16",
      "word": "パソコン",
      "reading": "ぱそこん",
      "romaji": "pasokon",
      "meaning": "Máy tính cá nhân",
      "type": "Danh từ"
    },
    {
      "id": "L7_17",
      "word": "消しゴム",
      "reading": "けしゴム",
      "romaji": "keshigomu",
      "meaning": "Cục tẩy",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TIÊU",
        "components": "消 (Tiêu - Xóa bỏ) + ゴム (Cao su)",
        "story": "Cục cao su dùng để xóa bỏ vết bút chì là Cục tẩy.",
        "examples": "消しゴム (Cục tẩy), 消します (Tắt/Xóa)"
      }
    },
    {
      "id": "L7_18",
      "word": "紙",
      "reading": "かみ",
      "romaji": "kami",
      "meaning": "Giấy",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHỈ",
        "components": "糸 (Mịch - Sợi chỉ) + 氏 (Thị - Dòng họ)",
        "story": "Giấy (Chỉ) được kết thành từ những sợi tơ mỏng (Mịch) để ghi gia phả dòng họ (Thị).",
        "examples": "紙 (Giấy), 手紙 (Bức thư)"
      }
    },
    {
      "id": "L7_19",
      "word": "花",
      "reading": "はな",
      "romaji": "hana",
      "meaning": "Hoa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HOA",
        "components": "花 = 艹 (Thảo - Cỏ) + 化 (Hóa - Biến hóa)",
        "story": "Cây cỏ (艹) biến hóa (化) trổ bông thành hoa rực rỡ.",
        "examples": "花 (Hoa), 花見 (Ngắm hoa), 花火 (Pháo hoa)"
      }
    },
    {
      "id": "L7_20",
      "word": "シャツ",
      "reading": "しゃつ",
      "romaji": "shatsu",
      "meaning": "Áo sơ mi",
      "type": "Danh từ"
    },
    {
      "id": "L7_21",
      "word": "プレゼント",
      "reading": "ぷれぜんと",
      "romaji": "purezento",
      "meaning": "Quà tặng",
      "type": "Danh từ"
    },
    {
      "id": "L7_22",
      "word": "荷物",
      "reading": "にもつ",
      "romaji": "nimotsu",
      "meaning": "Hành lý",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HÀ VẬT",
        "components": "荷 (Hà - Hành lý: 艹 cỏ + 何 cái gì) + 物 (Vật - Đồ vật: 牛 bò + 勿 không)",
        "story": "Đồ vật (物) được bọc bằng cỏ thảo (艹) để mang đi xa (何) là hành lý.",
        "examples": "荷物 (Hành lý), 重い荷物 (Hành lý nặng)"
      }
    },
    {
      "id": "L7_23",
      "word": "お金",
      "reading": "おかね",
      "romaji": "okane",
      "meaning": "Tiền",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIM",
        "components": "金 (Kim - Vàng/Tiền)",
        "story": "Kim loại quý giá nhất thời xưa là Vàng và được dùng làm Tiền.",
        "examples": "お金 (Tiền), 金曜日 (Thứ Sáu)"
      }
    },
    {
      "id": "L7_24",
      "word": "切符",
      "reading": "きっぷ",
      "romaji": "kippu",
      "meaning": "Vé",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THIẾT PHÙ",
        "components": "切 (Thiết - Cắt) + 符 (Phù - Vé/Phù hiệu)",
        "story": "Vé xe/tàu (Phù) khi qua cửa sẽ bị bấm/cắt (Thiết) một góc.",
        "examples": "切符 (Vé)"
      }
    },
    {
      "id": "L7_25",
      "word": "父",
      "reading": "ちち",
      "romaji": "chichi",
      "meaning": "Bố (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHỤ",
        "components": "Tượng hình hai tay cầm hai cây gậy.",
        "story": "Hình ảnh người cha cầm roi dạy dỗ con cái.",
        "examples": "父 (Bố mình), お父さん (Bố người khác)"
      }
    },
    {
      "id": "L7_26",
      "word": "母",
      "reading": "はは",
      "romaji": "haha",
      "meaning": "Mẹ (của mình)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MẪU",
        "components": "Bao gồm bộ vô (毋) với hai chấm bên trong.",
        "story": "Hình ảnh người mẹ với hai bầu ngực đang nuôi con bú.",
        "examples": "母 (Mẹ mình), お母さん (Mẹ người khác)"
      }
    },
    {
      "id": "L7_27",
      "word": "お父さん",
      "reading": "おとうさん",
      "romaji": "otousan",
      "meaning": "Bố (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHỤ",
        "components": "父 (Phụ - Bố)",
        "story": "Hình ảnh hai tay cầm gậy đánh đòn, thể hiện sự nghiêm khắc của người Bố.",
        "examples": "お父さん (Bố người khác), 父親 (Phụ thân)"
      }
    },
    {
      "id": "L7_28",
      "word": "お母さん",
      "reading": "おかあさん",
      "romaji": "okaasan",
      "meaning": "Mẹ (của người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MẪU",
        "components": "母 (Mẫu - Mẹ)",
        "story": "Hình ảnh người phụ nữ có bầu ngực đang cho con bú là người Mẹ.",
        "examples": "お母さん (Mẹ người khác), 母親 (Mẫu thân)"
      }
    },
    {
      "id": "L7_29",
      "word": "もう",
      "reading": "もう",
      "romaji": "mou",
      "meaning": "Đã ... rồi",
      "type": "Phó từ"
    },
    {
      "id": "L7_30",
      "word": "まだ",
      "reading": "まだ",
      "romaji": "mada",
      "meaning": "Chưa",
      "type": "Phó từ"
    },
    {
      "id": "L7_31",
      "word": "ファクス",
      "reading": "ファクス",
      "romaji": "fakusu",
      "meaning": "Máy Fax",
      "type": "Danh từ"
    }
  ],
  "grammar": [
    {
      "pattern": "N(công cụ) で V",
      "meaning": "Làm [V] bằng [N]",
      "note": "Đây là trợ từ で chỉ phương tiện, dụng cụ. VD: はしで食べます。 (Ăn bằng đũa)."
    },
    {
      "pattern": "Word は 〜語で 何ですか",
      "meaning": "Từ này trong tiếng ~ là gì?",
      "note": "VD: \"Cảm ơn\" は日本語で何ですか。 (\"Cảm ơn\" tiếng Nhật là gì?)"
    },
    {
      "pattern": "N(người) に あげます/教えます",
      "meaning": "Cho/Dạy/Tặng cho ...",
      "note": "Chiều hành động hướng RA NGOÀI (Từ mình -> Người khác). Đi với trợ từ に."
    },
    {
      "pattern": "N(người) に もらいます/習います",
      "meaning": "Nhận/Học từ ...",
      "note": "Chiều hành động hướng VÀO TRONG (Từ người khác -> Mình). Đi với trợ từ に."
    },
    {
      "pattern": "もう Vました",
      "meaning": "Đã làm V xong rồi",
      "note": "Câu hỏi: もう Vましたか (Đã làm chưa?). Trả lời: はい、もう Vました / いいえ、まだです。"
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "あげる と もらう",
    "titleVn": "🎁 Tặng và Nhận",
    "intro": "Luyện tập thuộc chữ Hán và ngữ pháp Cho/Nhận của Bài 7",
    "lines": [
      {
        "kanji": "はさみで紙を切ります、パソコンでメールを送ります。",
        "jp": "はさみで かみを きります、パソコンで メールを おくります。",
        "romaji": "Hasami de kami wo kirimasu, pasokon de meeru wo okurimasu.",
        "vn": "Cắt giấy bằng kéo, gửi mail bằng máy tính.",
        "note": "紙 · 切ります · 送ります"
      },
      {
        "kanji": "母に花をあげます、父に時計をもらいました。",
        "jp": "ははに はなを あげます、ちちに とけいを もらいました。",
        "romaji": "Haha ni hana wo agemasu, chichi ni tokei wo moraimashita.",
        "vn": "Tặng hoa cho mẹ, nhận đồng hồ từ bố.",
        "note": "母 · 花 · あげます · 父 · もらいます"
      },
      {
        "kanji": "先生は日本語を教えます、私は英語を習います。",
        "jp": "せんせいは にほんごを おしえます、わたしは えいごを ならいます。",
        "romaji": "Sensei wa nihongo wo oshiemasu, watashi wa eigo wo naraimasu.",
        "vn": "Thầy giáo dạy tiếng Nhật, tôi thì học tiếng Anh.",
        "note": "教えます · 習います"
      },
      {
        "kanji": "友達にお金を借ります、友達に本を貸します。",
        "jp": "ともだちに おかねを かります、ともだちに ほんを かします。",
        "romaji": "Tomodachi ni okane wo karimasu, tomodachi ni hon wo kashimasu.",
        "vn": "Mượn tiền của bạn, cho bạn mượn sách.",
        "note": "お金 · 借ります · 貸します"
      },
      {
        "kanji": "もう荷物を送りましたか？いいえ、まだです。これから！",
        "jp": "もう にもつを おくりましたか？いいえ、まだです。これから！",
        "romaji": "Mou nimotsu wo okurimashita ka? Iie, mada desu. Korekara!",
        "vn": "Đã gửi hành lý chưa? Chưa, bây giờ mới gửi!",
        "note": "もう · 荷物 · まだ"
      },
      {
        "kanji": "スプーンとナイフで食べます、いつも手で食べません！",
        "jp": "スプーンと ナイフで たべます、いつも てで たべません！",
        "romaji": "Supuun to naifu de tabemasu, itsumo te de tabemasen!",
        "vn": "Ăn bằng dao và nĩa, không bao giờ ăn bằng bốc tay!",
        "note": "手"
      }
    ]
  }
};

export default lesson;
