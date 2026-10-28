import { createElement, type ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LessonProgressProvider, useLessonProgress } from './LessonProgress';

type Props = ComponentProps<typeof LessonProgressProvider>;
export const sectionIds = ['theory', 'practice', 'quiz'] as const;

function ProgressHarness() {
  const { progress, dispatch } = useLessonProgress();
  return createElement(
    'div',
    {},
    createElement('output', { 'aria-label': 'Ready state' }, String(progress.ready)),
    createElement('output', { 'aria-label': 'Current lesson step' }, String(progress.step)),
    createElement('output', { 'aria-label': 'Unlocked lesson step' }, String(progress.unlocked)),
    createElement('button', { type: 'button', onClick: () => dispatch({ type: 'next' }) }, 'Next step'),
    createElement('button', { type: 'button', onClick: () => dispatch({ type: 'back' }) }, 'Previous step'),
    createElement('button', { type: 'button', onClick: () => dispatch({ type: 'skip' }) }, 'Skip step'),
    createElement(
      'button',
      { type: 'button', onClick: () => dispatch({ type: 'visit', step: 0 }) },
      'Visit first step',
    ),
  );
}

export const LessonProgress_fx = {
  render: (props: Partial<Omit<Props, 'children'>> = {}) =>
    render(
      createElement(
        LessonProgressProvider,
        { lessonId: 'sample-lesson', sectionIds, requireQuiz: true, ...props } as Props,
        createElement(ProgressHarness),
      ),
    ),
  selectors: {
    ready: () => screen.getByRole('status', { name: 'Ready state' }),
    step: () => screen.getByRole('status', { name: 'Current lesson step' }),
    unlocked: () => screen.getByRole('status', { name: 'Unlocked lesson step' }),
    button: (name: string) => screen.getByRole('button', { name }),
  },
  actions: {
    next: async () => userEvent.click(LessonProgress_fx.selectors.button('Next step')),
    back: async () => userEvent.click(LessonProgress_fx.selectors.button('Previous step')),
    skip: async () => userEvent.click(LessonProgress_fx.selectors.button('Skip step')),
    visitFirst: async () => userEvent.click(LessonProgress_fx.selectors.button('Visit first step')),
  },
} as const;
