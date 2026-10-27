'use client';

import { useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { exampleQuestions } from '@/components/widgets/questions/examples';
import { QuestionAttempt } from '@/components/widgets/questions/helpers';
import type { CheckMode } from '@/components/widgets/questions/attempt-model';
import { locale } from './locales/uk-UA';
import { aria } from './QuestionsDemo.constants';

export function QuestionsDemo() {
  const [showErrors, setShowErrors] = useState(true);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true);
  const [showLetters, setShowLetters] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);
  const [showResult, setShowResult] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [checkMode, setCheckMode] = useState<CheckMode>('manual');

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography component="h1" variant="h4">
          {locale.title}
        </Typography>
        <Typography>{locale.description}</Typography>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ alignItems: 'stretch' }}>
        <Stack spacing={3} sx={{ flex: '1 1 auto', minWidth: 0 }}>
          {exampleQuestions.map(question => (
            <QuestionAttempt
              key={question.id}
              question={question}
              showErrors={showErrors}
              showCorrectAnswers={showCorrectAnswers}
              showLetters={showLetters}
              showExplanation={showExplanation}
              showResult={showResult}
              disabled={disabled}
              readOnly={readOnly}
              checkMode={checkMode}
            />
          ))}
        </Stack>
        <Paper
          component="aside"
          variant="outlined"
          aria-label={aria.controls}
          sx={{
            width: { xs: '100%', md: 280 },
            flex: '0 0 auto',
            p: 2,
            alignSelf: 'flex-start',
            position: { md: 'sticky' },
            top: { md: 16 },
          }}
        >
          <Stack spacing={1}>
            <Typography component="h2" variant="subtitle1">
              {locale.controlsTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {locale.controlsDescription}
            </Typography>
            <FormControlLabel
              label={locale.settings.showErrors}
              control={<Checkbox checked={showErrors} onChange={(_, value) => setShowErrors(value)} />}
            />
            <FormControlLabel
              label={locale.settings.showCorrectAnswers}
              control={<Checkbox checked={showCorrectAnswers} onChange={(_, value) => setShowCorrectAnswers(value)} />}
            />
            <FormControlLabel
              label={locale.settings.showLetters}
              control={<Checkbox checked={showLetters} onChange={(_, value) => setShowLetters(value)} />}
            />
            <FormControlLabel
              label={locale.settings.showExplanation}
              control={<Checkbox checked={showExplanation} onChange={(_, value) => setShowExplanation(value)} />}
            />
            <FormControlLabel
              label={locale.settings.showResult}
              control={<Checkbox checked={showResult} onChange={(_, value) => setShowResult(value)} />}
            />
            <FormControlLabel
              label={locale.settings.disabled}
              control={<Checkbox checked={disabled} onChange={(_, value) => setDisabled(value)} />}
            />
            <FormControlLabel
              label={locale.settings.readOnly}
              control={<Checkbox checked={readOnly} onChange={(_, value) => setReadOnly(value)} />}
            />
            <FormControl fullWidth size="small" sx={{ mt: 1 }}>
              <InputLabel id="questions-demo-check-mode">{locale.settings.checkMode}</InputLabel>
              <Select
                labelId="questions-demo-check-mode"
                label={locale.settings.checkMode}
                value={checkMode}
                onChange={event => setCheckMode(event.target.value as CheckMode)}
              >
                <MenuItem value="manual">{locale.checkModes.manual}</MenuItem>
                <MenuItem value="on-change">{locale.checkModes.onChange}</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
