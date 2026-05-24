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
      exp: '📖 Dịch nghĩa:\nĐất nước của tôi là Việt Nam.\n\n✍️ Phân tích đáp án:\n- くに (kuni): Đất nước, quốc gia $→$ Chọn.\n- まち (machi): Phố, thị trấn $→$ Sai nghĩa.\n- うち (uchi): Nhà/gia đình của tôi $→$ Sai nghĩa.\n- いえ (ie): Ngôi nhà vật lý $→$ Sai nghĩa.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ Hán 【国】 (Quốc) trong từ vựng N5 luôn được phát âm là くに (kuni).\n- Mẹo nhớ chữ: Trong nước (国) có ngọc quý (玉) được bao quanh bởi biên giới (囗).' 
    },
    { 
      q: '【先月】、日本へ きました。', 
      o: ['らいげつ', 'こんげつ', 'せんげつ', 'まいつき'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nTháng trước tôi đã đến Nhật Bản.\n\n✍️ Phân tích đáp án:\n- せんげつ (sengetsu): Tháng trước $→$ Chọn.\n- らいげつ (raigetsu): Tháng sau $→$ Sai thời điểm.\n- こんげつ (kongetsu:): Tháng này $→$ Sai thời điểm.\n- まいつき (maitsuki): Mỗi tháng $→$ Sai ngữ cảnh.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ Hán 【先月】 (Tiên Nguyệt - tháng trước). Âm Hán Việt "Tiên" (trước) đi với "Nguyệt" (tháng).\n- Mẹo ngữ pháp: Động từ ở quá khứ きました (đã đến) bổ trợ cho việc chọn thời gian trong quá khứ là "Tháng trước".' 
    },
    { 
      q: '【毎日】 にほんごを べんきょうします。', 
      o: ['まいにち', 'まいしゅう', 'まいげつ', 'まいとし'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nHàng ngày tôi học tiếng Nhật.\n\n✍️ Phân tích đáp án:\n- まいにch (mainichi): Mỗi ngày, hàng ngày $→$ Chọn.\n- まいしゅう (maishuu): Mỗi tuần $→$ Sai tần suất.\n- まいげつ (maigetsu): Mỗi tháng $→$ Sai tần suất.\n- まいとし (maitoshi): Mỗi năm $→$ Sai tần suất.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ Hán 【毎日】 (Mỗi Nhật) có cách đọc tương ứng là まいにち.\n- Trợ từ を (wo) đứng trước động từ chỉ đối tượng tác động (học CÁI GÌ $→$ học tiếng Nhật).' 
    },
    { 
      q: 'きょうは 【水曜日】です。', 
      o: ['かようび', 'すいようび', 'もくようび', 'きnようび'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nHôm nay là thứ Tư.\n\n✍️ Phân tích đáp án:\n- すいようび (suiyoubi): Thứ Tư $→$ Chọn.\n- かようび (kayoubi): Thứ Ba $→$ Sai ngày.\n- もくようび (mokuyoubi): Thứ Năm $→$ Sai ngày.\n- きんようび (kinyoubi): Thứ Sáu $→$ Sai ngày.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ Hán 【水曜日】 (Thủy Diệu Nhật) có nghĩa là ngày của nước $→$ thứ Tư.\n- Mẹo học thứ tự các thứ trong tuần theo ngũ hành: Nhật (Chủ nhật), Nguyệt (Thứ hai), Hỏa (Thứ ba), Thủy (Thứ tư), Mộc (Thứ năm), Kim (Thứ sáu), Thổ (Thứ bảy).' 
    }
  ],
  moji2: [
    { 
      q: '【でんしゃ】で かいしゃへ いきます。', 
      o: ['電車', '電気', '電話', '電波'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi đi làm bằng tàu điện.\n\n✍️ Phân tích đáp án:\n- 電車 (Điện Xa - xe chạy bằng điện): Tàu điện $→$ Chọn.\n- 電気 (Điện Khí): Điện, đèn điện $→$ Sai nghĩa.\n- 電話 (Điện Thoại): Điện thoại $→$ Sai nghĩa.\n- 電波 (Điện Ba): Sóng điện $→$ Sai nghĩa.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ で (de) đứng sau phương tiện di chuyển chỉ cách thức di chuyển (bằng tàu điện).\n- Mẹo viết chữ: Chữ 電 (Điện) gồm bộ Vũ (mưa) ở trên và chữ Thần (sấm sét) ở dưới.' 
    },
    { 
      q: 'あの 【レストラン】は おいしいです。', 
      o: ['レストンラ', 'レストラン', 'レストラソ', 'レスドラン'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nNhà hàng kia ngon lắm.\n\n✍️ Phân tích đáp án:\n- レストラン (resutoran): Nhà hàng $→$ Chọn.\n- レストンラ: Viết sai vị trí chữ ン và ラ.\n- レストラソ: Viết sai chữ ン (n) thành chữ ソ (so) nét hướng từ trên xuống.\n- レスドラン: Thừa dấu đục (tenten) ở chữ ト thành ド.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Mẹo nhận biết chữ Katakana: Chữ ン (n) nét móc kéo từ dưới lên, chữ ソ (so) nét kéo vuốt từ trên xuống.' 
    },
    { 
      q: 'ともだちと 【デパート】へ いきます。', 
      o: ['デバート', 'テパート', 'デパート', 'デパード'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nTôi đi đến trung tâm thương mại cùng bạn bè.\n\n✍️ Phân tích đáp án:\n- デパート (depaato): Cửa hàng bách hóa $→$ Chọn.\n- デバート: Viết sai chữ パ (pa) thành バ (ba).\n- テパート: Thiếu dấu đục ở chữ デ (de) thành テ (te).\n- デパード: Viết sai chữ ト (to) thành ド (do).\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Từ bắt nguồn từ tiếng Anh "Department store". Có dấu gạch ngang (ー) biểu thị trường âm kéo dài.' 
    },
    { 
      q: '【くるま】を かいました。', 
      o: ['車', '東', '重', '庫'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi đã mua ô tô.\n\n✍️ Phân tích đáp án:\n- 車 (Xa): Xe hơi, ô tô $→$ Chọn.\n- 東 (Đông): Phía đông $→$ Sai mặt chữ.\n- 重 (Trọng): Nặng $→$ Sai mặt chữ.\n- 庫 (Khố): Kho $→$ Sai mặt chữ.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ Hán 【車】 vẽ hình cái bánh xe và trục xe nhìn từ trên xuống. Đây là bộ thủ cơ bản đại diện cho các loại xe cộ.' 
    }
  ],
  moji3: [
    { 
      q: 'あしたは やすみです. うちで ゆっくり 【　　　】。', 
      o: ['おきます', 'はたらきます', 'やすみます', 'おわります'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nNgày mai là ngày nghỉ. Tôi sẽ nghỉ ngơi thong thả ở nhà.\n\n✍️ Phân tích đáp án:\n- やすみます (yasumimasu): Nghỉ ngơi $→$ Chọn vì khớp với vế "ngày nghỉ (やすみ)".\n- おきます (okimasu): Thức dậy $→$ Không phù hợp ngữ cảnh.\n- はたらきます (hatarakimasu): Làm việc $→$ Trái nghĩa với ngày nghỉ.\n- おわります (owarimasu): Kết thúc $→$ Không phù hợp.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Cụm từ đi liền: ゆっくり 休みます (Nghỉ ngơi thong thả, thư giãn).\n- Trợ từ で (de) chỉ địa điểm xảy ra hành động (nghỉ ngơi ở nhà - うちで).' 
    },
    { 
      q: 'きのう １０じに 【　　　】。', 
      o: ['おきました', 'ねました', 'きました', 'いきました'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nHôm nay tôi đã đi ngủ lúc 10 giờ.\n\n✍️ Phân tích đáp án:\n- ねました (nemashita): Đã ngủ $→$ Phù hợp nhất với mốc thời gian 10 giờ đêm (10じ).\n- おきました (okimashita): Đã thức dậy $→$ 10 giờ đêm không phải giờ thức dậy phổ thông.\n- きました (kimashita): Đã đến $→$ Không hợp nghĩa.\n- いきました (ikimashita): Đã đi $→$ Không hợp nghĩa.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ に (ni) bắt buộc đi kèm sau mốc thời gian cụ thể (１０じに).\n- Đuôi 〜ました biểu thị hành động đã kết thúc trong quá khứ (ngày hôm qua - きのう).' 
    },
    { 
      q: 'えんぴつで てがみを 【　　　】。', 
      o: ['よみます', 'かきます', 'ききます', 'みます'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nTôi viết thư bằng bút chì.\n\n✍️ Phân tích đáp án:\n- かきます (kakimasu): Viết $→$ Chọn vì đi với danh từ てがみ (thư).\n- よみます (yomimasu): Đọc $→$ Không đi với công cụ bằng bút chì.\n- ききます (kikimasu): Nghe / hỏi $→$ Không đi với viết thư.\n- みます (mimasu): Xem $→$ Không đi với bút chì.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ で (de) đóng vai trò chỉ phương tiện/công cụ để thực hiện hành động (viết bằng cái gì $→$ えんぴつで - bằng bút chì).' 
    },
    { 
      q: 'スーパーで くだものを 【　　　】。', 
      o: ['かいます', 'あいます', 'すいます', 'のみます'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi mua trái cây ở siêu thị.\n\n✍️ Phân tích đáp án:\n- かいます (kaimasu): Mua $→$ Chọn vì là hành động phổ biến đối với hàng hóa (くだもの) tại siêu thị.\n- あいます (aimasu): Gặp gỡ $→$ Không đi với hoa quả.\n- すいます (suimasu): Hút thuốc $→$ Không đi với hoa quả.\n- のみます (nomimasu): Uống $→$ Hoa quả dạng rắn không dùng động từ uống.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ で (de) chỉ địa điểm diễn ra hành động mua bán (ở siêu thị - スーパーで).\n- Trợ từ を (wo) liên kết tân ngữ tác động (trái cây).' 
    }
  ],
  bunpou1: [
    { 
      q: 'わたしは えんぴつ（　　　）てがみを かきます。', 
      o: ['に', 'で', 'を', 'gが'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nTôi viết thư bằng bút chì.\n\n✍️ Phân tích đáp án:\n- で (de): Trợ từ chỉ phương tiện, công cụ (bằng...) $→$ Chọn.\n- に (ni): Chỉ điểm thời gian hoặc hướng đi $→$ Không phù hợp.\n- を (wo): Đứng sau tân ngữ trực tiếp (đã có てがみを) $→$ Không phù hợp.\n- が (ga): Chỉ chủ ngữ hoặc đối tượng khả năng $→$ Không phù hợp.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Mẹo làm bài: Khi thấy một danh từ chỉ dụng cụ học tập/phương tiện đi liền trước động từ hành động, hãy nghĩ ngay tới trợ từ công cụ で.' 
    },
    { 
      q: 'あした どこ（　　　）いきません. ', 
      o: ['へも', 'をも', 'gがも', 'đo/đây/đó'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nNgày mai tôi không đi đâu cả.\n\n✍️ Phân tích đáp án:\n- へも (he mo): Đi kèm từ để hỏi chỉ nơi chốn + động từ phủ định (không đi đâu) $→$ Chọn.\n- をも, がも: Không có cấu trúc kết hợp này cho câu phủ định hoàn toàn.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Ngữ pháp: Từ nghi vấn (どこ, だれ, なに) + Trợ từ phủ định (も / へも) + động từ dạng phủ định (〜ません) dùng để phủ định hoàn toàn sự vật/sự việc.' 
    },
    { 
      q: 'きょうは ５じ（　　　）はたらきます。', 
      o: ['까지/đến', 'từ', 'lúc/vào', 'ở/tại'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nHôm nay tôi làm việc đến 5 giờ.\n\n✍️ Phân tích đáp án:\n- まで (made): Đến (chỉ giới hạn thời gian kết thúc) $→$ Chọn.\n- から (kara): Từ (chỉ điểm bắt đầu) $→$ Thường đi kèm động từ bắt đầu từ lúc nào.\n- に (ni): Vào lúc (chỉ mốc thời gian cụ thể của hành động tức thời) $→$ Không đi với động từ kéo dài như はたらきます.\n- で (de): Chỉ địa điểm hoặc phương tiện $→$ Không phù hợp.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Phân biệt: [Thời gian] から [Thời gian] まで (Từ... đến...). Ở đây chỉ nói vế kết thúc nên dùng まで.' 
    },
    { 
      q: 'A「それは （　　　）ですか。」 B「コンピューターの ほん です。」', 
      o: ['なんの ほん', 'đến/được/như thế nào', '...'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nA: "Đó là cái gì thế?" - B: "Là cuốn sách về máy tính."\n\n✍️ Phân tích đáp án:\n- なん (nan: Cái gì): Từ để hỏi cơ bản cho sự vật $→$ Chọn để tạo thành "なんですか".\n- なんの ほん: Thừa từ "ほん" vì câu trả lời đã chứa "ほん" rồi.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Khi câu hỏi dùng "なんですか" (Cái gì?), câu trả lời có thể đi kèm giải thích chi tiết danh từ bổ nghĩa qua trợ từ の (Sách VỀ máy tính - コンピューターの ほん).' 
    }
  ],
  bunpou2: [
    { 
      q: 'ここは　___ ___ _★_ ___　です。', 
      o: ['の', 'だいがく', 'とうきょう', 'しょくどう'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nĐây là nhà ăn của trường Đại học Tokyo.\n\n✍️ Phân tích đáp án:\n- Sắp xếp thứ tự: ここは + とうきょう (3) + だいがく (2) + の (1) + しょくどう (4) + です.\n- Trợ từ の liên kết hai danh từ: Đại học Tokyo (とうきょう だいがく) + の + Nhà ăn (しょくどう).\n- Vị trí dấu sao nằm ở vị trí thứ 3 trong cụm sắp xếp, tương ứng với trợ từ の (1).\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Trợ từ の luôn nối hai danh từ theo nguyên tắc: Danh từ bổ nghĩa đứng trước, danh từ chính đứng sau (Nhà ăn của trường Đại học).' 
    },
    { 
      q: 'わたしは　___ ___ _★_ ___　いきます。', 
      o: ['ともだち', 'へ', 'と', 'ぎんこう'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nTôi đi ngân hàng cùng với bạn bè.\n\n✍️ Phân tích đáp án:\n- Sắp xếp thứ tự: わたしは + ともだち (1) + と (3) + ぎんこう (4) + へ (2) + いきます.\n- Trợ từ と đóng vai trò liên kết đối tượng đồng hành (cùng với ai đó).\n- Trợ từ へ chỉ hướng di chuyển tới địa điểm (Ngân hàng).\n- Vị trí dấu sao nằm ở vị trí thứ 3 trong cụm sắp xếp, tương ứng với danh từ ぎんこう (4).\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Mẹo làm bài xếp từ: Động từ di chuyển いきます luôn cần trợ từ chỉ hướng へ hoặc に đi liền trước nó (ぎんこうへ いきます).' 
    }
  ],
  dokkai1: [
    { 
      text: ['きのうは わたしの たんじょうびでした。', 'わたしは ともだち（　１　）レストランへ いきました。', 'レストランで おいしい ごはんuを たべました。', 'それから、えいがを（　２　）。とても たのしかったです。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['と', 'に', 'で', 'へ'], 
          c: 0, 
          exp: '📖 Dịch nghĩa:\nTôi đi đến nhà hàng cùng với bạn bè.\n\n✍️ Phân tích đáp án:\n- と (to): Trợ từ chỉ đối tượng cùng làm hành động (cùng với...) $→$ Chọn.\n- に, で, へ: Không phù hợp ngữ pháp khi đi kèm danh từ chỉ người và động từ chuyển hành.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Cấu trúc: [Người] と [Địa điểm] へ いきます (Đi đâu cùng ai).' 
        },
        { 
          q: '（　２　）に入れるものはđầu/nơi/nào?', 
          o: ['みます', 'みました', 'みますか', 'みません'], 
          c: 1, 
          exp: '📖 Dịch nghĩa:\nSau đó, tôi đã xem phim.\n\n✍️ Phân tích đáp án:\n- みました (mimashita): Đã xem $→$ Chọn vì toàn bộ câu chuyện diễn ra vào hôm qua (きのう - quá khứ).\n- みます (mimasu): Xem (thì hiện tại/tương lai) $→$ Sai thì.\n- みません (mimasen): Không xem $→$ Trái nghĩa ngữ cảnh vui vẻ.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Nhận biết: Trạng ngữ chỉ thời gian "Hôm qua (きのう)" và câu kết "Rất vui (たのしかったです)" làm căn cứ chia động từ ở thể quá khứ khẳng định (ました).' 
        }
      ]
    }
  ]
};

const pool_6_10 = {
  moji1: [
    { 
      q: '【手紙】を かきます。', 
      o: ['てがみ', 'でがみ', 'てかみ', 'đọc sai'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi viết thư.\n\n✍️ Phân tích đáp án:\n- てがみ (tegami): Bức thư $→$ Chọn.\n- Các đáp án khác sai âm đục (tenten) hoặc phát âm.\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ Hán gồm hai từ ghép: 手 (Thủ - tay) và 紙 (Chỉ - giấy). Giấy viết bằng tay chính là bức thư.' 
    },
    { 
      q: '【えいご】を べんきょうします。', 
      o: ['英話', '英語', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nTôi học tiếng Anh.\n\n✍️ Phân tích đáp án:\n- 英語 (Anh Ngữ): Tiếng Anh $→$ Chọn.\n- 英話: Viết sai chữ Hán (chữ 話 - Thoại sai).\n\n💡 Ngữ pháp & Mẹo nhớ:\n- Chữ 語 (Ngữ) cấu tạo gồm bộ Ngôn (nói), chữ Ngũ (năm) và chữ Khẩu (miệng).' 
    },
    { 
      q: '【新しい】 くるまです。', 
      o: ['あたらし', 'あたらしい', 'khác', 'khác'], 
      c: 1, 
      exp: 'Dịch nghĩa:\nChiếc xe hơi mới.\n\n✍️ Phân tích đáp án:\n- あたらしい (atarashii): Mới $→$ Chọn.\n- Chú ý phần Okurigana đi kèm sau chữ Hán 新 là しい.' 
    },
    { 
      q: '【古い】 じてんしゃです。', 
      o: ['ふるい', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nChiếc xe đạp cũ.\n\n✍️ Phân tích đáp án:\n- ふるい (furui): Cũ → Chọn.\n- ひろい (hiroi): Rộng → Sai nghĩa.' 
    }
  ],
  moji2: [
    { 
      q: '【プレゼント】を あげます。', 
      o: ['プレセント', 'プレゼント', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nTặng quà.\n\n✍️ Phân tích đáp án:\n- プレゼント: Quà tặng → Chọn.\n- Chú ý nét viết chữ ゼ (ze) có dấu đục tenten.' 
    },
    { 
      q: '【コーヒー】を のみます。', 
      o: ['コーヒー', 'コヒー', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nUống cà phê.\n\n✍️ Phân tích đáp án:\n- コーヒー: Cà phê → Chọn.\n- Chú ý trường âm (dấu gạch ngang) nằm ở cả hai âm tiết.' 
    },
    { 
      q: '【シャツ】を かいました。', 
      o: ['シヤツ', 'シャツ', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nMua áo sơ mi.\n\n✍️ Phân tích đáp án:\n- シャツ (shatsu): Áo sơ mi → Chọn.\n- Tránh nhầm với シヤツ (ya lớn, phát âm là shi-ya-tsu).' 
    },
    { 
      q: '【パン】を たべます。', 
      o: ['khác', 'khác', 'パン', 'khác'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nĂn bánh mì.\n\n✍️ Phân tích đáp án:\n- パン: Bánh mì → Chọn.\n- Chữ ハ có dấu tròn maru tạo thành âm Pa.' 
    }
  ],
  moji3: [
    { 
      q: 'はさみで かみを 【　　　】。', 
      o: ['きります', 'かします', 'かりまs', 'もらいます'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nCắt giấy bằng kéo.\n\n✍️ Phân tích đáp án:\n- きります (kirimasu): Cắt → Chọn.\n- かします (kashimasu): Cho mượn.\n- かります (karimasu): Mượn.' 
    },
    { 
      q: 'この りんごは とても 【　　　】es。', 
      o: ['つめたい', 'おいしい', 'おもしろい', 'いそがしい'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nQuả táo này rất ngon.\n\n✍️ Phân tích đáp án:\n- おいしい (oishii): Ngon → Chọn.\n- つめたい (tsumetai): Lạnh.' 
    },
    { 
      q: 'せんせいから ほんを 【　　　】。', 
      o: ['あげました', 'もらいました', 'かしました', 'おしえました'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nNhận sách từ thầy cô giáo.\n\n✍️ Phân tích đáp án:\n- もらいました (moraimashita): Nhận được → Chọn (trợ từ から chỉ xuất xứ).' 
    },
    { 
      q: '日本の カメラは 【　　　】ですか。', 
      o: ['どう', 'どんな', 'độc', 'độc'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nMáy ảnh Nhật Bản thế nào?\n\n✍️ Phân tích đáp án:\n- どう (dou): Như thế nào → Chọn.\n- どんな (donna): Như thế nào (phải đi sau là danh từ).' 
    }
  ],
  bunpou1: [
    { 
      q: 'スプーン（　　　）ごはんを たべます。', 
      o: ['で', 'に', 'を', 'gが'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nĂn cơm bằng thìa.\n\n✍️ Phân tích đáp án:\n- で (de): Trợ từ phương tiện/dụng cụ → Chọn.' 
    },
    { 
      q: 'わたしは 木村さん（　　　）はなを あげました。', 
      o: ['で', 'に', 'を', 'へ'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nTặng hoa cho chị Kimura.\n\n✍️ Phân tích đáp án:\n- に (ni): Đối tượng tiếp nhận hành động tặng → Chọn.' 
    },
    { 
      q: 'きのうの パーティーは （　　　）。', 
      o: ['たのしいです', 'たのしかった', 'たのしかったです', 'khác'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nBữa tiệc hôm qua đã rất vui.\n\n✍️ Phân tích đáp án:\n- たのしかったです: Quá khứ lịch sự của tính từ đuôi い (たのしい).' 
    },
    { 
      q: 'この へやは （　　　）ありません。', 
      o: ['khác', 'khác', 'しずかじゃ', 'khác'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nCăn phòng này không yên tĩnh.\n\n✍️ Phân tích đáp án:\n- しずかじゃ ありません: Phủ định của tính từ đuôi な (しずか).' 
    }
  ],
  bunpou2: [
    { 
      q: 'とうきょうは　___ ___ _★_ ___　まちです。', 
      o: ['て', 'きれいで', 'にぎやかな', 'とても'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nTokyo là một thành phố rất đẹp và nhộn nhịp.\n\n✍️ Phân tích đáp án:\n- Sắp xếp: とても (4) + きれいで (2) + にぎやかな (3) + まchです.\n- Ngôi sao ở vị trí thứ 3 là にぎやかな.' 
    },
    { 
      q: 'わたしは　___ ___ _★_ ___　もらいました。', 
      o: ['を', 'ともだち', 'に', 'とけい'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi nhận được chiếc đồng hồ từ bạn.\n\n✍️ Phân tích đáp án:\n- Sắp xếp: ともだち (2) + に (3) + とけい (4) + を (1) + もらいました.' 
    }
  ],
  dokkai1: [
    { 
      text: ['きょうは わたしの たんじょうびです。', 'あさ ははに プレゼントを もらいました。シャツと ぼうしです。', 'シャツは しろいです。ぼうしは くろいです。', 'よる かぞくと いっしょに レストランで しょくじuを します。'],
      qs: [
        { 
          q: 'なにを もらいましたか。', 
          o: ['khác', 'khác', 'しろい シャツと くろい ぼうし', 'khác'], 
          c: 2, 
          exp: '📖 Dịch nghĩa:\nNhận được gì?\n- Dựa vào văn bản: Áo sơ mi trắng và mũ đen.' 
        },
        { 
          q: 'よる どこで ごはんを たべますか。', 
          o: ['khác', 'レストラン', 'khác', 'khác'], 
          c: 1, 
          exp: '📖 Dịch nghĩa:\nĂn tối ở đâu?\n- Dựa vào câu cuối: Ăn tại nhà hàng (レストラン).' 
        }
      ]
    }
  ]
};

const pool_11_15 = {
  moji1: [
    { 
      q: '【外国】へ いきました。', 
      o: ['がいこく', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nĐi nước ngoài.\n\n✍️ Phân tích đáp án:\n- がいこく (gaikoku): Nước ngoài → Chọn.' 
    },
    { 
      q: 'ここは 【有名】な まちes。', 
      o: ['khác', 'ゆうめい', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nThành phố nổi tiếng.\n\n✍️ Phân tích đáp án:\n- ゆうめい (yuumei): Nổi tiếng → Chọn.' 
    },
    { 
      q: '【一日】に ３かい くすりを のみます。', 
      o: ['いちにち', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nMột ngày uống thuốc 3 lần.\n\n✍️ Phân tích đáp án:\n- いちにち: Thời lượng một ngày → Chọn. (ついたち: ngày mùng 1).' 
    },
    { 
      q: '【切手】を かいました。', 
      o: ['きって', 'きっぷ', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nMua tem.\n\n✍️ Phân tích đáp án:\n- きって: Tem → Chọn. (きっぷ: vé xe).' 
    }
  ],
  moji2: [
    { 
      q: '【カメラ】を かいたいです。', 
      o: ['khác', 'カメラ', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nMuốn mua máy ảnh.\n\n✍️ Phân tích đáp án:\n- カメラ: Máy ảnh → Chọn.' 
    },
    { 
      q: 'あたらし 【くるま】が ほしいです。', 
      o: ['車', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nMuốn có xe hơi mới.\n\n✍️ Phân tích đáp án:\n- 車 (Xa): Ô tô → Chọn.' 
    },
    { 
      q: '【デパート】へ いきます。', 
      o: ['デパート', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nĐi đến bách hóa.\n\n✍️ Phân tích đáp án:\n- デパート: Bách hóa → Chọn.' 
    },
    { 
      q: '【スーパー】で くだものを かいます。', 
      o: ['スーパー', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nMua trái cây ở siêu thị.\n\n✍️ Phân tích đáp án:\n- スーパー: Siêu thị → Chọn.' 
    }
  ],
  moji3: [
    { 
      q: 'りんごを みっつ 【　　　】。', 
      o: ['khác', 'khác', 'khác', 'ください'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nXin vui lòng lấy cho tôi 3 quả táo.\n\n✍️ Phân tích đáp án:\n- ください: Xin vui lòng đưa cho → Chọn.' 
    },
    { 
      q: 'いま のどが 【　　　】。', 
      o: ['かわきました', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nBây giờ tôi khát nước.\n\n✍️ Phân tích đáp án:\n- のどが かわきました: Khát nước → Chọn.' 
    },
    { 
      q: 'えきまで 【　　　】で いきます。', 
      o: ['じてんしゃ', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nĐi đến ga bằng xe đạp.\n\n✍️ Phân tích đáp án:\n- じてんしゃ (xe đạp): Phương tiện hợp lý nhất → Chọn.' 
    },
    { 
      q: '【　　　】から きましたか。', 
      o: ['dđâu/đó/đây (danh từ)', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nBạn đến từ đâu?\n\n✍️ Phân tích đáp án:\n- どこ: Ở đâu → Chọn.' 
    }
  ],
  bunpou1: [
    { 
      q: 'きょうは （　　　） たのしかったです。', 
      o: ['とても', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nHôm nay rất vui.\n\n✍️ Phân tích đáp án:\n- とても: Rất → Chọn (đi với tính từ khẳng định).' 
    },
    { 
      q: 'ここで しゃしんを （　　　）は いけません。', 
      o: ['khác', 'khác', 'とって', 'khác'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nKhông được chụp ảnh ở đây.\n\n✍️ Phân tích đáp án:\n- とって: Thể て của とります (chụp) → Chọn (Vて は いけません).' 
    },
    { 
      q: 'A「ちょっと （　　　）ましょうか。」', 
      o: ['やすみ', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nChúng ta nghỉ một lát nhé?\n\n✍️ Phân tích đáp án:\n- やすみ: Động từ bỏ ます để đi với ましょうか → Chọn.' 
    },
    { 
      q: 'わたしは にほんご（　　　） わかります。', 
      o: ['gが', 'を', 'に', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi hiểu tiếng Nhật.\n\n✍️ Phân tích đáp án:\n- が: Trợ từ đi với động từ trạng thái わかります → Chọn.' 
    }
  ],
  bunpou2: [
    { 
      q: 'わたしは　___ ___ _★_ ___　いきます。', 
      o: ['えいが', 'に', 'を', 'みに'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nTôi đi xem phim.\n\n✍️ Phân tích đáp án:\n- Sắp xếp: えいが (1) + を (3) + みに (4) + に (2) + いきます.\n- Ngôi sao ở vị trí thứ 3 là みに (4).' 
    },
    { 
      q: 'この　___ ___ _★_ ___　いいですか。', 
      o: ['を', 'ペン', 'つかっても', 'は'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nTôi dùng chiếc bút này có được không?\n\n✍️ Phân tích đáp án:\n- Sắp xếp: ペン (2) + は (4) + つかっても (3) + いいですか.' 
    }
  ],
  dokkai1: [
    { 
      text: ['わたしの かぞくは ４にんです。', 'あには だいがくseいです. いま とうきょう（　１　）すんでいます。', 'わたしは こうこうせいです。', 'らいねん だいがくへ （　２　）たいです。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['đối/tại', 'に', 'hướng', 'đối tượng'], 
          c: 1, 
          exp: '📖 Dịch nghĩa:\nSống tại Tokyo.\n- Trợ từ đi với động từ cư trú すんでいます luôn là に.' 
        },
        { 
          q: '（　２　）に入れるものはđầu/nơi/nào?', 
          o: ['いき', 'khác', 'khác', 'khác'], 
          c: 0, 
          exp: '📖 Dịch nghĩa:\nMuốn đi học đại học.\n- Đứng trước たい là động từ thể ます bỏ ます (いきます $→$ いき).' 
        }
      ]
    }
  ]
};

const pool_16_20 = {
  moji1: [
    { 
      q: 'えいがを 【見】ます。', 
      o: ['み', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nXem phim.\n\n✍️ Phân tích đáp án:\n- み: Cách đọc chữ 見 trong động từ 見ます $→$ Chọn.' 
    },
    { 
      q: 'あした 【雨】が ふります。', 
      o: ['khác', 'あめ', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nNgày mai trời mưa.\n\n✍️ Phân tích đáp án:\n- あめ (ame): Mưa → Chọn.' 
    },
    { 
      q: '【午後】の じゅぎょうは ありません。', 
      o: ['ごご', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nKhông có giờ học buổi chiều.\n\n✍️ Phân tích đáp án:\n- ごご: Buổi chiều → Chọn.' 
    },
    { 
      q: '【午前】 ６じに おきます。', 
      o: ['ごぜん', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nThức dậy lúc 6 giờ sáng.\n\n✍️ Phân tích đáp án:\n- ごぜん: Buổi sáng → Chọn.' 
    }
  ],
  moji2: [
    { 
      q: '【みぎ】へ まがります。', 
      o: ['右', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nRẽ phải.\n\n✍️ Phân tích đáp án:\n- 右 (Hữu): Bên phải → Chọn.' 
    },
    { 
      q: '【しゃしん】を とります。', 
      o: ['写真', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nChụp ảnh.\n\n✍️ Phân tích đáp án:\n- 写真 (Tả Chân): Bức ảnh → Chọn.' 
    },
    { 
      q: '【ひる】ごはんを たべます。', 
      o: ['昼', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nĂn cơm trưa.\n\n✍️ Phân tích đáp án:\n- 昼 (Trú): Buổi trưa → Chọn.' 
    },
    { 
      q: '【よる】ねます。', 
      o: ['夜', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nNgủ buổi tối.\n\n✍️ Phân tích đáp án:\n- 夜 (Dạ): Buổi tối → Chọn.' 
    }
  ],
  moji3: [
    { 
      q: 'ここに くるまを 【　　　】。', 
      o: ['とめないで ください', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nXin vui lòng không đỗ xe ở đây.\n\n✍️ Phân tích đáp án:\n- とめないで ください: Xin đừng đỗ xe (Vない + で ください) → Chọn.' 
    },
    { 
      q: 'パスポートを 【　　　】。', 
      o: ['khác', 'みせなければ なりません', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nPhải xuất trình hộ chiếu.\n\n✍️ Phân tích đáp án:\n- みせなければ なりません: Phải cho xem (Vなければ なりません) → Chọn.' 
    },
    { 
      q: 'あしたは 【　　　】から、đầu/nơi/đâu cũng không đi. ', 
      o: ['あめ', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nVì trời mưa nên không đi đâu.\n\n✍️ Phân tích đáp án:\n- あめ (mưa): Thời tiết lý do → Chọn.' 
    },
    { 
      q: 'かぜを ひきましたから、くすりを 【　　　】。', 
      o: ['みます/uống', 'たべます', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nUống thuốc do cảm.\n\n✍️ Phân tích đáp án:\n- のみます: Uống thuốc (dùng のみます chứ không dùng たべます) → Chọn.' 
    }
  ],
  bunpou1: [
    { 
      q: 'わたしは ピアノを （　　　）が できます。', 
      o: ['khác', 'ひくこと', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nTôi có thể chơi piano.\n\n✍️ Phân tích đáp án:\n- ひくこと: Chơi đàn (đã danh từ hóa qua こと) → Chọn (Vる こと が できます).' 
    },
    { 
      q: 'nhiều/nơiへ （　　　） まえに、べんきょうしました。', 
      o: ['いく', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTrước khi đi Nhật, tôi đã học bài.\n\n✍️ Phân tích đáp án:\n- いく (đi): Động từ ở thể từ điển Vる đi trước まえに → Chọn.' 
    },
    { 
      q: 'うまに （　　　）ことが ありますか。', 
      o: ['khác', 'nhat', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nBạn từng cưỡi ngựa chưa?\n\n✍️ Phân tích đáp án:\n- のった: Thể quá khứ Vた của のります (cưỡi) → Chọn (Vた ことが あります).' 
    },
    { 
      q: 'この りんごは おいしい（　　　）、やすいです。', 
      o: ['し', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTáo vừa ngon vừa rẻ.\n\n✍️ Phân tích đáp án:\n- し: Trợ từ liệt kê song song → Chọn.' 
    }
  ],
  bunpou2: [
    { 
      q: 'わたしの　___ ___ _★_ ___　です。', 
      o: ['えo', 'しゅみ', 'は', 'かくこと'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nSở thích của tôi là vẽ tranh.\n\n✍️ Phân tích đáp án:\n- Sắp xếp: しゅみ (2) + は (3) + えを (1) + かくこと (4) + です.' 
    },
    { 
      q: 'ここで　___ ___ _★_ ___　ください。', 
      o: ['を', 'しゃしん', 'とらないで', 'は'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nXin vui lòng không chụp ảnh ở đây.\n\n✍️ Phân tích đáp án:\n- Sắp xếp: しゃしん (2) + を (1) + とらないで (3) + ください.' 
    }
  ],
  dokkai1: [
    { 
      text: ['わたしは まいあさ ６じに おきます。', 'あさごはんを （　１　）まえに、ジョgiングを します。', 'ジョgiングは しゅみです。', '그리고, シャワーを あびてから、ごはんを たべます。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['たべる', 'khác', 'khác', 'khác'], 
          c: 0, 
          exp: '📖 Dịch nghĩa:\nTrước khi ăn sáng.\n- Động từ thể từ điển đứng trước まえに (たべる まえに).' 
        },
        { 
          q: 'ジョgiングの あとで、なにを しますか。', 
          o: ['khác', 'khác', 'シャワーを あびます', 'khác'], 
          c: 2, 
          exp: '📖 Dịch nghĩa:\nHành động sau chạy bộ.\n- Sau chạy bộ (ジョギング), tắm rồi mới ăn cơm (シャワーをあびます).' 
        }
      ]
    }
  ]
};

const pool_21_25 = {
  moji1: [
    { 
      q: '【電気】を つけます。', 
      o: ['khác', 'でんき', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nBật điện.\n\n✍️ Phân tích đáp án:\n- でんき (denki): Điện → Chọn.' 
    },
    { 
      q: '【道】を まっすぐ いきます。', 
      o: ['khác', 'みち', 'khác', 'khác'], 
      c: 1, 
      exp: '📖 Dịch nghĩa:\nĐi thẳng con đường.\n\n✍️ Phân tích đáp án:\n- みち (michi): Con đường → Chọn.' 
    },
    { 
      q: '【今年】は ２０２３ねんです。', 
      o: ['ことし', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nNăm nay là năm 2023.\n\n✍️ Phân tích đáp án:\n- ことし: Năm nay → Chọn.' 
    },
    { 
      q: '【去年】 にほんへ きました。', 
      o: ['きょねん', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nNăm ngoái đã tới Nhật.\n\n✍️ Phân tích đáp án:\n- きょねん: Năm ngoái → Chọn.' 
    }
  ],
  moji2: [
    { 
      q: '【おとうと】が います。', 
      o: ['弟', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nCó em trai.\n\n✍️ Phân tích đáp án:\n- 弟 (Đệ): Em trai → Chọn.' 
    },
    { 
      q: 'あめが 【ふって】 います。', 
      o: ['降って', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nMưa đang rơi.\n\n✍️ Phân tích đáp án:\n- 降って: Rơi (mưa) → Chọn.' 
    },
    { 
      q: '【らいねん】は なにを しますか。', 
      o: ['来年', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nSang năm sẽ làm gì?\n\n✍️ Phân tích đáp án:\n- 来年: Sang năm → Chọn.' 
    },
    { 
      q: '【まいにち】 べんきょうします。', 
      o: ['毎日', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nHọc bài mỗi ngày.\n\n✍️ Phân tích đáp án:\n- 毎日: Mỗi ngày → Chọn.' 
    }
  ],
  moji3: [
    { 
      q: 'ねむい 【　　　】、コーヒーを のみます。', 
      o: ['とき', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nKhi buồn ngủ, tôi uống cà phê.\n\n✍️ Phân tích đáp án:\n- とき: Khi/Lúc (dùng sau tính từ đuôi い) → Chọn.' 
    },
    { 
      q: 'あめが ふっても、いきます。', 
      o: ['khác', 'khác', 'あめgが ふりますが、いきます。', 'khác'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nDù trời mưa vẫn đi.\n\n✍️ Phân tích đáp án:\n- Đồng nghĩa với câu dùng trợ từ nghịch lý が (Mưa nhưng tôi vẫn đi) → Chọn.' 
    },
    { 
      q: 'きのうは とても 【　　　】です。', 
      o: ['いそがしかった', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nHôm qua đã rất bận.\n\n✍️ Phân tích đáp án:\n- いそ가しかった: Thể quá khứ của tính từ đuôi い (いそがしい) → Chọn.' 
    },
    { 
      q: 'やすみは 【　　　】ですか。', 
      o: ['いつ', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nKhi nào được nghỉ?\n\n✍️ Phân tích đáp án:\n- いつ (Khi nào?): Hỏi thời gian → Chọn.' 
    }
  ],
  bunpou1: [
    { 
      q: 'あしたは あめが ふる（　　　） おもいます。', 
      o: ['と', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nNghĩ ngày mai trời mưa.\n\n✍️ Phân tích đáp án:\n- と: Trợ từ dùng để trích dẫn phán đoán (と おもいます) → Chọn.' 
    },
    { 
      q: 'これは わたしが （　　　） かばんです。', 
      o: ['khác', 'khác', 'かった', 'khác'], 
      c: 2, 
      exp: '📖 Dịch nghĩa:\nĐây là chiếc túi mà tôi đã mua.\n\n✍️ Phân tích đáp án:\n- かった (đã mua): Động từ ở thể quá khứ Vた bổ nghĩa cho danh từ かばん → Chọn.' 
    },
    { 
      q: 'じかんが なかった（　　　）、ほんを よみません。', 
      o: ['たら', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nNếu không có thời gian, tôi không đọc sách.\n\n✍️ Phân tích đáp án:\n- たら: Câu điều kiện giả định (Vたら) → Chọn.' 
    },
    { 
      q: 'わたしは にほんごが はなせる（　　　） に なりました。', 
      o: ['よう', 'khác', 'khác', 'khác'], 
      c: 0, 
      exp: '📖 Dịch nghĩa:\nTôi đã có thể nói tiếng Nhật.\n\n✍️ Phân tích đáp án:\n- よう: Cấu trúc biến đổi năng lực (よう に なります) → Chọn.' 
    }
  ],
  bunpou2: [
    { 
      q: 'あの　___ ___ _★_ ___　は だれですか。', 
      o: ['を', 'hiep', 'メガネ', 'かけている'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nNgười đang đeo kính kia là ai thế?\n\n✍️ Phân tích đáp án:\n- Sắp xếp: メガネ (3) + を (1) + かけている (4) + ひと (2) + はだれですか.' 
    },
    { 
      q: 'たのしく　___ ___ _★_ ___　と おもいます。', 
      o: ['あしたの', 'は', 'p...', 'ない'], 
      c: 3, 
      exp: '📖 Dịch nghĩa:\nTôi nghĩ bữa tiệc ngày mai sẽ không vui.\n\n✍️ Phân tích đáp án:\n- Sắp xếp: あしたの (1) + パーティー (3) + は (2) + ない (4) + と おもいます.' 
    }
  ],
  dokkai1: [
    { 
      text: ['わたしは きのう とmだちの うちへ いきました。', 'ともだちが おいしい ケーキを つくって （　１　）。', 'とても おいしかったです。', 'わたしは また ケーキを （　２　）と おもいます。'],
      qs: [
        { 
          q: '（　１　）に入れるものはどれですか。', 
          o: ['khác', 'khác', 'くれました', 'khác'], 
          c: 2, 
          exp: '📖 Dịch nghĩa:\nBạn tôi làm bánh kem cho tôi.\n- Bạn làm cho mình dùng cấu trúc Vて くれました.' 
        },
        { 
          q: '（　２　）に入れるものはどれですか。', 
          o: ['khác', 'khác', 'たべたい', 'khác'], 
          c: 2, 
          exp: '📖 Dịch nghĩa:\nMuốn ăn lại bánh kem.\n- Động từ thể mong muốn Vたい kết hợp biểu thị suy nghĩ (Vたい と おもいます).' 
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
