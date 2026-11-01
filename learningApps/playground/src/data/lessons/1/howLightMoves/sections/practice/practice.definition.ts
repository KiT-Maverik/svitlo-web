import type { Section } from '@svitlo/engine/content';
import { showcaseDefinition } from './scenes/scenes.data';

export const practiceDefinition = {
  type: 'section',
  content: {
    scene: { showcase: showcaseDefinition },
    text: { task: { type: 'text' } },
  },
} satisfies Section<'definition'>;
