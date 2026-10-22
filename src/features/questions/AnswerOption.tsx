'use client';

import { useState } from 'react';
import { ButtonBase, Box, Typography } from '@mui/material';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import Close from '@mui/icons-material/Close';

/** Reusable toggle. The entire answer, including its icon, is one button. */
export function AnswerOption({ label, selected, onToggle, disabled = false }: {
  label: string; selected: boolean; onToggle: () => void; disabled?: boolean;
}) {
  const [showRemove, setShowRemove] = useState(false);
  return <ButtonBase aria-pressed={selected} disabled={disabled}
    onPointerEnter={() => setShowRemove(selected)} onPointerLeave={() => setShowRemove(false)}
    onFocus={() => setShowRemove(selected)} onBlur={() => setShowRemove(false)}
    onClick={() => { setShowRemove(false); onToggle(); }}
    sx={{
      width: '100%', justifyContent: 'flex-start', gap: 1.5, px: 2, py: 1.5,
      border: '1px solid', borderColor: selected ? 'primary.main' : 'transparent',
      transition: theme => theme.transitions.create(['border-color', 'background-color'], { duration: 180, easing: theme.transitions.easing.easeInOut }),
      '@media (prefers-reduced-motion: reduce)': { transition: 'none', '& svg': { transition: 'none' } },
      borderRadius: 1, textAlign: 'left', minHeight: 48,
      '&:not(.Mui-disabled):hover': { bgcolor: 'action.hover' },
      '&.Mui-disabled': { opacity: 0.6 },
      '&.Mui-focusVisible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 },
    }}>
    <Box component="span" aria-hidden="true" sx={{ position: 'relative', width: 24, height: 24, flexShrink: 0, color: selected ? 'primary.main' : 'text.secondary', transition: 'color 180ms ease-in-out', '& svg': { position: 'absolute', inset: 0, transition: 'opacity 180ms ease-in-out, transform 180ms ease-in-out, visibility 180ms' } }}>
      <RadioButtonUnchecked sx={{ opacity: selected ? 0 : 1, visibility: selected ? 'hidden' : 'visible', transform: selected ? 'scale(.8)' : 'scale(1)' }} />
      <RadioButtonChecked className="answer-selected" sx={{ opacity: selected && !(showRemove && !disabled) ? 1 : 0, visibility: selected && !(showRemove && !disabled) ? 'visible' : 'hidden', transform: selected ? 'scale(1)' : 'scale(.8)' }} />
      <Close className="answer-remove" sx={{ opacity: selected && showRemove && !disabled ? 1 : 0, visibility: selected && showRemove && !disabled ? 'visible' : 'hidden', transform: showRemove ? 'rotate(0deg) scale(1)' : 'rotate(-45deg) scale(.8)' }} />
    </Box>
    <Typography component="span" sx={{ overflowWrap: 'anywhere', minWidth: 0 }}>{label}</Typography>
  </ButtonBase>;
}

/** Max-content measures the widest label; all rows stretch to that one width. */
export const answerColumnSx = {
  display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 1,
  width: 'max-content', maxWidth: '100%', mx: 'auto', textAlign: 'left',
};
