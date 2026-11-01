import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';
import type { ContentEntity_ConfigType } from '../entity.types';

export type ContentBlock_Text_Definition = ContentBlock_Definition_Meta<'text'>;

export type ContentBlock_Text_Data<Locales extends Locale_Config> = ContentBlock_Response_Meta<'text'> & {
  value: Locales;
};

export type ContentBlock_Text_Response = ContentBlock_Response_Meta<'text'> & Locale_ResponseParams & { value: string };

export type ContentBlock_Text<ConfigType extends ContentEntity_ConfigType, Locales extends Locale_Config> = {
  definition: ContentBlock_Text_Definition;
  data: ContentBlock_Text_Data<Locales>;
  response: ContentBlock_Text_Response;
}[ConfigType];
