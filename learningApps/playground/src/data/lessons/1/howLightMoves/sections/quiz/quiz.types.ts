import type { AssessmentMethodKey } from '@svitlo/engine/content';
import type { LanguageCode } from '@svitlo/engine/localization';
import type { QuestionType } from '@svitlo/engine/content';
import type { Disability } from '@svitlo/engine';

export type Quiz_Section_Locale = {
  name: string;
  welcome: string;
};

export type Locale_Object = Record<LanguageCode, string>;
export type Quiz_Question_Locale = Locale_Object;
export type Quiz_Question_Entities = Record<string, Quiz_Question_Locale>;

export interface Question_Base {
  id: string;
  assessmentMethod: AssessmentMethodKey;
  type: QuestionType;
  restrictions?: Disability[];
  skillIds: string[];
}

export interface Question_SOA extends Question_Base {
  type: 'select-one-answer';
  answer: {
    correct: Record<string, Locale_Object>;
    incorrect: Record<string, Locale_Object>;
    distractors: Record<string, Locale_Object>;
  };
  question: Locale_Object;
}

export type HowLightMoves_Quiz_Question_Data = {
  id: string;
  assessmentMethod: AssessmentMethodKey;
  type: 'select-one-answer';
  restrictions: readonly [];
  content: readonly [Quiz_Question_Locale];
  explanation: Quiz_Question_Locale;
  answers: {
    correct: Quiz_Question_Locale;
    incorrect: readonly [Quiz_Question_Locale];
    distractors: readonly [Quiz_Question_Locale];
  };
};

export type HowLightMoves_Named_Quiz_Question_Data = Omit<
  HowLightMoves_Quiz_Question_Data,
  'content' | 'explanation' | 'answers'
> & {
  question: Quiz_Question_Locale;
  explanation: Quiz_Question_Entities;
  answers: {
    correct: Quiz_Question_Entities;
    incorrect: Quiz_Question_Entities;
    distractors: Quiz_Question_Entities;
  };
};
