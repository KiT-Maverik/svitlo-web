'use client';

import { useRef, useState } from 'react';
import { Box, Button, Paper, Stack } from '@mui/material';
import type { AnswerMap, CheckResult, Question, QuestionOf, QuestionType } from './model';
import { questionRegistry } from './registry';
import { InternalQuestionView } from './QuestionView';
import { uk } from './messages';

function Attempt<K extends QuestionType>({ question, disabled, readOnly }: { question: QuestionOf<K>; disabled?: boolean; readOnly?: boolean }) {
  const entry = questionRegistry[question.type];
  const [value, setValue] = useState<AnswerMap[K]>(() => entry.initial(question));
  const [result, setResult] = useState<CheckResult | null>(null);
  const checkButton = useRef<HTMLButtonElement>(null);
  const resultBox = useRef<HTMLDivElement>(null);
  const locked = result !== null || disabled || readOnly;
  const edit = () => { setResult(null); requestAnimationFrame(() => checkButton.current?.focus()); };
  return <Paper component="section" aria-label={question.prompt} variant="outlined" sx={{ p: { xs: 2, sm: 3 }, minWidth: 0, '& .Mui-focusVisible, & :focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 } }}>
    <Box ref={resultBox} tabIndex={-1}>
      <InternalQuestionView<K> question={question} value={value} onChange={next => { if (!locked) setValue(next); }} result={result} disabled={disabled} readOnly={readOnly || result !== null} />
    </Box>
    <Stack direction="row" useFlexGap sx={{ mt: 2, flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
      {result ? <Button variant="contained" disabled={disabled || readOnly} onClick={edit}>{uk.retry}</Button> :
        <Button ref={checkButton} variant="contained" disabled={disabled || readOnly} onClick={() => { setResult(entry.check(question, value)); requestAnimationFrame(() => resultBox.current?.focus()); }}>{uk.check}</Button>}
      <Button disabled={disabled || readOnly} onClick={() => { setValue(entry.initial(question)); edit(); }}>{uk.reset}</Button>
    </Stack>
  </Paper>;
}
export function QuestionAttempt({ question, disabled, readOnly }: { question: Question; disabled?: boolean; readOnly?: boolean }) {
  const common = { disabled, readOnly };
  // Remount on a different definition (id identifies an immutable authored question).
  switch (question.type) {
    case 'single-select': return <Attempt<'single-select'> key={question.id} question={question} {...common} />;
    case 'multiple-select': return <Attempt<'multiple-select'> key={question.id} question={question} {...common} />;
    case 'matching': return <Attempt<'matching'> key={question.id} question={question} {...common} />;
    case 'short-text': return <Attempt<'short-text'> key={question.id} question={question} {...common} />;
    case 'numeric': return <Attempt<'numeric'> key={question.id} question={question} {...common} />;
    case 'ordering': return <Attempt<'ordering'> key={question.id} question={question} {...common} />;
    case 'block-builder': return <Attempt<'block-builder'> key={question.id} question={question} {...common} />;
  }
}
