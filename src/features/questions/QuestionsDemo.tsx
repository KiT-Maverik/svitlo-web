'use client';

import { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import { exampleQuestions } from './examples';
import { ReportedQuestion } from '../reporting/ReportedQuestion';
import type { CheckMode } from './attempt-model';

export function QuestionsDemo() {
  const [showErrors, setShowErrors] = useState(true);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true);
  const [showLetters, setShowLetters] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);
  const [showResult, setShowResult] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [checkMode, setCheckMode] = useState<CheckMode>('manual');

  return <Stack spacing={3}>
    <Stack spacing={1}>
      <Typography component="h1" variant="h4">Інтерактивні запитання</Typography>
      <Typography>Сім типів запитань. Блоки можна додавати натисканням або перетягуванням. Дайте відповідь, перевірте результат і спробуйте ще раз. Кожен приклад незалежний.</Typography>
    </Stack>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ alignItems: 'stretch' }}>
      <Stack spacing={3} sx={{ flex: '1 1 auto', minWidth: 0 }}>
        {exampleQuestions.map(question => <ReportedQuestion key={question.id} question={question} showErrors={showErrors} showCorrectAnswers={showCorrectAnswers} showLetters={showLetters} showExplanation={showExplanation} showResult={showResult} disabled={disabled} readOnly={readOnly} checkMode={checkMode} />)}
      </Stack>
      <Paper component="aside" variant="outlined" aria-label="Керування props тестових запитань" sx={{ width: { xs: '100%', md: 280 }, flex: '0 0 auto', p: 2, alignSelf: 'flex-start', position: { md: 'sticky' }, top: { md: 16 } }}>
        <Stack spacing={1}>
          <Typography component="h2" variant="subtitle1">Керування props</Typography>
          <Typography variant="body2" color="text.secondary">Ці control-и належать сторінці демонстрації й змінюють усі картки ліворуч.</Typography>
          <FormControlLabel label="Показувати помилки" control={<Checkbox checked={showErrors} onChange={(_, value) => setShowErrors(value)} />} />
          <FormControlLabel label="Показувати правильні відповіді" control={<Checkbox checked={showCorrectAnswers} onChange={(_, value) => setShowCorrectAnswers(value)} />} />
          <FormControlLabel label="Показувати літери" control={<Checkbox checked={showLetters} onChange={(_, value) => setShowLetters(value)} />} />
          <FormControlLabel label="Показувати пояснення" control={<Checkbox checked={showExplanation} onChange={(_, value) => setShowExplanation(value)} />} />
          <FormControlLabel label="Показувати результати" control={<Checkbox checked={showResult} onChange={(_, value) => setShowResult(value)} />} />
          <FormControlLabel label="Disabled" control={<Checkbox checked={disabled} onChange={(_, value) => setDisabled(value)} />} />
          <FormControlLabel label="Read-only" control={<Checkbox checked={readOnly} onChange={(_, value) => setReadOnly(value)} />} />
          <FormControl fullWidth size="small" sx={{ mt: 1 }}>
            <InputLabel id="questions-demo-check-mode">Check mode</InputLabel>
            <Select labelId="questions-demo-check-mode" label="Check mode" value={checkMode} onChange={event => setCheckMode(event.target.value as CheckMode)}>
              <MenuItem value="manual">manual</MenuItem>
              <MenuItem value="on-change">on-change</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>
    </Stack>
  </Stack>;
}
