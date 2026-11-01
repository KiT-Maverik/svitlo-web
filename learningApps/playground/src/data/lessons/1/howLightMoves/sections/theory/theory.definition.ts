import type { Section } from '@svitlo/engine/content';
import { checkpoint } from './scenes/Checkpoint/Checkpoint.types';
import { lightPropagationSimulationDefinition, lightRayDiagramDefinition } from './scenes/scenes.data';

export const theoryDefinition = {
  type: 'section',
  content: {
    checkpoint: { checkpoint },
    markdown: {
      p1: { type: 'markdown' },
      p2: { type: 'markdown' },
      p3: { type: 'markdown' },
    },
    scene: {
      lightPropagationSimulation: lightPropagationSimulationDefinition,
      lightRayDiagram: lightRayDiagramDefinition,
    },
  },
} satisfies Section<'definition'>;
