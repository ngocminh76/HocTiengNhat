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

// Lesson 16: 5 readings needed
appendReadings(16, [
  {
    "title": "あさの じゅんび",
    "titleVn": "① Chuẩn bị buổi sáng",
    "lines": [
      {
        "kanji": "私は毎朝6時に起きて、シャワーを浴びます。",
        "jp": "わたしは まいあさ ろくじに おきて、シャワーを あびます。",
        "romaji": "Watashi wa maiasa rokuji ni okite, shawaa o abimasu.",
        "vn": "Mỗi sáng tôi thức dậy lúc 6 giờ, rồi tắm vòi sen."
      },
      {
        "kanji": "朝ごはんを食べてから、会社へ行きます。",
        "jp": "あさごはんを たべてから、かいしゃへ いきます。",
        "romaji": "Asagohan o tabete kara, kaisha e ikimasu.",
        "vn": "Sau khi ăn sáng, tôi đi đến công ty."
      },
      {
        "kanji": "会社は大阪にあります。",
        "jp": "かいしゃは おおさかに あります。",
        "romaji": "Kaisha wa Oosaka ni arimasu.",
        "vn": "Công ty nằm ở Osaka."
      },
      {
        "kanji": "駅から会社まで歩いて10分です。",
        "jp": "えきから かいしゃまで あるいて じっぷんです。",
        "romaji": "Eki kara kaisha made aruite jippun desu.",
        "vn": "Từ nhà ga đi bộ đến công ty mất 10 phút."
      },
      {
        "kanji": "仕事は忙しいですが、面白いです。",
        "jp": "しごとは いそがしいですが、おもしろいです。",
        "romaji": "Shigoto wa isogashii desu ga, omoshiroi desu.",
        "vn": "Công việc tuy bận rộn nhưng thú vị."
      }
    ],
    "questions": [
      {
        "question": "おきてから、まず なにを しますか？ (Sau khi thức dậy, việc đầu tiên làm gì?)",
        "options": ["シャワーを あびます (Tắm vòi sen)", "あさごはんを たべます (Ăn sáng)", "かいしゃへ いきます (Đi công ty)", "えきまで あるきます (Đi bộ ra ga)"],
        "answer": "シャワーを あびます (Tắm vòi sen)"
      },
      {
        "question": "いつ かいしゃへ いきますか？ (Khi nào đi đến công ty?)",
        "options": ["あさごはんを たべてから (Sau khi ăn sáng)", "シャワーを あびてから (Sau khi tắm)", "しごとを してから (Sau khi làm việc)", "おきてから すぐ (Ngay sau khi dậy)"],
        "answer": "あさごはんを たべてから (Sau khi ăn sáng)"
      }
    ]
  },
  {
    "title": "あたらしいうち",
    "titleVn": "② Ngôi nhà mới",
    "lines": [
      {
        "kanji": "A：木村さんの新しい家はどうですか。",
        "jp": "A：きむらさんの あたらしい いえは どうですか。",
        "romaji": "A: Kimura-san no atarashii ie wa dou desu ka.",
        "vn": "A: Ngôi nhà mới của anh Kimura như thế nào?"
      },
      {
        "kanji": "B：広くて、明るいです。",
        "jp": "B：ひろくて、あかるいです。",
        "romaji": "B: Hirokute, akarui desu.",
        "vn": "B: Rộng rãi và sáng sủa."
      },
      {
        "kanji": "A：いいですね。近くにスーパーがありますか。",
        "jp": "A：いいですね。ちかくに スーパーが ありますか。",
        "romaji": "A: Ii desu ne. Chikaku ni suupaa ga arimasu ka.",
        "vn": "A: Tuyệt nhỉ. Có siêu thị ở gần đó không?"
      },
      {
        "kanji": "B：はい。便利で、静かです。",
        "jp": "B：はい。べんりで、しずかです。",
        "romaji": "B: Hai. Benri de, shizuka desu.",
        "vn": "B: Vâng. Rất tiện lợi và yên tĩnh."
      },
      {
        "kanji": "A：今度、遊びに行ってもいいですか。",
        "jp": "A：こんど、あそびに いっても いいですか。",
        "romaji": "A: Kondo, asobi ni itte mo ii desu ka.",
        "vn": "A: Lần tới tôi đến chơi có được không?"
      }
    ],
    "questions": [
      {
        "question": "きむらさんの いえは どんな いえですか？ (Nhà của Kimura là nhà như thế nào?)",
        "options": ["ひろくて、あかるい いえ (Rộng và sáng)", "せまくて、くらい いえ (Hẹp và tối)", "ひろくて、くらい いえ (Rộng và tối)", "せまくて、あかるい いえ (Hẹp và sáng)"],
        "answer": "ひろくて、あかるい いえ (Rộng và sáng)"
      },
      {
        "question": "いえの まわりは どうですか？ (Xung quanh nhà thì sao?)",
        "options": ["べんりで、しずかです (Tiện lợi và yên tĩnh)", "ふべんで、しずかです (Bất tiện và yên tĩnh)", "べんりで、にぎやかです (Tiện lợi và nhộn nhịp)", "ふべんで、にぎやかです (Bất tiện và nhộn nhịp)"],
        "answer": "べんりで、しずかです (Tiện lợi và yên tĩnh)"
      }
    ]
  },
  {
    "title": "ぎんこうで",
    "titleVn": "③ Ở ngân hàng",
    "lines": [
      {
        "kanji": "A：すみません、お金を下ろしたいんですが。",
        "jp": "A：すみません、おかねを おろしたいんですが。",
        "romaji": "A: Sumimasen, okane o oroshitai n desu ga.",
        "vn": "A: Xin lỗi, tôi muốn rút tiền."
      },
      {
        "kanji": "B：じゃ、あそこのATMを使ってください。",
        "jp": "B：じゃ、あそこの ATMを つかって ください。",
        "romaji": "B: Ja, asoko no ATM o tsukatte kudasai.",
        "vn": "B: Vậy thì hãy dùng máy ATM đằng kia."
      },
      {
        "kanji": "A：使い方を教えてください。",
        "jp": "A：つかいかたを おしえて ください。",
        "romaji": "A: Tsukaikata o oshiete kudasai.",
        "vn": "A: Xin hãy chỉ cho tôi cách sử dụng."
      },
      {
        "kanji": "B：まず、ここにカードを入れてください。",
        "jp": "B：まず、ここに カードを いれて ください。",
        "romaji": "B: Mazu, koko ni kaado o irete kudasai.",
        "vn": "B: Trước tiên, hãy đút thẻ vào đây."
      },
      {
        "kanji": "B：次に、暗証番号を押してください。",
        "jp": "B：つぎに、あんしょうばんごうを おして ください。",
        "romaji": "B: Tsugini, anshoubangou o oshite kudasai.",
        "vn": "B: Tiếp theo, hãy bấm mã số bí mật."
      }
    ],
    "questions": [
      {
        "question": "Aさんは なにを したいですか？ (Người A muốn làm gì?)",
        "options": ["おかねを おろしたいです (Muốn rút tiền)", "おかねを いれたいです (Muốn nạp tiền)", "カードを つくりたいです (Muốn làm thẻ)", "あんしょうばんごうを かえたいです (Muốn đổi mã PIN)"],
        "answer": "おかねを おろしたいです (Muốn rút tiền)"
      },
      {
        "question": "まず、なにを しますか？ (Đầu tiên phải làm gì?)",
        "options": ["カードを いれます (Đút thẻ vào)", "あんしょうばんごうを おします (Bấm mã PIN)", "ボタンを おします (Bấm nút)", "おかねを だします (Lấy tiền ra)"],
        "answer": "カードを いれます (Đút thẻ vào)"
      }
    ]
  },
  {
    "title": "わたしの まち",
    "titleVn": "④ Thị trấn của tôi",
    "lines": [
      {
        "kanji": "私の町は緑が多くて、静かです。",
        "jp": "わたしの まちは みどりが おおくて、しずかです。",
        "romaji": "Watashi no machi wa midori ga ookute, shizuka desu.",
        "vn": "Thị trấn của tôi có nhiều cây xanh và yên tĩnh."
      },
      {
        "kanji": "町の真ん中に大きい川があります。",
        "jp": "まちの まんなかに おおきい かわが あります。",
        "romaji": "Machi no mannaka ni ookii kawa ga arimasu.",
        "vn": "Ở giữa thị trấn có một con sông lớn."
      },
      {
        "kanji": "駅の近くに図書館と市役所があります。",
        "jp": "えきの ちかくに としょかんと しやくしょが あります。",
        "romaji": "Eki no chikaku ni toshokan to shiyakusho ga arimasu.",
        "vn": "Gần ga có thư viện và tòa thị chính."
      },
      {
        "kanji": "便利ですが、大きいスーパーがありません。",
        "jp": "べんりですが、おおきい スーパーが ありません。",
        "romaji": "Benri desu ga, ookii suupaa ga arimasen.",
        "vn": "Tiện lợi nhưng lại không có siêu thị lớn."
      },
      {
        "kanji": "ですから、車で隣の町へ買い物に行きます。",
        "jp": "ですから、くるまで となりの まちへ かいものに いきます。",
        "romaji": "Desu kara, kuruma de tonari no machi e kaimono ni ikimasu.",
        "vn": "Vì thế, tôi lái xe sang thị trấn bên cạnh để mua sắm."
      }
    ],
    "questions": [
      {
        "question": "このまちは どんなまちですか？ (Thị trấn này như thế nào?)",
        "options": ["みどりが おおくて、しずかです (Nhiều cây xanh và yên tĩnh)", "みどりが おおくて、にぎやかです (Nhiều cây xanh và nhộn nhịp)", "かわが なくても、しずかです (Không có sông nhưng yên tĩnh)", "スーパーが あって、べんりです (Có siêu thị nên tiện lợi)"],
        "answer": "みどりが おおくて、しずかです (Nhiều cây xanh và yên tĩnh)"
      },
      {
        "question": "どうして となりの まちへ かいものに いきますか？ (Tại sao đi sang thị trấn bên cạnh mua sắm?)",
        "options": ["おおきい スーパーが ありませんから (Vì không có siêu thị lớn)", "としょかんが ありませんから (Vì không có thư viện)", "みどりが ありませんから (Vì không có cây xanh)", "くるまが ありませんから (Vì không có xe hơi)"],
        "answer": "おおきい スーパーが ありませんから (Vì không có siêu thị lớn)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "昨日の夜、熱がありました。",
        "jp": "きのうの よる、ねつが ありました。",
        "romaji": "Kinou no yoru, netsu ga arimashita.",
        "vn": "Tối qua tôi bị sốt."
      },
      {
        "kanji": "ですから、薬を飲んで寝ました。",
        "jp": "ですから、くすりを のんで ねました。",
        "romaji": "Desukara, kusuri o nonde nemashita.",
        "vn": "Vì vậy, tôi đã uống thuốc rồi đi ngủ."
      },
      {
        "kanji": "今朝、熱は下がりましたが、喉が痛いです。",
        "jp": "けさ、ねつは さがりましたが、のどが いたいです。",
        "romaji": "Kesa, netsu wa sagarimashita ga, nodo ga itai desu.",
        "vn": "Sáng nay, đã hạ sốt nhưng họng lại đau."
      },
      {
        "kanji": "今日は会社を休んで、病院へ行きます。",
        "jp": "きょうは かいしゃを やすんで、びょういんへ いきます。",
        "romaji": "Kyou wa kaisha o yasunde, byouin e ikimasu.",
        "vn": "Hôm nay tôi sẽ nghỉ làm, đi đến bệnh viện."
      },
      {
        "kanji": "病院へ行ってから、ずっと家で寝ます。",
        "jp": "びょういんへ いってから、ずっと いえで ねます。",
        "romaji": "Byouin e itte kara, zutto ie de nemasu.",
        "vn": "Sau khi đi bệnh viện về, tôi sẽ ngủ ở nhà suốt."
      }
    ],
    "questions": [
      {
        "question": "このひとは きのうの よる なにを しましたか？ (Người này tối qua làm gì?)",
        "options": ["くすりを のんで ねました (Uống thuốc rồi ngủ)", "びょういんへ いきました (Đi bệnh viện)", "かいしゃを やすみました (Nghỉ làm)", "のどが いたかったです (Bị đau họng)"],
        "answer": "くすりを のんで ねました (Uống thuốc rồi ngủ)"
      },
      {
        "question": "いま どうですか？ (Bây giờ thì sao?)",
        "options": ["ねつは ありませんが、のどが いたいです (Không sốt nhưng đau họng)", "ねつが あって、のどが いたいです (Có sốt và đau họng)", "ねつが ありますが、のどは いたくないです (Có sốt nhưng không đau họng)", "ねつも のども だいじょうぶです (Sốt và họng đều ổn)"],
        "answer": "ねつは ありませんが、のどが いたいです (Không sốt nhưng đau họng)"
      },
      {
        "question": "きょう なにを しますか？ (Hôm nay sẽ làm gì?)",
        "options": ["びょういんへ いってから ねます (Đi viện rồi ngủ)", "かいしゃへ いってから びょういんへ いきます (Đi làm rồi đi viện)", "くすりを かってから かいしゃへ いきます (Mua thuốc rồi đi làm)", "うちで ずっと くすりを のみます (Uống thuốc ở nhà suốt)"],
        "answer": "びょういんへ いってから ねます (Đi viện rồi ngủ)"
      }
    ]
  }
]);

// Lesson 17: 5 readings needed
appendReadings(17, [
  {
    "title": "としょかんの ルール",
    "titleVn": "① Nội quy thư viện",
    "lines": [
      {
        "kanji": "【 図書館の 使い方 】",
        "jp": "【 としょかんの つかいかた 】",
        "romaji": "[ Toshokan no tsukaikata ]",
        "vn": "[ Cách sử dụng thư viện ]"
      },
      {
        "kanji": "・中で食べたり、飲んだりしないでください。",
        "jp": "・なかで たべたり、のんだり しないで ください。",
        "romaji": "- Naka de tabetari, nondari shinaide kudasai.",
        "vn": "- Xin đừng ăn uống ở bên trong."
      },
      {
        "kanji": "・大きい声で話さないでください。",
        "jp": "・おおきい こえで はなさないで ください。",
        "romaji": "- Ookii koe de hanasanaide kudasai.",
        "vn": "- Xin đừng nói chuyện lớn tiếng."
      },
      {
        "kanji": "・本は2週間までに返さなければなりません。",
        "jp": "・ほんは にしゅうかんまでに かえさなければ なりません。",
        "romaji": "- Hon wa ni-shuukan made ni kaesanakereba narimasen.",
        "vn": "- Sách thì phải trả lại trong vòng 2 tuần."
      },
      {
        "kanji": "・辞書は借りることができません。",
        "jp": "・じしょは かりることが できません。",
        "romaji": "- Jisho wa kariru koto ga dekimasen.",
        "vn": "- Từ điển thì không được mượn mang về."
      }
    ],
    "questions": [
      {
        "question": "としょかんで なにを しても いいですか？ (Ở thư viện được làm gì?)",
        "options": ["ほんを よみます (Đọc sách)", "コーヒーを のみます (Uống cafe)", "おおきいこえで はなします (Nói lớn tiếng)", "じしょを かえります (Mượn từ điển về)"],
        "answer": "ほんを よみます (Đọc sách)"
      },
      {
        "question": "ほんは いつまでに かえさなければなりませんか？ (Phải trả sách trước khi nào?)",
        "options": ["2しゅうかんまでに (Trong vòng 2 tuần)", "1しゅうかんまでに (Trong vòng 1 tuần)", "1かげつまでに (Trong vòng 1 tháng)", "いつでもいいです (Bao giờ cũng được)"],
        "answer": "2しゅうかんまでに (Trong vòng 2 tuần)"
      }
    ]
  },
  {
    "title": "びょうき",
    "titleVn": "② Bệnh tật",
    "lines": [
      {
        "kanji": "A：どうしましたか。",
        "jp": "A：どう しましたか。",
        "romaji": "A: Dou shimashita ka.",
        "vn": "A: Anh bị làm sao vậy?"
      },
      {
        "kanji": "B：昨日から熱があります。頭も痛いです。",
        "jp": "B：きのうから ねつが あります。あたまも いたいです。",
        "romaji": "B: Kinou kara netsu ga arimasu. Atama mo itai desu.",
        "vn": "B: Từ hôm qua tôi bị sốt. Đầu cũng đau."
      },
      {
        "kanji": "A：風邪ですね。薬を飲んで、早く寝てください。",
        "jp": "A：かぜですね。くすりを のんで、はやく ねて ください。",
        "romaji": "A: Kaze desu ne. Kusuri o nonde, hayaku nete kudasai.",
        "vn": "A: Bị cảm rồi. Hãy uống thuốc và đi ngủ sớm."
      },
      {
        "kanji": "B：はい。お風呂に入ってもいいですか。",
        "jp": "B：はい。おふろに はいっても いいですか。",
        "romaji": "B: Hai. Ofuro ni haitte mo ii desu ka.",
        "vn": "B: Vâng. Tôi tắm bồn có được không?"
      },
      {
        "kanji": "A：いいえ、今日は入らないでください。",
        "jp": "A：いいえ、きょうは はいらないで ください。",
        "romaji": "A: Iie, kyou wa hairanaide kudasai.",
        "vn": "A: Không, hôm nay xin đừng tắm."
      }
    ],
    "questions": [
      {
        "question": "Bさんは どこが わるいですか？ (Người B bị bệnh ở đâu?)",
        "options": ["ねつが あって、あたまが いたいです (Bị sốt và đau đầu)", "のどが いたくて、せきが でます (Đau họng và ho)", "おなかが いたくて、ねつが あります (Đau bụng và sốt)", "あしが いたいです (Đau chân)"],
        "answer": "ねつが あって、あたまが いたいです (Bị sốt và đau đầu)"
      },
      {
        "question": "いしゃは なにを しないでくださいと いいましたか？ (Bác sĩ bảo đừng làm gì?)",
        "options": ["おふろに はいらないでください (Đừng tắm bồn)", "くすりを のまないでください (Đừng uống thuốc)", "はやく ねないでください (Đừng ngủ sớm)", "ごはんを たべないでください (Đừng ăn cơm)"],
        "answer": "おふろに はいらないでください (Đừng tắm bồn)"
      }
    ]
  },
  {
    "title": "かいしゃで",
    "titleVn": "③ Ở công ty",
    "lines": [
      {
        "kanji": "A：山田さん、この資料をコピーしなければなりませんか。",
        "jp": "A：やまださん、この しりょうを コピーしなければ なりませんか。",
        "romaji": "A: Yamada-san, kono shiryou o kopii shinakereba narimasen ka.",
        "vn": "A: Anh Yamada, tài liệu này có phải copy không?"
      },
      {
        "kanji": "B：はい、急いでコピーしてください。",
        "jp": "B：はい、いそいで コピーして ください。",
        "romaji": "B: Hai, isoide kopii shite kudasai.",
        "vn": "B: Vâng, xin hãy copy nhanh lên."
      },
      {
        "kanji": "A：会議は3時からですね。",
        "jp": "A：かいぎは さんじから ですね。",
        "romaji": "A: Kaigi wa sanji kara desu ne.",
        "vn": "A: Cuộc họp bắt đầu từ 3 giờ nhỉ."
      },
      {
        "kanji": "B：ええ。会議室に資料を置かなければなりません。",
        "jp": "B：ええ。かいぎしつに しりょうを おかなければ なりません。",
        "romaji": "B: Ee. Kaigishitsu ni shiryou o okanakereba narimasen.",
        "vn": "B: Ừ. Phải đặt tài liệu vào phòng họp."
      },
      {
        "kanji": "A：わかりました。すぐやります。",
        "jp": "A：わかりました。すぐ やります。",
        "romaji": "A: Wakarimashita. Sugu yarimasu.",
        "vn": "A: Tôi hiểu rồi. Tôi làm ngay đây."
      }
    ],
    "questions": [
      {
        "question": "Aさんは なにを しなければなりませんか？ (Người A phải làm gì?)",
        "options": ["しりょうを コピーしなければなりません (Phải copy tài liệu)", "かいぎしつを そうじしなければなりません (Phải dọn phòng họp)", "かいぎに でなければなりません (Phải tham gia họp)", "やまださんを よばなければなりません (Phải gọi Yamada)"],
        "answer": "しりょうを コピーしなければなりません (Phải copy tài liệu)"
      },
      {
        "question": "かいぎのまえに なにを しますか？ (Trước khi họp phải làm gì?)",
        "options": ["かいぎしつに しりょうを おきます (Đặt tài liệu vào phòng họp)", "コーヒーを つくります (Pha cà phê)", "てがみを かきます (Viết thư)", "ごはんを たべます (Ăn cơm)"],
        "answer": "かいぎしつに しりょうを おきます (Đặt tài liệu vào phòng họp)"
      }
    ]
  },
  {
    "title": "パスポート",
    "titleVn": "④ Hộ chiếu",
    "lines": [
      {
        "kanji": "外国へ行く時、パスポートを持っていかなければなりません。",
        "jp": "がいこくへ いく とき、パスポートを もって いかなければ なりません。",
        "romaji": "Gaikoku e iku toki, pasupooto o motte ikanakereba narimasen.",
        "vn": "Khi đi ra nước ngoài, phải mang theo hộ chiếu."
      },
      {
        "kanji": "パスポートがないと、飛行機に乗ることができません。",
        "jp": "パスポートが ないと、ひこうきに のることが できません。",
        "romaji": "Pasupooto ga nai to, hikouki ni noru koto ga dekimasen.",
        "vn": "Nếu không có hộ chiếu thì không thể lên máy bay."
      },
      {
        "kanji": "空港でパスポートを見せなければなりません。",
        "jp": "くうこうで パスポートを みせなければ なりません。",
        "romaji": "Kuukou de pasupooto o misenakereba narimasen.",
        "vn": "Ở sân bay phải cho xem hộ chiếu."
      },
      {
        "kanji": "絶対に忘れないでください。",
        "jp": "ぜったいに わすれないで ください。",
        "romaji": "Zettai ni wasurenaide kudasai.",
        "vn": "Tuyệt đối không được quên."
      },
      {
        "kanji": "パスポートはとても大切ですから。",
        "jp": "パスポートは とても たいせつ ですから。",
        "romaji": "Pasupooto wa totemo taisetsu desu kara.",
        "vn": "Vì hộ chiếu là thứ rất quan trọng."
      }
    ],
    "questions": [
      {
        "question": "がいこくへ いくとき、なにを わすれてはいけませんか？ (Khi đi ra nước ngoài không được quên cái gì?)",
        "options": ["パスポート (Hộ chiếu)", "カメラ (Máy ảnh)", "とけい (Đồng hồ)", "かばん (Cặp)"],
        "answer": "パスポート (Hộ chiếu)"
      },
      {
        "question": "くうこうで なにを しなければなりませんか？ (Ở sân bay phải làm gì?)",
        "options": ["パスポートを みせなければなりません (Phải cho xem hộ chiếu)", "パスポートを かなわければなりません (Phải mua hộ chiếu)", "パスポートを すてなければなりません (Phải vứt hộ chiếu)", "パスポートを とらなければなりません (Phải chụp hộ chiếu)"],
        "answer": "パスポートを みせなければなりません (Phải cho xem hộ chiếu)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "木村さんは来週、アメリカへ出張します。",
        "jp": "きむらさんは らいしゅう、アメリカへ しゅっちょうします。",
        "romaji": "Kimura-san wa raishuu, Amerika e shucchou shimasu.",
        "vn": "Tuần sau anh Kimura sẽ đi công tác ở Mỹ."
      },
      {
        "kanji": "ですから、英語を勉強しなければなりません。",
        "jp": "ですから、えいごを べんきょうしなければ なりません。",
        "romaji": "Desukara, Eigo o benkyou shinakereba narimasen.",
        "vn": "Vì vậy, phải học tiếng Anh."
      },
      {
        "kanji": "木村さんは英語があまり上手じゃありません。",
        "jp": "きむらさんは えいごが あまり じょうずじゃ ありません。",
        "romaji": "Kimura-san wa eigo ga amari jouzu ja arimasen.",
        "vn": "Anh Kimura không giỏi tiếng Anh lắm."
      },
      {
        "kanji": "毎日、仕事の後で、学校へ行きます。",
        "jp": "まいにち、しごとの あとで、がっこうへ いきます。",
        "romaji": "Mainichi, shigoto no ato de, gakkou e ikimasu.",
        "vn": "Mỗi ngày, sau khi làm việc xong, anh ấy đến trường học."
      },
      {
        "kanji": "大変ですが、休むことができません。",
        "jp": "たいへんですが、やすむことが できません。",
        "romaji": "Taihen desu ga, yasumu koto ga dekimasen.",
        "vn": "Vất vả nhưng không thể nghỉ ngơi được."
      }
    ],
    "questions": [
      {
        "question": "どうして きむらさんは えいごを べんきょうしなければ なりませんか？ (Tại sao Kimura phải học tiếng Anh?)",
        "options": ["アメリカへ しゅっちょうしますから (Vì đi công tác Mỹ)", "えいごが すきですから (Vì thích tiếng Anh)", "がっこうの せんせいになりますから (Vì sẽ trở thành giáo viên)", "アメリカに かぞくが いますから (Vì có gia đình ở Mỹ)"],
        "answer": "アメリカへ しゅっちょうしますから (Vì đi công tác Mỹ)"
      },
      {
        "question": "きむらさんの えいごは どうですか？ (Tiếng Anh của Kimura thế nào?)",
        "options": ["あまり じょうずじゃ ありません (Không giỏi lắm)", "とても じょうずです (Rất giỏi)", "ぜんぜん わかりません (Hoàn toàn không biết)", "すこし わかります (Hiểu một chút)"],
        "answer": "あまり じょうずじゃ ありません (Không giỏi lắm)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "きむらさんは まいにち しごとの あとで がっこうへ いきます。",
          "きむらさんは まいにち がっこうを やすみます。",
          "きむらさんは えいごが じょうずですから、べんきょうしなくても いいです。",
          "きむらさんは らいげつ アメリカへ いきます。"
        ],
        "answer": "きむらさんは まいにち しごとの あとで がっこうへ いきます。"
      }
    ]
  }
]);

// Lesson 18: 5 readings needed
appendReadings(18, [
  {
    "title": "わたしの しゅみ",
    "titleVn": "① Sở thích của tôi",
    "lines": [
      {
        "kanji": "私の趣味は写真を撮ることです。",
        "jp": "わたしの しゅみは しゃしんを とることです。",
        "romaji": "Watashi no shumi wa shashin o toru koto desu.",
        "vn": "Sở thích của tôi là chụp ảnh."
      },
      {
        "kanji": "休みの日、よく海や山へ行きます。",
        "jp": "やすみの ひ、よく うみや やまへ いきます。",
        "romaji": "Yasumi no hi, yoku umi ya yama e ikimasu.",
        "vn": "Ngày nghỉ, tôi thường đi biển và núi."
      },
      {
        "kanji": "そして、花や鳥の写真を撮ります。",
        "jp": "そして、はなや とりの しゃしんを とります。",
        "romaji": "Soshite, hana ya tori no shashin o torimasu.",
        "vn": "Và chụp ảnh hoa lá, chim muông."
      },
      {
        "kanji": "海を泳ぐことができますから、夏が一番好きです。",
        "jp": "うみを およぐことが できますから、なつが いちばん すきです。",
        "romaji": "Umi o oyogu koto ga dekimasu kara, natsu ga ichiban suki desu.",
        "vn": "Vì có thể bơi ở biển nên tôi thích mùa hè nhất."
      },
      {
        "kanji": "今年の夏もたくさん写真を撮りたいです。",
        "jp": "ことしの なつも たくさん しゃしんを とりたいです。",
        "romaji": "Kotoshi no natsu mo takusan shashin o toritai desu.",
        "vn": "Mùa hè năm nay tôi cũng muốn chụp thật nhiều ảnh."
      }
    ],
    "questions": [
      {
        "question": "このひとの しゅみは なんですか？ (Sở thích của người này là gì?)",
        "options": ["しゃしんを とること (Chụp ảnh)", "うみを およぐこと (Bơi ở biển)", "やまへ いくこと (Đi núi)", "えを かくこと (Vẽ tranh)"],
        "answer": "しゃしんを とること (Chụp ảnh)"
      },
      {
        "question": "どうして なつが いちばん すきですか？ (Tại sao thích mùa hè nhất?)",
        "options": ["うみを およぐことが できますから (Vì có thể bơi ở biển)", "やまへ いくことが できますから (Vì có thể đi núi)", "しゃしんを とることが できますから (Vì có thể chụp ảnh)", "はなが きれいですから (Vì hoa đẹp)"],
        "answer": "うみを およぐことが できますから (Vì có thể bơi ở biển)"
      }
    ]
  },
  {
    "title": "くるまの うんてん",
    "titleVn": "② Lái ô tô",
    "lines": [
      {
        "kanji": "A：マリアさんは車の運転ができますか。",
        "jp": "A：マリアさんは くるまの うんてんが できますか。",
        "romaji": "A: Maria-san wa kuruma no unten ga dekimasu ka.",
        "vn": "A: Chị Maria có thể lái xe ô tô không?"
      },
      {
        "kanji": "B：はい、できます。毎日車で会社へ行きます。",
        "jp": "B：はい、できます。まいにち くるまで かいしゃへ いきます。",
        "romaji": "B: Hai, dekimasu. Mainichi kuruma de kaisha e ikimasu.",
        "vn": "B: Vâng, tôi có thể. Mỗi ngày tôi lái xe đến công ty."
      },
      {
        "kanji": "A：すごいですね。私はまだできません。",
        "jp": "A：すごいですね。わたしは まだ できません。",
        "romaji": "A: Sugoi desu ne. Watashi wa mada dekimasen.",
        "vn": "A: Tuyệt quá. Tôi thì vẫn chưa biết lái."
      },
      {
        "kanji": "B：日本で運転するのは難しいですか。",
        "jp": "B：にほんで うんてんする のは むずかしいですか。",
        "romaji": "B: Nihon de unten suru no wa muzukashii desu ka.",
        "vn": "B: Lái xe ở Nhật có khó không?"
      },
      {
        "kanji": "A：道が狭いですから、少し難しいですね。",
        "jp": "A：みちが せまいですから、すこし むずかしいですね。",
        "romaji": "A: Michi ga semai desukara, sukoshi muzukashii desu ne.",
        "vn": "A: Vì đường hẹp nên hơi khó một chút."
      }
    ],
    "questions": [
      {
        "question": "マリアさんは くるまの うんてんが できますか？ (Maria có biết lái xe không?)",
        "options": ["はい、できます (Vâng, biết)", "いいえ、できません (Không, không biết)", "まだ わかりません (Chưa biết)", "じてんしゃだけ できます (Chỉ biết đi xe đạp)"],
        "answer": "はい、できます (Vâng, biết)"
      },
      {
        "question": "にほんの みちは どうですか？ (Đường sá ở Nhật thì sao?)",
        "options": ["せまいです (Hẹp)", "ひろいです (Rộng)", "あぶないです (Nguy hiểm)", "きれいです (Đẹp)"],
        "answer": "せまいです (Hẹp)"
      }
    ]
  },
  {
    "title": "寝る前に",
    "titleVn": "③ Trước khi ngủ",
    "lines": [
      {
        "kanji": "私は毎晩、寝る前に日記を書きます。",
        "jp": "わたしは まいばん、ねる まえに にっきを かきます。",
        "romaji": "Watashi wa maiban, neru mae ni nikki o kakimasu.",
        "vn": "Mỗi tối, trước khi đi ngủ tôi đều viết nhật ký."
      },
      {
        "kanji": "日記は日本語で書きます。",
        "jp": "にっきは にほんごで かきます。",
        "romaji": "Nikki wa Nihongo de kakimasu.",
        "vn": "Nhật ký thì tôi viết bằng tiếng Nhật."
      },
      {
        "kanji": "漢字がわかりませんから、ひらがなで書きます。",
        "jp": "かんじが わかりませんから、ひらがなで かきます。",
        "romaji": "Kanji ga wakarimasen kara, hiragana de kakimasu.",
        "vn": "Vì không biết Kanji nên tôi viết bằng Hiragana."
      },
      {
        "kanji": "それから、少し本を読んで寝ます。",
        "jp": "それから、すこし ほんを よんで ねます。",
        "romaji": "Sorekara, sukoshi hon o yonde nemasu.",
        "vn": "Sau đó, tôi đọc sách một chút rồi ngủ."
      },
      {
        "kanji": "本を読むと、よく眠ることができます。",
        "jp": "ほんを よむと、よく ねむる ことが できます。",
        "romaji": "Hon o yomu to, yoku nemuru koto ga dekimasu.",
        "vn": "Hễ đọc sách là tôi có thể ngủ rất ngon."
      }
    ],
    "questions": [
      {
        "question": "ねる まえに なにを しますか？ (Trước khi ngủ làm gì?)",
        "options": ["にっきを かいて、ほんを よみます (Viết nhật ký, đọc sách)", "ほんを よんで、おふろに はいります (Đọc sách, đi tắm)", "テレビを みて、にっきを かきます (Xem TV, viết nhật ký)", "おんがくを きいて ねます (Nghe nhạc rồi ngủ)"],
        "answer": "にっきを かいて、ほんを よみます (Viết nhật ký, đọc sách)"
      },
      {
        "question": "どうして ひらがなで かきますか？ (Tại sao viết bằng Hiragana?)",
        "options": ["かんじが わからないから (Vì không biết Kanji)", "にほんごが むずかしいから (Vì tiếng Nhật khó)", "ひらがなが すきだから (Vì thích Hiragana)", "かんたんだから (Vì đơn giản)"],
        "answer": "かんじが わからないから (Vì không biết Kanji)"
      }
    ]
  },
  {
    "title": "カードで",
    "titleVn": "④ Thanh toán bằng thẻ",
    "lines": [
      {
        "kanji": "A：すみません、このカメラをください。",
        "jp": "A：すみません、この カメラを ください。",
        "romaji": "A: Sumimasen, kono kamera o kudasai.",
        "vn": "A: Xin lỗi, bán cho tôi cái máy ảnh này."
      },
      {
        "kanji": "B：はい、35,000円です。",
        "jp": "B：はい、さんまん ごせんえんです。",
        "romaji": "B: Hai, sanman gosen en desu.",
        "vn": "B: Vâng, 35,000 Yên ạ."
      },
      {
        "kanji": "A：カードで払うことができますか。",
        "jp": "A：カードで はらう ことが できますか。",
        "romaji": "A: Kaado de harau koto ga dekimasu ka.",
        "vn": "A: Tôi có thể trả bằng thẻ được không?"
      },
      {
        "kanji": "B：はい、できますよ。",
        "jp": "B：はい、できますよ。",
        "romaji": "B: Hai, dekimasu yo.",
        "vn": "B: Vâng, được ạ."
      },
      {
        "kanji": "A：じゃ、カードでお願いします。",
        "jp": "A：じゃ、カードで おねがいします。",
        "romaji": "A: Ja, kaado de onegaishimasu.",
        "vn": "A: Vậy thanh toán bằng thẻ giúp tôi."
      }
    ],
    "questions": [
      {
        "question": "Aさんは なにを かいますか？ (Người A mua cái gì?)",
        "options": ["カメラ (Máy ảnh)", "とけい (Đồng hồ)", "かばん (Cặp)", "パソコン (Máy tính)"],
        "answer": "カメラ (Máy ảnh)"
      },
      {
        "question": "Aさんは なんで はらいますか？ (Người A thanh toán bằng gì?)",
        "options": ["カードで (Bằng thẻ)", "げんきんで (Bằng tiền mặt)", "スマホで (Bằng điện thoại)", "わかりません (Không biết)"],
        "answer": "カードで (Bằng thẻ)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私はピアノを弾くことができます。",
        "jp": "わたしは ピアノを ひく ことが できます。",
        "romaji": "Watashi wa piano o hiku koto ga dekimasu.",
        "vn": "Tôi có thể chơi đàn piano."
      },
      {
        "kanji": "子供の時、毎日練習しました。",
        "jp": "こどもの とき、まいにち れんしゅうしました。",
        "romaji": "Kodomo no toki, mainichi renshuu shimashita.",
        "vn": "Khi còn nhỏ, ngày nào tôi cũng luyện tập."
      },
      {
        "kanji": "今でも、ご飯を食べる前に、少し弾きます。",
        "jp": "いまでも、ごはんを たべる まえに、すこし ひきます。",
        "romaji": "Ima demo, gohan o taberu mae ni, sukoshi hikimasu.",
        "vn": "Bây giờ, trước khi ăn cơm tôi vẫn đánh đàn một chút."
      },
      {
        "kanji": "ピアノを弾くのはとても楽しいです。",
        "jp": "ピアノを ひくのは とても たのしいです。",
        "romaji": "Piano o hiku no wa totemo tanoshii desu.",
        "vn": "Việc chơi piano rất là thú vị."
      },
      {
        "kanji": "来週、学校でピアノのコンサートがあります。",
        "jp": "らいしゅう、がっこうで ピアノの コンサートが あります。",
        "romaji": "Raishuu, gakkou de piano no konsaato ga arimasu.",
        "vn": "Tuần sau, ở trường sẽ có buổi hòa nhạc piano."
      }
    ],
    "questions": [
      {
        "question": "このひとは なにが できますか？ (Người này có thể làm gì?)",
        "options": ["ピアノを ひくこと (Chơi piano)", "うたを うたうこと (Hát)", "ギターを ひくこと (Chơi guitar)", "えを かくこと (Vẽ tranh)"],
        "answer": "ピアノを ひくこと (Chơi piano)"
      },
      {
        "question": "いつ ピアノを ひきますか？ (Khi nào thì chơi piano?)",
        "options": ["ごはんを たべる まえに (Trước khi ăn cơm)", "ねる まえに (Trước khi ngủ)", "おふろに はいる まえに (Trước khi tắm)", "しごとを する まえに (Trước khi làm việc)"],
        "answer": "ごはんを たべる まえに (Trước khi ăn cơm)"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "らいしゅう、がっこうで ピアノを ひきます。(Tuần sau đánh đàn ở trường)",
          "こどものとき、ピアノの れんしゅうを しませんでした。(Hồi nhỏ không tập piano)",
          "いまは もう ピアノを ひきません。(Bây giờ không chơi piano nữa)",
          "らいしゅう、がっこうで コンサートが あります。(Tuần sau có hòa nhạc ở trường)"
        ],
        "answer": "らいしゅう、がっこうで コンサートが あります。(Tuần sau có hòa nhạc ở trường)"
      }
    ]
  }
]);
