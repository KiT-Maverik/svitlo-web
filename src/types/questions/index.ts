import type { SingleSelectQuestion } from './single-select';
import type { MultipleSelectQuestion } from './multiple-select';
import type { MatchingQuestion } from './matching';
import type { ShortTextQuestion } from './short-text';
import type { NumericQuestion } from './numeric';
import type { OrderingQuestion } from './ordering';
import type { BlockBuilderQuestion } from './block-builder';
import type { FillBlanksDragQuestion, FillBlanksTextQuestion } from './fill-blanks';
export type { SingleSelectQuestion, SingleSelectQuestionExtensions } from './single-select';
export type { MultipleSelectQuestion, MultipleSelectQuestionExtensions } from './multiple-select';
export type { MatchingQuestion, MatchingQuestionExtensions } from './matching';
export type { ShortTextQuestion, ShortTextQuestionExtensions } from './short-text';
export type { NumericQuestion, NumericQuestionExtensions } from './numeric';
export type { OrderingQuestion, OrderingQuestionExtensions } from './ordering';
export type { BlockBuilderQuestion, BlockBuilderQuestionExtensions } from './block-builder';
export type { FillBlankPart, FillBlanksDragQuestion, FillBlanksTextQuestion } from './fill-blanks';
export type * from './base';
export type * from './answers';
export type * from './results';
import type { AnswerMap } from './answers';
export const QuestionType = {
  SingleSelect: 'single-select',
  MultipleSelect: 'multiple-select',
  Matching: 'matching',
  ShortText: 'short-text',
  Numeric: 'numeric',
  Ordering: 'ordering',
  BlockBuilder: 'block-builder',
  FillBlanksDrag: 'fill-blanks-drag',
  FillBlanksText: 'fill-blanks-text',
} as const;
export interface DefinitionMap {
  'single-select': SingleSelectQuestion;
  'multiple-select': MultipleSelectQuestion;
  'matching': MatchingQuestion;
  'short-text': ShortTextQuestion;
  'numeric': NumericQuestion;
  'ordering': OrderingQuestion;
  'block-builder': BlockBuilderQuestion;
  'fill-blanks-drag': FillBlanksDragQuestion;
  'fill-blanks-text': FillBlanksTextQuestion;
}
export type QuestionType = keyof DefinitionMap;
export type QuestionOf<K extends QuestionType> = DefinitionMap[K] & { type: K };
export type Question = { [K in QuestionType]: QuestionOf<K> }[QuestionType];
export type Answer = { [K in QuestionType]: { type: K; value: AnswerMap[K] } }[QuestionType];
export type Submission = { [K in QuestionType]: { question: QuestionOf<K>; answer: { type: K; value: AnswerMap[K] } } }[QuestionType];
