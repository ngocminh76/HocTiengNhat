import { NihongoLesson } from './types';
import { readings } from '../readings/reading24';

const lesson: NihongoLesson = {
  "id": 24,
  "chapter": "第24課",
  "title": "くれます・てあげます",
  "titleVn": "Bài 24: Cho và Nhận",
  "theme": "Sự trao đổi",
  "words": [
    {
      "id": "L24_01",
      "word": "くれます",
      "reading": "くれます",
      "romaji": "kuremasu",
      "meaning": "Cho (tôi)",
      "type": "Động từ"
    },
    {
      "id": "L24_02",
      "word": "連れて行きます",
      "reading": "つれていきます",
      "romaji": "tsurete ikimasu",
      "meaning": "Dẫn đi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LIÊN HÀNH",
        "components": "連 (Liên) + 行 (Hành)",
        "story": "Liên kết dẫn theo đi ra ngoài.",
        "examples": "連れて行きます (Dẫn đi)"
      }
    },
    {
      "id": "L24_03",
      "word": "連れて来ます",
      "reading": "つれてきます",
      "romaji": "tsurete kimasu",
      "meaning": "Dẫn đến",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LIÊN LAI",
        "components": "連 (Liên) + 来 (Lai)",
        "story": "Liên kết dẫn theo đến đây.",
        "examples": "連れて来ます (Dẫn đến)"
      }
    },
    {
      "id": "L24_04",
      "word": "送ります",
      "reading": "おくります",
      "romaji": "okurimasu",
      "meaning": "Tiễn (ai đó)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TỐNG",
        "components": "辶 (Sước) + 关 (Quan)",
        "story": "Đưa tiễn (Tống).",
        "examples": "送ります (Tiễn (ai đó))"
      }
    },
    {
      "id": "L24_05",
      "word": "紹介します",
      "reading": "しょうかいします",
      "romaji": "shoukaishimasu",
      "meaning": "Giới thiệu",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THIỆU GIỚI",
        "components": "紹 (Thiệu) + 介 (Giới)",
        "story": "Giới thiệu nhau.",
        "examples": "紹介します (Giới thiệu)"
      }
    },
    {
      "id": "L24_06",
      "word": "案内します",
      "reading": "あんないします",
      "romaji": "annaishimasu",
      "meaning": "Hướng dẫn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ÁN NỘI",
        "components": "案 (Án) + 内 (Nội)",
        "story": "Chỉ dẫn nội tình bên trong (Hướng dẫn).",
        "examples": "案内します (Hướng dẫn)"
      }
    },
    {
      "id": "L24_07",
      "word": "説明します",
      "reading": "せつめいします",
      "romaji": "setsumeishimasu",
      "meaning": "Giải thích",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THUYẾT MINH",
        "components": "説 (Thuyết) + 明 (Minh)",
        "story": "Nói rõ ra cho mọi người hiểu là Giải thích.",
        "examples": "説明します (Giải thích)"
      }
    },
    {
      "id": "L24_08",
      "word": "いれます",
      "reading": "いれます",
      "romaji": "iremasu",
      "meaning": "Pha (cà phê)",
      "type": "Động từ"
    },
    {
      "id": "L24_09",
      "word": "おじいさん",
      "reading": "おじいさん",
      "romaji": "ojiisan",
      "meaning": "Ông / Cụ ông",
      "type": "Danh từ"
    },
    {
      "id": "L24_10",
      "word": "おばあさん",
      "reading": "おばあさん",
      "romaji": "obaasan",
      "meaning": "Bà / Cụ bà",
      "type": "Danh từ"
    },
    {
      "id": "L24_11",
      "word": "準備",
      "reading": "じゅんび",
      "romaji": "junbi",
      "meaning": "Sự chuẩn bị",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHUẨN BỊ",
        "components": "準 (Chuẩn) + 備 (Bị)",
        "story": "Chuẩn bị sẵn sàng.",
        "examples": "準備 (Sự chuẩn bị)"
      }
    },
    {
      "id": "L24_12",
      "word": "意味",
      "reading": "いみ",
      "romaji": "imi",
      "meaning": "Ý nghĩa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "Ý VỊ",
        "components": "意 (Ý) + 味 (Vị)",
        "story": "Hương vị của ý nghĩ (Ý nghĩa).",
        "examples": "意味 (Ý nghĩa)"
      }
    },
    {
      "id": "L24_13",
      "word": "お菓子",
      "reading": "おかし",
      "romaji": "okashi",
      "meaning": "Bánh kẹo",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "QUẢ TỬ",
        "components": "菓 (Quả) + 子 (Tử)",
        "story": "Bánh kẹo.",
        "examples": "お菓子 (Bánh kẹo)"
      }
    },
    {
      "id": "L24_14",
      "word": "全部",
      "reading": "ぜんぶ",
      "romaji": "zenbu",
      "meaning": "Tất cả",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TOÀN BỘ",
        "components": "全 (Toàn) + 部 (Bộ)",
        "story": "Tất cả.",
        "examples": "全部 (Tất cả)"
      }
    },
    {
      "id": "L24_15",
      "word": "自分で",
      "reading": "じぶんで",
      "romaji": "jibun de",
      "meaning": "Tự mình",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "TỰ PHÂN",
        "components": "自 (Tự) + 分 (Phân)",
        "story": "Tự bản thân làm.",
        "examples": "自分で (Tự mình)"
      }
    },
    {
      "id": "L24_16",
      "word": "ほかに",
      "reading": "ほかに",
      "romaji": "hokani",
      "meaning": "Ngoài ra",
      "type": "Phó từ"
    },
    {
      "id": "L24_17",
      "word": "ワゴン車",
      "reading": "ワゴンしゃ",
      "romaji": "wagon sha",
      "meaning": "Xe hơi",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "XA",
        "components": "車 (Xa)",
        "story": "Xe hơi dạng Wagon.",
        "examples": "ワゴン車 (Xe hơi)"
      }
    },
    {
      "id": "L24_18",
      "word": "お弁当",
      "reading": "おべんとう",
      "romaji": "obentou",
      "meaning": "Cơm hộp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BIỆN ĐƯƠNG",
        "components": "弁 (Biện) + 当 (Đương)",
        "story": "Hộp cơm Bento.",
        "examples": "お弁当 (Cơm hộp)"
      }
    },
    {
      "id": "L24_19",
      "word": "母の日",
      "reading": "ははのひ",
      "romaji": "haha no hi",
      "meaning": "Ngày của mẹ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MẪU NHẬT",
        "components": "母 (Mẫu) + 日 (Nhật)",
        "story": "Ngày của Mẹ.",
        "examples": "母の日 (Ngày của mẹ)"
      }
    }
  ],
  "grammar": [
    {
      "title": "Ai đó CHO TÔI cái gì: ～くれます",
      "structure": "Người tặng が/は + (わたしに) + Danh từ を + くれます",
      "usage": "Dùng thay cho 'あげます' khi NGƯỜI NHẬN là TÔI hoặc thành viên trong gia đình tôi. Từ 'わたしに' thường được lược bỏ vì mặc định là cho tôi.",
      "examples": [
        {
          "jp": "たなかさんは (わたしに) はなを くれました。",
          "romaji": "tanaka san wa (watashi ni) hana o kuremashita.",
          "vn": "Anh Tanaka đã tặng hoa CHO TÔI."
        },
        {
          "jp": "ちちは いもうとに ほんを くれました。",
          "romaji": "chichi wa imouto ni hon o kuremashita.",
          "vn": "Bố đã cho em gái tôi quyển sách. (Người nhận là người nhà)"
        }
      ]
    },
    {
      "title": "Làm gì đó CHO người khác: ～て あげます",
      "structure": "わたしは + Người nhận に + Vて あげます",
      "usage": "Diễn tả việc mình (hoặc ai đó) làm một hành động có ích CHO người khác. *Lưu ý: TRÁNH dùng trực tiếp với người lớn tuổi/cấp trên vì dễ mang sắc thái kẻ cả, khoe khoang công trạng.",
      "examples": [
        {
          "jp": "わたしは やまださんに ほんを かして あげました。",
          "romaji": "watashi wa yamada san ni hon o kashite agemashita.",
          "vn": "Tôi đã cho anh Yamada mượn sách."
        },
        {
          "jp": "わたしは ともだちに かさを かって あげました。",
          "romaji": "watashi wa tomodachi ni kasa o katte agemashita.",
          "vn": "Tôi đã mua ô cho bạn."
        }
      ]
    },
    {
      "title": "ĐƯỢC ai đó làm gì cho: ～て もらいます",
      "structure": "わたしは + Người làm giúp に + Vて もらいます",
      "usage": "Chủ ngữ luôn là TÔI. Diễn tả việc mình nhận được sự giúp đỡ từ ai đó, mang hàm ý biết ơn. Người thực hiện hành động đi với trợ từ に (hoặc から).",
      "examples": [
        {
          "jp": "わたしは すずきさんに にほんごを おしえて もらいました。",
          "romaji": "watashi wa suzuki san ni nihongo o oshiete moraimashita.",
          "vn": "Tôi ĐƯỢC anh Suzuki dạy tiếng Nhật cho."
        },
        {
          "jp": "わたしは たなかさんに びょういんへ つれていって もらいました。",
          "romaji": "watashi wa tanaka san ni byouin e tsureteitte moraimashita.",
          "vn": "Tôi ĐƯỢC anh Tanaka dẫn đến bệnh viện."
        }
      ]
    },
    {
      "title": "Ai đó làm gì CHO TÔI: ～て くれます",
      "structure": "Người làm giúp が/は + (わたしに) + Vて くれます",
      "usage": "Chủ ngữ là NGƯỜI THỰC HIỆN hành động. Ý nghĩa giống với 'てもらう' nhưng nhấn mạnh vào lòng tốt của người đã làm việc đó cho mình.",
      "examples": [
        {
          "jp": "すずきさんが にほんごを おしえて くれました。",
          "romaji": "suzuki san ga nihongo o oshiete kuremashita.",
          "vn": "Anh Suzuki đã dạy tiếng Nhật CHO TÔI."
        },
        {
          "jp": "ははが セーターを おくって くれました。",
          "romaji": "haha ga seetaa o okutte kuremashita.",
          "vn": "Mẹ đã gửi áo len CHO TÔI."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "やまださんは わたし（　　）ほんを くれました。",
      "options": ["に", "を", "が", "は"],
      "answer": "に",
      "vn": "Anh Yamada đã tặng sách cho tôi.",
      "explanation": "Người nhận (tôi) đi với trợ từ に."
    },
    {
      "question": "わたしは たなかさんに じしょを かして（　　）。",
      "options": ["あげました", "もらいました", "くれました", "きました"],
      "answer": "あげました",
      "vn": "Tôi đã cho anh Tanaka mượn từ điển.",
      "explanation": "Chủ ngữ là TÔI làm việc gì đó CHO NGƯỜI KHÁC -> dùng Vて あげます."
    },
    {
      "question": "わたしは きむらさんに しゃしんを とって（　　）。",
      "options": ["もらいました", "くれました", "あげました", "しました"],
      "answer": "もらいました",
      "vn": "Tôi ĐƯỢC anh Kimura chụp ảnh cho.",
      "explanation": "Chủ ngữ là TÔI, nhận hành động từ người khác -> Vて もらいます."
    },
    {
      "question": "きむらさんが しゃしんを とって（　　）。",
      "options": ["くれました", "もらいました", "あげました", "いました"],
      "answer": "くれました",
      "vn": "Anh Kimura đã chụp ảnh CHO TÔI.",
      "explanation": "Chủ ngữ là người khác (Kimura), làm việc gì đó CHO TÔI -> Vて くれます."
    },
    {
      "question": "たろうくんは わたしに あめを（　　）。",
      "options": ["くれました", "あげました", "もらいました", "しました"],
      "answer": "くれました",
      "vn": "Bé Taro đã cho tôi kẹo.",
      "explanation": "Hành động cho TÔI đồ vật -> dùng くれます (không dùng あげます)."
    },
    {
      "question": "わたしは サントスさんに えきへの みちを おしえて（　　）。",
      "options": ["あげました", "もらいました", "くれました", "いきました"],
      "answer": "あげました",
      "vn": "Tôi đã chỉ đường ra ga cho anh Santos.",
      "explanation": "Tôi làm việc tốt cho người khác -> Vて あげます."
    },
    {
      "question": "（　　）は ワンさんに ちゅうごくごを おしえて もらいました。",
      "options": ["わたし", "ワンさん", "たなかさん", "やまださん"],
      "answer": "わたし",
      "vn": "TÔI được anh Wang dạy tiếng Trung cho.",
      "explanation": "Động từ là もらいます (Được nhận) thì chủ ngữ luôn là TÔI (わたしは)."
    },
    {
      "question": "ワンさん（　　）ちゅうごくごを おしえて くれました。",
      "options": ["が", "に", "を", "へ"],
      "answer": "が",
      "vn": "Anh Wang ĐÃ dạy tiếng Trung cho tôi.",
      "explanation": "Với くれます, người thực hiện hành động làm chủ ngữ, dùng trợ từ が hoặc は."
    },
    {
      "question": "ともだちが とうきょうを あんないして（　　）。",
      "options": ["くれました", "もらいました", "あげました", "きました"],
      "answer": "くれました",
      "vn": "Bạn tôi đã dẫn tôi đi tham quan Tokyo.",
      "explanation": "Bạn bè làm giúp việc gì đó cho TÔI -> Vて くれます."
    },
    {
      "question": "わたしは せんせいに ほんを（　　）。",
      "options": ["もらいました", "くれました", "あげました", "てつだいました"],
      "answer": "もらいました",
      "vn": "Tôi đã nhận được sách từ giáo viên.",
      "explanation": "Tôi nhận đồ vật từ người khác -> もらいます."
    },
    {
      "question": "わたしは おばあさんの にもつを もって（　　）。",
      "options": ["あげました", "くれました", "もらいました", "いきました"],
      "answer": "あげました",
      "vn": "Tôi đã mang hành lý giúp bà lão.",
      "explanation": "Dù không nên dùng với cấp trên, nhưng ở đây có thể hiểu là tự nhủ với bản thân: Tôi đã mang giúp bà."
    },
    {
      "question": "あめが ふっています。たなかさんが かさを かして（　　）。",
      "options": ["くれました", "もらいました", "あげました", "きました"],
      "answer": "くれました",
      "vn": "Trời đang mưa. Anh Tanaka đã cho tôi mượn ô.",
      "explanation": "Anh Tanaka thực hiện hành động (cho mượn) hướng về phía tôi -> Vて くれます."
    },
    {
      "question": "わたしは カリナさんに（　　）を かって あげました。",
      "options": ["ケーキ", "びょういん", "えき", "みち"],
      "answer": "ケーキ",
      "vn": "Tôi đã mua bánh kem cho Karina.",
      "explanation": "Mua thì phải mua vật phẩm (ケーキ). Tương tự: Vて あげます."
    },
    {
      "question": "やまださんは わたしの いもうとに おかしを（　　）。",
      "options": ["くれました", "あげました", "もらいました", "きました"],
      "answer": "くれました",
      "vn": "Anh Yamada đã cho em gái tôi bánh kẹo.",
      "explanation": "Người nhận là gia đình của TÔI -> vẫn dùng くれます."
    },
    {
      "question": "わたしは ともだちに しゅくだいを てつだって（　　）。",
      "options": ["もらいました", "くれました", "あげました", "しました"],
      "answer": "もらいました",
      "vn": "Tôi đã được bạn bè giúp làm bài tập.",
      "explanation": "Tôi là người được hưởng lợi từ hành động của bạn bè -> Vて もらいます."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "くれます・てあげます",
    "titleVn": "❤️ Bộ ba Cho - Nhận",
    "intro": "Tóm tắt Bài 24: Bí quyết phân biệt Ai làm cho ai qua bộ 3 động từ あげます, もらいます và くれます.",
    "lines": [
      {
        "kanji": "私は友達に手伝ってあげました。",
        "jp": "わたしは ともだちに てつだって あげました。",
        "romaji": "Watashi wa tomodachi ni tetsudatte agemashita.",
        "vn": "Tôi ĐÃ LÀM GIÚP cho bạn bè của tôi.",
        "note": "Tôi chủ động giúp -> てあげます"
      },
      {
        "kanji": "私は友達に手伝ってもらいました。",
        "jp": "わたしは ともだちに てつだって もらいました。",
        "romaji": "Watashi wa tomodachi ni tetsudatte moraimashita.",
        "vn": "Tôi ĐƯỢC bạn bè tới giúp một tay.",
        "note": "Tôi nhận sự giúp đỡ -> てもらいます"
      },
      {
        "kanji": "友達が私に手伝ってくれました。",
        "jp": "ともだちが わたしに てつだって くれました。",
        "romaji": "Tomodachi ga watashi ni tetsudatte kuremashita.",
        "vn": "Bạn bè tự nguyện ĐÃ LÀM GIÚP tôi.",
        "note": "Bạn làm giúp tôi -> てくれます"
      },
      {
        "kanji": "くれるは「私に」忘れないでね。",
        "jp": "くれるは「わたしに」わすれないでね。",
        "romaji": "Kureru wa 'watashi ni' wasurenaide ne.",
        "vn": "Nhớ nhé: Kureru luôn hướng về TÔI.",
        "note": "くれます luôn đi với わたしに"
      }
    ]
  }
};

export default lesson;
