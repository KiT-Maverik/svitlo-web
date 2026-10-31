import { createElement } from 'react';
import type { SceneResource_Config } from '@svitlo/engine/content';
import { practice_SceneResources_Ids } from './index.ids';
import { Showcase } from './Showcase/Showcase';

export const practice_SceneResources_Data = {
  practice: { id: '9ea839e1-4237-5382-bf9b-1b534539f968', blockType: 'scene', component: createElement(Showcase) },
} satisfies Record<'practice', SceneResource_Config>;
