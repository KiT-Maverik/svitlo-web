import type { Lesson_Config } from '@/types/configs/lesson.types';
import { practiceSectionConfig } from './sections/practice/sectionConfig';
import { quizSectionConfig, lightQuestions } from './sections/quiz/sectionConfig';
import { theorySectionConfig } from './sections/theory/sectionConfig';

export const lightLesson: Lesson_Config = {
  id: 'light',
  title: {
    id: 'lesson-title',
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

export { lightQuestions };

export const media = [
  { id: 'vacuum', title: 'Вакуум', index: 1 },
  { id: 'air', title: 'Повітря', index: 1.000293 },
  { id: 'water', title: 'Вода', index: 1.333 },
] as const;

export const LIGHT_SPEED_KM_S = 299792.458;
