import { createElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import LightRayDiagram from './LightRayDiagram';
import { locales } from './lightRayDiagram.locale';
import { lightSceneLocales } from '../../sceneLocales';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import type { Locale } from '@types';

export const LightRayDiagram_fx = {
  render: ({ locale = 'uk-UA' }: { locale?: Locale } = {}) =>
    render(createElement(SceneLocaleProvider, { locale, scenes: lightSceneLocales[locale], children: createElement(LightRayDiagram) })),
  selectors: {
    illustration: (locale: Locale = 'uk-UA', scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('img', { name: locales[locale].scene.title }),
  },
} as const;
