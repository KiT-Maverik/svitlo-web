'use client';

import { useId, useRef, useState } from 'react';
import { Box, Chip, Stack, Typography, useMediaQuery } from '@mui/material';
import { closestCenter, DndContext, DragOverlay, type CollisionDetection, type KeyboardCoordinateGetter, KeyboardSensor, MouseSensor, TouchSensor, useDraggable, useDroppable, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable';
import type { InteractionProps } from './interaction-props';
import type { Item } from '../../types/questions';
import { uk } from './messages';

const chipSx = {
  height: 'auto', minHeight: 32, alignSelf: 'center', flex: '0 0 auto', bgcolor: 'transparent', maxWidth: '100%', fontSize: '1rem', cursor: 'grab',
  '& .MuiChip-label': { whiteSpace: 'normal', overflowWrap: 'anywhere', overflow: 'visible', textOverflow: 'clip', py: 0.25 },
  '&:active': { cursor: 'grabbing' },
};
function AvailableBlock({ item, index, locked, toggle }: { item: Item; index: number; locked: boolean; toggle: (node: HTMLElement) => void }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: item.id, disabled: locked });
  return <Chip component="button" clickable variant="outlined" ref={setNodeRef} {...attributes} {...listeners} onKeyDown={undefined} aria-pressed={undefined}
    aria-label={`${uk.add}: ${item.label} (${index + 1})`} label={item.label} disabled={locked} onClick={event => toggle(event.currentTarget)}
    sx={{ ...chipSx, opacity: isDragging ? 0.25 : 1 }} />;
}
function SortableBlock({ item, index, locked, toggle }: { item: Item; index: number; locked: boolean; toggle: (node: HTMLElement) => void }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id: item.id, disabled: locked });
  return <Chip component="button" clickable ref={setNodeRef} {...attributes} {...listeners}
    aria-label={`${uk.remove}: ${item.label} (${index + 1})`} label={item.label} variant="outlined" disabled={locked} onClick={event => toggle(event.currentTarget)}
    sx={{ ...chipSx, opacity: isDragging ? 0.25 : 1 }} />;
}
function DropZone({ id, label, children, locked }: { id: string; label: string; children: React.ReactNode; locked: boolean }) {
  const { setNodeRef, isOver } = useDroppable({ id, disabled: locked });
  return <Box ref={setNodeRef} role="group" aria-label={label} sx={{ width: '100%', p: 2, border: '1px dashed', borderColor: isOver ? 'primary.main' : 'divider', borderRadius: 1, minHeight: 100 }}>
    <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'center' }}>{label}</Typography>
    <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1, minHeight: 44, alignItems: 'center' }}>{children}</Stack>
  </Box>;
}
type Preview = { zone: 'answer' | 'bank'; index: number };
type DragGeometry = Parameters<CollisionDetection>[0]['droppableRects'];
export function DragBlockBuilder({ question, value, onChange, disabled, readOnly }: InteractionProps<'block-builder'>) {
  const id = useId(), answerId = `${id}-answer`, bankId = `${id}-bank`;
  const locked = Boolean(disabled || readOnly);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [keyboardDrag, setKeyboardDrag] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [preview, setPreview] = useState<Preview | null>(null);
  const geometry = useRef<DragGeometry | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const [departure, setDeparture] = useState<{ item: Item; x: number; y: number; width: number; height: number } | null>(null);
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
  const activeItem = question.blocks.find(item => item.id === activeId);
  const collision: CollisionDetection = args => {
    if (!args.pointerCoordinates) return closestCenter(args);
    // Freeze measurements before the placeholder changes layout, avoiding a moving insertion target.
    if (!geometry.current) geometry.current = new Map(args.droppableRects);
    const point = args.pointerCoordinates;
    const contains = (zone: string) => {
      const rect = geometry.current?.get(zone);
      return rect && point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
    };
    if (contains(bankId)) return [{ id: bankId }];
    if (!contains(answerId)) return [];
    const last = geometry.current.get(value[value.length - 1]);
    if (!last || point.y > last.bottom || (point.y >= last.top && point.x > last.right)) return [{ id: answerId }];
    return closestCenter({ ...args, droppableRects: geometry.current, droppableContainers: args.droppableContainers.filter(container => value.includes(String(container.id))) });
  };
  function destination(target: string): Preview | null {
    if (target === bankId) return { zone: 'bank', index: available.length };
    if (target === answerId) return { zone: 'answer', index: value.length };
    const index = value.indexOf(target);
    return index < 0 ? null : { zone: 'answer', index };
  }
  const clearDrag = () => { setActiveId(null); setPreview(null); setKeyboardDrag(false); geometry.current = null; };
  const renderBlock = (item: Item, selected: boolean) => {
    const index = question.blocks.findIndex(b => b.id === item.id);
    const toggle = (node: HTMLElement) => {
      if (locked || activeId) return;
      const bounds = node.getBoundingClientRect(), container = root.current?.getBoundingClientRect();
      if (!reducedMotion && container) setDeparture({ item, x: bounds.left - container.left, y: bounds.top - container.top, width: bounds.width, height: bounds.height });
      onChange(selected ? value.filter(v => v !== item.id) : [...value, item.id]);
    };
    return <Box key={item.id} sx={{ maxWidth: '100%', display: 'flex', alignSelf: 'center', alignItems: 'center', flex: '0 0 auto', animation: !activeId ? 'block-in 140ms ease-in-out both' : 'none', '@keyframes block-in': { from: { opacity: 0, transform: 'scale(.65)' }, to: { opacity: 1, transform: 'scale(1)' } }, '@keyframes block-out': { from: { opacity: 1, transform: 'scale(1)' }, to: { opacity: 0, transform: 'scale(.65)' } }, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}>
      {selected ? <SortableBlock item={item} index={index} locked={locked} toggle={toggle} /> : <AvailableBlock item={item} index={index} locked={locked} toggle={toggle} />}
    </Box>;
  };
  const placeholder = activeItem && preview && <Chip key="insertion-preview" data-insertion-preview="true" aria-hidden="true" label={activeItem.label} sx={{ ...chipSx, bgcolor: 'action.disabledBackground', border: '1px dashed', borderColor: 'text.disabled', color: 'transparent', pointerEvents: 'none' }} />;
  const answerBlocks = value.map(itemId => question.blocks.find(b => b.id === itemId)).filter((item): item is Item => Boolean(item));
  const insertion = preview?.zone === 'answer' ? Math.min(preview.index + (value.includes(activeId ?? '') && value.indexOf(activeId ?? '') < preview.index ? 1 : 0), value.length) : -1;
  return <Stack ref={root} spacing={2} sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto', alignItems: 'center' }}>
    <Typography variant="body2" sx={{ textAlign: 'center' }}>{uk.dragBlockHint}</Typography>
    <DndContext id={id} sensors={sensors} collisionDetection={collision}
      accessibility={{ screenReaderInstructions: { draggable: uk.dragBlockKeyboard }, announcements: {
        onDragStart: ({ active }) => `${uk.pickedUp}: ${question.blocks.find(b => b.id === active.id)?.label}. ${uk.position}: ${value.indexOf(String(active.id)) + 1}`,
        onDragOver: ({ over }) => over ? `${uk.position}: ${value.indexOf(String(over.id)) + 1}` : undefined,
        onDragEnd: () => uk.dropped, onDragCancel: () => uk.dragCancelled,
      } }}
      onDragStart={event => { setKeyboardDrag(event.activatorEvent.type === 'keydown'); setActiveId(String(event.active.id)); setPreview(null); setDeparture(null); geometry.current = null; }}
      onDragOver={({ over }) => setPreview(over ? destination(String(over.id)) : null)}
      onDragCancel={clearDrag}
      onDragEnd={({ active, over }) => {
        clearDrag();
        if (locked || !over) return;
        const itemId = String(active.id), target = String(over.id);
        if (!question.blocks.some(b => b.id === itemId)) return;
        const dest = destination(target);
        if (!dest) return;
        if (dest.zone === 'bank') { if (value.includes(itemId)) onChange(value.filter(v => v !== itemId)); return; }
        const from = value.indexOf(itemId);
        if (from < 0) { const next = [...value]; next.splice(dest.index, 0, itemId); onChange(next); }
        else if (target !== itemId) onChange(arrayMove(value, from, Math.min(dest.index, value.length - 1)));
      }}>
      <SortableContext items={value}>
        <DropZone id={answerId} label={uk.built} locked={locked || keyboardDrag}>
          {!value.length && !preview && <Typography color="text.secondary">{uk.emptyBlocks}</Typography>}
          {answerBlocks.flatMap((item, index) => index === insertion ? [placeholder, renderBlock(item, true)] : [renderBlock(item, true)])}
          {insertion === value.length && placeholder}
        </DropZone>
      </SortableContext>
      <DropZone id={bankId} label={uk.available} locked={locked || keyboardDrag}>
        {!available.length && preview?.zone !== 'bank' && <Typography color="text.secondary">{uk.noBlocks}</Typography>}
        {available.map(item => renderBlock(item, false))}
        {preview?.zone === 'bank' && placeholder}
      </DropZone>
      <DragOverlay dropAnimation={null} style={{ margin: 0 }}>{activeItem ? <Chip aria-hidden="true" label={activeItem.label} sx={{ ...chipSx, width: '100%', bgcolor: 'background.paper', boxShadow: 3, cursor: 'grabbing' }} /> : null}</DragOverlay>
    </DndContext>
    {departure && <Box aria-hidden="true" onAnimationEnd={() => setDeparture(null)} sx={{ position: 'absolute', pointerEvents: 'none', m: '0 !important', left: departure.x, top: departure.y, width: departure.width, height: departure.height, animation: 'block-out 140ms ease-in-out both', '@keyframes block-out': { from: { opacity: 1, transform: 'scale(1)' }, to: { opacity: 0, transform: 'scale(.65)' } }, '@media (prefers-reduced-motion: reduce)': { display: 'none' } }}><Chip label={departure.item.label} sx={{ ...chipSx, width: '100%' }} /></Box>}
  </Stack>;
}
