import type { Lesson_Config } from '@types';
import { locales as rayLocales } from './sections/theory/resources/scenes/LightRayDiagram/lightRayDiagram.locale';
import { locales as simulationLocales } from './sections/theory/resources/scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import { locales as checkpointLocales } from './sections/theory/resources/scenes/Checkpoint/Checkpoint.locale';
import { locales as practiceLocales } from './sections/practice/resources/scenes/Practice/Practice.locale';
import { id } from './howLightMoves.constants';

export const howLightMoves = {
  id: id.lesson,
  slug: 'how-light-moves',
  title: id.resource.text.name,
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
    content: [id.section.theory, id.section.practice, id.section.quiz],
  },
} satisfies Lesson_Config;
