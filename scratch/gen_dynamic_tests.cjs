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
    { 
      q: 'わたしの 【国】は ベトナムです。', 
      o: ['くに', 'まち', 'うち', 'いえ'], 
      c: 0, 
      exp: 'Dịch nghĩa: Đất nước của tôi là Việt Nam.\n- Chữ Hán 【国】 (Quốc) có cách đọc âm ôn/kun là くに (kuni) nghĩa là đất nước, quốc gia.\n- Phân tích các đáp án khác: まち (machi: thành thị, con phố), うち (uchi: nhà/gia đình mình), いえ (ie: nhà - ngôi nhà vật lý).' 
    },
    { 
      q: '【先月】、日本へ きました。', 
      o: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], 
      c: 2, 
      exp: 'Dịch nghĩa: Tháng trước tôi đã đến Nhật Bản.\n- Chữ Hán 【先月】 (Tiên Nguyệt) có cách đọc tương ứng là せんげつ (sengetsu) nghĩa là tháng trước.\n- Phân tích các đáp án khác: らいげつ (raigetsu: tháng sau), こんげつ (kongetsu: tháng này), まいつき (maitsuki: mỗi tháng).' 
    },
    { 
      q: '【毎日】 にほんごを べんきょうします。', 
      o: ['まいにち', 'まいしゅう', 'まいげつ', 'まいとし'], 
      c: 0, 
      exp: 'Dịch nghĩa: Hàng ngày tôi học tiếng Nhật.\n- Chữ Hán 【毎日】 (Mỗi Nhật) có cách đọc tương ứng là まいにち (mainichi) nghĩa là mỗi ngày, hàng ngày.\n- Phân tích các đáp án khác: まいしゅう (maishuu: mỗi tuần), まいげつ (maigetsu: mỗi tháng), まいとし (maitoshi: mỗi năm).' 
    },
    { 
      q: 'きょうは 【水曜日】です。', 
      o: ['かようび', 'すいようび', 'もくようび', 'きんようび'], 
      c: 1, 
      exp: 'Dịch nghĩa: Hôm nay là thứ Tư.\n- Chữ Hán 【水曜日】 (Thủy Diệu Nhật) có cách đọc tương ứng là すいようび (suiyoubi) nghĩa là thứ Tư.\n- Phân tích các đáp án khác: かようび (kayoubi: thứ Ba), もくようび (mokuyoubi: thứ Năm), kiんようび (kinyoubi: thứ Sáu).' 
    }
  ],
  moji2: [
    { 
      q: '【でんしゃ】で かいしゃへ いきます。', 
      o: ['電車', '電気', '電話', '電波'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đi làm bằng tàu điện.\n- 【でんしゃ】 (tàu điện) viết bằng chữ Kanji là 電車 (Điện Xa) mang ý nghĩa xe chạy bằng điện.\n- Phân tích các đáp án khác: 電気 (Điện Khí: đồ điện, điện), 電話 (Điện Thoại: điện thoại), 電波 (Điện Ba: sóng điện).' 
    },
    { 
      q: 'あの 【レストラン】は おいしいです。', 
      o: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], 
      c: 1, 
      exp: 'Dịch nghĩa: Nhà hàng kia ngon lắm.\n- 【レストラン】 (nhà hàng - bắt nguồn từ tiếng Anh: Restaurant) được viết bằng chữ Katakana là レストラン.\n- Chú ý các nét viết tương tự dễ nhầm: chữ ツ (tsu) khác với シ (shi), và chữ ン (n) khác với ソ (so).' 
    },
    { 
      q: 'ともだちと 【...】へ いきます。', 
      o: ['デバート', 'テパート', 'デパート', 'デパード'], 
      c: 2, 
      exp: 'Dịch nghĩa: Tôi đi đến trung tâm thương mại cùng bạn bè.\n- 【デパート】 (cửa hàng bách hóa - bắt nguồn từ tiếng Anh: Department store) viết chuẩn bằng Katakana là デパート.\n- Chú ý phân biệt phụ âm đục: "de" là デ (có dấu tenten) chứ không phải テ (te) hay ペ (pe).' 
    },
    { 
      q: '【くるま】を かいました。', 
      o: ['車', '東', '重', '庫'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đã mua ô tô.\n- 【くるま】 (xe hơi, ô tô) viết bằng chữ Kanji là 車 (Xa).\n- Các đáp án còn lại là các chữ Kanji có nét tương đồng dễ gây nhầm lẫn: 東 (Đông: phía đông), 重 (Trọng: nặng), 庫 (Khố: nhà kho).' 
    }
  ],
  moji3: [
    { 
      q: 'あしたは やすみです。うちで ゆっくり 【　　　】。', 
      o: ['おきます', 'はたらきます', 'やすみます', 'おわります'], 
      c: 2, 
      exp: 'Dịch nghĩa: Ngày mai là ngày nghỉ. Tôi sẽ nghỉ ngơi thư thả ở nhà.\n- Cụm từ phổ biến: ゆっくり 休みます (nghỉ ngơi thong thả/thư thả).\n- Phù hợp hoàn hảo với vế trước: "Ngày mai là ngày nghỉ (やすみ)".\n- Các đáp án khác không phù hợp logic: おきます (thức dậy), はたらきます (làm việc), おわります (kết thúc).' 
    },
    { 
      q: 'きのう １０じに 【　　　】。', 
      o: ['おきました', 'ねました', 'きました', 'いきました'], 
      c: 1, 
      exp: 'Dịch nghĩa: Hôm qua tôi đã đi ngủ lúc 10 giờ.\n- Động từ ねました (đã ngủ, từ gốc là ねます) phù hợp nhất với mốc thời gian tối 10 giờ.\n- Trợ từ に đi kèm mốc thời gian cụ thể (10じ).\n- Các đáp án khác không hợp lý: おきました (đã thức dậy), きました (đã đến), いきました (đã đi).' 
    },
    { 
      q: 'えんぴつで てがみを 【　　　】。', 
      o: ['よみます', 'かきます', 'ききます', 'みます'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi viết thư bằng bút chì.\n- Cụm từ: てがみを かきます (viết thư).\n- Trợ từ で ở đây chỉ phương tiện, công cụ (bằng bút chì).\n- Các đáp án khác không hợp nghĩa: よみます (đọc thư - không dùng với bằng bút chì), ききます (nghe), みます (xem).' 
    },
    { 
      q: 'スーパーで くだものを 【　　　】。', 
      o: ['かいます', 'あいます', 'すいます', 'のみます'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi mua trái cây ở siêu thị.\n- Cụm từ: くだものを かいます (mua hoa quả/trái cây).\n- Trợ từ で chỉ địa điểm diễn ra hành động (tại siêu thị).\n- Các đáp án khác: あいます (gặp gỡ), すいます (hút thuốc), のみます (uống).' 
    }
  ],
  bunpou1: [
    { 
      q: 'わたしは えんぴつ（　　　）てがみを かきます。', 
      o: ['に', 'で', 'を', 'が'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi viết thư bằng bút chì.\n- Trợ từ で biểu thị phương tiện, công cụ hoặc cách thức thực hiện hành động (bằng bút chì).\n- Các trợ từ khác không phù hợp: に (chỉ mốc thời gian/đích đến), を (chỉ đối tượng tác động trực tiếp của hành động), が (chỉ chủ ngữ/đối tượng chỉ khả năng).' 
    },
    { 
      q: 'あした どこ（　　　）いきません。', 
      o: ['へも', 'をも', 'がも', 'đến/đo/đây'], 
      c: 0, 
      exp: 'Dịch nghĩa: Ngày mai tôi không đi đâu cả.\n- Mẫu câu phủ định hoàn toàn: Từ để hỏi chỉ nơi chốn + へも + động từ phủ định (không đi bất cứ đâu).\n- Cấu trúc chuẩn xác: どこへも いきません.' 
    },
    { 
      q: 'きょうは ５じ（　　　）はたらきます。', 
      o: ['まで', 'から', 'に', 'で'], 
      c: 0, 
      exp: 'Dịch nghĩa: Hôm nay tôi làm việc đến 5 giờ.\n- Trợ từ まで (đến) dùng để chỉ giới hạn thời gian kết thúc của một hành động liên tục (làm việc đến 5 giờ).\n- Các đáp án khác: から (từ - chỉ điểm bắt đầu), に (vào lúc - hành động tức thời), で (tại - nơi diễn ra hành động).' 
    },
    { 
      q: 'A「それは （　　　）ですか。」 B「コンピューターの ほん です。」', 
      o: ['なんの ほん', 'だれの ほん', 'đâu/đây/đó', 'なん'], 
      c: 3, 
      exp: 'Dịch nghĩa: A: "Đó là cái gì thế?" - B: "Là cuốn sách về máy tính."\n- Từ để hỏi cho vật thể chưa xác định là なん (Cái gì?). Câu hỏi đầy đủ: それは なんですか (Đó là cái gì?).\n- Các đáp án khác không phù hợp ngữ pháp hoặc ngữ cảnh: なんの ほん (Sách gì - thiếu vị ngữ ですか), だれの ほん (Sách của ai).' 
    }
  ],
  bunpou2: [
    { 
      q: 'ここは　___ ___ _★_ ___　es。', 
      o: ['の', 'だいがく', 'とうきょう', 'しょくどう'], 
      c: 0, 
      exp: 'Dịch nghĩa: Đây là nhà ăn của trường Đại học Tokyo.\n- Phân tích trật tự từ: ここは (Đây là) + とうきょう (3) + だいがく (2) + の (1) + しょくどう (4) + です.\n- Trợ từ の dùng để liên kết hai danh từ, danh từ trước (Tokyo Daigaku) bổ nghĩa cho danh từ sau (Shokudou).\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với trợ từ の (1).' 
    },
    { 
      q: 'わたしは　___ ___ _★_ ___　いきます。', 
      o: ['ともだち', 'へ', 'と', 'ぎんこう'], 
      c: 3, 
      exp: 'Dịch nghĩa: Tôi đi ngân hàng cùng với bạn bè.\n- Phân tích trật tự từ: わたしは + ともだち (1) + と (3) + ぎんこう (4) + へ (2) + いきます.\n- Trợ từ と ở đây mang nghĩa là "cùng với". Trợ từ へ chỉ hướng di chuyển đến địa điểm (Ngân hàng).\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với danh từ ぎんこう (4).' 
    }
  ],
  dokkai1: [
    { 
      text: ['きのうは わたしの たnじょうびでした。', 'わたしは ともだち（　１　）レストランへ いきました。', 'レストランで おいしい ごはんを たべました。', 'それから、えいがを（　２　）。とても たのしかったです。'],
      qs: [
        { 
          q: '（　１　）に入れるものはdđầu/nơi/nào?', 
          o: ['と', 'に', 'で', 'へ'], 
          c: 0, 
          exp: 'Dịch nghĩa đoạn: "Hôm qua là sinh nhật của tôi. Tôi đã đi đến nhà hàng cùng với bạn."\n- Trợ từ と dùng để liên kết đối tượng cùng thực hiện hành động (cùng với ai đó) -> ともだちと (cùng với bạn).' 
        },
        { 
          q: '（　２　）に入れるものはdđầu/nơi/nào?', 
          o: ['みます', 'みました', 'みますか', 'みません'], 
          c: 1, 
          exp: 'Dịch nghĩa đoạn: "Sau đó, tôi đã xem phim. Rất là vui."\n- Vì mốc thời gian là "Hôm qua (きのう)", toàn bộ câu chuyện đang kể lại trong quá khứ nên động từ xem phim phải chia ở thể quá khứ khẳng định -> みました.' 
        }
      ]
    }
  ]
};

const pool_6_10 = {
  moji1: [
    { 
      q: '【手紙】を かきます。', 
      o: ['てがみ', 'でがみ', 'てかみ', 'でかみ'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi viết thư.\n- Chữ Hán 【手紙】 (Thủ Chỉ) có cách đọc tương ứng là てがみ (tegami) nghĩa là bức thư.\n- Chú ý âm đục của từ: "ga" chứ không phải "ka", và "te" chứ không phải "de".' 
    },
    { 
      q: '【えいご】を べんきょうします。', 
      o: ['英話', '英語', '英吾', '英悟'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi học tiếng Anh.\n- 【えいご】 (tiếng Anh) viết bằng chữ Hán là 英語 (Anh Ngữ).\n- Phân tích các đáp án khác: 英話 (Anh Thoại - không tồn tại), 英吾, 英悟 là các từ đồng âm hoặc ghép sai chữ.' 
    },
    { 
      q: '【新しい】 くるまです。', 
      o: ['あたらし', 'あたらしい', 'あだらしい', 'あらたしい'], 
      c: 1, 
      exp: 'Dịch nghĩa: Đó là chiếc xe hơi mới.\n- Tính từ 【新しい】 (Tân) có cách đọc Hiragana đầy đủ là あたらしい (atarashii) nghĩa là mới.\n- Chú ý cách viết okurigana (phần đuôi chữ đi kèm sau chữ Hán) là しい.' 
    },
    { 
      q: '【古い】 じてんしゃです。', 
      o: ['ふるい', 'ぶるい', 'ひろい', 'ふろい'], 
      c: 0, 
      exp: 'Dịch nghĩa: Đó là chiếc xe đạp cũ.\n- Tính từ 【古い】 (Cổ) có cách đọc tương ứng là ふるい (furui) nghĩa là cũ.\n- Phân tích các đáp án khác: ぶるい (phát âm sai), ひろい (rộng rãi), ふろい (phát âm sai).' 
    }
  ],
  moji2: [
    { 
      q: '【プレゼント】を あげます。', 
      o: ['プレセント', 'プレゼント', 'フレゼント', 'プレザント'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi tặng quà.\n- 【プレゼント】 (quà tặng - bắt nguồn từ tiếng Anh: Present) viết bằng Katakana chuẩn xác là プレゼント.\n- Chú ý phân biệt chữ ゼン (zen) có dấu tenten khác với セン (sen).' 
    },
    { 
      q: '【コーヒー】を のみます。', 
      o: ['コーヒー', 'コヒー', 'コーヒ', 'コヒ'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi uống cà phê.\n- 【コーヒー】 (Cà phê - bắt nguồn từ tiếng Anh: Coffee) viết chuẩn Katakana bắt buộc phải có hai trường âm (dấu gạch ngang biểu thị kéo dài âm tiết): コーヒー.\n- Các đáp án khác sai quy tắc trường âm.' 
    },
    { 
      q: '【シャツ】を かいました。', 
      o: ['シヤツ', 'シャツ', 'サツ', 'シヤッ'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi đã mua áo sơ mi.\n- 【シャツ】 (áo sơ mi - bắt nguồn từ tiếng Anh: Shirt) viết bằng Katakana phải có chữ ャ (ya nhỏ) để tạo thành âm ghép "sha": シャツ.\n- Phân tích đáp án khác: シヤツ (chữ ya lớn - đọc là shi-ya-tsu, sai).' 
    },
    { 
      q: '【パン】を たべます。', 
      o: ['ハン', 'バン', 'パン', 'ホン'], 
      c: 2, 
      exp: 'Dịch nghĩa: Tôi ăn bánh mì.\n- 【パン】 (bánh mì - mượn từ tiếng Bồ Đào Nha: Pão) viết bằng Katakana là パン (chữ ハ có dấu tròn maru).\n- Phân tích các đáp án khác: ハン (han), バン (ban), ホン (hon).' 
    }
  ],
  moji3: [
    { 
      q: 'はさみで かみを 【　　　】。', 
      o: ['きります', 'かします', 'かりまs', 'もらいます'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi cắt giấy bằng kéo.\n- Động từ きります (kiri-masu: cắt) đi kèm công cụ はさみ (kéo) và đối tượng かみ (giấy) là phù hợp nhất.\n- Phân tích các động từ khác: かします (cho mượn), かります (mượn), もらいます (nhận).' 
    },
    { 
      q: 'この りんごは とても 【　　　】です。', 
      o: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], 
      c: 1, 
      exp: 'Dịch nghĩa: Quả táo này rất ngon.\n- Tính từ おいしい (oishii: ngon) phù hợp nhất để miêu tả đồ ăn (táo).\n- Phân tích các tính từ khác: つめたい (lạnh - dùng cho cảm giác tiếp xúc), おもしろい (thú vị - dùng cho sách, phim), いそgがしい (bận rộn - dùng cho con người).' 
    },
    { 
      q: 'せんせいから ほんを 【　　　】。', 
      o: ['あげました', 'もらいました', 'かしました', 'おしえました'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi đã nhận được sách từ thầy cô giáo.\n- Cấu trúc: [Người] から/に [Vật] を もらいます (Nhận cái gì từ ai đó). Do có trợ từ から (từ) chỉ nguồn gốc, động từ もらいました (đã nhận) là chính xác.\n- Các động từ còn lại không khớp trợ từ: あげました (cho/tặng), かしました (cho mượn), おしえました (dạy).' 
    },
    { 
      q: '日本の カメラは 【　　　】ですか。', 
      o: ['どう', 'どんな', 'どれ', 'どの'], 
      c: 0, 
      exp: 'Dịch nghĩa: Máy ảnh của Nhật Bản thế nào?\n- Cụm hỏi ý kiến, cảm tưởng: どうですか (Như thế nào?).\n- Phân tích các đáp án khác: どんな (như thế nào - phải đứng trước danh từ), どれ (cái nào - dùng để chọn lựa trong nhóm), どの (cái nào - phải đứng trước danh từ).' 
    }
  ],
  bunpou1: [
    { 
      q: 'スプーン（　　　）ごはんを たべます。', 
      o: ['で', 'に', 'を', 'gが'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi ăn cơm bằng thìa.\n- Trợ từ で được dùng để chỉ phương tiện, công cụ hoặc nguyên liệu thực hiện hành động (bằng thìa/muỗng).\n- Các đáp án khác không phù hợp: に (chỉ thời gian/nơi chốn hướng tới), を (chỉ đối tượng trực tiếp), が (chỉ chủ ngữ).' 
    },
    { 
      q: 'わたしは 木村さん（　　　）はなを あげました。', 
      o: ['で', 'に', 'を', 'へ'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi đã tặng hoa cho chị Kimura.\n- Cấu trúc: [Người cho] は [Người nhận] に [Vật] を あげます. Trợ từ に chỉ đối tượng gián tiếp tiếp nhận hành động (cho/tặng ai đó).' 
    },
    { 
      q: 'きのうの パーティーは （　　　）。', 
      o: ['たのしいです', 'たのしかった', 'たのしかったです', 'たのしいでした'], 
      c: 2, 
      exp: 'Dịch nghĩa: Bữa tiệc hôm qua đã rất vui.\n- Thời gian là "Hôm qua (きのう)", nên câu phải chia ở quá khứ lịch sự.\n- Quy tắc chia quá khứ lịch sự của tính từ đuôi い (たのしい): Bỏ い thêm かったです -> たのしかったです.\n- Chú ý: Tiếng Nhật không dùng "đuôi い + でした" (như たのしいでした, đây là lỗi cực kỳ phổ biến).' 
    },
    { 
      q: 'この へ야는 （　　　）ありません。', 
      o: ['しずか', 'しずかに', 'しずかじゃ', 'しずかくて'], 
      c: 2, 
      exp: 'Dịch nghĩa: Căn phòng này không yên tĩnh.\n- Tính từ しずか (yên tĩnh) là tính từ đuôi な.\n- Quy tắc phủ định tính từ đuôi な: [Danh từ/Tính từ đuôi な] + じゃ/では ありません -> しずかじゃ ありません.\n- Phân tích đáp án khác: しずかくて (dạng nối của tính từ đuôi い, sai).' 
    }
  ],
  bunpou2: [
    { 
      q: 'とうきょうは　___ ___ _★_ ___　まちです。', 
      o: ['て', 'きれいで', 'にぎやかな', 'とても'], 
      c: 3, 
      exp: 'Dịch nghĩa: Tokyo là một thành phố rất đẹp và nhộn nhịp.\n- Phân tích trật tự từ: とうきょうは + とても (4) + きれいで (2) + にぎやかな (3) + まちです.\n- Quy tắc nối tính từ đuôi な (きれい): Chuyển sang thể て thành きれいで để nối tiếp với tính từ tiếp theo (にぎやかな).\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với tính từ にぎやかな (3).' 
    },
    { 
      q: 'わたしは　___ ___ _★_ ___　もらいました。', 
      o: ['を', 'tともだち', 'に', 'とけい'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đã nhận chiếc đồng hồ từ bạn bè.\n- Phân tích trật tự từ: わたしは + とmだち (2) + に (3) + とけい (4) + を (1) + もらいました.\n- Cấu trúc: [Người nhận] は [Người cho] に [Vật] を もらいます (Nhận cái gì từ ai).\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với danh từ và trợ từ とけいを (vị trí ngôi sao là 4, tức là và trợ từ を (1) đi sau とけい).' 
    }
  ],
  dokkai1: [
    { 
      text: ['きょうは わたしの たんじょうびです。', 'あさ ははに プレゼントを もらいました。シャツと ぼうしです。', 'シャツは しろいです。ぼうしは くろいです。', 'よる かぞくと いっしょに レストランで しょくじを します。'],
      qs: [
        { 
          q: 'なにを もらいましたか。', 
          o: ['しろい シャツと しろい ぼうし', 'くろい シャツと くろい ぼうし', 'しろい シャツと くろi ぼうし', 'くろい シャツと しろい ぼうし'], 
          c: 2, 
          exp: 'Dịch nghĩa đoạn văn: "Hôm nay là sinh nhật tôi. Sáng nay tôi nhận được quà từ mẹ: áo sơ mi và mũ. Chiếc áo sơ mi thì màu trắng, chiếc mũ thì màu đen."\n- Do đó, món quà nhận được là: Áo sơ mi trắng và mũ đen -> しろい シャツと くろい ぼうし.' 
        },
        { 
          q: 'よる どこで ごはんを たべますか。', 
          o: ['うち', 'レストラン', 'かいしゃ', 'gがっこう'], 
          c: 1, 
          exp: 'Dịch nghĩa đoạn văn: "Buổi tối, tôi cùng gia đình đi dùng bữa tại nhà hàng."\n- Nơi ăn cơm vào buổi tối là nhà hàng -> レストラン.' 
        }
      ]
    }
  ]
};

const pool_11_15 = {
  moji1: [
    { 
      q: '【外国】へ いきました。', 
      o: ['がいこk', 'がいごく', 'かいこく', 'かいごく'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đã đi nước ngoài.\n- Chữ Hán 【外国】 (Ngoại Quốc) có cách đọc Hiragana tương ứng là がいこく (gaikoku).\n- Chú ý âm đục của từ: "gai" và "ko", không biến âm thành "go" hay "kai".' 
    },
    { 
      q: 'ngõ/nơi/ở đây là 【有名】な まちです。', 
      o: ['ゆめい', 'ゆうめい', 'ゆめ', 'ゆうめ'], 
      c: 1, 
      exp: 'Dịch nghĩa: Đây là một thành phố nổi tiếng.\n- Chữ Hán 【有名】 (Hữu Danh) có cách đọc tương ứng là ゆうめい (yuumei) nghĩa là nổi tiếng.\n- Chú ý từ này có hai trường âm: ゆう (yuu) và めい (mei).' 
    },
    { 
      q: '【一日】に ３かい くすりを のみます。', 
      o: ['いちにち', 'いつか', 'ついたち', 'いっか'], 
      c: 0, 
      exp: 'Dịch nghĩa: Một ngày tôi uống thuốc 3 lần.\n- 【一日】 biểu thị thời lượng "một ngày" đọc là いちにち (ichinichi).\n- Phân tích các đáp án khác: ついたち (tsuitachi: ngày mùng 1 đầu tháng, chỉ mốc thời gian chứ không chỉ thời lượng), いつか (itsuka: ngày mùng 5/năm ngày).' 
    },
    { 
      q: '【切手】を かいました。', 
      o: ['きって', 'きっぷ', 'きくて', 'きっぶ'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đã mua tem.\n- Chữ Hán 【切手】 (Thiết Thủ) có cách đọc là きって (kitte) nghĩa là tem thư.\n- Chú ý phân biệt với きっぷ (kippu: vé tàu xe, chữ Hán là 切符).' 
    }
  ],
  moji2: [
    { 
      q: '【カメラ】を かいたいです。', 
      o: ['カメテ', 'カメラ', 'ガメラ', 'カヌラ'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi muốn mua máy ảnh.\n- 【カメラ】 (Máy ảnh - Camera) viết bằng Katakana chuẩn xác là カメラ.\n- Các chữ Katakana tương đồng dễ gây nhầm lẫn: ラ (ra) khác với テ (te) hay ヌ (nu).' 
    },
    { 
      q: 'あたらし 【くるま】が ほしいです。', 
      o: ['車', '軍', '庫', '連'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi muốn một chiếc xe hơi mới.\n- 【くるま】 (xe hơi, ô tô) viết bằng chữ Kanji là 車 (Xa).\n- Các chữ Kanji gây nhiễu có nét viết tương đồng: 軍 (Quân), 庫 (Khố), 連 (Liên).' 
    },
    { 
      q: '【デパート】へ いきます。', 
      o: ['デパート', 'デバート', 'テパート', 'テバート'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đi đến bách hóa.\n- 【デパート】 (Cửa hàng bách hóa) viết bằng Katakana chuẩn xác là デパート.\n- Chú ý âm đục của chữ デ (de) và âm thường của chữ パ (pa - có maru).' 
    },
    { 
      q: '【スーパー】で くだものを かいます。', 
      o: ['スーパー', 'スーバー', 'ズーパー', 'ズーバー'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi mua trái cây ở siêu thị.\n- 【スーパー】 (Siêu thị - Supermarket) viết Katakana chuẩn xác là スーパー có trường âm kéo dài.' 
    }
  ],
  moji3: [
    { 
      q: 'りんごを みっつ 【　　　】。', 
      o: ['で', 'を', 'に', 'ください'], 
      c: 3, 
      exp: 'Dịch nghĩa: Xin vui lòng cho tôi 3 quả táo.\n- Cấu trúc yêu cầu lịch sự khi mua bán hoặc gọi món: [Danh từ] + [Số lượng] + ください (Xin cho tôi/Vui lòng lấy cho tôi...).' 
    },
    { 
      q: 'いま のどが 【　　　】。', 
      o: ['かわきました', 'すきました', 'いたいです', 'わるいです'], 
      c: 0, 
      exp: 'Dịch nghĩa: Bây giờ tôi đang khát nước.\n- Cụm từ cố định: のどが かわきました (khát nước, nghĩa đen là họng khô rồi).\n- Phân tích các đáp án khác: おなかが すきました (đói bụng), あたまが いたい (đau đầu).' 
    },
    { 
      q: 'えきまで 【　　　】で いきます。', 
      o: ['じてんしゃ', 'ひこうき', 'ふね', 'しんかんせん'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đi đến ga bằng xe đạp.\n- Trợ từ で chỉ phương tiện. Đi đến ga tàu thông thường và hợp lý nhất là dùng じてんしゃ (xe đạp).\n- Các phương tiện khác không thực tế trong cuộc sống hàng ngày để ra ga: ひこうき (máy bay), ふね (thuyền), しんかんせん (tàu siêu tốc).' 
    },
    { 
      q: '【　　　】から きましたか。', 
      o: ['dどこ', 'だれ', 'いつ', 'なん'], 
      c: 0, 
      exp: 'Dịch nghĩa: Bạn đến từ đâu?\n- Cấu trúc hỏi nguồn gốc, quê quán: どこから きましたか (Đến từ đâu?).\n- Phân tích các đáp án khác: だれ (ai), いつ (khi nào), なん (cái gì).' 
    }
  ],
  bunpou1: [
    { 
      q: 'きょうは （　　　） たのしかったです。', 
      o: ['とても', 'tự nhiên/không lắm', 'hoàn toàn không', 'すこし'], 
      c: 0, 
      exp: 'Dịch nghĩa: Hôm nay đã rất vui.\n- Tính từ chia khẳng định quá khứ (たのしかった) đi kèm phó từ mức độ khẳng định là とても (rất).\n- Các đáp án khác dùng với thể phủ định: あまり...ない (không... lắm), ぜんぜん...ない (hoàn toàn không... ở phủ định).' 
    },
    { 
      q: 'ここで しゃしんを （　　　）は いけません。', 
      o: ['とる', 'とり', 'とって', 'とらない'], 
      c: 2, 
      exp: 'Dịch nghĩa: Không được phép chụp ảnh ở đây.\n- Mẫu câu cấm đoán nhẹ: Vて + は いけません (không được làm gì).\n- Động từ とります (chụp ảnh) chuyển sang thể て là とって.' 
    },
    { 
      q: 'A「ちょっと （　　　）ましょうか。」', 
      o: ['やすみ', 'やすむ', 'やすんで', 'やすまない'], 
      c: 0, 
      exp: 'Dịch nghĩa: A: "Chúng ta cùng nghỉ ngơi một chút nhé?"\n- Mẫu câu đề nghị/rủ rê lịch sự: Động từ thể ます bỏ ます + ましょうか.\n- Động từ やすみます bỏ ます thành やすみ.' 
    },
    { 
      q: 'わたしは にほんご（　　　） わかります。', 
      o: ['が', 'を', 'に', 'để (dùng sai, o: で)'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi hiểu tiếng Nhật.\n- Động từ わかります (hiểu, biết) là động từ trạng thái, đi kèm đối tượng của sự thấu hiểu bằng trợ từ が (không dùng trợ từ を).' 
    }
  ],
  bunpou2: [
    { 
      q: 'わたしは　___ ___ _★_ ___　いきます。', 
      o: ['えいが', 'に', 'を', 'みに'], 
      c: 3, 
      exp: 'Dịch nghĩa: Tôi đi xem phim.\n- Phân tích trật tự từ: わたしは + えいが (1) + を (3) + みに (4) + に (2) + いきます.\n- Cấu trúc chỉ mục đích di chuyển: [Danh từ] + を + [Động từ thể ます bỏ ます] + に + いきます.\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với động từ chỉ mục đích みに (4).' 
    },
    { 
      q: 'この　___ ___ _★_ ___　いいですか。', 
      o: ['を', 'ペン', 'つかっても', 'は'], 
      c: 2, 
      exp: 'Dịch nghĩa: Tôi dùng chiếc bút này có được không?\n- Phân tích trật tự từ: この + ペン (2) + は (4) + つかっても (3) + いいですか.\n- Cấu trúc xin phép lịch sự: Vて + も いいですか (làm gì có được không?).\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với động từ つかっても (3).' 
    }
  ],
  dokkai1: [
    { 
      text: ['わたしの かぞくは ４にんです。', 'あには だいがくせいです。いま とうきょう（　１　）すんでいます。', 'わたしは こうこうせいです。', 'らいねん だいがくへ （　２　）たいです。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['で', 'に', 'へ', 'を'], 
          c: 1, 
          exp: 'Dịch nghĩa đoạn: "Gia đình tôi có 4 người. Anh trai tôi là sinh viên. Hiện tại anh đang sống ở Tokyo."\n- Trợ từ đi với động từ chỉ sự cư trú すんでいます (sống tại) bắt buộc phải dùng trợ từ に.' 
        },
        { 
          q: '（　２　）に入れるものはどれですか。', 
          o: ['いき', 'いく', 'いって', 'いきたい'], 
          c: 0, 
          exp: 'Dịch nghĩa đoạn: "Tôi là học sinh cấp 3. Sang năm tôi muốn đỗ/đi học đại học."\n- Cấu trúc mong muốn: Vます bỏ ます + たい (muốn làm gì). Động từ いきます (đi) bỏ ます thành いき đi với đuôi たい -> いき (đáp án 1).' 
        }
      ]
    }
  ]
};

const pool_16_20 = {
  moji1: [
    { 
      q: 'えいがを 【見】ます。', 
      o: ['み', 'き', 'し', 'よ'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi xem phim.\n- Chữ Hán 【見】 (Kiến) có cách đọc trong động từ 見ます (xem, nhìn) là み (mimasu).' 
    },
    { 
      q: 'あした 【雨】が ふります。', 
      o: ['ゆき', 'あめ', 'はれ', 'くも'], 
      c: 1, 
      exp: 'Dịch nghĩa: Ngày mai trời sẽ mưa.\n- Chữ Hán 【雨】 (Vũ) đọc là あめ (ame) nghĩa là mưa.\n- Phân tích các đáp án khác: ゆき (tuyết), はれ (nắng ráo), くも (mây).' 
    },
    { 
      q: '【午後】の じゅぎょうは ありません。', 
      o: ['ごご', 'ごぜん', 'ko-go', 'go-ko'], 
      c: 0, 
      exp: 'Dịch nghĩa: Không có giờ học buổi chiều.\n- Chữ Hán 【午後】 (Ngọ Hậu) đọc tương ứng là ごご (gogo) nghĩa là buổi chiều (PM).\n- Phân tích đáp án khác: ごぜん (gozen: buổi sáng - AM).' 
    },
    { 
      q: '【午前】 ６시에 おきます。', 
      o: ['ごぜん', 'ごご', 'khác/sai', 'go-sen'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi thức dậy lúc 6 giờ sáng.\n- Chữ Hán 【午前】 (Ngọ Tiền) đọc là ごぜん (gozen) nghĩa là buổi sáng (AM).' 
    }
  ],
  moji2: [
    { 
      q: '【みぎ】へ まがります。', 
      o: ['右', '左', '前', '後'], 
      c: 0, 
      exp: 'Dịch nghĩa: Rẽ sang bên phải.\n- 【みぎ】 (bên phải) viết bằng chữ Kanji là 右 (Hữu).\n- Phân tích các chữ khác: 左 (Tả - bên trái), 前 (Tiền - phía trước), 後 (Hậu - phía sau).' 
    },
    { 
      q: '【しゃしん】を とります。', 
      o: ['写真', '真写', 'khác/sai', '真字'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi chụp ảnh.\n- 【しゃしん】 (bức ảnh) viết bằng chữ Kanji là 写真 (Tả Chân).' 
    },
    { 
      q: '【ひる】ごはんを たべます。', 
      o: ['昼', '朝', '夜', '晩'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi ăn cơm trưa.\n- 【ひる】 (buổi trưa) viết bằng chữ Kanji là 昼 (Trú).\n- Phân tích các đáp án khác: 朝 (buổi sáng), 夜 (buổi tối), 晩 (buổi tối).' 
    },
    { 
      q: '【よる】ねます。', 
      o: ['夜', '昼', '朝', '夕'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đi ngủ vào buổi tối.\n- 【よる】 (buổi tối/đêm) viết bằng chữ Kanji là 夜 (Dạ).' 
    }
  ],
  moji3: [
    { 
      q: 'ここに くるまを 【　　　】。', 
      o: ['とめないで ください', 'とまらないで ください', 'とめて ください', 'とまる ください'], 
      c: 0, 
      exp: 'Dịch nghĩa: Vui lòng không đỗ xe ở đây.\n- Cấu trúc yêu cầu lịch sự "xin đừng": Vない bỏ い + で ください.\n- Động từ đỗ xe とめます (tha động từ) chuyển sang thể phủ định là とめない -> とめないで ください.\n- Chú ý: とまります là tự động từ (dừng lại), không dùng ở đây.' 
    },
    { 
      q: 'パスポートを 【　　　】。', 
      o: ['みせないで ください', 'みせなければ なりません', 'みせても いいです', 'みせなくちゃ いいis'], 
      c: 1, 
      exp: 'Dịch nghĩa: Bạn phải xuất trình hộ chiếu.\n- Cấu trúc bắt buộc: Vなければ なりません (phải làm gì đó).\n- Động từ みせます (cho xem, xuất trình) chia sang thể phủ định giả định là みせなければ -> みせなければ なりません.' 
    },
    { 
      q: 'あしたは 【　　　】から、どこも いきません。', 
      o: ['あめ', 'はれ', 'くも', 'ゆき'], 
      c: 0, 
      exp: 'Dịch nghĩa: Vì ngày mai trời mưa nên tôi không đi đâu cả.\n- Danh từ chỉ thời tiết kết hợp cùng trợ từ chỉ lý do から (vì...) hợp lý nhất là あめ (mưa).' 
    },
    { 
      q: 'かぜを ひきましたから、くusりを 【　　　】。', 
      o: ['nomiます', 'たべます', 'します', 'きます'], 
      c: 0, 
      exp: 'Dịch nghĩa: Vì bị cảm nên tôi sẽ uống thuốc.\n- Trong tiếng Nhật, việc uống thuốc dùng động từ のみます (uống) chứ tuyệt đối không dùng động từ たべます (ăn) như tiếng Việt.' 
    }
  ],
  bunpou1: [
    { 
      q: 'わたしは ピアノを （　　　）が できます。', 
      o: ['ひく', 'ひくこと', 'ひいて', 'ひき'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi có thể chơi đàn piano.\n- Cấu trúc thể hiện khả năng: [Động từ thể từ điển (Vる)] + こと が できます.\n- Động từ ひきます (chơi đàn) thể từ điển là ひく -> ひくこと.' 
    },
    { 
      q: 'にほんへ （　　　） まえに、べんきょうしました。', 
      o: ['いく', 'いって', 'いった', 'いかない'], 
      c: 0, 
      exp: 'Dịch nghĩa: Trước khi đi Nhật, tôi đã học tiếng Nhật.\n- Cấu trúc: Vる + まえに (Trước khi làm hành động gì...). Động từ đi trước まえに luôn ở thể từ điển (Vる) -> いく まえに.' 
    },
    { 
      q: 'うまに （　　　）ことが ありますか。', 
      o: ['のる', 'のった', 'のって', 'のらない'], 
      c: 1, 
      exp: 'Dịch nghĩa: Bạn đã từng cưỡi ngựa bao giờ chưa?\n- Cấu trúc nói về kinh nghiệm trong quá khứ: Vた + ことが あります (Đã từng làm gì...).\n- Động từ のります (lên xe/cưỡi) chia thể quá khứ là のった.' 
    },
    { 
      q: 'この りんごは おいしい（　　　）、やすいです。', 
      o: ['し', 'て', 'から', 'が'], 
      c: 0, 
      exp: 'Dịch nghĩa: Quả táo này vừa ngon lại vừa rẻ.\n- Cấu trúc liệt kê các lý do hoặc tính chất tương đồng: [Tính từ đuôi い] + し -> おいしいし (vừa ngon, lại còn...).' 
    }
  ],
  bunpou2: [
    { 
      q: 'わたしの　___ ___ _★_ ___　です。', 
      o: ['えを', 'しゅみ', 'は', 'かくこと'], 
      c: 0, 
      exp: 'Dịch nghĩa: Sở thích của tôi là vẽ tranh.\n- Phân tích trật tự từ: わたしの + しゅみ (2) + は (3) + えを (1) + かくこと (4) + です.\n- Cấu trúc: [Sở thích] は [Động từ thể từ điển Vる] + こと です (Sở thích là việc làm gì đó).\n- Vị trí dấu sao nằm ở vị trí thứ 3, tương ứng với cụm từ えを (1).' 
    },
    { 
      q: 'ここで　___ ___ _★_ ___　ください。', 
      o: ['を', 'しゃしん', 'とらないde', 'は'], 
      c: 2, 
      exp: 'Dịch nghĩa: Xin vui lòng không chụp ảnh ở đây.\n- Phân tích trật tự từ: ở đây + しゃしん (2) + を (1) + とらないで (3) + ください.\n- Cấu trúc yêu cầu lịch sự thể phủ định: Vない bỏ い + で ください.\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với động từ とらないで (3).' 
    }
  ],
  dokkai1: [
    { 
      text: ['わたしは まいあさ ６じに おきます。', 'あさごはんを （　１　）まえに、ジョギングを します。', 'ジョギングは しゅみです。', '그리고, シャワーを あびてから、ごはんを たべます。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['たべる', 'たべた', 'たべて', 'たべない'], 
          c: 0, 
          exp: 'Dịch nghĩa đoạn: "Tôi thức dậy lúc 6 giờ mỗi sáng. Trước khi ăn sáng, tôi chạy bộ."\n- Quy tắc ngữ pháp: Đứng trước まえに luôn là động từ thể từ điển (Vる) -> たべる (ăn).' 
        },
        { 
          q: 'ジョギングの あとで、なにを しますか。', 
          o: ['おきます', 'あさごはんを たべます', 'シャワーを あびます', 'かいしゃへ いきます'], 
          c: 2, 
          exp: 'Dịch nghĩa đoạn: "Tôi chạy bộ. Và sau khi tắm vòi hoa sen, tôi ăn cơm."\n- Sau khi chạy bộ (ジョギング), hành động tiếp theo được nhắc tới là tắm vòi hoa sen (シャワーを あびます).' 
        }
      ]
    }
  ]
};

const pool_21_25 = {
  moji1: [
    { 
      q: '【電気】を つけます。', 
      o: ['てんき', 'でんき', 'てんぎ', 'でんぎ'], 
      c: 1, 
      exp: 'Dịch nghĩa: Tôi bật điện.\n- Chữ Hán 【電気】 (Điện Khí) đọc tương ứng là でんき (denki) nghĩa là điện, đèn điện.\n- Phân tích đáp án khác: てんき (thời tiết - 天気).' 
    },
    { 
      q: '【道】を まっすぐ いきます。', 
      o: ['まち', 'みち', 'むら', 'くに'], 
      c: 1, 
      exp: 'Dịch nghĩa: Đi thẳng theo con đường.\n- Chữ Hán 【道】 (Đạo) đọc tương ứng là みち (michi) nghĩa là con đường.\n- Phân tích các đáp án khác: まち (con phố), むら (ngôi làng), くに (đất nước).' 
    },
    { 
      q: '【今年】は ２０２３ねんです。', 
      o: ['ことし', 'こんとし', 'きょとし', 'こんねん'], 
      c: 0, 
      exp: 'Dịch nghĩa: Năm nay là năm 2023.\n- Chữ Hán 【今年】 (Kim Niên) đọc tương ứng là ことし (kotoshi) nghĩa là năm nay.' 
    },
    { 
      q: '【去年】 にほんへ きました。', 
      o: ['きょねん', 'こねん', 'きょうねん', 'こんねん'], 
      c: 0, 
      exp: 'Dịch nghĩa: Năm ngoái tôi đã đến Nhật Bản.\n- Chữ Hán 【去年】 (Khứ Niên) đọc tương ứng là きょねん (kyonen) nghĩa là năm ngoái.' 
    }
  ],
  moji2: [
    { 
      q: '【おとうと】が います。', 
      o: ['弟', '兄', '妹', '姉'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi có em trai.\n- 【おとうと】 (em trai) viết bằng chữ Kanji là 弟 (Đệ).\n- Phân tích chữ khác: 兄 (Huynh - anh trai), 妹 (Muội - em gái), 姉 (Tỷ - chị gái).' 
    },
    { 
      q: 'あめが 【ふって】 います。', 
      o: ['降って', '落ちて', '下って', '流って'], 
      c: 0, 
      exp: 'Dịch nghĩa: Trời đang mưa.\n- Động từ 【ふって】 (rơi - dùng cho thời tiết mưa/tuyết) viết Kanji là 降って (Hàng).\n- Phân tích chữ khác: 落ちて (rơi rụng - vật lý), 下って (đi xuống).' 
    },
    { 
      q: '【らいねん】は なにを しますか。', 
      o: ['来年', '去年', '今年', '毎年'], 
      c: 0, 
      exp: 'Dịch nghĩa: Sang năm bạn sẽ làm gì?\n- 【らいねん】 (năm sau) viết Kanji là 来年 (Lai Niên).\n- Phân tích chữ khác: 去年 (năm ngoái), 今年 (năm nay), 毎年 (mỗi năm).' 
    },
    { 
      q: '【まいにち】 べんきょうします。', 
      o: ['毎日', '毎週', '毎月', '毎年'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi học bài mỗi ngày.\n- 【まいにち】 (mỗi ngày) viết Kanji là 毎日 (Mỗi Nhật).' 
    }
  ],
  moji3: [
    { 
      q: 'ねむい 【　　　】、コーヒーを のみます。', 
      o: ['とき', 'と', 'たら', 'ba'], 
      c: 0, 
      exp: 'Dịch nghĩa: Khi buồn ngủ, tôi uống cà phê.\n- Cấu trúc chỉ thời điểm: [Tính từ đuôi い] + とき (khi/lúc...). Do đó điền とき.' 
    },
    { 
      q: 'あめが ふっても、いきます。', 
      o: ['あめが ふったら いきます。', 'あめが ふったら いきません。', 'あめが ふりますが、いきます。', 'あめが ふらないと いきます。'], 
      c: 2, 
      exp: 'Dịch nghĩa: Cho dù trời mưa, tôi vẫn đi.\n- Cấu trúc Vても mang ý nghĩa nhượng bộ giả định (Dù... đi chăng nữa).\n- Ý nghĩa câu này tương đồng nhất với câu dùng trợ từ nghịch lý が: あめが ふりますが、いきます (Trời mưa nhưng tôi vẫn đi).' 
    },
    { 
      q: 'きのうは とても 【　　　】です。', 
      o: ['いそがしかった', 'いそがしい', 'ひま', 'ひまだった'], 
      c: 0, 
      exp: 'Dịch nghĩa: Hôm qua tôi đã rất bận.\n- Diễn tả hoàn cảnh trong quá khứ (きのう).\n- Tính từ đuôi い (いそがしい) chia quá khứ lịch sự là bỏ い thêm かったです -> いそgがしかった (ở đây đứng trước です nên chọn いそがしかった).' 
    },
    { 
      q: 'やすみは 【　　　】ですか。', 
      o: ['いつ', 'dđâu', 'ai', 'gì'], 
      c: 0, 
      exp: 'Dịch nghĩa: Khi nào bạn được nghỉ?\n- Từ hỏi mốc thời gian phù hợp nhất là いつ (Khi nào?).' 
    }
  ],
  bunpou1: [
    { 
      q: 'あしたは あめが ふる（　　　） おもいます。', 
      o: ['と', 'を', 'に', 'で'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi nghĩ ngày mai trời sẽ mưa.\n- Cấu trúc biểu thị suy nghĩ, phán đoán: [Thể thông thường] + と おもいます (Tôi nghĩ rằng...).\n- Trợ từ dùng để trích dẫn suy nghĩ bắt buộc là と.' 
    },
    { 
      q: 'これは わたしが （　　　） かばんです。', 
      o: ['かい', 'かう', 'かった', 'かって'], 
      c: 2, 
      exp: 'Dịch nghĩa: Đây là chiếc túi xách mà tôi đã mua.\n- Mệnh đề định ngữ bổ nghĩa cho danh từ かばん: [Động từ chia thể quá khứ Vた] + かばん (chiếc túi đã mua).\n- Động từ かいます chia thể quá khứ là かった.' 
    },
    { 
      q: 'じかんが なかった（　　　）、ほんを よみません。', 
      o: ['たら', 'と', 'から', 'ba'], 
      c: 0, 
      exp: 'Dịch nghĩa: Nếu không có thời gian, tôi sẽ không đọc sách.\n- Cấu trúc điều kiện giả định: Vたら (Nếu... thì...).\n- Thể phủ định quá khứ なかった kết hợp với đuôi ら thành なかったら (nếu không có).' 
    },
    { 
      q: 'わたしは にほんごが はなせる（　　　） に なりました。', 
      o: ['よう', 'こと', 'もの', 'ところ'], 
      c: 0, 
      exp: 'Dịch nghĩa: Tôi đã có thể nói được tiếng Nhật.\n- Cấu trúc diễn tả sự biến đổi năng lực: [Động từ thể khả năng] + よう に なります (trở nên có thể làm gì).\n- Điền trực tiếp chữ よう.' 
    }
  ],
  bunpou2: [
    { 
      q: 'あの　___ ___ _★_ ___　は だれですか。', 
      o: ['を', 'ひと', 'メガネ', 'かけている'], 
      c: 3, 
      exp: 'Dịch nghĩa: Người đang đeo kính kia là ai thế?\n- Phân tích trật tự từ: あの + メガネ (3) + を (1) + かけている (4) + ひと (2) + はだれですか.\n- Mệnh đề định ngữ bổ sung cho người (ひと): メガネをかけている (đang đeo kính).\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với động từ かけている (4).' 
    },
    { 
      q: 'たのしく　___ ___ _★_ ___　と おもいます。', 
      o: ['あしたの', 'は', 'pパーティー', 'ない'], 
      c: 3, 
      exp: 'Dịch nghĩa: Tôi nghĩ bữa tiệc ngày mai sẽ không vui đâu.\n- Phân tích trật tự từ: あしたの (1) + パーティー (3) + は (2) + たのしくない (tính từ gốc たのしく ghép với ない (4)) + と おもいます.\n- Vị trí dấu sao nằm ở từ thứ 3 trong cụm sắp xếp, tương ứng với tính từ phủ định ない (4).' 
    }
  ],
  dokkai1: [
    { 
      text: ['わたしは きのう ともだちの うちへ いきました。', 'ともだちが おいしい ケーキを つくって （　１　）。', 'とても おいしかったです。', 'わたしは また ケーキを （　２　）と おもいます。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['あげました', 'もらいました', 'くれました', 'しました'], 
          c: 2, 
          exp: 'Dịch nghĩa đoạn: "Hôm qua tôi đi đến nhà bạn chơi. Bạn tôi đã làm cho tôi một chiếc bánh kem ngon."\n- Cấu trúc ai đó thực hiện hành động giúp đỡ/cho mình: Vて くれました (hành động từ bạn hướng về tôi).' 
        },
        { 
          q: '（　２　）に入れるものはどれですか。', 
          o: ['たべる', 'たべた', 'たべたい', 'たべて'], 
          c: 2, 
          exp: 'Dịch nghĩa đoạn: "Nó rất ngon. Tôi nghĩ tôi muốn ăn bánh kem đó một lần nữa."\n- Cấu trúc nói về mong muốn bản thân: Vたい + と おもいます (Tôi nghĩ tôi muốn làm gì đó) -> たべたい.' 
        }
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
