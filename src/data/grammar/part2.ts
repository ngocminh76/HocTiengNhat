import { GrammarPattern } from '../../types';

export const GRAMMAR_PART_2: GrammarPattern[] = [
  {
    id: 11,
    pattern: "〜たことがあります",
    structure: "Động từ (thể た) + ことがあります",
    meaning: "Đã từng ~",
    when: "Dùng để kể về một trải nghiệm, kinh nghiệm trong quá khứ.",
    group: "Quá khứ / Kinh nghiệm",
    examples: [
      { jp: "日本へ行ったことがあります。", romaji: "Nihon e itta koto ga arimasu.", vn: "Tôi đã từng đi Nhật.", blank: "行った", blankHint: "itta" },
      { jp: "富士山に登ったことがあります。", romaji: "Fujisan ni nobotta koto ga arimasu.", vn: "Tôi đã từng leo núi Phú Sĩ.", blank: "登った", blankHint: "nobotta" },
      { jp: "寿司を食べたことがありますか。", romaji: "Sushi o tabeta koto ga arimasu ka.", vn: "Bạn đã từng ăn sushi chưa?", blank: "食べた", blankHint: "tabeta" },
      { jp: "桜を見たことがあります。", romaji: "Sakura o mita koto ga arimasu.", vn: "Tôi đã từng ngắm hoa anh đào.", blank: "見た", blankHint: "mita" },
      { jp: "馬に乗ったことがあります。", romaji: "Uma ni notta koto ga arimasu.", vn: "Tôi đã từng cưỡi ngựa.", blank: "乗った", blankHint: "notta" }
    ]
  },
  {
    id: 12,
    pattern: "〜たり、〜たりします",
    structure: "V1 (た) り、V2 (た) りします",
    meaning: "Nào là ~ nào là ~",
    when: "Liệt kê một vài hành động tiêu biểu trong số nhiều hành động.",
    group: "Liệt kê hành động",
    examples: [
      { jp: "休みの日は、本を読んだり、映画を見たりします。", romaji: "Yasumi no hi wa, hon o yondari, eiga o mitari shimasu.", vn: "Ngày nghỉ, tôi nào là đọc sách, nào là xem phim.", blank: "見たり", blankHint: "mitari" },
      { jp: "週末は、買い物をしたり、料理を作ったりします。", romaji: "Shuumatsu wa, kaimono o shitari, ryouri o tsukuttari shimasu.", vn: "Cuối tuần tôi đi mua sắm, nấu ăn...", blank: "作ったり", blankHint: "tsukuttari" },
      { jp: "昨日は、歌を歌ったり、踊ったりしました。", romaji: "Kinou wa, uta o utattari, odottari shimashita.", vn: "Hôm qua tôi đã hát, đã nhảy múa...", blank: "歌ったり", blankHint: "utattari" },
      { jp: "日曜日は、掃除したり、洗濯したりします。", romaji: "Nichiyoubi wa, souji shitari, sentaku shitari shimasu.", vn: "Chủ nhật tôi dọn dẹp, giặt giũ...", blank: "洗濯したり", blankHint: "sentaku shitari" },
      { jp: "公園を散歩したり、写真を撮ったりします。", romaji: "Kouen o sanpo shitari, shashin o tottari shimasu.", vn: "Tôi đi dạo công viên, chụp ảnh...", blank: "撮ったり", blankHint: "tottari" }
    ]
  },
  {
    id: 13,
    pattern: "〜になります",
    structure: "A(bỏ い) + く / N, Na + に + なります",
    meaning: "Trở nên ~ / Trở thành ~",
    when: "Diễn tả sự thay đổi trạng thái theo thời gian.",
    group: "Sự thay đổi",
    examples: [
      { jp: "だんだん暑くなります。", romaji: "Dandan atsuku narimasu.", vn: "Trời dần trở nên nóng.", blank: "暑く", blankHint: "atsuku" },
      { jp: "日本語が上手になりました。", romaji: "Nihongo ga jouzu ni narimashita.", vn: "Tiếng Nhật đã trở nên giỏi.", blank: "上手に", blankHint: "jouzu ni" },
      { jp: "暗くなりました。", romaji: "Kuraku narimashita.", vn: "Trời đã trở tối.", blank: "暗く", blankHint: "kuraku" },
      { jp: "将来、医者になりたいです。", romaji: "Shourai, isha ni naritai desu.", vn: "Tương lai tôi muốn trở thành bác sĩ.", blank: "医者に", blankHint: "isha ni" },
      { jp: "部屋がきれいになりました。", romaji: "Heya ga kirei ni narimashita.", vn: "Căn phòng đã trở nên sạch sẽ.", blank: "きれいに", blankHint: "kirei ni" }
    ]
  },
  {
    id: 14,
    pattern: "〜まえに",
    structure: "V(る) / N + の + まえに",
    meaning: "Trước khi ~",
    when: "Hành động B xảy ra trước hành động A.",
    group: "Thời gian",
    examples: [
      { jp: "寝る前に、本を読みます。", romaji: "Neru mae ni, hon o yomimasu.", vn: "Trước khi ngủ, tôi đọc sách.", blank: "寝る", blankHint: "neru" },
      { jp: "食べる前に、手を洗います。", romaji: "Taberu mae ni, te o araimasu.", vn: "Trước khi ăn, tôi rửa tay.", blank: "食べる", blankHint: "taberu" },
      { jp: "会議の前に、資料をコピーします。", romaji: "Kaigi no mae ni, shiryou o kopii shimasu.", vn: "Trước cuộc họp, tôi copy tài liệu.", blank: "会議", blankHint: "kaigi" },
      { jp: "3年前に日本へ来ました。", romaji: "Sannen mae ni Nihon e kimashita.", vn: "Tôi đã đến Nhật 3 năm trước.", blank: "3年", blankHint: "sannen" },
      { jp: "帰る前に、電話をしてください。", romaji: "Kaeru mae ni, denwa o shite kudasai.", vn: "Trước khi về, hãy gọi điện thoại nhé.", blank: "帰る", blankHint: "kaeru" }
    ]
  },
  {
    id: 15,
    pattern: "〜あとで",
    structure: "V(た) / N + の + あとで",
    meaning: "Sau khi ~",
    when: "Hành động B xảy ra nối tiếp sau hành động A.",
    group: "Thời gian",
    examples: [
      { jp: "仕事のあとで、飲みに行きませんか。", romaji: "Shigoto no ato de, nomi ni ikimasen ka.", vn: "Sau công việc, đi uống không?", blank: "仕事", blankHint: "shigoto" },
      { jp: "ご飯を食べたあとで、薬を飲みます。", romaji: "Gohan o tabeta ato de, kusuri o nomimasu.", vn: "Sau khi ăn cơm, tôi uống thuốc.", blank: "食べた", blankHint: "tabeta" },
      { jp: "映画を見たあとで、食事をしました。", romaji: "Eiga o mita ato de, shokuji o shimashita.", vn: "Sau khi xem phim, tôi đã đi ăn.", blank: "見た", blankHint: "mita" },
      { jp: "スポーツのあとで、シャワーを浴びます。", romaji: "Supootsu no ato de, shawaa o abimasu.", vn: "Sau khi chơi thể thao, tôi tắm vòi sen.", blank: "スポーツ", blankHint: "supootsu" },
      { jp: "買ったあとで、後悔しました。", romaji: "Katta ato de, koukai shimashita.", vn: "Sau khi mua, tôi đã hối hận.", blank: "買った", blankHint: "katta" }
    ]
  },
  {
    id: 16,
    pattern: "〜から (Nguyên nhân)",
    structure: "Câu 1 + から、Câu 2",
    meaning: "Vì ~ nên ~",
    when: "Giải thích lý do của hành động, sự việc.",
    group: "Nguyên nhân / Kết quả",
    examples: [
      { jp: "忙しいですから、行きません。", romaji: "Isogashii desu kara, ikimasen.", vn: "Vì bận nên tôi không đi.", blank: "忙しい", blankHint: "isogashii" },
      { jp: "雨が降っていますから、出かけません。", romaji: "Ame ga futte imasu kara, dekakemasen.", vn: "Vì trời đang mưa nên tôi không ra ngoài.", blank: "降って", blankHint: "futte" },
      { jp: "時間がありませんから、タクシーで行きましょう。", romaji: "Jikan ga arimasen kara, takushii de ikimashou.", vn: "Vì không có thời gian nên đi bằng taxi thôi.", blank: "時間", blankHint: "jikan" },
      { jp: "危ないですから、触らないでください。", romaji: "Abunai desu kara, sawaranaide kudasai.", vn: "Vì nguy hiểm nên xin đừng chạm vào.", blank: "危ない", blankHint: "abunai" },
      { jp: "好きですから、毎日食べます。", romaji: "Suki desu kara, mainichi tabemasu.", vn: "Vì thích nên ngày nào tôi cũng ăn.", blank: "好き", blankHint: "suki" }
    ]
  },
  {
    id: 17,
    pattern: "〜でしょう？",
    structure: "Thể thông thường (A/N/V) + でしょう",
    meaning: "〜 phải không?",
    when: "Xác nhận lại một thông tin mà người nói nghĩ rằng người nghe cũng biết.",
    group: "Hỏi và Đáp",
    examples: [
      { jp: "明日も忙しいでしょう？", romaji: "Ashita mo isogashii deshou?", vn: "Ngày mai chắc cũng bận phải không?", blank: "忙しい", blankHint: "isogashii" },
      { jp: "北海道は寒いでしょう？", romaji: "Hokkaidou wa samui deshou?", vn: "Hokkaido chắc lạnh lắm phải không?", blank: "寒い", blankHint: "samui" },
      { jp: "山田さんは学生でしょう？", romaji: "Yamada-san wa gakusei deshou?", vn: "Yamada là học sinh phải không?", blank: "学生", blankHint: "gakusei" },
      { jp: "昨日は雨だったでしょう？", romaji: "Kinou wa ame datta deshou?", vn: "Hôm qua trời mưa đúng không?", blank: "雨だった", blankHint: "ame datta" },
      { jp: "このパソコン、高いでしょう？", romaji: "Kono pasokon, takai deshou?", vn: "Cái máy tính này đắt đúng không?", blank: "高い", blankHint: "takai" }
    ]
  },
  {
    id: 18,
    pattern: "〜と思います",
    structure: "Thể thông thường + と思います",
    meaning: "Tôi nghĩ rằng ~",
    when: "Bày tỏ quan điểm, suy đoán cá nhân về một vấn đề.",
    group: "Suy nghĩ / Bày tỏ",
    examples: [
      { jp: "明日は雨が降ると思います。", romaji: "Ashita wa ame ga furu to omoimasu.", vn: "Tôi nghĩ ngày mai trời sẽ mưa.", blank: "降る", blankHint: "furu" },
      { jp: "この映画は面白いと思います。", romaji: "Kono eiga wa omoshiroi to omoimasu.", vn: "Tôi nghĩ bộ phim này thú vị.", blank: "面白い", blankHint: "omoshiroi" },
      { jp: "彼は来ないと思います。", romaji: "Kare wa konai to omoimasu.", vn: "Tôi nghĩ anh ấy sẽ không đến.", blank: "来ない", blankHint: "konai" },
      { jp: "日本は物価が高いと思います。", romaji: "Nihon wa bukka ga takai to omoimasu.", vn: "Tôi nghĩ vật giá ở Nhật cao.", blank: "高い", blankHint: "takai" },
      { jp: "田中さんは寝ていると思います。", romaji: "Tanaka-san wa nete iru to omoimasu.", vn: "Tôi nghĩ Yamada đang ngủ.", blank: "寝ている", blankHint: "nete iru" }
    ]
  },
  {
    id: 19,
    pattern: "〜と言う",
    structure: "Thể thông thường + と言いました / 言っています",
    meaning: "Nói rằng ~",
    when: "Trích dẫn lại lời nói của ai đó.",
    group: "Trích dẫn",
    examples: [
      { jp: "彼は「明日行く」と言いました。", romaji: "Kare wa 'ashita iku' to iimashita.", vn: "Anh ấy nói 'sẽ đi vào ngày mai'.", blank: "行く", blankHint: "iku" },
      { jp: "先生はテストがあると言いました。", romaji: "Sensei wa tesuto ga aru to iimashita.", vn: "Thầy giáo nói rằng sẽ có bài kiểm tra.", blank: "ある", blankHint: "aru" },
      { jp: "毎日忙しいと言っています。", romaji: "Mainichi isogashii to itte imasu.", vn: "Anh ấy thường nói là mỗi ngày đều bận.", blank: "忙しい", blankHint: "isogashii" },
      { jp: "母は早く帰れと言いました。", romaji: "Haha wa hayaku kaere to iimashita.", vn: "Mẹ tôi bảo hãy về sớm.", blank: "帰れ", blankHint: "kaere" },
      { jp: "社長は会議に出ると言いました。", romaji: "Shachou wa kaigi ni deru to iimashita.", vn: "Giám đốc nói rằng sẽ tham gia họp.", blank: "出る", blankHint: "deru" }
    ]
  },
  {
    id: 20,
    pattern: "〜で〜があります",
    structure: "Địa điểm + で + N + があります",
    meaning: "Ở ~ diễn ra sự kiện ~",
    when: "Dùng để biểu đạt địa điểm tổ chức một sự kiện, lễ hội, trận đấu...",
    warning: "Phân biệt với にあります (tồn tại ở đâu). Về sự kiện thì dùng であります.",
    group: "Sự kiện",
    examples: [
      { jp: "京都で祭りがあります。", romaji: "Kyouto de matsuri ga arimasu.", vn: "Ở Kyoto diễn ra lễ hội.", blank: "京都で", blankHint: "kyouto de" },
      { jp: "学校で試験があります。", romaji: "Gakkou de shiken ga arimasu.", vn: "Tại trường sẽ có kì thi.", blank: "学校で", blankHint: "gakkou de" },
      { jp: "東京でオリンピックがありました。", romaji: "Toukyou de orinpikku ga arimashita.", vn: "Thế vận hội đã diễn ra tại Tokyo.", blank: "東京で", blankHint: "toukyou de" },
      { jp: "明日、ホテルでパーティーがあります。", romaji: "Ashita, hoteru de paatii ga arimasu.", vn: "Ngày mai sẽ có tiệc ở khách sạn.", blank: "ホテルで", blankHint: "hoteru de" },
      { jp: "公園でコンサートがあります。", romaji: "Kouen de konsaato ga arimasu.", vn: "Có buổi hòa nhạc tại công viên.", blank: "公園で", blankHint: "kouen de" }
    ]
  }
];
