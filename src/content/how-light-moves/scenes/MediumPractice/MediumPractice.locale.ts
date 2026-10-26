import type { LanguageCode } from '@types';

export const uk = {
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
  media: { vacuum: 'Вакуум', air: 'Повітря', water: 'Вода' },
};

export type MediumPractice_Locale = {
  [K in Exclude<keyof typeof uk, 'media'>]: string;
} & { media: { vacuum: string; air: string; water: string } };

export const en = {
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
} satisfies MediumPractice_Locale;

export const locales = { en, uk } satisfies Partial<Record<LanguageCode, MediumPractice_Locale>>;
