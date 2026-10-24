import type { NonEmptyResourceArray, Resource, TextResource } from '../resources';
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

export interface FlashcardConfig {
  includeInLessonSet: boolean;
}

export interface Question_ContentBase {
  id: string;
  type: QuestionType;
  restrictions: Disability[];
  content: NonEmptyResourceArray;
  flashcardConfig?: FlashcardConfig;
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
  correctSequence: NonEmptyResourceArray<TextResource>;
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

export interface MatchBlocks_QuestionContent extends Question_ContentBase {
  type: 'match-blocks';
  map: {
    left: NonEmptyResourceArray;
    right: NonEmptyResourceArray;
  };
}

export interface OrderSequence_QuestionContent extends Question_ContentBase {
  type: 'order-sequence';
  sequence: NonEmptyResourceArray;
}

export interface BasicAnswersBlock<CorrectAnswer extends Resource | NonEmptyResourceArray> {
  answers: {
    correct: CorrectAnswer;
    incorrect: NonEmptyResourceArray;
    distractors: NonEmptyResourceArray;
  }
}

export interface SelectOneAnswer_QuestionContent extends Question_ContentBase, BasicAnswersBlock<Resource> {
  type: 'select-one-answer';
}

export interface SelectMultipleAnswers_QuestionContent extends Question_ContentBase, BasicAnswersBlock<NonEmptyResourceArray> {
  type: 'select-multiple-answers';
}
