import type { RayMessages } from './ray.locale';

const locale = {
  scene: {
    title: 'Follow the path of light',
    description: 'From the source, straight to the screen.',
    accessibleName: 'Animation of light traveling from the source to the screen',
  },
  track: {
    accessibleDescription: 'A yellow dot moves in a straight line from the source on the left to the screen on the right.',
    source: 'Light source',
    screen: 'Screen',
  },
  controls: {
    play: 'Play',
    pause: 'Pause',
    speed: 'Speed',
    speedAccessibleName: 'Animation speed',
    speedUnit: '×',
  },
  hints: {
    scale: 'Illustrative model: the speed of light is not shown to scale.',
  },
} satisfies RayMessages;

export default locale;
