import { defineContentBlockCatalog, type ContentBlock_Catalog_DataFor, type Section } from '@svitlo/engine/content';
import type { theoryDefinition } from '@/data/lessons/1/howLightMoves/sections/theory/theory.definition';
import { checkpointData } from './checkpoints/checkpoint';
import { lightPropagationSimulationData } from './scenes/lightPropagationSimulation';
import { lightRayDiagramData } from './scenes/lightRayDiagram';
import { theory } from './theory';

export const theoryData = {
  id: '32376510-b49a-5da8-91d7-e13cf162c9f9',
  slug: 'theory' as const,
  title: theory.name,
  navigationLabel: theory.name,
  content: defineContentBlockCatalog({
    checkpoint: { checkpoint: checkpointData },
    markdown: {
      p1: { id: 'theory-markdown-p1', slug: 'p1' as const, locales: theory.markdown.p1 },
      p2: { id: 'theory-markdown-p2', slug: 'p2' as const, locales: theory.markdown.p2 },
      p3: { id: 'theory-markdown-p3', slug: 'p3' as const, locales: theory.markdown.p3 },
    },
    scene: {
      lightPropagationSimulation: lightPropagationSimulationData,
      lightRayDiagram: lightRayDiagramData,
    },
  } satisfies ContentBlock_Catalog_DataFor<typeof theoryDefinition.content>),
} satisfies Section<'data'>;
