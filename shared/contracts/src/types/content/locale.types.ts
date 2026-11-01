import type { LanguageCode } from '../languages';

export type AllLocales<Value = string> = Record<LanguageCode, Value>;

export type PartialLocales<Value = string> = {
  [FallbackLanguage in LanguageCode]: {
    fallback: FallbackLanguage;
  } & Record<FallbackLanguage, Value> &
    Partial<Record<Exclude<LanguageCode, FallbackLanguage>, Value>>;
}[LanguageCode];

export type NotLocalized<Value = string> = {
  value: Value;
  language: LanguageCode;
};
