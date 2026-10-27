import type { SVGProps } from 'react';

export function PolandFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={8} height={2.5} fill="#FFFFFF" />
      <rect x={0} y={2.5} width={8} height={2.5} fill="#DC143C" />
    </svg>
  );
}
