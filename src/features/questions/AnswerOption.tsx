'use client';

import { ButtonBase, Box, Typography } from '@mui/material';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import Close from '@mui/icons-material/Close';

/** Reusable toggle. The entire answer, including its icon, is one button. */
export function AnswerOption({ label, selected, onToggle, disabled = false }: {
  label: string; selected: boolean; onToggle: () => void; disabled?: boolean;
}) {
  return <ButtonBase aria-pressed={selected} disabled={disabled} onClick={onToggle}
    sx={{
      width: '100%', justifyContent: 'flex-start', gap: 1.5, px: 2, py: 1.5,
      border: '1px solid', borderColor: selected ? 'primary.main' : 'transparent',
      borderRadius: 1, textAlign: 'left', minHeight: 48,
      '&:not(.Mui-disabled):hover': { bgcolor: 'action.hover' },
      '&.Mui-disabled': { opacity: 0.6 },
      '&.Mui-focusVisible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 },
      '@media (hover: hover)': selected && !disabled ? {
        '&:hover .answer-selected': { display: 'none' },
        '&:hover .answer-remove': { display: 'block' },
      } : {},
      ...selected && !disabled ? {
        '&.Mui-focusVisible .answer-selected': { display: 'none' },
        '&.Mui-focusVisible .answer-remove': { display: 'block' },
      } : {},
    }}>
    <Box component="span" aria-hidden="true" sx={{ display: 'flex', flexShrink: 0, color: selected ? 'primary.main' : 'text.secondary' }}>
      {selected ? <><RadioButtonChecked className="answer-selected" /><Close className="answer-remove" sx={{ display: 'none' }} /></> : <RadioButtonUnchecked />}
    </Box>
    <Typography component="span" sx={{ overflowWrap: 'anywhere', minWidth: 0 }}>{label}</Typography>
  </ButtonBase>;
}

/** Max-content measures the widest label; all rows stretch to that one width. */
export const answerColumnSx = {
  display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 1,
  width: 'max-content', maxWidth: '100%', mx: 'auto', textAlign: 'left',
};
