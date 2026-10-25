const locale = {
  scene: {
    title: 'Простеж шлях світла',
    description: 'Від джерела — прямою до екрана.',
    accessibleName: 'Анімація поширення світла від джерела до екрана',
  },
  track: {
    accessibleDescription: 'Жовта позначка рухається прямою лінією від джерела ліворуч до екрана праворуч.',
    source: 'Джерело світла',
    screen: 'Екран',
  },
  controls: {
    play: 'Відтворити',
    pause: 'Пауза',
    speed: 'Швидкість',
    speedAccessibleName: 'Швидкість анімації',
    speedUnit: '×',
  },
  hints: {
    scale: 'Умовна модель: швидкість світла не відтворена в масштабі.',
  },
}

export type RayMessages = typeof locale;

export default locale;
