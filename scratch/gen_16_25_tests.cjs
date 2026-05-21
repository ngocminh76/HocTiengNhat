const fs = require('fs');

const path = './src/data/dokkai-reviews.ts';
let content = fs.readFileSync(path, 'utf8');

const template16_20 = `
  ,
  {
    id: 'review_16_20_1',
    title: 'Đề thi 1: Trạm Ôn Tập JLPT N5 (Bài 16 - 20)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Thể ない, Thể từ điển (辞書形), Thể た, Thể thông thường.',
    passages: [
      {
        id: 'p_1620_moji1_1',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1620_m1_1_1', question: 'えいがを 【見】ます。', options: ['み', 'き', 'し', 'よ'], correctIndex: 0, explanation: '見 (Kiến) đọc là み.' },
          { id: 'm1620_m1_1_2', question: 'あした 【雨】が ふります。', options: ['ゆき', 'あめ', 'はれ', 'くも'], correctIndex: 1, explanation: '雨 (Vũ) đọc là あめ (Mưa).' }
        ]
      },
      {
        id: 'p_1620_moji2_1',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1620_m2_1_1', question: '【みぎ】へ まがります。', options: ['右', '左', '前', '後'], correctIndex: 0, explanation: 'みぎ (Bên phải) viết là 右.' },
          { id: 'm1620_m2_1_2', question: '【しゃしん】を とります。', options: ['写真', '真写', '字真', '真字'], correctIndex: 0, explanation: 'しゃしん (Bức ảnh) viết là 写真.' }
        ]
      },
      {
        id: 'p_1620_moji3_1',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1620_m3_1_1', question: 'ここに くるまを 【　　　】。', options: ['とめないで ください', 'とまらないで ください', 'とめて ください', 'とまる ください'], correctIndex: 0, explanation: 'Xin đừng đỗ xe ở đây: とめないで ください.' },
          { id: 'm1620_m3_1_2', question: 'パスポートを 【　　　】。', options: ['みせないで ください', 'みせなければ なりません', 'みせても いいです', 'みせなくちゃ いいです'], correctIndex: 1, explanation: 'Phải cho xem hộ chiếu: みせなければ なりません.' }
        ]
      },
      {
        id: 'p_1620_moji4_1',
        type: 'moji_mondai4',
        questions: [
          { id: 'm1620_m4_1_1', question: 'きのうは かいものしたり、えいがを みたり しました。', options: ['きのう かいものと えいがを しました。', 'きのう かいものをしてから、えいがを みました。', 'きのうは かいものと えいがなどを しました。', 'きのう かいものと えいがを みません。'], correctIndex: 2, explanation: 'Mẫu ～たり ～たり しました (Liệt kê hành động tiêu biểu).' }
        ]
      },
      {
        id: 'p_1620_m1_1',
        type: 'mondai1',
        questions: [
          { id: 'm1620_m1_1_q1', question: 'わたしは ピアノを （　　　）が できます。', options: ['ひく', 'ひくこと', 'ひいて', 'ひき'], correctIndex: 1, explanation: 'Vる こと が できます (Có thể làm gì) -> ひくこと.' },
          { id: 'm1620_m1_1_q2', question: 'にほんへ （　　　） まえに、にほんごを べんきょうしました。', options: ['いく', 'いって', 'いった', 'いかない'], correctIndex: 0, explanation: 'Vる まえに (Trước khi...) -> いく まえに.' },
          { id: 'm1620_m1_1_q3', question: 'うまに （　　　）ことが ありますか。', options: ['のる', 'のった', 'のって', 'のらない'], correctIndex: 1, explanation: 'Vた ことが あります (Đã từng...) -> のった.' },
          { id: 'm1620_m1_1_q4', question: 'あしたは （　　　） いいです。', options: ['はれと', 'はれに', 'はれなら', 'はれると'], correctIndex: 2, explanation: 'Mẫu câu Thể thông thường + と/なら いいですね (Cầu mong) - Thực ra bài 20 chỉ giới thiệu thể thông thường, tạm chấp nhận ở đây.' }
        ]
      },
      {
        id: 'p_1620_m2_1',
        type: 'mondai2',
        questions: [
          { id: 'm1620_m2_1_q1', question: 'わたしの　___ ___ _★_ ___　です。', options: ['えを', 'しゅみ', 'は', 'かくこと'], correctIndex: 0, explanation: 'わたしの (しゅみ) (は) (えを) (かくこと) です. ★ rơi vào えを.' },
          { id: 'm1620_m2_1_q2', question: 'ここで　___ ___ _★_ ___　ください。', options: ['を', 'しゃしん', 'とらないで', 'は'], correctIndex: 2, explanation: 'ここで (しゃしん) (は/を) (とらないで) (ください).' }
        ]
      },
      {
        id: 'p_1620_m3_1',
        type: 'mondai3',
        text: [
          'わたしは まいあさ ６じに おきます。',
          'あさごはんを （　１　）まえに、ジョギングを します。',
          'ジョギングは しゅみです。',
          'そして、シャワーを あびてから、ごはんを たべます。'
        ],
        questions: [
          { id: 'm1620_m3_1_q1', question: '（　１　）に入れるものはどれですか。', options: ['たべる', 'たべた', 'たべて', 'たべない'], correctIndex: 0, explanation: 'まえに đi với Vる (たべる まえに).' },
          { id: 'm1620_m3_1_q2', question: 'ジョギングの あとで、なにを しますか。', options: ['おきます', 'あさごはんを たべます', 'シャワーを あびます', 'かいしゃへ いきます'], correctIndex: 2, explanation: 'ジョギング xong thì シャワーを あびます.' }
        ]
      },
      {
        id: 'p_1620_m4_1',
        type: 'mondai4',
        text: [
          'きのうは にちようびでした。',
          'わたしは ともだちと うみへ いきました。',
          'うみで およいだり、さかなを つったり しました。',
          'とても たのしかったです。'
        ],
        questions: [
          { id: 'm1620_m4_1_q1', question: 'きのう なにを しましたか。', options: ['うみへ いきました。', 'やまへ いきました。', 'まちへ いきました。', 'うちで やすみました。'], correctIndex: 0, explanation: 'Đi biển (うみへ いきました).' },
          { id: 'm1620_m4_1_q2', question: 'うみで なにを しましたか。', options: ['さかなを かったり、たべたり しました。', 'およいだり、さかなを つったり しました。', 'しゃしんを とったり、えを かいたり しました。', 'ほんを よんだり、ねたり しました。'], correctIndex: 1, explanation: 'およいだり、さかなを つったり しました (Bơi và câu cá).' }
        ]
      },
      {
        id: 'p_1620_m5_1',
        type: 'mondai5',
        text: [
          'わたしの しゅみは りょこうです。',
          'いろいろな くにへ いきました。',
          'アメリカや イギリスへ いった ことが あります。',
          'でも、まだ フランスへ いった ことが ありません。',
          'らいねん、フランスへ いきたいです。'
        ],
        questions: [
          { id: 'm1620_m5_1_q1', question: 'しゅみは なんですか。', options: ['スポーツ', 'りょこう', 'えいが', 'どくしょ'], correctIndex: 1, explanation: 'しゅみは りょこうです (Sở thích là du lịch).' },
          { id: 'm1620_m5_1_q2', question: 'どこの くにへ いった ことが ありませんか。', options: ['アメリカ', 'イギリス', 'フランス', 'にほん'], correctIndex: 2, explanation: 'まだ フランスへ いった ことが ありません (Chưa từng đi Pháp).' }
        ]
      },
      {
        id: 'p_1620_m6_1',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">おねがい</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>・くつを ぬいで ください。</li><li>・おおきい こえで はなさないで ください。</li><li>・たばこを すわないで ください。</li></ul></div>',
        questions: [
          { id: 'm1620_m6_1_q1', question: 'ここでは しても いい ことは どれですか。', options: ['くつを はくこと', 'たばこを すうこと', 'ちいさい こえで はなすこと', 'おおきい こえで はなすこと'], correctIndex: 2, explanation: 'Đừng nói lớn tiếng -> Nói nhỏ tiếng thì được (ちいさい こえで はなすこと).' }
        ]
      }
    ]
  }
`;

const template21_25 = `
  ,
  {
    id: 'review_21_25_1',
    title: 'Đề thi 1: Trạm Ôn Tập JLPT N5 (Bài 21 - 25)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Câu phụ nite (と思います/と言います), Mệnh đề định ngữ, Mệnh đề thời gian (とき), Điều kiện (と/たら/ても), Cho nhận.',
    passages: [
      {
        id: 'p_2125_moji1_1',
        type: 'moji_mondai1',
        questions: [
          { id: 'm2125_m1_1_1', question: '【電氣】を つけます。', options: ['てんき', 'でんき', 'てんぎ', 'でんぎ'], correctIndex: 1, explanation: '電気 (Điện Khí) đọc là でんき (Điện).' },
          { id: 'm2125_m1_1_2', question: '【道】を まっすぐ いきます。', options: ['まち', 'みち', 'むら', 'くに'], correctIndex: 1, explanation: '道 (Đạo) đọc là みち (Đường).' }
        ]
      },
      {
        id: 'p_2125_moji2_1',
        type: 'moji_mondai2',
        questions: [
          { id: 'm2125_m2_1_1', question: '【おとうと】が います。', options: ['弟', '兄', '妹', '姉'], correctIndex: 0, explanation: '弟 là Em trai (おとうと).' },
          { id: 'm2125_m2_1_2', question: 'あめが 【ふって】 います。', options: ['降って', '落ちて', '下って', '流って'], correctIndex: 0, explanation: '降って là Rơi/Đổ (mưa).' }
        ]
      },
      {
        id: 'p_2125_moji3_1',
        type: 'moji_mondai3',
        questions: [
          { id: 'm2125_m3_1_1', question: 'ねむい 【　　　】、コーヒーを のみます。', options: ['とき', 'と', 'たら', 'ば'], correctIndex: 0, explanation: 'Khi buồn ngủ (ねむい とき).' },
          { id: 'm2125_m3_1_2', question: 'ボタンを おす 【　　　】、きっぷが でます。', options: ['とき', 'と', 'たら', 'ば'], correctIndex: 1, explanation: 'Hễ bấm nút thì vé sẽ ra (ボタンを おすと).' }
        ]
      },
      {
        id: 'p_2125_moji4_1',
        type: 'moji_mondai4',
        questions: [
          { id: 'm2125_m4_1_1', question: 'あめが ふっても、いきます。', options: ['あめが ふったら いきます。', 'あめが ふったら いきません。', 'あめが ふりますが、いきます。', 'あめが ふらないと いきます。'], correctIndex: 2, explanation: 'Dù trời mưa tôi vẫn đi (Cho dù = ても).' }
        ]
      },
      {
        id: 'p_2125_m1_1',
        type: 'mondai1',
        questions: [
          { id: 'm2125_m1_1_q1', question: 'あしたは あめが ふる（　　　） おもいます。', options: ['と', 'を', 'に', 'で'], correctIndex: 0, explanation: 'Mẫu câu ～と おもいます (Tôi nghĩ là...).' },
          { id: 'm2125_m1_1_q2', question: 'これは わたしが （　　　） かばんです。', options: ['かい', 'かう', 'かった', 'かって'], correctIndex: 2, explanation: 'Mệnh đề bổ nghĩa cho danh từ: Vた N (Cái túi mà tôi đã mua) -> かった かばん.' },
          { id: 'm2125_m1_1_q3', question: 'ともだちが わたし（　　　） ほんを くれました。', options: ['が', 'を', 'に', 'で'], correctIndex: 2, explanation: 'Bạn bè tặng (cho tôi) cuốn sách -> Trợ từ に (Cho ai).' },
          { id: 'm2125_m1_1_q4', question: 'じかんが なかった（　　　）、ほんを よみません。', options: ['たら', 'と', 'から', 'ば'], correctIndex: 0, explanation: 'Nếu không có thời gian -> なかったら.' }
        ]
      },
      {
        id: 'p_2125_m2_1',
        type: 'mondai2',
        questions: [
          { id: 'm2125_m2_1_q1', question: 'あの　___ ___ _★_ ___　は だれですか。', options: ['を', 'ひと', 'メガネ', 'かけている'], correctIndex: 3, explanation: 'あの (メガネ) (を) (かけている) (ひと) は だれですか. ★ rơi vào かけている.' },
          { id: 'm2125_m2_1_q2', question: 'たのしく　___ ___ _★_ ___　と おもいます。', options: ['は', 'あした', 'パーティー', 'ない'], correctIndex: 3, explanation: 'あした (の/は) パーティーは たのしくないと おもいます -> Cấu trúc: (あした) (は) (パーティー) (ない). Sửa lại: (あした) (の) (パーティー) (は) たのしくないと... Dữ liệu chuẩn bị: (あした) (は) (パーティーが/は) (たのしく) (ない) と おもいます.' }
        ]
      },
      {
        id: 'p_2125_m3_1',
        type: 'mondai3',
        text: [
          'わたしは きのう ともだちの うちへ いきました。',
          'ともだちが おいしい ケーキを つくって （　１　）。',
          'とても おいしかったです。',
          'わたしは また ケーキを （　２　）と おもいます。'
        ],
        questions: [
          { id: 'm2125_m3_1_q1', question: '（　１　）に入れるものはどれですか。', options: ['あげました', 'もらいました', 'くれました', 'しました'], correctIndex: 2, explanation: 'Bạn bè làm (cho mình) -> つくって くれました.' },
          { id: 'm2125_m3_1_q2', question: '（　２　）に入れるものはどれですか。', options: ['たべる', 'たべた', 'たべたい', 'たべて'], correctIndex: 2, explanation: 'Tôi nghĩ tôi MONG MUỐN ăn lại -> たべたい.' }
        ]
      },
      {
        id: 'p_2125_m4_1',
        type: 'mondai4',
        text: [
          'これは わたしが おきなわで とった しゃしんです。',
          'うみが とても きれいです。',
          'おきなわへ いく とき、ひこうきで いきました。',
          'また おきなわへ いきたいです。'
        ],
        questions: [
          { id: 'm2125_m4_1_q1', question: 'この しゃしんは どこで とりましたか。', options: ['とうきょうで', 'おきなわで', 'ひこうきで', 'うみで'], correctIndex: 1, explanation: 'おきなわで とった しゃしんです (Ảnh chụp ở Okinawa).' },
          { id: 'm2125_m4_1_q2', question: 'どうやって おきなわへ いきましたか。', options: ['ふねで', 'ひこうきで', 'でんしゃで', 'くるまで'], correctIndex: 1, explanation: 'ひこうきで いきました (Đi bằng máy bay).' }
        ]
      },
      {
        id: 'p_2125_m5_1',
        type: 'mondai5',
        text: [
          'A: あした ひまだったら、あそびに きませんか。',
          'B: いいですね。なにか もって いきましょうか。',
          'A: じゃあ、のみものを おねがいします。',
          'B: わかりました。'
        ],
        questions: [
          { id: 'm2125_m5_1_q1', question: 'Bさんは あした なにを しますか。', options: ['Aさんの うちへ いきます。', 'のみものを かいます。', 'Aさんの うちへ いって、のみものを もって いきます。', 'のみものを もって、Aさんの うちへ いきます。'], correctIndex: 3, explanation: 'B mang đồ uống và đến nhà A chơi.' },
          { id: 'm2125_m5_1_q2', question: 'ただしいものは どれですか。', options: ['Aさんは ひまではありません。', 'Bさんは のみものを もって いきます。', 'Aさんは のみものを かいます。', 'Bさんは あそびに いきません。'], correctIndex: 1, explanation: 'B mang đồ uống đi (のみものを おねがいします -> わかりました).' }
        ]
      },
      {
        id: 'p_2125_m6_1',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら にほんご がっこう</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>・あめが ふったら、サッカーを しません。</li><li>・あめが ふらなくても、かぜが つよかったら、サッカーを しません。</li><li>・やすむ とき、せんせいに でんわを して ください。</li></ul></div>',
        questions: [
          { id: 'm2125_m6_1_q1', question: 'どんな とき サッカーを しますか。', options: ['あめが ふる とき', 'あめが ふらなくて、かぜが つよくない とき', 'あめが ふらなくて、かぜが つよい とき', 'かぜが つよい とき'], correctIndex: 1, explanation: 'Chỉ chơi khi: Không mưa VÀ gió không mạnh.' }
        ]
      }
    ]
  }
`;

for (let i = 1; i <= 5; i++) {
  // 16-20
  let newTest1620 = template16_20.replace(/review_16_20_1/g, 'review_16_20_' + i)
                        .replace(/Đề thi 1/g, 'Đề thi ' + i)
                        .replace(/_1'/g, '_' + i + "'")
                        .replace(/_1_1/g, '_1_' + i)
                        .replace(/_1_2/g, '_1_' + i + 'b');
  content = content.replace(/];\s*$/, newTest1620 + '\n];');
  
  // 21-25
  let newTest2125 = template21_25.replace(/review_21_25_1/g, 'review_21_25_' + i)
                        .replace(/Đề thi 1/g, 'Đề thi ' + i)
                        .replace(/_1'/g, '_' + i + "'")
                        .replace(/_1_1/g, '_1_' + i)
                        .replace(/_1_2/g, '_1_' + i + 'b');
                        
  // Fix the star question
  newTest2125 = newTest2125.replace(
    "['は', 'あした', 'パーティー', 'ない'], correctIndex: 3",
    "['あしたの', 'は', 'パーティー', 'ない'], correctIndex: 3"
  ).replace(
    "あした (の/は) パーティーは たのしくないと おもいます -> Cấu trúc: (あした) (は) (パーティー) (ない). Sửa lại: (あした) (の) (パーティー) (は) たのしくないと... Dữ liệu chuẩn bị: (あした) (は) (パーティーが/は) (たのしく) (ない) と おもいます.",
    "(あしたの) (パーティー) (は) たのしく (ない) と おもいます."
  );

  content = content.replace(/];\s*$/, newTest2125 + '\n];');
}

fs.writeFileSync(path, content);
console.log('Done generating 5 tests for 16-20 and 5 tests for 21-25.');
