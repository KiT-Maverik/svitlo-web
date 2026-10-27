import { createElement } from 'react';
import type { Locale } from '@types';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';
import { howLightMoves } from '../../../howLightMoves.data';
import { howLightMovesCatalog } from '../../../howLightMoves.catalog';
import { buildLesson } from '@/utils';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MediumPractice } from './MediumPractice';
import { aria } from './MediumPractice.constants';
import { locales } from './MediumPractice.locale';

const uk = locales.uk;
import { media } from './MediumPractice.constants';

export const MediumPractice_fx = {
  render: (code: Locale = 'uk-UA') => render(createElement(SceneLocaleProvider, { locale: code, scenes: buildLesson(howLightMoves, code, howLightMovesCatalog).sceneLocale ?? {} }, createElement(MediumPractice))),
  selectors: {
    title: () => screen.getByRole('heading', { name: uk.title }),
    mediaGroup: () => screen.getByRole('group', { name: aria.mediaGroup }),
    medium: (index: number) => within(MediumPractice_fx.selectors.mediaGroup()).getByRole('button', { name: uk.media[media[index].key] }),
    playback: (paused: boolean) => screen.getByRole('button', { name: paused ? uk.play : uk.pause }),
    track: (index: number) => screen.getByRole('img', { name: `${uk.trackPrefix}${uk.media[media[index].key]}.` }),
  },
  actions: {
    selectMedium: async (index: number) => userEvent.click(MediumPractice_fx.selectors.medium(index)),
    togglePlayback: async (paused: boolean) => userEvent.click(MediumPractice_fx.selectors.playback(paused)),
  },
} as const;
