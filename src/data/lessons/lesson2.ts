import { NihongoLesson } from './types';
import { readings } from '../readings/reading2';

const lesson: NihongoLesson = {
  "id": 2,
  "chapter": "第2課",
  "title": "これはなんですか",
  "titleVn": "Bài 2: Cái này là cái gì?",
  "theme": "Chỉ thị từ · Đồ vật · Sở hữu",
  "words": [
    {
      "id": "L2_01",
      "word": "これ",
      "reading": "これ",
      "romaji": "kore",
      "meaning": "Cái này (gần người nói)",
      "type": "Đại từ"
    },
    {
      "id": "L2_02",
      "word": "それ",
      "reading": "それ",
      "romaji": "sore",
      "meaning": "Cái đó (gần người nghe)",
      "type": "Đại từ"
    },
    {
      "id": "L2_03",
      "word": "あれ",
      "reading": "あれ",
      "romaji": "are",
      "meaning": "Cái kia (xa cả hai)",
      "type": "Đại từ"
    },
    {
      "id": "L2_04",
      "word": "この",
      "reading": "この",
      "romaji": "kono",
      "meaning": "Cái này ... (+ danh từ)",
      "type": "Từ chỉ định"
    },
    {
      "id": "L2_05",
      "word": "その",
      "reading": "その",
      "romaji": "sono",
      "meaning": "Cái đó ... (+ danh từ)",
      "type": "Từ chỉ định"
    },
    {
      "id": "L2_06",
      "word": "あの",
      "reading": "あの",
      "romaji": "ano",
      "meaning": "Cái kia ... (+ danh từ)",
      "type": "Từ chỉ định"
    },
    {
      "id": "L2_07",
      "word": "どれ",
      "reading": "どれ",
      "romaji": "dore",
      "meaning": "Cái nào?",
      "type": "Đại từ"
    },
    {
      "id": "L2_08",
      "word": "どの",
      "reading": "どの",
      "romaji": "dono",
      "meaning": "Cái ... nào? (+ danh từ)",
      "type": "Từ chỉ định"
    },
    {
      "id": "L2_09",
      "word": "本",
      "reading": "ほん",
      "romaji": "hon",
      "meaning": "Sách",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "BẢN",
        "components": "本 = 木 (Mộc - Cây) + Nhất (Một gạch ngang ở dưới)",
        "story": "Gạch ngang nằm ở dưới gốc cây để chỉ cái gốc rễ, cội nguồn. Sách vở chính là cội nguồn của tri thức.",
        "examples": "本 (Sách), 日本 (Nhật Bản)"
      }
    },
    {
      "id": "L2_10",
      "word": "辞書",
      "reading": "じしょ",
      "romaji": "jisho",
      "meaning": "Từ điển",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỪ THƯ",
        "components": "辞 (Từ - Cáo từ/Ngôn từ) + 書 (Thư - Viết/Sách)",
        "story": "Cuốn sách (Thư) chứa đựng các từ ngữ (Từ) chính là Từ Điển.",
        "examples": "辞書 (Từ điển), 辞める (Từ bỏ)"
      }
    },
    {
      "id": "L2_11",
      "word": "雑誌",
      "reading": "ざっし",
      "romaji": "zasshi",
      "meaning": "Tạp chí",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẠP CHÍ",
        "components": "雑 (Tạp - Pha trộn) + 誌 (Chí - Ghi chép)",
        "story": "Quyển sổ ghi chép (Chí) đủ thứ pha trộn tạp nham (Tạp) gọi là Tạp Chí.",
        "examples": "雑誌 (Tạp chí), 複雑 (Phức tạp)"
      }
    },
    {
      "id": "L2_12",
      "word": "新聞",
      "reading": "しんぶん",
      "romaji": "shinbun",
      "meaning": "Báo (tờ báo)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TÂN VĂN",
        "components": "新 (Tân - Mới) + 聞 (Văn - Nghe)",
        "story": "Những chuyện mới (Tân) mà mình nghe được (Văn) đều đăng lên báo.",
        "examples": "新聞 (Tờ báo), 新しい (Mới)"
      }
    },
    {
      "id": "L2_13",
      "word": "ノート",
      "reading": "ノート",
      "romaji": "nooto",
      "meaning": "Vở, sổ tay",
      "type": "Danh từ"
    },
    {
      "id": "L2_13b",
      "word": "手帳",
      "reading": "てちょう",
      "romaji": "techou",
      "meaning": "Sổ tay (loại nhỏ)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ TRƯỚNG",
        "components": "手 (Thủ - Tay) + 帳 (Trướng - Sổ)",
        "story": "Cuốn sổ (Trướng) nhỏ cầm vừa trong lòng bàn tay (Thủ).",
        "examples": "手帳 (Sổ tay)"
      }
    },

    {
      "id": "L2_14",
      "word": "鉛筆",
      "reading": "えんぴつ",
      "romaji": "enpitsu",
      "meaning": "Bút chì",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DUYÊN BÚT",
        "components": "鉛 (Duyên - Chì) + 筆 (Bút - Cây bút)",
        "story": "Cây bút được làm từ lõi chì mỏng manh.",
        "examples": "鉛筆 (Bút chì)"
      }
    },
    {
      "id": "L2_15",
      "word": "ボールペン",
      "reading": "ボールペン",
      "romaji": "boorupen",
      "meaning": "Bút bi",
      "type": "Danh từ"
    },
    {
      "id": "L2_15b",
      "word": "シャープペンシル",
      "reading": "シャープペンシル",
      "romaji": "shaapupenshiru",
      "meaning": "Bút chì kim",
      "type": "Danh từ"
    },
    {
      "id": "L2_16",
      "word": "かばん",
      "reading": "かばん",
      "romaji": "kaban",
      "meaning": "Túi xách, cặp",
      "type": "Danh từ"
    },
    {
      "id": "L2_17",
      "word": "傘",
      "reading": "かさ",
      "romaji": "kasa",
      "meaning": "Ô (dù)",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TẢN",
        "components": "傘 = 𠆢 (Mái nhà/Cái ô) + 4 x 人 (Người) + 十 (Cán / Tay cầm)",
        "story": "4 người cùng núp chung dưới 1 cái ô.",
        "examples": "傘 (Cái ô)"
      }
    },
    {
      "id": "L2_18",
      "word": "鍵",
      "reading": "かぎ",
      "romaji": "kagi",
      "meaning": "Chìa khóa",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KIỆN",
        "components": "金 (Kim - Kim loại) + 建 (Kiến - Xây dựng)",
        "story": "Chìa khóa làm bằng kim loại (Kim) để khóa chặt những công trình vừa xây dựng (Kiến).",
        "examples": "鍵 (Chìa khóa)"
      }
    },
    {
      "id": "L2_19",
      "word": "時計",
      "reading": "とけい",
      "romaji": "tokei",
      "meaning": "Đồng hồ",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "THỜI KẾ",
        "components": "時 (Thời - Thời gian) + 計 (Kế - Kế toán/Đo đếm)",
        "story": "Công cụ dùng để đo lường, tính đếm (Kế) thời gian (Thời) là Đồng hồ.",
        "examples": "時計 (Đồng hồ), 時間 (Thời gian)"
      }
    },
    {
      "id": "L2_20",
      "word": "電話",
      "reading": "でんわ",
      "romaji": "denwa",
      "meaning": "Điện thoại",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỆN THOẠI",
        "components": "電 (Điện: Vũ 雨 mưa + Điền 田 ruộng) + 話 (Thoại: Ngôn 言 nói + Thiệt 舌 cái lưỡi)",
        "story": "Mưa xuống ruộng sinh ra ĐIỆN. Dùng lưỡi nói ra lời là THOẠI. Ghép lại là Điện Thoại.",
        "examples": "電話 (Điện thoại), 電気 (Điện khí - Đồ điện)"
      }
    },
    {
      "id": "L2_21",
      "word": "テレビ",
      "reading": "テレビ",
      "romaji": "terebi",
      "meaning": "Tivi",
      "type": "Danh từ"
    },
    {
      "id": "L2_22",
      "word": "ラジオ",
      "reading": "ラジオ",
      "romaji": "rajio",
      "meaning": "Đài radio",
      "type": "Danh từ"
    },
    {
      "id": "L2_23",
      "word": "カメラ",
      "reading": "カメラ",
      "romaji": "kamera",
      "meaning": "Máy ảnh",
      "type": "Danh từ"
    },
    {
      "id": "L2_23b",
      "word": "カセット",
      "reading": "カセット",
      "romaji": "kasetto",
      "meaning": "Băng cassette",
      "type": "Danh từ"
    },
    {
      "id": "L2_23c",
      "word": "テープレコーダー",
      "reading": "テープレコーダー",
      "romaji": "teepurekoodaa",
      "meaning": "Máy ghi âm",
      "type": "Danh từ"
    },
    {
      "id": "L2_23d",
      "word": "カード",
      "reading": "カード",
      "romaji": "kaado",
      "meaning": "Thẻ, cạc",
      "type": "Danh từ"
    },
    {
      "id": "L2_23e",
      "word": "テレホンカード",
      "reading": "テレホンカード",
      "romaji": "terehonkaado",
      "meaning": "Thẻ điện thoại",
      "type": "Danh từ"
    },
    {
      "id": "L2_24",
      "word": "名刺",
      "reading": "めいし",
      "romaji": "meishi",
      "meaning": "Danh thiếp",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "DANH THỨ",
        "components": "名 (Danh - Tên) + 刺 (Thứ - Đâm/Gai/Thẻ)",
        "story": "Tấm thẻ (Thứ) mang tên mình (Danh) gọi là Danh Thiếp.",
        "examples": "名刺 (Danh thiếp), 名前 (Tên gọi)"
      }
    },
    {
      "id": "L2_25",
      "word": "〜の",
      "reading": "〜の",
      "romaji": "~no",
      "meaning": "Của ~ (trợ từ sở hữu)",
      "type": "Trợ từ"
    },
    {
      "id": "L2_26",
      "word": "そうです",
      "reading": "そうです",
      "romaji": "sou desu",
      "meaning": "Đúng vậy / Đúng rồi",
      "type": "Mẫu câu"
    },
    {
      "id": "L2_27",
      "word": "ちがいます",
      "reading": "ちがいます",
      "romaji": "chigaimasu",
      "meaning": "Sai / Không phải vậy",
      "type": "Động từ"
    },
    {
      "id": "L2_28",
      "word": "しつれいですが",
      "reading": "しつれいですが",
      "romaji": "shitsurei desu ga",
      "meaning": "Xin phép hỏi (lịch sự)",
      "type": "Mẫu câu"
    },
    {
      "id": "L2_29",
      "word": "コンピューター",
      "reading": "コンピューター",
      "romaji": "konpyuutaa",
      "meaning": "Máy tính",
      "type": "Danh từ"
    },
    {
      "id": "L2_30",
      "word": "自動車",
      "reading": "じどうしゃ",
      "romaji": "jidousha",
      "meaning": "Ô tô",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "TỰ ĐỘNG XA",
        "components": "自 (Tự) + 動 (Động) + 車 (Xa)",
        "story": "Chiếc xe (Xa) có khả năng tự (Tự) chuyển động (Động) chính là Ô tô.",
        "examples": "自動車 (Ô tô), 自動 (Tự động)"
      }
    },
    {
      "id": "L2_31",
      "word": "机",
      "reading": "つくえ",
      "romaji": "tsukue",
      "meaning": "Bàn",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "KỶ",
        "components": "木 (Mộc) + 几 (Kỷ)",
        "story": "Cái bàn nhỏ (Kỷ) được đóng bằng gỗ (Mộc) chính là cái bàn học/bàn làm việc.",
        "examples": "机 (Bàn)"
      }
    },
    {
      "id": "L2_32",
      "word": "いす",
      "reading": "いす",
      "romaji": "isu",
      "meaning": "Ghế",
      "type": "Danh từ"
    },
    {
      "id": "L2_33",
      "word": "チョコレート",
      "reading": "チョコレート",
      "romaji": "chokoreeto",
      "meaning": "Sô-cô-la",
      "type": "Danh từ"
    },
    {
      "id": "L2_34",
      "word": "コーヒー",
      "reading": "コーヒー",
      "romaji": "koohii",
      "meaning": "Cà phê",
      "type": "Danh từ"
    },
    {
      "id": "L2_35",
      "word": "英語",
      "reading": "えいご",
      "romaji": "eigo",
      "meaning": "Tiếng Anh",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ANH NGỮ",
        "components": "英 (Anh) + 語 (Ngữ)",
        "story": "Ngôn ngữ (Ngữ) của người Anh (Anh).",
        "examples": "英語 (Tiếng Anh), 英国 (Nước Anh)"
      }
    },
    {
      "id": "L2_36",
      "word": "日本語",
      "reading": "にほんご",
      "romaji": "nihongo",
      "meaning": "Tiếng Nhật",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "NHẬT BẢN NGỮ",
        "components": "日 (Nhật) + 本 (Bản) + 語 (Ngữ)",
        "story": "Ngôn ngữ (Ngữ) của đất nước cội nguồn (Bản) mặt trời (Nhật).",
        "examples": "日本語 (Tiếng Nhật)"
      }
    },
    {
      "id": "L2_37",
      "word": "～語",
      "reading": "～ご",
      "romaji": "~go",
      "meaning": "Tiếng ~",
      "type": "Hậu tố",
      "kanjiBreakdown": {
        "hanviet": "NGỮ",
        "components": "言 (Ngôn) + 吾 (Ngô)",
        "story": "Ngôn ngữ là những lời nói (Ngôn) của tôi (Ngô) truyền đạt cho người khác.",
        "examples": "言語 (Ngôn ngữ), 英語 (Tiếng Anh)"
      }
    },
    {
      "id": "L2_38",
      "word": "何",
      "reading": "なん",
      "romaji": "nan",
      "meaning": "Cái gì",
      "type": "Từ để hỏi",
      "kanjiBreakdown": {
        "hanviet": "HÀ",
        "components": "亻 (Nhân) + 可 (Khả)",
        "story": "Con người (Nhân) đang hỏi xem có khả năng (Khả) làm được cái gì.",
        "examples": "何 (Cái gì), 何時 (Mấy giờ)"
      }
    },
    {
      "id": "L2_39",
      "word": "そう",
      "reading": "そう",
      "romaji": "sou",
      "meaning": "Đúng vậy",
      "type": "Phó từ"
    },
    {
      "id": "L2_40",
      "word": "あのう",
      "reading": "あのう",
      "romaji": "anou",
      "meaning": "À, ờ (ngập ngừng)",
      "type": "Cảm thán"
    },
    {
      "id": "L2_41",
      "word": "ほんの気持ちです",
      "reading": "ほんのきもちです",
      "romaji": "hon no kimochi desu",
      "meaning": "Chút lòng thành",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "KHÍ TRÌ",
        "components": "気 (Khí) + 持 (Trì)",
        "story": "Giữ (Trì) trong lòng một chút tâm trạng (Khí) để bày tỏ tấm lòng thành.",
        "examples": "気持ち (Cảm giác/Tấm lòng)"
      }
    },
    {
      "id": "L2_42",
      "word": "どうぞ",
      "reading": "どうぞ",
      "romaji": "douzo",
      "meaning": "Xin mời",
      "type": "Mẫu câu"
    },
    {
      "id": "L2_43",
      "word": "どうも",
      "reading": "どうも",
      "romaji": "doumo",
      "meaning": "Cảm ơn",
      "type": "Mẫu câu"
    },
    {
      "id": "L2_43b",
      "word": "どうもありがとうございます",
      "reading": "どうもありがとうございます",
      "romaji": "doumo arigatou gozaimasu",
      "meaning": "Xin chân thành cảm ơn",
      "type": "Mẫu câu"
    },
    {
      "id": "L2_43c",
      "word": "あ",
      "reading": "あ",
      "romaji": "a",
      "meaning": "A! (Cách nói khi nhận ra điều gì)",
      "type": "Thán từ"
    },
    {
      "id": "L2_44",
      "word": "これからお世話になります",
      "reading": "これからおせわになります",
      "romaji": "korekara osewani narimasu",
      "meaning": "Từ nay mong được giúp đỡ",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "THẾ THOẠI",
        "components": "世 (Thế) + 話 (Thoại)",
        "story": "Ở trên đời (Thế) luôn nói (Thoại) những lời quan tâm, chăm sóc lẫn nhau.",
        "examples": "世話 (Chăm sóc/Giúp đỡ)"
      }
    },
    {
      "id": "L2_45",
      "word": "こちらこそよろしく",
      "reading": "こちらこそよろしく",
      "romaji": "kochirakoso yoroshiku",
      "meaning": "Chính tôi mong được giúp đỡ",
      "type": "Mẫu câu"
    }
  ],
  "grammar": [
    {
      "title": "これ / それ / あれ",
      "structure": "これ/それ/あれ は N です",
      "usage": "Đại từ chỉ thị dùng như danh từ chỉ đồ vật.\n- これ (kore): Cái này (vật ở gần người nói).\n- それ (sore): Cái đó (vật ở gần người nghe).\n- あれ (are): Cái kia (vật ở xa cả người nói và người nghe).",
      "examples": [
        {
          "jp": "これは じしょですか。",
          "romaji": "kore wa jisho desu ka.",
          "vn": "Đây là quyển từ điển phải không?"
        },
        {
          "jp": "あれは かばんです。",
          "romaji": "are wa kaban desu.",
          "vn": "Kia là cái cặp."
        }
      ]
    },
    {
      "title": "このN / そのN / あのN",
      "structure": "この/その/あの N は ... です",
      "usage": "Bổ nghĩa cho danh từ chỉ vật hoặc người đứng ngay sau nó.\n- この N (kono): N này (gần người nói).\n- その N (sono): N đó (gần người nghe).\n- あの N (ano): N kia (xa cả hai).",
      "examples": [
        {
          "jp": "この本は わたしの 本です。",
          "romaji": "kono hon wa watashi no hon desu.",
          "vn": "Quyển sách này là sách của tôi."
        },
        {
          "jp": "あの方は なごや大学の 先生です。",
          "romaji": "ano kata wa Nagoya daigaku no sensei desu.",
          "vn": "Vị kia là giáo viên của trường đại học Nagoya."
        }
      ]
    },
    {
      "title": "そうです / そうじゃありません",
      "structure": "はい、そうです | いいえ、そうじゃありません",
      "usage": "- そう (sou) dùng để trả lời vắn tắt cho câu hỏi nghi vấn danh từ, thay vì lặp lại toàn bộ danh từ.\n- Khẳng định: はい、そうです (Vâng, đúng vậy).\n- Phủ định: いいえ、そうじゃありません (Không, không phải vậy) hoặc いいえ、ちがいます (Không, nhầm/sai rồi).",
      "examples": [
        {
          "jp": "それは テレホンカードですか。",
          "romaji": "sore wa terehonkaado desu ka.",
          "vn": "Đó là thẻ điện thoại phải không?"
        },
        {
          "jp": "はい、そうです。",
          "romaji": "hai, sou desu.",
          "vn": "Vâng, đúng rồi."
        },
        {
          "jp": "いいえ、そうじゃありません。",
          "romaji": "iie, sou ja arimasen.",
          "vn": "Không, không phải."
        }
      ]
    },
    {
      "title": "Câu hỏi lựa chọn (A hay B)",
      "structure": "S は N1ですか、N2ですか",
      "usage": "Đưa ra 2 phương án để người nghe chọn 1. Khi trả lời KHÔNG dùng はい / いいえ mà trả lời trực tiếp bằng danh từ được chọn.",
      "examples": [
        {
          "jp": "これは ボールペンですか、シャープペンシルですか。",
          "romaji": "kore wa boorupen desu ka, shaapupenshiru desu ka.",
          "vn": "Đây là bút bi hay bút chì kim?"
        },
        {
          "jp": "シャープペンシルです。",
          "romaji": "shaapupenshiru desu.",
          "vn": "Là bút chì kim."
        }
      ]
    },
    {
      "title": "N1 の N2 (Thuộc về, Về cái gì)",
      "structure": "N1 の N2",
      "usage": "Ngoài nghĩa sở hữu (N2 của N1), trợ từ の còn có 2 nghĩa mở rộng trong Bài 2:\n1. Giải thích N2 là gì, nói về cái gì (Ví dụ: Sách về máy tính).\n2. Sở hữu (Ví dụ: Túi của tôi). Có thể lược bỏ N2 nếu đã rõ nghĩa (Ví dụ: Của Mai, của tôi).",
      "examples": [
        {
          "jp": "これは コンピューターの 本です。",
          "romaji": "kore wa konpyuutaa no hon desu.",
          "vn": "Đây là sách về máy tính."
        },
        {
          "jp": "あれは だれの かばんですか。",
          "romaji": "are wa dare no kaban desu ka.",
          "vn": "Kia là cặp của ai?"
        },
        {
          "jp": "マイさんのです。",
          "romaji": "Mai san no desu.",
          "vn": "Là của Mai."
        }
      ]
    },
    {
      "title": "そうですか",
      "structure": "そうですか",
      "usage": "Cách phản hồi khi người nói nhận được một thông tin gì đó mới và muốn thể hiện họ đã hiểu. Chữ か ở cuối câu phải HẠ THẤP giọng (đọc đi xuống) thay vì lên giọng như câu hỏi bình thường.",
      "examples": [
        {
          "jp": "このかさは あなたのですか。",
          "romaji": "kono kasa wa anata no desu ka.",
          "vn": "Cái ô này của bạn à?"
        },
        {
          "jp": "いいえ、ちがいます。ハイさんのです。",
          "romaji": "iie, chigaimasu. Hai san no desu.",
          "vn": "Không phải, nhầm rồi. Của anh Hải."
        },
        {
          "jp": "そうですか。",
          "romaji": "sou desu ka.",
          "vn": "Thế à / Ra là vậy."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "これは じしょ [blank]。",
      "options": ["です", "ですか", "は", "の"],
      "answer": "ですか",
      "vn": "Đây là quyển từ điển phải không?",
      "explanation": "Câu hỏi cuối câu dùng ですか."
    },
    {
      "question": "[blank]は わたしの ノートです。",
      "options": ["これ", "この", "ここ", "だれ"],
      "answer": "これ",
      "vn": "Cái này là quyển vở của tôi.",
      "explanation": "Đại từ chỉ thị thay thế danh từ đóng vai trò chủ ngữ thì dùng これ/それ/あれ."
    },
    {
      "question": "[blank]ノートは わたしのです。",
      "options": ["それ", "その", "そこ", "どれ"],
      "answer": "その",
      "vn": "Quyển vở đó là của tôi.",
      "explanation": "Khi có danh từ (ノート) đứng ngay sau, phải dùng từ bổ nghĩa この/その/あの."
    },
    {
      "question": "あれは [blank] ですか。 ...かばんです。",
      "options": ["だれ", "どなた", "なん", "の"],
      "answer": "なん",
      "vn": "Kia là cái gì? ...Là cái cặp.",
      "explanation": "Hỏi về đồ vật dùng 何 (なん - nan)."
    },
    {
      "question": "それは じどうしゃ [blank] 雑誌です。",
      "options": ["は", "が", "の", "も"],
      "answer": "の",
      "vn": "Đó là tạp chí về ô tô.",
      "explanation": "Trợ từ の dùng để chỉ thể loại, nội dung của danh từ N2 (tạp chí về ô tô)."
    },
    {
      "question": "この かばんは わたし [blank]。",
      "options": ["です", "の", "のです", "のか"],
      "answer": "のです",
      "vn": "Cái cặp này là của tôi.",
      "explanation": "Lược bỏ danh từ phía sau trợ từ の khi đã rõ nghĩa: わたしの(かばん)です -> わたしのです."
    },
    {
      "question": "それは ラジカセですか。 ...いいえ、[blank]。",
      "options": ["そうです", "ちがいます", "ラジカセです", "なんですか"],
      "answer": "ちがいます",
      "vn": "Đó là đài cassette phải không? ...Không, sai rồi/không phải.",
      "explanation": "Để trả lời phủ định ngắn gọn, dùng いいえ、そうじゃありません hoặc いいえ、ちがいます."
    },
    {
      "question": "これは [blank] の かさですか。",
      "options": ["だれ", "なん", "どなた", "あの"],
      "answer": "だれ",
      "vn": "Đây là cái ô của ai?",
      "explanation": "Hỏi người sở hữu đồ vật dùng だれの (của ai)."
    },
    {
      "question": "それは シャープペンシルですか、ボールペンですか。 ...[blank]。",
      "options": ["はい", "ボールペンです", "いいえ", "そうです"],
      "answer": "ボールペンです",
      "vn": "Đó là bút chì kim hay bút bi? ...Là bút bi.",
      "explanation": "Câu hỏi lựa chọn (A hay B) thì trả lời thẳng vào sự lựa chọn, không dùng はい/いいえ."
    },
    {
      "question": "ミラーさんは IMCの 社員ですか。 ...はい、[blank] 社員です。",
      "options": ["IMCの", "IMC", "IMCは", "IMCも"],
      "answer": "IMCの",
      "vn": "Anh Miller là nhân viên IMC phải không? ...Vâng, là nhân viên của IMC.",
      "explanation": "IMC (N1) là tên công ty, 社員 (N2) là nhân viên, nối với nhau bằng trợ từ の."
    },
    {
      "question": "あの方は [blank] ですか。 ...なごや大学の 先生です。",
      "options": ["だれ", "どなた", "なん", "どれ"],
      "answer": "どなた",
      "vn": "Vị kia là ai vậy? ...Là giáo viên Đại học Nagoya.",
      "explanation": "Dùng どなた để hỏi 'ai' một cách lịch sự, phù hợp với あの方."
    },
    {
      "question": "この カメラは ミラーさんのですか。 ...いいえ、わたし [blank] じゃありません。",
      "options": ["は", "の", "が", "も"],
      "answer": "の",
      "vn": "Cái máy ảnh này của anh Miller à? ...Không, không phải của tôi.",
      "explanation": "Câu gốc là わたしの(カメラ)じゃありません, danh từ カメラ được lược bỏ đi."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "これとそれとあれ",
    "titleVn": "🎒 Chuyện Chiếc Túi Bí Ẩn",
    "intro": "Một câu chuyện nhỏ về những đồ vật — luyện kore/sore/are, chỉ thị từ và sở hữu の",
    "lines": [
      {
        "kanji": "これは何ですか？辞書ですか？",
        "jp": "これは なん ですか？じしょ ですか？",
        "romaji": "Kore wa nan desu ka? Jisho desu ka?",
        "vn": "Cái này là gì? Là từ điển à?",
        "note": "これ · じしょ"
      },
      {
        "kanji": "いいえ、それは本です。この本は誰のですか？",
        "jp": "いいえ、それは ほん です。このほんは だれの ですか？",
        "romaji": "Iie, sore wa hon desu. Kono hon wa dare no desu ka?",
        "vn": "Không, cái đó là sách. Quyển sách này của ai vậy?",
        "note": "それ · ほん · この"
      },
      {
        "kanji": "それはミラーさんの雑誌です。",
        "jp": "それは ミラーさんの ざっし です。",
        "romaji": "Sore wa Miraa-san no zasshi desu.",
        "vn": "Cái đó là tạp chí của anh Miller.",
        "note": "ざっし · 〜の"
      },
      {
        "kanji": "あれは誰のかばんですか？",
        "jp": "あれは だれの かばん ですか？",
        "romaji": "Are wa dare no kaban desu ka?",
        "vn": "Cái kia là túi xách của ai?",
        "note": "あれ · かばん"
      },
      {
        "kanji": "あのかばんの中に、ノートと鉛筆とボールペン。",
        "jp": "あの かばんの なかに、ノートと えんぴつと ボールペン。",
        "romaji": "Ano kaban no naka ni, nooto to enpitsu to boorupen.",
        "vn": "Trong cái túi kia có vở, bút chì và bút bi.",
        "note": "あの · ノート · えんぴつ · ボールペン"
      },
      {
        "kanji": "その傘はあなたのですか？違います！",
        "jp": "その かさは あなたの ですか？ちがいます！",
        "romaji": "Sono kasa wa anata no desu ka? Chigaimasu!",
        "vn": "Cái ô đó là của bạn à? Không phải!",
        "note": "かさ · ちがいます"
      },
      {
        "kanji": "この鍵は誰のですか？私のですか？",
        "jp": "この かぎは だれの ですか？わたしの ですか？",
        "romaji": "Kono kagi wa dare no desu ka? Watashi no desu ka?",
        "vn": "Cái chìa khóa này của ai? Của tôi à?",
        "note": "かぎ"
      },
      {
        "kanji": "そうです！あの時計とこのカメラもあなたのです。",
        "jp": "そうです！あの とけいと この カメラも あなたの です。",
        "romaji": "Sou desu! Ano tokei to kono kamera mo anata no desu.",
        "vn": "Đúng vậy! Cái đồng hồ kia và máy ảnh này cũng của bạn.",
        "note": "そうです · とけい · カメラ"
      },
      {
        "kanji": "失礼ですが、それは電話ですか？ラジオですか？",
        "jp": "しつれいですが、それは でんわ ですか？ラジオ ですか？",
        "romaji": "Shitsurei desu ga, sore wa denwa desu ka? Rajio desu ka?",
        "vn": "Xin lỗi, cái đó là điện thoại hay đài radio?",
        "note": "しつれいですが · でんわ · ラジオ"
      },
      {
        "kanji": "テレビの名刺 — どれがあなたのですか？",
        "jp": "テレビの めいし — どれが あなたの ですか？",
        "romaji": "Terebi no meishi — dore ga anata no desu ka?",
        "vn": "Danh thiếp trên tivi — cái nào là của bạn?",
        "note": "テレビ · めいし · どれ"
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
        "blankJp": "せんせい、しつもん（　　　）あります。",
        "blankMeanings": ["Trợ từ"],
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
        "jp": "\"That's good. Isn't it?\"は　にほんごで　なんですか。",
        "romaji": "\"That's good. Isn't it?\" wa nihongo de nan desu ka.",
        "vn": "\"That's good. Isn't it?\" tiếng Nhật nói thế nào ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "「いいですね」です。",
        "blankJp": "「（　　　）」です。",
        "blankMeanings": ["Được đấy nhỉ"],
        "romaji": "\"Ii desu ne\" desu.",
        "vn": "Là \"Ii desu ne\"."
      },
      {
        "speaker": "せいと",
        "jp": "じゃ、\"Yes. That's good.\"は　なんですか。",
        "romaji": "Ja, \"Yes. That's good.\" wa nan desu ka.",
        "vn": "Dạ... Vậy \"Yes. That's good.\" thì nói thế nào ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "それも　「いいですね」です。",
        "romaji": "Sore mo \"Ii desu ne\" desu.",
        "vn": "Cái đó cũng là \"Ii desu ne\"."
      },
      {
        "speaker": "せいと",
        "jp": "わかりました。ありがとうございました。",
        "blankJp": "（　　　）。ありがとうございました。",
        "blankMeanings": ["Em hiểu rồi"],
        "romaji": "Wakarimashita. Arigatou gozaimashita.",
        "vn": "Em hiểu rồi ạ. Em cảm ơn thầy/cô."
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
