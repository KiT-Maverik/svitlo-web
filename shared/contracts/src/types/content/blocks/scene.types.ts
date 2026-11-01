import type { ContentBlock_ConfigBase } from './common.types';

export interface SceneContentBlock_Config<TComponent = unknown> extends ContentBlock_ConfigBase<'scene'> {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the engine. */
  component: TComponent;
}

export type SceneContentBlock = SceneContentBlock_Config;
