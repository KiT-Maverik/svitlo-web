import { describe, expect, it } from 'vitest';
import { QuestionsDemo_fx } from './QuestionsDemo.unit.fx';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('QuestionsDemo', () => {
    it('should render the localized title and semantic demo controls', () => {
      QuestionsDemo_fx.render();
      expect(QuestionsDemo_fx.selectors.title()).toBeVisible();
      expect(QuestionsDemo_fx.selectors.controls()).toHaveAccessibleName(locale.controls);
      expect(QuestionsDemo_fx.selectors.checkMode()).toHaveTextContent(locale.checkModes.manual);
    });

    it('should initialize all display toggles with the configured default states', () => {
      QuestionsDemo_fx.render();
      expect(QuestionsDemo_fx.selectors.checkbox('showErrors')).toBeChecked();
      expect(QuestionsDemo_fx.selectors.checkbox('showCorrectAnswers')).toBeChecked();
      expect(QuestionsDemo_fx.selectors.checkbox('showExplanation')).toBeChecked();
      expect(QuestionsDemo_fx.selectors.checkbox('showLetters')).not.toBeChecked();
      expect(QuestionsDemo_fx.selectors.checkbox('disabled')).not.toBeChecked();
    });

    it('should change independent accessibility-oriented display options', async () => {
      QuestionsDemo_fx.render();
      await QuestionsDemo_fx.actions.toggle('showErrors');
      await QuestionsDemo_fx.actions.toggle('showLetters');
      expect(QuestionsDemo_fx.selectors.checkbox('showErrors')).not.toBeChecked();
      expect(QuestionsDemo_fx.selectors.checkbox('showLetters')).toBeChecked();
      expect(QuestionsDemo_fx.selectors.checkbox('showCorrectAnswers')).toBeChecked();
    });

    it('should allow changing the controlled check mode from manual to on-change', async () => {
      QuestionsDemo_fx.render();
      await QuestionsDemo_fx.actions.changeCheckMode();
      expect(QuestionsDemo_fx.selectors.checkMode()).toHaveTextContent(locale.checkModes.onChange);
    });
  });
});
