import type { SVGProps } from 'react';

/** Crescent and star pending. */
export function PakistanFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={3} height={2} fill="#01411C" />
      <rect x={0} y={0} width={0.75} height={2} fill="#FFFFFF" />
    </svg>
  );
}
