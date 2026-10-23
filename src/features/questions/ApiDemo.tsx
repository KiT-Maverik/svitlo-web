'use client';

import { FeedbackDemo } from './FeedbackDemo';
import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import type { NumericQuestion, SingleSelectQuestion } from '../../types/questions';
import { QuestionAttempt } from './QuestionAttempt';
import type { AttemptEvent, AnswerEvent } from './attempt-model';
const manual: SingleSelectQuestion = { id: 'api-manual', type: 'single-select', prompt: 'Ручна перевірка: оберіть парне число.', options: [{ id: 'two', label: '2' }, { id: 'three', label: '3' }], correctId: 'two', explanation: '2 ділиться на 2 без остачі.' };
const automatic: SingleSelectQuestion = { ...manual, id: 'api-auto', prompt: 'Автоматична перевірка: оберіть парне число.' };
const numeric: NumericQuestion = { id: 'api-slots', type: 'numeric', prompt: 'Власні слоти: скільки буде 6 × 7?', expected: 42, tolerance: 0, explanation: '6 × 7 = 42.' };
export function ApiDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const record = (name: string, event: AttemptEvent<'single-select'> | AnswerEvent<'single-select'>) => setEvents(previous => [...previous, `${name}:${event.attemptNumber}:${event.result?.status ?? 'editing'}`]);
  return <Stack spacing={3}>
    <Typography>Події, режими перевірки та чотири слоти працюють через один контролер для всіх типів запитань.</Typography>
    <QuestionAttempt question={manual} onCheck={e => record('manual-check', e)} onAnswer={e => record('manual-answer', e)} onIncorrect={e => record('manual-incorrect', e)} />
    <FormControlLabel label="Приховати результат автоматичної перевірки" control={<Checkbox checked={hidden} onChange={(_, checked) => setHidden(checked)} />} />
    <QuestionAttempt question={automatic} checkMode="on-change" showResult={!hidden} showExplanation={false}
      onChange={e => record('change', e)} onCheck={e => record('check', e)} onAnswer={e => record('answer', e)}
      onCorrect={e => record('correct', e)} onIncorrect={e => record('incorrect', e)} onRetry={e => record('retry', e)} onReset={e => record('reset', e)} />
    <Box component="output" aria-label="Події контролера" sx={{ whiteSpace: 'pre-wrap' }}>{events.join('\n') || 'Подій ще немає'}</Box>
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      <FormControlLabel label="Disabled для власних слотів" control={<Checkbox checked={disabled} onChange={(_, checked) => setDisabled(checked)} />} />
      <FormControlLabel label="Read-only для власних слотів" control={<Checkbox checked={readOnly} onChange={(_, checked) => setReadOnly(checked)} />} />
    </Stack>
    <QuestionAttempt question={numeric} disabled={disabled} readOnly={readOnly}
      slotProps={{ root: { sx: { borderRadius: 3 } }, answers: context => ({ sx: { bgcolor: context.hasInteracted ? 'action.hover' : 'transparent', p: 2, borderRadius: 2 } }) }}
      slots={{
        root: context => <Paper {...context.rootProps} component="section" data-custom-root="true">{context.children}</Paper>,
        question: context => <><Typography component="h2" variant="h6" sx={{ textAlign: 'center' }}>{context.question.prompt}</Typography><Typography sx={{ textAlign: 'center' }}>Додатковий авторський контент у слоті питання.</Typography></>,
        answers: context => <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <TextField label="Власне числове поле" value={context.answer} onChange={e => context.setAnswer(e.target.value)} disabled={context.isLocked} />
          <Typography component="output" aria-label="Стан спроби">{`hasInteracted=${context.hasInteracted}; isModified=${context.isModified}; hasChecked=${context.hasChecked}; attempt=${context.attemptNumber}`}</Typography>
        </Stack>,
        actions: context => <>
          <Button onClick={context.check} disabled={!context.canCheck}>Власна перевірка</Button>
          <Button onClick={context.retry} disabled={!context.hasChecked || context.props.disabled || context.props.readOnly}>Власна повторна спроба</Button>
          <Button onClick={context.reset}>Власне скидання</Button>
          <Button onClick={() => context.setAnswer('42')}>Встановити 42 через API</Button>
          {context.children}
        </>,
      }} />
    <FeedbackDemo />
  </Stack>;
}
