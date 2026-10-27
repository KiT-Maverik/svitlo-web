import type { SVGProps } from 'react';

/** Coat of arms pending. */
export function SpainFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={3} height={0.5} fill="#AA151B" />
      <rect x={0} y={0.5} width={3} height={1} fill="#F1BF00" />
      <rect x={0} y={1.5} width={3} height={0.5} fill="#AA151B" />
    </svg>
  );
}
