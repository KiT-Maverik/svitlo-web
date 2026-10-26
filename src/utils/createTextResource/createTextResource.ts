import type { Locale } from '@types';
import type { Resource_AllLocales_Config, Resource_ChosenLocales_Config, TextResource_AllLocales_Config, TextResource_ChosenLocales_Config } from '@types';

type LocaleSelection =
  | { only: readonly [Locale, ...Locale[]]; include?: never; exclude?: never }
  | { only?: never; include: readonly Locale[]; exclude?: readonly Locale[] }
  | { only?: never; include?: readonly Locale[]; exclude: readonly Locale[] };

type SelectedLocales<T extends LocaleSelection> = Exclude<
  (T extends { only: readonly (infer L extends Locale)[] } ? L : Locale)
    | (T extends { include: readonly (infer L extends Locale)[] } ? L : never),
  T extends { exclude: readonly (infer L extends Locale)[] }
    ? Locale extends L ? never : L
    : never
>;

type ReadonlyTextResource<T extends TextResource_AllLocales_Config | TextResource_ChosenLocales_Config> =
  Readonly<Omit<T, 'value'>> & { readonly value: Readonly<T['value']> };

export function createTextResource(id: string, value: Resource_AllLocales_Config): ReadonlyTextResource<TextResource_AllLocales_Config>;
export function createTextResource<const T extends LocaleSelection>(
  id: string,
  value: Resource_ChosenLocales_Config<NoInfer<SelectedLocales<T>>>,
  config: { locales: T },
): ReadonlyTextResource<TextResource_ChosenLocales_Config<SelectedLocales<T>>>;
export function createTextResource(
  id: string,
  value: Resource_AllLocales_Config | Resource_ChosenLocales_Config,
  config?: { locales: LocaleSelection },
) {
  if (config) {
    return { id, blockType: 'text', allLocales: false, value };
  }

  return { id, blockType: 'text', allLocales: true, value };
}
