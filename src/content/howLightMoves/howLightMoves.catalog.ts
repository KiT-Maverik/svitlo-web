import type { LessonContentCatalog } from '@types';
import { name } from './resources/text';
import { theory } from './sections/theory/theory.data';
import { practice } from './sections/practice/practice.data';
import { quiz } from './sections/quiz/quiz.data';

export const howLightMovesCatalog = {
  text: { [name.id]: name },
  sections: {
    [theory.id]: theory,
    [practice.id]: practice,
    [quiz.sectionId]: quiz,
  },
} satisfies LessonContentCatalog;
