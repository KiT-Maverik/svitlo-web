import type { AssessmentMethodKey } from '@svitlo/engine/content';
import type { LanguageCode } from '@svitlo/engine/localization';

export type Quiz_Section_Locale = {
  name: string;
  welcome: string;
};

export type Quiz_Question_Locale = Record<LanguageCode, string>;
export type Quiz_Question_Entities = Record<string, Quiz_Question_Locale>;

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
