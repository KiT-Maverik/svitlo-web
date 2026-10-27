import type { Resource, Resource_Config, TextResource, TextResource_Config } from './resource.types';
import type { NonEmptyArray } from '../misc.types';
import type { Disability } from '../disabilities.types';

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

type Question_Resource = Resource | Resource_Config;
type Question_TextResource = TextResource | TextResource_Config;

export interface Question_Base<R extends Question_Resource = Resource, T extends Question_TextResource = TextResource> {
  id: string;
  type: QuestionType;
  restrictions: Disability[];
  content: NonEmptyArray<R>;
  explanation?: T;
  flashcardConfig?: FlashcardConfig;
}

export type Question_Base_Config = Question_Base<Resource_Config, TextResource_Config>;

export interface AnswerWithNumber_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'answer-with-number';
  correctAnswer: number[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: T;
}

export type AnswerWithNumber_Question_Config = AnswerWithNumber_Question<Resource_Config, TextResource_Config>;

export interface AnswerWithText_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'answer-with-text';
  correctAnswer: T[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: T;
}

export type AnswerWithText_Question_Config = AnswerWithText_Question<Resource_Config, TextResource_Config>;

export interface BuildAnswerWithBlocks_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'build-answer-with-blocks';
  correctSequence: NonEmptyArray<T>;
  distractors: T[];
  /** Intentionally mandatory; use this property to provide formatting insights. */
  placeholder: T;
}

export type BuildAnswerWithBlocks_Question_Config = BuildAnswerWithBlocks_Question<
  Resource_Config,
  TextResource_Config
>;

export interface FillBlanksSlot<T extends Question_TextResource = TextResource> {
  selector: string;
  correctAnswer: T;
}

export type FillBlanksSlot_Config = FillBlanksSlot<TextResource_Config>;

export interface FillBlanksWithBlocks_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'fill-blanks-with-blocks';
  placeholder: T;
  distractors: T[];
  slots: FillBlanksSlot<T>[];
}

export type FillBlanksWithBlocks_Question_Config = FillBlanksWithBlocks_Question<Resource_Config, TextResource_Config>;

export interface FillBlanksWithText_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'fill-blanks-with-text';
  placeholder: T;
  distractors: T[];
  slots: FillBlanksSlot<T>[];
}

export type FillBlanksWithText_Question_Config = FillBlanksWithText_Question<Resource_Config, TextResource_Config>;

export interface MatchBlocks_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'match-blocks';
  map: {
    left: NonEmptyArray<R>;
    right: NonEmptyArray<R>;
  };
}

export type MatchBlocks_Question_Config = MatchBlocks_Question<Resource_Config, TextResource_Config>;

export interface OrderSequence_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
> extends Question_Base<R, T> {
  type: 'order-sequence';
  sequence: NonEmptyArray<R>;
}

export type OrderSequence_Question_Config = OrderSequence_Question<Resource_Config, TextResource_Config>;

export interface BasicAnswersBlock<
  R extends Question_Resource = Resource,
  CorrectAnswer extends R | NonEmptyArray<R> = R,
> {
  answers: {
    correct: CorrectAnswer;
    incorrect: NonEmptyArray<R>;
    distractors: NonEmptyArray<R>;
  };
}

export type BasicAnswersBlock_Config<
  CorrectAnswer extends Resource_Config | NonEmptyArray<Resource_Config> = Resource_Config,
> = BasicAnswersBlock<Resource_Config, CorrectAnswer>;

export type SelectOneAnswer_Answers = BasicAnswersBlock<Resource, Resource>['answers'];
export type SelectOneAnswer_Answers_Config = BasicAnswersBlock_Config<Resource_Config>['answers'];

export type SelectMultipleAnswers_Answers = BasicAnswersBlock<Resource, NonEmptyArray<Resource>>['answers'];
export type SelectMultipleAnswers_Answers_Config = BasicAnswersBlock_Config<NonEmptyArray<Resource_Config>>['answers'];

export interface SelectOneAnswer_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
>
  extends Question_Base<R, T>, BasicAnswersBlock<R, R> {
  type: 'select-one-answer';
}

export type SelectOneAnswer_Question_Config = SelectOneAnswer_Question<Resource_Config, TextResource_Config>;

export interface SelectMultipleAnswers_Question<
  R extends Question_Resource = Resource,
  T extends Question_TextResource = TextResource,
>
  extends Question_Base<R, T>, BasicAnswersBlock<R, NonEmptyArray<R>> {
  type: 'select-multiple-answers';
}

export type SelectMultipleAnswers_Question_Config = SelectMultipleAnswers_Question<
  Resource_Config,
  TextResource_Config
>;

export type Question_Config =
  | AnswerWithNumber_Question_Config
  | AnswerWithText_Question_Config
  | BuildAnswerWithBlocks_Question_Config
  | FillBlanksWithBlocks_Question_Config
  | FillBlanksWithText_Question_Config
  | MatchBlocks_Question_Config
  | OrderSequence_Question_Config
  | SelectMultipleAnswers_Question_Config
  | SelectOneAnswer_Question_Config;

export type Question =
  | AnswerWithNumber_Question
  | AnswerWithText_Question
  | BuildAnswerWithBlocks_Question
  | FillBlanksWithBlocks_Question
  | FillBlanksWithText_Question
  | MatchBlocks_Question
  | OrderSequence_Question
  | SelectMultipleAnswers_Question
  | SelectOneAnswer_Question;
