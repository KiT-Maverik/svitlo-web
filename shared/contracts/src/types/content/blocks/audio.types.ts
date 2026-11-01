import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

export type AudioContentBlock_Definition = ContentBlock_Definition_Meta<'audio'>;

export type AudioContentBlock_Data = ContentBlock_Response_Meta<'audio'> & {
  fileLocation: Locale_Config;
  title: Locale_Config;
  description: Locale_Config;
};

export type AudioContentBlock_Response = ContentBlock_Response_Meta<'audio'> & Locale_ResponseParams & {
  fileLocation: string;
  title: string;
  description: string;
};

export type AudioContentBlock<ConfigType extends ContentEntity_ConfigType> = {
  definition: AudioContentBlock_Definition;
  data: AudioContentBlock_Data;
  response: AudioContentBlock_Response;
}[ConfigType];
