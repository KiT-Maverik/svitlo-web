import type { LanguageCode } from '../../types/languages';
import type {
  TextContentBlock_AllLanguages_Config,
  TextContentBlock_ChosenLanguages_Config,
  TextContentBlock_AllLocales_Config,
  TextContentBlock_ChosenLocales_Config,
} from '@svitlo/contracts/content';

type LocaleSelection =
  | { only: readonly [LanguageCode, ...LanguageCode[]]; include?: never; exclude?: never }
  | { only?: never; include: readonly LanguageCode[]; exclude?: readonly LanguageCode[] }
  | { only?: never; include?: readonly LanguageCode[]; exclude: readonly LanguageCode[] };

type SelectedLocales<T extends LocaleSelection> = Exclude<
  | (T extends { only: readonly (infer L extends LanguageCode)[] } ? L : LanguageCode)
  | (T extends { include: readonly (infer L extends LanguageCode)[] } ? L : never),
  T extends { exclude: readonly (infer L extends LanguageCode)[] } ? (LanguageCode extends L ? never : L) : never
>;

type ReadonlyTextContentBlock<T extends TextContentBlock_AllLocales_Config | TextContentBlock_ChosenLocales_Config> = Readonly<
  Omit<T, 'value'>
> & { readonly value: Readonly<T['value']> };

export function createTextContentBlock(
  id: string,
  value: TextContentBlock_AllLanguages_Config,
): ReadonlyTextContentBlock<TextContentBlock_AllLocales_Config>;
export function createTextContentBlock<const T extends LocaleSelection>(
  id: string,
  value: TextContentBlock_ChosenLanguages_Config<NoInfer<SelectedLocales<T>>>,
  config: { locales: T },
): ReadonlyTextContentBlock<TextContentBlock_ChosenLocales_Config<SelectedLocales<T>>>;
export function createTextContentBlock(
  id: string,
  value: TextContentBlock_AllLanguages_Config | TextContentBlock_ChosenLanguages_Config,
  config?: { locales: LocaleSelection },
) {
  if (config) {
    return { id, blockType: 'text', allLocales: false, value };
  }

  return { id, blockType: 'text', allLocales: true, value };
}
