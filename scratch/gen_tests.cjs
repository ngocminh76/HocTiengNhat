const fs = require('fs');

const path = './src/data/dokkai-reviews.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("'review_1_5'", "'review_1_5_1'");
content = content.replace("'Ôn Tập JLPT N5 (Bài 1 - 5)'", "'Đề thi 1: JLPT N5 (Bài 1 - 5)'");

const template = `
  ,
  {
    id: 'review_1_5_2',
    title: 'Đề thi 2: Thực chiến JLPT N5',
    description: 'Bộ đề số 2. Áp dụng từ vựng và ngữ pháp để giải quyết các tình huống khó hơn.',
    passages: [
      {
        id: 'p_moji1_2',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1_2_1', question: '【先月】、日本へ きました。', options: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], correctIndex: 2, explanation: '先月 (Tiên Nguyệt) đọc là せんげつ (tháng trước).' },
          { id: 'm1_2_2', question: 'わたしの 【国】は ベトナムです。', options: ['くに', 'まち', 'うち', 'いえ'], correctIndex: 0, explanation: '国 (Quốc) đọc là くに (đất nước).' }
        ]
      },
      {
        id: 'p_moji2_2',
        type: 'moji_mondai2',
        questions: [
          { id: 'm2_2_1', question: '【でんしゃ】で かいしゃへ いきます。', options: ['電車', '電気', '電話', '電波'], correctIndex: 0, explanation: '電車 (Điện xa) nghĩa là tàu điện.' },
          { id: 'm2_2_2', question: 'あの 【レストラン】は おいしいです。', options: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], correctIndex: 1, explanation: 'Restaurant viết là レストラン.' }
        ]
      },
      {
        id: 'p_moji3_2',
        type: 'moji_mondai3',
        questions: [
          { id: 'm3_2_1', question: 'あしたは やすみです。うちで ゆっくり 【　　　】。', options: ['おきます', 'はたらきます', 'やすみます', 'おわります'], correctIndex: 2, explanation: 'Vì mai là ngày nghỉ nên ở nhà "nghỉ ngơi" (やすみます).' },
          { id: 'm3_2_2', question: 'きのう １０じに 【　　　】。', options: ['おきました', 'ねました', 'きました', 'いきました'], correctIndex: 1, explanation: 'Hôm qua 10 giờ đã "ngủ" (ねました). 10 giờ tối thường là giờ ngủ.' }
        ]
      },
      {
        id: 'p_moji4_2',
        type: 'moji_mondai4',
        questions: [
          { id: 'm4_2_1', question: 'この くるまは わたしの じゃありません。', options: ['わたしは くるまが ありません。', 'この くるまは だれのですか。', 'これは わたしの くるまじゃありません。', 'この くるまは あたらしいです。'], correctIndex: 2, explanation: 'Đồng nghĩa: Chiếc xe này không phải của tôi = Đây không phải là xe của tôi (これは わたしの くるまじゃありません).' }
        ]
      },
      {
        id: 'p_m1_2',
        type: 'mondai1',
        questions: [
          { id: 'm1_2_q1', question: 'わたしは えんぴつ（　　　）てがみを かきます。', options: ['に', 'で', 'を', 'が'], correctIndex: 1, explanation: 'Viết bằng bút chì: dùng phương tiện/công cụ -> trợ từ で.' },
          { id: 'm1_2_q2', question: 'あした どこ（　　　）いきません。', options: ['へも', 'をも', 'がも', 'でも'], correctIndex: 0, explanation: 'Phủ định hoàn toàn: どこへも いきません (Không đi đâu cả).' },
          { id: 'm1_2_q3', question: 'きょうは ５じ（　　　）はたらきます。', options: ['まで', 'から', 'に', 'で'], correctIndex: 0, explanation: 'Làm việc "đến" 5 giờ -> まで.' },
          { id: 'm1_2_q4', question: 'A「それは （　　　）ですか。」\\nB「コンピューターの ほん です。」', options: ['なんの ほん', 'だれの ほん', 'どこ', 'なん'], correctIndex: 3, explanation: 'Hỏi cái gì dùng なん.' }
        ]
      },
      {
        id: 'p_m2_2',
        type: 'mondai2',
        questions: [
          { id: 'm2_2_q1', question: 'ここは　___ ___ _★_ ___　です。', options: ['の', 'だいがく', 'とうきょう', 'しょくどう'], correctIndex: 0, explanation: 'ここは (とうきょう) (だいがく) (の) (しょくどう) です.' },
          { id: 'm2_2_q2', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['ともだち', 'へ', 'と', 'ぎんこう'], correctIndex: 3, explanation: 'わたしは (ともだち) (と) (ぎんこう) (へ) いきます.' }
        ]
      },
      {
        id: 'p_m3_2',
        type: 'mondai3',
        text: [
          'きのうは わたしの たんじょうびでした。',
          'わたしは ともだち（　１　）レストランへ いきました。',
          'レストランで おいしい ごはんを たべました。',
          'それから、えいがを（　２　）。とても たのしかったです。'
        ],
        questions: [
          { id: 'm3_2_q1', question: '（　１　）に入れるものはどれですか。', options: ['と', 'に', 'で', 'へ'], correctIndex: 0, explanation: 'Cùng với bạn -> と.' },
          { id: 'm3_2_q2', question: '（　２　）に入れるものはどれですか。', options: ['みます', 'みました', 'みますか', 'みません'], correctIndex: 1, explanation: 'Kể chuyện hôm qua -> Quá khứ -> みました.' }
        ]
      },
      {
        id: 'p_m4_2',
        type: 'mondai4',
        text: [
          'マリアさんは ブラジルじんです。サントスさんも ブラジルじんです。',
          'ふたりは さくらだいがくの がくせいです。',
          'マリアさんは まいにち バスで だいがくへ いきます。サントスさんは じてんしゃで いきます。'
        ],
        questions: [
          { id: 'm4_2_q1', question: 'サントスさんは どうやって だいがくへ いきますか。', options: ['バスで いきます。', 'じてんしゃで いきます。', 'あるいて いきます。', 'でんしゃで いきます。'], correctIndex: 1, explanation: 'Trong bài: サントスさんは じてんしゃで いきます.' },
          { id: 'm4_2_q2', question: 'ただしいものは どれですか。', options: ['マリアさんは がくせいじゃありません。', 'ふたりは ブラジルじんです。', 'サントスさんは かいしゃいんです。', 'マリアさんは じてんしゃで いきます。'], correctIndex: 1, explanation: 'Cả hai đều là người Brazil (ふたりは ブラジルじんです).' }
        ]
      },
      {
        id: 'p_m5_2',
        type: 'mondai5',
        text: [
          'ミラーさんの かいしゃは ＩＭＣです。コンピューターの かいしゃです。',
          'かいしゃは ９じから ５じまでです。',
          'ミラーさんは まいあさ ７じはんに おきます。あさごはんは いつも パンと コーヒーです。',
          'それから、でんしゃで かいしゃへ いきます。',
          'きのうは １０じまで はたらきました。とても つかれました。'
        ],
        questions: [
          { id: 'm5_2_q1', question: 'ミラーさんは まいあさ なにを たべますか。', options: ['ごはん', 'パン', 'なにも たべません', 'わかりません'], correctIndex: 1, explanation: 'パンと コーヒーです (Bánh mì và cà phê).' },
          { id: 'm5_2_q2', question: 'きのう ミラーさんは なんじまで はたらきましたか。', options: ['５じ', '７じはん', '９じ', '１０じ'], correctIndex: 3, explanation: 'きのうは １０じまで はたらきました.' }
        ]
      },
      {
        id: 'p_m6_2',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら びじゅつかん</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong style="display:inline-block; width: 80px;">・やすみ：</strong>げつようび</li><li><strong style="display:inline-block; width: 80px;">・じかん：</strong>ごぜん １０：００ ～ ごご ４：００</li></ul></div>',
        questions: [
          { id: 'm6_2_q1', question: 'びじゅつかんは なんにょうびが やすみですか。', options: ['にちようび', 'げつようび', 'かようび', 'すいようび'], correctIndex: 1, explanation: '・やすみ：げつようび' }
        ]
      }
    ]
  }
`;

for (let i = 2; i <= 5; i++) {
  let newTest = template.replace(/review_1_5_2/g, 'review_1_5_' + i)
                        .replace(/Đề thi 2/g, 'Đề thi ' + i)
                        .replace(/_2/g, '_' + i);

  content = content.replace(/];\s*$/, newTest + '\n];');
}

fs.writeFileSync(path, content);
console.log('Done generating 4 tests.');
