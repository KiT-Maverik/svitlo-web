'use client';
import type { InteractionProps } from './interaction-props';
import { NumberAnswerField } from './NumberAnswerField';
import { uk } from './messages';
export function Numeric({ question, value, onChange, disabled, readOnly, result, showErrors, showCorrectAnswers }: InteractionProps<'numeric'>) {
  return <NumberAnswerField label={question.unit ? `${uk.answer} (${question.unit})` : uk.answer} value={value} onChange={onChange} disabled={disabled} readOnly={readOnly} result={result} showErrors={showErrors} showCorrectAnswers={showCorrectAnswers} helperText={uk.numberFormat} />;
}
