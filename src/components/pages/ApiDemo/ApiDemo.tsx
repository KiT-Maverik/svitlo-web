'use client';

import { FeedbackDemo } from './FeedbackDemo';
import { locale } from './locales/uk-UA';
import { aria } from './ApiDemo.constants';
import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import type { AnswerWithNumberQuestion, SelectOneAnswerQuestion } from '@/components/widgets/questions/types';
import { QuestionAttempt } from '@/components/widgets/questions/helpers';
import type { AttemptEvent, AnswerEvent } from '@/components/widgets/questions/attempt-model';
const manual: SelectOneAnswerQuestion = { id: 'api-manual', type: 'single-select', prompt: locale.api.manualQuestion, options: [{ id: 'two', label: '2' }, { id: 'three', label: '3' }], correctId: 'two', explanation: locale.api.manualExplanation };
const automatic: SelectOneAnswerQuestion = { ...manual, id: 'api-auto', prompt: locale.api.autoQuestion };
const numeric: AnswerWithNumberQuestion = { id: 'api-slots', type: 'numeric', prompt: locale.api.numericQuestion, expected: 42, tolerance: 0, explanation: locale.api.numericExplanation };
export function ApiDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const record = (name: string, event: AttemptEvent<'single-select'> | AnswerEvent<'single-select'>) => setEvents(previous => [...previous, `${name}:${event.attemptNumber}:${event.result?.status ?? 'editing'}`]);
  return <Stack spacing={3}>
    <Typography>{locale.api.description}</Typography>
    <QuestionAttempt question={manual} onCheck={e => record('manual-check', e)} onAnswer={e => record('manual-answer', e)} onIncorrect={e => record('manual-incorrect', e)} />
    <FormControlLabel label={locale.api.hideResult} control={<Checkbox checked={hidden} onChange={(_, checked) => setHidden(checked)} />} />
    <QuestionAttempt question={automatic} checkMode="on-change" showResult={!hidden} showExplanation={false}
      onChange={e => record('change', e)} onCheck={e => record('check', e)} onAnswer={e => record('answer', e)}
      onCorrect={e => record('correct', e)} onIncorrect={e => record('incorrect', e)} onRetry={e => record('retry', e)} onReset={e => record('reset', e)} />
    <Box component="output" aria-label={aria.events} sx={{ whiteSpace: 'pre-wrap' }}>{events.join('\n') || locale.api.noEvents}</Box>
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      <FormControlLabel label={locale.api.disabled} control={<Checkbox checked={disabled} onChange={(_, checked) => setDisabled(checked)} />} />
      <FormControlLabel label={locale.api.readOnly} control={<Checkbox checked={readOnly} onChange={(_, checked) => setReadOnly(checked)} />} />
    </Stack>
    <QuestionAttempt question={numeric} disabled={disabled} readOnly={readOnly}
      slotProps={{ root: { sx: { borderRadius: 3 } }, answers: context => ({ sx: { bgcolor: context.hasInteracted ? 'action.hover' : 'transparent', p: 2, borderRadius: 2 } }) }}
      slots={{
        root: context => <Paper {...context.rootProps} component="section" data-custom-root="true">{context.children}</Paper>,
        question: context => <><Typography component="h2" variant="h6" sx={{ textAlign: 'center' }}>{context.question.prompt}</Typography><Typography sx={{ textAlign: 'center' }}>{locale.api.customQuestionContent}</Typography></>,
        answers: context => <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <TextField label={locale.api.numericField} value={context.answer} onChange={e => context.setAnswer(e.target.value)} disabled={context.isLocked} />
          <Typography component="output" aria-label={aria.attemptState}>{`hasInteracted=${context.hasInteracted}; isModified=${context.isModified}; hasChecked=${context.hasChecked}; attempt=${context.attemptNumber}`}</Typography>
        </Stack>,
        actions: context => <>
          <Button onClick={context.check} disabled={!context.canCheck}>{locale.api.actions.check}</Button>
          <Button onClick={context.retry} disabled={!context.hasChecked || context.props.disabled || context.props.readOnly}>{locale.api.actions.retry}</Button>
          <Button onClick={context.reset}>{locale.api.actions.reset}</Button>
          <Button onClick={() => context.setAnswer('42')}>{locale.api.actions.set42}</Button>
          {context.children}
        </>,
      }} />
    <FeedbackDemo />
  </Stack>;
}
