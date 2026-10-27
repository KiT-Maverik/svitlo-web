import { createElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionsDemo } from './QuestionsDemo';
import { locale } from './locales/uk-UA';
import { aria } from './QuestionsDemo.constants';

export const QuestionsDemo_fx = {
  render: () => render(createElement(QuestionsDemo)),
  selectors: {
    title: () => screen.getByRole('heading', { name: locale.title }),
    controls: () => screen.getByRole('complementary', { name: aria.controls }),
    checkbox: (key: Exclude<keyof typeof locale.settings, 'checkMode'>) =>
      within(QuestionsDemo_fx.selectors.controls()).getByRole('checkbox', { name: locale.settings[key] }),
    checkMode: () =>
      within(QuestionsDemo_fx.selectors.controls()).getByRole('combobox', { name: locale.settings.checkMode }),
  },
  actions: {
    toggle: async (key: Exclude<keyof typeof locale.settings, 'checkMode'>) =>
      userEvent.click(QuestionsDemo_fx.selectors.checkbox(key)),
    changeCheckMode: async () => {
      await userEvent.click(QuestionsDemo_fx.selectors.checkMode());
      await userEvent.click(await screen.findByRole('option', { name: locale.checkModes.onChange }));
    },
  },
} as const;
