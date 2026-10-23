'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { Box } from '@mui/material';

export type DragRect = { left: number; right: number; top: number; bottom: number };

/** Visual FLIP animation only. It owns no drag-and-drop state or registry. */
export function AnimatedLayoutItem({ children, enabled, onMeasure }: { children: ReactNode; enabled: boolean; onMeasure?: (rect: DragRect) => void }) {
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
