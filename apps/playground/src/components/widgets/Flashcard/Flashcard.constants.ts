import { locales } from './Flashcard.locale';

const locale = locales.uk;

export const aria = {
  region: locale.flashcard.region,
  actions: {
    menu: locale.flashcard.actions.menu,
    reveal: locale.flashcard.actions.reveal,
  },
} as const;
