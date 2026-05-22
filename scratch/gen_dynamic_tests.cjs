const fs = require('fs');
const path = './src/data/dokkai-reviews.ts';

// Utility for random choices
function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Utility to shuffle an array and keep track of the original correct index
function shuffleOptions(options, correctIndex) {
  const correctOption = options[correctIndex];
  let newOptions = [...options];
  
  // Fisher-Yates shuffle
  for (let i = newOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newOptions[i], newOptions[j]] = [newOptions[j], newOptions[i]];
  }
  
  const newCorrectIndex = newOptions.indexOf(correctOption);
  return { options: newOptions, correctIndex: newCorrectIndex };
}

// ==========================================
// DATA POOLS FOR EACH CHECKPOINT
// ==========================================

const pool_1_5 = {
  moji1: [
    { q: 'わたしの 【国】は ベトナムです。', o: ['くに', 'まち', 'うち', 'いえ'], c: 0, exp: '国 đọc là くに (đất nước).' },
    { q: '【先月】、日本へ きました。', o: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], c: 2, exp: '先月 đọc là せんげつ (tháng trước).' },
    { q: '【毎日】 にほんごを べんきょうします。', o: ['まいにち', 'まいしゅう', 'まいげつ', 'まいとし'], c: 0, exp: '毎日 đọc là まいにち (mỗi ngày).' },
    { q: 'きょうは 【水曜日】です。', o: ['かようび', 'すいようび', 'もくようび', 'きんようび'], c: 1, exp: '水曜日 đọc là すいようび (thứ Tư).' }
  ],
  moji2: [
    { q: '【でんしゃ】で かいしゃへ いきます。', o: ['電車', '電気', '電話', '電波'], c: 0, exp: '電車 là tàu điện.' },
    { q: 'あの 【レストラン】は おいしいです。', o: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], c: 1, exp: 'Restaurant viết là レストラン.' },
    { q: 'ともだちと 【デパート】へ いきます。', o: ['デバート', 'テパート', 'デパート', 'デパード'], c: 2, exp: 'Department store viết là デパート.' },
    { q: '【くるま】を かいました。', o: ['車', '東', '重', '庫'], c: 0, exp: 'くるま (ô tô) viết là 車.' }
  ],
  moji3: [
    { q: 'あしたは やすみです。うちで ゆっくり 【　　　】。', o: ['おきます', 'はたらきます', 'やすみます', 'おわります'], c: 2, exp: 'Nghỉ ngơi: やすみます.' },
    { q: 'きのう １０じに 【　　　】。', o: ['おきました', 'ねました', 'きました', 'いきました'], c: 1, exp: 'Đã ngủ lúc 10 giờ: ねました.' },
    { q: 'えんぴつで てがみを 【　　　】。', o: ['よみます', 'かきます', 'ききます', 'みます'], c: 1, exp: 'Viết thư: かきます.' },
    { q: 'スーパーで くだものを 【　　　】。', o: ['かいます', 'あいます', 'すいます', 'のみます'], c: 0, exp: 'Mua trái cây: かいます.' }
  ],
  bunpou1: [
    { q: 'わたしは えんぴつ（　　　）てがみを かきます。', o: ['に', 'で', 'を', 'が'], c: 1, exp: 'Phương tiện/công cụ -> で.' },
    { q: 'あした どこ（　　　）いきません。', o: ['へも', 'をも', 'がも', 'でも'], c: 0, exp: 'Phủ định hoàn toàn: どこへも いきません.' },
    { q: 'きょうは ５じ（　　　）はたらきます。', o: ['まで', 'から', 'に', 'で'], c: 0, exp: 'Làm việc "đến" 5 giờ -> まで.' },
    { q: 'A「それは （　　　）ですか。」 B「コンピューターの ほん です。」', o: ['なんの ほん', 'だれの ほん', 'どこ', 'なん'], c: 3, exp: 'Hỏi cái gì dùng なん.' }
  ],
  bunpou2: [
    { q: 'ここは　___ ___ _★_ ___　です。', o: ['の', 'だいがく', 'とうきょう', 'しょくどう'], c: 0, exp: 'ここは とうきょう だいがく の しょくどう です.' },
    { q: 'わたしは　___ ___ _★_ ___　いきます。', o: ['ともだち', 'へ', 'と', 'ぎんこう'], c: 3, exp: 'わたしは ともだち と ぎんこう へ いきます.' }
  ],
  dokkai1: [
    { 
      text: ['きのうは わたしの たんじょうびでした。', 'わたしは ともだち（　１　）レストランへ いきました。', 'レストランで おいしい ごはんを たべました。', 'それから、えいがを（　２　）。とても たのしかったです。'],
      qs: [
        { q: '（　１　）に入れるものはどれですか。', o: ['と', 'に', 'で', 'へ'], c: 0, exp: 'Cùng với bạn -> と.' },
        { q: '（　２　）に入れるものはどれですか。', o: ['みます', 'みました', 'みますか', 'みません'], c: 1, exp: 'Kể chuyện quá khứ -> みました.' }
      ]
    }
  ]
};

const pool_6_10 = {
  moji1: [
    { q: '【手紙】を かきます。', o: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], c: 0, exp: '手紙 đọc là てがみ (Bức thư).' },
    { q: '【えいご】を べんきょうします。', o: ['英話', '英語', '英吾', '英悟'], c: 1, exp: '英語 là Tiếng Anh.' },
    { q: '【新しい】 くるまです。', o: ['あたらし', 'あたらしい', 'あだらしい', 'あらたしい'], c: 1, exp: '新しい đọc là あたらしい (mới).' },
    { q: '【古い】 じてんしゃです。', o: ['ふるい', 'ぶるい', 'ひろい', 'ふろい'], c: 0, exp: '古い đọc là ふるい (cũ).' }
  ],
  moji2: [
    { q: '【プレゼント】を あげます。', o: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], c: 1, exp: 'Present (Quà) viết Katakana là プレゼント.' },
    { q: '【コーヒー】を のみます。', o: ['コーヒー', 'コヒー', 'コーヒ', 'コヒ'], c: 0, exp: 'Coffee viết là コーヒー.' },
    { q: '【シャツ】を かいました。', o: ['シヤツ', 'シャツ', 'サツ', 'シヤッ'], c: 1, exp: 'Shirt viết là シャツ.' },
    { q: '【パン】を たべます。', o: ['ハン', 'バン', 'パン', 'ホン'], c: 2, exp: 'Bread viết là パン.' }
  ],
  moji3: [
    { q: 'はさみで かみを 【　　　】。', o: ['きります', 'かします', 'かります', 'もらいます'], c: 0, exp: 'Cắt (きります) giấy.' },
    { q: 'この りんごは とても 【　　　】です。', o: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], c: 1, exp: 'Táo thì ngon (おいしい).' },
    { q: 'せんせいから ほんを 【　　　】。', o: ['あげました', 'もらいました', 'かしました', 'おしえました'], c: 1, exp: 'Nhận từ giáo viên (もらいました).' },
    { q: '日本の カメラは 【　　　】ですか。', o: ['どう', 'どんな', 'どれ', 'どの'], c: 0, exp: 'Thế nào? (どうですか).' }
  ],
  bunpou1: [
    { q: 'スプーン（　　　）ごはんを たべます。', o: ['で', 'に', 'を', 'が'], c: 0, exp: 'Chỉ phương tiện/công cụ -> で.' },
    { q: 'わたしは 木村さん（　　　）はなを あげました。', o: ['で', 'に', 'を', 'へ'], c: 1, exp: 'Cho ai cái gì -> に.' },
    { q: 'きのうの パーティーは （　　　）。', o: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], c: 2, exp: 'Tính từ đuôi い ở quá khứ -> かったです.' },
    { q: 'この へやは （　　　）ありません。', o: ['しずか', 'しずかに', 'しずかじゃ', 'しずかくて'], c: 2, exp: 'Phủ định tính từ đuôi な -> じゃ ありません.' }
  ],
  bunpou2: [
    { q: 'とうきょうは　___ ___ _★_ ___　まちです。', o: ['て', 'きれいで', 'にぎやかな', 'とても'], c: 3, exp: 'とうきょうは とても きれいで にぎやかな まち です.' },
    { q: 'わたしは　___ ___ _★_ ___　もらいました。', o: ['を', 'ともだち', 'に', 'とけい'], c: 0, exp: 'わたしは ともだち に とけい を もらいました.' }
  ],
  dokkai1: [
    { 
      text: ['きょうは わたしの たんじょうびです。', 'あさ ははに プレゼントを もらいました。シャツと ぼうしです。', 'シャツは しろいです。ぼうしは くろいです。', 'よる かぞくと いっしょに レストランで しょくじを します。'],
      qs: [
        { q: 'なにを もらいましたか。', o: ['しろい シャツと しろい ぼうし', 'くろい シャツと くろい ぼうし', 'しろい シャツと くろい ぼうし', 'くろい シャツと しろい ぼうし'], c: 2, exp: 'シャツは しろいです。ぼうしは くろいです.' },
        { q: 'よる どこで ごはんを たべますか。', o: ['うち', 'レストラン', 'かいしゃ', 'がっこう'], c: 1, exp: 'レストランで しょくじを します.' }
      ]
    }
  ]
};

const pool_11_15 = {
  moji1: [
    { q: '【外国】へ いきました。', o: ['がいこく', 'がいごく', 'かいこく', 'かいごく'], c: 0, exp: '外国 đọc là がいこく (Nước ngoài).' },
    { q: 'ここは 【有名】な まちです。', o: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], c: 1, exp: '有名 đọc là ゆうめい (Nổi tiếng).' },
    { q: '【一日】に ３かい くすりを のみます。', o: ['いちにち', 'いつか', 'ついたち', 'いっか'], c: 0, exp: '一日 trong khoảng thời gian đọc là いちにち.' },
    { q: '【切手】を かいました。', o: ['きって', 'きっぷ', 'きくて', 'きっぶ'], c: 0, exp: '切手 đọc là きって (Tem).' }
  ],
  moji2: [
    { q: '【カメラ】を かいたいです。', o: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], c: 1, exp: 'Camera viết là カメラ.' },
    { q: 'あたらし 【くるま】が ほしいです。', o: ['車', '軍', '庫', '連'], c: 0, exp: 'Xe ô tô viết là 車.' },
    { q: '【デパート】へ いきます。', o: ['デパート', 'デバート', 'テパート', 'テバート'], c: 0, exp: 'Department store viết là デパート.' },
    { q: '【スーパー】で くだものを かいます。', o: ['スーパー', 'スーバー', 'ズーパー', 'ズーバー'], c: 0, exp: 'Supermarket viết là スーパー.' }
  ],
  moji3: [
    { q: 'りんごを みっつ 【　　　】。', o: ['で', 'を', 'に', 'ください'], c: 3, exp: 'Cho tôi 3 quả táo: りんごを みっつ ください.' },
    { q: 'いま のどが 【　　　】。', o: ['かわきました', 'すきました', 'いたいです', 'わるいです'], c: 0, exp: 'Khát nước: のどが かわきました.' },
    { q: 'えきまで 【　　　】で いきます。', o: ['じてんしゃ', 'ひこうき', 'ふね', 'しんかんせん'], c: 0, exp: 'Đi đến nhà ga bằng xe đạp (じてんしゃ).' },
    { q: '【　　　】から きましたか。', o: ['どこ', 'だれ', 'いつ', 'なん'], c: 0, exp: 'Từ đâu đến? (どこ).' }
  ],
  bunpou1: [
    { q: 'きょうは （　　　） たのしかったです。', o: ['とても', 'あまり', 'ぜんぜん', 'すこし'], c: 0, exp: 'Khẳng định -> とても (Rất).' },
    { q: 'ここで しゃしんを （　　　）は いけません。', o: ['とる', 'とり', 'とって', 'とらない'], c: 2, exp: 'Cấm đoán: Vて はいけません -> とって.' },
    { q: 'A「ちょっと （　　　）ましょうか。」', o: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], c: 0, exp: 'Rủ rê -> Động từ bỏ ます + ましょうか -> やすみ.' },
    { q: 'わたしは にほんご（　　　） わかります。', o: ['が', 'を', 'に', 'で'], c: 0, exp: 'Hiểu cái gì dùng trợ từ が.' }
  ],
  bunpou2: [
    { q: 'わたしは　___ ___ _★_ ___　いきます。', o: ['えいが', 'に', 'を', 'みに'], c: 3, exp: 'わたしは えいが を みに いきます.' },
    { q: 'この　___ ___ _★_ ___　いいですか。', o: ['を', 'ペン', 'つかっても', 'は'], c: 2, exp: 'この ペン は つかっても いいですか.' }
  ],
  dokkai1: [
    { 
      text: ['わたしの かぞくは ４にんです。', 'あには だいがくせいです。いま とうきょう（　１　）すんでいます。', 'わたしは こうこうせいです。', 'らいねん だいがくへ （　２　）たいです。'],
      qs: [
        { q: '（　１　）に入れるものはどれですか。', o: ['で', 'に', 'へ', 'を'], c: 1, exp: 'Sống ở đâu dùng trợ từ に.' },
        { q: '（　２　）に入れるものはどれですか。', o: ['いき', 'いく', 'いって', 'いきたい'], c: 0, exp: 'Vます bỏ ます + たい -> いき.' }
      ]
    }
  ]
};

const pool_16_20 = {
  moji1: [
    { q: 'えいがを 【見】ます。', o: ['み', 'き', 'し', 'よ'], c: 0, exp: '見 đọc là み.' },
    { q: 'あした 【雨】が ふります。', o: ['ゆき', 'あめ', 'はれ', 'くも'], c: 1, exp: '雨 đọc là あめ (Mưa).' },
    { q: '【午後】の じゅぎょうは ありません。', o: ['ごご', 'ごぜん', 'こうご', 'ごこう'], c: 0, exp: '午後 đọc là ごご (Buổi chiều).' },
    { q: '【午前】 ６時に おきます。', o: ['ごぜん', 'ごご', 'こうぜん', 'ごせん'], c: 0, exp: '午前 đọc là ごぜん (Buổi sáng).' }
  ],
  moji2: [
    { q: '【みぎ】へ まがります。', o: ['右', '左', '前', '後'], c: 0, exp: 'みぎ (Bên phải) viết là 右.' },
    { q: '【しゃしん】を とります。', o: ['写真', '真写', '字真', '真字'], c: 0, exp: 'しゃしん viết là 写真.' },
    { q: '【ひる】ごはんを たべます。', o: ['昼', '朝', '夜', '晩'], c: 0, exp: 'ひる (Buổi trưa) viết là 昼.' },
    { q: '【よる】ねます。', o: ['夜', '昼', '朝', '夕'], c: 0, exp: 'よる (Buổi tối) viết là 夜.' }
  ],
  moji3: [
    { q: 'ここに くるまを 【　　　】。', o: ['とめないで ください', 'とまらないで ください', 'とめて ください', 'とまる ください'], c: 0, exp: 'Xin đừng đỗ xe ở đây: とめないで ください.' },
    { q: 'パスポートを 【　　　】。', o: ['みせないで ください', 'みせなければ なりません', 'みせても いいです', 'みせなくちゃ いいです'], c: 1, exp: 'Phải cho xem hộ chiếu: みせなければ なりません.' },
    { q: 'あしたは 【　　　】から、どこも いきません。', o: ['あめ', 'はれ', 'くも', 'ゆき'], c: 0, exp: 'Trời mưa nên không đi đâu cả (あめ).' },
    { q: 'かぜを ひきましたから、くすりを 【　　　】。', o: ['のみます', 'たべます', 'します', 'きます'], c: 0, exp: 'Uống thuốc: くすりを のみます.' }
  ],
  bunpou1: [
    { q: 'わたしは ピアノを （　　　）が できます。', o: ['ひく', 'ひくこと', 'ひいて', 'ひき'], c: 1, exp: 'Vる こと が できます (Có thể làm gì).' },
    { q: 'にほんへ （　　　） まえに、べんきょうしました。', o: ['いく', 'いって', 'いった', 'いかない'], c: 0, exp: 'Vる まえに (Trước khi...).' },
    { q: 'うまに （　　　）ことが ありますか。', o: ['のる', 'のった', 'のって', 'のらない'], c: 1, exp: 'Vた ことが あります (Đã từng...).' },
    { q: 'この りんごは おいしい（　　　）、やすいです。', o: ['し', 'て', 'から', 'が'], c: 0, exp: 'Vừa ngon lại vừa rẻ: おいしいし、やすいです.' }
  ],
  bunpou2: [
    { q: 'わたしの　___ ___ _★_ ___　です。', o: ['えを', 'しゅみ', 'は', 'かくこと'], c: 0, exp: 'わたしの しゅみ は えを かくこと です.' },
    { q: 'ここで　___ ___ _★_ ___　ください。', o: ['を', 'しゃしん', 'とらないで', 'は'], c: 2, exp: 'ここで しゃしん は/を とらないで ください.' }
  ],
  dokkai1: [
    { 
      text: ['わたしは まいあさ ６じに おきます。', 'あさごはんを （　１　）まえに、ジョギングを します。', 'ジョギングは しゅみです。', 'そして、シャワーを あびてから、ごはんを たべます。'],
      qs: [
        { q: '（　１　）に入れるものはどれですか。', o: ['たべる', 'たべた', 'たべて', 'たべない'], c: 0, exp: 'まえに đi với Vる (たべる まえに).' },
        { q: 'ジョギングの あとで、なにを しますか。', o: ['おきます', 'あさごはんを たべます', 'シャワーを あびます', 'かいしゃへ いきます'], c: 2, exp: 'ジョギング xong thì シャワーを あびます.' }
      ]
    }
  ]
};

const pool_21_25 = {
  moji1: [
    { q: '【電気】を つけます。', o: ['てんき', 'でんき', 'てんぎ', 'でんぎ'], c: 1, exp: '電気 đọc là でんき (Điện).' },
    { q: '【道】を まっすぐ いきます。', o: ['まち', 'みち', 'むら', 'くに'], c: 1, exp: '道 đọc là みち (Đường).' },
    { q: '【今年】は ２０２３ねんです。', o: ['ことし', 'こんとし', 'きょとし', 'こんねん'], c: 0, exp: '今年 đọc là ことし (Năm nay).' },
    { q: '【去年】 にほんへ きました。', o: ['きょねん', 'こねん', 'きょうねん', 'こんねん'], c: 0, exp: '去年 đọc là きょねん (Năm ngoái).' }
  ],
  moji2: [
    { q: '【おとうと】が います。', o: ['弟', '兄', '妹', '姉'], c: 0, exp: '弟 là Em trai.' },
    { q: 'あめが 【ふって】 います。', o: ['降って', '落ちて', '下って', '流って'], c: 0, exp: '降って là Rơi (mưa).' },
    { q: '【らいねん】は なにを しますか。', o: ['来年', '去年', '今年', '毎年'], c: 0, exp: 'らいねん (Năm sau) viết là 来年.' },
    { q: '【まいにち】 べんきょうします。', o: ['毎日', '毎週', '毎月', '毎年'], c: 0, exp: 'まいにち (Mỗi ngày) viết là 毎日.' }
  ],
  moji3: [
    { q: 'ねむい 【　　　】、コーヒーを のみます。', o: ['とき', 'と', 'たら', 'ば'], c: 0, exp: 'Khi buồn ngủ (ねむい とき).' },
    { q: 'あめが ふっても、いきます。', o: ['あめが ふったら いきます。', 'あめが ふったら いきません。', 'あめが ふりますが、いきます。', 'あめが ふらないと いきます。'], c: 2, exp: 'Dù trời mưa tôi vẫn đi (Cho dù = ても).' },
    { q: 'きのうは とても 【　　　】です。', o: ['いそがしかった', 'いそがしい', 'ひま', 'ひまだった'], c: 0, exp: 'Hôm qua đã rất bận (いそがしかった).' },
    { q: 'やすみは 【　　　】ですか。', o: ['いつ', 'どこ', 'だれ', 'なん'], c: 0, exp: 'Khi nào được nghỉ? (いつ).' }
  ],
  bunpou1: [
    { q: 'あしたは あめが ふる（　　　） おもいます。', o: ['と', 'を', 'に', 'で'], c: 0, exp: 'Mẫu câu ～と おもいます (Tôi nghĩ là...).' },
    { q: 'これは わたしが （　　　） かばんです。', o: ['かい', 'かう', 'かった', 'かって'], c: 2, exp: 'Mệnh đề bổ nghĩa cho danh từ: かった かばん.' },
    { q: 'じかんが なかった（　　　）、ほんを よみません。', o: ['たら', 'と', 'から', 'ば'], c: 0, exp: 'Nếu không có thời gian -> なかったら.' },
    { q: 'わたしは にほんごが はなせる（　　　） に なりました。', o: ['よう', 'こと', 'もの', 'ところ'], c: 0, exp: 'Đã có thể nói tiếng Nhật (～ようになる).' }
  ],
  bunpou2: [
    { q: 'あの　___ ___ _★_ ___　は だれですか。', o: ['を', 'ひと', 'メガネ', 'かけている'], c: 3, exp: 'あの メガネ を かけている ひと は だれですか.' },
    { q: 'たのしく　___ ___ _★_ ___　と おもいます。', o: ['あしたの', 'は', 'パーティー', 'ない'], c: 3, exp: 'あしたの パーティー は たのしく ない と おもいます.' }
  ],
  dokkai1: [
    { 
      text: ['わたしは きのう ともだちの うちへ いきました。', 'ともだちが おいしい ケーキを つくって （　１　）。', 'とても おいしかったです。', 'わたしは また ケーキを （　２　）と おもいます。'],
      qs: [
        { q: '（　１　）に入れるものはどれですか。', o: ['あげました', 'もらいました', 'くれました', 'しました'], c: 2, exp: 'Bạn bè làm (cho mình) -> つくって くれました.' },
        { q: '（　２　）に入れるものはどれですか。', o: ['たべる', 'たべた', 'たべたい', 'たべて'], c: 2, exp: 'Tôi nghĩ tôi MONG MUỐN ăn lại -> たべたい.' }
      ]
    }
  ]
};

const POOLS = [
  { start: 1, end: 5, pool: pool_1_5, title: 'Trạm Ôn Tập JLPT N5 (Bài 1 - 5)' },
  { start: 6, end: 10, pool: pool_6_10, title: 'Trạm Ôn Tập JLPT N5 (Bài 6 - 10)' },
  { start: 11, end: 15, pool: pool_11_15, title: 'Trạm Ôn Tập JLPT N5 (Bài 11 - 15)' },
  { start: 16, end: 20, pool: pool_16_20, title: 'Trạm Ôn Tập JLPT N5 (Bài 16 - 20)' },
  { start: 21, end: 25, pool: pool_21_25, title: 'Trạm Ôn Tập JLPT N5 (Bài 21 - 25)' }
];

let finalReviews = [];

for (const p of POOLS) {
  for (let i = 1; i <= 5; i++) {
    const idPrefix = 'review_' + p.start + '_' + p.end + '_' + i;
    const review = {
      id: idPrefix,
      title: 'Đề thi ' + i + ': ' + p.title,
      description: 'Bộ đề số ' + i + '. Được xáo trộn ngẫu nhiên để chống học vẹt.',
      passages: []
    };

    const generateQuestions = (poolKey, count, passageIdPrefix) => {
      let selected = [];
      const srcArr = [...p.pool[poolKey]];
      srcArr.sort(() => Math.random() - 0.5);
      
      for(let j=0; j < Math.min(count, srcArr.length); j++) {
        const q = srcArr[j];
        const shuffled = shuffleOptions(q.o, q.c);
        selected.push({
          id: passageIdPrefix + '_q' + j,
          question: q.q,
          options: shuffled.options,
          correctIndex: shuffled.correctIndex,
          explanation: q.exp
        });
      }
      return selected;
    };

    review.passages.push({
      id: 'p_' + idPrefix + '_moji1',
      type: 'moji_mondai1',
      questions: generateQuestions('moji1', 4, 'm_' + idPrefix + '_m1')
    });
    review.passages.push({
      id: 'p_' + idPrefix + '_moji2',
      type: 'moji_mondai2',
      questions: generateQuestions('moji2', 4, 'm_' + idPrefix + '_m2')
    });
    review.passages.push({
      id: 'p_' + idPrefix + '_moji3',
      type: 'moji_mondai3',
      questions: generateQuestions('moji3', 4, 'm_' + idPrefix + '_m3')
    });
    review.passages.push({
      id: 'p_' + idPrefix + '_bunpou1',
      type: 'mondai1',
      questions: generateQuestions('bunpou1', 4, 'm_' + idPrefix + '_b1')
    });
    review.passages.push({
      id: 'p_' + idPrefix + '_bunpou2',
      type: 'mondai2',
      questions: generateQuestions('bunpou2', 2, 'm_' + idPrefix + '_b2')
    });
    const dokkaiSrc = p.pool.dokkai1[0];
    let dokkaiQs = [];
    dokkaiSrc.qs.forEach((q, idx) => {
      const shuff = shuffleOptions(q.o, q.c);
      dokkaiQs.push({
        id: 'm_' + idPrefix + '_d1_q' + idx,
        question: q.q,
        options: shuff.options,
        correctIndex: shuff.correctIndex,
        explanation: q.exp
      });
    });
    review.passages.push({
      id: 'p_' + idPrefix + '_dokkai1',
      type: 'mondai3',
      text: dokkaiSrc.text,
      questions: dokkaiQs
    });

    finalReviews.push(review);
  }
}

let fileContent = '// src/data/dokkai-reviews.ts\n';
fileContent += '// GENERATED FILE - DO NOT EDIT MANUALLY\n';
fileContent += "import { DokkaiReview } from '../types';\n\n";
fileContent += "export const DOKKAI_REVIEWS: DokkaiReview[] = " + JSON.stringify(finalReviews, null, 2) + ";\n";

fs.writeFileSync(path, fileContent, 'utf8');
console.log('Successfully generated dynamic randomized tests.');
