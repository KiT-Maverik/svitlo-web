import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { choiceFeedback, isGraded, resultFeedback } from './feedback';

describe('Widgets', () => {
  describe('Questions', () => {
    describe('Feedback', () => {
      it('should hide presentation feedback for null, incomplete and invalid checks', () => {
        assert.equal(isGraded(null), false);
        assert.equal(isGraded({ status: 'incomplete', reason: 'empty' }), false);
        assert.equal(isGraded({ status: 'invalid', reason: 'definition' }), false);
        for (const result of [
          null,
          { status: 'incomplete', reason: 'empty' } as const,
          { status: 'invalid', reason: 'definition' } as const,
        ]) {
          assert.equal(choiceFeedback(result, true, true, {}), undefined);
          assert.equal(resultFeedback(result, {}), undefined);
        }
      });
      it('should show missed correct answers without changing the submitted selection', () => {
        const result = { status: 'incorrect' } as const;
        assert.equal(choiceFeedback(result, false, true, {}), 'missed');
        assert.equal(choiceFeedback(result, true, false, {}), 'incorrect');
        assert.equal(choiceFeedback(result, true, true, {}), 'correct');
      });
      it('should independently control correct-answer and error visibility', () => {
        const result = { status: 'incorrect' } as const;
        for (const showErrors of [true, false])
          for (const showCorrectAnswers of [true, false]) {
            const flags = { showErrors, showCorrectAnswers };
            assert.equal(choiceFeedback(result, true, false, flags), showErrors ? 'incorrect' : undefined);
            assert.equal(choiceFeedback(result, false, true, flags), showCorrectAnswers ? 'missed' : undefined);
            assert.equal(resultFeedback(result, flags), showErrors ? 'incorrect' : undefined);
          }
      });
      it('should show positive field feedback only when enabled', () => {
        assert.equal(resultFeedback({ status: 'correct' }, {}), 'correct');
        assert.equal(resultFeedback({ status: 'correct' }, { showCorrectAnswers: false }), undefined);
        assert.equal(resultFeedback({ status: 'incorrect' }, { showErrors: false }), undefined);
      });
    });
  });
});
