import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SingleSelectQuestionExtensions {}
export interface SingleSelectQuestion extends BaseQuestion, SingleSelectQuestionExtensions {
  type: 'single-select';
  options: Item[]; correctId: string;
}
