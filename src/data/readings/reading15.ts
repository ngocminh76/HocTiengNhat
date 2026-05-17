import { Reading } from '../lessons/types';

export const readings: Reading[] = [
{
    "title": "しゃしん",
    "titleVn": "① Bức ảnh",
    "lines": [
      {
        "kanji": "A：すみません、ここで写真を撮ってもいいですか。",
        "jp": "A：すみません、ここで しゃしんを とっても いいですか。",
        "romaji": "A: Sumimasen, koko de shashin o totte mo ii desu ka.",
        "vn": "A: Xin lỗi, chụp ảnh ở đây có được không?"
      },
      {
        "kanji": "B：いいえ、ここでは写真を撮ってはいけません。",
        "jp": "B：いいえ、ここでは しゃしんを とっては いけません。",
        "romaji": "B: Iie, koko dewa shashin o totte wa ikemasen.",
        "vn": "B: Không, ở đây không được chụp ảnh."
      },
      {
        "kanji": "A：そうですか。すみません。",
        "jp": "A：そうですか。すみません。",
        "romaji": "A: Sou desu ka. Sumimasen.",
        "vn": "A: Vậy à. Xin lỗi."
      },
      {
        "kanji": "B：外で撮ってもいいですよ。",
        "jp": "B：そとで とっても いいですよ。",
        "romaji": "B: Soto de totte mo ii desuyo.",
        "vn": "B: Chụp ở bên ngoài thì được đấy."
      },
      {
        "kanji": "A：はい、わかりました。",
        "jp": "A：はい、わかりました。",
        "romaji": "A: Hai, wakarimashita.",
        "vn": "A: Vâng, tôi hiểu rồi."
      }
    ],
    "questions": [
      {
        "question": "Aさんは ここで しゃしんを とっても いいですか？ (Người A chụp ảnh ở đây có được không?)",
        "options": [
          "いいえ、いけません (Không, không được)",
          "はい、いいです (Vâng, được)",
          "わかりません (Không biết)",
          "はい、とっています (Vâng, đang chụp)"
        ],
        "answer": "いいえ、いけません (Không, không được)"
      },
      {
        "question": "どこで しゃしんを とっても いいですか？ (Chụp ảnh ở đâu thì được?)",
        "options": [
          "そと (Bên ngoài)",
          "なか (Bên trong)",
          "ここ (Ở đây)",
          "うち (Nhà)"
        ],
        "answer": "そと (Bên ngoài)"
      }
    ]
  },
  {
    "title": "わたしの かぞく",
    "titleVn": "② Gia đình tôi",
    "lines": [
      {
        "kanji": "私の家族は東京に住んでいます。",
        "jp": "わたしの かぞくは とうきょうに すんでいます。",
        "romaji": "Watashi no kazoku wa Toukyou ni sunde imasu.",
        "vn": "Gia đình tôi đang sống ở Tokyo."
      },
      {
        "kanji": "父は車を作っています。",
        "jp": "ちちは くるまを つくっています。",
        "romaji": "Chichi wa kuruma o tsukutte imasu.",
        "vn": "Bố tôi đang chế tạo ô tô."
      },
      {
        "kanji": "母は英語を教えています。",
        "jp": "ははは えいごを おしえています。",
        "romaji": "Haha wa Eigo o oshiete imasu.",
        "vn": "Mẹ tôi đang dạy tiếng Anh."
      },
      {
        "kanji": "兄は大阪の大学で勉強しています。",
        "jp": "あには おおさかの だいがくで べんきょうしています。",
        "romaji": "Ani wa Oosaka no daigaku de benkyou shite imasu.",
        "vn": "Anh trai đang học đại học ở Osaka."
      },
      {
        "kanji": "私は京都で働いています。",
        "jp": "わたしは きょうとで はたらいています。",
        "romaji": "Watashi wa Kyouto de hataraite imasu.",
        "vn": "Tôi đang làm việc ở Kyoto."
      }
    ],
    "questions": [
      {
        "question": "かぞくは どこに すんでいますか？ (Gia đình sống ở đâu?)",
        "options": [
          "とうきょう (Tokyo)",
          "おおさか (Osaka)",
          "きょうと (Kyoto)",
          "アメリカ (Mỹ)"
        ],
        "answer": "とうきょう (Tokyo)"
      },
      {
        "question": "あには なにを していますか？ (Anh trai đang làm gì?)",
        "options": [
          "だいがくで べんきょうしています (Học ở trường ĐH)",
          "くるまを つくっています (Chế tạo xe)",
          "えいごを おしえています (Dạy tiếng Anh)",
          "はたらいています (Làm việc)"
        ],
        "answer": "だいがくで べんきょうしています (Học ở trường ĐH)"
      }
    ]
  },
  {
    "title": "としょかんで",
    "titleVn": "③ Ở thư viện",
    "lines": [
      {
        "kanji": "A：この本を借りてもいいですか。",
        "jp": "A：この ほんを かりても いいですか。",
        "romaji": "A: Kono hon o karite mo ii desu ka.",
        "vn": "A: Có thể mượn cuốn sách này được không?"
      },
      {
        "kanji": "B：はい、いいですよ。名前を書いてください。",
        "jp": "B：はい、いいですよ。なまえを かいて ください。",
        "romaji": "B: Hai, ii desu yo. Namae o kaite kudasai.",
        "vn": "B: Vâng, được. Xin hãy viết tên vào."
      },
      {
        "kanji": "A：はい。いつ返しますか。",
        "jp": "A：はい。いつ かえしますか。",
        "romaji": "A: Hai. Itsu kaeshimasu ka.",
        "vn": "A: Vâng. Bao giờ thì trả lại?"
      },
      {
        "kanji": "B：来週の金曜日に返してください。",
        "jp": "B：らいしゅうの きんようびに かえして ください。",
        "romaji": "B: Raishuu no kinyoubi ni kaeshite kudasai.",
        "vn": "B: Hãy trả lại vào thứ Sáu tuần sau."
      },
      {
        "kanji": "A：わかりました。ありがとうございます。",
        "jp": "A：わかりました。ありがとうございます。",
        "romaji": "A: Wakarimashita. Arigatou gozaimasu.",
        "vn": "A: Tôi hiểu rồi. Cảm ơn."
      }
    ],
    "questions": [
      {
        "question": "Aさんは なにを しますか？ (Người A sẽ làm gì?)",
        "options": [
          "ほんを かります (Mượn sách)",
          "ほんを かいます (Mua sách)",
          "ほんを かえします (Trả sách)",
          "しゃしんを とります (Chụp ảnh)"
        ],
        "answer": "ほんを かります (Mượn sách)"
      },
      {
        "question": "いつ ほんを かえしますか？ (Bao giờ trả sách?)",
        "options": [
          "らいしゅうの きんようび (Thứ Sáu tuần sau)",
          "こんしゅうの きんようび (Thứ Sáu tuần này)",
          "あした (Ngày mai)",
          "らいげつ (Tháng sau)"
        ],
        "answer": "らいしゅうの きんようび (Thứ Sáu tuần sau)"
      }
    ]
  },
  {
    "title": "あぶないです",
    "titleVn": "④ Nguy hiểm",
    "lines": [
      {
        "kanji": "【 プールの 注意 】",
        "jp": "【 プールの ちゅうい 】",
        "romaji": "[ Puuru no chuui ]",
        "vn": "[ Chú ý ở bể bơi ]"
      },
      {
        "kanji": "・ここで泳いではいけません。",
        "jp": "・ここで およいでは いけません。",
        "romaji": "- Koko de oyoide wa ikemasen.",
        "vn": "- Không được bơi ở đây."
      },
      {
        "kanji": "・走らないでください。",
        "jp": "・はしらないで ください。",
        "romaji": "- Hashiranaide kudasai.",
        "vn": "- Xin đừng chạy."
      },
      {
        "kanji": "・たばこを吸ってはいけません。",
        "jp": "・たばこを すっては いけません。",
        "romaji": "- Tabako o sutte wa ikemasen.",
        "vn": "- Không được hút thuốc."
      },
      {
        "kanji": "・シャワーを浴びてください。",
        "jp": "・シャワーを あびて ください。",
        "romaji": "- Shawaa o abite kudasai.",
        "vn": "- Xin hãy tắm vòi hoa sen."
      }
    ],
    "questions": [
      {
        "question": "ここで なにを しても いいですか？ (Ở đây được làm gì?)",
        "options": [
          "シャワーを あびます (Tắm vòi sen)",
          "およぎます (Bơi)",
          "はしります (Chạy)",
          "たばこを すいます (Hút thuốc)"
        ],
        "answer": "シャワーを あびます (Tắm vòi sen)"
      },
      {
        "question": "たばこを すっても いいですか？ (Hút thuốc được không?)",
        "options": [
          "いいえ、すってはいけません (Không, không được hút)",
          "はい、いいです (Vâng, được)",
          "はい、すってください (Vâng, hãy hút)",
          "わかりません (Không biết)"
        ],
        "answer": "いいえ、すってはいけません (Không, không được hút)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "山田さんは独身です。",
        "jp": "やまださんは どくしんです。",
        "romaji": "Yamada-san wa dokushin desu.",
        "vn": "Anh Yamada còn độc thân."
      },
      {
        "kanji": "コンピュータのソフトを作っています。",
        "jp": "コンピュータの ソフトを つくっています。",
        "romaji": "Konpyuuta no sofuto o tsukutte imasu.",
        "vn": "Anh ấy đang viết phần mềm máy tính."
      },
      {
        "kanji": "IMCで働いています。",
        "jp": "IMCで はたらいています。",
        "romaji": "IMC de hataraite imasu.",
        "vn": "Đang làm việc tại công ty IMC."
      },
      {
        "kanji": "毎晩11時まで仕事をしています。",
        "jp": "まいばん じゅういちじまで しごとを しています。",
        "romaji": "Maiban juuichi-ji made shigoto o shite imasu.",
        "vn": "Mỗi tối đều làm việc đến 11 giờ."
      },
      {
        "kanji": "とても忙しいですから、テレビを見ません。",
        "jp": "とても いそがしいですから、テレビを みません。",
        "romaji": "Totemo isogashii desukara, terebi o mimasen.",
        "vn": "Rất bận rộn nên không xem ti vi."
      }
    ],
    "questions": [
      {
        "question": "やまださんは けっこんしていますか？ (Anh Yamada đã kết hôn chưa?)",
        "options": [
          "いいえ、どくしんです (Chưa, đang độc thân)",
          "はい、けっこんしています (Rồi, đã kết hôn)",
          "わかりません (Không biết)",
          "はい、かぞくが います (Vâng, có gia đình)"
        ],
        "answer": "いいえ、どくしんです (Chưa, đang độc thân)"
      },
      {
        "question": "やまださんは なにを つくっていますか？ (Anh Yamada đang chế tạo cái gì?)",
        "options": [
          "コンピュータのソフト (Phần mềm máy tính)",
          "くるま (Ô tô)",
          "カメラ (Máy ảnh)",
          "テレビ (Ti vi)"
        ],
        "answer": "コンピュータのソフト (Phần mềm máy tính)"
      },
      {
        "question": "どうして テレビを みませんか？ (Tại sao không xem ti vi?)",
        "options": [
          "いそがしいですから (Vì bận rộn)",
          "テレビが ありませんから (Vì không có TV)",
          "テレビが きらいですから (Vì ghét TV)",
          "お金が ありませんから (Vì không có tiền)"
        ],
        "answer": "いそがしいですから (Vì bận rộn)"
      }
    ]
  }
];
