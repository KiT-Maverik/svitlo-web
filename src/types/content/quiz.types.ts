import type { Question, Question_Config } from './question.types';
import type { Resource, Resource_Config } from './resource.types';
import type { NonEmptyArray } from '../misc.types';

type QuizQuestion = Question_Config & { number: number; weight: number }

export type Quiz_EndingScreen_Config =
  | {
      showDefaultContent: true;
      resources?: NonEmptyArray<Resource_Config>;
    }
  | {
      showDefaultContent: false;
      resources: NonEmptyArray<Resource_Config>;
    };

export interface Quiz_EndingScreens_Config {
  success: Quiz_EndingScreen_Config;
  fail: Quiz_EndingScreen_Config;
}

export interface Quiz_Config {
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
    QuizQuestion,
    ...QuizQuestion[],
  ];
  results: {
    visibility: 'immediate' | 'after-review' | 'hidden';
    showScore: boolean;
  };
  screen: {
    welcome?: { resources: NonEmptyArray<Resource_Config> };
    ending?: Quiz_EndingScreens_Config;
  };
  sectionId: string;
}

export type Quiz_EndingScreen =
  | {
      showDefaultContent: true;
      resources?: NonEmptyArray<Resource>;
    }
  | {
      showDefaultContent: false;
      resources: NonEmptyArray<Resource>;
    };

export interface Quiz_EndingScreens {
  success: Quiz_EndingScreen;
  fail: Quiz_EndingScreen;
}

export interface Quiz extends Omit<Quiz_Config, 'questionBank' | 'screen'> {
  questionBank: NonEmptyArray<Question & { number: number; weight: number }>;
  screen: {
    welcome?: { resources: NonEmptyArray<Resource> };
    ending?: Quiz_EndingScreens;
  };
}
