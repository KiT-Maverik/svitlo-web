'use client';

import { useId, useRef } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import type { InteractionProps, Item } from './model';
import { uk } from './messages';

export function SingleSelect({ question, value, onChange, disabled, readOnly }: InteractionProps<'single-select'>) {
  return <RadioGroup aria-label={question.prompt} value={value ?? ''} onChange={(_, id) => { if (!disabled && !readOnly) onChange(id); }}>
    {question.options.map(item => <FormControlLabel key={item.id} value={item.id} control={<Radio disabled={disabled || readOnly} />} label={item.label} />)}
  </RadioGroup>;
}
export function MultipleSelect({ question, value, onChange, disabled, readOnly }: InteractionProps<'multiple-select'>) {
  return <Stack role="group" aria-label={question.prompt}>
    {question.options.map(item => <FormControlLabel key={item.id} label={item.label} control={<Checkbox disabled={disabled || readOnly} checked={value.includes(item.id)} onChange={(_, checked) => onChange(checked ? [...value, item.id] : value.filter(id => id !== item.id))} />} />)}
  </Stack>;
}
export function Matching({ question, value, onChange, disabled, readOnly }: InteractionProps<'matching'>) {
  const id = useId();
  return <Stack spacing={2}>
    {question.left.map((item, index) => <TextField key={item.id} id={`${id}-${index}`} select label={item.label} value={value[item.id] ?? ''} disabled={disabled || readOnly}
      onChange={e => onChange({ ...value, [item.id]: e.target.value })}
      slotProps={{ select: { native: true }, inputLabel: { shrink: true } }}>
      <option value="">{uk.choose}</option>
      {question.right.map(right => <option key={right.id} value={right.id} disabled={Object.entries(value).some(([leftId, rightId]) => leftId !== item.id && rightId === right.id)}>{right.label}</option>)}
    </TextField>)}
  </Stack>;
}
export function ShortText({ value, onChange, disabled, readOnly }: InteractionProps<'short-text'>) {
  const id = useId();
  return <TextField id={id} fullWidth label={uk.answer} value={value} onChange={e => onChange(e.target.value)} disabled={disabled} slotProps={{ input: { readOnly } }} />;
}
export function Numeric({ question, value, onChange, disabled, readOnly }: InteractionProps<'numeric'>) {
  const id = useId();
  return <TextField id={id} fullWidth label={question.unit ? `${uk.answer} (${question.unit})` : uk.answer} value={value} onChange={e => onChange(e.target.value)} disabled={disabled}
    helperText={uk.numberFormat} slotProps={{ input: { readOnly }, htmlInput: { inputMode: 'decimal' } }} />;
}
export function Ordering({ question, value, onChange, disabled, readOnly }: InteractionProps<'ordering'>) {
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  const hint = useId();
  function move(index: number, offset: number) {
    const next = [...value];
    [next[index], next[index + offset]] = [next[index + offset], next[index]];
    onChange(next);
    // If the move hits an edge, focus the remaining enabled direction.
    const destination = index + offset;
    const direction = destination === 0 ? 'down' : destination === value.length - 1 ? 'up' : offset < 0 ? 'up' : 'down';
    requestAnimationFrame(() => buttons.current.get(`${value[index]}-${direction}`)?.focus());
  }
  return <Stack spacing={1}>
    <Typography id={hint} variant="body2">{uk.orderingHint}</Typography>
    <Stack component="ol" aria-label={question.prompt} aria-describedby={hint} spacing={1} sx={{ pl: 3 }}>
      {value.map((id, index) => <Box component="li" key={id}>
        <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ flex: '1 1 120px', overflowWrap: 'anywhere' }}>{question.items.find(item => item.id === id)?.label ?? id}</Typography>
          {([-1, 1] as const).map(offset => <Button key={offset} size="small" variant="outlined"
            ref={el => { if (el) buttons.current.set(`${id}-${offset < 0 ? 'up' : 'down'}`, el); else buttons.current.delete(`${id}-${offset < 0 ? 'up' : 'down'}`); }}
            aria-label={`${offset < 0 ? uk.up : uk.down}: ${question.items.find(item => item.id === id)?.label} (${index + 1})`}
            disabled={disabled || readOnly || index + offset < 0 || index + offset >= value.length} onClick={() => move(index, offset)}>{offset < 0 ? uk.up : uk.down}</Button>)}
        </Stack>
      </Box>)}
    </Stack>
    {!value.length && <Button disabled={disabled || readOnly} onClick={() => onChange(question.items.map(i => i.id))}>{uk.reset}</Button>}
  </Stack>;
}
export function BlockBuilder({ question, value, onChange, disabled, readOnly }: InteractionProps<'block-builder'>) {
  const available = question.blocks.filter(b => !value.includes(b.id));
  const addButtons = useRef(new Map<string, HTMLButtonElement>());
  const removeButtons = useRef(new Map<string, HTMLButtonElement>());
  const heading = useId();
  const hint = useId();
  const label = (item: Item) => `${item.label} (${question.blocks.findIndex(b => b.id === item.id) + 1})`;
  return <Stack spacing={2}>
    <Typography id={hint} variant="body2">{uk.blockHint}</Typography>
    <Box role="group" aria-labelledby={`${heading}-built`} aria-describedby={hint}>
      <Typography id={`${heading}-built`} variant="subtitle2">{uk.built}</Typography>
      <Stack direction="row" useFlexGap sx={{ my: 1, minHeight: 48, flexWrap: 'wrap', gap: 1 }}>
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
    <Box role="group" aria-labelledby={`${heading}-available`}>
      <Typography id={`${heading}-available`} variant="subtitle2">{uk.available}</Typography>
      <Stack direction="row" useFlexGap sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
        {!available.length && <Typography color="text.secondary">{uk.noBlocks}</Typography>}
        {available.map((block, index) => <Button key={block.id} variant="outlined" disabled={disabled || readOnly}
          ref={el => { if (el) addButtons.current.set(block.id, el); else addButtons.current.delete(block.id); }}
          aria-label={`${uk.add}: ${label(block)}`} sx={{ maxWidth: '100%', overflowWrap: 'anywhere' }}
          onClick={() => { onChange([...value, block.id]); requestAnimationFrame(() => (addButtons.current.get(available[index + 1]?.id ?? available[index - 1]?.id) ?? removeButtons.current.get(block.id))?.focus()); }}>{block.label}</Button>)}
      </Stack>
    </Box>
  </Stack>;
}
