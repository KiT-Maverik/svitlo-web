import type { AllLocales } from '../locale.types';
import type { Locale } from '../../languages';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type MarkdownContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'markdown'> & {
    fileLocation: LocalizedValue;
  };

export interface MarkdownContentBlock extends ContentBlock_ConfigBase<'markdown'> {
  locale: Locale;
  fileLocation: string;
}
