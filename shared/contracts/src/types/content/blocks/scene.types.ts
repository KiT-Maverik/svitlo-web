import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

/** Preserve the scene's keys while rejecting non-string leaves at any depth. */
export type SceneLocales_Strings<TLocales> = TLocales extends string
  ? TLocales
  : TLocales extends object
    ? { [Key in keyof TLocales]: SceneLocales_Strings<TLocales[Key]> }
    : never;

export type SceneContentBlock_Definition<TLocales extends object, TComponent = unknown> = ContentBlock_Definition_Meta<'scene'> & {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the contracts. */
  component: TComponent;
  locales: TLocales & SceneLocales_Strings<TLocales>;
};

export type SceneLocales_Data<TLocales> = TLocales extends string
  ? Locale_Config
  : TLocales extends object
    ? { [Key in keyof TLocales]: SceneLocales_Data<TLocales[Key]> }
    : never;

export type SceneContentBlock_Data<TLocales extends object> = ContentBlock_Response_Meta<'scene'> & {
  locales: SceneLocales_Data<SceneLocales_Strings<TLocales>>;
};

export type SceneContentBlock_Response<TLocales extends object> = ContentBlock_Response_Meta<'scene'> &
  Locale_ResponseParams & {
    locales: TLocales & SceneLocales_Strings<TLocales>;
  };

export type SceneContentBlock<
  ConfigType extends ContentEntity_ConfigType,
  TLocales extends object = Record<string, string>,
  TComponent = unknown,
> = {
  definition: SceneContentBlock_Definition<TLocales, TComponent>;
  data: SceneContentBlock_Data<TLocales>;
  response: SceneContentBlock_Response<TLocales>;
}[ConfigType];
