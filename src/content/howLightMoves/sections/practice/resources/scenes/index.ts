import { createElement } from 'react';
import type { SceneResource_Config } from '@types';
import { id } from '../../../../howLightMoves.constants';
import { MediumPractice } from './MediumPractice/MediumPractice';

export const scene = {
  mediumPractice: { id: id.resource.scene.mediumPractice, blockType: 'scene', component: createElement(MediumPractice) },
} satisfies Record<'mediumPractice', SceneResource_Config>;
