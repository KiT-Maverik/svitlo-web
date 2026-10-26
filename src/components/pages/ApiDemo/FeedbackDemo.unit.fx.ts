import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeedbackDemo } from './FeedbackDemo';
import { locale } from './locales/uk-UA';

export const FeedbackDemo_fx = {
  render: () => render(createElement(FeedbackDemo)),
  selectors: {
    heading: () => screen.getByRole('heading', { name: locale.feedback.heading }),
    setting: (name: keyof Pick<typeof locale.feedback, 'showErrors' | 'showCorrectAnswers' | 'showLetters' | 'showResult'>) =>
      screen.getByRole('checkbox', { name: locale.feedback[name] }),
  },
  actions: {
    toggle: async (name: 'showErrors' | 'showCorrectAnswers' | 'showLetters' | 'showResult') =>
      userEvent.click(FeedbackDemo_fx.selectors.setting(name)),
  },
} as const;
