import type { BaseQuestion } from './base';
export interface AnswerWithNumberQuestion extends BaseQuestion {
  type: 'numeric';
  expected: number;
  tolerance: number;
  unit?: string;
}

// todo
