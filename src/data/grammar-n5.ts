import { GrammarPattern } from '../types';
import { GRAMMAR_PART_1 } from './grammar/part1';
import { GRAMMAR_PART_2 } from './grammar/part2';
import { GRAMMAR_PART_3 } from './grammar/part3';

// Tổng hợp các mẫu ngữ pháp (hiện tại có 30 mẫu, dùng cho 50 chữ Kanji đầu tiên)
export const GRAMMAR_N5: GrammarPattern[] = [
  ...GRAMMAR_PART_1,
  ...GRAMMAR_PART_2,
  ...GRAMMAR_PART_3
];
