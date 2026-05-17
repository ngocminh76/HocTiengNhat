import { NihongoLesson } from './types';
import { readings } from '../readings/reading24';

const lesson: NihongoLesson = {
  "id": 24,
  "chapter": "第24課",
  "title": "くれます・てあげます",
  "titleVn": "Bài 24: Cho và Nhận",
  "theme": "Sự trao đổi",
  "words": [
    {
      "id": "L24_01",
      "word": "くれます",
      "reading": "くれます",
      "romaji": "kuremasu",
      "meaning": "Cho (tôi)",
      "type": "Động từ"
    },
    {
      "id": "L24_02",
      "word": "連れて行きます",
      "reading": "つれていきます",
      "romaji": "tsurete ikimasu",
      "meaning": "Dẫn đi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LIÊN HÀNH",
        "components": "連 (Liên) + 行 (Hành)",
        "story": "Liên kết dẫn theo đi ra ngoài.",
        "examples": "連れて行きます (Dẫn đi)"
      }
    },
    {
      "id": "L24_03",
      "word": "連れて来ます",
      "reading": "つれてきます",
      "romaji": "tsurete kimasu",
      "meaning": "Dẫn đến",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LIÊN LAI",
        "components": "連 (Liên) + 来 (Lai)",
        "story": "Liên kết dẫn theo đến đây.",
        "examples": "連れて来ます (Dẫn đến)"
      }
    },
    {
      "id": "L24_04",
      "word": "送ります",
      "reading": "おくります",
      "romaji": "okurimasu",
      "meaning": "Tiễn (ai đó)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TỐNG",
        "components": "辶 (Sước) + 关 (Quan)",
        "story": "Đưa tiễn (Tống).",
        "examples": "送ります (Tiễn (ai đó))"
      }
    },
    {
      "id": "L24_05",
      "word": "紹介します",
      "reading": "しょうかいします",
      "romaji": "shoukaishimasu",
      "meaning": "Giới thiệu",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THIỆU GIỚI",
        "components": "紹 (Thiệu) + 介 (Giới)",
        "story": "Giới thiệu nhau.",
        "examples": "紹介します (Giới thiệu)"
      }
    },
    {
      "id": "L24_06",
      "word": "案内します",
      "reading": "あんないします",
      "romaji": "annaishimasu",
      "meaning": "Hướng dẫn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ÁN NỘI",
        "components": "案 (Án) + 内 (Nội)",
        "story": "Chỉ dẫn nội tình bên trong (Hướng dẫn).",
        "examples": "案内します (Hướng dẫn)"
      }
    },
    {
      "id": "L24_07",
      "word": "説明します",
      "reading": "せつめいします",
      "romaji": "setsumeishimasu",
      "meaning": "Giải thích",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THUYẾT MINH",
        "components": "説 (Thuyết) + 明 (Minh)",
        "story": "Nói rõ ra cho mọi người hiểu là Giải thích.",
        "examples": "説明します (Giải thích)"
      }
    },
    {
      "id": "L24_08",
      "word": "いれます",
      "reading": "いれます",
      "romaji": "iremasu",
      "meaning": "Pha (cà phê)",
      "type": "Động từ"
    },
    {
      "id": "L24_09",
      "word": "おじいさん",
      "reading": "おじいさん",
      "romaji": "ojiisan",
      "meaning": "Ông / Cụ ông",
      "type": "Danh từ"
    },
    {
      "id": "L24_10",
      "word": "おばあさん",
      "reading": "おばあさん",
      "romaji": "obaasan",
      "meaning": "Bà / Cụ bà",
      "type": "Danh từ"
    },
    {
      "id": "L24_11",
      "word": "準備",
      "reading": "じゅんび",
      "romaji": "junbi",
      "meaning": "Sự chuẩn bị",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHUẨN BỊ",
        "components": "準 (Chuẩn) + 備 (Bị)",
        "story": "Chuẩn bị sẵn sàng.",
        "examples": "準備 (Sự chuẩn bị)"
      }
    },
    {
      "id": "L24_12",
      "word": "意味",
      "reading": "いみ",
      "romaji": "imi",
      "meaning": "Ý nghĩa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "Ý VỊ",
        "components": "意 (Ý) + 味 (Vị)",
        "story": "Hương vị của ý nghĩ (Ý nghĩa).",
        "examples": "意味 (Ý nghĩa)"
      }
    },
    {
      "id": "L24_13",
      "word": "お菓子",
      "reading": "おかし",
      "romaji": "okashi",
      "meaning": "Bánh kẹo",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "QUẢ TỬ",
        "components": "菓 (Quả) + 子 (Tử)",
        "story": "Bánh kẹo.",
        "examples": "お菓子 (Bánh kẹo)"
      }
    },
    {
      "id": "L24_14",
      "word": "全部",
      "reading": "ぜんぶ",
      "romaji": "zenbu",
      "meaning": "Tất cả",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TOÀN BỘ",
        "components": "全 (Toàn) + 部 (Bộ)",
        "story": "Tất cả.",
        "examples": "全部 (Tất cả)"
      }
    },
    {
      "id": "L24_15",
      "word": "自分で",
      "reading": "じぶんで",
      "romaji": "jibun de",
      "meaning": "Tự mình",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "TỰ PHÂN",
        "components": "自 (Tự) + 分 (Phân)",
        "story": "Tự bản thân làm.",
        "examples": "自分で (Tự mình)"
      }
    },
    {
      "id": "L24_16",
      "word": "ほかに",
      "reading": "ほかに",
      "romaji": "hokani",
      "meaning": "Ngoài ra",
      "type": "Phó từ"
    },
    {
      "id": "L24_17",
      "word": "ワゴン車",
      "reading": "ワゴンしゃ",
      "romaji": "wagon sha",
      "meaning": "Xe hơi",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "XA",
        "components": "車 (Xa)",
        "story": "Xe hơi dạng Wagon.",
        "examples": "ワゴン車 (Xe hơi)"
      }
    },
    {
      "id": "L24_18",
      "word": "お弁当",
      "reading": "おべんとう",
      "romaji": "obentou",
      "meaning": "Cơm hộp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BIỆN ĐƯƠNG",
        "components": "弁 (Biện) + 当 (Đương)",
        "story": "Hộp cơm Bento.",
        "examples": "お弁当 (Cơm hộp)"
      }
    },
    {
      "id": "L24_19",
      "word": "母の日",
      "reading": "ははのひ",
      "romaji": "haha no hi",
      "meaning": "Ngày của mẹ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MẪU NHẬT",
        "components": "母 (Mẫu) + 日 (Nhật)",
        "story": "Ngày của Mẹ.",
        "examples": "母の日 (Ngày của mẹ)"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
