'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Box, ButtonBase, Stack, Typography, useTheme } from '@mui/material';
import type { InteractionProps } from './interaction-props';
import { uk } from './messages';

const visuallyHidden = { position: 'absolute', width: 1, height: 1, p: 0, m: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 } as const;

type Point = { x: number; y: number };
type Anchors = { left: Record<string, Point>; right: Record<string, Point> };
const curve = (a: Point, b: Point) => {
  const bend = Math.max(24, Math.abs(b.x - a.x) / 2);
  return `M ${a.x} ${a.y} C ${a.x + bend} ${a.y}, ${b.x - bend} ${b.y}, ${b.x} ${b.y}`;
};

export function Matching({ question, value, onChange, disabled, readOnly }: InteractionProps<'matching'>) {
  const theme = useTheme();
  const locked = Boolean(disabled || readOnly);
  const root = useRef<HTMLDivElement>(null);
  const leftNodes = useRef(new Map<string, HTMLButtonElement>());
  const rightNodes = useRef(new Map<string, HTMLButtonElement>());
  const [anchors, setAnchors] = useState<Anchors>({ left: {}, right: {} });
  const [pending, setPending] = useState<{ side: 'left' | 'right'; id: string } | null>(null);
  const [pointer, setPointer] = useState<Point | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const hint = useId();
  useEffect(() => {
    function measure() {
      const rect = root.current?.getBoundingClientRect();
      if (!rect) return;
      const collect = (nodes: Map<string, HTMLButtonElement>, side: 'left' | 'right') => Object.fromEntries([...nodes].map(([id, node]) => {
        const bounds = node.getBoundingClientRect();
        return [id, { x: (side === 'left' ? bounds.right : bounds.left) - rect.left, y: bounds.top + bounds.height / 2 - rect.top }];
      }));
      const next = { left: collect(leftNodes.current, 'left'), right: collect(rightNodes.current, 'right') };
      setAnchors(previous => JSON.stringify(previous) === JSON.stringify(next) ? previous : next);
    }
    const observer = new ResizeObserver(measure);
    if (root.current) observer.observe(root.current);
    for (const node of [...leftNodes.current.values(), ...rightNodes.current.values()]) observer.observe(node);
    measure();
    window.addEventListener('resize', measure);
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, [question]);
  function remove(leftId: string) {
    if (locked) return;
    const next = { ...value }; delete next[leftId]; onChange(next); setHovered(null); setPending(null); setPointer(null);
    setAnnouncement(uk.connectionRemoved);
    leftNodes.current.get(leftId)?.focus();
  }
  function choose(side: 'left' | 'right', id: string) {
    if (locked) return;
    if (!pending || pending.side === side) {
      setPending(pending?.side === side && pending.id === id ? null : { side, id });
      setPointer(null);
      return;
    }
    const leftId = side === 'left' ? id : pending.id;
    const rightId = side === 'right' ? id : pending.id;
    // The stored answer always maps left IDs to right IDs, regardless of click order.
    const next = Object.fromEntries(Object.entries(value).filter(([left, right]) => left !== leftId && right !== rightId));
    next[leftId] = rightId;
    onChange(next); setPending(null); setPointer(null); setAnnouncement(uk.connectionAdded);
  }
  const connections = Object.entries(value).filter(([a, b]) => anchors.left[a] && anchors.right[b]);
  connections.sort(([a], [b]) => Number(a === hovered) - Number(b === hovered));
  return <Stack spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
    <Typography id={hint} variant="body2" sx={visuallyHidden}>{uk.matchingHint}</Typography>
    <Box ref={root} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) { setPending(null); setPointer(null); } }} role="group" aria-label={question.prompt} aria-describedby={hint}
      onKeyDown={event => { if (event.key === 'Escape') { setPending(null); setPointer(null); } }}
      onPointerMove={event => { if (!locked && pending && root.current) { const rect = root.current.getBoundingClientRect(); setPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top }); } }}
      onPointerLeave={() => setPointer(null)}
      sx={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', columnGap: { xs: 8, sm: 12 }, maxWidth: 600, width: '100%' }}>
      {(['left', 'right'] as const).map(side => <Stack key={side} spacing={2} sx={{ minWidth: 0 }}>
        {question[side].map(item => {
          const paired = side === 'left' ? Boolean(value[item.id]) : Object.values(value).includes(item.id);
          const active = pending?.side === side && pending.id === item.id;
          return <ButtonBase key={item.id} disabled={locked} aria-pressed={active || paired}
            aria-label={item.label} aria-describedby={hint}
            ref={node => { const nodes = side === 'left' ? leftNodes : rightNodes; if (node) nodes.current.set(item.id, node); else nodes.current.delete(item.id); }}
            onClick={() => choose(side, item.id)}
            sx={{ position: 'relative', minHeight: 52, px: { xs: 1, sm: 2 }, py: 1.5, width: '100%', border: '1px solid', borderColor: active || paired ? 'primary.main' : 'divider', borderRadius: 1, textAlign: 'left', justifyContent: 'flex-start', bgcolor: active ? 'action.selected' : 'background.paper', '&:hover': { bgcolor: 'action.hover' }, '&.Mui-disabled': { opacity: 0.6 } }}>
            <Typography component="span" sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>{item.label}</Typography>
            {(active || paired) && <Box component="span" aria-hidden="true" sx={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', top: 'calc(50% - 4px)', [side === 'left' ? 'right' : 'left']: -5 }} />}
          </ButtonBase>;
        })}
      </Stack>)}
      <Box component="svg" aria-label={uk.connections} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', color: 'primary.main' }}>
        {connections.map(([leftId, rightId]) => {
          const a = anchors.left[leftId], b = anchors.right[rightId];
          const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          const selected = hovered === leftId && !locked;
          const name = `${uk.removeConnection}: ${question.left.find(i => i.id === leftId)?.label} — ${question.right.find(i => i.id === rightId)?.label}`;
          return <g key={leftId} style={{ outline: 'none' }} role={locked ? undefined : 'button'} tabIndex={locked ? undefined : 0} aria-label={name}
            onPointerEnter={() => { if (!locked) setHovered(leftId); }} onPointerLeave={() => setHovered(null)}
            onFocus={() => setHovered(leftId)} onBlur={() => setHovered(null)}
            onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); remove(leftId); } }}>
            {selected && <path d={curve(a, b)} fill="none" stroke="currentColor" strokeWidth={10} opacity={0.18} />}
            <path d={curve(a, b)} fill="none" stroke="currentColor" strokeWidth={2} />
            <path data-connection={leftId} d={curve(a, b)} fill="none" stroke="transparent" strokeWidth={18} pointerEvents={locked ? 'none' : 'stroke'} onClick={() => setHovered(leftId)} />
            {selected && <g onClick={() => remove(leftId)} style={{ cursor: 'pointer', pointerEvents: 'all' }}>
              <circle cx={mid.x} cy={mid.y} r={13} fill={theme.palette.background.paper} stroke="currentColor" />
              <path d={`M ${mid.x - 4} ${mid.y - 4} l 8 8 M ${mid.x + 4} ${mid.y - 4} l -8 8`} stroke="currentColor" strokeWidth={2} />
            </g>}
          </g>;
        })}
        {!locked && pending && anchors[pending.side][pending.id] && pointer && <path data-preview="true" d={pending.side === 'left' ? curve(anchors.left[pending.id], pointer) : curve(pointer, anchors.right[pending.id])} fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="5 4" />}
      </Box>
    </Box>
    <Typography role="status" variant="body2" sx={visuallyHidden}>{locked ? '' : pending ? `${uk.matchingChooseTarget}: ${question[pending.side].find(i => i.id === pending.id)?.label}` : announcement}</Typography>
  </Stack>;
}
