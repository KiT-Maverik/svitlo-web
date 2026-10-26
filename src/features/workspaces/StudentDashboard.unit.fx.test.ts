import { createElement, type ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import { StudentDashboard } from './StudentDashboard';
import { demoPrograms, demoProgress, lessons } from './catalog';
import { locale } from './locales/uk-UA';

type Props = ComponentProps<typeof StudentDashboard>;

export const StudentDashboard_fx = {
  defaults: { lessons, progress: demoProgress, programs: demoPrograms } satisfies Props,
  element: (props: Partial<Props> = {}) => createElement(StudentDashboard, { ...StudentDashboard_fx.defaults, ...props }),
  render: (props: Partial<Props> = {}) => render(StudentDashboard_fx.element(props)),
  selectors: {
    progress: (title = lessons[0].title) => screen.getByRole('progressbar', { name: locale.student.progressLabel(title) }),
    continue: (next = lessons[0].sections[2].title) =>
      screen.getByRole('link', { name: `${locale.student.continue}: ${next}` }),
  },
} as const;
