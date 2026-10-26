import type { ContentQuestion } from '../content/questions';
import type { Resource_Config } from '../content/resources';
import type { NonEmptyArray } from '../misc.types';

type Question = ContentQuestion & { number: number; weight: number }

export type QuizEndingScreenConfig =
  | {
      showDefaultContent: true;
      resources?: NonEmptyArray<Resource_Config>;
    }
  | {
      showDefaultContent: false;
      resources: NonEmptyArray<Resource_Config>;
    };

export interface QuizEndingScreensConfig {
  success: QuizEndingScreenConfig;
  fail: QuizEndingScreenConfig;
}

export interface QuizConfig {
  feedbackMode: 'immediate' | 'after-completion';
  grading?: {
    mode: 'percentage' | 'points';
    successThreshold: number;
  };
  id: string
  interaction: {
    /** -1 means unlimited retries, 0 disables retries, positive values set the limit. */
    retries: number;
    showErrors: boolean;
    showCorrectAnswers: boolean;
    allowExplanations: boolean;
    allowDeferring: boolean;
    allowQuestionNavigation: boolean;
    skippable: boolean;
  };
  maxDuration?: number;
  questionBank: [
    Question,
    ...Question[],
  ];
  results: {
    visibility: 'immediate' | 'after-review' | 'hidden';
    showScore: boolean;
  };
  screen: {
    welcome?: { resources: NonEmptyArray<Resource_Config> };
    ending?: QuizEndingScreensConfig;
  };
  sectionId: string;
}
