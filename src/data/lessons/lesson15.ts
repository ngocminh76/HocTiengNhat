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
  "grammar": [
    {
      "title": "Xin phép làm gì đó: Vても いいですか",
      "structure": "Động từ thể Te + も いいですか",
      "usage": "Dùng để xin phép người khác cho mình làm một việc gì đó. Ý nghĩa: 'Tôi làm ~ có được không?'.",
      "examples": [
        {
          "jp": "ここで しゃしんを とっても いいですか。",
          "romaji": "koko de shashin o totte mo ii desu ka.",
          "vn": "Tôi chụp ảnh ở đây có được không?"
        },
        {
          "jp": "ええ、いいですよ。 / ええ、どうぞ。",
          "romaji": "ee, ii desu yo. / ee, douzo.",
          "vn": "Vâng, được đấy. / Vâng, xin mời."
        },
        {
          "jp": "すみません、ちょっと...",
          "romaji": "sumimasen, chotto...",
          "vn": "Xin lỗi, hơi (bất tiện)... (Cách từ chối khéo)"
        }
      ]
    },
    {
      "title": "Cấm đoán: Vては いけません",
      "structure": "Động từ thể Te + は いけません",
      "usage": "Dùng để biểu thị sự cấm đoán ('Không được làm ~'). Thường dùng trong các quy định, biển báo hoặc người trên nói với người dưới.",
      "examples": [
        {
          "jp": "ここで たばこを すっては いけません。",
          "romaji": "koko de tabako o sutte wa ikemasen.",
          "vn": "Không được hút thuốc ở đây."
        },
        {
          "jp": "としょかんで はなしては いけません。",
          "romaji": "toshokan de hanashite wa ikemasen.",
          "vn": "Không được nói chuyện trong thư viện."
        }
      ]
    },
    {
      "title": "Trạng thái/Tập quán: Vて います",
      "structure": "Động từ thể Te + います",
      "usage": "Ở Bài 14, Vています chỉ hành động đang diễn ra. Ở Bài 15, Vています biểu thị TRẠNG THÁI là kết quả của hành động vẫn còn tiếp diễn (như: đã kết hôn, biết ai đó, sống ở đâu), hoặc TẬP QUÁN (nghề nghiệp, làm việc ở đâu).",
      "examples": [
        {
          "jp": "わたしは けっこんして います。",
          "romaji": "watashi wa kekkonshite imasu.",
          "vn": "Tôi đã kết hôn (hiện đang trong tình trạng có gia đình)."
        },
        {
          "jp": "ＩＭＣで はたらいて います。",
          "romaji": "IMC de hataraite imasu.",
          "vn": "Tôi làm việc ở công ty IMC (Tập quán, nghề nghiệp)."
        },
        {
          "jp": "やまださんを しって いますか。 ...いいえ、しりません。",
          "romaji": "Yamada san o shitte imasu ka. ...iie, shirimasen.",
          "vn": "Bạn có biết anh Yamada không? ...Không, tôi không biết. (LƯU Ý: Phủ định của 知っています là 知りません, không phải 知っていません)."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "A：この ほんを（　　）も いいですか。 ...B：ええ、どうぞ。",
      "options": ["かりて", "かり", "かりる", "かって"],
      "answer": "かりて",
      "vn": "A: Tôi mượn quyển sách này có được không? ...B: Vâng, xin mời.",
      "explanation": "Xin phép làm gì: Vて + もいいですか. 借ります -> 借りて."
    },
    {
      "question": "ここで しゃしんを（　　）は いけません。",
      "options": ["とって", "とり", "とる", "とらない"],
      "answer": "とって",
      "vn": "Không được chụp ảnh ở đây.",
      "explanation": "Cấm đoán: Vて + はいけません. 取ります/撮ります -> 撮って."
    },
    {
      "question": "わたしは とうきょうに（　　）います。",
      "options": ["すんで", "すみて", "すいて", "すって"],
      "answer": "すんで",
      "vn": "Tôi đang sống ở Tokyo.",
      "explanation": "Sống ở đâu dùng trợ từ に + 住んでいます (すみます -> すんで)."
    },
    {
      "question": "やまださんは ホンダで（　　）います。",
      "options": ["はたらいて", "はたらき", "はたらって", "はたらんで"],
      "answer": "はたらいて",
      "vn": "Anh Yamada đang làm việc ở Honda.",
      "explanation": "Nói về nơi làm việc dùng 働いています (はたらきます -> はたらいて)."
    },
    {
      "question": "A：すずきさんの でんわばんごうを しっていますか。 ...B：いいえ、（　　）。",
      "options": ["しりません", "しっていません", "しらないです", "しりませんでした"],
      "answer": "しりません",
      "vn": "A: Bạn có biết số điện thoại của anh Suzuki không? ...B: Không, tôi không biết.",
      "explanation": "Câu hỏi là 知っていますか, nhưng phủ định đặc biệt của từ này luôn là 知りません (しりません)."
    },
    {
      "question": "あねは けっこん（　　）。",
      "options": ["しています", "します", "しました", "してあります"],
      "answer": "しています",
      "vn": "Chị gái tôi đã kết hôn (hiện đang có gia đình).",
      "explanation": "Tình trạng hôn nhân luôn dùng thể Vています -> 結婚しています."
    },
    {
      "question": "あそこで たばこを（　　）は いけません。",
      "options": ["すって", "すいて", "すんで", "すってて"],
      "answer": "すって",
      "vn": "Không được hút thuốc ở đằng kia.",
      "explanation": "吸います (nhóm 1, đuôi い) -> 吸って + はいけません."
    },
    {
      "question": "A：この カタログを もらっても いいですか。 ...B：ええ、（　　）。",
      "options": ["いいですよ", "いけません", "だめです", "わかりました"],
      "answer": "いいですよ",
      "vn": "A: Tôi nhận cuốn catalog này có được không? ...B: Vâng, được đấy.",
      "explanation": "Cho phép, đồng ý với lời xin phép dùng ええ、いいですよ hoặc ええ、どうぞ."
    },
    {
      "question": "くるまを（　　）いますか。 ...はい、もっています。",
      "options": ["もって", "もち", "もつて", "もんで"],
      "answer": "もって",
      "vn": "Bạn có ô tô không? ...Vâng, tôi có.",
      "explanation": "Sở hữu đồ vật gì đó cũng dùng trạng thái Vています -> 持っています (持ちます -> 持って)."
    },
    {
      "question": "スーパーで パソコンの ソフトを（　　）います。",
      "options": ["うって", "うりて", "うんで", "ういて"],
      "answer": "うって",
      "vn": "Ở siêu thị có bán phần mềm máy tính.",
      "explanation": "Việc bán hàng (duy trì) dùng 売っています (売ります -> 売って)."
    },
    {
      "question": "A：ペンで こたえを かいても いいですか。 ...B：いいえ、（　　）。",
      "options": ["いけません", "いいです", "かいてください", "わかりました"],
      "answer": "いけません",
      "vn": "A: Viết câu trả lời bằng bút mực được không? ...B: Không, không được.",
      "explanation": "Trả lời phủ định của Vてもいいですか là いいえ、いけません (hoặc いいえ、Vてはいけません)."
    },
    {
      "question": "わたしの かぞくは おおさか（　　）すんでいます。",
      "options": ["に", "で", "を", "へ"],
      "answer": "に",
      "vn": "Gia đình tôi sống ở Osaka.",
      "explanation": "Động từ 住みます (sống) và 置きます (đặt để) đi với trợ từ に để chỉ địa điểm tồn tại."
    },
    {
      "question": "びょういんで おさけを（　　）はいけません。",
      "options": ["のんで", "のみて", "のって", "のいで"],
      "answer": "のんで",
      "vn": "Không được uống rượu trong bệnh viện.",
      "explanation": "飲みます -> 飲んで + はいけません."
    },
    {
      "question": "A：テレビを（　　）もいいですか。 ...B：すみません、ちょっと...",
      "options": ["つけて", "つけり", "つかって", "つかて"],
      "answer": "つけて",
      "vn": "A: Tôi bật tivi được không? ...B: Xin lỗi, hơi bất tiện... (từ chối khéo).",
      "explanation": "Bật (máy móc) là つけます (nhóm 2) -> つけて."
    },
    {
      "question": "きのう、あたらしい くるまを（　　）。",
      "options": ["かいました", "かっています", "かって", "かいます"],
      "answer": "かいました",
      "vn": "Hôm qua, tôi đã mua một chiếc ô tô mới.",
      "explanation": "きのう (hôm qua) -> Quá khứ, nên dùng 買いました. Không dùng 買っています vì đây là một hành động đã hoàn tất trong quá khứ, không phải trạng thái sở hữu (nếu sở hữu là 持っています)."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "てもいいです",
    "titleVn": "❤️ Cho phép và Cấm đoán",
    "intro": "Tóm tắt Bài 15: Xin phép làm gì, Cấm làm gì và diễn tả trạng thái hiện tại.",
    "lines": [
      {
        "kanji": "ここで写真を撮ってもいいですか。",
        "jp": "ここで しゃしんを とっても いいですか。",
        "romaji": "Koko de shashin o totte mo ii desu ka.",
        "vn": "Tôi chụp ảnh ở đây có được không?",
        "note": "てもいいですか"
      },
      {
        "kanji": "いいえ、撮ってはいけません。",
        "jp": "いいえ、とっては いけません。",
        "romaji": "Iie, totte wa ikemasen.",
        "vn": "Không, không được chụp.",
        "note": "てはいけません"
      },
      {
        "kanji": "私は東京に住んでいます。",
        "jp": "わたしは とうきょうに すんでいます。",
        "romaji": "Watashi wa Toukyou ni sunde imasu.",
        "vn": "Tôi đang sống ở Tokyo.",
        "note": "住んでいます"
      },
      {
        "kanji": "兄は結婚しています。",
        "jp": "あには けっこんして います。",
        "romaji": "Ani wa kekkonshite imasu.",
        "vn": "Anh trai tôi đã kết hôn.",
        "note": "結婚しています"
      }
    ]
  }
};

export default lesson;
