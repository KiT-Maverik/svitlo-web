import { createElement } from 'react';
import type { SceneResource_Config } from '@types';
import { id } from '../../../../howLightMoves.constants';
import { LightRayDiagram } from './LightRayDiagram/LightRayDiagram';
import { LightPropagationSimulation } from './LightPropagationSimulation/LightPropagationSimulation';
import { Checkpoint } from './Checkpoint/Checkpoint';

export const scene = {
  lightRayDiagram: { id: id.resource.scene.lightRayDiagram, blockType: 'scene', component: createElement(LightRayDiagram) },
  lightPropagationSimulation: { id: id.resource.scene.lightPropagationSimulation, blockType: 'scene', component: createElement(LightPropagationSimulation) },
  theoryCheckpoint: { id: id.resource.scene.theoryCheckpoint, blockType: 'scene', component: createElement(Checkpoint) },
} satisfies Record<'lightRayDiagram' | 'lightPropagationSimulation' | 'theoryCheckpoint', SceneResource_Config>;
