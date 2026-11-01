import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

type ContentBlock_Checkpoint_Definition = ContentBlock_Definition_Meta<'checkpoint'>;

type ContentBlock_Checkpoint_Data = ContentBlock_Response_Meta<'checkpoint'> & {
  title: Locale_Config;
  items: {
    question: Locale_Config;
    answer: Locale_Config;
  }[];
};

type ContentBlock_Checkpoint_Response = ContentBlock_Response_Meta<'checkpoint'> & Locale_ResponseParams & {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type ContentBlock_Checkpoint<ConfigType extends ContentEntity_ConfigType> = {
  definition: ContentBlock_Checkpoint_Definition;
  data: ContentBlock_Checkpoint_Data;
  response: ContentBlock_Checkpoint_Response;
}[ConfigType];
