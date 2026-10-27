import type { Quiz_Config } from '@types';
import { name_TextResource_Data, welcome_TextResource_Data } from './resources/text/index.data';
import {
  airVacuumSpeed_Question_Data,
  fastestMedium_Question_Data,
  lightRayDirection_Question_Data,
  lightSpeedInWater_Question_Data,
  lightTravelsStraight_Question_Data,
  opaqueObjectShadow_Question_Data,
} from './questions/index.data';
import { howLightMoves_Lesson_Ids } from '../../howLightMoves.ids';
import { quiz_Section_Ids, quiz_Quiz_Ids } from './quiz.ids';

export const quiz_Quiz_Data: Quiz_Config = {
  id: quiz_Quiz_Ids.quiz,
  sectionId: quiz_Section_Ids.quiz,
  lessonId: howLightMoves_Lesson_Ids.howLightMoves,
  name: name_TextResource_Data,
  feedbackMode: 'immediate',
  grading: { mode: 'percentage', successThreshold: 70 },
  interaction: { retries: -1, showErrors: true, showCorrectAnswers: true, allowExplanations: true, allowDeferring: true, allowQuestionNavigation: true, skippable: true },
  questionBank: [
    lightTravelsStraight_Question_Data,
    lightRayDirection_Question_Data,
    fastestMedium_Question_Data,
    lightSpeedInWater_Question_Data,
    airVacuumSpeed_Question_Data,
    opaqueObjectShadow_Question_Data,
  ],
  results: { visibility: 'immediate', showScore: true },
  screen: {
    welcome: {
      resources: [welcome_TextResource_Data],
    },
    ending: { success: { showDefaultContent: true }, fail: { showDefaultContent: true } },
  },
};
