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

// Lesson 22: 5 readings needed (Relative clauses)
appendReadings(22, [
  {
    "title": "あたらしい ひと",
    "titleVn": "① Người mới",
    "lines": [
      {
        "kanji": "A：あそこで新聞を読んでいる人は誰ですか。",
        "jp": "A：あそこで しんぶんを よんでいる ひとは だれですか。",
        "romaji": "A: Asoko de shinbun o yonde iru hito wa dare desu ka.",
        "vn": "A: Người đang đọc báo ở đằng kia là ai vậy?"
      },
      {
        "kanji": "B：ああ、あの人は新しい先生です。",
        "jp": "B：ああ、あのひとは あたらしい せんせいです。",
        "romaji": "B: Aa, ano hito wa atarashii sensei desu.",
        "vn": "B: À, người đó là giáo viên mới."
      },
      {
        "kanji": "A：そうですか。お名前は？",
        "jp": "A：そうですか。おなまえは？",
        "romaji": "A: Sou desu ka. Onamae wa?",
        "vn": "A: Vậy à. Tên của thầy là gì?"
      },
      {
        "kanji": "B：サントスさんです。",
        "jp": "B：サントスさんです。",
        "romaji": "B: Santosu-san desu.",
        "vn": "B: Là Santos."
      },
      {
        "kanji": "A：ブラジルから来た人ですね。",
        "jp": "A：ブラジルから きた ひとですね。",
        "romaji": "A: Burajiru kara kita hito desu ne.",
        "vn": "A: Là người đến từ Brazil nhỉ."
      }
    ],
    "questions": [
      {
        "question": "サントスさんは どのひとですか？ (Anh Santos là người nào?)",
        "options": ["しんぶんを よんでいる ひと (Người đang đọc báo)", "コーヒーを のんでいる ひと (Người đang uống cafe)", "テレビを みている ひと (Người đang xem TV)", "めがねを かけている ひと (Người đang đeo kính)"],
        "answer": "しんぶんを よんでいる ひと (Người đang đọc báo)"
      },
      {
        "question": "サントスさんは どこから きましたか？ (Anh Santos đến từ đâu?)",
        "options": ["ブラジル (Brazil)", "アメリカ (Mỹ)", "イギリス (Anh)", "フランス (Pháp)"],
        "answer": "ブラジル (Brazil)"
      }
    ]
  },
  {
    "title": "わたしの ぼうし",
    "titleVn": "② Chiếc mũ của tôi",
    "lines": [
      {
        "kanji": "A：マリアさん、その帽子、素敵ですね。",
        "jp": "A：マリアさん、その ぼうし、すてきですね。",
        "romaji": "A: Maria-san, sono boushi, suteki desu ne.",
        "vn": "A: Maria, chiếc mũ đó đẹp quá nhỉ."
      },
      {
        "kanji": "B：ありがとうございます。",
        "jp": "B：ありがとうございます。",
        "romaji": "B: Arigatou gozaimasu.",
        "vn": "B: Cảm ơn bạn."
      },
      {
        "kanji": "A：どこで買いましたか。",
        "jp": "A：どこで かいましたか。",
        "romaji": "A: Doko de kaimashita ka.",
        "vn": "A: Bạn đã mua ở đâu vậy?"
      },
      {
        "kanji": "B：これは買った帽子じゃありません。",
        "jp": "B：これは かった ぼうしじゃ ありません。",
        "romaji": "B: Kore wa katta boushi ja arimasen.",
        "vn": "B: Đây không phải mũ mua đâu."
      },
      {
        "kanji": "B：母が作った帽子です。",
        "jp": "B：ははが つくった ぼうしです。",
        "romaji": "B: Haha ga tsukutta boushi desu.",
        "vn": "B: Là chiếc mũ mẹ tôi làm đấy."
      }
    ],
    "questions": [
      {
        "question": "その ぼうしは だれが かいましたか？ (Ai đã mua chiếc mũ đó?)",
        "options": ["だれも かわなかった (Không ai mua)", "マリアさん (Maria)", "マリアさんの はは (Mẹ của Maria)", "Aさん (Người A)"],
        "answer": "だれも かわなかった (Không ai mua)"
      },
      {
        "question": "その ぼうしは どんな ぼうしですか？ (Chiếc mũ đó là mũ như thế nào?)",
        "options": ["ははが つくった ぼうし (Mũ mẹ làm)", "デパートで かった ぼうし (Mũ mua ở TTTM)", "ともだちが くれた ぼうし (Mũ bạn tặng)", "せんせいが つくった ぼうし (Mũ giáo viên làm)"],
        "answer": "ははが つくった ぼうし (Mũ mẹ làm)"
      }
    ]
  },
  {
    "title": "きのうの ばんごはん",
    "titleVn": "③ Bữa tối hôm qua",
    "lines": [
      {
        "kanji": "昨日、友達とレストランで晩ご飯を食べました。",
        "jp": "きのう、ともだちと レストランで ばんごはんを たべました。",
        "romaji": "Kinou, tomodachi to resutoran de bangohan o tabemashita.",
        "vn": "Hôm qua, tôi đã ăn tối với bạn ở nhà hàng."
      },
      {
        "kanji": "私たちが食べたレストランはイタリアのレストランです。",
        "jp": "わたしたちが たべた レストランは イタリアの レストランです。",
        "romaji": "Watashitachi ga tabeta resutoran wa Itaria no resutoran desu.",
        "vn": "Nhà hàng mà chúng tôi đã ăn là nhà hàng của Ý."
      },
      {
        "kanji": "私はパスタを食べました。",
        "jp": "わたしは パスタを たべました。",
        "romaji": "Watashi wa pasuta o tabemashita.",
        "vn": "Tôi đã ăn mì ý."
      },
      {
        "kanji": "友達が食べたピザも美味しかったです。",
        "jp": "ともだちが たべた ピザも おいしかったです。",
        "romaji": "Tomodachi ga tabeta piza mo oishikatta desu.",
        "vn": "Cái bánh pizza mà bạn tôi ăn cũng rất ngon."
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
        "question": "ふたりが いった レストランは どんな レストランですか？ (Nhà hàng hai người đi là nhà hàng gì?)",
        "options": ["イタリアの レストラン (Nhà hàng Ý)", "フランスの レストラン (Nhà hàng Pháp)", "にほんの レストラン (Nhà hàng Nhật)", "ちゅうごくの レストラン (Nhà hàng Trung Quốc)"],
        "answer": "イタリアの レストラン (Nhà hàng Ý)"
      },
      {
        "question": "ともだちは なにを たべましたか？ (Người bạn đã ăn gì?)",
        "options": ["ピザ (Pizza)", "パスタ (Mì Ý)", "すし (Sushi)", "てんぷら (Tempura)"],
        "answer": "ピザ (Pizza)"
      }
    ]
  },
  {
    "title": "やくそく",
    "titleVn": "④ Cuộc hẹn",
    "lines": [
      {
        "kanji": "A：すみません、今晩一緒に食事に行きませんか。",
        "jp": "A：すみません、こんばん いっしょに しょくじに いきませんか。",
        "romaji": "A: Sumimasen, konban issho ni shokuji ni ikimasen ka.",
        "vn": "A: Xin lỗi, tối nay có đi ăn cùng nhau không?"
      },
      {
        "kanji": "B：今晩ですか。今晩はちょっと…",
        "jp": "B：こんばんですか。こんばんは ちょっと…",
        "romaji": "B: Konban desu ka. Konban wa chotto...",
        "vn": "B: Tối nay à. Tối nay thì hơi..."
      },
      {
        "kanji": "A：何か約束がありますか。",
        "jp": "A：なにか やくそくが ありますか。",
        "romaji": "A: Nanika yakusoku ga arimasu ka.",
        "vn": "A: Bạn có hẹn gì à?"
      },
      {
        "kanji": "B：ええ。友達に会う約束があります。",
        "jp": "B：ええ。ともだちに あう やくそくが あります。",
        "romaji": "B: Ee. Tomodachi ni au yakusoku ga arimasu.",
        "vn": "B: Ừ. Tôi có hẹn gặp bạn."
      },
      {
        "kanji": "A：そうですか。じゃ、また。",
        "jp": "A：そうですか。じゃ、また。",
        "romaji": "A: Sou desu ka. Ja, mata.",
        "vn": "A: Vậy à. Vậy hẹn dịp khác."
      }
    ],
    "questions": [
      {
        "question": "Bさんは こんばん ひまですか？ (Người B tối nay rảnh không?)",
        "options": ["いいえ、ひまじゃありません (Không, không rảnh)", "はい、ひまです (Vâng, rảnh)", "わかりません (Không biết)", "あしたは ひまです (Ngày mai rảnh)"],
        "answer": "いいえ、ひまじゃありません (Không, không rảnh)"
      },
      {
        "question": "Bさんは どんな やくそくが ありますか？ (Người B có cuộc hẹn gì?)",
        "options": ["ともだちに あう やくそく (Hẹn gặp bạn)", "えいがを みる やくそく (Hẹn xem phim)", "びょういんへ いく やくそく (Hẹn đi bệnh viện)", "かいものに いく やくそく (Hẹn đi mua sắm)"],
        "answer": "ともだちに あう やくそく (Hẹn gặp bạn)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私の趣味は写真を撮ることです。",
        "jp": "わたしの しゅみは しゃしんを とる ことです。",
        "romaji": "Watashi no shumi wa shashin o toru koto desu.",
        "vn": "Sở thích của tôi là chụp ảnh."
      },
      {
        "kanji": "私はよく旅行に行きます。",
        "jp": "わたしは よく りょこうに いきます。",
        "romaji": "Watashi wa yoku ryokou ni ikimasu.",
        "vn": "Tôi thường đi du lịch."
      },
      {
        "kanji": "旅行に行った時、いつも写真を撮ります。",
        "jp": "りょこうに いった とき、いつも しゃしんを とります。",
        "romaji": "Ryokou ni itta toki, itsumo shashin o torimasu.",
        "vn": "Khi đi du lịch, tôi luôn chụp ảnh."
      },
      {
        "kanji": "昨日、旅行で撮った写真を友達に見せました。",
        "jp": "きのう、りょこうで とった しゃしんを ともだちに みせました。",
        "romaji": "Kinou, ryokou de totta shashin o tomodachi ni misemashita.",
        "vn": "Hôm qua, tôi đã cho bạn xem những bức ảnh chụp khi đi du lịch."
      },
      {
        "kanji": "友達は「とても綺麗だ」と言いました。",
        "jp": "ともだちは「とても きれいだ」と いいました。",
        "romaji": "Tomodachi wa 'Totemo kirei da' to iimashita.",
        "vn": "Bạn tôi đã nói là 'Đẹp quá'."
      }
    ],
    "questions": [
      {
        "question": "このひとは いつ しゃしんを とりますか？ (Người này khi nào thì chụp ảnh?)",
        "options": ["りょこうに いったとき (Khi đi du lịch)", "えいがを みたとき (Khi xem phim)", "かいものを したとき (Khi đi mua sắm)", "ともだちに あったとき (Khi gặp bạn)"],
        "answer": "りょこうに いったとき (Khi đi du lịch)"
      },
      {
        "question": "きのう なにを しましたか？ (Hôm qua đã làm gì?)",
        "options": ["ともだちに しゃしんを みせました (Cho bạn xem ảnh)", "ともだちと りょこうに いきました (Đi du lịch với bạn)", "カメラを かいました (Mua máy ảnh)", "しゃしんを とりました (Chụp ảnh)"],
        "answer": "ともだちに しゃしんを みせました (Cho bạn xem ảnh)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "このひとが とった しゃしんは きれいです。(Ảnh người này chụp rất đẹp)",
          "ともだちが とった しゃしんは きれいです。(Ảnh người bạn chụp rất đẹp)",
          "このひとは ともだちの しゃしんを みました。(Người này đã xem ảnh của bạn)",
          "このひとは りょこうが きらいです。(Người này ghét đi du lịch)"
        ],
        "answer": "このひとが とった しゃしんは きれいです。(Ảnh người này chụp rất đẹp)"
      }
    ]
  }
]);

// Lesson 23: 5 readings needed (Toki, To)
appendReadings(23, [
  {
    "title": "としょかんへ いった とき",
    "titleVn": "① Khi đi thư viện",
    "lines": [
      {
        "kanji": "図書館へ行った時、本を借りました。",
        "jp": "としょかんへ いった とき、ほんを かりました。",
        "romaji": "Toshokan e itta toki, hon o karimashita.",
        "vn": "Khi đến thư viện, tôi đã mượn sách."
      },
      {
        "kanji": "本を借りる時、カードを見せなければなりません。",
        "jp": "ほんを かりる とき、カードを みせなければ なりません。",
        "romaji": "Hon o kariru toki, kaado o misenakereba narimasen.",
        "vn": "Khi mượn sách, phải trình thẻ."
      },
      {
        "kanji": "もしカードがない時、借りることができません。",
        "jp": "もし カードが ない とき、かりる ことが できません。",
        "romaji": "Moshi kaado ga nai toki, kariru koto ga dekimasen.",
        "vn": "Nếu không có thẻ thì không thể mượn được."
      },
      {
        "kanji": "漢字がわからない時、辞書を使います。",
        "jp": "かんじが わからない とき、じしょを つかいます。",
        "romaji": "Kanji ga wakaranai toki, jisho o tsukaimasu.",
        "vn": "Khi không hiểu chữ Hán, tôi dùng từ điển."
      },
      {
        "kanji": "本を読む時、静かにしなければなりません。",
        "jp": "ほんを よむ とき、しずかに しなければ なりません。",
        "romaji": "Hon o yomu toki, shizuka ni shinakereba narimasen.",
        "vn": "Khi đọc sách, phải giữ im lặng."
      }
    ],
    "questions": [
      {
        "question": "ほんを かりるとき、なにを しますか？ (Khi mượn sách phải làm gì?)",
        "options": ["カードを みせます (Trình thẻ)", "おかねを はらいます (Trả tiền)", "なまえを かきます (Viết tên)", "しゃしんを とります (Chụp ảnh)"],
        "answer": "カードを みせます (Trình thẻ)"
      },
      {
        "question": "かんじが わからないとき、どうしますか？ (Khi không biết Kanji thì làm sao?)",
        "options": ["じしょを つかいます (Dùng từ điển)", "せんせいに ききます (Hỏi giáo viên)", "としょかんへ いきます (Đi thư viện)", "としょかんの ひとに ききます (Hỏi người của thư viện)"],
        "answer": "じしょを つかいます (Dùng từ điển)"
      }
    ]
  },
  {
    "title": "こどもの とき",
    "titleVn": "② Khi còn nhỏ",
    "lines": [
      {
        "kanji": "私は子供の時、よく川で泳ぎました。",
        "jp": "わたしは こどもの とき、よく かわで およぎました。",
        "romaji": "Watashi wa kodomo no toki, yoku kawa de oyogimashita.",
        "vn": "Khi còn nhỏ, tôi thường bơi ở sông."
      },
      {
        "kanji": "夏休みの時、毎日友達と遊びました。",
        "jp": "なつやすみの とき、まいにち ともだちと あそびました。",
        "romaji": "Natsuyasumi no toki, mainichi tomodachi to asobimashita.",
        "vn": "Khi nghỉ hè, ngày nào tôi cũng chơi với bạn."
      },
      {
        "kanji": "暇な時、絵を描くのが好きでした。",
        "jp": "ひまな とき、えを かく のが すきでした。",
        "romaji": "Hima na toki, e o kaku no ga suki deshita.",
        "vn": "Khi rảnh rỗi, tôi thích vẽ tranh."
      },
      {
        "kanji": "今、忙しいですから、遊ぶ時間がありません。",
        "jp": "いま、いそがしいですから、あそぶ じかんが ありません。",
        "romaji": "Ima, isogashii desu kara, asobu jikan ga arimasen.",
        "vn": "Bây giờ, vì bận rộn nên không có thời gian chơi."
      },
      {
        "kanji": "寂しい時、家族に電話をかけます。",
        "jp": "さびしい とき、かぞくに でんわを かけます。",
        "romaji": "Sabishii toki, kazoku ni denwa o kakemasu.",
        "vn": "Khi buồn tủi, tôi gọi điện cho gia đình."
      }
    ],
    "questions": [
      {
        "question": "こどものとき、よく なにを しましたか？ (Khi còn nhỏ thường làm gì?)",
        "options": ["かわで およぎました (Bơi ở sông)", "えを かきました (Vẽ tranh)", "うみを およぎました (Bơi ở biển)", "やまへ いきました (Đi núi)"],
        "answer": "かわで およぎました (Bơi ở sông)"
      },
      {
        "question": "さびしいとき、どうしますか？ (Khi buồn tủi thì làm gì?)",
        "options": ["かぞくに でんわを かけます (Gọi điện cho gia đình)", "えを かきます (Vẽ tranh)", "ともだちと あそびます (Chơi với bạn)", "テレビを みます (Xem TV)"],
        "answer": "かぞくに でんわを かけます (Gọi điện cho gia đình)"
      }
    ]
  },
  {
    "title": "エアコンの つかいかた",
    "titleVn": "③ Cách dùng máy lạnh",
    "lines": [
      {
        "kanji": "A：すみません、このボタンを押すと、どうなりますか。",
        "jp": "A：すみません、この ボタンを おすと、どう なりますか。",
        "romaji": "A: Sumimasen, kono botan o osu to, dou narimasu ka.",
        "vn": "A: Xin lỗi, nếu bấm nút này thì sẽ thế nào?"
      },
      {
        "kanji": "B：このボタンを押すと、エアコンがつきます。",
        "jp": "B：この ボタンを おすと、エアコンが つきます。",
        "romaji": "B: Kono botan o osu to, eakon ga tsukimasu.",
        "vn": "B: Nếu bấm nút này, máy lạnh sẽ bật."
      },
      {
        "kanji": "A：右へ回すと、どうなりますか。",
        "jp": "A：みぎへ まわすと、どう なりますか。",
        "romaji": "A: Migi e mawasu to, dou narimasu ka.",
        "vn": "A: Nếu vặn sang phải thì sao?"
      },
      {
        "kanji": "B：右へ回すと、暖かくなります。",
        "jp": "B：みぎへ まわすと、あたたかく なります。",
        "romaji": "B: Migi e mawasu to, atatakaku narimasu.",
        "vn": "B: Vặn sang phải thì sẽ ấm lên."
      },
      {
        "kanji": "A：左へ回すと、涼しくなるんですね。わかりました。",
        "jp": "A：ひだりへ まわすと、すずしく なるんですね。わかりました。",
        "romaji": "A: Hidari e mawasu to, suzushiku narun desu ne. Wakarimashita.",
        "vn": "A: Vặn sang trái thì sẽ mát hơn nhỉ. Tôi hiểu rồi."
      }
    ],
    "questions": [
      {
        "question": "ボタンを おすと、どうなりますか？ (Hễ bấm nút thì sao?)",
        "options": ["エアコンが つきます (Máy lạnh bật)", "あたたかく なります (Sẽ ấm lên)", "すずしく なります (Sẽ mát hơn)", "エアコンが とまります (Máy lạnh tắt)"],
        "answer": "エアコンが つきます (Máy lạnh bật)"
      },
      {
        "question": "あたたかく したいとき、どうしますか？ (Khi muốn làm ấm thì làm gì?)",
        "options": ["みぎへ まわします (Vặn sang phải)", "ひだりへ まわします (Vặn sang trái)", "ボタンを おします (Bấm nút)", "なにも しません (Không làm gì cả)"],
        "answer": "みぎへ まわします (Vặn sang phải)"
      }
    ]
  },
  {
    "title": "えきへの みち",
    "titleVn": "④ Đường tới nhà ga",
    "lines": [
      {
        "kanji": "A：すみません、駅はどこですか。",
        "jp": "A：すみません、えきは どこですか。",
        "romaji": "A: Sumimasen, eki wa doko desu ka.",
        "vn": "A: Xin lỗi, nhà ga ở đâu vậy?"
      },
      {
        "kanji": "B：駅ですか。この道をまっすぐ行ってください。",
        "jp": "B：えきですか。この みちを まっすぐ いって ください。",
        "romaji": "B: Eki desu ka. Kono michi o massugu itte kudasai.",
        "vn": "B: Nhà ga à. Bạn hãy đi thẳng con đường này."
      },
      {
        "kanji": "A：はい。",
        "jp": "A：はい。",
        "romaji": "A: Vâng."
      },
      {
        "kanji": "B：交差点を右へ曲がると、左にあります。",
        "jp": "B：こうさてんを みぎへ まがると、ひだりに あります。",
        "romaji": "B: Kousaten o migi e magaru to, hidari ni arimasu.",
        "vn": "B: Rẽ phải ở ngã tư thì nó nằm ở bên trái."
      },
      {
        "kanji": "A：交差点を右ですね。わかりました。",
        "jp": "A：こうさてんを みぎですね。わかりました。",
        "romaji": "A: Kousaten o migi desu ne. Wakarimashita.",
        "vn": "A: Ngã tư rẽ phải nhỉ. Tôi hiểu rồi."
      }
    ],
    "questions": [
      {
        "question": "えきへ いくとき、こうさてんで どちらへ まがりますか？ (Khi đi ra ga, rẽ hướng nào ở ngã tư?)",
        "options": ["みぎ (Phải)", "ひだり (Trái)", "まっすぐ (Thẳng)", "まがりません (Không rẽ)"],
        "answer": "みぎ (Phải)"
      },
      {
        "question": "えきは どちらに ありますか？ (Nhà ga nằm ở bên nào?)",
        "options": ["ひだり (Bên trái)", "みぎ (Bên phải)", "こうさてんの なか (Trong ngã tư)", "わかりません (Không biết)"],
        "answer": "ひだり (Bên trái)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "木村：山田さん、頭が痛い時、どうしますか。",
        "jp": "きむら：やまださん、あたまが いたい とき、どう しますか。",
        "romaji": "Kimura: Yamada-san, atama ga itai toki, dou shimasu ka.",
        "vn": "Kimura: Yamada này, khi đau đầu bạn làm gì?"
      },
      {
        "kanji": "山田：薬を飲みます。",
        "jp": "やまだ：くすりを のみます。",
        "romaji": "Yamada: Kusuri o nomimasu.",
        "vn": "Yamada: Tôi uống thuốc."
      },
      {
        "kanji": "木村：薬を飲むと、すぐよくなりますか。",
        "jp": "きむら：くすりを のむと、すぐ よく なりますか。",
        "romaji": "Kimura: Kusuri o nomu to, sugu yoku narimasu ka.",
        "vn": "Kimura: Hễ uống thuốc là khỏe ngay à?"
      },
      {
        "kanji": "山田：ええ。でも、とても疲れた時は、早く寝ます。",
        "jp": "やまだ：ええ。でも、とても つかれた ときは、はやく ねます。",
        "romaji": "Yamada: Ee. Demo, totemo tsukareta toki wa, hayaku nemasu.",
        "vn": "Yamada: Ừ. Nhưng khi quá mệt thì tôi ngủ sớm."
      },
      {
        "kanji": "木村：そうですか。私も今日は早く寝ます。",
        "jp": "きむら：そうですか。わたしも きょうは はやく ねます。",
        "romaji": "Kimura: Sou desu ka. Watashi mo kyou wa hayaku nemasu.",
        "vn": "Kimura: Vậy à. Hôm nay tôi cũng sẽ ngủ sớm."
      }
    ],
    "questions": [
      {
        "question": "やまださんは あたまが いたいとき どうしますか？ (Yamada làm gì khi đau đầu?)",
        "options": ["くすりを のみます (Uống thuốc)", "びょういんへ いきます (Đi bệnh viện)", "なにも しません (Không làm gì cả)", "おちゃを のみます (Uống trà)"],
        "answer": "くすりを のみます (Uống thuốc)"
      },
      {
        "question": "やまださんは とても つかれたとき どうしますか？ (Khi quá mệt Yamada làm gì?)",
        "options": ["はやく ねます (Ngủ sớm)", "くすりを のみます (Uống thuốc)", "テレビを みます (Xem TV)", "びょういんへ いきます (Đi bệnh viện)"],
        "answer": "はやく ねます (Ngủ sớm)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "きむらさんは きょう はやく ねます。(Hôm nay Kimura sẽ ngủ sớm)",
          "きむらさんは きょう びょういんへ いきます。(Hôm nay Kimura đi bệnh viện)",
          "やまださんは きょう はやく ねます。(Hôm nay Yamada sẽ ngủ sớm)",
          "やまださんは あたまが いたいです。(Yamada đang đau đầu)"
        ],
        "answer": "きむらさんは きょう はやく ねます。(Hôm nay Kimura sẽ ngủ sớm)"
      }
    ]
  }
]);

// Lesson 24: 5 readings needed (Kuremasu, agemasu, moraimasu)
appendReadings(24, [
  {
    "title": "プレゼント",
    "titleVn": "① Món quà",
    "lines": [
      {
        "kanji": "昨日は私の誕生日でした。",
        "jp": "きのうは わたしの たんじょうびでした。",
        "romaji": "Kinou wa watashi no tanjoubi deshita.",
        "vn": "Hôm qua là sinh nhật của tôi."
      },
      {
        "kanji": "友達がうちへ来てくれました。",
        "jp": "ともだちが うちへ きて くれました。",
        "romaji": "Tomodachi ga uchi e kite kuremashita.",
        "vn": "Bạn bè đã đến nhà vì tôi."
      },
      {
        "kanji": "友達は私に花をくれました。",
        "jp": "ともだちは わたしに はなを くれました。",
        "romaji": "Tomodachi wa watashi ni hana o kuremashita.",
        "vn": "Bạn bè đã tặng hoa cho tôi."
      },
      {
        "kanji": "私は友達に美味しいケーキを作ってあげました。",
        "jp": "わたしは ともだちに おいしい ケーキを つくって あげました。",
        "romaji": "Watashi wa tomodachi ni oishii keeki o tsukutte agemashita.",
        "vn": "Tôi đã làm bánh kem ngon cho các bạn."
      },
      {
        "kanji": "とても嬉しかったです。",
        "jp": "とても うれしかったです。",
        "romaji": "Totemo ureshikatta desu.",
        "vn": "Tôi đã rất vui."
      }
    ],
    "questions": [
      {
        "question": "だれが わたしに はなを くれましたか？ (Ai đã tặng hoa cho tôi?)",
        "options": ["ともだち (Bạn bè)", "かぞく (Gia đình)", "せんせい (Giáo viên)", "はは (Mẹ)"],
        "answer": "ともだち (Bạn bè)"
      },
      {
        "question": "わたしは ともだちに なにを しましたか？ (Tôi đã làm gì cho bạn bè?)",
        "options": ["ケーキを つくって あげました (Làm bánh kem cho)", "ケーキを かって あげました (Mua bánh kem cho)", "プレゼントを あげました (Tặng quà)", "はなを あげました (Tặng hoa)"],
        "answer": "ケーキを つくって あげました (Làm bánh kem cho)"
      }
    ]
  },
  {
    "title": "てつだって もらいました",
    "titleVn": "② Đã được giúp đỡ",
    "lines": [
      {
        "kanji": "昨日、新しい家へ引っ越しました。",
        "jp": "きのう、あたらしい いえへ ひっこしました。",
        "romaji": "Kinou, atarashii ie e hikkoshimashita.",
        "vn": "Hôm qua, tôi đã chuyển đến nhà mới."
      },
      {
        "kanji": "荷物がたくさんありました。",
        "jp": "にもつが たくさん ありました。",
        "romaji": "Nimotsu ga takusan arimashita.",
        "vn": "Đã có rất nhiều hành lý."
      },
      {
        "kanji": "ですから、友達に手伝ってもらいました。",
        "jp": "ですから、ともだちに てつだって もらいました。",
        "romaji": "Desukara, tomodachi ni tetsudatte moraimashita.",
        "vn": "Vì vậy, tôi đã nhờ bạn bè giúp đỡ."
      },
      {
        "kanji": "友達は私の荷物を運んでくれました。",
        "jp": "ともだちは わたしの にもつを はこんで くれました。",
        "romaji": "Tomodachi wa watashi no nimotsu o hakonde kuremashita.",
        "vn": "Bạn bè đã chuyển đồ giúp tôi."
      },
      {
        "kanji": "本当に助かりました。",
        "jp": "ほんとうに たすかりました。",
        "romaji": "Hontou ni tasukarimashita.",
        "vn": "Thật sự đã giúp tôi rất nhiều."
      }
    ],
    "questions": [
      {
        "question": "このひとは きのう なにを しましたか？ (Người này hôm qua làm gì?)",
        "options": ["ひっこしました (Chuyển nhà)", "そうじしました (Dọn dẹp)", "かいものを しました (Mua sắm)", "りょこうしました (Du lịch)"],
        "answer": "ひっこしました (Chuyển nhà)"
      },
      {
        "question": "ともだちは なにをして くれましたか？ (Bạn bè đã làm gì cho người này?)",
        "options": ["にもつを はこんで くれました (Chuyển đồ giúp)", "ごはんを つくって くれました (Nấu cơm giúp)", "くるまを かして くれました (Cho mượn xe)", "おかねを かして くれました (Cho mượn tiền)"],
        "answer": "にもつを はこんで くれました (Chuyển đồ giúp)"
      }
    ]
  },
  {
    "title": "ちちの カメラ",
    "titleVn": "③ Máy ảnh của bố",
    "lines": [
      {
        "kanji": "A：素敵なカメラですね。",
        "jp": "A：すてきな カメラですね。",
        "romaji": "A: Suteki na kamera desu ne.",
        "vn": "A: Chiếc máy ảnh đẹp quá nhỉ."
      },
      {
        "kanji": "B：ありがとうございます。父に買ってもらいました。",
        "jp": "B：ありがとうございます。ちちに かって もらいました。",
        "romaji": "B: Arigatou gozaimasu. Chichi ni katte moraimashita.",
        "vn": "B: Cảm ơn bạn. Là tôi được bố mua cho đấy."
      },
      {
        "kanji": "A：いいですね。日本のだと思います。",
        "jp": "A：いいですね。にほんのだと おもいます。",
        "romaji": "A: Ii desu ne. Nihon no da to omoimasu.",
        "vn": "A: Tuyệt nhỉ. Tôi nghĩ là của Nhật."
      },
      {
        "kanji": "B：ええ、父が日本で買ってくれました。",
        "jp": "B：ええ、ちちが にほんで かって くれました。",
        "romaji": "B: Ee, chichi ga Nihon de katte kuremashita.",
        "vn": "B: Vâng, bố đã mua ở Nhật cho tôi."
      },
      {
        "kanji": "A：じゃ、たくさん写真を撮ってくださいね。",
        "jp": "A：じゃ、たくさん しゃしんを とって くださいね。",
        "romaji": "A: Ja, takusan shashin o totte kudasai ne.",
        "vn": "A: Vậy thì hãy chụp thật nhiều ảnh nhé."
      }
    ],
    "questions": [
      {
        "question": "Bさんは だれに カメラを かって もらいましたか？ (Người B được ai mua máy ảnh cho?)",
        "options": ["ちち (Bố)", "はは (Mẹ)", "ともだち (Bạn)", "せんせい (Giáo viên)"],
        "answer": "ちち (Bố)"
      },
      {
        "question": "ちちは どこで カメラを かいましたか？ (Bố đã mua máy ảnh ở đâu?)",
        "options": ["にほん (Nhật Bản)", "アメリカ (Mỹ)", "デパート (Trung tâm thương mại)", "カメラや (Cửa hàng máy ảnh)"],
        "answer": "にほん (Nhật Bản)"
      }
    ]
  },
  {
    "title": "みちを おしえます",
    "titleVn": "④ Chỉ đường",
    "lines": [
      {
        "kanji": "A：すみません、市役所はどこですか。",
        "jp": "A：すみません、しやくしょは どこですか。",
        "romaji": "A: Sumimasen, shiyakusho wa doko desu ka.",
        "vn": "A: Xin lỗi, tòa thị chính ở đâu ạ?"
      },
      {
        "kanji": "B：道がわかりませんか。地図を書いてあげましょうか。",
        "jp": "B：みちが わかりませんか。ちずを かいて あげましょうか。",
        "romaji": "B: Michi ga wakarimasen ka. Chizu o kaite agemashou ka.",
        "vn": "B: Bạn không biết đường sao? Để tôi vẽ bản đồ cho bạn nhé?"
      },
      {
        "kanji": "A：はい、お願いします。",
        "jp": "A：はい、おねがいします。",
        "romaji": "A: Hai, onegaishimasu.",
        "vn": "A: Vâng, xin nhờ bạn."
      },
      {
        "kanji": "B：ここをまっすぐ行って、右に曲がってください。",
        "jp": "B：ここを まっすぐ いって、みぎに まがって ください。",
        "romaji": "B: Koko o massugu itte, migi ni magatte kudasai.",
        "vn": "B: Đi thẳng đường này, rồi rẽ phải."
      },
      {
        "kanji": "A：どうもありがとうございました。",
        "jp": "A：どうも ありがとうございました。",
        "romaji": "A: Doumo arigatou gozaimashita.",
        "vn": "A: Rất cảm ơn bạn."
      }
    ],
    "questions": [
      {
        "question": "Bさんは Aさんに なにを してあげましたか？ (Người B đã làm gì cho người A?)",
        "options": ["ちずを かいて あげました (Vẽ bản đồ cho)", "しやくしょまで つれて いきました (Dẫn đến tòa thị chính)", "でんわを かけて あげました (Gọi điện thoại cho)", "タクシーを よんで あげました (Gọi taxi cho)"],
        "answer": "ちずを かいて あげました (Vẽ bản đồ cho)"
      },
      {
        "question": "Aさんは どこへ いきたいですか？ (Người A muốn đi đâu?)",
        "options": ["しやくしょ (Tòa thị chính)", "えき (Nhà ga)", "びょういん (Bệnh viện)", "としょかん (Thư viện)"],
        "answer": "しやくしょ (Tòa thị chính)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私は今、日本語を勉強しています。",
        "jp": "わたしは いま、にほんごを べんきょうしています。",
        "romaji": "Watashi wa ima, Nihongo o benkyou shite imasu.",
        "vn": "Bây giờ tôi đang học tiếng Nhật."
      },
      {
        "kanji": "山田先生が私に日本語を教えてくれます。",
        "jp": "やまだせんせいが わたしに にほんごを おしえて くれます。",
        "romaji": "Yamada-sensei ga watashi ni Nihongo o oshiete kuremasu.",
        "vn": "Thầy Yamada dạy tiếng Nhật cho tôi."
      },
      {
        "kanji": "時々、日本人の友達が宿題を手伝ってくれます。",
        "jp": "ときどき、にほんじんの ともだちが しゅくだいを てつだって くれます。",
        "romaji": "Tokidoki, Nihonjin no tomodachi ga shukudai o tetsudatte kuremasu.",
        "vn": "Thỉnh thoảng, người bạn Nhật Bản giúp tôi làm bài tập."
      },
      {
        "kanji": "日本語は難しいですが、とても面白いです。",
        "jp": "にほんごは むずかしいですが、とても おもしろいです。",
        "romaji": "Nihongo wa muzukashii desu ga, totemo omoshiroi desu.",
        "vn": "Tiếng Nhật khó nhưng rất thú vị."
      },
      {
        "kanji": "もっと上手になりたいです。",
        "jp": "もっと じょうずに なりたいです。",
        "romaji": "Motto jouzu ni naritai desu.",
        "vn": "Tôi muốn trở nên giỏi hơn nữa."
      }
    ],
    "questions": [
      {
        "question": "だれが このひとに にほんごを おしえますか？ (Ai dạy tiếng Nhật cho người này?)",
        "options": ["やまだせんせい (Thầy Yamada)", "にほんじんの ともだち (Người bạn Nhật)", "だれも おしえません (Không ai dạy)", "わたし (Tôi)"],
        "answer": "やまだせんせい (Thầy Yamada)"
      },
      {
        "question": "ともだちは このひとに なにを してくれますか？ (Người bạn làm gì cho người này?)",
        "options": ["しゅくだいを てつだって くれます (Giúp làm bài tập)", "にほんごを おしえて くれます (Dạy tiếng Nhật)", "じしょを かして くれます (Cho mượn từ điển)", "ほんを よんで くれます (Đọc sách cho)"],
        "answer": "しゅくだいを てつだって くれます (Giúp làm bài tập)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "このひとは にほんごが おもしろいと おもっています。(Người này nghĩ tiếng Nhật thú vị)",
          "このひとは にほんごが きらいです。(Người này ghét tiếng Nhật)",
          "やまだせんせいが しゅくだいを てつだいます。(Thầy Yamada giúp làm bài tập)",
          "にほんごは かんたんです。(Tiếng Nhật thì dễ)"
        ],
        "answer": "このひとは にほんごが おもしろいと おもっています。(Người này nghĩ tiếng Nhật thú vị)"
      }
    ]
  }
]);

// Lesson 25: 5 readings needed (Tara, temo)
appendReadings(25, [
  {
    "title": "あめが ふったら",
    "titleVn": "① Nếu trời mưa",
    "lines": [
      {
        "kanji": "A：明日、ハイキングに行きますか。",
        "jp": "A：あした、ハイキングに いきますか。",
        "romaji": "A: Ashita, haikingu ni ikimasu ka.",
        "vn": "A: Ngày mai bạn có đi leo núi dã ngoại không?"
      },
      {
        "kanji": "B：いいえ。雨が降ったら、行きません。",
        "jp": "B：いいえ。あめが ふったら、いきません。",
        "romaji": "B: Iie. Ame ga futtara, ikimasen.",
        "vn": "B: Không. Nếu trời mưa thì tôi không đi."
      },
      {
        "kanji": "A：いい天気だったら、どうしますか。",
        "jp": "A：いい てんきだったら、どうしますか。",
        "romaji": "A: Ii tenki dattara, dou shimasu ka.",
        "vn": "A: Nếu thời tiết đẹp thì tính sao?"
      },
      {
        "kanji": "B：いい天気だったら、もちろん行きますよ。",
        "jp": "B：いい てんきだったら、もちろん いきますよ。",
        "romaji": "B: Ii tenki dattara, mochiron ikimasu yo.",
        "vn": "B: Nếu thời tiết đẹp thì tất nhiên là đi rồi."
      },
      {
        "kanji": "A：じゃ、晴れるといいですね。",
        "jp": "A：じゃ、はれると いいですね。",
        "romaji": "A: Ja, hareru to ii desu ne.",
        "vn": "A: Vậy, mong là trời sẽ nắng nhỉ."
      }
    ],
    "questions": [
      {
        "question": "Bさんは あめが ふったら どうしますか？ (Người B sẽ làm gì nếu trời mưa?)",
        "options": ["いきません (Không đi)", "いきます (Đi)", "ハイキングに いきます (Đi leo núi)", "わかりません (Không biết)"],
        "answer": "いきません (Không đi)"
      },
      {
        "question": "どんなとき ハイキングに いきますか？ (Đi leo núi khi nào?)",
        "options": ["いいてんきの とき (Khi thời tiết đẹp)", "あめの とき (Khi mưa)", "さむい とき (Khi lạnh)", "あつい とき (Khi nóng)"],
        "answer": "いいてんきの とき (Khi thời tiết đẹp)"
      }
    ]
  },
  {
    "title": "たかくても かいます",
    "titleVn": "② Dù đắt cũng mua",
    "lines": [
      {
        "kanji": "私は新しいパソコンが欲しいです。",
        "jp": "わたしは あたらしい パソコンが ほしいです。",
        "romaji": "Watashi wa atarashii pasokon ga hoshii desu.",
        "vn": "Tôi muốn một cái máy tính mới."
      },
      {
        "kanji": "今使っているパソコンは古くて、遅いですから。",
        "jp": "いま つかっている パソコンは ふるくて、おそいですから。",
        "romaji": "Ima tsukatte iru pasokon wa furukute, osoi desu kara.",
        "vn": "Bởi vì cái máy tính tôi đang dùng thì cũ và chậm."
      },
      {
        "kanji": "日本のパソコンが買いたいです。",
        "jp": "にほんの パソコンが かいたいです。",
        "romaji": "Nihon no pasokon ga kaitai desu.",
        "vn": "Tôi muốn mua máy tính của Nhật Bản."
      },
      {
        "kanji": "とても高いですが、高くても買います。",
        "jp": "とても たかいですが、たかくても かいます。",
        "romaji": "Totemo takai desu ga, takakute mo kaimasu.",
        "vn": "Nó rất đắt, nhưng dù đắt tôi cũng sẽ mua."
      },
      {
        "kanji": "毎日仕事をしなければなりませんから。",
        "jp": "まいにち しごとを しなければ なりませんから。",
        "romaji": "Mainichi shigoto o shinakereba narimasen kara.",
        "vn": "Bởi vì mỗi ngày đều phải làm việc."
      }
    ],
    "questions": [
      {
        "question": "いま つかっている パソコンは どうですか？ (Cái máy tính đang dùng thì sao?)",
        "options": ["ふるくて、おそいです (Cũ và chậm)", "あたらしくて、はやいです (Mới và nhanh)", "たかくて、べんりです (Đắt và tiện lợi)", "やすくて、いいです (Rẻ và tốt)"],
        "answer": "ふるくて、おそいです (Cũ và chậm)"
      },
      {
        "question": "あたらしい パソコンが たかかったら、どうしますか？ (Nếu máy tính mới đắt thì làm sao?)",
        "options": ["たかくても かいます (Dù đắt cũng mua)", "かいません (Không mua)", "やすい パソコンを かいます (Sẽ mua máy tính rẻ)", "もうすこし まちます (Chờ thêm chút nữa)"],
        "answer": "たかくても かいます (Dù đắt cũng mua)"
      }
    ]
  },
  {
    "title": "もし おかねが あったら",
    "titleVn": "③ Nếu có tiền",
    "lines": [
      {
        "kanji": "A：もし1億円あったら、何をしたいですか。",
        "jp": "A：もし いちおくえん あったら、なにを したいですか。",
        "romaji": "A: Moshi ichi oku-en attara, nani o shitai desu ka.",
        "vn": "A: Nếu có 100 triệu Yên, bạn muốn làm gì?"
      },
      {
        "kanji": "B：会社を作りたいです。Aさんは？",
        "jp": "B：かいしゃを つくりたいです。Aさんは？",
        "romaji": "B: Kaisha o tsukuritai desu. A-san wa?",
        "vn": "B: Tôi muốn thành lập công ty. Còn bạn A?"
      },
      {
        "kanji": "A：私は大きい家を買いたいです。",
        "jp": "A：わたしは おおきい いえを かいたいです。",
        "romaji": "A: Watashi wa ookii ie o kaitai desu.",
        "vn": "A: Tôi muốn mua một ngôi nhà lớn."
      },
      {
        "kanji": "B：車は買いませんか。",
        "jp": "B：くるまは かいませんか。",
        "romaji": "B: Kuruma wa kaimasen ka.",
        "vn": "B: Bạn không mua xe ô tô sao?"
      },
      {
        "kanji": "A：車は運転できませんから、買いません。",
        "jp": "A：くるまは うんてん できませんから、かいません。",
        "romaji": "A: Kuruma wa unten dekimasen kara, kaimasen.",
        "vn": "A: Vì không biết lái xe nên tôi không mua."
      }
    ],
    "questions": [
      {
        "question": "Bさんは おかねが あったら なにを したいですか？ (Người B muốn làm gì nếu có tiền?)",
        "options": ["かいしゃを つくりたいです (Muốn thành lập công ty)", "いえを かいたいです (Muốn mua nhà)", "くるまを かいたいです (Muốn mua xe)", "りょこうしたいです (Muốn đi du lịch)"],
        "answer": "かいしゃを つくりたいです (Muốn thành lập công ty)"
      },
      {
        "question": "Aさんは どうして くるまを かいませんか？ (Tại sao người A không mua xe?)",
        "options": ["うんてん できないからです (Vì không biết lái)", "おかねが ないからです (Vì không có tiền)", "くるまが きらいだからです (Vì ghét xe)", "いえが ほしいからです (Vì muốn nhà)"],
        "answer": "うんてん できないからです (Vì không biết lái)"
      }
    ]
  },
  {
    "title": "ねむくても",
    "titleVn": "④ Dù buồn ngủ",
    "lines": [
      {
        "kanji": "明日、大学のテストがあります。",
        "jp": "あした、だいがくの テストが あります。",
        "romaji": "Ashita, daigaku no tesuto ga arimasu.",
        "vn": "Ngày mai có bài kiểm tra ở trường đại học."
      },
      {
        "kanji": "ですから、今晩はたくさん勉強しなければなりません。",
        "jp": "ですから、こんばんは たくさん べんきょうしなければ なりません。",
        "romaji": "Desukara, konban wa takusan benkyou shinakereba narimasen.",
        "vn": "Vì vậy, tối nay tôi phải học rất nhiều."
      },
      {
        "kanji": "眠くても、寝ません。",
        "jp": "ねむくても、ねません。",
        "romaji": "Nemukutemo, nemasen.",
        "vn": "Dù buồn ngủ tôi cũng sẽ không ngủ."
      },
      {
        "kanji": "コーヒーを飲んで、頑張ります。",
        "jp": "コーヒーを のんで、がんばります。",
        "romaji": "Koohii o nonde, ganbarimasu.",
        "vn": "Tôi sẽ uống cà phê và cố gắng."
      },
      {
        "kanji": "テストが終わったら、たくさん寝たいです。",
        "jp": "テストが おわったら、たくさん ねたいです。",
        "romaji": "Tesuto ga owattara, takusan netai desu.",
        "vn": "Khi kiểm tra xong, tôi muốn ngủ thật nhiều."
      }
    ],
    "questions": [
      {
        "question": "どうして こんばん べんきょうしなければ なりませんか？ (Tại sao tối nay phải học?)",
        "options": ["あした テストが あるからです (Vì mai có kiểm tra)", "しゅくだいが あるからです (Vì có bài tập)", "せんせいが くるからです (Vì giáo viên sẽ đến)", "だいがくへ いくからです (Vì sẽ đi đại học)"],
        "answer": "あした テストが あるからです (Vì mai có kiểm tra)"
      },
      {
        "question": "ねむいとき、どうしますか？ (Làm gì khi buồn ngủ?)",
        "options": ["コーヒーを のんで がんばります (Uống cafe rồi cố gắng)", "はやく ねます (Ngủ sớm)", "テストを やめます (Bỏ bài kiểm tra)", "テレビを みます (Xem TV)"],
        "answer": "コーヒーを のんで がんばります (Uống cafe rồi cố gắng)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "夏休みになったら、国へ帰ります。",
        "jp": "なつやすみに なったら、くにへ かえります。",
        "romaji": "Natsuyasumi ni nattara, kuni e kaerimasu.",
        "vn": "Nếu đến kỳ nghỉ hè, tôi sẽ về nước."
      },
      {
        "kanji": "国へ帰ったら、家族と旅行に行きたいです。",
        "jp": "くにへ かえったら、かぞくと りょこうに いきたいです。",
        "romaji": "Kuni e kaettara, kazoku to ryokou ni ikitai desu.",
        "vn": "Sau khi về nước, tôi muốn đi du lịch cùng gia đình."
      },
      {
        "kanji": "日本の友達も私の国へ遊びに来ます。",
        "jp": "にほんの ともだちも わたしの くにへ あそびに きます。",
        "romaji": "Nihon no tomodachi mo watashi no kuni e asobi ni kimasu.",
        "vn": "Người bạn Nhật Bản cũng sẽ đến nước tôi chơi."
      },
      {
        "kanji": "ですから、友達を案内しなければなりません。",
        "jp": "ですから、ともだちを あんないしなければ なりません。",
        "romaji": "Desukara, tomodachi o annai shinakereba narimasen.",
        "vn": "Vì vậy tôi phải hướng dẫn cho bạn ấy."
      },
      {
        "kanji": "とても忙しくても、きっと楽しいと思います。",
        "jp": "とても いそがしくても、きっと たのしいと おもいます。",
        "romaji": "Totemo isogashikutemo, kitto tanoshii to omoimasu.",
        "vn": "Cho dù rất bận, nhưng tôi nghĩ chắc chắn sẽ rất vui."
      }
    ],
    "questions": [
      {
        "question": "なつやすみに なったら どうしますか？ (Nếu nghỉ hè sẽ làm gì?)",
        "options": ["くにへ かえります (Về nước)", "にほんを りょこうします (Du lịch Nhật Bản)", "アルバイトを します (Làm thêm)", "ともだちの くにへ いきます (Đến nước của bạn)"],
        "answer": "くにへ かえります (Về nước)"
      },
      {
        "question": "どうして ともだちを あんないしなければ なりませんか？ (Tại sao phải hướng dẫn cho bạn?)",
        "options": ["ともだちが あそびに くるからです (Vì bạn sẽ đến chơi)", "ともだちが みちが わからないからです (Vì bạn không biết đường)", "ともだちが びょうきだからです (Vì bạn bị ốm)", "ともだちが おかねが ないからです (Vì bạn không có tiền)"],
        "answer": "ともだちが あそびに くるからです (Vì bạn sẽ đến chơi)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "いそがしくても、たのしいと おもっています。(Nghĩ là dù bận nhưng sẽ vui)",
          "いそがしいから、たのしくないと おもっています。(Nghĩ là vì bận nên không vui)",
          "ともだちは にほんへ あそびに きます。(Bạn sẽ đến Nhật chơi)",
          "このひとは なつやすみに どこも いきません。(Người này nghỉ hè không đi đâu cả)"
        ],
        "answer": "いそがしくても、たのしいと おもっています。(Nghĩ là dù bận nhưng sẽ vui)"
      }
    ]
  }
]);
