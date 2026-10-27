import type { SVGProps } from 'react';

/** Color field only: golden sun, eagle and vertical ornament are pending. */
export function KazakhstanFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 2 1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={2} height={1} fill="#00AFCA" />
    </svg>
  );
}
