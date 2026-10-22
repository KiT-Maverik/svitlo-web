'use client';

import type { InteractionProps } from './model';
import { useId } from 'react';
import { TextField } from '@mui/material';
import { uk } from './messages';
export function Numeric({ question, value, onChange, disabled, readOnly }: InteractionProps<'numeric'>) {
  const id = useId();
  return <TextField sx={{ maxWidth: 440 }} id={id} fullWidth label={question.unit ? `${uk.answer} (${question.unit})` : uk.answer} value={value} onChange={e => onChange(e.target.value)} disabled={disabled}
    helperText={uk.numberFormat} slotProps={{ input: { readOnly }, htmlInput: { inputMode: 'decimal' } }} />;
}
