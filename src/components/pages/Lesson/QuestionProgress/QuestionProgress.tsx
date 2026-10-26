'use client';

import Box from '@mui/material/Box';
import { aria } from './QuestionProgress.constants';
import { locale as lessonLocale } from '../locales/uk-UA';

export type QuestionStatus = 'unanswered' | 'correct' | 'incorrect' | 'deferred';

export interface QuestionProgressProps {
  statuses: QuestionStatus[];
  currentIndex: number;
  allowNavigation?: boolean;
  onNavigate?: (index: number) => void;
  className?: string;
}

const statusLabel: Record<QuestionStatus, string> = lessonLocale.questionProgress.status;

export function QuestionProgress({ statuses, currentIndex, allowNavigation = false, onNavigate, className }: QuestionProgressProps) {
  return <Box component="ol" className={className} role="list" aria-label={aria.navigation}>
    {statuses.map((status, index) => <Box component="li" key={index} sx={{ display: 'contents' }}>
      <Box component="button" type="button" disabled={!allowNavigation || index === currentIndex} aria-current={index === currentIndex ? 'step' : undefined} aria-label={`${index + 1}. ${statusLabel[status]}`} data-status={status} data-current={index === currentIndex || undefined} onClick={() => onNavigate?.(index)} />
    </Box>)}
  </Box>;
}
