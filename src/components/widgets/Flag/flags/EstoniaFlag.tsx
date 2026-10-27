import type { SVGProps } from 'react';

export function EstoniaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={11} height={2.3333333333333335} fill="#4891D9" />
      <rect x={0} y={2.3333333333333335} width={11} height={2.3333333333333335} fill="#000000" />
      <rect x={0} y={4.666666666666667} width={11} height={2.3333333333333335} fill="#FFFFFF" />
    </svg>
  );
}
