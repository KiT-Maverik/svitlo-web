import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import MarkdownContent from './MarkdownContent';

type Props = ComponentProps<typeof MarkdownContent>;

export const MarkdownContent_fx = {
  render: (props: Partial<Props> = {}) =>
    render(createElement(MarkdownContent, { content: '# Example heading', ...props })),
  selectors: {
    article: (scope?: HTMLElement) => (scope ? within(scope) : screen).getByRole('article'),
    heading: (name: string, scope?: HTMLElement) => (scope ? within(scope) : screen).getByRole('heading', { name }),
    link: (name: string, scope?: HTMLElement) => (scope ? within(scope) : screen).getByRole('link', { name }),
  },
} as const;
