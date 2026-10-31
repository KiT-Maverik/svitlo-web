import { buildLessonSectionConfig } from '@svitlo/engine/builders';
import { practice_SceneResources_Data } from './resources/scenes/index.data';
import { name_TextResource_Data, task_TextResource_Data } from './resources/text/index.data';
import { howLightMoves_Lesson_Ids } from '../../howLightMoves.ids';

export const practice_Section_Data = buildLessonSectionConfig({
  id: '562f4c02-6ea0-55f0-900d-7d90e60bc314',
  skippable: true,
  content: [task_TextResource_Data, practice_SceneResources_Data.practice],
});
