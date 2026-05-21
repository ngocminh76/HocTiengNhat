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
    id: 'review_1_5_1',
    title: 'Đề thi 1: JLPT N5 (Bài 1 - 5)',
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
          { id: 'm1_2_q4', question: 'A「それは （　　　）ですか。」\nB「コンピューターの ほん です。」', options: ['なんの ほん', 'だれの ほん', 'どこ', 'なん'], correctIndex: 3, explanation: 'Hỏi cái gì dùng なん.' }
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


  ,
  {
    id: 'review_1_5_3',
    title: 'Đề thi 3: Thực chiến JLPT N5',
    description: 'Bộ đề số 2. Áp dụng từ vựng và ngữ pháp để giải quyết các tình huống khó hơn.',
    passages: [
      {
        id: 'p_moji1_3',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1_3_1', question: '【先月】、日本へ きました。', options: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], correctIndex: 2, explanation: '先月 (Tiên Nguyệt) đọc là せんげつ (tháng trước).' },
          { id: 'm1_3_3', question: 'わたしの 【国】は ベトナムです。', options: ['くに', 'まち', 'うち', 'いえ'], correctIndex: 0, explanation: '国 (Quốc) đọc là くに (đất nước).' }
        ]
      },
      {
        id: 'p_moji2_3',
        type: 'moji_mondai2',
        questions: [
          { id: 'm2_3_1', question: '【でんしゃ】で かいしゃへ いきます。', options: ['電車', '電気', '電話', '電波'], correctIndex: 0, explanation: '電車 (Điện xa) nghĩa là tàu điện.' },
          { id: 'm2_3_3', question: 'あの 【レストラン】は おいしいです。', options: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], correctIndex: 1, explanation: 'Restaurant viết là レストラン.' }
        ]
      },
      {
        id: 'p_moji3_3',
        type: 'moji_mondai3',
        questions: [
          { id: 'm3_3_1', question: 'あしたは やすみです。うちで ゆっくり 【　　　】。', options: ['おきます', 'はたらきます', 'やすみます', 'おわります'], correctIndex: 2, explanation: 'Vì mai là ngày nghỉ nên ở nhà "nghỉ ngơi" (やすみます).' },
          { id: 'm3_3_3', question: 'きのう １０じに 【　　　】。', options: ['おきました', 'ねました', 'きました', 'いきました'], correctIndex: 1, explanation: 'Hôm qua 10 giờ đã "ngủ" (ねました). 10 giờ tối thường là giờ ngủ.' }
        ]
      },
      {
        id: 'p_moji4_3',
        type: 'moji_mondai4',
        questions: [
          { id: 'm4_3_1', question: 'この くるまは わたしの じゃありません。', options: ['わたしは くるまが ありません。', 'この くるまは だれのですか。', 'これは わたしの くるまじゃありません。', 'この くるまは あたらしいです。'], correctIndex: 2, explanation: 'Đồng nghĩa: Chiếc xe này không phải của tôi = Đây không phải là xe của tôi (これは わたしの くるまじゃありません).' }
        ]
      },
      {
        id: 'p_m1_3',
        type: 'mondai1',
        questions: [
          { id: 'm1_3_q1', question: 'わたしは えんぴつ（　　　）てがみを かきます。', options: ['に', 'で', 'を', 'が'], correctIndex: 1, explanation: 'Viết bằng bút chì: dùng phương tiện/công cụ -> trợ từ で.' },
          { id: 'm1_3_q2', question: 'あした どこ（　　　）いきません。', options: ['へも', 'をも', 'がも', 'でも'], correctIndex: 0, explanation: 'Phủ định hoàn toàn: どこへも いきません (Không đi đâu cả).' },
          { id: 'm1_3_q3', question: 'きょうは ５じ（　　　）はたらきます。', options: ['まで', 'から', 'に', 'で'], correctIndex: 0, explanation: 'Làm việc "đến" 5 giờ -> まで.' },
          { id: 'm1_3_q4', question: 'A「それは （　　　）ですか。」\nB「コンピューターの ほん です。」', options: ['なんの ほん', 'だれの ほん', 'どこ', 'なん'], correctIndex: 3, explanation: 'Hỏi cái gì dùng なん.' }
        ]
      },
      {
        id: 'p_m2_3',
        type: 'mondai2',
        questions: [
          { id: 'm2_3_q1', question: 'ここは　___ ___ _★_ ___　です。', options: ['の', 'だいがく', 'とうきょう', 'しょくどう'], correctIndex: 0, explanation: 'ここは (とうきょう) (だいがく) (の) (しょくどう) です.' },
          { id: 'm2_3_q2', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['ともだち', 'へ', 'と', 'ぎんこう'], correctIndex: 3, explanation: 'わたしは (ともだち) (と) (ぎんこう) (へ) いきます.' }
        ]
      },
      {
        id: 'p_m3_3',
        type: 'mondai3',
        text: [
          'きのうは わたしの たんじょうびでした。',
          'わたしは ともだち（　１　）レストランへ いきました。',
          'レストランで おいしい ごはんを たべました。',
          'それから、えいがを（　２　）。とても たのしかったです。'
        ],
        questions: [
          { id: 'm3_3_q1', question: '（　１　）に入れるものはどれですか。', options: ['と', 'に', 'で', 'へ'], correctIndex: 0, explanation: 'Cùng với bạn -> と.' },
          { id: 'm3_3_q2', question: '（　２　）に入れるものはどれですか。', options: ['みます', 'みました', 'みますか', 'みません'], correctIndex: 1, explanation: 'Kể chuyện hôm qua -> Quá khứ -> みました.' }
        ]
      },
      {
        id: 'p_m4_3',
        type: 'mondai4',
        text: [
          'マリアさんは ブラジルじんです。サントスさんも ブラジルじんです。',
          'ふたりは さくらだいがくの がくせいです。',
          'マリアさんは まいにち バスで だいがくへ いきます。サントスさんは じてんしゃで いきます。'
        ],
        questions: [
          { id: 'm4_3_q1', question: 'サントスさんは どうやって だいがくへ いきますか。', options: ['バスで いきます。', 'じてんしゃで いきます。', 'あるいて いきます。', 'でんしゃで いきます。'], correctIndex: 1, explanation: 'Trong bài: サントスさんは じてんしゃで いきます.' },
          { id: 'm4_3_q2', question: 'ただしいものは どれですか。', options: ['マリアさんは がくせいじゃありません。', 'ふたりは ブラジルじんです。', 'サントスさんは かいしゃいんです。', 'マリアさんは じてんしゃで いきます。'], correctIndex: 1, explanation: 'Cả hai đều là người Brazil (ふたりは ブラジルじんです).' }
        ]
      },
      {
        id: 'p_m5_3',
        type: 'mondai5',
        text: [
          'ミラーさんの かいしゃは ＩＭＣです。コンピューターの かいしゃです。',
          'かいしゃは ９じから ５じまでです。',
          'ミラーさんは まいあさ ７じはんに おきます。あさごはんは いつも パンと コーヒーです。',
          'それから、でんしゃで かいしゃへ いきます。',
          'きのうは １０じまで はたらきました。とても つかれました。'
        ],
        questions: [
          { id: 'm5_3_q1', question: 'ミラーさんは まいあさ なにを たべますか。', options: ['ごはん', 'パン', 'なにも たべません', 'わかりません'], correctIndex: 1, explanation: 'パンと コーヒーです (Bánh mì và cà phê).' },
          { id: 'm5_3_q2', question: 'きのう ミラーさんは なんじまで はたらきましたか。', options: ['５じ', '７じはん', '９じ', '１０じ'], correctIndex: 3, explanation: 'きのうは １０じまで はたらきました.' }
        ]
      },
      {
        id: 'p_m6_3',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら びじゅつかん</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong style="display:inline-block; width: 80px;">・やすみ：</strong>げつようび</li><li><strong style="display:inline-block; width: 80px;">・じかん：</strong>ごぜん １０：００ ～ ごご ４：００</li></ul></div>',
        questions: [
          { id: 'm6_3_q1', question: 'びじゅつかんは なんにょうびが やすみですか。', options: ['にちようび', 'げつようび', 'かようび', 'すいようび'], correctIndex: 1, explanation: '・やすみ：げつようび' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_1_5_4',
    title: 'Đề thi 4: Thực chiến JLPT N5',
    description: 'Bộ đề số 2. Áp dụng từ vựng và ngữ pháp để giải quyết các tình huống khó hơn.',
    passages: [
      {
        id: 'p_moji1_4',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1_4_1', question: '【先月】、日本へ きました。', options: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], correctIndex: 2, explanation: '先月 (Tiên Nguyệt) đọc là せんげつ (tháng trước).' },
          { id: 'm1_4_4', question: 'わたしの 【国】は ベトナムです。', options: ['くに', 'まち', 'うち', 'いえ'], correctIndex: 0, explanation: '国 (Quốc) đọc là くに (đất nước).' }
        ]
      },
      {
        id: 'p_moji2_4',
        type: 'moji_mondai2',
        questions: [
          { id: 'm2_4_1', question: '【でんしゃ】で かいしゃへ いきます。', options: ['電車', '電気', '電話', '電波'], correctIndex: 0, explanation: '電車 (Điện xa) nghĩa là tàu điện.' },
          { id: 'm2_4_4', question: 'あの 【レストラン】は おいしいです。', options: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], correctIndex: 1, explanation: 'Restaurant viết là レストラン.' }
        ]
      },
      {
        id: 'p_moji3_4',
        type: 'moji_mondai3',
        questions: [
          { id: 'm3_4_1', question: 'あしたは やすみです。うちで ゆっくり 【　　　】。', options: ['おきます', 'はたらきます', 'やすみます', 'おわります'], correctIndex: 2, explanation: 'Vì mai là ngày nghỉ nên ở nhà "nghỉ ngơi" (やすみます).' },
          { id: 'm3_4_4', question: 'きのう １０じに 【　　　】。', options: ['おきました', 'ねました', 'きました', 'いきました'], correctIndex: 1, explanation: 'Hôm qua 10 giờ đã "ngủ" (ねました). 10 giờ tối thường là giờ ngủ.' }
        ]
      },
      {
        id: 'p_moji4_4',
        type: 'moji_mondai4',
        questions: [
          { id: 'm4_4_1', question: 'この くるまは わたしの じゃありません。', options: ['わたしは くるまが ありません。', 'この くるまは だれのですか。', 'これは わたしの くるまじゃありません。', 'この くるまは あたらしいです。'], correctIndex: 2, explanation: 'Đồng nghĩa: Chiếc xe này không phải của tôi = Đây không phải là xe của tôi (これは わたしの くるまじゃありません).' }
        ]
      },
      {
        id: 'p_m1_4',
        type: 'mondai1',
        questions: [
          { id: 'm1_4_q1', question: 'わたしは えんぴつ（　　　）てがみを かきます。', options: ['に', 'で', 'を', 'が'], correctIndex: 1, explanation: 'Viết bằng bút chì: dùng phương tiện/công cụ -> trợ từ で.' },
          { id: 'm1_4_q2', question: 'あした どこ（　　　）いきません。', options: ['へも', 'をも', 'がも', 'でも'], correctIndex: 0, explanation: 'Phủ định hoàn toàn: どこへも いきません (Không đi đâu cả).' },
          { id: 'm1_4_q3', question: 'きょうは ５じ（　　　）はたらきます。', options: ['まで', 'から', 'に', 'で'], correctIndex: 0, explanation: 'Làm việc "đến" 5 giờ -> まで.' },
          { id: 'm1_4_q4', question: 'A「それは （　　　）ですか。」\nB「コンピューターの ほん です。」', options: ['なんの ほん', 'だれの ほん', 'どこ', 'なん'], correctIndex: 3, explanation: 'Hỏi cái gì dùng なん.' }
        ]
      },
      {
        id: 'p_m2_4',
        type: 'mondai2',
        questions: [
          { id: 'm2_4_q1', question: 'ここは　___ ___ _★_ ___　です。', options: ['の', 'だいがく', 'とうきょう', 'しょくどう'], correctIndex: 0, explanation: 'ここは (とうきょう) (だいがく) (の) (しょくどう) です.' },
          { id: 'm2_4_q2', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['ともだち', 'へ', 'と', 'ぎんこう'], correctIndex: 3, explanation: 'わたしは (ともだち) (と) (ぎんこう) (へ) いきます.' }
        ]
      },
      {
        id: 'p_m3_4',
        type: 'mondai3',
        text: [
          'きのうは わたしの たんじょうびでした。',
          'わたしは ともだち（　１　）レストランへ いきました。',
          'レストランで おいしい ごはんを たべました。',
          'それから、えいがを（　２　）。とても たのしかったです。'
        ],
        questions: [
          { id: 'm3_4_q1', question: '（　１　）に入れるものはどれですか。', options: ['と', 'に', 'で', 'へ'], correctIndex: 0, explanation: 'Cùng với bạn -> と.' },
          { id: 'm3_4_q2', question: '（　２　）に入れるものはどれですか。', options: ['みます', 'みました', 'みますか', 'みません'], correctIndex: 1, explanation: 'Kể chuyện hôm qua -> Quá khứ -> みました.' }
        ]
      },
      {
        id: 'p_m4_4',
        type: 'mondai4',
        text: [
          'マリアさんは ブラジルじんです。サントスさんも ブラジルじんです。',
          'ふたりは さくらだいがくの がくせいです。',
          'マリアさんは まいにち バスで だいがくへ いきます。サントスさんは じてんしゃで いきます。'
        ],
        questions: [
          { id: 'm4_4_q1', question: 'サントスさんは どうやって だいがくへ いきますか。', options: ['バスで いきます。', 'じてんしゃで いきます。', 'あるいて いきます。', 'でんしゃで いきます。'], correctIndex: 1, explanation: 'Trong bài: サントスさんは じてんしゃで いきます.' },
          { id: 'm4_4_q2', question: 'ただしいものは どれですか。', options: ['マリアさんは がくせいじゃありません。', 'ふたりは ブラジルじんです。', 'サントスさんは かいしゃいんです。', 'マリアさんは じてんしゃで いきます。'], correctIndex: 1, explanation: 'Cả hai đều là người Brazil (ふたりは ブラジルじんです).' }
        ]
      },
      {
        id: 'p_m5_4',
        type: 'mondai5',
        text: [
          'ミラーさんの かいしゃは ＩＭＣです。コンピューターの かいしゃです。',
          'かいしゃは ９じから ５じまでです。',
          'ミラーさんは まいあさ ７じはんに おきます。あさごはんは いつも パンと コーヒーです。',
          'それから、でんしゃで かいしゃへ いきます。',
          'きのうは １０じまで はたらきました。とても つかれました。'
        ],
        questions: [
          { id: 'm5_4_q1', question: 'ミラーさんは まいあさ なにを たべますか。', options: ['ごはん', 'パン', 'なにも たべません', 'わかりません'], correctIndex: 1, explanation: 'パンと コーヒーです (Bánh mì và cà phê).' },
          { id: 'm5_4_q2', question: 'きのう ミラーさんは なんじまで はたらきましたか。', options: ['５じ', '７じはん', '９じ', '１０じ'], correctIndex: 3, explanation: 'きのうは １０じまで はたらきました.' }
        ]
      },
      {
        id: 'p_m6_4',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら びじゅつかん</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong style="display:inline-block; width: 80px;">・やすみ：</strong>げつようび</li><li><strong style="display:inline-block; width: 80px;">・じかん：</strong>ごぜん １０：００ ～ ごご ４：００</li></ul></div>',
        questions: [
          { id: 'm6_4_q1', question: 'びじゅつかんは なんにょうびが やすみですか。', options: ['にちようび', 'げつようび', 'かようび', 'すいようび'], correctIndex: 1, explanation: '・やすみ：げつようび' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_1_5_5',
    title: 'Đề thi 5: Thực chiến JLPT N5',
    description: 'Bộ đề số 2. Áp dụng từ vựng và ngữ pháp để giải quyết các tình huống khó hơn.',
    passages: [
      {
        id: 'p_moji1_5',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1_5_1', question: '【先月】、日本へ きました。', options: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], correctIndex: 2, explanation: '先月 (Tiên Nguyệt) đọc là せんげつ (tháng trước).' },
          { id: 'm1_5_5', question: 'わたしの 【国】は ベトナムです。', options: ['くに', 'まち', 'うち', 'いえ'], correctIndex: 0, explanation: '国 (Quốc) đọc là くに (đất nước).' }
        ]
      },
      {
        id: 'p_moji2_5',
        type: 'moji_mondai2',
        questions: [
          { id: 'm2_5_1', question: '【でんしゃ】で かいしゃへ いきます。', options: ['電車', '電気', '電話', '電波'], correctIndex: 0, explanation: '電車 (Điện xa) nghĩa là tàu điện.' },
          { id: 'm2_5_5', question: 'あの 【レストラン】は おいしいです。', options: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], correctIndex: 1, explanation: 'Restaurant viết là レストラン.' }
        ]
      },
      {
        id: 'p_moji3_5',
        type: 'moji_mondai3',
        questions: [
          { id: 'm3_5_1', question: 'あしたは やすみです。うちで ゆっくり 【　　　】。', options: ['おきます', 'はたらきます', 'やすみます', 'おわります'], correctIndex: 2, explanation: 'Vì mai là ngày nghỉ nên ở nhà "nghỉ ngơi" (やすみます).' },
          { id: 'm3_5_5', question: 'きのう １０じに 【　　　】。', options: ['おきました', 'ねました', 'きました', 'いきました'], correctIndex: 1, explanation: 'Hôm qua 10 giờ đã "ngủ" (ねました). 10 giờ tối thường là giờ ngủ.' }
        ]
      },
      {
        id: 'p_moji4_5',
        type: 'moji_mondai4',
        questions: [
          { id: 'm4_5_1', question: 'この くるまは わたしの じゃありません。', options: ['わたしは くるまが ありません。', 'この くるまは だれのですか。', 'これは わたしの くるまじゃありません。', 'この くるまは あたらしいです。'], correctIndex: 2, explanation: 'Đồng nghĩa: Chiếc xe này không phải của tôi = Đây không phải là xe của tôi (これは わたしの くるまじゃありません).' }
        ]
      },
      {
        id: 'p_m1_5',
        type: 'mondai1',
        questions: [
          { id: 'm1_5_q1', question: 'わたしは えんぴつ（　　　）てがみを かきます。', options: ['に', 'で', 'を', 'が'], correctIndex: 1, explanation: 'Viết bằng bút chì: dùng phương tiện/công cụ -> trợ từ で.' },
          { id: 'm1_5_q2', question: 'あした どこ（　　　）いきません。', options: ['へも', 'をも', 'がも', 'でも'], correctIndex: 0, explanation: 'Phủ định hoàn toàn: どこへも いきません (Không đi đâu cả).' },
          { id: 'm1_5_q3', question: 'きょうは ５じ（　　　）はたらきます。', options: ['まで', 'から', 'に', 'で'], correctIndex: 0, explanation: 'Làm việc "đến" 5 giờ -> まで.' },
          { id: 'm1_5_q4', question: 'A「それは （　　　）ですか。」\nB「コンピューターの ほん です。」', options: ['なんの ほん', 'だれの ほん', 'どこ', 'なん'], correctIndex: 3, explanation: 'Hỏi cái gì dùng なん.' }
        ]
      },
      {
        id: 'p_m2_5',
        type: 'mondai2',
        questions: [
          { id: 'm2_5_q1', question: 'ここは　___ ___ _★_ ___　です。', options: ['の', 'だいがく', 'とうきょう', 'しょくどう'], correctIndex: 0, explanation: 'ここは (とうきょう) (だいがく) (の) (しょくどう) です.' },
          { id: 'm2_5_q2', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['ともだち', 'へ', 'と', 'ぎんこう'], correctIndex: 3, explanation: 'わたしは (ともだち) (と) (ぎんこう) (へ) いきます.' }
        ]
      },
      {
        id: 'p_m3_5',
        type: 'mondai3',
        text: [
          'きのうは わたしの たんじょうびでした。',
          'わたしは ともだち（　１　）レストランへ いきました。',
          'レストランで おいしい ごはんを たべました。',
          'それから、えいがを（　２　）。とても たのしかったです。'
        ],
        questions: [
          { id: 'm3_5_q1', question: '（　１　）に入れるものはどれですか。', options: ['と', 'に', 'で', 'へ'], correctIndex: 0, explanation: 'Cùng với bạn -> と.' },
          { id: 'm3_5_q2', question: '（　２　）に入れるものはどれですか。', options: ['みます', 'みました', 'みますか', 'みません'], correctIndex: 1, explanation: 'Kể chuyện hôm qua -> Quá khứ -> みました.' }
        ]
      },
      {
        id: 'p_m4_5',
        type: 'mondai4',
        text: [
          'マリアさんは ブラジルじんです。サントスさんも ブラジルじんです。',
          'ふたりは さくらだいがくの がくせいです。',
          'マリアさんは まいにち バスで だいがくへ いきます。サントスさんは じてんしゃで いきます。'
        ],
        questions: [
          { id: 'm4_5_q1', question: 'サントスさんは どうやって だいがくへ いきますか。', options: ['バスで いきます。', 'じてんしゃで いきます。', 'あるいて いきます。', 'でんしゃで いきます。'], correctIndex: 1, explanation: 'Trong bài: サントスさんは じてんしゃで いきます.' },
          { id: 'm4_5_q2', question: 'ただしいものは どれですか。', options: ['マリアさんは がくせいじゃありません。', 'ふたりは ブラジルじんです。', 'サントスさんは かいしゃいんです。', 'マリアさんは じてんしゃで いきます。'], correctIndex: 1, explanation: 'Cả hai đều là người Brazil (ふたりは ブラジルじんです).' }
        ]
      },
      {
        id: 'p_m5_5',
        type: 'mondai5',
        text: [
          'ミラーさんの かいしゃは ＩＭＣです。コンピューターの かいしゃです。',
          'かいしゃは ９じから ５じまでです。',
          'ミラーさんは まいあさ ７じはんに おきます。あさごはんは いつも パンと コーヒーです。',
          'それから、でんしゃで かいしゃへ いきます。',
          'きのうは １０じまで はたらきました。とても つかれました。'
        ],
        questions: [
          { id: 'm5_5_q1', question: 'ミラーさんは まいあさ なにを たべますか。', options: ['ごはん', 'パン', 'なにも たべません', 'わかりません'], correctIndex: 1, explanation: 'パンと コーヒーです (Bánh mì và cà phê).' },
          { id: 'm5_5_q2', question: 'きのう ミラーさんは なんじまで はたらきましたか。', options: ['５じ', '７じはん', '９じ', '１０じ'], correctIndex: 3, explanation: 'きのうは １０じまで はたらきました.' }
        ]
      },
      {
        id: 'p_m6_5',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら びじゅつかん</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong style="display:inline-block; width: 80px;">・やすみ：</strong>げつようび</li><li><strong style="display:inline-block; width: 80px;">・じかん：</strong>ごぜん １０：００ ～ ごご ４：００</li></ul></div>',
        questions: [
          { id: 'm6_5_q1', question: 'びじゅつかんは なんにょうびが やすみですか。', options: ['にちようび', 'げつようび', 'かようび', 'すいようび'], correctIndex: 1, explanation: '・やすみ：げつようび' }
        ]
      }
    ]
  }


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
          { id: 'm610_m1_1_1b', question: 'あたらしい 【車】を かいました。', options: ['くろま', 'くるま', 'でんしゃ', 'じてんしゃ'], correctIndex: 1, explanation: '車 (Xa) đọc là くるま (Ô tô).' }
        ]
      },
      {
        id: 'p_610_moji2_1',
        type: 'moji_mondai2',
        questions: [
          { id: 'm610_m2_1_1', question: '【えいご】を べんきょうします。', options: ['英話', '英語', '英吾', '英悟'], correctIndex: 1, explanation: '英語 (Anh Ngữ) là Tiếng Anh.' },
          { id: 'm610_m2_1_1b', question: 'ともだちに 【プレゼント】を あげます。', options: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], correctIndex: 1, explanation: 'Present (Quà tặng) viết Katakana là プレゼント.' }
        ]
      },
      {
        id: 'p_610_moji3_1',
        type: 'moji_mondai3',
        questions: [
          { id: 'm610_m3_1_1', question: 'はさみで かみを 【　　　】。', options: ['きります', 'かします', 'かります', 'もらいます'], correctIndex: 0, explanation: 'Cắt (きります) giấy bằng kéo.' },
          { id: 'm610_m3_1_1b', question: 'この りんごは とても 【　　　】です。', options: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], correctIndex: 1, explanation: 'Táo (りんご) thì ngon (おいしい).' }
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


  ,
  {
    id: 'review_6_10_2',
    title: 'Đề thi 2: Trạm Ôn Tập JLPT N5 (Bài 6 - 10)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Tự động từ/Tha động từ, Tính từ, Cho/Nhận.',
    passages: [
      {
        id: 'p_610_moji1_2',
        type: 'moji_mondai1',
        questions: [
          { id: 'm610_m1_1_2b', question: '【手紙】を かきます。', options: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], correctIndex: 0, explanation: '手紙 (Thủ Chỉ) đọc là てがみ (Bức thư).' },
          { id: 'm610_m1_1_2b', question: 'あたらしい 【車】を かいました。', options: ['くろま', 'くるま', 'でんしゃ', 'じてんしゃ'], correctIndex: 1, explanation: '車 (Xa) đọc là くるま (Ô tô).' }
        ]
      },
      {
        id: 'p_610_moji2_2',
        type: 'moji_mondai2',
        questions: [
          { id: 'm610_m2_1_2b', question: '【えいご】を べんきょうします。', options: ['英話', '英語', '英吾', '英悟'], correctIndex: 1, explanation: '英語 (Anh Ngữ) là Tiếng Anh.' },
          { id: 'm610_m2_1_2b', question: 'ともだちに 【プレゼント】を あげます。', options: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], correctIndex: 1, explanation: 'Present (Quà tặng) viết Katakana là プレゼント.' }
        ]
      },
      {
        id: 'p_610_moji3_2',
        type: 'moji_mondai3',
        questions: [
          { id: 'm610_m3_1_2b', question: 'はさみで かみを 【　　　】。', options: ['きります', 'かします', 'かります', 'もらいます'], correctIndex: 0, explanation: 'Cắt (きります) giấy bằng kéo.' },
          { id: 'm610_m3_1_2b', question: 'この りんごは とても 【　　　】です。', options: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], correctIndex: 1, explanation: 'Táo (りんご) thì ngon (おいしい).' }
        ]
      },
      {
        id: 'p_610_moji4_2',
        type: 'moji_mondai4',
        questions: [
          { id: 'm610_m4_1_2b', question: 'きのうは さむかったです。', options: ['きのうは あつかったです。', 'きのうは あたたかかったです。', 'きのうは すずしかったです。', 'きのうは いい てんきじゃありませんでした。'], correctIndex: 3, explanation: 'Trời lạnh (さむい) mang nét nghĩa thời tiết không thuận lợi trong các lựa chọn. (Tạm lấy nghĩa tương đồng: いい てんきじゃありませんでした - Thời tiết không tốt).' }
        ]
      },
      {
        id: 'p_610_m1_2',
        type: 'mondai1',
        questions: [
          { id: 'm610_m1_1_q1', question: 'スプーン（　　　）ごはんを たべます。', options: ['で', 'に', 'を', 'が'], correctIndex: 0, explanation: 'Chỉ phương tiện/công cụ -> trợ từ で.' },
          { id: 'm610_m1_1_q2', question: 'わたしは 木村さん（　　　）はなを あげました。', options: ['で', 'に', 'を', 'へ'], correctIndex: 1, explanation: 'Cho ai cái gì -> Danh từ người + に.' },
          { id: 'm610_m1_1_q3', question: '日本の カメラは （　　　）ですか。', options: ['どう', 'どんな', 'どれ', 'どの'], correctIndex: 0, explanation: 'Hỏi tính chất/cảm nhận (Thế nào?) -> どうですか.' },
          { id: 'm610_m1_1_q4', question: 'きのうの パーティーは （　　　）。', options: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], correctIndex: 2, explanation: 'Tính từ đuôi い ở quá khứ -> い => かったです.' }
        ]
      },
      {
        id: 'p_610_m2_2',
        type: 'mondai2',
        questions: [
          { id: 'm610_m2_1_q1', question: 'とうきょうは　___ ___ _★_ ___　まちです。', options: ['て', 'きれいで', 'にぎやかな', 'とても'], correctIndex: 3, explanation: 'とうきょうは (とても) (きれいで) (にぎやかな) (まち) です. ★ nằm ở vị trí にぎやかな.' },
          { id: 'm610_m2_1_q2', question: 'わたしは　___ ___ _★_ ___　もらいました。', options: ['を', 'ともだち', 'に', 'とけい'], correctIndex: 0, explanation: 'わたしは (ともだち) (に) (とけい) (を) もらいました. ★ nằm ở vị trí とけい.' }
        ]
      },
      {
        id: 'p_610_m3_2',
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
        id: 'p_610_m4_2',
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
        id: 'p_610_m5_2',
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
        id: 'p_610_m6_2',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら レストラン メニュー</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong>・カレー：</strong> ６００えん</li><li><strong>・ラーメン：</strong> ５００えん</li><li><strong>・コーヒー：</strong> ２００えん</li></ul></div>',
        questions: [
          { id: 'm610_m6_1_q1', question: 'ラーメンと コーヒーを たのみます。いくらですか。', options: ['７００えん', '８００えん', '６００えん', '５００えん'], correctIndex: 0, explanation: 'Ramen 500 yên + Cà phê 200 yên = 700 yên.' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_6_10_3',
    title: 'Đề thi 3: Trạm Ôn Tập JLPT N5 (Bài 6 - 10)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Tự động từ/Tha động từ, Tính từ, Cho/Nhận.',
    passages: [
      {
        id: 'p_610_moji1_3',
        type: 'moji_mondai1',
        questions: [
          { id: 'm610_m1_1_3', question: '【手紙】を かきます。', options: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], correctIndex: 0, explanation: '手紙 (Thủ Chỉ) đọc là てがみ (Bức thư).' },
          { id: 'm610_m1_1_3b', question: 'あたらしい 【車】を かいました。', options: ['くろま', 'くるま', 'でんしゃ', 'じてんしゃ'], correctIndex: 1, explanation: '車 (Xa) đọc là くるま (Ô tô).' }
        ]
      },
      {
        id: 'p_610_moji2_3',
        type: 'moji_mondai2',
        questions: [
          { id: 'm610_m2_1_3', question: '【えいご】を べんきょうします。', options: ['英話', '英語', '英吾', '英悟'], correctIndex: 1, explanation: '英語 (Anh Ngữ) là Tiếng Anh.' },
          { id: 'm610_m2_1_3b', question: 'ともだちに 【プレゼント】を あげます。', options: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], correctIndex: 1, explanation: 'Present (Quà tặng) viết Katakana là プレゼント.' }
        ]
      },
      {
        id: 'p_610_moji3_3',
        type: 'moji_mondai3',
        questions: [
          { id: 'm610_m3_1_3', question: 'はさみで かみを 【　　　】。', options: ['きります', 'かします', 'かります', 'もらいます'], correctIndex: 0, explanation: 'Cắt (きります) giấy bằng kéo.' },
          { id: 'm610_m3_1_3b', question: 'この りんごは とても 【　　　】です。', options: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], correctIndex: 1, explanation: 'Táo (りんご) thì ngon (おいしい).' }
        ]
      },
      {
        id: 'p_610_moji4_3',
        type: 'moji_mondai4',
        questions: [
          { id: 'm610_m4_1_3', question: 'きのうは さむかったです。', options: ['きのうは あつかったです。', 'きのうは あたたかかったです。', 'きのうは すずしかったです。', 'きのうは いい てんきじゃありませんでした。'], correctIndex: 3, explanation: 'Trời lạnh (さむい) mang nét nghĩa thời tiết không thuận lợi trong các lựa chọn. (Tạm lấy nghĩa tương đồng: いい てんきじゃありませんでした - Thời tiết không tốt).' }
        ]
      },
      {
        id: 'p_610_m1_3',
        type: 'mondai1',
        questions: [
          { id: 'm610_m1_1_q1', question: 'スプーン（　　　）ごはんを たべます。', options: ['で', 'に', 'を', 'が'], correctIndex: 0, explanation: 'Chỉ phương tiện/công cụ -> trợ từ で.' },
          { id: 'm610_m1_1_q2', question: 'わたしは 木村さん（　　　）はなを あげました。', options: ['で', 'に', 'を', 'へ'], correctIndex: 1, explanation: 'Cho ai cái gì -> Danh từ người + に.' },
          { id: 'm610_m1_1_q3', question: '日本の カメラは （　　　）ですか。', options: ['どう', 'どんな', 'どれ', 'どの'], correctIndex: 0, explanation: 'Hỏi tính chất/cảm nhận (Thế nào?) -> どうですか.' },
          { id: 'm610_m1_1_q4', question: 'きのうの パーティーは （　　　）。', options: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], correctIndex: 2, explanation: 'Tính từ đuôi い ở quá khứ -> い => かったです.' }
        ]
      },
      {
        id: 'p_610_m2_3',
        type: 'mondai2',
        questions: [
          { id: 'm610_m2_1_q1', question: 'とうきょうは　___ ___ _★_ ___　まちです。', options: ['て', 'きれいで', 'にぎやかな', 'とても'], correctIndex: 3, explanation: 'とうきょうは (とても) (きれいで) (にぎやかな) (まち) です. ★ nằm ở vị trí にぎやかな.' },
          { id: 'm610_m2_1_q2', question: 'わたしは　___ ___ _★_ ___　もらいました。', options: ['を', 'ともだち', 'に', 'とけい'], correctIndex: 0, explanation: 'わたしは (ともだち) (に) (とけい) (を) もらいました. ★ nằm ở vị trí とけい.' }
        ]
      },
      {
        id: 'p_610_m3_3',
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
        id: 'p_610_m4_3',
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
        id: 'p_610_m5_3',
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
        id: 'p_610_m6_3',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら レストラン メニュー</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong>・カレー：</strong> ６００えん</li><li><strong>・ラーメン：</strong> ５００えん</li><li><strong>・コーヒー：</strong> ２００えん</li></ul></div>',
        questions: [
          { id: 'm610_m6_1_q1', question: 'ラーメンと コーヒーを たのみます。いくらですか。', options: ['７００えん', '８００えん', '６００えん', '５００えん'], correctIndex: 0, explanation: 'Ramen 500 yên + Cà phê 200 yên = 700 yên.' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_6_10_4',
    title: 'Đề thi 4: Trạm Ôn Tập JLPT N5 (Bài 6 - 10)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Tự động từ/Tha động từ, Tính từ, Cho/Nhận.',
    passages: [
      {
        id: 'p_610_moji1_4',
        type: 'moji_mondai1',
        questions: [
          { id: 'm610_m1_1_4', question: '【手紙】を かきます。', options: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], correctIndex: 0, explanation: '手紙 (Thủ Chỉ) đọc là てがみ (Bức thư).' },
          { id: 'm610_m1_1_4b', question: 'あたらしい 【車】を かいました。', options: ['くろま', 'くるま', 'でんしゃ', 'じてんしゃ'], correctIndex: 1, explanation: '車 (Xa) đọc là くるま (Ô tô).' }
        ]
      },
      {
        id: 'p_610_moji2_4',
        type: 'moji_mondai2',
        questions: [
          { id: 'm610_m2_1_4', question: '【えいご】を べんきょうします。', options: ['英話', '英語', '英吾', '英悟'], correctIndex: 1, explanation: '英語 (Anh Ngữ) là Tiếng Anh.' },
          { id: 'm610_m2_1_4b', question: 'ともだちに 【プレゼント】を あげます。', options: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], correctIndex: 1, explanation: 'Present (Quà tặng) viết Katakana là プレゼント.' }
        ]
      },
      {
        id: 'p_610_moji3_4',
        type: 'moji_mondai3',
        questions: [
          { id: 'm610_m3_1_4', question: 'はさみで かみを 【　　　】。', options: ['きります', 'かします', 'かります', 'もらいます'], correctIndex: 0, explanation: 'Cắt (きります) giấy bằng kéo.' },
          { id: 'm610_m3_1_4b', question: 'この りんごは とても 【　　　】です。', options: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], correctIndex: 1, explanation: 'Táo (りんご) thì ngon (おいしい).' }
        ]
      },
      {
        id: 'p_610_moji4_4',
        type: 'moji_mondai4',
        questions: [
          { id: 'm610_m4_1_4', question: 'きのうは さむかったです。', options: ['きのうは あつかったです。', 'きのうは あたたかかったです。', 'きのうは すずしかったです。', 'きのうは いい てんきじゃありませんでした。'], correctIndex: 3, explanation: 'Trời lạnh (さむい) mang nét nghĩa thời tiết không thuận lợi trong các lựa chọn. (Tạm lấy nghĩa tương đồng: いい てんきじゃありませんでした - Thời tiết không tốt).' }
        ]
      },
      {
        id: 'p_610_m1_4',
        type: 'mondai1',
        questions: [
          { id: 'm610_m1_1_q1', question: 'スプーン（　　　）ごはんを たべます。', options: ['で', 'に', 'を', 'が'], correctIndex: 0, explanation: 'Chỉ phương tiện/công cụ -> trợ từ で.' },
          { id: 'm610_m1_1_q2', question: 'わたしは 木村さん（　　　）はなを あげました。', options: ['で', 'に', 'を', 'へ'], correctIndex: 1, explanation: 'Cho ai cái gì -> Danh từ người + に.' },
          { id: 'm610_m1_1_q3', question: '日本の カメラは （　　　）ですか。', options: ['どう', 'どんな', 'どれ', 'どの'], correctIndex: 0, explanation: 'Hỏi tính chất/cảm nhận (Thế nào?) -> どうですか.' },
          { id: 'm610_m1_1_q4', question: 'きのうの パーティーは （　　　）。', options: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], correctIndex: 2, explanation: 'Tính từ đuôi い ở quá khứ -> い => かったです.' }
        ]
      },
      {
        id: 'p_610_m2_4',
        type: 'mondai2',
        questions: [
          { id: 'm610_m2_1_q1', question: 'とうきょうは　___ ___ _★_ ___　まちです。', options: ['て', 'きれいで', 'にぎやかな', 'とても'], correctIndex: 3, explanation: 'とうきょうは (とても) (きれいで) (にぎやかな) (まち) です. ★ nằm ở vị trí にぎやかな.' },
          { id: 'm610_m2_1_q2', question: 'わたしは　___ ___ _★_ ___　もらいました。', options: ['を', 'ともだち', 'に', 'とけい'], correctIndex: 0, explanation: 'わたしは (ともだち) (に) (とけい) (を) もらいました. ★ nằm ở vị trí とけい.' }
        ]
      },
      {
        id: 'p_610_m3_4',
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
        id: 'p_610_m4_4',
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
        id: 'p_610_m5_4',
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
        id: 'p_610_m6_4',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら レストラン メニュー</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong>・カレー：</strong> ６００えん</li><li><strong>・ラーメン：</strong> ５００えん</li><li><strong>・コーヒー：</strong> ２００えん</li></ul></div>',
        questions: [
          { id: 'm610_m6_1_q1', question: 'ラーメンと コーヒーを たのみます。いくらですか。', options: ['７００えん', '８００えん', '６００えん', '５００えん'], correctIndex: 0, explanation: 'Ramen 500 yên + Cà phê 200 yên = 700 yên.' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_6_10_5',
    title: 'Đề thi 5: Trạm Ôn Tập JLPT N5 (Bài 6 - 10)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Tự động từ/Tha động từ, Tính từ, Cho/Nhận.',
    passages: [
      {
        id: 'p_610_moji1_5',
        type: 'moji_mondai1',
        questions: [
          { id: 'm610_m1_1_5', question: '【手紙】を かきます。', options: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], correctIndex: 0, explanation: '手紙 (Thủ Chỉ) đọc là てがみ (Bức thư).' },
          { id: 'm610_m1_1_5b', question: 'あたらしい 【車】を かいました。', options: ['くろま', 'くるま', 'でんしゃ', 'じてんしゃ'], correctIndex: 1, explanation: '車 (Xa) đọc là くるま (Ô tô).' }
        ]
      },
      {
        id: 'p_610_moji2_5',
        type: 'moji_mondai2',
        questions: [
          { id: 'm610_m2_1_5', question: '【えいご】を べんきょうします。', options: ['英話', '英語', '英吾', '英悟'], correctIndex: 1, explanation: '英語 (Anh Ngữ) là Tiếng Anh.' },
          { id: 'm610_m2_1_5b', question: 'ともだちに 【プレゼント】を あげます。', options: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], correctIndex: 1, explanation: 'Present (Quà tặng) viết Katakana là プレゼント.' }
        ]
      },
      {
        id: 'p_610_moji3_5',
        type: 'moji_mondai3',
        questions: [
          { id: 'm610_m3_1_5', question: 'はさみで かみを 【　　　】。', options: ['きります', 'かします', 'かります', 'もらいます'], correctIndex: 0, explanation: 'Cắt (きります) giấy bằng kéo.' },
          { id: 'm610_m3_1_5b', question: 'この りんごは とても 【　　　】です。', options: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], correctIndex: 1, explanation: 'Táo (りんご) thì ngon (おいしい).' }
        ]
      },
      {
        id: 'p_610_moji4_5',
        type: 'moji_mondai4',
        questions: [
          { id: 'm610_m4_1_5', question: 'きのうは さむかったです。', options: ['きのうは あつかったです。', 'きのうは あたたかかったです。', 'きのうは すずしかったです。', 'きのうは いい てんきじゃありませんでした。'], correctIndex: 3, explanation: 'Trời lạnh (さむい) mang nét nghĩa thời tiết không thuận lợi trong các lựa chọn. (Tạm lấy nghĩa tương đồng: いい てんきじゃありませんでした - Thời tiết không tốt).' }
        ]
      },
      {
        id: 'p_610_m1_5',
        type: 'mondai1',
        questions: [
          { id: 'm610_m1_1_q1', question: 'スプーン（　　　）ごはんを たべます。', options: ['で', 'に', 'を', 'が'], correctIndex: 0, explanation: 'Chỉ phương tiện/công cụ -> trợ từ で.' },
          { id: 'm610_m1_1_q2', question: 'わたしは 木村さん（　　　）はなを あげました。', options: ['で', 'に', 'を', 'へ'], correctIndex: 1, explanation: 'Cho ai cái gì -> Danh từ người + に.' },
          { id: 'm610_m1_1_q3', question: '日本の カメラは （　　　）ですか。', options: ['どう', 'どんな', 'どれ', 'どの'], correctIndex: 0, explanation: 'Hỏi tính chất/cảm nhận (Thế nào?) -> どうですか.' },
          { id: 'm610_m1_1_q4', question: 'きのうの パーティーは （　　　）。', options: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], correctIndex: 2, explanation: 'Tính từ đuôi い ở quá khứ -> い => かったです.' }
        ]
      },
      {
        id: 'p_610_m2_5',
        type: 'mondai2',
        questions: [
          { id: 'm610_m2_1_q1', question: 'とうきょうは　___ ___ _★_ ___　まちです。', options: ['て', 'きれいで', 'にぎやかな', 'とても'], correctIndex: 3, explanation: 'とうきょうは (とても) (きれいで) (にぎやかな) (まち) です. ★ nằm ở vị trí にぎやかな.' },
          { id: 'm610_m2_1_q2', question: 'わたしは　___ ___ _★_ ___　もらいました。', options: ['を', 'ともだち', 'に', 'とけい'], correctIndex: 0, explanation: 'わたしは (ともだち) (に) (とけい) (を) もらいました. ★ nằm ở vị trí とけい.' }
        ]
      },
      {
        id: 'p_610_m3_5',
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
        id: 'p_610_m4_5',
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
        id: 'p_610_m5_5',
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
        id: 'p_610_m6_5',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">さくら レストラン メニュー</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li><strong>・カレー：</strong> ６００えん</li><li><strong>・ラーメン：</strong> ５００えん</li><li><strong>・コーヒー：</strong> ２００えん</li></ul></div>',
        questions: [
          { id: 'm610_m6_1_q1', question: 'ラーメンと コーヒーを たのみます。いくらですか。', options: ['７００えん', '８００えん', '６００えん', '５００えん'], correctIndex: 0, explanation: 'Ramen 500 yên + Cà phê 200 yên = 700 yên.' }
        ]
      }
    ]
  }


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
          { id: 'm1115_m1_1_1b', question: 'ここは 【有名】な まちです。', options: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], correctIndex: 1, explanation: '有名 (Hữu Danh) đọc là ゆうめい (Nổi tiếng).' }
        ]
      },
      {
        id: 'p_1115_moji2_1',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1115_m2_1_1', question: '【カメラ】を かいたいです。', options: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], correctIndex: 1, explanation: 'Camera (máy ảnh) viết là カメラ.' },
          { id: 'm1115_m2_1_1b', question: 'あたらし 【くるま】が ほしいです。', options: ['車', '軍', '庫', '連'], correctIndex: 0, explanation: 'Xe ô tô viết là 車.' }
        ]
      },
      {
        id: 'p_1115_moji3_1',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1115_m3_1_1', question: 'りんごを みっつ 【　　　】ください。', options: ['で', 'を', 'に', 'と'], correctIndex: 1, explanation: 'Xin vui lòng cho tôi 3 quả táo: りんごを みっつ ください.' },
          { id: 'm1115_m3_1_1b', question: 'わたしは いま のどが 【　　　】。', options: ['かわきました', 'すきました', 'いたいです', 'わるいです'], correctIndex: 0, explanation: 'Khát nước: のどが かわきました.' }
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
          { id: 'm1115_m1_1_q3', question: 'A「ちょっと （　　　）ましょうか。」\nB「ええ、そうしましょう。」', options: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], correctIndex: 0, explanation: 'Cấu trúc Vましょうか (Rủ rê) -> Động từ bỏ ます + ましょうか -> やすみ.' },
          { id: 'm1115_m1_1_q4', question: 'りんご（　　　）みかんと どちらが すきですか。', options: ['と', 'や', 'に', 'で'], correctIndex: 0, explanation: 'So sánh lựa chọn: Danh từ 1 と Danh từ 2 と どちらが ~ -> と.' }
        ]
      },
      {
        id: 'p_1115_m2_1',
        type: 'mondai2',
        questions: [
          { id: 'm1115_m2_1_q1', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['えいが', 'に', 'を', 'みに'], correctIndex: 3, explanation: 'わたしは (わたしは (えいが) (を) (みに) (いきます) -> ★ rơi vào みに.' },
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


  ,
  {
    id: 'review_11_15_2',
    title: 'Đề thi 2: Trạm Ôn Tập JLPT N5 (Bài 11 - 15)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Đếm số lượng, Thể て (Te), Mong muốn (たい/ほしい).',
    passages: [
      {
        id: 'p_1115_moji1_2',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1115_m1_1_2b', question: 'きのう 【外国】へ いきました。', options: ['がいこく', 'がいごく', 'かいこく', 'かいごく'], correctIndex: 0, explanation: '外国 (Ngoại Quốc) đọc là がいこく (Nước ngoài).' },
          { id: 'm1115_m1_1_2b', question: 'ここは 【有名】な まちです。', options: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], correctIndex: 1, explanation: '有名 (Hữu Danh) đọc là ゆうめい (Nổi tiếng).' }
        ]
      },
      {
        id: 'p_1115_moji2_2',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1115_m2_1_2b', question: '【カメラ】を かいたいです。', options: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], correctIndex: 1, explanation: 'Camera (máy ảnh) viết là カメラ.' },
          { id: 'm1115_m2_1_2b', question: 'あたらし 【くるま】が ほしいです。', options: ['車', '軍', '庫', '連'], correctIndex: 0, explanation: 'Xe ô tô viết là 車.' }
        ]
      },
      {
        id: 'p_1115_moji3_2',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1115_m3_1_2b', question: 'りんごを みっつ 【　　　】ください。', options: ['で', 'を', 'に', 'と'], correctIndex: 1, explanation: 'Xin vui lòng cho tôi 3 quả táo: りんごを みっつ ください.' },
          { id: 'm1115_m3_1_2b', question: 'わたしは いま のどが 【　　　】。', options: ['かわきました', 'すきました', 'いたいです', 'わるいです'], correctIndex: 0, explanation: 'Khát nước: のどが かわきました.' }
        ]
      },
      {
        id: 'p_1115_moji4_2',
        type: 'moji_mondai4',
        questions: [
          { id: 'm1115_m4_1_2b', question: 'ここを まっすぐ いって ください。', options: ['ここは まっすぐです。', 'ここから まっすぐ いきましょう。', 'ここを まっすぐ いっても いいですか。', 'ここを まっすぐ いきなさい。'], correctIndex: 1, explanation: 'Hãy đi thẳng chỗ này = Chúng ta hãy đi thẳng từ đây (Tương đồng nghĩa sai khiến/rủ rê hành động).' }
        ]
      },
      {
        id: 'p_1115_m1_2',
        type: 'mondai1',
        questions: [
          { id: 'm1115_m1_1_q1', question: 'きょうは （　　　） たのしかったです。', options: ['とても', 'あまり', 'ぜんぜん', 'すこし'], correctIndex: 0, explanation: 'Câu khẳng định -> とても (Rất).' },
          { id: 'm1115_m1_1_q2', question: 'ここで しゃしんを （　　　）は いけません。', options: ['とる', 'とり', 'とって', 'とらない'], correctIndex: 2, explanation: 'Mẫu câu cấm đoán: Vて はいけません -> とって.' },
          { id: 'm1115_m1_1_q3', question: 'A「ちょっと （　　　）ましょうか。」\nB「ええ、そうしましょう。」', options: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], correctIndex: 0, explanation: 'Cấu trúc Vましょうか (Rủ rê) -> Động từ bỏ ます + ましょうか -> やすみ.' },
          { id: 'm1115_m1_1_q4', question: 'りんご（　　　）みかんと どちらが すきですか。', options: ['と', 'や', 'に', 'で'], correctIndex: 0, explanation: 'So sánh lựa chọn: Danh từ 1 と Danh từ 2 と どちらが ~ -> と.' }
        ]
      },
      {
        id: 'p_1115_m2_2',
        type: 'mondai2',
        questions: [
          { id: 'm1115_m2_1_q1', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['えいが', 'に', 'を', 'みに'], correctIndex: 3, explanation: 'わたしは (わたしは (えいが) (を) (みに) (いきます) -> ★ rơi vào みに.' },
          { id: 'm1115_m2_1_q2', question: 'この　___ ___ _★_ ___　いいですか。', options: ['を', 'ペン', 'つかっても', 'は'], correctIndex: 2, explanation: 'この (ペン) (は) (つかっても) (いいですか).' }
        ]
      },
      {
        id: 'p_1115_m3_2',
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
        id: 'p_1115_m4_2',
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
        id: 'p_1115_m5_2',
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
        id: 'p_1115_m6_2',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">としょかんの ルール</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>１．ここで ごはんを たべないで ください。</li><li>２．しゃしんを とっては いけません。</li><li>３．ほんは ２しゅうかんで かえして ください。</li></ul></div>',
        questions: [
          { id: 'm1115_m6_1_q1', question: 'としょかんで しても いいことは どれですか。', options: ['ごはんを たべること', 'しゃしんを とること', 'ほんを かりること', 'おおきい こえで はなすこと'], correctIndex: 2, explanation: 'Mượn sách (ほんを かりること) là việc được phép. Cấm ăn, cấm chụp ảnh.' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_11_15_3',
    title: 'Đề thi 3: Trạm Ôn Tập JLPT N5 (Bài 11 - 15)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Đếm số lượng, Thể て (Te), Mong muốn (たい/ほしい).',
    passages: [
      {
        id: 'p_1115_moji1_3',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1115_m1_1_3', question: 'きのう 【外国】へ いきました。', options: ['がいこく', 'がいごく', 'かいこく', 'かいごく'], correctIndex: 0, explanation: '外国 (Ngoại Quốc) đọc là がいこく (Nước ngoài).' },
          { id: 'm1115_m1_1_3b', question: 'ここは 【有名】な まちです。', options: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], correctIndex: 1, explanation: '有名 (Hữu Danh) đọc là ゆうめい (Nổi tiếng).' }
        ]
      },
      {
        id: 'p_1115_moji2_3',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1115_m2_1_3', question: '【カメラ】を かいたいです。', options: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], correctIndex: 1, explanation: 'Camera (máy ảnh) viết là カメラ.' },
          { id: 'm1115_m2_1_3b', question: 'あたらし 【くるま】が ほしいです。', options: ['車', '軍', '庫', '連'], correctIndex: 0, explanation: 'Xe ô tô viết là 車.' }
        ]
      },
      {
        id: 'p_1115_moji3_3',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1115_m3_1_3', question: 'りんごを みっつ 【　　　】ください。', options: ['で', 'を', 'に', 'と'], correctIndex: 1, explanation: 'Xin vui lòng cho tôi 3 quả táo: りんごを みっつ ください.' },
          { id: 'm1115_m3_1_3b', question: 'わたしは いま のどが 【　　　】。', options: ['かわきました', 'すきました', 'いたいです', 'わるいです'], correctIndex: 0, explanation: 'Khát nước: のどが かわきました.' }
        ]
      },
      {
        id: 'p_1115_moji4_3',
        type: 'moji_mondai4',
        questions: [
          { id: 'm1115_m4_1_3', question: 'ここを まっすぐ いって ください。', options: ['ここは まっすぐです。', 'ここから まっすぐ いきましょう。', 'ここを まっすぐ いっても いいですか。', 'ここを まっすぐ いきなさい。'], correctIndex: 1, explanation: 'Hãy đi thẳng chỗ này = Chúng ta hãy đi thẳng từ đây (Tương đồng nghĩa sai khiến/rủ rê hành động).' }
        ]
      },
      {
        id: 'p_1115_m1_3',
        type: 'mondai1',
        questions: [
          { id: 'm1115_m1_1_q1', question: 'きょうは （　　　） たのしかったです。', options: ['とても', 'あまり', 'ぜんぜん', 'すこし'], correctIndex: 0, explanation: 'Câu khẳng định -> とても (Rất).' },
          { id: 'm1115_m1_1_q2', question: 'ここで しゃしんを （　　　）は いけません。', options: ['とる', 'とり', 'とって', 'とらない'], correctIndex: 2, explanation: 'Mẫu câu cấm đoán: Vて はいけません -> とって.' },
          { id: 'm1115_m1_1_q3', question: 'A「ちょっと （　　　）ましょうか。」\nB「ええ、そうしましょう。」', options: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], correctIndex: 0, explanation: 'Cấu trúc Vましょうか (Rủ rê) -> Động từ bỏ ます + ましょうか -> やすみ.' },
          { id: 'm1115_m1_1_q4', question: 'りんご（　　　）みかんと どちらが すきですか。', options: ['と', 'や', 'に', 'で'], correctIndex: 0, explanation: 'So sánh lựa chọn: Danh từ 1 と Danh từ 2 と どちらが ~ -> と.' }
        ]
      },
      {
        id: 'p_1115_m2_3',
        type: 'mondai2',
        questions: [
          { id: 'm1115_m2_1_q1', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['えいが', 'に', 'を', 'みに'], correctIndex: 3, explanation: 'わたしは (わたしは (えいが) (を) (みに) (いきます) -> ★ rơi vào みに.' },
          { id: 'm1115_m2_1_q2', question: 'この　___ ___ _★_ ___　いいですか。', options: ['を', 'ペン', 'つかっても', 'は'], correctIndex: 2, explanation: 'この (ペン) (は) (つかっても) (いいですか).' }
        ]
      },
      {
        id: 'p_1115_m3_3',
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
        id: 'p_1115_m4_3',
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
        id: 'p_1115_m5_3',
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
        id: 'p_1115_m6_3',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">としょかんの ルール</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>１．ここで ごはんを たべないで ください。</li><li>２．しゃしんを とっては いけません。</li><li>３．ほんは ２しゅうかんで かえして ください。</li></ul></div>',
        questions: [
          { id: 'm1115_m6_1_q1', question: 'としょかんで しても いいことは どれですか。', options: ['ごはんを たべること', 'しゃしんを とること', 'ほんを かりること', 'おおきい こえで はなすこと'], correctIndex: 2, explanation: 'Mượn sách (ほんを かりること) là việc được phép. Cấm ăn, cấm chụp ảnh.' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_11_15_4',
    title: 'Đề thi 4: Trạm Ôn Tập JLPT N5 (Bài 11 - 15)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Đếm số lượng, Thể て (Te), Mong muốn (たい/ほしい).',
    passages: [
      {
        id: 'p_1115_moji1_4',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1115_m1_1_4', question: 'きのう 【外国】へ いきました。', options: ['がいこく', 'がいごく', 'かいこく', 'かいごく'], correctIndex: 0, explanation: '外国 (Ngoại Quốc) đọc là がいこく (Nước ngoài).' },
          { id: 'm1115_m1_1_4b', question: 'ここは 【有名】な まちです。', options: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], correctIndex: 1, explanation: '有名 (Hữu Danh) đọc là ゆうめい (Nổi tiếng).' }
        ]
      },
      {
        id: 'p_1115_moji2_4',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1115_m2_1_4', question: '【カメラ】を かいたいです。', options: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], correctIndex: 1, explanation: 'Camera (máy ảnh) viết là カメラ.' },
          { id: 'm1115_m2_1_4b', question: 'あたらし 【くるま】が ほしいです。', options: ['車', '軍', '庫', '連'], correctIndex: 0, explanation: 'Xe ô tô viết là 車.' }
        ]
      },
      {
        id: 'p_1115_moji3_4',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1115_m3_1_4', question: 'りんごを みっつ 【　　　】ください。', options: ['で', 'を', 'に', 'と'], correctIndex: 1, explanation: 'Xin vui lòng cho tôi 3 quả táo: りんごを みっつ ください.' },
          { id: 'm1115_m3_1_4b', question: 'わたしは いま のどが 【　　　】。', options: ['かわきました', 'すきました', 'いたいです', 'わるいです'], correctIndex: 0, explanation: 'Khát nước: のどが かわきました.' }
        ]
      },
      {
        id: 'p_1115_moji4_4',
        type: 'moji_mondai4',
        questions: [
          { id: 'm1115_m4_1_4', question: 'ここを まっすぐ いって ください。', options: ['ここは まっすぐです。', 'ここから まっすぐ いきましょう。', 'ここを まっすぐ いっても いいですか。', 'ここを まっすぐ いきなさい。'], correctIndex: 1, explanation: 'Hãy đi thẳng chỗ này = Chúng ta hãy đi thẳng từ đây (Tương đồng nghĩa sai khiến/rủ rê hành động).' }
        ]
      },
      {
        id: 'p_1115_m1_4',
        type: 'mondai1',
        questions: [
          { id: 'm1115_m1_1_q1', question: 'きょうは （　　　） たのしかったです。', options: ['とても', 'あまり', 'ぜんぜん', 'すこし'], correctIndex: 0, explanation: 'Câu khẳng định -> とても (Rất).' },
          { id: 'm1115_m1_1_q2', question: 'ここで しゃしんを （　　　）は いけません。', options: ['とる', 'とり', 'とって', 'とらない'], correctIndex: 2, explanation: 'Mẫu câu cấm đoán: Vて はいけません -> とって.' },
          { id: 'm1115_m1_1_q3', question: 'A「ちょっと （　　　）ましょうか。」\nB「ええ、そうしましょう。」', options: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], correctIndex: 0, explanation: 'Cấu trúc Vましょうか (Rủ rê) -> Động từ bỏ ます + ましょうか -> やすみ.' },
          { id: 'm1115_m1_1_q4', question: 'りんご（　　　）みかんと どちらが すきですか。', options: ['と', 'や', 'に', 'で'], correctIndex: 0, explanation: 'So sánh lựa chọn: Danh từ 1 と Danh từ 2 と どちらが ~ -> と.' }
        ]
      },
      {
        id: 'p_1115_m2_4',
        type: 'mondai2',
        questions: [
          { id: 'm1115_m2_1_q1', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['えいが', 'に', 'を', 'みに'], correctIndex: 3, explanation: 'わたしは (わたしは (えいが) (を) (みに) (いきます) -> ★ rơi vào みに.' },
          { id: 'm1115_m2_1_q2', question: 'この　___ ___ _★_ ___　いいですか。', options: ['を', 'ペン', 'つかっても', 'は'], correctIndex: 2, explanation: 'この (ペン) (は) (つかっても) (いいですか).' }
        ]
      },
      {
        id: 'p_1115_m3_4',
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
        id: 'p_1115_m4_4',
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
        id: 'p_1115_m5_4',
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
        id: 'p_1115_m6_4',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">としょかんの ルール</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>１．ここで ごはんを たべないで ください。</li><li>２．しゃしんを とっては いけません。</li><li>３．ほんは ２しゅうかんで かえして ください。</li></ul></div>',
        questions: [
          { id: 'm1115_m6_1_q1', question: 'としょかんで しても いいことは どれですか。', options: ['ごはんを たべること', 'しゃしんを とること', 'ほんを かりること', 'おおきい こえで はなすこと'], correctIndex: 2, explanation: 'Mượn sách (ほんを かりること) là việc được phép. Cấm ăn, cấm chụp ảnh.' }
        ]
      }
    ]
  }


  ,
  {
    id: 'review_11_15_5',
    title: 'Đề thi 5: Trạm Ôn Tập JLPT N5 (Bài 11 - 15)',
    description: 'Bộ đề ôn tập số 1. Trọng tâm: Đếm số lượng, Thể て (Te), Mong muốn (たい/ほしい).',
    passages: [
      {
        id: 'p_1115_moji1_5',
        type: 'moji_mondai1',
        questions: [
          { id: 'm1115_m1_1_5', question: 'きのう 【外国】へ いきました。', options: ['がいこく', 'がいごく', 'かいこく', 'かいごく'], correctIndex: 0, explanation: '外国 (Ngoại Quốc) đọc là がいこく (Nước ngoài).' },
          { id: 'm1115_m1_1_5b', question: 'ここは 【有名】な まちです。', options: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], correctIndex: 1, explanation: '有名 (Hữu Danh) đọc là ゆうめい (Nổi tiếng).' }
        ]
      },
      {
        id: 'p_1115_moji2_5',
        type: 'moji_mondai2',
        questions: [
          { id: 'm1115_m2_1_5', question: '【カメラ】を かいたいです。', options: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], correctIndex: 1, explanation: 'Camera (máy ảnh) viết là カメラ.' },
          { id: 'm1115_m2_1_5b', question: 'あたらし 【くるま】が ほしいです。', options: ['車', '軍', '庫', '連'], correctIndex: 0, explanation: 'Xe ô tô viết là 車.' }
        ]
      },
      {
        id: 'p_1115_moji3_5',
        type: 'moji_mondai3',
        questions: [
          { id: 'm1115_m3_1_5', question: 'りんごを みっつ 【　　　】ください。', options: ['で', 'を', 'に', 'と'], correctIndex: 1, explanation: 'Xin vui lòng cho tôi 3 quả táo: りんごを みっつ ください.' },
          { id: 'm1115_m3_1_5b', question: 'わたしは いま のどが 【　　　】。', options: ['かわきました', 'すきました', 'いたいです', 'わるいです'], correctIndex: 0, explanation: 'Khát nước: のどが かわきました.' }
        ]
      },
      {
        id: 'p_1115_moji4_5',
        type: 'moji_mondai4',
        questions: [
          { id: 'm1115_m4_1_5', question: 'ここを まっすぐ いって ください。', options: ['ここは まっすぐです。', 'ここから まっすぐ いきましょう。', 'ここを まっすぐ いっても いいですか。', 'ここを まっすぐ いきなさい。'], correctIndex: 1, explanation: 'Hãy đi thẳng chỗ này = Chúng ta hãy đi thẳng từ đây (Tương đồng nghĩa sai khiến/rủ rê hành động).' }
        ]
      },
      {
        id: 'p_1115_m1_5',
        type: 'mondai1',
        questions: [
          { id: 'm1115_m1_1_q1', question: 'きょうは （　　　） たのしかったです。', options: ['とても', 'あまり', 'ぜんぜん', 'すこし'], correctIndex: 0, explanation: 'Câu khẳng định -> とても (Rất).' },
          { id: 'm1115_m1_1_q2', question: 'ここで しゃしんを （　　　）は いけません。', options: ['とる', 'とり', 'とって', 'とらない'], correctIndex: 2, explanation: 'Mẫu câu cấm đoán: Vて はいけません -> とって.' },
          { id: 'm1115_m1_1_q3', question: 'A「ちょっと （　　　）ましょうか。」\nB「ええ、そうしましょう。」', options: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], correctIndex: 0, explanation: 'Cấu trúc Vましょうか (Rủ rê) -> Động từ bỏ ます + ましょうか -> やすみ.' },
          { id: 'm1115_m1_1_q4', question: 'りんご（　　　）みかんと どちらが すきですか。', options: ['と', 'や', 'に', 'で'], correctIndex: 0, explanation: 'So sánh lựa chọn: Danh từ 1 と Danh từ 2 と どちらが ~ -> と.' }
        ]
      },
      {
        id: 'p_1115_m2_5',
        type: 'mondai2',
        questions: [
          { id: 'm1115_m2_1_q1', question: 'わたしは　___ ___ _★_ ___　いきます。', options: ['えいが', 'に', 'を', 'みに'], correctIndex: 3, explanation: 'わたしは (わたしは (えいが) (を) (みに) (いきます) -> ★ rơi vào みに.' },
          { id: 'm1115_m2_1_q2', question: 'この　___ ___ _★_ ___　いいですか。', options: ['を', 'ペン', 'つかっても', 'は'], correctIndex: 2, explanation: 'この (ペン) (は) (つかっても) (いいですか).' }
        ]
      },
      {
        id: 'p_1115_m3_5',
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
        id: 'p_1115_m4_5',
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
        id: 'p_1115_m5_5',
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
        id: 'p_1115_m6_5',
        type: 'mondai6',
        htmlContent: '<div style="border: 2px solid var(--text); padding: 16px; border-radius: 8px; max-width: 400px; margin: 0 auto; background: var(--bg-card);"><h3 style="text-align: center; border-bottom: 2px dashed var(--border); padding-bottom: 8px; margin-top: 0;">としょかんの ルール</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.8;"><li>１．ここで ごはんを たべないで ください。</li><li>２．しゃしんを とっては いけません。</li><li>３．ほんは ２しゅうかんで かえして ください。</li></ul></div>',
        questions: [
          { id: 'm1115_m6_1_q1', question: 'としょかんで しても いいことは どれですか。', options: ['ごはんを たべること', 'しゃしんを とること', 'ほんを かりること', 'おおきい こえで はなすこと'], correctIndex: 2, explanation: 'Mượn sách (ほんを かりること) là việc được phép. Cấm ăn, cấm chụp ảnh.' }
        ]
      }
    ]
  }

];