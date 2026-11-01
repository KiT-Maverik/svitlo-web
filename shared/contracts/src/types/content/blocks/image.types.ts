import type { Locales_All } from '../locale.types';
import type { Locale } from '../../languages';
import type { ContentBlock_ConfigBase, ContentBlock_Localized } from './common.types';

export type ImageContentBlock_Config<LocalizedValue extends ContentBlock_Localized = Locales_All<string>> =
  ContentBlock_ConfigBase<'image'> & {
    fileLocation: LocalizedValue;
    alt: LocalizedValue;
  };

export interface ImageContentBlock extends ContentBlock_ConfigBase<'image'> {
  locale: Locale;
  fileLocation: string;
  alt: string;
}
