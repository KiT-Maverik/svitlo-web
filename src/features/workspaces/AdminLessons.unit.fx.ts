import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AdminLessons } from './AdminLessons';
import { lessons } from './catalog';
import { locale } from './locales/uk-UA';
import { aria } from './AdminLessons.constants';

type Props = ComponentProps<typeof AdminLessons>;

export const AdminLessons_fx = {
  defaults: { lessons } satisfies Props,
  render: (props: Partial<Props> = {}) => render(createElement(AdminLessons, { ...AdminLessons_fx.defaults, ...props })),
  selectors: {
    table: () => screen.getByRole('table', { name: aria.table }),
    search: () => screen.getByRole('textbox', { name: locale.admin.search }),
    row: (title = lessons[0].title) => screen.getByRole('row', { name: new RegExp(title) }),
    dialog: (kind: 'edit' | 'remove') => screen.getByRole('dialog', { name: kind === 'edit' ? locale.admin.editTitle : locale.admin.removeTitle }),
    titleField: () => screen.getByRole('textbox', { name: locale.admin.fields.title }),
    descriptionField: () => screen.getByRole('textbox', { name: locale.admin.fields.description }),
    button: (name: string, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('button', { name }),
  },
  actions: {
    edit: async () => userEvent.click(AdminLessons_fx.selectors.button(locale.admin.actions.edit)),
    remove: async () => userEvent.click(AdminLessons_fx.selectors.button(locale.admin.actions.remove)),
    save: async () => userEvent.click(AdminLessons_fx.selectors.button(locale.admin.actions.prepareEdit)),
    delete: async () => userEvent.click(AdminLessons_fx.selectors.button(locale.admin.actions.prepareRemove)),
  },
} as const;
