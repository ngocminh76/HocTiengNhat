const fs = require('fs');

const missingBreakdowns = {
  "思います": {"hanviet": "TƯ", "components": "田 (Điền) + 心 (Tâm)", "story": "Làm ruộng (Điền) bằng cả Trái tim (Tâm) đòi hỏi phải Suy nghĩ (Tư).", "examples": "思います (Nghĩ rằng)"},
  "言います": {"hanviet": "NGÔN", "components": "言 (Ngôn - Lời nói)", "story": "Lời nói phát ra từ miệng.", "examples": "言います (Nói rằng)"},
  "足ります": {"hanviet": "TÚC", "components": "足 (Túc - Chân/Đầy đủ)", "story": "Hình ảnh cái chân, hàm ý Đủ.", "examples": "足ります (Đủ)"},
  "勝ちます": {"hanviet": "THẮNG", "components": "月 (Nhục) + 券 (Khoán) + 力 (Lực)", "story": "Dùng sức lực (Lực) giành được khế ước (Khoán) bằng xương thịt (Nhục) là Chiến thắng.", "examples": "勝ちます (Thắng)"},
  "負けます": {"hanviet": "PHỤ", "components": "ク + 貝 (Bối - Tiền)", "story": "Phải mang tiền (Bối) đi đền vì Thua trận.", "examples": "負けます (Thua)"},
  "役に立ちます": {"hanviet": "DỊCH LẬP", "components": "役 (Dịch) + 立 (Lập)", "story": "Đứng lên (Lập) phục vụ vai trò (Dịch) là Hữu ích.", "examples": "役に立ちます (Hữu ích)"},
  "無駄（な）": {"hanviet": "VÔ ĐÀ", "components": "無 (Vô - Không) + 駄 (Đà)", "story": "Không có tác dụng gì là Lãng phí.", "examples": "無駄 (Lãng phí)"},
  "不便（な）": {"hanviet": "BẤT TIỆN", "components": "不 (Bất - Không) + 便 (Tiện - Tiện lợi)", "story": "Không tiện lợi.", "examples": "不便 (Bất tiện)"},
  "同じ": {"hanviet": "ĐỒNG", "components": "同 (Đồng)", "story": "Cùng chung một thứ.", "examples": "同じ (Giống nhau)"},
  "首相": {"hanviet": "THỦ TƯỚNG", "components": "首 (Thủ - Đầu) + 相 (Tương - Quan tướng)", "story": "Vị quan (Tương) đứng đầu (Thủ) là Thủ tướng.", "examples": "首相 (Thủ tướng)"},
  "大統領": {"hanviet": "ĐẠI THỐNG LĨNH", "components": "大 (Đại) + 統 (Thống) + 領 (Lĩnh)", "story": "Người đứng ra thống lĩnh mọi thứ to lớn là Tổng thống.", "examples": "大統領 (Tổng thống)"},
  "政治": {"hanviet": "CHÍNH TRỊ", "components": "政 (Chính) + 治 (Trị)", "story": "Cai trị một cách chính đáng.", "examples": "政治 (Chính trị)"},
  "試合": {"hanviet": "THÍ HỢP", "components": "試 (Thí - Thử) + 合 (Hợp - Tụ họp)", "story": "Tụ họp (Hợp) lại để thi đấu thử (Thí) sức mạnh.", "examples": "試合 (Trận đấu)"},
  "意見": {"hanviet": "Ý KIẾN", "components": "意 (Ý - Ý nghĩa) + 見 (Kiến - Nhìn)", "story": "Góc nhìn mang ý nghĩa cá nhân là Ý kiến.", "examples": "意見 (Ý kiến)"},
  "お話": {"hanviet": "THOẠI", "components": "話 (Thoại)", "story": "Câu chuyện.", "examples": "お話 (Câu chuyện)"},
  "あります[お祭りが〜]": {"hanviet": "TẾ", "components": "祭り (Tế)", "story": "Được tổ chức (lễ hội).", "examples": "あります (Được tổ chức)"},
  "交通": {"hanviet": "GIAO THÔNG", "components": "交 (Giao - Giao nhau) + 通 (Thông - Đi qua)", "story": "Đường đi qua lại cắt ngang giao nhau.", "examples": "交通 (Giao thông)"},
  "最近": {"hanviet": "TỐI CẬN", "components": "最 (Tối - Nhất) + 近 (Cận - Gần)", "story": "Gần (Cận) đây nhất (Tối).", "examples": "最近 (Gần đây)"},
  "多分": {"hanviet": "ĐA PHÂN", "components": "多 (Đa - Nhiều) + 分 (Phân - Phần)", "story": "Chiếm nhiều phần nghĩa là Có lẽ thế.", "examples": "多分 (Có lẽ)"},

  "着ます": {"hanviet": "TRƯỚC", "components": "着 (Trước - Mặc)", "story": "Khoác lên người áo sơ mi.", "examples": "着ます (Mặc (áo sơ mi, vv))"},
  "生まれます": {"hanviet": "SINH", "components": "生 (Sinh)", "story": "Cây đâm chồi nảy lộc mang sự sống (Sinh).", "examples": "生まれます (Được sinh ra)"},
  "帽子": {"hanviet": "MẠO TỬ", "components": "帽 (Mạo - Mũ) + 子 (Tử)", "story": "Chiếc mũ.", "examples": "帽子 (Mũ)"},
  "眼鏡": {"hanviet": "NHÃN KÍNH", "components": "眼 (Nhãn - Mắt) + 鏡 (Kính - Cái gương)", "story": "Tấm kính đeo ở mắt là Mắt kính.", "examples": "眼鏡 (Kính)"},
  "家賃": {"hanviet": "GIA NHẤN", "components": "家 (Gia - Nhà) + 賃 (Nhấn - Tiền thuê)", "story": "Tiền thuê mượn Nhà.", "examples": "家賃 (Tiền thuê nhà)"},
  "和室": {"hanviet": "HÒA THẤT", "components": "和 (Hòa - Nhật Bản) + 室 (Thất - Phòng)", "story": "Căn phòng mang phong cách hòa bình của Nhật Bản.", "examples": "和室 (Phòng kiểu Nhật)"},
  "押し入れ": {"hanviet": "ÁP NHẬP", "components": "押 (Áp - Đẩy) + 入 (Nhập - Vào)", "story": "Tủ mà ta ấn đẩy đồ vật vào để cất.", "examples": "押し入れ (Tủ âm tường)"},
  "布団": {"hanviet": "BỐ ĐOÀN", "components": "布 (Bố - Vải) + 団 (Đoàn - Hình tròn/Đoàn thể)", "story": "Tấm đệm làm từ vải tròn cuộn lại.", "examples": "布団 (Đệm)"},
  "万里の長城": {"hanviet": "VẠN LÝ TRƯỜNG THÀNH", "components": "万 (Vạn) + 里 (Lý) + 長 (Trường) + 城 (Thành)", "story": "Tòa thành (Thành) dài (Trường) hàng vạn (Vạn) dặm (Lý).", "examples": "万里の長城 (Vạn Lý Trường Thành)"},
  "します（ネクタイを〜）": {"hanviet": "Làm", "components": "Chỉ dùng Hiragana", "story": "Đeo cà vạt.", "examples": "します (Đeo (cà vạt))"},

  "聞きます": {"hanviet": "VĂN", "components": "門 (Môn - Cửa) + 耳 (Nhĩ - Tai)", "story": "Ghé tai (Nhĩ) vào cửa (Môn) để Nghe/Hỏi.", "examples": "聞きます (Nghe/Hỏi)"},
  "回します": {"hanviet": "HỒI", "components": "回 (Hồi - Vòng quanh)", "story": "Hình ảnh vòng tròn xoay vòng quanh.", "examples": "回します (Vặn/Xoay)"},
  "引きます": {"hanviet": "DẪN", "components": "弓 (Cung) + 丨 (Cổn)", "story": "Kéo căng cây cung (Cung) ra.", "examples": "引きます (Kéo)"},
  "変えます": {"hanviet": "BIẾN", "components": "亦 (Diệc) + 攵 (Phộc)", "story": "Đánh đập (Phộc) để làm Biến đổi.", "examples": "変えます (Đổi)"},
  "触ります": {"hanviet": "XÚC", "components": "角 (Giác - Sừng) + 虫 (Trùng - Côn trùng)", "story": "Sờ (Xúc) vào sừng (Giác) con côn trùng (Trùng).", "examples": "触ります (Sờ, chạm)"},
  "動きます": {"hanviet": "ĐỘNG", "components": "重 (Trọng - Nặng) + 力 (Lực)", "story": "Dùng sức lực (Lực) làm cho vật nặng (Trọng) Chuyển động.", "examples": "動きます (Hoạt động (máy))"},
  "歩きます": {"hanviet": "BỘ", "components": "止 (Chỉ - Dừng lại) + 少 (Thiểu - Một chút)", "story": "Đi bộ (Bộ) một chút lại dừng.", "examples": "歩きます (Đi bộ)"},
  "渡ります": {"hanviet": "ĐỘ", "components": "氵 (Thủy) + 度 (Độ)", "story": "Đi bộ qua (Độ) dòng nước (Thủy) là Băng qua.", "examples": "渡ります (Qua (cầu, đường))"},
  "気をつけます": {"hanviet": "KHÍ", "components": "気 (Khí)", "story": "Chú ý, cẩn thận (tập trung khí thần).", "examples": "気をつけます (Cẩn thận)"},
  "引っ越します": {"hanviet": "DẪN VIỆT", "components": "引 (Dẫn - Kéo) + 越 (Việt - Vượt qua)", "story": "Kéo (Dẫn) đồ đạc vượt qua (Việt) ranh giới để Chuyển nhà.", "examples": "引っ越します (Chuyển nhà)"},
  "電気屋": {"hanviet": "ĐIỆN KHÍ ỐC", "components": "電 (Điện) + 気 (Khí) + 屋 (Ốc - Cửa hàng)", "story": "Cửa hàng bán đồ điện.", "examples": "電気屋 (Cửa hàng điện máy)"},
  "音": {"hanviet": "ÂM", "components": "立 (Lập) + 日 (Nhật)", "story": "Âm thanh.", "examples": "音 (Âm thanh)"},
  "機械": {"hanviet": "CƠ GIỚI", "components": "機 (Cơ - Máy móc) + 械 (Giới - Máy móc)", "story": "Các loại máy móc.", "examples": "機械 (Máy móc)"},
  "故障": {"hanviet": "CỐ CHƯỚNG", "components": "故 (Cố - Sự cố) + 障 (Chướng - Ngăn cản)", "story": "Sự cố gây cản trở là Hỏng hóc.", "examples": "故障 (Hỏng hóc)"},
  "道": {"hanviet": "ĐẠO", "components": "辶 (Sước) + 首 (Thủ - Đầu)", "story": "Cái đầu (Thủ) dẫn đường (Sước) đi.", "examples": "道 (Đường đi)"},
  "交差点": {"hanviet": "GIAO SOA ĐIỂM", "components": "交 (Giao) + 差 (Soa) + 点 (Điểm)", "story": "Điểm giao cắt nhau giữa các con đường (Ngã tư).", "examples": "交差点 (Ngã tư)"},
  "信号": {"hanviet": "TÍN HIỆU", "components": "信 (Tín) + 号 (Hiệu)", "story": "Đèn tín hiệu giao thông.", "examples": "信号 (Đèn giao thông)"},
  "寂しい": {"hanviet": "TỊCH", "components": "宀 (Miên - Mái nhà) + 叔 (Thúc)", "story": "Dưới mái nhà (Miên) chỉ có một mình nên rất Buồn tẻ.", "examples": "寂しい (Buồn, cô đơn)"},
  "お湯": {"hanviet": "THANG", "components": "氵 (Thủy) + 昜 (Dương - Ánh mặt trời)", "story": "Nước (Thủy) được phơi nắng (Dương) nên rất Nóng.", "examples": "お湯 (Nước nóng)"},
  "橋": {"hanviet": "KIỀU", "components": "木 (Mộc) + 喬 (Kiều)", "story": "Chiếc cầu làm bằng gỗ (Mộc) uốn cong lên.", "examples": "橋 (Cây cầu)"},
  "歩道": {"hanviet": "BỘ ĐẠO", "components": "歩 (Bộ) + 道 (Đạo)", "story": "Đường dành cho người đi bộ (Vỉa hè).", "examples": "歩道 (Vỉa hè)"},
  "駐車場": {"hanviet": "TRÚ XA TRƯỜNG", "components": "駐 (Trú - Đậu lại) + 車 (Xa - Xe) + 場 (Trường - Nơi)", "story": "Nơi xe cộ đậu lại là Bãi đỗ xe.", "examples": "駐車場 (Bãi đỗ xe)"},
  "建物": {"hanviet": "KIẾN VẬT", "components": "建 (Kiến - Xây dựng) + 物 (Vật)", "story": "Đồ vật được con người xây dựng lên là Tòa nhà.", "examples": "建物 (Tòa nhà)"},
  "何度も": {"hanviet": "HÀ ĐỘ", "components": "何 (Hà) + 度 (Độ - Lần)", "story": "Rất nhiều lần.", "examples": "何度も (Nhiều lần)"},
  "〜目": {"hanviet": "MỤC", "components": "目 (Mục)", "story": "Thứ tự.", "examples": "〜目 (Thứ ~ (số thứ tự))"},

  "連れて行きます": {"hanviet": "LIÊN HÀNH", "components": "連 (Liên) + 行 (Hành)", "story": "Liên kết dẫn theo đi ra ngoài.", "examples": "連れて行きます (Dẫn đi)"},
  "連れて来ます": {"hanviet": "LIÊN LAI", "components": "連 (Liên) + 来 (Lai)", "story": "Liên kết dẫn theo đến đây.", "examples": "連れて来ます (Dẫn đến)"},
  "送ります": {"hanviet": "TỐNG", "components": "辶 (Sước) + 关 (Quan)", "story": "Đưa tiễn (Tống).", "examples": "送ります (Tiễn (ai đó))"},
  "紹介します": {"hanviet": "THIỆU GIỚI", "components": "紹 (Thiệu) + 介 (Giới)", "story": "Giới thiệu nhau.", "examples": "紹介します (Giới thiệu)"},
  "案内します": {"hanviet": "ÁN NỘI", "components": "案 (Án) + 内 (Nội)", "story": "Chỉ dẫn nội tình bên trong (Hướng dẫn).", "examples": "案内します (Hướng dẫn)"},
  "説明します": {"hanviet": "THUYẾT MINH", "components": "説 (Thuyết) + 明 (Minh)", "story": "Nói rõ ra cho mọi người hiểu là Giải thích.", "examples": "説明します (Giải thích)"},
  "準備": {"hanviet": "CHUẨN BỊ", "components": "準 (Chuẩn) + 備 (Bị)", "story": "Chuẩn bị sẵn sàng.", "examples": "準備 (Sự chuẩn bị)"},
  "意味": {"hanviet": "Ý VỊ", "components": "意 (Ý) + 味 (Vị)", "story": "Hương vị của ý nghĩ (Ý nghĩa).", "examples": "意味 (Ý nghĩa)"},
  "お菓子": {"hanviet": "QUẢ TỬ", "components": "菓 (Quả) + 子 (Tử)", "story": "Bánh kẹo.", "examples": "お菓子 (Bánh kẹo)"},
  "全部": {"hanviet": "TOÀN BỘ", "components": "全 (Toàn) + 部 (Bộ)", "story": "Tất cả.", "examples": "全部 (Tất cả)"},
  "自分で": {"hanviet": "TỰ PHÂN", "components": "自 (Tự) + 分 (Phân)", "story": "Tự bản thân làm.", "examples": "自分で (Tự mình)"},
  "ワゴン車": {"hanviet": "XA", "components": "車 (Xa)", "story": "Xe hơi dạng Wagon.", "examples": "ワゴン車 (Xe hơi)"},
  "お弁当": {"hanviet": "BIỆN ĐƯƠNG", "components": "弁 (Biện) + 当 (Đương)", "story": "Hộp cơm Bento.", "examples": "お弁当 (Cơm hộp)"},
  "母の日": {"hanviet": "MẪU NHẬT", "components": "母 (Mẫu) + 日 (Nhật)", "story": "Ngày của Mẹ.", "examples": "母の日 (Ngày của mẹ)"},

  "考えます": {"hanviet": "KHẢO", "components": "老 (Lão) + 丂 (Khảo)", "story": "Người già thường Suy nghĩ.", "examples": "考えます (Suy nghĩ)"},
  "着きます": {"hanviet": "TRƯỚC", "components": "着 (Trước - Đến)", "story": "Đến đích.", "examples": "着きます (Đến (ga, nơi chốn))"},
  "留学します": {"hanviet": "LƯU HỌC", "components": "留 (Lưu) + 学 (Học)", "story": "Ở lại học là Du học.", "examples": "留学します (Du học)"},
  "田舎": {"hanviet": "ĐIỀN XÁ", "components": "田 (Điền - Đồng ruộng) + 舎 (Xá - Quán trọ)", "story": "Nơi chỉ có đồng ruộng và lều cỏ là Nông thôn.", "examples": "田舎 (Nông thôn, quê)"},
  "大使館": {"hanviet": "ĐẠI SỨ QUÁN", "components": "大 (Đại) + 使 (Sứ) + 館 (Quán)", "story": "Nơi làm việc của vị sứ giả lớn là Đại sứ quán.", "examples": "大使館 (Đại sứ quán)"},
  "億": {"hanviet": "ỨC", "components": "亻 (Nhân) + 意 (Ý)", "story": "Trăm triệu.", "examples": "億 (Trăm triệu)"},
  "転勤": {"hanviet": "CHUYỂN CẦN", "components": "転 (Chuyển) + 勤 (Cần - Đi làm)", "story": "Chuyển nơi làm việc.", "examples": "転勤 (Chuyển công tác)"},
  "一杯飲みましょう": {"hanviet": "BÔI ẨM", "components": "杯 (Bôi - Ly) + 飲 (Ẩm - Uống)", "story": "Cùng nâng ly uống nhé.", "examples": "一杯飲みましょう (Cùng uống 1 ly nhé)"},
  "いろいろお世話になりました": {"hanviet": "THẾ THOẠI", "components": "世話 (Thế Thoại)", "story": "Cảm ơn đã giúp đỡ.", "examples": "お世話になりました (Cảm ơn đã giúp đỡ tôi)"},
  "頑張ります": {"hanviet": "NGOAN TRƯƠNG", "components": "頑 (Ngoan - Cứng đầu) + 張 (Trương - Kéo căng)", "story": "Kéo căng sức mạnh ý chí kiên định (Cố gắng).", "examples": "頑張ります (Cố gắng)"},
  "どうぞお元気で": {"hanviet": "NGUYÊN KHÍ", "components": "元気 (Nguyên khí)", "story": "Chúc mạnh khỏe.", "examples": "どうぞお元気で (Chúc mạnh khỏe)"},
  "年を取ります": {"hanviet": "NIÊN THỦ", "components": "年 (Niên - Năm) + 取 (Thủ - Lấy)", "story": "Lấy thêm năm (Thêm tuổi).", "examples": "年を取ります (Thêm tuổi, già đi)"},
  "もし（〜たら）": {"hanviet": "NHƯỢC", "components": "Không có Kanji ở N5", "story": "Nếu... thì...", "examples": "もし (Nếu (~ thì))"},
  "いくら（〜ても）": {"hanviet": "BẤT CƯ", "components": "Không có Kanji ở N5", "story": "Cho dù...", "examples": "いくら (Cho dù (~ đi nữa))"}
};

for (let i = 21; i <= 25; i++) {
  const filePath = `src/data/lessons/lesson${i}.ts`;
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  Object.keys(missingBreakdowns).forEach(word => {
    const data = missingBreakdowns[word];
    if (content.includes(`"word": "${word}"`)) {
      const wordRegex = new RegExp(`(\\"word\\"\\s*:\\s*\\"${word}\\"[\\s\\S]*?\\"type\\"\\s*:\\s*\\"[^\\"]+\\")(\\s*\\})`, 'g');
      content = content.replace(wordRegex, (match, p1, p2) => {
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
