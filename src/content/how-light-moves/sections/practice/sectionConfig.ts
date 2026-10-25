import type { LessonSection_Config } from '@/types/configs/lesson.types';
import { textResource } from '../../contentResources';

export const practiceSectionConfig: LessonSection_Config = {
  id: '60032520-2238-5600-a38c-02b7ac0b8695',
  name: textResource('3b5ac8f2-e075-59ed-bc54-04b3697f8635', 'Практика'),
  skippable: true,
  content: [textResource('6e9b3471-a055-546f-8502-87df18302f6f', 'Порівняй швидкість світла у вакуумі, повітрі та воді.')],
};
