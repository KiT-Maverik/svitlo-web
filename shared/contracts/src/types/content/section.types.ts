import type { ContentEntity_ConfigType } from './entity.types';
import type { Locale_Config, Locale_ResponseParams } from './locale.types';
import type { ContentBlock_Catalog } from './blocks';

type Section_Definition = {
  type: 'section';
  content: ContentBlock_Catalog<'definition'>;
};

type Section_Data = {
  id: string;
  title: Locale_Config;
  navigationLabel: Locale_Config;
  skippable?: true;
  content: ContentBlock_Catalog<'data'>;
};

type Section_Response = Locale_ResponseParams & {
  id: string;
  title: string;
  navigationLabel: string;
  skippable?: true;
  content: ContentBlock_Catalog<'response'>;
};

export type Section<ConfigType extends ContentEntity_ConfigType> = {
  definition: Section_Definition;
  data: Section_Data;
  response: Section_Response;
}[ConfigType];
