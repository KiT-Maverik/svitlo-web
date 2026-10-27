import type { SVGProps } from 'react';

/** Historical Belarusian white-red-white flag. */
export function BelarusWhiteRedWhiteFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 2 1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={2} height={0.3333333333333333} fill="#FFFFFF" />
      <rect x={0} y={0.3333333333333333} width={2} height={0.3333333333333333} fill="#C8313E" />
      <rect x={0} y={0.6666666666666666} width={2} height={0.3333333333333333} fill="#FFFFFF" />
    </svg>
  );
}
