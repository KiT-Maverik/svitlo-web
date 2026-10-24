import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkAnswer, checkers, normalizeText, parseAnswerWithNumber } from '../src/components/widgets/questions/check';
import { exampleQuestions } from '../src/components/widgets/questions/examples';
import type { QuestionOf } from '../src/components/widgets/questions/model';
const [single, multi, matching, text, numeric, ordering, blocks] = exampleQuestions;
// Type-narrow fixtures so each checker enforces its question/answer contract.
assert.equal(single.type, 'single-select');
const base = { id: 'test', prompt: 'Test', explanation: 'Explanation' };
const n: QuestionOf<'numeric'> = { ...base, type: 'numeric', expected: 10, tolerance: 0.25 };

test('single-select checks ID independently from displayed order or labels', () => {
  if (single.type !== 'single-select') throw Error();
  assert.equal(checkers['single-select']({ ...single, options: [...single.options].reverse().map(o => ({ ...o, label: 'Same' })) }, 'mercury').status, 'correct');
  assert.equal(checkers['single-select'](single, 'earth').status, 'incorrect');
  assert.equal(checkers['single-select'](single, null).status, 'incomplete');
  assert.equal(checkers['single-select'](single, 'unknown').status, 'invalid');
});
test('multiple-select exact set equality ignores order, but rejects missing, extra and duplicate IDs', () => {
  if (multi.type !== 'multiple-select') throw Error();
  const check = (v: string[]) => checkers['multiple-select'](multi, v).status;
  assert.equal(check(['five', 'two']), 'correct');
  assert.equal(check(['two']), 'incorrect');
  assert.equal(check(['two', 'five', 'four']), 'incorrect');
  assert.equal(check([]), 'incomplete');
  assert.equal(check(['two', 'two']), 'invalid');
});
test('matching distinguishes incomplete, wrong and invalid duplicate or foreign pairs', () => {
  if (matching.type !== 'matching') throw Error();
  const check = (v: Record<string, string>) => checkers.matching(matching, v).status;
  assert.equal(check({}), 'incomplete');
  assert.equal(check({ ua: 'kyiv' }), 'incomplete');
  assert.equal(check({ ua: 'paris', fr: 'kyiv' }), 'incorrect');
  assert.equal(check({ fr: 'paris', ua: 'kyiv' }), 'correct');
  assert.equal(check({ ua: 'kyiv', fr: 'kyiv' }), 'invalid');
  assert.equal(check({ ua: 'mars' }), 'invalid');
  assert.equal(check({ unknown: 'kyiv' }), 'invalid');
});
test('text normalization has three explicit independent switches', () => {
  const q: QuestionOf<'short-text'> = { ...base, type: 'short-text', acceptedAnswers: ['Green tree', 'Oak'], normalization: { trim: true, ignoreCase: true, collapseWhitespace: true } };
  assert.equal(checkers['short-text'](q, '  GREEN   tree  ').status, 'correct');
  assert.equal(checkers['short-text'](q, 'OAK').status, 'correct');
  assert.equal(checkers['short-text'](q, 'pine').status, 'incorrect');
  assert.equal(checkers['short-text'](q, '   ').status, 'incomplete');
  for (const flag of ['trim', 'ignoreCase', 'collapseWhitespace'] as const) {
    assert.equal(checkers['short-text']({ ...q, normalization: { ...q.normalization, [flag]: false } }, '  GREEN   tree  ').status, 'incorrect');
  }
  assert.equal(normalizeText(' A\t B ', { trim: false, ignoreCase: false, collapseWhitespace: false }), ' A\t B ');
});
for (const value of ['10', '10.25', '9.75', '10,25', ' +10,0 ']) test(`numeric inclusive tolerance accepts ${value}`, () => {
  assert.equal(checkers.numeric(n, value).status, 'correct');
});
for (const value of ['10.250001', '9.749999', '11']) test(`numeric rejects outside tolerance ${value}`, () => {
  assert.equal(checkers.numeric(n, value).status, 'incorrect');
});
for (const value of ['', ' ', '\t']) test(`numeric empty is incomplete ${JSON.stringify(value)}`, () => {
  assert.equal(checkers.numeric(n, value).status, 'incomplete');
  assert.equal(parseAnswerWithNumber(value), null);
});
for (const value of ['12abc', 'Infinity', 'NaN', '1e2', '0x10', '1 000', '1,234.5', '1.2.3', '--1', '.', '9'.repeat(400)]) test(`numeric rejects malformed ${value.slice(0, 30)}`, () => {
  assert.equal(checkers.numeric(n, value).status, 'invalid');
});
test('numeric supports zero, signs, decimal comma, rounding boundary and exact zero tolerance', () => {
  assert.equal(parseAnswerWithNumber('0'), 0);
  assert.equal(parseAnswerWithNumber('-,5'), -0.5);
  assert.equal(checkers.numeric({ ...n, expected: 0.2, tolerance: 0.1 }, '0.3').status, 'correct');
  assert.equal(checkers.numeric({ ...n, tolerance: 0 }, '10').status, 'correct');
  assert.equal(checkers.numeric({ ...n, tolerance: 0 }, '10.0000000001').status, 'incorrect');
});
test('ordering requires every unique ID in the expected order without mutating inputs', () => {
  if (ordering.type !== 'ordering') throw Error();
  const answer = ['evaporation', 'cloud', 'rain'];
  assert.equal(checkers.ordering(ordering, answer).status, 'correct');
  assert.deepEqual(answer, ['evaporation', 'cloud', 'rain']);
  assert.equal(checkers.ordering(ordering, [...answer].reverse()).status, 'incorrect');
  assert.equal(checkers.ordering(ordering, ['rain']).status, 'incomplete');
  assert.equal(checkers.ordering(ordering, ['rain', 'rain']).status, 'invalid');
  assert.equal(checkers.ordering(ordering, ['unknown']).status, 'invalid');
});
test('block-builder supports extras, repeated labels with unique IDs, and alternative sequences', () => {
  if (blocks.type !== 'block-builder') throw Error();
  const check = (v: string[]) => checkers['block-builder'](blocks, v).status;
  assert.equal(check(blocks.acceptedSequences[0]), 'correct');
  assert.equal(check(blocks.acceptedSequences[1]), 'correct');
  assert.equal(check([...blocks.acceptedSequences[0], 'three']), 'incorrect');
  assert.equal(check(['one-a', 'plus', 'one-a', 'equals', 'two']), 'invalid');
  assert.equal(check(['one-a']), 'incomplete');
  assert.equal(check(['three']), 'incorrect');
  assert.equal(check(['one-b', 'one-a', 'plus', 'equals', 'two']), 'incorrect');
});
test('fill-blanks drag checks complete mappings, missing blanks and duplicate blocks', () => {
  const question = exampleQuestions.find(item => item.type === 'fill-blanks-drag');
  if (!question || question.type !== 'fill-blanks-drag') throw Error();
  const check = (value: Record<string, string | null>) => checkers['fill-blanks-drag'](question, value).status;
  assert.equal(check({ capital: 'kyiv', mountain: 'hoverla' }), 'correct');
  assert.equal(check({ capital: 'kyiv', mountain: null }), 'incomplete');
  assert.equal(check({ capital: 'hoverla', mountain: 'kyiv' }), 'incorrect');
  assert.equal(check({ capital: 'kyiv', mountain: 'kyiv' }), 'invalid');
});
test('fill-blanks text checks each blank with shared normalization', () => {
  const question = exampleQuestions.find(item => item.type === 'fill-blanks-text');
  if (!question || question.type !== 'fill-blanks-text') throw Error();
  const check = (value: Record<string, string>) => checkers['fill-blanks-text'](question, value).status;
  assert.equal(check({ evaporation: ' ВИПАРОВУВАННЯ ', condensation: 'конденсація' }), 'correct');
  assert.equal(check({ evaporation: 'випаровування', condensation: '' }), 'incomplete');
  assert.equal(check({ evaporation: 'танення', condensation: 'конденсація' }), 'incorrect');
});
test('malformed authored definitions are invalid rather than incorrectly graded', () => {
  assert.equal(checkers.numeric({ ...n, tolerance: -1 }, '10').status, 'invalid');
  assert.equal(checkers.numeric({ ...n, expected: Infinity }, '10').status, 'invalid');
  if (matching.type !== 'matching' || blocks.type !== 'block-builder') throw Error();
  assert.equal(checkers.matching({ ...matching, pairs: [matching.pairs[0], matching.pairs[0]] }, {}).status, 'invalid');
  assert.equal(checkers['block-builder']({ ...blocks, acceptedSequences: [['unknown']] }, []).status, 'invalid');
});
test('JSON round-trip preserves definitions and pure dispatcher works without React', () => {
  assert.deepEqual(JSON.parse(JSON.stringify(exampleQuestions)), exampleQuestions);
  assert.equal(checkAnswer({ question: n, answer: { type: 'numeric', value: '10' } }).status, 'correct');
  assert.equal(exampleQuestions.length, 9);
  assert.equal(text.type, 'short-text');
  assert.equal(numeric.type, 'numeric');
});
