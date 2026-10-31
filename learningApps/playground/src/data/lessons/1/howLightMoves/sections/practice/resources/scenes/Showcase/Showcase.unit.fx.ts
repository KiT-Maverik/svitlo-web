import { createElement } from 'react';
import type { Locale } from '@svitlo/engine/localization';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import { howLightMoves_Lesson_Data } from '../../../../../index.data';
import { howLightMovesCatalog } from '../../../../../howLightMoves.catalog';
import { buildLesson } from '@svitlo/engine/builders';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Showcase } from './Showcase';
import { locales } from './Showcase.locale';

import { media } from './Showcase.constants';

const uk = locales.uk;

export const Showcase_fx = {
  render: (code: Locale = 'uk-UA') =>
    render(
      createElement(
        SceneLocaleProvider,
        { locale: code, scenes: buildLesson(howLightMoves_Lesson_Data, code, howLightMovesCatalog).sceneLocale ?? {} },
        createElement(Showcase),
      ),
    ),
  selectors: {
    title: () => screen.getByRole('heading', { name: uk.header.title }),
    mediaGroup: () => screen.getByRole('group', { name: uk.selector.label }),
    medium: (index: number) =>
      within(Showcase_fx.selectors.mediaGroup()).getByRole('button', { name: uk.selector.media[media[index].key] }),
    playback: (paused: boolean) =>
      screen.getByRole('button', { name: paused ? uk.simulation.play : uk.simulation.pause }),
    track: (index: number) =>
      screen.getByRole('img', { name: `${uk.simulation.trackPrefix}${uk.selector.media[media[index].key]}.` }),
  },
  actions: {
    selectMedium: async (index: number) => userEvent.click(Showcase_fx.selectors.medium(index)),
    togglePlayback: async (paused: boolean) => userEvent.click(Showcase_fx.selectors.playback(paused)),
  },
} as const;
