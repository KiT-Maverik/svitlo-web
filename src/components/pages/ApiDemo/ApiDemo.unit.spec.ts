import { describe, expect, it } from 'vitest';
import { ApiDemo_fx } from './ApiDemo.unit.fx';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('ApiDemo', () => {
    it('should render the initial controller event output and composed feedback panel', () => {
      ApiDemo_fx.render();
      expect(ApiDemo_fx.selectors.events()).toHaveTextContent(locale.api.noEvents);
      expect(ApiDemo_fx.child.feedback.heading()).toBeVisible();
    });

    it('should toggle the automatic result display without modifying custom answer controls', async () => {
      ApiDemo_fx.render();
      expect(ApiDemo_fx.selectors.checkbox('hideResult')).not.toBeChecked();
      await ApiDemo_fx.actions.toggle('hideResult');
      expect(ApiDemo_fx.selectors.checkbox('hideResult')).toBeChecked();
      expect(ApiDemo_fx.selectors.numeric()).toBeEnabled();
    });

    it('should switch custom answer options independently', async () => {
      ApiDemo_fx.render();
      await ApiDemo_fx.actions.toggle('disabled');
      expect(ApiDemo_fx.selectors.checkbox('disabled')).toBeChecked();
      expect(ApiDemo_fx.selectors.numeric()).toBeDisabled();
      await ApiDemo_fx.actions.toggle('disabled');
      await ApiDemo_fx.actions.toggle('readOnly');
      expect(ApiDemo_fx.selectors.checkbox('disabled')).not.toBeChecked();
      expect(ApiDemo_fx.selectors.checkbox('readOnly')).toBeChecked();
    });

    it('should set an answer through the public controller slot action', async () => {
      ApiDemo_fx.render();
      await ApiDemo_fx.actions.setAnswer();
      expect(ApiDemo_fx.selectors.numeric()).toHaveValue('42');
      expect(ApiDemo_fx.selectors.attemptState()).toHaveTextContent('hasInteracted=true');
    });
  });
});
