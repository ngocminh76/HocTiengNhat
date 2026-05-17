import { NihongoLesson } from './types';
import { readings } from '../readings/reading10';

const lesson: NihongoLesson = {
  "id": 10,
  "chapter": "第10課",
  "title": "あそこにあります",
  "titleVn": "Bài 10: Có ở đằng kia",
  "theme": "Sự tồn tại · Vị trí đồ vật và con người",
  "words": [
    {
      "id": "L10_01",
      "word": "あります",
      "reading": "あります",
      "romaji": "arimasu",
      "meaning": "Có (đồ vật, cây cối)",
      "type": "Động từ"
    },
    {
      "id": "L10_02",
      "word": "います",
      "reading": "います",
      "romaji": "imasu",
      "meaning": "Có (người, động vật)",
      "type": "Động từ"
    },
    {
      "id": "L10_03",
      "word": "男の人",
      "reading": "おとこのひと",
      "romaji": "otoko no hito",
      "meaning": "Người đàn ông",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NAM NHÂN",
        "components": "男 (Nam) + 人 (Nhân)",
        "story": "Người (人) làm việc ngoài đồng ruộng (田) bằng sức lực (力) là người Đàn ông (Nam).",
        "examples": "男 (Đàn ông)"
      }
    },
    {
      "id": "L10_04",
      "word": "女の人",
      "reading": "おんなのひと",
      "romaji": "onna no hito",
      "meaning": "Người phụ nữ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NỮ NHÂN",
        "components": "女 (Nữ) + 人 (Nhân)",
        "story": "Hình dáng người phụ nữ (女) đang quỳ gối dang tay.",
        "examples": "女 (Phụ nữ)"
      }
    },
    {
      "id": "L10_05",
      "word": "男の子",
      "reading": "おとこのこ",
      "romaji": "otoko no ko",
      "meaning": "Bé trai",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NAM TỬ",
        "components": "男 (Nam) + 子 (Tử)",
        "story": "Đứa trẻ (Tử) mang giới tính Nam.",
        "examples": "男の子 (Bé trai)"
      }
    },
    {
      "id": "L10_06",
      "word": "女の子",
      "reading": "おんなのこ",
      "romaji": "onna no ko",
      "meaning": "Bé gái",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NỮ TỬ",
        "components": "女 (Nữ) + 子 (Tử)",
        "story": "Đứa trẻ (Tử) mang giới tính Nữ.",
        "examples": "女の子 (Bé gái)"
      }
    },
    {
      "id": "L10_07",
      "word": "犬",
      "reading": "いぬ",
      "romaji": "inu",
      "meaning": "Con chó",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KHUYỂN",
        "components": "犬 = 大 (Đại) + 丶 (Chấm)",
        "story": "Con chó (犬) là loài vật to lớn (大) hơn con mèo một chút (丶).",
        "examples": "犬 (Con chó)"
      }
    },
    {
      "id": "L10_08",
      "word": "猫",
      "reading": "ねこ",
      "romaji": "neko",
      "meaning": "Con mèo",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MIÊU",
        "components": "猫 = 犭 (Khuyển - Chó/Động vật) + 苗 (Miêu - Mầm cây)",
        "story": "Loài động vật (犭) kêu meo meo nghe như chữ Miêu (苗) là con MÈO.",
        "examples": "猫 (Con mèo)"
      }
    },
    {
      "id": "L10_09",
      "word": "木",
      "reading": "き",
      "romaji": "ki",
      "meaning": "Cây, gỗ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MỘC",
        "components": "木 = Trực quan",
        "story": "Hình dáng một cái cây với thân và các nhánh rễ đâm xuống đất.",
        "examples": "木 (Cây)"
      }
    },
    {
      "id": "L10_10",
      "word": "物",
      "reading": "もの",
      "romaji": "mono",
      "meaning": "Đồ vật, vật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "VẬT",
        "components": "物 = 牛 (Ngưu - Con bò) + 勿 (Vật - Không)",
        "story": "Con bò (牛) là một loài ĐỘNG VẬT (Vật) không (勿) thể thiếu của nhà nông.",
        "examples": "動物 (Động vật), 荷物 (Hành lý)"
      }
    },
    {
      "id": "L10_11",
      "word": "箱",
      "reading": "はこ",
      "romaji": "hako",
      "meaning": "Cái hộp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TƯƠNG",
        "components": "箱 = 竹 (Trúc) + 相 (Tương - Nhìn nhau)",
        "story": "Dùng tre trúc (竹) đan thành cái HỘP (Tương) để đựng đồ cho nhau.",
        "examples": "箱 (Cái hộp)"
      }
    },
    {
      "id": "L10_12",
      "word": "冷蔵庫",
      "reading": "れいぞうこ",
      "romaji": "reizouko",
      "meaning": "Tủ lạnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LÃNH TÀNG KHỐ",
        "components": "冷 (Lãnh - Lạnh) + 蔵 (Tàng - Tàng trữ) + 庫 (Khố - Kho chứa)",
        "story": "Kho chứa (Khố) để tàng trữ (Tàng) đồ ăn ở nhiệt độ lạnh (Lãnh) là Tủ lạnh.",
        "examples": "冷蔵庫 (Tủ lạnh)"
      }
    },
    {
      "id": "L10_13",
      "word": "ベッド",
      "reading": "ベッド",
      "romaji": "beddo",
      "meaning": "Cái giường",
      "type": "Danh từ"
    },
    {
      "id": "L10_14",
      "word": "テーブル",
      "reading": "テーブル",
      "romaji": "teeburu",
      "meaning": "Cái bàn",
      "type": "Danh từ"
    },
    {
      "id": "L10_15",
      "word": "棚",
      "reading": "たな",
      "romaji": "tana",
      "meaning": "Giá sách, kệ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BẰNG",
        "components": "木 (Mộc - Gỗ) + 朋 (Bằng - Bạn bè)",
        "story": "Lấy gỗ (Mộc) đóng thành cái giá/kệ để cất quà của bạn bè (Bằng).",
        "examples": "棚 (Giá/Kệ)"
      }
    },
    {
      "id": "L10_16",
      "word": "ドア",
      "reading": "ドア",
      "romaji": "doa",
      "meaning": "Cửa ra vào",
      "type": "Danh từ"
    },
    {
      "id": "L10_17",
      "word": "窓",
      "reading": "まど",
      "romaji": "mado",
      "meaning": "Cửa sổ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SONG",
        "components": "穴 (Huyệt - Cái hố) + 厶 (Khư - Riêng tư) + 心 (Tâm - Trái tim)",
        "story": "Khoét một cái hố (Huyệt) trên tường để mang lại tâm trạng (Tâm) thư thái riêng tư (Khư) là Cửa sổ.",
        "examples": "窓 (Cửa sổ)"
      }
    },
    {
      "id": "L10_18",
      "word": "ポスト",
      "reading": "ポスト",
      "romaji": "posuto",
      "meaning": "Hộp thư",
      "type": "Danh từ"
    },
    {
      "id": "L10_19",
      "word": "ビル",
      "reading": "ビル",
      "romaji": "biru",
      "meaning": "Tòa nhà",
      "type": "Danh từ"
    },
    {
      "id": "L10_20",
      "word": "公園",
      "reading": "こうえん",
      "romaji": "kouen",
      "meaning": "Công viên",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CÔNG VIÊN",
        "components": "公 (Công - Công cộng) + 園 (Viên - Vườn)",
        "story": "Khu vườn (Viên) dành cho mục đích công cộng (Công) là CÔNG VIÊN.",
        "examples": "公園 (Công viên)"
      }
    },
    {
      "id": "L10_21",
      "word": "喫茶店",
      "reading": "きっさてん",
      "romaji": "kissaten",
      "meaning": "Quán giải khát, quán cafe",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KHIẾT TRÀ ĐIẾM",
        "components": "喫 (Khiết - Hút/Uống) + 茶 (Trà) + 店 (Điếm)",
        "story": "Quán giải khát/Cà phê.",
        "examples": "喫茶店 (Quán cà phê)"
      }
    },
    {
      "id": "L10_22",
      "word": "本屋",
      "reading": "ほんや",
      "romaji": "honya",
      "meaning": "Hiệu sách",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BẢN ỐC",
        "components": "本 (Bản - Sách) + 屋 (Ốc - Cửa tiệm/Mái nhà)",
        "story": "Cửa tiệm (Ốc) chuyên bán sách (Bản) là HIỆU SÁCH.",
        "examples": "本屋 (Hiệu sách)"
      }
    },
    {
      "id": "L10_23",
      "word": "乗り場",
      "reading": "のりば",
      "romaji": "noriba",
      "meaning": "Bến xe, điểm lên xe",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỪA TRƯỜNG",
        "components": "乗 (Thừa) + 場 (Trường)",
        "story": "Bến xe/Nơi lên tàu xe.",
        "examples": "乗り場 (Bến xe)"
      }
    },
    {
      "id": "L10_24",
      "word": "中",
      "reading": "なか",
      "romaji": "naka",
      "meaning": "Trong, bên trong",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRUNG",
        "components": "中 = 口 (Khẩu - Miệng) + 丨 (Sổ)",
        "story": "Một mũi tên bắn xuyên TRÚNG vào chính GIỮA (Trung) cái hồng tâm (口).",
        "examples": "中 (Bên trong)"
      }
    },
    {
      "id": "L10_25",
      "word": "外",
      "reading": "そと",
      "romaji": "soto",
      "meaning": "Ngoài, bên ngoài",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGOẠI",
        "components": "外 = 夕 (Tịch - Buổi chiều) + 卜 (Bốc - Bói toán)",
        "story": "Vào buổi chiều tà (夕), người ta ra BÊN NGOÀI (Ngoại) để xem bói (卜).",
        "examples": "外 (Bên ngoài), 外国 (Nước ngoài)"
      }
    },
    {
      "id": "L10_26",
      "word": "隣",
      "reading": "となり",
      "romaji": "tonari",
      "meaning": "Bên cạnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "LÂN",
        "components": "阝 (Phụ) + 粦 (Lân)",
        "story": "Hàng xóm bên cạnh.",
        "examples": "隣 (Bên cạnh)"
      }
    },
    {
      "id": "L10_27",
      "word": "近く",
      "reading": "ちかく",
      "romaji": "chikaku",
      "meaning": "Gần",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CẬN",
        "components": "近 (Cận)",
        "story": "Gần đây.",
        "examples": "近く (Gần)"
      }
    },
    {
      "id": "L10_28",
      "word": "間",
      "reading": "あいだ",
      "romaji": "aida",
      "meaning": "Giữa, ở giữa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIAN",
        "components": "門 (Môn) + 日 (Nhật)",
        "story": "Mặt trời rọi qua khe cửa (Ở giữa).",
        "examples": "間 (Ở giữa)"
      }
    },
    {
      "id": "L10_29",
      "word": "～や～など",
      "reading": "～や～など",
      "romaji": "~ya~nado",
      "meaning": "~ và ~ v.v...",
      "type": "Mẫu câu"
    },
    {
      "id": "L10_30",
      "word": "いろいろ（な）",
      "reading": "いろいろ",
      "romaji": "iroiro",
      "meaning": "Nhiều, đa dạng",
      "type": "Tính từ đuôi na",
      "kanjiBreakdown": {
        "hanviet": "N/A",
        "components": "Không có Kanji ở N5",
        "story": "Nhiều loại, đa dạng.",
        "examples": "いろいろ (Nhiều loại)"
      }
    },
    {
      "id": "L10_31",
      "word": "フィルム",
      "reading": "フィルム",
      "romaji": "firumu",
      "meaning": "Phim",
      "type": "Danh từ"
    },
    {
      "id": "L10_32",
      "word": "電池",
      "reading": "でんち",
      "romaji": "denchi",
      "meaning": "Pin",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỆN TRÌ",
        "components": "電 (Điện) + 池 (Trì - Cái ao)",
        "story": "Cái ao (Trì) chứa đầy năng lượng điện (Điện) chính là Cục pin.",
        "examples": "電池 (Pin)"
      }
    },
    {
      "id": "L10_33",
      "word": "スイッチ",
      "reading": "スイッチ",
      "romaji": "suicchi",
      "meaning": "Công tắc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SWITCH",
        "components": "Từ ngoại lai",
        "story": "Công tắc.",
        "examples": "スイッチ (Công tắc)"
      }
    },
    {
      "id": "L10_34",
      "word": "パンダ",
      "reading": "パンダ",
      "romaji": "panda",
      "meaning": "Gấu trúc",
      "type": "Danh từ"
    },
    {
      "id": "L10_35",
      "word": "象",
      "reading": "ぞう",
      "romaji": "zou",
      "meaning": "Con voi",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TƯỢNG",
        "components": "象 = Trực quan",
        "story": "Hình tượng con voi với cái vòi dài và cặp ngà.",
        "examples": "象 (Con voi)"
      }
    },
    {
      "id": "L10_36",
      "word": "上",
      "reading": "うえ",
      "romaji": "ue",
      "meaning": "Trên, bên trên",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THƯỢNG",
        "components": "上 = Trực quan",
        "story": "Đường nét chỉ hướng lên trên mặt phẳng ngang.",
        "examples": "上 (Bên trên)"
      }
    },
    {
      "id": "L10_37",
      "word": "下",
      "reading": "した",
      "romaji": "shita",
      "meaning": "Dưới, bên dưới",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HẠ",
        "components": "下 = Trực quan",
        "story": "Đường nét chỉ hướng xuống dưới mặt phẳng ngang.",
        "examples": "下 (Bên dưới)"
      }
    },
    {
      "id": "L10_38",
      "word": "前",
      "reading": "まえ",
      "romaji": "mae",
      "meaning": "Trước, phía trước",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TIỀN",
        "components": "前 = 䒑 (Thảo) + 月 (Nguyệt) + 刂 (Đao)",
        "story": "Dùng đao (刂) cắt cỏ (䒑) dưới ánh trăng (月) trước nhà.",
        "examples": "前 (Phía trước), 午前 (Buổi sáng)"
      }
    },
    {
      "id": "L10_39",
      "word": "後ろ",
      "reading": "うしろ",
      "romaji": "ushiro",
      "meaning": "Sau, phía sau",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HẬU",
        "components": "後 = 彳 (Sách - Đi bộ) + 幺 (Yêu - Nhỏ) + 夂 (Truy - Theo sau)",
        "story": "Bước đi (彳) chầm chậm theo phía SAU (Hậu).",
        "examples": "後ろ (Phía sau), 午後 (Buổi chiều)"
      }
    },
    {
      "id": "L10_40",
      "word": "右",
      "reading": "みぎ",
      "romaji": "migi",
      "meaning": "Phải, bên phải",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỮU",
        "components": "右 = 𠂇 (Tay trái) + 口 (Khẩu)",
        "story": "Tay cầm thìa đưa cơm vào miệng (口) là tay PHẢI.",
        "examples": "右 (Bên phải)"
      }
    },
    {
      "id": "L10_41",
      "word": "左",
      "reading": "ひだり",
      "romaji": "hidari",
      "meaning": "Trái, bên trái",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẢ",
        "components": "左 = 𠂇 (Tay trái) + 工 (Công - Công cụ)",
        "story": "Tay cầm công cụ (工) làm việc phụ trợ là tay TRÁI.",
        "examples": "左 (Bên trái)"
      }
    },
    {
      "id": "L10_42",
      "word": "県",
      "reading": "けん",
      "romaji": "ken",
      "meaning": "Tỉnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HUYỆN",
        "components": "県 = 目 (Mục - Mắt) + 小 (Tiểu - Nhỏ)",
        "story": "Khu vực quản lý của tỉnh (Nhật Bản dùng chữ Huyện để chỉ Tỉnh).",
        "examples": "県 (Tỉnh)"
      }
    },
    {
      "id": "L10_43",
      "word": "コンビニ",
      "reading": "コンビニ",
      "romaji": "konbini",
      "meaning": "Cửa hàng tiện lợi",
      "type": "Danh từ"
    },
    {
      "id": "L10_44",
      "word": "ATM",
      "reading": "エーティーエム",
      "romaji": "eetiiemu",
      "meaning": "Máy rút tiền tự động",
      "type": "Danh từ"
    },
    {
      "id": "L10_45",
      "word": "奥",
      "reading": "おく",
      "romaji": "oku",
      "meaning": "Bên trong cùng, phía sâu bên trong",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ÁO",
        "components": "奥 = 冂 (Quynh - Không gian) + 米 (Mễ - Gạo) + 大 (Đại - To lớn)",
        "story": "Không gian (冂) sâu thẳm giấu bao tải gạo (米) to lớn (大) nằm tuốt ở bên trong cùng (Áo).",
        "examples": "奥 (Bên trong cùng), 奥さん (Vợ người khác)"
      }
    },
    {
      "id": "L10_46",
      "word": "いちばん",
      "reading": "いちばん",
      "romaji": "ichiban",
      "meaning": "~ nhất (ví dụ: trên cùng, dưới cùng)",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "NHẤT PHIÊN",
        "components": "一 (Nhất) + 番 (Phiên)",
        "story": "Số 1, xếp vị trí thứ nhất.",
        "examples": "いちばん上 (Trên cùng)"
      }
    },
    {
      "id": "L10_47",
      "word": "～段目",
      "reading": "～だんめ",
      "romaji": "~danme",
      "meaning": "Tầng thứ ~, giá thứ ~",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "ĐOẠN MỤC",
        "components": "段 (Đoạn - Bậc thang) + 目 (Mục - Thứ tự)",
        "story": "Chỉ số thứ tự của các tầng, giá đựng đồ.",
        "examples": "三段目 (Tầng thứ 3)"
      }
    },
    {
      "id": "L10_48",
      "word": "チリソース",
      "reading": "チリソース",
      "romaji": "chirisoozu",
      "meaning": "Tương ớt (Chili sauce)",
      "type": "Danh từ"
    },
    {
      "id": "L10_49",
      "word": "スパイス・コーナー",
      "reading": "スパイス・コーナー",
      "romaji": "supaisu koonaa",
      "meaning": "Góc gia vị (Spice corner)",
      "type": "Danh từ"
    }
  ],
  "grammar": [
    {
      "title": "N が あります / います",
      "structure": "N(chủ thể) が あります / います",
      "usage": "Dùng để diễn tả sự hiện hữu, tồn tại. あります dùng cho đồ vật vô tri vô giác, cây cối. います dùng cho con người và động vật (những vật có thể tự chuyển động).",
      "examples": [
        {
          "jp": "つくえが あります。",
          "romaji": "tsukue ga arimasu.",
          "vn": "Có cái bàn."
        },
        {
          "jp": "いぬが います。",
          "romaji": "inu ga imasu.",
          "vn": "Có con chó."
        }
      ]
    },
    {
      "title": "Ở [Địa điểm] có [N]",
      "structure": "N1(địa điểm) に N2(vật/người) が あります/います",
      "usage": "Mô tả một vật/người đang tồn tại ở một địa điểm nào đó. Trợ từ に dùng để chỉ địa điểm tồn tại (khác với で chỉ địa điểm xảy ra hành động). Câu hỏi: なにが ありますか (Có gì?) / だれが いますか (Có ai?).",
      "examples": [
        {
          "jp": "わたしの へやに つくえが あります。",
          "romaji": "watashi no heya ni tsukue ga arimasu.",
          "vn": "Trong phòng tôi có cái bàn."
        },
        {
          "jp": "じむしょに やまださんが います。",
          "romaji": "jimusho ni yamada san ga imasu.",
          "vn": "Ở văn phòng có anh Yamada."
        }
      ]
    },
    {
      "title": "[N] ở [Địa điểm]",
      "structure": "N1(vật/người) は N2(địa điểm) に あります/います",
      "usage": "Đưa vật hoặc người lên làm chủ đề của câu (dùng は) để nói xem nó đang nằm ở đâu. Thường dùng khi cả người nói và người nghe đã biết về đối tượng đó. Câu hỏi: N1 は どこに ありますか/いますか.",
      "examples": [
        {
          "jp": "とうきょうディズニーランドは ちばけんに あります。",
          "romaji": "toukyou dizuniirando wa chibaken ni arimasu.",
          "vn": "Tokyo Disneyland ở tỉnh Chiba."
        },
        {
          "jp": "やまださんは どこですか。 ...じむしょに いますよ。",
          "romaji": "yamada san wa doko desu ka. ...jimusho ni imasu yo.",
          "vn": "Anh Yamada ở đâu? ...Anh ấy ở văn phòng đó."
        }
      ]
    },
    {
      "title": "Danh từ chỉ vị trí",
      "structure": "N1(vật mốc) の N2(vị trí)",
      "usage": "Các danh từ chỉ vị trí gồm: 上 (うえ: trên), 下 (した: dưới), 前 (まえ: trước), 後ろ (うしろ: sau), 右 (みぎ: phải), 左 (ひだり: trái), 中 (なか: trong), 外 (そと: ngoài), 隣 (となり: bên cạnh), 近く (ちかく: gần), 間 (あいだ: ở giữa). Chú ý cụm N1 の N2 ngược với tiếng Việt.",
      "examples": [
        {
          "jp": "つくえの うえに しゃしんが あります。",
          "romaji": "tsukue no ue ni shashin ga arimasu.",
          "vn": "Trên bàn có tấm ảnh."
        },
        {
          "jp": "ぎんこうと ゆうびんきょくの あいだ",
          "romaji": "ginkou to yuubinkyoku no aida",
          "vn": "Ở giữa ngân hàng và bưu điện."
        }
      ]
    },
    {
      "title": "Liệt kê N1 や N2",
      "structure": "N1 や N2 (など)",
      "usage": "Khác với と (liệt kê toàn bộ), や dùng để liệt kê tượng trưng vài vật tiêu biểu (N1, N2 và một số thứ khác). Có thể dùng kèm など ở cuối để nhấn mạnh 'vân vân'.",
      "examples": [
        {
          "jp": "はこの なかに てがみや しゃしんが あります。",
          "romaji": "hako no naka ni tegami ya shashin ga arimasu.",
          "vn": "Trong hộp có bức thư, tấm ảnh..."
        },
        {
          "jp": "はこの なかに てがみや しゃしんなどが あります。",
          "romaji": "hako no naka ni tegami ya shashin nado ga arimasu.",
          "vn": "Trong hộp có bức thư, tấm ảnh v.v..."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "部屋(へや)に 机(つくえ)が [blank]。",
      "options": ["あります", "います", "します", "きます"],
      "answer": "あります",
      "vn": "Trong phòng có cái bàn.",
      "explanation": "机 (cái bàn) là đồ vật vô tri vô giác, phải dùng あります."
    },
    {
      "question": "庭(にわ)に 犬(いぬ)が [blank]。",
      "options": ["います", "あります", "します", "きます"],
      "answer": "います",
      "vn": "Ngoài sân có con chó.",
      "explanation": "犬 (con chó) là động vật có thể tự chuyển động, phải dùng います."
    },
    {
      "question": "机(つくえ)の 上(うえ) [blank] ほんが あります。",
      "options": ["に", "で", "を", "へ"],
      "answer": "に",
      "vn": "Trên bàn có quyển sách.",
      "explanation": "Chỉ địa điểm tồn tại, hiện hữu của sự vật dùng trợ từ に."
    },
    {
      "question": "事務所(じむしょ)に [blank] が いますか。 ...先生が います。",
      "options": ["だれ", "なに", "どこ", "いつ"],
      "answer": "だれ",
      "vn": "Ở văn phòng có ai? ...Có giáo viên.",
      "explanation": "Câu trả lời là người (先生) nên câu hỏi phải dùng だれ (Ai)."
    },
    {
      "question": "箱(はこ)の 中(なか)に [blank] が ありますか。 ...手紙(てがみ)が あります。",
      "options": ["なに", "だれ", "どこ", "いつ"],
      "answer": "なに",
      "vn": "Trong hộp có cái gì? ...Có bức thư.",
      "explanation": "Câu trả lời là đồ vật (手紙) nên câu hỏi phải dùng なに (Cái gì)."
    },
    {
      "question": "山田(やまだ)さん [blank] どこに いますか。 ...事務所(じむしょ)に います。",
      "options": ["は", "が", "に", "を"],
      "answer": "は",
      "vn": "Anh Yamada ở đâu? ...Anh ấy ở văn phòng.",
      "explanation": "Đưa đối tượng (山田さん) lên làm chủ đề để hỏi vị trí thì dùng trợ từ は."
    },
    {
      "question": "山田さんは どこに いますか。 ...事務所(じむしょ) [blank]。",
      "options": ["です", "に", "にいますです", "がいます"],
      "answer": "です",
      "vn": "Anh Yamada ở đâu? ...Ở văn phòng.",
      "explanation": "Trong văn nói có thể rút gọn cụm '事務所に います' thành '事務所です'."
    },
    {
      "question": "カバンは 机(つくえ) [blank] 下(した)に あります。",
      "options": ["の", "に", "が", "は"],
      "answer": "の",
      "vn": "Cặp sách nằm ở dưới cái bàn.",
      "explanation": "Danh từ chỉ mốc (机) nối với danh từ chỉ vị trí (下) bằng trợ từ の (N1 の N2)."
    },
    {
      "question": "カバンの 中(なか)に ほん [blank] ペンが あります。",
      "options": ["や", "で", "に", "を"],
      "answer": "や",
      "vn": "Trong cặp có quyển sách, cái bút...",
      "explanation": "Liệt kê tượng trưng, không liệt kê toàn bộ dùng trợ từ や (N1 や N2)."
    },
    {
      "question": "カバンの 中に ほんや ペン [blank] が あります。",
      "options": ["など", "から", "まで", "で"],
      "answer": "など",
      "vn": "Trong cặp có quyển sách, cái bút, vân vân.",
      "explanation": "Thêm など (vân vân) sau danh từ cuối cùng của cụm liệt kê bằng や."
    },
    {
      "question": "銀行(ぎんこう)の 前(まえ) [blank] 郵便局(ゆうびんきょく)が あります。",
      "options": ["に", "で", "を", "へ"],
      "answer": "に",
      "vn": "Trước ngân hàng có bưu điện.",
      "explanation": "Địa điểm tồn tại dùng trợ từ に (N に N が あります)."
    },
    {
      "question": "近くに 喫茶店(きっさてん)は [blank]。",
      "options": ["ありませんか", "いませんか", "ないですか", "いないですか"],
      "answer": "ありませんか",
      "vn": "Gần đây có quán nước nào không?",
      "explanation": "Dùng dạng phủ định ありませんか để hỏi lịch sự (tương tự như 'Chẳng hay có... không ạ?'). Vì quán nước là vật vô tri nên dùng ありませんか."
    },
    {
      "question": "銀行(ぎんこう)の [blank] に 郵便局(ゆうびんきょく)が あります。(Sát vách)",
      "options": ["隣(となり)", "上(うえ)", "中(なか)", "間(あいだ)"],
      "answer": "隣(となり)",
      "vn": "Bên cạnh ngân hàng có bưu điện.",
      "explanation": "隣 (となり) chỉ vị trí sát cạnh bên (thường dùng cho các công trình hoặc người cùng một hàng)."
    },
    {
      "question": "銀行(ぎんこう) [blank] スーパーの 間(あいだ)に パン屋(や)が あります。",
      "options": ["と", "や", "に", "の"],
      "answer": "と",
      "vn": "Giữa ngân hàng và siêu thị có tiệm bánh mì.",
      "explanation": "Cấu trúc: N1 と N2 の あいだ に (Ở giữa N1 và N2)."
    },
    {
      "question": "教室(きょうしつ)に だれ [blank] いません。",
      "options": ["も", "か", "が", "は"],
      "answer": "も",
      "vn": "Trong phòng học không có ai cả.",
      "explanation": "Từ để hỏi + も + phủ định: mang nghĩa phủ định hoàn toàn (Không ai cả, không cái gì cả...)."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "上、下、中、外",
    "titleVn": "📦 Trên, Dưới, Trong, Ngoài",
    "intro": "Tóm tắt từ vựng miêu tả vị trí không gian và các sinh vật/đồ vật xung quanh của Bài 10.",
    "lines": [
      {
        "kanji": "箱の中に何がありますか？",
        "jp": "はこの なかに なにが ありますか？",
        "romaji": "Hako no naka ni nani ga arimasu ka?",
        "vn": "Trong chiếc hộp có cái gì?",
        "note": "箱 · 中"
      },
      {
        "kanji": "本や時計などがあります。",
        "jp": "ほんや とけいなどが あります。",
        "romaji": "Hon ya tokei nado ga arimasu.",
        "vn": "Có sách và đồng hồ v.v...",
        "note": "～や～など"
      },
      {
        "kanji": "木の下にだれがいますか？",
        "jp": "きの したに だれが いますか？",
        "romaji": "Ki no shita ni dare ga imasu ka?",
        "vn": "Dưới gốc cây có ai ở đó?",
        "note": "木 · 下"
      },
      {
        "kanji": "男の子と犬がいます。",
        "jp": "おとこのこと いぬが います。",
        "romaji": "Otoko no ko to inu ga imasu.",
        "vn": "Có một bé trai và một chú chó.",
        "note": "男の子 · 犬"
      },
      {
        "kanji": "本屋はどこにありますか？",
        "jp": "ほんやは どこに ありますか？",
        "romaji": "Honya wa doko ni arimasu ka?",
        "vn": "Hiệu sách nằm ở chỗ nào vậy?",
        "note": "本屋"
      },
      {
        "kanji": "銀行と喫茶店の間です！",
        "jp": "ぎんこうと きっさてんの あいだ です！",
        "romaji": "Ginkou to kissaten no aida desu!",
        "vn": "Nó nằm giữa ngân hàng và quán cafe!",
        "note": "間"
      }
    ]
  }
};

export default lesson;
