'use client';

import type { ComponentType } from 'react';
import type { AnswerMap, CheckResult, QuestionOf, QuestionType } from '@types';
import type { InteractionProps } from './interaction-props';
import { checkers } from './check';
import { BuildAnswerWithBlocks, FillBlanksWithBlocks, FillBlanksWithText, MatchBlocks, SelectMultipleAnswers, AnswerWithNumber, OrderSequence, AnswerWithText, SelectOneAnswer } from './interactions';
export interface QuestionEntry<K extends QuestionType> {
  Interaction: ComponentType<InteractionProps<K>>;
  check: (question: QuestionOf<K>, value: AnswerMap[K]) => CheckResult;
  initial: (question: QuestionOf<K>) => AnswerMap[K];
}
export const questionRegistry: { [K in QuestionType]: QuestionEntry<K> } = {
  'single-select': { Interaction: SelectOneAnswer, check: checkers['single-select'], initial: () => null },
  'multiple-select': { Interaction: SelectMultipleAnswers, check: checkers['multiple-select'], initial: () => [] },
  matching: { Interaction: MatchBlocks, check: checkers.matching, initial: () => ({}) },
  'short-text': { Interaction: AnswerWithText, check: checkers['short-text'], initial: () => '' },
  numeric: { Interaction: AnswerWithNumber, check: checkers.numeric, initial: () => '' },
  ordering: { Interaction: OrderSequence, check: checkers.ordering, initial: q => q.items.map(i => i.id) },
  'block-builder': { Interaction: BuildAnswerWithBlocks, check: checkers['block-builder'], initial: () => [] },
  'fill-blanks-drag': { Interaction: FillBlanksWithBlocks, check: checkers['fill-blanks-drag'], initial: q => Object.fromEntries(q.parts.filter(part => part.type === 'blank').map(part => [part.id, null])) },
  'fill-blanks-text': { Interaction: FillBlanksWithText, check: checkers['fill-blanks-text'], initial: q => Object.fromEntries(q.parts.filter(part => part.type === 'blank').map(part => [part.id, ''])) },
};
