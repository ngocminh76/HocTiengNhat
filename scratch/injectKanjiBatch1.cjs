const fs = require('fs');

const missingBreakdowns = {
  "自動車": {
    "hanviet": "TỰ ĐỘNG XA",
    "components": "自 (Tự) + 動 (Động) + 車 (Xa)",
    "story": "Chiếc xe (Xa) có khả năng tự (Tự) chuyển động (Động) chính là Ô tô.",
    "examples": "自動車 (Ô tô), 自動 (Tự động)"
  },
  "机": {
    "hanviet": "KỶ",
    "components": "木 (Mộc) + 几 (Kỷ)",
    "story": "Cái bàn nhỏ (Kỷ) được đóng bằng gỗ (Mộc) chính là cái bàn học/bàn làm việc.",
    "examples": "机 (Bàn)"
  },
  "英語": {
    "hanviet": "ANH NGỮ",
    "components": "英 (Anh) + 語 (Ngữ)",
    "story": "Ngôn ngữ (Ngữ) của người Anh (Anh).",
    "examples": "英語 (Tiếng Anh), 英国 (Nước Anh)"
  },
  "日本語": {
    "hanviet": "NHẬT BẢN NGỮ",
    "components": "日 (Nhật) + 本 (Bản) + 語 (Ngữ)",
    "story": "Ngôn ngữ (Ngữ) của đất nước cội nguồn (Bản) mặt trời (Nhật).",
    "examples": "日本語 (Tiếng Nhật)"
  },
  "～語": {
    "hanviet": "NGỮ",
    "components": "言 (Ngôn) + 吾 (Ngô)",
    "story": "Ngôn ngữ là những lời nói (Ngôn) của tôi (Ngô) truyền đạt cho người khác.",
    "examples": "言語 (Ngôn ngữ), 英語 (Tiếng Anh)"
  },
  "何": {
    "hanviet": "HÀ",
    "components": "亻 (Nhân) + 可 (Khả)",
    "story": "Con người (Nhân) đang hỏi xem có khả năng (Khả) làm được cái gì.",
    "examples": "何 (Cái gì), 何時 (Mấy giờ)"
  },
  "ほんの気持ちです": {
    "hanviet": "KHÍ TRÌ",
    "components": "気 (Khí) + 持 (Trì)",
    "story": "Giữ (Trì) trong lòng một chút tâm trạng (Khí) để bày tỏ tấm lòng thành.",
    "examples": "気持ち (Cảm giác/Tấm lòng)"
  },
  "これからお世話になります": {
    "hanviet": "THẾ THOẠI",
    "components": "世 (Thế) + 話 (Thoại)",
    "story": "Ở trên đời (Thế) luôn nói (Thoại) những lời quan tâm, chăm sóc lẫn nhau.",
    "examples": "世話 (Chăm sóc/Giúp đỡ)"
  },
  "階": {
    "hanviet": "GIAI",
    "components": "阝 (Phụ) + 皆 (Giai)",
    "story": "Mọi người (Giai) cùng bước lên gò đất (Phụ) để lên tầng cao hơn.",
    "examples": "階段 (Cầu thang), 一階 (Tầng 1)"
  },
  "食堂": {
    "hanviet": "THỰC ĐƯỜNG",
    "components": "食 (Thực) + 堂 (Đường)",
    "story": "Căn nhà lớn (Đường) chuyên dùng để tổ chức ăn uống (Thực) là Nhà ăn.",
    "examples": "食堂 (Nhà ăn)"
  },
  "事務所": {
    "hanviet": "SỰ VỤ SỞ",
    "components": "事 (Sự) + 務 (Vụ) + 所 (Sở)",
    "story": "Nơi (Sở) thực hiện các nhiệm vụ (Vụ) và sự việc (Sự) là Văn phòng làm việc.",
    "examples": "事務所 (Văn phòng)"
  },
  "会議室": {
    "hanviet": "HỘI NGHỊ THẤT",
    "components": "会 (Hội) + 議 (Nghị) + 室 (Thất)",
    "story": "Căn phòng (Thất) để mọi người gặp gỡ (Hội) và bàn luận (Nghị) là Phòng họp.",
    "examples": "会議室 (Phòng họp)"
  },
  "受付": {
    "hanviet": "THỤ PHÓ",
    "components": "受 (Thụ) + 付 (Phó)",
    "story": "Nơi tiếp nhận (Thụ) và giao phó (Phó) thông tin cho khách hàng là Quầy tiếp tân.",
    "examples": "受付 (Quầy tiếp tân)"
  },
  "部屋": {
    "hanviet": "BỘ ỐC",
    "components": "部 (Bộ) + 屋 (Ốc)",
    "story": "Một phần (Bộ) nhỏ được chia ra trong căn nhà (Ốc) chính là Căn phòng.",
    "examples": "部屋 (Căn phòng)"
  },
  "自動販売機": {
    "hanviet": "TỰ ĐỘNG PHÁN MẠI CƠ",
    "components": "自 (Tự) + 動 (Động) + 販 (Phán) + 売 (Mại) + 機 (Cơ)",
    "story": "Cỗ máy tự chuyển động để buôn bán là Máy bán hàng tự động.",
    "examples": "自動販売機 (Máy bán hàng tự động)"
  },
  "会社": {
    "hanviet": "HỘI XÃ",
    "components": "会 (Hội) + 社 (Xã)",
    "story": "Nơi mọi người trong xã hội tụ họp lại làm việc là Công ty.",
    "examples": "会社 (Công ty)"
  },
  "靴": {
    "hanviet": "NGOA",
    "components": "革 (Cách) + 化 (Hóa)",
    "story": "Tấm da (Cách) động vật được biến hóa (Hóa) thành đôi Giày.",
    "examples": "靴 (Giày)"
  },
  "売り場": {
    "hanviet": "MẠI TRƯỜNG",
    "components": "売 (Mại) + 場 (Trường)",
    "story": "Địa điểm (Trường) chuyên dùng để bán (Mại) hàng hóa là Quầy bán.",
    "examples": "売り場 (Quầy bán)"
  },
  "地下": {
    "hanviet": "ĐỊA HẠ",
    "components": "地 (Địa) + 下 (Hạ)",
    "story": "Khu vực nằm bên dưới mặt đất là Tầng hầm.",
    "examples": "地下 (Tầng hầm)"
  },
  "～円": {
    "hanviet": "VIÊN",
    "components": "円 (Viên)",
    "story": "Đồng tiền xu có hình tròn.",
    "examples": "円 (Yên Nhật)"
  },
  "百": {
    "hanviet": "BÁCH",
    "components": "一 (Nhất) + 白 (Bạch)",
    "story": "Một điều trắng xóa không nhớ nổi vì có tới hàng Trăm thứ.",
    "examples": "百 (Một trăm)"
  },
  "千": {
    "hanviet": "THIÊN",
    "components": "丿 (Phiệt) + 十 (Thập)",
    "story": "Mười cộng thêm nét phẩy phẩy lên là một Nghìn.",
    "examples": "千 (Một nghìn)"
  },
  "万": {
    "hanviet": "VẠN",
    "components": "一 (Nhất) + 勹 (Bao) + 丿 (Phiệt)",
    "story": "Hình ảnh số lượng khổng lồ không thể đếm hết bằng tay.",
    "examples": "一万 (Một vạn)"
  },
  "働きます": {
    "hanviet": "ĐỘNG",
    "components": "亻 (Nhân) + 動 (Động)",
    "story": "Người (Nhân) luôn tay luôn chân chuyển động (Động) nghĩa là đang Làm việc.",
    "examples": "働きます (Làm việc)"
  },
  "勉強します": {
    "hanviet": "MIỄN CƯỜNG",
    "components": "勉 (Miễn) + 強 (Cường)",
    "story": "Phải cố gắng vượt qua mọi sức ép thì mới Học tập tốt được.",
    "examples": "勉強 (Học tập)"
  },
  "終わります": {
    "hanviet": "CHUNG",
    "components": "糸 (Mịch) + 冬 (Đông)",
    "story": "Khi mùa đông đến, đan xong sợi chỉ cuối cùng để Kết thúc năm.",
    "examples": "終わります (Kết thúc)"
  },
  "大変ですね": {
    "hanviet": "ĐẠI BIẾN",
    "components": "大 (Đại) + 変 (Biến)",
    "story": "Sự biến đổi to lớn khiến mọi thứ trở nên Vất vả.",
    "examples": "大変 (Vất vả)"
  },
  "番号": {
    "hanviet": "PHIÊN HIỆU",
    "components": "番 (Phiên) + 号 (Hiệu)",
    "story": "Ký hiệu đánh dấu theo từng lượt chính là Số hiệu.",
    "examples": "番号 (Số)"
  },
  "何番": {
    "hanviet": "HÀ PHIÊN",
    "components": "何 (Hà) + 番 (Phiên)",
    "story": "Hỏi xem là Số Mấy.",
    "examples": "何番 (Số mấy)"
  },
  "お茶": {
    "hanviet": "TRÀ",
    "components": "艹 (Thảo) + 人 (Nhân) + 木 (Mộc)",
    "story": "Người hái lá cỏ từ trên cây xuống để pha Trà.",
    "examples": "お茶 (Trà)"
  },
  "水": {
    "hanviet": "THỦY",
    "components": "水 (Thủy)",
    "story": "Hình ảnh dòng nước chảy.",
    "examples": "水 (Nước)"
  },
  "全部で": {
    "hanviet": "TOÀN BỘ",
    "components": "全 (Toàn) + 部 (Bộ)",
    "story": "Gom hoàn toàn tất cả các bộ phận lại sẽ được Toàn bộ.",
    "examples": "全部 (Toàn bộ)"
  },
  "何枚": {
    "hanviet": "HÀ MAI",
    "components": "何 (Hà) + 枚 (Mai)",
    "story": "Hỏi xem có Mấy tờ/tấm giấy.",
    "examples": "何枚 (Mấy tờ)"
  },
  "一つ": {
    "hanviet": "NHẤT",
    "components": "一 (Nhất)",
    "story": "Một gạch ngang biểu thị cho số 1.",
    "examples": "一つ (Một cái)"
  },
  "二つ": {
    "hanviet": "NHỊ",
    "components": "二 (Nhị)",
    "story": "Hai gạch ngang biểu thị cho số 2.",
    "examples": "二つ (Hai cái)"
  },
  "三つ": {
    "hanviet": "TAM",
    "components": "三 (Tam)",
    "story": "Ba gạch ngang biểu thị cho số 3.",
    "examples": "三つ (Ba cái)"
  },
  "四つ": {
    "hanviet": "TỨ",
    "components": "四 (Tứ)",
    "story": "Chia ra làm bốn hướng.",
    "examples": "四つ (Bốn cái)"
  },
  "五つ": {
    "hanviet": "NGŨ",
    "components": "五 (Ngũ)",
    "story": "Năm đường giao nhau.",
    "examples": "五つ (Năm cái)"
  },
  "行きます": {
    "hanviet": "HÀNH",
    "components": "彳 (Sách) + 亍 (Xúc)",
    "story": "Bước chân trái rồi bước chân phải tạo thành Đi.",
    "examples": "行きます (Đi)"
  },
  "来ます": {
    "hanviet": "LAI",
    "components": "来 (Lai)",
    "story": "Người từ phương xa đến núp dưới bóng cây.",
    "examples": "来ます (Đến)"
  },
  "帰ります": {
    "hanviet": "QUY",
    "components": "帰 (Quy)",
    "story": "Dọn dẹp vũ khí, cất áo để Trở về nhà.",
    "examples": "帰ります (Trở về)"
  },
  "学校": {
    "hanviet": "HỌC HIỆU",
    "components": "学 (Học) + 校 (Hiệu)",
    "story": "Nơi có nhiều cây và tòa nhà để trẻ em học tập là Trường học.",
    "examples": "学校 (Trường học)"
  },
  "駅": {
    "hanviet": "DỊCH",
    "components": "馬 (Mã) + 尺 (Xích)",
    "story": "Nơi những con ngựa dừng lại đo đếm đoạn đường là Nhà ga.",
    "examples": "駅 (Nhà ga)"
  },
  "飛行機": {
    "hanviet": "PHI HÀNH CƠ",
    "components": "飛 (Phi) + 行 (Hành) + 機 (Cơ)",
    "story": "Cỗ máy có thể đi bằng cách bay trên trời là Máy bay.",
    "examples": "飛行機 (Máy bay)"
  },
  "船": {
    "hanviet": "THUYỀN",
    "components": "舟 (Chu) + 几 (Kỷ) + 口 (Khẩu)",
    "story": "Chiếc thuyền chở những người có miệng ăn trên bàn chính là Tàu lớn.",
    "examples": "船 (Tàu)"
  },
  "電車": {
    "hanviet": "ĐIỆN XA",
    "components": "電 (Điện) + 車 (Xa)",
    "story": "Chiếc xe chạy bằng năng lượng điện là Tàu điện.",
    "examples": "電車 (Tàu điện)"
  },
  "地下鉄": {
    "hanviet": "ĐỊA HẠ THIẾT",
    "components": "地 (Địa) + 下 (Hạ) + 鉄 (Thiết)",
    "story": "Khối sắt khổng lồ chạy dưới mặt đất là Tàu điện ngầm.",
    "examples": "地下鉄 (Tàu điện ngầm)"
  },
  "新幹線": {
    "hanviet": "TÂN CÁN TUYẾN",
    "components": "新 (Tân) + 幹 (Cán) + 線 (Tuyến)",
    "story": "Tuyến đường sắt mới là huyết mạch chính siêu tốc của Nhật Bản.",
    "examples": "新幹線 (Shinkansen)"
  },
  "自転車": {
    "hanviet": "TỰ CHUYỂN XA",
    "components": "自 (Tự) + 転 (Chuyển) + 車 (Xa)",
    "story": "Chiếc xe mà bạn phải tự đạp cho bánh lăn tròn là Xe đạp.",
    "examples": "自転車 (Xe đạp)"
  },
  "歩いて": {
    "hanviet": "BỘ",
    "components": "止 (Chỉ) + 少 (Thiểu)",
    "story": "Người đi bộ bước một chút rồi lại dừng lại.",
    "examples": "歩いて (Đi bộ)"
  },
  "人": {
    "hanviet": "NHÂN",
    "components": "人 (Nhân)",
    "story": "Hai người đứng dựa lưng vào nhau.",
    "examples": "人 (Người)"
  },
  "友達": {
    "hanviet": "HỮU ĐẠT",
    "components": "友 (Hữu) + 達 (Đạt)",
    "story": "Nhiều người kết giao bằng hữu thân thiết với nhau là Bạn bè.",
    "examples": "友達 (Bạn bè)"
  },
  "彼": {
    "hanviet": "BỈ",
    "components": "彳 (Sách) + 皮 (Bì)",
    "story": "Anh ấy đang bước đi mang theo tấm da.",
    "examples": "彼 (Anh ấy)"
  },
  "彼女": {
    "hanviet": "BỈ NỮ",
    "components": "彼 (Bỉ) + 女 (Nữ)",
    "story": "Người phụ nữ đi cùng anh ấy chính là Bạn gái.",
    "examples": "彼女 (Bạn gái)"
  },
  "家族": {
    "hanviet": "GIA TỘC",
    "components": "家 (Gia) + 族 (Tộc)",
    "story": "Những người sống chung dưới một mái nhà tạo thành Gia đình.",
    "examples": "家族 (Gia đình)"
  },
  "一人で": {
    "hanviet": "NHẤT NHÂN",
    "components": "一 (Nhất) + 人 (Nhân)",
    "story": "Chỉ có 1 người lẻ loi nghĩa là Một mình.",
    "examples": "一人で (Một mình)"
  }
};

for (let i = 2; i <= 5; i++) {
  const filePath = `src/data/lessons/lesson${i}.ts`;
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Use regex to find each word block and inject kanjiBreakdown if it exists in our dictionary
  Object.keys(missingBreakdowns).forEach(word => {
    const data = missingBreakdowns[word];
    // We look for a block that has "word": "word", and we inject kanjiBreakdown at the end before its closing }
    // Example: "type": "Danh từ"\n    }
    
    // First let's check if the word is in this file
    if (content.includes(`"word": "${word}"`)) {
      // Find the object
      const wordRegex = new RegExp(`(\\"word\\"\\s*:\\s*\\"${word}\\"[\\s\\S]*?\\"type\\"\\s*:\\s*\\"[^\\"]+\\")(\\s*\\})`, 'g');
      
      content = content.replace(wordRegex, (match, p1, p2) => {
        // check if kanjiBreakdown already exists
        if (p1.includes('"kanjiBreakdown"')) return match;
        
        const injection = `,
      "kanjiBreakdown": {
        "hanviet": "${data.hanviet}",
        "components": "${data.components}",
        "story": "${data.story}",
        "examples": "${data.examples}"
      }`;
        
        return p1 + injection + p2;
      });
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated lesson ${i}`);
}
