export type CheckResult =
  | { status: 'correct' | 'incorrect' }
  | { status: 'incomplete'; reason: 'empty' | 'missing-items' }
  | { status: 'invalid'; reason: 'unknown-id' | 'duplicate-id' | 'number-format' | 'definition' };
export type AnswerResult = Extract<CheckResult, { status: 'correct' | 'incorrect' }>;
