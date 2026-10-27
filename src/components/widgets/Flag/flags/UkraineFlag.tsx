import type { SVGProps } from 'react';

export function UkraineFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={3} height={1} fill="#0057B7" />
      <rect x={0} y={1} width={3} height={1} fill="#FFD700" />
    </svg>
  );
}
