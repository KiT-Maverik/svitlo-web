import type { Lesson_Config } from '@/types/configs/lesson.types';
import { practiceSectionConfig } from './sections/practice/sectionConfig';
import { quizSectionConfig, lightQuestions } from './sections/quiz/sectionConfig';
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

export { lightQuestions };

export const media = [
  { id: '08c3bae5-081a-5afc-bccf-e44078e137f2', title: 'Вакуум', index: 1 },
  { id: '21733db1-2e1a-55cc-80c2-08e68fec1d90', title: 'Повітря', index: 1.000293 },
  { id: 'f42370dc-1de2-59bf-93a0-0e304f9021f0', title: 'Вода', index: 1.333 },
] as const;

export const LIGHT_SPEED_KM_S = 299792.458;
