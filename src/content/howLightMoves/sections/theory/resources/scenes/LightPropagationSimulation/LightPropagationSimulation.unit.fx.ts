import { createElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LightPropagationSimulation } from './LightPropagationSimulation';
import { locales } from './lightPropagationSimulation.locale';
import { howLightMoves } from '../../../../../howLightMoves.data';
import { howLightMovesCatalog } from '../../../../../howLightMoves.catalog';
import { buildLesson } from '@/utils';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import type { Locale } from '@types';

export const LightPropagationSimulation_fx = {
  render: ({ locale = 'uk-UA' }: { locale?: Locale } = {}) =>
    render(createElement(SceneLocaleProvider, { locale, scenes: buildLesson(howLightMoves, locale, howLightMovesCatalog).sceneLocale ?? {} }, createElement(LightPropagationSimulation))),
  selectors: {
    scene: (messages = locales.uk, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('region', { name: messages.scene.accessibleName }),
    playback: (name: string, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('button', { name }),
    track: (messages = locales.uk, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('img', { name: messages.track.accessibleDescription }),
    speed: (messages = locales.uk, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('slider', { name: messages.controls.speedAccessibleName }),
  },
  actions: {
    togglePlayback: async (name: string) => userEvent.click(LightPropagationSimulation_fx.selectors.playback(name)),
  },
} as const;
