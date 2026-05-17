const wanakana = require('wanakana');
const removePunctuation = (s) => {
  let clean = s.trim().normalize('NFKC');
  clean = clean.replace(/^[a-zA-Z][：:]\s*/, '');
  clean = clean.replace(/[\s。、？！?!—\-–~〜・「」『』（）()\[\]【】\'\".,]/g, '');
  return clean.toLowerCase();
};
const jp = 'A：はじめまして。わたしは テレサ・カルロスです。';
const input = 'ブラジルじんです';

const expected = wanakana.toHiragana(removePunctuation(jp));
const actual = removePunctuation(input);
const actualHiragana = wanakana.toHiragana(actual);

console.log('expected:', expected);
console.log('actualHiragana:', actualHiragana);
console.log('match?', actualHiragana === expected);
