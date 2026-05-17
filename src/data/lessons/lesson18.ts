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
  "grammar": [
    {
      "title": "Cách chia Thể Từ Điển (辞書形)",
      "structure": "Thể nguyên mẫu của động từ (Thường dùng trong từ điển)",
      "usage": "Nhóm 1: Đổi đuôi hàng [i] trước ます thành hàng [u] (VD: かきます -> かく). Nhóm 2: Bỏ ます thêm る (VD: たべます -> たべる). Nhóm 3: します -> する, きます -> くる.",
      "examples": [
        {
          "jp": "のみます -> のむ / まちます -> まつ / かいます -> かう",
          "romaji": "nomimasu -> nomu / machimasu -> matsu / kaimasu -> kau",
          "vn": "Nhóm 1: Uống / Đợi / Mua"
        },
        {
          "jp": "みます -> みる / おきます -> おきる",
          "romaji": "mimasu -> miru / okimasu -> okiru",
          "vn": "Nhóm 2: Xem / Thức dậy"
        },
        {
          "jp": "べんきょうします -> べんきょうする / きます -> くる",
          "romaji": "benkyoushimasu -> benkyousuru / kimasu -> kuru",
          "vn": "Nhóm 3: Học / Đến"
        }
      ]
    },
    {
      "title": "Khả năng làm gì: ことができます",
      "structure": "Danh từ / Động từ (Thể từ điển) + ことが できます",
      "usage": "Dùng để diễn tả năng lực của một người (có thể nói tiếng Nhật, có thể bơi) hoặc một khả năng do điều kiện hoàn cảnh cho phép (có thể thanh toán bằng thẻ, có thể chụp ảnh ở đây).",
      "examples": [
        {
          "jp": "ミラーさんは にほんごが できます。",
          "romaji": "Miraa san wa nihongo ga dekimasu.",
          "vn": "Anh Miller có thể nói tiếng Nhật. (Dùng Danh từ)"
        },
        {
          "jp": "わたしは ピアノを ひくことが できます。",
          "romaji": "watashi wa piano o hiku koto ga dekimasu.",
          "vn": "Tôi có thể đánh đàn piano. (Dùng Động từ thể từ điển)"
        },
        {
          "jp": "カードで はらうことが できますか。",
          "romaji": "kaado de harau koto ga dekimasu ka.",
          "vn": "Có thể thanh toán bằng thẻ được không?"
        }
      ]
    },
    {
      "title": "Sở thích: 趣味（しゅみ）は ～ことです",
      "structure": "わたしの しゅみは Danh từ / Động từ (Thể từ điển) こと です",
      "usage": "Dùng để giới thiệu sở thích của bản thân. Việc thêm 'こと' (việc) sau thể từ điển giúp biến động từ đó thành cụm danh từ.",
      "examples": [
        {
          "jp": "わたしの しゅみは えいがです。",
          "romaji": "watashi no shumi wa eiga desu.",
          "vn": "Sở thích của tôi là phim ảnh. (Danh từ)"
        },
        {
          "jp": "わたしの しゅみは えいがを みることです。",
          "romaji": "watashi no shumi wa eiga o miru koto desu.",
          "vn": "Sở thích của tôi là VIỆC XEM phim. (Động từ thể từ điển + こと)"
        }
      ]
    },
    {
      "title": "Trước khi: ～まえに",
      "structure": "V(Từ điển) / N の / Thời gian (Lượng) + まえに、～",
      "usage": "Diễn tả hành động vế sau xảy ra TRƯỚC thời điểm hoặc hành động vế trước. Lưu ý: Động từ đi trước 'まえに' luôn luôn ở Thể từ điển (không phân biệt thì của câu). Danh từ thêm 'の'. Từ chỉ khoảng thời gian thì giữ nguyên không thêm 'の'.",
      "examples": [
        {
          "jp": "ねる まえに、ほんを よみます。",
          "romaji": "neru mae ni, hon o yomimasu.",
          "vn": "Trước khi ngủ, tôi đọc sách."
        },
        {
          "jp": "かいぎの まえに、コピーします。",
          "romaji": "kaigi no mae ni, kopii shimasu.",
          "vn": "Trước buổi họp, tôi đi photo."
        },
        {
          "jp": "３ねん まえに、けっこんしました。",
          "romaji": "sannen mae ni, kekkon shimashita.",
          "vn": "Tôi đã kết hôn (trước đây) 3 năm."
        }
      ]
    },
    {
      "title": "Mãi mà không: なかなか ～ません",
      "structure": "なかなか + Động từ (Phủ định)",
      "usage": "Dùng để diễn đạt việc một điều gì đó khó xảy ra hoặc mất nhiều thời gian hơn dự kiến (Mãi mà không...).",
      "examples": [
        {
          "jp": "バスが なかなか きません。",
          "romaji": "basu ga nakanaka kimasen.",
          "vn": "Xe buýt mãi mà không đến."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "A：にほんご（　　）できますか。 ...B：はい、すこし わかります。",
      "options": ["が", "を", "は", "で"],
      "answer": "が",
      "vn": "A: Bạn có thể (nói) tiếng Nhật không? ...B: Vâng, tôi hiểu một chút.",
      "explanation": "Có thể làm gì: Danh từ + が + できます. 日本語ができます."
    },
    {
      "question": "「かいます」(Mua) の 辞書形(じしょけい) は なにですか。",
      "options": ["かう", "かい", "かいる", "かゆ"],
      "answer": "かう",
      "vn": "Thể từ điển của \"Kaimasu\" là gì?",
      "explanation": "Nhóm 1: Hàng い -> Hàng う. 買います -> 買う."
    },
    {
      "question": "「まちます」(Đợi) の 辞書形(じしょけい) は なにですか。",
      "options": ["まつ", "まちる", "またう", "まう"],
      "answer": "まつ",
      "vn": "Thể từ điển của \"Machimasu\" là gì?",
      "explanation": "Nhóm 1: ち -> つ. 待ちます -> 待つ."
    },
    {
      "question": "わたしは ピアノを（　　）ことが できます。",
      "options": ["ひく", "ひき", "ひいて", "ひかない"],
      "answer": "ひく",
      "vn": "Tôi có thể chơi piano.",
      "explanation": "Có thể làm V: V(từ điển) + ことができます. 弾きます -> 弾く."
    },
    {
      "question": "わたしの しゅみは おんがくを（　　）ことです。",
      "options": ["きく", "きき", "きいて", "きかない"],
      "answer": "きく",
      "vn": "Sở thích của tôi là nghe nhạc.",
      "explanation": "Sở thích: V(từ điển) + ことです. 聞きます -> 聞く."
    },
    {
      "question": "ねる（　　）、にっきを かきます。",
      "options": ["まえに", "あとで", "から", "て"],
      "answer": "まえに",
      "vn": "Trước khi ngủ, tôi viết nhật ký.",
      "explanation": "Trước khi làm V: V(từ điển) + まえに."
    },
    {
      "question": "しょくじ（　　）まえに、てを あらいます。",
      "options": ["の", "が", "を", "に"],
      "answer": "の",
      "vn": "Trước bữa ăn, tôi rửa tay.",
      "explanation": "Danh từ + の + まえに. 食事 (bữa ăn) là danh từ -> 食事のまえに."
    },
    {
      "question": "（　　）まえに、にほんへ きました。",
      "options": ["５ねん", "５ねんの", "５ねんが", "５ねんで"],
      "answer": "５ねん",
      "vn": "Tôi đã đến Nhật Bản 5 năm trước.",
      "explanation": "Danh từ chỉ thời lượng + まえに (KHÔNG CÓ の). ５ねんまえに."
    },
    {
      "question": "「きます」(Đến) の 辞書形(じしょけい) は なにですか。",
      "options": ["くる", "きる", "こる", "くう"],
      "answer": "くる",
      "vn": "Thể từ điển của \"Kimasu\" (Đến) là gì?",
      "explanation": "Nhóm 3 đặc biệt: 来ます (kimasu) -> 来る (kuru)."
    },
    {
      "question": "バスが（　　）きません。",
      "options": ["なかなか", "ぜんぜん", "あまり", "とても"],
      "answer": "なかなか",
      "vn": "Xe buýt mãi mà không đến.",
      "explanation": "なかなか + Phủ định: Mãi mà không (xảy ra điều gì đó)."
    },
    {
      "question": "「たべます」の 辞書形(じしょけい) は なにですか。",
      "options": ["たべる", "たべう", "たぶ", "たべいる"],
      "answer": "たべる",
      "vn": "Thể từ điển của \"Tabemasu\" là gì?",
      "explanation": "Nhóm 2: Bỏ ます thêm る. 食べます -> 食べる."
    },
    {
      "question": "ここで しゃしんを（　　）ことが できますか。",
      "options": ["とる", "とって", "とり", "とらない"],
      "answer": "とる",
      "vn": "Ở đây có thể chụp ảnh không?",
      "explanation": "V(từ điển) + ことができます. 撮ります -> 撮る."
    },
    {
      "question": "わたしの しゅみは（　　）です。",
      "options": ["えいが", "えいがを みる", "えいがを みて", "えいがを みます"],
      "answer": "えいが",
      "vn": "Sở thích của tôi là phim ảnh.",
      "explanation": "Sở thích có thể là Danh từ (えいが) hoặc Vる＋こと (えいがを みること). Trong các đáp án chỉ có えいが (Danh từ) là đúng ngữ pháp khi đứng trước です."
    },
    {
      "question": "にほんへ くる まえに、にほんごを（　　）。",
      "options": ["べんきょうしました", "べんきょうします", "べんきょうする", "べんきょうして"],
      "answer": "べんきょうしました",
      "vn": "Trước khi đến Nhật Bản, tôi đã học tiếng Nhật.",
      "explanation": "Động từ đứng trước まえに luôn ở Thể từ điển (くる), nhưng thì của cả câu được quyết định bởi động từ ở cuối câu. Việc học đã xảy ra trong quá khứ nên dùng 勉強しました."
    },
    {
      "question": "「のみます」の 辞書形(じしょけい) は なにですか。",
      "options": ["のむ", "のめる", "のいる", "のゆ"],
      "answer": "のむ",
      "vn": "Thể từ điển của \"Nomimasu\" là gì?",
      "explanation": "Nhóm 1: み -> む. 飲みます -> 飲む."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "辞書形・ことができます",
    "titleVn": "❤️ Sở thích & Khả năng",
    "intro": "Tóm tắt Bài 18: Thể từ điển (Jisho-kei), nói về Khả năng (Có thể làm gì), Sở thích và hành động diễn ra Trước khi làm gì.",
    "lines": [
      {
        "kanji": "私はピアノを弾くことができます。",
        "jp": "わたしは ピアノを ひく ことが できます。",
        "romaji": "Watashi wa piano o hiku koto ga dekimasu.",
        "vn": "Tôi có thể đánh đàn piano.",
        "note": "ことができます"
      },
      {
        "kanji": "趣味は写真を撮ることです。",
        "jp": "しゅみは しゃしんを とることです。",
        "romaji": "Shumi wa shashin o toru koto desu.",
        "vn": "Sở thích là việc chụp ảnh.",
        "note": "趣味は～ことです"
      },
      {
        "kanji": "寝る前に本を読みます。",
        "jp": "ねる まえに ほんを よみます。",
        "romaji": "Neru mae ni hon o yomimasu.",
        "vn": "Trước khi ngủ, tôi hay đọc sách.",
        "note": "Vる まえに"
      },
      {
        "kanji": "会議の前にコピーします。",
        "jp": "かいぎの まえに コピーします。",
        "romaji": "Kaigi no mae ni kopii shimasu.",
        "vn": "Trước buổi họp thì đi photo.",
        "note": "Nの まえに"
      }
    ]
  }
};

export default lesson;
