import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { exampleQuestions } from '@/components/widgets/questions/examples';
import { ReportedQuestion } from './ReportedQuestion';
import { ReportButton_fx } from './ReportButton.unit.fx.test';
import { aria } from './ReportButton.constants';

type Props = ComponentProps<typeof ReportedQuestion>;

const defaults = { question: exampleQuestions[0] } satisfies Props;

export const ReportedQuestion_fx = {
  defaults,
  render: (props: Partial<Props> = {}) => render(createElement(ReportedQuestion, { ...defaults, ...props })),
  child: { report: ReportButton_fx.selectors },
  selectors: {
    report: (title = defaults.question.prompt, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('button', { name: aria.trigger(title) }),
  },
  actions: {
    openReport: async () => userEvent.click(ReportedQuestion_fx.selectors.report()),
  },
} as const;
