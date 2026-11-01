import type { ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_ResponseParams } from '../locale.types';

export type SceneContentBlock_Definition = ContentBlock_Definition_Meta<'scene'>;

export type SceneContentBlock_Data<TComponent = unknown> = ContentBlock_Response_Meta<'scene'> & {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the engine. */
  component: TComponent;
};

export type SceneContentBlock_Response<TComponent = unknown> = ContentBlock_Response_Meta<'scene'> &
  Locale_ResponseParams & {
    component: TComponent;
  };

export type SceneContentBlock<ConfigType extends ContentEntity_ConfigType, TComponent = unknown> = {
  definition: SceneContentBlock_Definition;
  data: SceneContentBlock_Data<TComponent>;
  response: SceneContentBlock_Response<TComponent>;
}[ConfigType];
