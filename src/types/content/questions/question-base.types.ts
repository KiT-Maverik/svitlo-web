import type { Resource, TextResource } from '../resources';
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
  placeholder: TextResource;
}

export interface AnswerWithText_QuestionContent extends Question_ContentBase {
  type: 'answer-with-text';
  correctAnswer: TextResource[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: TextResource;
}

export interface BuildAnswerWithBlocks_QuestionContent extends Question_ContentBase {
  type: 'build-answer-with-blocks';
  correctSequence: [TextResource, ...TextResource[]];
  distractors: TextResource[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: TextResource;
}

export interface FillBlanksSlot {
  selector: string;
  correctAnswer: TextResource;
}

export interface FillBlanksWithBlocks_QuestionContent extends Question_ContentBase {
  type: 'fill-blanks-with-blocks';
  placeholder: TextResource;
  distractors: TextResource[];
  slots: FillBlanksSlot[];
}

export interface FillBlanksWithText_QuestionContent extends Question_ContentBase {
  type: 'fill-blanks-with-text';
  placeholder: TextResource;
  distractors: TextResource[];
  slots: FillBlanksSlot[];
}
