import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MatchBlocksQuestionExtensions {}
export interface MatchBlocksQuestion extends BaseQuestion, MatchBlocksQuestionExtensions {
  type: 'matching';
  left: Item[]; right: Item[]; pairs: { id: string; leftId: string; rightId: string }[];
}
