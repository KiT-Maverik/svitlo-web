import { describe, expect, it, vi } from 'vitest';
import { act } from 'react';
import { playCelebration } from './Celebration';
import { Celebration_fx } from './Celebration.unit.fx.test';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('Celebration', () => {
    it('should show the localized completion heading and score', () => {
      Celebration_fx.render({ score: 2, total: 4 });
      expect(Celebration_fx.selectors.title()).toBeVisible();
      expect(Celebration_fx.selectors.section()).toHaveTextContent(locale.celebration.score(2, 4));
      expect(Celebration_fx.selectors.section()).toHaveTextContent(locale.celebration.note);
    });

    it('should provide a navigation link to the home page', () => {
      Celebration_fx.render();
      expect(Celebration_fx.selectors.home()).toHaveAttribute('href', '/');
    });

    it('should hide decorative confetti from the accessibility tree', () => {
      const { container } = Celebration_fx.render();
      const decoration = container.querySelector('[aria-hidden="true"]');
      expect(decoration).toBeInTheDocument();
      expect(Celebration_fx.selectors.title()).toBeVisible();
    });

    it('should stop rendering confetti after the completion animation', () => {
      vi.useFakeTimers();
      try {
        const { container } = Celebration_fx.render();
        expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
        act(() => vi.advanceTimersByTime(3200));
        const confetti = container.querySelector('[aria-hidden="true"] > i');
        expect(confetti).toBeNull();
      } finally {
        vi.useRealTimers();
      }
    });

    it('should tolerate unavailable browser audio without rejecting completion', async () => {
      await expect(playCelebration()).resolves.toBeUndefined();
    });
  });
});
