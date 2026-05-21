export interface ListeningLesson {
  id: number;
  title: string;
  titleVn: string;
  lines: import("./lessons/types").DialogueLine[];
}

export const LISTENING_LESSONS: ListeningLesson[] = [
  {
    "id": 1,
    "title": "しつもんが　あります。",
    "titleVn": "Tôi có câu hỏi.",
    "lines": [
      {
        "speaker": "せいと",
        "jp": "すみません。せんせい、しつもんが　あります。",
        "blankJp": "すみません。せんせい、（　　　）が　あります。",
        "blankMeanings": ["Câu hỏi"],
        "romaji": "Sumimasen. Sensei, shitsumon ga arimasu.",
        "vn": "Xin lỗi. Thưa thầy/cô, em có câu hỏi ạ."
      },
      {
        "speaker": "せんせい",
        "jp": "はい、なんですか。",
        "romaji": "Hai, nan desu ka.",
        "vn": "Ừ, có chuyện gì vậy?"
      },
      {
        "speaker": "せいと",
        "jp": "\"It's hot today, isn't it?\"は　にほんごで　なんですか。",
        "blankJp": "\"It's hot today, isn't it?\"は　にほんご（　　　）なんですか。",
        "blankMeanings": ["Bằng"],
        "romaji": "\"It's hot today, isn't it?\" wa nihongo de nan desu ka.",
        "vn": "\"It's hot today, isn't it?\" tiếng Nhật nói thế nào ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "うん、「きょうは　あついですね」です。",
        "blankJp": "うん、「きょうは（　　　）ですね」です。",
        "blankMeanings": ["Nóng"],
        "romaji": "Un, \"Kyou wa atsui desu ne\" desu.",
        "vn": "Ừm, là \"Kyou wa atsui desu ne\"."
      },
      {
        "speaker": "せいと",
        "jp": "ふ～ん。じゃ、\"Yes. That's right.\" は　なんですか。",
        "romaji": "Fu~n. Ja, \"Yes. That's right.\" wa nan desu ka.",
        "vn": "Dạ... Vậy \"Yes. That's right.\" thì nói thế nào ạ?"
      },
      {
        "speaker": "せんせい",
        "jp": "「そうですね」です。",
        "blankJp": "「（　　　）ですね」です。",
        "blankMeanings": ["Đúng vậy"],
        "romaji": "\"Sou desu ne\" desu.",
        "vn": "Là \"Sou desu ne\"."
      },
      {
        "speaker": "せいと",
        "jp": "わかりました。ありがとうございました。きょうは　あついですね。せんせい。",
        "romaji": "Wakarimashita. Arigatou gozaimashita. Kyou wa atsui desu ne. Sensei.",
        "vn": "Em hiểu rồi ạ. Em cảm ơn thầy/cô. Hôm nay trời nóng thầy/cô nhỉ."
      },
      {
        "speaker": "せんせい",
        "jp": "ああ。そうですね。",
        "romaji": "Aa. Sou desu ne.",
        "vn": "Ừ. Đúng vậy nhỉ."
      }
    ]
  },
  {
    "id": 2,
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
  },
  {
    "id": 3,
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
  },
  {
    "id": 4,
    "title": "おはようございます。",
    "titleVn": "Chào buổi sáng.",
    "lines": [
      {
        "speaker": "A",
        "jp": "あっ、おはようございます。",
        "romaji": "A, ohayou gozaimasu.",
        "vn": "A, chào buổi sáng."
      },
      {
        "speaker": "うえだ",
        "jp": "おはようございます。",
        "romaji": "Ohayou gozaimasu.",
        "vn": "Chào buổi sáng."
      },
      {
        "speaker": "A",
        "jp": "きょうは　いいてんきですね。",
        "blankJp": "きょうは（　　　）ですね。",
        "blankMeanings": ["Thời tiết đẹp"],
        "romaji": "Kyou wa ii tenki desu ne.",
        "vn": "Hôm nay trời đẹp nhỉ."
      },
      {
        "speaker": "うえだ",
        "jp": "そうですね。いいてんきですね。",
        "romaji": "Sou desu ne. Ii tenki desu ne.",
        "vn": "Đúng vậy nhỉ. Trời đẹp thật."
      },
      {
        "speaker": "A",
        "jp": "きのう、うえださんは　どこに　いきましたか。",
        "blankJp": "（　　　）、うえださんは　どこに　いきましたか。",
        "blankMeanings": ["Hôm qua"],
        "romaji": "Kinou, Ueda san wa doko ni ikimashita ka.",
        "vn": "Hôm qua anh Ueda đã đi đâu vậy?"
      },
      {
        "speaker": "うえだ",
        "jp": "きのうは　しんじゅくに　いきました。",
        "romaji": "Kinou wa Shinjuku ni ikimashita.",
        "vn": "Hôm qua tôi đã đi Shinjuku."
      },
      {
        "speaker": "A",
        "jp": "あっ。そうですか。わたしも　しんじゅくに　いきました。うえださんは　ひとりで　いきましたか。",
        "blankJp": "あっ。（　　　）。わたしも　しんじゅくに　いきました。うえださんは（　　　）いきましたか。",
        "blankMeanings": ["Vậy à", "Một mình"],
        "romaji": "A. Sou desu ka. Watashi mo Shinjuku ni ikimashita. Ueda san wa hitori de ikimashita ka.",
        "vn": "A. Vậy à. Tôi cũng đã đi Shinjuku. Anh Ueda đã đi một mình à?"
      },
      {
        "speaker": "うえだ",
        "jp": "いいえ、ともだちと。",
        "blankJp": "いいえ、（　　　）。",
        "blankMeanings": ["Cùng bạn"],
        "romaji": "Iie, tomodachi to.",
        "vn": "Không, đi cùng bạn."
      },
      {
        "speaker": "A",
        "jp": "あっ、そうですか。わたしは　ひとりで　いきました。",
        "romaji": "A, sou desu ka. Watashi wa hitori de ikimashita.",
        "vn": "A, vậy à. Tôi thì đã đi một mình."
      },
      {
        "speaker": "うえだ",
        "jp": "そうですか。",
        "romaji": "Sou desu ka.",
        "vn": "Vậy à."
      }
    ]
  },
  {
    "id": 5,
    "title": "いま　なんじですか。",
    "titleVn": "Bây giờ là mấy giờ?",
    "lines": [
      {
        "speaker": "A",
        "jp": "すみません。あおやまさん、いま、なんじですか。",
        "blankJp": "すみません。あおやまさん、いま、（　　　）ですか。",
        "blankMeanings": ["Mấy giờ"],
        "romaji": "Sumimasen. Aoyama san, ima, nanji desu ka.",
        "vn": "Xin lỗi. Chị Aoyama ơi, bây giờ là mấy giờ vậy?"
      },
      {
        "speaker": "あおやま",
        "jp": "えっと、いま、３じですよ。",
        "romaji": "Etto, ima, sanji desu yo.",
        "vn": "À ừm, bây giờ là 3 giờ đấy."
      },
      {
        "speaker": "A",
        "jp": "きょうのかいぎはなんじからですか。",
        "romaji": "Kyou no kaigi wa nanji kara desu ka.",
        "vn": "Cuộc họp hôm nay bắt đầu từ mấy giờ vậy?"
      },
      {
        "speaker": "あおやま",
        "jp": "３じはんからです。",
        "blankJp": "（　　　）からです。",
        "blankMeanings": ["3 giờ rưỡi"],
        "romaji": "Sanjihan kara desu.",
        "vn": "Từ 3 giờ rưỡi."
      },
      {
        "speaker": "A",
        "jp": "そうですか。あおやまさんも　かいぎに　いきますか。",
        "blankJp": "そうですか。あおやまさん（　　　）かいぎに　いきますか。",
        "blankMeanings": ["Cũng"],
        "romaji": "Sou desu ka. Aoyama san mo kaigi ni ikimasu ka.",
        "vn": "Vậy à. Chị Aoyama cũng đi họp chứ?"
      },
      {
        "speaker": "あおやま",
        "jp": "はい、いきますよ。",
        "romaji": "Hai, ikimasu yo.",
        "vn": "Vâng, tôi đi chứ."
      },
      {
        "speaker": "A",
        "jp": "あっ。そうですか。じゃ、またあとで。",
        "blankJp": "あっ。（　　　）ですか。じゃ、またあとで。",
        "blankMeanings": ["Vậy à"],
        "romaji": "A. Sou desu ka. Ja, mata atode.",
        "vn": "A. Vậy à. Thế thì, hẹn gặp lại sau nhé."
      },
      {
        "speaker": "あおやま",
        "jp": "はい、じゃ、またあとで。",
        "romaji": "Hai, ja, mata atode.",
        "vn": "Vâng, hẹn gặp lại sau."
      }
    ]
  },
];
