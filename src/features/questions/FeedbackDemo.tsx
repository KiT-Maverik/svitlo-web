'use client';
import { useState } from 'react';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { exampleQuestions } from './examples';
import { QuestionAttempt } from './QuestionAttempt';
export function FeedbackDemo() {
  const [showErrors, setShowErrors] = useState(true);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true);
  const [showResult, setShowResult] = useState(true);
  return <Stack spacing={2}>
    <Typography component="h2" variant="h5">Стани відповідей</Typography>
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      <FormControlLabel label="Показувати помилки" control={<Checkbox checked={showErrors} onChange={(_, value) => setShowErrors(value)} />} />
      <FormControlLabel label="Показувати правильні відповіді" control={<Checkbox checked={showCorrectAnswers} onChange={(_, value) => setShowCorrectAnswers(value)} />} />
      <FormControlLabel label="Показувати результати прикладів" control={<Checkbox checked={showResult} onChange={(_, value) => setShowResult(value)} />} />
    </Stack>
    {exampleQuestions.filter(q => ['single-select', 'multiple-select', 'matching'].includes(q.type)).map(question => <QuestionAttempt key={question.id} question={{ ...question, id: `feedback-${question.id}`, prompt: `Стани: ${question.prompt}` }} showErrors={showErrors} showCorrectAnswers={showCorrectAnswers} showResult={showResult} />)}
  </Stack>;
}
