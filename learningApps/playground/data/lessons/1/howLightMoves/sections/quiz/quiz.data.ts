import {
  defineContentBlockCatalog,
  type ContentBlock_Quiz,
  type Question_SelectOneAnswer,
  type ContentBlock_Catalog_DataFor,
  type Section,
} from '@svitlo/engine/content';
import type { quizDefinition } from '@/data/lessons/1/howLightMoves/sections/quiz/quiz.definition';
import { airVacuumSpeed_Question_Data } from '../../questions/airVacuumSpeed.data';
import { fastestMedium_Question_Data } from '../../questions/fastestMedium.data';
import { lightRayDirection_Question_Data } from '../../questions/lightRayDirection.data';
import { lightSpeedInWater_Question_Data } from '../../questions/lightSpeedInWater.data';
import { lightTravelsStraight_Question_Data } from '../../questions/lightTravelsStraight.data';
import { opaqueObjectShadow_Question_Data } from '../../questions/opaqueObjectShadow.data';
import { quiz } from './quiz';

const quizBlock = {
  id: 'd1eb7813-c3f5-5d41-a6e4-42a4d379db9b',
  slug: 'quiz' as const,
  welcome: quiz.welcome,
  feedbackMode: 'immediate',
  grading: { mode: 'percentage', successThreshold: 70 },
  interaction: {
    retries: -1,
    showErrors: true,
    showCorrectAnswers: true,
    allowExplanations: true,
    allowDeferring: true,
    allowQuestionNavigation: true,
    skippable: true,
  },
  questions: {
    lightTravelsStraight: lightTravelsStraight_Question_Data,
    lightRayDirection: lightRayDirection_Question_Data,
    fastestMedium: fastestMedium_Question_Data,
    lightSpeedInWater: lightSpeedInWater_Question_Data,
    airVacuumSpeed: airVacuumSpeed_Question_Data,
    opaqueObjectShadow: opaqueObjectShadow_Question_Data,
  } satisfies Record<keyof typeof quizDefinition.content.quiz.quiz.questions, Question_SelectOneAnswer<'data'>>,
  results: { visibility: 'immediate', showScore: true },
  screen: {
    ending: { success: { showDefaultContent: true }, fail: { showDefaultContent: true } },
  },
} satisfies ContentBlock_Quiz<'data'>;

export const quizData = {
  id: '2a02b81f-dbd6-58d8-9711-4deb97312a56',
  slug: 'quiz' as const,
  title: quiz.name,
  navigationLabel: quiz.name,
  skippable: true,
  content: defineContentBlockCatalog({
    quiz: { quiz: quizBlock },
  } satisfies ContentBlock_Catalog_DataFor<typeof quizDefinition.content>),
} satisfies Section<'data'>;
