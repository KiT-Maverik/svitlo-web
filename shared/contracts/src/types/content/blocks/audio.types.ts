import type { AllLocales } from '../locale.types';
import type { Locale } from '../../languages';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type AudioContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
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
