'use client';
import type { ReactNode } from 'react';
import { Box } from '@mui/material';

/** Equal side columns keep the main action centered even when either side is empty. */
export function QuestionActions({ left, center, right }: { left?: ReactNode; center?: ReactNode; right?: ReactNode }) {
  return <Box data-question-actions="true" sx={{ display: 'grid', gridTemplateColumns: 'minmax(40px, 1fr) minmax(0, auto) minmax(40px, 1fr)', alignItems: 'center', gap: 1, width: '100%' }}>
    <Box data-action-zone="left" sx={{ minWidth: 0, display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>{left}</Box>
    <Box data-action-zone="center" sx={{ minWidth: 0, display: 'flex', justifyContent: 'center', '& > button': { minWidth: 0, maxWidth: '100%' } }}>{center}</Box>
    <Box data-action-zone="right" sx={{ minWidth: 0, display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>{right}</Box>
  </Box>;
}
