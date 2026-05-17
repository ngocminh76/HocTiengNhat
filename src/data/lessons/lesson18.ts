import { NihongoLesson } from './types';
import { readings } from '../readings/reading18';

const lesson: NihongoLesson = {
  "id": 18,
  "chapter": "第18課",
  "title": "辞書形・ことができます",
  "titleVn": "Bài 18: Thể từ điển",
  "theme": "Khả năng và Sở thích",
  "words": [
    {
      "id": "L18_01",
      "word": "できます",
      "reading": "できます",
      "romaji": "dekimasu",
      "meaning": "Có thể",
      "type": "Động từ"
    },
    {
      "id": "L18_02",
      "word": "洗います",
      "reading": "あらいます",
      "romaji": "araimasu",
      "meaning": "Rửa",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TẨY",
        "components": "氵 (Thủy) + 先 (Tiên)",
        "story": "Rửa (Tẩy) tay bằng nước (Thủy) trước (Tiên) khi ăn.",
        "examples": "洗います (Rửa)"
      }
    },
    {
      "id": "L18_03",
      "word": "弾きます",
      "reading": "ひきます",
      "romaji": "hikimasu",
      "meaning": "Chơi (nhạc cụ)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÀN",
        "components": "弓 (Cung) + 単 (Đơn)",
        "story": "Dùng cây cung đánh đàn.",
        "examples": "弾きます (Chơi (nhạc cụ))"
      }
    },
    {
      "id": "L18_04",
      "word": "歌います",
      "reading": "うたいます",
      "romaji": "utaimasu",
      "meaning": "Hát",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "CA",
        "components": "哥 (Ca) + 欠 (Khiếm)",
        "story": "Há miệng hát.",
        "examples": "歌います (Hát)"
      }
    },
    {
      "id": "L18_05",
      "word": "集めます",
      "reading": "あつめます",
      "romaji": "atsumemasu",
      "meaning": "Sưu tầm, tập hợp",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TẬP",
        "components": "隹 (Truy - Chim nhỏ) + 木 (Mộc - Cây)",
        "story": "Bầy chim tụ tập trên cây.",
        "examples": "集めます (Sưu tầm, tập hợp)"
      }
    },
    {
      "id": "L18_06",
      "word": "捨てます",
      "reading": "すてます",
      "romaji": "sutemasu",
      "meaning": "Vứt",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XẢ",
        "components": "扌 (Thủ) + 舎 (Xá - Quán trọ)",
        "story": "Tay (Thủ) vứt đồ đạc ở lại quán trọ (Xá).",
        "examples": "捨てます (Vứt)"
      }
    },
    {
      "id": "L18_07",
      "word": "換えます",
      "reading": "かえます",
      "romaji": "kaemasu",
      "meaning": "Đổi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HOÁN",
        "components": "扌 (Thủ) + 奐 (Hoán)",
        "story": "Dùng tay Đổi đồ vật.",
        "examples": "換えます (Đổi)"
      }
    },
    {
      "id": "L18_08",
      "word": "運転します",
      "reading": "うんてんします",
      "romaji": "untenshimasu",
      "meaning": "Lái xe",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "VẬN CHUYỂN",
        "components": "運 (Vận) + 転 (Chuyển)",
        "story": "Lái xe di chuyển lăn tròn.",
        "examples": "運転します (Lái xe)"
      }
    },
    {
      "id": "L18_09",
      "word": "予約します",
      "reading": "よやくします",
      "romaji": "yoyakushimasu",
      "meaning": "Đặt chỗ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "DỰ ƯỚC",
        "components": "予 (Dự - Định trước) + 約 (Ước - Hẹn)",
        "story": "Hẹn định trước là Đặt chỗ.",
        "examples": "予約します (Đặt chỗ)"
      }
    },
    {
      "id": "L18_10",
      "word": "ピアノ",
      "reading": "ピアノ",
      "romaji": "piano",
      "meaning": "Đàn Piano",
      "type": "Danh từ"
    },
    {
      "id": "L18_11",
      "word": "現金",
      "reading": "げんきん",
      "romaji": "genkin",
      "meaning": "Tiền mặt",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HIỆN KIM",
        "components": "現 (Hiện) + 金 (Kim)",
        "story": "Tiền có sẵn hiện tại là Tiền mặt.",
        "examples": "現金 (Tiền mặt)"
      }
    },
    {
      "id": "L18_12",
      "word": "趣味",
      "reading": "しゅみ",
      "romaji": "shumi",
      "meaning": "Sở thích",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THÚ VỊ",
        "components": "趣 (Thú) + 味 (Vị)",
        "story": "Hương vị thú vị là Sở thích.",
        "examples": "趣味 (Sở thích)"
      }
    },
    {
      "id": "L18_13",
      "word": "日記",
      "reading": "にっき",
      "romaji": "nikki",
      "meaning": "Nhật ký",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHẬT KÝ",
        "components": "日 (Nhật) + 記 (Ký - Ghi chép)",
        "story": "Ghi chép hàng ngày.",
        "examples": "日記 (Nhật ký)"
      }
    },
    {
      "id": "L18_14",
      "word": "お祈り",
      "reading": "おい祈り",
      "romaji": "oinori",
      "meaning": "Việc cầu nguyện",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KỲ",
        "components": "祈 (Kỳ - Cầu nguyện)",
        "story": "Việc cầu nguyện.",
        "examples": "お祈り (Việc cầu nguyện)"
      }
    },
    {
      "id": "L18_15",
      "word": "課長",
      "reading": "かちょう",
      "romaji": "kachou",
      "meaning": "Tổ trưởng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KHÓA TRƯỜNG",
        "components": "課 (Khóa) + 長 (Trường)",
        "story": "Người đứng đầu phòng ban (Tổ trưởng).",
        "examples": "課長 (Tổ trưởng)"
      }
    },
    {
      "id": "L18_16",
      "word": "部長",
      "reading": "ぶちょう",
      "romaji": "buchou",
      "meaning": "Trưởng phòng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BỘ TRƯỜNG",
        "components": "部 (Bộ) + 長 (Trường)",
        "story": "Người đứng đầu bộ phận (Trưởng phòng).",
        "examples": "部長 (Trưởng phòng)"
      }
    },
    {
      "id": "L18_17",
      "word": "社長",
      "reading": "しゃちょう",
      "romaji": "shachou",
      "meaning": "Giám đốc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "XÃ TRƯỜNG",
        "components": "社 (Xã) + 長 (Trường)",
        "story": "Người đứng đầu công ty (Giám đốc).",
        "examples": "社長 (Giám đốc)"
      }
    },
    {
      "id": "L18_18",
      "word": "動物",
      "reading": "どうぶつ",
      "romaji": "doubutsu",
      "meaning": "Động vật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘNG VẬT",
        "components": "動 (Động) + 物 (Vật)",
        "story": "Vật có thể chuyển động.",
        "examples": "動物 (Động vật)"
      }
    },
    {
      "id": "L18_19",
      "word": "馬",
      "reading": "うま",
      "romaji": "uma",
      "meaning": "Con ngựa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MÃ",
        "components": "馬 (Mã - Con ngựa)",
        "story": "Hình ảnh con ngựa.",
        "examples": "馬 (Con ngựa)"
      }
    },
    {
      "id": "L18_20",
      "word": "インターネット",
      "reading": "インターネット",
      "romaji": "intaanetto",
      "meaning": "Internet",
      "type": "Danh từ"
    },
    {
      "id": "L18_21",
      "word": "特に",
      "reading": "とくに",
      "romaji": "tokuni",
      "meaning": "Đặc biệt là",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẶC",
        "components": "特 (Đặc)",
        "story": "Đặc biệt.",
        "examples": "特に"
      }
    },
    {
      "id": "L18_22",
      "word": "へえ",
      "reading": "へえ",
      "romaji": "hee",
      "meaning": "Thế à (ngạc nhiên)",
      "type": "Từ cảm thán"
    },
    {
      "id": "L18_23",
      "word": "それはおもしろいですね",
      "reading": "それはおもしろいですね",
      "romaji": "sore wa omoshiroi desu ne",
      "meaning": "Điều đó thú vị nhỉ",
      "type": "Mẫu câu"
    },
    {
      "id": "L18_24",
      "word": "なかなか",
      "reading": "なかなか",
      "romaji": "nakanaka",
      "meaning": "Mãi mà không (đi với phủ định)",
      "type": "Phó từ"
    },
    {
      "id": "L18_25",
      "word": "本当ですか",
      "reading": "ほんとうですか",
      "romaji": "hontou desu ka",
      "meaning": "Thật không?",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "BẢN ĐƯƠNG",
        "components": "本 (Bản) + 当 (Đương)",
        "story": "Thật sự đương nhiên là vậy sao?",
        "examples": "本当 (Sự thật)"
      }
    },
    {
      "id": "L18_26",
      "word": "ぜひ",
      "reading": "ぜひ",
      "romaji": "zehi",
      "meaning": "Nhất định",
      "type": "Phó từ"
    }
  ],
  "readings": readings,
  
};

export default lesson;
