import { createElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import LightRayDiagram from './LightRayDiagram';
import { lightLesson } from '../../lightLesson';
import { buildLesson } from '@/utils';
import type { LightSceneLocales } from '../../sceneLocales.types';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import type { Locale } from '@types';

export const LightRayDiagram_fx = {
  render: ({ locale = 'uk-UA' }: { locale?: Locale } = {}) =>
    render(createElement(SceneLocaleProvider, { locale, scenes: buildLesson(lightLesson, locale).sceneLocale ?? {} }, createElement(LightRayDiagram))),
  selectors: {
    illustration: (locale: Locale = 'uk-UA', scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('img', { name: (buildLesson(lightLesson, locale).sceneLocale as LightSceneLocales).ray.scene.title }),
  },
} as const;
