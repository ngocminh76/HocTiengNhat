import { ReadingPassage } from '../types';

// Bộ 1 = Kanji 1-5 (一二三四五) + ngữ pháp 〜てください
// Bộ 2 = Kanji 6-10 (六七八九十) + ngữ pháp 〜ています

export const READING_N5: ReadingPassage[] = [
  // ─── Bộ 1 + 2 ───
  {
    id: 1,
    batchIds: [1, 2],
    title: "Buổi học tiếng Nhật",
    lines: [
      { 
        jp: "教室に学生が五人います。", 
        romaji: "Kyoushitsu ni gakusei ga gonin imasu.", 
        vn: "Trong lớp học có năm học sinh.",
        segments: [
          { jp: "教室に", vn: "Ở phòng học" },
          { jp: "学生が", vn: "học sinh thì" },
          { jp: "五人", vn: "5 người" },
          { jp: "います。", vn: "có." }
        ]
      },
      { 
        jp: "先生は「この漢字を読んでください」と言いました。", 
        romaji: "Sensei wa 'kono kanji o yonde kudasai' to iimashita.", 
        vn: "Thầy giáo nói: 'Xin hãy đọc chữ Kanji này'.",
        segments: [
          { jp: "先生は", vn: "Thầy giáo thì" },
          { jp: "「この漢字を", vn: "「Chữ Kanji này" },
          { jp: "読んでください」と", vn: "xin hãy đọc」" },
          { jp: "言いました。", vn: "đã nói." }
        ]
      },
      { 
        jp: "一人の学生が「六」を「ろく」と読んでいます。", 
        romaji: "Hitori no gakusei ga 'roku' to yonde imasu.", 
        vn: "Một học sinh đang đọc chữ '六' là 'roku'.",
        segments: [
          { jp: "一人の学生が", vn: "1 học sinh" },
          { jp: "「六」を「ろく」と", vn: "chữ 六 thành 'roku'" },
          { jp: "読んでいます。", vn: "đang đọc." }
        ]
      },
      { 
        jp: "三人はまだ書いています。", 
        romaji: "Sannin wa mada kaite imasu.", 
        vn: "Ba người vẫn đang viết.",
        segments: [
          { jp: "三人は", vn: "Ba người thì" },
          { jp: "まだ", vn: "vẫn (chưa xong)" },
          { jp: "書いています。", vn: "đang viết." }
        ]
      },
    ],
    questions: [
      { question: "Trong lớp có bao nhiêu học sinh?", options: ["三人 (3 người)", "四人 (4 người)", "五人 (5 người)", "七人 (7 người)"], correctIndex: 2 },
      { question: "Thầy giáo yêu cầu học sinh làm gì?", options: ["Viết tên", "Đọc chữ Kanji", "Nghe nhạc", "Đứng lên"], correctIndex: 1 },
      { question: "Mấy người vẫn đang viết?", options: ["一人 (1 người)", "二人 (2 người)", "三人 (3 người)", "五人 (5 người)"], correctIndex: 2 },
    ],
    grammarUsed: ["〜てください", "〜ています"],
    vocab: [
      { word: "教室", reading: "きょうしつ (kyoushitsu)", meaning: "phòng học" },
      { word: "学生", reading: "がくせい (gakusei)", meaning: "học sinh" },
      { word: "五人", reading: "ごにん (gonin)", meaning: "năm người" },
      { word: "先生", reading: "せんせい (sensei)", meaning: "thầy/cô giáo" },
      { word: "漢字", reading: "かんじ (kanji)", meaning: "chữ Hán" },
      { word: "一人", reading: "ひとり (hitori)", meaning: "một người" },
      { word: "六", reading: "ろく (roku)", meaning: "sáu" },
      { word: "三人", reading: "さんにん (sannin)", meaning: "ba người" },
      { word: "書いて", reading: "かいて (kaite)", meaning: "viết (te-form)" },
      { word: "読んで", reading: "よんで (yonde)", meaning: "đọc (te-form)" },
    ]
  },
  {
    id: 2,
    batchIds: [1, 2],
    title: "Phòng làm việc",
    lines: [
      { 
        jp: "事務所に人が八人います。", 
        romaji: "Jimusho ni hito ga hachinin imasu.", 
        vn: "Trong văn phòng có tám người.",
        segments: [
          { jp: "事務所に", vn: "Ở văn phòng" },
          { jp: "人が", vn: "người thì" },
          { jp: "八人", vn: "8 người" },
          { jp: "います。", vn: "có." }
        ]
      },
      { 
        jp: "四人は電話をしています。", 
        romaji: "Yonin wa denwa o shite imasu.", 
        vn: "Bốn người đang gọi điện thoại.",
        segments: [
          { jp: "四人は", vn: "Bốn người thì" },
          { jp: "電話を", vn: "điện thoại" },
          { jp: "しています。", vn: "đang làm (gọi)." }
        ]
      },
      { 
        jp: "二人はコーヒーを飲んでいます。", 
        romaji: "Futari wa koohii o nonde imasu.", 
        vn: "Hai người đang uống cà phê.",
        segments: [
          { jp: "二人は", vn: "Hai người thì" },
          { jp: "コーヒーを", vn: "cà phê" },
          { jp: "飲んでいます。", vn: "đang uống." }
        ]
      },
      { 
        jp: "課長は「この書類を読んでください」と言いました。", 
        romaji: "Kachou wa 'kono shorui o yonde kudasai' to iimashita.", 
        vn: "Trưởng phòng nói: 'Xin hãy đọc tài liệu này'.",
        segments: [
          { jp: "課長は", vn: "Trưởng phòng thì" },
          { jp: "「この書類を", vn: "「Tài liệu này" },
          { jp: "読んでください」と", vn: "xin hãy đọc」" },
          { jp: "言いました。", vn: "đã nói." }
        ]
      },
      { 
        jp: "九時に会議が始まります。", 
        romaji: "Kuji ni kaigi ga hajimarimasu.", 
        vn: "Cuộc họp bắt đầu lúc 9 giờ.",
        segments: [
          { jp: "九時に", vn: "Vào lúc 9 giờ" },
          { jp: "会議が", vn: "cuộc họp thì" },
          { jp: "始まります。", vn: "bắt đầu." }
        ]
      },
    ],
    questions: [
      { question: "Trong văn phòng có bao nhiêu người?", options: ["六人 (6 người)", "七人 (7 người)", "八人 (8 người)", "十人 (10 người)"], correctIndex: 2 },
      { question: "Hai người đang làm gì?", options: ["Gọi điện thoại", "Uống cà phê", "Đọc tài liệu", "Viết báo cáo"], correctIndex: 1 },
      { question: "Cuộc họp bắt đầu lúc mấy giờ?", options: ["八時 (8 giờ)", "九時 (9 giờ)", "十時 (10 giờ)", "七時 (7 giờ)"], correctIndex: 1 },
    ],
    grammarUsed: ["〜てください", "〜ています"],
    vocab: [
      { word: "事務所", reading: "じむしょ (jimusho)", meaning: "văn phòng" },
      { word: "八人", reading: "はちにん (hachinin)", meaning: "tám người" },
      { word: "四人", reading: "よにん (yonin)", meaning: "bốn người" },
      { word: "電話", reading: "でんわ (denwa)", meaning: "điện thoại" },
      { word: "二人", reading: "ふたり (futari)", meaning: "hai người" },
      { word: "飲んで", reading: "のんで (nonde)", meaning: "uống (te-form)" },
      { word: "課長", reading: "かちょう (kachou)", meaning: "trưởng phòng" },
      { word: "書類", reading: "しょるい (shorui)", meaning: "tài liệu" },
      { word: "九時", reading: "くじ (kuji)", meaning: "9 giờ" },
      { word: "会議", reading: "かいぎ (kaigi)", meaning: "cuộc họp" },
    ]
  },
  {
    id: 3,
    batchIds: [1, 2],
    title: "Giờ ăn trưa",
    lines: [
      { 
        jp: "十二時です。昼ご飯の時間です。", 
        romaji: "Juuniji desu. Hirugohan no jikan desu.", 
        vn: "12 giờ rồi. Đến giờ ăn trưa.",
        segments: [
          { jp: "十二時です。", vn: "12 giờ rồi." },
          { jp: "昼ご飯の", vn: "của cơm trưa" },
          { jp: "時間です。", vn: "là thời gian." }
        ]
      },
      { 
        jp: "田中さんは今、ご飯を食べています。", 
        romaji: "Tanaka-san wa ima, gohan o tabete imasu.", 
        vn: "Anh Tanaka bây giờ đang ăn cơm.",
        segments: [
          { jp: "田中さんは", vn: "Anh Tanaka thì" },
          { jp: "今、", vn: "Bây giờ," },
          { jp: "ご飯を", vn: "cơm" },
          { jp: "食べています。", vn: "đang ăn." }
        ]
      },
      { 
        jp: "「少し待ってください」と言いました。", 
        romaji: "'Sukoshi matte kudasai' to iimashita.", 
        vn: "'Xin hãy đợi một chút' — anh ấy nói.",
        segments: [
          { jp: "「少し", vn: "「Một chút" },
          { jp: "待ってください」と", vn: "xin hãy đợi」" },
          { jp: "言いました。", vn: "anh ấy đã nói." }
        ]
      },
      { 
        jp: "三人の友達が七階で待っています。", 
        romaji: "Sannin no tomodachi ga nanakai de matte imasu.", 
        vn: "Ba người bạn đang đợi ở tầng bảy.",
        segments: [
          { jp: "三人の友達が", vn: "3 người bạn" },
          { jp: "七階で", vn: "ở tầng 7" },
          { jp: "待っています。", vn: "đang đợi." }
        ]
      },
    ],
    questions: [
      { question: "Bây giờ là mấy giờ?", options: ["十時 (10 giờ)", "十一時 (11 giờ)", "十二時 (12 giờ)", "一時 (1 giờ)"], correctIndex: 2 },
      { question: "Tanaka đang làm gì?", options: ["Đang đợi", "Đang ăn cơm", "Đang gọi điện", "Đang viết"], correctIndex: 1 },
      { question: "Bạn bè đang đợi ở đâu?", options: ["Tầng 5", "Tầng 6", "Tầng 7", "Tầng 8"], correctIndex: 2 },
    ],
    grammarUsed: ["〜てください", "〜ています"],
    vocab: [
      { word: "十二時", reading: "じゅうにじ (juuniji)", meaning: "12 giờ" },
      { word: "昼ご飯", reading: "ひるごはん (hirugohan)", meaning: "cơm trưa" },
      { word: "時間", reading: "じかん (jikan)", meaning: "thời gian" },
      { word: "今", reading: "いま (ima)", meaning: "bây giờ" },
      { word: "食べて", reading: "たべて (tabete)", meaning: "ăn (te-form)" },
      { word: "少し", reading: "すこし (sukoshi)", meaning: "một chút" },
      { word: "待って", reading: "まって (matte)", meaning: "đợi (te-form)" },
      { word: "友達", reading: "ともだち (tomodachi)", meaning: "bạn bè" },
      { word: "七階", reading: "ななかい (nanakai)", meaning: "tầng 7" },
    ]
  },
  // ─── Bộ 3 + 4 ───
  {
    id: 4,
    batchIds: [3, 4],
    title: "Kế hoạch cuối tuần",
    lines: [
      { 
        jp: "週末に何をしたいですか。", 
        romaji: "Shuumatsu ni nani o shitai desu ka.", 
        vn: "Cuối tuần bạn muốn làm gì?",
        segments: [
          { jp: "週末に", vn: "Vào cuối tuần" },
          { jp: "何を", vn: "cái gì" },
          { jp: "したいですか。", vn: "bạn muốn làm?" }
        ]
      },
      { 
        jp: "私は新しい映画を見たいです。", 
        romaji: "Watashi wa atarashii eiga o mitai desu.", 
        vn: "Tôi muốn xem phim mới.",
        segments: [
          { jp: "私は", vn: "Tôi thì" },
          { jp: "新しい映画を通", vn: "phim mới" },
          { jp: "見たいです。", vn: "muốn xem." }
        ]
      },
      { 
        jp: "一緒に見に行きましょう。", 
        romaji: "Issho ni mi ni ikimashou.", 
        vn: "Cùng đi xem nhé.",
        segments: [
          { jp: "一緒に", vn: "Cùng nhau" },
          { jp: "見に", vn: "để xem" },
          { jp: "行きましょう。", vn: "chúng ta đi nhé." }
        ]
      },
      { 
        jp: "午後三時に駅で会いましょう。", 
        romaji: "Gogo sanji ni eki de aimashou.", 
        vn: "Gặp nhau ở ga lúc 3 giờ chiều nhé.",
        segments: [
          { jp: "午後三時に", vn: "Vào 3 giờ chiều" },
          { jp: "駅で", vn: "ở nhà ga" },
          { jp: "会いましょう。", vn: "chúng ta gặp nhé." }
        ]
      },
    ],
    questions: [
      { question: "Người nói muốn làm gì cuối tuần?", options: ["Đi mua sắm", "Xem phim mới", "Học tiếng Nhật", "Đi ăn"], correctIndex: 1 },
      { question: "Họ hẹn gặp ở đâu?", options: ["Ở nhà", "Ở rạp phim", "Ở ga tàu", "Ở trường"], correctIndex: 2 },
      { question: "Họ hẹn gặp lúc mấy giờ?", options: ["1 giờ chiều", "2 giờ chiều", "3 giờ chiều", "4 giờ chiều"], correctIndex: 2 },
    ],
    grammarUsed: ["〜たいです", "〜ましょう"],
    vocab: [
      { word: "週末", reading: "しゅうまつ (shuumatsu)", meaning: "cuối tuần" },
      { word: "新しい", reading: "あたらしい (atarashii)", meaning: "mới" },
      { word: "映画", reading: "えいが (eiga)", meaning: "phim ảnh" },
      { word: "見たい", reading: "みたい (mitai)", meaning: "muốn xem" },
      { word: "一緒に", reading: "いっしょに (issho ni)", meaning: "cùng nhau" },
      { word: "午後", reading: "ごご (gogo)", meaning: "buổi chiều" },
      { word: "三時", reading: "さんじ (sanji)", meaning: "3 giờ" },
      { word: "駅", reading: "えき (eki)", meaning: "ga tàu" },
      { word: "会い", reading: "あい (ai)", meaning: "gặp" },
    ]
  },
  {
    id: 5,
    batchIds: [3, 4],
    title: "Đi du lịch",
    lines: [
      { 
        jp: "来月、日本へ行きたいです。", 
        romaji: "Raigetsu, Nihon e ikitai desu.", 
        vn: "Tháng sau tôi muốn đi Nhật.",
        segments: [
          { jp: "来月、", vn: "Tháng sau," },
          { jp: "日本へ", vn: "đến Nhật" },
          { jp: "行きたいです。", vn: "tôi muốn đi." }
        ]
      },
      { 
        jp: "富士山を見たいです。", 
        romaji: "Fujisan o mitai desu.", 
        vn: "Tôi muốn xem núi Phú Sĩ.",
        segments: [
          { jp: "富士山を", vn: "núi Phú Sĩ" },
          { jp: "見たいです。", vn: "tôi muốn xem." }
        ]
      },
      { 
        jp: "寿司も食べたいです。", 
        romaji: "Sushi mo tabetai desu.", 
        vn: "Tôi cũng muốn ăn sushi.",
        segments: [
          { jp: "寿司も", vn: "cả sushi cũng" },
          { jp: "食べたいです。", vn: "tôi muốn ăn." }
        ]
      },
      { 
        jp: "友達が「一緒に行きましょう」と言いました。", 
        romaji: "Tomodachi ga 'issho ni ikimashou' to iimashita.", 
        vn: "Bạn tôi nói: 'Cùng đi nhé'.",
        segments: [
          { jp: "友達が", vn: "Bạn tôi thì" },
          { jp: "「一緒に", vn: "「Cùng nhau" },
          { jp: "行きましょう」と", vn: "chúng ta đi nhé」" },
          { jp: "言いました。", vn: "đã nói." }
        ]
      },
      { 
        jp: "荷物を持ちましょうか。", 
        romaji: "Nimotsu o mochimashou ka.", 
        vn: "Để tôi xách hành lý giúp nhé?",
        segments: [
          { jp: "荷物を", vn: "hành lý" },
          { jp: "持ちましょうか。", vn: "tôi xách giúp nhé?" }
        ]
      },
    ],
    questions: [
      { question: "Người nói muốn đi đâu tháng sau?", options: ["Hàn Quốc", "Trung Quốc", "Nhật Bản", "Thái Lan"], correctIndex: 2 },
      { question: "Người nói muốn ăn gì?", options: ["Ramen", "Sushi", "Tempura", "Udon"], correctIndex: 1 },
      { question: "Bạn của người nói đề nghị gì?", options: ["Ở nhà", "Cùng đi", "Mua vé", "Xách giúp hành lý"], correctIndex: 1 },
    ],
    grammarUsed: ["〜たいです", "〜ましょう / 〜ましょうか"],
    vocab: [
      { word: "来月", reading: "らいげつ (raigetsu)", meaning: "tháng sau" },
      { word: "日本", reading: "にほん (nihon)", meaning: "Nhật Bản" },
      { word: "行きたい", reading: "いきたい (ikitai)", meaning: "muốn đi" },
      { word: "富士山", reading: "ふじさん (fujisan)", meaning: "núi Phú Sĩ" },
      { word: "寿司", reading: "すし (sushi)", meaning: "sushi" },
      { word: "食べたい", reading: "たべたい (tabetai)", meaning: "muốn ăn" },
      { word: "友達", reading: "ともだち (tomodachi)", meaning: "bạn bè" },
      { word: "荷物", reading: "にもつ (nimotsu)", meaning: "hành lý" },
      { word: "持ち", reading: "もち (mochi)", meaning: "cầm, xách" },
    ]
  },
];
