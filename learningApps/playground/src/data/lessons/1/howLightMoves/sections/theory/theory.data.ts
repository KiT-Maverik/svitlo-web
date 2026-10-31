import { buildLessonSectionConfig } from '@svitlo/engine/builders';
import {theory_Scenes} from './scenes/scenes.data';

export const theory_Section_Data = buildLessonSectionConfig({
  id: '32376510-b49a-5da8-91d7-e13cf162c9f9',
  skippable: false,
  content: theory_Scenes,
});
