import type { BaseQuestion, Item, TextNormalization } from './base';

export type FillBlankPart = { type: 'text'; text: string } | { type: 'blank'; id: string };

export interface FillBlanksDragQuestion extends BaseQuestion {
  type: 'fill-blanks-drag';
  parts: FillBlankPart[];
  blocks: Item[];
  correctBlocks: Record<string, string>;
}

export interface FillBlanksTextQuestion extends BaseQuestion {
  type: 'fill-blanks-text';
  parts: FillBlankPart[];
  acceptedAnswers: Record<string, string[]>;
  normalization: TextNormalization;
}
