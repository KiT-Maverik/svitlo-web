import type { LessonContentCatalog } from '@svitlo/engine/content';
import { name_TextResource_Data } from './resources/text/index.data';
import { practice_Section_Data } from './sections/practice/index.data';
import { quiz_Quiz_Data } from './sections/quiz/index.data';
import { theory_Section_Data } from './sections/theory/index.data';

export const howLightMovesCatalog = {
  text: { [name_TextResource_Data.id]: name_TextResource_Data },
  sections: {
    [theory_Section_Data.id]: theory_Section_Data,
    [practice_Section_Data.id]: practice_Section_Data,
    [quiz_Quiz_Data.sectionId]: quiz_Quiz_Data,
  },
} satisfies LessonContentCatalog;

// todo mAy be extra in our architecture
