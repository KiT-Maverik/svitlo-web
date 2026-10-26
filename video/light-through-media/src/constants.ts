export const FPS = 30;
export const DURATION = 38 * FPS;

export const SCENES = {
  opening: {start: 0, duration: 5 * FPS},
  introduction: {start: 5 * FPS, duration: 8 * FPS},
  materials: {start: 13 * FPS, duration: 11 * FPS},
  comparison: {start: 24 * FPS, duration: 8 * FPS},
  ending: {start: 32 * FPS, duration: 6 * FPS},
} as const;

export const C = {
  bg: '#060d22',
  ink: '#f6f8ff',
  muted: '#a7bed8',
  gold: '#ffdb7b',
  cyan: '#64efff',
  cobalt: '#759bff',
  violet: '#ba8fff',
};

export type FilmProps = {
  accent: string;
  showPhysics: boolean;
  sound: boolean;
  title: string;
  subtitle: string;
};
export const DEFAULT_PROPS: FilmProps = {
  accent: C.cyan,
  showPhysics: true,
  sound: true,
  title: 'ЯК ПОДОРОЖУЄ СВІТЛО',
  subtitle: 'Одна хвиля. Різні світи.',
};

export const MEDIA = [
  {name: 'ВАКУУМ', short: 'Вакуум', n: 1, color: C.gold, detail: 'Майже 300 000 км/с'},
  {name: 'ПОВІТРЯ', short: 'Повітря', n: 1.000293, color: C.cyan, detail: 'Ледь помітне сповільнення'},
  {name: 'ВОДА', short: 'Вода', n: 1.333, color: C.cobalt, detail: 'Промінь змінює напрям'},
  {name: 'СКЛО', short: 'Скло', n: 1.5, color: C.violet, detail: 'Світло рухається повільніше'},
] as const;

export const SPEED_OF_LIGHT_KM_S = 299_792.458;
export const clamp = (value: number, min=0, max=1): number => Math.min(max,Math.max(min,value));
export const smoothstep = (value: number): number => {const t=clamp(value); return t*t*(3-2*t);};
export const speed = (refractiveIndex: number): number => SPEED_OF_LIGHT_KM_S/refractiveIndex;
export const roundedSpeed = (n: number): string => Math.round(speed(n)).toLocaleString('uk-UA');
export const degrees = (radians: number): number => radians*180/Math.PI;
