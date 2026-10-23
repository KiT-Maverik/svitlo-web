'use client';

import { Alert, Typography } from '@mui/material';
import type { CheckResult } from './model';
import { uk } from './messages';
export function QuestionResult({ result, explanation, showExplanation = true, showErrors = true }: { result: CheckResult | null; explanation: string; showExplanation?: boolean; showErrors?: boolean }) {
  return <div style={{ textAlign: 'center', maxWidth: '100%' }} role="status" aria-label={uk.checkResult} aria-live="polite" aria-atomic="true">
    {result && (showErrors || result.status === 'correct') && <Alert severity={result.status === 'correct' ? 'success' : result.status === 'incorrect' ? 'error' : 'warning'}>
      {result.status === 'invalid' ? result.reason === 'number-format' ? uk.numberFormat : result.reason === 'definition' ? uk.definition : uk.invalid : result.status === 'incorrect' && !showExplanation ? uk.incorrectShort : uk[result.status]}
      {showExplanation && (result.status === 'correct' || result.status === 'incorrect') && <Typography sx={{ mt: 1, whiteSpace: 'pre-wrap' }}><strong>{uk.explanation}: </strong>{explanation}</Typography>}
    </Alert>}
  </div>;
}
