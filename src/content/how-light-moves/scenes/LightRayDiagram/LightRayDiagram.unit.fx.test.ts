import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import LightRayDiagram from './LightRayDiagram';
import { locales } from './lightRayDiagram.locale';

type Props = ComponentProps<typeof LightRayDiagram>;

export const LightRayDiagram_fx = {
  render: (props: Partial<Props> = {}) =>
    render(createElement(LightRayDiagram, { locale: 'uk-UA', ...props })),
  selectors: {
    illustration: (locale: Props['locale'] = 'uk-UA', scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('img', { name: locales[locale].scene.title }),
  },
} as const;
