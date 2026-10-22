'use client';

import type { InteractionProps } from './interaction-props';
import { useId, useRef } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import type { Item } from '../../types/questions';
import { uk } from './messages';
export function ClickBlockBuilder({ question, value, onChange, disabled, readOnly }: InteractionProps<'block-builder'>) {
  const available = question.blocks.filter(b => !value.includes(b.id));
  const addButtons = useRef(new Map<string, HTMLButtonElement>());
  const removeButtons = useRef(new Map<string, HTMLButtonElement>());
  const heading = useId();
  const hint = useId();
  const label = (item: Item) => `${item.label} (${question.blocks.findIndex(b => b.id === item.id) + 1})`;
  return <Stack spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
    <Typography id={hint} variant="body2" sx={{ textAlign: 'center' }}>{uk.blockHint}</Typography>
    <Box sx={{ width: '100%', textAlign: 'center' }} role="group" aria-labelledby={`${heading}-built`} aria-describedby={hint}>
      <Typography id={`${heading}-built`} variant="subtitle2">{uk.built}</Typography>
      <Stack direction="row" useFlexGap sx={{ my: 1, minHeight: 48, flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
        {!value.length && <Typography color="text.secondary">{uk.emptyBlocks}</Typography>}
        {value.map((id, index) => {
          const block = question.blocks.find(b => b.id === id);
          if (!block) return null;
          return <Button key={id} variant="contained" disabled={disabled || readOnly}
            ref={el => { if (el) removeButtons.current.set(id, el); else removeButtons.current.delete(id); }}
            aria-label={`${uk.remove}: ${label(block)}`} sx={{ maxWidth: '100%', overflowWrap: 'anywhere' }}
            onClick={() => { onChange(value.filter(v => v !== id)); requestAnimationFrame(() => (removeButtons.current.get(value[index + 1] ?? value[index - 1]) ?? addButtons.current.get(id))?.focus()); }}>{block.label}</Button>;
        })}
      </Stack>
      <Button disabled={disabled || readOnly || !value.length} onClick={() => { onChange([]); requestAnimationFrame(() => addButtons.current.get(question.blocks[0]?.id)?.focus()); }}>{uk.clear}</Button>
    </Box>
    <Box sx={{ width: '100%', textAlign: 'center' }} role="group" aria-labelledby={`${heading}-available`}>
      <Typography id={`${heading}-available`} variant="subtitle2">{uk.available}</Typography>
      <Stack direction="row" useFlexGap sx={{ mt: 1, flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
        {!available.length && <Typography color="text.secondary">{uk.noBlocks}</Typography>}
        {available.map((block, index) => <Button key={block.id} variant="outlined" disabled={disabled || readOnly}
          ref={el => { if (el) addButtons.current.set(block.id, el); else addButtons.current.delete(block.id); }}
          aria-label={`${uk.add}: ${label(block)}`} sx={{ maxWidth: '100%', overflowWrap: 'anywhere' }}
          onClick={() => { onChange([...value, block.id]); requestAnimationFrame(() => (addButtons.current.get(available[index + 1]?.id ?? available[index - 1]?.id) ?? removeButtons.current.get(block.id))?.focus()); }}>{block.label}</Button>)}
      </Stack>
    </Box>
  </Stack>;
}
