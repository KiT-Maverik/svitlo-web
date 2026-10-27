import type { AnswerMap, QuestionOf, QuestionType } from '@/components/widgets/questions/types';
import type { AnswerResult, CheckResult } from './check-result';
export type CheckMode = 'manual' | 'on-change';
export interface AttemptState<K extends QuestionType> {
  answer: AnswerMap[K];
  result: CheckResult | null;
  hasInteracted: boolean;
  isModified: boolean;
  hasChecked: boolean;
  attemptNumber: number;
}
export interface AttemptEvent<K extends QuestionType> extends AttemptState<K> {
  question: QuestionOf<K>;
}
export interface CheckEvent<K extends QuestionType> extends AttemptEvent<K> {
  result: CheckResult;
}
export interface AnswerEvent<K extends QuestionType> extends AttemptEvent<K> {
  result: AnswerResult;
}
export interface AttemptOptions<K extends QuestionType> {
  initialAnswer?: AnswerMap[K];
  initialResult?: CheckResult | null;
  disabled?: boolean;
  readOnly?: boolean;
  checkMode?: CheckMode;
  onChange?: (event: AttemptEvent<K>) => void;
  onCheck?: (event: CheckEvent<K>) => void;
  onAnswer?: (event: AnswerEvent<K>) => void;
  onCorrect?: (event: AnswerEvent<K>) => void;
  onIncorrect?: (event: AnswerEvent<K>) => void;
  onRetry?: (event: AttemptEvent<K>) => void;
  onReset?: (event: AttemptEvent<K>) => void;
}
