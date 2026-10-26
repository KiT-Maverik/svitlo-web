import { describe, expect, it, vi } from 'vitest';
import { QuestionProgress_fx } from './QuestionProgress.unit.fx.test';
import { aria } from './QuestionProgress.constants';

describe('Components', () => {
  describe('QuestionProgress', () => {
    it('should expose a localized accessible list label', () => {
      QuestionProgress_fx.render();
      expect(QuestionProgress_fx.selectors.list()).toHaveAccessibleName(aria.navigation);
    });

    it('should expose status-specific accessible button names and data states', () => {
      QuestionProgress_fx.render();
      expect(QuestionProgress_fx.selectors.status(0, 'unanswered')).toHaveAttribute('aria-current', 'step');
      expect(QuestionProgress_fx.selectors.status(1, 'correct')).toHaveAttribute('data-status', 'correct');
      expect(QuestionProgress_fx.selectors.status(2, 'incorrect')).toHaveAttribute('data-status', 'incorrect');
    });

    it('should disable navigation by default', () => {
      QuestionProgress_fx.render();
      expect(QuestionProgress_fx.selectors.status(1, 'correct')).toBeDisabled();
    });

    it('should leave the current question disabled while allowing another question', () => {
      QuestionProgress_fx.render({ allowNavigation: true });
      expect(QuestionProgress_fx.selectors.status(0, 'unanswered')).toBeDisabled();
      expect(QuestionProgress_fx.selectors.status(1, 'correct')).toBeEnabled();
    });

    it('should call the navigation callback with the selected question index', async () => {
      const onNavigate = vi.fn();
      QuestionProgress_fx.render({ allowNavigation: true, onNavigate });
      await QuestionProgress_fx.actions.select(2, 'incorrect');
      expect(onNavigate).toHaveBeenCalledExactlyOnceWith(2);
    });

    it('should handle an empty status list without creating question buttons', () => {
      QuestionProgress_fx.render({ statuses: [] });
      expect(QuestionProgress_fx.selectors.list().querySelectorAll('button')).toHaveLength(0);
    });

    it('should include deferred status in accessible names', () => {
      QuestionProgress_fx.render({ statuses: ['deferred'], currentIndex: 0 });
      expect(QuestionProgress_fx.selectors.status(0, 'deferred')).toBeVisible();
    });
  });
});
