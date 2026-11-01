import { buildLessonSectionConfig } from '@svitlo/engine/builders';
import { practice_SceneContentBlocks_Data } from './contentBlocks/scenes/index.data';
import { name_TextContentBlock_Data, task_TextContentBlock_Data } from './contentBlocks/text/index.data';
import { howLightMoves_Lesson_Ids } from '../../howLightMoves.ids';

export const practice_Section_Data = buildLessonSectionConfig({
  id: '562f4c02-6ea0-55f0-900d-7d90e60bc314',
  skippable: true,
  content: [task_TextContentBlock_Data, practice_SceneContentBlocks_Data.practice],
});
