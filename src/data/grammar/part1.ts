import { GrammarPattern } from '../../types';

export const GRAMMAR_PART_1: GrammarPattern[] = [
  {
    id: 1,
    pattern: "〜てください",
    structure: "Động từ (て) + ください",
    meaning: "Xin hãy làm ~",
    when: "Yêu cầu ai đó làm gì một cách lịch sự.",
    warning: "Với người bề trên nên dùng 〜ていただけますか.",
    group: "Động từ te-form",
    examples: [
      { jp: "ここに名前を書いてください。", romaji: "Koko ni namae o kaite kudasai.", vn: "Xin hãy viết tên vào đây.", blank: "書いて", blankHint: "kaite", blankMeaning: "viết (te-form)" },
      { jp: "少し待ってください。", romaji: "Sukoshi matte kudasai.", vn: "Xin hãy đợi một chút.", blank: "待って", blankHint: "matte", blankMeaning: "đợi (te-form)" },
      { jp: "ゆっくり話してください。", romaji: "Yukkuri hanashite kudasai.", vn: "Xin hãy nói chậm thôi.", blank: "話して", blankHint: "hanashite", blankMeaning: "nói (te-form)" },
      { jp: "窓を開けてください。", romaji: "Mado o akete kudasai.", vn: "Xin hãy mở cửa sổ ra.", blank: "開けて", blankHint: "akete", blankMeaning: "mở (te-form)" },
      { jp: "この漢字を読んでください。", romaji: "Kono kanji o yonde kudasai.", vn: "Xin hãy đọc chữ Kanji này.", blank: "読んで", blankHint: "yonde", blankMeaning: "đọc (te-form)" }
    ]
  },
  {
    id: 2,
    pattern: "〜ています",
    structure: "Động từ (て) + います",
    meaning: "Đang làm ~ / Trạng thái ~",
    when: "Nhấn mạnh hành động đang diễn ra tại thời điểm nói, hoặc một trạng thái/thói quen.",
    group: "Động từ te-form",
    examples: [
      { jp: "今、ご飯を食べています。", romaji: "Ima, gohan o tabete imasu.", vn: "Bây giờ tôi đang ăn cơm.", blank: "食べて", blankHint: "tabete", blankMeaning: "ăn (te-form)" },
      { jp: "雨が降っています。", romaji: "Ame ga futte imasu.", vn: "Trời đang mưa.", blank: "降って", blankHint: "futte", blankMeaning: "rơi, mưa (te-form)" },
      { jp: "東京に住んでいます。", romaji: "Toukyou ni sunde imasu.", vn: "Tôi đang sống ở Tokyo.", blank: "住んで", blankHint: "sunde", blankMeaning: "sống, ở (te-form)" },
      { jp: "結婚しています。", romaji: "Kekkon shite imasu.", vn: "Tôi đã kết hôn (đang trong trạng thái kết hôn).", blank: "結婚して", blankHint: "kekkon shite", blankMeaning: "kết hôn (te-form)" },
      { jp: "毎日、日本語を勉強しています。", romaji: "Mainichi, nihongo o benkyou shite imasu.", vn: "Hàng ngày tôi đều học tiếng Nhật.", blank: "勉強して", blankHint: "benkyou shite", blankMeaning: "học tập (te-form)" }
    ]
  },
  {
    id: 3,
    pattern: "〜たいです",
    structure: "Động từ (bỏ ます) + たいです",
    meaning: "Muốn làm ~",
    when: "Dùng để diễn tả mong muốn của BẢN THÂN người nói (không dùng cho người thứ 3).",
    warning: "Với mong muốn của người thứ 3, dùng 〜たがっています.",
    group: "Mong muốn / Định hướng",
    examples: [
      { jp: "日本へ行きたいです。", romaji: "Nihon e ikitai desu.", vn: "Tôi muốn đi Nhật.", blank: "行きたい", blankHint: "ikitai", blankMeaning: "muốn đi" },
      { jp: "新しい車を買いたいです。", romaji: "Atarashii kuruma o kaitai desu.", vn: "Tôi muốn mua ô tô mới.", blank: "買いたい", blankHint: "kaitai", blankMeaning: "muốn mua" },
      { jp: "今日は何もしたくないです。", romaji: "Kyou wa nani mo shitakunai desu.", vn: "Hôm nay tôi không muốn làm gì cả.", blank: "したくない", blankHint: "shitakunai", blankMeaning: "không muốn làm" },
      { jp: "寿司を食べたいです。", romaji: "Sushi o tabetai desu.", vn: "Tôi muốn ăn sushi.", blank: "食べたい", blankHint: "tabetai", blankMeaning: "muốn ăn" },
      { jp: "早く帰りたいです。", romaji: "Hayaku kaeritai desu.", vn: "Tôi muốn về sớm.", blank: "帰りたい", blankHint: "kaeritai", blankMeaning: "muốn về" }
    ]
  },
  {
    id: 4,
    pattern: "〜ましょう / 〜ましょうか",
    structure: "Động từ (bỏ ます) + ましょう / ましょうか",
    meaning: "Hãy cùng ~ nhé / Để tôi ~ cho nhé",
    when: "〜ましょう dùng để rủ rê cùng làm. 〜ましょうか dùng để đề nghị giúp đỡ ai đó.",
    group: "Đề nghị / Rủ rê",
    examples: [
      { jp: "一緒に帰りましょう。", romaji: "Issho ni kaerimashou.", vn: "Cùng về nhé.", blank: "帰りましょう", blankHint: "kaerimashou", blankMeaning: "cùng về nhé" },
      { jp: "少し休みましょう。", romaji: "Sukoshi yasumimashou.", vn: "Nghỉ một chút nào.", blank: "休みましょう", blankHint: "yasumimashou", blankMeaning: "cùng nghỉ nhé" },
      { jp: "荷物を持ちましょうか。", romaji: "Nimotsu o mochimashou ka.", vn: "Để tôi xách hành lý giúp nhé?", blank: "持ちましょうか", blankHint: "mochimashou ka", blankMeaning: "để tôi cầm giúp" },
      { jp: "窓を開けましょうか。", romaji: "Mado o akemashou ka.", vn: "Để tôi mở cửa sổ nhé?", blank: "開けましょうか", blankHint: "akemashou ka", blankMeaning: "để tôi mở giúp" },
      { jp: "明日、映画を見に行きましょう。", romaji: "Ashita, eiga o mi ni ikimashou.", vn: "Ngày mai cùng đi xem phim nhé.", blank: "行きましょう", blankHint: "ikimashou", blankMeaning: "cùng đi nhé" }
    ]
  },
  {
    id: 5,
    pattern: "〜てもいいですか",
    structure: "Động từ (て) + もいいですか",
    meaning: "Tôi có thể ~ được không?",
    when: "Dùng để xin phép làm một việc gì đó.",
    group: "Xin phép / Cho phép",
    examples: [
      { jp: "写真を撮ってもいいですか。", romaji: "Shashin o totte mo ii desu ka.", vn: "Tôi có thể chụp ảnh được không?", blank: "撮って", blankHint: "totte", blankMeaning: "chụp (te-form)" },
      { jp: "ここに座ってもいいですか。", romaji: "Koko ni suwatte mo ii desu ka.", vn: "Tôi có thể ngồi đây được không?", blank: "座って", blankHint: "suwatte", blankMeaning: "ngồi (te-form)" },
      { jp: "ペンを借りてもいいですか。", romaji: "Pen o karite mo ii desu ka.", vn: "Tôi có thể mượn bút được không?", blank: "借りて", blankHint: "karite", blankMeaning: "mượn (te-form)" },
      { jp: "タバコを吸ってもいいですか。", romaji: "Tabako o sutte mo ii desu ka.", vn: "Tôi có thể hút thuốc được không?", blank: "吸って", blankHint: "sutte", blankMeaning: "hút (te-form)" },
      { jp: "帰ってもいいですか。", romaji: "Kaette mo ii desu ka.", vn: "Tôi có thể đi về được không?", blank: "帰って", blankHint: "kaette", blankMeaning: "về (te-form)" }
    ]
  },
  {
    id: 6,
    pattern: "〜はいけません",
    structure: "Động từ (て) + はいけません",
    meaning: "Không được ~",
    when: "Ra lệnh cấm chỉ một hành động nào đó, thường dùng cho luật lệ hoặc cảnh báo.",
    group: "Xin phép / Cho phép",
    examples: [
      { jp: "ここに車を止めてはいけません。", romaji: "Koko ni kuruma o tomete wa ikemasen.", vn: "Không được đỗ xe ở đây.", blank: "止めて", blankHint: "tomete", blankMeaning: "dừng, đỗ (te-form)" },
      { jp: "写真を撮ってはいけません。", romaji: "Shashin o totte wa ikemasen.", vn: "Không được chụp ảnh.", blank: "撮って", blankHint: "totte", blankMeaning: "chụp (te-form)" },
      { jp: "ここに入ってはいけません。", romaji: "Koko ni haitte wa ikemasen.", vn: "Không được vào đây.", blank: "入って", blankHint: "haitte", blankMeaning: "vào (te-form)" },
      { jp: "テスト中、話してはいけません。", romaji: "Tesuto-chuu, hanashite wa ikemasen.", vn: "Trong lúc kiểm tra không được nói chuyện.", blank: "話して", blankHint: "hanashite", blankMeaning: "nói (te-form)" },
      { jp: "お酒を飲んではいけません。", romaji: "Osake o nonde wa ikemasen.", vn: "Không được uống rượu.", blank: "飲んで", blankHint: "nonde", blankMeaning: "uống (te-form)" }
    ]
  },
  {
    id: 7,
    pattern: "〜ないでください",
    structure: "Động từ (ない) + でください",
    meaning: "Xin đừng ~",
    when: "Yêu cầu ai đó KHÔNG làm một việc gì đó một cách lịch sự.",
    group: "Động từ nai-form",
    examples: [
      { jp: "写真を撮らないでください。", romaji: "Shashin o toranaide kudasai.", vn: "Xin đừng chụp ảnh.", blank: "撮らないで", blankHint: "toranaide", blankMeaning: "đừng chụp" },
      { jp: "忘れないでください。", romaji: "Wasurenaide kudasai.", vn: "Xin đừng quên.", blank: "忘れないで", blankHint: "wasurenaide", blankMeaning: "đừng quên" },
      { jp: "心配しないでください。", romaji: "Shinpai shinaide kudasai.", vn: "Xin đừng lo lắng.", blank: "心配しないで", blankHint: "shinpai shinaide", blankMeaning: "đừng lo lắng" },
      { jp: "ここに入らないでください。", romaji: "Koko ni hairanaide kudasai.", vn: "Xin đừng vào đây.", blank: "入らないで", blankHint: "hairanaide", blankMeaning: "đừng vào" },
      { jp: "泣かないでください。", romaji: "Nakanaide kudasai.", vn: "Xin đừng khóc.", blank: "泣かないで", blankHint: "nakanaide", blankMeaning: "đừng khóc" }
    ]
  },
  {
    id: 8,
    pattern: "〜なければなりません",
    structure: "Động từ (ない - bỏ い) + ければなりません",
    meaning: "Phải ~",
    when: "Biểu thị nghĩa vụ, bổn phận phải thực hiện (không phụ thuộc ý chí người nói).",
    group: "Động từ nai-form",
    examples: [
      { jp: "薬を飲まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", vn: "Phải uống thuốc.", blank: "飲ま", blankHint: "noma", blankMeaning: "uống (gốc)" },
      { jp: "明日、早く起きなければなりません。", romaji: "Ashita, hayaku okinakereba narimasen.", vn: "Ngày mai tôi phải thức dậy sớm.", blank: "起き", blankHint: "oki", blankMeaning: "thức dậy (gốc)" },
      { jp: "宿題をしなければなりません。", romaji: "Shukudai o shinakereba narimasen.", vn: "Phải làm bài tập về nhà.", blank: "し", blankHint: "shi", blankMeaning: "làm (gốc)" },
      { jp: "パスポートを持っていなければなりません。", romaji: "Pasupooto o motte inakereba narimasen.", vn: "Phải có hộ chiếu.", blank: "い", blankHint: "i", blankMeaning: "có, ở (gốc)" },
      { jp: "日本語を勉強しなければなりません。", romaji: "Nihongo o benkyou shinakereba narimasen.", vn: "Phải học tiếng Nhật.", blank: "し", blankHint: "shi", blankMeaning: "làm (gốc)" }
    ]
  },
  {
    id: 9,
    pattern: "〜なくてもいいです",
    structure: "Động từ (ない - bỏ い) + くてもいいです",
    meaning: "Không cần ~ cũng được",
    when: "Chỉ sự không cần thiết của một hành động.",
    group: "Động từ nai-form",
    examples: [
      { jp: "明日、来なくてもいいです。", romaji: "Ashita, konakutemo ii desu.", vn: "Ngày mai không đến cũng được.", blank: "来", blankHint: "ko", blankMeaning: "đến (gốc)" },
      { jp: "無理をしなくてもいいです。", romaji: "Muri o shinakutemo ii desu.", vn: "Không cần phải gắng sức làm gì.", blank: "し", blankHint: "shi", blankMeaning: "làm (gốc)" },
      { jp: "靴を脱がなくてもいいです。", romaji: "Kutsu o nuganakutemo ii desu.", vn: "Không cần cởi giày cũng được.", blank: "脱が", blankHint: "nuga", blankMeaning: "cởi (gốc)" },
      { jp: "急がなくてもいいです。", romaji: "Isoganakutemo ii desu.", vn: "Không cần phải vội đâu.", blank: "急が", blankHint: "isoga", blankMeaning: "vội (gốc)" },
      { jp: "お金を払わなくてもいいです。", romaji: "Okane o harawanakutemo ii desu.", vn: "Không cần phải trả tiền đâu.", blank: "払わ", blankHint: "harawa", blankMeaning: "trả (gốc)" }
    ]
  },
  {
    id: 10,
    pattern: "〜ことができます",
    structure: "Động từ (thể từ điển る) + ことができます",
    meaning: "Có thể ~",
    when: "Dùng để biểu đạt khả năng làm được một việc gì đó.",
    group: "Khả năng",
    examples: [
      { jp: "日本語を話すことができます。", romaji: "Nihongo o hanasu koto ga dekimasu.", vn: "Tôi có thể nói tiếng Nhật.", blank: "話す", blankHint: "hanasu", blankMeaning: "nói" },
      { jp: "ピアノを弾くことができます。", romaji: "Piano o hiku koto ga dekimasu.", vn: "Tôi có thể chơi piano.", blank: "弾く", blankHint: "hiku", blankMeaning: "chơi đàn" },
      { jp: "ここでタバコを吸うことができますか。", romaji: "Koko de tabako o suu koto ga dekimasu ka.", vn: "Ở đây có thể hút thuốc không?", blank: "吸う", blankHint: "suu", blankMeaning: "hút" },
      { jp: "漢字を読むことができます。", romaji: "Kanji o yomu koto ga dekimasu.", vn: "Tôi có thể đọc được Kanji.", blank: "読む", blankHint: "yomu", blankMeaning: "đọc" },
      { jp: "一人で行くことができます。", romaji: "Hitori de iku koto ga dekimasu.", vn: "Tôi có thể đi một mình.", blank: "行く", blankHint: "iku", blankMeaning: "đi" }
    ]
  }
];
