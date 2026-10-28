import type {
  LanguageCode,
  TextResource_AllLanguages_Config,
  TextResource_ChosenLanguages_Config,
  TextResource_AllLocales_Config,
  TextResource_ChosenLocales_Config,
} from '@types';

type LocaleSelection =
  | { only: readonly [LanguageCode, ...LanguageCode[]]; include?: never; exclude?: never }
  | { only?: never; include: readonly LanguageCode[]; exclude?: readonly LanguageCode[] }
  | { only?: never; include?: readonly LanguageCode[]; exclude: readonly LanguageCode[] };

type SelectedLocales<T extends LocaleSelection> = Exclude<
  | (T extends { only: readonly (infer L extends LanguageCode)[] } ? L : LanguageCode)
  | (T extends { include: readonly (infer L extends LanguageCode)[] } ? L : never),
  T extends { exclude: readonly (infer L extends LanguageCode)[] } ? (LanguageCode extends L ? never : L) : never
>;

type ReadonlyTextResource<T extends TextResource_AllLocales_Config | TextResource_ChosenLocales_Config> = Readonly<
  Omit<T, 'value'>
> & { readonly value: Readonly<T['value']> };

export function createTextResource(
  id: string,
  value: TextResource_AllLanguages_Config,
): ReadonlyTextResource<TextResource_AllLocales_Config>;
export function createTextResource<const T extends LocaleSelection>(
  id: string,
  value: TextResource_ChosenLanguages_Config<NoInfer<SelectedLocales<T>>>,
  config: { locales: T },
): ReadonlyTextResource<TextResource_ChosenLocales_Config<SelectedLocales<T>>>;
export function createTextResource(
  id: string,
  value: TextResource_AllLanguages_Config | TextResource_ChosenLanguages_Config,
  config?: { locales: LocaleSelection },
) {
  if (config) {
    return { id, blockType: 'text', allLocales: false, value };
  }

  return { id, blockType: 'text', allLocales: true, value };
}
