import type { BaseQuestion, TextNormalization } from './base';
// Intentionally open for author module augmentation.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ShortTextQuestionExtensions {}
export interface ShortTextQuestion extends BaseQuestion, ShortTextQuestionExtensions {
  type: 'short-text';
  acceptedAnswers: string[]; normalization: TextNormalization;
}
