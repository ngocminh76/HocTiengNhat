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

// Lesson 9: 2 readings needed
appendReadings(9, [
  {
    "title": "わたしの しゅみ",
    "titleVn": "④ Sở thích của tôi",
    "lines": [
      {
        "kanji": "私の趣味は音楽と映画です。",
        "jp": "わたしの しゅみは おんがくと えいがです。",
        "romaji": "Watashi no shumi wa ongaku to eiga desu.",
        "vn": "Sở thích của tôi là âm nhạc và phim ảnh."
      },
      {
        "kanji": "日本の音楽が大好きです。",
        "jp": "にほんの おんがくが だいすきです。",
        "romaji": "Nihon no ongaku ga daisuki desu.",
        "vn": "Tôi rất thích âm nhạc Nhật Bản."
      },
      {
        "kanji": "毎日、うちで音楽を聞きます。",
        "jp": "まいにち、うちで おんがくを ききます。",
        "romaji": "Mainichi, uchi de ongaku o kikimasu.",
        "vn": "Mỗi ngày tôi nghe nhạc ở nhà."
      },
      {
        "kanji": "日本の映画も好きですが、あまり見ません。",
        "jp": "にほんの えいがも すきですが、あまり みません。",
        "romaji": "Nihon no eiga mo suki desu ga, amari mimasen.",
        "vn": "Tôi cũng thích phim Nhật nhưng không xem nhiều lắm."
      },
      {
        "kanji": "時間がありませんから。",
        "jp": "じかんが ありませんから。",
        "romaji": "Jikan ga arimasen kara.",
        "vn": "Bởi vì không có thời gian."
      }
    ],
    "questions": [
      {
        "question": "このひとの しゅみは なんですか？ (Sở thích của người này là gì?)",
        "options": ["おんがくと えいが (Âm nhạc và phim ảnh)", "スポーツと どくしょ (Thể thao và đọc sách)", "えいがと スポーツ (Phim ảnh và thể thao)", "おんがくと どくしょ (Âm nhạc và đọc sách)"],
        "answer": "おんがくと えいが (Âm nhạc và phim ảnh)"
      },
      {
        "question": "どうして にほんの えいがを あまり みませんか？ (Tại sao không xem phim Nhật nhiều lắm?)",
        "options": ["じかんが ありませんから (Vì không có thời gian)", "きらいですから (Vì ghét)", "にほんごが わかりませんから (Vì không hiểu tiếng Nhật)", "おかねが ありませんから (Vì không có tiền)"],
        "answer": "じかんが ありませんから (Vì không có thời gian)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "A：木村さん、明日の晩、一緒に食事をしませんか。",
        "jp": "A：きむらさん、あしたの ばん、いっしょに しょくじを しませんか。",
        "romaji": "A: Kimura-san, ashita no ban, issho ni shokuji o shimasen ka.",
        "vn": "A: Anh Kimura, tối mai cùng đi ăn không?"
      },
      {
        "kanji": "B：すみません。明日はちょっと…。",
        "jp": "B：すみません。あしたは ちょっと…。",
        "romaji": "B: Sumimasen. Ashita wa chotto...",
        "vn": "B: Xin lỗi. Ngày mai thì hơi..."
      },
      {
        "kanji": "A：どうしてですか。",
        "jp": "A：どうしてですか。",
        "romaji": "A: Doushite desu ka.",
        "vn": "A: Sao vậy?"
      },
      {
        "kanji": "B：用事がありますから。",
        "jp": "B：ようじが ありますから。",
        "romaji": "B: Youji ga arimasu kara.",
        "vn": "B: Vì tôi có việc bận."
      },
      {
        "kanji": "A：そうですか。残念ですね。",
        "jp": "A：そうですか。ざんねんですね。",
        "romaji": "A: Sou desu ka. Zannen desu ne.",
        "vn": "A: Vậy à. Tiếc nhỉ."
      }
    ],
    "questions": [
      {
        "question": "Aさんは きむらさんを なにに さそいましたか？ (Người A đã rủ anh Kimura đi đâu?)",
        "options": ["しょくじ (Đi ăn)", "えいが (Xem phim)", "コンサート (Buổi hòa nhạc)", "かいもの (Mua sắm)"],
        "answer": "しょくじ (Đi ăn)"
      },
      {
        "question": "きむらさんは どうして しょくじに いきませんか？ (Tại sao anh Kimura không đi ăn?)",
        "options": ["ようじが ありますから (Vì có việc bận)", "お金が ありませんから (Vì không có tiền)", "しょくじが きらいですから (Vì ghét ăn uống)", "時間が ありませんから (Vì không có thời gian)"],
        "answer": "ようじが ありますから (Vì có việc bận)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "きむらさんは あしたの ばん しょくじに いきません。",
          "きむらさんは あしたの ばん しょくじに いきます。",
          "Aさんは きむらさんと 一緒に 映画を 見ます。",
          "Aさんは 用事があります。"
        ],
        "answer": "きむらさんは あしたの ばん しょくじに いきません。"
      }
    ]
  }
]);

// Lesson 10: 2 readings needed
appendReadings(10, [
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
        "options": ["えきの まえ (Trước nhà ga)", "えきの うしろ (Sau nhà ga)", "きっさてんの みぎ (Phải quán cafe)", "スーパーの ひだり (Trái siêu thị)"],
        "answer": "えきの まえ (Trước nhà ga)"
      },
      {
        "question": "ほんやの みぎに なにが ありますか？ (Bên phải hiệu sách có gì?)",
        "options": ["きっさてん (Quán cafe)", "スーパー (Siêu thị)", "えき (Nhà ga)", "としょかん (Thư viện)"],
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
        "options": ["じてんしゃ (Xe đạp)", "バス (Xe buýt)", "あるいて (Đi bộ)", "でんしゃ (Tàu điện)"],
        "answer": "じてんしゃ (Xe đạp)"
      },
      {
        "question": "やすみの ひに こうえんに だれが いますか？ (Ngày nghỉ công viên có ai?)",
        "options": ["こどもと いぬ (Trẻ em và chó)", "こどもと ねこ (Trẻ em và mèo)", "がくせいと いぬ (Sinh viên và chó)", "おとなと いぬ (Người lớn và chó)"],
        "answer": "こどもと いぬ (Trẻ em và chó)"
      },
      {
        "question": "こうえんは どうですか？ (Công viên thì như thế nào?)",
        "options": ["にぎやかです (Nhộn nhịp)", "しずかです (Yên tĩnh)", "おおきいです (To lớn)", "きれいです (Đẹp)"],
        "answer": "にぎやかです (Nhộn nhịp)"
      }
    ]
  }
]);

// Lesson 11: 3 readings needed
appendReadings(11, [
  {
    "title": "かぞくの しゃしん",
    "titleVn": "③ Ảnh gia đình",
    "lines": [
      {
        "kanji": "これは私の家族の写真です。",
        "jp": "これは わたしの かぞくの しゃしんです。",
        "romaji": "Kore wa watashi no kazoku no shashin desu.",
        "vn": "Đây là ảnh gia đình của tôi."
      },
      {
        "kanji": "家族は5人です。",
        "jp": "かぞくは ごにんです。",
        "romaji": "Kazoku wa gonin desu.",
        "vn": "Gia đình có 5 người."
      },
      {
        "kanji": "父と母と兄が2人います。",
        "jp": "ちちと ははと あにが ふたり います。",
        "romaji": "Chichi to haha to ani ga futari imasu.",
        "vn": "Có bố, mẹ và 2 anh trai."
      },
      {
        "kanji": "一番上の兄は医者です。",
        "jp": "いちばん うえの あには いしゃです。",
        "romaji": "Ichiban ue no ani wa isha desu.",
        "vn": "Anh trai lớn nhất là bác sĩ."
      },
      {
        "kanji": "二番目の兄は会社員です。",
        "jp": "にばんめの あには かいしゃいんです。",
        "romaji": "Nibanme no ani wa kaishain desu.",
        "vn": "Anh trai thứ hai là nhân viên công ty."
      }
    ],
    "questions": [
      {
        "question": "かぞくは なんにんですか？ (Gia đình có mấy người?)",
        "options": ["5にん (5 người)", "4にん (4 người)", "6にん (6 người)", "3にん (3 người)"],
        "answer": "5にん (5 người)"
      },
      {
        "question": "きょうだいは なんにん いますか？ (Có mấy anh em?)",
        "options": ["あにが ふたり (2 anh trai)", "あにが ひとり (1 anh trai)", "おとうとが ふたり (2 em trai)", "いもうとが ふたり (2 em gái)"],
        "answer": "あにが ふたり (2 anh trai)"
      }
    ]
  },
  {
    "title": "きってを かいます",
    "titleVn": "④ Mua tem",
    "lines": [
      {
        "kanji": "A：すみません、80円の切手を10枚ください。",
        "jp": "A：すみません、はちじゅうえんの きってを じゅうまい ください。",
        "romaji": "A: Sumimasen, hachi-juu en no kitte o juu-mai kudasai.",
        "vn": "A: Xin lỗi, cho tôi 10 con tem loại 80 Yên."
      },
      {
        "kanji": "B：はい、800円です。",
        "jp": "B：はい、はっぴゃくえんです。",
        "romaji": "B: Hai, happyaku en desu.",
        "vn": "B: Vâng, 800 Yên."
      },
      {
        "kanji": "A：それから、はがきを5枚ください。",
        "jp": "A：それから、はがきを ごまい ください。",
        "romaji": "A: Sorekara, hagaki o go-mai kudasai.",
        "vn": "A: Với lại, cho tôi 5 tấm bưu thiếp."
      },
      {
        "kanji": "B：はい。はがきは1枚50円ですから、全部で1050円です。",
        "jp": "B：はい。はがきは いちまい ごじゅうえんですから、ぜんぶで せんごじゅうえんです。",
        "romaji": "B: Hai. Hagaki wa ichi-mai go-juu en desu kara, zenbu de sen go-juu en desu.",
        "vn": "B: Vâng. Bưu thiếp 1 tấm 50 Yên nên tổng cộng là 1050 Yên."
      }
    ],
    "questions": [
      {
        "question": "Aさんは きってを なんまい かいましたか？ (Người A đã mua mấy con tem?)",
        "options": ["10まい (10 tấm)", "5まい (5 tấm)", "8まい (8 tấm)", "1まい (1 tấm)"],
        "answer": "10まい (10 tấm)"
      },
      {
        "question": "ぜんぶで いくらですか？ (Tổng cộng bao nhiêu tiền?)",
        "options": ["1050えん (1050 Yên)", "800えん (800 Yên)", "250えん (250 Yên)", "850えん (850 Yên)"],
        "answer": "1050えん (1050 Yên)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私は一週間に3回スーパーへ行きます。",
        "jp": "わたしは いっしゅうかんに さんかい スーパーへ いきます。",
        "romaji": "Watashi wa isshuukan ni san-kai suupaa e ikimasu.",
        "vn": "Tôi đi siêu thị 3 lần một tuần."
      },
      {
        "kanji": "りんごを4つと、みかんを6つ買いました。",
        "jp": "りんごを よっつと、みかんを むっつ かいました。",
        "romaji": "Ringo o yottsu to, mikan o muttsu kaimashita.",
        "vn": "Đã mua 4 quả táo và 6 quả quýt."
      },
      {
        "kanji": "家族で一緒に食べます。",
        "jp": "かぞくで いっしょに たべます。",
        "romaji": "Kazoku de issho ni tabemasu.",
        "vn": "Ăn cùng với gia đình."
      },
      {
        "kanji": "りんごは1つ100円です。みかんは1つ50円です。",
        "jp": "りんごは ひとつ ひゃくえんです。みかんは ひとつ ごじゅうえんです。",
        "romaji": "Ringo wa hitotsu hyaku en desu. Mikan wa hitotsu go-juu en desu.",
        "vn": "Táo 100 Yên 1 quả. Quýt 50 Yên 1 quả."
      }
    ],
    "questions": [
      {
        "question": "いっしゅうかんに なんかい スーパーへ いきますか？ (Một tuần đi siêu thị mấy lần?)",
        "options": ["3かい (3 lần)", "4かい (4 lần)", "1かい (1 lần)", "6かい (6 lần)"],
        "answer": "3かい (3 lần)"
      },
      {
        "question": "りんごは いくらですか？ (Táo giá bao nhiêu?)",
        "options": ["ひとつ 100えん (1 quả 100 Yên)", "ひとつ 50えん (1 quả 50 Yên)", "よっつ 100えん (4 quả 100 Yên)", "むっつ 50えん (6 quả 50 Yên)"],
        "answer": "ひとつ 100えん (1 quả 100 Yên)"
      },
      {
        "question": "みかんを いくつ かいましたか？ (Đã mua mấy quả quýt?)",
        "options": ["6つ (6 quả)", "4つ (4 quả)", "3つ (3 quả)", "1つ (1 quả)"],
        "answer": "6つ (6 quả)"
      }
    ]
  }
]);

// Lesson 12: 3 readings needed
appendReadings(12, [
  {
    "title": "にほんの きせつ",
    "titleVn": "③ Các mùa ở Nhật Bản",
    "lines": [
      {
        "kanji": "日本の季節は４つあります。",
        "jp": "にほんの きせつは よっつ あります。",
        "romaji": "Nihon no kisetsu wa yottsu arimasu.",
        "vn": "Các mùa của Nhật Bản thì có 4 mùa."
      },
      {
        "kanji": "春と夏と秋と冬です。",
        "jp": "はると なつと あきと ふゆです。",
        "romaji": "Haru to natsu to aki to fuyu desu.",
        "vn": "Đó là xuân, hạ, thu, đông."
      },
      {
        "kanji": "春は暖かいです。桜が綺麗です。",
        "jp": "はるは あたたかいです。さくらが きれいです。",
        "romaji": "Haru wa atatakai desu. Sakura ga kirei desu.",
        "vn": "Mùa xuân thì ấm áp. Hoa anh đào rất đẹp."
      },
      {
        "kanji": "夏はとても暑いです。海で泳ぎます。",
        "jp": "なつは とても あついです。うみで およぎます。",
        "romaji": "Natsu wa totemo atsui desu. Umi de oyogimasu.",
        "vn": "Mùa hè thì rất nóng. Bơi ở biển."
      },
      {
        "kanji": "私は秋が一番好きです。涼しいですから。",
        "jp": "わたしは あきが いちばん すきです。すずしいですから。",
        "romaji": "Watashi wa aki ga ichiban suki desu. Suzushii desu kara.",
        "vn": "Tôi thích mùa thu nhất. Vì nó mát mẻ."
      }
    ],
    "questions": [
      {
        "question": "にほんの きせつは いくつ ありますか？ (Nhật Bản có mấy mùa?)",
        "options": ["4つ (4 mùa)", "3つ (3 mùa)", "2つ (2 mùa)", "1つ (1 mùa)"],
        "answer": "4つ (4 mùa)"
      },
      {
        "question": "このひとは どの きせつが いちばん すきですか？ (Người này thích mùa nào nhất?)",
        "options": ["あき (Mùa thu)", "はる (Mùa xuân)", "なつ (Mùa hè)", "ふゆ (Mùa đông)"],
        "answer": "あき (Mùa thu)"
      }
    ]
  },
  {
    "title": "きのうの てんき",
    "titleVn": "④ Thời tiết hôm qua",
    "lines": [
      {
        "kanji": "昨日の天気は雨でした。",
        "jp": "きのうの てんきは あめでした。",
        "romaji": "Kinou no tenki wa ame deshita.",
        "vn": "Thời tiết hôm qua là mưa."
      },
      {
        "kanji": "とても寒かったです。",
        "jp": "とても さむかったです。",
        "romaji": "Totemo samukatta desu.",
        "vn": "Trời rất lạnh."
      },
      {
        "kanji": "ですから、どこも行きませんでした。",
        "jp": "ですから、どこも いきませんでした。",
        "romaji": "Desu kara, doko mo ikimasen deshita.",
        "vn": "Do đó, tôi đã không đi đâu cả."
      },
      {
        "kanji": "一日中うちで本を読みました。",
        "jp": "いちにちじゅう うちで ほんを よみました。",
        "romaji": "Ichinichijuu uchi de hon o yomimashita.",
        "vn": "Cả ngày tôi đọc sách ở nhà."
      },
      {
        "kanji": "今日はいい天気です。",
        "jp": "きょうは いい てんきです。",
        "romaji": "Kyou wa ii tenki desu.",
        "vn": "Hôm nay thì thời tiết đẹp."
      }
    ],
    "questions": [
      {
        "question": "きのうの てんきは どうでしたか？ (Thời tiết hôm qua như thế nào?)",
        "options": ["あめで さむかったです (Mưa và lạnh)", "はれで あつかったです (Nắng và nóng)", "あめで あたたかかったです (Mưa và ấm)", "はれで さむかったです (Nắng và lạnh)"],
        "answer": "あめで さむかったです (Mưa và lạnh)"
      },
      {
        "question": "きのう なにを しましたか？ (Hôm qua đã làm gì?)",
        "options": ["うちで ほんを よみました (Đọc sách ở nhà)", "かいものに いきました (Đi mua sắm)", "えいがを みました (Xem phim)", "どこも いきませんでした。ねました。(Không đi đâu, đã ngủ)"],
        "answer": "うちで ほんを よみました (Đọc sách ở nhà)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "先週、北海道へ行きました。",
        "jp": "せんしゅう、ほっかいどうへ いきました。",
        "romaji": "Senshuu, Hokkaido e ikimashita.",
        "vn": "Tuần trước tôi đã đi Hokkaido."
      },
      {
        "kanji": "北海道は東京よりずっと寒かったです。",
        "jp": "ほっかいどうは とうきょうより ずっと さむかったです。",
        "romaji": "Hokkaido wa Toukyou yori zutto samukatta desu.",
        "vn": "Hokkaido đã lạnh hơn Tokyo rất nhiều."
      },
      {
        "kanji": "雪がたくさんありました。",
        "jp": "ゆきが たくさん ありました。",
        "romaji": "Yuki ga takusan arimashita.",
        "vn": "Đã có rất nhiều tuyết."
      },
      {
        "kanji": "スキーをしました。とても楽しかったです。",
        "jp": "スキーを しました。とても たのしかったです。",
        "romaji": "Sukii o shimashita. Totemo tanoshikatta desu.",
        "vn": "Tôi đã trượt tuyết. Rất vui."
      },
      {
        "kanji": "来年も行きたいです。",
        "jp": "らいねんも いきたいです。",
        "romaji": "Rainen mo ikitai desu.",
        "vn": "Năm sau cũng muốn đi."
      }
    ],
    "questions": [
      {
        "question": "ほっかいどうと とうきょうと どちらが さむいですか？ (Hokkaido và Tokyo, nơi nào lạnh hơn?)",
        "options": ["ほっかいどう (Hokkaido)", "とうきょう (Tokyo)", "おなじです (Giống nhau)", "わかりません (Không biết)"],
        "answer": "ほっかいどう (Hokkaido)"
      },
      {
        "question": "ほっかいどうで なにを しましたか？ (Đã làm gì ở Hokkaido?)",
        "options": ["スキー (Trượt tuyết)", "かいもの (Mua sắm)", "およぎます (Bơi)", "てがみを かきます (Viết thư)"],
        "answer": "スキー (Trượt tuyết)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "ほっかいどうは とうきょうより さむかったです。",
          "ほっかいどうは とうきょうより あつかったです。",
          "ほっかいどうで ゆきは ありませんでした。",
          "らいねんは ほっかいどうへ いきません。"
        ],
        "answer": "ほっかいどうは とうきょうより さむかったです。"
      }
    ]
  }
]);
