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
  "readings": readings,
  
};

export default lesson;
