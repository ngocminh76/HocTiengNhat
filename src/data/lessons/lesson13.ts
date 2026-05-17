import { NihongoLesson } from './types';
import { readings } from '../readings/reading13';

const lesson: NihongoLesson = {
  "id": 13,
  "chapter": "第13課",
  "title": "ほしい・たい",
  "titleVn": "Bài 13: Mong muốn",
  "theme": "Mong muốn và Mục đích",
  "words": [
    {
      "id": "L13_01",
      "word": "遊びます",
      "reading": "あそびます",
      "romaji": "asobimasu",
      "meaning": "Chơi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "DU",
        "components": "辶 (Sước) + 方 (Phương) + 子 (Tử)",
        "story": "Đứa trẻ (Tử) đi (Sước) khắp các phương (Phương) để vui chơi.",
        "examples": "遊びます (Chơi)"
      }
    },
    {
      "id": "L13_02",
      "word": "泳ぎます",
      "reading": "およぎます",
      "romaji": "oyogimasu",
      "meaning": "Bơi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "VỊNH",
        "components": "氵 (Thủy) + 永 (Vĩnh)",
        "story": "Bơi lội mãi mãi (Vĩnh) trong dòng nước (Thủy).",
        "examples": "泳ぎます (Bơi)"
      }
    },
    {
      "id": "L13_03",
      "word": "迎えます",
      "reading": "むかえます",
      "romaji": "mukaemasu",
      "meaning": "Đón",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NGHÊNH",
        "components": "辶 (Sước) + 卬 (Ngang)",
        "story": "Đi (Sước) ra đón một người ngẩng cao đầu (Ngang).",
        "examples": "迎えます (Đón)"
      }
    },
    {
      "id": "L13_04",
      "word": "疲れます",
      "reading": "つかれます",
      "romaji": "tsukaremasu",
      "meaning": "Mệt mỏi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "BÌ",
        "components": "疒 (Nạch) + 皮 (Bì)",
        "story": "Làm việc đến mức bệnh tật (Nạch) ngoài da (Bì) vì quá mệt mỏi.",
        "examples": "疲れます (Mệt mỏi)"
      }
    },
    {
      "id": "L13_05",
      "word": "結婚します",
      "reading": "けっこんします",
      "romaji": "kekkonshimasu",
      "meaning": "Kết hôn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KẾT HÔN",
        "components": "結 (Kết - Buộc/Nối) + 婚 (Hôn - Kết hôn)",
        "story": "Sợi chỉ (Mịch) buộc người phụ nữ (Nữ) vào gia đình họ trong ngày Hôn lễ.",
        "examples": "結婚します (Kết hôn)"
      }
    },
    {
      "id": "L13_06",
      "word": "買い物します",
      "reading": "かいものします",
      "romaji": "kaimonoshimasu",
      "meaning": "Mua sắm",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "MÃI VẬT",
        "components": "買 (Mãi - Mua) + 物 (Vật - Đồ vật)",
        "story": "Đi mua (Mãi) các đồ vật (Vật).",
        "examples": "買い物します (Mua sắm)"
      }
    },
    {
      "id": "L13_07",
      "word": "食事します",
      "reading": "しょくじします",
      "romaji": "shokujishimasu",
      "meaning": "Ăn cơm",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỰC SỰ",
        "components": "食 (Thực - Ăn) + 事 (Sự - Việc)",
        "story": "Việc (Sự) ăn uống (Thực).",
        "examples": "食事します (Ăn cơm/Dùng bữa)"
      }
    },
    {
      "id": "L13_08",
      "word": "散歩します",
      "reading": "さんぽします",
      "romaji": "sanposhimasu",
      "meaning": "Đi dạo",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TẢN BỘ",
        "components": "散 (Tản - Tản mạn) + 歩 (Bộ - Đi bộ)",
        "story": "Đi bộ (Bộ) tản mạn (Tản) khắp nơi.",
        "examples": "散歩します (Đi dạo)"
      }
    },
    {
      "id": "L13_09",
      "word": "大変（な）",
      "reading": "たいへん",
      "romaji": "taihen",
      "meaning": "Vất vả",
      "type": "Tính từ na",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI BIẾN",
        "components": "大 (Đại) + 変 (Biến)",
        "story": "Sự biến đổi to lớn khiến mọi thứ Vất vả.",
        "examples": "大変 (Vất vả)"
      }
    },
    {
      "id": "L13_10",
      "word": "欲しい",
      "reading": "ほしい",
      "romaji": "hoshii",
      "meaning": "Muốn có",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "DỤC",
        "components": "谷 (Cốc - Thung lũng) + 欠 (Khiếm - Thiếu)",
        "story": "Sự thiếu thốn (Khiếm) to lớn như thung lũng (Cốc) tạo ra lòng Tham muốn.",
        "examples": "欲しい (Muốn có)"
      }
    },
    {
      "id": "L13_11",
      "word": "広い",
      "reading": "ひろい",
      "romaji": "hiroi",
      "meaning": "Rộng",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "QUẢNG",
        "components": "广 (Nghiễm - Mái nhà) + ム (Khư)",
        "story": "Dưới mái nhà (Nghiễm) có một không gian thật Rộng lớn.",
        "examples": "広い (Rộng)"
      }
    },
    {
      "id": "L13_12",
      "word": "狭い",
      "reading": "せまい",
      "romaji": "semai",
      "meaning": "Hẹp",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "HIỆP",
        "components": "犭(Khuyển - Chó) + 夾 (Hiệp - Kẹp giữa)",
        "story": "Con chó (Khuyển) bị kẹp giữa hai vách đá Hẹp.",
        "examples": "狭い (Hẹp)"
      }
    },
    {
      "id": "L13_13",
      "word": "プール",
      "reading": "プール",
      "romaji": "puuru",
      "meaning": "Bể bơi",
      "type": "Danh từ"
    },
    {
      "id": "L13_14",
      "word": "川",
      "reading": "かわ",
      "romaji": "kawa",
      "meaning": "Sông",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "XUYÊN",
        "components": "川 (Xuyên - Sông)",
        "story": "Hình ảnh dòng sông chảy xuôi.",
        "examples": "川 (Sông)"
      }
    },
    {
      "id": "L13_15",
      "word": "美術",
      "reading": "びじゅつ",
      "romaji": "bijutsu",
      "meaning": "Mỹ thuật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỸ THUẬT",
        "components": "美 (Mỹ - Đẹp) + 術 (Thuật - Kỹ thuật)",
        "story": "Kỹ thuật (Thuật) tạo ra cái Đẹp (Mỹ).",
        "examples": "美術 (Mỹ thuật)"
      }
    },
    {
      "id": "L13_16",
      "word": "釣り",
      "reading": "つり",
      "romaji": "tsuri",
      "meaning": "Câu cá",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIẾU",
        "components": "金 (Kim - Kim loại) + 勺 (Chước - Cái gáo)",
        "story": "Dùng sợi dây kim loại (Kim) uốn cong như cái gáo (Chước) để đi câu.",
        "examples": "釣り (Câu cá)"
      }
    },
    {
      "id": "L13_17",
      "word": "週末",
      "reading": "しゅうまつ",
      "romaji": "shuumatsu",
      "meaning": "Cuối tuần",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHU MẠT",
        "components": "週 (Chu - Tuần) + 末 (Mạt - Cuối/Ngọn)",
        "story": "Phần cuối cùng (Mạt) của một tuần (Chu) là Cuối tuần.",
        "examples": "週末 (Cuối tuần)"
      }
    },
    {
      "id": "L13_18",
      "word": "お正月",
      "reading": "おしょうがつ",
      "romaji": "oshougatsu",
      "meaning": "Tết",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHÍNH NGUYỆT",
        "components": "正 (Chính - Đúng/Chính đáng) + 月 (Nguyệt - Tháng)",
        "story": "Tháng (Nguyệt) đầu tiên, chính đáng nhất (Chính) của năm là tháng Tết.",
        "examples": "お正月 (Tết)"
      }
    },
    {
      "id": "L13_19",
      "word": "何か",
      "reading": "なにか",
      "romaji": "nanika",
      "meaning": "Cái gì đó",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "HÀ",
        "components": "何 (Hà) + か (Trợ từ nghi vấn)",
        "story": "Cái gì đó.",
        "examples": "何か (Cái gì đó)"
      }
    },
    {
      "id": "L13_20",
      "word": "どこか",
      "reading": "どこか",
      "romaji": "dokoka",
      "meaning": "Đâu đó",
      "type": "Đại từ"
    },
    {
      "id": "L13_21",
      "word": "渇きます",
      "reading": "かわきます",
      "romaji": "kawakimasu",
      "meaning": "Khát",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KHÁT",
        "components": "氵 (Thủy - Nước) + 曷 (Hạt - Hét lớn)",
        "story": "Hét lớn (Hạt) gọi nước (Thủy) vì quá Khát.",
        "examples": "渇きます (Khát)"
      }
    },
    {
      "id": "L13_22",
      "word": "すきます",
      "reading": "すきます",
      "romaji": "sukimasu",
      "meaning": "Đói",
      "type": "Động từ"
    },
    {
      "id": "L13_23",
      "word": "お祭り",
      "reading": "おまつり",
      "romaji": "omatsuri",
      "meaning": "Lễ hội",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẾ",
        "components": "月 (Nhục - Thịt) + 又 (Hựu - Lại) + 示 (Thị - Bàn thờ)",
        "story": "Lại (Hựu) đem thịt (Nhục) đặt lên bàn thờ (Thị) để cúng Tế trong lễ hội.",
        "examples": "お祭り (Lễ hội)"
      }
    },
    {
      "id": "L13_24",
      "word": "スキー",
      "reading": "スキー",
      "romaji": "sukii",
      "meaning": "Trượt tuyết",
      "type": "Danh từ"
    },
    {
      "id": "L13_25",
      "word": "会議",
      "reading": "かいぎ",
      "romaji": "kaigi",
      "meaning": "Cuộc họp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỘI NGHỊ",
        "components": "会 (Hội - Gặp gỡ) + 議 (Nghị - Bàn luận)",
        "story": "Gặp gỡ (Hội) để bàn luận (Nghị) trong Cuộc họp.",
        "examples": "会議 (Cuộc họp)"
      }
    },
    {
      "id": "L13_26",
      "word": "登録",
      "reading": "とうろく",
      "romaji": "touroku",
      "meaning": "Đăng ký",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐĂNG LỤC",
        "components": "登 (Đăng - Leo lên) + 録 (Lục - Ghi chép)",
        "story": "Ghi chép (Lục) lại tên tuổi để đăng cai (Đăng) là Đăng ký.",
        "examples": "登録 (Đăng ký)"
      }
    },
    {
      "id": "L13_27",
      "word": "ごろ",
      "reading": "ごろ",
      "romaji": "goro",
      "meaning": "Khoảng ~ (thời gian)",
      "type": "Hậu tố"
    },
    {
      "id": "L13_28",
      "word": "ご注文は？",
      "reading": "ごちゅうもんは？",
      "romaji": "gochuumon wa?",
      "meaning": "Quý khách gọi món gì?",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "CHÚ VẤN",
        "components": "注 (Chú - Rót vào) + 文 (Văn - Văn tự)",
        "story": "Ghi chép (Văn) lại yêu cầu rót (Chú) nước để Gọi món.",
        "examples": "ご注文 (Gọi món)"
      }
    },
    {
      "id": "L13_29",
      "word": "定食",
      "reading": "ていしょく",
      "romaji": "teishoku",
      "meaning": "Suất ăn, set ăn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỊNH THỰC",
        "components": "定 (Định - Cố định) + 食 (Thực - Ăn)",
        "story": "Suất ăn (Thực) đã được cố định (Định) sẵn các món.",
        "examples": "定食 (Suất ăn cố định)"
      }
    },
    {
      "id": "L13_30",
      "word": "牛どん",
      "reading": "ぎゅうどん",
      "romaji": "gyuudon",
      "meaning": "Cơm thịt bò",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGƯU",
        "components": "牛 (Ngưu - Con bò)",
        "story": "Món cơm thịt bò.",
        "examples": "牛どん (Cơm thịt bò)"
      }
    },
    {
      "id": "L13_31",
      "word": "お待ちください",
      "reading": "おまちください",
      "romaji": "omachi kudasai",
      "meaning": "Xin vui lòng đợi",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "ĐÃI",
        "components": "待 (Đãi - Đợi)",
        "story": "Vui lòng đợi.",
        "examples": "お待ちください"
      }
    },
    {
      "id": "L13_32",
      "word": "別々に",
      "reading": "べつべつに",
      "romaji": "betsubetsuni",
      "meaning": "Tính riêng ra",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "BIỆT",
        "components": "別 (Biệt) + 々",
        "story": "Riêng ra.",
        "examples": "別々に"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
