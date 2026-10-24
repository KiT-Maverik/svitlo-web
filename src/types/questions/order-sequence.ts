import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface OrderSequenceQuestionExtensions {}
export interface OrderSequenceQuestion extends BaseQuestion, OrderSequenceQuestionExtensions {
  type: 'ordering';
  items: Item[]; correctOrder: string[];
}
