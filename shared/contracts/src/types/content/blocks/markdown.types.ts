import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

export type MarkdownContentBlock_Definition = ContentBlock_Definition_Meta<'markdown'>;

export type MarkdownContentBlock_Data = ContentBlock_Response_Meta<'markdown'> & {
  files: Locale_Config;
};

export type MarkdownContentBlock_Response = ContentBlock_Response_Meta<'markdown'> & Locale_ResponseParams & {
  text: string;
};

export type MarkdownContentBlock<ConfigType extends ContentEntity_ConfigType> = {
  definition: MarkdownContentBlock_Definition;
  data: MarkdownContentBlock_Data;
  response: MarkdownContentBlock_Response;
}[ConfigType];
