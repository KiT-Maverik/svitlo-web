import type { Disability } from '../../disabilities.types';
import type { AssessmentMethodKey } from '../assessmentMethod.types';
import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config, Locale_ResponseParams } from '../locale.types';
import type { ContentBlock_Data_Meta, ContentBlock_Definition_Meta, ContentBlock_Response_Meta } from './common.types';

type Quiz_Answers<Value> = {
  correct: Record<string, Value>;
  incorrect: Record<string, Value>;
  distractors: Record<string, Value>;
};

type Quiz_Question_Definition = { type: 'select-one-answer' };

type Quiz_Question_Data = {
  id: string;
  type: 'select-one-answer';
  assessmentMethod: AssessmentMethodKey;
  restrictions: Disability[];
  question: Locale_Config;
  explanation: Record<string, Locale_Config>;
  answers: Quiz_Answers<Locale_Config>;
};

type Quiz_Question_Response = {
  id: string;
  type: 'select-one-answer';
  assessmentMethod: AssessmentMethodKey;
  restrictions: Disability[];
  question: string;
  explanation: Record<string, string>;
  answers: Quiz_Answers<string>;
};

type Quiz_Settings = {
  feedbackMode: 'immediate' | 'after-completion';
  grading?: { mode: 'percentage' | 'points'; successThreshold: number };
  interaction: {
    retries: number;
    showErrors: boolean;
    showCorrectAnswers: boolean;
    allowExplanations: boolean;
    allowDeferring: boolean;
    allowQuestionNavigation: boolean;
    skippable: boolean;
  };
  maxDuration?: number;
  results: { visibility: 'immediate' | 'after-review' | 'hidden'; showScore: boolean };
  screen: {
    ending?: {
      success: { showDefaultContent: true };
      fail: { showDefaultContent: true };
    };
  };
};

type ContentBlock_Quiz_Definition = ContentBlock_Definition_Meta<'quiz'> & {
  questions: Record<string, Quiz_Question_Definition>;
};

type ContentBlock_Quiz_Data = ContentBlock_Data_Meta & Quiz_Settings & {
  welcome: Locale_Config;
  questions: Record<string, Quiz_Question_Data>;
};

type ContentBlock_Quiz_Response = ContentBlock_Response_Meta & Locale_ResponseParams & Quiz_Settings & {
  welcome: string;
  questions: Record<string, Quiz_Question_Response>;
};

export type ContentBlock_Quiz<ConfigType extends ContentEntity_ConfigType> = {
  definition: ContentBlock_Quiz_Definition;
  data: ContentBlock_Quiz_Data;
  response: ContentBlock_Quiz_Response;
}[ConfigType];

export type ContentBlock_Quiz_Question<ConfigType extends ContentEntity_ConfigType> = {
  definition: Quiz_Question_Definition;
  data: Quiz_Question_Data;
  response: Quiz_Question_Response;
}[ConfigType];
