'use client';

import { useId } from 'react';
import DragIndicator from '@mui/icons-material/DragIndicator';
import { Box, ButtonBase, Divider, Stack, Typography } from '@mui/material';
import { closestCenter, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { InteractionProps } from './interaction-props';
import type { Item } from '../../types/questions';
import { answerColumnSx } from './AnswerOption';
import { uk } from './messages';

function SortableAnswer({ item, position, disabled }: { item: Item; position: number; disabled: boolean }) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: item.id, disabled });
  return <Box component="li" sx={{ display: 'flex', alignItems: 'stretch', minWidth: 0 }}>
    <Typography component="span" aria-hidden="true" sx={{ width: 32, flexShrink: 0, alignSelf: 'center', textAlign: 'center', color: 'text.secondary' }}>{position}</Typography>
    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
    <ButtonBase ref={node => { setNodeRef(node); setActivatorNodeRef(node); }} {...attributes} {...listeners}
      aria-label={`${item.label} (${position})`} disabled={disabled}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      sx={{
        flex: 1, minWidth: 0, justifyContent: 'flex-start', gap: 2, px: 2, py: 1.5,
        borderRadius: 1, textAlign: 'left', minHeight: 48, cursor: disabled ? 'default' : isDragging ? 'grabbing' : 'grab',
        bgcolor: isDragging ? 'action.selected' : 'background.paper', zIndex: isDragging ? 1 : 'auto',
        boxShadow: isDragging ? 3 : 0,
        '&:not(.Mui-disabled):hover': { bgcolor: 'action.hover' },
        '&.Mui-disabled': { opacity: 0.6 },
        '&.Mui-focusVisible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 },
      }}>
      <DragIndicator aria-hidden="true" sx={{ flexShrink: 0, color: 'text.secondary' }} />
      <Typography component="span" sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>{item.label}</Typography>
    </ButtonBase>
  </Box>;
}

export function Ordering({ question, value, onChange, disabled, readOnly }: InteractionProps<'ordering'>) {
  const id = useId();
  const locked = Boolean(disabled || readOnly);
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    // A short hold starts dragging; moving before the hold allows ordinary scrolling.
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates, scrollBehavior: 'auto' }),
  );
  const label = (itemId: string | number) => question.items.find(item => item.id === itemId)?.label ?? String(itemId);
  return <Stack spacing={2} sx={{ alignItems: 'center', maxWidth: '100%' }}>
    <Typography id={`${id}-hint`} variant="body2" sx={{ textAlign: 'center' }}>{uk.orderingHint}</Typography>
    <DndContext id={id} sensors={sensors} collisionDetection={closestCenter}
      accessibility={{
        screenReaderInstructions: { draggable: uk.orderingKeyboard },
        announcements: {
          onDragStart: ({ active }) => `${uk.pickedUp}: ${label(active.id)}.`,
          onDragOver: ({ active, over }) => over ? `${label(active.id)}. ${uk.position}: ${value.indexOf(String(over.id)) + 1}.` : undefined,
          onDragEnd: ({ active, over }) => `${label(active.id)}. ${over ? `${uk.position}: ${value.indexOf(String(over.id)) + 1}. ${uk.dropped}` : uk.dragCancelled}`,
          onDragCancel: () => uk.dragCancelled,
        },
      }}
      onDragEnd={({ active, over }) => {
        if (locked || !over || active.id === over.id) return;
        const from = value.indexOf(String(active.id));
        const to = value.indexOf(String(over.id));
        if (from >= 0 && to >= 0) onChange(arrayMove(value, from, to));
      }}>
      <SortableContext items={value} strategy={verticalListSortingStrategy}>
        <Box component="ol" aria-label={question.prompt} aria-describedby={`${id}-hint`} sx={{ ...answerColumnSx, listStyle: 'none', p: 0, my: 0 }}>
          {value.map((itemId, index) => {
            const item = question.items.find(item => item.id === itemId);
            return item ? <SortableAnswer key={item.id} item={item} position={index + 1} disabled={locked} /> : null;
          })}
        </Box>
      </SortableContext>
    </DndContext>
  </Stack>;
}
