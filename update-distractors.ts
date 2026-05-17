import fs from 'fs';
import path from 'path';

const filePath = path.join('d:', '03.MINH', 'Tutorials', 'kanji-n5-react', 'src', 'data', 'jlpt-sentence-bank.ts');

let content = fs.readFileSync(filePath, 'utf8');

// The distractors we want to add for each ID
const distractorsMap: Record<string, [string, string, string]> = {
  "SB1_01": ["あなた", "本", "かぎ"], // Target: 私
  "SB1_02": ["これ", "本", "かさ"], // Target: 人
  "SB1_03": ["本", "かばん", "えんぴつ"], // Target: 大学
  "SB1_04": ["ノート", "かさ", "つくえ"], // Target: 社員
  "SB1_05": ["これ", "なん", "本"], // Target: エンジニア
  "SB1_06": ["これ", "かぎ", "かさ"], // Target: 先生
  "SB1_07": ["これ", "ノート", "つくえ"], // Target: 医者
  "SB1_08": ["本", "かぎ", "えんぴつ"], // Target: 学生
  "SB1_09": ["なん", "これ", "本"], // Target: さい
  "SB1_10": ["わたし", "あなた", "それ"], // Target: どなた (kata)
  "SB2_01": ["なん", "だれ", "あの"], // Target: 辞書
  "SB2_02": ["これ", "それ", "あれ"], // Target: この (This camera)
  "SB2_03": ["だれ", "わたし", "あの"], // Target: 雑誌
  "SB2_04": ["あの", "その", "どの"], // Target: あれ
  "SB2_05": ["これ", "なん", "だれ"], // Target: 時計
  "SB2_06": ["わたし", "あなた", "だれ"], // Target: 傘
  "SB2_07": ["これ", "それ", "だれ"], // Target: ノート
  "SB2_08": ["これ", "それ", "あれ"], // Target: 名刺
  "SB2_09": ["わたし", "あなた", "だれ"], // Target: かばん
  "SB2_10": ["これ", "それ", "だれ"], // Target: 机
};

if (!content.includes('bunmyakuDistractors?: [string, string, string];')) {
  content = content.replace('translation: string;', 'translation: string;\n  bunmyakuDistractors?: [string, string, string];');
}

for (const [id, distractors] of Object.entries(distractorsMap)) {
  const targetString = `id: "${id}",`;
  if (content.includes(targetString)) {
    // Find the end of the object
    const regex = new RegExp(`(id: "${id}",[\\s\\S]*?translation: ".*?")(\\s*})`, 'g');
    content = content.replace(regex, `$1,\n    bunmyakuDistractors: ${JSON.stringify(distractors)}$2`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated jlpt-sentence-bank.ts');
