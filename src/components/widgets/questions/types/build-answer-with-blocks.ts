import type { BaseQuestion, Item } from './base';
export interface BuildAnswerWithBlocksQuestion extends BaseQuestion {
  type: 'block-builder';
  blocks: Item[];
  acceptedSequences: string[][];
}
