import { buildLessonConfig } from '@svitlo/engine/builders';
import { locales as rayLocales } from './sections/theory/resources/scenes/LightRayDiagram/lightRayDiagram.locale';
import { locales as simulationLocales } from './sections/theory/resources/scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import { locales as checkpointLocales } from './sections/theory/resources/scenes/Checkpoint/Checkpoint.locale';
import { locales as practiceLocales } from './sections/practice/resources/scenes/Showcase/Showcase.locale';
import { howLightMoves_Lesson_Ids } from './howLightMoves.ids';
import { howLightMoves_Sections_Ids } from './sections/index.ids';
import { howLightMoves_TextResources_Ids } from './resources/text/index.ids';

export const howLightMoves_Lesson_Data = buildLessonConfig({
  id: howLightMoves_Lesson_Ids.howLightMoves,
  slug: 'how-light-moves',
  title: howLightMoves_TextResources_Ids.name,
  requireQuiz: true,
  sceneLocales: {
    ray: rayLocales,
    simulation: simulationLocales,
    checkpoint: checkpointLocales,
    practice: practiceLocales,
  },
  sections: {
    allowNavigation: true,
    allowSkipping: true,
    showIndexes: true,
    content: [howLightMoves_Sections_Ids.theory, howLightMoves_Sections_Ids.practice, howLightMoves_Sections_Ids.quiz],
  },
});
