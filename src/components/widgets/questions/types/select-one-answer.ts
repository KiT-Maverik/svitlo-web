import type { BaseQuestion, Item } from './base';
export interface SelectOneAnswerQuestion extends BaseQuestion {
  type: 'single-select';
  options: Item[]; correctId: string;
}
