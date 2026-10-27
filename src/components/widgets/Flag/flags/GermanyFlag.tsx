import type { SVGProps } from 'react';

export function GermanyFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={5} height={1} fill="#000000" />
      <rect x={0} y={1} width={5} height={1} fill="#DD0000" />
      <rect x={0} y={2} width={5} height={1} fill="#FFCE00" />
    </svg>
  );
}
