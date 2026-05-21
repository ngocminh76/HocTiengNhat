export interface DokkaiQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number; // 0-indexed
  explanation?: string;
}

export interface DokkaiPassage {
  id: string;
  type: 'mondai4' | 'mondai5' | 'mondai6';
  text?: string[]; // Paragraphs for Mondai 4 & 5
  htmlContent?: string; // HTML for Mondai 6 (poster, table, etc.)
  questions: DokkaiQuestion[];
}

export interface DokkaiReview {
  id: string;
  title: string;
  description: string;
  passages: DokkaiPassage[];
}

export const DOKKAI_REVIEWS: DokkaiReview[] = [
  {
    id: 'review_1_5',
    title: 'Đọc Hiểu JLPT N5 (Bài 1 - 5)',
    description: 'Chặng ôn tập kỹ năng Đọc Hiểu (Dokkai) dựa trên từ vựng và ngữ pháp từ Bài 1 đến Bài 5.',
    passages: [
      {
        id: 'p1',
        type: 'mondai4',
        text: [
          'きのう、わたしは　ともだちと　しんじゅくの　デパートへ　いきました。デパートは　１０じから　８じまでです。',
          'デパートの　ちかで　かばんを　かいました。かばんは　３０００えんでした。',
          'とても　いい　かばんです。'
        ],
        questions: [
          {
            id: 'q1',
            question: 'わたしは　デパートで　なにを　かいましたか。',
            options: [
              '３０００えんの　かぎ',
              '３０００えんの　かばん',
              '８０００えんの　かばん',
              '１０００えんの　かばん'
            ],
            correctIndex: 1,
            explanation: 'Trong bài có câu "かばんは ３０００えんでした" (Cặp sách giá 3000 yên).'
          }
        ]
      },
      {
        id: 'p2',
        type: 'mondai4',
        text: [
          'はじめまして。わたしの　なまえは　マリアです。ブラジルから　きました。',
          'わたしは　２５さいです。だいがくの　がくせいです。',
          'わたしの　だいがくは　さくらだいがくです。まいにち、ちかてつで　だいがくへ　いきます。',
          'よろしく　おねがいします。'
        ],
        questions: [
          {
            id: 'q2',
            question: 'マリアさんは　どうやって　だいがくへ　いきますか。',
            options: [
              'ちかてつで　いきます。',
              'バスで　いきます。',
              'あるいて　いきます。',
              'じてんしゃで　いきます。'
            ],
            correctIndex: 0,
            explanation: 'Trong bài có câu "まいにち、ちかてつで　だいがくへ　いきます" (Mỗi ngày tôi đi tàu điện ngầm đến trường đại học).'
          }
        ]
      },
      {
        id: 'p3',
        type: 'mondai5',
        text: [
          'わたしは　まいあさ　６じはんに　おきます。７じに　うちから　かいしゃへ　いきます。',
          'わたしは　ＩＭＣの　しゃいんです。ＩＭＣは　とうきょうの　かいしゃです。',
          'まいにち、でんしゃで　かいしゃへ　いきます。',
          'かいしゃは　９じから　５じまでです。１２じから　１じまで　ひるやすみです。',
          '５じに　しごとが　おわります。それから、うちへ　かえります。',
          'うちで　９じから　１０じまで　にほんごを　べんきょうします。',
          '１１じはんに　ねます。'
        ],
        questions: [
          {
            id: 'q3',
            question: 'このひとは　なんじから　なんじまで　はたらきますか。',
            options: [
              '９じから　５じまで',
              '６じはんから　５じまで',
              '９じから　１０じまで',
              '７じから　５じまで'
            ],
            correctIndex: 0,
            explanation: 'Trong bài có câu "かいしゃは ９じから ５じまでです" (Công ty làm việc từ 9 giờ đến 5 giờ).'
          },
          {
            id: 'q4',
            question: 'このひとは　よる、うちで　なにを　しますか。',
            options: [
              'かいしゃへ　いきます。',
              'にほんごを　べんきょうします。',
              'でんしゃで　かえります。',
              'しごとが　おわります。'
            ],
            correctIndex: 1,
            explanation: 'Câu gần cuối có ghi "うちで ９じから １０じまで にほんごを べんきょうします" (Học tiếng Nhật ở nhà từ 9 giờ đến 10 giờ tối).'
          }
        ]
      },
      {
        id: 'p4',
        type: 'mondai6',
        htmlContent: `
<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);">
  <h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">みどりとしょかん</h3>
  <ul style="list-style-type: none; padding-left: 0; line-height: 1.8;">
    <li><strong style="display:inline-block; width: 80px;">・やすみ：</strong>げつようび、もくようび</li>
    <li><strong style="display:inline-block; width: 80px;">・じかん：</strong>ごぜん ９：００ ～ ごご ６：００</li>
    <li><strong style="display:inline-block; width: 80px;">・でんわ：</strong>０３－１２３４－５６７８</li>
  </ul>
  <div style="background: rgba(255,196,0,0.1); border-left: 4px solid var(--gold); padding: 8px; font-weight: bold; margin-top: 16px; font-size: 14px;">
    ★こんしゅうの どようびは としょかんの おやすみです。
  </div>
</div>
        `,
        questions: [
          {
            id: 'q5',
            question: 'みどりとしょかんの　やすみは　いつですか。',
            options: [
              'げつようびと　もくようびだけです。',
              'げつようびと　もくようびと　こんしゅうの　どようびです。',
              'げつようびと　すいようびと　こんしゅうの　どようびです。',
              'どようびだけです。'
            ],
            correctIndex: 1,
            explanation: 'Lịch nghỉ cố định là Thứ Hai (げつようび) và Thứ Năm (もくようび). Ngoài ra có chú ý đặc biệt là Thứ Bảy tuần này (こんしゅうの どようび) cũng nghỉ.'
          }
        ]
      }
    ]
  }
];
