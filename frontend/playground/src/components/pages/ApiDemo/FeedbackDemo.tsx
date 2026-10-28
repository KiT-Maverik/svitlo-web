'use client';
import { useState } from 'react';
import { locale } from './locales/uk-UA';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { exampleQuestions } from '@/components/widgets/questions/examples';
import { QuestionAttempt } from '@/components/widgets/questions/helpers';
export function FeedbackDemo() {
  const [showErrors, setShowErrors] = useState(true);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true);
  const [showLetters, setShowLetters] = useState(false);
  const [showResult, setShowResult] = useState(true);
  return (
    <Stack spacing={2}>
      <Typography component="h2" variant="h5">
        {locale.feedback.heading}
      </Typography>
      <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
        <FormControlLabel
          label={locale.feedback.showErrors}
          control={<Checkbox checked={showErrors} onChange={(_, value) => setShowErrors(value)} />}
        />
        <FormControlLabel
          label={locale.feedback.showCorrectAnswers}
          control={<Checkbox checked={showCorrectAnswers} onChange={(_, value) => setShowCorrectAnswers(value)} />}
        />
        <FormControlLabel
          label={locale.feedback.showLetters}
          control={<Checkbox checked={showLetters} onChange={(_, value) => setShowLetters(value)} />}
        />
        <FormControlLabel
          label={locale.feedback.showResult}
          control={<Checkbox checked={showResult} onChange={(_, value) => setShowResult(value)} />}
        />
      </Stack>
      {exampleQuestions
        .filter(q =>
          ['single-select', 'multiple-select', 'matching', 'short-text', 'numeric', 'ordering'].includes(q.type),
        )
        .map(question => (
          <QuestionAttempt
            key={question.id}
            question={{
              ...question,
              id: `feedback-${question.id}`,
              prompt: `${locale.feedback.promptPrefix}${question.prompt}`,
            }}
            showErrors={showErrors}
            showCorrectAnswers={showCorrectAnswers}
            showLetters={showLetters}
            showResult={showResult}
          />
        ))}
    </Stack>
  );
}
