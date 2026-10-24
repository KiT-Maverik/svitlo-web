import type { SelectOneAnswerQuestion } from '@/types/questions';

const lightQuestions: SelectOneAnswerQuestion[] = [
  { id: 'direction', type: 'single-select', prompt: 'Як поширюється світло в прозорому однорідному середовищі?', options: [{ id: 'direction-circle', label: 'По колу.' }, { id: 'direction-linear', label: 'Прямолінійно.' }, { id: 'direction-curve', label: 'Завжди по кривій.' }], correctId: 'direction-linear', explanation: 'У прозорому однорідному середовищі світло поширюється прямолінійно.' },
  { id: 'ray', type: 'single-select', prompt: 'Що показує світловий промінь?', options: [{ id: 'ray-temperature', label: 'Температуру джерела.' }, { id: 'ray-particle', label: 'Розмір частинки світла.' }, { id: 'ray-direction', label: 'Напрямок поширення світла.' }], correctId: 'ray-direction', explanation: 'Світловий промінь показує напрямок поширення світла.' },
  { id: 'vacuum', type: 'single-select', prompt: 'Де світло поширюється найшвидше: у вакуумі, повітрі чи воді?', options: [{ id: 'vacuum-space', label: 'У вакуумі.' }, { id: 'vacuum-air', label: 'У повітрі.' }, { id: 'vacuum-water', label: 'У воді.' }], correctId: 'vacuum-space', explanation: 'У вакуумі світло поширюється найшвидше — приблизно 300 000 км/с.' },
  { id: 'water', type: 'single-select', prompt: 'Як змінюється швидкість світла у воді порівняно з вакуумом?', options: [{ id: 'water-faster', label: 'Збільшується.' }, { id: 'water-same', label: 'Не змінюється.' }, { id: 'water-slower', label: 'Зменшується.' }], correctId: 'water-slower', explanation: 'У воді світло рухається повільніше, ніж у вакуумі: приблизно 225 000 км/с.' },
  { id: 'air', type: 'single-select', prompt: 'Чи однакова швидкість світла у повітрі та вакуумі?', options: [{ id: 'air-same', label: 'Так, абсолютно однакова.' }, { id: 'air-slower', label: 'Ні, у повітрі трохи повільніше.' }, { id: 'air-faster', label: 'Ні, у повітрі вдвічі швидше.' }], correctId: 'air-slower', explanation: 'У повітрі світло трохи повільніше, ніж у вакуумі. Різниця дуже мала.' },
  { id: 'shadow', type: 'single-select', prompt: 'Що утворюється за непрозорим предметом, який перекриває світло?', options: [{ id: 'shadow-shadow', label: 'Тінь.' }, { id: 'shadow-source', label: 'Нове джерело світла.' }, { id: 'shadow-vacuum', label: 'Вакуум.' }], correctId: 'shadow-shadow', explanation: 'Непрозорий предмет перекриває світло, тому за ним утворюється тінь.' },
];

export const lightLesson = {
  id: 'light',
  title: 'Як рухається світло',
  steps: [
    { id: 'theory', kind: 'theory', title: 'Теорія' },
    { id: 'practice', kind: 'practice', title: 'Практика' },
    { id: 'flashcards', kind: 'flashcards', title: 'Флеш-картки' },
    { id: 'test', kind: 'test', title: 'Тест' },
  ],
  concepts: [
    { id: 'direction', question: 'Як поширюється світло в прозорому однорідному середовищі?', answer: 'Прямолінійно.', choices: ['По колу.', 'Прямолінійно.', 'Завжди по кривій.'], correct: 1 },
    { id: 'ray', question: 'Що показує світловий промінь?', answer: 'Напрямок поширення світла.', choices: ['Температуру джерела.', 'Розмір частинки світла.', 'Напрямок поширення світла.'], correct: 2 },
    { id: 'vacuum', question: 'Де світло поширюється найшвидше: у вакуумі, повітрі чи воді?', answer: 'У вакуумі: приблизно 300 000 км/с.', choices: ['У вакуумі.', 'У повітрі.', 'У воді.'], correct: 0 },
    { id: 'water', question: 'Як змінюється швидкість світла у воді порівняно з вакуумом?', answer: 'Зменшується: у воді вона становить приблизно 225 000 км/с.', choices: ['Збільшується.', 'Не змінюється.', 'Зменшується.'], correct: 2 },
    { id: 'air', question: 'Чи однакова швидкість світла у повітрі та вакуумі?', answer: 'Ні. У повітрі світло трохи повільніше; різниця дуже мала.', choices: ['Так, абсолютно однакова.', 'Ні, у повітрі трохи повільніше.', 'Ні, у повітрі вдвічі швидше.'], correct: 1 },
    { id: 'shadow', question: 'Що утворюється за непрозорим предметом, який перекриває світло?', answer: 'Тінь.', choices: ['Тінь.', 'Нове джерело світла.', 'Вакуум.'], correct: 0 },
  ],
  questions: lightQuestions,
} as const;

export const media = [
  { id: 'vacuum', title: 'Вакуум', index: 1 },
  { id: 'air', title: 'Повітря', index: 1.000293 },
  { id: 'water', title: 'Вода', index: 1.333 },
] as const;

export const LIGHT_SPEED_KM_S = 299792.458;
