import { createElement } from 'react';
import type { SceneContentBlock_Config } from '@svitlo/engine/content';
import { theory_SceneContentBlocks_Ids } from './index.ids';
import { LightRayDiagram } from './LightRayDiagram/LightRayDiagram';
import type { LightRayDiagram_ContentBlock } from './LightRayDiagram/LightRayDiagram.types';
import { LightPropagationSimulation } from './LightPropagationSimulation/LightPropagationSimulation';
import type { LightPropagationSimulation_ContentBlock } from './LightPropagationSimulation/LightPropagationSimulation.types';
import { Checkpoint } from './Checkpoint/Checkpoint';

export const lightRayDiagramDefinition = {
  type: 'scene',
  component: createElement(LightRayDiagram),
} satisfies LightRayDiagram_ContentBlock<'definition'>;

export const lightPropagationSimulationDefinition = {
  type: 'scene',
  component: createElement(LightPropagationSimulation),
} satisfies LightPropagationSimulation_ContentBlock<'definition'>;

export const theory_Scenes = {
  lightRayDiagram: {
    id: '5acac9ef-2452-5072-b471-1255d52b4a28',
    blockType: 'scene',
    component: createElement(LightRayDiagram),
  },
  lightPropagationSimulation: {
    id: '1c0b03fd-de9a-50b8-a493-03594337b5a7',
    blockType: 'scene',
    component: createElement(LightPropagationSimulation),
  },
  theoryCheckpoint: {
    id: 'cd65e160-da27-57e1-a58f-38b1276c4346',
    blockType: 'scene',
    component: createElement(Checkpoint),
  },
} satisfies Record<'lightRayDiagram' | 'lightPropagationSimulation' | 'theoryCheckpoint', SceneContentBlock_Config>;
