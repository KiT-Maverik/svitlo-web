import type { AnswerMap, QuestionOf, QuestionType } from '../../types/questions';
export interface InteractionProps<K extends QuestionType> {
  question: QuestionOf<K>;
  value: AnswerMap[K];
  onChange: (value: AnswerMap[K]) => void;
  disabled?: boolean;
  readOnly?: boolean;
}
