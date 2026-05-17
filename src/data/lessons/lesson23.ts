import { NihongoLesson } from './types';
import { readings } from '../readings/reading23';

const lesson: NihongoLesson = {
  "id": 23,
  "chapter": "第23課",
  "title": "〜時・〜と",
  "titleVn": "Bài 23: Mệnh đề Thời gian và Điều kiện",
  "theme": "Thời gian và Hệ quả tất yếu",
  "words": [
    {
      "id": "L23_01",
      "word": "聞きます",
      "reading": "ききます",
      "romaji": "kikimasu",
      "meaning": "Hỏi (giáo viên)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "VĂN",
        "components": "門 (Môn - Cửa) + 耳 (Nhĩ - Tai)",
        "story": "Ghé tai (Nhĩ) vào cửa (Môn) để Nghe/Hỏi.",
        "examples": "聞きます (Nghe/Hỏi)"
      }
    },
    {
      "id": "L23_02",
      "word": "回します",
      "reading": "まわします",
      "romaji": "mawashimasu",
      "meaning": "Vặn (núm)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HỒI",
        "components": "回 (Hồi - Vòng quanh)",
        "story": "Hình ảnh vòng tròn xoay vòng quanh.",
        "examples": "回します (Vặn/Xoay)"
      }
    },
    {
      "id": "L23_03",
      "word": "引きます",
      "reading": "ひきます",
      "romaji": "hikimasu",
      "meaning": "Kéo",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "DẪN",
        "components": "弓 (Cung) + 丨 (Cổn)",
        "story": "Kéo căng cây cung (Cung) ra.",
        "examples": "引きます (Kéo)"
      }
    },
    {
      "id": "L23_04",
      "word": "変えます",
      "reading": "かえます",
      "romaji": "kaemasu",
      "meaning": "Đổi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "BIẾN",
        "components": "亦 (Diệc) + 攵 (Phộc)",
        "story": "Đánh đập (Phộc) để làm Biến đổi.",
        "examples": "変えます (Đổi)"
      }
    },
    {
      "id": "L23_05",
      "word": "触ります",
      "reading": "さわります",
      "romaji": "sawarimasu",
      "meaning": "Sờ, chạm",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XÚC",
        "components": "角 (Giác - Sừng) + 虫 (Trùng - Côn trùng)",
        "story": "Sờ (Xúc) vào sừng (Giác) con côn trùng (Trùng).",
        "examples": "触ります (Sờ, chạm)"
      }
    },
    {
      "id": "L23_06",
      "word": "出ます",
      "reading": "でます",
      "romaji": "demasu",
      "meaning": "Ra (tiền thừa)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XUẤT",
        "components": "出 (Xuất)",
        "story": "Ra/Xuất hiện.",
        "examples": "出ます"
      }
    },
    {
      "id": "L23_07",
      "word": "動きます",
      "reading": "うごきます",
      "romaji": "ugokimasu",
      "meaning": "Hoạt động (máy)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘNG",
        "components": "重 (Trọng - Nặng) + 力 (Lực)",
        "story": "Dùng sức lực (Lực) làm cho vật nặng (Trọng) Chuyển động.",
        "examples": "動きます (Hoạt động (máy))"
      }
    },
    {
      "id": "L23_08",
      "word": "歩きます",
      "reading": "あるきます",
      "romaji": "arukimasu",
      "meaning": "Đi bộ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "BỘ",
        "components": "止 (Chỉ - Dừng lại) + 少 (Thiểu - Một chút)",
        "story": "Đi bộ (Bộ) một chút lại dừng.",
        "examples": "歩きます (Đi bộ)"
      }
    },
    {
      "id": "L23_09",
      "word": "渡ります",
      "reading": "わたります",
      "romaji": "watarimasu",
      "meaning": "Qua (cầu, đường)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘ",
        "components": "氵 (Thủy) + 度 (Độ)",
        "story": "Đi bộ qua (Độ) dòng nước (Thủy) là Băng qua.",
        "examples": "渡ります (Qua (cầu, đường))"
      }
    },
    {
      "id": "L23_10",
      "word": "気をつけます",
      "reading": "きをつけます",
      "romaji": "ki wo tsukemasu",
      "meaning": "Cẩn thận",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KHÍ",
        "components": "気 (Khí)",
        "story": "Chú ý, cẩn thận (tập trung khí thần).",
        "examples": "気をつけます (Cẩn thận)"
      }
    },
    {
      "id": "L23_11",
      "word": "引っ越します",
      "reading": "ひっこします",
      "romaji": "hikkoshimasu",
      "meaning": "Chuyển nhà",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "DẪN VIỆT",
        "components": "引 (Dẫn - Kéo) + 越 (Việt - Vượt qua)",
        "story": "Kéo (Dẫn) đồ đạc vượt qua (Việt) ranh giới để Chuyển nhà.",
        "examples": "引っ越します (Chuyển nhà)"
      }
    },
    {
      "id": "L23_12",
      "word": "電気屋",
      "reading": "でんきや",
      "romaji": "denkiya",
      "meaning": "Cửa hàng điện máy",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỆN KHÍ ỐC",
        "components": "電 (Điện) + 気 (Khí) + 屋 (Ốc - Cửa hàng)",
        "story": "Cửa hàng bán đồ điện.",
        "examples": "電気屋 (Cửa hàng điện máy)"
      }
    },
    {
      "id": "L23_13",
      "word": "サイズ",
      "reading": "サイズ",
      "romaji": "saizu",
      "meaning": "Cỡ, size",
      "type": "Danh từ"
    },
    {
      "id": "L23_14",
      "word": "音",
      "reading": "おと",
      "romaji": "oto",
      "meaning": "Âm thanh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ÂM",
        "components": "立 (Lập) + 日 (Nhật)",
        "story": "Âm thanh.",
        "examples": "音 (Âm thanh)"
      }
    },
    {
      "id": "L23_15",
      "word": "機械",
      "reading": "きかい",
      "romaji": "kikai",
      "meaning": "Máy móc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CƠ GIỚI",
        "components": "機 (Cơ - Máy móc) + 械 (Giới - Máy móc)",
        "story": "Các loại máy móc.",
        "examples": "機械 (Máy móc)"
      }
    },
    {
      "id": "L23_16",
      "word": "つまみ",
      "reading": "つまみ",
      "romaji": "tsumami",
      "meaning": "Núm vặn",
      "type": "Danh từ"
    },
    {
      "id": "L23_17",
      "word": "故障",
      "reading": "こしょう",
      "romaji": "koshou",
      "meaning": "Hỏng hóc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CỐ CHƯỚNG",
        "components": "故 (Cố - Sự cố) + 障 (Chướng - Ngăn cản)",
        "story": "Sự cố gây cản trở là Hỏng hóc.",
        "examples": "故障 (Hỏng hóc)"
      }
    },
    {
      "id": "L23_18",
      "word": "道",
      "reading": "みち",
      "romaji": "michi",
      "meaning": "Đường đi",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẠO",
        "components": "辶 (Sước) + 首 (Thủ - Đầu)",
        "story": "Cái đầu (Thủ) dẫn đường (Sước) đi.",
        "examples": "道 (Đường đi)"
      }
    },
    {
      "id": "L23_19",
      "word": "交差点",
      "reading": "こうさてん",
      "romaji": "kousaten",
      "meaning": "Ngã tư",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIAO SOA ĐIỂM",
        "components": "交 (Giao) + 差 (Soa) + 点 (Điểm)",
        "story": "Điểm giao cắt nhau giữa các con đường (Ngã tư).",
        "examples": "交差点 (Ngã tư)"
      }
    },
    {
      "id": "L23_20",
      "word": "信号",
      "reading": "しんごう",
      "romaji": "shingou",
      "meaning": "Đèn giao thông",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TÍN HIỆU",
        "components": "信 (Tín) + 号 (Hiệu)",
        "story": "Đèn tín hiệu giao thông.",
        "examples": "信号 (Đèn giao thông)"
      }
    },
    {
      "id": "L23_21",
      "word": "触ります（ドアに〜）",
      "reading": "さわります",
      "romaji": "sawarimasu",
      "meaning": "Sờ, chạm vào",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XÚC",
        "components": "触 (Xúc)",
        "story": "Sờ chạm.",
        "examples": "触ります"
      }
    },
    {
      "id": "L23_22",
      "word": "出ます（お釣りが〜）",
      "reading": "でます",
      "romaji": "demasu",
      "meaning": "Chạy ra (tiền thừa)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XUẤT",
        "components": "出 (Xuất)",
        "story": "Tiền thừa chạy ra.",
        "examples": "出ます"
      }
    },
    {
      "id": "L23_23",
      "word": "寂しい",
      "reading": "さびしい",
      "romaji": "sabishii",
      "meaning": "Buồn, cô đơn",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "TỊCH",
        "components": "宀 (Miên - Mái nhà) + 叔 (Thúc)",
        "story": "Dưới mái nhà (Miên) chỉ có một mình nên rất Buồn tẻ.",
        "examples": "寂しい (Buồn, cô đơn)"
      }
    },
    {
      "id": "L23_24",
      "word": "お湯",
      "reading": "おゆ",
      "romaji": "oyu",
      "meaning": "Nước nóng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THANG",
        "components": "氵 (Thủy) + 昜 (Dương - Ánh mặt trời)",
        "story": "Nước (Thủy) được phơi nắng (Dương) nên rất Nóng.",
        "examples": "お湯 (Nước nóng)"
      }
    },
    {
      "id": "L23_25",
      "word": "橋",
      "reading": "はし",
      "romaji": "hashi",
      "meaning": "Cây cầu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIỀU",
        "components": "木 (Mộc) + 喬 (Kiều)",
        "story": "Chiếc cầu làm bằng gỗ (Mộc) uốn cong lên.",
        "examples": "橋 (Cây cầu)"
      }
    },
    {
      "id": "L23_26",
      "word": "歩道",
      "reading": "ほどう",
      "romaji": "hodou",
      "meaning": "Vỉa hè",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BỘ ĐẠO",
        "components": "歩 (Bộ) + 道 (Đạo)",
        "story": "Đường dành cho người đi bộ (Vỉa hè).",
        "examples": "歩道 (Vỉa hè)"
      }
    },
    {
      "id": "L23_27",
      "word": "駐車場",
      "reading": "ちゅうしゃじょう",
      "romaji": "chuushajou",
      "meaning": "Bãi đỗ xe",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÚ XA TRƯỜNG",
        "components": "駐 (Trú - Đậu lại) + 車 (Xa - Xe) + 場 (Trường - Nơi)",
        "story": "Nơi xe cộ đậu lại là Bãi đỗ xe.",
        "examples": "駐車場 (Bãi đỗ xe)"
      }
    },
    {
      "id": "L23_28",
      "word": "建物",
      "reading": "たてもの",
      "romaji": "tatemono",
      "meaning": "Tòa nhà",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIẾN VẬT",
        "components": "建 (Kiến - Xây dựng) + 物 (Vật)",
        "story": "Đồ vật được con người xây dựng lên là Tòa nhà.",
        "examples": "建物 (Tòa nhà)"
      }
    },
    {
      "id": "L23_29",
      "word": "何度も",
      "reading": "なんども",
      "romaji": "nandomo",
      "meaning": "Nhiều lần",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "HÀ ĐỘ",
        "components": "何 (Hà) + 度 (Độ - Lần)",
        "story": "Rất nhiều lần.",
        "examples": "何度も (Nhiều lần)"
      }
    },
    {
      "id": "L23_30",
      "word": "〜目",
      "reading": "〜め",
      "romaji": "~me",
      "meaning": "Thứ ~ (số thứ tự)",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "MỤC",
        "components": "目 (Mục)",
        "story": "Thứ tự.",
        "examples": "〜目 (Thứ ~ (số thứ tự))"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
