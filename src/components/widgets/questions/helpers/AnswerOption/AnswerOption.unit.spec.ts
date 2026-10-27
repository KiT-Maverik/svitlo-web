import { test } from 'node:test';
import assert from 'node:assert/strict';
import { answerLetter } from './AnswerOption';

test('answer letters continue after Z', () => {
  assert.deepEqual([0, 1, 2, 25, 26, 27].map(answerLetter), ['A', 'B', 'C', 'Z', 'AA', 'AB']);
});
