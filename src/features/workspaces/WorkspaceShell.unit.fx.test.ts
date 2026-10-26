import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import { WorkspaceShell } from './WorkspaceShell';
import { locale } from './locales/uk-UA';

type Props = ComponentProps<typeof WorkspaceShell>;

export const WorkspaceShell_fx = {
  render: (props: Partial<Props> = {}) => {
    const { children = 'Workspace body', ...overrides } = props;
    return render(createElement(WorkspaceShell, {
      title: 'Example workspace', subtitle: 'Workspace description', current: '/student', ...overrides,
    }, children));
  },
  selectors: {
    main: () => screen.getByRole('main'),
    navigation: (scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('navigation', { name: locale.shell.navigation }),
    link: (name: string, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('link', { name }),
  },
} as const;
