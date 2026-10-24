import type {
  AnswerWithNumber_QuestionContent,
  AnswerWithText_QuestionContent,
  BuildAnswerWithBlocks_QuestionContent,
  FillBlanksWithBlocks_QuestionContent,
  FillBlanksWithText_QuestionContent,
  FillBlanksSlot,
  Question_ContentBase,
  QuestionType,
} from './question-base.types';

export type {
  Question_ContentBase,
  QuestionType,
} from './question-base.types';
export type {
  AnswerWithNumber_QuestionContent,
  AnswerWithText_QuestionContent,
  BuildAnswerWithBlocks_QuestionContent,
  FillBlanksWithBlocks_QuestionContent,
  FillBlanksWithText_QuestionContent,
  FillBlanksSlot,
} from './question-base.types';

/** Union of all content question kinds. */
export type ContentQuestion = {
  [Type in QuestionType]: Type extends 'answer-with-number'
    ? AnswerWithNumber_QuestionContent
    : Type extends 'answer-with-text'
      ? AnswerWithText_QuestionContent
      : Type extends 'build-answer-with-blocks'
        ? BuildAnswerWithBlocks_QuestionContent
        : Type extends 'fill-blanks-with-blocks'
          ? FillBlanksWithBlocks_QuestionContent
          : Type extends 'fill-blanks-with-text'
            ? FillBlanksWithText_QuestionContent
      : Question_ContentBase & { type: Type }
}[QuestionType];
