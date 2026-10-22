import type { BaseQuestion } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NumericQuestionExtensions {}
export interface NumericQuestion extends BaseQuestion, NumericQuestionExtensions {
  type: 'numeric';
  expected: number; tolerance: number; unit?: string;
}
