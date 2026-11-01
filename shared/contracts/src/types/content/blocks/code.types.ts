import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

export type CodeContentBlock_Definition = ContentBlock_Definition_Meta<'code'>;

export type CodeContentBlock_Data = ContentBlock_Response_Meta<'code'> & {
  fileLocation: Locale_Config;
  codeParams: { selector: string; values: Locale_Config }[];
};

export type CodeContentBlock_Response = ContentBlock_Response_Meta<'code'> & Locale_ResponseParams & {
  fileLocation: string;
  codeParams: { selector: string; value: string }[];
};

export type CodeContentBlock<ConfigType extends ContentEntity_ConfigType> = {
  definition: CodeContentBlock_Definition;
  data: CodeContentBlock_Data;
  response: CodeContentBlock_Response;
}[ConfigType];
