import { DEFAULT_SUPPORTED_LANGUAGES } from '@/types/languages';
import { locales, type Locale as RayMessages, type LocaleCode } from './ray.locale';

export const rayLocales = DEFAULT_SUPPORTED_LANGUAGES.map(({ locale, nativeName }) => ({ code: locale, name: nativeName }));

export type RayLocaleCode = LocaleCode;

export function getRayLocale(code: RayLocaleCode): RayMessages {
  return locales[code];
}
