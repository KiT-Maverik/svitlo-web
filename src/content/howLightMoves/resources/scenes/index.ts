import { createElement } from 'react';
import type { SceneResource_Config } from '@types';
import { id } from '../../howLightMoves.constants';
import { LightRayDiagram } from './LightRayDiagram/LightRayDiagram';
import { LightPropagationSimulation } from './LightPropagationSimulation/LightPropagationSimulation';
import { MediumPractice } from './MediumPractice/MediumPractice';
import { TheoryCheckpoint } from './TheoryCheckpoint/TheoryCheckpoint';

export const scene = {
  lightRayDiagram: { id: id.resource.scene.lightRayDiagram, blockType: 'scene', component: createElement(LightRayDiagram) },
  lightPropagationSimulation: { id: id.resource.scene.lightPropagationSimulation, blockType: 'scene', component: createElement(LightPropagationSimulation) },
  mediumPractice: { id: id.resource.scene.mediumPractice, blockType: 'scene', component: createElement(MediumPractice) },
  theoryCheckpoint: { id: id.resource.scene.theoryCheckpoint, blockType: 'scene', component: createElement(TheoryCheckpoint) },
} satisfies Record<keyof typeof id.resource.scene, SceneResource_Config>;
