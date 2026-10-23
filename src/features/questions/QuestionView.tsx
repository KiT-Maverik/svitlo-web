'use client';

import { useId } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import type { CheckResult, QuestionType } from '../../types/questions';
import type { InteractionProps } from './interaction-props';
import { questionRegistry } from './registry';
import { QuestionResult } from './QuestionResult';

export type QuestionViewProps = { [K in QuestionType]: InteractionProps<K> & { type: K; result?: CheckResult | null } }[QuestionType];
// Internal generic implementation; public union rejects mismatched question/value callbacks.
function TypedView<K extends QuestionType>({ result = null, ...props }: InteractionProps<K> & { result?: CheckResult | null }) {
  const heading = useId();
  const Interaction = questionRegistry[props.question.type].Interaction;
  return <Stack spacing={2} sx={{ alignItems: 'center' }}>
    <Typography component="h2" variant="h6" id={heading} sx={{ textAlign: 'center' }}>{props.question.prompt}</Typography>
    <Box sx={{ width: '100%', textAlign: 'center' }} role="group" aria-labelledby={heading}><Interaction {...props} result={result} readOnly={props.readOnly || Boolean(result)} /></Box>
    <QuestionResult result={result} explanation={props.question.explanation} showErrors={props.showErrors} showExplanation={props.showCorrectAnswers !== false} />
  </Stack>;
}
export function QuestionView(props: QuestionViewProps) {
  switch (props.type) {
    case 'single-select': return <TypedView<'single-select'> {...props} />;
    case 'multiple-select': return <TypedView<'multiple-select'> {...props} />;
    case 'matching': return <TypedView<'matching'> {...props} />;
    case 'short-text': return <TypedView<'short-text'> {...props} />;
    case 'numeric': return <TypedView<'numeric'> {...props} />;
    case 'ordering': return <TypedView<'ordering'> {...props} />;
    case 'block-builder': return <TypedView<'block-builder'> {...props} />;
  }
}
export { TypedView as InternalQuestionView };
