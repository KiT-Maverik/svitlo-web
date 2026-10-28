import type { Locale } from '@svitlo/engine/localization';
import { locale as uk } from './uk-UA';
import { locale as lt } from './lt-LT';
import { locale as lv } from './lv-LV';
import { locale as et } from './et-EE';
import { locale as be } from './be-tarask';
import { locale as ka } from './ka-GE';
import { locale as kk } from './kk-Cyrl-KZ';

const dictionaries = { 'uk-UA': uk, 'lt-LT': lt, 'lv-LV': lv, 'et-EE': et, 'be-tarask': be, 'ka-GE': ka, 'kk-Cyrl-KZ': kk } as const;
export const getNavbarPreferencesMessages = (locale: Locale) =>
  dictionaries[locale as keyof typeof dictionaries] ?? uk;
