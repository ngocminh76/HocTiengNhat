import { NihongoLesson } from './types';
import { readings } from '../readings/reading1';

const lesson: NihongoLesson = {
  "id": 1,
  "chapter": "第1課",
  "title": "はじめまして",
  "titleVn": "Bài 1: Xin chào lần đầu gặp mặt",
  "theme": "Giới thiệu bản thân · Quốc tịch · Nghề nghiệp",
  "words": [
    {
      "id": "L1_01",
      "word": "私",
      "reading": "わたし",
      "romaji": "watashi",
      "meaning": "Tôi",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "TƯ",
        "components": "私 = 禾 (Hòa - Cây lúa) + 厶 (Khư - Riêng tư)",
        "story": "Giữ lúa (禾) lúa làm của riêng (厶) cho TƯ (tôi).",
        "examples": "私 (Tôi), 私立 (Tư lập)"
      }
    },
    {
      "id": "L1_01b",
      "word": "私たち",
      "reading": "わたしたち",
      "romaji": "watashitachi",
      "meaning": "Chúng tôi, chúng ta",
      "type": "Đại từ"
    },
    {
      "id": "L1_02",
      "word": "あなた",
      "reading": "あなた",
      "romaji": "anata",
      "meaning": "Bạn, anh/chị",
      "type": "Đại từ"
    },
    {
      "id": "L1_03",
      "word": "あの人",
      "reading": "あのひと",
      "romaji": "ano hito",
      "meaning": "Người kia",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "NHÂN",
        "components": "人 (Nhân - Người)",
        "story": "Hình ảnh một người đang sải bước chân đi.",
        "examples": "人 (Người), 日本人 (Người Nhật)"
      }
    },
    {
      "id": "L1_03b",
      "word": "あの方",
      "reading": "あのかた",
      "romaji": "ano kata",
      "meaning": "Vị kia (cách nói lịch sự của あの人)",
      "type": "Đại từ"
    },
    {
      "id": "L1_04",
      "word": "皆さん",
      "reading": "みなさん",
      "romaji": "minasan",
      "meaning": "Mọi người",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "GIAI",
        "components": "皆 = 比 (Tỷ - So sánh) + 白 (Bạch - Trắng)",
        "story": "Mọi người (Giai) khi so sánh (比) đều công bằng trắng bóc (白) như nhau.",
        "examples": "皆さん (Mọi người), 皆 (Tất cả)"
      }
    },
    {
      "id": "L1_05",
      "word": "〜さん",
      "reading": "〜さん",
      "romaji": "~san",
      "meaning": "Anh/chị/ông/bà (kính ngữ)",
      "type": "Tiếp vĩ ngữ"
    },
    {
      "id": "L1_05b",
      "word": "〜人",
      "reading": "〜じん",
      "romaji": "~jin",
      "meaning": "Người nước ~",
      "type": "Tiếp vĩ ngữ",
      "kanjiBreakdown": {
        "hanviet": "NHÂN",
        "components": "人 (Nhân - Người)",
        "story": "Người nước nào đó.",
        "examples": "日本人 (Người Nhật)"
      }
    },
    {
      "id": "L1_06",
      "word": "〜くん",
      "reading": "〜くん",
      "romaji": "~kun",
      "meaning": "(Dùng cho nam trẻ hơn)",
      "type": "Tiếp vĩ ngữ"
    },
    {
      "id": "L1_07",
      "word": "〜ちゃん",
      "reading": "〜ちゃん",
      "romaji": "~chan",
      "meaning": "(Thân mật, dùng cho nữ/trẻ nhỏ)",
      "type": "Tiếp vĩ ngữ"
    },
    {
      "id": "L1_08",
      "word": "先生",
      "reading": "せんせい",
      "romaji": "sensei",
      "meaning": "Giáo viên, thầy/cô giáo",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TIÊN SINH",
        "components": "先 (Tiên - Trước) + 生 (Sinh - Sinh ra)",
        "story": "Người sinh (生) ra trước (先) có nhiều kinh nghiệm nên làm thầy.",
        "examples": "先生 (Giáo viên), 先月 (Tháng trước), 学生 (Học sinh)"
      }
    },
    {
      "id": "L1_09",
      "word": "教師",
      "reading": "きょうし",
      "romaji": "kyoushi",
      "meaning": "Giáo viên (nghề nghiệp)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIÁO SƯ",
        "components": "教 (Giáo - Dạy dỗ) + 師 (Sư - Thầy)",
        "story": "Người thầy (Sư) chuyên giảng dạy (Giáo) kiến thức.",
        "examples": "教師 (Giáo viên), 医師 (Bác sĩ)"
      }
    },
    {
      "id": "L1_10",
      "word": "学生",
      "reading": "がくせい",
      "romaji": "gakusei",
      "meaning": "Học sinh, sinh viên",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỌC SINH",
        "components": "学 (Học - Học tập) + 生 (Sinh - Người/sống)",
        "story": "Người (生) đang phải học (学) là học sinh.",
        "examples": "学生 (Học sinh), 学校 (Trường học), 先生 (Giáo viên)"
      }
    },
    {
      "id": "L1_11",
      "word": "会社員",
      "reading": "かいしゃいん",
      "romaji": "kaishain",
      "meaning": "Nhân viên công ty",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỘI XÃ VIÊN",
        "components": "会 (Hội - Gặp gỡ) + 社 (Xã - Thần đất/Công ty) + 員 (Viên - Người)",
        "story": "Người (員) đi đến gặp gỡ (会) tại công ty (社) là nhân viên công ty.",
        "examples": "会社員 (Nhân viên), 会社 (Công ty), 会議 (Cuộc họp)"
      }
    },
    {
      "id": "L1_11b",
      "word": "銀行員",
      "reading": "ぎんこういん",
      "romaji": "ginkouin",
      "meaning": "Nhân viên ngân hàng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGÂN HÀNH VIÊN",
        "components": "銀 (Ngân - Bạc) + 行 (Hành - Đi/Ngân hàng) + 員 (Viên - Người)",
        "story": "Người làm việc ở nơi giao dịch tiền bạc (Ngân hành) là nhân viên ngân hàng.",
        "examples": "銀行員 (Nhân viên ngân hàng), 銀行 (Ngân hàng)"
      }
    },
    {
      "id": "L1_12",
      "word": "医者",
      "reading": "いしゃ",
      "romaji": "isha",
      "meaning": "Bác sĩ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "Y GIẢ",
        "components": "医 (Y - Y học: 匚 bộ phương, 矢 mũi tên) + 者 (Giả - Người)",
        "story": "Người (者) chuyên chữa trị vết thương do mũi tên (矢) gây ra là Y bác sĩ (医).",
        "examples": "医者 (Bác sĩ), 医学 (Y học), 病院 (Bệnh viện)"
      }
    },
    {
      "id": "L1_13",
      "word": "研究者",
      "reading": "けんきゅうしゃ",
      "romaji": "kenkyuusha",
      "meaning": "Nhà nghiên cứu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGHIÊN CỨU GIẢ",
        "components": "研 (Nghiên - Mài dũa) + 究 (Cứu - Tìm tòi) + 者 (Giả - Người)",
        "story": "Người (Giả) dành thời gian mài dũa (Nghiên) và tìm tòi (Cứu) kiến thức mới.",
        "examples": "研究者 (Nhà nghiên cứu), 研究 (Nghiên cứu)"
      }
    },
    {
      "id": "L1_14",
      "word": "エンジニア",
      "reading": "エンジニア",
      "romaji": "enjinia",
      "meaning": "Kỹ sư",
      "type": "Danh từ"
    },
    {
      "id": "L1_15",
      "word": "大学",
      "reading": "だいがく",
      "romaji": "daigaku",
      "meaning": "Trường đại học",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI HỌC",
        "components": "大 (Đại - To lớn) + 学 (Học - Học tập)",
        "story": "Nơi có môi trường học (学) tập lớn (大) nhất.",
        "examples": "大学 (Đại học), 大学生 (Sinh viên), 大きい (To lớn)"
      }
    },
    {
      "id": "L1_16",
      "word": "病院",
      "reading": "びょういん",
      "romaji": "byouin",
      "meaning": "Bệnh viện",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BỆNH VIỆN",
        "components": "病 (Bệnh - Ốm đau) + 院 (Viện - Nơi chốn lớn)",
        "story": "Nơi (Viện) tập trung chữa trị người ốm, bệnh tật (Bệnh).",
        "examples": "病院 (Bệnh viện), 病気 (Bệnh tật), 大学院 (Cao học)"
      }
    },
    {
      "id": "L1_17",
      "word": "電気",
      "reading": "でんき",
      "romaji": "denki",
      "meaning": "Điện, đèn điện",
      "type": "Danh từ"
    },
    {
      "id": "L1_17b",
      "word": "電気会社",
      "reading": "でんきかいしゃ",
      "romaji": "denki gaisha",
      "meaning": "Công ty điện",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỆN KHÍ HỘI XÃ",
        "components": "電 (Điện) + 気 (Khí) + 会社 (Công ty)",
        "story": "Công ty (会社) sản xuất và cung cấp điện khí (電気).",
        "examples": "電気 (Điện), 会社 (Công ty)"
      }
    },
    {
      "id": "L1_18",
      "word": "日本",
      "reading": "にほん",
      "romaji": "nihon",
      "meaning": "Nhật Bản",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHẬT BẢN",
        "components": "日 (Nhật - Mặt trời) + 本 (Bản - Nguồn gốc/Sách)",
        "story": "Nước Nhật được xem là nguồn gốc (本) sinh ra mặt trời (日) (Đất nước mặt trời mọc).",
        "examples": "日本 (Nhật Bản), 毎日 (Mỗi ngày), 本 (Sách)"
      }
    },
    {
      "id": "L1_19",
      "word": "中国",
      "reading": "ちゅうごく",
      "romaji": "chuugoku",
      "meaning": "Trung Quốc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRUNG QUỐC",
        "components": "中 (Trung - Ở giữa) + 国 (Quốc - Đất nước)",
        "story": "Đất nước (Quốc) nằm ở vị trí trung tâm (Trung).",
        "examples": "中国 (Trung Quốc), 外国 (Nước ngoài)"
      }
    },
    {
      "id": "L1_20",
      "word": "韓国",
      "reading": "かんこく",
      "romaji": "kankoku",
      "meaning": "Hàn Quốc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HÀN QUỐC",
        "components": "韓 (Hàn - Nước Hàn) + 国 (Quốc - Nước)",
        "story": "Đất nước (Quốc) tên là Hàn (韓).",
        "examples": "韓国 (Hàn Quốc)"
      }
    },
    {
      "id": "L1_21",
      "word": "アメリカ",
      "reading": "アメリカ",
      "romaji": "america",
      "meaning": "Mỹ (Hoa Kỳ)",
      "type": "Danh từ"
    },
    {
      "id": "L1_22",
      "word": "イギリス",
      "reading": "イギリス",
      "romaji": "igirisu",
      "meaning": "Anh (Vương quốc Anh)",
      "type": "Danh từ"
    },
    {
      "id": "L1_23",
      "word": "フランス",
      "reading": "フランス",
      "romaji": "furansu",
      "meaning": "Pháp",
      "type": "Danh từ"
    },
    {
      "id": "L1_24",
      "word": "ブラジル",
      "reading": "ブラジル",
      "romaji": "burajiru",
      "meaning": "Brazil",
      "type": "Danh từ"
    },
    {
      "id": "L1_25",
      "word": "はじめまして",
      "reading": "はじめまして",
      "romaji": "hajimemashite",
      "meaning": "Xin chào (lần đầu gặp)",
      "type": "Thán từ"
    },
    {
      "id": "L1_26",
      "word": "どうぞよろしく",
      "reading": "どうぞよろしく",
      "romaji": "douzo yoroshiku",
      "meaning": "Rất mong được quen biết",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_27",
      "word": "こちらこそ",
      "reading": "こちらこそ",
      "romaji": "kochira koso",
      "meaning": "Tôi cũng vậy (đáp lại よろしく)",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_28",
      "word": "はい",
      "reading": "はい",
      "romaji": "hai",
      "meaning": "Vâng, đúng vậy",
      "type": "Thán từ"
    },
    {
      "id": "L1_29",
      "word": "いいえ",
      "reading": "いいえ",
      "romaji": "iie",
      "meaning": "Không (phủ định)",
      "type": "Thán từ"
    },
    {
      "id": "L1_30",
      "word": "そうですか",
      "reading": "そうですか",
      "romaji": "sou desu ka",
      "meaning": "Vậy à? / Thế à?",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_31",
      "word": "だれ",
      "reading": "だれ",
      "romaji": "dare",
      "meaning": "Ai",
      "type": "Từ để hỏi"
    },
    {
      "id": "L1_32",
      "word": "どなた",
      "reading": "どなた",
      "romaji": "donata",
      "meaning": "Ai (lịch sự)",
      "type": "Từ để hỏi"
    },
    {
      "id": "L1_32a",
      "word": "～歳",
      "reading": "～さい",
      "romaji": "~sai",
      "meaning": "~ tuổi",
      "type": "Hậu tố"
    },
    {
      "id": "L1_32b",
      "word": "何歳",
      "reading": "なんさい",
      "romaji": "nansai",
      "meaning": "Mấy tuổi, bao nhiêu tuổi",
      "type": "Từ để hỏi"
    },
    {
      "id": "L1_32c",
      "word": "おいくつ",
      "reading": "おいくつ",
      "romaji": "oikutsu",
      "meaning": "Bao nhiêu tuổi (lịch sự của なんさい)",
      "type": "Từ để hỏi"
    },
    {
      "id": "L1_33",
      "word": "おなまえは？",
      "reading": "おなまえは？",
      "romaji": "onamae wa?",
      "meaning": "Tên bạn là gì?",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_34",
      "word": "しつれいですが",
      "reading": "しつれいですが",
      "romaji": "shitsurei desu ga",
      "meaning": "Xin lỗi (khi hỏi thông tin)",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_34b",
      "word": "こちらは～さんです",
      "reading": "こちらは～さんです",
      "romaji": "kochirawa ~ san desu",
      "meaning": "Đây là anh/chị/ông/bà ~",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_34c",
      "word": "～から来ました",
      "reading": "～からきました",
      "romaji": "~kara kimashita",
      "meaning": "Tôi đến từ ~",
      "type": "Mẫu câu"
    },
    {
      "id": "L1_35",
      "word": "インド",
      "reading": "インド",
      "romaji": "Indo",
      "meaning": "Ấn Độ",
      "type": "Danh từ"
    },
    {
      "id": "L1_35b",
      "word": "インドネシア",
      "reading": "インドネシア",
      "romaji": "Indoneshia",
      "meaning": "Indonesia",
      "type": "Danh từ"
    },
    {
      "id": "L1_36",
      "word": "タイ",
      "reading": "タイ",
      "romaji": "Tai",
      "meaning": "Thái Lan",
      "type": "Danh từ"
    },
    {
      "id": "L1_37",
      "word": "ドイツ",
      "reading": "ドイツ",
      "romaji": "Doitsu",
      "meaning": "Đức",
      "type": "Danh từ"
    },
    {
      "id": "L1_38",
      "word": "IMC",
      "reading": "アイエムシー",
      "romaji": "ai emu shii",
      "meaning": "Công ty IMC",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "N/A",
        "components": "Từ ngoại lai",
        "story": "Tên công ty giả định.",
        "examples": "IMC"
      }
    },
    {
      "id": "L1_39",
      "word": "パワーでんき",
      "reading": "パワーでんき",
      "romaji": "Pawaa denki",
      "meaning": "Công ty Power",
      "type": "Danh từ"
    },
    {
      "id": "L1_40",
      "word": "ブラジルエアー",
      "reading": "ブラジルエアー",
      "romaji": "Burajiru eaa",
      "meaning": "Hàng không Brazil",
      "type": "Danh từ"
    },
    {
      "id": "L1_41",
      "word": "AKC",
      "reading": "エーケーシー",
      "romaji": "ee kee shii",
      "meaning": "Viện nghiên cứu AKC",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "N/A",
        "components": "Từ ngoại lai",
        "story": "Tên viện nghiên cứu giả định.",
        "examples": "AKC"
      }
    },
    {
      "id": "L1_42",
      "word": "神戸病院",
      "reading": "こうべびょういん",
      "romaji": "Koube byouin",
      "meaning": "Bệnh viện Kobe",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THẦN HỘ BỆNH VIỆN",
        "components": "神戸 (Kobe) + 病院 (Bệnh viện)",
        "story": "Bệnh viện Kobe.",
        "examples": "神戸病院"
      }
    },
    {
      "id": "L1_43",
      "word": "さくら大学",
      "reading": "さくらだいがく",
      "romaji": "Sakura daigaku",
      "meaning": "Đại học Sakura",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI HỌC SAKURA",
        "components": "さくら (Hoa anh đào) + 大学 (Đại học)",
        "story": "Đại học Sakura.",
        "examples": "さくら大学"
      }
    },
    {
      "id": "L1_44",
      "word": "富士大学",
      "reading": "ふじだいがく",
      "romaji": "Fuji daigaku",
      "meaning": "Đại học Fuji",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHÚ SĨ ĐẠI HỌC",
        "components": "富士 (Phú Sĩ) + 大学 (Đại học)",
        "story": "Đại học Phú Sĩ.",
        "examples": "富士大学"
      }
    }
  ],
  "grammar": [
    {
      "title": "Trợ từ は, も, の, か",
      "structure": "は (wa) | も (mo) | の (no) | か (ka)",
      "usage": "Tiếng Nhật là ngôn ngữ chắp dính, các từ được nối với nhau bằng trợ từ.\n- は: Đứng sau danh từ để biểu thị chủ đề của câu.\n- も: Nghĩa là 'cũng', dùng khi tính chất của chủ đề giống với chủ đề đã nêu trước đó.\n- の: Nghĩa là 'của', dùng để nối 2 danh từ, danh từ trước xác định/bổ nghĩa cho danh từ sau.\n- か: Đặt ở cuối câu để tạo thành câu hỏi (nghi vấn).",
      "examples": [
        {
          "jp": "わたしは 学生です。",
          "romaji": "watashi wa gakusei desu.",
          "vn": "Tôi là học sinh."
        },
        {
          "jp": "アンさんも ベトナム人です。",
          "romaji": "An san mo betonamujin desu.",
          "vn": "Bạn An cũng là người Việt Nam."
        },
        {
          "jp": "やまださんは FPTの しゃいんです。",
          "romaji": "Yamada san wa FPT no shain desu.",
          "vn": "Anh Yamada là nhân viên của công ty FPT."
        }
      ]
    },
    {
      "title": "N1 は N2 です (Khẳng định)",
      "structure": "N1 は N2 です",
      "usage": "- Trợ từ は (đọc là wa) biểu thị N1 là chủ đề của câu.\n- です (desu) đặt ở cuối câu khẳng định, thể hiện sự lịch sự với người nghe.\n- Nghĩa: N1 là N2.",
      "examples": [
        {
          "jp": "わたしは 学生です。",
          "romaji": "watashi wa gakusei desu.",
          "vn": "Tôi là học sinh."
        }
      ]
    },
    {
      "title": "N1 は N2 じゃありません (Phủ định)",
      "structure": "N1 は N2 じゃありません",
      "usage": "- じゃありません (ja arimasen) là dạng phủ định của です, dùng trong giao tiếp hàng ngày.\n- Trong văn viết trang trọng hơn, dùng ではありません (dewa arimasen).\n- Nghĩa: N1 không phải là N2.",
      "examples": [
        {
          "jp": "わたしは ぎんこういんじゃありません。",
          "romaji": "watashi wa ginkouin ja arimasen.",
          "vn": "Tôi không phải là nhân viên ngân hàng."
        }
      ]
    },
    {
      "title": "Câu hỏi: N1 は N2 ですか",
      "structure": "N1 は N2 ですか",
      "usage": "- Thêm trợ từ か vào cuối câu để tạo câu hỏi nghi vấn.\n- Trả lời bằng はい (Vâng / Đúng) hoặc いいえ (Không / Sai).\n- Nghĩa: N1 là N2 phải không?",
      "examples": [
        {
          "jp": "ハイさんは いしゃですか。",
          "romaji": "Hai san wa isha desu ka.",
          "vn": "Anh Hải là bác sĩ phải không?"
        },
        {
          "jp": "はい、いしゃです。",
          "romaji": "hai, isha desu.",
          "vn": "Vâng, anh Hải là bác sĩ."
        },
        {
          "jp": "いいえ、いしゃじゃありません。",
          "romaji": "iie, isha ja arimasen.",
          "vn": "Không, anh Hải không phải là bác sĩ."
        }
      ]
    },
    {
      "title": "Cách hỏi tuổi",
      "structure": "〜は 何歳 / おいくつ ですか",
      "usage": "- 何歳 (nan sai): Mấy tuổi?\n- おいくつ (oikutsu): Bao nhiêu tuổi? (Lịch sự hơn nan sai).\n- Trả lời: Số tuổi + 歳 (sai) です。",
      "examples": [
        {
          "jp": "たかひろくんは 何歳ですか。",
          "romaji": "Takahiro kun wa nan sai desu ka.",
          "vn": "Bé Takahiro mấy tuổi rồi?"
        },
        {
          "jp": "たかひろくんは 8歳です。",
          "romaji": "Takahiro kun wa hassai desu.",
          "vn": "Bé Takahiro 8 tuổi."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "わたし [blank] 学生です。",
      "options": ["は", "が", "を", "に"],
      "answer": "は",
      "vn": "Tôi là học sinh.",
      "explanation": "Trợ từ は (wa) được dùng để đánh dấu chủ đề của câu."
    },
    {
      "question": "アンさん [blank] ベトナム人です。",
      "options": ["の", "も", "で", "か"],
      "answer": "も",
      "vn": "Bạn An cũng là người Việt Nam.",
      "explanation": "Trợ từ も (mo) có nghĩa là 'cũng', dùng khi thông tin giống với chủ đề đã nêu trước đó."
    },
    {
      "question": "やまださんは FPT [blank] しゃいんです。",
      "options": ["は", "が", "の", "か"],
      "answer": "の",
      "vn": "Anh Yamada là nhân viên của công ty FPT.",
      "explanation": "Trợ từ の (no) dùng để nối hai danh từ, thể hiện sự sở hữu hoặc trực thuộc (N1 của N2)."
    },
    {
      "question": "ハイさんは いしゃです [blank]。",
      "options": ["は", "も", "の", "か"],
      "answer": "か",
      "vn": "Anh Hải là bác sĩ phải không?",
      "explanation": "Trợ từ か (ka) đặt ở cuối câu để tạo thành câu hỏi nghi vấn."
    },
    {
      "question": "わたしは ぎんこういん [blank]。",
      "options": ["です", "じゃありません", "ですか", "の"],
      "answer": "じゃありません",
      "vn": "Tôi không phải là nhân viên ngân hàng.",
      "explanation": "じゃありません (ja arimasen) là thể phủ định của です, nghĩa là 'không phải là'."
    },
    {
      "question": "あの方は どなた [blank]。",
      "options": ["です", "ですか", "は", "の"],
      "answer": "ですか",
      "vn": "Vị kia là ai vậy?",
      "explanation": "Khi hỏi ai đó là ai, ta dùng từ để hỏi 'どなた' kèm với đuôi câu hỏi 'ですか'."
    },
    {
      "question": "ミラーさんは アメリカ人 [blank]。",
      "options": ["です", "じゃありません", "ですか", "も"],
      "answer": "です",
      "vn": "Anh Miller là người Mỹ.",
      "explanation": "Câu khẳng định cơ bản, kết thúc bằng です để thể hiện sự lịch sự."
    },
    {
      "question": "カリナさん [blank] 学生ですか。",
      "options": ["は", "の", "か", "に"],
      "answer": "は",
      "vn": "Chị Karina là học sinh phải không?",
      "explanation": "Trợ từ は đánh dấu 'Karina-san' là chủ đề của câu hỏi."
    },
    {
      "question": "イーさんは さくら大学 [blank] 先生です。",
      "options": ["は", "が", "の", "も"],
      "answer": "の",
      "vn": "Anh Lee là giáo viên của Đại học Sakura.",
      "explanation": "Đại học Sakura (N1) là nơi làm việc của giáo viên (N2), nên nối bằng の."
    },
    {
      "question": "たろうくんは 8歳 [blank]。",
      "options": ["です", "ですか", "は", "の"],
      "answer": "です",
      "vn": "Bé Tarou 8 tuổi.",
      "explanation": "Câu khẳng định thông báo số tuổi, kết thúc bằng です."
    },
    {
      "question": "サントスさんは ブラジル人です。マリアさん [blank] ブラジル人です。",
      "options": ["は", "が", "も", "の"],
      "answer": "も",
      "vn": "Anh Santos là người Brazil. Chị Maria cũng là người Brazil.",
      "explanation": "Sử dụng も (cũng) vì thông tin của Maria giống hệt với thông tin của Santos trước đó."
    },
    {
      "question": "わたしは エンジニア [blank]。学生です。",
      "options": ["です", "じゃありません", "ですか", "の"],
      "answer": "じゃありません",
      "vn": "Tôi không phải là kỹ sư. Tôi là học sinh.",
      "explanation": "Vế đầu tiên mang nghĩa phủ định (không phải là kỹ sư), nên dùng じゃありません."
    },
    {
      "question": "はじめまして。[blank]から 来ました。",
      "options": ["アメリカ", "アメリカ人", "わたし", "あなた"],
      "answer": "アメリカ",
      "vn": "Rất vui được gặp bạn. Tôi đến từ Mỹ.",
      "explanation": "Mẫu câu '~kara kimashita' (đến từ đâu) cần một danh từ chỉ địa điểm/quốc gia ở trước, không dùng 'người' (jin)."
    },
    {
      "question": "ワンさんは 医者 [blank]。...いいえ、いしゃじゃありません。",
      "options": ["です", "ですか", "は", "も"],
      "answer": "ですか",
      "vn": "Anh Wang là bác sĩ phải không? ...Không, không phải là bác sĩ.",
      "explanation": "Phần đáp lại có 'いいえ' nên câu trước đó chắc chắn phải là một câu hỏi (ですか)."
    },
    {
      "question": "グプタさんは IMCの しゃいんです。イーさん [blank] IMCの しゃいんですか。",
      "options": ["は", "が", "も", "の"],
      "answer": "も",
      "vn": "Anh Gupta là nhân viên IMC. Anh Lee cũng là nhân viên IMC phải không?",
      "explanation": "Hỏi xem một người 'cũng' có đặc điểm giống người trước không, dùng trợ từ も kết hợp đuôi ですか."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "はじめてのであい",
    "titleVn": "✨ Cuộc Gặp Gỡ Đầu Tiên",
    "intro": "Bài thơ nhỏ dùng toàn bộ từ vựng Bài 1 — đọc thành tiếng để từ khắc sâu vào trí nhớ!",
    "lines": [
      {
        "kanji": "初めまして、皆さん。",
        "jp": "はじめまして、みなさん。",
        "romaji": "Hajimemashite, minasan.",
        "vn": "Xin chào, mọi người ơi.",
        "note": "はじめまして · みなさん"
      },
      {
        "kanji": "私はマリア、ブラジル人です。",
        "jp": "わたしはマリア、ブラジルじんです。",
        "romaji": "Watashi wa Maria, Burajiru-jin desu.",
        "vn": "Tôi là Maria, người Brazil.",
        "note": "わたし · ブラジル"
      },
      {
        "kanji": "学生ですが、いつか会社員に。",
        "jp": "がくせいですが、いつかかいしゃいんに。",
        "romaji": "Gakusei desu ga, itsuka kaishain ni.",
        "vn": "Hiện là sinh viên, mơ làm nhân viên một ngày.",
        "note": "がくせい · かいしゃいん"
      },
      {
        "kanji": "あなたは先生ですか？",
        "jp": "あなたはせんせいですか？",
        "romaji": "Anata wa sensei desu ka?",
        "vn": "Còn bạn, bạn là giáo viên sao?",
        "note": "あなた · せんせい"
      },
      {
        "kanji": "いいえ、私は医者です。",
        "jp": "いいえ、わたしはいしゃです。",
        "romaji": "Iie, watashi wa isha desu.",
        "vn": "Không, tôi là bác sĩ.",
        "note": "いいえ · いしゃ"
      },
      {
        "kanji": "あの人はエンジニア、日本人です。",
        "jp": "あのひとはエンジニア、にほんじんです。",
        "romaji": "Ano hito wa enjinia, Nihon-jin desu.",
        "vn": "Người kia là kỹ sư, người Nhật Bản.",
        "note": "あのひと · エンジニア · にほん"
      },
      {
        "kanji": "キムさんは韓国から、研究者。",
        "jp": "キムさんはかんこくから、けんきゅうしゃ。",
        "romaji": "Kimu-san wa Kankoku kara, kenkyuusha.",
        "vn": "Anh Kim đến từ Hàn Quốc, là nhà nghiên cứu.",
        "note": "かんこく · けんきゅうしゃ"
      },
      {
        "kanji": "テレサさんはイギリスの教師です。",
        "jp": "テレサさんはイギリスのきょうしです。",
        "romaji": "Teresa-san wa Igirisu no kyoushi desu.",
        "vn": "Chị Teresa là giáo viên người Anh.",
        "note": "イギリス · きょうし"
      },
      {
        "kanji": "ミラーさんはアメリカから、大学の先生。",
        "jp": "ミラーさんはアメリカから、だいがくのせんせい。",
        "romaji": "Miraa-san wa Amerika kara, daigaku no sensei.",
        "vn": "Anh Miller từ Mỹ, dạy đại học.",
        "note": "アメリカ · だいがく"
      },
      {
        "kanji": "チャンさんは中国から、フランスの病院で。",
        "jp": "チャンさんはちゅうごくから、フランスのびょういんで。",
        "romaji": "Chan-san wa Chuugoku kara, Furansu no byouin de.",
        "vn": "Anh Trần từ Trung Quốc, làm tại bệnh viện Pháp.",
        "note": "ちゅうごく · フランス · びょういん"
      },
      {
        "kanji": "そうですか！皆さん違う、皆さんいい。",
        "jp": "そうですか！みんなちがう、みんないい。",
        "romaji": "Sou desu ka! Minna chigau, minna ii.",
        "vn": "Vậy à! Mỗi người một vẻ, thật tuyệt vời.",
        "note": "そうですか"
      },
      {
        "kanji": "はい、どうぞよろしく、こちらこそ。",
        "jp": "はい、どうぞよろしく、こちらこそ。",
        "romaji": "Hai, douzo yoroshiku, kochira koso.",
        "vn": "Vâng, rất mong được quen biết — tôi cũng vậy!",
        "note": "はい · どうぞよろしく · こちらこそ"
      }
    ]
  },
  
  "dialogue": {
    "title": "しつもんが　あります。",
    "titleVn": "Tôi có câu hỏi.",
    "lines": [
      {
        "speaker": "せいと",
        "jp": "すみません。せんせい、しつもんが　あります。",
        "blankJp": "すみません。せんせい、（　　　）が　あります。",
        "blankMeanings": ["Câu hỏi"],
        "romaji": "Sumimasen. Sensei, shitsumon ga arimasu.",
        "vn": "Xin lỗi. Thưa thầy/cô, em có câu hỏi ạ."
      },
      {
        "speaker": "せんせい",
        "jp": "はい、なんですか。",
        "romaji": "Hai, nan desu ka.",
        "vn": "Ừ, có chuyện gì vậy?"
      },
      {
        "speaker": "せいと",
        "jp": "\"It's hot today, isn't it?\"は　にほんごで　なんですか。",
        "blankJp": "\"It's hot today, isn't it?\"は　にほんご（　　　）なんですか。",
        "blankMeanings": ["Bằng"],
        "romaji": "\"It's hot today, isn't it?\" wa nihongo de nan desu ka.",
        "vn": "\"It's hot today, isn't it?\" tiếng Nhật nói thế nào ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "うん、「きょうは　あついですね」です。",
        "blankJp": "うん、「きょうは（　　　）ですね」です。",
        "blankMeanings": ["Nóng"],
        "romaji": "Un, \"Kyou wa atsui desu ne\" desu.",
        "vn": "Ừm, là \"Kyou wa atsui desu ne\"."
      },
      {
        "speaker": "せいと",
        "jp": "ふ～ん。じゃ、\"Yes. That's right.\" は　なんですか。",
        "romaji": "Fu~n. Ja, \"Yes. That's right.\" wa nan desu ka.",
        "vn": "Dạ... Vậy \"Yes. That's right.\" thì nói thế nào ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "「そうですね」です。",
        "blankJp": "「（　　　）ですね」です。",
        "blankMeanings": ["Đúng vậy"],
        "romaji": "\"Sou desu ne\" desu.",
        "vn": "Là \"Sou desu ne\"."
      },
      {
        "speaker": "せいと",
        "jp": "わかりました。ありがとうございました。きょうは　あついですね。せんせい。",
        "romaji": "Wakarimashita. Arigatou gozaimashita. Kyou wa atsui desu ne. Sensei.",
        "vn": "Em hiểu rồi ạ. Em cảm ơn thầy/cô. Hôm nay trời nóng thầy/cô nhỉ."
      },
      {
        "speaker": "せんせい",
        "jp": "ああ。そうですね。",
        "romaji": "Aa. Sou desu ne.",
        "vn": "Ừ. Đúng vậy nhỉ."
      }
    ]
  }
};

export default lesson;
