import { NihongoLesson } from './types';
import { readings } from '../readings/reading6';

const lesson: NihongoLesson = {
  "id": 6,
  "chapter": "第6課",
  "title": "いっしょに行きませんか",
  "titleVn": "Bài 6: Cùng đi không?",
  "theme": "Động từ hành động · Rủ rê",
  "words": [
    {
      "id": "L6_01",
      "word": "食べます",
      "reading": "たべます",
      "romaji": "tabemasu",
      "meaning": "Ăn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỰC",
        "components": "食 (Thực - Ăn)",
        "story": "Hình ảnh cái nắp đậy trên bát thức ăn thơm ngon.",
        "examples": "食べます (Ăn), 食事 (Bữa ăn)"
      }
    },
    {
      "id": "L6_02",
      "word": "飲みます",
      "reading": "のみます",
      "romaji": "nomimasu",
      "meaning": "Uống",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ẨM",
        "components": "食 (Thực - Ăn) + 欠 (Khiếm - Thiếu/Ngáp)",
        "story": "Ăn (Thực) xong thấy thiếu thiếu (Khiếm) thì phải Uống nước.",
        "examples": "飲みます (Uống), 飲料 (Đồ uống)"
      }
    },
    {
      "id": "L6_03",
      "word": "吸います",
      "reading": "すいます",
      "romaji": "suimasu",
      "meaning": "Hút (thuốc)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HẤP",
        "components": "吸 = 口 (Khẩu) + 及 (Cập - Kịp/Chạm tới)",
        "story": "Dùng miệng (口) thu lấy, chạm tới (及) luồng không khí, tức là hít / hút (Hấp).",
        "examples": "吸う (Hút/Hít), 呼吸 (Hô hấp)"
      }
    },
    {
      "id": "L6_04",
      "word": "見ます",
      "reading": "みます",
      "romaji": "mimasu",
      "meaning": "Xem, nhìn",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KIẾN",
        "components": "目 (Mục - Mắt) + 儿 (Nhân đi - Đôi chân)",
        "story": "Dùng con mắt (Mục) và đôi chân (Nhân đi) để đi xem xét mọi thứ xung quanh.",
        "examples": "見ます (Nhìn/Xem), 意見 (Ý kiến)"
      }
    },
    {
      "id": "L6_05",
      "word": "聞きます",
      "reading": "ききます",
      "romaji": "kikimasu",
      "meaning": "Nghe",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "VĂN",
        "components": "聞 = 門 (Môn - Cổng) + 耳 (Nhĩ - Tai)",
        "story": "Ghé tai (耳) vào cổng (門) để nghe ngóng tin tức.",
        "examples": "聞く (Nghe), 新聞 (Báo chí)"
      }
    },
    {
      "id": "L6_06",
      "word": "読みます",
      "reading": "よみます",
      "romaji": "yomimasu",
      "meaning": "Đọc",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "ĐỘC",
        "components": "読 = 言 (Ngôn - Lời nói) + 売 (Mại - Bán)",
        "story": "Dùng lời nói (言) để rao bán (売) hoặc đọc to lên (Độc).",
        "examples": "読む (Đọc), 読書 (Đọc sách)"
      }
    },
    {
      "id": "L6_07",
      "word": "書きます",
      "reading": "かきます",
      "romaji": "kakimasu",
      "meaning": "Viết",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THƯ",
        "components": "書 = 聿 (Duật - Cây bút) + 曰 (Viết - Nói)",
        "story": "Cầm bút (聿) để viết ra những lời muốn nói (曰) thành Thư từ.",
        "examples": "書く (Viết), 辞書 (Từ điển), 図書館 (Thư viện)"
      }
    },
    {
      "id": "L6_08",
      "word": "買います",
      "reading": "かいます",
      "romaji": "kaimasu",
      "meaning": "Mua",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "MÃI",
        "components": "罒 (Võng - Mắt lưới) + 貝 (Bối - Vỏ sò/Tiền)",
        "story": "Dùng lưới (Võng) vớt vỏ sò (Bối) ngày xưa dùng làm tiền để đi Mua sắm.",
        "examples": "買います (Mua), 買い物 (Mua sắm)"
      }
    },
    {
      "id": "L6_09",
      "word": "撮ります",
      "reading": "とります",
      "romaji": "torimasu",
      "meaning": "Chụp (ảnh)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TOÁT",
        "components": "撮 = 扌 (Thủ - Tay) + 最 (Tối - Tột bực)",
        "story": "Dùng tay (扌) bắt lấy khoảnh khắc đẹp nhất, tột bực nhất (最).",
        "examples": "撮る (Chụp ảnh), 撮影 (Quay phim/chụp ảnh)"
      }
    },
    {
      "id": "L6_10",
      "word": "します",
      "reading": "します",
      "romaji": "shimasu",
      "meaning": "Làm, chơi",
      "type": "Động từ"
    },
    {
      "id": "L6_11",
      "word": "会います",
      "reading": "あいます",
      "romaji": "aimasu",
      "meaning": "Gặp (bạn)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "HỘI",
        "components": "会 = 𠆢 (Nhân) + 二 (Nhị) + 厶 (Khư)",
        "story": "Hai (二) người hẹn gặp nhau riêng tư (厶) ở hội nhóm (会).",
        "examples": "会う (Gặp), 会社 (Công ty), 会議 (Cuộc họp)"
      }
    },
    {
      "id": "L6_12",
      "word": "ご飯",
      "reading": "ごはん",
      "romaji": "gohan",
      "meaning": "Cơm, bữa ăn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHẠN",
        "components": "食 (Thực - Ăn) + 反 (Phản - Phản đối/Ngược lại)",
        "story": "Đồ ăn (Thực) được lật đi lật lại (Phản) cho chín đều chính là Cơm.",
        "examples": "ご飯 (Cơm/Bữa ăn), 朝ご飯 (Bữa sáng)"
      }
    },
    {
      "id": "L6_13",
      "word": "パン",
      "reading": "ぱん",
      "romaji": "pan",
      "meaning": "Bánh mì",
      "type": "Danh từ"
    },
    {
      "id": "L6_14",
      "word": "卵",
      "reading": "たまご",
      "romaji": "tamago",
      "meaning": "Trứng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NOÃN",
        "components": "Hình tượng các giọt lòng đỏ trong vỏ quả trứng.",
        "story": "Chữ giống hình ảnh hai quả trứng nằm cạnh nhau trong ổ.",
        "examples": "卵 (Trứng), 卵焼き (Trứng cuộn)"
      }
    },
    {
      "id": "L6_15",
      "word": "肉",
      "reading": "にく",
      "romaji": "niku",
      "meaning": "Thịt",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHỤC",
        "components": "肉 = 冂 (Quynh) + 2 nét 人 (Nhân)",
        "story": "Hình ảnh những miếng thịt được treo lên khung.",
        "examples": "肉 (Thịt), 牛肉 (Thịt bò), 豚肉 (Thịt lợn)"
      }
    },
    {
      "id": "L6_16",
      "word": "魚",
      "reading": "さかな",
      "romaji": "sakana",
      "meaning": "Cá",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGƯ",
        "components": "魚 = 𠂊 (Đầu cá) + 田 (Thân cá) + 灬 (Hỏa - đuôi cá)",
        "story": "Hình tượng con cá với chiếc đầu nhọn, thân cá vảy (田), và đuôi cá ngoe nguẩy (灬).",
        "examples": "魚 (Cá), 金魚 (Cá vàng)"
      }
    },
    {
      "id": "L6_17",
      "word": "野菜",
      "reading": "やさい",
      "romaji": "yasai",
      "meaning": "Rau",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DÃ THÁI",
        "components": "野 (Dã - Cánh đồng) + 菜 (Thái - Rau)",
        "story": "Hoa cỏ/rau (菜) mọc ngoài cánh đồng (野) là Rau (Dã Thái).",
        "examples": "野菜 (Rau)"
      }
    },
    {
      "id": "L6_18",
      "word": "果物",
      "reading": "くだもの",
      "romaji": "kudamono",
      "meaning": "Hoa quả, trái cây",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "QUẢ VẬT",
        "components": "果 (Quả - Trái cây) + 物 (Vật - Đồ vật)",
        "story": "Đồ vật thu hoạch được từ trên cây là Trái cây.",
        "examples": "果物 (Trái cây)"
      }
    },
    {
      "id": "L6_19",
      "word": "水",
      "reading": "みず",
      "romaji": "mizu",
      "meaning": "Nước",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỦY",
        "components": "水 (Thủy - Nước)",
        "story": "Hình ảnh dòng suối chảy.",
        "examples": "水 (Nước)"
      }
    },
    {
      "id": "L6_20",
      "word": "お茶",
      "reading": "おちゃ",
      "romaji": "ocha",
      "meaning": "Trà, nước chè",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÀ",
        "components": "艹 (Thảo) + 人 (Nhân) + 木 (Mộc)",
        "story": "Người (Nhân) hái lá cỏ (Thảo) từ trên cây (Mộc) xuống để pha Trà.",
        "examples": "お茶 (Trà)"
      }
    },
    {
      "id": "L6_21",
      "word": "牛乳",
      "reading": "ぎゅうにゅう",
      "romaji": "gyuunyuu",
      "meaning": "Sữa bò",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NGƯU NHŨ",
        "components": "牛 (Ngưu - Con bò) + 乳 (Nhũ - Sữa)",
        "story": "Sữa được vắt từ con bò là Sữa bò.",
        "examples": "牛乳 (Sữa bò)"
      }
    },
    {
      "id": "L6_22",
      "word": "お酒",
      "reading": "おさけ",
      "romaji": "osake",
      "meaning": "Rượu sake",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỬU",
        "components": "氵 (Thủy - Nước) + 酉 (Dậu - Bình rượu)",
        "story": "Thứ nước (Thủy) đựng trong bình (Dậu) là Rượu.",
        "examples": "お酒 (Rượu)"
      }
    },
    {
      "id": "L6_23",
      "word": "手紙",
      "reading": "てがみ",
      "romaji": "tegami",
      "meaning": "Bức thư",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ CHỈ",
        "components": "手 (Thủ - Tay) + 紙 (Chỉ - Giấy)",
        "story": "Dùng tay (手) viết lên giấy (紙) để tạo thành bức thư.",
        "examples": "手紙 (Bức thư), 手 (Bàn tay), 紙 (Tờ giấy)"
      }
    },
    {
      "id": "L6_24",
      "word": "写真",
      "reading": "しゃしん",
      "romaji": "shashin",
      "meaning": "Bức ảnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẢ CHÂN",
        "components": "写 (Tả - Sao chép) + 真 (Chân - Sự thật)",
        "story": "Sao chép (Tả) lại chân dung sự thật (Chân) tạo thành bức ảnh.",
        "examples": "写真 (Bức ảnh), 真面目 (Nghiêm túc)"
      }
    },
    {
      "id": "L6_25",
      "word": "店",
      "reading": "みせ",
      "romaji": "mise",
      "meaning": "Cửa hàng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIẾM",
        "components": "广 (Nghiễm - Mái nhà) + 占 (Chiêm - Bói toán)",
        "story": "Dưới mái nhà (Nghiễm) có ông thầy bói (Chiêm) mở Cửa hàng.",
        "examples": "店 (Cửa hàng), 喫茶店 (Quán nước)"
      }
    },
    {
      "id": "L6_26",
      "word": "庭",
      "reading": "にわ",
      "romaji": "niwa",
      "meaning": "Sân, vườn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐÌNH",
        "components": "庭 = 广 (Nghiễm - Mái hiên) + 廷 (Đình - Triều đình)",
        "story": "Khu vực rộng dưới mái hiên (广) giống như chốn triều đình (廷) chính là sân vườn (Đình).",
        "examples": "庭 (Sân vườn), 家庭 (Gia đình)"
      }
    },
    {
      "id": "L6_27",
      "word": "宿題",
      "reading": "しゅくだい",
      "romaji": "shukudai",
      "meaning": "Bài tập về nhà",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TÚC ĐỀ",
        "components": "宿 (Túc - Chỗ ở/Nghỉ lại) + 題 (Đề - Chủ đề/Đề bài)",
        "story": "Đề bài (題) mang về chỗ trọ/nhà ở (宿) để làm là bài tập về nhà.",
        "examples": "宿題 (Bài tập), 問題 (Vấn đề)"
      }
    },
    {
      "id": "L6_28",
      "word": "いつも",
      "reading": "いつも",
      "romaji": "itsumo",
      "meaning": "Luôn luôn",
      "type": "Phó từ"
    },
    {
      "id": "L6_29",
      "word": "時々",
      "reading": "ときどき",
      "romaji": "tokidoki",
      "meaning": "Thỉnh thoảng",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "THỜI",
        "components": "時 (Thời - Thời gian) + 々 (Dấu lặp lại)",
        "story": "Lặp lại thời gian là Thỉnh thoảng.",
        "examples": "時々 (Thỉnh thoảng)"
      }
    },
    {
      "id": "L6_30",
      "word": "いっしょに",
      "reading": "いっしょに",
      "romaji": "isshoni",
      "meaning": "Cùng nhau",
      "type": "Phó từ"
    },
    {
      "id": "L6_31",
      "word": "ごはん",
      "reading": "ごはん",
      "romaji": "gohan",
      "meaning": "Cơm, bữa ăn",
      "type": "Danh từ"
    },
    {
      "id": "L6_32",
      "word": "朝ごはん",
      "reading": "あさごはん",
      "romaji": "asagohan",
      "meaning": "Bữa sáng",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRIÊU",
        "components": "朝 (Triêu - Sáng sớm)",
        "story": "Bữa sáng.",
        "examples": "朝ごはん (Bữa sáng)"
      }
    },
    {
      "id": "L6_33",
      "word": "昼ごはん",
      "reading": "ひるごはん",
      "romaji": "hirugohan",
      "meaning": "Bữa trưa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TRÚ",
        "components": "昼 (Trú - Trưa)",
        "story": "Bữa trưa.",
        "examples": "昼ごはん (Bữa trưa)"
      }
    },
    {
      "id": "L6_34",
      "word": "晩ごはん",
      "reading": "ばんごはん",
      "romaji": "bangohan",
      "meaning": "Bữa tối",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "VÃN",
        "components": "晩 (Vãn - Tối)",
        "story": "Bữa tối.",
        "examples": "晩ごはん (Bữa tối)"
      }
    },
    {
      "id": "L6_35",
      "word": "紅茶",
      "reading": "こうちゃ",
      "romaji": "koucha",
      "meaning": "Hồng trà",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HỒNG TRÀ",
        "components": "紅 (Hồng - Màu đỏ/Hồng) + 茶 (Trà)",
        "story": "Trà có màu đỏ là Hồng trà.",
        "examples": "紅茶 (Hồng trà)"
      }
    },
    {
      "id": "L6_36",
      "word": "ミルク",
      "reading": "ミルク",
      "romaji": "miruku",
      "meaning": "Sữa",
      "type": "Danh từ"
    },
    {
      "id": "L6_37",
      "word": "ジュース",
      "reading": "ジュース",
      "romaji": "juusu",
      "meaning": "Nước ép",
      "type": "Danh từ"
    },
    {
      "id": "L6_38",
      "word": "ビール",
      "reading": "ビール",
      "romaji": "biiru",
      "meaning": "Bia",
      "type": "Danh từ"
    }
  ],
  "grammar": [
    {
      "pattern": "N を V",
      "meaning": "Hành động tác động lên tân ngữ N",
      "note": "Hạt từ を (wo) đứng sau danh từ làm tân ngữ trực tiếp. VD: ご飯を食べます。"
    },
    {
      "pattern": "N を します",
      "meaning": "Làm, chơi [N]",
      "note": "Sử dụng cho môn thể thao, trò chơi, hoặc sự kiện. VD: サッカーをします。"
    },
    {
      "pattern": "N(địa điểm) で V",
      "meaning": "Làm [V] ở [N]",
      "note": "Trợ từ で chỉ không gian xảy ra hành động. VD: 店で買います (Mua ở cửa hàng)."
    },
    {
      "pattern": "Vませんか",
      "meaning": "Cùng làm [V] nhé? (Mời mọc lịch sự)",
      "note": "VD: いっしょに飲みませんか。 (Cùng nhau uống cốc nước nhé?)"
    },
    {
      "pattern": "Vましょう",
      "meaning": "Cùng làm [V] thôi! (Đề nghị, hưởng ứng)",
      "note": "VD: ちょっと休みましょう。 (Hãy nghỉ ngơi một chút thôi)."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "毎日（まいにち）のこと",
    "titleVn": "🏃 Mọi việc diễn ra",
    "intro": "Tập sử dụng chữ Hán cho các danh từ/động từ qua vần điệu",
    "lines": [
      {
        "kanji": "朝はパンと卵を食べます、牛乳を飲みます。",
        "jp": "あさは パンと たまごを たべます、ぎゅうにゅうを のみます。",
        "romaji": "Asa wa pan to tamago wo tabemasu, gyuunyuu wo nomimasu.",
        "vn": "Buổi sáng tôi ăn bánh mì và trứng, tôi uống sữa bò.",
        "note": "卵 · 食べます · 牛乳 · 飲みます"
      },
      {
        "kanji": "夜は肉と野菜、そしてお酒を飲みます。",
        "jp": "よるは にくと やさい、そして おさけを のみます。",
        "romaji": "Yoru wa niku to yasai, soshite osake wo nomimasu.",
        "vn": "Buổi tối là thịt và rau, và rồi uống rượu sake.",
        "note": "肉 · 野菜 · お酒"
      },
      {
        "kanji": "時々映画を見ます、いつも音楽を聞きます。",
        "jp": "ときどき えいがを みます、いつも おんがくを ききます。",
        "romaji": "Tokidoki eiga wo mimasu, itsumo ongaku wo kikimasu.",
        "vn": "Thỉnh thoảng tôi đi xem phim, tôi luôn luôn nghe nhạc.",
        "note": "時々 · 見ます · 聞きます"
      },
      {
        "kanji": "図書館で本を読みます、うちで手紙を書きます。",
        "jp": "としょかんで ほんを よみます、うちで てがみを かきます。",
        "romaji": "Toshokan de hon wo yomimasu, uchi de tegami wo kakimasu.",
        "vn": "Tôi đọc sách ở thư viện, tôi viết thư ở nhà.",
        "note": "読みます · 手紙 · 書きます"
      },
      {
        "kanji": "土曜日、店で服を買います、庭で写真を撮ります。",
        "jp": "どようび、みせで ふくを かいます、にわで しゃしんを とります。",
        "romaji": "Doyoubi, mise de fuku wo kaimasu, niwa de shashin wo torimasu.",
        "vn": "Thứ bảy, mua quần áo ở cửa hàng, chụp ảnh trong vườn.",
        "note": "店 · 買います · 庭 · 撮ります"
      },
      {
        "kanji": "日曜日はいっしょにテニスをしませんか？",
        "jp": "にちようびは いっしょに テニスを しませんか？",
        "romaji": "Nichiyoubi wa isshoni tenisu wo shimasen ka?",
        "vn": "Chủ nhật cùng nhau chơi tennis nhé?",
        "note": "いっしょに · しませんか"
      },
      {
        "kanji": "ええ、いいですね！駅で会いましょう！",
        "jp": "ええ、いいですね！えきで あいましょう！",
        "romaji": "Ee, ii desu ne! Eki de aimashou!",
        "vn": "Ừ, tuyệt đấy! Gặp nhau ở ga nhé!",
        "note": "会います"
      }
    ]
  }
};

export default lesson;
