'use client';
import type { Question } from '../../types/questions';
import { QuestionAttempt } from '../questions/QuestionAttempt';
import { ReportButton } from './ReportButton';
/** Integration via the public slot API; the question controller knows nothing about reports. */
export function ReportedQuestion({ question }: { question: Question }) {
  return <QuestionAttempt question={question} slots={{ actions: context => <>{context.children}<ReportButton contentId={`question:${question.id}`} title={question.prompt} /></> }} />;
}
