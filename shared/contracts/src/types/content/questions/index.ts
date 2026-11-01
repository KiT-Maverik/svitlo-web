import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_AnswerWithNumber } from './answerWithNumber.types';
import type { Question_AnswerWithText } from './answerWithText.types';
import type { Question_BuildAnswerWithBlocks } from './buildAnswerWithBlocks.types';
import type { Question_Type } from './common.types';
import type { Question_FillBlanksWithBlocks } from './fillBlanksWithBlocks.types';
import type { Question_FillBlanksWithText } from './fillBlanksWithText.types';
import type { Question_MatchBlocks } from './matchBlocks.types';
import type { Question_OrderSequence } from './orderSequence.types';
import type { Question_SelectMultipleAnswers } from './selectMultipleAnswers.types';
import type { Question_SelectOneAnswer } from './selectOneAnswer.types';

export type Question_Map<ConfigType extends ContentEntity_ConfigType> = {
  'answer-with-number': Question_AnswerWithNumber<ConfigType>;
  'answer-with-text': Question_AnswerWithText<ConfigType>;
  'build-answer-with-blocks': Question_BuildAnswerWithBlocks<ConfigType>;
  'fill-blanks-with-blocks': Question_FillBlanksWithBlocks<ConfigType>;
  'fill-blanks-with-text': Question_FillBlanksWithText<ConfigType>;
  'match-blocks': Question_MatchBlocks<ConfigType>;
  'order-sequence': Question_OrderSequence<ConfigType>;
  'select-multiple-answers': Question_SelectMultipleAnswers<ConfigType>;
  'select-one-answer': Question_SelectOneAnswer<ConfigType>;
};

export type QuestionV2<ConfigType extends ContentEntity_ConfigType> = Question_Map<ConfigType>[Question_Type];

export type {
  Question_AnswerWithNumber,
  Question_AnswerWithText,
  Question_BuildAnswerWithBlocks,
  Question_FillBlanksWithBlocks,
  Question_FillBlanksWithText,
  Question_MatchBlocks,
  Question_OrderSequence,
  Question_SelectMultipleAnswers,
  Question_SelectOneAnswer,
};
export type { Question_Type } from './common.types';
