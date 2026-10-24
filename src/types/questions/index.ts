import type { SelectOneAnswerQuestion } from './select-one-answer';
import type { SelectMultipleAnswersQuestion } from './select-multiple-answers';
import type { MatchBlocksQuestion } from './match-blocks';
import type { AnswerWithTextQuestion } from './answer-with-text';
import type { AnswerWithNumberQuestion } from './answer-with-number';
import type { OrderSequenceQuestion } from './order-sequence';
import type { BuildAnswerWithBlocksQuestion } from './build-answer-with-blocks';
import type { FillBlanksWithBlocksQuestion, FillBlanksWithTextQuestion } from './fill-blanks';
export type { SelectOneAnswerQuestion, SelectOneAnswerQuestionExtensions } from './select-one-answer';
export type { SelectMultipleAnswersQuestion, SelectMultipleAnswersQuestionExtensions } from './select-multiple-answers';
export type { MatchBlocksQuestion, MatchBlocksQuestionExtensions } from './match-blocks';
export type { AnswerWithTextQuestion, AnswerWithTextQuestionExtensions } from './answer-with-text';
export type { AnswerWithNumberQuestion, AnswerWithNumberQuestionExtensions } from './answer-with-number';
export type { OrderSequenceQuestion, OrderSequenceQuestionExtensions } from './order-sequence';
export type { BuildAnswerWithBlocksQuestion, BuildAnswerWithBlocksQuestionExtensions } from './build-answer-with-blocks';
export type { FillBlankPart, FillBlanksWithBlocksQuestion, FillBlanksWithTextQuestion } from './fill-blanks';
export type * from './base';
export type * from './answers';
export type * from './results';
import type { AnswerMap } from './answers';
export const QuestionType = {
  SelectOneAnswer: 'single-select',
  SelectMultipleAnswers: 'multiple-select',
  MatchBlocks: 'matching',
  AnswerWithText: 'short-text',
  AnswerWithNumber: 'numeric',
  OrderSequence: 'ordering',
  BuildAnswerWithBlocks: 'block-builder',
  FillBlanksWithBlocks: 'fill-blanks-drag',
  FillBlanksWithText: 'fill-blanks-text',
} as const;
export interface DefinitionMap {
  'single-select': SelectOneAnswerQuestion;
  'multiple-select': SelectMultipleAnswersQuestion;
  'matching': MatchBlocksQuestion;
  'short-text': AnswerWithTextQuestion;
  'numeric': AnswerWithNumberQuestion;
  'ordering': OrderSequenceQuestion;
  'block-builder': BuildAnswerWithBlocksQuestion;
  'fill-blanks-drag': FillBlanksWithBlocksQuestion;
  'fill-blanks-text': FillBlanksWithTextQuestion;
}
export type QuestionType = keyof DefinitionMap;
export type QuestionOf<K extends QuestionType> = DefinitionMap[K] & { type: K };
export type Question = { [K in QuestionType]: QuestionOf<K> }[QuestionType];
export type Answer = { [K in QuestionType]: { type: K; value: AnswerMap[K] } }[QuestionType];
export type Submission = { [K in QuestionType]: { question: QuestionOf<K>; answer: { type: K; value: AnswerMap[K] } } }[QuestionType];
