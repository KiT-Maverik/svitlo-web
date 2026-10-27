import type { SVGProps } from 'react';

/** Blue globe, white band, stars and motto pending. */
export function BrazilFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={10} height={7} fill="#009739" />
      <polygon points="5,0.7 9.15,3.5 5,6.3 0.85,3.5" fill="#FFDF00" />
    </svg>
  );
}
