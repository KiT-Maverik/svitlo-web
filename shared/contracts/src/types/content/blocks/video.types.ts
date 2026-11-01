import type { AllLocales } from '../locale.types';
import type { Locale } from '../../languages';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type VideoContentBlock_Config<LocalizedValue extends ContentBlock_Localized = AllLocales<string>> =
  ContentBlock_ConfigBase<'video'> & {
    fileLocation: LocalizedValue;
    poster: LocalizedValue;
  };

export interface VideoContentBlock extends ContentBlock_ConfigBase<'video'> {
  locale: Locale;
  fileLocation: string;
  poster: string;
}
