import { buildLessonConfig } from '@svitlo/engine/builders';
import { locales as rayLocales } from './sections/theory/contentBlocks/scenes/LightRayDiagram/lightRayDiagram.locale';
import { locales as simulationLocales } from './sections/theory/contentBlocks/scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import { locales as checkpointLocales } from './sections/theory/contentBlocks/scenes/Checkpoint/Checkpoint.locale';
import { locales as practiceLocales } from './sections/practice/contentBlocks/scenes/Showcase/Showcase.locale';
import { howLightMoves_Sections_Ids } from './sections/index.ids';
import { howLightMoves_TextContentBlocks_Ids } from './contentBlocks/text/index.ids';

export const howLightMoves_Lesson_Data = buildLessonConfig({
  id: 'd3048d21-8690-5255-b62c-984c69ac272c',
  slug: 'howLightMoves',
  requireQuiz: true,
  sections: {
    allowNavigation: true,
    allowSkipping: true,
    showIndexes: true,
    content: [howLightMoves_Sections_Ids.theory, howLightMoves_Sections_Ids.practice, howLightMoves_Sections_Ids.quiz],
  },
});
