import { createElement } from 'react';
import type { SceneContentBlock_Config } from '@svitlo/engine/content';
import { practice_SceneContentBlocks_Ids } from './index.ids';
import { Showcase } from './Showcase/Showcase';
import type { Showcase_ContentBlock } from './Showcase/Showcase.types';

export const showcaseDefinition = {
  type: 'scene',
  component: createElement(Showcase),
} satisfies Showcase_ContentBlock<'definition'>;

export const practice_SceneContentBlocks_Data = {
  practice: { id: '9ea839e1-4237-5382-bf9b-1b534539f968', blockType: 'scene', component: createElement(Showcase) },
} satisfies Record<'practice', SceneContentBlock_Config>;
