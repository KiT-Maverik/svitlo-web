import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SelectMultipleAnswersQuestionExtensions {}
export interface SelectMultipleAnswersQuestion extends BaseQuestion, SelectMultipleAnswersQuestionExtensions {
  type: 'multiple-select';
  options: Item[]; correctIds: string[];
}
