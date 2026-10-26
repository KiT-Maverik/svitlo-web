import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApiDemo } from './ApiDemo';
import { FeedbackDemo_fx } from './FeedbackDemo.unit.fx.test';
import { aria } from './ApiDemo.constants';
import { locale } from './locales/uk-UA';

export const ApiDemo_fx = {
  render: () => render(createElement(ApiDemo)),
  child: { feedback: FeedbackDemo_fx.selectors },
  selectors: {
    events: () => screen.getByRole('status', { name: aria.events }),
    attemptState: () => screen.getByRole('status', { name: aria.attemptState }),
    numeric: () => screen.getByRole('textbox', { name: locale.api.numericField }),
    button: (action: keyof typeof locale.api.actions) => screen.getByRole('button', { name: locale.api.actions[action] }),
    checkbox: (key: 'hideResult' | 'disabled' | 'readOnly') =>
      screen.getByRole('checkbox', { name: locale.api[key] }),
  },
  actions: {
    toggle: async (key: 'hideResult' | 'disabled' | 'readOnly') => userEvent.click(ApiDemo_fx.selectors.checkbox(key)),
    setAnswer: async () => userEvent.click(ApiDemo_fx.selectors.button('set42')),
    reset: async () => userEvent.click(ApiDemo_fx.selectors.button('reset')),
  },
} as const;
