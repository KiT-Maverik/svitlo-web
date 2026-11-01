import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

export type VideoContentBlock_Definition = ContentBlock_Definition_Meta<'video'>;

export type VideoContentBlock_Data = ContentBlock_Response_Meta<'video'> & {
  fileLocation: Locale_Config;
  poster: Locale_Config;
};

export type VideoContentBlock_Response = ContentBlock_Response_Meta<'video'> & Locale_ResponseParams & {
  fileLocation: string;
  poster: string;
};

export type VideoContentBlock<ConfigType extends ContentEntity_ConfigType> = {
  definition: VideoContentBlock_Definition;
  data: VideoContentBlock_Data;
  response: VideoContentBlock_Response;
}[ConfigType];
