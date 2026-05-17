import { Reading } from '../lessons/types';

export const readings: Reading[] = [
    {
      "title": "いまなんじですか",
      "titleVn": "① Bây giờ là mấy giờ?",
      "lines": [
        {
          "kanji": "A：すみません、今何時ですか。",
          "jp": "A：すみません、いま なんじ ですか。",
          "romaji": "A: Sumimasen, ima nanji desu ka.",
          "vn": "A: Xin lỗi, bây giờ là mấy giờ?"
        },
        {
          "kanji": "B：午前10時です。",
          "jp": "B：ごぜん 10じ です。",
          "romaji": "B: Gozen 10-ji desu.",
          "vn": "B: 10 giờ sáng."
        },
        {
          "kanji": "A：このデパートは何時から何時までですか。",
          "jp": "A：この デパートは なんじから なんじまで ですか。",
          "romaji": "A: Kono depaato wa nanji kara nanji made desu ka.",
          "vn": "A: Trung tâm này mở cửa từ mấy giờ đến mấy giờ?"
        },
        {
          "kanji": "B：10時から8時までです。",
          "jp": "B：10じから 8じまで です。",
          "romaji": "B: 10-ji kara 8-ji made desu.",
          "vn": "B: Từ 10 giờ đến 8 giờ (tối)."
        },
        {
          "kanji": "A：休みは何曜日ですか。",
          "jp": "A：やすみは なんようび ですか。",
          "romaji": "A: Yasumi wa nan youbi desu ka.",
          "vn": "A: Đóng cửa ngày nào vậy?"
        },
        {
          "kanji": "B：木曜日です。",
          "jp": "B：もくようび です。",
          "romaji": "B: Mokuyoubi desu.",
          "vn": "B: Thứ Năm."
        }
      ],
      "questions": [
        {
          "question": "いまなんじですか？",
          "options": [
            "ごぜん8じ",
            "ごぜん9じ",
            "ごぜん10じ",
            "ごご10じ"
          ],
          "answer": "ごぜん10じ"
        },
        {
          "question": "デパートはなんじからですか？",
          "options": [
            "8じから",
            "9じから",
            "10じから",
            "11じから"
          ],
          "answer": "10じから"
        },
        {
          "question": "デパートのやすみはなんようびですか？",
          "options": [
            "すいようび",
            "もくようび",
            "きんようび",
            "どようび"
          ],
          "answer": "もくようび"
        }
      ]
    },
    {
      "title": "ミラーさんのいちにち",
      "titleVn": "② Một ngày của anh Miller",
      "lines": [
        {
          "kanji": "ミラーさんは毎朝6時に起きます。",
          "jp": "ミラーさんは まいあさ 6じに おきます。",
          "romaji": "Miraa-san wa maiasa 6-ji ni okimasu.",
          "vn": "Anh Miller mỗi sáng dậy lúc 6 giờ."
        },
        {
          "kanji": "8時から5時まで仕事をします。",
          "jp": "8じから 5じまで しごとを します。",
          "romaji": "8-ji kara 5-ji made shigoto wo shimasu.",
          "vn": "Làm việc từ 8 giờ đến 5 giờ."
        },
        {
          "kanji": "昼休みは12時から1時までです。",
          "jp": "ひるやすみは 12じから 1じまで です。",
          "romaji": "Hiruyasumi wa 12-ji kara 1-ji made desu.",
          "vn": "Giờ nghỉ trưa từ 12 giờ đến 1 giờ."
        },
        {
          "kanji": "毎晩11時に寝ます。",
          "jp": "まいばん 11じに ねます。",
          "romaji": "Maiban 11-ji ni nemasu.",
          "vn": "Tối nào cũng ngủ lúc 11 giờ."
        }
      ],
      "questions": [
        {
          "question": "ミラーさんはなんじにおきますか？",
          "options": [
            "5じ",
            "6じ",
            "7じ",
            "8じ"
          ],
          "answer": "6じ"
        },
        {
          "question": "しごとはなんじからですか？",
          "options": [
            "7じから",
            "8じから",
            "9じから",
            "10じから"
          ],
          "answer": "8じから"
        },
        {
          "question": "ミラーさんはまいばんなんじにねますか？",
          "options": [
            "9じ",
            "10じ",
            "11じ",
            "12じ"
          ],
          "answer": "11じ"
        }
      ]
    },
    {
      "title": "にほんとベトナムのじかん",
      "titleVn": "③ Giờ Nhật Bản và Việt Nam",
      "lines": [
        {
          "kanji": "A：今日本は何時ですか。",
          "jp": "A：いま にほんは なんじ ですか。",
          "romaji": "A: Ima Nihon wa nanji desu ka.",
          "vn": "A: Bây giờ ở Nhật là mấy giờ?"
        },
        {
          "kanji": "B：午後3時です。",
          "jp": "B：ごご 3じ です。",
          "romaji": "B: Gogo 3-ji desu.",
          "vn": "B: 3 giờ chiều."
        },
        {
          "kanji": "A：ベトナムは？",
          "jp": "A：ベトナムは？",
          "romaji": "A: Betonamu wa?",
          "vn": "A: Còn Việt Nam?"
        },
        {
          "kanji": "B：ベトナムは午後1時です。日本より2時間前です。",
          "jp": "B：ベトナムは ごご 1じ です。にほんより 2じかん まえ です。",
          "romaji": "B: Betonamu wa gogo 1-ji desu. Nihon yori 2-jikan mae desu.",
          "vn": "B: Việt Nam là 1 giờ chiều. Sớm hơn Nhật 2 tiếng."
        }
      ],
      "questions": [
        {
          "question": "いまにほんはなんじですか？",
          "options": [
            "ごぜん3じ",
            "ごご1じ",
            "ごご3じ",
            "ごご5じ"
          ],
          "answer": "ごご3じ"
        },
        {
          "question": "ベトナムはいまなんじですか？",
          "options": [
            "ごご1じ",
            "ごご2じ",
            "ごご3じ",
            "ごご4じ"
          ],
          "answer": "ごご1じ"
        },
        {
          "question": "ベトナムはにほんよりなんじかんちがいますか？",
          "options": [
            "1じかん",
            "2じかん",
            "3じかん",
            "4じかん"
          ],
          "answer": "2じかん"
        }
      ]
    },
{
    "title": "スーパーの じかん",
    "titleVn": "④ Giờ mở cửa siêu thị",
    "lines": [
      {
        "kanji": "【桜スーパー】",
        "jp": "【さくらスーパー】",
        "romaji": "[Sakura Suupaa]",
        "vn": "[Siêu thị Sakura]"
      },
      {
        "kanji": "月曜日〜金曜日：午前9時〜午後10時",
        "jp": "げつようび〜きんようび：ごぜんくじ〜ごごじゅうじ",
        "romaji": "Getsuyoubi ~ Kinyoubi: Gozen kuji ~ Gogo juuji",
        "vn": "Thứ 2 ~ Thứ 5: 9h sáng ~ 10h tối"
      },
      {
        "kanji": "土曜日・日曜日：午前9時〜午後11時",
        "jp": "どようび・にちようび：ごぜんくじ〜ごごじゅういちじ",
        "romaji": "Doyoubi, Nichiyoubi: Gozen kuji ~ Gogo juu-ichi ji",
        "vn": "Thứ 7, CN: 9h sáng ~ 11h tối"
      },
      {
        "kanji": "休み：第３火曜日",
        "jp": "やすみ：だい３かようび",
        "romaji": "Yasumi: Dai-san kayoubi",
        "vn": "Nghỉ: Thứ 3 tuần thứ ba trong tháng"
      }
    ],
    "questions": [
      {
        "question": "げつようびは なんじまでですか？ (Thứ 2 mở cửa đến mấy giờ?)",
        "options": [
          "ごご 10じ (10h tối)",
          "ごご 11じ (11h tối)",
          "ごぜん 9じ (9h sáng)",
          "ごご 9じ (9h tối)"
        ],
        "answer": "ごご 10じ (10h tối)"
      },
      {
        "question": "にちようびは なんじからですか？ (Chủ nhật mở cửa từ mấy giờ?)",
        "options": [
          "ごぜん 9じ (9h sáng)",
          "ごぜん 10じ (10h sáng)",
          "ごご 9じ (9h tối)",
          "ごご 11じ (11h tối)"
        ],
        "answer": "ごぜん 9じ (9h sáng)"
      }
    ]
  },
  {
    "title": "わたしの いちにち",
    "titleVn": "⑤ Một ngày của tôi",
    "lines": [
      {
        "kanji": "私は毎朝6時に起きます。",
        "jp": "わたしは まいあさ ろくじに おきます。",
        "romaji": "Watashi wa maiasa roku-ji ni okimasu.",
        "vn": "Mỗi sáng tôi thức dậy lúc 6 giờ."
      },
      {
        "kanji": "朝から夕方まで働きます。",
        "jp": "あさから ゆうがたまで はたらきます。",
        "romaji": "Asa kara yuugata made hatarakimasu.",
        "vn": "Làm việc từ sáng đến chiều tối."
      },
      {
        "kanji": "会社は9時から5時までです。",
        "jp": "かいしゃは くじから ごじまでです。",
        "romaji": "Kaisha wa ku-ji kara go-ji made desu.",
        "vn": "Công ty từ 9 giờ đến 5 giờ."
      },
      {
        "kanji": "毎日大変です。でも、面白いです。",
        "jp": "まいにち たいへんです。でも、おもしろいです。",
        "romaji": "Mainichi taihen desu. Demo, omoshiroi desu.",
        "vn": "Mỗi ngày đều vất vả. Nhưng mà thú vị."
      },
      {
        "kanji": "夜は11時に寝ます。",
        "jp": "よるは じゅういちじに ねます。",
        "romaji": "Yoru wa juu-ichi-ji ni nemasu.",
        "vn": "Buổi tối thì 11 giờ ngủ."
      }
    ],
    "questions": [
      {
        "question": "このひとは まいあさ なんじに おきますか？ (Người này thức dậy lúc mấy giờ mỗi sáng?)",
        "options": [
          "6じ (6 giờ)",
          "7じ (7 giờ)",
          "9じ (9 giờ)",
          "5じ (5 giờ)"
        ],
        "answer": "6じ (6 giờ)"
      },
      {
        "question": "かいしゃは なんじから なんじまでですか？ (Công ty từ mấy giờ đến mấy giờ?)",
        "options": [
          "9じから 5じまで (9h đến 5h)",
          "8じから 5じまで (8h đến 5h)",
          "9じから 6じまで (9h đến 6h)",
          "10じから 5じまで (10h đến 5h)"
        ],
        "answer": "9じから 5じまで (9h đến 5h)"
      },
      {
        "question": "よる なんじに ねますか？ (Buổi tối mấy giờ ngủ?)",
        "options": [
          "11じ (11 giờ)",
          "10じ (10 giờ)",
          "12じ (12 giờ)",
          "9じ (9 giờ)"
        ],
        "answer": "11じ (11 giờ)"
      }
    ]
  }
];
