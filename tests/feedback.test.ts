import { test } from 'node:test';
import assert from 'node:assert/strict';
import { choiceFeedback } from '../src/features/questions/feedback';

test('choice feedback is gated by an actual graded result and distinguishes missed correct IDs', () => {
  for (const result of [null, undefined, { status: 'incomplete' as const, reason: 'empty' as const }, { status: 'invalid' as const, reason: 'definition' as const }]) {
    assert.equal(choiceFeedback(result, true, true, {}), undefined);
    assert.equal(choiceFeedback(result, true, false, {}), undefined);
    assert.equal(choiceFeedback(result, false, true, {}), undefined);
  }
  assert.equal(choiceFeedback({ status: 'correct' }, true, true, {}), 'correct');
  assert.equal(choiceFeedback({ status: 'incorrect' }, true, false, {}), 'incorrect');
  assert.equal(choiceFeedback({ status: 'incorrect' }, false, true, {}), 'missed');
  assert.equal(choiceFeedback({ status: 'incorrect' }, false, false, {}), undefined);
});
test('error and correct-answer visibility switches are independent for every option state', () => {
  for (const showErrors of [false, true]) for (const showCorrectAnswers of [false, true]) {
    const flags = { showErrors, showCorrectAnswers };
    assert.equal(choiceFeedback({ status: 'incorrect' }, true, false, flags), showErrors ? 'incorrect' : undefined);
    assert.equal(choiceFeedback({ status: 'incorrect' }, true, true, flags), showCorrectAnswers ? 'correct' : undefined);
    assert.equal(choiceFeedback({ status: 'incorrect' }, false, true, flags), showCorrectAnswers ? 'missed' : undefined);
  }
});
