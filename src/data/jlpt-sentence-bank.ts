export interface SentenceBankItem {
  id: string;
  lessonId: number;
  text: string; // Vd: "これは 英語の {word} です。"
  targetWord: string; // Kanji (nếu có), vd: "辞書"
  targetReading: string; // Hiragana, vd: "じしょ"
  romaji: string;
  translation: string;
  bunmyakuDistractors?: [string, string, string];
}

export const JLPT_SENTENCE_BANK: SentenceBankItem[] = [
  // LESSON 1
  {
    id: "SB1_01",
    lessonId: 1,
    text: "はじめまして、{word}は ミラーです。",
    targetWord: "私",
    targetReading: "わたし",
    romaji: "Hajimemashite, {word} wa Miraa desu.",
    translation: "Xin chào, tôi là Miller.",
    bunmyakuDistractors: ["あなた","本","かぎ"]
  },
  {
    id: "SB1_02",
    lessonId: 1,
    text: "あの{word}は だれですか。",
    targetWord: "人",
    targetReading: "ひと",
    romaji: "Ano {word} wa dare desu ka.",
    translation: "Người kia là ai?",
    bunmyakuDistractors: ["これ","本","かさ"]
  },
  {
    id: "SB1_03",
    lessonId: 1,
    text: "さくら{word}の がくせいです。",
    targetWord: "大学",
    targetReading: "だいがく",
    romaji: "Sakura {word} no gakusei desu.",
    translation: "Là sinh viên của đại học Sakura.",
    bunmyakuDistractors: ["本","かばん","えんぴつ"]
  },
  {
    id: "SB1_04",
    lessonId: 1,
    text: "IMCの {word}です。",
    targetWord: "社員",
    targetReading: "しゃいん",
    romaji: "IMC no {word} desu.",
    translation: "Là nhân viên của công ty IMC.",
    bunmyakuDistractors: ["ノート","かさ","つくえ"]
  },
  {
    id: "SB1_05",
    lessonId: 1,
    text: "シュミットさんは {word}です。",
    targetWord: "エンジニア",
    targetReading: "エンジニア",
    romaji: "Shumitto-san wa {word} desu.",
    translation: "Anh Schmidt là kỹ sư.",
    bunmyakuDistractors: ["これ","なん","本"]
  },
  {
    id: "SB1_06",
    lessonId: 1,
    text: "ワットさんは さくら大学の {word}です。",
    targetWord: "先生",
    targetReading: "せんせい",
    romaji: "Watto-san wa Sakura daigaku no {word} desu.",
    translation: "Thầy Watt là giáo viên của đại học Sakura.",
    bunmyakuDistractors: ["これ","かぎ","かさ"]
  },
  {
    id: "SB1_07",
    lessonId: 1,
    text: "イーさんは こうべびょういんの {word}です。",
    targetWord: "医者",
    targetReading: "いしゃ",
    romaji: "Ii-san wa Koube byouin no {word} desu.",
    translation: "Cô Lee là bác sĩ của bệnh viện Kobe.",
    bunmyakuDistractors: ["これ","ノート","つくえ"]
  },
  {
    id: "SB1_08",
    lessonId: 1,
    text: "タワポンさんは {word}ですか。",
    targetWord: "学生",
    targetReading: "がくせい",
    romaji: "Tawapon-san wa {word} desu ka.",
    translation: "Anh Thawapon có phải là sinh viên không?",
    bunmyakuDistractors: ["本","かぎ","えんぴつ"]
  },
  {
    id: "SB1_09",
    lessonId: 1,
    text: "テレサちゃんは 9{word}です。",
    targetWord: "さい",
    targetReading: "さい",
    romaji: "Teresa-chan wa 9 {word} desu.",
    translation: "Bé Teresa 9 tuổi.",
    bunmyakuDistractors: ["なん","これ","本"]
  },
  {
    id: "SB1_10",
    lessonId: 1,
    text: "あの方は {word}ですか。",
    targetWord: "どなた",
    targetReading: "どなた",
    romaji: "Ano kata wa {word} desu ka.",
    translation: "Vị kia là ai vậy? (Kính ngữ)",
    bunmyakuDistractors: ["わたし","あなた","それ"]
  },

  // LESSON 2
  {
    id: "SB2_01",
    lessonId: 2,
    text: "これは えいごの {word} です。",
    targetWord: "辞書",
    targetReading: "じしょ",
    romaji: "Kore wa eigo no {word} desu.",
    translation: "Đây là cuốn từ điển tiếng Anh.",
    bunmyakuDistractors: ["なん","だれ","あの"]
  },
  {
    id: "SB2_02",
    lessonId: 2,
    text: "{word} カメラは わたしのです。",
    targetWord: "この",
    targetReading: "この",
    romaji: "{word} kamera wa watashi no desu.",
    translation: "Cái máy ảnh này là của tôi.",
    bunmyakuDistractors: ["これ","それ","あれ"]
  },
  {
    id: "SB2_03",
    lessonId: 2,
    text: "それは じどうしゃの {word} ですか。",
    targetWord: "雑誌",
    targetReading: "ざっし",
    romaji: "Sore wa jidousha no {word} desu ka.",
    translation: "Đó có phải là tạp chí về ô tô không?",
    bunmyakuDistractors: ["だれ","わたし","あの"]
  },
  {
    id: "SB2_04",
    lessonId: 2,
    text: "{word} は だれのかばんですか。",
    targetWord: "あれ",
    targetReading: "あれ",
    romaji: "{word} wa dare no kaban desu ka.",
    translation: "Kia là cặp của ai?",
    bunmyakuDistractors: ["あの","その","どの"]
  },
  {
    id: "SB2_05",
    lessonId: 2,
    text: "この {word} は スイスのです。",
    targetWord: "時計",
    targetReading: "とけい",
    romaji: "Kono {word} wa Suisu no desu.",
    translation: "Cái đồng hồ này là của Thụy Sĩ.",
    bunmyakuDistractors: ["これ","なん","だれ"]
  },
  {
    id: "SB2_06",
    lessonId: 2,
    text: "あした 雨が ふりますから、{word} を 買います。",
    targetWord: "傘",
    targetReading: "かさ",
    romaji: "Ashita ame ga furimasu kara, {word} o kaimasu.",
    translation: "Ngày mai trời mưa nên tôi sẽ mua ô.",
    bunmyakuDistractors: ["わたし","あなた","だれ"]
  },
  {
    id: "SB2_07",
    lessonId: 2,
    text: "机の上に {word} と えんぴつが あります。",
    targetWord: "ノート",
    targetReading: "ノート",
    romaji: "Tsukue no ue ni {word} to enpitsu ga arimasu.",
    translation: "Trên bàn có vở và bút chì.",
    bunmyakuDistractors: ["これ","それ","だれ"]
  },
  {
    id: "SB2_08",
    lessonId: 2,
    text: "これは わたしの {word} です。どうぞ。",
    targetWord: "名刺",
    targetReading: "めいし",
    romaji: "Kore wa watashi no {word} desu. Douzo.",
    translation: "Đây là danh thiếp của tôi. Xin mời.",
    bunmyakuDistractors: ["これ","それ","あれ"]
  },
  {
    id: "SB2_09",
    lessonId: 2,
    text: "その {word} は どこで 買いましたか。",
    targetWord: "かばん",
    targetReading: "かばん",
    romaji: "Sono {word} wa doko de kaimashita ka.",
    translation: "Cái cặp đó bạn mua ở đâu vậy?",
    bunmyakuDistractors: ["わたし","あなた","だれ"]
  },
  {
    id: "SB2_10",
    lessonId: 2,
    text: "へやに {word} と いすが あります。",
    targetWord: "机",
    targetReading: "つくえ",
    romaji: "Heya ni {word} to isu ga arimasu.",
    translation: "Trong phòng có cái bàn và cái ghế.",
    bunmyakuDistractors: ["これ","それ","だれ"]
  }
];
