import type { ParticleQuestion } from '../types';

export const PARTICLE_QUESTIONS: ParticleQuestion[] = [
  {
    id: 1,
    sentence: "教室[blank]学生がいます。",
    romaji: "Kyoushitsu [ni] gakusei ga imasu.",
    vn: "Ở phòng học có học sinh.",
    options: ["に", "で", "を", "へ"],
    answer: "に",
    explanation: "Dùng [に] chỉ vị trí tồn tại của người/vật khi đi kèm với động từ います (có/ở) hoặc あります (có/ở). Không dùng [で] vì đây không phải là nơi hành động chủ động diễn ra.",
    structure: {
      P: "教室 (phòng học)",
      S: "学生 (học sinh)",
      V: "います (có/ở)"
    }
  },
  {
    id: 2,
    sentence: "私[blank]りんごを食べます。",
    romaji: "Watashi [wa] ringo o tabemasu.",
    vn: "Tôi ăn táo.",
    options: ["は", "が", "に", "を"],
    answer: "は",
    explanation: "Dùng [は] (đọc là wa) để nhấn mạnh Chủ đề của câu. Trong câu tiêu chuẩn, nó thường theo sau Chủ ngữ.",
    structure: {
      S: "私 (tôi)",
      O: "りんご (táo)",
      V: "食べます (ăn)"
    }
  },
  {
    id: 3,
    sentence: "私はりんご[blank]食べます。",
    romaji: "Watashi wa ringo [o] tabemasu.",
    vn: "Tôi ăn táo.",
    options: ["が", "を", "で", "に"],
    answer: "を",
    explanation: "Dùng [を] (wo) để đánh dấu Tân ngữ (đối tượng trực tiếp chịu sự tác động của động từ ăn - 食べます).",
    structure: {
      S: "私 (tôi)",
      O: "りんご (táo)",
      V: "食べます (ăn)"
    }
  },
  {
    id: 4,
    sentence: "毎日、七時[blank]起きます。",
    romaji: "Mainichi, shichiji [ni] okimasu.",
    vn: "Mỗi ngày, tôi thức dậy lúc 7 giờ.",
    options: ["に", "で", "は", "へ"],
    answer: "に",
    explanation: "Dùng [に] để chỉ mốc Thời gian cụ thể (câu có số đếm thời gian như giờ, ngày, tháng, năm).",
    structure: {
      T: "七時 (7 giờ)",
      V: "起きます (thức dậy)"
    }
  },
  {
    id: 5,
    sentence: "明日、東京[blank]行きます。",
    romaji: "Ashita, Toukyou [e] ikimasu.",
    vn: "Ngày mai tôi sẽ đi Tokyo.",
    options: ["で", "を", "が", "へ"],
    answer: "へ",
    explanation: "Dùng [へ] (đọc là e) để chỉ phương hướng di chuyển tới một địa điểm (đi kèm 行きます - đi, 来ます - đến, 帰ります - về). Note: Có thể dùng [に] nhưng [へ] nhấn mạnh hướng đi hơn.",
    structure: {
      T: "明日 (ngày mai)",
      P: "東京 (Tokyo)",
      V: "行きます (sẽ đi)"
    }
  },
  {
    id: 6,
    sentence: "レストラン[blank]ご飯を食べます。",
    romaji: "Resutoran [de] gohan o tabemasu.",
    vn: "Tôi ăn cơm ở nhà hàng.",
    options: ["に", "で", "へ", "を"],
    answer: "で",
    explanation: "Dùng [で] chỉ Địa điểm diễn ra một hành động chủ động (như ăn cơm, học bài). Không dùng [に] (ni chỉ dùng cho tồn tại います/あります).",
    structure: {
      P: "レストラン (nhà hàng)",
      O: "ご飯 (cơm)",
      V: "食べます (ăn)"
    }
  },
  {
    id: 7,
    sentence: "タクシー[blank]うちへ帰ります。",
    romaji: "Takushii [de] uchi e kaerimasu.",
    vn: "Tôi về nhà bằng taxi.",
    options: ["に", "を", "で", "と"],
    answer: "で",
    explanation: "Dùng [で] để chỉ Phương tiện, cách thức thực hiện hành động (bằng taxi, bằng xe buýt, bằng đũa, bằng tiếng Nhật...).",
    structure: {
      "Phương tiện": "タクシー (taxi)",
      P: "うち (nhà)",
      V: "帰ります (về)"
    }
  },
  {
    id: 8,
    sentence: "あそこに田中さん[blank]います。",
    romaji: "Asoko ni Tanaka-san [ga] imasu.",
    vn: "Ở đằng kia có anh Tanaka.",
    options: ["は", "が", "を", "で"],
    answer: "が",
    explanation: "[が] thường đứng trước います/あります để đánh dấu mạo từ / sự tồn tại của ai/cái gì đó. Mẫu câu kinh điển: N1(nơi chốn) に N2(vật/người) が あります/います.",
    structure: {
      P: "あそこ (đằng kia)",
      S: "田中さん (anh Tanaka)",
      V: "います (có/ở)"
    }
  },
  {
    id: 9,
    sentence: "田中さん[blank]山田さんは学生です。",
    romaji: "Tanaka-san [to] Yamada-san wa gakusei desu.",
    vn: "Anh Tanaka VÀ anh Yamada là học sinh.",
    options: ["と", "や", "に", "も"],
    answer: "と",
    explanation: "[と] mang nghĩa 'Và', dùng để nối 2 hoặc nhiều danh từ (S1 và S2 cùng làm chủ ngữ).",
    structure: {
      S: "田中さん, 山田さん (anh Tanaka, anh Yamada)",
      V: "です (là)",
      "Bổ ngữ": "学生 (học sinh)"
    }
  },
  {
    id: 10,
    sentence: "私は犬が好きです。猫[blank]好きです。",
    romaji: "Watashi wa inu ga suki desu. Neko [mo] suki desu.",
    vn: "Tôi thích chó. Tôi CŨNG thích mèo.",
    options: ["は", "が", "を", "も"],
    answer: "も",
    explanation: "[も] (mo) mang nghĩa 'Cũng'. Nó thay thế cho は, が, を để lặp lại một trạng thái/hành động tương tự trước đó.",
    structure: {
      S: "猫 (mèo)",
      V: "好きです (thích)"
    }
  }
];
