import type { SVGProps } from 'react';

/** Five stars pending. */
export function ChinaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={3} height={2} fill="#DE2910" />
    </svg>
  );
}
