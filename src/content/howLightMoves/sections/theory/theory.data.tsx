import type { LessonSection_Config } from '@types';
import type { MarkdownResource_AllLocales_Config } from '@types';
import { createLocalizedFileLocations } from '@/utils';
import { scene } from './resources/scenes';
import { name } from './resources/text';
import { id } from '../../howLightMoves.constants';

const introduction: MarkdownResource_AllLocales_Config = {
  id: '6238256c-30f9-542d-962f-bcd37bcb6cfb',
  blockType: 'markdown',
  allLocales: true,
  fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/resources/markdown/01', 'md'),
};

const continuation: MarkdownResource_AllLocales_Config = {
  id: '9d56030c-d6fb-43b1-b4ce-e3eb95727320',
  blockType: 'markdown',
  allLocales: true,
  fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/resources/markdown/02', 'md'),
};

const conclusion: MarkdownResource_AllLocales_Config = {
  id: '4e5667d0-42a2-4050-9730-458503c7c9aa',
  blockType: 'markdown',
  allLocales: true,
  fileLocation: createLocalizedFileLocations('/content/howLightMoves/sections/theory/resources/markdown/03', 'md'),
};

export const theory: LessonSection_Config = {
  id: id.section.theory,
  lessonId: id.lesson,
  name,
  skippable: false,
  content: [
    introduction,
    scene.lightRayDiagram,
    continuation,
    scene.lightPropagationSimulation,
    conclusion,
    scene.theoryCheckpoint,
  ],
};
