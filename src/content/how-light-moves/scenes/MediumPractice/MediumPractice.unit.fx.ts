import { createElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MediumPractice from './MediumPractice';
import { aria } from './MediumPractice.constants';
import { locale } from './MediumPractice.locale';
import { media } from '@/content/how-light-moves/sections/practice/mediumData';

export const MediumPractice_fx = {
  render: () => render(createElement(MediumPractice)),
  selectors: {
    title: () => screen.getByRole('heading', { name: locale.mediumPractice.title }),
    mediaGroup: () => screen.getByRole('group', { name: aria.mediaGroup }),
    medium: (index: number) => within(MediumPractice_fx.selectors.mediaGroup()).getByRole('button', { name: media[index].title }),
    playback: (paused: boolean) => screen.getByRole('button', { name: paused ? locale.mediumPractice.play : locale.mediumPractice.pause }),
    track: (index: number) => screen.getByRole('img', { name: `${locale.mediumPractice.trackPrefix}${media[index].title}.` }),
  },
  actions: {
    selectMedium: async (index: number) => userEvent.click(MediumPractice_fx.selectors.medium(index)),
    togglePlayback: async (paused: boolean) => userEvent.click(MediumPractice_fx.selectors.playback(paused)),
  },
} as const;
