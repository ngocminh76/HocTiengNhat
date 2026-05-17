import { GrammarPattern } from '../../types';

export const GRAMMAR_PART_3: GrammarPattern[] = [
  {
    id: 21,
    pattern: "〜になります (Thời gian/Tuổi)",
    structure: "Thời gian / Tuổi + になります",
    meaning: "Đã đến lúc ~ / Sang ~ tuổi",
    when: "Dùng để diễn đạt việc đạt đến một mốc thời gian hoặc độ tuổi.",
    group: "Sự thay đổi",
    examples: [
      { jp: "もう12時になります。", romaji: "Mou juuniji ni narimasu.", vn: "Đã 12 giờ rồi.", blank: "12時に", blankHint: "juuniji ni" },
      { jp: "来年、20歳になります。", romaji: "Rainen, hatachi ni narimasu.", vn: "Năm sau tôi bước sang tuổi 20.", blank: "20歳に", blankHint: "hatachi ni" },
      { jp: "明日は休みになります。", romaji: "Ashita wa yasumi ni narimasu.", vn: "Ngày mai sẽ được ngày nghỉ.", blank: "休みに", blankHint: "yasumi ni" },
      { jp: "秋になります。", romaji: "Aki ni narimasu.", vn: "Đã sang mùa thu.", blank: "秋に", blankHint: "aki ni" },
      { jp: "授業の時間になります。", romaji: "Jugyou no jikan ni narimasu.", vn: "Đã đến giờ vào học.", blank: "時間に", blankHint: "jikan ni" }
    ]
  },
  {
    id: 22,
    pattern: "〜ても、〜",
    structure: "V(て) + も / A(く)ても / Na・N + でも",
    meaning: "Dù ~ đi nữa thì ~",
    when: "Biểu đạt một kết quả trái với dự đoán thông thường.",
    group: "Nhượng bộ",
    examples: [
      { jp: "雨が降っても、行きます。", romaji: "Ame ga futte mo, ikimasu.", vn: "Dù trời mưa tôi vẫn sẽ đi.", blank: "降って", blankHint: "futte" },
      { jp: "高くても、買いたいです。", romaji: "Takakute mo, kaitai desu.", vn: "Dù đắt tôi cũng muốn mua.", blank: "高くて", blankHint: "takakute" },
      { jp: "静かでも、寝られません。", romaji: "Shizuka de mo, neraremasen.", vn: "Dù yên tĩnh tôi vẫn không ngủ được.", blank: "静かで", blankHint: "shizuka de" },
      { jp: "日曜日でも、働きます。", romaji: "Nichiyoubi de mo, hatarakimasu.", vn: "Dù là Chủ nhật tôi vẫn làm việc.", blank: "日曜日", blankHint: "nichiyoubi" },
      { jp: "薬を飲んでも、治りません。", romaji: "Kusuri o nonde mo, naorimasen.", vn: "Kho dù uống thuốc cũng không khỏi.", blank: "飲んで", blankHint: "nonde" }
    ]
  },
  {
    id: 23,
    pattern: "〜だけ",
    structure: "N + だけ",
    meaning: "Chỉ ~",
    when: "Biểu thị sự giới hạn (không có những thứ khác).",
    group: "Giới hạn",
    examples: [
      { jp: "5分だけ休みましょう。", romaji: "Gofun dake yasumimashou.", vn: "Hãy nghỉ 5 phút thôi.", blank: "5分", blankHint: "gofun" },
      { jp: "少しだけ食べました。", romaji: "Sukoshi dake tabemashita.", vn: "Tôi chỉ ăn một chút thôi.", blank: "少し", blankHint: "sukoshi" },
      { jp: "私だけが行きました。", romaji: "Watashi dake ga ikimashita.", vn: "Chỉ có tôi đã đi.", blank: "私", blankHint: "watashi" },
      { jp: "日曜日だけ休みです。", romaji: "Nichiyoubi dake yasumi desu.", vn: "Tôi chỉ nghỉ chủ nhật.", blank: "日曜日", blankHint: "nichiyoubi" },
      { jp: "りんごだけ買いました。", romaji: "Ringo dake kaimashita.", vn: "Tôi chỉ mua mỗi táo.", blank: "りんご", blankHint: "ringo" }
    ]
  },
  {
    id: 24,
    pattern: "〜しか〜ない",
    structure: "N + しか + V(ない)",
    meaning: "Chỉ ~ (cảm giác không đủ)",
    when: "Biểu đạt sự hạn chế nhưng mang ý nghĩa tiêu cực (cảm thấy ít, không đủ).",
    warning: "Chỉ dùng với Động từ thể phủ định (ない).",
    group: "Giới hạn",
    examples: [
      { jp: "お金が少ししかないです。", romaji: "Okane ga sukoshi shika nai desu.", vn: "Tôi chỉ có một chút tiền.", blank: "少し", blankHint: "sukoshi" },
      { jp: "ひらがなしか書けません。", romaji: "Hiragana shika kakemasen.", vn: "Tôi chỉ có thể viết được Hiragana.", blank: "ひらがな", blankHint: "hiragana" },
      { jp: "3時間しか寝ませんでした。", romaji: "Sanjikan shika nemasen deshita.", vn: "Tôi chỉ ngủ vỏn vẹn 3 tiếng.", blank: "3時間", blankHint: "sanjikan" },
      { jp: "りんごが一つしかありません。", romaji: "Ringo ga hitotsu shika arimasen.", vn: "Chỉ có duy nhất một quả táo.", blank: "一つ", blankHint: "hitotsu" },
      { jp: "彼しか来ませんでした。", romaji: "Kare shika kimasen deshita.", vn: "Chỉ có mỗi anh ấy đến.", blank: "彼", blankHint: "kare" }
    ]
  },
  {
    id: 25,
    pattern: "A は B より〜",
    structure: "A は B より Tính từ です",
    meaning: "A thì (T.từ) hơn B",
    when: "So sánh mức độ của A cao hơn B.",
    group: "So sánh",
    examples: [
      { jp: "日本はベトナムより寒いです。", romaji: "Nihon wa Betonamu yori samui desu.", vn: "Nhật Bản thì lạnh hơn Việt Nam.", blank: "ベトナム", blankHint: "betonamu" },
      { jp: "新幹線はバスより速いです。", romaji: "Shinkansen wa basu yori hayai desu.", vn: "Shinkansen thì nhanh hơn xe buýt.", blank: "バス", blankHint: "basu" },
      { jp: "今日は昨日より暑いです。", romaji: "Kyou wa kinou yori atsui desu.", vn: "Hôm nay thì nóng hơn hôm qua.", blank: "昨日", blankHint: "kinou" },
      { jp: "漢字はひらがなより難しいです。", romaji: "Kanji wa hiragana yori muzukashii desu.", vn: "Kanji khó hơn Hiragana.", blank: "ひらがな", blankHint: "hiragana" },
      { jp: "肉より魚が好きです。", romaji: "Niku yori sakana ga suki desu.", vn: "Tôi thích cá hơn là thịt.", blank: "肉", blankHint: "niku" }
    ]
  },
  {
    id: 26,
    pattern: "A と B とどちらが〜",
    structure: "A と B と どちらが Tính từ ですか",
    meaning: "Giữa A và B thì cái nào ~ hơn?",
    when: "So sánh và yêu cầu chọn lựa giữa 2 vật/người.",
    group: "So sánh",
    examples: [
      { jp: "肉と魚とどちらが好きですか。", romaji: "Niku to sakana to dochira ga suki desu ka.", vn: "Giữa thịt và cá bạn thích cái nào hơn?", blank: "どちら", blankHint: "dochira" },
      { jp: "春と秋とどちらがいいですか。", romaji: "Haru to aki to dochira ga ii desu ka.", vn: "Giữa thu và xuân, mùa nào tốt hơn?", blank: "どちら", blankHint: "dochira" },
      { jp: "英語と日本語とどちらが難しいですか。", romaji: "Eigo to nihongo to dochira ga muzukashii desu ka.", vn: "Giữa tiếng Anh và tiếng Nhật cái nào khó hơn?", blank: "どちら", blankHint: "dochira" },
      { jp: "電車とバスとどちらが安いですか。", romaji: "Densha to basu to dochira ga yasui desu ka.", vn: "Tàu điện và xe buýt, cái nào rẻ hơn?", blank: "どちら", blankHint: "dochira" },
      { jp: "東京と大阪とどちらが大きいですか。", romaji: "Toukyou to Oosaka to dochira ga ookii desu ka.", vn: "Tokyo và Osaka, nơi nào lớn hơn?", blank: "どちら", blankHint: "dochira" }
    ]
  },
  {
    id: 27,
    pattern: "A の方が〜",
    structure: "A の ほうが Tính từ です",
    meaning: "A thì ~ hơn",
    when: "Đưa ra câu trả lời cho câu hỏi so sánh 2 vật (どちらが).",
    group: "So sánh",
    examples: [
      { jp: "肉の方が好きです。", romaji: "Niku no hou ga suki desu.", vn: "Thịt thì thích hơn.", blank: "肉", blankHint: "niku" },
      { jp: "秋の方がいいです。", romaji: "Aki no hou ga ii desu.", vn: "Thu thì hơn.", blank: "秋", blankHint: "aki" },
      { jp: "日本語の方が難しいです。", romaji: "Nihongo no hou ga muzukashii desu.", vn: "Tiếng Nhật thì khó hơn.", blank: "日本語", blankHint: "nihongo" },
      { jp: "バスの方が安いです。", romaji: "Basu no hou ga yasui desu.", vn: "Xe buýt thì rẻ hơn.", blank: "バス", blankHint: "basu" },
      { jp: "東京の方が大きいです。", romaji: "Toukyou no hou ga ookii desu.", vn: "Tokyo thì lớn hơn.", blank: "東京", blankHint: "toukyou" }
    ]
  },
  {
    id: 28,
    pattern: "〜の中で一番〜",
    structure: "Phạm vi + の なかで + Từ để hỏi + が + 一番 + T.từ ですか",
    meaning: "Trong số ~ thì cái gì/ai/khi nào ~ nhất?",
    when: "Hỏi hoặc nói về mức vươn trội nhất trong một tập hợp từ 3 thứ trở lên.",
    group: "So sánh",
    examples: [
      { jp: "1年の中でいつが一番好きですか。", romaji: "Ichinen no naka de itsu ga ichiban suki desu ka.", vn: "Trong 1 năm bạn thích lúc nào nhất?", blank: "一番", blankHint: "ichiban" },
      { jp: "果物の中でりんごが一番好きです。", romaji: "Kudamono no naka de ringo ga ichiban suki desu.", vn: "Trong các loại quả, tôi thích táo nhất.", blank: "果物", blankHint: "kudamono" },
      { jp: "家族の中で誰が一番背が高いですか。", romaji: "Kazoku no naka de dare ga ichiban se ga takai desu ka.", vn: "Trong gia đình ai cao nhất?", blank: "一番", blankHint: "ichiban" },
      { jp: "クラスの中で彼が一番若いです。", romaji: "Kurasu no naka de kare ga ichiban wakai desu.", vn: "Trong lớp anh ấy trẻ tuổi nhất.", blank: "クラス", blankHint: "kurasu" },
      { jp: "スポーツの中で何が一番面白いですか。", romaji: "Supootsu no naka de nani ga ichiban omoshiroi desu ka.", vn: "Trong thể thao bạn thấy môn nào thú vị nhất?", blank: "一番", blankHint: "ichiban" }
    ]
  },
  {
    id: 29,
    pattern: "〜つもりです",
    structure: "V(る) / V(ない) + つもりです",
    meaning: "Định / Quyết định ~",
    when: "Biểu đạt ý định hoặc quyết tâm của người nói.",
    group: "Mong muốn / Định hướng",
    examples: [
      { jp: "明日、車を買うつもりです。", romaji: "Ashita, kuruma o kau tsumori desu.", vn: "Ngày mai tôi định sẽ mua ô tô.", blank: "買う", blankHint: "kau" },
      { jp: "来年、結婚するつもりです。", romaji: "Rainen, kekkon suru tsumori desu.", vn: "Năm sau tôi định sẽ kết hôn.", blank: "結婚する", blankHint: "kekkon suru" },
      { jp: "今日は出かけないつもりです。", romaji: "Kyou wa dekakenai tsumori desu.", vn: "Hôm nay tôi định không ra ngoài.", blank: "出かけない", blankHint: "dekakenai" },
      { jp: "日本語を勉強するつもりです。", romaji: "Nihongo o benkyou suru tsumori desu.", vn: "Tôi định học tiếng Nhật.", blank: "勉強する", blankHint: "benkyou suru" },
      { jp: "タバコを吸わないつもりです。", romaji: "Tabako o suwanai tsumori desu.", vn: "Tôi quyết định sẽ không hút thuốc.", blank: "吸わない", blankHint: "suwanai" }
    ]
  },
  {
    id: 30,
    pattern: "〜予定です",
    structure: "V(る) / N + の + よていです",
    meaning: "Theo dự định thì ~ / Kế hoạch là ~",
    when: "Biểu đạt một lịch trình đã được quyết định sẵn, thường mang tính khách quan hơn 'tsumori'.",
    group: "Mong muốn / Định hướng",
    examples: [
      { jp: "7時に出発する予定です。", romaji: "Shichiji ni shuppatsu suru yotei desu.", vn: "Dự định là 7 giờ sẽ xuất phát.", blank: "出発する", blankHint: "shuppatsu suru" },
      { jp: "明日は会議の予定です。", romaji: "Ashita wa kaigi no yotei desu.", vn: "Ngày mai dự kiến sẽ có cuộc họp.", blank: "会議", blankHint: "kaigi" },
      { jp: "来週、帰国する予定です。", romaji: "Raishuu, kikoku suru yotei desu.", vn: "Tuần sau dự kiến sẽ về nước.", blank: "帰国する", blankHint: "kikoku suru" },
      { jp: "飛行機は10時に着く予定です。", romaji: "Hikouki wa juuji ni tsuku yotei desu.", vn: "Máy bay dự kiến sẽ đến lúc 10 giờ.", blank: "着く", blankHint: "tsuku" },
      { jp: "午後は仕事の予定です。", romaji: "Gogo wa shigoto no yotei desu.", vn: "Buổi chiều dự định là làm việc.", blank: "仕事", blankHint: "shigoto" }
    ]
  }
];
