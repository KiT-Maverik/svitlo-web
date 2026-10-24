import type { AnswerMap, CheckResult, QuestionOf, QuestionType } from '@/types/questions';
import type { FeedbackVisibility } from './feedback';
export interface InteractionProps<K extends QuestionType> extends FeedbackVisibility {
  showLetters?: boolean;
  result?: CheckResult | null;
  question: QuestionOf<K>;
  value: AnswerMap[K];
  onChange: (value: AnswerMap[K]) => void;
  disabled?: boolean;
  readOnly?: boolean;
}
