import type { LessonSection_Config } from '@types';
import { theory_MarkdownResources_Data } from './resources/markdown/index.data';
import { theory_SceneResources_Data } from './resources/scenes/index.data';
import { name_TextResource_Data } from './resources/text/index.data';
import { theory_Section_Ids } from './theory.ids';
import { howLightMoves_Lesson_Ids } from '../../howLightMoves.ids';

export const theory_Section_Data: LessonSection_Config = {
  id: theory_Section_Ids.theory,
  lessonId: howLightMoves_Lesson_Ids.howLightMoves,
  name: name_TextResource_Data,
  skippable: false,
  content: [
    theory_MarkdownResources_Data.introduction,
    theory_SceneResources_Data.lightRayDiagram,
    theory_MarkdownResources_Data.continuation,
    theory_SceneResources_Data.lightPropagationSimulation,
    theory_MarkdownResources_Data.conclusion,
    theory_SceneResources_Data.theoryCheckpoint,
  ],
};
