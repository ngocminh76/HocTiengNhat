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

// Lesson 13: 5 readings needed (Wanting things / Wanting to do things / Going to do something)
appendReadings(13, [
  {
    "title": "あたらしい くるま",
    "titleVn": "① Chiếc xe mới",
    "lines": [
      {
        "kanji": "私は今、車が欲しいです。",
        "jp": "わたしは いま、くるまが ほしいです。",
        "romaji": "Watashi wa ima, kuruma ga hoshii desu.",
        "vn": "Bây giờ tôi muốn có một chiếc xe ô tô."
      },
      {
        "kanji": "毎日、電車で会社へ行きます。",
        "jp": "まいにち、でんしゃで かいしゃへ いきます。",
        "romaji": "Mainichi, densha de kaisha e ikimasu.",
        "vn": "Mỗi ngày tôi đi tàu điện đến công ty."
      },
      {
        "kanji": "電車は人が多いですから、疲れます。",
        "jp": "でんしゃは ひとが おおいですか、つかれます。",
        "romaji": "Densha wa hito ga ooi desu kara, tsukaremasu.",
        "vn": "Tàu điện thì đông người nên rất mệt mỏi."
      },
      {
        "kanji": "赤いスポーツカーが欲しいです。",
        "jp": "あかい スポーツカーが ほしいです。",
        "romaji": "Akai supootsukaa ga hoshii desu.",
        "vn": "Tôi muốn một chiếc xe thể thao màu đỏ."
      },
      {
        "kanji": "とても高いですが、買いたいです。",
        "jp": "とても たかいですが、かいたいです。",
        "romaji": "Totemo takai desu ga, kaitai desu.",
        "vn": "Rất đắt nhưng tôi muốn mua."
      }
    ],
    "questions": [
      {
        "question": "このひとは いま なにが ほしいですか？ (Người này bây giờ muốn cái gì?)",
        "options": ["くるま (Xe ô tô)", "でんしゃ (Tàu điện)", "じてんしゃ (Xe đạp)", "うち (Nhà)"],
        "answer": "くるま (Xe ô tô)"
      },
      {
        "question": "どうして くるまが ほしいですか？ (Tại sao lại muốn ô tô?)",
        "options": ["でんしゃは つかれますから (Vì đi tàu điện mệt mỏi)", "でんしゃが きらいですから (Vì ghét tàu điện)", "スポーツカーが すきですから (Vì thích xe thể thao)", "お金が ありますから (Vì có tiền)"],
        "answer": "でんしゃは つかれますから (Vì đi tàu điện mệt mỏi)"
      }
    ]
  },
  {
    "title": "きょうの しょくじ",
    "titleVn": "② Bữa ăn hôm nay",
    "lines": [
      {
        "kanji": "A：お腹が空きましたね。",
        "jp": "A：おなかが すきましたね。",
        "romaji": "A: Onaka ga sukimashita ne.",
        "vn": "A: Đói bụng rồi nhỉ."
      },
      {
        "kanji": "B：ええ、何か食べたいです。",
        "jp": "B：ええ、なにか たべたいです。",
        "romaji": "B: Ee, nanika tabetai desu.",
        "vn": "B: Vâng, tôi muốn ăn cái gì đó."
      },
      {
        "kanji": "A：どこで食べますか。",
        "jp": "A：どこで たべますか。",
        "romaji": "A: Doko de tabemasu ka.",
        "vn": "A: Mình ăn ở đâu đây?"
      },
      {
        "kanji": "B：あそこのレストランへ入りましょう。",
        "jp": "B：あそこの レストランへ はいりましょう。",
        "romaji": "B: Asoko no resutoran e hairimashou.",
        "vn": "B: Hãy vào nhà hàng đằng kia đi."
      },
      {
        "kanji": "A：いいですね。私は天ぷらが食べたいです。",
        "jp": "A：いいですね。わたしは てんぷらが たべたいです。",
        "romaji": "A: Ii desu ne. Watashi wa tenpura ga tabetai desu.",
        "vn": "A: Tuyệt đấy. Tôi muốn ăn Tempura."
      }
    ],
    "questions": [
      {
        "question": "ふたりは どこへ いきますか？ (Hai người sẽ đi đâu?)",
        "options": ["レストラン (Nhà hàng)", "きっさてん (Quán cafe)", "スーパー (Siêu thị)", "えき (Nhà ga)"],
        "answer": "レストラン (Nhà hàng)"
      },
      {
        "question": "Aさんは なにを たべたいですか？ (Người A muốn ăn cái gì?)",
        "options": ["てんぷら (Tempura)", "すし (Sushi)", "さしみ (Sashimi)", "ラーメン (Mì Ramen)"],
        "answer": "てんぷら (Tempura)"
      }
    ]
  },
  {
    "title": "デパートへ いきます",
    "titleVn": "③ Đi trung tâm thương mại",
    "lines": [
      {
        "kanji": "明日、母とデパートへ行きます。",
        "jp": "あした、ははと デパートへ いきます。",
        "romaji": "Ashita, haha to depaato e ikimasu.",
        "vn": "Ngày mai, tôi sẽ đi trung tâm thương mại với mẹ."
      },
      {
        "kanji": "デパートへ靴を買いに行きます。",
        "jp": "デパートへ くつを かいに いきます。",
        "romaji": "Depaato e kutsu o kai ni ikimasu.",
        "vn": "Đi TTTM để mua giày."
      },
      {
        "kanji": "それから、映画を見に行きます。",
        "jp": "それから、えいがを みに いきます。",
        "romaji": "Sorekara, eiga o mi ni ikimasu.",
        "vn": "Sau đó, đi xem phim."
      },
      {
        "kanji": "デパートのレストランで食事をします。",
        "jp": "デパートの レストランで しょくじを します。",
        "romaji": "Depaato no resutoran de shokuji o shimasu.",
        "vn": "Dùng bữa tại nhà hàng của TTTM."
      },
      {
        "kanji": "明日は忙しいですが、楽しいです。",
        "jp": "あしたは いそがしいですが、たのしいです。",
        "romaji": "Ashita wa isogashii desu ga, tanoshii desu.",
        "vn": "Ngày mai tuy bận nhưng rất vui."
      }
    ],
    "questions": [
      {
        "question": "あした だれと でかけますか？ (Ngày mai ra ngoài với ai?)",
        "options": ["はは (Mẹ)", "ちち (Bố)", "ともだち (Bạn)", "ひとり (Một mình)"],
        "answer": "はは (Mẹ)"
      },
      {
        "question": "デパートへ なにを しに いきますか？ (Đi TTTM để làm gì?)",
        "options": ["くつを かいに いきます (Để mua giày)", "えいがを みに いきます (Để xem phim)", "しょくじを しに いきます (Để dùng bữa)", "ほんを かいに いきます (Để mua sách)"],
        "answer": "くつを かいに いきます (Để mua giày)"
      }
    ]
  },
  {
    "title": "メニュー",
    "titleVn": "④ Thực đơn (Menu)",
    "lines": [
      {
        "kanji": "【 ランチメニュー 】",
        "jp": "【 ランチメニュー 】",
        "romaji": "[ Ranchi Menyuu ]",
        "vn": "[ Thực đơn bữa trưa ]"
      },
      {
        "kanji": "・天ぷら定食 ･･･ 800円",
        "jp": "・てんぷらていしょく ･･･ はっぴゃくえん",
        "romaji": "- Tenpura teishoku ... happyaku en",
        "vn": "- Suất cơm Tempura ... 800 Yên"
      },
      {
        "kanji": "・牛どん ･･･ 500円",
        "jp": "・ぎゅうどん ･･･ ごひゃくえん",
        "romaji": "- Gyuudon ... gohyaku en",
        "vn": "- Cơm thịt bò ... 500 Yên"
      },
      {
        "kanji": "・うどん ･･･ 400円",
        "jp": "・うどん ･･･ よんひゃくえん",
        "romaji": "- Udon ... yonhyaku en",
        "vn": "- Mì Udon ... 400 Yên"
      },
      {
        "kanji": "※ コーヒーか 紅茶が つきます。",
        "jp": "※ コーヒーか こうちゃが つきます。",
        "romaji": "※ Koohii ka koucha ga tsukimasu.",
        "vn": "※ Có kèm theo cà phê hoặc hồng trà."
      }
    ],
    "questions": [
      {
        "question": "ぎゅうどんは いくらですか？ (Cơm thịt bò giá bao nhiêu?)",
        "options": ["500えん (500 Yên)", "800えん (800 Yên)", "400えん (400 Yên)", "600えん (600 Yên)"],
        "answer": "500えん (500 Yên)"
      },
      {
        "question": "ランチを たべます。なにを のむことができますか？ (Ăn trưa. Có thể uống được gì?)",
        "options": ["コーヒーか こうちゃ (Cà phê hoặc hồng trà)", "ジュースか コーヒー (Nước hoa quả hoặc cafe)", "おちゃか こうちゃ (Trà xanh hoặc hồng trà)", "ビールか コーヒー (Bia hoặc cafe)"],
        "answer": "コーヒーか こうちゃ (Cà phê hoặc hồng trà)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "もうすぐお正月です。",
        "jp": "もうすぐ おしょうがつです。",
        "romaji": "Mousugu oshougatsu desu.",
        "vn": "Sắp đến Tết rồi."
      },
      {
        "kanji": "私は国の家族に会いたいです。",
        "jp": "わたしは くにの かぞくに あいたいです。",
        "romaji": "Watashi wa kuni no kazoku ni aitai desu.",
        "vn": "Tôi muốn gặp gia đình ở trong nước."
      },
      {
        "kanji": "ですから、来週、国へ帰ります。",
        "jp": "ですから、らいしゅう、くにへ かえります。",
        "romaji": "Desukara, raishuu, kuni e kaerimasu.",
        "vn": "Vì vậy, tuần sau tôi sẽ về nước."
      },
      {
        "kanji": "国で家族と食事をします。",
        "jp": "くにで かぞくと しょくじを します。",
        "romaji": "Kuni de kazoku to shokuji o shimasu.",
        "vn": "Ở trong nước, tôi sẽ ăn uống cùng gia đình."
      },
      {
        "kanji": "お祭りに写真を撮りに行きます。",
        "jp": "おまつりに しゃしんを とりに いきます。",
        "romaji": "Omatsuri ni shashin o tori ni ikimasu.",
        "vn": "Sẽ đi chụp ảnh tại lễ hội."
      }
    ],
    "questions": [
      {
        "question": "どうして くにへ かえりますか？ (Tại sao lại về nước?)",
        "options": ["かぞくに あいたいから (Vì muốn gặp gia đình)", "おまつりが ありますから (Vì có lễ hội)", "おしょうがつが きらいですから (Vì ghét Tết)", "ともだちと あそびたいから (Vì muốn đi chơi với bạn)"],
        "answer": "かぞくに あいたいから (Vì muốn gặp gia đình)"
      },
      {
        "question": "くにで なにを しますか？ (Ở trong nước sẽ làm gì?)",
        "options": ["かぞくと しょくじを します (Dùng bữa với gia đình)", "デパートで かいものを します (Mua sắm ở TTTM)", "えいがを みに いきます (Đi xem phim)", "ほんを よみます (Đọc sách)"],
        "answer": "かぞくと しょくじを します (Dùng bữa với gia đình)"
      },
      {
        "question": "どこへ しゃしんを とりに いきますか？ (Đi chụp ảnh ở đâu?)",
        "options": ["おまつり (Lễ hội)", "こうえん (Công viên)", "きっさてん (Quán cafe)", "やま (Núi)"],
        "answer": "おまつり (Lễ hội)"
      }
    ]
  }
]);

// Lesson 14: 5 readings needed
appendReadings(14, [
  {
    "title": "タクシーで",
    "titleVn": "① Trên taxi",
    "lines": [
      {
        "kanji": "A：すみません、あの信号を右へ曲がってください。",
        "jp": "A：すみません、あの しんごうを みぎへ まがって ください。",
        "romaji": "A: Sumimasen, ano shingou o migi e magatte kudasai.",
        "vn": "A: Xin lỗi, xin hãy rẽ phải ở đèn giao thông kia."
      },
      {
        "kanji": "B：はい、右ですね。",
        "jp": "B：はい、みぎですね。",
        "romaji": "B: Vâng, rẽ phải nhé.",
        "vn": "B: Vâng, rẽ phải nhé."
      },
      {
        "kanji": "A：まっすぐ行ってください。",
        "jp": "A：まっすぐ いって ください。",
        "romaji": "A: Massugu itte kudasai.",
        "vn": "A: Xin hãy đi thẳng."
      },
      {
        "kanji": "B：はい。あ、郵便局がありますよ。",
        "jp": "B：はい。あ、ゆうびんきょくが ありますよ。",
        "romaji": "B: Hai. Ah, yuubinkyoku ga arimasu yo.",
        "vn": "B: Vâng. A, có cái bưu điện kìa."
      },
      {
        "kanji": "A：その前で止めてください。",
        "jp": "A：その まえで とめて ください。",
        "romaji": "A: Sono mae de tomete kudasai.",
        "vn": "A: Xin hãy dừng lại ở trước đó."
      }
    ],
    "questions": [
      {
        "question": "Aさんは どこで まがりますか？ (Người A rẽ ở đâu?)",
        "options": ["しんごう (Đèn giao thông)", "ゆうびんきょく (Bưu điện)", "えき (Nhà ga)", "スーパー (Siêu thị)"],
        "answer": "しんごう (Đèn giao thông)"
      },
      {
        "question": "タクシーは どこで とまりますか？ (Taxi dừng lại ở đâu?)",
        "options": ["ゆうびんきょくの まえ (Trước bưu điện)", "ゆうびんきょくの うしろ (Sau bưu điện)", "しんごうの まえ (Trước đèn giao thông)", "えきの まえ (Trước nhà ga)"],
        "answer": "ゆうびんきょくの まえ (Trước bưu điện)"
      }
    ]
  },
  {
    "title": "あめが ふっています",
    "titleVn": "② Trời đang mưa",
    "lines": [
      {
        "kanji": "A：今、雨が降っていますか。",
        "jp": "A：いま、あめが ふって いますか。",
        "romaji": "A: Ima, ame ga futte imasu ka.",
        "vn": "A: Bây giờ trời đang mưa phải không?"
      },
      {
        "kanji": "B：はい、降っています。",
        "jp": "B：はい、ふって います。",
        "romaji": "B: Hai, futte imasu.",
        "vn": "B: Vâng, đang mưa."
      },
      {
        "kanji": "A：タクシーを呼びましょうか。",
        "jp": "A：タクシーを よびましょうか。",
        "romaji": "A: Takushii o yobimashou ka.",
        "vn": "A: Để tôi gọi taxi nhé?"
      },
      {
        "kanji": "B：ええ、お願いします。",
        "jp": "B：ええ、おねがいします。",
        "romaji": "B: Ee, onegaishimasu.",
        "vn": "B: Vâng, xin nhờ anh."
      },
      {
        "kanji": "A：少し待ってください。",
        "jp": "A：すこし まって ください。",
        "romaji": "A: Sukoshi matte kudasai.",
        "vn": "A: Hãy đợi một chút."
      }
    ],
    "questions": [
      {
        "question": "いま てんきは どうですか？ (Bây giờ thời tiết thế nào?)",
        "options": ["あめが ふっています (Đang mưa)", "ゆきが ふっています (Đang rơi tuyết)", "はれています (Đang nắng)", "くもっています (Nhiều mây)"],
        "answer": "あめが ふっています (Đang mưa)"
      },
      {
        "question": "Aさんは なにを しますか？ (Người A sẽ làm gì?)",
        "options": ["タクシーを よびます (Gọi taxi)", "あめを ふらせます (Làm mưa rơi)", "うちへ かえります (Về nhà)", "えきへ いきます (Đi ga tàu)"],
        "answer": "タクシーを よびます (Gọi taxi)"
      }
    ]
  },
  {
    "title": "てつだいます",
    "titleVn": "③ Sẽ giúp đỡ",
    "lines": [
      {
        "kanji": "A：荷物が多いですね。手伝いましょうか。",
        "jp": "A：にもつが おおいですね。てつだいましょうか。",
        "romaji": "A: Nimotsu ga ooi desu ne. Tetsudaimashou ka.",
        "vn": "A: Hành lý nhiều quá nhỉ. Để tôi giúp một tay nhé."
      },
      {
        "kanji": "B：ありがとうございます。",
        "jp": "B：ありがとうございます。",
        "romaji": "B: Arigatou gozaimasu.",
        "vn": "B: Cảm ơn anh."
      },
      {
        "kanji": "A：この鞄を持ちましょうか。",
        "jp": "A：この かばんを もちましょうか。",
        "romaji": "A: Kono kaban o mochimashou ka.",
        "vn": "A: Để tôi mang cái cặp này nhé."
      },
      {
        "kanji": "B：いいえ、結構です。",
        "jp": "B：いいえ、けっこうです。",
        "romaji": "B: Iie, kekkou desu.",
        "vn": "B: Không, đủ rồi (không cần đâu)."
      },
      {
        "kanji": "B：その本をお願いします。",
        "jp": "B：その ほんを おねがいします。",
        "romaji": "B: Sono hon o onegaishimasu.",
        "vn": "B: Nhờ anh xách quyển sách đó."
      }
    ],
    "questions": [
      {
        "question": "Aさんは なにを てつだいますか？ (Người A giúp cái gì?)",
        "options": ["ほんを もちます (Cầm sách)", "かばんを もちます (Cầm cặp)", "ドアを あけます (Mở cửa)", "タクシーを よびます (Gọi taxi)"],
        "answer": "ほんを もちます (Cầm sách)"
      },
      {
        "question": "Bさんは かばんを もちますか？ (Người B tự cầm cặp phải không?)",
        "options": ["はい (Vâng)", "いいえ (Không)", "わかりません (Không biết)", "Aさんが もちます (Người A cầm)"],
        "answer": "はい (Vâng)"
      }
    ]
  },
  {
    "title": "エアコンの スイッチ",
    "titleVn": "④ Công tắc điều hòa",
    "lines": [
      {
        "kanji": "A：暑いですね。エアコンをつけましょうか。",
        "jp": "A：あついですね。エアコンを つけましょうか。",
        "romaji": "A: Atsui desu ne. Eakon o tsukemashou ka.",
        "vn": "A: Nóng nhỉ. Để tôi bật điều hòa nhé?"
      },
      {
        "kanji": "B：ええ、つけてください。",
        "jp": "B：ええ、つけて ください。",
        "romaji": "B: Ee, tsukete kudasai.",
        "vn": "B: Vâng, hãy bật đi."
      },
      {
        "kanji": "A：すみません。エアコンのつけ方を教えてください。",
        "jp": "A：すみません。エアコンの つけかたを おしえて ください。",
        "romaji": "A: Sumimasen. Eakon no tsukekata o oshiete kudasai.",
        "vn": "A: Xin lỗi. Xin hãy chỉ cho tôi cách bật điều hòa."
      },
      {
        "kanji": "B：その赤いボタンを押してください。",
        "jp": "B：その あかい ボタンを おして ください。",
        "romaji": "B: Sono akai botan o oshite kudasai.",
        "vn": "B: Hãy bấm cái nút màu đỏ đó."
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
        "question": "へやは どうですか？ (Căn phòng thì sao?)",
        "options": ["あついです (Nóng)", "さむいです (Lạnh)", "あたたかいです (Ấm áp)", "すずしいです (Mát mẻ)"],
        "answer": "あついです (Nóng)"
      },
      {
        "question": "エアコンの つけかたは？ (Cách bật điều hòa thế nào?)",
        "options": ["あかい ボタンを おします (Bấm nút màu đỏ)", "あおい ボタンを おします (Bấm nút màu xanh)", "ドアを あけます (Mở cửa)", "スイッチを まわします (Xoay công tắc)"],
        "answer": "あかい ボタンを おします (Bấm nút màu đỏ)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "今、教室でテストをしています。",
        "jp": "いま、きょうしつで テストを しています。",
        "romaji": "Ima, kyoushitsu de tesuto o shite imasu.",
        "vn": "Bây giờ đang làm bài kiểm tra trong phòng học."
      },
      {
        "kanji": "先生が言いました。",
        "jp": "せんせいが いいました。",
        "romaji": "Sensei ga iimashita.",
        "vn": "Giáo viên đã nói."
      },
      {
        "kanji": "「辞書を使わないでください。」",
        "jp": "「じしょを つかわないで ください。」",
        "romaji": "\"Jisho o tsukawanaide kudasai.\"",
        "vn": "\"Xin đừng sử dụng từ điển.\""
      },
      {
        "kanji": "「隣の人と話さないでください。」",
        "jp": "「となりの ひとと はなさないで ください。」",
        "romaji": "\"Tonari no hito to hanasanaide kudasai.\"",
        "vn": "\"Xin đừng nói chuyện với người bên cạnh.\""
      },
      {
        "kanji": "「答えは鉛筆で書いてください。」",
        "jp": "「こたえは えんぴつで かいて ください。」",
        "romaji": "\"Kotae wa enpitsu de kaite kudasai.\"",
        "vn": "\"Câu trả lời xin hãy viết bằng bút chì.\""
      }
    ],
    "questions": [
      {
        "question": "いま なにを していますか？ (Bây giờ đang làm gì?)",
        "options": ["テストを しています (Đang làm bài kiểm tra)", "かいものを しています (Đang mua sắm)", "テレビを みています (Đang xem TV)", "ほんを よんでいます (Đang đọc sách)"],
        "answer": "テストを しています (Đang làm bài kiểm tra)"
      },
      {
        "question": "テストのとき、なにを しても いいですか？ (Khi kiểm tra, được làm gì?)",
        "options": ["えんぴつで こたえを かきます (Viết câu trả lời bằng bút chì)", "じしょを つかいます (Sử dụng từ điển)", "となりの ひとと はなします (Nói chuyện với người bên cạnh)", "ペンで こたえを かきます (Viết câu trả lời bằng bút mực)"],
        "answer": "えんぴつで こたえを かきます (Viết câu trả lời bằng bút chì)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "じしょを つかっては いけません。(Không được dùng từ điển)",
          "となりの ひとと はなしても いいです。(Được nói chuyện với người bên cạnh)",
          "こたえは ペンで かいて ください。(Hãy viết trả lời bằng bút)",
          "テストは うちで しています。(Đang làm bài kiểm tra ở nhà)"
        ],
        "answer": "じしょを つかっては いけません。(Không được dùng từ điển)"
      }
    ]
  }
]);

// Lesson 15: 5 readings needed
appendReadings(15, [
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
        "options": ["いいえ、いけません (Không, không được)", "はい、いいです (Vâng, được)", "わかりません (Không biết)", "はい、とっています (Vâng, đang chụp)"],
        "answer": "いいえ、いけません (Không, không được)"
      },
      {
        "question": "どこで しゃしんを とっても いいですか？ (Chụp ảnh ở đâu thì được?)",
        "options": ["そと (Bên ngoài)", "なか (Bên trong)", "ここ (Ở đây)", "うち (Nhà)"],
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
        "options": ["とうきょう (Tokyo)", "おおさか (Osaka)", "きょうと (Kyoto)", "アメリカ (Mỹ)"],
        "answer": "とうきょう (Tokyo)"
      },
      {
        "question": "あには なにを していますか？ (Anh trai đang làm gì?)",
        "options": ["だいがくで べんきょうしています (Học ở trường ĐH)", "くるまを つくっています (Chế tạo xe)", "えいごを おしえています (Dạy tiếng Anh)", "はたらいています (Làm việc)"],
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
        "options": ["ほんを かります (Mượn sách)", "ほんを かいます (Mua sách)", "ほんを かえします (Trả sách)", "しゃしんを とります (Chụp ảnh)"],
        "answer": "ほんを かります (Mượn sách)"
      },
      {
        "question": "いつ ほんを かえしますか？ (Bao giờ trả sách?)",
        "options": ["らいしゅうの きんようび (Thứ Sáu tuần sau)", "こんしゅうの きんようび (Thứ Sáu tuần này)", "あした (Ngày mai)", "らいげつ (Tháng sau)"],
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
        "options": ["シャワーを あびます (Tắm vòi sen)", "およぎます (Bơi)", "はしります (Chạy)", "たばこを すいます (Hút thuốc)"],
        "answer": "シャワーを あびます (Tắm vòi sen)"
      },
      {
        "question": "たばこを すっても いいですか？ (Hút thuốc được không?)",
        "options": ["いいえ、すってはいけません (Không, không được hút)", "はい、いいです (Vâng, được)", "はい、すってください (Vâng, hãy hút)", "わかりません (Không biết)"],
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
        "options": ["いいえ、どくしんです (Chưa, đang độc thân)", "はい、けっこんしています (Rồi, đã kết hôn)", "わかりません (Không biết)", "はい、かぞくが います (Vâng, có gia đình)"],
        "answer": "いいえ、どくしんです (Chưa, đang độc thân)"
      },
      {
        "question": "やまださんは なにを つくっていますか？ (Anh Yamada đang chế tạo cái gì?)",
        "options": ["コンピュータのソフト (Phần mềm máy tính)", "くるま (Ô tô)", "カメラ (Máy ảnh)", "テレビ (Ti vi)"],
        "answer": "コンピュータのソフト (Phần mềm máy tính)"
      },
      {
        "question": "どうして テレビを みませんか？ (Tại sao không xem ti vi?)",
        "options": ["いそがしいですから (Vì bận rộn)", "テレビが ありませんから (Vì không có TV)", "テレビが きらいですから (Vì ghét TV)", "お金が ありませんから (Vì không có tiền)"],
        "answer": "いそがしいですから (Vì bận rộn)"
      }
    ]
  }
]);
