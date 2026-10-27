import type { SVGProps } from 'react';

/** Color stripes and canton only; 50 stars pending. */
export function UnitedStatesFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={19} height={10} fill="#B22234" />
      <rect x={0} y={0.7692307692307693} width={19} height={0.7692307692307693} fill="#FFFFFF" />
      <rect x={0} y={2.3076923076923075} width={19} height={0.7692307692307693} fill="#FFFFFF" />
      <rect x={0} y={3.8461538461538463} width={19} height={0.7692307692307693} fill="#FFFFFF" />
      <rect x={0} y={5.384615384615385} width={19} height={0.7692307692307693} fill="#FFFFFF" />
      <rect x={0} y={6.923076923076923} width={19} height={0.7692307692307693} fill="#FFFFFF" />
      <rect x={0} y={8.461538461538462} width={19} height={0.7692307692307693} fill="#FFFFFF" />
      <rect x={0} y={0} width={7.6} height={5.384615384615385} fill="#3C3B6E" />
    </svg>
  );
}
