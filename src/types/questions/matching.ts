import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MatchingQuestionExtensions {}
export interface MatchingQuestion extends BaseQuestion, MatchingQuestionExtensions {
  type: 'matching';
  left: Item[]; right: Item[]; pairs: { id: string; leftId: string; rightId: string }[];
}
