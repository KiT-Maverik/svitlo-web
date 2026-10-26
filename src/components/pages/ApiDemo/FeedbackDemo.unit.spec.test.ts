import { describe, expect, it } from 'vitest';
import { FeedbackDemo_fx } from './FeedbackDemo.unit.fx.test';

describe('Components', () => {
  describe('ApiDemo', () => {
    describe('FeedbackDemo', () => {
      it('should render the localized feedback heading and accessible control labels', () => {
        FeedbackDemo_fx.render();
        expect(FeedbackDemo_fx.selectors.heading()).toBeVisible();
        expect(FeedbackDemo_fx.selectors.setting('showErrors')).toBeVisible();
      });

      it('should enable error and correct-answer hints by default', () => {
        FeedbackDemo_fx.render();
        expect(FeedbackDemo_fx.selectors.setting('showErrors')).toBeChecked();
        expect(FeedbackDemo_fx.selectors.setting('showCorrectAnswers')).toBeChecked();
        expect(FeedbackDemo_fx.selectors.setting('showResult')).toBeChecked();
        expect(FeedbackDemo_fx.selectors.setting('showLetters')).not.toBeChecked();
      });

      it('should toggle all feedback display controls independently', async () => {
        FeedbackDemo_fx.render();
        await FeedbackDemo_fx.actions.toggle('showErrors');
        await FeedbackDemo_fx.actions.toggle('showLetters');
        expect(FeedbackDemo_fx.selectors.setting('showErrors')).not.toBeChecked();
        expect(FeedbackDemo_fx.selectors.setting('showCorrectAnswers')).toBeChecked();
        expect(FeedbackDemo_fx.selectors.setting('showLetters')).toBeChecked();
      });
    });
  });
});
