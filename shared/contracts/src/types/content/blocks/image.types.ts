import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

export type ImageContentBlock_Definition = ContentBlock_Definition_Meta<'image'>;

export type ImageContentBlock_Data = ContentBlock_Response_Meta<'image'> & {
  fileLocation: Locale_Config;
  alt: Locale_Config;
};

export type ImageContentBlock_Response = ContentBlock_Response_Meta<'image'> & Locale_ResponseParams & {
  fileLocation: string;
  alt: string;
};

export type ImageContentBlock<ConfigType extends ContentEntity_ConfigType> = {
  definition: ImageContentBlock_Definition;
  data: ImageContentBlock_Data;
  response: ImageContentBlock_Response;
}[ConfigType];
