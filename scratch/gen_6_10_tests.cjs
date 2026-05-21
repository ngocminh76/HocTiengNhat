const fs = require('fs');

const path = './src/data/dokkai-reviews.ts';
let content = fs.readFileSync(path, 'utf8');

const template = `
  ,
  {
    id: 'review_6_10_1',
    title: 'Đề thi 1: Trạm Ôn Tập JLPT N5 (Bài 6 - 10)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Tự động từ/Tha động từ, Tính từ, Cho/Nhận.',
    passages: [
      {
        id: 'p_610_moji1_1',
        type: 'moji_mondai1',
        questions: [
          { id: 'm610_m1_1_1', question: '【手紙】を かきます。', options: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], correctIndex: 0, explanation: '手紙 (Thủ Chỉ) đọc là てがみ (Bức thư).' },
          { id: 'm610_m1_1_2', question: 'あたらしい 【車】を かいました。', options: ['くろま', 'くるま', 'でんしゃ', 'じてんしゃ'], correctIndex: 1, explanation: '車 (Xa) đọc là くるま (Ô tô).' }
        ]
      },
      {
        id: 'p_610_moji2_1',
        type: 'moji_mondai2',
        questions: [
          { id: 'm610_m2_1_1', question: '【えいご】を べんきょうします。', options: ['英話', '英語', '英吾', '英悟'], correctIndex: 1, explanation: '英語 (Anh Ngữ) là Tiếng Anh.' },
          { id: 'm610_m2_1_2', question: 'ともだちに 【プレゼント】を あげます。', options: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], correctIndex: 1, explanation: 'Present (Quà tặng) viết Katakana là プレゼント.' }
        ]
      },
      {
        id: 'p_610_moji3_1',
        type: 'moji_mondai3',
        questions: [
          { id: 'm610_m3_1_1', question: 'はさみで かみを 【　　　】。', options: ['きります', 'かします', 'かります', 'もらいます'], correctIndex: 0, explanation: 'Cắt (きります) giấy bằng kéo.' },
          { id: 'm610_m3_1_2', question: 'この りんごは とても 【　　　】です。', options: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], correctIndex: 1, explanation: 'Táo (りんご) thì ngon (おいしい).' }
        ]
      },
      {
        id: 'p_610_moji4_1',
        type: 'moji_mondai4',
        questions: [
          { id: 'm610_m4_1_1', question: 'きのうは さむかったです。', options: ['きのうは あつかったです。', 'きのうは あたたかかったです。', 'きのうは すずしかったです。', 'きのうは いい てんきじゃありませんでした。'], correctIndex: 3, explanation: 'Trời lạnh (さむい) mang nét nghĩa thời tiết không thuận lợi trong các lựa chọn. (Tạm lấy nghĩa tương đồng: いい てんきじゃありませんでした - Thời tiết không tốt).' }
        ]
      },
      {
        id: 'p_610_m1_1',
        type: 'mondai1',
        questions: [
          { id: 'm610_m1_1_q1', question: 'スプーン（　　　）ごはんを たべます。', options: ['で', 'に', 'を', 'が'], correctIndex: 0, explanation: 'Chỉ phương tiện/công cụ -> trợ từ で.' },
          { id: 'm610_m1_1_q2', question: 'わたしは 木村さん（　　　）はなを あげました。', options: ['で', 'に', 'を', 'へ'], correctIndex: 1, explanation: 'Cho ai cái gì -> Danh từ người + に.' },
          { id: 'm610_m1_1_q3', question: '日本の カメラは （　　　）ですか。', options: ['どう', 'どんな', 'どれ', 'どの'], correctIndex: 0, explanation: 'Hỏi tính chất/cảm nhận (Thế nào?) -> どうですか.' },
          { id: 'm610_m1_1_q4', question: 'きのうの パーティーは （　　　）。', options: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], correctIndex: 2, explanation: 'Tính từ đuôi い ở quá khứ -> い => かったです.' }
        ]
      },
      {
        id: 'p_610_m2_1',
        type: 'mondai2',
        questions: [
          { id: 'm610_m2_1_q1', question: 'とうきょうは　___ ___ _★_ ___　まちです。', options: ['て', 'きれいで', 'にぎやかな', 'とても'], correctIndex: 3, explanation: 'とうきょうは (とても) (きれいで) (にぎやかな) (まち) です. ★ nằm ở vị trí にぎやかな.' },
          { id: 'm610_m2_1_q2', question: 'わたしは　___ ___ _★_ ___　もらいました。', options: ['を', 'ともだち', 'に', 'とけい'], correctIndex: 0, explanation: 'わたしは (ともだち) (に) (とけい) (を) もらいました. ★ nằm ở vị trí とけい.' }
        ]
      },
      {
        id: 'p_610_m3_1',
        type: 'mondai3',
        text: [
          'きのう わたしは スーパーへ いきました。',
          'スーパーで くだもの（　１　）かいました。',
          'スーパーの くだものは （　２　）。',
          'そして、うちで かぞくと たべました。'
        ],
        questions: [
          { id: 'm610_m3_1_q1', question: '（　１　）に入れるものはどれですか。', options: ['と', 'に', 'を', 'が'], correctIndex: 2, explanation: 'Mua trái cây: くだものを かいます.' },
          { id: 'm610_m3_1_q2', question: '（　２　）に入れるものはどれですか。', options: ['やすかったです', 'やすいでした', 'やすいです', 'やすくないでした'], correctIndex: 0, explanation: 'Trái cây hôm qua -> Quá khứ -> やすかったです.' }
        ]
      },
      {
        id: 'p_610_m4_1',
        type: 'mondai4',
        text: [
          'これは わたしの あたらしい じてんしゃです。',
          'きのう ちちに もらいました。',
          'とても きれいです。そして べんりです。',
          'あした この じてんしゃで がっこうへ いきます。'
        ],
        questions: [
          { id: 'm610_m4_1_q1', question: 'じてんしゃは だれに もらいましたか。', options: ['はは', 'ちち', 'ともだち', 'せんせい'], correctIndex: 1, explanation: 'ちちに もらいました (Nhận từ bố).' },
          { id: 'm610_m4_1_q2', question: 'ただしいものは どれですか。', options: ['あした あるいて がっこうへ いきます。', 'じてんしゃは きれいです。でも ふべんです。', 'きのう じてんしゃを かいました。', 'じてんしゃは べんりです。'], correctIndex: 3, explanation: 'Xe đạp vừa đẹp vừa tiện lợi (べんりです).' }
        ]
      },
      {
        id: 'p_610_m5_1',
        type: 'mondai5',
        text: [
          'きょうは わたしの たんじょうびです。',
          'あさ ははに プレゼントを もらいました。シャツと ぼうしです。',
          'シャツは しろいです。ぼうしは くろいです。',
          'わたしは くろい ぼうしが とても すきです。',
          'よる かぞくと いっしょに レストランで しょくじを します。',
          'とても たのしみです。'
        ],
        questions: [
          { id: 'm610_m5_1_q1', question: 'なにを もらいましたか。', options: ['しろい シャツと しろい ぼうし', 'くろい シャツと くろい ぼうし', 'しろい シャツと くろい ぼうし', 'くろい シャツと しろい ぼうし'], correctIndex: 2, explanation: 'シャツは しろいです。ぼうしは くろいです (Áo trắng và mũ đen).' },
          { id: 'm610_m5_1_q2', question: 'よる どこで ごはんを たべますか。', options: ['うち', 'レストラン', 'かいしゃ', 'がっこう'], correctIndex: 1, explanation: 'レストランで しょくじを します (Ăn tại nhà hàng).' }
        ]
      },
      {
        id: 'p_610_m6_1',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら レストラン メニュー</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong>・カレー：</strong> ６００えん</li><li><strong>・ラーメン：</strong> ５００えん</li><li><strong>・コーヒー：</strong> ２００えん</li></ul></div>',
        questions: [
          { id: 'm610_m6_1_q1', question: 'ラーメンと コーヒーを たのみます。いくらですか。', options: ['７００えん', '８００えん', '６００えん', '５００えん'], correctIndex: 0, explanation: 'Ramen 500 yên + Cà phê 200 yên = 700 yên.' }
        ]
      }
    ]
  }
`;

for (let i = 1; i <= 5; i++) {
  let newTest = template.replace(/review_6_10_1/g, 'review_6_10_' + i)
                        .replace(/Đề thi 1/g, 'Đề thi ' + i)
                        .replace(/_1'/g, '_' + i + "'")
                        .replace(/_1_1/g, '_1_' + i)
                        .replace(/_1_2/g, '_1_' + i + 'b'); // simple fix to avoid duplicate keys if needed

  content = content.replace(/];\s*$/, newTest + '\n];');
}

fs.writeFileSync(path, content);
console.log('Done generating 5 tests for 6-10.');
