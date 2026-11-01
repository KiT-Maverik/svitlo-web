import type { ContentEntity_ConfigType } from './entity.types';
import type { Locale_Config, Locale_ResponseParams } from './locale.types';

type Section_Definition = {
  type: 'section';
};

type Section_Data = {
  id: string;
  type: 'section';
  title: Locale_Config;
  navigationLabel: Locale_Config;
  skippable?: true;
};

type Section_Response = Locale_ResponseParams & {
  id: string;
  type: 'section';
  title: string;
  navigationLabel: string;
  skippable?: true;
};

export type Section<ConfigType extends ContentEntity_ConfigType> = {
  definition: Section_Definition;
  data: Section_Data;
  response: Section_Response;
}[ConfigType];
