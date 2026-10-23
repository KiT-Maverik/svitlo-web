'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import type { InteractionProps } from './interaction-props';
import { isGraded } from './feedback';

const minWidth = 96;
const maxWidth = 360;
function BlankTextInput({ id, value, onChange, disabled, readOnly, feedback }: { id: string; value: string; onChange: (value: string) => void; disabled: boolean; readOnly: boolean; feedback?: 'correct' | 'incorrect' }) {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(minWidth);
  useLayoutEffect(() => {
    const measured = measureRef.current?.getBoundingClientRect().width ?? 0;
    setWidth(Math.min(maxWidth, Math.max(minWidth, Math.ceil(measured + 36))));
  }, [value]);
  return <Box component="span" sx={{ display: 'inline-flex', verticalAlign: 'middle', mx: 0.5, position: 'relative', width }}>
    <TextField id={id} aria-label="Заповнити пропуск" size="small" value={value} onChange={event => onChange(event.target.value)} disabled={disabled} slotProps={{ htmlInput: { readOnly, style: { textAlign: 'left' } } }} error={feedback === 'incorrect'} color={feedback === 'correct' ? 'success' : 'primary'} sx={{ width, '& .MuiOutlinedInput-root': { bgcolor: feedback === 'correct' ? 'success.light' : feedback === 'incorrect' ? 'error.light' : 'background.paper', transition: 'background-color 180ms ease-in-out, border-color 180ms ease-in-out' }, '@media (prefers-reduced-motion: reduce)': { '& .MuiOutlinedInput-root': { transition: 'none' } } }} />
    <Box ref={measureRef} aria-hidden="true" sx={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', font: 'inherit', px: 1.5, py: 1 }}>{value || ' '}</Box>
  </Box>;
}

export function FillBlanksText({ question, value, onChange, disabled, readOnly, result, showErrors = true, showCorrectAnswers = true }: InteractionProps<'fill-blanks-text'>) {
  const graded = isGraded(result);
  const resultStatus = result?.status;
  const feedback = graded && resultStatus === 'correct' && showCorrectAnswers ? 'correct' : graded && resultStatus === 'incorrect' && showErrors ? 'incorrect' : undefined;
  return <Box role="group" aria-label={question.prompt} sx={{ width: '100%', textAlign: 'left', lineHeight: 2.8, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
    {question.parts.map((part, index) => part.type === 'text' ? <Box component="span" key={`text-${index}`}>{part.text}</Box> : <BlankTextInput key={part.id} id={`${question.id}-${part.id}`} value={value[part.id] ?? ''} onChange={next => onChange({ ...value, [part.id]: next })} disabled={Boolean(disabled)} readOnly={Boolean(readOnly || result)} feedback={feedback} />)}
  </Box>;
}
