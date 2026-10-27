const uk = {
  flashcard: {
    region: 'Флешкартка',
    actions: {
      menu: 'Дії картки',
      reveal: 'Показати відповідь',
      forgot: 'Не пам’ятаю',
      remembered: 'Пам’ятаю',
      addLabel: 'Додати мітку',
    },
  },
};

export type Flashcard_Locale = typeof uk;
export const locales = { uk } as const;
