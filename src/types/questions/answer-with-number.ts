import type { BaseQuestion } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AnswerWithNumberQuestionExtensions {}
export interface AnswerWithNumberQuestion extends BaseQuestion, AnswerWithNumberQuestionExtensions {
  type: 'numeric';
  expected: number; tolerance: number; unit?: string;
}
