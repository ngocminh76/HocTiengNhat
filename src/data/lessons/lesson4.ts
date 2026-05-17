import { NihongoLesson } from './types';
import { readings } from '../readings/reading4';

const lesson: NihongoLesson = {
  "id": 4,
  "chapter": "第4課",
  "title": "なんじですか",
  "titleVn": "Bài 4: Mấy giờ rồi?",
  "theme": "Thời gian · Lịch trình · Giờ mở/đóng cửa",
  "words": [
    {
      "id": "L4_01",
      "word": "〜時",
      "reading": "〜じ",
      "romaji": "~ji",
      "meaning": "~ giờ",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "THỜI",
        "components": "時 = 日 (Nhật - Mặt trời) + 寺 (Tự - Chùa)",
        "story": "Ngày xưa dùng mặt trời (日) chiếu qua tháp chùa (寺) để biết Thời gian.",
        "examples": "時計 (Đồng hồ), 時間 (Thời gian)"
      }
    },
    {
      "id": "L4_02",
      "word": "〜分",
      "reading": "〜ふん",
      "romaji": "~fun/pun",
      "meaning": "~ phút",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "PHÂN",
        "components": "分 = 八 (Bát - Chia ra) + 刀 (Đao - Con dao)",
        "story": "Dùng dao (刀) chia cắt (八) thời gian ra thành từng Phút (Phân).",
        "examples": "半分 (Một nửa), 分かる (Hiểu)"
      }
    },
    {
      "id": "L4_03",
      "word": "何時",
      "reading": "なんじ",
      "romaji": "nanji",
      "meaning": "Mấy giờ?",
      "type": "Từ hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ THỜI",
        "components": "何 (Hà - Cái gì/Mấy) + 時 (Thời - Giờ)",
        "story": "Bây giờ là mấy (Hà) giờ (Thời)?",
        "examples": "何時 (Mấy giờ), 何分 (Mấy phút)"
      }
    },
    {
      "id": "L4_04",
      "word": "何分",
      "reading": "なんぷん",
      "romaji": "nanpun",
      "meaning": "Mấy phút?",
      "type": "Từ hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ PHÂN",
        "components": "何 (Hà - Cái gì/Mấy) + 分 (Phân - Phút)",
        "story": "Là mấy (Hà) phút (Phân)?",
        "examples": "何分 (Mấy phút)"
      }
    },
    {
      "id": "L4_05",
      "word": "午前",
      "reading": "ごぜん",
      "romaji": "gozen",
      "meaning": "Buổi sáng, trước trưa (AM)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGỌ TIỀN",
        "components": "午 (Ngọ - Giữa trưa) + 前 (Tiền - Trước)",
        "story": "Thời gian trước (Tiền) giữa trưa (Ngọ) là buổi sáng.",
        "examples": "午前 (Buổi sáng), 午前中 (Trong buổi sáng)"
      }
    },
    {
      "id": "L4_06",
      "word": "午後",
      "reading": "ごご",
      "romaji": "gogo",
      "meaning": "Buổi chiều, sau trưa (PM)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGỌ HẬU",
        "components": "午 (Ngọ - Giữa trưa) + 後 (Hậu - Sau)",
        "story": "Thời gian sau (Hậu) giữa trưa (Ngọ) là buổi chiều.",
        "examples": "午後 (Buổi chiều), 後で (Sau đó)"
      }
    },
    {
      "id": "L4_07",
      "word": "半",
      "reading": "はん",
      "romaji": "han",
      "meaning": "Rưỡi (30 phút)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BÁN",
        "components": "半 = 丷 (Chia) + 二 (Hai) + 丨 (Sổ)",
        "story": "Dùng nhát chém thẳng (丨) chia đôi (丷) số hai (二) ra làm một Nửa (Bán).",
        "examples": "半分 (Một nửa), 5時半 (5 giờ rưỡi)"
      }
    },
    {
      "id": "L4_08",
      "word": "今",
      "reading": "いま",
      "romaji": "ima",
      "meaning": "Bây giờ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIM",
        "components": "今 = 𠆢 (Nhân - Giống cái mái nhà) + 一 (Nhất) + 乛",
        "story": "Dưới mái nhà (𠆢), con người hợp nhất (一) với khoảnh khắc hiện tại (KIM).",
        "examples": "今 (Bây giờ), 今日 (Hôm nay), 今月 (Tháng này)"
      }
    },
    {
      "id": "L4_09",
      "word": "から",
      "reading": "から",
      "romaji": "kara",
      "meaning": "Từ (thời gian)",
      "type": "Trợ từ"
    },
    {
      "id": "L4_10",
      "word": "まで",
      "reading": "まで",
      "romaji": "made",
      "meaning": "Đến (thời gian)",
      "type": "Trợ từ"
    },
    {
      "id": "L4_11",
      "word": "休み",
      "reading": "やすみ",
      "romaji": "yasumi",
      "meaning": "Ngày nghỉ, giờ nghỉ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HƯU",
        "components": "休 = 亻 (Nhân - Người) + 木 (Mộc - Cây)",
        "story": "Một người (亻) đang dựa lưng vào gốc cây (木) để nghỉ ngơi.",
        "examples": "休み (Kỳ nghỉ), 夏休み (Nghỉ hè)"
      }
    },
    {
      "id": "L4_12",
      "word": "昼休み",
      "reading": "ひるやすみ",
      "romaji": "hiruyasumi",
      "meaning": "Giờ nghỉ trưa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÚ HƯU",
        "components": "昼 (Trú - Buổi trưa) + 休み (Hưu - Nghỉ ngơi)",
        "story": "Nghỉ ngơi (Hưu) vào giữa ngày (Trú) là giờ nghỉ trưa.",
        "examples": "昼休み (Nghỉ trưa), 昼ご飯 (Bữa trưa)"
      }
    },
    {
      "id": "L4_13",
      "word": "何曜日",
      "reading": "なんようび",
      "romaji": "nan youbi",
      "meaning": "Thứ mấy?",
      "type": "Từ hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ DIỆU NHẬT",
        "components": "何 (Hà - Mấy) + 曜日 (Diệu Nhật - Ngày trong tuần)",
        "story": "Ngày trong tuần (Diệu Nhật) là ngày thứ mấy (Hà)?",
        "examples": "何曜日 (Thứ mấy)"
      }
    },
    {
      "id": "L4_14",
      "word": "日曜日",
      "reading": "にちようび",
      "romaji": "nichiyoubi",
      "meaning": "Chủ nhật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHẬT DIỆU NHẬT",
        "components": "日 (Nhật - Mặt trời) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Mặt trời (Nhật), đó là Chủ Nhật.",
        "examples": "日曜日 (Chủ nhật), 日本 (Nhật Bản)"
      }
    },
    {
      "id": "L4_15",
      "word": "土曜日",
      "reading": "どようび",
      "romaji": "doyoubi",
      "meaning": "Thứ Bảy",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỔ DIỆU NHẬT",
        "components": "土 (Thổ - Đất) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Đất (Thổ) / sao Thổ, đó là Thứ Bảy.",
        "examples": "土曜日 (Thứ Bảy), 土地 (Đất đai)"
      }
    },
    {
      "id": "L4_16",
      "word": "金曜日",
      "reading": "きんようび",
      "romaji": "kinyoubi",
      "meaning": "Thứ Sáu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIM DIỆU NHẬT",
        "components": "金 (Kim - Vàng/Tiền) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Vàng, Tiền bạc (Kim), đó là Thứ Sáu.",
        "examples": "金曜日 (Thứ Sáu), お金 (Tiền), 銀行 (Ngân hàng)"
      }
    },
    {
      "id": "L4_17",
      "word": "木曜日",
      "reading": "もくようび",
      "romaji": "mokuyoubi",
      "meaning": "Thứ Năm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỘC DIỆU NHẬT",
        "components": "木 (Mộc - Cây) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Cây Tấn phát (Mộc), đó là Thứ Năm.",
        "examples": "木曜日 (Thứ Năm), 木 (Cái cây)"
      }
    },
    {
      "id": "L4_18",
      "word": "水曜日",
      "reading": "すいようび",
      "romaji": "suiyoubi",
      "meaning": "Thứ Tư",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỦY DIỆU NHẬT",
        "components": "水 (Thủy - Nước) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Nước (Thủy) trong trẻo, đó là Thứ Tư.",
        "examples": "水曜日 (Thứ Tư), 水 (Nước)"
      }
    },
    {
      "id": "L4_19",
      "word": "火曜日",
      "reading": "かようび",
      "romaji": "kayoubi",
      "meaning": "Thứ Ba",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỎA DIỆU NHẬT",
        "components": "火 (Hỏa - Lửa) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Lửa (Hỏa) cháy sáng rực rỡ, đó là Thứ Ba.",
        "examples": "火曜日 (Thứ Ba), 火 (Lửa)"
      }
    },
    {
      "id": "L4_20",
      "word": "月曜日",
      "reading": "げつようび",
      "romaji": "getsuyoubi",
      "meaning": "Thứ Hai",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGUYỆT DIỆU NHẬT",
        "components": "月 (Nguyệt - Mặt trăng/tháng) + 曜 (Diệu - Ngày trong tuần) + 日 (Nhật - Ngày)",
        "story": "Ngày (Diệu) tượng trưng cho Mặt trăng (Nguyệt), đó là Thứ Hai.",
        "examples": "月曜日 (Thứ Hai), 一月 (Tháng Một)"
      }
    },
    {
      "id": "L4_21",
      "word": "毎日",
      "reading": "まいにち",
      "romaji": "mainichi",
      "meaning": "Mỗi ngày, hằng ngày",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỖI NHẬT",
        "components": "毎 (Mỗi - Mỗi một) + 日 (Nhật - Ngày)",
        "story": "Hàng ngày (Nhật) trôi qua từng ngày một (Mỗi).",
        "examples": "毎日 (Mỗi ngày)"
      }
    },
    {
      "id": "L4_22",
      "word": "毎朝",
      "reading": "まいあさ",
      "romaji": "maiasa",
      "meaning": "Mỗi buổi sáng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỖI TRIÊU",
        "components": "毎 (Mỗi - Mỗi một) + 朝 (Triêu - Buổi sáng)",
        "story": "Mỗi một (Mỗi) buổi sáng tinh mơ (Triêu).",
        "examples": "毎朝 (Mỗi sáng), 今朝 (Sáng nay)"
      }
    },
    {
      "id": "L4_23",
      "word": "毎晩",
      "reading": "まいばん",
      "romaji": "maiban",
      "meaning": "Mỗi buổi tối",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỖI VÃN",
        "components": "毎 (Mỗi) + 晩 (Vãn - Buổi tối)",
        "story": "Mỗi một (Mỗi) buổi tối muộn (Vãn).",
        "examples": "毎晩 (Mỗi tối), 今晩 (Tối nay)"
      }
    },
    {
      "id": "L4_23a",
      "word": "朝",
      "reading": "あさ",
      "romaji": "asa",
      "meaning": "Buổi sáng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRIÊU",
        "components": "十 (Thập) + 日 (Nhật) + 十 (Thập) + 月 (Nguyệt)",
        "story": "Mặt trời (日) mọc che khuất mặt trăng (月) qua những tán cây (十) vào buổi sáng.",
        "examples": "朝 (Sáng), 今朝 (Sáng nay)"
      }
    },
    {
      "id": "L4_23b",
      "word": "昼",
      "reading": "ひる",
      "romaji": "hiru",
      "meaning": "Buổi trưa",
      "type": "Danh từ"
    },
    {
      "id": "L4_23c",
      "word": "晩",
      "reading": "ばん",
      "romaji": "ban",
      "meaning": "Buổi tối",
      "type": "Danh từ"
    },
    {
      "id": "L4_23d",
      "word": "夜",
      "reading": "よる",
      "romaji": "yoru",
      "meaning": "Đêm",
      "type": "Danh từ"
    },
    {
      "id": "L4_23e",
      "word": "おととい",
      "reading": "おととい",
      "romaji": "ototoi",
      "meaning": "Hôm kia",
      "type": "Danh từ"
    },
    {
      "id": "L4_23f",
      "word": "きのう",
      "reading": "きのう",
      "romaji": "kinou",
      "meaning": "Hôm qua",
      "type": "Danh từ"
    },
    {
      "id": "L4_23g",
      "word": "今日",
      "reading": "きょう",
      "romaji": "kyou",
      "meaning": "Hôm nay",
      "type": "Danh từ"
    },
    {
      "id": "L4_23h",
      "word": "明日",
      "reading": "あした",
      "romaji": "ashita",
      "meaning": "Ngày mai",
      "type": "Danh từ"
    },
    {
      "id": "L4_23i",
      "word": "あさって",
      "reading": "あさって",
      "romaji": "asatte",
      "meaning": "Ngày mốt",
      "type": "Danh từ"
    },
    {
      "id": "L4_23j",
      "word": "今朝",
      "reading": "けさ",
      "romaji": "kesa",
      "meaning": "Sáng nay",
      "type": "Danh từ"
    },
    {
      "id": "L4_23k",
      "word": "今晩",
      "reading": "こんばん",
      "romaji": "konban",
      "meaning": "Tối nay",
      "type": "Danh từ"
    },
    {
      "id": "L4_23l",
      "word": "ゆうべ",
      "reading": "ゆうべ",
      "romaji": "yuube",
      "meaning": "Tối hôm qua",
      "type": "Danh từ"
    },
    {
      "id": "L4_24",
      "word": "寝ます",
      "reading": "ねます",
      "romaji": "nemasu",
      "meaning": "Ngủ, đi ngủ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TẨM",
        "components": "寝 = 宀 (Miên - Mái nhà) + 丬 (Tường - Giường) + 彐 + 冖 + 又",
        "story": "Dưới mái nhà (宀), có chiếc giường (丬) để ngả lưng nằm ngủ.",
        "examples": "寝る (Ngủ), 寝室 (Phòng ngủ)"
      }
    },
    {
      "id": "L4_25",
      "word": "起きます",
      "reading": "おきます",
      "romaji": "okimasu",
      "meaning": "Dậy, thức dậy",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KHỞI",
        "components": "起 = 走 (Tẩu - Chạy) + 己 (Kỷ - Bản thân/Con rắn)",
        "story": "Giựt mình thức dậy (Khởi), bản thân (己) vụt chạy (走) liền vì bị trễ giờ.",
        "examples": "起きる (Thức dậy), 早起き (Dậy sớm)"
      }
    },
    {
      "id": "L4_26",
      "word": "仕事をします",
      "reading": "しごとをします",
      "romaji": "shigoto wo shimasu",
      "meaning": "Làm việc",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "SĨ SỰ",
        "components": "仕 (Sĩ - Phụng sự) + 事 (Sự - Sự việc)",
        "story": "Người làm việc là đang phụng sự (Sĩ) những sự việc (Sự) được giao.",
        "examples": "仕事 (Công việc)"
      }
    },
    {
      "id": "L4_27",
      "word": "休みます",
      "reading": "やすみます",
      "romaji": "yasumimasu",
      "meaning": "Nghỉ ngơi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HƯU",
        "components": "休 = 亻 (Nhân - Người) + 木 (Mộc - Cây)",
        "story": "Con người (亻) dựa vào gốc cây (木) để nghỉ ngơi (Hưu).",
        "examples": "休む (Nghỉ ngơi), 休み (Ngày nghỉ)"
      }
    },
    {
      "id": "L4_28",
      "word": "働きます",
      "reading": "はたらきます",
      "romaji": "hatarakimasu",
      "meaning": "Làm việc",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘNG",
        "components": "亻 (Nhân) + 動 (Động)",
        "story": "Người (Nhân) luôn tay luôn chân chuyển động (Động) nghĩa là đang Làm việc.",
        "examples": "働きます (Làm việc)"
      }
    },
    {
      "id": "L4_29",
      "word": "勉強します",
      "reading": "べんきょうします",
      "romaji": "benkyoushimasu",
      "meaning": "Học tập",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "MIỄN CƯỜNG",
        "components": "勉 (Miễn) + 強 (Cường)",
        "story": "Phải cố gắng vượt qua mọi sức ép thì mới Học tập tốt được.",
        "examples": "勉強 (Học tập)"
      }
    },
    {
      "id": "L4_30",
      "word": "終わります",
      "reading": "おわります",
      "romaji": "owarimasu",
      "meaning": "Kết thúc",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "CHUNG",
        "components": "糸 (Mịch) + 冬 (Đông)",
        "story": "Khi mùa đông đến, đan xong sợi chỉ cuối cùng để Kết thúc năm.",
        "examples": "終わります (Kết thúc)"
      }
    },
    {
      "id": "L4_31",
      "word": "〜から",
      "reading": "〜から",
      "romaji": "~kara",
      "meaning": "Từ ~",
      "type": "Trợ từ"
    },
    {
      "id": "L4_32",
      "word": "〜まで",
      "reading": "〜まで",
      "romaji": "~made",
      "meaning": "Đến ~",
      "type": "Trợ từ"
    },
    {
      "id": "L4_33",
      "word": "〜と〜",
      "reading": "〜と〜",
      "romaji": "~to~",
      "meaning": "Và",
      "type": "Trợ từ"
    },
    {
      "id": "L4_34",
      "word": "そちら",
      "reading": "そちら",
      "romaji": "sochira",
      "meaning": "Phía bạn",
      "type": "Đại từ"
    },
    {
      "id": "L4_35",
      "word": "大変ですね",
      "reading": "たいへんですね",
      "romaji": "taihen desu ne",
      "meaning": "Vất vả quá nhỉ",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI BIẾN",
        "components": "大 (Đại) + 変 (Biến)",
        "story": "Sự biến đổi to lớn khiến mọi thứ trở nên Vất vả.",
        "examples": "大変 (Vất vả)"
      }
    },
    {
      "id": "L4_36",
      "word": "番号",
      "reading": "ばんごう",
      "romaji": "bangou",
      "meaning": "Số (điện thoại/phòng)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHIÊN HIỆU",
        "components": "番 (Phiên) + 号 (Hiệu)",
        "story": "Ký hiệu đánh dấu theo từng lượt chính là Số hiệu.",
        "examples": "番号 (Số)"
      }
    },
    {
      "id": "L4_36a",
      "word": "電話番号",
      "reading": "でんわばんごう",
      "romaji": "denwabangou",
      "meaning": "Số điện thoại",
      "type": "Danh từ"
    },
    {
      "id": "L4_36b",
      "word": "番号案内",
      "reading": "ばんごうあんない",
      "romaji": "bangouannai",
      "meaning": "Dịch vụ hỏi số điện thoại (116)",
      "type": "Danh từ"
    },
    {
      "id": "L4_36c",
      "word": "お問い合わせ",
      "reading": "おといあわせ",
      "romaji": "otoiawase",
      "meaning": "Số điện thoại cần hỏi, giải đáp thắc mắc",
      "type": "Danh từ"
    },
    {
      "id": "L4_37",
      "word": "何番",
      "reading": "なんばん",
      "romaji": "nanban",
      "meaning": "Số mấy",
      "type": "Từ để hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ PHIÊN",
        "components": "何 (Hà) + 番 (Phiên)",
        "story": "Hỏi xem là Số Mấy.",
        "examples": "何番 (Số mấy)"
      }
    },
    {
      "id": "L4_38",
      "word": "ニューヨーク",
      "reading": "ニューヨーク",
      "romaji": "Nyuuyooku",
      "meaning": "New York",
      "type": "Danh từ"
    },
    {
      "id": "L4_39",
      "word": "ペキン",
      "reading": "ペキン",
      "romaji": "Pekin",
      "meaning": "Bắc Kinh",
      "type": "Danh từ"
    },
    {
      "id": "L4_40",
      "word": "バンコク",
      "reading": "バンコク",
      "romaji": "Bankoku",
      "meaning": "Bangkok",
      "type": "Danh từ"
    },
    {
      "id": "L4_41",
      "word": "ロンドン",
      "reading": "ロンドン",
      "romaji": "Rondon",
      "meaning": "Luân Đôn",
      "type": "Danh từ"
    },
    {
      "id": "L4_42",
      "word": "ロサンゼルス",
      "reading": "ロサンゼルス",
      "romaji": "Rosanzerusu",
      "meaning": "Los Angeles",
      "type": "Danh từ"
    },
    {
      "id": "L4_43",
      "word": "図書館",
      "reading": "としょかん",
      "romaji": "toshokan",
      "meaning": "Thư viện",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỒ THƯ QUÁN",
        "components": "図 (Đồ) + 書 (Thư) + 館 (Quán)",
        "story": "Tòa nhà (Quán) chứa bản đồ (Đồ) và sách vở (Thư) là Thư viện.",
        "examples": "図書館 (Thư viện)"
      }
    },
    {
      "id": "L4_44",
      "word": "美術館",
      "reading": "びじゅつかん",
      "romaji": "bijutsukan",
      "meaning": "Bảo tàng mỹ thuật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỸ THUẬT QUÁN",
        "components": "美 (Mỹ) + 術 (Thuật) + 館 (Quán)",
        "story": "Tòa nhà (Quán) trưng bày các tác phẩm nghệ thuật (Mỹ Thuật).",
        "examples": "美術館 (Bảo tàng)"
      }
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "ミラーさんのいちにち",
    "titleVn": "⏰ Một Ngày Của Anh Miller",
    "intro": "Câu chuyện theo dòng thời gian — ghi nhớ cách nói giờ, thứ trong tuần và lịch trình hàng ngày",
    "lines": [
      {
        "kanji": "毎朝6時に起きます。月曜日から！",
        "jp": "まいあさ 6じに おきます。げつようび から！",
        "romaji": "Maiasa 6-ji ni okimasu. Getsuyoubi kara!",
        "vn": "Mỗi sáng dậy lúc 6 giờ. Từ thứ Hai!",
        "note": "まいあさ · おきます · げつようび"
      },
      {
        "kanji": "午前9時から、仕事をします。",
        "jp": "ごぜん 9じから、しごとを します。",
        "romaji": "Gozen 9-ji kara, shigoto wo shimasu.",
        "vn": "Từ 9 giờ sáng, bắt đầu làm việc.",
        "note": "ごぜん · から · しごとをします"
      },
      {
        "kanji": "昼休みは12時から1時までです。",
        "jp": "ひるやすみは 12じから 1じまで です。",
        "romaji": "Hiruyasumi wa 12-ji kara 1-ji made desu.",
        "vn": "Giờ nghỉ trưa từ 12 đến 1 giờ.",
        "note": "ひるやすみ · から · まで"
      },
      {
        "kanji": "今何時ですか？午後3時半です。",
        "jp": "いま なんじ ですか？ごご 3じはん です。",
        "romaji": "Ima nanji desu ka? Gogo 3-ji han desu.",
        "vn": "Bây giờ là mấy giờ? 3 giờ rưỡi chiều.",
        "note": "いま · なんじ · ごご · はん"
      },
      {
        "kanji": "火曜日と水曜日は休みます。",
        "jp": "かようびと すいようびは やすみます。",
        "romaji": "Kayoubi to suiyoubi wa yasumimasu.",
        "vn": "Thứ Ba và Thứ Tư thì nghỉ.",
        "note": "かようび · すいようび · やすみます"
      },
      {
        "kanji": "木曜日と金曜日も仕事をします。",
        "jp": "もくようびと きんようびも しごとを します。",
        "romaji": "Mokuyoubi to kinyoubi mo shigoto wo shimasu.",
        "vn": "Thứ Năm và Thứ Sáu cũng làm việc.",
        "note": "もくようび · きんようび"
      },
      {
        "kanji": "土曜日と日曜日は休みです！",
        "jp": "どようびと にちようびは やすみ です！",
        "romaji": "Doyoubi to nichiyoubi wa yasumi desu!",
        "vn": "Thứ Bảy và Chủ Nhật là ngày nghỉ!",
        "note": "どようび · にちようび · やすみ"
      },
      {
        "kanji": "毎晩11時に寝ます。毎日忙しいです。",
        "jp": "まいばん 11じに ねます。まいにち いそがしい です。",
        "romaji": "Maiban 11-ji ni nemasu. Mainichi isogashii desu.",
        "vn": "Tối nào cũng ngủ lúc 11 giờ. Ngày nào cũng bận.",
        "note": "まいばん · ねます · まいにち"
      }
    ]
  }
};

export default lesson;
