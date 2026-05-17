const fs = require('fs');
const path = require('path');

const readingsPath = (i) => path.join(process.cwd(), 'src', 'data', 'readings', `reading${i}.ts`);

function appendReadings(lessonNum, newReadings) {
  const filePath = readingsPath(lessonNum);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  const jsonStr = JSON.stringify(newReadings, null, 2);
  const innerStr = jsonStr.substring(1, jsonStr.length - 1).trim();
  
  const lastBracketIndex = content.lastIndexOf(']');
  if (lastBracketIndex === -1) return;

  const before = content.substring(0, lastBracketIndex).trimEnd();
  const after = content.substring(lastBracketIndex);
  
  const comma = before.endsWith('[') ? '' : ',';
  
  const newContent = `${before}${comma}\n${innerStr}\n${after}`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Added readings to lesson ${lessonNum}`);
}

// Lesson 19: 5 readings needed (Ta form, koto ga arimasu, tari tari)
appendReadings(19, [
  {
    "title": "ふじさんに のぼりました",
    "titleVn": "① Đã leo núi Phú Sĩ",
    "lines": [
      {
        "kanji": "A：マリアさん、富士山に登ったことがありますか。",
        "jp": "A：マリアさん、ふじさんに のぼったことが ありますか。",
        "romaji": "A: Maria-san, Fujisan ni nobotta koto ga arimasu ka.",
        "vn": "A: Maria, chị đã từng leo núi Phú Sĩ bao giờ chưa?"
      },
      {
        "kanji": "B：はい、あります。去年友達と登りました。",
        "jp": "B：はい、あります。きょねん ともだちと のぼりました。",
        "romaji": "B: Hai, arimasu. Kyonen tomodachi to noborimashita.",
        "vn": "B: Vâng, đã từng. Năm ngoái tôi đã leo cùng bạn bè."
      },
      {
        "kanji": "A：どうでしたか。",
        "jp": "A：どうでしたか。",
        "romaji": "A: Dou deshita ka.",
        "vn": "A: Cảm giác thế nào?"
      },
      {
        "kanji": "B：とても疲れました。",
        "jp": "B：とても つかれました。",
        "romaji": "B: Totemo tsukaremashita.",
        "vn": "B: Rất mệt."
      },
      {
        "kanji": "B：でも、景色が綺麗でしたよ。",
        "jp": "B：でも、けしきが きれいでしたよ。",
        "romaji": "B: Demo, keshiki ga kirei deshita yo.",
        "vn": "B: Nhưng mà phong cảnh rất đẹp."
      }
    ],
    "questions": [
      {
        "question": "マリアさんは ふじさんに のぼったことが ありますか？ (Maria đã từng leo núi Phú Sĩ chưa?)",
        "options": ["はい、あります (Vâng, đã từng)", "いいえ、ありません (Không, chưa từng)", "これから のぼります (Từ giờ sẽ leo)", "わかりません (Không biết)"],
        "answer": "はい、あります (Vâng, đã từng)"
      },
      {
        "question": "ふじさんは どうでしたか？ (Núi Phú Sĩ thế nào?)",
        "options": ["つかれましたが、きれいでした (Mệt nhưng mà đẹp)", "つかれなくて、きれいでした (Không mệt và đẹp)", "つかれましたが、きれいじゃありませんでした (Mệt và không đẹp)", "つかれなくて、きれいじゃありませんでした (Không mệt và không đẹp)"],
        "answer": "つかれましたが、きれいでした (Mệt nhưng mà đẹp)"
      }
    ]
  },
  {
    "title": "にちようびの こと",
    "titleVn": "② Việc của ngày Chủ nhật",
    "lines": [
      {
        "kanji": "昨日は日曜日でした。",
        "jp": "きのうは にちようびでした。",
        "romaji": "Kinou wa nichiyoubi deshita.",
        "vn": "Hôm qua là Chủ nhật."
      },
      {
        "kanji": "私は朝、洗濯したり、掃除したりしました。",
        "jp": "わたしは あさ、せんたくしたり、そうじしたり しました。",
        "romaji": "Watashi wa asa, sentakushitari, soujishitari shimashita.",
        "vn": "Buổi sáng tôi giặt giũ, dọn dẹp nhà cửa."
      },
      {
        "kanji": "午後はスーパーへ買い物に行きました。",
        "jp": "ごごは スーパーへ かいものに いきました。",
        "romaji": "Gogo wa suupaa e kaimono ni ikimasu.",
        "vn": "Buổi chiều tôi đi siêu thị mua sắm."
      },
      {
        "kanji": "夜、テレビを見たり、本を読んだりしました。",
        "jp": "よる、テレビを みたり、ほんを よんだり しました。",
        "romaji": "Yoru, terebi o mitari, hon o yondari shimashita.",
        "vn": "Buổi tối, tôi xem ti vi, đọc sách."
      },
      {
        "kanji": "とてもゆっくり休みました。",
        "jp": "とても ゆっくり やすみました。",
        "romaji": "Totemo yukkuri yasumimashita.",
        "vn": "Tôi đã nghỉ ngơi rất thư giãn."
      }
    ],
    "questions": [
      {
        "question": "あさ なにを しましたか？ (Buổi sáng đã làm gì?)",
        "options": ["せんたくしたり、そうじしたり しました (Giặt giũ, dọn dẹp)", "テレビを みたり、ほんを よんだり しました (Xem TV, đọc sách)", "スーパーへ かいものに いきました (Đi siêu thị mua sắm)", "ゆっくり やすみました (Nghỉ ngơi thư giãn)"],
        "answer": "せんたくしたり、そうじしたり しました (Giặt giũ, dọn dẹp)"
      },
      {
        "question": "よる なにを しましたか？ (Buổi tối đã làm gì?)",
        "options": ["テレビを みたり、ほんを よんだり しました (Xem TV, đọc sách)", "せんたくしたり、そうじしたり しました (Giặt giũ, dọn dẹp)", "スーパーへ かいものに いきました (Đi siêu thị mua sắm)", "おふろに はいりました (Đã đi tắm)"],
        "answer": "テレビを みたり、ほんを よんだり しました (Xem TV, đọc sách)"
      }
    ]
  },
  {
    "title": "すしを たべますか",
    "titleVn": "③ Ăn Sushi không?",
    "lines": [
      {
        "kanji": "A：すしを食べたことがありますか。",
        "jp": "A：すしを たべたことが ありますか。",
        "romaji": "A: Sushi o tabeta koto ga arimasu ka.",
        "vn": "A: Bạn đã từng ăn sushi chưa?"
      },
      {
        "kanji": "B：いいえ、一度もありません。",
        "jp": "B：いいえ、いちども ありません。",
        "romaji": "B: Iie, ichido mo arimasen.",
        "vn": "B: Chưa, chưa từng ăn một lần nào."
      },
      {
        "kanji": "A：美味しいですよ。今度、一緒に食べに行きませんか。",
        "jp": "A：おいしいですよ。こんど、いっしょに たべに いきませんか。",
        "romaji": "A: Oishii desuyo. Kondo, issho ni tabeni ikimasen ka.",
        "vn": "A: Ngon lắm đấy. Lần tới, đi ăn cùng nhau không?"
      },
      {
        "kanji": "B：ええ、ぜひ食べたいです。",
        "jp": "B：ええ、ぜひ たべたいです。",
        "romaji": "B: Ee, zehi tabetai desu.",
        "vn": "B: Vâng, nhất định tôi muốn ăn thử."
      },
      {
        "kanji": "A：じゃ、来週の金曜日に行きましょう。",
        "jp": "A：じゃ、らいしゅうの きんようびに いきましょう。",
        "romaji": "A: Ja, raishuu no kinyoubi ni ikimashou.",
        "vn": "A: Vậy, thứ sáu tuần sau đi nhé."
      }
    ],
    "questions": [
      {
        "question": "Bさんは すしを たべたことが ありますか？ (Người B đã từng ăn sushi chưa?)",
        "options": ["いいえ、ありません (Không, chưa từng)", "はい、あります (Vâng, đã từng)", "はい、いちど あります (Vâng, đã ăn một lần)", "わかりません (Không biết)"],
        "answer": "いいえ、ありません (Không, chưa từng)"
      },
      {
        "question": "ふたりは いつ すしを たべに いきますか？ (Hai người sẽ đi ăn sushi khi nào?)",
        "options": ["らいしゅうの きんようび (Thứ sáu tuần sau)", "こんしゅうの きんようび (Thứ sáu tuần này)", "あした (Ngày mai)", "こんどの にちようび (Chủ nhật tới)"],
        "answer": "らいしゅうの きんようび (Thứ sáu tuần sau)"
      }
    ]
  },
  {
    "title": "ダイエット",
    "titleVn": "④ Ăn kiêng (Diet)",
    "lines": [
      {
        "kanji": "私は最近少し太りました。",
        "jp": "わたしは さいきん すこし ふとりました。",
        "romaji": "Watashi wa saikin sukoshi futorimashita.",
        "vn": "Gần đây tôi hơi béo lên."
      },
      {
        "kanji": "ですから、今、ダイエットをしています。",
        "jp": "ですから、いま、ダイエットを しています。",
        "romaji": "Desukara, ima, daietto o shite imasu.",
        "vn": "Vì thế, bây giờ tôi đang ăn kiêng."
      },
      {
        "kanji": "毎日、走ったり、泳いだりしています。",
        "jp": "まいにち、はしったり、およいだり しています。",
        "romaji": "Mainichi, hashittari, oyoidari shite imasu.",
        "vn": "Mỗi ngày, tôi chạy bộ, bơi lội."
      },
      {
        "kanji": "甘い物を食べないようにしています。",
        "jp": "あまい ものを たべない ように しています。",
        "romaji": "Amai mono o tabenai youni shite imasu.",
        "vn": "Cố gắng không ăn đồ ngọt."
      },
      {
        "kanji": "早く細くなりたいです。",
        "jp": "はやく ほそく なりたいです。",
        "romaji": "Hayaku hosoku naritai desu.",
        "vn": "Muốn mau chóng gầy đi."
      }
    ],
    "questions": [
      {
        "question": "このひとは どうして ダイエットを していますか？ (Tại sao người này đang ăn kiêng?)",
        "options": ["ふとりましたから (Vì đã béo lên)", "びょうきですから (Vì bị ốm)", "スポーツが すきですから (Vì thích thể thao)", "ほそいですから (Vì gầy)"],
        "answer": "ふとりましたから (Vì đã béo lên)"
      },
      {
        "question": "ダイエットのために なにを していますか？ (Làm gì để giảm cân?)",
        "options": ["はしったり、およいだり しています (Chạy bộ, bơi lội)", "あまいものを たくさん たべます (Ăn nhiều đồ ngọt)", "テレビを みます (Xem TV)", "ねます (Ngủ)"],
        "answer": "はしったり、およいだり しています (Chạy bộ, bơi lội)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "木村さんは来月、中国へ行きます。",
        "jp": "きむらさんは らいげつ、ちゅうごくへ いきます。",
        "romaji": "Kimura-san wa raigetsu, Chuugoku e ikimasu.",
        "vn": "Tháng sau anh Kimura sẽ đi Trung Quốc."
      },
      {
        "kanji": "木村さんは中国へ行ったことがありません。",
        "jp": "きむらさんは ちゅうごくへ いったことが ありません。",
        "romaji": "Kimura-san wa Chuugoku e itta koto ga arimasen.",
        "vn": "Anh Kimura chưa từng đi Trung Quốc bao giờ."
      },
      {
        "kanji": "ですから、今、中国語を勉強しています。",
        "jp": "ですから、いま、ちゅうごくごを べんきょうしています。",
        "romaji": "Desukara, ima, Chuugokugo o benkyoushite imasu.",
        "vn": "Vì thế, bây giờ anh ấy đang học tiếng Trung."
      },
      {
        "kanji": "中国で美味しい物を食べたり、写真を撮ったりしたいです。",
        "jp": "ちゅうごくで おいしい ものを たべたり、しゃしんを とったり したいです。",
        "romaji": "Chuugoku de oishii mono o tabetari, shashin o tottari shitai desu.",
        "vn": "Anh ấy muốn ăn đồ ngon và chụp ảnh ở Trung Quốc."
      },
      {
        "kanji": "とても楽しみです。",
        "jp": "とても たのしみです。",
        "romaji": "Totemo tanoshimi desu.",
        "vn": "Rất là mong đợi."
      }
    ],
    "questions": [
      {
        "question": "きむらさんは ちゅうごくへ いったことが ありますか？ (Kimura đã từng đi Trung Quốc chưa?)",
        "options": ["いいえ、ありません (Không, chưa từng)", "はい、あります (Vâng, đã từng)", "はい、いちど あります (Vâng, từng đi một lần)", "わかりません (Không biết)"],
        "answer": "いいえ、ありません (Không, chưa từng)"
      },
      {
        "question": "ちゅうごくで なにを したいですか？ (Muốn làm gì ở Trung Quốc?)",
        "options": ["おいしいものを たべたり、しゃしんを とったり したいです (Muốn ăn đồ ngon, chụp ảnh)", "ちゅうごくごを べんきょうしたいです (Muốn học tiếng Trung)", "ともだちに あいたいです (Muốn gặp bạn bè)", "しごとを したいです (Muốn làm việc)"],
        "answer": "おいしいものを たべたり、しゃしんを とったり したいです (Muốn ăn đồ ngon, chụp ảnh)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "きむらさんは いま ちゅうごくごを べんきょうしています。(Kimura bây giờ đang học tiếng Trung)",
          "きむらさんは ちゅうごくごが じょうずです。(Kimura giỏi tiếng Trung)",
          "きむらさんは らいげつ アメリカへ いきます。(Tháng sau Kimura đi Mỹ)",
          "きむらさんは ちゅうごくが きらいです。(Kimura ghét Trung Quốc)"
        ],
        "answer": "きむらさんは いま ちゅうごくごを べんきょうしています。(Kimura bây giờ đang học tiếng Trung)"
      }
    ]
  }
]);

// Lesson 20: 5 readings needed (Plain form)
appendReadings(20, [
  {
    "title": "あした ひま？",
    "titleVn": "① Ngày mai rảnh không?",
    "lines": [
      {
        "kanji": "A：明日、暇？",
        "jp": "A：あした、ひま？",
        "romaji": "A: Ashita, hima?",
        "vn": "A: Ngày mai, rảnh không?"
      },
      {
        "kanji": "B：ううん、暇じゃない。どうして？",
        "jp": "B：ううん、ひまじゃない。どうして？",
        "romaji": "B: Uun, hima janai. Doushite?",
        "vn": "B: Không, không rảnh. Sao vậy?"
      },
      {
        "kanji": "A：映画を見に行かない？",
        "jp": "A：えいがを みに いかない？",
        "romaji": "A: Eiga o mi ni ikanai?",
        "vn": "A: Có đi xem phim không?"
      },
      {
        "kanji": "B：いいね。でも、明日は仕事がある。",
        "jp": "B：いいね。でも、あしたは しごとが ある。",
        "romaji": "B: Ii ne. Demo, ashita wa shigoto ga aru.",
        "vn": "B: Hay đấy. Nhưng ngày mai có công việc."
      },
      {
        "kanji": "A：そうか。じゃ、また今度ね。",
        "jp": "A：そうか。じゃ、また こんどね。",
        "romaji": "A: Sou ka. Ja, mata kondo ne.",
        "vn": "A: Vậy à. Thế thì hẹn lần sau nhé."
      }
    ],
    "questions": [
      {
        "question": "Aさんは Bさんを なにに さそいましたか？ (Người A đã rủ người B đi đâu?)",
        "options": ["えいが (Xem phim)", "しょくじ (Ăn uống)", "かいもの (Mua sắm)", "おまつり (Lễ hội)"],
        "answer": "えいが (Xem phim)"
      },
      {
        "question": "Bさんは えいがを みに いきますか？ (Người B có đi xem phim không?)",
        "options": ["いいえ、いきません (Không, không đi)", "はい、いきます (Vâng, có đi)", "わかりません (Không biết)", "あした いきます (Ngày mai sẽ đi)"],
        "answer": "いいえ、いきません (Không, không đi)"
      }
    ]
  },
  {
    "title": "きのうの パーティー",
    "titleVn": "② Bữa tiệc hôm qua",
    "lines": [
      {
        "kanji": "A：昨日のパーティー、どうだった？",
        "jp": "A：きのうの パーティー、どうだった？",
        "romaji": "A: Kinou no paatii, dou datta?",
        "vn": "A: Bữa tiệc hôm qua thế nào?"
      },
      {
        "kanji": "B：とても楽しかったよ。料理も美味しかった。",
        "jp": "B：とても たのしかったよ。りょうりも おいしかった。",
        "romaji": "B: Totemo tanoshikatta yo. Ryouri mo oishikatta.",
        "vn": "B: Rất vui. Thức ăn cũng ngon nữa."
      },
      {
        "kanji": "A：そう。誰が来た？",
        "jp": "A：そう。だれが きた？",
        "romaji": "A: Sou. Dare ga kita?",
        "vn": "A: Vậy à. Những ai đã đến?"
      },
      {
        "kanji": "B：田中さんや鈴木さんが来たよ。",
        "jp": "B：たなかさんや すずきさんが きたよ。",
        "romaji": "B: Tanaka-san ya Suzuki-san ga kita yo.",
        "vn": "B: Có anh Tanaka và chị Suzuki đến đấy."
      },
      {
        "kanji": "A：山田さんは？",
        "jp": "A：やまださんは？",
        "romaji": "A: Yamada-san wa?",
        "vn": "A: Anh Yamada thì sao?"
      },
      {
        "kanji": "B：山田さんは来なかった。",
        "jp": "B：やまださんは こなかった。",
        "romaji": "B: Yamada-san wa konakatta.",
        "vn": "B: Anh Yamada không đến."
      }
    ],
    "questions": [
      {
        "question": "パーティーは どうでしたか？ (Bữa tiệc như thế nào?)",
        "options": ["たのしくて、おいしかった (Vui và ngon)", "つまらなくて、まずかった (Chán và dở)", "たのしかったけど、まずかった (Vui nhưng mà dở)", "つまらなくて、おいしかった (Chán nhưng mà ngon)"],
        "answer": "たのしくて、おいしかった (Vui và ngon)"
      },
      {
        "question": "だれが パーティーに こなかったですか？ (Ai đã không đến bữa tiệc?)",
        "options": ["やまださん (Anh Yamada)", "たなかさん (Anh Tanaka)", "すずきさん (Chị Suzuki)", "だれも こなかった (Không ai đến)"],
        "answer": "やまださん (Anh Yamada)"
      }
    ]
  },
  {
    "title": "こんしゅうの やすみ",
    "titleVn": "③ Ngày nghỉ tuần này",
    "lines": [
      {
        "kanji": "A：今週の休み、どこへ行く？",
        "jp": "A：こんしゅうの やすみ、どこへ いく？",
        "romaji": "A: Konshuu no yasumi, doko e iku?",
        "vn": "A: Ngày nghỉ tuần này, sẽ đi đâu?"
      },
      {
        "kanji": "B：京都へ行くつもり。",
        "jp": "B：きょうとへ いく つもり。",
        "romaji": "B: Kyouto e iku tsumori.",
        "vn": "B: Dự định sẽ đi Kyoto."
      },
      {
        "kanji": "A：いいなあ。誰と行くの？",
        "jp": "A：いいなあ。だれと いくの？",
        "romaji": "A: Ii naa. Dare to iku no?",
        "vn": "A: Thích thế. Sẽ đi với ai?"
      },
      {
        "kanji": "B：友達と。Aさんも一緒に行かない？",
        "jp": "B：ともだちと。Aさんも いっしょに いかない？",
        "romaji": "B: Tomodachi to. A-san mo issho ni ikanai?",
        "vn": "B: Với bạn bè. Người A có đi cùng không?"
      },
      {
        "kanji": "A：ううん、私はやめておく。お金がないから。",
        "jp": "A：ううん、わたしは やめておく。おかねが ないから。",
        "romaji": "A: Uun, watashi wa yamete oku. Okane ga nai kara.",
        "vn": "A: Không, tôi không đi đâu. Vì không có tiền."
      }
    ],
    "questions": [
      {
        "question": "Bさんは どこへ いきますか？ (Người B sẽ đi đâu?)",
        "options": ["きょうと (Kyoto)", "とうきょう (Tokyo)", "おおさか (Osaka)", "どこも いかない (Không đi đâu)"],
        "answer": "きょうと (Kyoto)"
      },
      {
        "question": "Aさんは どうして いきませんか？ (Tại sao người A không đi?)",
        "options": ["お金が ないから (Vì không có tiền)", "ようじが あるから (Vì có việc bận)", "きょうとが きらいだから (Vì ghét Kyoto)", "ともだちが いないから (Vì không có bạn bè)"],
        "answer": "お金が ないから (Vì không có tiền)"
      }
    ]
  },
  {
    "title": "わたしの へや",
    "titleVn": "④ Phòng của tôi (Plain form)",
    "lines": [
      {
        "kanji": "私の部屋は狭い。でも、とても便利だ。",
        "jp": "わたしの へやは せまい。でも、とても べんりだ。",
        "romaji": "Watashi no heya wa semai. Demo, totemo benri da.",
        "vn": "Phòng của tôi thì chật. Nhưng rất tiện lợi."
      },
      {
        "kanji": "駅に近いし、近くにスーパーもある。",
        "jp": "えきに ちかいし、ちかくに スーパーも ある。",
        "romaji": "Eki ni chikai shi, chikaku ni suupaa mo aru.",
        "vn": "Vừa gần nhà ga, lại vừa có siêu thị ở gần."
      },
      {
        "kanji": "家賃も安い。",
        "jp": "やちんも やすい。",
        "romaji": "Yachin mo yasui.",
        "vn": "Tiền thuê nhà cũng rẻ."
      },
      {
        "kanji": "新しい部屋へ引っ越さない？と友達は言う。",
        "jp": "あたらしい へやへ ひっこさない？と ともだちは いう。",
        "romaji": "Atarashii heya e hikkosanai? to tomodachi wa iu.",
        "vn": "Bạn bè hay hỏi 'Sao không chuyển sang phòng mới đi?'."
      },
      {
        "kanji": "でも、私は今の部屋が好きだ。",
        "jp": "でも、わたしは いまの へやが すきだ。",
        "romaji": "Demo, watashi wa ima no heya ga suki da.",
        "vn": "Nhưng, tôi thích căn phòng hiện tại."
      }
    ],
    "questions": [
      {
        "question": "このひとの へやは どうですか？ (Căn phòng của người này như thế nào?)",
        "options": ["せまいけど、べんりだ (Chật nhưng tiện lợi)", "ひろくて、べんりだ (Rộng và tiện lợi)", "せまくて、ふべんだ (Chật và bất tiện)", "ひろいけど、ふべんだ (Rộng nhưng bất tiện)"],
        "answer": "せまいけど、べんりだ (Chật nhưng tiện lợi)"
      },
      {
        "question": "このひとは ひっこしますか？ (Người này có chuyển nhà không?)",
        "options": ["ひっこさない (Không chuyển)", "ひっこす (Sẽ chuyển)", "わからない (Không biết)", "ともだちと ひっこす (Chuyển với bạn)"],
        "answer": "ひっこさない (Không chuyển)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "山田：木村さん、昨日のテレビ、見た？",
        "jp": "やまだ：きむらさん、きのうの テレビ、みた？",
        "romaji": "Yamada: Kimura-san, kinou no terebi, mita?",
        "vn": "Yamada: Kimura, cậu có xem TV hôm qua không?"
      },
      {
        "kanji": "木村：ううん、見なかった。面白かった？",
        "jp": "きむら：ううん、みなかった。おもしろかった？",
        "romaji": "Kimura: Uun, minakatta. Omoshirokatta?",
        "vn": "Kimura: Không, tớ không xem. Thú vị không?"
      },
      {
        "kanji": "山田：うん、すごく面白かったよ。",
        "jp": "やまだ：うん、すごく おもしろかったよ。",
        "romaji": "Yamada: Un, sugoku omoshirokatta yo.",
        "vn": "Yamada: Có, rất là thú vị đấy."
      },
      {
        "kanji": "木村：どんなテレビだった？",
        "jp": "きむら：どんな テレビだった？",
        "romaji": "Kimura: Donna terebi datta?",
        "vn": "Kimura: Đó là chương trình TV như thế nào?"
      },
      {
        "kanji": "山田：日本の昔の映画だった。今度DVDを貸すよ。",
        "jp": "やまだ：にほんの むかしの えいかだった。こんど DVDを かすよ。",
        "romaji": "Yamada: Nihon no mukashi no eiga datta. Kondo DVD o kasu yo.",
        "vn": "Yamada: Là phim cũ của Nhật. Lần tới tớ sẽ cho mượn DVD."
      }
    ],
    "questions": [
      {
        "question": "きむらさんは きのう テレビを みましたか？ (Kimura hôm qua có xem TV không?)",
        "options": ["いいえ、みなかったです (Không, không xem)", "はい、みました (Vâng, có xem)", "すこし みました (Có xem một chút)", "わかりません (Không biết)"],
        "answer": "いいえ、みなかったです (Không, không xem)"
      },
      {
        "question": "やまださんは なにを みましたか？ (Yamada đã xem cái gì?)",
        "options": ["にほんの むかしの えいが (Phim cũ của Nhật)", "アメリカの えいが (Phim Mỹ)", "にほんの アニメ (Anime Nhật)", "にゅーす (Bản tin thời sự)"],
        "answer": "にほんの むかしの えいが (Phim cũ của Nhật)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "やまださんは きむらさんに DVDを かします。(Yamada sẽ cho Kimura mượn DVD)",
          "きむらさんは やまださんに DVDを かします。(Kimura sẽ cho Yamada mượn DVD)",
          "やまださんは テレビを みませんでした。(Yamada đã không xem TV)",
          "テレビは つまらなかったです。(Chương trình TV thì chán)"
        ],
        "answer": "やまださんは きむらさんに DVDを かします。(Yamada sẽ cho Kimura mượn DVD)"
      }
    ]
  }
]);

// Lesson 21: 5 readings needed (~to omoimasu, ~to iimashita)
appendReadings(21, [
  {
    "title": "あしたの てんき",
    "titleVn": "① Thời tiết ngày mai",
    "lines": [
      {
        "kanji": "A：明日の天気はどうだと思いますか。",
        "jp": "A：あしたの てんきは どうだと おもいますか。",
        "romaji": "A: Ashita no tenki wa dou da to omoimasu ka.",
        "vn": "A: Bạn nghĩ thời tiết ngày mai sẽ thế nào?"
      },
      {
        "kanji": "B：明日もいい天気だと思います。",
        "jp": "B：あしたも いい てんきだと おもいます。",
        "romaji": "B: Ashita mo ii tenki da to omoimasu.",
        "vn": "B: Tôi nghĩ ngày mai thời tiết cũng sẽ đẹp."
      },
      {
        "kanji": "A：ニュースで何と言っていましたか。",
        "jp": "A：ニュースで なんと いって いましたか。",
        "romaji": "A: Nyuusu de nan to itte imashita ka.",
        "vn": "A: Trong bản tin thời sự đã nói gì?"
      },
      {
        "kanji": "B：「明日は晴れるでしょう」と言っていましたよ。",
        "jp": "B：「あしたは はれるでしょう」と いって いましたよ。",
        "romaji": "B: \"Ashita wa hareru deshou\" to itte imashita yo.",
        "vn": "B: Đã nói là 'Ngày mai có lẽ sẽ nắng'."
      },
      {
        "kanji": "A：じゃ、ピクニックに行きましょう。",
        "jp": "A：じゃ、ピクニックに いきましょう。",
        "romaji": "A: Ja, pikunikku ni ikimashou.",
        "vn": "A: Vậy thì đi dã ngoại đi."
      }
    ],
    "questions": [
      {
        "question": "あしたの てんきは どうだと おもいますか？ (Bạn nghĩ thời tiết ngày mai thế nào?)",
        "options": ["いい てんきだと おもいます (Tôi nghĩ là đẹp)", "あめだと おもいます (Tôi nghĩ là mưa)", "ゆきだと おもいます (Tôi nghĩ là có tuyết)", "わるい てんきだと おもいます (Tôi nghĩ là thời tiết xấu)"],
        "answer": "いい てんきだと おもいます (Tôi nghĩ là đẹp)"
      },
      {
        "question": "ニュースで なんと いっていましたか？ (Bản tin đã nói gì?)",
        "options": ["あしたは はれると いっていました (Đã nói là ngày mai sẽ nắng)", "あしたは あめだと いっていました (Đã nói là ngày mai có mưa)", "あしたは さむいと いっていました (Đã nói là ngày mai lạnh)", "あしたは ゆきだと いっていました (Đã nói là ngày mai có tuyết)"],
        "answer": "あしたは はれると いっていました (Đã nói là ngày mai sẽ nắng)"
      }
    ]
  },
  {
    "title": "あたらしい ケータイ",
    "titleVn": "② Điện thoại mới",
    "lines": [
      {
        "kanji": "A：この新しい携帯、どう思いますか。",
        "jp": "A：この あたらしい ケータイ、どう おもいますか。",
        "romaji": "A: Kono atarashii keitai, dou omoimasu ka.",
        "vn": "A: Điện thoại mới này, bạn nghĩ thế nào?"
      },
      {
        "kanji": "B：とても小さくて、便利だと思います。",
        "jp": "B：とても ちいさくて、べんりだと おもいます。",
        "romaji": "B: Totemo chiisakute, benri da to omoimasu.",
        "vn": "B: Tôi nghĩ là nó rất nhỏ và tiện lợi."
      },
      {
        "kanji": "A：でも、少し高いと思いませんか。",
        "jp": "A：でも、すこし たかいと おもいませんか。",
        "romaji": "A: Demo, sukoshi takai to omoimasen ka.",
        "vn": "A: Nhưng bạn không nghĩ là nó hơi đắt sao?"
      },
      {
        "kanji": "B：そうですね。私は買わないと思います。",
        "jp": "B：そうですね。わたしは かわないと おもいます。",
        "romaji": "B: Sou desu ne. Watashi wa kawanai to omoimasu.",
        "vn": "B: Đúng vậy nhỉ. Tôi nghĩ là tôi sẽ không mua."
      },
      {
        "kanji": "A：私もそう思います。",
        "jp": "A：わたしも そう おもいます。",
        "romaji": "A: Watashi mo sou omoimasu.",
        "vn": "A: Tôi cũng nghĩ vậy."
      }
    ],
    "questions": [
      {
        "question": "Bさんは あたらしいケータイについて どう おもいますか？ (Người B nghĩ thế nào về điện thoại mới?)",
        "options": ["ちいさくて べんりだと おもいます (Nghĩ là nhỏ và tiện)", "おおきくて ふべんだと おもいます (Nghĩ là to và bất tiện)", "ちいさくて ふべんだと おもいます (Nghĩ là nhỏ và bất tiện)", "おおきくて べんりだと おもいます (Nghĩ là to và tiện)"],
        "answer": "ちいさくて べんりだと おもいます (Nghĩ là nhỏ và tiện)"
      },
      {
        "question": "Bさんは ケータイを かいますか？ (Người B có mua điện thoại không?)",
        "options": ["かわないと おもいます (Nghĩ là sẽ không mua)", "かうと おもいます (Nghĩ là sẽ mua)", "もう かいました (Đã mua rồi)", "わかりません (Không biết)"],
        "answer": "かわないと おもいます (Nghĩ là sẽ không mua)"
      }
    ]
  },
  {
    "title": "えいがの かんそう",
    "titleVn": "③ Cảm nhận về bộ phim",
    "lines": [
      {
        "kanji": "昨日、日本の映画を見ました。",
        "jp": "きのう、にほんの えいがを みました。",
        "romaji": "Kinou, Nihon no eiga o mimashita.",
        "vn": "Hôm qua tôi đã xem một bộ phim Nhật Bản."
      },
      {
        "kanji": "とてもいい映画だったと思います。",
        "jp": "とても いい えいがだったと おもいます。",
        "romaji": "Totemo ii eiga datta to omoimasu.",
        "vn": "Tôi nghĩ đó là một bộ phim rất hay."
      },
      {
        "kanji": "友達も「面白かった」と言っていました。",
        "jp": "ともだちも「おもしろかった」と いっていました。",
        "romaji": "Tomodachi mo 'omoshirokatta' to itte imashita.",
        "vn": "Bạn tôi cũng nói rằng 'Phim thú vị đấy'."
      },
      {
        "kanji": "少し長かったですが、全然眠くなかったです。",
        "jp": "すこし ながかったですが、ぜんぜん ねむくなかったです。",
        "romaji": "Sukoshi nagakatta desu ga, zenzen nemukunakatta desu.",
        "vn": "Dù hơi dài một chút, nhưng tôi hoàn toàn không thấy buồn ngủ."
      },
      {
        "kanji": "また見たいと思います。",
        "jp": "また みたいと おもいます。",
        "romaji": "Mata mitai to omoimasu.",
        "vn": "Tôi nghĩ là tôi muốn xem lại."
      }
    ],
    "questions": [
      {
        "question": "えいがは どうだったと おもいますか？ (Nghĩ bộ phim đã như thế nào?)",
        "options": ["いい えいがだったと おもいます (Nghĩ là phim hay)", "つまらない えいがだったと おもいます (Nghĩ là phim chán)", "わるい えいがだったと おもいます (Nghĩ là phim tệ)", "みじかかったと おもいます (Nghĩ là phim ngắn)"],
        "answer": "いい えいがだったと おもいます (Nghĩ là phim hay)"
      },
      {
        "question": "ともだちは なんと いっていましたか？ (Bạn đã nói gì?)",
        "options": ["「おもしろかった」と いっていました (Đã nói là thú vị)", "「つまらなかった」と いっていました (Đã nói là chán)", "「ながかった」と いっていました (Đã nói là dài)", "「ねむかった」と いっていました (Đã nói là buồn ngủ)"],
        "answer": "「おもしろかった」と いっていました (Đã nói là thú vị)"
      }
    ]
  },
  {
    "title": "あしたの かいぎ",
    "titleVn": "④ Cuộc họp ngày mai",
    "lines": [
      {
        "kanji": "A：部長、明日の会議は何時からですか。",
        "jp": "A：ぶちょう、あしたの かいぎは なんじから ですか。",
        "romaji": "A: Buchou, ashita no kaigi wa nanji kara desu ka.",
        "vn": "A: Trưởng phòng, cuộc họp ngày mai từ mấy giờ ạ?"
      },
      {
        "kanji": "B：10時からだと思います。",
        "jp": "B：じゅうじからだと おもいます。",
        "romaji": "B: Juuji kara da to omoimasu.",
        "vn": "B: Tôi nghĩ là từ 10 giờ."
      },
      {
        "kanji": "A：山田さんも会議に出ますか。",
        "jp": "A：やまださんも かいぎに でますか。",
        "romaji": "A: Yamada-san mo kaigi ni demasu ka.",
        "vn": "A: Anh Yamada cũng tham gia họp chứ?"
      },
      {
        "kanji": "B：いいえ、山田さんは出ないと思います。",
        "jp": "B：いいえ、やまださんは でないと おもいます。",
        "romaji": "B: Iie, Yamada-san wa denai to omoimasu.",
        "vn": "B: Không, tôi nghĩ Yamada sẽ không tham gia."
      },
      {
        "kanji": "B：出張に行くと言っていましたから。",
        "jp": "B：しゅっちょうに いくと いって いましたから。",
        "romaji": "B: Shucchou ni iku to itte imashita kara.",
        "vn": "B: Vì anh ấy đã nói là sẽ đi công tác."
      }
    ],
    "questions": [
      {
        "question": "かいぎは なんじからだと おもいますか？ (Nghĩ là cuộc họp từ mấy giờ?)",
        "options": ["10じからだと おもいます (Nghĩ là từ 10 giờ)", "9じからだと おもいます (Nghĩ là từ 9 giờ)", "11じからだと おもいます (Nghĩ là từ 11 giờ)", "8じからだと おもいます (Nghĩ là từ 8 giờ)"],
        "answer": "10じからだと おもいます (Nghĩ là từ 10 giờ)"
      },
      {
        "question": "やまださんは どうして かいぎに でませんか？ (Tại sao Yamada không họp?)",
        "options": ["しゅっちょうに いくと いっていましたから (Vì đã nói là đi công tác)", "びょうきだと いっていましたから (Vì đã nói là bị ốm)", "やすむと いっていましたから (Vì đã nói là sẽ nghỉ)", "いそがしいと いっていましたから (Vì đã nói là bận)"],
        "answer": "しゅっちょうに いくと いっていましたから (Vì đã nói là đi công tác)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "日本では、家に入るとき、靴を脱ぎます。",
        "jp": "にほんでは、いえに はいるとき、くつを ぬぎます。",
        "romaji": "Nihon de wa, ie ni hairu toki, kutsu o nugimasu.",
        "vn": "Ở Nhật Bản, khi vào nhà phải cởi giày."
      },
      {
        "kanji": "これはとてもいい習慣だと思います。",
        "jp": "これは とても いい しゅうかんだと おもいます。",
        "romaji": "Kore wa totemo ii shuukan da to omoimasu.",
        "vn": "Tôi nghĩ đây là một tập quán rất tốt."
      },
      {
        "kanji": "部屋が汚くならないからです。",
        "jp": "へやが きたなく ならない からです。",
        "romaji": "Heya ga kitanaku naranai kara desu.",
        "vn": "Bởi vì phòng sẽ không bị bẩn."
      },
      {
        "kanji": "私の国の友達も、「日本は綺麗だ」と言っていました。",
        "jp": "わたしの くにの ともだちも、「にほんは きれいだ」と いっていました。",
        "romaji": "Watashi no kuni no tomodachi mo, 'Nihon wa kirei da' to itte imashita.",
        "vn": "Bạn bè ở nước tôi cũng đã nói rằng 'Nhật Bản sạch sẽ'."
      },
      {
        "kanji": "私もそう思います。",
        "jp": "わたしも そう おもいます。",
        "romaji": "Watashi mo sou omoimasu.",
        "vn": "Tôi cũng nghĩ như vậy."
      }
    ],
    "questions": [
      {
        "question": "にほんでは いえに はいるとき どうしますか？ (Ở Nhật khi vào nhà thì làm gì?)",
        "options": ["くつを ぬぎます (Cởi giày)", "くつを はきます (Đi giày)", "くつを あらいます (Rửa giày)", "くつを かいます (Mua giày)"],
        "answer": "くつを ぬぎます (Cởi giày)"
      },
      {
        "question": "このひとは くつをぬぐことを どう おもいますか？ (Người này nghĩ thế nào về việc cởi giày?)",
        "options": ["いい しゅうかんだと おもいます (Nghĩ là tập quán tốt)", "わるい しゅうかんだと おもいます (Nghĩ là tập quán xấu)", "ふべんだと おもいます (Nghĩ là bất tiện)", "めんどくさいと おもいます (Nghĩ là phiền phức)"],
        "answer": "いい しゅうかんだと おもいます (Nghĩ là tập quán tốt)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "ともだちは「にほんはきれいだ」と いっていました。(Bạn đã nói là Nhật Bản sạch)",
          "ともだちは「にほんはきたない」と いっていました。(Bạn đã nói là Nhật Bản bẩn)",
          "このひとは くつをぬぐのは よくないと おもっています。(Người này nghĩ cởi giày là không tốt)",
          "にほんの いえは きたないです。(Nhà ở Nhật thì bẩn)"
        ],
        "answer": "ともだちは「にほんはきれいだ」と いっていました。(Bạn đã nói là Nhật Bản sạch)"
      }
    ]
  }
]);
