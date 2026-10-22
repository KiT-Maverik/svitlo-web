'use client';

import { useId, useState } from 'react';
import { Box, Button, ButtonBase, Stack, Typography } from '@mui/material';
import DragIndicator from '@mui/icons-material/DragIndicator';
import { closestCenter, DndContext, type KeyboardCoordinateGetter, KeyboardSensor, MouseSensor, TouchSensor, useDraggable, useDroppable, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { InteractionProps } from './interaction-props';
import type { Item } from '../../types/questions';
import { uk } from './messages';

function Block({ item, index, selected, locked, toggle }: { item: Item; index: number; selected: boolean; locked: boolean; toggle: () => void }) {
  return selected ? <SortableBlock item={item} index={index} locked={locked} toggle={toggle} /> : <AvailableBlock item={item} index={index} locked={locked} toggle={toggle} />;
}
const blockSx = { border: '1px solid', borderColor: 'primary.main', borderRadius: 1, px: 1.5, py: 1, minHeight: 44, gap: 0.5, maxWidth: '100%', textAlign: 'left', '&:hover': { bgcolor: 'action.hover' }, '&.Mui-disabled': { opacity: 0.6 } };
function AvailableBlock({ item, index, locked, toggle }: { item: Item; index: number; locked: boolean; toggle: () => void }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: item.id, disabled: locked });
  return <ButtonBase ref={setNodeRef} {...attributes} {...listeners} onKeyDown={undefined} aria-pressed={undefined}
    aria-label={`${uk.add}: ${item.label} (${index + 1})`} disabled={locked} onClick={toggle}
    style={{ transform: CSS.Translate.toString(transform) }} sx={{ ...blockSx, bgcolor: 'background.paper', zIndex: isDragging ? 2 : 'auto', cursor: 'grab' }}>
    <Typography component="span" sx={{ overflowWrap: 'anywhere' }}>{item.label}</Typography><DragIndicator fontSize="small" aria-hidden="true" />
  </ButtonBase>;
}
function SortableBlock({ item, index, locked, toggle }: { item: Item; index: number; locked: boolean; toggle: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id, disabled: locked });
  return <ButtonBase ref={setNodeRef} {...attributes} {...listeners} aria-label={`${uk.remove}: ${item.label} (${index + 1})`} disabled={locked} onClick={toggle}
    style={{ transform: CSS.Transform.toString(transform), transition }}
    sx={{ ...blockSx, bgcolor: 'primary.main', color: 'primary.contrastText', zIndex: isDragging ? 2 : 'auto', cursor: 'grab', '&:hover': { bgcolor: 'primary.dark' } }}>
    <Typography component="span" sx={{ overflowWrap: 'anywhere' }}>{item.label}</Typography><DragIndicator fontSize="small" aria-hidden="true" />
  </ButtonBase>;
}
function DropZone({ id, label, children, locked }: { id: string; label: string; children: React.ReactNode; locked: boolean }) {
  const { setNodeRef, isOver } = useDroppable({ id, disabled: locked });
  return <Box ref={setNodeRef} role="group" aria-label={label} sx={{ width: '100%', p: 2, border: '1px dashed', borderColor: isOver ? 'primary.main' : 'divider', borderRadius: 1, bgcolor: isOver ? 'action.hover' : 'transparent', minHeight: 100 }}>
    <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'center' }}>{label}</Typography>
    <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1, minHeight: 44 }}>{children}</Stack>
  </Box>;
}
export function DragBlockBuilder({ question, value, onChange, disabled, readOnly }: InteractionProps<'block-builder'>) {
  const id = useId(), answerId = `${id}-answer`, bankId = `${id}-bank`;
  const locked = Boolean(disabled || readOnly);
  const [keyboardDrag, setKeyboardDrag] = useState(false);
  // The answer is one logical sequence even when its visual rows wrap.
  const keyboardCoordinates: KeyboardCoordinateGetter = (event, { context }) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.code)) return;
    event.preventDefault();
    const current = value.indexOf(String(context.over?.id ?? context.active?.id));
    const delta = event.code === 'ArrowLeft' || event.code === 'ArrowUp' ? -1 : 1;
    const target = value[Math.max(0, Math.min(value.length - 1, current + delta))];
    const rect = context.droppableRects.get(target);
    return rect ? { x: rect.left, y: rect.top } : undefined;
  };
  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }), useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }), useSensor(KeyboardSensor, { coordinateGetter: keyboardCoordinates, scrollBehavior: 'auto', keyboardCodes: { start: ['Space'], cancel: ['Escape'], end: ['Space', 'Enter'] } }));
  const available = question.blocks.filter(item => !value.includes(item.id));
  const renderBlock = (item: Item, selected: boolean) => <Block key={item.id} item={item} index={question.blocks.findIndex(b => b.id === item.id)} selected={selected} locked={locked} toggle={() => { if (!locked) onChange(selected ? value.filter(v => v !== item.id) : [...value, item.id]); }} />;
  return <Stack spacing={2} sx={{ width: '100%', maxWidth: 600, mx: 'auto', alignItems: 'center' }}>
    <Typography variant="body2" sx={{ textAlign: 'center' }}>{uk.dragBlockHint}</Typography>
    <DndContext id={id} sensors={sensors} collisionDetection={closestCenter}
      accessibility={{ screenReaderInstructions: { draggable: uk.dragBlockKeyboard }, announcements: {
        onDragStart: ({ active }) => `${uk.pickedUp}: ${question.blocks.find(b => b.id === active.id)?.label}`,
        onDragOver: ({ over }) => over ? `${uk.position}: ${value.indexOf(String(over.id)) + 1}` : undefined,
        onDragEnd: () => uk.dropped, onDragCancel: () => uk.dragCancelled,
      } }}
      onDragStart={event => setKeyboardDrag(event.activatorEvent.type === 'keydown')}
      onDragCancel={() => setKeyboardDrag(false)}
      onDragEnd={({ active, over }) => {
        setKeyboardDrag(false);
        if (locked || !over) return;
        const itemId = String(active.id), target = String(over.id);
        if (!question.blocks.some(b => b.id === itemId)) return;
        if (target === bankId || available.some(b => b.id === target && target !== itemId)) {
          if (value.includes(itemId)) onChange(value.filter(v => v !== itemId));
          return;
        }
        if (target !== answerId && !value.includes(target)) return;
        const from = value.indexOf(itemId), to = value.indexOf(target);
        if (from < 0) {
          const next = [...value]; next.splice(to < 0 ? next.length : to, 0, itemId); onChange(next);
        } else if (target !== itemId) onChange(arrayMove(value, from, to < 0 ? value.length - 1 : to));
      }}>
      <SortableContext items={value} strategy={rectSortingStrategy}>
        <DropZone id={answerId} label={uk.built} locked={locked || keyboardDrag}>
          {!value.length && <Typography color="text.secondary">{uk.emptyBlocks}</Typography>}
          {value.map(itemId => { const item = question.blocks.find(b => b.id === itemId); return item ? renderBlock(item, true) : null; })}
        </DropZone>
      </SortableContext>
      <DropZone id={bankId} label={uk.available} locked={locked || keyboardDrag}>
        {!available.length && <Typography color="text.secondary">{uk.noBlocks}</Typography>}
        {available.map(item => renderBlock(item, false))}
      </DropZone>
    </DndContext>
    <Button disabled={locked || !value.length} onClick={() => onChange([])}>{uk.clear}</Button>
  </Stack>;
}
