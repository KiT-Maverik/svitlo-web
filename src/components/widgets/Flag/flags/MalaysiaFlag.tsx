import type { SVGProps } from 'react';

/** Crescent and 14-point star pending. */
export function MalaysiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={28} height={14} fill="#CC0001" />
      <rect x={0} y={1} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={3} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={5} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={7} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={9} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={11} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={13} width={28} height={1} fill="#FFFFFF" />
      <rect x={0} y={0} width={14} height={8} fill="#010066" />
    </svg>
  );
}
