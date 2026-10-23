'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { alpha, Box, ButtonBase, Stack, Typography, useTheme } from '@mui/material';
import type { InteractionProps } from './interaction-props';
import { isGraded } from './feedback';
import { uk } from './messages';

const visuallyHidden = { position: 'absolute', width: 1, height: 1, p: 0, m: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 } as const;

type Point = { x: number; y: number };
type Anchors = { left: Record<string, Point>; right: Record<string, Point> };
const curve = (a: Point, b: Point) => {
  const bend = Math.max(24, Math.abs(b.x - a.x) / 2);
  return `M ${a.x} ${a.y} C ${a.x + bend} ${a.y}, ${b.x - bend} ${b.y}, ${b.x} ${b.y}`;
};

export function Matching({ question, value, onChange, disabled, readOnly, result, showErrors = true, showCorrectAnswers = true }: InteractionProps<'matching'>) {
  const theme = useTheme();
  const locked = Boolean(disabled || readOnly || result);
  const review = isGraded(result);
  const rightItems = review ? [
    ...question.left.flatMap(item => question.right.filter(right => right.id === value[item.id])),
    ...question.right.filter(item => !Object.values(value).includes(item.id)),
  ] : question.right;
  const pairFeedback = (leftId: string, rightId: string) => {
    if (!review) return null;
    const correct = question.pairs.some(pair => pair.leftId === leftId && pair.rightId === rightId);
    return correct ? showCorrectAnswers ? 'correct' : null : showErrors ? 'incorrect' : null;
  };
  const pairColor = (feedback: 'correct' | 'incorrect' | null) => feedback === 'correct' ? theme.palette.success.main : feedback === 'incorrect' ? theme.palette.error.main : theme.palette.primary.main;
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
  }, [question, review, value]);
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
      sx={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', columnGap: { xs: 8, sm: 12 }, rowGap: 2, maxWidth: 600, width: '100%' }}>
      {(['left', 'right'] as const).map(side => <Box key={side} sx={{ display: 'contents' }}>
        {(side === 'left' ? question.left : rightItems).map((item, index) => {
          const leftId = side === 'left' ? item.id : Object.keys(value).find(id => value[id] === item.id);
          const feedback = leftId && value[leftId] ? pairFeedback(leftId, value[leftId]) : null;
          const color = pairColor(feedback);
          const paired = side === 'left' ? Boolean(value[item.id]) : Object.values(value).includes(item.id);
          const active = pending?.side === side && pending.id === item.id;
          return <ButtonBase key={item.id} disabled={locked} aria-pressed={active || paired}
            data-match-id={item.id} data-match-side={side} data-feedback={feedback ?? undefined} aria-description={feedback ? feedback === 'correct' ? uk.optionCorrect : uk.optionIncorrect : undefined} aria-label={item.label} aria-describedby={hint}
            ref={node => { const nodes = side === 'left' ? leftNodes : rightNodes; if (node) nodes.current.set(item.id, node); else nodes.current.delete(item.id); }}
            onClick={() => choose(side, item.id)}
            sx={{ gridColumn: side === 'left' ? 1 : 2, gridRow: index + 1, position: 'relative', minHeight: 52, px: { xs: 1, sm: 2 }, py: 1.5, width: '100%', border: '1px solid', borderColor: feedback ? color : active || paired ? 'primary.main' : 'divider', borderRadius: 1, textAlign: 'left', justifyContent: 'flex-start', bgcolor: feedback ? alpha(color, 0.12) : active ? 'action.selected' : 'background.paper', '&:hover': { bgcolor: 'action.hover' }, '&.Mui-disabled': { opacity: review ? 1 : 0.6, color: 'text.primary' } }}>
            <Typography component="span" sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>{item.label}</Typography>
            {(active || paired) && <Box component="span" aria-hidden="true" sx={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', bgcolor: color, top: 'calc(50% - 4px)', [side === 'left' ? 'right' : 'left']: -5 }} />}
          </ButtonBase>;
        })}
      </Box>)}
      <Box component="svg" aria-label={uk.connections} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', color: 'primary.main' }}>
        {connections.map(([leftId, rightId]) => {
          const a = anchors.left[leftId], b = anchors.right[rightId];
          const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          const feedback = pairFeedback(leftId, rightId);
          const color = pairColor(feedback);
          const selected = hovered === leftId && !locked;
          const name = `${review ? uk.connections : uk.removeConnection}: ${question.left.find(i => i.id === leftId)?.label} — ${question.right.find(i => i.id === rightId)?.label}`;
          return <g key={leftId} data-feedback={feedback ?? undefined} style={{ outline: 'none', color }} role={locked ? 'img' : 'button'} tabIndex={locked ? undefined : 0} aria-label={`${name}${feedback ? `. ${feedback === 'correct' ? uk.optionCorrect : uk.optionIncorrect}` : ''}`}
            onPointerEnter={() => { if (!locked) setHovered(leftId); }} onPointerLeave={() => setHovered(null)}
            onFocus={() => setHovered(leftId)} onBlur={() => setHovered(null)}
            onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); remove(leftId); } }}>
            {selected && <path d={curve(a, b)} fill="none" stroke="currentColor" strokeWidth={10} opacity={0.18} />}
            <path d={curve(a, b)} fill="none" stroke="currentColor" strokeWidth={2} />
            <path data-connection={leftId} d={curve(a, b)} fill="none" stroke="transparent" strokeWidth={18} pointerEvents={locked ? 'none' : 'stroke'} onClick={() => setHovered(leftId)} />
            {feedback && <g aria-label={feedback === 'correct' ? uk.optionCorrect : uk.optionIncorrect}>
              <circle cx={mid.x} cy={mid.y} r={13} fill={theme.palette.background.paper} stroke="currentColor" />
              <path d={feedback === 'correct' ? `M ${mid.x - 5} ${mid.y} l 3 4 7 -8` : `M ${mid.x - 4} ${mid.y - 4} l 8 8 M ${mid.x + 4} ${mid.y - 4} l -8 8`} fill="none" stroke="currentColor" strokeWidth={2} />
            </g>}
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
