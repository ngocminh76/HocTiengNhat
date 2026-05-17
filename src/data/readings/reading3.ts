import { Reading } from '../lessons/types';

export const readings: Reading[] = [
    {
      "title": "デパートでしりましょう",
      "titleVn": "① Hỏi đường trong trung tâm",
      "lines": [
        {
          "kanji": "A：すみません。食堂はどこですか。",
          "jp": "A：すみません。しょくどうは どこ ですか。",
          "romaji": "A: Sumimasen. Shokudou wa doko desu ka.",
          "vn": "A: Xin lỗi, căng-tin ở đâu vậy?"
        },
        {
          "kanji": "B：食堂は６階です。",
          "jp": "B：しょくどうは ６かい です。",
          "romaji": "B: Shokudou wa 6-kai desu.",
          "vn": "B: Căng-tin ở tầng 6."
        },
        {
          "kanji": "A：エレベーターはどこですか。",
          "jp": "A：エレベーターは どこ ですか。",
          "romaji": "A: Erebeetaa wa doko desu ka.",
          "vn": "A: Thang máy ở đâu ạ?"
        },
        {
          "kanji": "B：あそこです。",
          "jp": "B：あそこ です。",
          "romaji": "B: Asoko desu.",
          "vn": "B: Chỗ kia ạ."
        },
        {
          "kanji": "A：ありがとうございます。",
          "jp": "A：ありがとうございます。",
          "romaji": "A: Arigatou gozaimasu.",
          "vn": "A: Cảm ơn ạ."
        }
      ],
      "questions": [
        {
          "question": "食堂はなんかいですか？",
          "options": [
            "3かい",
            "4かい",
            "5かい",
            "6かい"
          ],
          "answer": "6かい"
        },
        {
          "question": "AさんはBさんに何を聞きましたか？ (A hỏi B điều gì?)",
          "options": [
            "デパートの場所",
            "食堂とエレベーターの場所",
            "スーパーの場所",
            "ぎんこうの場所"
          ],
          "answer": "食堂とエレベーターの場所"
        },
        {
          "question": "エレベーターはどこですか？",
          "options": [
            "ここ",
            "そこ",
            "あそこ",
            "どこか"
          ],
          "answer": "あそこ"
        }
      ]
    },
    {
      "title": "まちのなかで",
      "titleVn": "② Trong thành phố",
      "lines": [
        {
          "kanji": "A：すみません。郵便局はどこですか。",
          "jp": "A：すみません。ゆうびんきょくは どこ ですか。",
          "romaji": "A: Sumimasen. Yuubinkyoku wa doko desu ka.",
          "vn": "A: Xin lỗi, bưu điện ở đâu ạ?"
        },
        {
          "kanji": "B：郵便局ですか。駅のそこです。",
          "jp": "B：ゆうびんきょく ですか。えきの そこ です。",
          "romaji": "B: Yuubinkyoku desu ka. Eki no soko desu.",
          "vn": "B: Bưu điện à. Ở chỗ ga đó."
        },
        {
          "kanji": "A：銀行はどこですか。",
          "jp": "A：ぎんこうは どこ ですか。",
          "romaji": "A: Ginkou wa doko desu ka.",
          "vn": "A: Ngân hàng ở đâu ạ?"
        },
        {
          "kanji": "B：銀行はデパートの前です。",
          "jp": "B：ぎんこうは デパートの まえ です。",
          "romaji": "B: Ginkou wa depaato no mae desu.",
          "vn": "B: Ngân hàng ở trước cửa trung tâm thương mại."
        }
      ],
      "questions": [
        {
          "question": "ゆうびんきょくはどこですか？",
          "options": [
            "デパートのまえ",
            "えきのそこ",
            "ホテルのうしろ",
            "スーパーのひだり"
          ],
          "answer": "えきのそこ"
        },
        {
          "question": "ぎんこうはどこですか？",
          "options": [
            "デパートのまえ",
            "えきのとなり",
            "ゆうびんきょくのよこ",
            "コンビニのうしろ"
          ],
          "answer": "デパートのまえ"
        },
        {
          "question": "Aさんはいくつしつもんしましたか？ (A hỏi bao nhiêu câu?)",
          "options": [
            "1つ",
            "2つ",
            "3つ",
            "4つ"
          ],
          "answer": "2つ"
        }
      ]
    },
    {
      "title": "デパートのうりば",
      "titleVn": "③ Quầy bán hàng trong siêu thị",
      "lines": [
        {
          "kanji": "A：すみません。靴売り場は何階ですか。",
          "jp": "A：すみません。くつうりばは なんかい ですか。",
          "romaji": "A: Sumimasen. Kutsu uriba wa nankai desu ka.",
          "vn": "A: Xin lỗi, quầy giày ở tầng mấy ạ?"
        },
        {
          "kanji": "B：１階です。",
          "jp": "B：１かい です。",
          "romaji": "B: Ikkai desu.",
          "vn": "B: Tầng 1 ạ."
        },
        {
          "kanji": "A：レストランは？",
          "jp": "A：レストランは？",
          "romaji": "A: Resutoran wa?",
          "vn": "A: Còn nhà hàng?"
        },
        {
          "kanji": "B：レストランは８階です。エレベーターはあそこの右です。",
          "jp": "B：レストランは ８かい です。エレベーターは あそこの みぎ です。",
          "romaji": "B: Resutoran wa 8-kai desu. Erebeetaa wa asoko no migi desu.",
          "vn": "B: Nhà hàng ở tầng 8. Thang máy ở bên phải chỗ kia."
        }
      ],
      "questions": [
        {
          "question": "くつうりばはなんかいですか？",
          "options": [
            "１かい",
            "２かい",
            "３かい",
            "４かい"
          ],
          "answer": "１かい"
        },
        {
          "question": "レストランはなんかいですか？",
          "options": [
            "６かい",
            "７かい",
            "８かい",
            "９かい"
          ],
          "answer": "８かい"
        },
        {
          "question": "エレベーターはどこですか？",
          "options": [
            "あそこのみぎ",
            "あそこのひだり",
            "えきのまえ",
            "かいだんのうしろ"
          ],
          "answer": "あそこのみぎ"
        }
      ]
    },
{
    "title": "デパートのあんない",
    "titleVn": "④ Sơ đồ trung tâm thương mại",
    "lines": [
      {
        "kanji": "６階：レストラン",
        "jp": "ろっかい：レストラン",
        "romaji": "Rokkai: Resutoran",
        "vn": "Tầng 6: Nhà hàng"
      },
      {
        "kanji": "５階：パソコン・カメラ",
        "jp": "ごかい：パソコン・カメラ",
        "romaji": "Gokai: Pasokon, Kamera",
        "vn": "Tầng 5: Máy tính, Máy ảnh"
      },
      {
        "kanji": "４階：時計・めがね",
        "jp": "よんかい：とけい・めがね",
        "romaji": "Yonkai: Tokei, Megane",
        "vn": "Tầng 4: Đồng hồ, Mắt kính"
      },
      {
        "kanji": "３階：靴・かばん",
        "jp": "さんがい：くつ・かばん",
        "romaji": "Sangai: Kutsu, Kaban",
        "vn": "Tầng 3: Giày, Cặp xách"
      },
      {
        "kanji": "２階：服",
        "jp": "にかい：ふく",
        "romaji": "Nikai: Fuku",
        "vn": "Tầng 2: Quần áo"
      },
      {
        "kanji": "１階：受付",
        "jp": "いっかい：うけつけ",
        "romaji": "Ikkai: Uketsuke",
        "vn": "Tầng 1: Quầy tiếp tân"
      }
    ],
    "questions": [
      {
        "question": "カメラのうりばは なんがいですか？ (Quầy máy ảnh ở tầng mấy?)",
        "options": [
          "5かい (Tầng 5)",
          "6かい (Tầng 6)",
          "4かい (Tầng 4)",
          "3かい (Tầng 3)"
        ],
        "answer": "5かい (Tầng 5)"
      },
      {
        "question": "3かいは なにの うりばですか？ (Tầng 3 là quầy bán gì?)",
        "options": [
          "くつ・かばん (Giày, cặp)",
          "ふく (Quần áo)",
          "とけい・めがね (Đồng hồ, kính)",
          "パソコン (Máy tính)"
        ],
        "answer": "くつ・かばん (Giày, cặp)"
      }
    ]
  },
  {
    "title": "わたしのくに",
    "titleVn": "⑤ Đất nước của tôi",
    "lines": [
      {
        "kanji": "ここは私の国です。",
        "jp": "ここは わたしの くにです。",
        "romaji": "Koko wa watashi no kuni desu.",
        "vn": "Đây là đất nước của tôi."
      },
      {
        "kanji": "イタリアです。",
        "jp": "イタリアです。",
        "romaji": "Itaria desu.",
        "vn": "Là nước Ý."
      },
      {
        "kanji": "イタリアの靴は有名です。",
        "jp": "イタリアの くつは ゆうめいです。",
        "romaji": "Itaria no kutsu wa yuumei desu.",
        "vn": "Giày của Ý rất nổi tiếng."
      },
      {
        "kanji": "この靴もイタリアの靴です。",
        "jp": "この くつも イタリアの くつです。",
        "romaji": "Kono kutsu mo Itaria no kutsu desu.",
        "vn": "Đôi giày này cũng là giày của Ý."
      },
      {
        "kanji": "とても高いです。",
        "jp": "とても たかいです。",
        "romaji": "Totemo takai desu.",
        "vn": "Rất là đắt tiền."
      }
    ],
    "questions": [
      {
        "question": "このひとの くには どこですか？ (Đất nước của người này là ở đâu?)",
        "options": [
          "イタリア (Ý)",
          "フランス (Pháp)",
          "アメリカ (Mỹ)",
          "にほん (Nhật)"
        ],
        "answer": "イタリア (Ý)"
      },
      {
        "question": "イタリアの なにが ゆうめいですか？ (Cái gì của Ý nổi tiếng?)",
        "options": [
          "くつ (Giày)",
          "とけい (Đồng hồ)",
          "かばん (Cặp)",
          "カメラ (Máy ảnh)"
        ],
        "answer": "くつ (Giày)"
      },
      {
        "question": "そのくつは どうですか？ (Đôi giày đó thì như thế nào?)",
        "options": [
          "たかいです (Đắt)",
          "やすいです (Rẻ)",
          "きれいです (Đẹp)",
          "ふるいです (Cũ)"
        ],
        "answer": "たかいです (Đắt)"
      }
    ]
  }
];
