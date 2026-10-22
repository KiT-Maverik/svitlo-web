export interface Item { id: string; label: string }
export interface BaseQuestion { id: string; prompt: string; explanation: string }
export interface TextNormalization { trim: boolean; ignoreCase: boolean; collapseWhitespace: boolean }
export interface DefinitionMap {
  'single-select': { options: Item[]; correctId: string };
  'multiple-select': { options: Item[]; correctIds: string[] };
  matching: { left: Item[]; right: Item[]; pairs: { id: string; leftId: string; rightId: string }[] };
  'short-text': { acceptedAnswers: string[]; normalization: TextNormalization };
  numeric: { expected: number; tolerance: number; unit?: string };
  ordering: { items: Item[]; correctOrder: string[] };
  'block-builder': { blocks: Item[]; acceptedSequences: string[][] };
}
export interface AnswerMap {
  'single-select': string | null;
  'multiple-select': string[];
  matching: Record<string, string>;
  'short-text': string;
  numeric: string;
  ordering: string[];
  'block-builder': string[];
}
export type QuestionType = keyof DefinitionMap;
export type QuestionOf<K extends QuestionType> = BaseQuestion & { type: K } & DefinitionMap[K];
export type Question = { [K in QuestionType]: QuestionOf<K> }[QuestionType];
export type Answer = { [K in QuestionType]: { type: K; value: AnswerMap[K] } }[QuestionType];
// A mapped union preserves correlation even when callers do not use generics.
export type Submission = { [K in QuestionType]: { question: QuestionOf<K>; answer: { type: K; value: AnswerMap[K] } } }[QuestionType];
export type CheckResult =
  | { status: 'correct' | 'incorrect' }
  | { status: 'incomplete'; reason: 'empty' | 'missing-items' }
  | { status: 'invalid'; reason: 'unknown-id' | 'duplicate-id' | 'number-format' | 'definition' };
export interface InteractionProps<K extends QuestionType> {
  question: QuestionOf<K>;
  value: AnswerMap[K];
  onChange: (value: AnswerMap[K]) => void;
  disabled?: boolean;
  readOnly?: boolean;
}
