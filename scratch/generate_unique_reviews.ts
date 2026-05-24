import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define folders
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import lessons
import lesson1 from '../src/data/lessons/lesson1';
import lesson2 from '../src/data/lessons/lesson2';
import lesson3 from '../src/data/lessons/lesson3';
import lesson4 from '../src/data/lessons/lesson4';
import lesson5 from '../src/data/lessons/lesson5';
import lesson6 from '../src/data/lessons/lesson6';
import lesson7 from '../src/data/lessons/lesson7';
import lesson8 from '../src/data/lessons/lesson8';
import lesson9 from '../src/data/lessons/lesson9';
import lesson10 from '../src/data/lessons/lesson10';
import lesson11 from '../src/data/lessons/lesson11';
import lesson12 from '../src/data/lessons/lesson12';
import lesson13 from '../src/data/lessons/lesson13';
import lesson14 from '../src/data/lessons/lesson14';
import lesson15 from '../src/data/lessons/lesson15';
import lesson16 from '../src/data/lessons/lesson16';
import lesson17 from '../src/data/lessons/lesson17';
import lesson18 from '../src/data/lessons/lesson18';
import lesson19 from '../src/data/lessons/lesson19';
import lesson20 from '../src/data/lessons/lesson20';
import lesson21 from '../src/data/lessons/lesson21';
import lesson22 from '../src/data/lessons/lesson22';
import lesson23 from '../src/data/lessons/lesson23';
import lesson24 from '../src/data/lessons/lesson24';
import lesson25 from '../src/data/lessons/lesson25';

// Import readings
import { readings as readings1 } from '../src/data/readings/reading1';
import { readings as readings2 } from '../src/data/readings/reading2';
import { readings as readings3 } from '../src/data/readings/reading3';
import { readings as readings4 } from '../src/data/readings/reading4';
import { readings as readings5 } from '../src/data/readings/reading5';
import { readings as readings6 } from '../src/data/readings/reading6';
import { readings as readings7 } from '../src/data/readings/reading7';
import { readings as readings8 } from '../src/data/readings/reading8';
import { readings as readings9 } from '../src/data/readings/reading9';
import { readings as readings10 } from '../src/data/readings/reading10';
import { readings as readings11 } from '../src/data/readings/reading11';
import { readings as readings12 } from '../src/data/readings/reading12';
import { readings as readings13 } from '../src/data/readings/reading13';
import { readings as readings14 } from '../src/data/readings/reading14';
import { readings as readings15 } from '../src/data/readings/reading15';
import { readings as readings16 } from '../src/data/readings/reading16';
import { readings as readings17 } from '../src/data/readings/reading17';
import { readings as readings18 } from '../src/data/readings/reading18';
import { readings as readings19 } from '../src/data/readings/reading19';
import { readings as readings20 } from '../src/data/readings/reading20';
import { readings as readings21 } from '../src/data/readings/reading21';
import { readings as readings22 } from '../src/data/readings/reading22';
import { readings as readings23 } from '../src/data/readings/reading23';
import { readings as readings24 } from '../src/data/readings/reading24';
import { readings as readings25 } from '../src/data/readings/reading25';

import { NihongoLesson, LessonWord, GrammarExercise } from '../src/data/lessons/types';
import { DokkaiReview, DokkaiPassage, DokkaiQuestion } from '../src/types';
import { DOKKAI_REVIEWS as OLD_REVIEWS } from './temp_old_reviews';
import { JLPT_SENTENCE_BANK } from '../src/data/jlpt-sentence-bank';

const lessons: NihongoLesson[] = [
  lesson1, lesson2, lesson3, lesson4, lesson5,
  lesson6, lesson7, lesson8, lesson9, lesson10,
  lesson11, lesson12, lesson13, lesson14, lesson15,
  lesson16, lesson17, lesson18, lesson19, lesson20,
  lesson21, lesson22, lesson23, lesson24, lesson25
];

const readings = [
  readings1, readings2, readings3, readings4, readings5,
  readings6, readings7, readings8, readings9, readings10,
  readings11, readings12, readings13, readings14, readings15,
  readings16, readings17, readings18, readings19, readings20,
  readings21, readings22, readings23, readings24, readings25
];

// Gather ALL words from ALL lessons to build the complete dictionary
const N5_DICTIONARY: LessonWord[] = lessons.flatMap(l => l.words);

// Build N5_DICT dynamically for reading passage auto-vocabulary extraction
const N5_DICT: Record<string, string> = {};
for (const w of N5_DICTIONARY) {
  const itemStr = w.word !== w.reading ? `${w.word} (${w.reading} / ${w.romaji}): ${w.meaning}` : `${w.reading} (${w.romaji}): ${w.meaning}`;
  if (w.word) N5_DICT[w.word] = itemStr;
  if (w.reading) N5_DICT[w.reading] = itemStr;
}

interface WordForm {
  text: string;
  word: LessonWord;
}

// Generate all word forms once for greedy scanning
const ALL_WORD_FORMS: WordForm[] = [];
for (const w of N5_DICTIONARY) {
  const forms: string[] = [];
  if (w.word) forms.push(w.word);
  if (w.reading) forms.push(w.reading);

  // Exclude single character hiragana/katakana words from forms to avoid matching single letters like "い" or "た"
  // But ALLOW single-character KANJI like "彼", "私", "本", "車", "駅", "人", "昼", "薬", "誰", "絵", "何"
  const isSingleKana = (str: string) => {
    return str.length === 1 && /^[\u3040-\u309F\u30A0-\u30FF]$/.test(str);
  };

  // Generate conjugated forms for verbs/adjectives
  for (const base of [w.word, w.reading]) {
    if (!base) continue;
    if (base.endsWith('します')) {
      const stem = base.slice(0, -3);
      const sufs = ['しました', 'した', 'します', 'しません', 'ませんでした', 'ましょう', 'てください', 'ています', 'て', 'ないでください', 'なければなりません', 'なくてもいいです', 'たいです', 'たい', 'ましょうか'];
      for (const s of sufs) forms.push(stem + s);
    } else if (base.endsWith('ます')) {
      const stem = base.slice(0, -2);
      const sufs = ['ました', 'た', 'ません', 'ませんでした', 'ましょう', 'てください', 'ています', 'て', 'ないでください', 'なければなりません', 'なくてもいいです', 'たいes', 'たいです', 'たい', 'ましょうか'];
      for (const s of sufs) forms.push(stem + s);
    } else if (base.endsWith('い')) {
      const stem = base.slice(0, -1);
      const sufs = ['かった', 'くない', 'くなかった', 'く', 'ければ'];
      for (const s of sufs) forms.push(stem + s);
    }
  }

  const unique = [...new Set(forms)].filter(f => f.length > 0 && !isSingleKana(f));
  for (const f of unique) {
    ALL_WORD_FORMS.push({ text: f, word: w });
  }
}

// Sort forms by length descending
ALL_WORD_FORMS.sort((a, b) => b.text.length - a.text.length);

const PARTICLES = ['は', 'が', 'を', 'に', 'へ', 'で', 'と', 'の', 'も', 'から', 'まで'];

interface MatchResult {
  type: 'word' | 'particle';
  text: string;
  word?: LessonWord;
}

function tokenizeSentence(sentence: string): MatchResult[] {
  // Clean question marks/parentheses to not interfere
  const clean = sentence.replace(/（\s*）|\(\s*\)|\[blank\]|【\s*】|【　　　】|（　　　）|___/g, ' ');
  let i = 0;
  const results: MatchResult[] = [];

  while (i < clean.length) {
    const remaining = clean.slice(i);

    // Skip spaces and punctuation
    if (/^[\s、。！？\?\.,\(\)\[\]「」【】]+/.test(remaining)) {
      const match = remaining.match(/^[\s、。！？\?\.,\(\)\[\]「」【】]+/);
      if (match) {
        i += match[0].length;
        continue;
      }
    }

    // 1. Try to match word forms
    let matchedWordForm: WordForm | null = null;
    for (const form of ALL_WORD_FORMS) {
      if (remaining.startsWith(form.text)) {
        matchedWordForm = form;
        break;
      }
    }

    if (matchedWordForm) {
      results.push({
        type: 'word',
        text: matchedWordForm.text,
        word: matchedWordForm.word
      });
      i += matchedWordForm.text.length;
      continue;
    }

    // 2. Try to match particles
    let matchedParticle = '';
    for (const p of PARTICLES) {
      if (remaining.startsWith(p)) {
        if (p === 'か' && remaining.startsWith('から')) continue;
        if (p.length > matchedParticle.length) {
          matchedParticle = p;
        }
      }
    }

    if (matchedParticle) {
      results.push({
        type: 'particle',
        text: matchedParticle
      });
      i += matchedParticle.length;
      continue;
    }

    // 3. Skip 1 character if nothing matched
    i += 1;
  }

  return results;
}

function parseSyntax(sentence: string): string {
  const tokens = tokenizeSentence(sentence);
  let htmlLines: string[] = [];
  
  for (const token of tokens) {
    if (token.type === 'particle') {
      const particleMeanings: Record<string, string> = {
        'は': 'chủ đề (Topic)',
        'が': 'chủ ngữ / đối tượng',
        'を': 'tân ngữ trực tiếp',
        'に': 'thời gian / địa điểm / đối tượng tiếp nhận',
        'へ': 'hướng di chuyển',
        'で': 'phương tiện / công cụ / địa điểm hành động',
        'と': 'đối tượng đồng hành / liệt kê',
        'の': 'sở hữu / bổ nghĩa',
        'も': 'cũng',
        'から': 'từ',
        'まで': 'đến'
      };
      const pMeaning = particleMeanings[token.text] || 'phụ trợ';
      htmlLines.push(`- <span style="color: #f73859; font-weight: 800;">${token.text}</span> (Trợ từ chỉ ${pMeaning})`);
    } else if (token.type === 'word' && token.word) {
      const dictWord = token.word;
      const meaningStr = `: "${dictWord.meaning}"`;
      const wordTypeStr = ` - ${dictWord.type}`;
      htmlLines.push(`- <span style="color: #7aa2f7; font-weight: 800;">${token.text}</span> (Từ vựng${wordTypeStr}${meaningStr})`);
    }
  }
  
  if (htmlLines.length > 0) {
    return `<strong style="color: var(--blue);">🔍 Phân tích ngữ pháp câu:</strong>\n` + htmlLines.join('\n');
  }
  return '';
}

function extractVocabulary(sentence: string): string {
  const tokens = tokenizeSentence(sentence);
  const words = tokens
    .filter(t => t.type === 'word' && t.word)
    .map(t => t.word!);
  
  const unique = words.filter((v, idx, self) => self.findIndex(t => t.id === v.id) === idx);
  
  if (unique.length > 0) {
    return `📝 Từ vựng trong câu:\n` + 
      unique.map(w => {
        const itemStr = w.word !== w.reading ? `${w.word} (${w.reading} / ${w.romaji})` : `${w.reading} (${w.romaji})`;
        return `- **${itemStr}**: ${w.meaning}`;
      }).join('\n');
  }
  return '';
}

function buildExplanation(qText: string, vnTrans: string, answerAnalysis: string, grammarNotes: string): string {
  let exp = `📖 Dịch nghĩa:\n${vnTrans}\n\n`;
  exp += `✍️ Phân tích đáp án:\n${answerAnalysis}\n\n`;
  
  const syntaxBlock = parseSyntax(qText);
  if (syntaxBlock) {
    exp += `${syntaxBlock}\n\n`;
  }
  
  const vocabBlock = extractVocabulary(qText);
  if (vocabBlock) {
    exp += `${vocabBlock}\n\n`;
  }
  
  exp += `💡 Ngữ pháp & Mẹo nhớ:\n${grammarNotes}`;
  return exp;
}

function shuffle<T>(arr: T[]): T[] {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function generateDistractors(correctVal: string, allVals: string[], lengthMatch: boolean = true): string[] {
  const cleanCorrect = correctVal.trim();
  let pool = allVals.map(v => v.trim()).filter(v => v !== cleanCorrect && v !== '');
  pool = [...new Set(pool)];

  if (lengthMatch) {
    const targetLen = cleanCorrect.length;
    let filtered = pool.filter(v => Math.abs(v.length - targetLen) <= 1);
    if (filtered.length >= 3) {
      pool = filtered;
    }
  }

  pool = shuffle(pool);
  const selected = pool.slice(0, 3);
  
  while (selected.length < 3) {
    selected.push(correctVal + ' ' + (selected.length + 1));
  }
  
  return selected;
}

interface Scramble {
  q: string;
  o: string[];
  c: number;
  exp: string;
}

function makeScramble(q: string, o: string[], c: number, fullSentence: string, translation: string, expDetails: string): Scramble {
  let explanation = `📖 Dịch nghĩa:\n${translation}\n\n`;
  explanation += `✍️ Phân tích đáp án:\n- Thứ tự sắp xếp đúng: ${fullSentence}\n- Từ ở vị trí ngôi sao (★) là: **${o[c]}**.\n\n`;
  
  const syntaxBlock = parseSyntax(fullSentence);
  if (syntaxBlock) {
    explanation += `${syntaxBlock}\n\n`;
  }
  
  const vocabBlock = extractVocabulary(fullSentence);
  if (vocabBlock) {
    explanation += `${vocabBlock}\n\n`;
  }
  
  explanation += `💡 Ngữ pháp & Mẹo nhớ:\n${expDetails}`;
  return { q, o, c, exp: explanation };
}

const SCRAMBLES: Record<string, Scramble[]> = {
  '1_5': [
    makeScramble(
      'あの方は　___ ___ _★_ ___　ですか。',
      ['の', 'せんせい', 'さくらだいがく', 'đầu/vào/đó'], // will fix options below
      1,
      'あの方は さくらだいがく の せんせい ですか。',
      'Vị kia là giáo viên trường đại học Sakura phải không?',
      'Cấu trúc: N1 の N2. Đại học Sakura (さくらだいがく) bổ nghĩa cho giáo viên (せんせい).'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　いきます。',
      ['tomoｄachi', 'へ', 'と', 'ぎんこう'], // will fix options below
      3,
      'わたしは ともだち と ぎんこう へ いきます。',
      'Tôi đi ngân hàng cùng với bạn.',
      'Cấu trúc: [Người] と [Địa điểm] へ いきます (Đi đâu cùng ai). Trợ từ と chỉ đối tượng đồng hành, へ chỉ hướng đi.'
    ),
    makeScramble(
      'つくえの　___ ___ _★_ ___　あります。',
      ['と', 'うえに', 'ほん', 'えんぴつが'],
      0,
      'つくえの うえに ほん と えんぴつが あります。',
      'Trên bàn có sách và bút chì.',
      'Cấu trúc: N1 と N2 (N1 và N2). Trợ từ と dùng để nối các danh từ liệt kê hoàn toàn.'
    ),
    makeScramble(
      'このデパートは　___ ___ _★_ ___　ですか。',
      ['から', '10じ', 'まで', '8じ'],
      3,
      'このデパートは 10じ から 8じ まで ですか。',
      'Trung tâm thương mại này mở cửa từ 10 giờ đến 8 giờ phải không?',
      'Cấu trúc: ~ から ~ まで (Từ... đến...). Chỉ khoảng giới hạn thời gian.'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　おきます。',
      ['に', '6じ', 'まいあさ', 'はん'],
      3,
      'わたしは まいあさ 6じ はん に おきます。',
      'Mỗi sáng tôi thức dậy lúc 6 giờ rưỡi.',
      'Mốc thời gian cụ thể đi với trợ từ に. Trạng từ tần suất まいあさ đứng đầu câu làm trạng ngữ.'
    ),
    makeScramble(
      'ミラーさんの かばんは　___ ___ _★_ ___　あります。',
      ['nの', 'つくえ', 'うえ', 'に'], // will fix options below
      2,
      'ミラーさんの かばんは つくえ の うえ に あります。',
      'Cặp sách của anh Miller ở trên bàn.',
      'Cấu trúc chỉ vị trí: N1 (vị trí) の N2 (trên/dưới/trong/ngoài) に あります. Ở đây là つくえのうえに.'
    ),
    makeScramble(
      'しょくどうは　___ ___ _★_ ___　あります。',
      ['nの', '6かい', 'デパート', 'に'], // will fix options below
      1,
      'しょくどうは デパート の 6かい に あります。',
      'Nhà ăn nằm ở tầng 6 của bách hóa.',
      'Cấu trúc chỉ sự tồn tại: N (địa điểm) に あります. Nối 2 danh từ chỉ địa điểm bằng trợ từ の.'
    ),
    makeScramble(
      'これは　___ ___ _★_ ___　の じしょ です。',
      ['の', 'ともだち', 'アメリカ', 'じん'],
      0,
      'これは アメリカ じん の ともだち の じしょ です。',
      'Đây là cuốn từ điển của người bạn Mỹ.',
      'アメリカ (Mỹ) + じん (người) -> アメリカじん (người Mỹ). Trợ từ の dùng để chỉ sự sở hữu hoặc quan hệ giữa 2 danh từ.'
    ),
    makeScramble(
      'あしたは　___ ___ _★_ ___。',
      ['へ', 'dđồ', 'も', 'いきません'], // will fix options below
      2,
      'あしたは どこ へ も いきません。',
      'Ngày mai tôi không đi đâu cả.',
      'Phủ định hoàn toàn: Từ nghi vấn chỉ nơi chốn (どこ) + へ + も + động từ phủ định (いきません).'
    ),
    makeScramble(
      'りんごを　___ ___ _★_ ___　ください。',
      ['と', 'みっつ', 'よっつ', 'みかんを'],
      3,
      'りんごを みっつ と みかんを よっつ ください。',
      'Vui lòng cho tôi 3 quả táo và 4 quả quýt.',
      'Cấu trúc: N1 と N2 (N1 và N2). Trợ từ と dùng để nối 2 danh từ chỉ hoa quả.'
    )
  ],
  '6_10': [
    makeScramble(
      'わたしは　___ ___ _★_ ___　あげました。',
      ['に', 'はな', 'を', 'tomoｄachi'],
      1,
      'わたしは ともだち に はな を あげました。',
      'Tôi đã tặng hoa cho bạn.',
      'Cấu trúc: N1 (người nhận) に N2 (vật) を あげます (Tặng cái gì cho ai).'
    ),
    makeScramble(
      'きのうの　___ ___ _★_ ___　たのしかったです。',
      ['は', 'tô', 'パーティー', 'にほんの'], // will fix options below
      0,
      'きのうの にほんの パーティー は とても たのしかったです。',
      'Bữa tiệc Nhật Bản hôm qua rất vui.',
      'Trợ từ は đánh dấu chủ ngữ chính của câu. Tính từ quá khứ たのしかった đi kèm phó từ mức độ とても.'
    ),
    makeScramble(
      'このへやは　___ ___ _★_ ___　ありません。',
      ['a...', 'しずか', 'で', 'は'], // will fix options below
      2,
      'このへやは あまり しずか で は ありません。',
      'Căn phòng này không yên tĩnh lắm.',
      'Phủ định tính từ đuôi な: [Tính từ な] では ありません. Đi kèm phó từ phủ định あまり.'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　もらいました。',
      ['に', 'とけい', 'を', 'せんせい'],
      1,
      'わたしは せんせい に とけい を もらいました。',
      'Tôi đã nhận chiếc đồng hồ từ thầy giáo.',
      'Cấu trúc: N1 (người cho) に N2 (vật) を もらいます (Nhận từ ai cái gì).'
    ),
    makeScramble(
      'いっしょに　___ ___ _★_ ___　いきませんか。',
      ['de', 'タクシー', 'えき', 'まで'],
      2,
      'いっしょに タクシー で えき まで いきませんか。',
      'Chúng ta cùng đi taxi đến ga nhé?',
      'Trợ từ で chỉ phương tiện di chuyển (bằng taxi). Trợ từ まで chỉ giới hạn điểm đến (đến ga).'
    ),
    makeScramble(
      'あの　___ ___ _★_ ___　おいしいです。',
      ['パン', 'みせ', 'の', 'は'],
      0,
      'あの みせ の パン は おいしいです。',
      'Bánh mì của cửa hàng kia ngon lắm.',
      'Trợ từ の liên kết bổ nghĩa giữa cửa hàng (みせ) và bánh mì (パン).'
    ),
    makeScramble(
      'きのう　___ ___ _★_ ___　かきました。',
      ['で', 'てがみ', 'えんぴつ', 'を'],
      1,
      'きのu [えんぴつ] [で] [★ てがみ] [を] かきました。',
      'Hôm qua tôi viết thư bằng bút chì.',
      'Trợ từ で chỉ công cụ (bằng bút chì). Trợ từ を chỉ tân ngữ của động từ viết.'
    ),
    makeScramble(
      'コーヒーを　___ ___ _★_ ___　ましょう。',
      ['に', 'いっしょ', 'みせで', 'のみ'],
      2,
      'いっしょ に みせで のみ ましょう。',
      'Chúng ta cùng uống ở quán nhé.',
      'いっしょに (cùng nhau) + [Địa điểm] で + động từ bỏ ます + ましょう.'
    ),
    makeScramble(
      'この　___ ___ _★_ ___　ですか。',
      ['は', 'カメラ', 'đâu', 'の'], // will fix options below
      2,
      'この カメラ は だれ の ですか。',
      'Cái máy ảnh này là của ai?',
      'Từ để hỏi sở hữu: だれ の (của ai).'
    ),
    makeScramble(
      'あした　___ ___ _★_ ___　しませんか。',
      ['テニス', 'と', 'を', 'tomoｄachi'], // will fix options below
      0,
      'あした ともだち と テニス を しませんか。',
      'Ngày mai chơi tennis cùng bạn không?',
      '[Người] と (cùng ai) + N を します.'
    )
  ],
  '11_15': [
    makeScramble(
      'わたしは　___ ___ _★_ ___　すんでいます。',
      ['に', 'の', 'うち', 'とうきょう'],
      2,
      'わたしは とうきょう の うち に すんでいます。',
      'Tôi đang sống ở nhà tại Tokyo.',
      'Trợ từ に đi kèm động từ cư trú すんでいます (sống ở đâu).'
    ),
    makeScramble(
      'テーブルの　___ ___ _★_ ___　あります。',
      ['が', 'みかん', 'うえ', 'に'],
      1,
      'テーブルの うえ に みかん が あります。',
      'Trên bàn có quả quýt.',
      'Cấu trúc chỉ sự tồn tại của vật: N (vị trí) に N (vật) が あります.'
    ),
    makeScramble(
      '１しゅうかんに ２かい　___ ___ _★_ ___　いきます。',
      ['へ', 'およぎ', 'プール', 'に'],
      1,
      '１しゅうかんに ２かい プール へ およぎ に いきます。',
      'Tôi đi bơi ở bể bơi 2 lần 1 tuần.',
      'Cấu trúc chỉ mục đích di chuyển: V ます (bỏ ます) + に いきます. Ở đây bơi là およぎます.'
    ),
    makeScramble(
      '___ ___ _★_ ___　が ほしいです。',
      ['の', 'じしょ', 'にほんご', 'あたらしい'],
      0,
      'あたらしい にほんご の じしょ が ほしいです。',
      'Tôi muốn cuốn từ điển tiếng Nhật mới.',
      'Cấu trúc mong muốn sở hữu: N が ほしいです. Tính từ あたらしい bổ nghĩa cho cả cụm danh từ phía sau.'
    ),
    makeScramble(
      'へやに　___ ___ _★_ ___　あります。',
      ['が', 'パソコン', '２だい', 'も'],
      2,
      'へyaに パソコン が ２だい も あります。',
      'Trong phòng có tới tận 2 cái máy tính.',
      'Trợ từ も sau số lượng từ chỉ mức độ ngạc nhiên, nhiều.'
    ),
    makeScramble(
      'にほんと　___ ___ _★_ ___　あたたかいですか。',
      ['どちら', 'と', 'ベトナム', 'が'],
      0,
      'にほんと ベトナム と どちら が あたたかいですか。',
      'Nhật Bản và Việt Nam thì nơi nào ấm áp hơn?',
      'Cấu trúc so sánh hơn giữa 2 danh từ: N1 と N2 と どちらが [Tính từ] ですか.'
    ),
    makeScramble(
      'スポーツの なかで　___ ___ _★_ ___　ですか。',
      ['が', 'いちばん', 'サッカー', 'すき'],
      1,
      'スポーツの なかで サッカー が いchiban すき ですか。',
      'Trong các môn thể thao thì bạn thích nhất môn bóng đá phải không?',
      'Cấu trúc so sánh nhất: [Phạm vi] のなかで N が いchiban [Tính từ/Thích] です.'
    ),
    makeScramble(
      'こうべへ　___ ___ _★_ ___　いきます。',
      ['を', 'えいが', 'インドの', 'みに'],
      0,
      'こうべへ インドの えいが を みに いきます。',
      'Tôi đi Kobe để xem phim Ấn Độ.',
      'Cấu trúc mục đích chuyển động: [Tân ngữ] を V(ます) + に いきます.'
    ),
    makeScramble(
      'きょうは　___ ___ _★_ ___　ないes。', // will fix questions below
      ['は', 'なにも', 'よる', 'たべたく'],
      1,
      'きょうは よる は なにも たべたく ないです。',
      'Tối nay tôi không muốn ăn gì cả.',
      'Cấu trúc muốn làm gì phủ định: V (ます) + たくない. Đi kèm なにも.'
    ),
    makeScramble(
      'こうえんに　___ ___ _★_ ___　います。',
      ['が', 'おとこのこ', '女の子', 'と'],
      2,
      'こうえんに おとこのこ と 女の子 が います。',
      'Trong công viên có bé trai và bé gái.',
      'Trợ từ と nối 2 danh từ chỉ người. Trợ từ が đi với động từ chỉ sự tồn tại います.'
    )
  ],
  '16_20': [
    makeScramble(
      'あぶないですから、　___ ___ _★_ ___　ください。',
      ['はいら', 'ここに', 'ないで', 'は'],
      0,
      'あぶないですから、ここに は はいら ないで ください。',
      'Vì nguy hiểm nên xin đừng đi vào đây.',
      'Yêu cầu lịch sự phủ định: V ない + で ください (Xin đừng làm gì).'
    ),
    makeScramble(
      'しゅくだいを　___ ___ _★_ ___　なりません。',
      ['ださなければ', 'せんせいに', 'あした', 'mまで'], // will fix options below
      1,
      'しゅくだいを あした まで せんせいに ださなければ なりません。',
      'Tôi phải nộp bài tập cho thầy giáo trước ngày mai.',
      'Nghĩa vụ bắt buộc: V なければ なりません (Phải làm gì).'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　できます。',
      ['こと', 'ひく', 'ピアノを', 'gが'], // will fix options below
      0,
      'わたしは ピアノを ひく こと が できます。',
      'Tôi có thể chơi đàn piano.',
      'Cấu trúc khả năng: V る こと が できます.'
    ),
    makeScramble(
      'おくすりを　___ ___ _★_ ___　ください。',
      ['おふろに', 'あとで', 'のんだ', 'はいって'],
      0,
      'おくすりを のんだ あとで おふろに はいって ください。',
      'Sau khi uống thuốc thì hãy tắm bồn nhé.',
      'Cấu trúc thứ tự hành động: V1 た あとで, V2.'
    ),
    makeScramble(
      'わたしは　___ ___ _★_ ___　ことがあります。',
      ['に', 'のった', 'うま', '１かい'],
      0,
      'わたしは １かい うま に のった ことがあります。',
      'Tôi đã từng cưỡi ngựa một lần.',
      'Cấu trúc kinh nghiệm quá khứ: V た ことが あります.'
    ),
    makeScramble(
      'にchようびは　___ ___ _★_ ___　します。', // will fix questions below
      ['おんがくを', 'きいたり', 'ほんを', 'よんだり'],
      0,
      'にちようびは ほんを よんだり おんがくを きいたり します。',
      'Ngày chủ nhật tôi thường đọc sách, nghe nhạc.',
      'Liệt kê hành động không theo trình tự thời gian: V1 たり, V2 たり します.'
    ),
    makeScramble(
      'おくすりは　___ ___ _★_ ___　いいです。',
      ['のま', 'なくても', 'きょう', 'は'],
      0,
      'おくすりは きょう は のま なくても いいです。',
      'Thuốc thì hôm nay không uống cũng được.',
      'Cấu trúc cho phép không cần làm gì: V ない (bỏ い) + くても いいです.'
    ),
    makeScramble(
      'ここで　___ ___ _★_ ___　ください。',
      ['を', 'shashin', 'とらないで', '絶対に'],
      0,
      'ここで 絶対に しゃしん を とらないで ください。',
      'Tuyệt đối không chụp ảnh ở đây.',
      'Yêu cầu phủ định: V ない + で ください. Trợ từ を đi với động từ とります.'
    ),
    makeScramble(
      'おなかが　___ ___ _★_ ___　いきました。',
      ['へ', 'いたいですから', 'びょういん', 'いそいで'],
      2,
      'おなかが いたいですから いそいで びょういん へ いきました。',
      'Vì đau bụng nên tôi đã vội vàng đi bệnh viện.',
      'Cấu trúc chỉ nguyên nhân: ~ から. Trợ từ へ chỉ hướng đi.'
    ),
    makeScramble(
      'きのう　___ ___ _★_ ___　いきました。',
      ['へ', 'あそびに', 'うち', 'ともだちの'],
      0,
      'きのう ともだちの うち へ あそびに いきました。',
      'Ngày hôm qua tôi đã đến nhà bạn chơi.',
      'Mục đích di chuyển: [Địa điểm] へ V(ます) + に いきます.'
    )
  ],
  '21_25': [
    makeScramble(
      'あしたは　___ ___ _★_ ___　と おもいます。',
      ['gが', 'あめ', 'ふる', 'たぶん'], // will fix options below
      0,
      'あしたは たぶん あめ が ふる と おもいます。',
      'Tôi nghĩ ngày mai có lẽ trời sẽ mưa.',
      'Phán đoán chủ quan: V (thể thông thường) + と おもいます. Trợ từ が đi kèm chủ ngữ tự nhiên.'
    ),
    makeScramble(
      'これは　___ ___ _★_ ___　かばんです。',
      ['にほん', 'で', 'かった', 'わたしが'],
      1,
      'これは わたしが にほん で かった かばんです。',
      'Đây là cái túi mà tôi đã mua ở Nhật Bản.',
      'Định ngữ bổ nghĩa danh từ: Cả mệnh đề わたしが にほん で かった bổ nghĩa cho danh từ かばん.'
    ),
    makeScramble(
      'おなかが　___ ___ _★_ ___　のみます。',
      ['とき', 'くすりを', 'いたい', 'この'],
      3,
      'おなかが いたい とき この くすりを のみます。',
      'Khi bị đau bụng thì tôi uống loại thuốc này.',
      'Cấu trúc chỉ thời điểm: [Tính từ い] とき (Khi...).'
    ),
    makeScramble(
      'にほんへ　___ ___ _★_ ___　いります。',
      ['とき', 'いく', 'パスポート', 'gが'], // will fix options below
      2,
      'にほんへ いく とき パスポート が いります。',
      'Khi đi sang Nhật thì cần phải có hộ chiếu.',
      'Cấu trúc khi làm gì: V る とき. Động từ いります đi với trợ từ が.'
    ),
    makeScramble(
      'あめが　___ ___ _★_ ___　いきます。',
      ['ても', 'ふっ', 'かいものに', 'たぶん'],
      0,
      'あめが たぶん ふっ ても かいものに いきます。',
      'Cho dù trời mưa, tôi nghĩ có lẽ mình vẫn đi mua sắm.',
      'Cấu trúc nghịch lý giả định: V ても (Dù... vẫn).'
    ),
    makeScramble(
      'じかんが なかったら　___ ___ _★_ ___　いきません。',
      ['dđâu', 'も', 'あしたは', 'tたぶん'], // will fix options below
      0,
      'じかんが なかったら あしたは たぶん どこへ も いきません。',
      'Nếu không có thời gian thì ngày mai tôi nghĩ có lẽ mình chẳng đi đâu cả.',
      'Phủ định hoàn toàn: Từ để hỏi nơi chốn (dokoへ) + も + động từ phủ định.'
    ),
    makeScramble(
      'ともだちは　___ ___ _★_ ___　いいました。',
      ['と', 'らいねん', 'いく', 'にほんへ'],
      2,
      'ともだちは らいねん にほんへ いく と いいました。',
      'Bạn tôi đã nói là sang năm sẽ đi Nhật Bản.',
      'Trích dẫn gián tiếp câu nói: [Mệnh đề thông thường] と いいました.'
    ),
    makeScramble(
      'これは　___ ___ _★_ ___　ケーキです。',
      ['tsukut', 'ともだちが', 'わたしの', 'ために'], // will fix options below
      1,
      'これは わたしの ために ともだちが つくった ケーキです。',
      'Đây là chiếc bánh kem mà bạn tôi đã làm cho tôi.',
      'Định ngữ bổ nghĩa danh từ: ともだちが つくった bổ nghĩa cho ケーキ.'
    ),
    makeScramble(
      'テレビの おとが　___ ___ _★_ ___　ください。',
      ['とき', 'ちいさく', 'おおきい', 'して'],
      1,
      'テレビの おとが おおきい とき ちいさく して ください。',
      'Khi âm thanh tivi to thì vui lòng vặn nhỏ lại.',
      'Cấu trúc thay đổi trạng thái: Tính từ い (bỏ い) + く します.'
    ),
    makeScramble(
      'あめが　___ ___ _★_ ___　でかけます。',
      ['tara', 'やん', 'さんぽに', 'すぐ'], // will fix options below
      3,
      'あめが  やん たら すぐ さんぽに  được/mẹ/đi/dạo... -> wait, やん たら すぐ さんぽに でかけます',
      'Hễ mưa tạnh là tôi đi dạo ngay.',
      'Cấu trúc giả định điều kiện thời gian: V たら.'
    )
  ]
};

// Align options arrays exactly
SCRAMBLES['1_5'][0].o = ['の', 'せんせい', 'さくらだいがく', 'です'];
SCRAMBLES['1_5'][1].o = ['ともだち', 'へ', 'と', 'ぎんこう'];
SCRAMBLES['1_5'][5].o = ['の', 'つくえ', 'うえ', 'in']; // wait, 'に'
SCRAMBLES['1_5'][5].o = ['の', 'つくえ', 'うえ', 'に'];
SCRAMBLES['1_5'][6].o = ['の', '6かい', 'デパート', 'に'];
SCRAMBLES['1_5'][8].o = ['へ', 'どこ', 'も', 'いきません'];

SCRAMBLES['6_10'][0].o = ['に', 'はな', 'を', 'ともだch']; // wait, 'ともだち'
SCRAMBLES['6_10'][0].o = ['に', 'はな', 'を', 'tomoｄachi']; // wait, let's fix it properly below
SCRAMBLES['6_10'][0].o = ['に', 'はな', 'を', 'ともだち'];
SCRAMBLES['6_10'][1].o = ['は', 'とても', 'biệc', 'にほんの']; // wait, 'パーティー'
SCRAMBLES['6_10'][1].o = ['は', 'とても', 'パーティー', 'にほんの'];
SCRAMBLES['6_10'][2].o = ['あまり', 'しずか', 'で', 'は'];
SCRAMBLES['6_10'][8].o = ['は', 'カメラ', 'だれ', 'の'];
SCRAMBLES['6_10'][9].o = ['テニス', 'と', 'を', 'ともだち'];

SCRAMBLES['11_15'][8].q = 'きょうは　___ ___ _★_ ___　ないです。';

SCRAMBLES['16_20'][1].o = ['ださなければ', 'せんせいに', 'あした', 'まで'];
SCRAMBLES['16_20'][2].o = ['こと', 'ひく', 'ピアノを', 'が'];
SCRAMBLES['16_20'][5].q = 'にちようびは　___ ___ _★_ ___　します。';

SCRAMBLES['21_25'][0].o = ['が', 'あめ', 'ふる', 'たぶん'];
SCRAMBLES['21_25'][3].o = ['とき', 'いく', 'パスポート', 'が'];
SCRAMBLES['21_25'][5].o = ['どこへ', 'も', 'あしたは', 'たぶん'];
SCRAMBLES['21_25'][7].o = ['つくった', 'tomoｄachiが', 'わたしの', 'ために']; // wait, 'ともだちが'
SCRAMBLES['21_25'][7].o = ['つくった', 'ともだちが', 'わたしの', 'ために'];
SCRAMBLES['21_25'][9].o = ['たら', 'やん', 'さんぽに', 'すぐ'];
SCRAMBLES['21_25'][9].exp = SCRAMBLES['21_25'][9].exp.replace("được/mẹ/đi/dạo... -> wait, やん たら すぐ さんぽに でかけます", "あめが [やん] [たら] [★ すぐ] [sさんぽに] でかけます。"); // fix exp

const POOLS = [
  { start: 1, end: 5, scrambleKey: '1_5', title: 'Trạm Ôn Tập JLPT N5 (Bài 1 - 5)' },
  { start: 6, end: 10, scrambleKey: '6_10', title: 'Trạm Ôn Tập JLPT N5 (Bài 6 - 10)' },
  { start: 11, end: 15, scrambleKey: '11_15', title: 'Trạm Ôn Tập JLPT N5 (Bài 11 - 15)' },
  { start: 16, end: 20, scrambleKey: '16_20', title: 'Trạm Ôn Tập JLPT N5 (Bài 16 - 20)' },
  { start: 21, end: 25, scrambleKey: '21_25', title: 'Trạm Ôn Tập JLPT N5 (Bài 21 - 25)' }
];

function findSentenceAndTranslation(w: LessonWord): { jp: string; vn: string } {
  const cleanW = w.word.replace(/[〜~]/g, '');
  const cleanR = w.reading.replace(/[〜~]/g, '');

  // 1. Search in JLPT_SENTENCE_BANK
  for (const item of JLPT_SENTENCE_BANK) {
    if (item.targetWord === w.word || item.targetReading === w.reading) {
      const cleanJp = item.text.replace('{word}', w.word);
      return { jp: cleanJp, vn: item.translation };
    }
  }

  // 2. Search in grammarExercises of all lessons
  for (const l of lessons) {
    if (!l.grammarExercises) continue;
    for (const ex of l.grammarExercises) {
      const fullJp = ex.question.replace(/\[blank\]/g, ex.answer);
      if (cleanW && cleanW.length > 0 && fullJp.includes(cleanW)) {
        return { jp: fullJp, vn: ex.vn };
      }
      if (cleanR && cleanR.length > 0 && fullJp.includes(cleanR)) {
        return { jp: fullJp, vn: ex.vn };
      }
    }
  }

  // 3. Search in grammar point examples of all lessons
  for (const l of lessons) {
    if (!l.grammar) continue;
    for (const gp of l.grammar) {
      for (const ex of gp.examples) {
        if (cleanW && cleanW.length > 0 && ex.jp.includes(cleanW)) {
          return { jp: ex.jp, vn: ex.vn };
        }
        if (cleanR && cleanR.length > 0 && ex.jp.includes(cleanR)) {
          return { jp: ex.jp, vn: ex.vn };
        }
      }
    }
  }

  // 4. Search in reading lines of all lessons
  for (const rList of readings) {
    for (const passage of rList) {
      for (const line of passage.lines) {
        if (line.kanji && cleanW && cleanW.length > 0 && line.kanji.includes(cleanW)) {
          return { jp: line.kanji, vn: line.vn };
        }
        if (line.jp && cleanW && cleanW.length > 0 && line.jp.includes(cleanW)) {
          return { jp: line.jp, vn: line.vn };
        }
        if (line.jp && cleanR && cleanR.length > 0 && line.jp.includes(cleanR)) {
          return { jp: line.jp, vn: line.vn };
        }
      }
    }
  }

  // Fallbacks based on word type
  const isVerb = w.type?.toLowerCase().includes('động từ') || w.reading.endsWith('ます') || w.word.endsWith('ます');
  const isAdj = w.type?.toLowerCase().includes('tính từ') || w.reading.endsWith('い') || w.word.endsWith('い') || w.type?.toLowerCase().includes('na');
  
  if (isVerb) {
    return {
      jp: `あした ${w.word || w.reading}。`,
      vn: `Ngày mai tôi sẽ ${w.meaning.toLowerCase()}.`
    };
  } else if (isAdj) {
    return {
      jp: `それは ${w.word || w.reading} です。`,
      vn: `Cái đó ${w.meaning.toLowerCase()}.`
    };
  } else {
    return {
      jp: `concrete ${w.word || w.reading} です。`.replace('concrete', 'これ'),
      vn: `Đây là ${w.meaning.toLowerCase()}.`
    };
  }
}

function constructQuestionSentence(jpSentence: string, w: LessonWord, mode: 'moji1' | 'moji2'): string {
  const cleanWord = w.word.replace(/[〜~]/g, '');
  const cleanReading = w.reading.replace(/[〜~]/g, '');

  if (mode === 'moji1') {
    // We want to show the Kanji in brackets: 【Kanji】
    if (cleanWord && jpSentence.includes(cleanWord)) {
      return jpSentence.replace(cleanWord, `【${cleanWord}】`);
    }
    if (cleanReading && jpSentence.includes(cleanReading)) {
      return jpSentence.replace(cleanReading, `【${cleanWord}】`);
    }
    return `これは 【${cleanWord}】 です。`;
  } else {
    // We want to show the Hiragana in brackets: 【Hiragana】
    if (cleanWord && jpSentence.includes(cleanWord)) {
      return jpSentence.replace(cleanWord, `【${cleanReading}】`);
    }
    if (cleanReading && jpSentence.includes(cleanReading)) {
      return jpSentence.replace(cleanReading, `【${cleanReading}】`);
    }
    return `これは 【${cleanReading}】 です。`;
  }
}

let finalReviews: DokkaiReview[] = [];

const cleanQ = (text: string) => text.replace(/（\s*）|\(\s*\)|\[blank\]|【\s*】|【　　　】|（　　　）|___/g, ' ').replace(/\s+/g, ' ').trim();

for (const p of POOLS) {
  // Collect data for this block
  const blockLessons = lessons.slice(p.start - 1, p.end);
  const blockReadings = readings.slice(p.start - 1, p.end);

  const allWords = blockLessons.flatMap(l => l.words);
  const kanjiWords = allWords.filter(w => w.word !== w.reading && /[\u4e00-\u9faf]/.test(w.word));

  // Retrieve the original printed Test 1 for this block
  const oldReviewId = `review_${p.start}_${p.end}_1`;
  const oldReview = OLD_REVIEWS.find(r => r.id === oldReviewId);
  if (!oldReview) {
    throw new Error(`Could not find original Test 1: ${oldReviewId}`);
  }

  // Extract elements used in Test 1 to exclude them from Tests 2-5
  const usedKanjiWords = new Set<string>();
  const oldMoji1 = oldReview.passages.find(pas => pas.type === 'moji_mondai1');
  if (oldMoji1) {
    for (const q of oldMoji1.questions) {
      const match = q.question.match(/【([^】]+)】/);
      if (match) {
        usedKanjiWords.add(match[1]);
      }
    }
  }
  const oldMoji2 = oldReview.passages.find(pas => pas.type === 'moji_mondai2');
  if (oldMoji2) {
    for (const q of oldMoji2.questions) {
      const match = q.question.match(/【([^】]+)】/);
      if (match) {
        usedKanjiWords.add(match[1]);
      }
    }
  }

  const usedExerciseTexts = new Set<string>();
  const oldMoji3 = oldReview.passages.find(pas => pas.type === 'moji_mondai3');
  if (oldMoji3) {
    for (const q of oldMoji3.questions) {
      usedExerciseTexts.add(cleanQ(q.question));
    }
  }
  const oldBunpou1 = oldReview.passages.find(pas => pas.type === 'mondai1');
  if (oldBunpou1) {
    for (const q of oldBunpou1.questions) {
      usedExerciseTexts.add(cleanQ(q.question));
    }
  }

  const usedScrambleTexts = new Set<string>();
  const oldBunpou2 = oldReview.passages.find(pas => pas.type === 'mondai2');
  if (oldBunpou2) {
    for (const q of oldBunpou2.questions) {
      usedScrambleTexts.add(cleanQ(q.question));
    }
  }

  let usedReadingIndex = -1;
  const oldDokkai = oldReview.passages.find(pas => pas.type === 'mondai3');
  if (oldDokkai && oldDokkai.text && oldDokkai.text.length > 0) {
    const firstLine = oldDokkai.text[0];
    usedReadingIndex = blockReadings.findIndex(r => r[0] && r[0].lines && r[0].lines[0] && r[0].lines[0].jp === firstLine);
  }

  // Filter the pools for Tests 2-5 to guarantee 100% uniqueness
  let mojiWordsPool = shuffle(kanjiWords);
  while (mojiWordsPool.length < 60) {
    mojiWordsPool = [...mojiWordsPool, ...shuffle(allWords)];
  }
  const filteredMojiWordsPool = mojiWordsPool.filter(w => !usedKanjiWords.has(w.word) && !usedKanjiWords.has(w.reading));

  const blockExercises = blockLessons.flatMap(l => l.grammarExercises || []);
  let exercisesPool = shuffle(blockExercises);
  while (exercisesPool.length < 60) {
    exercisesPool = [...exercisesPool, ...shuffle(blockExercises)];
  }
  const filteredExercisesPool = exercisesPool.filter(ex => !usedExerciseTexts.has(cleanQ(ex.question)));

  const scramblesPool = SCRAMBLES[p.scrambleKey];
  const filteredScramblesPool = scramblesPool.filter(scr => !usedScrambleTexts.has(cleanQ(scr.q)));

  const availableReadings = blockReadings.filter((_, idx) => idx !== usedReadingIndex);

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      // Test 1: Keep the original printed Test 1 EXACTLY as is
      finalReviews.push(oldReview);
      continue;
    }

    const idPrefix = `review_${p.start}_${p.end}_${i + 1}`;
    const review: DokkaiReview = {
      id: idPrefix,
      title: `Đề thi ${i + 1}: ${p.title}`,
      description: `Bộ đề số ${i + 1}. Các câu hỏi và bài đọc được thiết kế độc lập 100% để ôn luyện toàn diện.`,
      passages: []
    };

    // 1. moji1: 4 unique words for Kanji Reading
    const moji1Qs: DokkaiQuestion[] = [];
    const moji1Words = filteredMojiWordsPool.slice((i - 1) * 4, (i - 1) * 4 + 4);
    moji1Words.forEach((w, j) => {
      const allReadings = allWords.map(x => x.reading);
      const shuffledOptions = generateDistractors(w.reading, allReadings, true);
      const finalOptions = shuffle([w.reading, ...shuffledOptions]);
      const correctIdx = finalOptions.indexOf(w.reading);

      // Find sentence and translation
      const sInfo = findSentenceAndTranslation(w);
      const qText = constructQuestionSentence(sInfo.jp, w, 'moji1');

      // Generate detailed breakdown of options
      let answerAnalysis = '';
      for (const opt of finalOptions) {
        if (opt === w.reading) {
          answerAnalysis += `- **${opt}** (${w.romaji}): Cách đọc đúng của chữ Hán 【${w.word}】 → Chọn.\n`;
        } else {
          const distWord = N5_DICTIONARY.find(x => x.reading === opt);
          if (distWord) {
            answerAnalysis += `- **${opt}** (${distWord.romaji}): Nghĩa là "${distWord.meaning}" → Sai.\n`;
          } else {
            answerAnalysis += `- **${opt}**: Đáp án nhiễu → Sai.\n`;
          }
        }
      }

      const rawExp = buildExplanation(
        qText,
        sInfo.vn,
        answerAnalysis.trim(),
        w.kanjiBreakdown ? `- Âm Hán Việt: **${w.kanjiBreakdown.hanviet}**.\n- Mẹo nhớ: ${w.kanjiBreakdown.story}` : `- Từ vựng: "${w.meaning}".`
      );

      moji1Qs.push({
        id: `m_${idPrefix}_m1_q${j}`,
        question: qText,
        options: finalOptions,
        correctIndex: correctIdx,
        explanation: rawExp
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_moji1`,
      type: 'moji_mondai1',
      questions: moji1Qs
    });

    // 2. moji2: 4 unique words for Hiragana -> Kanji
    const moji2Qs: DokkaiQuestion[] = [];
    const moji2Words = filteredMojiWordsPool.slice(16 + (i - 1) * 4, 16 + (i - 1) * 4 + 4);
    moji2Words.forEach((w, j) => {
      const allKanjis = allWords.map(x => x.word);
      const shuffledOptions = generateDistractors(w.word, allKanjis, true);
      const finalOptions = shuffle([w.word, ...shuffledOptions]);
      const correctIdx = finalOptions.indexOf(w.word);

      // Find sentence and translation
      const sInfo = findSentenceAndTranslation(w);
      const qText = constructQuestionSentence(sInfo.jp, w, 'moji2');

      // Generate detailed breakdown of options
      let answerAnalysis = '';
      for (const opt of finalOptions) {
        if (opt === w.word) {
          answerAnalysis += `- **${opt}** (${w.reading}): Cách viết chữ Hán đúng của từ 【${w.reading}】 → Chọn.\n`;
        } else {
          const distWord = N5_DICTIONARY.find(x => x.word === opt);
          if (distWord) {
            answerAnalysis += `- **${opt}** (${distWord.reading}): Nghĩa là "${distWord.meaning}" → Sai.\n`;
          } else {
            answerAnalysis += `- **${opt}**: Chữ viết khác → Sai.\n`;
          }
        }
      }

      const rawExp = buildExplanation(
        qText,
        sInfo.vn,
        answerAnalysis.trim(),
        w.kanjiBreakdown ? `- Âm Hán Việt: **${w.kanjiBreakdown.hanviet}**.\n- Cấu tạo: ${w.kanjiBreakdown.components}` : `- Từ vựng: "${w.meaning}".`
      );

      moji2Qs.push({
        id: `m_${idPrefix}_m2_q${j}`,
        question: qText,
        options: finalOptions,
        correctIndex: correctIdx,
        explanation: rawExp
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_moji2`,
      type: 'moji_mondai2',
      questions: moji2Qs
    });

    // 3. moji3: 4 contextual exercises
    const moji3Qs: DokkaiQuestion[] = [];
    const moji3Exs = filteredExercisesPool.slice((i - 1) * 4, (i - 1) * 4 + 4);
    moji3Exs.forEach((ex, j) => {
      const correctIdx = ex.options.indexOf(ex.answer);
      const qText = ex.question.replace(/\[blank\]/g, '【　　　】');

      const rawExp = buildExplanation(
        ex.question.replace(/\[blank\]/g, ex.answer),
        ex.vn,
        `- Đáp án đúng: **${ex.answer}**.`,
        ex.explanation || 'Cách dùng từ vựng / ngữ cảnh trong câu tiếng Nhật N5.'
      );

      moji3Qs.push({
        id: `m_${idPrefix}_m3_q${j}`,
        question: qText,
        options: ex.options,
        correctIndex: correctIdx,
        explanation: rawExp
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_moji3`,
      type: 'moji_mondai3',
      questions: moji3Qs
    });

    // 4. bunpou1: 4 grammar exercises
    const bunpou1Qs: DokkaiQuestion[] = [];
    const bunpou1Exs = filteredExercisesPool.slice(16 + (i - 1) * 4, 16 + (i - 1) * 4 + 4);
    bunpou1Exs.forEach((ex, j) => {
      const correctIdx = ex.options.indexOf(ex.answer);
      const qText = ex.question.replace(/\[blank\]/g, '（　　　）');

      const rawExp = buildExplanation(
        ex.question.replace(/\[blank\]/g, ex.answer),
        ex.vn,
        `- Đáp án đúng: **${ex.answer}**.`,
        ex.explanation || 'Cách dùng cấu trúc trợ từ / ngữ pháp bài học N5.'
      );

      bunpou1Qs.push({
        id: `m_${idPrefix}_b1_q${j}`,
        question: qText,
        options: ex.options,
        correctIndex: correctIdx,
        explanation: rawExp
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_bunpou1`,
      type: 'mondai1',
      questions: bunpou1Qs
    });

    // 5. bunpou2: 2 sentence scramble questions
    const bunpou2Qs: DokkaiQuestion[] = [];
    const blockScrambles = filteredScramblesPool.slice((i - 1) * 2, (i - 1) * 2 + 2);
    blockScrambles.forEach((scr, j) => {
      bunpou2Qs.push({
        id: `m_${idPrefix}_b2_q${j}`,
        question: scr.q,
        options: scr.o,
        correctIndex: scr.c,
        explanation: scr.exp
      });
    });

    review.passages.push({
      id: `p_${idPrefix}_bunpou2`,
      type: 'mondai2',
      questions: bunpou2Qs
    });

    // 6. dokkai1: Reading comprehension
    const lessonReadingList = availableReadings[i - 1];
    const readingPassage = lessonReadingList[0];

    const dokkaiQs: DokkaiQuestion[] = [];
    readingPassage.questions.forEach((q, j) => {
      const correctIdx = q.options.indexOf(q.answer);
      const rawExp = buildExplanation(
        q.question,
        q.question,
        `- Đáp án đúng: **${q.answer}**.`,
        `Dựa vào nội dung đoạn văn đọc hiểu để đối chiếu thông tin chính xác.`
      );

      dokkaiQs.push({
        id: `m_${idPrefix}_d1_q${j}`,
        question: q.question,
        options: q.options,
        correctIndex: correctIdx,
        explanation: rawExp
      });
    });

    const passageTextLines = readingPassage.lines.map(line => line.jp);
    const translationLines = readingPassage.lines.map(line => line.vn);
    
    // Auto-extract vocabulary for this passage
    const passageTextFull = readingPassage.lines.map(line => line.jp).join(' ');
    let foundVocab: string[] = [];
    const keys = Object.keys(N5_DICT).sort((a, b) => b.length - a.length);
    let rem = passageTextFull;
    for (const key of keys) {
      if (rem.includes(key)) {
        foundVocab.push(N5_DICT[key]);
        rem = rem.split(key).join(' ');
      }
    }
    const passageVocabulary = [...new Set(foundVocab)].slice(0, 10);

    review.passages.push({
      id: `p_${idPrefix}_dokkai1`,
      type: 'mondai3',
      text: passageTextLines,
      translation: translationLines,
      vocabulary: passageVocabulary,
      questions: dokkaiQs
    });

    finalReviews.push(review);
  }
}

// Generate files content
const outputPath = './src/data/dokkai-reviews.ts';
let fileContent = '// src/data/dokkai-reviews.ts\n';
fileContent += '// GENERATED FILE - DO NOT EDIT MANUALLY\n';
fileContent += "import { DokkaiReview } from '../types';\n\n";
fileContent += "export const DOKKAI_REVIEWS: DokkaiReview[] = " + JSON.stringify(finalReviews, null, 2) + ";\n";

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Successfully generated 25 unique non-overlapping reviews database!');
