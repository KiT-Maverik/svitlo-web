'use client';
import type { InteractionProps } from '../interaction-props';
import { TextField } from './TextField/TextField';
import { uk } from '../messages';
export function AnswerWithText({
  value,
  onChange,
  disabled,
  readOnly,
  result,
  showErrors,
  showCorrectAnswers,
}: InteractionProps<'short-text'>) {
  return (
    <TextField
      label={uk.answer}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      result={result}
      showErrors={showErrors}
      showCorrectAnswers={showCorrectAnswers}
    />
  );
}
