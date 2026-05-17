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

// Lesson 6: 3 readings needed
appendReadings(6, [
  {
    "title": "まいあさの こと",
    "titleVn": "③ Thói quen mỗi sáng",
    "lines": [
      {
        "kanji": "私は毎朝6時に起きます。",
        "jp": "わたしは まいあさ ろくじに おきます。",
        "romaji": "Watashi wa maiasa rokuji ni okimasu.",
        "vn": "Mỗi sáng tôi thức dậy lúc 6 giờ."
      },
      {
        "kanji": "朝ごはんを食べます。",
        "jp": "あさごはんを たべます。",
        "romaji": "Asagohan o tabemasu.",
        "vn": "Tôi ăn sáng."
      },
      {
        "kanji": "新聞を読みます。",
        "jp": "しんぶんを よみます。",
        "romaji": "Shinbun o yomimasu.",
        "vn": "Đọc báo."
      },
      {
        "kanji": "それから、会社へ行きます。",
        "jp": "それから、かいしゃへ いきます。",
        "romaji": "Sorekara, kaisha e ikimasu.",
        "vn": "Sau đó, đi đến công ty."
      },
      {
        "kanji": "駅で新聞を買います。",
        "jp": "えきで しんぶんを かいます。",
        "romaji": "Eki de shinbun o kaimasu.",
        "vn": "Mua báo ở nhà ga."
      }
    ],
    "questions": [
      {
        "question": "なにを たべますか？ (Ăn cái gì?)",
        "options": ["あさごはん (Bữa sáng)", "ひるごはん (Bữa trưa)", "ばんごはん (Bữa tối)", "パン (Bánh mì)"],
        "answer": "あさごはん (Bữa sáng)"
      },
      {
        "question": "どこで しんぶんを かいますか？ (Mua báo ở đâu?)",
        "options": ["えきで (Ở ga)", "スーパーで (Ở siêu thị)", "かいしゃで (Ở công ty)", "デパートで (Ở trung tâm thương mại)"],
        "answer": "えきで (Ở ga)"
      }
    ]
  },
  {
    "title": "えいがを みます",
    "titleVn": "④ Xem phim",
    "lines": [
      {
        "kanji": "土曜日の午後、友達と一緒に映画を見ます。",
        "jp": "どようびの ごご、ともだちと いっしょに えいがを みます。",
        "romaji": "Doyoubi no gogo, tomodachi to issho ni eiga o mimasu.",
        "vn": "Chiều thứ 7, tôi xem phim cùng với bạn."
      },
      {
        "kanji": "映画館でジュースを飲みます。",
        "jp": "えいがかんで ジュースを のみます。",
        "romaji": "Eigakan de juusu o nomimasu.",
        "vn": "Uống nước hoa quả ở rạp chiếu phim."
      },
      {
        "kanji": "映画の後で、レストランで食事をします。",
        "jp": "えいがの あとで、レストランで しょくじを します。",
        "romaji": "Eiga no ato de, resutoran de shokuji o shimasu.",
        "vn": "Sau khi xem phim, dùng bữa ở nhà hàng."
      },
      {
        "kanji": "とても楽しいです。",
        "jp": "とても たのしいです。",
        "romaji": "Totemo tanoshii desu.",
        "vn": "Rất là vui."
      }
    ],
    "questions": [
      {
        "question": "いつ えいがを みますか？ (Xem phim khi nào?)",
        "options": ["どようびの ごご (Chiều thứ 7)", "どようびの あさ (Sáng thứ 7)", "にちようびの ごご (Chiều chủ nhật)", "にちようびの よる (Tối chủ nhật)"],
        "answer": "どようびの ごご (Chiều thứ 7)"
      },
      {
        "question": "えいがの あとで、なにを しますか？ (Sau khi xem phim, làm gì?)",
        "options": ["しょくじを します (Dùng bữa)", "おちゃを のみます (Uống trà)", "うちへ かえります (Về nhà)", "えいがを みます (Xem phim)"],
        "answer": "しょくじを します (Dùng bữa)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "私は昨日、デパートでカメラを買いました。",
        "jp": "わたしは きのう、デパートで カメラを かいました。",
        "romaji": "Watashi wa kinou, depaato de kamera o kaimashita.",
        "vn": "Hôm qua tôi đã mua máy ảnh ở trung tâm thương mại."
      },
      {
        "kanji": "そして、喫茶店でコーヒーを飲みました。",
        "jp": "そして、きっさてんで コーヒーを のみました。",
        "romaji": "Soshite, kissaten de koohii o nomimashita.",
        "vn": "Sau đó, uống cà phê ở quán cà phê."
      },
      {
        "kanji": "手紙を書きました。",
        "jp": "てがみを かきました。",
        "romaji": "Tegami o kakimashita.",
        "vn": "Đã viết thư."
      },
      {
        "kanji": "今日は公園で写真を撮ります。",
        "jp": "きょうは こうえんで しゃしんを とります。",
        "romaji": "Kyou wa kouen de shashin o torimasu.",
        "vn": "Hôm nay tôi sẽ chụp ảnh ở công viên."
      }
    ],
    "questions": [
      {
        "question": "きのう なにを しましたか？ (Hôm qua đã làm gì?)",
        "options": ["カメラを かいました (Mua máy ảnh)", "しゃしんを とりました (Chụp ảnh)", "こうえんへ いきました (Đi công viên)", "しんぶんを よみました (Đọc báo)"],
        "answer": "カメラを かいました (Mua máy ảnh)"
      },
      {
        "question": "どこで てがみを かきましたか？ (Viết thư ở đâu?)",
        "options": ["きっさてんで (Ở quán cafe)", "デパートで (Ở TTTM)", "こうえんで (Ở công viên)", "うちで (Ở nhà)"],
        "answer": "きっさてんで (Ở quán cafe)"
      },
      {
        "question": "きょう なにを しますか？ (Hôm nay làm gì?)",
        "options": ["しゃしんを とります (Chụp ảnh)", "てがみを かきます (Viết thư)", "カメラを かいます (Mua máy ảnh)", "コーヒーを のみます (Uống cafe)"],
        "answer": "しゃしんを とります (Chụp ảnh)"
      }
    ]
  }
]);

// Lesson 7: 3 readings needed
appendReadings(7, [
  {
    "title": "たんじょうび",
    "titleVn": "③ Sinh nhật",
    "lines": [
      {
        "kanji": "昨日は私の誕生日でした。",
        "jp": "きのうは わたしの たんじょうびでした。",
        "romaji": "Kinou wa watashi no tanjoubi deshita.",
        "vn": "Hôm qua là sinh nhật của tôi."
      },
      {
        "kanji": "父に時計をもらいました。",
        "jp": "ちちに とけいを もらいました。",
        "romaji": "Chichi ni tokei o moraimashita.",
        "vn": "Tôi đã nhận được đồng hồ từ bố."
      },
      {
        "kanji": "母に花をもらいました。",
        "jp": "ははに はなを もらいました。",
        "romaji": "Haha ni hana o moraimashita.",
        "vn": "Nhận được hoa từ mẹ."
      },
      {
        "kanji": "それから、友達に本をもらいました。",
        "jp": "それから、ともだちに ほんを もらいました。",
        "romaji": "Sorekara, tomodachi ni hon o moraimashita.",
        "vn": "Và nhận được sách từ bạn bè."
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
        "question": "だれに とけいを もらいましたか？ (Đã nhận đồng hồ từ ai?)",
        "options": ["ちち (Bố)", "はは (Mẹ)", "ともだち (Bạn bè)", "せんせい (Giáo viên)"],
        "answer": "ちち (Bố)"
      },
      {
        "question": "ともだちに なにを もらいましたか？ (Nhận cái gì từ bạn bè?)",
        "options": ["ほん (Sách)", "はな (Hoa)", "とけい (Đồng hồ)", "かばん (Cặp)"],
        "answer": "ほん (Sách)"
      }
    ]
  },
  {
    "title": "てがみ",
    "titleVn": "④ Thư",
    "lines": [
      {
        "kanji": "毎日、パソコンでメールを送ります。",
        "jp": "まいにち、パソコンで メールを おくります。",
        "romaji": "Mainichi, pasokon de meeru o okurimasu.",
        "vn": "Mỗi ngày, gửi email bằng máy tính."
      },
      {
        "kanji": "時々、手紙を書きます。",
        "jp": "ときどき、てがみを かきます。",
        "romaji": "Tokidoki, tegami o kakimasu.",
        "vn": "Thỉnh thoảng, viết thư tay."
      },
      {
        "kanji": "ボールペンで書きます。",
        "jp": "ボールペンで かきます。",
        "romaji": "Boorupen de kakimasu.",
        "vn": "Viết bằng bút bi."
      },
      {
        "kanji": "日本語で書きますか？",
        "jp": "にほんごで かきますか？",
        "romaji": "Nihongo de kakimasu ka?",
        "vn": "Viết bằng tiếng Nhật phải không?"
      },
      {
        "kanji": "いいえ、英語で書きます。",
        "jp": "いいえ、えいごで かきます。",
        "romaji": "Iie, Eigo de kakimasu.",
        "vn": "Không, viết bằng tiếng Anh."
      }
    ],
    "questions": [
      {
        "question": "なんで メールを おくりますか？ (Gửi email bằng gì?)",
        "options": ["パソコンで (Bằng máy tính)", "ケータイで (Bằng điện thoại)", "てがみで (Bằng thư)", "ペンで (Bằng bút)"],
        "answer": "パソコンで (Bằng máy tính)"
      },
      {
        "question": "なにばしで てがみを かきますか？ (Viết thư bằng tiếng gì?)",
        "options": ["えいご (Tiếng Anh)", "にほんご (Tiếng Nhật)", "スペインご (Tiếng Tây Ban Nha)", "ちゅうごくご (Tiếng Trung)"],
        "answer": "えいご (Tiếng Anh)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (N5)",
    "lines": [
      {
        "kanji": "来週、母の誕生日です。",
        "jp": "らいしゅう、ははの たんじょうびです。",
        "romaji": "Raishuu, haha no tanjoubi desu.",
        "vn": "Tuần sau là sinh nhật mẹ."
      },
      {
        "kanji": "私は母にシャツと靴をあげます。",
        "jp": "わたしは ははに シャツと くつを あげます。",
        "romaji": "Watashi wa haha ni shatsu to kutsu o agemasu.",
        "vn": "Tôi sẽ tặng mẹ áo sơ mi và giày."
      },
      {
        "kanji": "デパートで買いました。",
        "jp": "デパートで かいました。",
        "romaji": "Depaato de kaimashita.",
        "vn": "Tôi đã mua ở trung tâm thương mại."
      },
      {
        "kanji": "妹は母に花をあげます。",
        "jp": "いもうとは ははに はなを あげます。",
        "romaji": "Imouto wa haha ni hana o agemasu.",
        "vn": "Em gái sẽ tặng mẹ hoa."
      }
    ],
    "questions": [
      {
        "question": "だれの たんじょうびですか？ (Sinh nhật của ai?)",
        "options": ["はは (Mẹ)", "ちち (Bố)", "いもうと (Em gái)", "わたし (Tôi)"],
        "answer": "はは (Mẹ)"
      },
      {
        "question": "わたしは ははに なにを あげますか？ (Tôi sẽ tặng mẹ cái gì?)",
        "options": ["シャツと くつ (Áo sơ mi và giày)", "はなと くつ (Hoa và giày)", "シャツと はな (Áo sơ mi và hoa)", "かばんと シャツ (Cặp và áo sơ mi)"],
        "answer": "シャツと くつ (Áo sơ mi và giày)"
      },
      {
        "question": "いもうとは どこで はなを かいましたか？ (Em gái đã mua hoa ở đâu?)",
        "options": ["わかりません (Không biết)", "デパートで (Ở TTTM)", "スーパーで (Ở siêu thị)", "はなやで (Ở tiệm hoa)"],
        "answer": "わかりません (Không biết)"
      }
    ]
  }
]);

// Lesson 8: 2 readings needed
appendReadings(8, [
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
        "options": ["しずかでした (Yên tĩnh)", "にぎやかでした (Nhộn nhịp)", "ふるかったです (Cũ)", "おおきかったです (To lớn)"],
        "answer": "しずかでした (Yên tĩnh)"
      },
      {
        "question": "りょうりは どうでしたか？ (Món ăn thế nào?)",
        "options": ["おいしくて たかかったです (Ngon và đắt)", "おいしくて やすかったです (Ngon và rẻ)", "まずくて たかかったです (Dở và đắt)", "まずくて やすかったです (Dở và rẻ)"],
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
        "options": ["ちいさくて べんりなまち (Nhỏ và tiện lợi)", "おおきくて べんりなまち (Lớn và tiện lợi)", "ちいさくて ふべんなまち (Nhỏ và bất tiện)", "おおきくて ふべんなまち (Lớn và bất tiện)"],
        "answer": "ちいさくて べんりなまち (Nhỏ và tiện lợi)"
      },
      {
        "question": "まちなかに なにが ありますか？ (Trong thị trấn có cái gì?)",
        "options": ["スーパーや びょういん (Siêu thị và bệnh viện)", "デパートや びょういん (TTTM và bệnh viện)", "スーパーや えき (Siêu thị và nhà ga)", "きっさてんや びょういん (Quán cafe và bệnh viện)"],
        "answer": "スーパーや びょういん (Siêu thị và bệnh viện)"
      },
      {
        "question": "さくらのきせつは どうなりますか？ (Mùa hoa anh đào thì thế nào?)",
        "options": ["きれいで にぎやかになります (Đẹp và nhộn nhịp)", "きれいで しずかになります (Đẹp và yên tĩnh)", "あつくて にぎやかになります (Nóng và nhộn nhịp)", "さむくて しずかになります (Lạnh và yên tĩnh)"],
        "answer": "きれいで にぎやかになります (Đẹp và nhộn nhịp)"
      }
    ]
  }
]);
