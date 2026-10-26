import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TeacherDashboard } from './TeacherDashboard';
import { lessons, demoPrograms } from './catalog';
import { locale } from './locales/uk-UA';
import { aria } from './TeacherDashboard.constants';

type Props = ComponentProps<typeof TeacherDashboard>;

export const TeacherDashboard_fx = {
  defaults: { lessons, programs: demoPrograms } satisfies Props,
  render: (props: Partial<Props> = {}) => render(createElement(TeacherDashboard, { ...TeacherDashboard_fx.defaults, ...props })),
  selectors: {
    builder: () => screen.getByRole('region', { name: aria.builder }),
    title: () => screen.getByRole('textbox', { name: locale.teacher.programTitle }),
    search: () => screen.getByRole('textbox', { name: locale.teacher.search }),
    lesson: (title = lessons[0].title) => screen.getByRole('checkbox', { name: title }),
    prepare: () => within(TeacherDashboard_fx.selectors.builder()).getByRole('button', { name: locale.teacher.prepare }),
    notice: () => within(TeacherDashboard_fx.selectors.builder()).getByRole('status'),
  },
  actions: {
    title: async (value: string) => userEvent.type(TeacherDashboard_fx.selectors.title(), value),
    select: async (name = lessons[0].title) => userEvent.click(TeacherDashboard_fx.selectors.lesson(name)),
    submit: async () => userEvent.click(TeacherDashboard_fx.selectors.prepare()),
  },
} as const;
