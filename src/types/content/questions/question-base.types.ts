import type { Resource } from '../resources';
import type { Disability } from '../../disabilities.types';

/** Content question kinds supported by the reusable question widgets. */
export type QuestionType =
  | 'select-one-answer'
  | 'select-multiple-answers'
  | 'match-blocks'
  | 'answer-with-text'
  | 'answer-with-number'
  | 'order-sequence'
  | 'build-answer-with-blocks'
  | 'fill-blanks-with-blocks'
  | 'fill-blanks-with-text';

export interface Question_ContentBase {
  id: string;
  type: QuestionType;
  restrictions: Disability[];
  content: [
    Resource,
    ...Resource[]
  ];
}

export interface AnswerWithNumber_QuestionContent extends Question_ContentBase {
  type: 'answer-with-number';
  correctAnswer: number[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: string;
}

export interface AnswerWithText_QuestionContent extends Question_ContentBase {
  type: 'answer-with-text';
  correctAnswer: string[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: string;
}
