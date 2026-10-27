import type { SVGProps } from 'react';

export function LatviaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 2 1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={2} height={0.4} fill="#9E1B34" />
      <rect x={0} y={0.4} width={2} height={0.2} fill="#FFFFFF" />
      <rect x={0} y={0.6} width={2} height={0.4} fill="#9E1B34" />
    </svg>
  );
}
