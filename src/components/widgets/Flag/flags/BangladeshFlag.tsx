import type { SVGProps } from 'react';

export function BangladeshFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={5} height={3} fill="#006A4E" />
      <circle cx={2.25} cy={1.5} r={1} fill="#F42A41" />
    </svg>
  );
}
