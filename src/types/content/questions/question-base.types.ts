import type { Resource_Config, TextResource_Config } from '../resources';
import type { NonEmptyArray } from '../../misc.types';
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
  content: NonEmptyArray<Resource_Config>;
  explanation?: TextResource_Config;
  flashcardConfig?: FlashcardConfig;
}

export interface AnswerWithNumber_QuestionContent extends Question_ContentBase {
  type: 'answer-with-number';
  correctAnswer: number[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: TextResource_Config;
}

export interface AnswerWithText_QuestionContent extends Question_ContentBase {
  type: 'answer-with-text';
  correctAnswer: TextResource_Config[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: TextResource_Config;
}

export interface BuildAnswerWithBlocks_QuestionContent extends Question_ContentBase {
  type: 'build-answer-with-blocks';
  correctSequence: NonEmptyArray<TextResource_Config>;
  distractors: TextResource_Config[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: TextResource_Config;
}

export interface FillBlanksSlot {
  selector: string;
  correctAnswer: TextResource_Config;
}

export interface FillBlanksWithBlocks_QuestionContent extends Question_ContentBase {
  type: 'fill-blanks-with-blocks';
  placeholder: TextResource_Config;
  distractors: TextResource_Config[];
  slots: FillBlanksSlot[];
}

export interface FillBlanksWithText_QuestionContent extends Question_ContentBase {
  type: 'fill-blanks-with-text';
  placeholder: TextResource_Config;
  distractors: TextResource_Config[];
  slots: FillBlanksSlot[];
}

export interface MatchBlocks_QuestionContent extends Question_ContentBase {
  type: 'match-blocks';
  map: {
    left: NonEmptyArray<Resource_Config>;
    right: NonEmptyArray<Resource_Config>;
  };
}

export interface OrderSequence_QuestionContent extends Question_ContentBase {
  type: 'order-sequence';
  sequence: NonEmptyArray<Resource_Config>;
}

export interface BasicAnswersBlock<CorrectAnswer extends Resource_Config | NonEmptyArray<Resource_Config>> {
  answers: {
    correct: CorrectAnswer;
    incorrect: NonEmptyArray<Resource_Config>;
    distractors: NonEmptyArray<Resource_Config>;
  }
}

export type SelectOneAnswer_Answers = BasicAnswersBlock<Resource_Config>['answers'];

export type SelectMultipleAnswers_Answers = BasicAnswersBlock<NonEmptyArray<Resource_Config>>['answers'];

export interface SelectOneAnswer_QuestionContent extends Question_ContentBase, BasicAnswersBlock<Resource_Config> {
  type: 'select-one-answer';
}

export interface SelectMultipleAnswers_QuestionContent extends Question_ContentBase, BasicAnswersBlock<NonEmptyArray<Resource_Config>> {
  type: 'select-multiple-answers';
}
