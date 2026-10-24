import type {
  AnswerWithNumber_QuestionContent,
  AnswerWithText_QuestionContent,
  BasicAnswersBlock,
  BuildAnswerWithBlocks_QuestionContent,
  FillBlanksWithBlocks_QuestionContent,
  FillBlanksWithText_QuestionContent,
  FillBlanksSlot,
  FlashcardConfig,
  MatchBlocks_QuestionContent,
  OrderSequence_QuestionContent,
  SelectMultipleAnswers_Answers,
  SelectMultipleAnswers_QuestionContent,
  SelectOneAnswer_Answers,
  SelectOneAnswer_QuestionContent,
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
  BasicAnswersBlock,
  BuildAnswerWithBlocks_QuestionContent,
  FillBlanksWithBlocks_QuestionContent,
  FillBlanksWithText_QuestionContent,
  FillBlanksSlot,
  FlashcardConfig,
  MatchBlocks_QuestionContent,
  OrderSequence_QuestionContent,
  SelectMultipleAnswers_Answers,
  SelectMultipleAnswers_QuestionContent,
  SelectOneAnswer_Answers,
  SelectOneAnswer_QuestionContent,
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
            : Type extends 'match-blocks'
              ? MatchBlocks_QuestionContent
            : Type extends 'order-sequence'
              ? OrderSequence_QuestionContent
              : Type extends 'select-one-answer'
                ? SelectOneAnswer_QuestionContent
                : Type extends 'select-multiple-answers'
                  ? SelectMultipleAnswers_QuestionContent
      : Question_ContentBase & { type: Type }
}[QuestionType];
