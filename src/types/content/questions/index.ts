import type { ContentQuestionBase, ContentQuestionType } from './question-base.types';

export type {
  ContentQuestionBase,
  ContentQuestionType,
} from './question-base.types';

/** Union of all content question kinds. */
export type ContentQuestion = {
  [Type in ContentQuestionType]: ContentQuestionBase & { type: Type }
}[ContentQuestionType];
