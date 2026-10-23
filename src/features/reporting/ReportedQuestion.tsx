'use client';
import type { Question } from '../../types/questions';
import { QuestionAttempt } from '../questions/QuestionAttempt';
import type { CheckMode } from '../questions/attempt-model';
import { ReportButton } from './ReportButton';
/** Integration via the shared actions panel; the question controller knows nothing about reports. */
export interface ReportedQuestionOptions {
  showErrors?: boolean; showCorrectAnswers?: boolean; showLetters?: boolean; showExplanation?: boolean; showResult?: boolean;
  disabled?: boolean; readOnly?: boolean; checkMode?: CheckMode;
}
export function ReportedQuestion({ question, ...options }: { question: Question } & ReportedQuestionOptions) {
  return <QuestionAttempt question={question} {...options} actionSlots={{ right: () => <ReportButton contentId={`question:${question.id}`} title={question.prompt} /> }} />;
}
