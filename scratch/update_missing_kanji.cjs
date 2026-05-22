const fs = require('fs');
const path = require('path');

const updates = {
  "L1_01b": {
    "hanviet": "TƯ",
    "components": "私 (Tư)",
    "story": "Chữ Tư dùng để chỉ bản thân (tôi).",
    "examples": "私 (Tôi), 私たち (Chúng tôi)"
  },
  "L1_03b": {
    "hanviet": "PHƯƠNG",
    "components": "方 (Phương)",
    "story": "Hướng về phương kia.",
    "examples": "あの方 (Vị kia), 方法 (Phương pháp)"
  },
  "L1_17": {
    "hanviet": "ĐIỆN KHÍ",
    "components": "電 (Điện) + 気 (Khí)",
    "story": "Luồng khí chạy bằng điện là điện, đèn điện.",
    "examples": "電気 (Điện, đèn điện), 元気 (Khỏe mạnh)"
  },
  "L1_32a": {
    "hanviet": "TUẾ",
    "components": "歳 (Tuế)",
    "story": "Chỉ tuổi tác của con người.",
    "examples": "二十歳 (20 tuổi), 歳 (Tuổi)"
  },
  "L1_32b": {
    "hanviet": "HÀ TUẾ",
    "components": "何 (Hà) + 歳 (Tuế)",
    "story": "Hỏi xem bao nhiêu tuổi.",
    "examples": "何歳 (Bao nhiêu tuổi)"
  },
  "L1_34c": {
    "hanviet": "LAI",
    "components": "来 (Lai)",
    "story": "Hành động đến từ một nơi nào đó.",
    "examples": "来ます (Đến), 来年 (Năm sau)"
  },
  "L11_41": {
    "hanviet": "HUYNH",
    "components": "兄 (Huynh)",
    "story": "Người anh trai trong gia đình.",
    "examples": "お兄さん (Anh trai), 兄弟 (Huynh đệ)"
  },
  "L11_43": {
    "hanviet": "TỶ",
    "components": "姉 (Tỷ)",
    "story": "Người chị gái trong gia đình.",
    "examples": "お姉さん (Chị gái), 姉妹 (Chị em gái)"
  },
  "L11_45": {
    "hanviet": "ĐỆ",
    "components": "弟 (Đệ)",
    "story": "Người em trai trong gia đình.",
    "examples": "弟さん (Em trai), 兄弟 (Huynh đệ)"
  },
  "L11_47": {
    "hanviet": "MUỘI",
    "components": "妹 (Muội)",
    "story": "Người em gái trong gia đình.",
    "examples": "妹さん (Em gái), 姉妹 (Chị em gái)"
  },
  "L3_24b": {
    "hanviet": "KIẾN",
    "components": "見 (Kiến)",
    "story": "Hành động nhìn, xem.",
    "examples": "見ます (Nhìn), 見せます (Cho xem)"
  },
  "L3_47": {
    "hanviet": "TÂN ĐẠI PHẢN",
    "components": "新 (Tân) + 大 (Đại) + 阪 (Phản)",
    "story": "Nhà ga Shin-Osaka (Tân Đại Phản).",
    "examples": "新大阪 (Ga Shin-Osaka)"
  },
  "L4_36a": {
    "hanviet": "ĐIỆN THOẠI PHIÊN HIỆU",
    "components": "電 (Điện) + 話 (Thoại) + 番 (Phiên) + 号 (Hiệu)",
    "story": "Số của máy điện thoại.",
    "examples": "電話番号 (Số điện thoại)"
  },
  "L4_36b": {
    "hanviet": "PHIÊN HIỆU ÁN NỘI",
    "components": "番 (Phiên) + 号 (Hiệu) + 案 (Án) + 内 (Nội)",
    "story": "Dịch vụ hướng dẫn (Án Nội) số điện thoại (Phiên Hiệu).",
    "examples": "番号案内 (Dịch vụ hỏi số)"
  },
  "L4_36c": {
    "hanviet": "VẤN HỢP",
    "components": "問 (Vấn) + 合 (Hợp)",
    "story": "Hỏi han xem có phù hợp không.",
    "examples": "お問い合わせ (Giải đáp thắc mắc)"
  },
  "L6_47": {
    "hanviet": "HÀ",
    "components": "何 (Hà)",
    "story": "Dùng để hỏi cái gì.",
    "examples": "何 (Cái gì), 何時 (Mấy giờ)"
  },
  "L6_53": {
    "hanviet": "HÀ",
    "components": "何 (Hà)",
    "story": "Dùng để hỏi cái gì.",
    "examples": "何ですか (Cái gì vậy?)"
  },
  "L7_42": {
    "hanviet": "THẤT LỄ",
    "components": "失 (Thất) + 礼 (Lễ)",
    "story": "Mất đi lễ nghĩa, dùng để xin lỗi, xin phép.",
    "examples": "失礼します (Xin thất lễ)"
  },
  "L7_45": {
    "hanviet": "LỮ HÀNH",
    "components": "旅 (Lữ) + 行 (Hành)",
    "story": "Chuyến đi xa.",
    "examples": "旅行 (Du lịch)"
  },
  "L7_46": {
    "hanviet": "THỔ SẢN",
    "components": "土 (Thổ) + 産 (Sản)",
    "story": "Sản vật của vùng đất đó.",
    "examples": "お土産 (Quà lưu niệm)"
  },
  "L8_43": {
    "hanviet": "LÃNH",
    "components": "冷 (Lãnh)",
    "story": "Cảm giác lạnh khi chạm vào.",
    "examples": "冷たい (Lạnh)"
  },
  "L8_44": {
    "hanviet": "DỊCH",
    "components": "易 (Dịch)",
    "story": "Việc gì đó dễ dàng.",
    "examples": "易しい (Dễ)"
  },
  "L8_45": {
    "hanviet": "ĐÊ",
    "components": "低 (Đê)",
    "story": "Vị trí thấp.",
    "examples": "低い (Thấp)"
  },
  "L8_47": {
    "hanviet": "HẮC",
    "components": "黒 (Hắc)",
    "story": "Màu đen.",
    "examples": "黒い (Màu đen)"
  },
  "L8_48": {
    "hanviet": "XÍCH",
    "components": "赤 (Xích)",
    "story": "Màu đỏ.",
    "examples": "赤い (Màu đỏ)"
  },
  "L8_49": {
    "hanviet": "THANH",
    "components": "青 (Thanh)",
    "story": "Màu xanh.",
    "examples": "青い (Màu xanh)"
  },
  "L8_50": {
    "hanviet": "ANH",
    "components": "桜 (Anh)",
    "story": "Hoa anh đào.",
    "examples": "桜 (Hoa anh đào)"
  },
  "L8_51": {
    "hanviet": "THỰC VẬT",
    "components": "食 (Thực) + 物 (Vật)",
    "story": "Vật phẩm để ăn.",
    "examples": "食べ物 (Đồ ăn)"
  },
  "L8_52": {
    "hanviet": "MIỄN CƯỜNG",
    "components": "勉 (Miễn) + 強 (Cường)",
    "story": "Cố gắng gượng ép làm việc gì đó.",
    "examples": "勉強 (Học tập)"
  },
  "L8_53": {
    "hanviet": "SINH HOẠT",
    "components": "生 (Sinh) + 活 (Hoạt)",
    "story": "Hoạt động sống hàng ngày.",
    "examples": "生活 (Cuộc sống, sinh hoạt)"
  },
  "L8_54": {
    "hanviet": "SĨ SỰ",
    "components": "仕 (Sĩ) + 事 (Sự)",
    "story": "Sự việc của người phục vụ, công việc.",
    "examples": "お仕事 (Công việc)"
  },
  "L9_40": {
    "hanviet": "TỰ",
    "components": "字 (Tự)",
    "story": "Chữ cái.",
    "examples": "ローマ字 (Chữ Romaji), 漢字 (Hán tự)"
  }
};

const missing = require('./missing_kanji.json');
const dir = './src/data/lessons';

let changedFiles = new Set();

for (const item of missing) {
  const file = item.file;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const updateData = updates[item.id];
  if (!updateData) {
    console.log("Missing update data for", item.id);
    continue;
  }
  
  // Find the exact block
  // A naive replace might break, but we know the exact "id": "L1_01b" is unique in the file
  const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${item.id}\\"[\\s\\S]*?\\})`, 'g');
  
  content = content.replace(regex, (match) => {
    // We want to insert "kanjiBreakdown" before the closing brace
    // match is something like: "id": "L1_01b", ... "type": "Danh từ"\n    }
    const lines = match.split('\n');
    const lastLine = lines.pop(); // the closing brace
    const secondLastLine = lines[lines.length - 1]; // the last property
    // add comma to the last property if not there
    if (!secondLastLine.endsWith(',')) {
      lines[lines.length - 1] = secondLastLine + ',';
    }
    
    // add kanjiBreakdown
    const indent = secondLastLine.match(/^\s*/)[0];
    const kbStr = `${indent}"kanjiBreakdown": {\n${indent}  "hanviet": "${updateData.hanviet}",\n${indent}  "components": "${updateData.components}",\n${indent}  "story": "${updateData.story}",\n${indent}  "examples": "${updateData.examples}"\n${indent}}`;
    
    lines.push(kbStr);
    lines.push(lastLine);
    return lines.join('\n');
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  changedFiles.add(file);
}

console.log("Updated files:", Array.from(changedFiles));
