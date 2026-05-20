import { NihongoLesson } from './types';
import { readings } from '../readings/reading3';

const lesson: NihongoLesson = {
  "id": 3,
  "chapter": "第3課",
  "title": "ここはどこですか",
  "titleVn": "Bài 3: Đây là ở đâu?",
  "theme": "Địa điểm · Tầng · Phương hướng",
  "words": [
    {
      "id": "L3_01",
      "word": "ここ",
      "reading": "ここ",
      "romaji": "koko",
      "meaning": "Đây, chỗ này",
      "type": "Đại từ"
    },
    {
      "id": "L3_02",
      "word": "そこ",
      "reading": "そこ",
      "romaji": "soko",
      "meaning": "Đó, chỗ đó",
      "type": "Đại từ"
    },
    {
      "id": "L3_03",
      "word": "あそこ",
      "reading": "あそこ",
      "romaji": "asoko",
      "meaning": "Kia, chỗ kia",
      "type": "Đại từ"
    },
    {
      "id": "L3_04",
      "word": "どこ",
      "reading": "どこ",
      "romaji": "doko",
      "meaning": "Ở đâu?",
      "type": "Đại từ"
    },
    {
      "id": "L3_04a",
      "word": "こちら",
      "reading": "こちら",
      "romaji": "kochira",
      "meaning": "Phía này, đằng này, chỗ này (cách nói lịch sự của ここ)",
      "type": "Đại từ"
    },
    {
      "id": "L3_04b",
      "word": "そちら",
      "reading": "そちら",
      "romaji": "sochira",
      "meaning": "Phía đó, đằng đó, chỗ đó (cách nói lịch sự của そこ)",
      "type": "Đại từ"
    },
    {
      "id": "L3_04c",
      "word": "あちら",
      "reading": "あちら",
      "romaji": "achira",
      "meaning": "Phía kia, đằng kia, chỗ kia (cách nói lịch sự của あそこ)",
      "type": "Đại từ"
    },
    {
      "id": "L3_04d",
      "word": "どちら",
      "reading": "どちら",
      "romaji": "dochira",
      "meaning": "Phía nào, đằng nào, chỗ nào (cách nói lịch sự của どこ)",
      "type": "Đại từ"
    },
    {
      "id": "L3_05",
      "word": "デパート",
      "reading": "デパート",
      "romaji": "depaato",
      "meaning": "Trung tâm thương mại",
      "type": "Danh từ"
    },
    {
      "id": "L3_06",
      "word": "スーパー",
      "reading": "スーパー",
      "romaji": "suupaa",
      "meaning": "Siêu thị",
      "type": "Danh từ"
    },
    {
      "id": "L3_07",
      "word": "コンビニ",
      "reading": "コンビニ",
      "romaji": "konbini",
      "meaning": "Cửa hàng tiện lợi",
      "type": "Danh từ"
    },
    {
      "id": "L3_08",
      "word": "レストラン",
      "reading": "レストラン",
      "romaji": "resutoran",
      "meaning": "Nhà hàng",
      "type": "Danh từ"
    },
    {
      "id": "L3_09",
      "word": "銀行",
      "reading": "ぎんこう",
      "romaji": "ginkou",
      "meaning": "Ngân hàng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGÂN HÀNH",
        "components": "銀 (Ngân: Bộ Kim 金 vàng, cấn 艮) + 行 (Hành: đi lại)",
        "story": "Nơi có nhiều tiền vàng (Kim) được lưu thông đi lại (Hành) chính là Ngân Hàng.",
        "examples": "銀行 (Ngân hàng), 行く (Đi)"
      }
    },
    {
      "id": "L3_10",
      "word": "郵便局",
      "reading": "ゆうびんきょく",
      "romaji": "yuubinkyoku",
      "meaning": "Bưu điện",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BƯU TIỆN CỤC",
        "components": "郵 (Bưu - Thư tín) + 便 (Tiện - Tiện lợi) + 局 (Cục - Cơ quan)",
        "story": "Cơ quan (Cục) chuyên gửi thư tín (Bưu) một cách tiện lợi (Tiện) chính là Bưu Điện.",
        "examples": "郵便局 (Bưu điện), 郵便 (Bưu phẩm), 便利 (Tiện lợi)"
      }
    },
    {
      "id": "L3_11",
      "word": "ホテル",
      "reading": "ホテル",
      "romaji": "hoteru",
      "meaning": "Khách sạn",
      "type": "Danh từ"
    },
    {
      "id": "L3_12",
      "word": "駅",
      "reading": "えき",
      "romaji": "eki",
      "meaning": "Ga (tàu điện/xe lửa)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DỊCH",
        "components": "駅 = 馬 (Mã - Ngựa) + 尺 (Xích - Thước đo)",
        "story": "Ngày xưa, trạm dịch (Dịch) là nơi thay ngựa (Mã) cho hành trình dài. Ngày nay trạm dịch chính là ga tàu điện.",
        "examples": "駅 (Ga tàu), 駅前 (Trước ga), 東京駅 (Ga Tokyo)"
      }
    },
    {
      "id": "L3_13",
      "word": "階段",
      "reading": "かいだん",
      "romaji": "kaidan",
      "meaning": "Cầu thang",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIAI ĐOẠN",
        "components": "階 (Giai - Bậc/Tầng: 阝gò đất + 皆 đều) + 段 (Đoạn - Bậc/Đoạn)",
        "story": "Từng bậc (Giai) từng đoạn (Đoạn) leo lên cao dần — đó chính là cầu thang.",
        "examples": "階段 (Cầu thang), 〜階 (Tầng ~), 段階 (Giai đoạn)"
      }
    },
    {
      "id": "L3_14",
      "word": "エレベーター",
      "reading": "エレベーター",
      "romaji": "erebeetaa",
      "meaning": "Thang máy",
      "type": "Danh từ"
    },
    {
      "id": "L3_15",
      "word": "エスカレーター",
      "reading": "エスカレーター",
      "romaji": "esukareetaa",
      "meaning": "Thang cuốn",
      "type": "Danh từ"
    },
    {
      "id": "L3_15b",
      "word": "お国",
      "reading": "おくに",
      "romaji": "okuni",
      "meaning": "Đất nước",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "QUỐC",
        "components": "国 (Quốc)",
        "story": "Đất nước.",
        "examples": "お国 (Đất nước)"
      }
    },
    {
      "id": "L3_16",
      "word": "〜階",
      "reading": "〜かい",
      "romaji": "~kai",
      "meaning": "Tầng ~ (tầng 1, 2...)",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "GIAI",
        "components": "阝 (Phụ) + 皆 (Giai)",
        "story": "Tầng nhà.",
        "examples": "一階 (Tầng 1)"
      }
    },
    {
      "id": "L3_17",
      "word": "何階",
      "reading": "なんかい",
      "romaji": "nankai",
      "meaning": "Tầng mấy?",
      "type": "Từ hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ GIAI",
        "components": "何 (Hà - Cái gì/Mấy) + 階 (Giai - Tầng)",
        "story": "Tầng (Giai) thứ mấy (Hà)?",
        "examples": "何階 (Tầng mấy), 階段 (Cầu thang)"
      }
    },
    {
      "id": "L3_18",
      "word": "上",
      "reading": "うえ",
      "romaji": "ue",
      "meaning": "Trên, phía trên",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THƯỢNG",
        "components": "上 = 一 (Nhất - Mặt đất) + Nét sổ vươn lên phía trên",
        "story": "Nét sổ vươn LÊN TRÊN mặt đất (一), chỉ hướng THƯỢNG (phía trên). Ngược lại với 下.",
        "examples": "上 (Trên), 上手 (Giỏi), 以上 (Trở lên)"
      }
    },
    {
      "id": "L3_19",
      "word": "下",
      "reading": "した",
      "romaji": "shita",
      "meaning": "Dưới, phía dưới",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HẠ",
        "components": "下 = 一 (Nhất - Mặt đất) + Nét sổ chỉ xuống phía dưới",
        "story": "Nét sổ chỉ XUỐNG DƯỚI mặt đất (一), hướng HẠ (phía dưới). Ngược lại với 上.",
        "examples": "下 (Dưới), 地下鉄 (Tàu điện ngầm), 下手 (Kém)"
      }
    },
    {
      "id": "L3_20",
      "word": "右",
      "reading": "みぎ",
      "romaji": "migi",
      "meaning": "Phải, bên phải",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỮU",
        "components": "右 = ナ (Tay) + 口 (Khẩu - Miệng)",
        "story": "Tay (ナ) PHẢI cầm đồ ăn đưa vào miệng (口). Đa số người thuận tay phải, nên tay phải gắn với miệng.",
        "examples": "右 (Phải), 右手 (Tay phải), 右側 (Bên phải)"
      }
    },
    {
      "id": "L3_21",
      "word": "左",
      "reading": "ひだり",
      "romaji": "hidari",
      "meaning": "Trái, bên trái",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẢ",
        "components": "左 = ナ (Tay) + 工 (Công - Thợ/Dụng cụ)",
        "story": "Tay (ナ) TRÁI cầm dụng cụ (工) hỗ trợ khi tay phải làm việc chính. So sánh: 右 có 口 (miệng), 左 có 工 (dụng cụ).",
        "examples": "左 (Trái), 左手 (Tay trái), 左右 (Trái phải)"
      }
    },
    {
      "id": "L3_22",
      "word": "前",
      "reading": "まえ",
      "romaji": "mae",
      "meaning": "Trước, phía trước",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TIỀN",
        "components": "前 = 丷 (Bát - Chia) + 月 (Nguyệt - Thịt/Trăng) + 刂 (Đao - Dao)",
        "story": "Dùng dao (刂) cắt thịt (月) bày ra phía TRƯỚC mặt để chia (丷) cho mọi người ăn.",
        "examples": "前 (Trước), 名前 (Tên), 午前 (Buổi sáng), 駅前 (Trước ga)"
      }
    },
    {
      "id": "L3_23",
      "word": "後ろ",
      "reading": "うしろ",
      "romaji": "ushiro",
      "meaning": "Sau, phía sau",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HẬU",
        "components": "後 = 彳 (Xích - Bước nhỏ) + 幺 (Yêu - Nhỏ/Sợi) + 夊 (Suỵ - Đi chậm)",
        "story": "Bước đi (彳) chậm chạp (夊) lùi lại phía SAU, kéo lê sợi dây nhỏ (幺) theo sau lưng.",
        "examples": "後ろ (Phía sau), 午後 (Buổi chiều), 後で (Sau đó)"
      }
    },
    {
      "id": "L3_24",
      "word": "すみません",
      "reading": "すみません",
      "romaji": "sumimasen",
      "meaning": "Xin lỗi (hỏi đường)",
      "type": "Mẫu câu"
    },
    {
      "id": "L3_24a",
      "word": "〜でございます",
      "reading": "〜でございます",
      "romaji": "~de gozaimasu",
      "meaning": "(cách nói lịch sự của です)",
      "type": "Mẫu câu"
    },
    {
      "id": "L3_24b",
      "word": "〜を見せてください",
      "reading": "〜をみせてください",
      "romaji": "~o misete kudasai",
      "meaning": "Cho tôi xem ~",
      "type": "Mẫu câu"
    },
    {
      "id": "L3_24c",
      "word": "じゃ",
      "reading": "じゃ",
      "romaji": "ja",
      "meaning": "Thế thì, vậy thì",
      "type": "Mẫu câu"
    },
    {
      "id": "L3_24d",
      "word": "〜をください",
      "reading": "〜をください",
      "romaji": "~o kudasai",
      "meaning": "Cho tôi ~",
      "type": "Mẫu câu"
    },
    {
      "id": "L3_25",
      "word": "ありがとうございます",
      "reading": "ありがとうございます",
      "romaji": "arigatou gozaimasu",
      "meaning": "Cảm ơn (lịch sự)",
      "type": "Mẫu câu"
    },
    {
      "id": "L3_26",
      "word": "ワイン",
      "reading": "ワイン",
      "romaji": "wain",
      "meaning": "Rượu vang",
      "type": "Danh từ"
    },
    {
      "id": "L3_26b",
      "word": "たばこ",
      "reading": "たばこ",
      "romaji": "tabako",
      "meaning": "Thuốc lá",
      "type": "Danh từ"
    },
    {
      "id": "L3_26c",
      "word": "教室",
      "reading": "きょうしつ",
      "romaji": "kyoushitsu",
      "meaning": "Lớp học, phòng học",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "GIÁO THẤT",
        "components": "教 (Giáo) + 室 (Thất)",
        "story": "Căn phòng (Thất) để dạy học (Giáo).",
        "examples": "教室 (Phòng học)"
      }
    },
    {
      "id": "L3_27",
      "word": "食堂",
      "reading": "しょくどう",
      "romaji": "shokudou",
      "meaning": "Nhà ăn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỰC ĐƯỜNG",
        "components": "食 (Thực) + 堂 (Đường)",
        "story": "Căn nhà lớn (Đường) chuyên dùng để tổ chức ăn uống (Thực) là Nhà ăn.",
        "examples": "食堂 (Nhà ăn)"
      }
    },
    {
      "id": "L3_28",
      "word": "事務所",
      "reading": "じむしょ",
      "romaji": "jimusho",
      "meaning": "Văn phòng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "SỰ VỤ SỞ",
        "components": "事 (Sự) + 務 (Vụ) + 所 (Sở)",
        "story": "Nơi (Sở) thực hiện các nhiệm vụ (Vụ) và sự việc (Sự) là Văn phòng làm việc.",
        "examples": "事務所 (Văn phòng)"
      }
    },
    {
      "id": "L3_29",
      "word": "会議室",
      "reading": "かいぎしつ",
      "romaji": "kaigishitsu",
      "meaning": "Phòng họp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỘI NGHỊ THẤT",
        "components": "会 (Hội) + 議 (Nghị) + 室 (Thất)",
        "story": "Căn phòng (Thất) để mọi người gặp gỡ (Hội) và bàn luận (Nghị) là Phòng họp.",
        "examples": "会議室 (Phòng họp)"
      }
    },
    {
      "id": "L3_30",
      "word": "受付",
      "reading": "うけつけ",
      "romaji": "uketsuke",
      "meaning": "Quầy tiếp tân",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỤ PHÓ",
        "components": "受 (Thụ) + 付 (Phó)",
        "story": "Nơi tiếp nhận (Thụ) và giao phó (Phó) thông tin cho khách hàng là Quầy tiếp tân.",
        "examples": "受付 (Quầy tiếp tân)"
      }
    },
    {
      "id": "L3_31",
      "word": "ロビー",
      "reading": "ロビー",
      "romaji": "robii",
      "meaning": "Sảnh",
      "type": "Danh từ"
    },
    {
      "id": "L3_32",
      "word": "部屋",
      "reading": "へや",
      "romaji": "heya",
      "meaning": "Căn phòng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BỘ ỐC",
        "components": "部 (Bộ) + 屋 (Ốc)",
        "story": "Một phần (Bộ) nhỏ được chia ra trong căn nhà (Ốc) chính là Căn phòng.",
        "examples": "部屋 (Căn phòng)"
      }
    },
    {
      "id": "L3_33",
      "word": "トイレ",
      "reading": "トイレ",
      "romaji": "toire",
      "meaning": "Nhà vệ sinh",
      "type": "Danh từ"
    },
    {
      "id": "L3_34",
      "word": "おてあらい",
      "reading": "おてあらい",
      "romaji": "otearai",
      "meaning": "Nhà vệ sinh (lịch sự)",
      "type": "Danh từ"
    },
    {
      "id": "L3_35",
      "word": "自動販売機",
      "reading": "じどうはんばいき",
      "romaji": "jidouhanbaiki",
      "meaning": "Máy bán hàng tự động",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỰ ĐỘNG PHÁN MẠI CƠ",
        "components": "自 (Tự) + 動 (Động) + 販 (Phán) + 売 (Mại) + 機 (Cơ)",
        "story": "Cỗ máy tự chuyển động để buôn bán là Máy bán hàng tự động.",
        "examples": "自動販売機 (Máy bán hàng tự động)"
      }
    },
    {
      "id": "L3_36",
      "word": "会社",
      "reading": "かいしゃ",
      "romaji": "kaisha",
      "meaning": "Công ty",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỘI XÃ",
        "components": "会 (Hội) + 社 (Xã)",
        "story": "Nơi mọi người trong xã hội tụ họp lại làm việc là Công ty.",
        "examples": "会社 (Công ty)"
      }
    },
    {
      "id": "L3_37",
      "word": "うち",
      "reading": "うち",
      "romaji": "uchi",
      "meaning": "Nhà",
      "type": "Danh từ"
    },
    {
      "id": "L3_38",
      "word": "靴",
      "reading": "くつ",
      "romaji": "kutsu",
      "meaning": "Giày",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGOA",
        "components": "革 (Cách) + 化 (Hóa)",
        "story": "Tấm da (Cách) động vật được biến hóa (Hóa) thành đôi Giày.",
        "examples": "靴 (Giày)"
      }
    },
    {
      "id": "L3_39",
      "word": "ネクタイ",
      "reading": "ネクタイ",
      "romaji": "nekutai",
      "meaning": "Cà vạt",
      "type": "Danh từ"
    },
    {
      "id": "L3_40",
      "word": "売り場",
      "reading": "うりば",
      "romaji": "uriba",
      "meaning": "Quầy bán hàng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "MẠI TRƯỜNG",
        "components": "売 (Mại) + 場 (Trường)",
        "story": "Địa điểm (Trường) chuyên dùng để bán (Mại) hàng hóa là Quầy bán.",
        "examples": "売り場 (Quầy bán)"
      }
    },
    {
      "id": "L3_41",
      "word": "地下",
      "reading": "ちか",
      "romaji": "chika",
      "meaning": "Tầng hầm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỊA HẠ",
        "components": "地 (Địa) + 下 (Hạ)",
        "story": "Khu vực nằm bên dưới mặt đất là Tầng hầm.",
        "examples": "地下 (Tầng hầm)"
      }
    },
    {
      "id": "L3_42",
      "word": "～円",
      "reading": "～えん",
      "romaji": "~en",
      "meaning": "Yên (tiền Nhật)",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "VIÊN",
        "components": "円 (Viên)",
        "story": "Đồng tiền xu có hình tròn.",
        "examples": "円 (Yên Nhật)"
      }
    },
    {
      "id": "L3_43",
      "word": "いくら",
      "reading": "いくら",
      "romaji": "ikura",
      "meaning": "Bao nhiêu tiền",
      "type": "Từ để hỏi"
    },
    {
      "id": "L3_44",
      "word": "百",
      "reading": "ひゃく",
      "romaji": "hyaku",
      "meaning": "Trăm",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "BÁCH",
        "components": "一 (Nhất) + 白 (Bạch)",
        "story": "Một điều trắng xóa không nhớ nổi vì có tới hàng Trăm thứ.",
        "examples": "百 (Một trăm)"
      }
    },
    {
      "id": "L3_45",
      "word": "千",
      "reading": "せん",
      "romaji": "sen",
      "meaning": "Nghìn",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "THIÊN",
        "components": "丿 (Phiệt) + 十 (Thập)",
        "story": "Mười cộng thêm nét phẩy phẩy lên là một Nghìn.",
        "examples": "千 (Một nghìn)"
      }
    },
    {
      "id": "L3_46",
      "word": "万",
      "reading": "まん",
      "romaji": "man",
      "meaning": "Mười nghìn",
      "type": "Số đếm",
      "kanjiBreakdown": {
        "hanviet": "VẠN",
        "components": "一 (Nhất) + 勹 (Bao) + 丿 (Phiệt)",
        "story": "Hình ảnh số lượng khổng lồ không thể đếm hết bằng tay.",
        "examples": "一万 (Một vạn)"
      }
    },
    {
      "id": "L3_47",
      "word": "新大阪",
      "reading": "しんおおさか",
      "romaji": "shin-oosaka",
      "meaning": "Tên một nhà ga ở Osaka",
      "type": "Danh từ"
    },
    {
      "id": "L3_48",
      "word": "イタリア",
      "reading": "イタリア",
      "romaji": "itaria",
      "meaning": "Ý",
      "type": "Danh từ"
    },
    {
      "id": "L3_49",
      "word": "スイス",
      "reading": "スイス",
      "romaji": "suisu",
      "meaning": "Thụy Sĩ",
      "type": "Danh từ"
    }
  ],
  "grammar": [
    {
      "title": "ここ / そこ / あそこ / どこ",
      "structure": "ここ / そこ / あそこ は N(địa điểm) です",
      "usage": "Đại từ chỉ địa điểm.\n- ここ (koko): Chỗ này, đây (gần người nói).\n- そこ (soko): Chỗ đó, đó (gần người nghe).\n- あそこ (asoko): Chỗ kia, kia (xa cả hai).\n- どこ (doko): Ở đâu?",
      "examples": [
        {
          "jp": "ここは きょうしつです。",
          "romaji": "koko wa kyoushitsu desu.",
          "vn": "Đây là phòng học."
        },
        {
          "jp": "おてあらいは どこですか。",
          "romaji": "otearai wa doko desu ka.",
          "vn": "Nhà vệ sinh ở đâu?"
        }
      ]
    },
    {
      "title": "こちら / そちら / あちら / どちら",
      "structure": "こちら / そちら / あちら は N(địa điểm) です",
      "usage": "Là cách nói LỊCH SỰ của ここ / そこ / あそこ / どこ.\nThường dùng để chỉ phương hướng (hướng này, hướng đó...) nhưng cũng dùng để chỉ địa điểm một cách trang trọng.",
      "examples": [
        {
          "jp": "エレベーターは どちらですか。",
          "romaji": "erebeetaa wa dochira desu ka.",
          "vn": "Thang máy ở phía nào (ở đâu) vậy?"
        },
        {
          "jp": "あちらです。",
          "romaji": "achira desu.",
          "vn": "Ở phía kia ạ."
        }
      ]
    },
    {
      "title": "N1 は N2 (địa điểm) です",
      "structure": "N1 は N2 です",
      "usage": "Mẫu câu dùng để diễn tả vị trí của một vật, một người hoặc một địa điểm (N1 ở N2).",
      "examples": [
        {
          "jp": "でんわは 2かいです。",
          "romaji": "denwa wa nikai desu.",
          "vn": "Điện thoại ở tầng 2."
        },
        {
          "jp": "やまださんは じむしょです。",
          "romaji": "Yamada san wa jimusho desu.",
          "vn": "Anh Yamada đang ở văn phòng."
        }
      ]
    },
    {
      "title": "Hỏi xuất xứ: どこ / どちら",
      "structure": "N は どこ/どちら ですか",
      "usage": "Ngoài nghĩa 'ở đâu', どこ và どちら còn được dùng để hỏi tên quốc gia, công ty, trường học của ai đó. Không dùng từ hỏi なん (cái gì) trong trường hợp này. Dùng どちら sẽ lịch sự hơn.",
      "examples": [
        {
          "jp": "かいしゃは どちらですか。",
          "romaji": "kaisha wa dochira desu ka.",
          "vn": "Công ty của bạn là công ty nào?"
        },
        {
          "jp": "パワーでんきです。",
          "romaji": "pawaa denki desu.",
          "vn": "Là điện Power."
        }
      ]
    },
    {
      "title": "N1 の N2 (Hàng của nước/công ty nào)",
      "structure": "N1 の N2",
      "usage": "Khi N1 là tên quốc gia hoặc tên công ty, mẫu câu này có nghĩa là 'Sản phẩm N2 được sản xuất tại N1'. Để hỏi xuất xứ, dùng từ どこの (của nước nào/của công ty nào).",
      "examples": [
        {
          "jp": "これは どこの ワインですか。",
          "romaji": "kore wa doko no wain desu ka.",
          "vn": "Đây là rượu vang của nước nào?"
        },
        {
          "jp": "フランスの ワインです。",
          "romaji": "furansu no wain desu.",
          "vn": "Là rượu vang của Pháp."
        }
      ]
    },
    {
      "title": "Hỏi giá tiền: いくらですか",
      "structure": "N は いくらですか",
      "usage": "Dùng để hỏi giá tiền của một món đồ. Trả lời bằng cách ghép số đếm với 円 (Yên).",
      "examples": [
        {
          "jp": "この ネクタイは いくらですか。",
          "romaji": "kono nekutai wa ikura desu ka.",
          "vn": "Cái cà vạt này bao nhiêu tiền?"
        },
        {
          "jp": "1500えんです。",
          "romaji": "sen gohyaku en desu.",
          "vn": "1500 Yên."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "[blank] は しょくどうです。",
      "options": ["これ", "この", "ここ", "だれ"],
      "answer": "ここ",
      "vn": "Ở đây là nhà ăn.",
      "explanation": "しょくどう (nhà ăn) là địa điểm nên phải dùng đại từ chỉ địa điểm (ここ) thay vì chỉ vật (これ)."
    },
    {
      "question": "おてあらいは [blank] ですか。 ...あそこです。",
      "options": ["どこ", "だれ", "なん", "いくら"],
      "answer": "どこ",
      "vn": "Nhà vệ sinh ở đâu vậy? ...Ở đằng kia.",
      "explanation": "Hỏi địa điểm dùng từ để hỏi どこ (ở đâu)."
    },
    {
      "question": "エレベーターは [blank] ですか。 ...あちらです。",
      "options": ["どこ", "どちら", "だれ", "どの"],
      "answer": "どちら",
      "vn": "Thang máy ở phía nào vậy? ...Ở phía kia.",
      "explanation": "Người trả lời dùng あちら (lịch sự, chỉ hướng), nên câu hỏi cũng dùng どちら (phía nào) cho đồng bộ và lịch sự."
    },
    {
      "question": "やまださんは じむしょ [blank]。",
      "options": ["です", "ですか", "の", "は"],
      "answer": "です",
      "vn": "Anh Yamada đang ở văn phòng.",
      "explanation": "Mẫu câu N1 は N2(địa điểm) です dùng để nói ai đó đang ở đâu. Cuối câu dùng です."
    },
    {
      "question": "かいしゃは [blank] ですか。 ...パワーでんきです。",
      "options": ["なん", "だれ", "どちら", "どの"],
      "answer": "どちら",
      "vn": "Công ty của bạn là công ty nào? ...Là công ty điện Power.",
      "explanation": "Để hỏi tên công ty, trường học, đất nước, ta dùng どこ hoặc どちら, tuyệt đối KHÔNG dùng なん."
    },
    {
      "question": "これは [blank] の くるまですか。 ...ドイツの くるまです。",
      "options": ["だれ", "なん", "どこ", "どれ"],
      "answer": "どこ",
      "vn": "Đây là ô tô của nước nào? ...Là ô tô của Đức.",
      "explanation": "Hỏi xuất xứ (đồ vật được sản xuất ở đâu), dùng どこの (của nước/công ty nào)."
    },
    {
      "question": "その とけいは [blank] ですか。 ...2,000えんです。",
      "options": ["いくつ", "いくら", "どこ", "なん"],
      "answer": "いくら",
      "vn": "Cái đồng hồ đó giá bao nhiêu? ...2,000 Yên.",
      "explanation": "Hỏi giá tiền ta dùng từ いくら (Bao nhiêu tiền)."
    },
    {
      "question": "ミラーさんは [blank] ですか。 ...かいぎしつです。",
      "options": ["だれ", "どこ", "なん", "いくつ"],
      "answer": "どこ",
      "vn": "Anh Miller đang ở đâu? ...Ở phòng họp.",
      "explanation": "Câu trả lời là địa điểm (かいぎしつ - phòng họp) nên câu hỏi phải là どこ (ở đâu)."
    },
    {
      "question": "カメラうりばは [blank] ですか。 ...5かいです。",
      "options": ["なん", "だれ", "どこ", "いつ"],
      "answer": "どこ",
      "vn": "Quầy bán máy ảnh ở đâu? ...Ở tầng 5.",
      "explanation": "Tầng 5 là địa điểm, vị trí. Do đó dùng どこ (hoặc なんがい) để hỏi."
    },
    {
      "question": "おくには [blank] ですか。 ...アメリカです。",
      "options": ["どちら", "だれ", "なん", "の"],
      "answer": "どちら",
      "vn": "Đất nước của bạn là nước nào? ...Là nước Mỹ.",
      "explanation": "Hỏi về quốc gia (おくに), để lịch sự người ta thường dùng どちら."
    },
    {
      "question": "すみません、でんわは どこ [blank]。",
      "options": ["です", "ですか", "の", "か"],
      "answer": "ですか",
      "vn": "Xin lỗi, điện thoại ở đâu vậy?",
      "explanation": "Câu hỏi cuối câu dùng ですか."
    },
    {
      "question": "これは イタリア [blank] ワインです。",
      "options": ["は", "が", "の", "も"],
      "answer": "の",
      "vn": "Đây là rượu vang của Ý.",
      "explanation": "N1 の N2 chỉ xuất xứ sản phẩm (Rượu vang của nước Ý)."
    },
    {
      "question": "あそこ [blank] わたしの だいがくです。",
      "options": ["は", "が", "の", "も"],
      "answer": "は",
      "vn": "Kia là trường đại học của tôi.",
      "explanation": "あそこ đóng vai trò chủ ngữ trong câu chỉ địa điểm, đi kèm trợ từ は."
    },
    {
      "question": "[blank] かばんは わたしのです。",
      "options": ["それ", "その", "そこ", "そちら"],
      "answer": "その",
      "vn": "Cái cặp đó là của tôi.",
      "explanation": "Đứng trước danh từ (かばん) phải dùng この/その/あの. Không dùng これ/それ/あれ hoặc đại từ địa điểm."
    },
    {
      "question": "この ネクタイは [blank] ですか。 ...1,500えんです。",
      "options": ["いくら", "いくつ", "どこ", "だれ"],
      "answer": "いくら",
      "vn": "Cái cà vạt này bao nhiêu tiền? ...1,500 yên.",
      "explanation": "Để hỏi giá tiền, dùng từ để hỏi いくら (Bao nhiêu tiền)."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "まちのたんけん",
    "titleVn": "🗺️ Khám Phá Thành Phố",
    "intro": "Một chuyến đi trong thành phố — luyện địa điểm, tầng và các từ chỉ phương hướng",
    "lines": [
      {
        "kanji": "すみません、駅はどこですか？",
        "jp": "すみません、えきは どこ ですか？",
        "romaji": "Sumimasen, eki wa doko desu ka?",
        "vn": "Xin lỗi, ga tàu ở đâu vậy?",
        "note": "すみません · えき · どこ"
      },
      {
        "kanji": "駅はここです。銀行はそこです。",
        "jp": "えきは ここ です。ぎんこうは そこ です。",
        "romaji": "Eki wa koko desu. Ginkou wa soko desu.",
        "vn": "Ga tàu ở đây. Ngân hàng ở đó.",
        "note": "ここ · そこ · ぎんこう"
      },
      {
        "kanji": "郵便局はあそこの右にあります。",
        "jp": "ゆうびんきょくは あそこの みぎに あります。",
        "romaji": "Yuubinkyoku wa asoko no migi ni arimasu.",
        "vn": "Bưu điện ở bên phải chỗ kia.",
        "note": "あそこ · ゆうびんきょく · みぎ"
      },
      {
        "kanji": "デパートの前にスーパーがあります。",
        "jp": "デパートの まえに スーパーが あります。",
        "romaji": "Depaato no mae ni suupaa ga arimasu.",
        "vn": "Trước trung tâm thương mại có siêu thị.",
        "note": "デパート · まえ · スーパー"
      },
      {
        "kanji": "ホテルはデパートの後ろです。",
        "jp": "ホテルは デパートの うしろ です。",
        "romaji": "Hoteru wa depaato no ushiro desu.",
        "vn": "Khách sạn ở phía sau trung tâm.",
        "note": "ホテル · うしろ"
      },
      {
        "kanji": "コンビニは駅の左にあります。",
        "jp": "コンビニは えきの ひだりに あります。",
        "romaji": "Konbini wa eki no hidari ni arimasu.",
        "vn": "Cửa hàng tiện lợi ở bên trái ga.",
        "note": "コンビニ · ひだり"
      },
      {
        "kanji": "レストランは何階ですか？8階です！",
        "jp": "レストランは なんかい ですか？8かい です！",
        "romaji": "Resutoran wa nankai desu ka? 8-kai desu!",
        "vn": "Nhà hàng ở tầng mấy? Tầng 8!",
        "note": "レストラン · なんかい · 〜かい"
      },
      {
        "kanji": "エレベーターは階段の右、エスカレーターは下。",
        "jp": "エレベーターは かいだんの みぎ、エスカレーターは した。",
        "romaji": "Erebeetaa wa kaidan no migi, esukareetaa wa shita.",
        "vn": "Thang máy bên phải cầu thang, thang cuốn ở dưới.",
        "note": "エレベーター · かいだん · した · エスカレーター"
      },
      {
        "kanji": "ありがとうございます！町の探検、楽しいですね。",
        "jp": "ありがとうございます！まちの たんけん、たのしい ですね。",
        "romaji": "Arigatou gozaimasu! Machi no tanken, tanoshii desu ne.",
        "vn": "Cảm ơn rất nhiều! Khám phá thành phố thật vui nhỉ.",
        "note": "ありがとうございます"
      }
    ]
  },
  
  "dialogue": {
    "title": "しつもんが　あります。",
    "titleVn": "Tôi có câu hỏi.",
    "lines": [
      {
        "speaker": "せいと",
        "jp": "せんせい、しつもんが　あります。",
        "romaji": "Sensei, shitsumon ga arimasu.",
        "vn": "Thưa thầy/cô, em có câu hỏi ạ."
      },
      {
        "speaker": "せんせい",
        "jp": "はい、なんですか。",
        "romaji": "Hai, nan desu ka.",
        "vn": "Ừ, có chuyện gì vậy?"
      },
      {
        "speaker": "せいと",
        "jp": "「そうですか」って　なんですか。",
        "blankJp": "「（　　　）」って　なんですか。",
        "blankMeanings": ["Vậy à"],
        "romaji": "\"Sou desu ka\" tte nan desu ka.",
        "vn": "\"Sou desu ka\" nghĩa là gì ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "「そうですか」は 'Oh, You are.' 'Oh, it is.'です。",
        "romaji": "\"Sou desu ka\" wa 'Oh, You are.' 'Oh, it is.' desu.",
        "vn": "\"Sou desu ka\" là 'Oh, You are.' 'Oh, it is.'."
      },
      {
        "speaker": "せいと",
        "jp": "ああ、わかりました。ありがとうございました。",
        "blankJp": "ああ、わかりました。（　　　）。",
        "blankMeanings": ["Cảm ơn"],
        "romaji": "Aa, wakarimashita. Arigatou gozaimashita.",
        "vn": "A, em hiểu rồi ạ. Em cảm ơn thầy/cô."
      },
      {
        "speaker": "せんせい",
        "jp": "は～い。",
        "romaji": "Ha~i.",
        "vn": "Ù~."
      }
    ]
  }
};

export default lesson;
