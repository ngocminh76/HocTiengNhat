const fs = require('fs');

const missingBreakdowns = {
  "乗ります": {"hanviet": "THỪA", "components": "千 (Thiên) + 北 (Bắc)", "story": "Một nghìn người đi về phía Bắc để lên Tàu.", "examples": "乗ります (Lên (tàu, xe))"},
  "降ります": {"hanviet": "GIÁNG", "components": "阝 (Phụ) + 夅 (Giáng)", "story": "Bước chân đi xuống khỏi gò đất.", "examples": "降ります (Xuống (tàu, xe))"},
  "乗り換えます": {"hanviet": "THỪA HOÁN", "components": "乗 (Thừa) + 換 (Hoán - Đổi)", "story": "Lên (Thừa) một chuyến tàu rồi đổi (Hoán) sang chuyến khác.", "examples": "乗り換えます (Chuyển tàu)"},
  "浴びます": {"hanviet": "DỤC", "components": "氵 (Thủy) + 谷 (Cốc)", "story": "Nước (Thủy) chảy từ thung lũng (Cốc) xuống để Tắm.", "examples": "浴びます (Tắm)"},
  "入れます": {"hanviet": "NHẬP", "components": "入 (Nhập)", "story": "Cho vào.", "examples": "入れます (Cho vào)"},
  "出します": {"hanviet": "XUẤT", "components": "出 (Xuất)", "story": "Lấy ra.", "examples": "出します (Lấy ra)"},
  "入ります": {"hanviet": "NHẬP", "components": "入 (Nhập)", "story": "Đi vào.", "examples": "入ります (Vào (đại học))"},
  "出ます": {"hanviet": "XUẤT", "components": "出 (Xuất)", "story": "Đi ra.", "examples": "出ます (Ra, tốt nghiệp)"},
  "押します": {"hanviet": "ÁP", "components": "扌 (Thủ - Tay) + 甲 (Giáp - Cái vỏ)", "story": "Dùng tay ấn vào cái vỏ giáp.", "examples": "押します (Bấm, ấn)"},
  "若い": {"hanviet": "NHƯỢC", "components": "艹 (Thảo) + 右 (Hữu)", "story": "Cây cỏ (Thảo) mọc ở bên phải (Hữu) còn rất Trẻ.", "examples": "若い (Trẻ)"},
  "長い": {"hanviet": "TRƯỜNG", "components": "長 (Trường)", "story": "Hình ảnh mái tóc dài.", "examples": "長い (Dài)"},
  "短い": {"hanviet": "ĐOẢN", "components": "矢 (Thỉ - Mũi tên) + 豆 (Đậu - Hạt đậu)", "story": "Mũi tên (Thỉ) làm từ cây đậu (Đậu) thì rất Ngắn.", "examples": "短い (Ngắn)"},
  "明るい": {"hanviet": "MINH", "components": "日 (Nhật - Mặt trời) + 月 (Nguyệt - Mặt trăng)", "story": "Sự kết hợp của mặt trời và mặt trăng tạo ra sự Sáng sủa.", "examples": "明るい (Sáng sủa)"},
  "暗い": {"hanviet": "ÁM", "components": "日 (Nhật) + 音 (Âm - Âm thanh)", "story": "Mặt trời (Nhật) bị che khuất chỉ còn nghe thấy âm thanh (Âm) trong bóng Tối.", "examples": "暗い (Tối)"},
  "体": {"hanviet": "THỂ", "components": "亻 (Nhân) + 本 (Bản)", "story": "Nền tảng (Bản) của con người (Nhân) chính là Cơ thể.", "examples": "体 (Cơ thể)"},
  "頭": {"hanviet": "ĐẦU", "components": "豆 (Đậu) + 頁 (Hiệt - Đầu/Trang)", "story": "Cái đầu (Hiệt) có kích thước bằng hạt đậu (Đậu).", "examples": "頭 (Đầu)"},
  "髪": {"hanviet": "PHÁT", "components": "髟 (Tiêu - Tóc dài) + 友 (Hữu - Bạn)", "story": "Bạn bè (Hữu) thường có mái tóc (Tiêu) dài.", "examples": "髪 (Tóc)"},
  "顔": {"hanviet": "NHAN", "components": "彦 (Ngạn) + 頁 (Hiệt)", "story": "Khuôn mặt (Hiệt) đẹp đẽ của chàng trai (Ngạn).", "examples": "顔 (Khuôn mặt)"},
  "目": {"hanviet": "MỤC", "components": "目 (Mục)", "story": "Hình ảnh con mắt.", "examples": "目 (Mắt)"},
  "見学します": {"hanviet": "KIẾN HỌC", "components": "見 (Kiến) + 学 (Học)", "story": "Đi xem (Kiến) để học tập (Học).", "examples": "見学します (Tham quan học tập)"},
  "電話します": {"hanviet": "ĐIỆN THOẠI", "components": "電 (Điện) + 話 (Thoại)", "story": "Gọi điện thoại.", "examples": "電話します (Gọi điện thoại)"},
  "緑": {"hanviet": "LỤC", "components": "糸 (Mịch) + 彔 (Lục)", "story": "Sợi chỉ (Mịch) màu xanh lá.", "examples": "緑 (Màu xanh lá cây)"},
  "お寺": {"hanviet": "TỰ", "components": "寺 (Tự)", "story": "Hình ảnh ngôi chùa có mái và tầng.", "examples": "お寺 (Chùa)"},
  "神社": {"hanviet": "THẦN XÃ", "components": "神 (Thần) + 社 (Xã)", "story": "Đền thờ của Thần đạo.", "examples": "神社 (Đền Thần đạo)"},
  "留学生": {"hanviet": "LƯU HỌC SINH", "components": "留 (Lưu - Giữ lại) + 学生 (Học sinh)", "story": "Học sinh ở lại nước ngoài để học.", "examples": "留学生 (Du học sinh)"},
  "暗証番号": {"hanviet": "ÁM CHỨNG PHIÊN HIỆU", "components": "暗 (Ám) + 証 (Chứng) + 番号 (Số)", "story": "Mã số bí mật (Ám) dùng để chứng minh (Chứng).", "examples": "暗証番号 (Mã PIN)"},
  "金額": {"hanviet": "KIM NGẠCH", "components": "金 (Kim - Tiền) + 額 (Ngạch - Trán/Số lượng)", "story": "Số lượng tiền.", "examples": "金額 (Số tiền)"},
  "確認": {"hanviet": "XÁC NHẬN", "components": "確 (Xác - Xác thực) + 認 (Nhận - Công nhận)", "story": "Xem xét cho chắc chắn.", "examples": "確認 (Xác nhận)"},

  "覚えます": {"hanviet": "GIÁC", "components": "学 (Học) nhưng trên là ⺍ + 見 (Kiến)", "story": "Thấy (Kiến) và học hỏi để ghi Nhớ.", "examples": "覚えます (Nhớ, học thuộc)"},
  "忘れます": {"hanviet": "VONG", "components": "亡 (Vong - Mất) + 心 (Tâm - Trái tim)", "story": "Trái tim (Tâm) đánh mất (Vong) đi ký ức là Quên.", "examples": "忘れます (Quên)"},
  "払います": {"hanviet": "PHẤT", "components": "扌 (Thủ) + ム (Khư)", "story": "Dùng tay (Thủ) trả tiền.", "examples": "払います (Trả tiền)"},
  "返します": {"hanviet": "PHẢN", "components": "辶 (Sước) + 反 (Phản)", "story": "Chuyển động (Sước) ngược lại (Phản) là Trả lại.", "examples": "返します (Trả lại)"},
  "出かけます": {"hanviet": "XUẤT", "components": "出 (Xuất) + かけます", "story": "Đi ra ngoài.", "examples": "出かけます (Ra ngoài)"},
  "脱ぎます": {"hanviet": "THOÁT", "components": "月 (Nhục - Cơ thể) + 兌 (Đoái - Thay đổi)", "story": "Thay đổi (Đoái) quần áo trên cơ thể (Nhục) là Cởi.", "examples": "脱ぎます (Cởi (quần áo, giày))"},
  "持って行きます": {"hanviet": "TRÌ HÀNH", "components": "持 (Trì) + 行 (Hành)", "story": "Cầm và đi (Mang đi).", "examples": "持って行きます (Mang đi)"},
  "持って来ます": {"hanviet": "TRÌ LAI", "components": "持 (Trì) + 来 (Lai)", "story": "Cầm và đến (Mang đến).", "examples": "持って来ます (Mang đến)"},
  "心配します": {"hanviet": "TÂM PHỐI", "components": "心 (Tâm) + 配 (Phối - Phân phát)", "story": "Trái tim (Tâm) bị phân phát (Phối) đi nhiều nơi nên Lo lắng.", "examples": "心配します (Lo lắng)"},
  "残業します": {"hanviet": "TÀN NGHIỆP", "components": "残 (Tàn - Còn lại) + 業 (Nghiệp - Công việc)", "story": "Làm nốt công việc (Nghiệp) còn lại (Tàn) là Làm thêm giờ.", "examples": "残業します (Làm thêm giờ)"},
  "出張します": {"hanviet": "XUẤT TRƯƠNG", "components": "出 (Xuất) + 張 (Trương - Kéo dài)", "story": "Đi ra ngoài dài ngày là Đi công tác.", "examples": "出張します (Đi công tác)"},
  "薬": {"hanviet": "DƯỢC", "components": "艹 (Thảo) + 楽 (Lạc - Vui vẻ)", "story": "Uống thảo mộc (Thảo) vào sẽ thấy khỏe mạnh vui vẻ (Lạc) là Thuốc.", "examples": "薬 (Thuốc)"},
  "お風呂": {"hanviet": "PHONG LỮ", "components": "風 (Phong - Gió) + 呂 (Lữ - Xương sống)", "story": "Tắm rửa trong bồn tắm.", "examples": "お風呂 (Bồn tắm)"},
  "大切（な）": {"hanviet": "ĐẠI THIẾT", "components": "大 (Đại) + 切 (Thiết - Cắt)", "story": "Cắt đi một miếng lớn rất là Quan trọng.", "examples": "大切 (Quan trọng)"},
  "大丈夫（な）": {"hanviet": "ĐẠI TRƯỢNG PHU", "components": "大 (Đại) + 丈 (Trượng) + 夫 (Phu)", "story": "Người đàn ông trưởng thành to lớn thì không có gì phải sợ (Không sao).", "examples": "大丈夫 (Không sao)"},
  "危ない": {"hanviet": "NGUY", "components": "厄 (Ách) + 卩 (Tiết)", "story": "Tai ách sắp đến rất Nguy hiểm.", "examples": "危ない (Nguy hiểm)"},
  "禁煙": {"hanviet": "CẤM YÊN", "components": "禁 (Cấm) + 煙 (Yên - Khói)", "story": "Cấm khói nghĩa là Cấm hút thuốc.", "examples": "禁煙 (Cấm hút thuốc)"},
  "保険証": {"hanviet": "BẢO HIỂM CHỨNG", "components": "保 (Bảo) + 険 (Hiểm) + 証 (Chứng)", "story": "Thẻ chứng nhận bảo hiểm.", "examples": "保険証 (Thẻ bảo hiểm)"},
  "熱": {"hanviet": "NHIỆT", "components": "執 (Chấp) + 灬 (Hỏa - Lửa)", "story": "Cầm lửa trong tay rất Nóng/Sốt.", "examples": "熱 (Sốt)"},
  "健康保険証": {"hanviet": "KIỆN KHANG", "components": "健康 (Kiện Khang - Sức khỏe) + 保険証 (Thẻ bảo hiểm)", "story": "Thẻ bảo hiểm y tế.", "examples": "健康保険証 (Thẻ bảo hiểm y tế)"},
  "風邪": {"hanviet": "PHONG TÀ", "components": "風 (Phong) + 邪 (Tà)", "story": "Gió độc (Tà) thổi vào gây Cảm cúm.", "examples": "風邪 (Cảm cúm)"},
  "病気": {"hanviet": "BỆNH KHÍ", "components": "病 (Bệnh) + 気 (Khí)", "story": "Tâm trạng ốm yếu là Bệnh.", "examples": "病気 (Ốm, bệnh)"},
  "上着": {"hanviet": "THƯỢNG TRƯỚC", "components": "上 (Thượng) + 着 (Trước - Mặc)", "story": "Áo khoác mặc bên trên.", "examples": "上着 (Áo khoác)"},
  "下着": {"hanviet": "HẠ TRƯỚC", "components": "下 (Hạ) + 着 (Trước)", "story": "Đồ lót mặc bên dưới.", "examples": "下着 (Quần áo lót)"},
  "２、３日": {"hanviet": "NHẬT", "components": "日 (Nhật)", "story": "2, 3 ngày.", "examples": "２、３日 (2, 3 ngày)"},
  "お大事に": {"hanviet": "ĐẠI SỰ", "components": "大 (Đại) + 事 (Sự)", "story": "Chúc bảo trọng việc lớn (Sức khỏe).", "examples": "お大事に (Chúc mau khỏe nhé)"},

  "洗います": {"hanviet": "TẨY", "components": "氵 (Thủy) + 先 (Tiên)", "story": "Rửa (Tẩy) tay bằng nước (Thủy) trước (Tiên) khi ăn.", "examples": "洗います (Rửa)"},
  "弾きます": {"hanviet": "ĐÀN", "components": "弓 (Cung) + 単 (Đơn)", "story": "Dùng cây cung đánh đàn.", "examples": "弾きます (Chơi (nhạc cụ))"},
  "歌います": {"hanviet": "CA", "components": "哥 (Ca) + 欠 (Khiếm)", "story": "Há miệng hát.", "examples": "歌います (Hát)"},
  "集めます": {"hanviet": "TẬP", "components": "隹 (Truy - Chim nhỏ) + 木 (Mộc - Cây)", "story": "Bầy chim tụ tập trên cây.", "examples": "集めます (Sưu tầm, tập hợp)"},
  "捨てます": {"hanviet": "XẢ", "components": "扌 (Thủ) + 舎 (Xá - Quán trọ)", "story": "Tay (Thủ) vứt đồ đạc ở lại quán trọ (Xá).", "examples": "捨てます (Vứt)"},
  "換えます": {"hanviet": "HOÁN", "components": "扌 (Thủ) + 奐 (Hoán)", "story": "Dùng tay Đổi đồ vật.", "examples": "換えます (Đổi)"},
  "運転します": {"hanviet": "VẬN CHUYỂN", "components": "運 (Vận) + 転 (Chuyển)", "story": "Lái xe di chuyển lăn tròn.", "examples": "運転します (Lái xe)"},
  "予約します": {"hanviet": "DỰ ƯỚC", "components": "予 (Dự - Định trước) + 約 (Ước - Hẹn)", "story": "Hẹn định trước là Đặt chỗ.", "examples": "予約します (Đặt chỗ)"},
  "現金": {"hanviet": "HIỆN KIM", "components": "現 (Hiện) + 金 (Kim)", "story": "Tiền có sẵn hiện tại là Tiền mặt.", "examples": "現金 (Tiền mặt)"},
  "趣味": {"hanviet": "THÚ VỊ", "components": "趣 (Thú) + 味 (Vị)", "story": "Hương vị thú vị là Sở thích.", "examples": "趣味 (Sở thích)"},
  "日記": {"hanviet": "NHẬT KÝ", "components": "日 (Nhật) + 記 (Ký - Ghi chép)", "story": "Ghi chép hàng ngày.", "examples": "日記 (Nhật ký)"},
  "お祈り": {"hanviet": "KỲ", "components": "祈 (Kỳ - Cầu nguyện)", "story": "Việc cầu nguyện.", "examples": "お祈り (Việc cầu nguyện)"},
  "課長": {"hanviet": "KHÓA TRƯỜNG", "components": "課 (Khóa) + 長 (Trường)", "story": "Người đứng đầu phòng ban (Tổ trưởng).", "examples": "課長 (Tổ trưởng)"},
  "部長": {"hanviet": "BỘ TRƯỜNG", "components": "部 (Bộ) + 長 (Trường)", "story": "Người đứng đầu bộ phận (Trưởng phòng).", "examples": "部長 (Trưởng phòng)"},
  "社長": {"hanviet": "XÃ TRƯỜNG", "components": "社 (Xã) + 長 (Trường)", "story": "Người đứng đầu công ty (Giám đốc).", "examples": "社長 (Giám đốc)"},
  "動物": {"hanviet": "ĐỘNG VẬT", "components": "動 (Động) + 物 (Vật)", "story": "Vật có thể chuyển động.", "examples": "動物 (Động vật)"},
  "馬": {"hanviet": "MÃ", "components": "馬 (Mã - Con ngựa)", "story": "Hình ảnh con ngựa.", "examples": "馬 (Con ngựa)"},
  "本当ですか": {"hanviet": "BẢN ĐƯƠNG", "components": "本 (Bản) + 当 (Đương)", "story": "Thật sự đương nhiên là vậy sao?", "examples": "本当 (Sự thật)"},

  "登ります": {"hanviet": "ĐĂNG", "components": "癶 (Bát) + 豆 (Đậu)", "story": "Hai chân bước lên cao là Leo.", "examples": "登ります (Leo (núi))"},
  "泊まります": {"hanviet": "BẠC", "components": "氵 (Thủy) + 白 (Bạch)", "story": "Thuyền trắng đậu lại bến nước là Trọ lại.", "examples": "泊まります (Trọ lại)"},
  "掃除します": {"hanviet": "TẢO TRỪ", "components": "掃 (Tảo - Quét) + 除 (Trừ - Bỏ)", "story": "Quét dọn vứt rác.", "examples": "掃除します (Dọn dẹp)"},
  "洗濯します": {"hanviet": "TẨY TRẠC", "components": "洗 (Tẩy) + 濯 (Trạc)", "story": "Giặt giũ quần áo.", "examples": "洗濯します (Giặt giũ)"},
  "練習します": {"hanviet": "LUYỆN TẬP", "components": "練 (Luyện) + 習 (Tập)", "story": "Học tập rèn luyện.", "examples": "練習します (Luyện tập)"},
  "眠い": {"hanviet": "MIÊN", "components": "目 (Mục) + 民 (Dân)", "story": "Người dân nhắm mắt buồn ngủ.", "examples": "眠い (Buồn ngủ)"},
  "強い": {"hanviet": "CƯỜNG", "components": "弓 (Cung) + 虫 (Trùng)", "story": "Kéo cung bắn trùng chứng tỏ rất Mạnh.", "examples": "強い (Mạnh)"},
  "弱い": {"hanviet": "NHƯỢC", "components": "弓 (Cung) x2", "story": "Kéo hai cánh cung mỏng manh là Yếu.", "examples": "弱い (Yếu)"},
  "調子がいい": {"hanviet": "ĐIỀU TỬ", "components": "調 (Điều) + 子 (Tử)", "story": "Tình trạng tốt.", "examples": "調子がいい (Tình trạng tốt)"},
  "調子が悪い": {"hanviet": "ĐIỀU TỬ", "components": "調 (Điều) + 子 (Tử)", "story": "Tình trạng xấu.", "examples": "調子が悪い (Tình trạng xấu)"},
  "状態": {"hanviet": "TRẠNG THÁI", "components": "状 (Trạng) + 態 (Thái)", "story": "Trạng thái cơ thể.", "examples": "状態 (Trạng thái)"},
  "相撲": {"hanviet": "TƯƠNG PHỐC", "components": "相 (Tương) + 撲 (Phốc)", "story": "Môn võ đấu vật của Nhật.", "examples": "相撲 (Sumo)"},
  "日": {"hanviet": "NHẬT", "components": "日 (Nhật)", "story": "Ngày/Mặt trời.", "examples": "日 (Ngày)"},
  "一度": {"hanviet": "NHẤT ĐỘ", "components": "一 (Nhất) + 度 (Độ)", "story": "Một lần.", "examples": "一度 (Một lần)"},
  "一度も": {"hanviet": "NHẤT ĐỘ", "components": "一 (Nhất) + 度 (Độ)", "story": "Một lần cũng không.", "examples": "一度も (Chưa một lần)"},
  "何回も": {"hanviet": "HÀ HỒI", "components": "何 (Hà) + 回 (Hồi)", "story": "Nhiều lần lặp lại.", "examples": "何回も (Nhiều lần)"},
  "無理（な）": {"hanviet": "VÔ LÝ", "components": "無 (Vô) + 理 (Lý)", "story": "Không có lý (Không thể/Quá sức).", "examples": "無理 (Không thể)"},
  "体にいい": {"hanviet": "THỂ", "components": "体 (Thể)", "story": "Tốt cho cơ thể.", "examples": "体にいい (Tốt cho cơ thể)"},

  "要ります": {"hanviet": "YẾU", "components": "覀 (Á) + 女 (Nữ)", "story": "Người phụ nữ đứng ôm eo, đây là vị trí thiết yếu.", "examples": "要ります (Cần)"},
  "調べます": {"hanviet": "ĐIỀU", "components": "言 (Ngôn) + 周 (Chu)", "story": "Nói (Ngôn) một vòng (Chu) để Điều tra.", "examples": "調べます (Tìm hiểu, điều tra)"},
  "直します": {"hanviet": "TRỰC", "components": "直 (Trực)", "story": "Làm cho mọi thứ Thẳng lại (Sửa chữa).", "examples": "直します (Sửa chữa)"},
  "修理します": {"hanviet": "TU LÝ", "components": "修 (Tu) + 理 (Lý)", "story": "Sửa chữa lại cho hợp lý.", "examples": "修理します (Sửa chữa (máy móc))"},
  "僕": {"hanviet": "BỘC", "components": "亻 (Nhân) + 菐 (Phốc)", "story": "Từ xưng hô Tôi của nam giới.", "examples": "僕 (Tôi)"},
  "君": {"hanviet": "QUÂN", "components": "尹 (Doãn) + 口 (Khẩu)", "story": "Cái miệng của người quân tử (Bạn).", "examples": "君 (Bạn)"},
  "言葉": {"hanviet": "NGÔN DIỆP", "components": "言 (Ngôn) + 葉 (Diệp)", "story": "Lời nói (Ngôn) giống như chiếc lá (Diệp).", "examples": "言葉 (Từ vựng)"},
  "物価": {"hanviet": "VẬT GIÁ", "components": "物 (Vật) + 価 (Giá)", "story": "Giá trị của vật chất.", "examples": "物価 (Vật giá)"},
  "着物": {"hanviet": "TRƯỚC VẬT", "components": "着 (Trước) + 物 (Vật)", "story": "Đồ vật dùng để Mặc là Kimono.", "examples": "着物 (Kimono)"},
  "初め": {"hanviet": "SƠ", "components": "衤 (Y) + 刀 (Đao)", "story": "Dùng dao (Đao) cắt vải (Y) là công đoạn Ban đầu.", "examples": "初め (Ban đầu)"},
  "終わり": {"hanviet": "CHUNG", "components": "終 (Chung)", "story": "Kết thúc.", "examples": "終わり (Kết thúc)"},
  "ビザが要ります": {"hanviet": "YẾU", "components": "要 (Yếu)", "story": "Cần visa.", "examples": "ビザが要ります (Cần visa)"}
};

for (let i = 16; i <= 20; i++) {
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
