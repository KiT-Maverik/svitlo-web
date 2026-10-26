import type {
  AnswerWithNumber_Question,
  AnswerWithNumber_Question_Config,
  AnswerWithText_Question,
  AnswerWithText_Question_Config,
  BuildAnswerWithBlocks_Question,
  BuildAnswerWithBlocks_Question_Config,
  FillBlanksWithBlocks_Question,
  FillBlanksWithBlocks_Question_Config,
  FillBlanksWithText_Question,
  FillBlanksWithText_Question_Config,
  MatchBlocks_Question,
  MatchBlocks_Question_Config,
  OrderSequence_Question,
  OrderSequence_Question_Config,
  SelectMultipleAnswers_Question,
  SelectMultipleAnswers_Question_Config,
  SelectOneAnswer_Question,
  SelectOneAnswer_Question_Config,
} from './question-base.types';

export type * from './question-base.types';

/** Question definition with localized resource configurations. */
export type Question_Config =
  | AnswerWithNumber_Question_Config
  | AnswerWithText_Question_Config
  | BuildAnswerWithBlocks_Question_Config
  | FillBlanksWithBlocks_Question_Config
  | FillBlanksWithText_Question_Config
  | MatchBlocks_Question_Config
  | OrderSequence_Question_Config
  | SelectMultipleAnswers_Question_Config
  | SelectOneAnswer_Question_Config;

/** Question instance with resources resolved to one locale. */
export type Question =
  | AnswerWithNumber_Question
  | AnswerWithText_Question
  | BuildAnswerWithBlocks_Question
  | FillBlanksWithBlocks_Question
  | FillBlanksWithText_Question
  | MatchBlocks_Question
  | OrderSequence_Question
  | SelectMultipleAnswers_Question
  | SelectOneAnswer_Question;
