import { NihongoLesson } from './types';
import { readings } from '../readings/reading25';

const lesson: NihongoLesson = {
  "id": 25,
  "chapter": "第25課",
  "title": "たら・ても",
  "titleVn": "Bài 25: Nếu và Mặc dù",
  "theme": "Điều kiện giả định",
  "words": [
    {
      "id": "L25_01",
      "word": "考えます",
      "reading": "かんがえます",
      "romaji": "kangaemasu",
      "meaning": "Suy nghĩ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "KHẢO",
        "components": "老 (Lão) + 丂 (Khảo)",
        "story": "Người già thường Suy nghĩ.",
        "examples": "考えます (Suy nghĩ)"
      }
    },
    {
      "id": "L25_02",
      "word": "着きます",
      "reading": "つきます",
      "romaji": "tsukimasu",
      "meaning": "Đến (ga, nơi chốn)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TRƯỚC",
        "components": "着 (Trước - Đến)",
        "story": "Đến đích.",
        "examples": "着きます (Đến (ga, nơi chốn))"
      }
    },
    {
      "id": "L25_03",
      "word": "留学します",
      "reading": "りゅうがくします",
      "romaji": "ryuugakushimasu",
      "meaning": "Du học",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "LƯU HỌC",
        "components": "留 (Lưu) + 学 (Học)",
        "story": "Ở lại học là Du học.",
        "examples": "留学します (Du học)"
      }
    },
    {
      "id": "L25_04",
      "word": "取ります",
      "reading": "とります",
      "romaji": "torimasu",
      "meaning": "Lấy (tuổi)",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "THỦ",
        "components": "取 (Thủ - Lấy)",
        "story": "Thêm tuổi/Lấy.",
        "examples": "年を取ります"
      }
    },
    {
      "id": "L25_05",
      "word": "田舎",
      "reading": "いなか",
      "romaji": "inaka",
      "meaning": "Nông thôn, quê",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐIỀN XÁ",
        "components": "田 (Điền - Đồng ruộng) + 舎 (Xá - Quán trọ)",
        "story": "Nơi chỉ có đồng ruộng và lều cỏ là Nông thôn.",
        "examples": "田舎 (Nông thôn, quê)"
      }
    },
    {
      "id": "L25_06",
      "word": "大使館",
      "reading": "たいしかん",
      "romaji": "taishikan",
      "meaning": "Đại sứ quán",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ĐẠI SỨ QUÁN",
        "components": "大 (Đại) + 使 (Sứ) + 館 (Quán)",
        "story": "Nơi làm việc của vị sứ giả lớn là Đại sứ quán.",
        "examples": "大使館 (Đại sứ quán)"
      }
    },
    {
      "id": "L25_07",
      "word": "グループ",
      "reading": "グループ",
      "romaji": "guruupu",
      "meaning": "Nhóm",
      "type": "Danh từ"
    },
    {
      "id": "L25_08",
      "word": "チャンス",
      "reading": "チャンス",
      "romaji": "chansu",
      "meaning": "Cơ hội",
      "type": "Danh từ"
    },
    {
      "id": "L25_09",
      "word": "億",
      "reading": "おく",
      "romaji": "oku",
      "meaning": "Trăm triệu",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "ỨC",
        "components": "亻 (Nhân) + 意 (Ý)",
        "story": "Trăm triệu.",
        "examples": "億 (Trăm triệu)"
      }
    },
    {
      "id": "L25_10",
      "word": "もし",
      "reading": "もし",
      "romaji": "moshi",
      "meaning": "Nếu",
      "type": "Phó từ"
    },
    {
      "id": "L25_11",
      "word": "いくら",
      "reading": "いくら",
      "romaji": "ikura",
      "meaning": "Cho dù",
      "type": "Phó từ"
    },
    {
      "id": "L25_12",
      "word": "転勤",
      "reading": "てんきん",
      "romaji": "tenkin",
      "meaning": "Chuyển công tác",
      "type": "Danh từ",
      "kanjiBreakdown": {
        "hanviet": "CHUYỂN CẦN",
        "components": "転 (Chuyển) + 勤 (Cần - Đi làm)",
        "story": "Chuyển nơi làm việc.",
        "examples": "転勤 (Chuyển công tác)"
      }
    },
    {
      "id": "L25_13",
      "word": "こと",
      "reading": "こと",
      "romaji": "koto",
      "meaning": "Việc",
      "type": "Danh từ"
    },
    {
      "id": "L25_14",
      "word": "一杯飲みましょう",
      "reading": "いっぱいのみましょう",
      "romaji": "ippai nomimashou",
      "meaning": "Cùng uống 1 ly nhé",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "BÔI ẨM",
        "components": "杯 (Bôi - Ly) + 飲 (Ẩm - Uống)",
        "story": "Cùng nâng ly uống nhé.",
        "examples": "一杯飲みましょう (Cùng uống 1 ly nhé)"
      }
    },
    {
      "id": "L25_15",
      "word": "いろいろお世話になりました",
      "reading": "いろいろおせわになりました",
      "romaji": "iroiro osewa ni narimashita",
      "meaning": "Cảm ơn đã giúp đỡ tôi",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "THẾ THOẠI",
        "components": "世話 (Thế Thoại)",
        "story": "Cảm ơn đã giúp đỡ.",
        "examples": "お世話になりました (Cảm ơn đã giúp đỡ tôi)"
      }
    },
    {
      "id": "L25_16",
      "word": "頑張ります",
      "reading": "がんばります",
      "romaji": "ganbarimasu",
      "meaning": "Cố gắng",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NGOAN TRƯƠNG",
        "components": "頑 (Ngoan - Cứng đầu) + 張 (Trương - Kéo căng)",
        "story": "Kéo căng sức mạnh ý chí kiên định (Cố gắng).",
        "examples": "頑張ります (Cố gắng)"
      }
    },
    {
      "id": "L25_17",
      "word": "どうぞお元気で",
      "reading": "どうぞおげんきで",
      "romaji": "douzo ogenki de",
      "meaning": "Chúc mạnh khỏe (Khi chia tay)",
      "type": "Mẫu câu",
      "kanjiBreakdown": {
        "hanviet": "NGUYÊN KHÍ",
        "components": "元気 (Nguyên khí)",
        "story": "Chúc mạnh khỏe.",
        "examples": "どうぞお元気で (Chúc mạnh khỏe)"
      }
    },
    {
      "id": "L25_18",
      "word": "年を取ります",
      "reading": "としをとります",
      "romaji": "toshi o torimasu",
      "meaning": "Thêm tuổi, già đi",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "NIÊN THỦ",
        "components": "年 (Niên - Năm) + 取 (Thủ - Lấy)",
        "story": "Lấy thêm năm (Thêm tuổi).",
        "examples": "年を取ります (Thêm tuổi, già đi)"
      }
    },
    {
      "id": "L25_19",
      "word": "足ります",
      "reading": "たります",
      "romaji": "tarimasu",
      "meaning": "Đủ",
      "type": "Động từ",
      "kanjiBreakdown": {
        "hanviet": "TÚC",
        "components": "足 (Túc - Chân/Đầy đủ)",
        "story": "Hình ảnh cái chân, hàm ý Đủ.",
        "examples": "足ります (Đủ)"
      }
    },
    {
      "id": "L25_20",
      "word": "もし（〜たら）",
      "reading": "もし",
      "romaji": "moshi",
      "meaning": "Nếu (~ thì)",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "NHƯỢC",
        "components": "Không có Kanji ở N5",
        "story": "Nếu... thì...",
        "examples": "もし (Nếu (~ thì))"
      }
    },
    {
      "id": "L25_21",
      "word": "いくら（〜ても）",
      "reading": "いくら",
      "romaji": "ikura",
      "meaning": "Cho dù (~ đi nữa)",
      "type": "Phó từ",
      "kanjiBreakdown": {
        "hanviet": "BẤT CƯ",
        "components": "Không có Kanji ở N5",
        "story": "Cho dù...",
        "examples": "いくら (Cho dù (~ đi nữa))"
      }
    }
  ],
  "grammar": [
    {
      "title": "Câu điều kiện: ～たら (Nếu... thì / Sau khi... thì)",
      "structure": "Thể quá khứ (Vた / かった / だった) + ら、～",
      "usage": "1. Mang nghĩa 'NẾU': Đưa ra một giả định. (Khác với 'Vると', '～たら' cho phép vế sau dùng ý chí, rủ rê, nhờ vả). 2. Mang nghĩa 'SAU KHI': Diễn tả một việc chắc chắn sẽ xảy ra trong tương lai, sau khi việc đó xong thì làm việc tiếp theo.",
      "examples": [
        {
          "jp": "あした あめが ふったら、いきません。",
          "romaji": "ashita ame ga futtara, ikimasen.",
          "vn": "NẾU ngày mai trời mưa, tôi sẽ không đi."
        },
        {
          "jp": "じかんが なかったら、タクシーで いきます。",
          "romaji": "jikan ga nakattara, takushii de ikimasu.",
          "vn": "NẾU không có thời gian, tôi sẽ đi bằng taxi."
        },
        {
          "jp": "10じに なったら、でかけましょう。",
          "romaji": "juuji ni nattara, dekakemashou.",
          "vn": "SAU KHI đến 10 giờ, chúng ta cùng xuất phát nhé. (Không phải giả định vì chắc chắn sẽ đến 10 giờ)"
        }
      ]
    },
    {
      "title": "Cách chia Thể ～たら",
      "structure": "Chia sang thể quá khứ rồi thêm 'ら'",
      "usage": "Động từ: Vた -> Vたら. Phủ định: Vなかったら. Tính từ i: ～かったら. Tính từ na / Danh từ: ～だったら.",
      "examples": [
        {
          "jp": "やすかったら、かいます。 / ひまだったら、いきます。",
          "romaji": "yasukattara, kaimasu. / hima dattara, ikimasu.",
          "vn": "Nếu rẻ tôi sẽ mua (Tính từ i) / Nếu rảnh tôi sẽ đi (Tính từ na)."
        },
        {
          "jp": "いいてんき だったら、さんぽします。",
          "romaji": "ii tenki dattara, sanposhimasu.",
          "vn": "Nếu thời tiết đẹp tôi sẽ đi dạo (Danh từ)."
        }
      ]
    },
    {
      "title": "Câu nhượng bộ: ～ても (Dù... cũng / Mặc dù)",
      "structure": "Thể て / くて / でも + も、～",
      "usage": "Ý nghĩa ngược lại với '～たら'. Dù điều kiện ở vế trước có xảy ra thì hành động ở vế sau cũng không thay đổi.",
      "examples": [
        {
          "jp": "あめが ふっても、いきます。",
          "romaji": "ame ga futtemo, ikimasu.",
          "vn": "MẶC DÙ trời mưa, tôi cũng sẽ đi."
        },
        {
          "jp": "たかくても、かいます。 / びょうきでも、はたらきます。",
          "romaji": "takakutemo, kaimasu. / byouki demo, hatarakimasu.",
          "vn": "DÙ đắt tôi cũng mua (Tính từ i) / DÙ ốm tôi cũng làm việc (Danh từ)."
        }
      ]
    },
    {
      "title": "Phó từ nhấn mạnh: もし và いくら",
      "structure": "もし + ～たら / いくら + ～ても",
      "usage": "1. もし (Giả sử): Đặt ở đầu câu để nhấn mạnh ý giả định của ～たら. 2. いくら (Cho dù bao nhiêu đi nữa): Nhấn mạnh mức độ cho ～ても.",
      "examples": [
        {
          "jp": "もし 1おくえん あったら、いえを かいたいです。",
          "romaji": "moshi ichi okuen attara, ie o kaitai desu.",
          "vn": "GIẢ SỬ NẾU có 100 triệu Yên, tôi muốn mua nhà."
        },
        {
          "jp": "いくら かんがえても、わかりません。",
          "romaji": "ikura kangaetemo, wakarimasen.",
          "vn": "CHO DÙ có suy nghĩ BAO NHIÊU ĐI NỮA thì tôi cũng không hiểu."
        }
      ]
    }
  ],
  "grammarExercises": [
    {
      "question": "おかねが（　　）、パソコンを かいたいです。",
      "options": ["あったら", "あると", "あっても", "あって"],
      "answer": "あったら",
      "vn": "Nếu có tiền, tôi muốn mua máy tính.",
      "explanation": "Câu có ý chí (muốn mua) ở vế sau, dùng ～たら (Nếu)."
    },
    {
      "question": "おかねが（　　）、パソコンが かえません。",
      "options": ["なくても", "なかったら", "ないと", "ないでも"],
      "answer": "なくても",
      "vn": "Dù không có tiền, (cũng không thể nói là mua được -> Sai nghĩa). Phải là DÙ CÓ TIỀN cũng không mua.",
      "explanation": "Lưu ý câu này: Phủ định V ない -> なかったら (Nếu không có tiền). Nếu không có tiền thì không thể mua: お金がなかったら、買えません."
    },
    {
      "question": "おかねが（　　）、パソコンを かえません。",
      "options": ["なかったら", "なくても", "ない", "あると"],
      "answer": "なかったら",
      "vn": "Nếu không có tiền thì không thể mua máy tính.",
      "explanation": "Vない -> なかったら (Nếu không)."
    },
    {
      "question": "あめが（　　）、さんぽに いきます。",
      "options": ["ふっても", "ふったら", "ふると", "ふるから"],
      "answer": "ふっても",
      "vn": "Mặc dù trời mưa, tôi vẫn đi dạo.",
      "explanation": "Vế sau vẫn thực hiện hành động bất chấp điều kiện -> Vても."
    },
    {
      "question": "やすかったら、かいます。たかく（　　）かいません。",
      "options": ["たら", "ても", "ければ", "と"],
      "answer": "たら",
      "vn": "Nếu rẻ tôi sẽ mua. Nếu đắt tôi sẽ không mua.",
      "explanation": "Cao (Đắt) -> 高い -> 高かったら (Nếu đắt)."
    },
    {
      "question": "この パソコンは たかく（　　）、かいたいです。",
      "options": ["ても", "たら", "て", "と"],
      "answer": "ても",
      "vn": "Máy tính này dù đắt tôi cũng muốn mua.",
      "explanation": "Tính từ đuôi い: たかい -> たかくても (Dù đắt)."
    },
    {
      "question": "ひま（　　）、あそびに きて ください。",
      "options": ["だったら", "かったら", "でも", "なら"],
      "answer": "だったら",
      "vn": "Nếu rảnh rỗi thì hãy đến chơi nhé.",
      "explanation": "Tính từ đuôi な (暇) chia thể たら -> 暇だったら."
    },
    {
      "question": "日曜日（　　）、はたらかなければ なりません。",
      "options": ["でも", "だったら", "て", "と"],
      "answer": "でも",
      "vn": "Dù là Chủ Nhật cũng phải làm việc.",
      "explanation": "Danh từ (日曜日) chia thể ても -> 日曜日でも."
    },
    {
      "question": "なつやすみに（　　）、くにへ かえります。",
      "options": ["なったら", "なると", "なっても", "なるから"],
      "answer": "なったら",
      "vn": "Sau khi đến kỳ nghỉ hè, tôi sẽ về nước.",
      "explanation": "Nghĩa 'Sau khi' (sự việc chắc chắn xảy ra) -> Vたら."
    },
    {
      "question": "（　　）かんがえても、わかりません。",
      "options": ["いくら", "もし", "どう", "どんな"],
      "answer": "いくら",
      "vn": "Cho dù suy nghĩ bao nhiêu đi nữa cũng không hiểu.",
      "explanation": "Phó từ đi với ても để nhấn mạnh mức độ -> いくら."
    },
    {
      "question": "（　　）あめが ふったら、いきません。",
      "options": ["もし", "いくら", "たぶん", "ぜんぜん"],
      "answer": "もし",
      "vn": "Giả sử nếu trời mưa, tôi sẽ không đi.",
      "explanation": "Phó từ đi với たら để nhấn mạnh giả định -> もし."
    },
    {
      "question": "くすりを（　　）、よくなりません。",
      "options": ["のんでも", "のんだら", "のむと", "のまなかったら"],
      "answer": "のんでも",
      "vn": "Dù uống thuốc cũng không khỏi.",
      "explanation": "Hành động uống thuốc đã xảy ra nhưng kết quả trái ngược mong đợi -> Vても."
    },
    {
      "question": "えきに（　　）、でんわを して ください。",
      "options": ["ついたら", "つくと", "ついても", "つくとき"],
      "answer": "ついたら",
      "vn": "Sau khi đến ga hãy gọi điện thoại nhé.",
      "explanation": "Sự việc chưa xảy ra nhưng khi nó hoàn thành thì làm việc tiếp theo -> Vたら."
    },
    {
      "question": "バスが（　　）、タクシーで いきます。",
      "options": ["こなかったら", "こないでも", "こないと", "こないから"],
      "answer": "こなかったら",
      "vn": "Nếu xe buýt không đến, tôi sẽ đi taxi.",
      "explanation": "Phủ định Vない -> なかったら."
    },
    {
      "question": "しごとが おわら（　　）、かえる ことが できません。",
      "options": ["なかったら", "なくても", "ないと", "ないから"],
      "answer": "なかったら",
      "vn": "Nếu công việc chưa xong thì không thể về được.",
      "explanation": "Điều kiện cần để về là xong việc. Động từ 終わる -> 終わらない -> 終わらなかったら."
    }
  ],
  "readings": readings,
  
  "poem": {
    "title": "たら・ても",
    "titleVn": "❤️ Nếu - Dù (Kết thúc N5)",
    "intro": "Tóm tắt Bài 25 (Bài cuối cùng của N5): Phân biệt rõ cấu trúc NẾU (~たら) và DÙ (~ても).",
    "lines": [
      {
        "kanji": "雨が降ったら、行きません。",
        "jp": "あめが ふったら、いきません。",
        "romaji": "Ame ga futtara, ikimasen.",
        "vn": "NẾU mà trời mưa, tôi sẽ không đi.",
        "note": "Vた + ら (Giả định NẾU)"
      },
      {
        "kanji": "雨が降っても、行きます。",
        "jp": "あめが ふっても、いきます。",
        "romaji": "Ame ga futtemo, ikimasu.",
        "vn": "DÙ cho trời mưa, tôi vẫn sẽ đi.",
        "note": "Vて + も (Nhượng bộ DÙ)"
      },
      {
        "kanji": "もし雨が降ったら、行きません。",
        "jp": "もし あめが ふったら、いきません。",
        "romaji": "Moshi ame ga futtara, ikimasen.",
        "vn": "GIẢ SỬ nếu mưa, tôi sẽ không đi.",
        "note": "もし đi cặp với ～たら"
      },
      {
        "kanji": "いくら考えても、わかりません。",
        "jp": "いくら かんがえても、わかりません。",
        "romaji": "Ikura kangaetemo, wakarimasen.",
        "vn": "CÓ NGHĨ BAO NHIÊU, cũng chẳng hiểu gì.",
        "note": "いくら đi cặp với ～ても"
      }
    ]
  }
};

export default lesson;
