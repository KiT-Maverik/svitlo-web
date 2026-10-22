'use client';
import { Box } from '@mui/material';
import type { Question } from '../../types/questions';
import { QuestionAttempt } from '../questions/QuestionAttempt';
import { ReportButton } from './ReportButton';
/** Integration via the public slot API; the question controller knows nothing about reports. */
export function ReportedQuestion({ question }: { question: Question }) {
  return <QuestionAttempt question={question} slotProps={{ actions: { sx: { px: 4 } } }} slots={{ actions: context => <>{context.children}<Box sx={{ position: 'absolute', right: { xs: 8, sm: 12 }, bottom: { xs: 8, sm: 12 } }}><ReportButton contentId={`question:${question.id}`} title={question.prompt} /></Box></> }} />;
}
