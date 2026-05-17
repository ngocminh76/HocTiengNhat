const fs = require('fs');

const missingBreakdowns = {
  "遊びます": {"hanviet": "DU", "components": "辶 (Sước) + 方 (Phương) + 子 (Tử)", "story": "Đứa trẻ (Tử) đi (Sước) khắp các phương (Phương) để vui chơi.", "examples": "遊びます (Chơi)"},
  "泳ぎます": {"hanviet": "VỊNH", "components": "氵 (Thủy) + 永 (Vĩnh)", "story": "Bơi lội mãi mãi (Vĩnh) trong dòng nước (Thủy).", "examples": "泳ぎます (Bơi)"},
  "迎えます": {"hanviet": "NGHÊNH", "components": "辶 (Sước) + 卬 (Ngang)", "story": "Đi (Sước) ra đón một người ngẩng cao đầu (Ngang).", "examples": "迎えます (Đón)"},
  "疲れます": {"hanviet": "BÌ", "components": "疒 (Nạch) + 皮 (Bì)", "story": "Làm việc đến mức bệnh tật (Nạch) ngoài da (Bì) vì quá mệt mỏi.", "examples": "疲れます (Mệt mỏi)"},
  "結婚します": {"hanviet": "KẾT HÔN", "components": "結 (Kết - Buộc/Nối) + 婚 (Hôn - Kết hôn)", "story": "Sợi chỉ (Mịch) buộc người phụ nữ (Nữ) vào gia đình họ trong ngày Hôn lễ.", "examples": "結婚します (Kết hôn)"},
  "買い物します": {"hanviet": "MÃI VẬT", "components": "買 (Mãi - Mua) + 物 (Vật - Đồ vật)", "story": "Đi mua (Mãi) các đồ vật (Vật).", "examples": "買い物します (Mua sắm)"},
  "食事します": {"hanviet": "THỰC SỰ", "components": "食 (Thực - Ăn) + 事 (Sự - Việc)", "story": "Việc (Sự) ăn uống (Thực).", "examples": "食事します (Ăn cơm/Dùng bữa)"},
  "散歩します": {"hanviet": "TẢN BỘ", "components": "散 (Tản - Tản mạn) + 歩 (Bộ - Đi bộ)", "story": "Đi bộ (Bộ) tản mạn (Tản) khắp nơi.", "examples": "散歩します (Đi dạo)"},
  "大変（な）": {"hanviet": "ĐẠI BIẾN", "components": "大 (Đại) + 変 (Biến)", "story": "Sự biến đổi to lớn khiến mọi thứ Vất vả.", "examples": "大変 (Vất vả)"},
  "欲しい": {"hanviet": "DỤC", "components": "谷 (Cốc - Thung lũng) + 欠 (Khiếm - Thiếu)", "story": "Sự thiếu thốn (Khiếm) to lớn như thung lũng (Cốc) tạo ra lòng Tham muốn.", "examples": "欲しい (Muốn có)"},
  "広い": {"hanviet": "QUẢNG", "components": "广 (Nghiễm - Mái nhà) + ム (Khư)", "story": "Dưới mái nhà (Nghiễm) có một không gian thật Rộng lớn.", "examples": "広い (Rộng)"},
  "狭い": {"hanviet": "HIỆP", "components": "犭(Khuyển - Chó) + 夾 (Hiệp - Kẹp giữa)", "story": "Con chó (Khuyển) bị kẹp giữa hai vách đá Hẹp.", "examples": "狭い (Hẹp)"},
  "川": {"hanviet": "XUYÊN", "components": "川 (Xuyên - Sông)", "story": "Hình ảnh dòng sông chảy xuôi.", "examples": "川 (Sông)"},
  "美術": {"hanviet": "MỸ THUẬT", "components": "美 (Mỹ - Đẹp) + 術 (Thuật - Kỹ thuật)", "story": "Kỹ thuật (Thuật) tạo ra cái Đẹp (Mỹ).", "examples": "美術 (Mỹ thuật)"},
  "釣り": {"hanviet": "ĐIẾU", "components": "金 (Kim - Kim loại) + 勺 (Chước - Cái gáo)", "story": "Dùng sợi dây kim loại (Kim) uốn cong như cái gáo (Chước) để đi câu.", "examples": "釣り (Câu cá)"},
  "週末": {"hanviet": "CHU MẠT", "components": "週 (Chu - Tuần) + 末 (Mạt - Cuối/Ngọn)", "story": "Phần cuối cùng (Mạt) của một tuần (Chu) là Cuối tuần.", "examples": "週末 (Cuối tuần)"},
  "お正月": {"hanviet": "CHÍNH NGUYỆT", "components": "正 (Chính - Đúng/Chính đáng) + 月 (Nguyệt - Tháng)", "story": "Tháng (Nguyệt) đầu tiên, chính đáng nhất (Chính) của năm là tháng Tết.", "examples": "お正月 (Tết)"},
  "何か": {"hanviet": "HÀ", "components": "何 (Hà) + か (Trợ từ nghi vấn)", "story": "Cái gì đó.", "examples": "何か (Cái gì đó)"},
  "渇きます": {"hanviet": "KHÁT", "components": "氵 (Thủy - Nước) + 曷 (Hạt - Hét lớn)", "story": "Hét lớn (Hạt) gọi nước (Thủy) vì quá Khát.", "examples": "渇きます (Khát)"},
  "お祭り": {"hanviet": "TẾ", "components": "月 (Nhục - Thịt) + 又 (Hựu - Lại) + 示 (Thị - Bàn thờ)", "story": "Lại (Hựu) đem thịt (Nhục) đặt lên bàn thờ (Thị) để cúng Tế trong lễ hội.", "examples": "お祭り (Lễ hội)"},
  "会議": {"hanviet": "HỘI NGHỊ", "components": "会 (Hội - Gặp gỡ) + 議 (Nghị - Bàn luận)", "story": "Gặp gỡ (Hội) để bàn luận (Nghị) trong Cuộc họp.", "examples": "会議 (Cuộc họp)"},
  "登録": {"hanviet": "ĐĂNG LỤC", "components": "登 (Đăng - Leo lên) + 録 (Lục - Ghi chép)", "story": "Ghi chép (Lục) lại tên tuổi để đăng cai (Đăng) là Đăng ký.", "examples": "登録 (Đăng ký)"},
  "ご注文は？": {"hanviet": "CHÚ VẤN", "components": "注 (Chú - Rót vào) + 文 (Văn - Văn tự)", "story": "Ghi chép (Văn) lại yêu cầu rót (Chú) nước để Gọi món.", "examples": "ご注文 (Gọi món)"},
  "定食": {"hanviet": "ĐỊNH THỰC", "components": "定 (Định - Cố định) + 食 (Thực - Ăn)", "story": "Suất ăn (Thực) đã được cố định (Định) sẵn các món.", "examples": "定食 (Suất ăn cố định)"},
  "牛どん": {"hanviet": "NGƯU", "components": "牛 (Ngưu - Con bò)", "story": "Món cơm thịt bò.", "examples": "牛どん (Cơm thịt bò)"},

  "消します": {"hanviet": "TIÊU", "components": "氵 (Thủy - Nước) + 肖 (Tiếu - Giống hệt)", "story": "Dùng nước (Thủy) dập lửa để mọi thứ lại giống hệt (Tiếu) như cũ (Tắt/Xóa).", "examples": "消します (Tắt (điện/máy))"},
  "開けます": {"hanviet": "KHAI", "components": "門 (Môn - Cửa) + 幵 (Kiên - Bằng phẳng)", "story": "Hai cánh cửa (Môn) mở toang sang hai bên (Kiên).", "examples": "開けます (Mở (cửa))"},
  "閉めます": {"hanviet": "BẾ", "components": "門 (Môn - Cửa) + 才 (Tài - Tài năng)", "story": "Dùng tài năng (Tài) đóng chặt cửa (Môn) lại.", "examples": "閉めます (Đóng (cửa))"},
  "急ぎます": {"hanviet": "CẤP", "components": "刍 (Sô - Bó cỏ) + 心 (Tâm - Trái tim)", "story": "Trái tim (Tâm) đập nhanh như bị bó cỏ (Sô) siết lại vì đang Vội gấp.", "examples": "急ぎます (Vội, gấp)"},
  "待ちます": {"hanviet": "ĐÃI", "components": "彳 (Sách - Bước đi) + 寺 (Tự - Ngôi chùa)", "story": "Đứng lại (Sách) tại ngôi chùa (Tự) để Chờ đợi.", "examples": "待ちます (Đợi)"},
  "持ちます": {"hanviet": "TRÌ", "components": "扌 (Thủ - Tay) + 寺 (Tự - Ngôi chùa)", "story": "Mang tay (Thủ) đến ngôi chùa (Tự) để Cầm nắm đồ vật.", "examples": "持ちます (Cầm, mang)"},
  "取ります": {"hanviet": "THỦ", "components": "耳 (Nhĩ - Tai) + 又 (Hựu - Bàn tay)", "story": "Dùng tay (Hựu) nắm lấy tai (Nhĩ) để Lấy đi.", "examples": "取ります (Lấy)"},
  "手伝います": {"hanviet": "THỦ TRUYỀN", "components": "手 (Thủ - Tay) + 伝 (Truyền - Truyền đạt)", "story": "Đưa tay (Thủ) ra truyền (Truyền) lại công sức để Giúp đỡ.", "examples": "手伝います (Giúp đỡ)"},
  "呼びます": {"hanviet": "HÔ", "components": "口 (Khẩu - Miệng) + 乎 (Hồ - Cảm thán)", "story": "Há miệng (Khẩu) hét lớn (Hồ) để Gọi người.", "examples": "呼びます (Gọi)"},
  "話します": {"hanviet": "THOẠI", "components": "言 (Ngôn - Lời nói) + 舌 (Thiệt - Cái lưỡi)", "story": "Dùng cái lưỡi (Thiệt) tạo ra lời nói (Ngôn) để Nói chuyện.", "examples": "話します (Nói chuyện)"},
  "使います": {"hanviet": "SỬ", "components": "亻 (Nhân - Người) + 吏 (Lại - Quan lại)", "story": "Quan lại (Lại) sai khiến người (Nhân) để Sử dụng vào công việc.", "examples": "使います (Sử dụng)"},
  "止めます": {"hanviet": "CHỈ", "components": "止 (Chỉ - Dừng lại)", "story": "Hình ảnh bàn chân Dừng lại.", "examples": "止めます (Dừng)"},
  "見せます": {"hanviet": "KIẾN", "components": "見 (Kiến - Xem)", "story": "Làm cho ai đó xem là Cho xem.", "examples": "見せます (Cho xem)"},
  "教えます": {"hanviet": "GIÁO", "components": "孝 (Hiếu - Hiếu thảo) + 攵 (Phộc - Đánh)", "story": "Cầm roi (Phộc) dạy dỗ trẻ phải biết hiếu thảo (Hiếu) là Giáo dục.", "examples": "教えます (Dạy/Nói cho biết)"},
  "座ります": {"hanviet": "TỌA", "components": "广 (Nghiễm - Mái nhà) + 坐 (Tọa - Hai người ngồi trên đất)", "story": "Hai người (Nhân) ngồi bệt trên đất (Thổ) dưới mái nhà (Nghiễm) là Ngồi.", "examples": "座ります (Ngồi)"},
  "立ちます": {"hanviet": "LẬP", "components": "立 (Lập - Đứng)", "story": "Hình ảnh một người đang Đứng dang hai chân.", "examples": "立ちます (Đứng)"},
  "入ります": {"hanviet": "NHẬP", "components": "入 (Nhập - Vào)", "story": "Hình ảnh lối vào.", "examples": "入ります (Vào)"},
  "出ます": {"hanviet": "XUẤT", "components": "出 (Xuất - Ra)", "story": "Hai ngọn núi chồng lên nhau nhô Ra ngoài.", "examples": "出ます (Ra)"},
  "降ります": {"hanviet": "GIÁNG", "components": "阝 (Phụ - Gò đất) + 夅 (Giáng - Đi xuống)", "story": "Bước chân đi xuống (Giáng) khỏi gò đất (Phụ) hoặc mưa Rơi xuống.", "examples": "降ります (Rơi (mưa, tuyết))"},
  "名前": {"hanviet": "DANH TIỀN", "components": "名 (Danh - Tên) + 前 (Tiền - Phía trước)", "story": "Tên (Danh) của mình thường viết ở phía trước (Tiền) sách vở.", "examples": "名前 (Tên)"},
  "住所": {"hanviet": "TRÚ SỞ", "components": "住 (Trú - Cư trú) + 所 (Sở - Nơi chốn)", "story": "Nơi chốn (Sở) mà con người cư trú (Trú) là Địa chỉ.", "examples": "住所 (Địa chỉ)"},
  "地図": {"hanviet": "ĐỊA ĐỒ", "components": "地 (Địa - Đất) + 図 (Đồ - Bản đồ)", "story": "Bản đồ (Đồ) vẽ lại các khu vực đất đai (Địa).", "examples": "地図 (Bản đồ)"},
  "塩": {"hanviet": "DIÊM", "components": "土 (Thổ - Đất) + 臣 (Thần - Bề tôi) + 皿 (Mãnh - Cái đĩa)", "story": "Bề tôi (Thần) lấy đất (Thổ) lọc ra muối đựng lên đĩa (Mãnh).", "examples": "塩 (Muối)"},
  "砂糖": {"hanviet": "SA ĐƯỜNG", "components": "砂 (Sa - Cát) + 糖 (Đường - Đường ngọt)", "story": "Hạt đường ngọt (Đường) nhỏ li ti như cát (Sa).", "examples": "砂糖 (Đường)"},
  "問題": {"hanviet": "VẤN ĐỀ", "components": "問 (Vấn - Hỏi) + 題 (Đề - Đề mục)", "story": "Hỏi (Vấn) về các đề mục (Đề) để giải quyết Vấn đề.", "examples": "問題 (Vấn đề / Câu hỏi)"},
  "答え": {"hanviet": "ĐÁP", "components": "竹 (Trúc - Tre) + 合 (Hợp - Phù hợp)", "story": "Ghi Câu trả lời lên thẻ tre (Trúc) sao cho phù hợp (Hợp).", "examples": "答え (Câu trả lời)"},
  "読み方": {"hanviet": "ĐỘC PHƯƠNG", "components": "読 (Độc - Đọc) + 方 (Phương - Phương hướng/Cách thức)", "story": "Cách thức (Phương) để đọc (Độc) chữ là Cách đọc.", "examples": "読み方 (Cách đọc)"},

  "置きます": {"hanviet": "TRÍ", "components": "罒 (Võng - Mắt lưới) + 直 (Trực - Thẳng)", "story": "Đặt (Trí) cái lưới (Võng) thẳng thớm (Trực) xuống đất.", "examples": "置きます (Đặt, để)"},
  "作ります": {"hanviet": "TÁC", "components": "亻 (Nhân - Người) + 乍 (Sạ - Chợt)", "story": "Người (Nhân) chợt (Sạ) nảy ra ý tưởng để Làm/Chế tạo (Tác).", "examples": "作ります (Làm, chế tạo)"},
  "売ります": {"hanviet": "MẠI", "components": "士 (Sĩ - Kẻ sĩ) + 冖 (Mịch - Trùm khăn) + 儿 (Nhân đi)", "story": "Kẻ sĩ (Sĩ) trùm khăn (Mịch) đi bộ (Nhân đi) để Bán hàng giấu mặt.", "examples": "売ります (Bán)"},
  "知ります": {"hanviet": "TRI", "components": "矢 (Thỉ - Mũi tên) + 口 (Khẩu - Miệng)", "story": "Lời nói thốt ra từ miệng (Khẩu) nhanh như mũi tên (Thỉ) khi Biết một điều gì đó.", "examples": "知ります (Biết)"},
  "住みます": {"hanviet": "TRÚ", "components": "亻 (Nhân - Người) + 主 (Chủ - Ông chủ)", "story": "Người (Nhân) làm chủ (Chủ) một khu vực để Cư trú.", "examples": "住みます (Sống)"},
  "研究します": {"hanviet": "NGHIÊN CỨU", "components": "研 (Nghiên - Mài gọt) + 究 (Cứu - Tìm tòi)", "story": "Mài gọt (Nghiên) và tìm tòi (Cứu) sâu sắc là Nghiên cứu.", "examples": "研究します (Nghiên cứu)"},
  "資料": {"hanviet": "TƯ LIỆU", "components": "資 (Tư - Tiền của) + 料 (Liệu - Vật liệu/Đo lường)", "story": "Tài liệu (Liệu) quý giá như tiền của (Tư).", "examples": "資料 (Tài liệu)"},
  "時刻表": {"hanviet": "THỜI KHẮC BIỂU", "components": "時 (Thời) + 刻 (Khắc) + 表 (Biểu)", "story": "Biểu đồ ghi rõ thời gian (Thời) và thời khắc (Khắc) là Bảng giờ tàu.", "examples": "時刻表 (Bảng giờ tàu)"},
  "服": {"hanviet": "PHỤC", "components": "月 (Nhục - Cơ thể) + 卩 (Tiết) + 又 (Hựu - Lại)", "story": "Lại (Hựu) quấn thêm lên cơ thể (Nhục) những bộ trang Phục.", "examples": "服 (Quần áo)"},
  "製品": {"hanviet": "CHẾ PHẨM", "components": "製 (Chế - Chế tạo) + 品 (Phẩm - Sản phẩm)", "story": "Sản phẩm (Phẩm) được chế tạo (Chế) ra.", "examples": "製品 (Sản phẩm)"},
  "専門": {"hanviet": "CHUYÊN MÔN", "components": "専 (Chuyên - Chuyên tâm) + 門 (Môn - Cánh cửa)", "story": "Cánh cửa (Môn) chuyên tâm (Chuyên) về một lĩnh vực là Chuyên môn.", "examples": "専門 (Chuyên môn)"},
  "歯医者": {"hanviet": "XỈ Y GIẢ", "components": "歯 (Xỉ - Răng) + 医者 (Y giả - Bác sĩ)", "story": "Bác sĩ (Y giả) chữa răng (Xỉ) là Nha sĩ.", "examples": "歯医者 (Nha sĩ)"},
  "床屋": {"hanviet": "SÀNG ỐC", "components": "床 (Sàng - Giường/Sàn) + 屋 (Ốc - Cửa hàng)", "story": "Cửa hàng (Ốc) có cái sàn (Sàng) chuyên để cắt tóc (Hiệu cắt tóc nam).", "examples": "床屋 (Hiệu cắt tóc)"},
  "独身": {"hanviet": "ĐỘC THÂN", "components": "独 (Độc - Đơn độc) + 身 (Thân - Thân thể)", "story": "Thân thể (Thân) chỉ có một mình đơn lẻ (Độc) là Độc thân.", "examples": "独身 (Độc thân)"},
  "特に": {"hanviet": "ĐẶC", "components": "牛 (Ngưu - Con bò) + 寺 (Tự - Ngôi chùa)", "story": "Con bò (Ngưu) sống trong chùa (Tự) là rất Đặc biệt.", "examples": "特に (Đặc biệt)"},
  "思い出します": {"hanviet": "TƯ XUẤT", "components": "思 (Tư - Suy nghĩ) + 出 (Xuất - Ra)", "story": "Suy nghĩ (Tư) xuất hiện ra (Xuất) trong đầu là Nhớ lại.", "examples": "思い出します (Nhớ lại)"},
  "ご家族": {"hanviet": "GIA TỘC", "components": "家 (Gia) + 族 (Tộc)", "story": "Gia đình của người khác.", "examples": "ご家族 (Gia đình (người khác))"},
  "高校": {"hanviet": "CAO HIỆU", "components": "高 (Cao - Cao lớn) + 校 (Hiệu - Trường học)", "story": "Trường học (Hiệu) cấp cao (Cao) là Trường cấp 3.", "examples": "高校 (Trường cấp 3)"},
  "経済": {"hanviet": "KINH TẾ", "components": "経 (Kinh - Kinh tuyến/Trải qua) + 済 (Tế - Cứu tế/Xong)", "story": "Trải qua (Kinh) quá trình để tạo ra của cải là Kinh tế.", "examples": "経済 (Kinh tế)"},
  "市役所": {"hanviet": "THỊ DỊCH SỞ", "components": "市 (Thị - Thành phố) + 役 (Dịch - Vai trò) + 所 (Sở - Nơi)", "story": "Nơi (Sở) đóng vai trò (Dịch) quản lý thành phố (Thị) là Tòa thị chính.", "examples": "市役所 (Tòa thị chính)"},
  "皆": {"hanviet": "GIAI", "components": "比 (Tỷ - So sánh) + 白 (Bạch - Trắng)", "story": "Mọi người (Giai) đều so sánh (Tỷ) để nói lên điều rõ ràng (Bạch).", "examples": "皆 (Mọi người)"},
  "皆さん": {"hanviet": "GIAI", "components": "皆 (Giai)", "story": "Cách gọi lịch sự của Mọi người.", "examples": "皆さん (Các bạn, mọi người)"}
};

for (let i = 13; i <= 15; i++) {
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
