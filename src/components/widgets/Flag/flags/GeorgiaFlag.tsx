import type { SVGProps } from 'react';

/** Color geometry only: four small Bolnisi crosses are pending. */
export function GeorgiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={3} height={2} fill="#FFFFFF" />
      <rect x={1.3} y={0} width={0.4} height={2} fill="#FF0000" />
      <rect x={0} y={0.8} width={3} height={0.4} fill="#FF0000" />
    </svg>
  );
}
