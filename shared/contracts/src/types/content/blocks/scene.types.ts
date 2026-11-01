import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';

export type SceneContentBlock_Definition<TComponent = unknown> = ContentBlock_Definition_Meta<'scene'> & {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the contracts. */
  component: TComponent;
};

export type SceneContentBlock_Data = ContentBlock_Response_Meta<'scene'> & {
  locales: SceneLocales_Data;
};

export type SceneLocales_Data = { [key: string]: Locale_Config | SceneLocales_Data };

export type SceneLocales_Response = { [key: string]: string | SceneLocales_Response };

export type SceneContentBlock_Response = ContentBlock_Response_Meta<'scene'> & Locale_ResponseParams & {
  locales: SceneLocales_Response;
};

export type SceneContentBlock<ConfigType extends ContentEntity_ConfigType, TComponent = unknown> = {
  definition: SceneContentBlock_Definition<TComponent>;
  data: SceneContentBlock_Data;
  response: SceneContentBlock_Response;
}[ConfigType];
