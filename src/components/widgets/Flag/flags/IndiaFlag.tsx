import type { SVGProps } from 'react';

/** Ashoka Chakra pending. */
export function IndiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={3} height={0.6666666666666666} fill="#FF9933" />
      <rect x={0} y={0.6666666666666666} width={3} height={0.6666666666666666} fill="#FFFFFF" />
      <rect x={0} y={1.3333333333333333} width={3} height={0.6666666666666666} fill="#138808" />
    </svg>
  );
}
