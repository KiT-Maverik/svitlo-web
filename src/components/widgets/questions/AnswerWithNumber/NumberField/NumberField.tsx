'use client';

import { useId } from 'react';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { alpha, Box, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Close from '@mui/icons-material/Close';
import type { CheckResult } from '@types';
import { resultFeedback, type FeedbackVisibility } from '../../feedback';
import { uk } from '../../messages';

interface NumberFieldProps extends FeedbackVisibility {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  result?: CheckResult | null;
  helperText?: string;
}

/** AnswerWithNumber answer field based on the MUI v9 NumberField recipe. */
export function NumberField({ label, value, onChange, disabled, readOnly, result, helperText, ...visibility }: NumberFieldProps) {
  const id = useId();
  const feedback = resultFeedback(result, visibility);
  const tone = feedback === 'correct' ? 'success' : 'error';
  const parsedValue = value.trim() === '' ? null : Number(value.replace(',', '.'));
  const numberValue = Number.isFinite(parsedValue) ? parsedValue : null;

  return <BaseNumberField.Root
    id={id}
    value={numberValue}
    disabled={disabled}
    readOnly={readOnly || Boolean(result)}
    onValueChange={next => onChange(next === null ? '' : String(next))}
    render={(rootProps, state) => <FormControl
      fullWidth
      ref={rootProps.ref}
      disabled={state.disabled}
      error={feedback === 'incorrect'}
      data-feedback={feedback}
      sx={{ maxWidth: 440, mx: 'auto', '& input:focus, & input:focus-visible': { outline: 'none' }, '& .MuiOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': { borderColor: 'divider', borderWidth: 1 }, '& .MuiOutlinedInput-root': { transition: theme => theme.transitions.create('background-color', { duration: 220, easing: theme.transitions.easing.easeInOut }) }, '& .MuiOutlinedInput-notchedOutline': { transition: theme => theme.transitions.create('border-color', { duration: 220, easing: theme.transitions.easing.easeInOut }) }, ...(feedback ? { '& .MuiOutlinedInput-root': { bgcolor: theme => alpha(theme.palette[tone].main, 0.1) }, '& .MuiOutlinedInput-notchedOutline': { borderColor: `${tone}.main` } } : {}), '@media (prefers-reduced-motion: reduce)': { '& .MuiOutlinedInput-root, & .MuiOutlinedInput-notchedOutline': { transition: 'none' } } }}
    >{rootProps.children}</FormControl>}
  >
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <BaseNumberField.Input
      id={id}
      render={(inputProps, state) => <OutlinedInput
        inputRef={inputProps.ref}
        value={state.inputValue}
        onBlur={inputProps.onBlur}
        onChange={inputProps.onChange}
        onKeyUp={inputProps.onKeyUp}
        onKeyDown={inputProps.onKeyDown}
        onFocus={inputProps.onFocus}
        onMouseDown={event => { if (result) event.preventDefault(); }}
        slotProps={{ input: { ...inputProps, inputMode: 'decimal', readOnly: readOnly || Boolean(result), tabIndex: result ? -1 : undefined } }}
        label={label}
        endAdornment={<InputAdornment position="end"><Box component="span" role={feedback ? 'img' : undefined} aria-label={feedback === 'correct' ? uk.optionCorrect : feedback === 'incorrect' ? uk.optionIncorrect : undefined} sx={{ display: 'flex', justifyContent: 'flex-end', width: feedback ? 24 : 0, overflow: 'hidden', color: `${tone}.main`, opacity: feedback ? 1 : 0, transform: feedback ? 'scale(1)' : 'scale(.55)', transformOrigin: 'center', transition: theme => theme.transitions.create(['width', 'opacity', 'transform'], { duration: 180, easing: theme.transitions.easing.easeOut }), animation: feedback ? 'answer-feedback-pop 180ms ease-out both' : 'none', '@media (prefers-reduced-motion: reduce)': { transition: 'none', animation: 'none' } }}>{feedback === 'correct' ? <CheckCircle key="correct" /> : feedback === 'incorrect' ? <Close key="incorrect" /> : null}</Box></InputAdornment>}
      />}
    />
    <FormHelperText>{helperText}</FormHelperText>
  </BaseNumberField.Root>;
}
