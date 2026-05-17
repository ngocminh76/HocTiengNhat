// Thơ ghi nhớ Kanji
// Cấu trúc map theo ID của Kanji tương ứng trong KANJI_N5

export interface KanjiPoem {
  lines: string[];
}

export const KANJI_POEMS: Record<number, KanjiPoem> = {
  1: {
    lines: [
      "Chữ **Nhất** (一) nét gạch một mình,",
      "Nghĩa là số **MỘT** phân minh giữa trời.",
      "**Kun** gọi **hito**, **hitotsu** (一つ: một cái),",
      "Âm **On** là **Ichi** (イチ) xin mời học chung.",
      "Một ngày **一日** (Ichinichi) không ngừng,",
      "Một người **一人** (Hitori) quyết chí không lùi:",
      "**一人で勉強します** (Hitori de benkyou shimasu: Học một mình)."
    ]
  },
  2: {
    lines: [
      "Chữ **Nhị** (二) hai nét nhẹ nhàng,",
      "Nghĩa là số **HAI** hàng ngang rõ rành.",
      "**Kun** đọc **futa**, **futatsu** (二つ: hai cái),",
      "Âm **On** là **Ni** (ニ) thuộc liền nhanh tay.",
      "Ngày mồng hai **二日** (Futsuka) đây,",
      "Hai người **二人** (Futari) cùng đứng hẹn thề:",
      "**二人で食べましょう** (Futari de tabemashou: Hai người cùng ăn nhé)."
    ]
  },
  3: {
    lines: [
      "Chữ **Tam** (三) ba gạch đều tay,",
      "Nghĩa là số **BA** thẳng ngay hàng dài.",
      "**Kun** đọc **mi**, **mittsu** (三つ: ba cái),",
      "Âm **On** là **San** (サン) miệt mài học thêm.",
      "Ba người **三人** (Sannin) bên thềm,",
      "Ba giờ **三時** (Sanji) đúng hẹn không trễ:",
      "**三時に会いましょう** (Sanji ni aimashou: Hẹn gặp lúc 3 giờ)."
    ]
  },
  4: {
    lines: [
      "Chữ **Tứ** (四) đóng khung rõ rệt,",
      "Nghĩa là số **BỐN** chẳng hề làm sai.",
      "**Kun** đọc **yon**, **yottsu** (四つ: bốn cái),",
      "Âm **On** là **Shi** (シ) nhớ nhanh thuộc bài.",
      "Tháng Tư **四月** (Shigatsu) ngày mai,",
      "Mồng Bốn **四日** (Yokka) ta cùng dạo bước:",
      "**四月に日本へ行きます** (Shigatsu ni Nihon e ikimasu: Tháng Tư đi Nhật Bản)."
    ]
  },
  5: {
    lines: [
      "Chữ **Ngũ** (五) giơ nắm bàn tay,",
      "Nghĩa là số **NĂM** hăng say đếm vòng.",
      "**Kun** đọc **itsu**, **itsutsu** (五つ: năm cái),",
      "Âm **On** là **Go** (ゴ) thật nhanh thuộc lòng.",
      "Năm người **五人** (Gonin) thong dong,",
      "Mồng Năm **五日** (Itsuka) cũng xong xuôi cả:",
      "**五時に起きます** (Goji ni okimasu: Tôi thường dậy lúc 5 giờ)."
    ]
  },
  6: {
    lines: [
      "Chữ **Lục** (六) là con số **SÁU**,",
      "Hình dáng như cái mái che nhà.",
      "**Kun** đọc **mu**, **mutsu** (むつ: sáu cái),",
      "Âm **On** là **Roku** (ロク) thật thà nằm ghi.",
      "Tháng Sáu **六月** (Rokugatsu) nhớ đi,",
      "Sáu người **六人** (Rokunin) mồng Sáu **六日** (Muika) thì cứ ghi:",
      "**六月は雨が多いです** (Rokugatsu wa ame ga ooi desu: Tháng Sáu có nhiều mưa)."
    ]
  },
  7: {
    lines: [
      "Chữ **Thất** (七) viết chéo cong cong,",
      "Nghĩa là số **BẢY** trong lòng nhớ ngay.",
      "**Kun** đọc **nana**, **nanatsu** (ななつ: bảy cái) thì,",
      "Âm **On** là **Shichi** (シチ) hằng ghi trong đầu.",
      "Bảy người **七人** (Shichinin) nhớ lâu,",
      "Vào mồng bảy **七日** (Nanoka) ở đâu xin mời:",
      "**七時に学校へ行きます** (Shichiji ni gakkou e ikimasu: Tôi đến trường lúc 7 giờ)."
    ]
  },
  8: {
    lines: [
      "Chữ **Bát** (八) nét rẽ đôi đường,",
      "Tương đương số **TÁM** tỏ tường chẳng sai.",
      "**Kun** gọi **ya**, **yatsu** (や・やつ: tám cái) thuộc bài,",
      "Âm **On** là **Hachi** (ハチ) ghi tạc chẳng phai nhòa.",
      "Tám người **八人** (Hachinin) ngân nga,",
      "Mồng tám **八日** (Youka), tháng Tám bao la nắng vàng:",
      "**八月は暑いです** (Hachigatsu wa atsui desu: Tháng Tám thì nóng)."
    ]
  },
  9: {
    lines: [
      "Chữ **Cửu** (九) tựa móc câu liềm,",
      "Lực cong móc chéo tìm lên số **CHÍN** ngoan.",
      "**Kun** đọc **kokono**, **kokonotsu** (ここのつ: chín cái) vẹn toàn,",
      "Âm **On** là **Ku**, **Kyuu** (ク・キュウ) rõ ràng bạn ơi.",
      "Chín giờ **九時** (Kuji) ta nghỉ ngơi,",
      "Chín người **九人** (Kyuunin) mồng Chín rong chơi **九日** (Kokonoka):",
      "**九時に寝ます** (Kuji ni nemasu: Tôi đi ngủ lúc 9 giờ)."
    ]
  },
  10: {
    lines: [
      "Chữ **Thập** (十) như chữ thập phân (+),",
      "Hai nét dọc ngang **MƯỜI** phân vẹn mười.",
      "**Kun** đọc **too** (とお: mười cái) tươi cười,",
      "Âm **On** là **Juu** (ジュウ) vạn người điểm danh.",
      "Mồng mười **十日** (Tooka) nhớ nhanh,",
      "Hai mươi **二十** (Nijuu) đứng thẳng cạnh người **十人** (Juunin):",
      "**クラスに十人います** (Kurasu ni juunin imasu: Trong lớp có mười người)."
    ]
  },
  11: {
    lines: [
      "Chữ **Nhất** (日) vẽ một vầng dương,",
      "Nghĩa là **MẶT TRỜI** chiếu khắp nẻo đường.",
      "**Kun** đọc **hi**, **ka** (ひ・か: mặt trời/ngày) vương,",
      "Ngày nay **今日** (Kyou) dạo chơi muôn phương.",
      "Âm **On** là **Nichi**, **Jitsu** (ニチ・ジツ) vô thường,",
      "Mỗi ngày **毎日** (Mainichi) ngắm cảnh chẳng lơi,",
      "Chủ nhật **日曜日** (Nichiyoubi) ta thảnh thơi:",
      "**日曜日は休みです** (Nichiyoubi wa yasumi desu: Chủ nhật là ngày nghỉ)."
    ]
  },
  12: {
    lines: [
      "Chữ **Nguyệt** (月) như ánh trăng mây,",
      "Nghĩa là **MẶT TRĂNG, THÁNG** đẹp biết mấy.",
      "**Kun** đọc **tsuki** (つき: mặt trăng) mỏng tày,",
      "Âm **On** là **Getsu**, **Gatsu** (ゲツ・ガツ) tháng ngày.",
      "Tháng này **今月** (Kongetsu) ở đây,",
      "Thứ hai **月曜日** (Getsuyoubi) đợi mong la đà.",
      "Tháng sau **来月** (Raigetsu) đi xa:",
      "**来月、日本へ行きます** (Raigetsu, Nihon e ikimasu: Tháng sau tôi đi Nhật)."
    ]
  },
  13: {
    lines: [
      "Chữ **Hỏa** (火) ngọn khói tung bay,",
      "Là ngọn **LỬA** hồng bùng cháy vút ngay.",
      "**Kun** đọc **hi** (ひ: ngọn lửa) ấm thay,",
      "Âm **On** là **Ka** (カ) nhớ mãi trong đầu.",
      "Pháo hoa **花火** (Hanabi) thắp rực đêm sầu,",
      "Thứ Ba **火曜日** (Kayoubi) mua sắm chớ lơ:",
      "**火曜日に買い物をします** (Kayoubi ni kaimono wo shimasu: Tôi đi mua sắm vào Thứ Ba)."
    ]
  },
  14: {
    lines: [
      "Chữ **Thủy** (水) giọt rớt sương pha,",
      "Đây là dòng **NƯỚC** chảy mãi hiên nhà.",
      "**Kun** đọc **mizu** (みず: nước lạnh) mượt mà,",
      "Âm **On** là **Sui** (スイ) ngắm bóng kiêu sa.",
      "Nước máy **水道** (Suidou) chan hòa,",
      "Thứ Tư **水曜日** (Suiyoubi) giải khát rót **水** (Mizu) ngay:",
      "**水を飲みます** (Mizu o nomimasu: Tôi uống nước)."
    ]
  },
  15: {
    lines: [
      "Chữ **Mộc** (木) vẽ cái gốc to,",
      "Nghĩa là **CÂY, GỖ** bóng rợp che đò.",
      "**Kun** đọc là **ki** (き: cây cối) nhớ cho,",
      "Âm **On** là **Moku**, **Boku** (モク・ボク) gọi đò sang sông.",
      "Thứ Năm **木曜日** (Mokuyoubi) ngóng trông,",
      "Nhà họ **木村** (Kimura: Mộc Thôn) chờ mỏi chẳng chơi:",
      "**木村さんは先生です** (Kimura-san wa sensei desu: Ông Kimura là giáo viên)."
    ]
  }
};
