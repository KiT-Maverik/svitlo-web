import type { ComponentType, SVGProps } from 'react';
import type { DefaultSupportedLanguage } from '@types';
import {
  UnitedStatesFlag,
  ChinaFlag,
  IndiaFlag,
  SpainFlag,
  SaudiArabiaFlag,
  FranceFlag,
  BangladeshFlag,
  BrazilFlag,
  PakistanFlag,
  IndonesiaFlag,
  GermanyFlag,
  JapanFlag,
  SouthKoreaFlag,
  TurkeyFlag,
  VietnamFlag,
  MalaysiaFlag,
  IsraelFlag,
  PolandFlag,
  UkraineFlag,
} from './flags';

/** Only locales with existing resources can be selected. */
export type FlagLocale = DefaultSupportedLanguage['locale'];
export type FlagProps = Omit<SVGProps<SVGSVGElement>, 'children'> & { locale: FlagLocale };

const flagsByLocale = {
  'en-US': UnitedStatesFlag,
  'zh-Hans-CN': ChinaFlag,
  'hi-IN': IndiaFlag,
  'es-ES': SpainFlag,
  'ar-SA': SaudiArabiaFlag,
  'fr-FR': FranceFlag,
  'bn-BD': BangladeshFlag,
  'pt-BR': BrazilFlag,
  'ur-PK': PakistanFlag,
  'id-ID': IndonesiaFlag,
  'de-DE': GermanyFlag,
  'ja-JP': JapanFlag,
  'ko-KR': SouthKoreaFlag,
  'tr-TR': TurkeyFlag,
  'vi-VN': VietnamFlag,
  'ta-IN': IndiaFlag,
  'te-IN': IndiaFlag,
  'mr-IN': IndiaFlag,
  'ms-MY': MalaysiaFlag,
  'he-IL': IsraelFlag,
  'pl-PL': PolandFlag,
  'uk-UA': UkraineFlag,
} satisfies Record<FlagLocale, ComponentType<SVGProps<SVGSVGElement>>>;

/** Dispatcher for currently implemented locales, not the future flag assets. */
export function Flag({ locale, ...svgProps }: FlagProps) {
  const Component = flagsByLocale[locale];
  return <Component width={24} height={16} aria-hidden="true" focusable="false" {...svgProps} />;
}
