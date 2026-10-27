import { createElement } from 'react';
import type { Locale } from '@types';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import { howLightMoves } from '../../../../../howLightMoves.data';
import { howLightMovesCatalog } from '../../../../../howLightMoves.catalog';
import { buildLesson } from '@/utils';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MediumPractice } from './MediumPractice';
import { locales } from './MediumPractice.locale';

import { media } from './MediumPractice.constants';

const uk = locales.uk;

export const MediumPractice_fx = {
  render: (code: Locale = 'uk-UA') => render(createElement(SceneLocaleProvider, { locale: code, scenes: buildLesson(howLightMoves, code, howLightMovesCatalog).sceneLocale ?? {} }, createElement(MediumPractice))),
  selectors: {
    title: () => screen.getByRole('heading', { name: uk.header.title }),
    mediaGroup: () => screen.getByRole('group', { name: uk.selector.label }),
    medium: (index: number) => within(MediumPractice_fx.selectors.mediaGroup()).getByRole('button', { name: uk.selector.media[media[index].key] }),
    playback: (paused: boolean) => screen.getByRole('button', { name: paused ? uk.simulation.play : uk.simulation.pause }),
    track: (index: number) => screen.getByRole('img', { name: `${uk.simulation.trackPrefix}${uk.selector.media[media[index].key]}.` }),
  },
  actions: {
    selectMedium: async (index: number) => userEvent.click(MediumPractice_fx.selectors.medium(index)),
    togglePlayback: async (paused: boolean) => userEvent.click(MediumPractice_fx.selectors.playback(paused)),
  },
} as const;
