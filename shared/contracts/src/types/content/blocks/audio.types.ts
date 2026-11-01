import type { Locales_All } from '../locale.types';
import type { Locale } from '../../languages';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type AudioContentBlock_Config<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> =
  ContentBlock_ConfigBase<'audio'> & {
    fileLocation: LocalizedValue;
    title: LocalizedValue;
    description: LocalizedValue;
  };

export interface AudioContentBlock extends ContentBlock_ConfigBase<'audio'> {
  locale: Locale;
  fileLocation: string;
  title: string;
  description: string;
}
