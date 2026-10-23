'use client';
import type { InteractionProps } from './interaction-props';
import { AnswerField } from './AnswerField';
import { uk } from './messages';
export function Numeric({ question, value, onChange, disabled, readOnly, result, showErrors, showCorrectAnswers }: InteractionProps<'numeric'>) {
  return <AnswerField label={question.unit ? `${uk.answer} (${question.unit})` : uk.answer} value={value} onChange={onChange} disabled={disabled} readOnly={readOnly} result={result} showErrors={showErrors} showCorrectAnswers={showCorrectAnswers} inputMode="decimal" helperText={uk.numberFormat} />;
}
