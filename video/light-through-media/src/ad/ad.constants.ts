export const AD_FPS = 30;
export const AD_DURATION = 25 * AD_FPS;

export const CUTS = {
  hook: {from: 0, duration: 4 * AD_FPS},
  discover: {from: 4 * AD_FPS, duration: 5 * AD_FPS},
  equation: {from: 9 * AD_FPS, duration: 6 * AD_FPS},
  method: {from: 15 * AD_FPS, duration: 5 * AD_FPS},
  cta: {from: 20 * AD_FPS, duration: 5 * AD_FPS},
} as const;

export const PALETTE = {
  dark: '#0a0924',
  dark2: '#171140',
  lilac: '#a78bfa',
  violet: '#7453fb',
  pink: '#ff73a4',
  aqua: '#5de4ff',
  lime: '#e1ff69',
  cream: '#fffaf1',
  muted: '#c3bce5',
};

export type AdProps = {
  brand: string;
  hook: string;
  cta: string;
  accent: string;
  sound: boolean;
};
export const AD_DEFAULT_PROPS: AdProps = {
  brand: 'СВІТЛО',
  hook: 'ВАША ДИТИНА НЕ РОЗУМІЄ ДРОБИ?',
  cta: 'ВІДКРИВАЙТЕ СВІТЛО',
  accent: PALETTE.lime,
  sound: true,
};
export const clamp = (v: number, lo=0, hi=1): number => Math.min(hi, Math.max(lo,v));
export const smooth = (x: number): number => {const t=clamp(x);return t*t*(3-2*t)};
