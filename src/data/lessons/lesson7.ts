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
    },
    {
      "id": "L7_32",
      "word": "ワープロ",
      "reading": "ワープロ",
      "romaji": "waapuro",
      "meaning": "Máy đánh chữ (Word processor)",
      "type": "Danh từ"
    },
    {
      "id": "L7_33",
      "word": "パンチ",
      "reading": "パンチ",
      "romaji": "panchi",
      "meaning": "Cái đục lỗ",
      "type": "Danh từ"
    },
    {
      "id": "L7_34",
      "word": "ホッチキス",
      "reading": "ホッチキス",
      "romaji": "hotchikisu",
      "meaning": "Cái dập ghim",
      "type": "Danh từ"
    },
    {
      "id": "L7_35",
      "word": "セロテープ",
      "reading": "セロテープ",
      "romaji": "seroteepu",
      "meaning": "Băng dính",
      "type": "Danh từ"
    },
    {
      "id": "L7_36",
      "word": "クリスマス",
      "reading": "クリスマス",
      "romaji": "kurisumasu",
      "meaning": "Giáng sinh",
      "type": "Danh từ"
    },
    {
      "id": "L7_37",
      "word": "これから",
      "reading": "これから",
      "romaji": "korekara",
      "meaning": "Từ bây giờ, sau đây",
      "type": "Phó từ"
    },
    {
      "id": "L7_38",
      "word": "～すてきですね",
      "reading": "～すてきですね",
      "romaji": "~suteki desu ne",
      "meaning": "~ hay nhỉ, tuyệt nhỉ",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_39",
      "word": "ごめんください",
      "reading": "ごめんください",
      "romaji": "gomenkudasai",
      "meaning": "Xin lỗi, có ai ở nhà không?",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_40",
      "word": "いらっしゃい",
      "reading": "いらっしゃい",
      "romaji": "irasshai",
      "meaning": "Rất hoan nghênh / Chào mừng bạn đến chơi",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_41",
      "word": "どうぞ おあがりください",
      "reading": "どうぞ おあがりください",
      "romaji": "douzo oagarikudasai",
      "meaning": "Xin mời vào (nhà)",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_42",
      "word": "失礼します",
      "reading": "しつれいします",
      "romaji": "shitsureishimasu",
      "meaning": "Xin thất lễ / Xin phép",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_43",
      "word": "～はいかがですか",
      "reading": "～はいかがですか",
      "romaji": "~wa ikaga desu ka",
      "meaning": "Bạn dùng ~ có được không? (mời ăn uống)",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_44",
      "word": "いただきます",
      "reading": "いただきます",
      "romaji": "itadakimasu",
      "meaning": "Mời mọi người dùng (trước bữa ăn)",
      "type": "Mẫu câu"
    },
    {
      "id": "L7_45",
      "word": "旅行",
      "reading": "りょこう",
      "romaji": "ryokou",
      "meaning": "Chuyến du lịch",
      "type": "Danh từ"
    },
    {
      "id": "L7_46",
      "word": "お土産",
      "reading": "おみやげ",
      "romaji": "omiyage",
      "meaning": "Quà lưu niệm",
      "type": "Danh từ"
    },
    {
      "id": "L7_47",
      "word": "ヨーロッパ",
      "reading": "ヨーロッパ",
      "romaji": "yooroppa",
      "meaning": "Châu Âu",
      "type": "Danh từ"
    },
    {
      "id": "L7_48",
      "word": "スペイン",
      "reading": "スペイン",
      "romaji": "supein",
      "meaning": "Tây Ban Nha",
      "type": "Danh từ"
    }
  ],
  "grammar": [
    {
      "title": "N(công cụ/phương tiện) で V",
      "structure": "N(công cụ/phương tiện) で V",
      "usage": "Trợ từ で đứng sau danh từ chỉ công cụ, phương tiện để diễn tả việc tiến hành hành động bằng công cụ/phương tiện đó.",
      "examples": [
        {
          "jp": "はしで ごはんを たべます。",
          "romaji": "hashi de gohan wo tabemasu.",
          "vn": "Tôi ăn cơm bằng đũa."
        },
        {
          "jp": "パソコンで レポートを かきます。",
          "romaji": "pasokon de repooto wo kakimasu.",
          "vn": "Tôi viết báo cáo bằng máy tính."
        }
      ]
    },
    {
      "title": "～は ～語(ご)で 何ですか",
      "structure": "“Từ/câu” は ～ごで なんですか",
      "usage": "Mẫu câu dùng để hỏi cách nói một từ hoặc một câu bằng một ngôn ngữ khác. Ngôn ngữ đóng vai trò là phương tiện truyền đạt nên cũng đi với trợ từ で.",
      "examples": [
        {
          "jp": "「ありがとう」は えいごで なんですか。",
          "romaji": "'Arigatou' wa eigo de nan desu ka.",
          "vn": "'Cảm ơn' trong tiếng Anh nói thế nào?"
        },
        {
          "jp": "「Thank you」です。",
          "romaji": "'Thank you' desu.",
          "vn": "Là 'Thank you'."
        }
      ]
    },
    {
      "title": "N(người) に あげます / 貸します / 教えます",
      "structure": "N(người nhận) に V",
      "usage": "Các động từ như あげます (cho/tặng), かします (cho mượn), おしえます (dạy)... biểu thị hành động hướng từ mình sang người khác. Trợ từ に đặt sau người nhận hành động.",
      "examples": [
        {
          "jp": "わたしは きむらさんに はなを あげました。",
          "romaji": "watashi wa kimura san ni hana wo agemashita.",
          "vn": "Tôi đã tặng hoa cho chị Kimura."
        },
        {
          "jp": "イーさんに ほんを かします。",
          "romaji": "ii san ni hon wo kashimasu.",
          "vn": "Tôi cho anh Lee mượn sách."
        }
      ]
    },
    {
      "title": "N(người) に もらいます / 借ります / 習います",
      "structure": "N(người cho) に V",
      "usage": "Các động từ như もらいます (nhận), かります (mượn), ならいます (học)... biểu thị hành động hướng từ người khác về phía mình. Trợ từ に (hoặc から) đặt sau người cung cấp hành động/đồ vật.",
      "examples": [
        {
          "jp": "わたしは やまださんに チョコレートを もらいました。",
          "romaji": "watashi wa yamada san ni chokoreeto wo moraimashita.",
          "vn": "Tôi đã nhận chocolate từ anh Yamada."
        },
        {
          "jp": "サントスさんに にほんごを ならいます。",
          "romaji": "santosu san ni nihongo wo naraimasu.",
          "vn": "Tôi học tiếng Nhật từ anh Santos."
        }
      ]
    },
    {
      "title": "もう Vました (Đã làm xong rồi)",
      "structure": "もう Vました",
      "usage": "Phó từ もう (đã... rồi) đi với động từ ở thể quá khứ Vました để diễn tả một hành động đã hoàn thành. Câu trả lời phủ định là いいえ、まだです (Chưa, vẫn chưa làm), tuyệt đối KHÔNG dùng Vませんでした.",
      "examples": [
        {
          "jp": "もう ひるごはんを たべましたか。",
          "romaji": "mou hirugohan wo tabemashita ka.",
          "vn": "Bạn đã ăn trưa chưa?"
        },
        {
          "jp": "いいえ、まだです。",
          "romaji": "iie, mada desu.",
          "vn": "Chưa, tôi vẫn chưa ăn."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "わたしは はし [blank] ごはんを 食べます。",
      "options": ["で", "に", "を", "へ"],
      "answer": "で",
      "vn": "Tôi ăn cơm bằng đũa.",
      "explanation": "Chỉ công cụ, phương tiện thực hiện hành động (đũa - はし) dùng trợ từ で."
    },
    {
      "question": "「ありがとう」は 英語(えいご) [blank] 何ですか。",
      "options": ["で", "に", "は", "を"],
      "answer": "で",
      "vn": "'Cảm ơn' trong tiếng Anh là gì?",
      "explanation": "Ngôn ngữ được coi như một phương tiện truyền đạt nên dùng trợ từ で (bằng tiếng Anh)."
    },
    {
      "question": "わたしは 山田さんに 花を [blank]。",
      "options": ["あげました", "もらいました", "かしました", "ならいました"],
      "answer": "あげました",
      "vn": "Tôi đã tặng hoa cho anh Yamada.",
      "explanation": "Hành động có chủ thể là 'tôi' hướng tới 'anh Yamada' nên dùng あげました (tặng cho). Các từ khác là nhận/mượn/học từ ai đó."
    },
    {
      "question": "わたしは カリナさん [blank] CDを 借りました。",
      "options": ["に", "で", "を", "は"],
      "answer": "に",
      "vn": "Tôi đã mượn đĩa CD từ bạn Karina.",
      "explanation": "Mượn TỪ ai, nhận TỪ ai dùng trợ từ に (hoặc から)."
    },
    {
      "question": "もう 昼ごはんを 食べましたか。 ...いいえ、[blank]。",
      "options": ["まだです", "まだ 食べませんでした", "もう 食べません", "もう です"],
      "answer": "まだです",
      "vn": "Bạn đã ăn trưa chưa? ...Chưa, tôi chưa ăn.",
      "explanation": "Phủ định cho câu hỏi 'もう Vましたか' luôn là 'いいえ、まだです'. Tuyệt đối không dùng ませんでした."
    },
    {
      "question": "[blank] ごはんを 食べますか。 ...スプーンで 食べます。",
      "options": ["何で", "だれ", "いつ", "どこ"],
      "answer": "何で",
      "vn": "Bạn ăn cơm bằng gì? ...Tôi ăn bằng thìa.",
      "explanation": "Câu trả lời là スプーンで (bằng thìa) nên câu hỏi là 何で (bằng gì)."
    },
    {
      "question": "わたしは 母に 時計を [blank]。",
      "options": ["もらいました", "あげました", "かしました", "おしえました"],
      "answer": "もらいました",
      "vn": "Tôi đã nhận chiếc đồng hồ từ mẹ.",
      "explanation": "Hành động nhận món đồ (đồng hồ) từ ai đó (mẹ) dùng もらいました."
    },
    {
      "question": "「さようなら」は [blank] で 何ですか。 ...「Goodbye」です。",
      "options": ["英語(えいご)", "日本語(にほんご)", "ベトナム語(ご)", "だれ"],
      "answer": "英語(えいご)",
      "vn": "'Tạm biệt' trong tiếng Anh là gì? ...Là 'Goodbye'.",
      "explanation": "Câu trả lời là tiếng Anh ('Goodbye') nên ô trống điền 英語 (tiếng Anh)."
    },
    {
      "question": "わたしは ワンさんに 日本語を [blank]。",
      "options": ["教(おし)えます", "もらいます", "借(か)ります", "習(なら)います"],
      "answer": "教(おし)えます",
      "vn": "Tôi dạy tiếng Nhật cho bạn Wang.",
      "explanation": "Hành động truyền đạt kiến thức từ bản thân (tôi) sang người khác (bạn Wang) dùng 教えます."
    },
    {
      "question": "もう レポートを [blank]。 ...はい、送りました。",
      "options": ["送(おく)りましたか", "送(おく)りません", "送(おく)ります", "送(おく)りますか"],
      "answer": "送(おく)りましたか",
      "vn": "Bạn đã gửi báo cáo chưa? ...Vâng, tôi đã gửi rồi.",
      "explanation": "Đi với もう (đã... rồi) phải dùng động từ chia ở thì quá khứ (ましたか)."
    },
    {
      "question": "パソコン [blank] レポートを 書きます。",
      "options": ["で", "に", "を", "へ"],
      "answer": "で",
      "vn": "Tôi viết báo cáo bằng máy tính.",
      "explanation": "Chỉ công cụ (máy tính) dùng để thực hiện hành động (viết báo cáo) đi với trợ từ で."
    },
    {
      "question": "[blank] に 日本語を 習いますか。 ...マリアさんに 習います。",
      "options": ["だれ", "なに", "どこ", "いつ"],
      "answer": "だれ",
      "vn": "Bạn học tiếng Nhật từ ai? ...Tôi học từ bạn Maria.",
      "explanation": "Câu trả lời là một người (マリアさん) nên từ để hỏi phải là だれ (ai)."
    },
    {
      "question": "もう 宿題(しゅくだい)を しましたか。 ...[blank]、まだです。",
      "options": ["いいえ", "はい", "ええ", "もう"],
      "answer": "いいえ",
      "vn": "Bạn đã làm bài tập chưa? ...Chưa, tôi chưa làm.",
      "explanation": "Đáp lại まだです (vẫn chưa) thì đầu câu phải là いいえ (Không)."
    },
    {
      "question": "わたしは 会社(かいしゃ)の人(ひと) [blank] お金を 借ります。",
      "options": ["から", "で", "を", "へ"],
      "answer": "から",
      "vn": "Tôi vay tiền từ người trong công ty.",
      "explanation": "Mượn/Vay TỪ ai đó có thể dùng に hoặc から. Trong các đáp án chỉ có から là chính xác."
    },
    {
      "question": "もう 新幹線(しんかんせん)の 切符(きっぷ)を 買いましたか。 ...はい、[blank]。",
      "options": ["もう 買いました", "まだです", "もう 買いません", "買いましたか"],
      "answer": "もう 買いました",
      "vn": "Bạn đã mua vé tàu Shinkansen chưa? ...Vâng, tôi đã mua rồi.",
      "explanation": "Trả lời khẳng định (はい) cho câu hỏi もう Vましたか thì lặp lại là もう Vました."
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
