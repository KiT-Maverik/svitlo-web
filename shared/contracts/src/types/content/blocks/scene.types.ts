import type { ReactNode } from 'react';
import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

/** Preserve the scene's keys while rejecting non-string leaves at any depth. */
type ContentBlock_Scene_Locales_Strings<TLocales> = TLocales extends string
  ? TLocales
  : TLocales extends object
    ? { [Key in keyof TLocales]: ContentBlock_Scene_Locales_Strings<TLocales[Key]> }
    : never;

type ContentBlock_Scene_Definition = ContentBlock_Definition_Meta<'scene'> & {
  component: ReactNode;
};

type ContentBlock_Scene_Locales_Data<TLocales> = TLocales extends string
  ? Locale_Config
  : TLocales extends object
    ? { [Key in keyof TLocales]: ContentBlock_Scene_Locales_Data<TLocales[Key]> }
    : never;

type ContentBlock_Scene_Data<TLocales extends object> = ContentBlock_Response_Meta<'scene'> & {
  locales: ContentBlock_Scene_Locales_Data<ContentBlock_Scene_Locales_Strings<TLocales>>;
};

type ContentBlock_Scene_Response<TLocales extends object> = ContentBlock_Response_Meta<'scene'> &
  Locale_ResponseParams & {
    locale: TLocales & ContentBlock_Scene_Locales_Strings<TLocales>;
  };

export type ContentBlock_Scene<
  ConfigType extends ContentEntity_ConfigType,
  TLocales extends object = Record<string, string>,
> = {
  definition: ContentBlock_Scene_Definition;
  data: ContentBlock_Scene_Data<TLocales>;
  response: ContentBlock_Scene_Response<TLocales>;
}[ConfigType];
