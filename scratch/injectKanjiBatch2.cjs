const fs = require('fs');

const missingBreakdowns = {
  "食べます": {"hanviet": "THỰC", "components": "食 (Thực - Ăn)", "story": "Hình ảnh cái nắp đậy trên bát thức ăn thơm ngon.", "examples": "食べます (Ăn), 食事 (Bữa ăn)"},
  "飲みます": {"hanviet": "ẨM", "components": "食 (Thực - Ăn) + 欠 (Khiếm - Thiếu/Ngáp)", "story": "Ăn (Thực) xong thấy thiếu thiếu (Khiếm) thì phải Uống nước.", "examples": "飲みます (Uống), 飲料 (Đồ uống)"},
  "見ます": {"hanviet": "KIẾN", "components": "目 (Mục - Mắt) + 儿 (Nhân đi - Đôi chân)", "story": "Dùng con mắt (Mục) và đôi chân (Nhân đi) để đi xem xét mọi thứ xung quanh.", "examples": "見ます (Nhìn/Xem), 意見 (Ý kiến)"},
  "買います": {"hanviet": "MÃI", "components": "罒 (Võng - Mắt lưới) + 貝 (Bối - Vỏ sò/Tiền)", "story": "Dùng lưới (Võng) vớt vỏ sò (Bối) ngày xưa dùng làm tiền để đi Mua sắm.", "examples": "買います (Mua), 買い物 (Mua sắm)"},
  "ご飯": {"hanviet": "PHẠN", "components": "食 (Thực - Ăn) + 反 (Phản - Phản đối/Ngược lại)", "story": "Đồ ăn (Thực) được lật đi lật lại (Phản) cho chín đều chính là Cơm.", "examples": "ご飯 (Cơm/Bữa ăn), 朝ご飯 (Bữa sáng)"},
  "果物": {"hanviet": "QUẢ VẬT", "components": "果 (Quả - Trái cây) + 物 (Vật - Đồ vật)", "story": "Đồ vật thu hoạch được từ trên cây là Trái cây.", "examples": "果物 (Trái cây)"},
  "水": {"hanviet": "THỦY", "components": "水 (Thủy - Nước)", "story": "Hình ảnh dòng suối chảy.", "examples": "水 (Nước)"},
  "お茶": {"hanviet": "TRÀ", "components": "艹 (Thảo) + 人 (Nhân) + 木 (Mộc)", "story": "Người (Nhân) hái lá cỏ (Thảo) từ trên cây (Mộc) xuống để pha Trà.", "examples": "お茶 (Trà)"},
  "牛乳": {"hanviet": "NGƯU NHŨ", "components": "牛 (Ngưu - Con bò) + 乳 (Nhũ - Sữa)", "story": "Sữa được vắt từ con bò là Sữa bò.", "examples": "牛乳 (Sữa bò)"},
  "お酒": {"hanviet": "TỬU", "components": "氵 (Thủy - Nước) + 酉 (Dậu - Bình rượu)", "story": "Thứ nước (Thủy) đựng trong bình (Dậu) là Rượu.", "examples": "お酒 (Rượu)"},
  "店": {"hanviet": "ĐIẾM", "components": "广 (Nghiễm - Mái nhà) + 占 (Chiêm - Bói toán)", "story": "Dưới mái nhà (Nghiễm) có ông thầy bói (Chiêm) mở Cửa hàng.", "examples": "店 (Cửa hàng), 喫茶店 (Quán nước)"},
  "時々": {"hanviet": "THỜI", "components": "時 (Thời - Thời gian) + 々 (Dấu lặp lại)", "story": "Lặp lại thời gian là Thỉnh thoảng.", "examples": "時々 (Thỉnh thoảng)"},
  "朝ご飯": {"hanviet": "TRIÊU PHẠN", "components": "朝 (Triêu - Sáng sớm) + ご飯 (Cơm)", "story": "Cơm ăn vào buổi sáng sớm là Bữa sáng.", "examples": "朝ご飯 (Bữa sáng)"},
  "昼ご飯": {"hanviet": "TRÚ PHẠN", "components": "昼 (Trú - Buổi trưa) + ご飯 (Cơm)", "story": "Cơm ăn vào buổi trưa là Bữa trưa.", "examples": "昼ご飯 (Bữa trưa)"},
  "晩ご飯": {"hanviet": "VÃN PHẠN", "components": "晩 (Vãn - Buổi tối) + ご飯 (Cơm)", "story": "Cơm ăn vào buổi tối là Bữa tối.", "examples": "晩ご飯 (Bữa tối)"},
  "紅茶": {"hanviet": "HỒNG TRÀ", "components": "紅 (Hồng - Màu đỏ/Hồng) + 茶 (Trà)", "story": "Trà có màu đỏ là Hồng trà.", "examples": "紅茶 (Hồng trà)"},

  "手": {"hanviet": "THỦ", "components": "手 (Thủ - Bàn tay)", "story": "Hình ảnh bàn tay có 5 ngón.", "examples": "手 (Tay), 手紙 (Bức thư)"},
  "消しゴム": {"hanviet": "TIÊU", "components": "消 (Tiêu - Xóa bỏ) + ゴム (Cao su)", "story": "Cục cao su dùng để xóa bỏ vết bút chì là Cục tẩy.", "examples": "消しゴム (Cục tẩy), 消します (Tắt/Xóa)"},
  "紙": {"hanviet": "CHỈ", "components": "糸 (Mịch - Sợi chỉ) + 氏 (Thị - Dòng họ)", "story": "Giấy (Chỉ) được kết thành từ những sợi tơ mỏng (Mịch) để ghi gia phả dòng họ (Thị).", "examples": "紙 (Giấy), 手紙 (Bức thư)"},
  "お金": {"hanviet": "KIM", "components": "金 (Kim - Vàng/Tiền)", "story": "Kim loại quý giá nhất thời xưa là Vàng và được dùng làm Tiền.", "examples": "お金 (Tiền), 金曜日 (Thứ Sáu)"},
  "切符": {"hanviet": "THIẾT PHÙ", "components": "切 (Thiết - Cắt) + 符 (Phù - Vé/Phù hiệu)", "story": "Vé xe/tàu (Phù) khi qua cửa sẽ bị bấm/cắt (Thiết) một góc.", "examples": "切符 (Vé)"},
  "お父さん": {"hanviet": "PHỤ", "components": "父 (Phụ - Bố)", "story": "Hình ảnh hai tay cầm gậy đánh đòn, thể hiện sự nghiêm khắc của người Bố.", "examples": "お父さん (Bố người khác), 父親 (Phụ thân)"},
  "お母さん": {"hanviet": "MẪU", "components": "母 (Mẫu - Mẹ)", "story": "Hình ảnh người phụ nữ có bầu ngực đang cho con bú là người Mẹ.", "examples": "お母さん (Mẹ người khác), 母親 (Mẫu thân)"},

  "ハンサム（な）": {"hanviet": "HANDSOME", "components": "Từ ngoại lai", "story": "Handsome trong tiếng Anh.", "examples": "ハンサム (Đẹp trai)"},
  "きれい（な）": {"hanviet": "KIREI", "components": "Không có Kanji ở N5", "story": "Sạch sẽ, đẹp đẽ.", "examples": "きれい (Đẹp/Sạch)"},
  "にぎやか（な）": {"hanviet": "NIGIYAKA", "components": "Không có Kanji ở N5", "story": "Nhộn nhịp, náo nhiệt.", "examples": "にぎやか (Náo nhiệt)"},
  "すてき（な）": {"hanviet": "SUTEKI", "components": "Không có Kanji ở N5", "story": "Tuyệt vời.", "examples": "すてき (Tuyệt vời)"},
  "いい（よい）": {"hanviet": "TỐT", "components": "Không có Kanji ở N5", "story": "Tốt.", "examples": "いい (Tốt)"},

  "歌舞伎": {"hanviet": "CA VŨ KỸ", "components": "歌 (Ca - Hát) + 舞 (Vũ - Múa) + 伎 (Kỹ - Kỹ năng)", "story": "Loại hình nghệ thuật yêu cầu kỹ năng (Kỹ) vừa hát (Ca) vừa múa (Vũ) là Kabuki.", "examples": "歌舞伎 (Kịch Kabuki)"},
  "細かいお金": {"hanviet": "TẾ KIM", "components": "細 (Tế - Nhỏ/Chi tiết) + お金 (Tiền)", "story": "Sợi chỉ (Mịch) đi qua cánh đồng (Điền) bị đứt thành những đoạn nhỏ (Tế). Tiền nhỏ là Tiền lẻ.", "examples": "細かい (Nhỏ/Chi tiết)"},
  "ご主人": {"hanviet": "CHỦ NHÂN", "components": "主 (Chủ - Ông chủ) + 人 (Nhân - Người)", "story": "Người làm chủ gia đình là Chồng.", "examples": "ご主人 (Chồng người khác)"},
  "夫": {"hanviet": "PHU", "components": "夫 (Phu - Chồng/Đàn ông)", "story": "Người đàn ông (Đại) đội mũ (Nhất) để đi làm lễ trưởng thành, sẵn sàng làm Chồng.", "examples": "夫 (Chồng mình)"},
  "奥さん": {"hanviet": "ÁO", "components": "奥 (Áo - Phía trong/Sâu)", "story": "Người vợ thường ở phía sâu bên trong ngôi nhà để lo nội trợ.", "examples": "奥さん (Vợ người khác)"},
  "妻": {"hanviet": "THÊ", "components": "妻 (Thê - Vợ)", "story": "Người phụ nữ (Nữ) tay cầm chổi lo việc nhà là Vợ.", "examples": "妻 (Vợ mình)"},
  "子ども": {"hanviet": "TỬ", "components": "子 (Tử - Đứa trẻ)", "story": "Hình ảnh đứa trẻ sơ sinh đang được quấn tã.", "examples": "子ども (Trẻ em/Con cái)"},
  "少し": {"hanviet": "THIỂU", "components": "少 (Thiểu - Ít)", "story": "Nhỏ (Tiểu) lại còn bị gạch thêm một nét (Phiệt) nên càng Ít (Thiểu).", "examples": "少し (Một chút), 少ない (Ít)"},
  "全然": {"hanviet": "TOÀN NHIÊN", "components": "全 (Toàn - Hoàn toàn) + 然 (Nhiên - Quả nhiên)", "story": "Hoàn toàn (Toàn) quả nhiên (Nhiên) là không có gì cả.", "examples": "全然 (Hoàn toàn không)"},

  "男の人": {"hanviet": "NAM NHÂN", "components": "男 (Nam - Đàn ông) + 人 (Nhân - Người)", "story": "Người dùng sức lực (Lực) làm việc trên cánh đồng (Điền) là Đàn ông.", "examples": "男の人 (Người đàn ông)"},
  "女の人": {"hanviet": "NỮ NHÂN", "components": "女 (Nữ - Phụ nữ) + 人 (Nhân - Người)", "story": "Hình ảnh người phụ nữ đang ngồi vắt chéo chân.", "examples": "女の人 (Người phụ nữ)"},
  "男の子": {"hanviet": "NAM TỬ", "components": "男 (Nam) + 子 (Tử)", "story": "Đứa trẻ (Tử) mang giới tính Nam.", "examples": "男の子 (Bé trai)"},
  "女の子": {"hanviet": "NỮ TỬ", "components": "女 (Nữ) + 子 (Tử)", "story": "Đứa trẻ (Tử) mang giới tính Nữ.", "examples": "女の子 (Bé gái)"},
  "犬": {"hanviet": "KHUYỂN", "components": "犬 (Khuyển - Con chó)", "story": "Giống chữ Đại (大) nhưng có thêm một nét phẩy tượng trưng cho cái đuôi chó.", "examples": "犬 (Con chó)"},
  "猫": {"hanviet": "MIÊU", "components": "犭(Khuyển - Bộ động vật) + 苗 (Miêu - Mạ/Cỏ)", "story": "Loài động vật thích nấp ngoài đồng cỏ để bắt chuột là con Mèo.", "examples": "猫 (Con mèo)"},
  "パンダ": {"hanviet": "PANDA", "components": "Từ ngoại lai", "story": "Gấu trúc.", "examples": "パンダ (Gấu trúc)"},
  "象": {"hanviet": "TƯỢNG", "components": "象 (Tượng - Con voi)", "story": "Hình ảnh con voi có cái vòi dài.", "examples": "象 (Con voi)"},
  "木": {"hanviet": "MỘC", "components": "木 (Mộc - Cây)", "story": "Hình ảnh cái cây có rễ cắm xuống đất.", "examples": "木 (Cây/Gỗ)"},
  "物": {"hanviet": "VẬT", "components": "牛 (Ngưu - Con bò) + 勿 (Vật - Không/Cờ)", "story": "Con bò (Ngưu) là Đồ vật (Vật) có giá trị thời xưa.", "examples": "物 (Đồ vật), 動物 (Động vật)"},
  "電池": {"hanviet": "ĐIỆN TRÌ", "components": "電 (Điện) + 池 (Trì - Cái ao)", "story": "Cái ao (Trì) chứa đầy năng lượng điện (Điện) chính là Cục pin.", "examples": "電池 (Pin)"},
  "箱": {"hanviet": "TƯƠNG", "components": "竹 (Trúc - Tre) + 相 (Tương - Tương hỗ)", "story": "Hộp làm bằng tre (Trúc) giúp bảo vệ đồ vật tương trợ (Tương) cho con người.", "examples": "箱 (Cái hộp/Thùng)"},
  "スイッチ": {"hanviet": "SWITCH", "components": "Từ ngoại lai", "story": "Công tắc.", "examples": "スイッチ (Công tắc)"},
  "冷蔵庫": {"hanviet": "LÃNH TÀNG KHỐ", "components": "冷 (Lãnh - Lạnh) + 蔵 (Tàng - Tàng trữ) + 庫 (Khố - Kho chứa)", "story": "Kho chứa (Khố) để tàng trữ (Tàng) đồ ăn ở nhiệt độ lạnh (Lãnh) là Tủ lạnh.", "examples": "冷蔵庫 (Tủ lạnh)"},
  "棚": {"hanviet": "BẰNG", "components": "木 (Mộc - Gỗ) + 朋 (Bằng - Bạn bè)", "story": "Lấy gỗ (Mộc) đóng thành cái giá/kệ để cất quà của bạn bè (Bằng).", "examples": "棚 (Giá/Kệ)"},
  "窓": {"hanviet": "SONG", "components": "穴 (Huyệt - Cái hố) + 厶 (Khư - Riêng tư) + 心 (Tâm - Trái tim)", "story": "Khoét một cái hố (Huyệt) trên tường để mang lại tâm trạng (Tâm) thư thái riêng tư (Khư) là Cửa sổ.", "examples": "窓 (Cửa sổ)"},

  "います（子どもが～）": {"hanviet": "CƯ", "components": "居 (Cư - Ở/Cư trú)", "story": "Cơ thể (Thi) sống cổ xưa (Cổ) ở một nơi là Cư trú.", "examples": "居ます (Có (người/động vật))"},
  "掛かります": {"hanviet": "QUÁI", "components": "扌 (Thủ - Tay) + 卦 (Quái - Bói toán)", "story": "Dùng tay (Thủ) tính toán thời gian, tiền bạc tốn mất bao nhiêu.", "examples": "掛かります (Tốn (thời gian/tiền bạc))"},
  "休みます（会社を～）": {"hanviet": "HƯU", "components": "休 (Hưu - Nghỉ ngơi): 亻 (Nhân - Người) + 木 (Mộc - Cây)", "story": "Người (Nhân) tựa vào gốc cây (Mộc) để Nghỉ ngơi.", "examples": "休みます (Nghỉ ngơi/Nghỉ làm)"},
  "りんご": {"hanviet": "LÂM CẦM", "components": "林檎 (Không cần học Kanji ở N5)", "story": "Quả táo.", "examples": "りんご (Quả táo)"},
  "みかん": {"hanviet": "MẬT CAM", "components": "蜜柑 (Không cần học Kanji ở N5)", "story": "Quả quýt.", "examples": "みかん (Quả quýt)"},
  "サンドイッチ": {"hanviet": "SANDWICH", "components": "Từ ngoại lai", "story": "Bánh sandwich.", "examples": "サンドイッチ (Bánh sandwich)"},
  "カレー（ライス）": {"hanviet": "CURRY", "components": "Từ ngoại lai", "story": "Cơm cà ri.", "examples": "カレー (Cà ri)"},
  "アイスクリーム": {"hanviet": "ICE CREAM", "components": "Từ ngoại lai", "story": "Kem.", "examples": "アイスクリーム (Kem)"},
  "切手": {"hanviet": "THIẾT THỦ", "components": "切 (Thiết - Cắt) + 手 (Thủ - Tay)", "story": "Cái tem nhỏ bằng ngón tay (Thủ) được cắt (Thiết) ra từ tờ lớn.", "examples": "切手 (Tem)"},
  "はがき": {"hanviet": "DIỆP THƯ", "components": "葉書 (Diệp Thư - Thư viết trên lá)", "story": "Ngày xưa người ta viết thư (Thư) lên lá cây (Diệp) để gửi đi, đó là Bưu thiếp.", "examples": "はがき (Bưu thiếp)"},
  "封筒": {"hanviet": "PHONG ĐỒNG", "components": "封 (Phong - Phong bì) + 筒 (Đồng - Ống/Thùng)", "story": "Cái bao (Đồng) để phong bì (Phong) thư lại.", "examples": "封筒 (Phong bì)"},
  "速達": {"hanviet": "TỐC ĐẠT", "components": "速 (Tốc - Nhanh) + 達 (Đạt - Chuyển đạt)", "story": "Chuyển phát (Đạt) một cách nhanh chóng (Tốc).", "examples": "速達 (Chuyển phát nhanh)"},
  "書留": {"hanviet": "THƯ LƯU", "components": "書 (Thư - Sách/Viết) + 留 (Lưu - Giữ lại)", "story": "Bức thư (Thư) được giữ lại (Lưu) hóa đơn chứng từ là Gửi bảo đảm.", "examples": "書留 (Gửi bảo đảm)"},
  "航空便": {"hanviet": "HÀNG KHÔNG TIỆN", "components": "航 (Hàng - Đi thuyền/Bay) + 空 (Không - Bầu trời) + 便 (Tiện - Chuyến bay/Gửi thư)", "story": "Chuyến gửi thư (Tiện) bay qua đường hàng không (Bầu trời).", "examples": "航空便 (Gửi đường hàng không)"},
  "船便": {"hanviet": "THUYỀN TIỆN", "components": "船 (Thuyền) + 便 (Tiện)", "story": "Gửi bằng đường tàu biển.", "examples": "船便 (Gửi đường biển)"},
  "両親": {"hanviet": "LƯỠNG THÂN", "components": "両 (Lưỡng - Hai) + 親 (Thân - Cha mẹ/Người thân)", "story": "Hai (Lưỡng) đấng sinh thành thân thiết (Thân) là Bố mẹ.", "examples": "両親 (Bố mẹ)"},
  "兄弟": {"hanviet": "HUYNH ĐỆ", "components": "兄 (Huynh - Anh trai) + 弟 (Đệ - Em trai)", "story": "Anh em trong nhà.", "examples": "兄弟 (Anh em)"},

  "簡単（な）": {"hanviet": "GIẢN ĐƠN", "components": "簡 (Giản - Đơn giản) + 単 (Đơn - Đơn độc)", "story": "Những thứ đơn lẻ (Đơn) thì rất Đơn giản (Giản).", "examples": "簡単 (Đơn giản)"},
  "近い": {"hanviet": "CẬN", "components": "辶 (Sước - Di chuyển) + 斤 (Cân - Cái rìu)", "story": "Di chuyển (Sước) mang theo cái rìu (Cân) để chặt cây ở khu vực Gần đó.", "examples": "近い (Gần), 近所 (Hàng xóm)"},
  "遠い": {"hanviet": "VIỄN", "components": "辶 (Sước - Di chuyển) + 袁 (Viên - Áo dài)", "story": "Mặc áo dài (Viên) di chuyển (Sước) một quãng đường Xa xôi.", "examples": "遠い (Xa), 遠慮 (Khách khí)"},
  "速い、早い": {"hanviet": "TỐC / TẢO", "components": "速 (Tốc - Tốc độ), 早 (Tảo - Sớm)", "story": "Sớm và Nhanh nhẹn.", "examples": "速い (Nhanh), 早い (Sớm)"},
  "遅い": {"hanviet": "TRÌ", "components": "辶 (Sước - Di chuyển) + 犀 (Tê - Con tê giác)", "story": "Di chuyển (Sước) chậm chạp như con tê giác (Tê) là Chậm trễ.", "examples": "遅い (Chậm/Muộn), 遅刻 (Đến muộn)"},
  "多い": {"hanviet": "ĐA", "components": "夕 (Tịch - Buổi tối) x2", "story": "Nhiều buổi tối (Tịch) gộp lại tạo thành Nhiều.", "examples": "多い (Nhiều)"},
  "少ない": {"hanviet": "THIỂU", "components": "少 (Thiểu - Ít)", "story": "Tiểu (Nhỏ) thêm nét phẩy nên càng Ít.", "examples": "少ない (Ít)"},
  "温かい、暖かい": {"hanviet": "ÔN / NOÃN", "components": "温 (Ôn - Ấm áp), 暖 (Noãn - Ấm áp)", "story": "Ấm áp.", "examples": "暖かい (Ấm (thời tiết)), 温かい (Ấm (đồ vật))"},
  "涼しい": {"hanviet": "LƯƠNG", "components": "氵 (Thủy - Nước) + 京 (Kinh - Kinh đô)", "story": "Thủ đô (Kinh) nằm cạnh nguồn nước (Thủy) rất Mát mẻ.", "examples": "涼しい (Mát mẻ)"},
  "甘い": {"hanviet": "CAM", "components": "甘 (Cam - Ngọt)", "story": "Đồ ăn ngọt.", "examples": "甘い (Ngọt)"},
  "辛い": {"hanviet": "TÂN", "components": "辛 (Tân - Cay/Khổ)", "story": "Vị cay.", "examples": "辛い (Cay)"},
  "重い": {"hanviet": "TRỌNG", "components": "重 (Trọng - Nặng)", "story": "Nặng nề.", "examples": "重い (Nặng)"},
  "軽い": {"hanviet": "KHINH", "components": "車 (Xa - Xe) + 巠 (Kinh - Sông đào)", "story": "Chiếc xe (Xa) đi qua lại dễ dàng là Nhẹ nhàng.", "examples": "軽い (Nhẹ)"},
  "季節": {"hanviet": "QUÝ TIẾT", "components": "季 (Quý - Mùa) + 節 (Tiết - Khớp/Đốt)", "story": "Các mùa trong năm.", "examples": "季節 (Mùa)"},
  "春": {"hanviet": "XUÂN", "components": "春 (Xuân - Mùa xuân)", "story": "Mùa xuân hoa cỏ đâm chồi dưới ánh mặt trời.", "examples": "春 (Mùa xuân)"},
  "夏": {"hanviet": "HẠ", "components": "夏 (Hạ - Mùa hè)", "story": "Mùa hè vất vả.", "examples": "夏 (Mùa hè)"},
  "秋": {"hanviet": "THU", "components": "禾 (Hòa - Cây lúa) + 火 (Hỏa - Lửa)", "story": "Mùa lúa chín vàng như lửa là Mùa Thu.", "examples": "秋 (Mùa thu)"},
  "冬": {"hanviet": "ĐÔNG", "components": "冬 (Đông - Mùa đông)", "story": "Mùa đông lạnh lẽo.", "examples": "冬 (Mùa đông)"}
};

for (let i = 6; i <= 12; i++) {
  const filePath = `src/data/lessons/lesson${i}.ts`;
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Use regex to find each word block and inject kanjiBreakdown if it exists in our dictionary
  Object.keys(missingBreakdowns).forEach(word => {
    const data = missingBreakdowns[word];
    // We look for a block that has "word": "word", and we inject kanjiBreakdown at the end before its closing }
    // Example: "type": "Danh từ"\n    }
    
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
