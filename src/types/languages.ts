/** Supported text direction for a language. */
export type TextDirection = 'ltr' | 'rtl';

/** Shape required for every language descriptor. */
export interface LanguageDefinition {
  readonly locale: string;
  readonly language: string;
  readonly name: string;
  readonly nativeName: string;
  readonly nameUk: string;
  readonly flag: string;
  readonly direction: TextDirection;
}

/**
 * Extension point for consumers that add languages through module augmentation.
 *
 * Example:
 * declare module '@/types/languages' {
 *   interface AdditionalLanguages {
 *     cs: {
 *       locale: 'cs-CZ';
 *       language: 'cs';
 *       name: 'Czech';
 *       nativeName: 'Čeština';
 *       nameUk: 'Чеська';
 *       flag: '🇨🇿';
 *       direction: 'ltr';
 *     };
 *   }
 * }
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AdditionalLanguages {}

export type AdditionalLanguage = AdditionalLanguages[keyof AdditionalLanguages];

/** Default language set shipped with the project. */
export const DEFAULT_SUPPORTED_LANGUAGES = [
  { locale: 'en-US', language: 'en', name: 'English', nativeName: 'English', nameUk: 'Англійська', flag: '🇺🇸', direction: 'ltr' },
  { locale: 'zh-Hans-CN', language: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文', nameUk: 'Китайська (спрощене письмо)', flag: '🇨🇳', direction: 'ltr' },
  { locale: 'hi-IN', language: 'hi', name: 'Hindi', nativeName: 'हिन्दी', nameUk: 'Гінді', flag: '🇮🇳', direction: 'ltr' },
  { locale: 'es-ES', language: 'es', name: 'Spanish', nativeName: 'Español', nameUk: 'Іспанська', flag: '🇪🇸', direction: 'ltr' },
  { locale: 'ar-SA', language: 'ar', name: 'Arabic', nativeName: 'العربية', nameUk: 'Арабська', flag: '🇸🇦', direction: 'rtl' },
  { locale: 'fr-FR', language: 'fr', name: 'French', nativeName: 'Français', nameUk: 'Французька', flag: '🇫🇷', direction: 'ltr' },
  { locale: 'bn-BD', language: 'bn', name: 'Bengali', nativeName: 'বাংলা', nameUk: 'Бенгальська', flag: '🇧🇩', direction: 'ltr' },
  { locale: 'pt-BR', language: 'pt', name: 'Portuguese (Brazil)', nativeName: 'Português do Brasil', nameUk: 'Португальська (Бразилія)', flag: '🇧🇷', direction: 'ltr' },
  { locale: 'ur-PK', language: 'ur', name: 'Urdu', nativeName: 'اردو', nameUk: 'Урду', flag: '🇵🇰', direction: 'rtl' },
  { locale: 'id-ID', language: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', nameUk: 'Індонезійська', flag: '🇮🇩', direction: 'ltr' },
  { locale: 'de-DE', language: 'de', name: 'German', nativeName: 'Deutsch', nameUk: 'Німецька', flag: '🇩🇪', direction: 'ltr' },
  { locale: 'ja-JP', language: 'ja', name: 'Japanese', nativeName: '日本語', nameUk: 'Японська', flag: '🇯🇵', direction: 'ltr' },
  { locale: 'ko-KR', language: 'ko', name: 'Korean', nativeName: '한국어', nameUk: 'Корейська', flag: '🇰🇷', direction: 'ltr' },
  { locale: 'tr-TR', language: 'tr', name: 'Turkish', nativeName: 'Türkçe', nameUk: 'Турецька', flag: '🇹🇷', direction: 'ltr' },
  { locale: 'vi-VN', language: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', nameUk: 'В’єтнамська', flag: '🇻🇳', direction: 'ltr' },
  { locale: 'ta-IN', language: 'ta', name: 'Tamil', nativeName: 'தமிழ்', nameUk: 'Тамільська', flag: '🇮🇳', direction: 'ltr' },
  { locale: 'te-IN', language: 'te', name: 'Telugu', nativeName: 'తెలుగు', nameUk: 'Телугу', flag: '🇮🇳', direction: 'ltr' },
  { locale: 'mr-IN', language: 'mr', name: 'Marathi', nativeName: 'मराठी', nameUk: 'Маратхі', flag: '🇮🇳', direction: 'ltr' },
  { locale: 'ms-MY', language: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', nameUk: 'Малайська', flag: '🇲🇾', direction: 'ltr' },
  { locale: 'he-IL', language: 'he', name: 'Hebrew', nativeName: 'עברית', nameUk: 'Іврит', flag: '🇮🇱', direction: 'rtl' },
  { locale: 'pl-PL', language: 'pl', name: 'Polish', nativeName: 'Polski', nameUk: 'Польська', flag: '🇵🇱', direction: 'ltr' },
  { locale: 'uk-UA', language: 'uk', name: 'Ukrainian', nativeName: 'Українська', nameUk: 'Українська', flag: '🇺🇦', direction: 'ltr' },
] as const satisfies readonly LanguageDefinition[];

export type DefaultSupportedLanguage = (typeof DEFAULT_SUPPORTED_LANGUAGES)[number];
export type SupportedLanguage = DefaultSupportedLanguage | AdditionalLanguage;
export type Locale = SupportedLanguage['locale'];
export type LanguageCode = SupportedLanguage['language'];

/** English is used whenever a requested language is unavailable. */
export const FALLBACK_LANGUAGE = 'en' as const;
export const FALLBACK_LOCALE = 'en-US' as const;

export type LanguageFor<L extends Locale> = Extract<SupportedLanguage, { readonly locale: L }>;

export type LocalizedContent<T> = {
  [L in Locale]: {
    locale: L;
    language: LanguageFor<L>;
    content: T;
  };
}[Locale];

export interface LanguageConfiguration {
  /** Languages are appended after the defaults unless replaceDefaults is true. */
  additionalLanguages?: readonly LanguageDefinition[];
  /** When true, use only additionalLanguages and omit the defaults. */
  replaceDefaults?: boolean;
}

export function getSupportedLanguages(configuration: LanguageConfiguration = {}): readonly LanguageDefinition[] {
  const additionalLanguages = configuration.additionalLanguages ?? [];
  return configuration.replaceDefaults
    ? [...additionalLanguages]
    : [...DEFAULT_SUPPORTED_LANGUAGES, ...additionalLanguages];
}

export function isLocale(value: string, languages: readonly LanguageDefinition[] = DEFAULT_SUPPORTED_LANGUAGES): value is Locale {
  return languages.some((language) => language.locale === value);
}

export function getLocaleDirection(locale: Locale): TextDirection {
  return DEFAULT_SUPPORTED_LANGUAGES.find((language) => language.locale === locale)?.direction ?? 'ltr';
}
