'use client';

import type { ComponentType } from 'react';
import type { AnswerMap, CheckResult, QuestionOf, QuestionType } from '../../types/questions';
import type { InteractionProps } from './interaction-props';
import { checkers } from './check';
import { BlockBuilder, FillBlanksDrag, FillBlanksText, Matching, MultipleSelect, Numeric, Ordering, ShortText, SingleSelect } from './interactions';
export interface QuestionEntry<K extends QuestionType> {
  Interaction: ComponentType<InteractionProps<K>>;
  check: (question: QuestionOf<K>, value: AnswerMap[K]) => CheckResult;
  initial: (question: QuestionOf<K>) => AnswerMap[K];
}
export const questionRegistry: { [K in QuestionType]: QuestionEntry<K> } = {
  'single-select': { Interaction: SingleSelect, check: checkers['single-select'], initial: () => null },
  'multiple-select': { Interaction: MultipleSelect, check: checkers['multiple-select'], initial: () => [] },
  matching: { Interaction: Matching, check: checkers.matching, initial: () => ({}) },
  'short-text': { Interaction: ShortText, check: checkers['short-text'], initial: () => '' },
  numeric: { Interaction: Numeric, check: checkers.numeric, initial: () => '' },
  ordering: { Interaction: Ordering, check: checkers.ordering, initial: q => q.items.map(i => i.id) },
  'block-builder': { Interaction: BlockBuilder, check: checkers['block-builder'], initial: () => [] },
  'fill-blanks-drag': { Interaction: FillBlanksDrag, check: checkers['fill-blanks-drag'], initial: q => Object.fromEntries(q.parts.filter(part => part.type === 'blank').map(part => [part.id, null])) },
  'fill-blanks-text': { Interaction: FillBlanksText, check: checkers['fill-blanks-text'], initial: q => Object.fromEntries(q.parts.filter(part => part.type === 'blank').map(part => [part.id, ''])) },
};
