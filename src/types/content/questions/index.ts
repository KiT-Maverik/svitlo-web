import type { ContentQuestionBase, ContentQuestionType } from './question-base.types';

export type { Disability } from './disabilities.types';
export type {
  ContentQuestionBase,
  ContentQuestionType,
  QuestionContent,
} from './question-base.types';

/** Union of all content question kinds. */
export type ContentQuestion = {
  [Type in ContentQuestionType]: ContentQuestionBase & { type: Type }
}[ContentQuestionType];
