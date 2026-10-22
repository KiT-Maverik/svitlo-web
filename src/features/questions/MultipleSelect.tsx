'use client';

import type { InteractionProps } from './model';
import { Box } from '@mui/material';
import { AnswerOption, answerColumnSx } from './AnswerOption';
export function MultipleSelect({ question, value, onChange, disabled, readOnly }: InteractionProps<'multiple-select'>) {
  return <Box role="group" aria-label={question.prompt} sx={answerColumnSx}>
    {question.options.map(item => <AnswerOption key={item.id} label={item.label} selected={value.includes(item.id)} disabled={disabled || readOnly} onToggle={() => onChange(value.includes(item.id) ? value.filter(id => id !== item.id) : [...value, item.id])} />)}
  </Box>;
}
