import type { LanguageCode } from '../languages';

export type AllLocales<Value = string> = Record<LanguageCode, Value>;

export type PartialLocales<Value = string> = Partial<Record<LanguageCode, Value>> & {
  fallback: Value;
};

export type NotLocalized<Value = string> = {
  value: Value;
};
