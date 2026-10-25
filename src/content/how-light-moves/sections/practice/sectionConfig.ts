import type { LessonSection_Config } from '@/types/configs/lesson.types';
import { textResource } from '../../contentResources';

export const practiceSectionConfig: LessonSection_Config = {
  id: 'practice',
  name: textResource('section-practice', 'Практика'),
  skippable: true,
  content: [textResource('practice-content', 'Порівняй швидкість світла у вакуумі, повітрі та воді.')],
};
