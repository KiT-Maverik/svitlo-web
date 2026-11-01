import type { ContentBlock_Meta } from './common.types';

export type SceneContentBlock<TComponent = unknown> = ContentBlock_Meta<'scene'> & {
  /** Renderer-defined payload (e.g. ReactNode), not a UI dependency of the engine. */
  component: TComponent;
};
