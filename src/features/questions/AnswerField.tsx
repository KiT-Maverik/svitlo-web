'use client';
import { useId } from 'react';
import { alpha, Box, InputAdornment, TextField } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Close from '@mui/icons-material/Close';
import type { CheckResult } from '../../types/questions';
import { resultFeedback, type FeedbackVisibility } from './feedback';
import { uk } from './messages';
interface AnswerFieldProps extends FeedbackVisibility {
  label: string; value: string; onChange: (value: string) => void;
  disabled?: boolean; readOnly?: boolean; result?: CheckResult | null;
  helperText?: string; inputMode?: 'text' | 'decimal';
}
/** Shared controlled text/numeric surface; grading remains outside this component. */
export function AnswerField({ label, value, onChange, disabled, readOnly, result, helperText, inputMode = 'text', ...visibility }: AnswerFieldProps) {
  const id = useId();
  const feedback = resultFeedback(result, visibility);
  const tone = feedback === 'correct' ? 'success' : 'error';
  return <TextField id={id} fullWidth label={label} value={value} onChange={e => onChange(e.target.value)} disabled={disabled}
    data-feedback={feedback} error={feedback === 'incorrect'} color={feedback === 'correct' ? 'success' : 'primary'} focused={feedback ? true : undefined}
    sx={{ maxWidth: 440, ...(feedback ? { '& .MuiOutlinedInput-root': { bgcolor: theme => alpha(theme.palette[tone].main, 0.1) } } : {}) }}
    helperText={helperText} slotProps={{ input: { readOnly: readOnly || Boolean(result), endAdornment: feedback ? <InputAdornment position="end"><Box component="span" role="img" aria-label={feedback === 'correct' ? uk.optionCorrect : uk.optionIncorrect} sx={{ display: 'flex', color: `${tone}.main` }}>{feedback === 'correct' ? <CheckCircle /> : <Close />}</Box></InputAdornment> : undefined }, htmlInput: { inputMode } }} />;
}
