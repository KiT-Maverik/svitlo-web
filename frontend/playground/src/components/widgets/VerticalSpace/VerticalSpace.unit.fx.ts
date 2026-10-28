import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import VerticalSpace from './VerticalSpace';
import { testId } from './VerticalSpace.constants';

type Props = ComponentProps<typeof VerticalSpace>;

export const VerticalSpace_fx = {
  render: (props: Partial<Props> = {}) => render(createElement(VerticalSpace, { center: 'Center content', ...props })),
  selectors: {
    container: (scope?: HTMLElement) => (scope ? within(scope) : screen).getByTestId(testId.container),
    containers: () => screen.getAllByTestId(testId.container),
    slot: (name: keyof typeof testId.slots, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).queryByTestId(testId.slots[name]),
  },
} as const;
