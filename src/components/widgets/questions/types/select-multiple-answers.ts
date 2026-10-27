import type { BaseQuestion, Item } from './base';
export interface SelectMultipleAnswersQuestion extends BaseQuestion {
  type: 'multiple-select';
  options: Item[]; correctIds: string[];
}
