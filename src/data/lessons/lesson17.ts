import { NihongoLesson } from './types';
import { readings } from '../readings/reading17';

const lesson: NihongoLesson = {
  "id": 17,
  "chapter": "第17課",
  "title": "ない形・ないでください",
  "titleVn": "Bài 17: Phủ định V-nai",
  "theme": "Khuyên bảo và Cấm đoán",
  "words": [
    {
      "id": "L17_01",
      "word": "覚えます",
      "reading": "おぼえます",
      "romaji": "oboemasu",
      "meaning": "Nhớ, học thuộc",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "GIÁC",
        "components": "学 (Học) nhưng trên là ⺍ + 見 (Kiến)",
        "story": "Thấy (Kiến) và học hỏi để ghi Nhớ.",
        "examples": "覚えます (Nhớ, học thuộc)"
      }
    },
    {
      "id": "L17_02",
      "word": "忘れます",
      "reading": "わすれます",
      "romaji": "wasuremasu",
      "meaning": "Quên",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "VONG",
        "components": "亡 (Vong - Mất) + 心 (Tâm - Trái tim)",
        "story": "Trái tim (Tâm) đánh mất (Vong) đi ký ức là Quên.",
        "examples": "忘れます (Quên)"
      }
    },
    {
      "id": "L17_03",
      "word": "なくします",
      "reading": "なくします",
      "romaji": "nakushimasu",
      "meaning": "Làm mất",
      "type": "Động từ"
    },
    {
      "id": "L17_04",
      "word": "払います",
      "reading": "はらいます",
      "romaji": "haraimasu",
      "meaning": "Trả tiền",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "PHẤT",
        "components": "扌 (Thủ) + ム (Khư)",
        "story": "Dùng tay (Thủ) trả tiền.",
        "examples": "払います (Trả tiền)"
      }
    },
    {
      "id": "L17_05",
      "word": "返します",
      "reading": "かえします",
      "romaji": "kaeshimasu",
      "meaning": "Trả lại",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "PHẢN",
        "components": "辶 (Sước) + 反 (Phản)",
        "story": "Chuyển động (Sước) ngược lại (Phản) là Trả lại.",
        "examples": "返します (Trả lại)"
      }
    },
    {
      "id": "L17_06",
      "word": "出かけます",
      "reading": "でかけます",
      "romaji": "dekakemasu",
      "meaning": "Ra ngoài",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XUẤT",
        "components": "出 (Xuất) + かけます",
        "story": "Đi ra ngoài.",
        "examples": "出かけます (Ra ngoài)"
      }
    },
    {
      "id": "L17_07",
      "word": "脱ぎます",
      "reading": "ぬぎます",
      "romaji": "nugimasu",
      "meaning": "Cởi (quần áo, giày)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THOÁT",
        "components": "月 (Nhục - Cơ thể) + 兌 (Đoái - Thay đổi)",
        "story": "Thay đổi (Đoái) quần áo trên cơ thể (Nhục) là Cởi.",
        "examples": "脱ぎます (Cởi (quần áo, giày))"
      }
    },
    {
      "id": "L17_08",
      "word": "持って行きます",
      "reading": "もっていきます",
      "romaji": "motte ikimasu",
      "meaning": "Mang đi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRÌ HÀNH",
        "components": "持 (Trì) + 行 (Hành)",
        "story": "Cầm và đi (Mang đi).",
        "examples": "持って行きます (Mang đi)"
      }
    },
    {
      "id": "L17_09",
      "word": "持って来ます",
      "reading": "もってきます",
      "romaji": "motte kimasu",
      "meaning": "Mang đến",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRÌ LAI",
        "components": "持 (Trì) + 来 (Lai)",
        "story": "Cầm và đến (Mang đến).",
        "examples": "持って来ます (Mang đến)"
      }
    },
    {
      "id": "L17_10",
      "word": "心配します",
      "reading": "しんぱいします",
      "romaji": "shinpaishimasu",
      "meaning": "Lo lắng",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TÂM PHỐI",
        "components": "心 (Tâm) + 配 (Phối - Phân phát)",
        "story": "Trái tim (Tâm) bị phân phát (Phối) đi nhiều nơi nên Lo lắng.",
        "examples": "心配します (Lo lắng)"
      }
    },
    {
      "id": "L17_11",
      "word": "残業します",
      "reading": "ざんぎょうします",
      "romaji": "zangyoushimasu",
      "meaning": "Làm thêm giờ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TÀN NGHIỆP",
        "components": "残 (Tàn - Còn lại) + 業 (Nghiệp - Công việc)",
        "story": "Làm nốt công việc (Nghiệp) còn lại (Tàn) là Làm thêm giờ.",
        "examples": "残業します (Làm thêm giờ)"
      }
    },
    {
      "id": "L17_12",
      "word": "出張します",
      "reading": "しゅっちょうします",
      "romaji": "shucchoushimasu",
      "meaning": "Đi công tác",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "XUẤT TRƯƠNG",
        "components": "出 (Xuất) + 張 (Trương - Kéo dài)",
        "story": "Đi ra ngoài dài ngày là Đi công tác.",
        "examples": "出張します (Đi công tác)"
      }
    },
    {
      "id": "L17_13",
      "word": "薬",
      "reading": "くすり",
      "romaji": "kusuri",
      "meaning": "Thuốc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DƯỢC",
        "components": "艹 (Thảo) + 楽 (Lạc - Vui vẻ)",
        "story": "Uống thảo mộc (Thảo) vào sẽ thấy khỏe mạnh vui vẻ (Lạc) là Thuốc.",
        "examples": "薬 (Thuốc)"
      }
    },
    {
      "id": "L17_14",
      "word": "お風呂",
      "reading": "おふろ",
      "romaji": "ofuro",
      "meaning": "Bồn tắm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHONG LỮ",
        "components": "風 (Phong - Gió) + 呂 (Lữ - Xương sống)",
        "story": "Tắm rửa trong bồn tắm.",
        "examples": "お風呂 (Bồn tắm)"
      }
    },
    {
      "id": "L17_15",
      "word": "大切（な）",
      "reading": "たいせつ",
      "romaji": "taisetsu",
      "meaning": "Quan trọng",
      "type": "Tính từ na",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI THIẾT",
        "components": "大 (Đại) + 切 (Thiết - Cắt)",
        "story": "Cắt đi một miếng lớn rất là Quan trọng.",
        "examples": "大切 (Quan trọng)"
      }
    },
    {
      "id": "L17_16",
      "word": "大丈夫（な）",
      "reading": "だいじょうぶ",
      "romaji": "daijoubu",
      "meaning": "Không sao",
      "type": "Tính từ na",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI TRƯỢNG PHU",
        "components": "大 (Đại) + 丈 (Trượng) + 夫 (Phu)",
        "story": "Người đàn ông trưởng thành to lớn thì không có gì phải sợ (Không sao).",
        "examples": "大丈夫 (Không sao)"
      }
    },
    {
      "id": "L17_17",
      "word": "危ない",
      "reading": "あぶない",
      "romaji": "abunai",
      "meaning": "Nguy hiểm",
      "type": "Tính từ i",
      "kanjiBreakdown": {
        "hanviet": "NGUY",
        "components": "厄 (Ách) + 卩 (Tiết)",
        "story": "Tai ách sắp đến rất Nguy hiểm.",
        "examples": "危ない (Nguy hiểm)"
      }
    },
    {
      "id": "L17_18",
      "word": "禁煙",
      "reading": "きんえん",
      "romaji": "kinen",
      "meaning": "Cấm hút thuốc",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CẤM YÊN",
        "components": "禁 (Cấm) + 煙 (Yên - Khói)",
        "story": "Cấm khói nghĩa là Cấm hút thuốc.",
        "examples": "禁煙 (Cấm hút thuốc)"
      }
    },
    {
      "id": "L17_19",
      "word": "保険証",
      "reading": "ほけんしょう",
      "romaji": "hokenshou",
      "meaning": "Thẻ bảo hiểm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BẢO HIỂM CHỨNG",
        "components": "保 (Bảo) + 険 (Hiểm) + 証 (Chứng)",
        "story": "Thẻ chứng nhận bảo hiểm.",
        "examples": "保険証 (Thẻ bảo hiểm)"
      }
    },
    {
      "id": "L17_20",
      "word": "熱",
      "reading": "ねつ",
      "romaji": "netsu",
      "meaning": "Sốt",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHIỆT",
        "components": "執 (Chấp) + 灬 (Hỏa - Lửa)",
        "story": "Cầm lửa trong tay rất Nóng/Sốt.",
        "examples": "熱 (Sốt)"
      }
    },
    {
      "id": "L17_21",
      "word": "健康保険証",
      "reading": "けんこうほけんしょう",
      "romaji": "kenkou hokenshou",
      "meaning": "Thẻ bảo hiểm y tế",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIỆN KHANG",
        "components": "健康 (Kiện Khang - Sức khỏe) + 保険証 (Thẻ bảo hiểm)",
        "story": "Thẻ bảo hiểm y tế.",
        "examples": "健康保険証 (Thẻ bảo hiểm y tế)"
      }
    },
    {
      "id": "L17_22",
      "word": "風邪",
      "reading": "かぜ",
      "romaji": "kaze",
      "meaning": "Cảm cúm",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "PHONG TÀ",
        "components": "風 (Phong) + 邪 (Tà)",
        "story": "Gió độc (Tà) thổi vào gây Cảm cúm.",
        "examples": "風邪 (Cảm cúm)"
      }
    },
    {
      "id": "L17_23",
      "word": "病気",
      "reading": "びょうき",
      "romaji": "byouki",
      "meaning": "Ốm, bệnh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BỆNH KHÍ",
        "components": "病 (Bệnh) + 気 (Khí)",
        "story": "Tâm trạng ốm yếu là Bệnh.",
        "examples": "病気 (Ốm, bệnh)"
      }
    },
    {
      "id": "L17_24",
      "word": "上着",
      "reading": "うわぎ",
      "romaji": "uwagi",
      "meaning": "Áo khoác",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THƯỢNG TRƯỚC",
        "components": "上 (Thượng) + 着 (Trước - Mặc)",
        "story": "Áo khoác mặc bên trên.",
        "examples": "上着 (Áo khoác)"
      }
    },
    {
      "id": "L17_25",
      "word": "下着",
      "reading": "したぎ",
      "romaji": "shitagi",
      "meaning": "Quần áo lót",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "HẠ TRƯỚC",
        "components": "下 (Hạ) + 着 (Trước)",
        "story": "Đồ lót mặc bên dưới.",
        "examples": "下着 (Quần áo lót)"
      }
    },
    {
      "id": "L17_26",
      "word": "２、３日",
      "reading": "に、さんにち",
      "romaji": "ni, san nichi",
      "meaning": "2, 3 ngày",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHẬT",
        "components": "日 (Nhật)",
        "story": "2, 3 ngày.",
        "examples": "２、３日 (2, 3 ngày)"
      }
    },
    {
      "id": "L17_27",
      "word": "〜までに",
      "reading": "〜までに",
      "romaji": "~madeni",
      "meaning": "Trước ~ (thời hạn)",
      "type": "Trợ từ"
    },
    {
      "id": "L17_28",
      "word": "ですから",
      "reading": "ですから",
      "romaji": "desukara",
      "meaning": "Vì thế, do đó",
      "type": "Liên từ"
    },
    {
      "id": "L17_29",
      "word": "どうしましたか",
      "reading": "どうしましたか",
      "romaji": "dou shimashita ka",
      "meaning": "Bạn bị sao vậy?",
      "type": "Mẫu câu"
    },
    {
      "id": "L17_30",
      "word": "のど",
      "reading": "のど",
      "romaji": "nodo",
      "meaning": "Cổ họng",
      "type": "Danh từ"
    },
    {
      "id": "L17_31",
      "word": "お大事に",
      "reading": "おだいじに",
      "romaji": "odaiji ni",
      "meaning": "Chúc mau khỏe nhé",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI SỰ",
        "components": "大 (Đại) + 事 (Sự)",
        "story": "Chúc bảo trọng việc lớn (Sức khỏe).",
        "examples": "お大事に (Chúc mau khỏe nhé)"
      }
    }
  ],
  "grammar": [
    {
      "title": "Cách chia Thể Nai (ない形)",
      "structure": "Tùy theo nhóm động từ mà có quy tắc chia sang phủ định ngắn (Thể Nai)",
      "usage": "Nhóm 1: Chuyển âm cuối trước ます từ hàng [i] sang hàng [a] + ない. LƯU Ý: Đuôi [い] chuyển thành [わ] + ない (VD: かいます -> かわない). Nhóm 2: Bỏ ます thêm ない. Nhóm 3: します -> しない, きます -> こない.",
      "examples": [
        {
          "jp": "かきます -> かかない / のみます -> のまない / いそぎます -> いそがない",
          "romaji": "kakimasu -> kakanai / nomimasu -> nomanai / isogimasu -> isoganai",
          "vn": "Nhóm 1: Viết -> Không viết / Uống -> Không uống / Vội -> Không vội"
        },
        {
          "jp": "たべます -> たべない / みます -> みない",
          "romaji": "tabemasu -> tabenai / mimasu -> minai",
          "vn": "Nhóm 2: Ăn -> Không ăn / Xem -> Không xem"
        },
        {
          "jp": "します -> しない / きます -> こない",
          "romaji": "shimasu -> shinai / kimasu -> konai",
          "vn": "Nhóm 3: Làm -> Không làm / Đến -> Không đến"
        }
      ]
    },
    {
      "title": "Xin đừng làm: Vないで ください",
      "structure": "Động từ thể Nai + で ください",
      "usage": "Dùng để khuyên bảo hoặc yêu cầu ai đó ĐỪNG làm một việc gì đó một cách lịch sự.",
      "examples": [
        {
          "jp": "ここで しゃしんを とらないで ください。",
          "romaji": "koko de shashin o toranaide kudasai.",
          "vn": "Xin đừng chụp ảnh ở đây."
        },
        {
          "jp": "わたしは げんきですから、しんぱいしないで ください。",
          "romaji": "watashi wa genki desu kara, shinpaishinaide kudasai.",
          "vn": "Vì tôi khỏe nên xin đừng lo lắng."
        }
      ]
    },
    {
      "title": "Nghĩa vụ (Phải làm gì): Vなければ なりません",
      "structure": "Động từ thể Nai (bỏ ない) + なければ なりません",
      "usage": "Diễn tả một nghĩa vụ, bổn phận phải thực hiện (không liên quan đến ý muốn chủ quan của người nói). Dịch là: Phải làm ~.",
      "examples": [
        {
          "jp": "くすりを のまなければ なりません。",
          "romaji": "kusuri o nomanakereba narimasen.",
          "vn": "Phải uống thuốc."
        },
        {
          "jp": "あした はやく おきなければ なりません。",
          "romaji": "ashita hayaku okinakereba narimasen.",
          "vn": "Ngày mai phải thức dậy sớm."
        }
      ]
    },
    {
      "title": "Sự cho phép (Không làm cũng được): Vなくても いいです",
      "structure": "Động từ thể Nai (bỏ ない) + なくても いいです",
      "usage": "Diễn tả sự không cần thiết phải thực hiện một hành động. Dịch là: Không làm ~ cũng được.",
      "examples": [
        {
          "jp": "あした こなくても いいです。",
          "romaji": "ashita konakute mo ii desu.",
          "vn": "Ngày mai không đến cũng được."
        },
        {
          "jp": "くつを ぬがなくても いいです。",
          "romaji": "kutsu o nuganakute mo ii desu.",
          "vn": "Không cởi giày ra cũng được."
        }
      ]
    },
    {
      "title": "Thời hạn: N(thời gian) + までに",
      "structure": "Danh từ thời gian + までに + Động từ",
      "usage": "Diễn tả thời hạn cuối cùng mà một hành động hay sự việc phải được thực hiện. Khác với 'まで' (cho đến khi - hành động liên tục), 'までに' chỉ một mốc giới hạn.",
      "examples": [
        {
          "jp": "きんようびまでに レポートを ださなければ なりません。",
          "romaji": "kinyoubi made ni repooto o dasanakereba narimasen.",
          "vn": "Phải nộp báo cáo TRƯỚC thứ Sáu."
        },
        {
          "jp": "１２じまでに かえります。",
          "romaji": "juuniji made ni kaerimasu.",
          "vn": "Sẽ trở về TRƯỚC 12 giờ."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "ここで しゃしんを（　　）で ください。",
      "options": ["とらない", "とら", "とって", "とる"],
      "answer": "とらない",
      "vn": "Xin đừng chụp ảnh ở đây.",
      "explanation": "Khuyên bảo đừng làm gì: Vない + でください. 撮ります -> 撮らない."
    },
    {
      "question": "あしたは やすみですから、はやく（　　）もいいです。",
      "options": ["おきなくて", "おきない", "おきって", "おきて"],
      "answer": "おきなくて",
      "vn": "Vì ngày mai là ngày nghỉ nên không dậy sớm cũng được.",
      "explanation": "Không làm cũng được: Vなくてもいいです. 起きます -> 起きない -> 起きなくても."
    },
    {
      "question": "「かいます」の ない形は なにですか。",
      "options": ["かわない", "かかない", "かあない", "かまない"],
      "answer": "かわない",
      "vn": "Thể Nai của \"Kaimasu\" (Mua) là gì?",
      "explanation": "Động từ nhóm 1 tận cùng bằng い sẽ chuyển thành わ + ない. 買います -> 買わない."
    },
    {
      "question": "「きます」(Đến) の ない形は なにですか。",
      "options": ["こない", "きない", "かない", "くない"],
      "answer": "こない",
      "vn": "Thể Nai của \"Kimasu\" (Đến) là gì?",
      "explanation": "きます (Đến) thuộc nhóm 3, thể Nai đặc biệt là こない."
    },
    {
      "question": "まいにち にほんごを（　　）ければ なりません。",
      "options": ["べんきょうしな", "べんきょうして", "べんきょうする", "べんきょうし"],
      "answer": "べんきょうしな",
      "vn": "Mỗi ngày phải học tiếng Nhật.",
      "explanation": "Phải làm gì: Vない (bỏ ない) + なければなりません. 勉強します -> 勉強しない -> 勉強しなければ."
    },
    {
      "question": "パスポートを（　　）で ください。",
      "options": ["なくさない", "なくして", "なくさ", "なくす"],
      "answer": "なくさない",
      "vn": "Xin đừng làm mất hộ chiếu.",
      "explanation": "Vないでください. なくします (làm mất) -> なくさない."
    },
    {
      "question": "らいしゅうの げつようび（　　）ほんを かえさなければなりません。",
      "options": ["までに", "まで", "から", "で"],
      "answer": "までに",
      "vn": "Phải trả sách trước thứ Hai tuần sau.",
      "explanation": "Hành động (trả sách) diễn ra tại một mốc thời hạn cụ thể -> dùng までに."
    },
    {
      "question": "「のみます」の ない形は なにですか。",
      "options": ["のまない", "のめない", "のみない", "のものい"],
      "answer": "のまない",
      "vn": "Thể Nai của \"Nomimasu\" (Uống) là gì?",
      "explanation": "Nhóm 1: Hàng い -> Hàng あ + ない. 飲みます -> 飲まない."
    },
    {
      "question": "きょうは あめが ふっていませんから、かさを（　　）もいいです。",
      "options": ["もっていかなくて", "もっていって", "もってこなくて", "もっていかかないで"],
      "answer": "もっていかなくて",
      "vn": "Vì hôm nay trời không mưa nên không mang ô đi cũng được.",
      "explanation": "持って行きます -> 持って行かない -> 持って行かなくてもいいです."
    },
    {
      "question": "A：ここで じしょを つかっても いいですか。 ...B：いいえ、（　　）。",
      "options": ["つかわないで ください", "つかわなくてもいいです", "つかってもいいです", "つかってください"],
      "answer": "つかわないで ください",
      "vn": "A: Dùng từ điển ở đây có được không? ...B: Không, xin đừng dùng.",
      "explanation": "Từ chối dùng ないでください hoặc てはいけません. Nhóm 1: 使います -> 使わない."
    },
    {
      "question": "びょうきですから、くすりを（　　）。",
      "options": ["のまなければ なりません", "のまなくても いいです", "のまないでください", "のんでください"],
      "answer": "のまなければ なりません",
      "vn": "Vì bị ốm nên phải uống thuốc.",
      "explanation": "Nghĩa vụ, phải làm việc gì đó (uống thuốc khi ốm) -> なければなりません."
    },
    {
      "question": "「たべます」の ない形は なにですか。",
      "options": ["たべない", "たばない", "たばないで", "たべてない"],
      "answer": "たべない",
      "vn": "Thể Nai của \"Tabemasu\" (Ăn) là gì?",
      "explanation": "Nhóm 2: Bỏ ます thêm ない. 食べます -> 食べない."
    },
    {
      "question": "あの へやに（　　）で ください。",
      "options": ["はいらない", "はいって", "はいらな", "はいれな"],
      "answer": "はいらない",
      "vn": "Xin đừng vào căn phòng đó.",
      "explanation": "入ります (vào) tuy kết thúc bằng い/り nhưng là Nhóm 1 đặc biệt -> 入らない."
    },
    {
      "question": "なまえは ボールペンで かいて ください。えんぴつで（　　）で ください。",
      "options": ["かかない", "かわない", "かかって", "かくて"],
      "answer": "かかない",
      "vn": "Xin hãy viết tên bằng bút bi. Xin đừng viết bằng bút chì.",
      "explanation": "書きます -> 書かない (Đừng viết)."
    },
    {
      "question": "「まちます」の ない形は なにですか。",
      "options": ["またない", "またないで", "まわない", "まちない"],
      "answer": "またない",
      "vn": "Thể Nai của \"Machimasu\" (Đợi) là gì?",
      "explanation": "Nhóm 1 đuôi ち -> た + ない. 待ちます -> 待たない."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "ない形・ないでください",
    "titleVn": "❤️ Khuyên bảo và Nghĩa vụ",
    "intro": "Tóm tắt Bài 17: Phủ định V-nai, mẫu câu xin đừng, phải làm và không cần làm.",
    "lines": [
      {
        "kanji": "ここで写真を撮らないでください。",
        "jp": "ここで しゃしんを とらないで ください。",
        "romaji": "Koko de shashin o toranaide kudasai.",
        "vn": "Xin đừng chụp ảnh ở nơi này.",
        "note": "Vないでください"
      },
      {
        "kanji": "明日早く起きなければなりません。",
        "jp": "あした はやく おきなければ なりません。",
        "romaji": "Ashita hayaku okinakereba narimasen.",
        "vn": "Sáng mai phải dậy sớm thôi.",
        "note": "Vなければなりません"
      },
      {
        "kanji": "日曜日は働かなくてもいいです。",
        "jp": "にちようびは はたらかなくても いいです。",
        "romaji": "Nichiyoubi wa hatarakanakute mo ii desu.",
        "vn": "Chủ Nhật thì không đi làm cũng được.",
        "note": "Vなくてもいいです"
      },
      {
        "kanji": "金曜日までにレポートを出します。",
        "jp": "きんようびまでに レポートを だします。",
        "romaji": "Kinyoubi made ni repooto o dashimasu.",
        "vn": "Trước thứ Sáu tôi sẽ nộp báo cáo.",
        "note": "までに"
      }
    ]
  }
};

export default lesson;
