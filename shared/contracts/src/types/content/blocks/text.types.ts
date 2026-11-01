import type { Locale } from '../../languages';
import type { Locales_All } from '../locale.types';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type ContentBlock_Text_Config<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> =
  ContentBlock_ConfigBase & {
    type: 'text';
    value: LocalizedValue;
  };

export interface ContentBlock_Text extends ContentBlock_ConfigBase {
  type: 'text';
  locale: Locale;
  value: string;
}
