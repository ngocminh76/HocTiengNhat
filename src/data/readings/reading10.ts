import { Reading } from '../lessons/types';

export const readings: Reading[] = [
    {
      "title": "部屋に何がありますか",
      "titleVn": "① Trong phòng có gì?",
      "lines": [
        {
          "kanji": "A：部屋に何がありますか。",
          "jp": "A：へやに なにが ありますか。",
          "romaji": "A: Heya ni nani ga arimasu ka.",
          "vn": "A: Trong phòng có những gì?"
        },
        {
          "kanji": "B：ベッドと棚があります。",
          "jp": "B：ベッドと たなが あります。",
          "romaji": "B: Beddo to tana ga arimasu.",
          "vn": "B: Có cái giường và cái kệ."
        },
        {
          "kanji": "A：机の上に何がありますか。",
          "jp": "A：つくえの うえに なにが ありますか。",
          "romaji": "A: Tsukue no ue ni nani ga arimasu ka.",
          "vn": "A: Trên bàn có gì vậy?"
        },
        {
          "kanji": "B：時計や本などがあります。",
          "jp": "B：とけいや ほんなどが あります。",
          "romaji": "B: Tokei ya hon nado ga arimasu.",
          "vn": "B: Có đồng hồ và sách, v.v..."
        }
      ],
      "questions": [
        {
          "question": "部屋に何がありますか？",
          "options": [
            "ベッドとたな",
            "つくえととけい",
            "つくえとほん",
            "とけいとほん"
          ],
          "answer": "ベッドとたな"
        },
        {
          "question": "つくえの上に何がありますか？",
          "options": [
            "ベッド",
            "たな",
            "とけいやほんなど",
            "なにもありません"
          ],
          "answer": "とけいやほんなど"
        }
      ]
    },
    {
      "title": "公園にだれがいますか",
      "titleVn": "② Trong công viên có ai?",
      "lines": [
        {
          "kanji": "A：公園にだれがいますか。",
          "jp": "A：こうえんに だれが いますか。",
          "romaji": "A: Kouen ni dare ga imasu ka.",
          "vn": "A: Trong công viên có ai vậy?"
        },
        {
          "kanji": "B：男の人と女の子がいます。",
          "jp": "B：おとこのひとと おんなのこが います。",
          "romaji": "B: Otoko no hito to onna no ko ga imasu.",
          "vn": "B: Có người đàn ông và bé gái."
        },
        {
          "kanji": "A：犬もいますか。",
          "jp": "A：いぬも いますか。",
          "romaji": "A: Inu mo imasu ka.",
          "vn": "A: Có chó nữa không?"
        },
        {
          "kanji": "B：はい、犬もいます。木の下にいます。",
          "jp": "B：はい、いぬも います。きの したに います。",
          "romaji": "B: Hai, inu mo imasu. Ki no shita ni imasu.",
          "vn": "B: Vâng, có chó nữa. Nó ở dưới gốc cây."
        }
      ],
      "questions": [
        {
          "question": "公園にだれがいますか？",
          "options": [
            "おとこのひとと おとこのこ",
            "おとこのひとと おんなのこ",
            "おんなのひとと おんなのこ",
            "おんなのひとと おとこのこ"
          ],
          "answer": "おとこのひとと おんなのこ"
        },
        {
          "question": "犬はどこにいますか？",
          "options": [
            "きのうえ",
            "きのした",
            "きのなか",
            "きのそと"
          ],
          "answer": "きのした"
        }
      ]
    },
    {
      "title": "ポストはどこですか",
      "titleVn": "③ Hộp thư ở đâu?",
      "lines": [
        {
          "kanji": "A：すみません、ポストはどこですか。",
          "jp": "A：すみません、ポストは どこですか。",
          "romaji": "A: Sumimasen, posuto wa doko desu ka.",
          "vn": "A: Xin lỗi, hộp thư nằm ở đâu vậy?"
        },
        {
          "kanji": "B：ポストですか。あの銀行の隣です。",
          "jp": "B：ポストですか。あの ぎんこうの となり です。",
          "romaji": "B: Posuto desu ka. Ano ginkou no tonari desu.",
          "vn": "B: Hộp thư à. Ở bên cạnh ngân hàng kia."
        },
        {
          "kanji": "A：本屋の隣ですね。",
          "jp": "A：ほんやの となり ですね。",
          "romaji": "A: Honya no tonari desu ne.",
          "vn": "A: Bên cạnh hiệu sách phải không?"
        },
        {
          "kanji": "B：いいえ、本屋と喫茶店の間です。",
          "jp": "B：いいえ、ほんやと きっさてんの あいだ です。",
          "romaji": "B: Iie, honya to kissaten no aida desu.",
          "vn": "B: Không, nó ở giữa hiệu sách và quán cafe."
        }
      ],
      "questions": [
        {
          "question": "ポストはどこですか？",
          "options": [
            "ぎんこうのとなり",
            "ほんやのとなり",
            "きっさてんのとなり",
            "ほんやときっさてんのあいだ"
          ],
          "answer": "ほんやときっさてんのあいだ"
        },
        {
          "question": "ポストのちかくに なにがありますか？",
          "options": [
            "ぎんこうとほんや",
            "ほんやときっさてん",
            "ぎんこうとスーパー",
            "スーパーとデパート"
          ],
          "answer": "ほんやときっさてん"
        }
      ]
    },
{
    "title": "わたしの ほんや",
    "titleVn": "④ Hiệu sách của tôi",
    "lines": [
      {
        "kanji": "駅の前に大きい本屋があります。",
        "jp": "えきの まえに おおきい ほんやが あります。",
        "romaji": "Eki no mae ni ookii honya ga arimasu.",
        "vn": "Trước nhà ga có một hiệu sách lớn."
      },
      {
        "kanji": "本屋の右に喫茶店があります。",
        "jp": "ほんやの みぎに きっさてんが あります。",
        "romaji": "Honya no migi ni kissaten ga arimasu.",
        "vn": "Bên phải hiệu sách có một quán cafe."
      },
      {
        "kanji": "左にスーパーがあります。",
        "jp": "ひだりに スーパーが あります。",
        "romaji": "Hidari ni suupaa ga arimasu.",
        "vn": "Bên trái có một siêu thị."
      },
      {
        "kanji": "本屋の中にいろいろな本があります。",
        "jp": "ほんやの なかに いろいろな ほんが あります。",
        "romaji": "Honya no naka ni iroirona hon ga arimasu.",
        "vn": "Bên trong hiệu sách có nhiều loại sách."
      },
      {
        "kanji": "とても便利です。",
        "jp": "とても べんりです。",
        "romaji": "Totemo benri desu.",
        "vn": "Rất tiện lợi."
      }
    ],
    "questions": [
      {
        "question": "おおきい ほんやは どこに ありますか？ (Hiệu sách lớn nằm ở đâu?)",
        "options": [
          "えきの まえ (Trước nhà ga)",
          "えきの うしろ (Sau nhà ga)",
          "きっさてんの みぎ (Phải quán cafe)",
          "スーパーの ひだり (Trái siêu thị)"
        ],
        "answer": "えきの まえ (Trước nhà ga)"
      },
      {
        "question": "ほんやの みぎに なにが ありますか？ (Bên phải hiệu sách có gì?)",
        "options": [
          "きっさてん (Quán cafe)",
          "スーパー (Siêu thị)",
          "えき (Nhà ga)",
          "としょかん (Thư viện)"
        ],
        "answer": "きっさてん (Quán cafe)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私の家は大学の近くにあります。",
        "jp": "わたしの いえは だいがくの ちかくに あります。",
        "romaji": "Watashi no ie wa daigaku no chikaku ni arimasu.",
        "vn": "Nhà của tôi nằm ở gần trường đại học."
      },
      {
        "kanji": "家から大学まで自転車で10分です。",
        "jp": "いえから だいがくまで じてんしゃで じっぷんです。",
        "romaji": "Ie kara daigaku made jitensha de jippun desu.",
        "vn": "Từ nhà đến trường đại học đi xe đạp mất 10 phút."
      },
      {
        "kanji": "家の近くに公園があります。",
        "jp": "いえの ちかくに こうえんが あります。",
        "romaji": "Ie no chikaku ni kouen ga arimasu.",
        "vn": "Gần nhà có công viên."
      },
      {
        "kanji": "休みの日に公園で子供が遊んでいます。",
        "jp": "やすみの ひに こうえんで こどもが あそんでいます。",
        "romaji": "Yasumi no hi ni kouen de kodomo ga asonde imasu.",
        "vn": "Ngày nghỉ trẻ em chơi đùa ở công viên."
      },
      {
        "kanji": "犬もいます。とても賑やかです。",
        "jp": "いぬも います。とても にぎやかです。",
        "romaji": "Inu mo imasu. Totemo nigiyaka desu.",
        "vn": "Có cả chó nữa. Rất nhộn nhịp."
      }
    ],
    "questions": [
      {
        "question": "いえから だいがくまで なんで いきますか？ (Đi từ nhà đến đại học bằng gì?)",
        "options": [
          "じてんしゃ (Xe đạp)",
          "バス (Xe buýt)",
          "あるいて (Đi bộ)",
          "でんしゃ (Tàu điện)"
        ],
        "answer": "じてんしゃ (Xe đạp)"
      },
      {
        "question": "やすみの ひに こうえんに だれが いますか？ (Ngày nghỉ công viên có ai?)",
        "options": [
          "こどもと いぬ (Trẻ em và chó)",
          "こどもと ねこ (Trẻ em và mèo)",
          "がくせいと いぬ (Sinh viên và chó)",
          "おとなと いぬ (Người lớn và chó)"
        ],
        "answer": "こどもと いぬ (Trẻ em và chó)"
      },
      {
        "question": "こうえんは どうですか？ (Công viên thì như thế nào?)",
        "options": [
          "にぎやかです (Nhộn nhịp)",
          "しずかです (Yên tĩnh)",
          "おおきいです (To lớn)",
          "きれいです (Đẹp)"
        ],
        "answer": "にぎやかです (Nhộn nhịp)"
      }
    ]
  }
];
