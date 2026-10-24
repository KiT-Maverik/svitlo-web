import type { AnswerWithNumber_QuestionContent } from './answerWithNumber_questionContent.types';
import type { AnswerWithText_QuestionContent } from './answerWithText_questionContent.types';
import type { Question_ContentBase, QuestionType } from './question-base.types';

export type {
  Question_ContentBase,
  QuestionType,
} from './question-base.types';
export type { AnswerWithNumber_QuestionContent } from './answerWithNumber_questionContent.types';
export type { AnswerWithText_QuestionContent } from './answerWithText_questionContent.types';

/** Union of all content question kinds. */
export type ContentQuestion = {
  [Type in QuestionType]: Type extends 'answer-with-number'
    ? AnswerWithNumber_QuestionContent
    : Type extends 'answer-with-text'
      ? AnswerWithText_QuestionContent
      : Question_ContentBase & { type: Type }
}[QuestionType];
