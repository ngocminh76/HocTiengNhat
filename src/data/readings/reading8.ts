import { Reading } from '../lessons/types';

export const readings: Reading[] = [
    {
      "title": "日本の生活はどうですか",
      "titleVn": "① Cuộc sống ở Nhật thế nào?",
      "lines": [
        {
          "kanji": "A：ミラーさん、日本の生活はどうですか。",
          "jp": "A：ミラーさん、にほんの せいかつは どう ですか。",
          "romaji": "A: Miraa-san, Nihon no seikatsu wa dou desu ka.",
          "vn": "A: Anh Miller, cuộc sống ở Nhật thế nào?"
        },
        {
          "kanji": "B：毎日 とても楽しいです。",
          "jp": "B：まいにち とても たのしいです。",
          "romaji": "B: Mainichi totemo tanoshii desu.",
          "vn": "B: Mỗi ngày đều rất vui."
        },
        {
          "kanji": "A：そうですか。お仕事は 忙しいですか。",
          "jp": "A：そうですか。おしごとは いそがしい ですか。",
          "romaji": "A: Sou desu ka. Oshigoto wa isogashii desu ka.",
          "vn": "A: Vậy à. Công việc có bận không?"
        },
        {
          "kanji": "B：ええ、忙しいですが、おもしろいです。",
          "jp": "B：ええ、いそがしいですが、おもしろいです。",
          "romaji": "B: Ee, isogashii desu ga, omoshiroi desu.",
          "vn": "B: Vâng, bận nhưng mà thú vị."
        }
      ],
      "questions": [
        {
          "question": "ミラーさんの毎日はどうですか？",
          "options": [
            "たのしいです",
            "いそがしくないです",
            "おもしろくないです",
            "ひまです"
          ],
          "answer": "たのしいです"
        },
        {
          "question": "仕事はどうですか？",
          "options": [
            "ひまですが、おもしろいです",
            "いそがしいですが、おもしろいです",
            "いそがしいですが、おもしろくないです",
            "たのしいですが、いそがしいです"
          ],
          "answer": "いそがしいですが、おもしろいです"
        }
      ]
    },
    {
      "title": "東京はどんな町ですか",
      "titleVn": "② Tokyo là thành phố như thế nào?",
      "lines": [
        {
          "kanji": "A：東京はどんな町ですか。",
          "jp": "A：とうきょうは どんな まち ですか。",
          "romaji": "A: Toukyou wa donna machi desu ka.",
          "vn": "A: Tokyo là thành phố như thế nào?"
        },
        {
          "kanji": "B：とても大きくて、にぎやかな町です。",
          "jp": "B：とても おおきくて、にぎやかな まち です。",
          "romaji": "B: Totemo ookikute, nigiyakana machi desu.",
          "vn": "B: Là một thành phố rất lớn và náo nhiệt."
        },
        {
          "kanji": "A：そして、きれいですか。",
          "jp": "A：そして、きれいですか。",
          "romaji": "A: Soshite, kirei desu ka.",
          "vn": "A: Và nó có đẹp/sạch không?"
        },
        {
          "kanji": "B：はい、きれいです。でも、少し物価が高いです。",
          "jp": "B：はい、きれいです。でも、すこし ぶっかが たかい です。",
          "romaji": "B: Hai, kirei desu. Demo, sukoshi bukka ga takai desu.",
          "vn": "B: Vâng, sạch sẽ. Nhưng giá cả hơi đắt một chút."
        }
      ],
      "questions": [
        {
          "question": "東京はどんな町ですか？",
          "options": [
            "しずかな町です",
            "ちいさくて にぎやかな町です",
            "おおきくて にぎやかな町です",
            "ふるい町です"
          ],
          "answer": "おおきくて にぎやかな町です"
        },
        {
          "question": "東京の物価（ぶっか - Giá cả）はどうですか？",
          "options": [
            "とてもやすいです",
            "すこしたかいです",
            "とてもたかいです",
            "すこしやすいです"
          ],
          "answer": "すこしたかいです"
        }
      ]
    },
    {
      "title": "桜と富士山",
      "titleVn": "③ Hoa Anh Đào và Núi Phú Sĩ",
      "lines": [
        {
          "kanji": "日本の桜はきれいです。",
          "jp": "にほんの さくらは きれい です。",
          "romaji": "Nihon no sakura wa kirei desu.",
          "vn": "Hoa anh đào của Nhật Bản rất đẹp."
        },
        {
          "kanji": "そして、富士山は有名で高い山です。",
          "jp": "そして、ふじさんは ゆうめで たかい やま です。",
          "romaji": "Soshite, Fujisan wa yuumei de takai yama desu.",
          "vn": "Và, núi Phú Sĩ là một ngọn núi cao và nổi tiếng."
        },
        {
          "kanji": "日本の食べ物はおいしいですが、高いです。",
          "jp": "にほんの たべものは おいしいですが、たかい です。",
          "romaji": "Nihon no tabemono wa oishii desu ga, takai desu.",
          "vn": "Đồ ăn Nhật Bản ngon nhưng mà đắt."
        }
      ],
      "questions": [
        {
          "question": "富士山はどんな山ですか？",
          "options": [
            "ひくい山です",
            "ゆうめいで たかい山です",
            "ちいさい山です",
            "ゆうめいじゃないです"
          ],
          "answer": "ゆうめいで たかい山です"
        },
        {
          "question": "日本の食べ物はどうですか？",
          "options": [
            "おいしいですが、たかいです",
            "おいしいですが、やすいです",
            "おいしくないですが、たかいです",
            "おいしくて、やすいです"
          ],
          "answer": "おいしいですが、たかいです"
        }
      ]
    },
{
    "title": "おいしい レストラン",
    "titleVn": "④ Nhà hàng ngon",
    "lines": [
      {
        "kanji": "昨日の夜、新しいレストランへ行きました。",
        "jp": "きのうの よる、あたらしい レストランへ いきました。",
        "romaji": "Kinou no yoru, atarashii resutoran e ikimashita.",
        "vn": "Tối hôm qua, tôi đã đi đến một nhà hàng mới."
      },
      {
        "kanji": "レストランは静かでした。",
        "jp": "レストランは しずかでした。",
        "romaji": "Resutoran wa shizuka deshita.",
        "vn": "Nhà hàng rất yên tĩnh."
      },
      {
        "kanji": "料理はとても美味しかったです。",
        "jp": "りょうりは とても おいしかったです。",
        "romaji": "Ryouri wa totemo oishikatta desu.",
        "vn": "Món ăn đã rất ngon."
      },
      {
        "kanji": "でも、高かったです。",
        "jp": "でも、たかかったです。",
        "romaji": "Demo, takakatta desu.",
        "vn": "Nhưng mà đắt."
      },
      {
        "kanji": "また行きたいです。",
        "jp": "また いきたいです。",
        "romaji": "Mata ikitai desu.",
        "vn": "Tôi muốn đi lại."
      }
    ],
    "questions": [
      {
        "question": "レストランは どうでしたか？ (Nhà hàng thế nào?)",
        "options": [
          "しずかでした (Yên tĩnh)",
          "にぎやかでした (Nhộn nhịp)",
          "ふるかったです (Cũ)",
          "おおきかったです (To lớn)"
        ],
        "answer": "しずかでした (Yên tĩnh)"
      },
      {
        "question": "りょうりは どうでしたか？ (Món ăn thế nào?)",
        "options": [
          "おいしくて たかかったです (Ngon và đắt)",
          "おいしくて やすかったです (Ngon và rẻ)",
          "まずくて たかかったです (Dở và đắt)",
          "まずくて やすかったです (Dở và rẻ)"
        ],
        "answer": "おいしくて たかかったです (Ngon và đắt)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私の町は小さい町ですが、とても便利です。",
        "jp": "わたしの まちは ちいさい まちですが、とても べんりです。",
        "romaji": "Watashi no machi wa chiisai machi desu ga, totemo benri desu.",
        "vn": "Thị trấn của tôi là thị trấn nhỏ nhưng rất tiện lợi."
      },
      {
        "kanji": "大きいスーパーや病院があります。",
        "jp": "おおきい スーパーや びょういんが あります。",
        "romaji": "Ookii suupaa ya byouin ga arimasu.",
        "vn": "Có siêu thị và bệnh viện lớn."
      },
      {
        "kanji": "桜の季節はとても綺麗です。",
        "jp": "さくらの きせつは とても きれいです。",
        "romaji": "Sakura no kisetsu wa totemo kirei desu.",
        "vn": "Mùa hoa anh đào thì rất đẹp."
      },
      {
        "kanji": "公園に人がたくさんいます。",
        "jp": "こうえんに ひとが たくさん います。",
        "romaji": "Kouen ni hito ga takusan imasu.",
        "vn": "Ở công viên có rất nhiều người."
      },
      {
        "kanji": "賑やかです。",
        "jp": "にぎやかです。",
        "romaji": "Nigiyaka desu.",
        "vn": "Rất nhộn nhịp."
      }
    ],
    "questions": [
      {
        "question": "わたしの まちは どんなまちですか？ (Thị trấn của tôi là thị trấn như thế nào?)",
        "options": [
          "ちいさくて べんりなまち (Nhỏ và tiện lợi)",
          "おおきくて べんりなまち (Lớn và tiện lợi)",
          "ちいさくて ふべんなまち (Nhỏ và bất tiện)",
          "おおきくて ふべんなまち (Lớn và bất tiện)"
        ],
        "answer": "ちいさくて べんりなまち (Nhỏ và tiện lợi)"
      },
      {
        "question": "まちなかに なにが ありますか？ (Trong thị trấn có cái gì?)",
        "options": [
          "スーパーや びょういん (Siêu thị và bệnh viện)",
          "デパートや びょういん (TTTM và bệnh viện)",
          "スーパーや えき (Siêu thị và nhà ga)",
          "きっさてんや びょういん (Quán cafe và bệnh viện)"
        ],
        "answer": "スーパーや びょういん (Siêu thị và bệnh viện)"
      },
      {
        "question": "さくらのきせつは どうなりますか？ (Mùa hoa anh đào thì thế nào?)",
        "options": [
          "きれいで にぎやかになります (Đẹp và nhộn nhịp)",
          "きれいで しずかになります (Đẹp và yên tĩnh)",
          "あつくて にぎやかになります (Nóng và nhộn nhịp)",
          "さむくて しずかになります (Lạnh và yên tĩnh)"
        ],
        "answer": "きれいで にぎやかになります (Đẹp và nhộn nhịp)"
      }
    ]
  }
];
