import { NihongoLesson } from './types';
import { readings } from '../readings/reading15';

const lesson: NihongoLesson = {
  "id": 15,
  "chapter": "第15課",
  "title": "てもいいです",
  "titleVn": "Bài 15: Sự cho phép",
  "theme": "Cho phép và Cấm đoán",
  "words": [
    {
      "id": "L15_01",
      "word": "置きます",
      "reading": "おきます",
      "romaji": "okimasu",
      "meaning": "Đặt, để",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRÍ",
        "components": "罒 (Võng - Mắt lưới) + 直 (Trực - Thẳng)",
        "story": "Đặt (Trí) cái lưới (Võng) thẳng thớm (Trực) xuống đất.",
        "examples": "置きます (Đặt, để)"
      }
    },
    {
      "id": "L15_02",
      "word": "作ります",
      "reading": "つかります",
      "romaji": "tsukurimasu",
      "meaning": "Làm, chế tạo",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TÁC",
        "components": "亻 (Nhân - Người) + 乍 (Sạ - Chợt)",
        "story": "Người (Nhân) chợt (Sạ) nảy ra ý tưởng để Làm/Chế tạo (Tác).",
        "examples": "作ります (Làm, chế tạo)"
      }
    },
    {
      "id": "L15_03",
      "word": "売ります",
      "reading": "うります",
      "romaji": "urimasu",
      "meaning": "Bán",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "MẠI",
        "components": "士 (Sĩ - Kẻ sĩ) + 冖 (Mịch - Trùm khăn) + 儿 (Nhân đi)",
        "story": "Kẻ sĩ (Sĩ) trùm khăn (Mịch) đi bộ (Nhân đi) để Bán hàng giấu mặt.",
        "examples": "売ります (Bán)"
      }
    },
    {
      "id": "L15_04",
      "word": "知ります",
      "reading": "しります",
      "romaji": "shirimasu",
      "meaning": "Biết",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRI",
        "components": "矢 (Thỉ - Mũi tên) + 口 (Khẩu - Miệng)",
        "story": "Lời nói thốt ra từ miệng (Khẩu) nhanh như mũi tên (Thỉ) khi Biết một điều gì đó.",
        "examples": "知ります (Biết)"
      }
    },
    {
      "id": "L15_05",
      "word": "住みます",
      "reading": "すみます",
      "romaji": "sumimasu",
      "meaning": "Sống",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRÚ",
        "components": "亻 (Nhân - Người) + 主 (Chủ - Ông chủ)",
        "story": "Người (Nhân) làm chủ (Chủ) một khu vực để Cư trú.",
        "examples": "住みます (Sống)"
      }
    },
    {
      "id": "L15_06",
      "word": "研究します",
      "reading": "けんきゅうします",
      "romaji": "kenkyuushimasu",
      "meaning": "Nghiên cứu",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NGHIÊN CỨU",
        "components": "研 (Nghiên - Mài gọt) + 究 (Cứu - Tìm tòi)",
        "story": "Mài gọt (Nghiên) và tìm tòi (Cứu) sâu sắc là Nghiên cứu.",
        "examples": "研究します (Nghiên cứu)"
      }
    },
    {
      "id": "L15_07",
      "word": "資料",
      "reading": "しりょう",
      "romaji": "shiryou",
      "meaning": "Tài liệu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TƯ LIỆU",
        "components": "資 (Tư - Tiền của) + 料 (Liệu - Vật liệu/Đo lường)",
        "story": "Tài liệu (Liệu) quý giá như tiền của (Tư).",
        "examples": "資料 (Tài liệu)"
      }
    },
    {
      "id": "L15_08",
      "word": "カタログ",
      "reading": "カタログ",
      "romaji": "katarogu",
      "meaning": "Catalog",
      "type": "Danh từ"
    },
    {
      "id": "L15_09",
      "word": "時刻表",
      "reading": "じこくひょう",
      "romaji": "jikokuhyou",
      "meaning": "Bảng giờ tàu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỜI KHẮC BIỂU",
        "components": "時 (Thời) + 刻 (Khắc) + 表 (Biểu)",
        "story": "Biểu đồ ghi rõ thời gian (Thời) và thời khắc (Khắc) là Bảng giờ tàu.",
        "examples": "時刻表 (Bảng giờ tàu)"
      }
    },
    {
      "id": "L15_10",
      "word": "服",
      "reading": "ふく",
      "romaji": "fuku",
      "meaning": "Quần áo",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHỤC",
        "components": "月 (Nhục - Cơ thể) + 卩 (Tiết) + 又 (Hựu - Lại)",
        "story": "Lại (Hựu) quấn thêm lên cơ thể (Nhục) những bộ trang Phục.",
        "examples": "服 (Quần áo)"
      }
    },
    {
      "id": "L15_11",
      "word": "製品",
      "reading": "せいひん",
      "romaji": "seihin",
      "meaning": "Sản phẩm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHẾ PHẨM",
        "components": "製 (Chế - Chế tạo) + 品 (Phẩm - Sản phẩm)",
        "story": "Sản phẩm (Phẩm) được chế tạo (Chế) ra.",
        "examples": "製品 (Sản phẩm)"
      }
    },
    {
      "id": "L15_12",
      "word": "ソフト",
      "reading": "ソフト",
      "romaji": "sofuto",
      "meaning": "Phần mềm",
      "type": "Danh từ"
    },
    {
      "id": "L15_13",
      "word": "専門",
      "reading": "せんもん",
      "romaji": "senmon",
      "meaning": "Chuyên môn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHUYÊN MÔN",
        "components": "専 (Chuyên - Chuyên tâm) + 門 (Môn - Cánh cửa)",
        "story": "Cánh cửa (Môn) chuyên tâm (Chuyên) về một lĩnh vực là Chuyên môn.",
        "examples": "専門 (Chuyên môn)"
      }
    },
    {
      "id": "L15_14",
      "word": "歯医者",
      "reading": "はいしゃ",
      "romaji": "haisha",
      "meaning": "Nha sĩ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "XỈ Y GIẢ",
        "components": "歯 (Xỉ - Răng) + 医者 (Y giả - Bác sĩ)",
        "story": "Bác sĩ (Y giả) chữa răng (Xỉ) là Nha sĩ.",
        "examples": "歯医者 (Nha sĩ)"
      }
    },
    {
      "id": "L15_15",
      "word": "床屋",
      "reading": "とこや",
      "romaji": "tokoya",
      "meaning": "Hiệu cắt tóc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SÀNG ỐC",
        "components": "床 (Sàng - Giường/Sàn) + 屋 (Ốc - Cửa hàng)",
        "story": "Cửa hàng (Ốc) có cái sàn (Sàng) chuyên để cắt tóc (Hiệu cắt tóc nam).",
        "examples": "床屋 (Hiệu cắt tóc)"
      }
    },
    {
      "id": "L15_16",
      "word": "独身",
      "reading": "どくしん",
      "romaji": "dokushin",
      "meaning": "Độc thân",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘC THÂN",
        "components": "独 (Độc - Đơn độc) + 身 (Thân - Thân thể)",
        "story": "Thân thể (Thân) chỉ có một mình đơn lẻ (Độc) là Độc thân.",
        "examples": "独身 (Độc thân)"
      }
    },
    {
      "id": "L15_17",
      "word": "特に",
      "reading": "とくに",
      "romaji": "tokuni",
      "meaning": "Đặc biệt",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẶC",
        "components": "牛 (Ngưu - Con bò) + 寺 (Tự - Ngôi chùa)",
        "story": "Con bò (Ngưu) sống trong chùa (Tự) là rất Đặc biệt.",
        "examples": "特に (Đặc biệt)"
      }
    },
    {
      "id": "L15_18",
      "word": "思い出します",
      "reading": "おもいだします",
      "romaji": "omoidashimasu",
      "meaning": "Nhớ lại",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TƯ XUẤT",
        "components": "思 (Tư - Suy nghĩ) + 出 (Xuất - Ra)",
        "story": "Suy nghĩ (Tư) xuất hiện ra (Xuất) trong đầu là Nhớ lại.",
        "examples": "思い出します (Nhớ lại)"
      }
    },
    {
      "id": "L15_19",
      "word": "ご家族",
      "reading": "ごかぞく",
      "romaji": "gokazoku",
      "meaning": "Gia đình (người khác)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIA TỘC",
        "components": "家 (Gia) + 族 (Tộc)",
        "story": "Gia đình của người khác.",
        "examples": "ご家族 (Gia đình (người khác))"
      }
    },
    {
      "id": "L15_20",
      "word": "高校",
      "reading": "こうこう",
      "romaji": "koukou",
      "meaning": "Trường cấp 3",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CAO HIỆU",
        "components": "高 (Cao - Cao lớn) + 校 (Hiệu - Trường học)",
        "story": "Trường học (Hiệu) cấp cao (Cao) là Trường cấp 3.",
        "examples": "高校 (Trường cấp 3)"
      }
    },
    {
      "id": "L15_21",
      "word": "いらっしゃいます",
      "reading": "いらっしゃいます",
      "romaji": "irasshaimasu",
      "meaning": "Có (kính ngữ của imasu)",
      "type": "Động từ"
    },
    {
      "id": "L15_22",
      "word": "プレイガイド",
      "reading": "プレイガイド",
      "romaji": "pureigaido",
      "meaning": "Quầy bán vé",
      "type": "Danh từ"
    },
    {
      "id": "L15_23",
      "word": "経済",
      "reading": "けいざい",
      "romaji": "keizai",
      "meaning": "Kinh tế",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KINH TẾ",
        "components": "経 (Kinh - Kinh tuyến/Trải qua) + 済 (Tế - Cứu tế/Xong)",
        "story": "Trải qua (Kinh) quá trình để tạo ra của cải là Kinh tế.",
        "examples": "経済 (Kinh tế)"
      }
    },
    {
      "id": "L15_24",
      "word": "市役所",
      "reading": "しやくしょ",
      "romaji": "shiyakusho",
      "meaning": "Tòa thị chính",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỊ DỊCH SỞ",
        "components": "市 (Thị - Thành phố) + 役 (Dịch - Vai trò) + 所 (Sở - Nơi)",
        "story": "Nơi (Sở) đóng vai trò (Dịch) quản lý thành phố (Thị) là Tòa thị chính.",
        "examples": "市役所 (Tòa thị chính)"
      }
    },
    {
      "id": "L15_25",
      "word": "皆",
      "reading": "みな",
      "romaji": "mina",
      "meaning": "Mọi người",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "GIAI",
        "components": "比 (Tỷ - So sánh) + 白 (Bạch - Trắng)",
        "story": "Mọi người (Giai) đều so sánh (Tỷ) để nói lên điều rõ ràng (Bạch).",
        "examples": "皆 (Mọi người)"
      }
    },
    {
      "id": "L15_26",
      "word": "皆さん",
      "reading": "みなさん",
      "romaji": "minasan",
      "meaning": "Các bạn, mọi người (lịch sự)",
      "type": "Đại từ",
      "kanjiBreakdown": {
        "hanviet": "GIAI",
        "components": "皆 (Giai)",
        "story": "Cách gọi lịch sự của Mọi người.",
        "examples": "皆さん (Các bạn, mọi người)"
      }
    }
  ],
  "readings": readings,
  
};

export default lesson;
