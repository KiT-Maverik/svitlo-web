'use client';
import type { InteractionProps } from './model';
import { ClickBlockBuilder } from './ClickBlockBuilder';
import { DragBlockBuilder } from './DragBlockBuilder';
export function BlockBuilder(props: InteractionProps<'block-builder'>) {
  return props.question.interaction === 'drag' ? <DragBlockBuilder {...props} /> : <ClickBlockBuilder {...props} />;
}
