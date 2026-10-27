import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exampleQuestions } from './examples';

test('example question definitions survive a JSON round trip', () => {
  assert.deepEqual(JSON.parse(JSON.stringify(exampleQuestions)), exampleQuestions);
  assert.equal(exampleQuestions.length, 9);
});
