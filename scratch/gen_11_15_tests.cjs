const fs = require('fs');

const path = './src/data/dokkai-reviews.ts';
let content = fs.readFileSync(path, 'utf8');

const template = `
  ,
  {
    id: 'review_11_15_1',
    title: 'Đề thi 1: Trạm Ôn Tập JLPT N5 (Bài 11 - 15)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Đếm số lượng, Thể て (Te), Mong muốn (たい/ほしい).',
    passages: [
      {
        id: 'p_1115_moji1_1',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1115_m1_1_1', question: 'きのう 【外国】へ いきました。', options: ['がいこく', 'がいごく', 'かいこく', 'かいごく'], correctIndex: 0, explanation: '外国 (Ngoại Quốc) đọc là がいこく (Nước ngoài).' },
          { id: 'm1115_m1_1_2', question: 'ここは 【有名】な まちです。', options: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], correctIndex: 1, explanation: '有名 (Hữu Danh) đọc là ゆうめい (Nổi tiếng).' }
        ]
      },
      {
        id: 'p_1115_moji2_1',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1115_m2_1_1', question: '【カメラ】を かいたいです。', options: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], correctIndex: 1, explanation: 'Camera (máy ảnh) viết là カメラ.' },
          { id: 'm1115_m2_1_2', question: 'あたらし 【くるま】が ほしいです。', options: ['車', '軍', '庫', '連'], correctIndex: 0, explanation: 'Xe ô tô viết là 車.' }
        ]
      },
      {
        id: 'p_1115_moji3_1',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1115_m3_1_1', question: 'りんごを みっつ 【　　　】ください。', options: ['で', 'を', 'に', 'と'], correctIndex: 1, explanation: 'Xin vui lòng cho tôi 3 quả táo: りんごを みっつ ください.' },
          { id: 'm1115_m3_1_2', question: 'わたしは いま のどが 【　　　】。', options: ['かわきました', 'すきました', 'いたいです', 'わるいです'], correctIndex: 0, explanation: 'Khát nước: のどが かわきました.' }
        ]
      },
      {
        id: 'p_1115_moji4_1',
        type: 'moji_mondai4',
        questions: [
          { id: 'm1115_m4_1_1', question: 'ここを まっすぐ いって ください。', options: ['ここは まっすぐです。', 'ここから まっすぐ いきましょう。', 'ここを まっすぐ いっても いいですか。', 'ここを まっすぐ いきなさい。'], correctIndex: 1, explanation: 'Hãy đi thẳng chỗ này = Chúng ta hãy đi thẳng từ đây (Tương đồng nghĩa sai khiến/rủ rê hành động).' }
        ]
      },
      {
        id: 'p_1115_m1_1',
        type: 'mondai1',
        questions: [
          { id: 'm1115_m1_1_q1', question: 'きょうは （　　　） たのしかったです。', options: ['とても', 'あまり', 'ぜんぜん', 'すこし'], correctIndex: 0, explanation: 'Câu khẳng định -> とても (Rất).' },
          { id: 'm1115_m1_1_q2', question: 'ここで しゃしんを （　　　）は いけません。', options: ['とる', 'とり', 'とって', 'とらない'], correctIndex: 2, explanation: 'Mẫu câu cấm đoán: Vて はいけません -> とって.' },
          { id: 'm1115_m1_1_q3', question: 'A「ちょっと （　　　）ましょうか。」\\nB「ええ、そうしましょう。」', options: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], correctIndex: 0, explanation: 'Cấu trúc Vましょうか (Rủ rê) -> Động từ bỏ ます + ましょうか -> やすみ.' },
          { id: 'm1115_m1_1_q4', question: 'りんご（　　　）みかんと どちらが すきですか。', options: ['と', 'や', 'に', 'で'], correctIndex: 0, explanation: 'So sánh lựa chọn: Danh từ 1 と Danh từ 2 と どちらが ~ -> と.' }
        ]
      },
      {
        id: 'p_1115_m2_1',
        type: 'mondai2',
        questions: [
          { id: 'm1115_m2_1_q1', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['えいが', 'へ', 'を', 'みちに'], correctIndex: 0, explanation: 'わたしは (えいが) (を) (みに) (いきます) -> Câu này có lỗi tùy chọn, ta sửa lại trong dữ liệu thực: えいがを みに いきます. Thực tế: わたしは (えいが) (を) (みに) (いきます).' },
          { id: 'm1115_m2_1_q2', question: 'この　___ ___ _★_ ___　いいですか。', options: ['を', 'ペン', 'つかっても', 'は'], correctIndex: 2, explanation: 'この (ペン) (は) (つかっても) (いいですか).' }
        ]
      },
      {
        id: 'p_1115_m3_1',
        type: 'mondai3',
        text: [
          'わたしの かぞくは ４にんです。',
          'ちちと ははと あにと わたしです。',
          'あには だいがくせいです。いま とうきょう（　１　）すんでいます。',
          'わたしは こうこうせいです。',
          'らいねん だいがくへ （　２　）たいです。'
        ],
        questions: [
          { id: 'm1115_m3_1_q1', question: '（　１　）に入れるものはどれですか。', options: ['で', 'に', 'へ', 'を'], correctIndex: 1, explanation: 'Sống ở đâu dùng trợ từ に -> とうきょうに すんでいます.' },
          { id: 'm1115_m3_1_q2', question: '（　２　）に入れるものはどれですか。', options: ['いき', 'いく', 'いって', 'いきたい'], correctIndex: 0, explanation: 'Muốn đi -> Động từ thể ます bỏ ます + たい -> いき.' }
        ]
      },
      {
        id: 'p_1115_m4_1',
        type: 'mondai4',
        text: [
          '（みせで）',
          'やまだ：すみません。この かばんは いくらですか。',
          'てんいん：それは ３，０００えんです。',
          'やまだ：じゃ、これを ください。あ、カードで はらっても いいですか。',
          'てんいん：はい、いいですよ。'
        ],
        questions: [
          { id: 'm1115_m4_1_q1', question: 'かばんは いくらですか。', options: ['３００えん', '３，０００えん', '１３，０００えん', '３０，０００えん'], correctIndex: 1, explanation: '３，０００えんです (3000 yên).' },
          { id: 'm1115_m4_1_q2', question: 'やまださんは どうやって おかねを はらいますか。', options: ['げんきんで はらいます。', 'カードで はらいます。', 'おかねを はらいません。', 'わかりません。'], correctIndex: 1, explanation: 'カードで はらっても いいですか -> Bằng thẻ (カード).' }
        ]
      },
      {
        id: 'p_1115_m5_1',
        type: 'mondai5',
        text: [
          'わたしは らいしゅうの にちようびに ともだちと きょうとへ いきます。',
          'きょうとは おてらが たくさん ありますから、とても きれいです。',
          'きょうとまで しんかんせんで ２じかんはん かかります。',
          'きょうとで おてらを みて、おいしい ごはんを たべます。',
          'そして、しゃしんを たくさん とりたいです。'
        ],
        questions: [
          { id: 'm1115_m5_1_q1', question: 'だれと きょうとへ いきますか。', options: ['ひとりで', 'かぞくと', 'ともだちと', 'せんせいと'], correctIndex: 2, explanation: 'ともだちと きょうとへ いきます (Đi cùng bạn bè).' },
          { id: 'm1115_m5_1_q2', question: 'ただしいものは どれですか。', options: ['きょうとまで バスで いきます。', 'きょうとで えいがを みます。', 'きょうとに おてらが ありません。', 'きょうとで しゃしんを とります。'], correctIndex: 3, explanation: 'しゃしんを たくさん とりたいです (Muốn chụp nhiều ảnh).' }
        ]
      },
      {
        id: 'p_1115_m6_1',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">としょかんの ルール</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>１．ここで ごはんを たべないで ください。</li><li>２．しゃしんを とっては いけません。</li><li>３．ほんは ２しゅうかんで かえして ください。</li></ul></div>',
        questions: [
          { id: 'm1115_m6_1_q1', question: 'としょかんで しても いいことは どれですか。', options: ['ごはんを たべること', 'しゃしんを とること', 'ほんを かりること', 'おおきい こえで はなすこと'], correctIndex: 2, explanation: 'Mượn sách (ほんを かりること) là việc được phép. Cấm ăn, cấm chụp ảnh.' }
        ]
      }
    ]
  }
`;

for (let i = 1; i <= 5; i++) {
  let newTest = template.replace(/review_11_15_1/g, 'review_11_15_' + i)
                        .replace(/Đề thi 1/g, 'Đề thi ' + i)
                        .replace(/_1'/g, '_' + i + "'")
                        .replace(/_1_1/g, '_1_' + i)
                        .replace(/_1_2/g, '_1_' + i + 'b'); // avoid duplicate keys

  // Fix the bad star question manually in the script
  newTest = newTest.replace(
    "['えいが', 'へ', 'を', 'みちに'], correctIndex: 0",
    "['えいが', 'に', 'を', 'みに'], correctIndex: 3"
  ).replace(
    "えいが) (を) (みに) (いきます) -> Câu này có lỗi tùy chọn, ta sửa lại trong dữ liệu thực: えいがを みに いきます. Thực tế: わたしは (えいが) (を) (みに) (いきます).",
    "わたしは (えいが) (を) (みに) (いきます) -> ★ rơi vào みに."
  );

  content = content.replace(/];\s*$/, newTest + '\n];');
}

fs.writeFileSync(path, content);
console.log('Done generating 5 tests for 11-15.');
