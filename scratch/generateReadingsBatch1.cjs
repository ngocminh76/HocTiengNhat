const fs = require('fs');
const path = require('path');

const readingsPath = (i) => path.join(process.cwd(), 'src', 'data', 'readings', `reading${i}.ts`);

function appendReadings(lessonNum, newReadings) {
  const filePath = readingsPath(lessonNum);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Convert new readings to formatted JSON
  const jsonStr = JSON.stringify(newReadings, null, 2);
  // Remove the surrounding brackets
  const innerStr = jsonStr.substring(1, jsonStr.length - 1).trim();
  
  // Find the last closing bracket of the array
  const lastBracketIndex = content.lastIndexOf(']');
  if (lastBracketIndex === -1) return;

  const before = content.substring(0, lastBracketIndex).trimEnd();
  const after = content.substring(lastBracketIndex);
  
  // If the array is not empty, add a comma
  const comma = before.endsWith('[') ? '' : ',';
  
  const newContent = `${before}${comma}\n${innerStr}\n${after}`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Added readings to lesson ${lessonNum}`);
}

// Data for Lesson 1 (Needs 2 readings)
appendReadings(1, [
  {
    "title": "めいし",
    "titleVn": "④ Danh thiếp",
    "lines": [
      {
        "kanji": "【 IMC 】",
        "jp": "【 アイエムシー 】",
        "romaji": "[ IMC ]",
        "vn": "[ Công ty IMC ]"
      },
      {
        "kanji": "エンジニア",
        "jp": "エンジニア",
        "romaji": "Enjinia",
        "vn": "Kỹ sư"
      },
      {
        "kanji": "チャン・ウェイ",
        "jp": "チャン・ウェイ",
        "romaji": "Chan Wei",
        "vn": "Trần Vĩ"
      },
      {
        "kanji": "【 AKC 】",
        "jp": "【 エーケーシー 】",
        "romaji": "[ AKC ]",
        "vn": "[ Viện nghiên cứu AKC ]"
      },
      {
        "kanji": "研究者",
        "jp": "けんきゅうしゃ",
        "romaji": "Kenkyuusha",
        "vn": "Nhà nghiên cứu"
      },
      {
        "kanji": "テレサ・カルロス",
        "jp": "テレサ・カルロス",
        "romaji": "Teresa Carlos",
        "vn": "Teresa Carlos"
      }
    ],
    "questions": [
      {
        "question": "チャンさんの かいしゃは どこですか？ (Công ty của Trần Vĩ là gì?)",
        "options": ["IMC", "AKC", "さくらだいがく", "こうべびょういん"],
        "answer": "IMC"
      },
      {
        "question": "テレサさんの しごとは？ (Teresa làm nghề gì?)",
        "options": ["けんきゅうしゃ (Nhà nghiên cứu)", "エンジニア (Kỹ sư)", "いしゃ (Bác sĩ)", "かいしゃいん (Nhân viên)"],
        "answer": "けんきゅうしゃ (Nhà nghiên cứu)"
      }
    ]
  },
  {
    "title": "JLPTチャレンジ",
    "titleVn": "⑤ Thử thách JLPT (Tổng hợp)",
    "lines": [
      {
        "kanji": "あの人はサントスさんです。",
        "jp": "あのひとは サントスさんです。",
        "romaji": "Ano hito wa Santosu-san desu.",
        "vn": "Người kia là anh Santos."
      },
      {
        "kanji": "サントスさんはブラジル人です。",
        "jp": "サントスさんは ブラジルじんです。",
        "romaji": "Santosu-san wa Burajiru-jin desu.",
        "vn": "Anh Santos là người Brazil."
      },
      {
        "kanji": "サントスさんはIMCの社員です。",
        "jp": "サントスさんは IMCの しゃいんです。",
        "romaji": "Santosu-san wa IMC no shain desu.",
        "vn": "Anh Santos là nhân viên công ty IMC."
      },
      {
        "kanji": "ミラーさんもIMCの社員です。",
        "jp": "ミラーさんも IMCの しゃいんです。",
        "romaji": "Miraa-san mo IMC no shain desu.",
        "vn": "Anh Miller cũng là nhân viên công ty IMC."
      },
      {
        "kanji": "ミラーさんはアメリカ人です。",
        "jp": "ミラーさんは アメリカじんです。",
        "romaji": "Miraa-san wa Amerika-jin desu.",
        "vn": "Anh Miller là người Mỹ."
      }
    ],
    "questions": [
      {
        "question": "サントスさんの かいしゃは？ (Công ty của anh Santos là gì?)",
        "options": ["IMC", "AKC", "ブラジルエアー", "パワーでんき"],
        "answer": "IMC"
      },
      {
        "question": "ミラーさんは なにじんですか？ (Miller là người nước nào?)",
        "options": ["アメリカじん", "ブラジルじん", "イギリスじん", "にほんじん"],
        "answer": "アメリカじん"
      },
      {
        "question": "ただしいものは どれですか？ (Câu nào đúng?)",
        "options": [
          "サントスさんとミラーさんは IMCの しゃいんです。",
          "サントスさんとミラーさんは ブラジルじんです。",
          "ミラーさんは アメリカの せんせいです。",
          "サントスさんは AKCの けんきゅうしゃです。"
        ],
        "answer": "サントスさんとミラーさんは IMCの しゃいんです。"
      }
    ]
  }
]);

// Lesson 2: 2 readings needed
appendReadings(2, [
  {
    "title": "かいものリスト",
    "titleVn": "④ Danh sách mua sắm",
    "lines": [
      {
        "kanji": "ノート ･･･ 100円",
        "jp": "ノート ･･･ ひゃくえん",
        "romaji": "Nooto ... hyaku en",
        "vn": "Vở ... 100 Yên"
      },
      {
        "kanji": "ボールペン ･･･ 150円",
        "jp": "ボールペン ･･･ ひゃくごじゅうえん",
        "romaji": "Boorupen ... hyaku go-juu en",
        "vn": "Bút bi ... 150 Yên"
      },
      {
        "kanji": "かばん ･･･ 3,000円",
        "jp": "かばん ･･･ さんぜんえん",
        "romaji": "Kaban ... san-zen en",
        "vn": "Cặp xách ... 3,000 Yên"
      },
      {
        "kanji": "時計 ･･･ 5,000円",
        "jp": "とけい ･･･ ごせんえん",
        "romaji": "Tokei ... go-sen en",
        "vn": "Đồng hồ ... 5,000 Yên"
      }
    ],
    "questions": [
      {
        "question": "ノートは いくらですか？ (Vở giá bao nhiêu?)",
        "options": ["100円", "150円", "3,000円", "5,000円"],
        "answer": "100円"
      },
      {
        "question": "いちばん たかいものは どれですか？ (Món đồ đắt nhất là gì?)",
        "options": ["とけい (Đồng hồ)", "かばん (Cặp)", "ノート (Vở)", "ボールペン (Bút bi)"],
        "answer": "とけい (Đồng hồ)"
      }
    ]
  },
  {
    "title": "わたしのへや",
    "titleVn": "⑤ Căn phòng của tôi",
    "lines": [
      {
        "kanji": "これは私の机です。",
        "jp": "これは わたしの つくえです。",
        "romaji": "Kore wa watashi no tsukue desu.",
        "vn": "Đây là cái bàn của tôi."
      },
      {
        "kanji": "机の上に本と辞書があります。",
        "jp": "つくえの うえに ほんと じしょが あります。",
        "romaji": "Tsukue no ue ni hon to jisho ga arimasu.",
        "vn": "Trên bàn có sách và từ điển."
      },
      {
        "kanji": "その辞書は先生のです。",
        "jp": "その じしょは せんせいの です。",
        "romaji": "Sono jisho wa sensei no desu.",
        "vn": "Cuốn từ điển đó là của giáo viên."
      },
      {
        "kanji": "あれは私のカメラです。",
        "jp": "あれは わたしの カメラです。",
        "romaji": "Are wa watashi no kamera desu.",
        "vn": "Kia là máy ảnh của tôi."
      },
      {
        "kanji": "日本のカメラです。",
        "jp": "にほんの カメラです。",
        "romaji": "Nihon no kamera desu.",
        "vn": "Là máy ảnh của Nhật."
      }
    ],
    "questions": [
      {
        "question": "つくえのうえに なにがありますか？ (Trên bàn có gì?)",
        "options": ["ほんと じしょ (Sách và từ điển)", "カメラと ノート (Máy ảnh và vở)", "とけいと ほん (Đồng hồ và sách)", "かばんと じしょ (Cặp và từ điển)"],
        "answer": "ほんと じしょ (Sách và từ điển)"
      },
      {
        "question": "だれの じしょですか？ (Từ điển của ai?)",
        "options": ["せんせい (Giáo viên)", "わたし (Tôi)", "ミラーさん (Miller)", "がくせい (Sinh viên)"],
        "answer": "せんせい (Giáo viên)"
      },
      {
        "question": "カメラは どこのですか？ (Máy ảnh của nước nào?)",
        "options": ["にほん (Nhật Bản)", "アメリカ (Mỹ)", "ちゅうごく (Trung Quốc)", "かんこく (Hàn Quốc)"],
        "answer": "にほん (Nhật Bản)"
      }
    ]
  }
]);

// Lesson 3: 2 readings needed
appendReadings(3, [
  {
    "title": "デパートのあんない",
    "titleVn": "④ Sơ đồ trung tâm thương mại",
    "lines": [
      {
        "kanji": "６階：レストラン",
        "jp": "ろっかい：レストラン",
        "romaji": "Rokkai: Resutoran",
        "vn": "Tầng 6: Nhà hàng"
      },
      {
        "kanji": "５階：パソコン・カメラ",
        "jp": "ごかい：パソコン・カメラ",
        "romaji": "Gokai: Pasokon, Kamera",
        "vn": "Tầng 5: Máy tính, Máy ảnh"
      },
      {
        "kanji": "４階：時計・めがね",
        "jp": "よんかい：とけい・めがね",
        "romaji": "Yonkai: Tokei, Megane",
        "vn": "Tầng 4: Đồng hồ, Mắt kính"
      },
      {
        "kanji": "３階：靴・かばん",
        "jp": "さんがい：くつ・かばん",
        "romaji": "Sangai: Kutsu, Kaban",
        "vn": "Tầng 3: Giày, Cặp xách"
      },
      {
        "kanji": "２階：服",
        "jp": "にかい：ふく",
        "romaji": "Nikai: Fuku",
        "vn": "Tầng 2: Quần áo"
      },
      {
        "kanji": "１階：受付",
        "jp": "いっかい：うけつけ",
        "romaji": "Ikkai: Uketsuke",
        "vn": "Tầng 1: Quầy tiếp tân"
      }
    ],
    "questions": [
      {
        "question": "カメラのうりばは なんがいですか？ (Quầy máy ảnh ở tầng mấy?)",
        "options": ["5かい (Tầng 5)", "6かい (Tầng 6)", "4かい (Tầng 4)", "3かい (Tầng 3)"],
        "answer": "5かい (Tầng 5)"
      },
      {
        "question": "3かいは なにの うりばですか？ (Tầng 3 là quầy bán gì?)",
        "options": ["くつ・かばん (Giày, cặp)", "ふく (Quần áo)", "とけい・めがね (Đồng hồ, kính)", "パソコン (Máy tính)"],
        "answer": "くつ・かばん (Giày, cặp)"
      }
    ]
  },
  {
    "title": "わたしのくに",
    "titleVn": "⑤ Đất nước của tôi",
    "lines": [
      {
        "kanji": "ここは私の国です。",
        "jp": "ここは わたしの くにです。",
        "romaji": "Koko wa watashi no kuni desu.",
        "vn": "Đây là đất nước của tôi."
      },
      {
        "kanji": "イタリアです。",
        "jp": "イタリアです。",
        "romaji": "Itaria desu.",
        "vn": "Là nước Ý."
      },
      {
        "kanji": "イタリアの靴は有名です。",
        "jp": "イタリアの くつは ゆうめいです。",
        "romaji": "Itaria no kutsu wa yuumei desu.",
        "vn": "Giày của Ý rất nổi tiếng."
      },
      {
        "kanji": "この靴もイタリアの靴です。",
        "jp": "この くつも イタリアの くつです。",
        "romaji": "Kono kutsu mo Itaria no kutsu desu.",
        "vn": "Đôi giày này cũng là giày của Ý."
      },
      {
        "kanji": "とても高いです。",
        "jp": "とても たかいです。",
        "romaji": "Totemo takai desu.",
        "vn": "Rất là đắt tiền."
      }
    ],
    "questions": [
      {
        "question": "このひとの くには どこですか？ (Đất nước của người này là ở đâu?)",
        "options": ["イタリア (Ý)", "フランス (Pháp)", "アメリカ (Mỹ)", "にほん (Nhật)"],
        "answer": "イタリア (Ý)"
      },
      {
        "question": "イタリアの なにが ゆうめいですか？ (Cái gì của Ý nổi tiếng?)",
        "options": ["くつ (Giày)", "とけい (Đồng hồ)", "かばん (Cặp)", "カメラ (Máy ảnh)"],
        "answer": "くつ (Giày)"
      },
      {
        "question": "そのくつは どうですか？ (Đôi giày đó thì như thế nào?)",
        "options": ["たかいです (Đắt)", "やすいです (Rẻ)", "きれいです (Đẹp)", "ふるいです (Cũ)"],
        "answer": "たかいです (Đắt)"
      }
    ]
  }
]);

// Lesson 4: 2 readings needed
appendReadings(4, [
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
        "options": ["ごご 10じ (10h tối)", "ごご 11じ (11h tối)", "ごぜん 9じ (9h sáng)", "ごご 9じ (9h tối)"],
        "answer": "ごご 10じ (10h tối)"
      },
      {
        "question": "にちようびは なんじからですか？ (Chủ nhật mở cửa từ mấy giờ?)",
        "options": ["ごぜん 9じ (9h sáng)", "ごぜん 10じ (10h sáng)", "ごご 9じ (9h tối)", "ごご 11じ (11h tối)"],
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
        "options": ["6じ (6 giờ)", "7じ (7 giờ)", "9じ (9 giờ)", "5じ (5 giờ)"],
        "answer": "6じ (6 giờ)"
      },
      {
        "question": "かいしゃは なんじから なんじまでですか？ (Công ty từ mấy giờ đến mấy giờ?)",
        "options": ["9じから 5じまで (9h đến 5h)", "8じから 5じまで (8h đến 5h)", "9じから 6じまで (9h đến 6h)", "10じから 5じまで (10h đến 5h)"],
        "answer": "9じから 5じまで (9h đến 5h)"
      },
      {
        "question": "よる なんじに ねますか？ (Buổi tối mấy giờ ngủ?)",
        "options": ["11じ (11 giờ)", "10じ (10 giờ)", "12じ (12 giờ)", "9じ (9 giờ)"],
        "answer": "11じ (11 giờ)"
      }
    ]
  }
]);

// Lesson 5: 2 readings needed
appendReadings(5, [
  {
    "title": "でんしゃの きっぷ",
    "titleVn": "④ Vé tàu điện",
    "lines": [
      {
        "kanji": "【 新幹線チケット 】",
        "jp": "【 しんかんせんチケット 】",
        "romaji": "[ Shinkansen Chiketto ]",
        "vn": "[ Vé tàu siêu tốc Shinkansen ]"
      },
      {
        "kanji": "東京 ➡ 大阪",
        "jp": "とうきょう ➡ おおさか",
        "romaji": "Toukyou -> Oosaka",
        "vn": "Tokyo -> Osaka"
      },
      {
        "kanji": "出発：14:00",
        "jp": "しゅっぱつ：じゅうよじ",
        "romaji": "Shuppatsu: 14:00",
        "vn": "Xuất phát: 14:00"
      },
      {
        "kanji": "到着：16:30",
        "jp": "とうちゃく：じゅうろくじ さんじゅっぷん",
        "romaji": "Touchaku: 16:30",
        "vn": "Đến nơi: 16:30"
      },
      {
        "kanji": "料金：14,000円",
        "jp": "りょうきん：いちまんよんせんえん",
        "romaji": "Ryoukin: Ichi-man yon-sen en",
        "vn": "Giá vé: 14,000 Yên"
      }
    ],
    "questions": [
      {
        "question": "どこから どこへ いきますか？ (Đi từ đâu đến đâu?)",
        "options": ["とうきょうから おおさかへ (Tokyo -> Osaka)", "おおさかから とうきょうへ (Osaka -> Tokyo)", "きょうとから おおさかへ (Kyoto -> Osaka)", "とうきょうから きょうとへ (Tokyo -> Kyoto)"],
        "answer": "とうきょうから おおさかへ (Tokyo -> Osaka)"
      },
      {
        "question": "なんじに おおさかに つきますか？ (Mấy giờ tới Osaka?)",
        "options": ["16:30", "14:00", "15:30", "14:30"],
        "answer": "16:30"
      }
    ]
  },
  {
    "title": "やすみの ひ",
    "titleVn": "⑤ Ngày nghỉ",
    "lines": [
      {
        "kanji": "日曜日は休みでした。",
        "jp": "にちようびは やすみでした。",
        "romaji": "Nichiyoubi wa yasumi deshita.",
        "vn": "Chủ nhật là ngày nghỉ."
      },
      {
        "kanji": "友達と京都へ行きました。",
        "jp": "ともだちと きょうとへ いきました。",
        "romaji": "Tomodachi to Kyouto e ikimashita.",
        "vn": "Tôi đã đi Kyoto cùng với bạn."
      },
      {
        "kanji": "電車で行きました。",
        "jp": "でんしゃで いきました。",
        "romaji": "Densha de ikimashita.",
        "vn": "Đã đi bằng tàu điện."
      },
      {
        "kanji": "京都で古いお寺を見ました。",
        "jp": "きょうとで ふるい おてらを みました。",
        "romaji": "Kyouto de furui otera o mimashita.",
        "vn": "Ở Kyoto tôi đã ngắm những ngôi chùa cổ."
      },
      {
        "kanji": "とても綺麗でした。",
        "jp": "とても きれいでした。",
        "romaji": "Totemo kirei deshita.",
        "vn": "Rất là đẹp."
      }
    ],
    "questions": [
      {
        "question": "にちようび、だれと きょうとへ いきましたか？ (Chủ nhật đã đi Kyoto với ai?)",
        "options": ["ともだち (Bạn bè)", "かぞく (Gia đình)", "ひとり (Một mình)", "せんせい (Giáo viên)"],
        "answer": "ともだち (Bạn bè)"
      },
      {
        "question": "なんで きょうとへ いきましたか？ (Đã đi Kyoto bằng phương tiện gì?)",
        "options": ["でんしゃ (Tàu điện)", "バス (Xe buýt)", "しんかんせん (Shinkansen)", "ひこうき (Máy bay)"],
        "answer": "でんしゃ (Tàu điện)"
      },
      {
        "question": "きょうとで なにを しましたか？ (Ở Kyoto đã làm gì?)",
        "options": ["おてらを みました (Ngắm chùa)", "かいものを しました (Mua sắm)", "しゃしんを とりました (Chụp ảnh)", "ごはんを たべました (Ăn cơm)"],
        "answer": "おてらを みました (Ngắm chùa)"
      }
    ]
  }
]);
