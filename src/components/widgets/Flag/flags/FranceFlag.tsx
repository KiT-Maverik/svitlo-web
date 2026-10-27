import type { SVGProps } from 'react';

export function FranceFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={1} height={2} fill="#0055A4" />
      <rect x={1} y={0} width={1} height={2} fill="#FFFFFF" />
      <rect x={2} y={0} width={1} height={2} fill="#EF4135" />
    </svg>
  );
}
