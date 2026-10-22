'use client';

import type { InteractionProps } from './model';
import { useId } from 'react';
import { TextField } from '@mui/material';
import { uk } from './messages';
export function ShortText({ value, onChange, disabled, readOnly }: InteractionProps<'short-text'>) {
  const id = useId();
  return <TextField sx={{ maxWidth: 440 }} id={id} fullWidth label={uk.answer} value={value} onChange={e => onChange(e.target.value)} disabled={disabled} slotProps={{ input: { readOnly } }} />;
}
