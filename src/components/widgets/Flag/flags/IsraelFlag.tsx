import type { SVGProps } from 'react';

/** Star of David pending. */
export function IsraelFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0} y={0} width={11} height={8} fill="#FFFFFF" />
      <rect x={0} y={1.4} width={11} height={0.6} fill="#0038B8" />
      <rect x={0} y={6} width={11} height={0.6} fill="#0038B8" />
    </svg>
  );
}
