import type { Lesson_Config } from '@/types/configs/lesson.types';
import { practiceSectionConfig } from './sections/practice/sectionConfig';
import { quizSectionConfig } from './sections/quiz/sectionConfig';
import { theorySectionConfig } from './sections/theory/sectionConfig';

export const lightLesson: Lesson_Config = {
  id: 'd3048d21-8690-5255-b62c-984c69ac272c',
  slug: 'how-light-moves',
  title: {
    id: 'd5ee2ac8-0d95-5f98-8f16-31400ea7a85b',
    blockType: 'text',
    allLocales: false,
    value: { 'uk-UA': 'Як рухається світло' },
  },
  requireQuiz: true,
  sections: {
    allowNavigation: true,
    allowSkipping: true,
    showIndexes: true,
    content: [theorySectionConfig, practiceSectionConfig, quizSectionConfig],
  },
};
