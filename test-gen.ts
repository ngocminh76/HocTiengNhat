import { generateJlptTest } from './src/data/JlptTestGenerator.ts';

try {
  const test = generateJlptTest([1], 20);
  console.log("SUCCESS:", test.questions.length);
} catch (e) {
  console.error("ERROR:", e);
}
