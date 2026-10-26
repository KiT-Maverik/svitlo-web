import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionProgress, type QuestionStatus } from './QuestionProgress';
import { aria } from './QuestionProgress.constants';
import { locale } from './locales/uk-UA';

type Props = ComponentProps<typeof QuestionProgress>;

export const QuestionProgress_fx = {
  defaults: {
    statuses: ['unanswered', 'correct', 'incorrect'] as QuestionStatus[],
    currentIndex: 0,
  } satisfies Props,
  render: (props: Partial<Props> = {}) =>
    render(createElement(QuestionProgress, { ...QuestionProgress_fx.defaults, ...props })),
  selectors: {
    list: (scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('list', { name: aria.navigation }),
    status: (index: number, status: QuestionStatus, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('button', { name: `${index + 1}. ${locale.questionProgress.status[status]}` }),
  },
  actions: {
    select: async (index: number, status: QuestionStatus, scope?: HTMLElement) =>
      userEvent.click(QuestionProgress_fx.selectors.status(index, status, scope)),
  },
} as const;
