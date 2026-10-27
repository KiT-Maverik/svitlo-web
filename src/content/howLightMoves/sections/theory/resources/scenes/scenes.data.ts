import { createElement } from 'react';
import type { SceneResource_Config } from '@types';
import { theory_SceneResources_Ids } from './index.ids';
import { LightRayDiagram } from './LightRayDiagram/LightRayDiagram';
import { LightPropagationSimulation } from './LightPropagationSimulation/LightPropagationSimulation';
import { Checkpoint } from './Checkpoint/Checkpoint';

export const theory_SceneResources_Data = {
  lightRayDiagram: { id: theory_SceneResources_Ids.lightRayDiagram, blockType: 'scene', component: createElement(LightRayDiagram) },
  lightPropagationSimulation: { id: theory_SceneResources_Ids.lightPropagationSimulation, blockType: 'scene', component: createElement(LightPropagationSimulation) },
  theoryCheckpoint: { id: theory_SceneResources_Ids.theoryCheckpoint, blockType: 'scene', component: createElement(Checkpoint) },
} satisfies Record<'lightRayDiagram' | 'lightPropagationSimulation' | 'theoryCheckpoint', SceneResource_Config>;
