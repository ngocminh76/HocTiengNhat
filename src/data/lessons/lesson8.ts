import { NihongoLesson } from './types';
import { readings } from '../readings/reading8';

const lesson: NihongoLesson = {
  "id": 8,
  "chapter": "第8課",
  "title": "ハンサムですね",
  "titleVn": "Bài 8: Đẹp trai nhỉ",
  "theme": "Tính từ (A-i, A-na) · Miêu tả ấn tượng",
  "words": [
    {
      "id": "L8_01",
      "word": "ハンサム（な）",
      "reading": "ハンサム",
      "romaji": "hansamu",
      "meaning": "Đẹp trai",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "HANDSOME",
        "components": "Từ ngoại lai",
        "story": "Handsome trong tiếng Anh.",
        "examples": "ハンサム (Đẹp trai)"
      }
    },
    {
      "id": "L8_02",
      "word": "きれい（な）",
      "reading": "きれい",
      "romaji": "kirei",
      "meaning": "Đẹp, sạch sẽ",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "KIREI",
        "components": "Không có Kanji ở N5",
        "story": "Sạch sẽ, đẹp đẽ.",
        "examples": "きれい (Đẹp/Sạch)"
      }
    },
    {
      "id": "L8_03",
      "word": "静か（な）",
      "reading": "しずか",
      "romaji": "shizuka",
      "meaning": "Yên tĩnh",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "TĨNH",
        "components": "静 = 青 (Thanh - Xanh/Trẻ) + 争 (Tranh - Tranh giành)",
        "story": "Tuổi trẻ (青) mà không còn màng đến sự tranh giành (争) thì tâm sẽ hoàn toàn thanh tịnh, yên tĩnh (静).",
        "examples": "静か (Yên tĩnh), 安静 (An tĩnh)"
      }
    },
    {
      "id": "L8_04",
      "word": "にぎやか（な）",
      "reading": "にぎやか",
      "romaji": "nigiyaka",
      "meaning": "Náo nhiệt, nhộn nhịp",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "NIGIYAKA",
        "components": "Không có Kanji ở N5",
        "story": "Nhộn nhịp, náo nhiệt.",
        "examples": "にぎやか (Náo nhiệt)"
      }
    },
    {
      "id": "L8_05",
      "word": "有名（な）",
      "reading": "ゆうめい",
      "romaji": "yuumei",
      "meaning": "Nổi tiếng",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "HỮU DANH",
        "components": "有 (Hữu - Có) + 名 (Danh - Tên tuổi)",
        "story": "Người có (有) được tên tuổi (名) là người Nổi Tiếng.",
        "examples": "有名 (Nổi tiếng), 名前 (Tên)"
      }
    },
    {
      "id": "L8_06",
      "word": "親切（な）",
      "reading": "しんせつ",
      "romaji": "shinsetsu",
      "meaning": "Tốt bụng, tử tế",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "THÂN THIẾT",
        "components": "親 (Thân - Gần gũi/Người thân) + 切 (Thiết - Cắt/Cấp thiết)",
        "story": "Người thân thiết (親) khi thấy có việc khẩn cấp (切) liền lao vào giúp đỡ, thật sự rất tốt bụng.",
        "examples": "親切 (Tốt bụng), 大切 (Quan trọng)"
      }
    },
    {
      "id": "L8_07",
      "word": "元気（な）",
      "reading": "げんき",
      "romaji": "genki",
      "meaning": "Khỏe mạnh",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "NGUYÊN KHÍ",
        "components": "元 (Nguyên - Gốc/Bắt đầu) + 気 (Khí - Khí chất/Tinh thần)",
        "story": "Người có tinh thần (気) dồi dào ngay từ gốc (元) là người luôn khỏe mạnh.",
        "examples": "元気 (Khỏe mạnh), 天気 (Thời tiết)"
      }
    },
    {
      "id": "L8_08",
      "word": "暇（な）",
      "reading": "ひま",
      "romaji": "hima",
      "meaning": "Rảnh rỗi",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "HẠ",
        "components": "暇 = 日 (Nhật - Ngày) + 叚 (Giả - Mượn)",
        "story": "Mượn (叚) một vài ngày (日) nghỉ ngơi để được rảnh rỗi (Hạ).",
        "examples": "暇 (Rảnh rỗi), 休暇 (Kỳ nghỉ)"
      }
    },
    {
      "id": "L8_09",
      "word": "便利（な）",
      "reading": "べんり",
      "romaji": "benri",
      "meaning": "Tiện lợi",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "TIỆN LỢI",
        "components": "便 (Tiện - Tiện lợi) + 利 (Lợi - Ích lợi)",
        "story": "Sản phẩm mang lại sự tiện ích (便) và lợi ích (利) là đồ tiện lợi.",
        "examples": "便利 (Tiện lợi), 不便 (Bất tiện)"
      }
    },
    {
      "id": "L8_10",
      "word": "すてき（な）",
      "reading": "すてき",
      "romaji": "suteki",
      "meaning": "Tuyệt vời",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "SUTEKI",
        "components": "Không có Kanji ở N5",
        "story": "Tuyệt vời.",
        "examples": "すてき (Tuyệt vời)"
      }
    },
    {
      "id": "L8_11",
      "word": "大きい",
      "reading": "おおきい",
      "romaji": "ookii",
      "meaning": "To lớn",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI",
        "components": "大 = 一 (Nhất - Một) + 人 (Nhân - Người)",
        "story": "Một người (人) đang dang rộng hai tay chân ra trông rất TO LỚN.",
        "examples": "大きい (To lớn), 大学 (Đại học)"
      }
    },
    {
      "id": "L8_12",
      "word": "小さい",
      "reading": "ちいさい",
      "romaji": "chiisai",
      "meaning": "Nhỏ bé",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "TIỂU",
        "components": "小 = 亅 (Quyết - Móc) + 八 (Bát - Chia nhỏ)",
        "story": "Dùng móc (亅) chia (八) mọi thứ ra thành từng mảnh NHỎ BÉ.",
        "examples": "小さい (Nhỏ bé), 小学校 (Tiểu học)"
      }
    },
    {
      "id": "L8_13",
      "word": "新しい",
      "reading": "あたらしい",
      "romaji": "atarashii",
      "meaning": "Mới",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "TÂN",
        "components": "新 = 立 (Lập - Đứng) + 木 (Mộc - Cây) + 斤 (Cân - Cái rìu)",
        "story": "Đứng (立) dùng rìu (斤) đốn cây (木) để lấy gỗ làm ra những món đồ MỚI.",
        "examples": "新しい (Mới), 新聞 (Tờ báo)"
      }
    },
    {
      "id": "L8_14",
      "word": "古い",
      "reading": "ふるい",
      "romaji": "furui",
      "meaning": "Cũ",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "CỔ",
        "components": "古 = 十 (Thập - Mười) + 口 (Khẩu - Miệng)",
        "story": "Chuyện mười (十) cái miệng (口) truyền tai nhau từ đời này sang đời khác là chuyện CŨ, chuyện CỔ.",
        "examples": "古い (Cũ)"
      }
    },
    {
      "id": "L8_15",
      "word": "いい",
      "reading": "いい",
      "romaji": "ii (yoi)",
      "meaning": "Tốt",
      "type": "Tính từ đuôi i"
    },
    {
      "id": "L8_16",
      "word": "悪い",
      "reading": "わるい",
      "romaji": "warui",
      "meaning": "Xấu, tồi",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "ÁC",
        "components": "悪 = 亜 (Á - Châu Á) + 心 (Tâm - Trái tim)",
        "story": "Trái tim (心) thâm độc ác bá (Ác).",
        "examples": "悪い (Xấu)"
      }
    },
    {
      "id": "L8_17",
      "word": "暑い",
      "reading": "あつい",
      "romaji": "atsui",
      "meaning": "Nóng (thời tiết)",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "THỬ",
        "components": "暑 = 日 (Nhật - Mặt trời) + 者 (Giả - Người)",
        "story": "Người (者) đứng dưới mặt trời (日) thì cảm thấy NÓNG bức.",
        "examples": "暑い (Nóng)"
      }
    },
    {
      "id": "L8_18",
      "word": "寒い",
      "reading": "さむい",
      "romaji": "samui",
      "meaning": "Lạnh (thời tiết)",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "HÀN",
        "components": "寒 = 宀 (Miên - Mái nhà) + 井 (Tỉnh - Cái giếng) + 冫 (Băng)",
        "story": "Nước giếng (井) trong nhà (宀) đã đóng băng (冫) vì thời tiết quá LẠNH HÀN.",
        "examples": "寒い (Lạnh)"
      }
    },
    {
      "id": "L8_19",
      "word": "冷たい",
      "reading": "つめたい",
      "romaji": "tsumetai",
      "meaning": "Lạnh, buốt (cảm giác chạm)",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "LÃNH",
        "components": "冷 = 冫 (Băng - Băng giá) + 令 (Lệnh - Mệnh lệnh)",
        "story": "Nhận được mệnh lệnh (令) là phải dội nước đá (冫) nên cảm thấy cực kỳ LẠNH LẼO.",
        "examples": "冷たい (Lạnh buốt)"
      }
    },
    {
      "id": "L8_20",
      "word": "難しい",
      "reading": "むずかしい",
      "romaji": "muzukashii",
      "meaning": "Khó",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "NAN",
        "components": "難 = 廿 (Chấp - 20) + 口 (Khẩu) + 夫 (Phu - Chồng) + 隹 (Truy - Chim đuôi ngắn)",
        "story": "Chồng (夫) bắt được con chim (隹) trong vòng 20 (廿) miệng (口) quở trách là điều rất KHÓ KHĂN (Nan).",
        "examples": "難しい (Khó khăn)"
      }
    },
    {
      "id": "L8_21",
      "word": "易しい",
      "reading": "やさしい",
      "romaji": "yasashii",
      "meaning": "Dễ",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "DỊ",
        "components": "易 = 日 (Nhật - Mặt trời) + 勿 (Vật - Không)",
        "story": "Việc mặt trời (日) chiếu sáng vạn vật (勿) là quy luật DỄ DÀNG hiển nhiên.",
        "examples": "易しい (Dễ)"
      }
    },
    {
      "id": "L8_22",
      "word": "高い",
      "reading": "たかい",
      "romaji": "takai",
      "meaning": "Cao, đắt",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "CAO",
        "components": "高 = 亠 (Đầu) + 口 (Khẩu) + 冂 (Quynh) + 口 (Khẩu)",
        "story": "Một tòa tháp cao vút được xây dựng từ nhiều lầu gác (Quynh, Khẩu).",
        "examples": "高い (Cao, Đắt), 高校 (Cấp 3)"
      }
    },
    {
      "id": "L8_23",
      "word": "安い",
      "reading": "やすい",
      "romaji": "yasui",
      "meaning": "Rẻ",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "AN",
        "components": "安 = 宀 (Miên - Mái nhà) + 女 (Nữ - Phụ nữ)",
        "story": "Người phụ nữ (女) ở dưới mái nhà (宀) thì luôn cảm thấy BÌNH AN (An). Hàng hóa bình an thì giá RẺ.",
        "examples": "安い (Rẻ), 安全 (An toàn)"
      }
    },
    {
      "id": "L8_24",
      "word": "低い",
      "reading": "ひくい",
      "romaji": "hikui",
      "meaning": "Thấp",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "ĐÊ",
        "components": "低 = 亻 (Nhân - Người) + 氏 (Thị - Họ/Nền tảng) + 丶",
        "story": "Người (亻) xuất thân từ nền tảng gia thế (氏) hèn THẤP (Đê).",
        "examples": "低い (Thấp)"
      }
    },
    {
      "id": "L8_25",
      "word": "おもしろい",
      "reading": "おもしろい",
      "romaji": "omoshiroi",
      "meaning": "Thú vị",
      "type": "Tính từ đuôi i"
    },
    {
      "id": "L8_26",
      "word": "おいしい",
      "reading": "おいしい",
      "romaji": "oishii",
      "meaning": "Ngon",
      "type": "Tính từ đuôi i"
    },
    {
      "id": "L8_27",
      "word": "忙しい",
      "reading": "いそがしい",
      "romaji": "isogashii",
      "meaning": "Bận rộn",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "MANG",
        "components": "忙 = 忄 (Tâm - Trái tim) + 亡 (Vong - Mất)",
        "story": "BẬN RỘN đến mức đánh mất (亡) cả trái tim (忄).",
        "examples": "忙しい (Bận rộn)"
      }
    },
    {
      "id": "L8_28",
      "word": "楽しい",
      "reading": "たのしい",
      "romaji": "tanoshii",
      "meaning": "Vui vẻ",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "LẠC",
        "components": "楽 = 白 (Bạch - Trắng) + 幺 (Yêu - Sợi tơ) + 木 (Mộc - Cây)",
        "story": "Đánh đàn (làm bằng gỗ 木, dây đàn 幺) dưới ánh sáng trắng (白) thật là VUI VẺ (Lạc).",
        "examples": "楽しい (Vui vẻ), 音楽 (Âm nhạc)"
      }
    },
    {
      "id": "L8_29",
      "word": "白い",
      "reading": "しろい",
      "romaji": "shiroi",
      "meaning": "Trắng",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "BẠCH",
        "components": "白 = ノ (Phẩy) + 日 (Nhật - Mặt trời)",
        "story": "Mặt trời (日) tỏa ra tia sáng (ノ) màu TRẮNG tinh khôi.",
        "examples": "白い (Màu trắng)"
      }
    },
    {
      "id": "L8_30",
      "word": "黒い",
      "reading": "くろい",
      "romaji": "kuroi",
      "meaning": "Đen",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "HẮC",
        "components": "黒 = 里 (Lý - Làng mạc) + 灬 (Hỏa - Lửa)",
        "story": "Ngôi làng (里) bị lửa (灬) thiêu rụi thành tro ĐEN (Hắc).",
        "examples": "黒い (Màu đen)"
      }
    },
    {
      "id": "L8_31",
      "word": "赤い",
      "reading": "あかい",
      "romaji": "akai",
      "meaning": "Đỏ",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "XÍCH",
        "components": "赤 = 土 (Thổ - Đất) + 灬 (Hỏa - Lửa)",
        "story": "Lửa (灬) thiêu đốt mặt đất (土) cháy rực màu ĐỎ (Xích).",
        "examples": "赤い (Màu đỏ)"
      }
    },
    {
      "id": "L8_32",
      "word": "青い",
      "reading": "あおい",
      "romaji": "aoi",
      "meaning": "Xanh da trời",
      "type": "Tính từ đuôi i",
      "kanjiBreakdown": {
        "hanviet": "THANH",
        "components": "青 = 龶 (Sinh - Sinh ra) + 月 (Nguyệt - Mặt trăng)",
        "story": "Sự sống (Sinh) nảy nở dưới mặt trăng (Nguyệt) phát ra màu XANH (Thanh) đầy sức sống.",
        "examples": "青い (Màu xanh)"
      }
    },
    {
      "id": "L8_33",
      "word": "桜",
      "reading": "さくら",
      "romaji": "sakura",
      "meaning": "Hoa anh đào",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ANH",
        "components": "桜 = 木 (Mộc - Cây) + ツ + 女 (Nữ)",
        "story": "Loài cây (木) hoa đẹp như người phụ nữ (女) đội vương miện (ツ) chính là cây hoa ANH đào.",
        "examples": "桜 (Hoa anh đào)"
      }
    },
    {
      "id": "L8_34",
      "word": "山",
      "reading": "やま",
      "romaji": "yama",
      "meaning": "Núi",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SƠN",
        "components": "山 = Trực quan",
        "story": "Hình ảnh 3 đỉnh NÚI nhấp nhô.",
        "examples": "山 (Núi), 富士山 (Núi Phú Sĩ)"
      }
    },
    {
      "id": "L8_35",
      "word": "町",
      "reading": "まち",
      "romaji": "machi",
      "meaning": "Thị trấn, phố",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐINH",
        "components": "町 = 田 (Điền - Ruộng) + 丁 (Đinh - Cây đinh/Đường phố)",
        "story": "Con đường (丁) chia cắt các thửa ruộng (田) để tạo thành THỊ TRẤN, phố xá (Đinh).",
        "examples": "町 (Thị trấn)"
      }
    },
    {
      "id": "L8_36",
      "word": "食べ物",
      "reading": "たべもの",
      "romaji": "tabemono",
      "meaning": "Đồ ăn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỰC VẬT",
        "components": "食 (Thực - Ăn) + 物 (Vật - Đồ vật)",
        "story": "Đồ vật (物) dùng để ăn (食) là ĐỒ ĂN.",
        "examples": "食べ物 (Đồ ăn), 買い物 (Mua sắm)"
      }
    },
    {
      "id": "L8_37",
      "word": "所",
      "reading": "ところ",
      "romaji": "tokoro",
      "meaning": "Nơi chốn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SỞ",
        "components": "所 = 戸 (Hộ - Cánh cửa) + 斤 (Cân - Cây rìu)",
        "story": "Gác cây rìu (斤) trước cửa (戸) để bảo vệ NƠI CHỐN (Sở) của mình.",
        "examples": "所 (Nơi chốn)"
      }
    },
    {
      "id": "L8_38",
      "word": "寮",
      "reading": "りょう",
      "romaji": "ryou",
      "meaning": "Ký túc xá",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LIÊU",
        "components": "寮 = 宀 (Miên - Mái nhà) + 大 (Đại) + 丷 + 日 (Nhật) + 小 (Tiểu)",
        "story": "Dưới mái nhà (宀), có rất nhiều (Đại, Tiểu) ánh sáng (Nhật) — đó là KÝ TÚC XÁ sáng sủa.",
        "examples": "寮 (Ký túc xá)"
      }
    },
    {
      "id": "L8_39",
      "word": "どう",
      "reading": "どう",
      "romaji": "dou",
      "meaning": "Như thế nào?",
      "type": "Từ hỏi"
    },
    {
      "id": "L8_40",
      "word": "どんな",
      "reading": "どんな",
      "romaji": "donna",
      "meaning": "...như thế nào? (+ N)",
      "type": "Từ hỏi"
    },
    {
      "id": "L8_41",
      "word": "いい（よい）",
      "reading": "いい",
      "romaji": "ii",
      "meaning": "Tốt",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "TỐT",
        "components": "Không có Kanji ở N5",
        "story": "Tốt.",
        "examples": "いい (Tốt)"
      }
    },
    {
      "id": "L8_42",
      "word": "悪い",
      "reading": "わるい",
      "romaji": "warui",
      "meaning": "Xấu",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "ÁC",
        "components": "亜 (Á - Châu Á) + 心 (Tâm - Trái tim)",
        "story": "Tâm mà mang sự đè nén (Á) là tâm Ác, tính Xấu.",
        "examples": "悪い (Xấu)"
      }
    },
    {
      "id": "L8_43",
      "word": "冷たい",
      "reading": "つめたい",
      "romaji": "tsumetai",
      "meaning": "Lạnh (cảm giác khi chạm vào)",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "LÃNH",
        "components": "冷 (Lãnh)",
        "story": "Cảm giác lạnh khi chạm vào.",
        "examples": "冷たい (Lạnh)"
      }
    },
    {
      "id": "L8_44",
      "word": "易しい",
      "reading": "やさしい",
      "romaji": "yasashii",
      "meaning": "Dễ",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "DỊCH",
        "components": "易 (Dịch)",
        "story": "Việc gì đó dễ dàng.",
        "examples": "易しい (Dễ)"
      }
    },
    {
      "id": "L8_45",
      "word": "低い",
      "reading": "ひくい",
      "romaji": "hikui",
      "meaning": "Thấp",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "ĐÊ",
        "components": "低 (Đê)",
        "story": "Vị trí thấp.",
        "examples": "低い (Thấp)"
      }
    },
    {
      "id": "L8_46",
      "word": "楽しい",
      "reading": "たのしい",
      "romaji": "tanoshii",
      "meaning": "Vui vẻ",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "LẠC / NHẠC",
        "components": "白 (Bạch) + 木 (Mộc)",
        "story": "Chơi nhạc khí bằng gỗ thật là Vui.",
        "examples": "楽しい (Vui vẻ), 音楽 (Âm nhạc)"
      }
    },
    {
      "id": "L8_47",
      "word": "黒い",
      "reading": "くろい",
      "romaji": "kuroi",
      "meaning": "Màu đen",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "HẮC",
        "components": "黒 (Hắc)",
        "story": "Màu đen.",
        "examples": "黒い (Màu đen)"
      }
    },
    {
      "id": "L8_48",
      "word": "赤い",
      "reading": "あかい",
      "romaji": "akai",
      "meaning": "Màu đỏ",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "XÍCH",
        "components": "赤 (Xích)",
        "story": "Màu đỏ.",
        "examples": "赤い (Màu đỏ)"
      }
    },
    {
      "id": "L8_49",
      "word": "青い",
      "reading": "あおい",
      "romaji": "aoi",
      "meaning": "Màu xanh da trời",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "THANH",
        "components": "青 (Thanh)",
        "story": "Màu xanh.",
        "examples": "青い (Màu xanh)"
      }
    },
    {
      "id": "L8_50",
      "word": "桜",
      "reading": "さくら",
      "romaji": "sakura",
      "meaning": "Hoa anh đào",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ANH",
        "components": "桜 (Anh)",
        "story": "Hoa anh đào.",
        "examples": "桜 (Hoa anh đào)"
      }
    },
    {
      "id": "L8_51",
      "word": "食べ物",
      "reading": "たべもの",
      "romaji": "tabemono",
      "meaning": "Đồ ăn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỰC VẬT",
        "components": "食 (Thực) + 物 (Vật)",
        "story": "Vật phẩm để ăn.",
        "examples": "食べ物 (Đồ ăn)"
      }
    },
    {
      "id": "L8_52",
      "word": "勉強",
      "reading": "べんきょう",
      "romaji": "benkyou",
      "meaning": "Việc học tập",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MIỄN CƯỜNG",
        "components": "勉 (Miễn) + 強 (Cường)",
        "story": "Cố gắng gượng ép làm việc gì đó.",
        "examples": "勉強 (Học tập)"
      }
    },
    {
      "id": "L8_53",
      "word": "生活",
      "reading": "せいかつ",
      "romaji": "seikatsu",
      "meaning": "Cuộc sống, sinh hoạt",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SINH HOẠT",
        "components": "生 (Sinh) + 活 (Hoạt)",
        "story": "Hoạt động sống hàng ngày.",
        "examples": "生活 (Cuộc sống, sinh hoạt)"
      }
    },
    {
      "id": "L8_54",
      "word": "お仕事",
      "reading": "おしごと",
      "romaji": "oshigoto",
      "meaning": "Công việc (thêm お để tôn kính)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SĨ SỰ",
        "components": "仕 (Sĩ) + 事 (Sự)",
        "story": "Sự việc của người phục vụ, công việc.",
        "examples": "お仕事 (Công việc)"
      }
    },
    {
      "id": "L8_55",
      "word": "どれ",
      "reading": "どれ",
      "romaji": "dore",
      "meaning": "Cái nào (trong số nhiều cái)",
      "type": "Từ hỏi"
    },
    {
      "id": "L8_56",
      "word": "とても",
      "reading": "とても",
      "romaji": "totemo",
      "meaning": "Rất",
      "type": "Phó từ"
    },
    {
      "id": "L8_57",
      "word": "あまり",
      "reading": "あまり",
      "romaji": "amari",
      "meaning": "Không ~ lắm (dùng với thể phủ định)",
      "type": "Phó từ"
    },
    {
      "id": "L8_58",
      "word": "そして",
      "reading": "そして",
      "romaji": "soshite",
      "meaning": "Và, sau đó",
      "type": "Liên từ"
    },
    {
      "id": "L8_59",
      "word": "～が、～",
      "reading": "～が、～",
      "romaji": "~ga, ~",
      "meaning": "~ nhưng ~",
      "type": "Liên từ"
    }
  ],
  "grammar": [
    {
      "title": "Tính từ đuôi な và Tính từ đuôi い",
      "structure": "Phân loại 2 nhóm tính từ",
      "usage": "Tính từ tiếng Nhật chia làm 2 loại. Tính từ đuôi な tận cùng là な (ví dụ: しんせつな, べんりな). Tính từ đuôi い tận cùng là い (ví dụ: おおきい, あたらしい). Lưu ý một số từ tận cùng là い nhưng lại thuộc nhóm な (きれいな, ゆうめいな).",
      "examples": [
        {
          "jp": "しんせつ（な）",
          "romaji": "shinsetsu(na)",
          "vn": "Tốt bụng"
        },
        {
          "jp": "おおきい",
          "romaji": "ookii",
          "vn": "To lớn"
        }
      ]
    },
    {
      "title": "N は TT です (Câu khẳng định)",
      "structure": "N は な-TT(bỏ な) です / い-TT です",
      "usage": "Khi làm vị ngữ trong câu khẳng định hiện tại, tính từ đuôi な sẽ bỏ な và thêm です. Tính từ đuôi い thì giữ nguyên い và thêm です.",
      "examples": [
        {
          "jp": "せんせいは しんせつです。",
          "romaji": "sensei wa shinsetsu desu.",
          "vn": "Giáo viên rất tốt bụng."
        },
        {
          "jp": "ふじさんは たかいです。",
          "romaji": "fujisan wa takai desu.",
          "vn": "Núi Phú Sĩ thì cao."
        }
      ]
    },
    {
      "title": "N は TT(phủ định) です",
      "structure": "な-TT: じゃありません / い-TT: ～くないです",
      "usage": "Thể phủ định của tính từ đuôi な là bỏ な thêm じゃありません (giống Danh từ). Thể phủ định của tính từ đuôi い là bỏ い thêm くないです.",
      "examples": [
        {
          "jp": "あそこは しずかじゃありません。",
          "romaji": "asoko wa shizuka ja arimasen.",
          "vn": "Chỗ kia không yên tĩnh."
        },
        {
          "jp": "ハノイは あつくないです。",
          "romaji": "hanoi wa atsukunai desu.",
          "vn": "Hà Nội không nóng."
        }
      ]
    },
    {
      "title": "N は TT ですか (Câu nghi vấn)",
      "structure": "N は TT ですか",
      "usage": "Để trả lời cho câu hỏi tính từ, phải nhắc lại tính từ đó ở dạng khẳng định (はい、TT です) hoặc phủ định (いいえ、TT phủ định). Tuyệt đối KHÔNG dùng そうです / そうじゃありません.",
      "examples": [
        {
          "jp": "ペキンは さむいですか。",
          "romaji": "pekin wa samui desu ka.",
          "vn": "Bắc Kinh có lạnh không?"
        },
        {
          "jp": "はい、さむいです。",
          "romaji": "hai, samui desu.",
          "vn": "Có, lạnh."
        }
      ]
    },
    {
      "title": "TT bổ nghĩa cho Danh từ",
      "structure": "な-TT な N / い-TT い N",
      "usage": "Khi tính từ đứng trước danh từ để miêu tả, tính từ đuôi な GIỮ NGUYÊN な, tính từ đuôi い GIỮ NGUYÊN い.",
      "examples": [
        {
          "jp": "しんせつな せんせいです。",
          "romaji": "shinsetsu na sensei desu.",
          "vn": "Là một giáo viên tốt bụng."
        },
        {
          "jp": "たかい やまです。",
          "romaji": "takai yama desu.",
          "vn": "Là một ngọn núi cao."
        }
      ]
    },
    {
      "title": "とても và あまり",
      "structure": "とても + Khẳng định / あまり + Phủ định",
      "usage": "とても (rất) đi cùng tính từ ở thể khẳng định. あまり (không... lắm) luôn đi cùng tính từ ở thể phủ định.",
      "examples": [
        {
          "jp": "とても さむいです。",
          "romaji": "totemo samui desu.",
          "vn": "Rất lạnh."
        },
        {
          "jp": "あまり さむくないです。",
          "romaji": "amari samukunai desu.",
          "vn": "Không lạnh lắm."
        }
      ]
    },
    {
      "title": "どうですか / どんな N ですか",
      "structure": "N は どうですか / N1 は どんな N2 ですか",
      "usage": "どうですか dùng để hỏi cảm nhận chung về N (N thế nào?). どんな dùng để hỏi tính chất của N (N1 là loại/kiểu N2 thế nào?), sau どんな BẮT BUỘC phải có một Danh từ.",
      "examples": [
        {
          "jp": "にほんの せいかつは どうですか。",
          "romaji": "nihon no seikatsu wa dou desu ka.",
          "vn": "Cuộc sống ở Nhật thế nào?"
        },
        {
          "jp": "ならは どんな まちですか。",
          "romaji": "nara wa donna machi desu ka.",
          "vn": "Nara là thành phố như thế nào?"
        }
      ]
    },
    {
      "title": "Liên từ が (Nhưng)",
      "structure": "S1 が、S2",
      "usage": "Dùng để nối 2 vế câu có ý nghĩa trái ngược nhau (Ví dụ: Ngon NHƯNG đắt). Trái ngược với そして (Và) dùng nối 2 vế tương đồng.",
      "examples": [
        {
          "jp": "おいしいですが、たかいです。",
          "romaji": "oishii desu ga, takai desu.",
          "vn": "Ngon nhưng mà đắt."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "この 町(まち)は しずか [blank]。",
      "options": ["じゃありません", "ではありません", "くないです", "くありません"],
      "answer": "じゃありません",
      "vn": "Thị trấn này không yên tĩnh.",
      "explanation": "しずか là tính từ đuôi な. Thể phủ định là bỏ な thêm じゃありません (hoặc ではありません). Ở đây đáp án じゃありません phù hợp nhất với khẩu ngữ."
    },
    {
      "question": "日本語(にほんご)は むずかしいですか。 ...いいえ、むずかし[blank]。",
      "options": ["くないです", "じゃありません", "くありません", "ないです"],
      "answer": "くないです",
      "vn": "Tiếng Nhật có khó không? ...Không, không khó.",
      "explanation": "むずかしい là tính từ đuôi い. Phủ định thì bỏ い thêm くないです."
    },
    {
      "question": "さくら大学(だいがく)は ゆうめい [blank] 大学です。",
      "options": ["な", "い", "の", "(không điền)"],
      "answer": "な",
      "vn": "Đại học Sakura là một trường đại học nổi tiếng.",
      "explanation": "ゆうめい là tính từ đuôi な đặc biệt (kết thúc bằng い). Khi bổ nghĩa cho danh từ phía sau (大学) phải giữ nguyên な."
    },
    {
      "question": "これは [blank] くるまです。",
      "options": ["新(あたら)しい", "新(あたら)しいな", "新(あたら)しいの", "新(あたら)し"],
      "answer": "新(あたら)しい",
      "vn": "Đây là một chiếc ô tô mới.",
      "explanation": "新しい là tính từ đuôi い. Bổ nghĩa cho danh từ phía sau (くるま) thì giữ nguyên い."
    },
    {
      "question": "この ケーキは [blank] おいしくないです。",
      "options": ["あまり", "とても", "そして", "が"],
      "answer": "あまり",
      "vn": "Chiếc bánh này không ngon lắm.",
      "explanation": "Câu ở thể phủ định (おいしくないです) nên phải đi kèm với phó từ あまり (không... lắm)."
    },
    {
      "question": "この ケーキは [blank] おいしいです。",
      "options": ["とても", "あまり", "そして", "どんな"],
      "answer": "とても",
      "vn": "Chiếc bánh này rất ngon.",
      "explanation": "Câu ở thể khẳng định (おいしいです) nên đi kèm phó từ とても (rất)."
    },
    {
      "question": "日本(にほん)の 生活(せいかつ)は [blank]。 ...楽(たの)しいです。",
      "options": ["どうですか", "どんなですか", "なんですか", "どれですか"],
      "answer": "どうですか",
      "vn": "Cuộc sống ở Nhật Bản như thế nào? ...Rất vui.",
      "explanation": "Hỏi ấn tượng, cảm nhận chung về một sự việc dùng どうですか (Như thế nào)."
    },
    {
      "question": "ハノイは [blank] 町(まち)ですか。 ...にぎやかな 町です。",
      "options": ["どんな", "どう", "なん", "どれ"],
      "answer": "どんな",
      "vn": "Hà Nội là thành phố như thế nào? ...Là một thành phố náo nhiệt.",
      "explanation": "Đứng trước một danh từ (町) để hỏi tính chất của danh từ đó, BẮT BUỘC phải dùng どんな."
    },
    {
      "question": "日本(にほん)の 食(た)べ物(もの)は おいしいです [blank]、高(たか)いです。",
      "options": ["が", "そして", "から", "で"],
      "answer": "が",
      "vn": "Đồ ăn Nhật Bản thì ngon nhưng mà đắt.",
      "explanation": "Hai vế mang ý nghĩa trái ngược nhau (Ngon - Tích cực >< Đắt - Tiêu cực) nên dùng liên từ が (Nhưng)."
    },
    {
      "question": "わたしの 部屋(へや)は 小(ちい)さいです。[blank]、古(ふる)いです。",
      "options": ["そして", "が", "から", "で"],
      "answer": "そして",
      "vn": "Phòng của tôi thì nhỏ. Và còn cũ nữa.",
      "explanation": "Hai vế có cùng mức độ đánh giá (Nhỏ - Tiêu cực, Cũ - Tiêu cực) nên dùng liên từ そして (Và)."
    },
    {
      "question": "北京(ペキン)は 寒(さむ)いですか。 ...はい、[blank]。",
      "options": ["寒(さむ)いです", "そうです", "寒(さむ)いじゃありません", "寒(さむ)くないです"],
      "answer": "寒(さむ)いです",
      "vn": "Bắc Kinh có lạnh không? ...Có, lạnh.",
      "explanation": "Để trả lời câu hỏi tính từ, phải nhắc lại tính từ đó. TUYỆT ĐỐI không dùng 'そうです' như với Danh từ."
    },
    {
      "question": "ワンさんは [blank]。",
      "options": ["きれいです", "きれいなです", "きれいいです", "きれいくないです"],
      "answer": "きれいです",
      "vn": "Bạn Wang thì đẹp.",
      "explanation": "きれい là tính từ đuôi な. Khi đứng làm vị ngữ (cuối câu) thì bỏ な thêm です."
    },
    {
      "question": "この 部屋(へや)は [blank]。",
      "options": ["きれいじゃありません", "きれいくないです", "きれいなじゃありません", "きれいですじゃありません"],
      "answer": "きれいじゃありません",
      "vn": "Căn phòng này không sạch.",
      "explanation": "きれい là tính từ đuôi な. Thể phủ định của nó là bỏ な thêm じゃありません (KHÔNG dùng くないです)."
    },
    {
      "question": "山田(やまだ)さんの 傘(かさ)は [blank] ですか。 ...あの 青(あお)い 傘です。",
      "options": ["どれ", "どんな", "どう", "なん"],
      "answer": "どれ",
      "vn": "Ô của anh Yamada là cái nào? ...Là cái ô màu xanh kia.",
      "explanation": "Hỏi để lựa chọn 1 cái trong từ 3 cái trở lên dùng どれ (Cái nào)."
    },
    {
      "question": "この パソコンは [blank]。",
      "options": ["新(あたら)しいです", "新(あたら)しいだ", "新(あたら)しいな", "新(あたら)しくです"],
      "answer": "新(あたら)しいです",
      "vn": "Máy tính này thì mới.",
      "explanation": "新しい là tính từ đuôi い. Làm vị ngữ cuối câu thì giữ nguyên い thêm です."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "きれいな町、元気な人",
    "titleVn": "🏙️ Phố Đẹp, Người Khỏe",
    "intro": "Tóm tắt các cặp tính từ đối lập của Bài 8 qua những vần thơ miêu tả sự vật.",
    "lines": [
      {
        "kanji": "富士山は大きい、私の町は小さい。",
        "jp": "ふじさんは おおきい、わたしの まちは ちいさい。",
        "romaji": "Fujisan wa ookii, watashi no machi wa chiisai.",
        "vn": "Núi Phú Sĩ thì to lớn, thị trấn của tôi thì nhỏ bé.",
        "note": "大きい · 小さい"
      },
      {
        "kanji": "車は新しい、自転車は古い。",
        "jp": "くるまは あたらしい、じてんしゃは ふるい。",
        "romaji": "Kuruma wa atarashii, jitensha wa furui.",
        "vn": "Xe ô tô thì mới, xe đạp thì cũ.",
        "note": "新しい · 古い"
      },
      {
        "kanji": "東京はにぎやか、寮は静かです。",
        "jp": "とうきょうは にぎやか、りょうは しずか です。",
        "romaji": "Toukyou wa nigiyaka, ryou wa shizuka desu.",
        "vn": "Tokyo thì náo nhiệt, ký túc xá thì yên tĩnh.",
        "note": "にぎやか · 静か"
      },
      {
        "kanji": "日本の生活は楽しい、仕事は忙しい。",
        "jp": "にほんの せいかつは たのしい、しごとは いそがしい。",
        "romaji": "Nihon no seikatsu wa tanoshii, shigoto wa isogashii.",
        "vn": "Cuộc sống ở Nhật thì vui, công việc thì bận rộn.",
        "note": "楽しい · 忙しい"
      },
      {
        "kanji": "桜はきれい、人は親切。",
        "jp": "さくらは きれい、ひとは しんせつ。",
        "romaji": "Sakura wa kirei, hito wa shinsetsu.",
        "vn": "Hoa anh đào thật đẹp, con người thật tốt bụng.",
        "note": "きれい · 親切"
      },
      {
        "kanji": "食べ物はおいしいですが、高いです！",
        "jp": "たべものは おいしいですが、たかい です！",
        "romaji": "Tabemono wa oishii desu ga, takai desu!",
        "vn": "Đồ ăn thì ngon nhưng mà đắt!",
        "note": "おいしい · 高い"
      }
    ]
  }
};

export default lesson;
