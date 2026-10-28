import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { getLessonMessages } from '../locales';

vi.mock('@/i18n/LocaleProvider/LocaleProvider', () => ({ useLocale: vi.fn() }));
import { act } from 'react';
import { playCelebration } from './Celebration';
import { Celebration_fx } from './Celebration.unit.fx';
import { locale } from '../locales/uk-UA';

describe('Components', () => {
  describe('Celebration', () => {
    beforeEach(() => {
      vi.mocked(useLocale).mockReturnValue({ locale: 'uk-UA', setLocale: vi.fn() });
    });
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

    it('should render the active Belarusian Taraškievica completion heading', () => {
      vi.mocked(useLocale).mockReturnValue({ locale: 'be-tarask', setLocale: vi.fn() });
      Celebration_fx.render();
      expect(screen.getByRole('heading', { name: getLessonMessages('be-tarask').celebration.title })).toBeVisible();
    });

    it('should tolerate unavailable browser audio without rejecting completion', async () => {
      await expect(playCelebration()).resolves.toBeUndefined();
    });
  });
});
