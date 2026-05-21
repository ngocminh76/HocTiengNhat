export interface DokkaiQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number; // 0-indexed
  explanation?: string;
}

export interface DokkaiPassage {
  id: string;
  type: 'moji_mondai1' | 'moji_mondai2' | 'moji_mondai3' | 'moji_mondai4' | 'mondai1' | 'mondai2' | 'mondai3' | 'mondai4' | 'mondai5' | 'mondai6';
  text?: string[]; // Paragraphs for Mondai 3, 4, 5
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
    title: 'Ôn Tập JLPT N5 (Bài 1 - 5)',
    description: 'Chặng ôn tập toàn diện Kiến thức Ngôn Ngữ (Ngữ Pháp) và Đọc Hiểu dựa trên Bài 1 đến Bài 5.',
    passages: [
      {
        id: 'p_moji1',
        type: 'moji_mondai1',
        questions: [
          {
            id: 'moji1_q1',
            question: 'わたしは 毎日 【水】を 飲みます。',
            options: ['みず', 'みち', 'みせ', 'みみ'],
            correctIndex: 0,
            explanation: 'Kanji "水" (Thủy) đọc là みず (nước).'
          },
          {
            id: 'moji1_q2',
            question: 'ここは わたしの 【大学】です。',
            options: ['だいがく', 'たいがく', 'だいがこ', 'たいがこ'],
            correctIndex: 0,
            explanation: 'Kanji "大学" (Đại học) đọc là だいがく.'
          }
        ]
      },
      {
        id: 'p_moji2',
        type: 'moji_mondai2',
        questions: [
          {
            id: 'moji2_q1',
            question: 'きのう 【がっこう】へ いきました。',
            options: ['学交', '学校', '学効', '学向'],
            correctIndex: 1,
            explanation: 'Trường học "がっこう" viết Kanji là 学校 (Học hiệu).'
          },
          {
            id: 'moji2_q2',
            question: 'スーパーで 【カメラ】を かいました。',
            options: ['ガメラ', 'カネラ', 'カメラ', 'カヌラ'],
            correctIndex: 2,
            explanation: 'Từ mượn "camera" (máy ảnh) viết Katakana là カメラ.'
          }
        ]
      },
      {
        id: 'p_moji3',
        type: 'moji_mondai3',
        questions: [
          {
            id: 'moji3_q1',
            question: 'あめが ふっていますから、【　　　】を かいます。',
            options: ['かさ', 'かばん', 'とけい', 'くつ'],
            correctIndex: 0,
            explanation: 'Vì trời mưa (あめ) nên phải mua "ô/dù" (かさ).'
          },
          {
            id: 'moji3_q2',
            question: 'きょうは にちようびです。あしたは 【　　　】です。',
            options: ['かようび', 'げつようび', 'すいようび', 'もくようび'],
            correctIndex: 1,
            explanation: 'Hôm nay là Chủ Nhật (にちようび), vậy ngày mai (あした) là Thứ Hai (げつようび).'
          }
        ]
      },
      {
        id: 'p_moji4',
        type: 'moji_mondai4',
        questions: [
          {
            id: 'moji4_q1',
            question: 'あしたは やすみです。',
            options: [
              'あしたは はたらきません。',
              'あしたは べんきょうします。',
              'あしたは がっこうへ いきます。',
              'あしたは いそがしいです。'
            ],
            correctIndex: 0,
            explanation: 'Ngày mai là ngày nghỉ (やすみ) đồng nghĩa với việc Ngày mai không làm việc (はたらきません).'
          }
        ]
      },
      {
        id: 'p_m1',
        type: 'mondai1',
        questions: [
          {
            id: 'm1_q1',
            question: 'きのう　デパート（　　　）いきました。',
            options: ['で', 'へ', 'を', 'が'],
            correctIndex: 1,
            explanation: 'Đi đến đâu dùng trợ từ へ (hoặc に). Động từ là いきました.'
          },
          {
            id: 'm1_q2',
            question: 'A「この　かばんは　だれ（　　　）ですか。」\nB「わたしのです。」',
            options: ['の', 'は', 'か', 'も'],
            correctIndex: 0,
            explanation: 'Hỏi sở hữu "của ai" dùng trợ từ の: だれのですか.'
          },
          {
            id: 'm1_q3',
            question: 'わたしは　まいあさ　６じ（　　　）おきます。',
            options: ['から', 'まで', 'に', 'で'],
            correctIndex: 2,
            explanation: 'Chỉ thời điểm cụ thể diễn ra hành động dùng trợ từ に.'
          },
          {
            id: 'm1_q4',
            question: 'A「それは　（　　　）の　ざっしですか。」\nB「カメラの　ざっしです。」',
            options: ['なん', 'だれ', 'どこ', 'いつ'],
            correctIndex: 0,
            explanation: 'Hỏi về nội dung, thể loại dùng なん (cái gì). Tạp chí về máy ảnh = カメラのざっし.'
          }
        ]
      },
      {
        id: 'p_m2',
        type: 'mondai2',
        questions: [
          {
            id: 'm2_q1',
            question: 'わたしは　___ ___ _★_ ___　かえります。',
            options: ['うち', 'ひとりで', 'へ', 'タクシーで'],
            correctIndex: 0,
            explanation: 'Thứ tự đúng: わたしは (タクシーで) (ひとりで) (うち) (へ) かえります. Vị trí ngôi sao là "うち".'
          },
          {
            id: 'm2_q2',
            question: 'ここは　___ ___ _★_ ___　です。',
            options: ['の', 'だいがく', 'さくら', 'きょうしつ'],
            correctIndex: 1,
            explanation: 'Thứ tự đúng: ここは (さくら) (だいがく) (の) (きょうしつ) です (Đây là phòng học của đại học Sakura). Vị trí ngôi sao là "だいがく".'
          }
        ]
      },
      {
        id: 'p_m3',
        type: 'mondai3',
        text: [
          'わたしの　かぞくは　３にんです。ちちと　ははと　わたしです。',
          'ちちは　かいしゃいんです。はは（　１　）かいしゃいんです。',
          'きのうは　にちようびでした。（　２　）、ちちと　ははは　かいしゃへ　いきませんでした。',
          'わたしたちは　くるまで　スーパーへ（　３　）。',
        ],
        questions: [
          {
            id: 'm3_q1',
            question: '（　１　）に入れるものはどれですか。',
            options: ['は', 'も', 'が', 'と'],
            correctIndex: 1,
            explanation: 'Câu trước nói Bố là nhân viên công ty, câu sau nói Mẹ CŨNG là nhân viên công ty -> dùng も.'
          },
          {
            id: 'm3_q2',
            question: '（　２　）に入れるものはどれですか。',
            options: ['それから', 'ですから', 'これ', 'どこ'],
            correctIndex: 1,
            explanation: 'きのうは にちようびでした (Hôm qua là Chủ Nhật), (Vì vậy) Bố mẹ không đi làm. Dùng ですから (Vì vậy).'
          },
          {
            id: 'm3_q3',
            question: '（　３　）に入れるものはどれですか。',
            options: ['いきます', 'きました', 'いきました', 'きます'],
            correctIndex: 2,
            explanation: 'Kể về chuyện hôm qua (きのう) nên phải dùng thì quá khứ. Đi đến siêu thị dùng いきました.'
          }
        ]
      },
      {
        id: 'p_m4_1',
        type: 'mondai4',
        text: [
          'きのう、わたしは　ともだちと　しんじゅくの　デパートへ　いきました。デパートは　１０じから　８じまでです。',
          'デパートの　ちかで　かばんを　かいました。かばんは　３０００えんでした。',
          'とても　いい　かばんです。'
        ],
        questions: [
          {
            id: 'm4_q1',
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
        id: 'p_m4_2',
        type: 'mondai4',
        text: [
          'はじめまして。わたしの　なまえは　マリアです。ブラジルから　きました。',
          'わたしは　２５さいです。だいがくの　がくせいです。',
          'わたしの　だいがくは　さくらだいがくです。まいにち、ちかてつで　だいがくへ　いきます。',
          'よろしく　おねがいします。'
        ],
        questions: [
          {
            id: 'm4_q2',
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
        id: 'p_m5',
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
            id: 'm5_q1',
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
            id: 'm5_q2',
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
        id: 'p_m6',
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
            id: 'm6_q1',
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
