import type { QuizConfig } from '@/types/configs/quiz.types';
import { createTextResource } from '@/utils/createTextResource/createTextResource';
import { questionBank } from './questions';

export const quizSectionConfig: QuizConfig = {
  id: '557ced91-32c2-5798-a114-19a63e6d35b6',
  sectionId: '2b17e601-474e-551c-a556-a42a8e653c31',
  feedbackMode: 'immediate',
  grading: { mode: 'percentage', successThreshold: 70 },
  interaction: { retries: -1, showErrors: true, showCorrectAnswers: true, allowExplanations: true, allowDeferring: true, allowQuestionNavigation: true, skippable: true },
  questionBank,
  results: { visibility: 'immediate', showScore: true },
  screen: {
    welcome: {
      resources: [
        createTextResource(
          '485c38a3-25f7-5c47-be4a-bfaa32e9424e',
          { 'uk-UA': 'Перевірмо, як рухається світло.' },
          { locales: { only: ['uk-UA'] } },
        ),
      ],
    },
    ending: { success: { showDefaultContent: true }, fail: { showDefaultContent: true } },
  },
};
