import { NihongoLesson } from './types';
import { readings } from '../readings/reading12';

const lesson: NihongoLesson = {
  "id": 12,
  "chapter": "第12課",
  "title": "祇園祭はどうでしたか",
  "titleVn": "Bài 12: Quá khứ của tính từ & So sánh",
  "theme": "Cảm nghĩ về quá khứ · So sánh",
  "words": [
    {
      "id": "L12_01",
      "word": "簡単",
      "reading": "かんたん",
      "romaji": "kantan",
      "meaning": "Đơn giản, dễ",
      "type": "Tính từ な",
      "kanjiBreakdown": {
        "hanviet": "GIẢN ĐƠN",
        "components": "簡 (Giản) + 単 (Đơn)",
        "story": "Đơn giản.",
        "examples": "簡単"
      }
    },
    {
      "id": "L12_02",
      "word": "近い",
      "reading": "ちかい",
      "romaji": "chikai",
      "meaning": "Gần",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "CẬN",
        "components": "辶 (Sước - Di chuyển) + 斤 (Cân - Cái rìu)",
        "story": "Di chuyển (Sước) mang theo cái rìu (Cân) để chặt cây ở khu vực Gần đó.",
        "examples": "近い (Gần), 近所 (Hàng xóm)"
      }
    },
    {
      "id": "L12_03",
      "word": "遠い",
      "reading": "とおい",
      "romaji": "tooi",
      "meaning": "Xa",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "VIỄN",
        "components": "辶 (Sước - Di chuyển) + 袁 (Viên - Áo dài)",
        "story": "Mặc áo dài (Viên) di chuyển (Sước) một quãng đường Xa xôi.",
        "examples": "遠い (Xa), 遠慮 (Khách khí)"
      }
    },
    {
      "id": "L12_04",
      "word": "速い・早い",
      "reading": "はやい",
      "romaji": "hayai",
      "meaning": "Nhanh, sớm",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "TỐC/TẢO",
        "components": "速 (Tốc) / 早 (Tảo)",
        "story": "Nhanh/Sớm.",
        "examples": "早い (Sớm)"
      }
    },
    {
      "id": "L12_05",
      "word": "遅い",
      "reading": "おそい",
      "romaji": "osoi",
      "meaning": "Chậm, muộn",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "TRÌ",
        "components": "辶 (Sước - Di chuyển) + 犀 (Tê - Con tê giác)",
        "story": "Di chuyển (Sước) chậm chạp như con tê giác (Tê) là Chậm trễ.",
        "examples": "遅い (Chậm/Muộn), 遅刻 (Đến muộn)"
      }
    },
    {
      "id": "L12_06",
      "word": "多い",
      "reading": "おおい",
      "romaji": "ooi",
      "meaning": "Nhiều (người, vật)",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "ĐA",
        "components": "夕 (Tịch - Buổi tối) x2",
        "story": "Nhiều buổi tối (Tịch) gộp lại tạo thành Nhiều.",
        "examples": "多い (Nhiều)"
      }
    },
    {
      "id": "L12_07",
      "word": "少ない",
      "reading": "すくない",
      "romaji": "sukunai",
      "meaning": "Ít (người, vật)",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "THIỂU",
        "components": "少 (Thiểu - Ít)",
        "story": "Tiểu (Nhỏ) thêm nét phẩy nên càng Ít.",
        "examples": "少ない (Ít)"
      }
    },
    {
      "id": "L12_08",
      "word": "温かい・暖かい",
      "reading": "あたたかい",
      "romaji": "atatakai",
      "meaning": "Ấm áp",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "ÔN/NOÃN",
        "components": "温 (Ôn) / 暖 (Noãn)",
        "story": "Ấm áp.",
        "examples": "暖かい"
      }
    },
    {
      "id": "L12_09",
      "word": "涼しい",
      "reading": "すずしい",
      "romaji": "suzushii",
      "meaning": "Mát mẻ",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "LƯƠNG",
        "components": "氵 (Thủy - Nước) + 京 (Kinh - Kinh đô)",
        "story": "Thủ đô (Kinh) nằm cạnh nguồn nước (Thủy) rất Mát mẻ.",
        "examples": "涼しい (Mát mẻ)"
      }
    },
    {
      "id": "L12_10",
      "word": "甘い",
      "reading": "あまい",
      "romaji": "amai",
      "meaning": "Ngọt",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "CAM",
        "components": "甘 (Cam - Ngọt)",
        "story": "Đồ ăn ngọt.",
        "examples": "甘い (Ngọt)"
      }
    },
    {
      "id": "L12_11",
      "word": "辛い",
      "reading": "からい",
      "romaji": "karai",
      "meaning": "Cay",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "TÂN",
        "components": "辛 (Tân - Cay/Khổ)",
        "story": "Vị cay.",
        "examples": "辛い (Cay)"
      }
    },
    {
      "id": "L12_12",
      "word": "重い",
      "reading": "おもい",
      "romaji": "omoi",
      "meaning": "Nặng",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "TRỌNG",
        "components": "重 (Trọng - Nặng)",
        "story": "Nặng nề.",
        "examples": "重い (Nặng)"
      }
    },
    {
      "id": "L12_13",
      "word": "軽い",
      "reading": "かるい",
      "romaji": "karui",
      "meaning": "Nhẹ",
      "type": "Tính từ い",
      "kanjiBreakdown": {
        "hanviet": "KHINH",
        "components": "車 (Xa - Xe) + 巠 (Kinh - Sông đào)",
        "story": "Chiếc xe (Xa) đi qua lại dễ dàng là Nhẹ nhàng.",
        "examples": "軽い (Nhẹ)"
      }
    },
    {
      "id": "L12_14",
      "word": "季節",
      "reading": "きせつ",
      "romaji": "kisetsu",
      "meaning": "Mùa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "QUÝ TIẾT",
        "components": "季 (Quý - Mùa) + 節 (Tiết - Khớp/Đốt)",
        "story": "Các mùa trong năm.",
        "examples": "季節 (Mùa)"
      }
    },
    {
      "id": "L12_15",
      "word": "春",
      "reading": "はる",
      "romaji": "haru",
      "meaning": "Mùa xuân",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "XUÂN",
        "components": "春 (Xuân - Mùa xuân)",
        "story": "Mùa xuân hoa cỏ đâm chồi dưới ánh mặt trời.",
        "examples": "春 (Mùa xuân)"
      }
    },
    {
      "id": "L12_16",
      "word": "夏",
      "reading": "なつ",
      "romaji": "natsu",
      "meaning": "Mùa hè",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HẠ",
        "components": "夏 (Hạ - Mùa hè)",
        "story": "Mùa hè vất vả.",
        "examples": "夏 (Mùa hè)"
      }
    },
    {
      "id": "L12_17",
      "word": "秋",
      "reading": "あき",
      "romaji": "aki",
      "meaning": "Mùa thu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THU",
        "components": "禾 (Hòa - Cây lúa) + 火 (Hỏa - Lửa)",
        "story": "Mùa lúa chín vàng như lửa là Mùa Thu.",
        "examples": "秋 (Mùa thu)"
      }
    },
    {
      "id": "L12_18",
      "word": "冬",
      "reading": "ふゆ",
      "romaji": "fuyu",
      "meaning": "Mùa đông",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÔNG",
        "components": "冬 (Đông - Mùa đông)",
        "story": "Mùa đông lạnh lẽo.",
        "examples": "冬 (Mùa đông)"
      }
    },
    {
      "id": "L12_19",
      "word": "天気",
      "reading": "てんき",
      "romaji": "tenki",
      "meaning": "Thời tiết",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THIÊN KHÍ",
        "components": "天 (Thiên) + 気 (Khí)",
        "story": "Thời tiết.",
        "examples": "天気"
      }
    },
    {
      "id": "L12_20",
      "word": "雨",
      "reading": "あめ",
      "romaji": "ame",
      "meaning": "Mưa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "VŨ",
        "components": "雨 (Vũ)",
        "story": "Mưa.",
        "examples": "雨"
      }
    },
    {
      "id": "L12_21",
      "word": "雪",
      "reading": "ゆき",
      "romaji": "yuki",
      "meaning": "Tuyết",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TUYẾT",
        "components": "雨 (Vũ) + 彐 (Kệ)",
        "story": "Tuyết.",
        "examples": "雪"
      }
    },
    {
      "id": "L12_22",
      "word": "曇り",
      "reading": "くもり",
      "romaji": "kumori",
      "meaning": "Trời nhiều mây",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÁM",
        "components": "日 (Nhật) + 雲 (Vân - Mây)",
        "story": "Trời có mây.",
        "examples": "曇り (Nhiều mây)"
      }
    },
    {
      "id": "L12_23",
      "word": "どちら",
      "reading": "どちら",
      "romaji": "dochira",
      "meaning": "Cái nào (trong 2 cái)",
      "type": "Từ để hỏi"
    },
    {
      "id": "L12_24",
      "word": "ずっと",
      "reading": "ずっと",
      "romaji": "zutto",
      "meaning": "Hơn hẳn",
      "type": "Phó từ"
    },
    {
      "id": "L12_25",
      "word": "一番",
      "reading": "いちばん",
      "romaji": "ichiban",
      "meaning": "Nhất",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "NHẤT PHIÊN",
        "components": "一 (Nhất) + 番 (Phiên)",
        "story": "Số 1/Nhất.",
        "examples": "一番"
      }
    },
    {
      "id": "L12_26",
      "word": "簡単（な）",
      "reading": "かんたん",
      "romaji": "kantan",
      "meaning": "Đơn giản, dễ",
      "type": "Tính từ na",
      "kanjiBreakdown": {
        "hanviet": "GIẢN ĐƠN",
        "components": "簡 (Giản - Đơn giản) + 単 (Đơn - Đơn độc)",
        "story": "Những thứ đơn lẻ (Đơn) thì rất Đơn giản (Giản).",
        "examples": "簡単 (Đơn giản)"
      }
    },
    {
      "id": "L12_27",
      "word": "速い、早い",
      "reading": "はやい",
      "romaji": "hayai",
      "meaning": "Nhanh, sớm",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "TỐC / TẢO",
        "components": "速 (Tốc - Tốc độ), 早 (Tảo - Sớm)",
        "story": "Sớm và Nhanh nhẹn.",
        "examples": "速い (Nhanh), 早い (Sớm)"
      }
    },
    {
      "id": "L12_28",
      "word": "温かい、暖かい",
      "reading": "あたたかい",
      "romaji": "atatakai",
      "meaning": "Ấm",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "ÔN / NOÃN",
        "components": "温 (Ôn - Ấm áp), 暖 (Noãn - Ấm áp)",
        "story": "Ấm áp.",
        "examples": "暖かい (Ấm (thời tiết)), 温かい (Ấm (đồ vật))"
      }
    },
    {
      "id": "L12_29",
      "word": "いい（コーヒーが～）",
      "reading": "いい",
      "romaji": "ii",
      "meaning": "Thích (cà phê hơn)",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "N/A",
        "components": "Không có Kanji",
        "story": "Thích.",
        "examples": "コーヒーがいい (Thích cà phê)"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
