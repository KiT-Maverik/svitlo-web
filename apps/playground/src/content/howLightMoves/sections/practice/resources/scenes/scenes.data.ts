import { createElement } from 'react';
import type { SceneResource_Config } from '@svitlo/engine/content';
import { practice_SceneResources_Ids } from './index.ids';
import { Practice } from './Practice/Practice';

export const practice_SceneResources_Data = {
  practice: { id: practice_SceneResources_Ids.practice, blockType: 'scene', component: createElement(Practice) },
} satisfies Record<'practice', SceneResource_Config>;
