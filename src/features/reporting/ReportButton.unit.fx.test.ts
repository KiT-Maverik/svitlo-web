import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReportButton } from './ReportButton';
import { aria } from './ReportButton.constants';
import { locale } from './locales/uk-UA';

type Props = ComponentProps<typeof ReportButton>;

const defaults = { contentId: 'lesson:sample', title: 'Sample lesson' } satisfies Props;

export const ReportButton_fx = {
  defaults,
  render: (props: Partial<Props> = {}) =>
    render(createElement(ReportButton, { ...defaults, ...props })),
  selectors: {
    trigger: (title = defaults.title, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('button', { name: aria.trigger(title) }),
    dialog: () => screen.getByRole('dialog', { name: aria.dialog }),
    message: () => screen.getByRole('textbox', { name: locale.fields.message }),
    category: () => screen.getByRole('combobox', { name: locale.fields.category }),
    submit: () => screen.getByRole('button', { name: locale.actions.submit }),
    close: () => screen.getByRole('button', { name: locale.actions.close }),
  },
  actions: {
    open: async () => userEvent.click(ReportButton_fx.selectors.trigger()),
    describe: async (message: string) => userEvent.type(ReportButton_fx.selectors.message(), message),
    submit: async () => userEvent.click(ReportButton_fx.selectors.submit()),
    close: async () => userEvent.click(ReportButton_fx.selectors.close()),
  },
} as const;
