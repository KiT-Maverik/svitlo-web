import type { Question, Question_Config } from './question.types';
import type {
  ContentBlock,
  ContentBlock_Config,
  TextContentBlock,
  TextContentBlock_Config,
} from './blocks/contentBlock.types';
import type { NonEmptyArray } from '../misc.types';

type QuizQuestion = Question_Config & { number: number; weight: number };

export type Quiz_EndingScreen_Config =
  | {
      showDefaultContent: true;
      contentBlocks?: NonEmptyArray<ContentBlock_Config>;
    }
  | {
      showDefaultContent: false;
      contentBlocks: NonEmptyArray<ContentBlock_Config>;
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
  id: string;
  lessonId: string;
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
  name: TextContentBlock_Config;
  questionBank: [QuizQuestion, ...QuizQuestion[]];
  results: {
    visibility: 'immediate' | 'after-review' | 'hidden';
    showScore: boolean;
  };
  screen: {
    welcome?: { contentBlocks: NonEmptyArray<ContentBlock_Config> };
    ending?: Quiz_EndingScreens_Config;
  };
  sectionId: string;
}

export type Quiz_EndingScreen =
  | {
      showDefaultContent: true;
      contentBlocks?: NonEmptyArray<ContentBlock>;
    }
  | {
      showDefaultContent: false;
      contentBlocks: NonEmptyArray<ContentBlock>;
    };

export interface Quiz_EndingScreens {
  success: Quiz_EndingScreen;
  fail: Quiz_EndingScreen;
}

export interface Quiz extends Omit<Quiz_Config, 'name' | 'questionBank' | 'screen'> {
  name: TextContentBlock;
  questionBank: NonEmptyArray<Question & { number: number; weight: number }>;
  screen: {
    welcome?: { contentBlocks: NonEmptyArray<ContentBlock> };
    ending?: Quiz_EndingScreens;
  };
}

/** An answer uses question and option IDs; numeric input keeps the entered text. */
export type QuizAnswer =
  | { type: 'select-one-answer'; value: string }
  | { type: 'select-multiple-answers'; value: string[] }
  | { type: 'match-blocks'; value: Record<string, string> }
  | { type: 'answer-with-text'; value: string }
  | { type: 'answer-with-number'; value: string }
  | { type: 'order-sequence'; value: string[] }
  | { type: 'build-answer-with-blocks'; value: string[] }
  | { type: 'fill-blanks-with-blocks'; value: Record<string, string | null> }
  | { type: 'fill-blanks-with-text'; value: Record<string, string> };

export interface QuizQuestionResult {
  status: 'correct' | 'incorrect';
  /** Points earned from this question's configured weight. */
  earnedWeight: number;
}

/** A missing entry in QuizState.answers means the question has not been visited. */
export type QuizQuestionState =
  | { status: 'draft'; answer: QuizAnswer; result?: never }
  | { status: 'deferred'; answer?: QuizAnswer; result?: never }
  | { status: 'submitted'; answer: QuizAnswer; result?: QuizQuestionResult };

export type QuizResult = { status: 'graded'; success: boolean; value: number } | { status: 'ungraded' };

interface QuizState_Base {
  /** Identifies this particular run; another run of the same quiz has another ID. */
  id: string;
  /** Refers to Quiz.id, which also identifies its configuration. */
  quizId: Quiz['id'];
}

interface QuizState_Progress extends QuizState_Base {
  startedAt: string;
  /** Keyed by question ID; a draft survives navigation, and a deferred question may have no answer. */
  answers: Record<string, QuizQuestionState>;
}

export type QuizState =
  | (QuizState_Base & { status: 'new'; startedAt?: never; answers?: never; completedAt?: never; result?: never })
  | (QuizState_Progress & { status: 'in-progress'; completedAt?: never; result?: never })
  | (QuizState_Progress & { status: 'finished'; completedAt: string; result: QuizResult });
