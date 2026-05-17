import { Reading } from '../lessons/types';

export const readings: Reading[] = [
    {
      "title": "これはなんですか",
      "titleVn": "① Cái này là cái gì?",
      "lines": [
        {
          "kanji": "A：これは何ですか。",
          "jp": "A：これは なん ですか。",
          "romaji": "A: Kore wa nan desu ka.",
          "vn": "A: Cái này là cái gì?"
        },
        {
          "kanji": "B：それは辞書です。",
          "jp": "B：それは じしょ です。",
          "romaji": "B: Sore wa jisho desu.",
          "vn": "B: Cái đó là từ điển."
        },
        {
          "kanji": "A：そうですか。誰の辞書ですか。",
          "jp": "A：そうですか。だれの じしょ ですか。",
          "romaji": "A: Sou desu ka. Dare no jisho desu ka.",
          "vn": "A: Vậy à. Từ điển của ai vậy?"
        },
        {
          "kanji": "B：ミラーさんの辞書です。",
          "jp": "B：ミラーさんの じしょ です。",
          "romaji": "B: Miraa-san no jisho desu.",
          "vn": "B: Từ điển của anh Miller."
        }
      ],
      "questions": [
        {
          "question": "これはなんですか？ (Cái này là gì?)",
          "options": [
            "ほん (Sách)",
            "じしょ (Từ điển)",
            "ノート (Vở)",
            "ざっし (Tạp chí)"
          ],
          "answer": "じしょ (Từ điển)"
        },
        {
          "question": "じしょはだれのですか？ (Từ điển của ai?)",
          "options": [
            "マリアさん",
            "ミラーさん",
            "キムさん",
            "テレサさん"
          ],
          "answer": "ミラーさん"
        },
        {
          "question": "BさんはAさんのことばに「___」と言いました。(B trả lời A bằng từ)",
          "options": [
            "ちがいます",
            "そうですか",
            "そうです",
            "はじめまして"
          ],
          "answer": "そうですか"
        }
      ]
    },
    {
      "title": "このかばんはだれのですか",
      "titleVn": "② Cái túi này là của ai?",
      "lines": [
        {
          "kanji": "A：失礼ですが、そのかばんはあなたのですか。",
          "jp": "A：しつれいですが、そのかばんは あなたの ですか。",
          "romaji": "A: Shitsurei desu ga, sono kaban wa anata no desu ka.",
          "vn": "A: Xin lỗi, cái túi đó có phải của bạn không?"
        },
        {
          "kanji": "B：いいえ、私のじゃないです。",
          "jp": "B：いいえ、わたしの じゃないです。",
          "romaji": "B: Iie, watashi no ja nai desu.",
          "vn": "B: Không, không phải của tôi."
        },
        {
          "kanji": "A：そうですか。あのかばんはミラーさんのですね。",
          "jp": "A：そうですか。あのかばんは ミラーさんの ですね。",
          "romaji": "A: Sou desu ka. Ano kaban wa Miraa-san no desu ne.",
          "vn": "A: Vậy à. Cái túi kia là của anh Miller nhỉ."
        },
        {
          "kanji": "B：そうです。ミラーさんのです。",
          "jp": "B：そうです。ミラーさんの です。",
          "romaji": "B: Sou desu. Miraa-san no desu.",
          "vn": "B: Đúng vậy. Là của anh Miller."
        }
      ],
      "questions": [
        {
          "question": "そのかばんはBさんのですか？",
          "options": [
            "はい、そうです",
            "いいえ、ちがいます",
            "はい、ミラーさんのです",
            "わかりません"
          ],
          "answer": "いいえ、ちがいます"
        },
        {
          "question": "あのかばんはだれのですか？",
          "options": [
            "Aさん",
            "Bさん",
            "ミラーさん",
            "キムさん"
          ],
          "answer": "ミラーさん"
        },
        {
          "question": "Bさんは「___ のじゃないです」と言いました。",
          "options": [
            "あなた",
            "わたし",
            "ミラーさん",
            "キムさん"
          ],
          "answer": "わたし"
        }
      ]
    },
    {
      "title": "これはにほんのカメラです",
      "titleVn": "③ Đây là máy ảnh Nhật",
      "lines": [
        {
          "kanji": "A：このカメラはどこのですか。",
          "jp": "A：この カメラは どこの ですか。",
          "romaji": "A: Kono kamera wa doko no desu ka.",
          "vn": "A: Máy ảnh này là của nước nào?"
        },
        {
          "kanji": "B：日本のカメラです。",
          "jp": "B：にほんの カメラ です。",
          "romaji": "B: Nihon no kamera desu.",
          "vn": "B: Máy ảnh Nhật Bản."
        },
        {
          "kanji": "A：その時計も日本のですか。",
          "jp": "A：その とけいも にほんの ですか。",
          "romaji": "A: Sono tokei mo Nihon no desu ka.",
          "vn": "A: Đồng hồ đó cũng là của Nhật không?"
        },
        {
          "kanji": "B：いいえ、これはスイスの時計です。",
          "jp": "B：いいえ、これは スイスの とけい です。",
          "romaji": "B: Iie, kore wa Suisu no tokei desu.",
          "vn": "B: Không, cái này là đồng hồ Thụy Sĩ."
        }
      ],
      "questions": [
        {
          "question": "カメラはどこのですか？",
          "options": [
            "ちゅうごく",
            "アメリカ",
            "にほん",
            "イギリス"
          ],
          "answer": "にほん"
        },
        {
          "question": "とけいはどこのですか？",
          "options": [
            "にほん",
            "アメリカ",
            "スイス",
            "ちゅうごく"
          ],
          "answer": "スイス"
        },
        {
          "question": "とけいとカメラはどちらもにほんのですか？",
          "options": [
            "はい、そうです",
            "いいえ、ちがいます",
            "わかりません",
            "カメラだけです"
          ],
          "answer": "いいえ、ちがいます"
        }
      ]
    },
{
    "title": "かいものリスト",
    "titleVn": "④ Danh sách mua sắm",
    "lines": [
      {
        "kanji": "ノート ･･･ 100円",
        "jp": "ノート ･･･ ひゃくえん",
        "romaji": "Nooto ... hyaku en",
        "vn": "Vở ... 100 Yên"
      },
      {
        "kanji": "ボールペン ･･･ 150円",
        "jp": "ボールペン ･･･ ひゃくごじゅうえん",
        "romaji": "Boorupen ... hyaku go-juu en",
        "vn": "Bút bi ... 150 Yên"
      },
      {
        "kanji": "かばん ･･･ 3,000円",
        "jp": "かばん ･･･ さんぜんえん",
        "romaji": "Kaban ... san-zen en",
        "vn": "Cặp xách ... 3,000 Yên"
      },
      {
        "kanji": "時計 ･･･ 5,000円",
        "jp": "とけい ･･･ ごせんえん",
        "romaji": "Tokei ... go-sen en",
        "vn": "Đồng hồ ... 5,000 Yên"
      }
    ],
    "questions": [
      {
        "question": "ノートは いくらですか？ (Vở giá bao nhiêu?)",
        "options": [
          "100円",
          "150円",
          "3,000円",
          "5,000円"
        ],
        "answer": "100円"
      },
      {
        "question": "いちばん たかいものは どれですか？ (Món đồ đắt nhất là gì?)",
        "options": [
          "とけい (Đồng hồ)",
          "かばん (Cặp)",
          "ノート (Vở)",
          "ボールペン (Bút bi)"
        ],
        "answer": "とけい (Đồng hồ)"
      }
    ]
  },
  {
    "title": "わたしのへや",
    "titleVn": "⑤ Căn phòng của tôi",
    "lines": [
      {
        "kanji": "これは私の机です。",
        "jp": "これは わたしの つくえです。",
        "romaji": "Kore wa watashi no tsukue desu.",
        "vn": "Đây là cái bàn của tôi."
      },
      {
        "kanji": "机の上に本と辞書があります。",
        "jp": "つくえの うえに ほんと じしょが あります。",
        "romaji": "Tsukue no ue ni hon to jisho ga arimasu.",
        "vn": "Trên bàn có sách và từ điển."
      },
      {
        "kanji": "その辞書は先生のです。",
        "jp": "その じしょは せんせいの です。",
        "romaji": "Sono jisho wa sensei no desu.",
        "vn": "Cuốn từ điển đó là của giáo viên."
      },
      {
        "kanji": "あれは私のカメラです。",
        "jp": "あれは わたしの カメラです。",
        "romaji": "Are wa watashi no kamera desu.",
        "vn": "Kia là máy ảnh của tôi."
      },
      {
        "kanji": "日本のカメラです。",
        "jp": "にほんの カメラです。",
        "romaji": "Nihon no kamera desu.",
        "vn": "Là máy ảnh của Nhật."
      }
    ],
    "questions": [
      {
        "question": "つくえのうえに なにがありますか？ (Trên bàn có gì?)",
        "options": [
          "ほんと じしょ (Sách và từ điển)",
          "カメラと ノート (Máy ảnh và vở)",
          "とけいと ほん (Đồng hồ và sách)",
          "かばんと じしょ (Cặp và từ điển)"
        ],
        "answer": "ほんと じしょ (Sách và từ điển)"
      },
      {
        "question": "だれの じしょですか？ (Từ điển của ai?)",
        "options": [
          "せんせい (Giáo viên)",
          "わたし (Tôi)",
          "ミラーさん (Miller)",
          "がくせい (Sinh viên)"
        ],
        "answer": "せんせい (Giáo viên)"
      },
      {
        "question": "カメラは どこのですか？ (Máy ảnh của nước nào?)",
        "options": [
          "にほん (Nhật Bản)",
          "アメリカ (Mỹ)",
          "ちゅうごく (Trung Quốc)",
          "かんこく (Hàn Quốc)"
        ],
        "answer": "にほん (Nhật Bản)"
      }
    ]
  }
];
