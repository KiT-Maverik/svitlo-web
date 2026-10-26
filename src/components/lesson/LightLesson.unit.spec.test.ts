import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/db', () => ({
  createQuizState: vi.fn(), getQuizState: vi.fn(), listQuizStates: vi.fn(), saveQuizState: vi.fn(),
}));
vi.mock('@/i18n/LocaleProvider/LocaleProvider', () => ({ useLocale: vi.fn() }));
vi.mock('./LessonProgress', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./LessonProgress')>()),
  useLessonProgress: vi.fn(),
}));
vi.mock('@/components/widgets/questions/helpers', async () => {
  const React = await import('react');
  return {
    QuestionAttempt: (props: {
      question: { id: string; prompt: string };
      onCheck: (value: { answer: string; result: { status: 'correct' } }) => void;
      actionSlots: { center: (context: { hasChecked: boolean; children: null }) => React.ReactNode };
    }) => {
      const [hasChecked, setChecked] = React.useState(false);
      return React.createElement('section', { role: 'group', 'aria-label': props.question.prompt },
        React.createElement('button', { type: 'button', onClick: () => {
          props.onCheck({ answer: 'answer-1', result: { status: 'correct' } });
          setChecked(true);
        } }, 'Check answer'),
        props.actionSlots.center({ hasChecked, children: null }));
    },
  };
});

import { screen, waitFor } from '@testing-library/react';
import { saveQuizState, createQuizState } from '@/db';
import { LightLesson_fx } from './LightLesson.unit.fx.test';
import { LightLesson_mx } from './LightLesson.unit.mx.test';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('LightLesson', () => {
    beforeEach(() => LightLesson_mx.prepare());
    afterEach(() => LightLesson_mx.reset());

    it('should avoid loading quiz data before lesson progress is ready', () => {
      LightLesson_mx.prepare({ ready: false });
      LightLesson_fx.render();
      expect(LightLesson_fx.child.steps.navigation).toBeDefined();
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
      expect(createQuizState).not.toHaveBeenCalled();
    });

    it('should restore or create quiz state before showing lesson content', async () => {
      const { dispatch } = LightLesson_mx.prepare();
      LightLesson_fx.render();
      expect(await screen.findByText('Theory body')).toBeVisible();
      expect(LightLesson_fx.child.steps.navigation()).toBeVisible();
      expect(dispatch).toHaveBeenCalledWith({ type: 'linkQuiz', id: 'quiz-state-1' });
    });

    it('should show the test and localized sound control in the quiz step', async () => {
      LightLesson_mx.prepare({ step: 2 });
      LightLesson_fx.render();
      expect(await screen.findByRole('region', { name: locale.lightLesson.test })).toBeVisible();
      expect(LightLesson_fx.selectors.sound()).toBeChecked();
      expect(LightLesson_fx.selectors.question()).toBeVisible();
      expect(LightLesson_fx.child.progress.list()).toBeVisible();
    });

    it('should persist submitted answers and dispatch quiz completion through child callbacks', async () => {
      const { dispatch } = LightLesson_mx.prepare({ step: 2 });
      LightLesson_fx.render();
      expect(await screen.findByRole('region', { name: locale.lightLesson.test })).toBeVisible();
      await LightLesson_fx.actions.check();
      await waitFor(() => expect(saveQuizState).toHaveBeenCalled());
      expect(LightLesson_fx.selectors.finish()).toBeVisible();
      await LightLesson_fx.actions.finish();
      await waitFor(() => expect(dispatch).toHaveBeenCalledWith({ type: 'testDone' }));
      await waitFor(() => expect(saveQuizState).toHaveBeenCalledWith(expect.objectContaining({ status: 'finished' })));
    });

    it('should display completed lessons without rendering additional question controls', async () => {
      LightLesson_mx.prepare({ step: 2, progress: { testDone: true } });
      LightLesson_fx.render();
      expect(await screen.findByRole('heading', { name: locale.celebration.title })).toBeVisible();
      expect(screen.queryByRole('button', { name: 'Check answer' })).not.toBeInTheDocument();
    });
  });
});
