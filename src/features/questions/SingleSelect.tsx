'use client';

import type { InteractionProps } from './model';
import { Box } from '@mui/material';
import { AnswerOption, answerColumnSx } from './AnswerOption';
export function SingleSelect({ question, value, onChange, disabled, readOnly }: InteractionProps<'single-select'>) {
  return <Box role="group" aria-label={question.prompt} sx={answerColumnSx}>
    {question.options.map(item => <AnswerOption key={item.id} label={item.label} selected={value === item.id} disabled={disabled || readOnly} onToggle={() => onChange(value === item.id ? null : item.id)} />)}
  </Box>;
}
