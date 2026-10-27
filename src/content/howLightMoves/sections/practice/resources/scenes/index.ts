import { createElement } from 'react';
import type { SceneResource_Config } from '@types';
import { id } from '../../../../howLightMoves.constants';
import { Practice } from './Practice/Practice';

export const scene = {
  practice: { id: id.resource.scene.practice, blockType: 'scene', component: createElement(Practice) },
} satisfies Record<'practice', SceneResource_Config>;
