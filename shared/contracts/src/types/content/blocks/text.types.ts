import type { Locale } from '../../languages';
import type { AllLocales } from '../locale.types';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type ContentBlock_Text_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'text'> & {
    value: LocalizedValue;
  };

export interface ContentBlock_Text extends ContentBlock_ConfigBase<'text'> {
  locale: Locale;
  value: string;
}
