import type { LessonSection_Config } from '@types';
import { createTextResource } from '@/utils';
import { scene } from './resources/scenes';
import { name } from './resources/text';
import { id } from './practice.constants';

export const practice: LessonSection_Config = {
  id: id.section.practice,
  name,
  skippable: true,
  content: [id.resource.text.task, scene.practice],
};
