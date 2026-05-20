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
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÚ",
        "components": "尺 (Xích - Thước) + 旦 (Đán - Buổi sáng)",
        "story": "Dùng thước (Xích) đo bóng mặt trời (Đán) để biết đã đến buổi Trưa (Trú).",
        "examples": "昼 (Trưa), 昼休み (Nghỉ trưa)"
      }
    },
    {
      "id": "L4_23c",
      "word": "晩",
      "reading": "ばん",
      "romaji": "ban",
      "meaning": "Buổi tối",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "VÃN",
        "components": "日 (Nhật - Ngày) + 免 (Miễn - Miễn trừ)",
        "story": "Hết một ngày (Nhật), được miễn (Miễn) làm việc, đó là buổi tối (Vãn).",
        "examples": "晩 (Buổi tối), 今晩 (Tối nay)"
      }
    },
    {
      "id": "L4_23d",
      "word": "夜",
      "reading": "よる",
      "romaji": "yoru",
      "meaning": "Đêm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DẠ",
        "components": "亠 (Đầu) + 亻(Nhân) + 夕 (Tịch - Chiều tối)",
        "story": "Con người (亻) hoạt động dưới màn đêm (夕).",
        "examples": "夜 (Đêm), 今夜 (Đêm nay)"
      }
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
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIM NHẬT",
        "components": "今 (Kim - Hiện tại) + 日 (Nhật - Ngày)",
        "story": "Ngày (Nhật) hiện tại (Kim) chính là Hôm nay.",
        "examples": "今日 (Hôm nay)"
      }
    },
    {
      "id": "L4_23h",
      "word": "明日",
      "reading": "あした",
      "romaji": "ashita",
      "meaning": "Ngày mai",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MINH NHẬT",
        "components": "明 (Minh - Sáng) + 日 (Nhật - Ngày)",
        "story": "Ngày (Nhật) mai luôn tươi sáng (Minh).",
        "examples": "明日 (Ngày mai)"
      }
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
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIM TRIÊU",
        "components": "今 (Kim - Hiện tại) + 朝 (Triêu - Buổi sáng)",
        "story": "Buổi sáng (Triêu) của hiện tại (Kim) là Sáng nay.",
        "examples": "今朝 (Sáng nay)"
      }
    },
    {
      "id": "L4_23k",
      "word": "今晩",
      "reading": "こんばん",
      "romaji": "konban",
      "meaning": "Tối nay",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIM VÃN",
        "components": "今 (Kim - Hiện tại) + 晩 (Vãn - Buổi tối)",
        "story": "Buổi tối (Vãn) của hiện tại (Kim) là Tối nay.",
        "examples": "今晩 (Tối nay)"
      }
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
  "grammar": [
    {
      "title": "今 ～時 ～分 です",
      "structure": "いま ～じ ～ふん/ぷん です",
      "usage": "Nói về thời gian hiện tại. Lắp số đếm trước chữ 時 (giờ) và 分 (phút).\n* Chú ý phút: Các số 1, 3, 4, 6, 8, 10 đọc là ぷん (pun). Các số 2, 5, 7, 9 đọc là ふん (fun).\n* Chú ý giờ đặc biệt: 4時 (よじ - yoji), 7時 (しちじ - shichiji), 9時 (くじ - kuji).",
      "examples": [
        {
          "jp": "いま 7じ 10ぷんです。",
          "romaji": "ima shichiji juppun desu.",
          "vn": "Bây giờ là 7 giờ 10 phút."
        },
        {
          "jp": "ニューヨークは いま なんじですか。",
          "romaji": "nyuuyooku wa ima nanji desu ka.",
          "vn": "Bây giờ New York là mấy giờ?"
        }
      ]
    },
    {
      "title": "Động từ thể ます / ません",
      "structure": "Vます / Vません / Vました / Vませんでした",
      "usage": "Thể lịch sự của động từ.\n- ます (masu): Hiện tại/Tương lai, thói quen (Làm...)\n- ません (masen): Phủ định hiện tại/Tương lai (Không làm...)\n- ました (mashita): Quá khứ (Đã làm...)\n- ませんでした (masen deshita): Phủ định quá khứ (Đã không làm...)",
      "examples": [
        {
          "jp": "まいあさ 6じに おきます。",
          "romaji": "maiasa rokuji ni okimasu.",
          "vn": "Mỗi sáng tôi thức dậy lúc 6 giờ."
        },
        {
          "jp": "きのう べんきょうしませんでした。",
          "romaji": "kinou benkyou shimasen deshita.",
          "vn": "Hôm qua tôi đã không học bài."
        }
      ]
    },
    {
      "title": "N (Thời gian) に V (Làm gì lúc mấy giờ)",
      "structure": "N(thời gian) に V",
      "usage": "Trợ từ に (ni) đặt sau danh từ chỉ thời gian (có chứa số đếm như giờ, ngày, tháng, năm) để chỉ thời điểm xảy ra hành động. Với thứ trong tuần có thể có hoặc không có に. Với từ chỉ thời gian chung chung (như hôm qua, ngày mai, sáng nay) thì KHÔNG dùng に.",
      "examples": [
        {
          "jp": "6じはんに おきます。",
          "romaji": "rokujihan ni okimasu.",
          "vn": "Tôi thức dậy lúc 6 giờ rưỡi."
        },
        {
          "jp": "きのう べんきょうしました。",
          "romaji": "kinou benkyou shimashita.",
          "vn": "Hôm qua tôi đã học bài. (Không có ni sau kinou)"
        }
      ]
    },
    {
      "title": "～から ～まで (Từ ~ Đến ~)",
      "structure": "N1(thời gian/địa điểm) から N2(thời gian/địa điểm) まで",
      "usage": "から (kara) chỉ điểm bắt đầu (Từ). まで (made) chỉ điểm kết thúc (Đến). Cả hai có thể đi cùng nhau hoặc đứng riêng lẻ.",
      "examples": [
        {
          "jp": "9じから 5じまで はたらきます。",
          "romaji": "kuji kara goji made hatarakimasu.",
          "vn": "Tôi làm việc từ 9 giờ đến 5 giờ."
        },
        {
          "jp": "ひるやすみは 12じからです。",
          "romaji": "hiruyasumi wa juuniji kara desu.",
          "vn": "Giờ nghỉ trưa bắt đầu từ 12 giờ."
        }
      ]
    },
    {
      "title": "N1 と N2 (Và)",
      "structure": "N1 と N2",
      "usage": "Trợ từ と (to) dùng để nối hai danh từ lại với nhau (có nghĩa là 'và').",
      "examples": [
        {
          "jp": "ぎんこうの やすみは どようびと にちようびです。",
          "romaji": "ginkou no yasumi wa doyoubi to nichiyoubi desu.",
          "vn": "Ngày nghỉ của ngân hàng là thứ Bảy và Chủ nhật."
        }
      ]
    },
    {
      "title": "Trợ từ ね ở cuối câu",
      "structure": "Câu + ね",
      "usage": "Thêm ね ở cuối câu (đọc với giọng thấp hoặc vừa) để biểu hiện sự đồng cảm, mong muốn người nghe đồng tình (nhỉ, nhé, quá nhỉ). Hoặc (đọc với giọng cao lên) để xác nhận lại thông tin (phải không, hả).",
      "examples": [
        {
          "jp": "たいへんですね。",
          "romaji": "taihen desu ne.",
          "vn": "Vất vả quá nhỉ."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "いま [blank] ですか。 ...5じです。",
      "options": ["なんじ", "いくら", "どこ", "だれ"],
      "answer": "なんじ",
      "vn": "Bây giờ là mấy giờ? ...Là 5 giờ.",
      "explanation": "Để hỏi thời gian, dùng なんじ (mấy giờ)."
    },
    {
      "question": "きょうは [blank] ですか。 ...かようびです。",
      "options": ["なんようび", "なんじ", "なんばん", "いつ"],
      "answer": "なんようび",
      "vn": "Hôm nay là thứ mấy? ...Là thứ Ba.",
      "explanation": "Để hỏi thứ trong tuần, dùng なんようび (thứ mấy)."
    },
    {
      "question": "まいあさ 6じ [blank] おきます。",
      "options": ["に", "で", "は", "も"],
      "answer": "に",
      "vn": "Tôi thức dậy vào lúc 6 giờ mỗi sáng.",
      "explanation": "Đứng sau thời gian có số đếm cụ thể (như 6 giờ) phải dùng trợ từ に để chỉ thời điểm."
    },
    {
      "question": "きのう [blank]。 ...はい、べんきょうしました。",
      "options": ["べんきょうしましたか", "べんきょうしますか", "べんきょうしました", "べんきょうしません"],
      "answer": "べんきょうしましたか",
      "vn": "Hôm qua bạn đã học bài chưa? ...Vâng, tôi đã học bài.",
      "explanation": "Câu hỏi trong quá khứ nên phải dùng ましたか."
    },
    {
      "question": "ぎんこうの やすみは どようび [blank] にちようびです。",
      "options": ["と", "に", "も", "は"],
      "answer": "と",
      "vn": "Ngày nghỉ của ngân hàng là thứ Bảy và Chủ nhật.",
      "explanation": "Trợ từ と dùng để liệt kê nối 2 danh từ với nhau (N1 và N2)."
    },
    {
      "question": "9じから 5じ [blank] はたらきます。",
      "options": ["まで", "に", "は", "か"],
      "answer": "まで",
      "vn": "Tôi làm việc từ 9 giờ đến 5 giờ.",
      "explanation": "Mẫu câu から〜まで nghĩa là 'Từ ~ Đến ~'."
    },
    {
      "question": "きのうの ばん、[blank]。",
      "options": ["べんきょうしました", "べんきょうします", "べんきょうしますか", "べんきょうしません"],
      "answer": "べんきょうしました",
      "vn": "Tối hôm qua, tôi đã học bài.",
      "explanation": "Có trạng từ chỉ thời gian trong quá khứ (きのうの ばん) nên động từ phải chia về quá khứ đuôi ました."
    },
    {
      "question": "あした はたらきますか。 ...いいえ、[blank]。",
      "options": ["はたらきません", "はたらきませんでした", "はたらきました", "はたらきます"],
      "answer": "はたらきません",
      "vn": "Ngày mai bạn có làm việc không? ...Không, tôi không làm việc.",
      "explanation": "あした (Ngày mai) là tương lai, trả lời いいえ (phủ định) nên dùng đuôi ません."
    },
    {
      "question": "おととい、やすみましたか。 ...はい、[blank]。",
      "options": ["やすみました", "やすみません", "やすみませんでした", "やすみます"],
      "answer": "やすみました",
      "vn": "Hôm kia bạn có nghỉ không? ...Vâng, tôi đã nghỉ.",
      "explanation": "おととい (Hôm kia) là quá khứ, trả lời はい (khẳng định) nên dùng đuôi ました."
    },
    {
      "question": "びじゅつかんは なんじ [blank] なんじまでですか。",
      "options": ["から", "に", "で", "を"],
      "answer": "から",
      "vn": "Bảo tàng mỹ thuật mở cửa từ mấy giờ đến mấy giờ?",
      "explanation": "Cấu trúc ghép đôi から〜まで (từ 〜 đến 〜)."
    },
    {
      "question": "まいにち 10じに ねます [blank]。",
      "options": ["か", "ね", "は", "の"],
      "answer": "か",
      "vn": "Mỗi ngày bạn đi ngủ lúc 10 giờ phải không?",
      "explanation": "Câu hỏi cuối câu dùng trợ từ か."
    },
    {
      "question": "さとうさんの でんわばんごうは [blank] ですか。",
      "options": ["なんばん", "なんじ", "なんようび", "どこ"],
      "answer": "なんばん",
      "vn": "Số điện thoại của chị Sato là số mấy?",
      "explanation": "Hỏi số điện thoại, số phòng dùng なんばん (Số mấy)."
    },
    {
      "question": "まいあさ 9じから 5じまで べんきょうします。 ...たいへん [blank]。",
      "options": ["ですね", "ですか", "です", "じゃありません"],
      "answer": "ですね",
      "vn": "Mỗi sáng tôi học từ 9 giờ đến 5 giờ. ...Vất vả quá nhỉ.",
      "explanation": "Người nghe tỏ ý đồng cảm với đối phương, dùng đuôi câu ですね (nhỉ / quá nhỉ)."
    },
    {
      "question": "だいがくは なんじ [blank] おわりますか。",
      "options": ["に", "で", "から", "と"],
      "answer": "に",
      "vn": "Trường đại học kết thúc vào lúc mấy giờ?",
      "explanation": "Hỏi thời điểm xảy ra hành động (kết thúc lúc mấy giờ) dùng trợ từ に sau なんじ."
    },
    {
      "question": "けさ、[blank] はたらきませんでした。",
      "options": ["わたしは", "わたしが", "わたしの", "わたしも"],
      "answer": "わたしは",
      "vn": "Sáng nay, tôi đã không làm việc.",
      "explanation": "わたし (Tôi) là chủ đề của câu, đi kèm trợ từ は."
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
  },
  
  "dialogue": {
    "title": "おはようございます。",
    "titleVn": "Chào buổi sáng.",
    "lines": [
      {
        "speaker": "A",
        "jp": "あっ、おはようございます。",
        "romaji": "A, ohayou gozaimasu.",
        "vn": "A, chào buổi sáng."
      },
      {
        "speaker": "うえだ",
        "jp": "おはようございます。",
        "romaji": "Ohayou gozaimasu.",
        "vn": "Chào buổi sáng."
      },
      {
        "speaker": "A",
        "jp": "きょうは　いいてんきですね。",
        "blankJp": "きょうは（　　　）ですね。",
        "blankMeanings": ["Thời tiết đẹp"],
        "romaji": "Kyou wa ii tenki desu ne.",
        "vn": "Hôm nay trời đẹp nhỉ."
      },
      {
        "speaker": "うえだ",
        "jp": "そうですね。いいてんきですね。",
        "romaji": "Sou desu ne. Ii tenki desu ne.",
        "vn": "Đúng vậy nhỉ. Trời đẹp thật."
      },
      {
        "speaker": "A",
        "jp": "きのう、うえださんは　どこに　いきましたか。",
        "blankJp": "（　　　）、うえださんは　どこに　いきましたか。",
        "blankMeanings": ["Hôm qua"],
        "romaji": "Kinou, Ueda san wa doko ni ikimashita ka.",
        "vn": "Hôm qua anh Ueda đã đi đâu vậy?"
      },
      {
        "speaker": "うえだ",
        "jp": "きのうは　しんじゅくに　いきました。",
        "romaji": "Kinou wa Shinjuku ni ikimashita.",
        "vn": "Hôm qua tôi đã đi Shinjuku."
      },
      {
        "speaker": "A",
        "jp": "あっ。そうですか。わたしも　しんじゅくに　いきました。うえださんは　ひとりで　いきましたか。",
        "blankJp": "あっ。（　　　）。わたしも　しんじゅくに　いきました。うえださんは（　　　）いきましたか。",
        "blankMeanings": ["Vậy à", "Một mình"],
        "romaji": "A. Sou desu ka. Watashi mo Shinjuku ni ikimashita. Ueda san wa hitori de ikimashita ka.",
        "vn": "A. Vậy à. Tôi cũng đã đi Shinjuku. Anh Ueda đã đi một mình à?"
      },
      {
        "speaker": "うえだ",
        "jp": "いいえ、ともだちと。",
        "blankJp": "いいえ、（　　　）。",
        "blankMeanings": ["Cùng bạn"],
        "romaji": "Iie, tomodachi to.",
        "vn": "Không, đi cùng bạn."
      },
      {
        "speaker": "A",
        "jp": "あっ、そうですか。わたしは　ひとりで　いきました。",
        "romaji": "A, sou desu ka. Watashi wa hitori de ikimashita.",
        "vn": "A, vậy à. Tôi thì đã đi một mình."
      },
      {
        "speaker": "うえだ",
        "jp": "そうですか。",
        "romaji": "Sou desu ka.",
        "vn": "Vậy à."
      }
    ]
  }
};

export default lesson;
