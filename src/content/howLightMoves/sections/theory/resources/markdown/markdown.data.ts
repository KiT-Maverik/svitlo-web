import type { MarkdownResource_AllLocales_Config } from '@types';
import { createLocalizedFileLocations } from '@/utils';
import { theory_MarkdownResources_Ids } from './index.ids';

export const theory_MarkdownResources_Data = {
  introduction: {
    id: theory_MarkdownResources_Ids.introduction,
    blockType: 'markdown',
    allLocales: true,
    fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/resources/markdown/01', 'md'),
  },
  continuation: {
    id: theory_MarkdownResources_Ids.continuation,
    blockType: 'markdown',
    allLocales: true,
    fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/resources/markdown/02', 'md'),
  },
  conclusion: {
    id: theory_MarkdownResources_Ids.conclusion,
    blockType: 'markdown',
    allLocales: true,
    fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/resources/markdown/03', 'md'),
  },
} satisfies Record<keyof typeof theory_MarkdownResources_Ids, MarkdownResource_AllLocales_Config>;
