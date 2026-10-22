import type { BaseQuestion, Item } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BlockBuilderQuestionExtensions {}
export interface BlockBuilderQuestion extends BaseQuestion, BlockBuilderQuestionExtensions {
  type: 'block-builder';
  blocks: Item[]; acceptedSequences: string[][]; interaction?: 'click' | 'drag';
}
