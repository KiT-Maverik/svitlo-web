import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BuildAnswerWithBlocksQuestionExtensions {}
export interface BuildAnswerWithBlocksQuestion extends BaseQuestion, BuildAnswerWithBlocksQuestionExtensions {
  type: 'block-builder';
  blocks: Item[]; acceptedSequences: string[][];
}
