import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { locales, type LightPropagationSimulationLocale, type LightPropagationSimulationLocaleCode } from './lightPropagationSimulation.locale';

export const lightPropagationSimulationLocales = DEFAULT_SUPPORTED_LANGUAGES.map(({ locale, nativeName }) => ({ code: locale, name: nativeName }));

export function getLightPropagationSimulationLocale(code: LightPropagationSimulationLocaleCode): LightPropagationSimulationLocale {
  return locales[code];
}
