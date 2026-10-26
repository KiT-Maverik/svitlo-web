export const locale = {
  mediumPractice: {
    eyebrow: "ДОСЛІДЖУЙ · ПОРІВНЮЙ · ПОМІЧАЙ",
    title: "Одне світло. Різні середовища.",
    description: "Перемикай середовища й порівнюй час проходження однакової відстані. Точка рухається між джерелом та екраном у режимі повтору.",
    mediaGroup: "Середовище поширення світла",
    trackPrefix: 'Модель поширення світла: ',
    source: "Джерело",
    screen: "Екран",
    play: "Відтворити",
    pause: "Пауза",
    quote: "«Швидкість світла залежить від середовища: у воді світло поширюється повільніше, ніж у вакуумі».",
    caption: "Анімацію сильно сповільнено; співвідношення швидкостей збережено. Повітря й вакуум майже не відрізняються візуально. Повернення точки — повтор моделі, а не пояснення відбиття. Значення приблизні для видимого світла й залежать від умов.",
    model: "Модель: v = c / n.",
    speedUnit: 'км/с',
    sourceLink: "Джерело значень показника заломлення — OpenStax",
  },
} as const;

import { DEFAULT_SUPPORTED_LANGUAGES, type Locale } from '@types';

/** The scene receives its strings from the lesson rather than importing a fixed language. */
export type MediumPracticeLocale = {
  [K in keyof typeof locale.mediumPractice]: string;
} & { media: { vacuum: string; air: string; water: string } };

const uk = {
  ...locale.mediumPractice,
  media: { vacuum: 'Вакуум', air: 'Повітря', water: 'Вода' },
} satisfies MediumPracticeLocale;

const en = {
  eyebrow: 'EXPLORE · COMPARE · OBSERVE',
  title: 'One light. Different media.',
  description: 'Switch between media and compare the time light takes to cover the same distance. The point travels between the source and the screen in a repeating animation.',
  mediaGroup: 'Light propagation medium',
  trackPrefix: 'Light propagation model: ',
  source: 'Source',
  screen: 'Screen',
  play: 'Play',
  pause: 'Pause',
  quote: '“The speed of light depends on the medium: light travels more slowly in water than in a vacuum.”',
  caption: 'The animation is greatly slowed down, while the speed ratios are preserved. Air and vacuum appear almost identical. The return movement simply repeats the model and does not depict reflection. Values are approximate for visible light and vary with conditions.',
  model: 'Model: v = c / n.',
  speedUnit: 'km/s',
  sourceLink: 'Refractive-index values from OpenStax',
  media: { vacuum: 'Vacuum', air: 'Air', water: 'Water' },
} satisfies MediumPracticeLocale;

/** English is the explicit fallback until a scene translation is supplied. */
export const mediumPracticeLocales = Object.fromEntries(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ locale: code }) => [code, code === 'uk-UA' ? uk : en]),
) as Record<Locale, MediumPracticeLocale>;
