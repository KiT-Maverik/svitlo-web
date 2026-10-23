'use client';

import { useId, useLayoutEffect, useRef, useState } from 'react';
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
type DragRect = { left: number; right: number; top: number; bottom: number };
function AnimatedLayoutItem({ children, enabled, onMeasure }: { children: React.ReactNode; enabled: boolean; onMeasure?: (rect: DragRect) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const previousRect = useRef<DOMRect | null>(null);
  const animation = useRef<Animation | null>(null);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const nextRect = node.getBoundingClientRect();
    onMeasure?.({ left: nextRect.left, right: nextRect.right, top: nextRect.top, bottom: nextRect.bottom });
    const oldRect = previousRect.current;
    previousRect.current = nextRect;
    if (!enabled || !oldRect) return;
    const x = oldRect.left - nextRect.left;
    const y = oldRect.top - nextRect.top;
    if (Math.abs(x) < 0.5 && Math.abs(y) < 0.5) return;
    animation.current?.cancel();
    animation.current = node.animate(
      [{ transform: `translate(${x}px, ${y}px)` }, { transform: 'translate(0, 0)' }],
      { duration: 220, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
    );
  });
  return <Box ref={ref} sx={{ display: 'flex', maxWidth: '100%', alignSelf: 'center', alignItems: 'center', flex: '0 0 auto', willChange: enabled ? 'transform' : 'auto' }}>{children}</Box>;
}
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
function DropZone({ id, label, children, locked, highlighted = false }: { id: string; label: string; children: React.ReactNode; locked: boolean; highlighted?: boolean }) {
  const { setNodeRef } = useDroppable({ id, disabled: locked });
  return <Box ref={setNodeRef} role="group" aria-label={label} sx={{ width: '100%', p: 2, border: '1px dashed', borderColor: highlighted ? 'primary.main' : 'divider', borderRadius: 1, minHeight: 100, transition: theme => theme.transitions.create('border-color', { duration: 180, easing: theme.transitions.easing.easeInOut }) }}>
    <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'center' }}>{label}</Typography>
    <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1, minHeight: 44, alignItems: 'center' }}>{children}</Stack>
  </Box>;
}
function SourceSlot({ id, rect, disabled }: { id: string; rect: DragRect | null; disabled: boolean }) {
  const { setNodeRef } = useDroppable({ id, disabled: disabled || !rect });
  if (!rect) return null;
  return <Box ref={setNodeRef} aria-hidden="true" sx={{ position: 'fixed', left: rect.left, top: rect.top, width: rect.right - rect.left, height: rect.bottom - rect.top, pointerEvents: 'none', opacity: 0 }} />;
}
type Preview = { zone: 'answer' | 'bank'; index: number };
type DragGeometry = Parameters<CollisionDetection>[0]['droppableRects'];
export function DragBlockBuilder({ question, value, onChange, disabled, readOnly }: InteractionProps<'block-builder'>) {
  const id = useId(), answerId = `${id}-answer`, bankId = `${id}-bank`, sourceSlotId = `${id}-source-slot`;
  const locked = Boolean(disabled || readOnly);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [keyboardDrag, setKeyboardDrag] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [ghostAnimationKey, setGhostAnimationKey] = useState(0);
  const [sourceRectState, setSourceRectState] = useState<DragRect | null>(null);
  const geometry = useRef<DragGeometry | null>(null);
  const sourceRect = useRef<DragRect | null>(null);
  const itemRects = useRef(new Map<string, DragRect>());
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
  const activeInAnswer = Boolean(activeId && value.includes(activeId));
  const collision: CollisionDetection = args => {
    if (!args.pointerCoordinates) return closestCenter(args);
    // Freeze measurements before the placeholder changes layout, avoiding a moving insertion target.
    if (!geometry.current) geometry.current = new Map(args.droppableRects);
    const point = args.pointerCoordinates;
    const contains = (zone: string) => {
      const rect = geometry.current?.get(zone);
      return rect && point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
    };
    const source = sourceRect.current;
    if (source && point.x >= source.left && point.x <= source.right && point.y >= source.top && point.y <= source.bottom) return [{ id: sourceSlotId }];
    if (contains(bankId)) return [{ id: bankId }];
    const draggingId = String(args.active.id);
    const draggingFromAnswer = value.includes(draggingId);
    const answerRect = geometry.current.get(answerId);
    const firstId = value[0];
    const firstRect = firstId ? geometry.current.get(firstId) : undefined;
    const lastId = value[value.length - 1];
    const lastRect = lastId ? geometry.current.get(lastId) : undefined;
    const inAnswerBand = answerRect && point.y >= answerRect.top && point.y <= answerRect.bottom;
    if (inAnswerBand && firstId && firstRect && point.x < firstRect.left) return [{ id: firstId }];
    if (inAnswerBand && lastRect && point.x > lastRect.right) return [{ id: answerId }];
    if (!contains(answerId)) return [];
    const activeRect = geometry.current.get(String(args.active.id)) ?? sourceRect.current;
    if (draggingFromAnswer && activeRect && point.x >= activeRect.left && point.x <= activeRect.right && point.y >= activeRect.top && point.y <= activeRect.bottom) return [{ id: draggingId }];
    const last = geometry.current.get(value[value.length - 1]);
    if (!last || point.y > last.bottom || (point.y >= last.top && point.x > last.right)) return [{ id: answerId }];
    return closestCenter({ ...args, droppableRects: geometry.current, droppableContainers: args.droppableContainers.filter(container => value.includes(String(container.id)) && String(container.id) !== String(args.active.id)) });
  };
  function destination(target: string, draggedId = activeId): Preview | null {
    if (target === sourceSlotId && draggedId) {
      const sourceIndex = value.indexOf(draggedId);
      return sourceIndex >= 0 ? { zone: 'answer', index: sourceIndex } : { zone: 'bank', index: available.findIndex(item => item.id === draggedId) };
    }
    if (target === bankId) return { zone: 'bank', index: available.length };
    if (target === answerId) return { zone: 'answer', index: value.length };
    if (draggedId && value.includes(draggedId) && target === draggedId) return { zone: 'answer', index: value.indexOf(draggedId) };
    const availableIndex = available.findIndex(item => item.id === target);
    if (availableIndex >= 0) return { zone: 'bank', index: availableIndex };
    const index = value.indexOf(target);
    return index < 0 ? null : { zone: 'answer', index };
  }
  const clearDrag = () => { setActiveId(null); setPreview(null); setGhostAnimationKey(0); setSourceRectState(null); setKeyboardDrag(false); geometry.current = null; sourceRect.current = null; };
  const renderBlock = (item: Item, selected: boolean) => {
    const index = question.blocks.findIndex(b => b.id === item.id);
    const toggle = (node: HTMLElement) => {
      if (locked || activeId) return;
      const bounds = node.getBoundingClientRect(), container = root.current?.getBoundingClientRect();
      if (!reducedMotion && container) setDeparture({ item, x: bounds.left - container.left, y: bounds.top - container.top, width: bounds.width, height: bounds.height });
      onChange(selected ? value.filter(v => v !== item.id) : [...value, item.id]);
    };
    return <AnimatedLayoutItem key={item.id} enabled={!reducedMotion} onMeasure={rect => itemRects.current.set(item.id, rect)}>
      <Box sx={{ maxWidth: '100%', display: 'flex', alignSelf: 'center', alignItems: 'center', flex: '0 0 auto', animation: 'block-in 140ms ease-in-out both', '@keyframes block-in': { from: { opacity: 0, transform: 'scale(.65)' }, to: { opacity: 1, transform: 'scale(1)' } }, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}>
        {selected ? <SortableBlock item={item} index={index} locked={locked} toggle={toggle} /> : <AvailableBlock item={item} index={index} locked={locked} toggle={toggle} />}
      </Box>
    </AnimatedLayoutItem>;
  };
  const answerBlocks = value.map(itemId => question.blocks.find(b => b.id === itemId)).filter((item): item is Item => Boolean(item));
  const ghostZone = preview?.zone ?? (activeInAnswer ? 'answer' : 'bank');
  const displayedAnswerBlocks = activeInAnswer ? answerBlocks.filter(item => item.id !== activeId) : answerBlocks;
  const displayedAvailableBlocks = activeId ? available.filter(item => item.id !== activeId) : available;
  const answerInsertion = ghostZone === 'answer'
    ? preview?.zone === 'answer'
      ? Math.min(preview.index, value.length)
      : activeInAnswer ? value.indexOf(activeId ?? '') : -1
    : -1;
  const displayAnswerInsertion = Math.min(answerInsertion, displayedAnswerBlocks.length);
  const bankInsertion = ghostZone === 'bank'
    ? preview?.zone === 'bank' ? Math.min(preview.index, displayedAvailableBlocks.length) : available.findIndex(item => item.id === activeId)
    : -1;
  const ghost = activeItem ? <AnimatedLayoutItem key={`insertion-ghost-${ghostAnimationKey}`} enabled={!reducedMotion}>
    <Chip data-insertion-preview="true" aria-hidden="true" label={activeItem.label} variant="outlined" sx={{ ...chipSx, borderColor: 'text.disabled', color: 'text.disabled', opacity: 0.45, boxShadow: 1, pointerEvents: 'none', animation: ghostAnimationKey && !reducedMotion ? 'ghost-grow 180ms cubic-bezier(0.2, 0.8, 0.2, 1) both' : 'none', '@keyframes ghost-grow': { from: { opacity: 0, transform: 'scale(.72)' }, to: { opacity: 0.45, transform: 'scale(1)' } }, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }} />
  </AnimatedLayoutItem> : null;
  return <Stack ref={root} spacing={2} sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto', alignItems: 'center' }}>
    <Typography variant="body2" sx={{ textAlign: 'center' }}>{uk.dragBlockHint}</Typography>
    <DndContext id={id} sensors={sensors} collisionDetection={collision}
      accessibility={{ screenReaderInstructions: { draggable: uk.dragBlockKeyboard }, announcements: {
        onDragStart: ({ active }) => `${uk.pickedUp}: ${question.blocks.find(b => b.id === active.id)?.label}. ${uk.position}: ${value.indexOf(String(active.id)) + 1}`,
        onDragOver: ({ over }) => over ? `${uk.position}: ${value.indexOf(String(over.id)) + 1}` : undefined,
        onDragEnd: () => uk.dropped, onDragCancel: () => uk.dragCancelled,
      } }}
      onDragStart={event => {
        const itemId = String(event.active.id);
        const initial = event.active.rect.current.initial;
        const nextSourceRect = initial ? { left: initial.left, right: initial.right, top: initial.top, bottom: initial.bottom } : itemRects.current.get(itemId) ?? null;
        sourceRect.current = nextSourceRect;
        setSourceRectState(nextSourceRect);
        setKeyboardDrag(event.activatorEvent.type === 'keydown');
        setActiveId(itemId);
        const sourceIndex = value.indexOf(itemId);
        setPreview(sourceIndex >= 0 ? { zone: 'answer', index: sourceIndex } : { zone: 'bank', index: available.findIndex(item => item.id === itemId) });
        setGhostAnimationKey(0);
        setDeparture(null);
        geometry.current = null;
      }}
      onDragOver={({ active, over }) => {
        if (!over) return;
        const nextPreview = destination(String(over.id), String(active.id));
        if (!nextPreview) return;
        const currentZone = preview?.zone ?? (activeInAnswer ? 'answer' : 'bank');
        if (nextPreview.zone !== currentZone) setGhostAnimationKey(key => key + 1);
        setPreview(nextPreview);
      }}
      onDragCancel={clearDrag}
      onDragEnd={({ active, over }) => {
        clearDrag();
        if (locked || !over) return;
        const itemId = String(active.id), target = String(over.id);
        if (!question.blocks.some(b => b.id === itemId)) return;
        const dest = destination(target, itemId);
        if (!dest) return;
        if (dest.zone === 'bank') { if (value.includes(itemId)) onChange(value.filter(v => v !== itemId)); return; }
        const from = value.indexOf(itemId);
        if (from < 0) { const next = [...value]; next.splice(dest.index, 0, itemId); onChange(next); }
        else if (target !== itemId) onChange(arrayMove(value, from, Math.min(dest.index, value.length - 1)));
      }}>
      <SortableContext items={value}>
        <DropZone id={answerId} label={uk.built} locked={locked || keyboardDrag} highlighted={Boolean(activeId && !value.includes(activeId))}>
          {!value.length && !preview && <Typography color="text.secondary">{uk.emptyBlocks}</Typography>}
          {displayedAnswerBlocks.flatMap((item, index) => index === displayAnswerInsertion ? [ghost, renderBlock(item, true)] : [renderBlock(item, true)])}
          {displayAnswerInsertion === displayedAnswerBlocks.length && ghost}
        </DropZone>
      </SortableContext>
      <DropZone id={bankId} label={uk.available} locked={locked || keyboardDrag} highlighted={Boolean(activeId && value.includes(activeId))}>
        {!available.length && preview?.zone !== 'bank' && <Typography color="text.secondary">{uk.noBlocks}</Typography>}
        {displayedAvailableBlocks.flatMap((item, index) => index === bankInsertion ? [ghost, renderBlock(item, false)] : [renderBlock(item, false)])}
        {bankInsertion === displayedAvailableBlocks.length && ghost}
      </DropZone>
      <SourceSlot id={sourceSlotId} rect={activeId ? sourceRectState : null} disabled={locked || keyboardDrag} />
      <DragOverlay dropAnimation={null} style={{ margin: 0 }}>{activeItem ? <Chip aria-hidden="true" label={activeItem.label} sx={{ ...chipSx, width: '100%', bgcolor: 'background.paper', cursor: 'grabbing' }} /> : null}</DragOverlay>
    </DndContext>
    {departure && <Box aria-hidden="true" onAnimationEnd={() => setDeparture(null)} sx={{ position: 'absolute', pointerEvents: 'none', m: '0 !important', left: departure.x, top: departure.y, width: departure.width, height: departure.height, animation: 'block-out 140ms ease-in-out both', '@keyframes block-out': { from: { opacity: 1, transform: 'scale(1)' }, to: { opacity: 0, transform: 'scale(.65)' } }, '@media (prefers-reduced-motion: reduce)': { display: 'none' } }}><Chip label={departure.item.label} sx={{ ...chipSx, width: '100%' }} /></Box>}
  </Stack>;
}
