import type { Locales_All } from '../locale.types';
import type { Locale } from '../../languages';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export interface CodeContentBlockParam<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> {
  selector: string;
  values: LocalizedValue;
}

export type CodeContentBlock_Config<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> =
  ContentBlock_ConfigBase<'code'> & {
    fileLocation: LocalizedValue;
    codeParams: CodeContentBlockParam<LocalizedValue>[];
  };

export interface CodeContentBlock extends ContentBlock_ConfigBase<'code'> {
  locale: Locale;
  fileLocation: string;
  codeParams: { selector: string; value: string }[];
}
