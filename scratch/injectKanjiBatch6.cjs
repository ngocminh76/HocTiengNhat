const fs = require('fs');

const missingBreakdowns = {
  "IMC": {"hanviet": "N/A", "components": "Từ ngoại lai", "story": "Tên công ty giả định.", "examples": "IMC"},
  "AKC": {"hanviet": "N/A", "components": "Từ ngoại lai", "story": "Tên viện nghiên cứu giả định.", "examples": "AKC"},
  "神戸病院": {"hanviet": "THẦN HỘ BỆNH VIỆN", "components": "神戸 (Kobe) + 病院 (Bệnh viện)", "story": "Bệnh viện Kobe.", "examples": "神戸病院"},
  "さくら大学": {"hanviet": "ĐẠI HỌC SAKURA", "components": "さくら (Hoa anh đào) + 大学 (Đại học)", "story": "Đại học Sakura.", "examples": "さくら大学"},
  "富士大学": {"hanviet": "PHÚ SĨ ĐẠI HỌC", "components": "富士 (Phú Sĩ) + 大学 (Đại học)", "story": "Đại học Phú Sĩ.", "examples": "富士大学"},
  "〜階": {"hanviet": "GIAI", "components": "阝 (Phụ) + 皆 (Giai)", "story": "Tầng nhà.", "examples": "一階 (Tầng 1)"},
  "〜円": {"hanviet": "VIÊN", "components": "円 (Viên)", "story": "Tiền Yên Nhật.", "examples": "百円 (100 Yên)"},
  "朝ごはん": {"hanviet": "TRIÊU", "components": "朝 (Triêu - Sáng sớm)", "story": "Bữa sáng.", "examples": "朝ごはん (Bữa sáng)"},
  "昼ごはん": {"hanviet": "TRÚ", "components": "昼 (Trú - Trưa)", "story": "Bữa trưa.", "examples": "昼ごはん (Bữa trưa)"},
  "晩ごはん": {"hanviet": "VÃN", "components": "晩 (Vãn - Tối)", "story": "Bữa tối.", "examples": "晩ごはん (Bữa tối)"},
  "早く": {"hanviet": "TẢO", "components": "早 (Tảo - Sớm)", "story": "Sớm/Nhanh.", "examples": "早く (Nhanh/Sớm lên)"},
  "分かります": {"hanviet": "PHÂN", "components": "八 (Bát) + 刀 (Đao)", "story": "Dùng dao chia thành 8 phần rành mạch (Hiểu).", "examples": "分かります (Hiểu)"},
  "喫茶店": {"hanviet": "KHIẾT TRÀ ĐIẾM", "components": "喫 (Khiết - Hút/Uống) + 茶 (Trà) + 店 (Điếm)", "story": "Quán giải khát/Cà phê.", "examples": "喫茶店 (Quán cà phê)"},
  "乗り場": {"hanviet": "THỪA TRƯỜNG", "components": "乗 (Thừa) + 場 (Trường)", "story": "Bến xe/Nơi lên tàu xe.", "examples": "乗り場 (Bến xe)"},
  "隣": {"hanviet": "LÂN", "components": "阝 (Phụ) + 粦 (Lân)", "story": "Hàng xóm bên cạnh.", "examples": "隣 (Bên cạnh)"},
  "近く": {"hanviet": "CẬN", "components": "近 (Cận)", "story": "Gần đây.", "examples": "近く (Gần)"},
  "間": {"hanviet": "GIAN", "components": "門 (Môn) + 日 (Nhật)", "story": "Mặt trời rọi qua khe cửa (Ở giữa).", "examples": "間 (Ở giữa)"},
  "いろいろ（な）": {"hanviet": "N/A", "components": "Không có Kanji ở N5", "story": "Nhiều loại, đa dạng.", "examples": "いろいろ (Nhiều loại)"},
  "留学生": {"hanviet": "LƯU HỌC SINH", "components": "留 (Lưu) + 学生 (Học sinh)", "story": "Học sinh ở lại nước ngoài học.", "examples": "留学生 (Du học sinh)"},
  "一つ": {"hanviet": "NHẤT", "components": "一 (Nhất)", "story": "Một cái.", "examples": "一つ"},
  "二つ": {"hanviet": "NHỊ", "components": "二 (Nhị)", "story": "Hai cái.", "examples": "二つ"},
  "三つ": {"hanviet": "TAM", "components": "三 (Tam)", "story": "Ba cái.", "examples": "三つ"},
  "四つ": {"hanviet": "TỨ", "components": "四 (Tứ)", "story": "Bốn cái.", "examples": "四つ"},
  "五つ": {"hanviet": "NGŨ", "components": "五 (Ngũ)", "story": "Năm cái.", "examples": "五つ"},
  "六つ": {"hanviet": "LỤC", "components": "六 (Lục)", "story": "Sáu cái.", "examples": "六つ"},
  "七つ": {"hanviet": "THẤT", "components": "七 (Thất)", "story": "Bảy cái.", "examples": "七つ"},
  "八つ": {"hanviet": "BÁT", "components": "八 (Bát)", "story": "Tám cái.", "examples": "八つ"},
  "九つ": {"hanviet": "CỬU", "components": "九 (Cửu)", "story": "Chín cái.", "examples": "九つ"},
  "一人": {"hanviet": "NHẤT NHÂN", "components": "一 + 人", "story": "Một người.", "examples": "一人"},
  "二人": {"hanviet": "NHỊ NHÂN", "components": "二 + 人", "story": "Hai người.", "examples": "二人"},
  "～枚": {"hanviet": "MAI", "components": "木 (Mộc) + ⽁ (Phộc)", "story": "Tờ/Chiếc mỏng.", "examples": "一枚 (1 tờ)"},
  "～台": {"hanviet": "ĐÀI", "components": "台 (Đài)", "story": "Chiếc (máy móc/xe cộ).", "examples": "一台 (1 chiếc)"},
  "～回": {"hanviet": "HỒI", "components": "回 (Hồi)", "story": "Lần.", "examples": "一回 (1 lần)"},
  "～時間": {"hanviet": "THỜI GIAN", "components": "時 (Thời) + 間 (Gian)", "story": "Tiếng đồng hồ.", "examples": "一時間 (1 tiếng)"},
  "～週間": {"hanviet": "CHU GIAN", "components": "週 (Chu) + 間 (Gian)", "story": "Tuần.", "examples": "一週間 (1 tuần)"},
  "～か月": {"hanviet": "NGUYỆT", "components": "月 (Nguyệt)", "story": "Tháng.", "examples": "一か月 (1 tháng)"},
  "～年": {"hanviet": "NIÊN", "components": "年 (Niên)", "story": "Năm.", "examples": "一年 (1 năm)"},
  "～人": {"hanviet": "NHÂN", "components": "人 (Nhân)", "story": "Người.", "examples": "三人 (3 người)"},
  "全部で": {"hanviet": "TOÀN BỘ", "components": "全部 (Toàn bộ)", "story": "Tổng cộng.", "examples": "全部で"},
  "休みます": {"hanviet": "HƯU", "components": "休 (Hưu)", "story": "Nghỉ ngơi.", "examples": "休みます"},
  "簡単": {"hanviet": "GIẢN ĐƠN", "components": "簡 (Giản) + 単 (Đơn)", "story": "Đơn giản.", "examples": "簡単"},
  "速い・早い": {"hanviet": "TỐC/TẢO", "components": "速 (Tốc) / 早 (Tảo)", "story": "Nhanh/Sớm.", "examples": "早い (Sớm)"},
  "温かい・暖かい": {"hanviet": "ÔN/NOÃN", "components": "温 (Ôn) / 暖 (Noãn)", "story": "Ấm áp.", "examples": "暖かい"},
  "天気": {"hanviet": "THIÊN KHÍ", "components": "天 (Thiên) + 気 (Khí)", "story": "Thời tiết.", "examples": "天気"},
  "雨": {"hanviet": "VŨ", "components": "雨 (Vũ)", "story": "Mưa.", "examples": "雨"},
  "雪": {"hanviet": "TUYẾT", "components": "雨 (Vũ) + 彐 (Kệ)", "story": "Tuyết.", "examples": "雪"},
  "曇り": {"hanviet": "ĐÁM", "components": "日 (Nhật) + 雲 (Vân - Mây)", "story": "Trời có mây.", "examples": "曇り (Nhiều mây)"},
  "一番": {"hanviet": "NHẤT PHIÊN", "components": "一 (Nhất) + 番 (Phiên)", "story": "Số 1/Nhất.", "examples": "一番"},
  "いい（コーヒーが～）": {"hanviet": "N/A", "components": "Không có Kanji", "story": "Thích.", "examples": "コーヒーがいい (Thích cà phê)"},
  "お待ちください": {"hanviet": "ĐÃI", "components": "待 (Đãi - Đợi)", "story": "Vui lòng đợi.", "examples": "お待ちください"},
  "別々に": {"hanviet": "BIỆT", "components": "別 (Biệt) + 々", "story": "Riêng ra.", "examples": "別々に"},
  "もう少し": {"hanviet": "THIỂU", "components": "少 (Thiểu - Ít)", "story": "Thêm một chút.", "examples": "もう少し"},
  "特に": {"hanviet": "ĐẶC", "components": "特 (Đặc)", "story": "Đặc biệt.", "examples": "特に"},
  "お茶": {"hanviet": "TRÀ", "components": "茶 (Trà)", "story": "Trà.", "examples": "お茶"},
  "あります[お祭りが〜]": {"hanviet": "N/A", "components": "Không có Kanji", "story": "Được tổ chức.", "examples": "あります"},
  "出ます": {"hanviet": "XUẤT", "components": "出 (Xuất)", "story": "Ra/Xuất hiện.", "examples": "出ます"},
  "触ります（ドアに〜）": {"hanviet": "XÚC", "components": "触 (Xúc)", "story": "Sờ chạm.", "examples": "触ります"},
  "出ます（お釣りが〜）": {"hanviet": "XUẤT", "components": "出 (Xuất)", "story": "Tiền thừa chạy ra.", "examples": "出ます"},
  "取ります": {"hanviet": "THỦ", "components": "取 (Thủ - Lấy)", "story": "Thêm tuổi/Lấy.", "examples": "年を取ります"}
};

for (let i = 1; i <= 25; i++) {
  const filePath = `src/data/lessons/lesson${i}.ts`;
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  Object.keys(missingBreakdowns).forEach(word => {
    const data = missingBreakdowns[word];
    // Need to escape brackets in keys for Regex like "あります[お祭りが〜]"
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (content.includes(`"word": "${word}"`)) {
      const wordRegex = new RegExp(`(\\"word\\"\\s*:\\s*\\"${escapedWord}\\"[\\s\\S]*?\\"type\\"\\s*:\\s*\\"[^\\"]+\\")(\\s*\\})`, 'g');
      content = content.replace(wordRegex, (match, p1, p2) => {
        if (p1.includes('"kanjiBreakdown"')) return match;
        const injection = `,
      "kanjiBreakdown": {
        "hanviet": "${data.hanviet}",
        "components": "${data.components}",
        "story": "${data.story}",
        "examples": "${data.examples}"
      }`;
        return p1 + injection + p2;
      });
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated lesson ${i}`);
}
