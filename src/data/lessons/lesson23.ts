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
  "grammar": [
    {
      "title": "Mệnh đề thời gian: ～時 (Khi...)",
      "structure": "Thể thông thường / A(i) / A(na)な / Nの + 時",
      "usage": "Dùng để nối 2 mệnh đề, diễn tả thời điểm xảy ra trạng thái, động tác. Lưu ý: Tính từ giữ nguyên い/な, Danh từ thêm の.",
      "examples": [
        {
          "jp": "ひまな とき、テレビを みます。",
          "romaji": "hima na toki, terebi o mimasu.",
          "vn": "KHI rảnh rỗi, tôi xem TV. (Tính từ na + な)"
        },
        {
          "jp": "こどもの とき、よく かわで およぎました。",
          "romaji": "kodomo no toki, yoku kawa de oyogimashita.",
          "vn": "KHI còn nhỏ, tôi thường bơi ở sông. (Danh từ + の)"
        },
        {
          "jp": "ねむい とき、コーヒーを のみます。",
          "romaji": "nemui toki, koohii o nomimasu.",
          "vn": "KHI buồn ngủ, tôi uống cà phê. (Tính từ i)"
        }
      ]
    },
    {
      "title": "Phân biệt Vる 時 và Vた 時",
      "structure": "Vる + 時 (Hành động chưa hoàn thành) / Vた + 時 (Hành động đã hoàn thành)",
      "usage": "Vる 時: Hành động ở vế sau xảy ra TRƯỚC khi hành động V hoàn thành. Vた 時: Hành động ở vế sau xảy ra SAU khi hành động V đã hoàn thành.",
      "examples": [
        {
          "jp": "パリへ いく とき、かばんを かいました。",
          "romaji": "Pari e iku toki, kaban o kaimashita.",
          "vn": "Khi đi Paris, tôi đã mua túi xách. (MUA TRƯỚC khi đi/trên đường đi - Vる)"
        },
        {
          "jp": "パリへ いった とき、かばんを かいました。",
          "romaji": "Pari e itta toki, kaban o kaimashita.",
          "vn": "Khi đi Paris, tôi đã mua túi xách. (ĐẾN PARIS RỒI mới mua - Vた)"
        }
      ]
    },
    {
      "title": "Điều kiện tất yếu: Vる + と (Hễ... thì...)",
      "structure": "Động từ (Thể từ điển Vる) + と、～",
      "usage": "Diễn tả một hệ quả TẤT YẾU, hiển nhiên (như máy móc, tự nhiên, chỉ đường). Nếu làm V1 thì CHẮC CHẮN V2 sẽ xảy ra. *Lưu ý: Không dùng với ý chí, nhờ vả, rủ rê ở vế sau.",
      "examples": [
        {
          "jp": "この ボタンを おすと、おつりが でます。",
          "romaji": "kono botan o osu to, otsuri ga demasu.",
          "vn": "HỄ bấm nút này THÌ tiền thừa sẽ chạy ra. (Máy móc)"
        },
        {
          "jp": "みぎへ まがると、えきが あります。",
          "romaji": "migi e magaru to, eki ga arimasu.",
          "vn": "HỄ rẽ phải THÌ sẽ thấy nhà ga. (Chỉ đường)"
        }
      ]
    },
    {
      "title": "Trợ từ を với động từ di chuyển",
      "structure": "N(Không gian/Địa điểm) + を + Động từ di chuyển (歩く / 渡る / 散歩する)",
      "usage": "Khi di chuyển (đi bộ, băng qua, dạo quanh) TRONG một không gian, ta dùng trợ từ を (để chỉ đường đi), KHÔNG dùng で (chỉ địa điểm xảy ra hành động tĩnh).",
      "examples": [
        {
          "jp": "こうえんを さんぽします。",
          "romaji": "kouen o sanposhimasu.",
          "vn": "Đi dạo (quanh/trong) công viên."
        },
        {
          "jp": "みちを わたります。",
          "romaji": "michi o watarimasu.",
          "vn": "Băng qua đường."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "あたまが（　　）とき、くすりを のみます。",
      "options": ["いたい", "いたいの", "いたな", "いたかった"],
      "answer": "いたい",
      "vn": "Khi đau đầu, tôi uống thuốc.",
      "explanation": "Tính từ đuôi い giữ nguyên khi kết hợp với 時."
    },
    {
      "question": "ひま（　　）とき、えを かきます。",
      "options": ["な", "の", "だ", "に"],
      "answer": "な",
      "vn": "Khi rảnh rỗi, tôi vẽ tranh.",
      "explanation": "Tính từ đuôi な phải thêm な trước 時."
    },
    {
      "question": "こども（　　）とき、よく かわで およぎました。",
      "options": ["の", "な", "だ", "に"],
      "answer": "の",
      "vn": "Khi còn nhỏ, tôi thường bơi ở sông.",
      "explanation": "Danh từ (子供) phải thêm の trước 時."
    },
    {
      "question": "かんじが（　　）とき、じしょを つかいます。",
      "options": ["わからない", "わかりません", "わかって", "わかった"],
      "answer": "わからない",
      "vn": "Khi không hiểu chữ Kanji, tôi dùng từ điển.",
      "explanation": "Trước 時 phải là thể thông thường. 分かりません -> 分からない."
    },
    {
      "question": "にほんへ（　　）とき、かばんを かいました。",
      "options": ["いく", "いった", "いって", "いきます"],
      "answer": "いく",
      "vn": "Khi đi Nhật, tôi đã mua túi xách (mua ở quê nhà trước khi đi).",
      "explanation": "Hành động mua xảy ra TRƯỚC khi đến Nhật -> Dùng Vる (行く時)."
    },
    {
      "question": "にほんへ（　　）とき、かばんを かいました。",
      "options": ["いった", "いく", "いって", "いきます"],
      "answer": "いった",
      "vn": "Khi đi Nhật, tôi đã mua túi xách (đến Nhật rồi mới mua).",
      "explanation": "Hành động mua xảy ra SAU khi đã đến Nhật -> Dùng Vた (行った時)."
    },
    {
      "question": "この ボタンを（　　）と、エアコンが つきます。",
      "options": ["おす", "おして", "おした", "おさない"],
      "answer": "おす",
      "vn": "Hễ bấm nút này thì máy lạnh sẽ bật.",
      "explanation": "Mệnh đề điều kiện tất yếu: Vる + と."
    },
    {
      "question": "みぎへ まがる（　　）、えきが あります。",
      "options": ["と", "とき", "が", "を"],
      "answer": "と",
      "vn": "Hễ rẽ phải thì sẽ thấy nhà ga.",
      "explanation": "Hệ quả chỉ đường tất yếu: Vる + と."
    },
    {
      "question": "こうえん（　　）さんぽします。",
      "options": ["を", "に", "で", "へ"],
      "answer": "を",
      "vn": "Tôi đi dạo quanh công viên.",
      "explanation": "Động từ di chuyển (散歩します) trong một không gian dùng trợ từ を."
    },
    {
      "question": "はし（　　）わたります。",
      "options": ["を", "に", "で", "が"],
      "answer": "を",
      "vn": "Tôi đi qua cầu.",
      "explanation": "Băng qua (渡ります) một địa hình dùng trợ từ を."
    },
    {
      "question": "みち（　　）あるきます。",
      "options": ["を", "に", "で", "へ"],
      "answer": "を",
      "vn": "Tôi đi bộ trên đường.",
      "explanation": "Đi dọc theo đường (歩きます) dùng trợ từ を."
    },
    {
      "question": "つまみを みぎへ（　　）と、おとが おおきく なります。",
      "options": ["まわす", "まわして", "まわした", "まわします"],
      "answer": "まわす",
      "vn": "Hễ vặn núm sang phải thì âm thanh sẽ to lên.",
      "explanation": "Hệ quả tất yếu của máy móc: Vる (回す) + と."
    },
    {
      "question": "ねむい とき、コーヒーを（　　）。",
      "options": ["のみます", "のんで", "のむ", "のんだ"],
      "answer": "のみます",
      "vn": "Khi buồn ngủ, tôi uống cà phê.",
      "explanation": "Vế chính của câu vẫn chia thì bình thường (hiện tại/thói quen -> 飲みます)."
    },
    {
      "question": "がくせい（　　）とき、よく アルバイトを しました。",
      "options": ["の", "な", "だ", "に"],
      "answer": "の",
      "vn": "Khi còn là sinh viên, tôi thường đi làm thêm.",
      "explanation": "Danh từ (学生) + の + 時."
    },
    {
      "question": "お金が ない（　　）、ともだちに かります。",
      "options": ["とき", "と", "が", "を"],
      "answer": "とき",
      "vn": "Khi không có tiền, tôi mượn bạn bè.",
      "explanation": "Thể ない (ない) + 時. Không dùng と vì vế sau mang tính chủ ý cá nhân (Tôi mượn)."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "〜時・〜と",
    "titleVn": "❤️ Khi & Hễ... thì",
    "intro": "Tóm tắt Bài 23: Cách nói 'Khi...' (Thời gian) và 'Hễ... thì...' (Điều kiện tất yếu của máy móc, chỉ đường).",
    "lines": [
      {
        "kanji": "暇な時、テレビを見ます。",
        "jp": "ひまな とき、テレビを みます。",
        "romaji": "Hima na toki, terebi o mimasu.",
        "vn": "KHI rảnh rỗi, tôi ngồi xem ti vi.",
        "note": "A(na)な + 時"
      },
      {
        "kanji": "子供の時、川で泳ぎました。",
        "jp": "こどもの とき、かわで およぎました。",
        "romaji": "Kodomo no toki, kawa de oyogimashita.",
        "vn": "KHI còn nhỏ, tôi thường hay tắm sông.",
        "note": "Nの + 時"
      },
      {
        "kanji": "このボタンを押すと、水が出ます。",
        "jp": "この ボタンを おすと、みずが でます。",
        "romaji": "Kono botan o osu to, mizu ga demasu.",
        "vn": "HỄ bấm nút này THÌ nước sẽ tuôn ra.",
        "note": "Vる + と (Tất yếu)"
      },
      {
        "kanji": "公園を散歩します。",
        "jp": "こうえんを さんぽします。",
        "romaji": "Kouen o sanposhimasu.",
        "vn": "Tôi đi dạo BĂNG QUA trong công viên.",
        "note": "N(nơi chốn) を Đi bộ/băng qua"
      }
    ]
  }
};

export default lesson;
