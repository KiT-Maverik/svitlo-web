import type {DefaultSupportedLanguage} from "@svitlo/engine/localization";

export type DeepLocalized<T> = T extends string
  ? Record<DefaultSupportedLanguage['language'], string>
  : T extends readonly (infer Item)[]
    ? readonly DeepLocalized<Item>[]
    : T extends object
      ? { [Key in keyof T]: DeepLocalized<T[Key]> }
      : T;
