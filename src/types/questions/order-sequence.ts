import type { BaseQuestion, Item } from './base';
export interface OrderSequenceQuestion extends BaseQuestion {
  type: 'ordering';
  items: Item[]; correctOrder: string[];
}
