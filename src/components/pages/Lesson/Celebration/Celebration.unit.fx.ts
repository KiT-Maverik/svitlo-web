import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import Celebration from './Celebration';
import { locale } from '../locales/uk-UA';

type Props = ComponentProps<typeof Celebration>;

export const Celebration_fx = {
  render: (props: Partial<Props> = {}) => render(createElement(Celebration, { score: 3, total: 5, ...props })),
  selectors: {
    section: (scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('region', { name: locale.celebration.title }),
    title: () => screen.getByRole('heading', { name: locale.celebration.title }),
    home: () => screen.getByRole('link', { name: locale.celebration.home }),
  },
} as const;
