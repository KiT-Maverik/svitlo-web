import type { RayMessages } from './ray.locale';
import type { Locale } from '@/types/languages';

export const rayLocales = [
  { code: 'uk-UA', name: 'Українська' },
  { code: 'en-US', name: 'English' },
] as const satisfies readonly { code: Locale; name: string }[];

export type RayLocaleCode = (typeof rayLocales)[number]['code'];

const loaders: Record<RayLocaleCode, () => Promise<RayMessages>> = {
  'uk-UA': () => import('./ray.locale').then(module => module.default),
  'en-US': () => import('./en-US.locale').then(module => module.default),
};

export function loadRayLocale(code: RayLocaleCode): Promise<RayMessages> {
  return loaders[code]();
}
