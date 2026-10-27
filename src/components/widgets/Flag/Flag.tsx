import Image, { type ImageProps } from 'next/image';
import type { DefaultSupportedLanguage } from '@types';

/** Only locales registered in the app have a flag dispatch entry. */
export type FlagLocale = DefaultSupportedLanguage['locale'];
export type FlagProps = Omit<ImageProps, 'src' | 'alt'> & {
  locale: FlagLocale;
  alt?: string;
};

/**
 * ISO 3166-1 alpha-2 country codes, not language codes.
 * Unregistered future locales intentionally have no dispatcher entry.
 */
export const flagCountryByLocale = {
  'en-US': 'us',
  'zh-Hans-CN': 'cn',
  'hi-IN': 'in',
  'es-ES': 'es',
  'ar-SA': 'sa',
  'fr-FR': 'fr',
  'bn-BD': 'bd',
  'pt-BR': 'br',
  'ur-PK': 'pk',
  'id-ID': 'id',
  'de-DE': 'de',
  'ja-JP': 'jp',
  'ko-KR': 'kr',
  'tr-TR': 'tr',
  'vi-VN': 'vn',
  'ta-IN': 'in',
  'te-IN': 'in',
  'mr-IN': 'in',
  'ms-MY': 'my',
  'he-IL': 'il',
  'pl-PL': 'pl',
  'uk-UA': 'ua',
} as const satisfies Record<FlagLocale, string>;

/** A single image wrapper instead of individually authored React SVG components. */
export function Flag({
  locale,
  alt = '',
  width = 24,
  height = 16,
  style,
  ...props
}: FlagProps) {
  return (
    <Image
      src={`/flags/${flagCountryByLocale[locale]}.svg`}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      style={{ objectFit: 'contain', ...style }}
      {...props}
    />
  );
}
