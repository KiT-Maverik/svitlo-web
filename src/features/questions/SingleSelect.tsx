'use client';

import type { InteractionProps } from './interaction-props';
import { choiceFeedback } from './feedback';
import { Box } from '@mui/material';
import { AnswerOption, answerColumnSx, answerLetter } from './AnswerOption';
export function SingleSelect({ question, value, onChange, disabled, readOnly, result, showErrors, showCorrectAnswers, showLetters = false }: InteractionProps<'single-select'>) {
  return <Box role="group" aria-label={question.prompt} sx={answerColumnSx}>
    {question.options.map((item, index) => <AnswerOption key={item.id} label={item.label} letter={showLetters ? answerLetter(index) : undefined} selected={value === item.id} feedback={choiceFeedback(result, value === item.id, question.correctId === item.id, { showErrors, showCorrectAnswers })} disabled={disabled || readOnly || Boolean(result)} onToggle={() => onChange(value === item.id ? null : item.id)} />)}
  </Box>;
}
