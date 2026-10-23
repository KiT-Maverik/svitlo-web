'use client';

import { useId, useState } from 'react';
import { alpha, ButtonBase, Box, Typography } from '@mui/material';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import CheckCircle from '@mui/icons-material/CheckCircle';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutlined';
import type { ChoiceFeedback } from './feedback';
import { uk } from './messages';
import Close from '@mui/icons-material/Close';

/** Reusable toggle. The entire answer, including its icon, is one button. */
export function AnswerOption({ label, selected, onToggle, disabled = false, feedback }: {
  label: string; selected: boolean; onToggle: () => void; disabled?: boolean; feedback?: ChoiceFeedback;
}) {
  const [showRemove, setShowRemove] = useState(false);
  const description = useId();
  const locked = disabled || Boolean(feedback);
  const tone = feedback === 'correct' ? 'success' : feedback === 'incorrect' ? 'error' : feedback === 'missed' ? 'warning' : null;
  const feedbackText = feedback ? uk[feedback === 'correct' ? 'optionCorrect' : feedback === 'incorrect' ? 'optionIncorrect' : 'optionMissed'] : '';

  return <ButtonBase aria-label={label} aria-describedby={feedback ? description : undefined} data-feedback={feedback} aria-pressed={selected} disabled={locked}
    onPointerEnter={() => setShowRemove(selected)} onPointerLeave={() => setShowRemove(false)}
    onFocus={() => setShowRemove(selected)} onBlur={() => setShowRemove(false)}
    onClick={() => { setShowRemove(false); onToggle(); }}
    sx={{
      width: '100%', justifyContent: 'flex-start', gap: 1.5, px: 2, py: 1.5,
      border: '1px solid', borderStyle: feedback === 'missed' ? 'dashed' : 'solid', borderColor: tone ? `${tone}.main` : selected ? 'primary.main' : 'transparent',
      bgcolor: theme => tone ? alpha(theme.palette[tone].main, 0.12) : 'transparent',
      transition: theme => theme.transitions.create(['border-color', 'background-color'], { duration: 180, easing: theme.transitions.easing.easeInOut }),
      '@media (prefers-reduced-motion: reduce)': { transition: 'none', '& svg, & span': { transition: 'none' } },
      borderRadius: 1, textAlign: 'left', minHeight: 48,
      '&:not(.Mui-disabled):hover': { bgcolor: 'action.hover' },
      '&.Mui-disabled': { opacity: feedback ? 1 : 0.6, color: 'text.primary' },
      '&.Mui-focusVisible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 },
    }}>
    <Box component="span" aria-hidden="true" sx={{ position: 'relative', width: 24, height: 24, flexShrink: 0, color: tone ? `${tone}.main` : selected ? 'primary.main' : 'text.secondary', transition: 'color 180ms ease-in-out', '& svg': { position: 'absolute', inset: 0, transition: 'opacity 180ms ease-in-out, transform 180ms ease-in-out, visibility 180ms' }, '@media (prefers-reduced-motion: reduce)': { transition: 'none', '& svg': { transition: 'none' } } }}>
      {feedback ? feedback === 'correct' ? <CheckCircle /> : feedback === 'incorrect' ? <Close /> : <CheckCircleOutline /> : <>
      <RadioButtonUnchecked sx={{ opacity: selected ? 0 : 1, visibility: selected ? 'hidden' : 'visible', transform: selected ? 'scale(.8)' : 'scale(1)' }} />
      <RadioButtonChecked className="answer-selected" sx={{ opacity: selected && !(showRemove && !locked) ? 1 : 0, visibility: selected && !(showRemove && !locked) ? 'visible' : 'hidden', transform: selected ? 'scale(1)' : 'scale(.8)' }} />
      <Close className="answer-remove" sx={{ opacity: selected && showRemove && !locked ? 1 : 0, visibility: selected && showRemove && !locked ? 'visible' : 'hidden', transform: showRemove ? 'rotate(0deg) scale(1)' : 'rotate(-45deg) scale(.8)' }} />
      </>}
    </Box>
    <Box component="span" sx={{ minWidth: 0 }}><Typography component="span" sx={{ overflowWrap: 'anywhere' }}>{label}</Typography>
      {feedback && <Typography id={description} component="span" variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>{feedbackText}</Typography>}
    </Box>
  </ButtonBase>;
}

/** Max-content measures the widest label; all rows stretch to that one width. */
export const answerColumnSx = {
  display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 1,
  width: 'max-content', maxWidth: '100%', mx: 'auto', textAlign: 'left',
};
