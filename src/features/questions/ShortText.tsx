'use client';
import type { InteractionProps } from './interaction-props';
import { AnswerField } from './AnswerField';
import { uk } from './messages';
export function ShortText({ value, onChange, disabled, readOnly, result, showErrors, showCorrectAnswers }: InteractionProps<'short-text'>) {
  return <AnswerField label={uk.answer} value={value} onChange={onChange} disabled={disabled} readOnly={readOnly} result={result} showErrors={showErrors} showCorrectAnswers={showCorrectAnswers} />;
}
