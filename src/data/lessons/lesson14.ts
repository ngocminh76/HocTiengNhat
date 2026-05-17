import { NihongoLesson } from './types';
import { readings } from '../readings/reading14';

const lesson: NihongoLesson = {
  "id": 14,
  "chapter": "第14課",
  "title": "て形・てください",
  "titleVn": "Bài 14: Thể Te và Yêu cầu",
  "theme": "Nhờ vả và Hành động đang diễn ra",
  "words": [
    {
      "id": "L14_01",
      "word": "つけます",
      "reading": "つけます",
      "romaji": "tsukemasu",
      "meaning": "Bật (điện, máy)",
      "type": "Động từ"
    },
    {
      "id": "L14_02",
      "word": "消します",
      "reading": "けします",
      "romaji": "keshimasu",
      "meaning": "Tắt (điện, máy)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TIÊU",
        "components": "氵 (Thủy - Nước) + 肖 (Tiếu - Giống hệt)",
        "story": "Dùng nước (Thủy) dập lửa để mọi thứ lại giống hệt (Tiếu) như cũ (Tắt/Xóa).",
        "examples": "消します (Tắt (điện/máy))"
      }
    },
    {
      "id": "L14_03",
      "word": "開けます",
      "reading": "あけます",
      "romaji": "akemasu",
      "meaning": "Mở (cửa)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KHAI",
        "components": "門 (Môn - Cửa) + 幵 (Kiên - Bằng phẳng)",
        "story": "Hai cánh cửa (Môn) mở toang sang hai bên (Kiên).",
        "examples": "開けます (Mở (cửa))"
      }
    },
    {
      "id": "L14_04",
      "word": "閉めます",
      "reading": "しめます",
      "romaji": "shimemasu",
      "meaning": "Đóng (cửa)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "BẾ",
        "components": "門 (Môn - Cửa) + 才 (Tài - Tài năng)",
        "story": "Dùng tài năng (Tài) đóng chặt cửa (Môn) lại.",
        "examples": "閉めます (Đóng (cửa))"
      }
    },
    {
      "id": "L14_05",
      "word": "急ぎます",
      "reading": "いそぎます",
      "romaji": "isogimasu",
      "meaning": "Vội, gấp",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "CẤP",
        "components": "刍 (Sô - Bó cỏ) + 心 (Tâm - Trái tim)",
        "story": "Trái tim (Tâm) đập nhanh như bị bó cỏ (Sô) siết lại vì đang Vội gấp.",
        "examples": "急ぎます (Vội, gấp)"
      }
    },
    {
      "id": "L14_06",
      "word": "待ちます",
      "reading": "まちます",
      "romaji": "machimasu",
      "meaning": "Đợi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÃI",
        "components": "彳 (Sách - Bước đi) + 寺 (Tự - Ngôi chùa)",
        "story": "Đứng lại (Sách) tại ngôi chùa (Tự) để Chờ đợi.",
        "examples": "待ちます (Đợi)"
      }
    },
    {
      "id": "L14_07",
      "word": "持ちます",
      "reading": "もちます",
      "romaji": "mochimasu",
      "meaning": "Cầm, mang",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRÌ",
        "components": "扌 (Thủ - Tay) + 寺 (Tự - Ngôi chùa)",
        "story": "Mang tay (Thủ) đến ngôi chùa (Tự) để Cầm nắm đồ vật.",
        "examples": "持ちます (Cầm, mang)"
      }
    },
    {
      "id": "L14_08",
      "word": "取ります",
      "reading": "とります",
      "romaji": "torimasu",
      "meaning": "Lấy",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ",
        "components": "耳 (Nhĩ - Tai) + 又 (Hựu - Bàn tay)",
        "story": "Dùng tay (Hựu) nắm lấy tai (Nhĩ) để Lấy đi.",
        "examples": "取ります (Lấy)"
      }
    },
    {
      "id": "L14_09",
      "word": "手伝います",
      "reading": "てつだいます",
      "romaji": "tetsudaimasu",
      "meaning": "Giúp đỡ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ TRUYỀN",
        "components": "手 (Thủ - Tay) + 伝 (Truyền - Truyền đạt)",
        "story": "Đưa tay (Thủ) ra truyền (Truyền) lại công sức để Giúp đỡ.",
        "examples": "手伝います (Giúp đỡ)"
      }
    },
    {
      "id": "L14_10",
      "word": "呼びます",
      "reading": "よびます",
      "romaji": "yobimasu",
      "meaning": "Gọi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HÔ",
        "components": "口 (Khẩu - Miệng) + 乎 (Hồ - Cảm thán)",
        "story": "Há miệng (Khẩu) hét lớn (Hồ) để Gọi người.",
        "examples": "呼びます (Gọi)"
      }
    },
    {
      "id": "L14_11",
      "word": "話します",
      "reading": "はなします",
      "romaji": "hanashimasu",
      "meaning": "Nói chuyện",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THOẠI",
        "components": "言 (Ngôn - Lời nói) + 舌 (Thiệt - Cái lưỡi)",
        "story": "Dùng cái lưỡi (Thiệt) tạo ra lời nói (Ngôn) để Nói chuyện.",
        "examples": "話します (Nói chuyện)"
      }
    },
    {
      "id": "L14_12",
      "word": "使います",
      "reading": "つかいます",
      "romaji": "tsukaimasu",
      "meaning": "Sử dụng",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "SỬ",
        "components": "亻 (Nhân - Người) + 吏 (Lại - Quan lại)",
        "story": "Quan lại (Lại) sai khiến người (Nhân) để Sử dụng vào công việc.",
        "examples": "使います (Sử dụng)"
      }
    },
    {
      "id": "L14_13",
      "word": "止めます",
      "reading": "とめます",
      "romaji": "tomemasu",
      "meaning": "Dừng",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "CHỈ",
        "components": "止 (Chỉ - Dừng lại)",
        "story": "Hình ảnh bàn chân Dừng lại.",
        "examples": "止めます (Dừng)"
      }
    },
    {
      "id": "L14_14",
      "word": "見せます",
      "reading": "みせます",
      "romaji": "misemasu",
      "meaning": "Cho xem",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KIẾN",
        "components": "見 (Kiến - Xem)",
        "story": "Làm cho ai đó xem là Cho xem.",
        "examples": "見せます (Cho xem)"
      }
    },
    {
      "id": "L14_15",
      "word": "教えます",
      "reading": "おしえます",
      "romaji": "oshiemasu",
      "meaning": "Nói cho biết",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "GIÁO",
        "components": "孝 (Hiếu - Hiếu thảo) + 攵 (Phộc - Đánh)",
        "story": "Cầm roi (Phộc) dạy dỗ trẻ phải biết hiếu thảo (Hiếu) là Giáo dục.",
        "examples": "教えます (Dạy/Nói cho biết)"
      }
    },
    {
      "id": "L14_16",
      "word": "座ります",
      "reading": "すわります",
      "romaji": "suwarimasu",
      "meaning": "Ngồi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TỌA",
        "components": "广 (Nghiễm - Mái nhà) + 坐 (Tọa - Hai người ngồi trên đất)",
        "story": "Hai người (Nhân) ngồi bệt trên đất (Thổ) dưới mái nhà (Nghiễm) là Ngồi.",
        "examples": "座ります (Ngồi)"
      }
    },
    {
      "id": "L14_17",
      "word": "立ちます",
      "reading": "たちます",
      "romaji": "tachimasu",
      "meaning": "Đứng",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LẬP",
        "components": "立 (Lập - Đứng)",
        "story": "Hình ảnh một người đang Đứng dang hai chân.",
        "examples": "立ちます (Đứng)"
      }
    },
    {
      "id": "L14_18",
      "word": "入ります",
      "reading": "はいります",
      "romaji": "hairimasu",
      "meaning": "Vào",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NHẬP",
        "components": "入 (Nhập - Vào)",
        "story": "Hình ảnh lối vào.",
        "examples": "入ります (Vào)"
      }
    },
    {
      "id": "L14_19",
      "word": "出ます",
      "reading": "でます",
      "romaji": "demasu",
      "meaning": "Ra",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XUẤT",
        "components": "出 (Xuất - Ra)",
        "story": "Hai ngọn núi chồng lên nhau nhô Ra ngoài.",
        "examples": "出ます (Ra)"
      }
    },
    {
      "id": "L14_20",
      "word": "降ります",
      "reading": "ふります",
      "romaji": "furimasu",
      "meaning": "Rơi (mưa, tuyết)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "GIÁNG",
        "components": "阝 (Phụ - Gò đất) + 夅 (Giáng - Đi xuống)",
        "story": "Bước chân đi xuống (Giáng) khỏi gò đất (Phụ) hoặc mưa Rơi xuống.",
        "examples": "降ります (Rơi (mưa, tuyết))"
      }
    },
    {
      "id": "L14_21",
      "word": "コピーします",
      "reading": "コピーします",
      "romaji": "kopiishimasu",
      "meaning": "Copy",
      "type": "Động từ"
    },
    {
      "id": "L14_22",
      "word": "エアコン",
      "reading": "エアコン",
      "romaji": "eakon",
      "meaning": "Máy điều hòa",
      "type": "Danh từ"
    },
    {
      "id": "L14_23",
      "word": "パスポート",
      "reading": "パスポート",
      "romaji": "pasupooto",
      "meaning": "Hộ chiếu",
      "type": "Danh từ"
    },
    {
      "id": "L14_24",
      "word": "名前",
      "reading": "なまえ",
      "romaji": "namae",
      "meaning": "Tên",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DANH TIỀN",
        "components": "名 (Danh - Tên) + 前 (Tiền - Phía trước)",
        "story": "Tên (Danh) của mình thường viết ở phía trước (Tiền) sách vở.",
        "examples": "名前 (Tên)"
      }
    },
    {
      "id": "L14_25",
      "word": "住所",
      "reading": "じゅうしょ",
      "romaji": "juusho",
      "meaning": "Địa chỉ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÚ SỞ",
        "components": "住 (Trú - Cư trú) + 所 (Sở - Nơi chốn)",
        "story": "Nơi chốn (Sở) mà con người cư trú (Trú) là Địa chỉ.",
        "examples": "住所 (Địa chỉ)"
      }
    },
    {
      "id": "L14_26",
      "word": "地図",
      "reading": "ちず",
      "romaji": "chizu",
      "meaning": "Bản đồ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỊA ĐỒ",
        "components": "地 (Địa - Đất) + 図 (Đồ - Bản đồ)",
        "story": "Bản đồ (Đồ) vẽ lại các khu vực đất đai (Địa).",
        "examples": "地図 (Bản đồ)"
      }
    },
    {
      "id": "L14_27",
      "word": "塩",
      "reading": "しお",
      "romaji": "shio",
      "meaning": "Muối",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DIÊM",
        "components": "土 (Thổ - Đất) + 臣 (Thần - Bề tôi) + 皿 (Mãnh - Cái đĩa)",
        "story": "Bề tôi (Thần) lấy đất (Thổ) lọc ra muối đựng lên đĩa (Mãnh).",
        "examples": "塩 (Muối)"
      }
    },
    {
      "id": "L14_28",
      "word": "砂糖",
      "reading": "さとう",
      "romaji": "satou",
      "meaning": "Đường",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SA ĐƯỜNG",
        "components": "砂 (Sa - Cát) + 糖 (Đường - Đường ngọt)",
        "story": "Hạt đường ngọt (Đường) nhỏ li ti như cát (Sa).",
        "examples": "砂糖 (Đường)"
      }
    },
    {
      "id": "L14_29",
      "word": "問題",
      "reading": "もんだい",
      "romaji": "mondai",
      "meaning": "Vấn đề / Câu hỏi",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "VẤN ĐỀ",
        "components": "問 (Vấn - Hỏi) + 題 (Đề - Đề mục)",
        "story": "Hỏi (Vấn) về các đề mục (Đề) để giải quyết Vấn đề.",
        "examples": "問題 (Vấn đề / Câu hỏi)"
      }
    },
    {
      "id": "L14_30",
      "word": "答え",
      "reading": "こたえ",
      "romaji": "kotae",
      "meaning": "Câu trả lời",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÁP",
        "components": "竹 (Trúc - Tre) + 合 (Hợp - Phù hợp)",
        "story": "Ghi Câu trả lời lên thẻ tre (Trúc) sao cho phù hợp (Hợp).",
        "examples": "答え (Câu trả lời)"
      }
    },
    {
      "id": "L14_31",
      "word": "読み方",
      "reading": "よみかた",
      "romaji": "yomikata",
      "meaning": "Cách đọc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘC PHƯƠNG",
        "components": "読 (Độc - Đọc) + 方 (Phương - Phương hướng/Cách thức)",
        "story": "Cách thức (Phương) để đọc (Độc) chữ là Cách đọc.",
        "examples": "読み方 (Cách đọc)"
      }
    },
    {
      "id": "L14_32",
      "word": "まっすぐ",
      "reading": "まっすぐ",
      "romaji": "massugu",
      "meaning": "Đi thẳng",
      "type": "Phó từ"
    },
    {
      "id": "L14_33",
      "word": "ゆっくり",
      "reading": "ゆっくり",
      "romaji": "yukkuri",
      "meaning": "Chậm lại, thong thả",
      "type": "Phó từ"
    },
    {
      "id": "L14_34",
      "word": "すぐ",
      "reading": "すぐ",
      "romaji": "sugu",
      "meaning": "Ngay lập tức",
      "type": "Phó từ"
    },
    {
      "id": "L14_35",
      "word": "また",
      "reading": "また",
      "romaji": "mata",
      "meaning": "Lại (lần nữa)",
      "type": "Phó từ"
    },
    {
      "id": "L14_36",
      "word": "あとで",
      "reading": "あとで",
      "romaji": "ato de",
      "meaning": "Sau, lát nữa",
      "type": "Phó từ"
    },
    {
      "id": "L14_37",
      "word": "もう少し",
      "reading": "もうすこし",
      "romaji": "mou sukoshi",
      "meaning": "Thêm một chút nữa",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "THIỂU",
        "components": "少 (Thiểu - Ít)",
        "story": "Thêm một chút.",
        "examples": "もう少し"
      }
    },
    {
      "id": "L14_38",
      "word": "さあ",
      "reading": "さあ",
      "romaji": "saa",
      "meaning": "Nào, thôi nào",
      "type": "Từ cảm thán"
    },
    {
      "id": "L14_39",
      "word": "あれ？",
      "reading": "あれ？",
      "romaji": "are?",
      "meaning": "Ủa?",
      "type": "Từ cảm thán"
    }
  ],
  "readings": readings,
  
};

export default lesson;
