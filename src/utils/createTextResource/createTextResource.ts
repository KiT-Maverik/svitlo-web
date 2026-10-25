import type { Locale } from '@/types/languages';
import type { AllLocales, ChosenLocales, TextResource_AllLocales, TextResource_ChosenLocales } from '@/types/content/resources';

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

type ReadonlyTextResource<T extends TextResource_AllLocales | TextResource_ChosenLocales> =
  Readonly<Omit<T, 'value'>> & { readonly value: Readonly<T['value']> };

export function createTextResource(id: string, value: AllLocales): ReadonlyTextResource<TextResource_AllLocales>;
export function createTextResource<const T extends LocaleSelection>(
  id: string,
  value: ChosenLocales<NoInfer<SelectedLocales<T>>>,
  config: { locales: T },
): ReadonlyTextResource<TextResource_ChosenLocales<SelectedLocales<T>>>;
export function createTextResource(
  id: string,
  value: AllLocales | ChosenLocales,
  config?: { locales: LocaleSelection },
) {
  if (config) {
    return { id, blockType: 'text', allLocales: false, value };
  }

  return { id, blockType: 'text', allLocales: true, value };
}
