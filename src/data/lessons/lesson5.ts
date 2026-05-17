import { NihongoLesson } from './types';
import { readings } from '../readings/reading5';

const lesson: NihongoLesson = {
  "id": 5,
  "chapter": "第5課",
  "title": "いくらですか",
  "titleVn": "Bài 5: Bao nhiêu tiền?",
  "theme": "Mua sắm · Số đếm · Tiền tệ",
  "words": [
    {
      "id": "L5_01",
      "word": "いくら",
      "reading": "いくら",
      "romaji": "ikura",
      "meaning": "Bao nhiêu tiền?",
      "type": "Từ hỏi"
    },
    {
      "id": "L5_02",
      "word": "〜円",
      "reading": "〜えん",
      "romaji": "~en",
      "meaning": "~ Yên (đơn vị tiền Nhật)",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "VIÊN",
        "components": "円 (Viên)",
        "story": "Tiền Yên Nhật.",
        "examples": "百円 (100 Yên)"
      }
    },
    {
      "id": "L5_03",
      "word": "百",
      "reading": "ひゃく",
      "romaji": "hyaku",
      "meaning": "100",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "BÁCH",
        "components": "百 = 一 (Nhất) + 白 (Bạch - Trắng)",
        "story": "Một (一) trăm là con số hoàn hảo, tinh khôi như màu trắng (白).",
        "examples": "百 (100), 三百 (300)"
      }
    },
    {
      "id": "L5_04",
      "word": "千",
      "reading": "せん",
      "romaji": "sen",
      "meaning": "1000",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "THIÊN",
        "components": "千 = 丿 + 十 (Thập)",
        "story": "Mười (十) thêm một phết (丿) ở trên là một ngàn (千).",
        "examples": "千 (1000), 三千 (3000)"
      }
    },
    {
      "id": "L5_05",
      "word": "万",
      "reading": "まん",
      "romaji": "man",
      "meaning": "10000",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "VẠN",
        "components": "万 = 一 (Nhất) + 勹 (Bao) + 丿",
        "story": "Chữ Vạn (万) giống hình con bọ cạp, con số rất lớn.",
        "examples": "一万 (10000), 万年筆 (Bút máy)"
      }
    },
    {
      "id": "L5_06",
      "word": "ください",
      "reading": "ください",
      "romaji": "kudasai",
      "meaning": "Cho tôi ~ / Làm ơn cho",
      "type": "Mẫu câu"
    },
    {
      "id": "L5_07",
      "word": "いらっしゃいませ",
      "reading": "いらっしゃいませ",
      "romaji": "irasshaimase",
      "meaning": "Xin chào quý khách (kính ngữ cửa hàng)",
      "type": "Mẫu câu"
    },
    {
      "id": "L5_08",
      "word": "店",
      "reading": "みせ",
      "romaji": "mise",
      "meaning": "Cửa hàng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIẾM",
        "components": "店 = 广 (Nghiễm - Mái nhà) + 占 (Chiêm - Chiếm lấy)",
        "story": "Dưới mái nhà (广), chiếm lấy (占) một góc để mở cửa hàng buôn bán.",
        "examples": "店 (Cửa hàng), 店員 (Nhân viên cửa hàng), 喫茶店 (Quán giải khát)"
      }
    },
    {
      "id": "L5_09",
      "word": "買います",
      "reading": "かいます",
      "romaji": "kaimasu",
      "meaning": "Mua",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "MÃI",
        "components": "買 = 罒 (Võng - Mắt lưới) + 貝 (Bối - Vỏ sò/Tiền)",
        "story": "Dùng lưới (罒) gom tiền (貝) đi mua sắm (Mãi).",
        "examples": "買う (Mua), 買い物 (Mua sắm)"
      }
    },
    {
      "id": "L5_10",
      "word": "売ります",
      "reading": "うります",
      "romaji": "urimasu",
      "meaning": "Bán",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "MẠI",
        "components": "売 = 士 (Sĩ - Kẻ sĩ) + 冖 (Mịch) + 儿 (Nhân đi)",
        "story": "Kẻ sĩ (士) đội mũ (冖) mang đồ đi bán (Mại).",
        "examples": "売る (Bán), 売り場 (Quầy bán hàng)"
      }
    },
    {
      "id": "L5_11",
      "word": "見ます",
      "reading": "みます",
      "romaji": "mimasu",
      "meaning": "Xem, nhìn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KIẾN",
        "components": "見 = 目 (Mục - Mắt) + 儿 (Nhân đi)",
        "story": "Người (儿) dùng đôi mắt (目) to để quan sát, nhìn (Kiến).",
        "examples": "見る (Nhìn), 見学 (Kiến học)"
      }
    },
    {
      "id": "L5_12",
      "word": "食べます",
      "reading": "たべます",
      "romaji": "tabemasu",
      "meaning": "Ăn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỰC",
        "components": "食 = 𠆢 (Nhân) + 良 (Lương - Tốt/Gạo)",
        "story": "Con người (𠆢) ăn gạo tốt (良) để no bụng.",
        "examples": "食べる (Ăn), 食堂 (Nhà ăn), 食事 (Bữa ăn)"
      }
    },
    {
      "id": "L5_13",
      "word": "飲みます",
      "reading": "のみます",
      "romaji": "nomimasu",
      "meaning": "Uống",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ẨM",
        "components": "飲 = 食 (Thực - Ăn) + 欠 (Khiếm - Thiếu/Há miệng)",
        "story": "Khi ăn (食) mà há miệng khát nước (欠) thì phải uống (Ẩm).",
        "examples": "飲む (Uống), 飲み物 (Đồ uống)"
      }
    },
    {
      "id": "L5_14",
      "word": "りんご",
      "reading": "りんご",
      "romaji": "ringo",
      "meaning": "Táo",
      "type": "Danh từ"
    },
    {
      "id": "L5_15",
      "word": "みかん",
      "reading": "みかん",
      "romaji": "mikan",
      "meaning": "Quýt",
      "type": "Danh từ"
    },
    {
      "id": "L5_16",
      "word": "バナナ",
      "reading": "バナナ",
      "romaji": "banana",
      "meaning": "Chuối",
      "type": "Danh từ"
    },
    {
      "id": "L5_17",
      "word": "コーヒー",
      "reading": "コーヒー",
      "romaji": "koohii",
      "meaning": "Cà phê",
      "type": "Danh từ"
    },
    {
      "id": "L5_18",
      "word": "お茶",
      "reading": "おちゃ",
      "romaji": "ocha",
      "meaning": "Trà (Nhật)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÀ",
        "components": "艹 (Thảo) + 人 (Nhân) + 木 (Mộc)",
        "story": "Người hái lá cỏ từ trên cây xuống để pha Trà.",
        "examples": "お茶 (Trà)"
      }
    },
    {
      "id": "L5_19",
      "word": "水",
      "reading": "みず",
      "romaji": "mizu",
      "meaning": "Nước (lọc)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỦY",
        "components": "水 (Thủy)",
        "story": "Hình ảnh dòng nước chảy.",
        "examples": "水 (Nước)"
      }
    },
    {
      "id": "L5_20",
      "word": "〜と〜",
      "reading": "〜と〜",
      "romaji": "~to~",
      "meaning": "~ và ~ (liệt kê)",
      "type": "Trợ từ"
    },
    {
      "id": "L5_21",
      "word": "全部で",
      "reading": "ぜんぶで",
      "romaji": "zenbu de",
      "meaning": "Tất cả là, tổng cộng",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "TOÀN BỘ",
        "components": "全 (Toàn) + 部 (Bộ)",
        "story": "Gom hoàn toàn tất cả các bộ phận lại sẽ được Toàn bộ.",
        "examples": "全部 (Toàn bộ)"
      }
    },
    {
      "id": "L5_22",
      "word": "も",
      "reading": "も",
      "romaji": "mo",
      "meaning": "Cũng (thêm vào)",
      "type": "Trợ từ"
    },
    {
      "id": "L5_23",
      "word": "何枚",
      "reading": "なんまい",
      "romaji": "nanmai",
      "meaning": "Mấy tờ? mấy cái phẳng?",
      "type": "Từ hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ MAI",
        "components": "何 (Hà) + 枚 (Mai)",
        "story": "Hỏi xem có Mấy tờ/tấm giấy.",
        "examples": "何枚 (Mấy tờ)"
      }
    },
    {
      "id": "L5_24",
      "word": "一つ",
      "reading": "ひとつ",
      "romaji": "hitotsu",
      "meaning": "Một cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NHẤT",
        "components": "一 (Nhất)",
        "story": "Một gạch ngang biểu thị cho số 1.",
        "examples": "一つ (Một cái)"
      }
    },
    {
      "id": "L5_25",
      "word": "二つ",
      "reading": "ふたつ",
      "romaji": "futatsu",
      "meaning": "Hai cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NHỊ",
        "components": "二 (Nhị)",
        "story": "Hai gạch ngang biểu thị cho số 2.",
        "examples": "二つ (Hai cái)"
      }
    },
    {
      "id": "L5_26",
      "word": "三つ",
      "reading": "みっつ",
      "romaji": "mittsu",
      "meaning": "Ba cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "TAM",
        "components": "三 (Tam)",
        "story": "Ba gạch ngang biểu thị cho số 3.",
        "examples": "三つ (Ba cái)"
      }
    },
    {
      "id": "L5_27",
      "word": "四つ",
      "reading": "よっつ",
      "romaji": "yottsu",
      "meaning": "Bốn cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "TỨ",
        "components": "四 (Tứ)",
        "story": "Chia ra làm bốn hướng.",
        "examples": "四つ (Bốn cái)"
      }
    },
    {
      "id": "L5_28",
      "word": "五つ",
      "reading": "いつつ",
      "romaji": "itsutsu",
      "meaning": "Năm cái",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "NGŨ",
        "components": "五 (Ngũ)",
        "story": "Năm đường giao nhau.",
        "examples": "五つ (Năm cái)"
      }
    },
    {
      "id": "L5_29",
      "word": "行きます",
      "reading": "いきます",
      "romaji": "ikimasu",
      "meaning": "Đi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HÀNH",
        "components": "彳 (Sách) + 亍 (Xúc)",
        "story": "Bước chân trái rồi bước chân phải tạo thành Đi.",
        "examples": "行きます (Đi)"
      }
    },
    {
      "id": "L5_30",
      "word": "来ます",
      "reading": "きます",
      "romaji": "kimasu",
      "meaning": "Đến",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LAI",
        "components": "来 (Lai)",
        "story": "Người từ phương xa đến núp dưới bóng cây.",
        "examples": "来ます (Đến)"
      }
    },
    {
      "id": "L5_31",
      "word": "帰ります",
      "reading": "かえります",
      "romaji": "kaerimasu",
      "meaning": "Về",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "QUY",
        "components": "帰 (Quy)",
        "story": "Dọn dẹp vũ khí, cất áo để Trở về nhà.",
        "examples": "帰ります (Trở về)"
      }
    },
    {
      "id": "L5_32",
      "word": "学校",
      "reading": "がっこう",
      "romaji": "gakkou",
      "meaning": "Trường học",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỌC HIỆU",
        "components": "学 (Học) + 校 (Hiệu)",
        "story": "Nơi có nhiều cây và tòa nhà để trẻ em học tập là Trường học.",
        "examples": "学校 (Trường học)"
      }
    },
    {
      "id": "L5_33",
      "word": "スーパー",
      "reading": "スーパー",
      "romaji": "suupaa",
      "meaning": "Siêu thị",
      "type": "Danh từ"
    },
    {
      "id": "L5_34",
      "word": "駅",
      "reading": "えき",
      "romaji": "eki",
      "meaning": "Nhà ga",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DỊCH",
        "components": "馬 (Mã) + 尺 (Xích)",
        "story": "Nơi những con ngựa dừng lại đo đếm đoạn đường là Nhà ga.",
        "examples": "駅 (Nhà ga)"
      }
    },
    {
      "id": "L5_35",
      "word": "飛行機",
      "reading": "ひこうき",
      "romaji": "hikouki",
      "meaning": "Máy bay",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHI HÀNH CƠ",
        "components": "飛 (Phi) + 行 (Hành) + 機 (Cơ)",
        "story": "Cỗ máy có thể đi bằng cách bay trên trời là Máy bay.",
        "examples": "飛行機 (Máy bay)"
      }
    },
    {
      "id": "L5_36",
      "word": "船",
      "reading": "ふね",
      "romaji": "fune",
      "meaning": "Tàu thủy",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THUYỀN",
        "components": "舟 (Chu) + 几 (Kỷ) + 口 (Khẩu)",
        "story": "Chiếc thuyền chở những người có miệng ăn trên bàn chính là Tàu lớn.",
        "examples": "船 (Tàu)"
      }
    },
    {
      "id": "L5_37",
      "word": "電車",
      "reading": "でんしゃ",
      "romaji": "densha",
      "meaning": "Tàu điện",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỆN XA",
        "components": "電 (Điện) + 車 (Xa)",
        "story": "Chiếc xe chạy bằng năng lượng điện là Tàu điện.",
        "examples": "電車 (Tàu điện)"
      }
    },
    {
      "id": "L5_38",
      "word": "地下鉄",
      "reading": "ちかてつ",
      "romaji": "chikatetsu",
      "meaning": "Tàu điện ngầm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỊA HẠ THIẾT",
        "components": "地 (Địa) + 下 (Hạ) + 鉄 (Thiết)",
        "story": "Khối sắt khổng lồ chạy dưới mặt đất là Tàu điện ngầm.",
        "examples": "地下鉄 (Tàu điện ngầm)"
      }
    },
    {
      "id": "L5_39",
      "word": "新幹線",
      "reading": "しんかんせん",
      "romaji": "shinkansen",
      "meaning": "Tàu Shinkansen",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TÂN CÁN TUYẾN",
        "components": "新 (Tân) + 幹 (Cán) + 線 (Tuyến)",
        "story": "Tuyến đường sắt mới là huyết mạch chính siêu tốc của Nhật Bản.",
        "examples": "新幹線 (Shinkansen)"
      }
    },
    {
      "id": "L5_40",
      "word": "バス",
      "reading": "バス",
      "romaji": "basu",
      "meaning": "Xe buýt",
      "type": "Danh từ"
    },
    {
      "id": "L5_41",
      "word": "タクシー",
      "reading": "タクシー",
      "romaji": "takushii",
      "meaning": "Taxi",
      "type": "Danh từ"
    },
    {
      "id": "L5_42",
      "word": "自転車",
      "reading": "じてんしゃ",
      "romaji": "jitensha",
      "meaning": "Xe đạp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỰ CHUYỂN XA",
        "components": "自 (Tự) + 転 (Chuyển) + 車 (Xa)",
        "story": "Chiếc xe mà bạn phải tự đạp cho bánh lăn tròn là Xe đạp.",
        "examples": "自転車 (Xe đạp)"
      }
    },
    {
      "id": "L5_43",
      "word": "歩いて",
      "reading": "あるいて",
      "romaji": "aruite",
      "meaning": "Đi bộ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "BỘ",
        "components": "止 (Chỉ) + 少 (Thiểu)",
        "story": "Người đi bộ bước một chút rồi lại dừng lại.",
        "examples": "歩いて (Đi bộ)"
      }
    },
    {
      "id": "L5_44",
      "word": "人",
      "reading": "ひと",
      "romaji": "hito",
      "meaning": "Người",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHÂN",
        "components": "人 (Nhân)",
        "story": "Hai người đứng dựa lưng vào nhau.",
        "examples": "人 (Người)"
      }
    },
    {
      "id": "L5_45",
      "word": "友達",
      "reading": "ともだち",
      "romaji": "tomodachi",
      "meaning": "Bạn bè",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỮU ĐẠT",
        "components": "友 (Hữu) + 達 (Đạt)",
        "story": "Nhiều người kết giao bằng hữu thân thiết với nhau là Bạn bè.",
        "examples": "友達 (Bạn bè)"
      }
    },
    {
      "id": "L5_46",
      "word": "彼",
      "reading": "かれ",
      "romaji": "kare",
      "meaning": "Anh ấy / Bạn trai",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "BỈ",
        "components": "彳 (Sách) + 皮 (Bì)",
        "story": "Anh ấy đang bước đi mang theo tấm da.",
        "examples": "彼 (Anh ấy)"
      }
    },
    {
      "id": "L5_47",
      "word": "彼女",
      "reading": "かのじょ",
      "romaji": "kanojo",
      "meaning": "Cô ấy / Bạn gái",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "BỈ NỮ",
        "components": "彼 (Bỉ) + 女 (Nữ)",
        "story": "Người phụ nữ đi cùng anh ấy chính là Bạn gái.",
        "examples": "彼女 (Bạn gái)"
      }
    },
    {
      "id": "L5_48",
      "word": "家族",
      "reading": "かぞく",
      "romaji": "kazoku",
      "meaning": "Gia đình",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIA TỘC",
        "components": "家 (Gia) + 族 (Tộc)",
        "story": "Những người sống chung dưới một mái nhà tạo thành Gia đình.",
        "examples": "家族 (Gia đình)"
      }
    },
    {
      "id": "L5_49",
      "word": "一人で",
      "reading": "ひとりで",
      "romaji": "hitori de",
      "meaning": "Một mình",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "NHẤT NHÂN",
        "components": "一 (Nhất) + 人 (Nhân)",
        "story": "Chỉ có 1 người lẻ loi nghĩa là Một mình.",
        "examples": "一人で (Một mình)"
      }
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "おかいもの",
    "titleVn": "🛍️ Đi Mua Sắm",
    "intro": "Câu chuyện đi chợ — luyện số đếm, giá tiền Yên và cách đặt hàng bằng tiếng Nhật",
    "lines": [
      {
        "kanji": "いらっしゃいませ！店へようこそ。",
        "jp": "いらっしゃいませ！みせへ ようこそ。",
        "romaji": "Irasshaimase! Mise e youkoso.",
        "vn": "Xin chào quý khách! Chào mừng đến cửa hàng.",
        "note": "いらっしゃいませ · みせ"
      },
      {
        "kanji": "このりんごはいくらですか？1個150円です。",
        "jp": "この りんごは いくら ですか？1こ 150えん です。",
        "romaji": "Kono ringo wa ikura desu ka? Ikko 150-en desu.",
        "vn": "Táo này bao nhiêu? Một quả 150 yên.",
        "note": "いくら · りんご · 〜えん"
      },
      {
        "kanji": "みかんは一つ80円、バナナは二つで100円。",
        "jp": "みかんは ひとつ 80えん、バナナは ふたつで 100えん。",
        "romaji": "Mikan wa hitotsu 80-en, banana wa futatsu de 100-en.",
        "vn": "Quýt một quả 80 yên, chuối hai quả 100 yên.",
        "note": "みかん · ひとつ · ふたつ · ひゃく"
      },
      {
        "kanji": "りんごを三つとみかんを四つください。",
        "jp": "りんごを みっつと みかんを よっつ ください。",
        "romaji": "Ringo wo mittsu to mikan wo yottsu kudasai.",
        "vn": "Cho tôi 3 quả táo và 4 quả quýt.",
        "note": "みっつ · よっつ · ください"
      },
      {
        "kanji": "コーヒーは五つで1000円です。千円！",
        "jp": "コーヒーは いつつで 1000えん です。せんえん！",
        "romaji": "Koohii wa itsutsu de 1000-en desu. Sen-en!",
        "vn": "Cà phê 5 cái là 1000 yên. Một nghìn yên!",
        "note": "いつつ · せん · コーヒー"
      },
      {
        "kanji": "お茶も水も買います。全部でいくら？",
        "jp": "おちゃも みずも かいます。ぜんぶで いくら？",
        "romaji": "Ocha mo mizu mo kaimasu. Zenbu de ikura?",
        "vn": "Trà và nước tôi cũng mua. Tổng cộng là bao nhiêu?",
        "note": "おちゃ · みず · かいます · ぜんぶで"
      },
      {
        "kanji": "全部で2万5千円です。",
        "jp": "ぜんぶで 2まん5せんえん です。",
        "romaji": "Zenbu de 2-man 5-sen en desu.",
        "vn": "Tổng cộng là 25.000 yên.",
        "note": "まん · せん · 〜えん"
      },
      {
        "kanji": "この時計も売ります。ちょっと高いですが...",
        "jp": "この とけいも うります。ちょっと たかい ですが...",
        "romaji": "Kono tokei mo urimasu. Chotto takai desu ga...",
        "vn": "Cái đồng hồ này cũng bán. Hơi đắt nhưng...",
        "note": "うります · たかい"
      },
      {
        "kanji": "じゃ、この時計を五つください！",
        "jp": "じゃ、この とけいを いつつ ください！",
        "romaji": "Ja, kono tokei wo itsutsu kudasai!",
        "vn": "Vậy thì cho tôi 5 cái đồng hồ này!",
        "note": "ください"
      }
    ]
  }
};

export default lesson;
