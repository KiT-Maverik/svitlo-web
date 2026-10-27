import type { LessonSection_Config } from '@types';
import { practice_SceneResources_Data } from './resources/scenes/index.data';
import { name_TextResource_Data, task_TextResource_Data } from './resources/text/index.data';
import { practice_Section_Ids } from './practice.ids';
import { howLightMoves_Lesson_Ids } from '../../howLightMoves.ids';

export const practice_Section_Data: LessonSection_Config = {
  id: practice_Section_Ids.practice,
  lessonId: howLightMoves_Lesson_Ids.howLightMoves,
  name: name_TextResource_Data,
  skippable: true,
  content: [task_TextResource_Data, practice_SceneResources_Data.practice],
};
