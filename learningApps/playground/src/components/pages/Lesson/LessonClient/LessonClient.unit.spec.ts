import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@svitlo/indexdb', () => ({
  createQuizState: vi.fn(),
  getQuizState: vi.fn(),
  listQuizStates: vi.fn(),
  saveQuizState: vi.fn(),
  completeQuiz: vi.fn(),
}));
vi.mock('@/i18n/LocaleProvider/LocaleProvider', () => ({ useLocale: vi.fn() }));
vi.mock('../LessonProgress/LessonProgress', async importOriginal => ({
  ...(await importOriginal<typeof import('../LessonProgress/LessonProgress')>()),
  useLessonProgress: vi.fn(),
}));
import { screen, waitFor } from '@testing-library/react';
import { saveQuizState, createQuizState, completeQuiz } from '@svitlo/indexdb';
import { LessonClient_fx } from './LessonClient.unit.fx';
import { LessonClient_mx } from './LessonClient.unit.mx';
import { locale } from '../locales/uk-UA';

describe('Components', () => {
  describe('LessonClient', () => {
    beforeEach(() => LessonClient_mx.prepare());
    afterEach(() => LessonClient_mx.reset());

    it('should avoid loading quiz data before lesson progress is ready', () => {
      LessonClient_mx.prepare({ ready: false });
      LessonClient_fx.render();
      expect(LessonClient_fx.child.steps.navigation).toBeDefined();
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
      expect(createQuizState).not.toHaveBeenCalled();
    });

    it('should restore or create quiz state before showing lesson content', async () => {
      const { dispatch } = LessonClient_mx.prepare();
      LessonClient_fx.render();
      expect(await screen.findByText('Theory body')).toBeVisible();
      expect(LessonClient_fx.child.steps.navigation()).toBeVisible();
      expect(dispatch).toHaveBeenCalledWith({ type: 'linkQuiz', id: 'quiz-state-1' });
    });

    it('should show the test and localized sound control in the quiz step', async () => {
      LessonClient_mx.prepare({ step: 2 });
      LessonClient_fx.render();
      expect(await screen.findByRole('region', { name: locale.quiz.test })).toBeVisible();
      expect(LessonClient_fx.selectors.sound()).toBeChecked();
      expect(LessonClient_fx.selectors.question()).toBeVisible();
      expect(LessonClient_fx.child.progress.list()).toBeVisible();
    });

    it('should persist submitted answers and dispatch quiz completion through child callbacks', async () => {
      const { dispatch } = LessonClient_mx.prepare({ step: 2 });
      LessonClient_fx.render();
      expect(await screen.findByRole('region', { name: locale.quiz.test })).toBeVisible();
      await LessonClient_fx.actions.check();
      await waitFor(() => expect(saveQuizState).toHaveBeenCalled());
      expect(LessonClient_fx.selectors.finish()).toBeVisible();
      await LessonClient_fx.actions.finish();
      await waitFor(() => expect(dispatch).toHaveBeenCalledWith({ type: 'testDone' }));
      expect(completeQuiz).toHaveBeenCalledWith('quiz-state-1', { status: 'ungraded' });
    });

    it('should display completed lessons without rendering additional question controls', async () => {
      LessonClient_mx.prepare({ step: 2, progress: { testDone: true } });
      LessonClient_fx.render();
      expect(await screen.findByRole('heading', { name: locale.celebration.title })).toBeVisible();
      expect(screen.queryByRole('button', { name: 'Перевірити' })).not.toBeInTheDocument();
    });
  });
});
