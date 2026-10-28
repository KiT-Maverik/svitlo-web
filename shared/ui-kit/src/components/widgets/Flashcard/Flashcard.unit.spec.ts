import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Flashcard_fx } from './Flashcard.unit.fx';

describe('Components', () => {
  describe('Flashcard', () => {
    it('should show the question without exposing its answer until revealed', () => {
      Flashcard_fx.render();
      expect(screen.getByRole('heading', { name: Flashcard_fx.defaults.question })).toBeVisible();
      expect(screen.queryByText(Flashcard_fx.defaults.answer)).not.toBeInTheDocument();
      expect(Flashcard_fx.selectors.reveal()).toHaveAttribute('aria-expanded', 'false');
    });

    it('should invoke the reveal callback without mutating its controlled state', async () => {
      const onReveal = vi.fn();
      Flashcard_fx.render({ onReveal });
      await Flashcard_fx.actions.reveal();
      expect(onReveal).toHaveBeenCalledOnce();
      expect(Flashcard_fx.selectors.reveal()).toHaveAttribute('aria-expanded', 'false');
    });

    it('should display its answer and rating choices when revealed', () => {
      Flashcard_fx.render({ revealed: true, onRate: vi.fn() });
      expect(screen.getByText(Flashcard_fx.defaults.answer)).toBeVisible();
      expect(Flashcard_fx.selectors.reveal()).toBeDisabled();
      expect(Flashcard_fx.selectors.rate(true)).toBeVisible();
      expect(Flashcard_fx.selectors.rate(false)).toBeVisible();
    });

    it('should submit distinct remembered and forgotten ratings', async () => {
      const onRate = vi.fn();
      Flashcard_fx.render({ revealed: true, onRate });
      await Flashcard_fx.actions.rate(false);
      await Flashcard_fx.actions.rate(true);
      expect(onRate).toHaveBeenNthCalledWith(1, false);
      expect(onRate).toHaveBeenNthCalledWith(2, true);
    });

    it('should disable reveal and menu interactions when disabled', () => {
      Flashcard_fx.render({ disabled: true });
      expect(Flashcard_fx.selectors.reveal()).toBeDisabled();
      expect(Flashcard_fx.selectors.menu()).toBeDisabled();
    });

    it('should invoke adding a label from the action menu', async () => {
      const onAddLabel = vi.fn();
      Flashcard_fx.render({ onAddLabel });
      await Flashcard_fx.actions.openMenu();
      await userEvent.click(Flashcard_fx.selectors.menuItem());
      expect(onAddLabel).toHaveBeenCalledOnce();
    });

    it('should render optional user-defined labels without changing the question', () => {
      Flashcard_fx.render({ labels: [{ label: 'Priority' }] });
      expect(screen.getByText('Priority')).toBeVisible();
      expect(screen.getByRole('heading', { name: Flashcard_fx.defaults.question })).toBeVisible();
    });
  });
});
