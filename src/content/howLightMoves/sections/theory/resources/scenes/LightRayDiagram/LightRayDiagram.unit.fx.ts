import { createElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import { LightRayDiagram } from './LightRayDiagram';
import { howLightMoves_Lesson_Data } from '../../../../../index.data';
import { howLightMovesCatalog } from '../../../../../howLightMoves.catalog';
import { buildLesson } from '@/utils';
import type { LightRayDiagram_Locale } from './lightRayDiagram.locale';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import type { Locale } from '@types';

export const LightRayDiagram_fx = {
  render: ({ locale = 'uk-UA' }: { locale?: Locale } = {}) =>
    render(createElement(SceneLocaleProvider, { locale, scenes: buildLesson(howLightMoves_Lesson_Data, locale, howLightMovesCatalog).sceneLocale ?? {} }, createElement(LightRayDiagram))),
  selectors: {
    illustration: (locale: Locale = 'uk-UA', scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('img', { name: (buildLesson(howLightMoves_Lesson_Data, locale, howLightMovesCatalog).sceneLocale as { ray: LightRayDiagram_Locale }).ray.scene.title }),
  },
} as const;
