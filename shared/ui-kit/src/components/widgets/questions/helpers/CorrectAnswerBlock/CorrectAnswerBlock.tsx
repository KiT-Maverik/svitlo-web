'use client';

import { alpha, Box } from '@mui/material';
import { uk } from '../../messages';

export function CorrectAnswerBlock({ label }: { label: string }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        verticalAlign: 'middle',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 96,
        minHeight: 40,
        mx: 0.5,
        px: 0.75,
        position: 'relative',
        border: '1px dashed',
        borderColor: 'info.main',
        borderRadius: 1,
        bgcolor: theme => alpha(theme.palette.info.main, 0.12),
        color: 'info.main',
        lineHeight: 1.4,
        overflowWrap: 'anywhere',
        animation: 'correct-answer-block-in 180ms ease-out both',
        '@keyframes correct-answer-block-in': {
          from: { opacity: 0, transform: 'scale(.85)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      {label}
      <Box
        component="span"
        role="img"
        aria-label={uk.optionCorrect}
        sx={{
          position: 'absolute',
          left: '50%',
          top: 0,
          zIndex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 22,
          height: 22,
          border: '1px solid',
          borderColor: 'info.main',
          borderRadius: '50%',
          bgcolor: 'background.paper',
          color: 'info.main',
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1,
          transform: 'translate(-50%, -50%)',
        }}
      >
        i
      </Box>
    </Box>
  );
}
