import type {DefaultSupportedLanguage} from "@svitlo/engine/localization";

export type StringObjectToLocale<T> = T extends string
  ? Record<DefaultSupportedLanguage['language'], string>
  : T extends readonly (infer Item)[]
    ? readonly StringObjectToLocale<Item>[]
    : T extends object
      ? { [Key in keyof T]: StringObjectToLocale<T[Key]> }
      : T;
