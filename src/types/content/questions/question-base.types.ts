import type { Resource } from '../resources';
import type { Disability } from '../../disabilities.types';

/** Content question kinds supported by the reusable question widgets. */
export type ContentQuestionType =
  | 'select-one-answer'
  | 'select-multiple-answers'
  | 'match-blocks'
  | 'answer-with-text'
  | 'answer-with-number'
  | 'order-sequence'
  | 'build-answer-with-blocks'
  | 'fill-blanks-with-blocks'
  | 'fill-blanks-with-text';

export interface ContentQuestionBase {
  id: string;
  restrictions: Disability[];
  content: [
    Resource,
    ...Resource[]
  ];
}
