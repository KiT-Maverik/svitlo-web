import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface OrderingQuestionExtensions {}
export interface OrderingQuestion extends BaseQuestion, OrderingQuestionExtensions {
  type: 'ordering';
  items: Item[]; correctOrder: string[];
}
