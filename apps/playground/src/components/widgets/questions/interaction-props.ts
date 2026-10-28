import type { AnswerMap, QuestionOf, QuestionType } from '@/components/widgets/questions/types';
import type { CheckResult } from './check-result';
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
