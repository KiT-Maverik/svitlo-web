import type { BaseQuestion, TextNormalization } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AnswerWithTextQuestionExtensions {}
export interface AnswerWithTextQuestion extends BaseQuestion, AnswerWithTextQuestionExtensions {
  type: 'short-text';
  acceptedAnswers: string[]; normalization: TextNormalization;
}
