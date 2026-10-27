import type { BaseQuestion, Item } from './base';
export interface MatchBlocksQuestion extends BaseQuestion {
  type: 'matching';
  left: Item[]; right: Item[]; pairs: { id: string; leftId: string; rightId: string }[];
}
