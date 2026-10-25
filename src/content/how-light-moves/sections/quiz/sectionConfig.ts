import type { QuizConfig } from '@/types/configs/quiz.types';
import { textResource, textResources } from '../../contentResources';
import type { SelectOneAnswerQuestion } from '@/types/questions';

const questionBank: QuizConfig['questionBank'] = [
  { id: 'direction', type: 'select-one-answer', restrictions: [], content: textResources('direction-prompt', 'Як поширюється світло в прозорому однорідному середовищі?'), flashcardConfig: { includeInLessonSet: true }, number: 1, weight: 1, answers: { correct: textResource('direction-correct', 'Прямолінійно.'), incorrect: [textResource('direction-incorrect-1', 'По колу.')], distractors: [textResource('direction-distractor', 'Завжди по кривій.')] } },
  { id: 'ray', type: 'select-one-answer', restrictions: [], content: textResources('ray-prompt', 'Що показує світловий промінь?'), flashcardConfig: { includeInLessonSet: true }, number: 2, weight: 1, answers: { correct: textResource('ray-correct', 'Напрямок поширення світла.'), incorrect: [textResource('ray-incorrect-1', 'Температуру джерела.')], distractors: [textResource('ray-distractor', 'Розмір частинки світла.')] } },
  { id: 'vacuum', type: 'select-one-answer', restrictions: [], content: textResources('vacuum-prompt', 'Де світло поширюється найшвидше: у вакуумі, повітрі чи воді?'), flashcardConfig: { includeInLessonSet: true }, number: 3, weight: 1, answers: { correct: textResource('vacuum-correct', 'У вакуумі.'), incorrect: [textResource('vacuum-incorrect-1', 'У повітрі.')], distractors: [textResource('vacuum-distractor', 'У воді.')] } },
  { id: 'water', type: 'select-one-answer', restrictions: [], content: textResources('water-prompt', 'Як змінюється швидкість світла у воді порівняно з вакуумом?'), flashcardConfig: { includeInLessonSet: true }, number: 4, weight: 1, answers: { correct: textResource('water-correct', 'Зменшується.'), incorrect: [textResource('water-incorrect-1', 'Збільшується.')], distractors: [textResource('water-distractor', 'Не змінюється.')] } },
  { id: 'air', type: 'select-one-answer', restrictions: [], content: textResources('air-prompt', 'Чи однакова швидкість світла у повітрі та вакуумі?'), flashcardConfig: { includeInLessonSet: true }, number: 5, weight: 1, answers: { correct: textResource('air-correct', 'Ні, у повітрі трохи повільніше.'), incorrect: [textResource('air-incorrect-1', 'Так, абсолютно однакова.')], distractors: [textResource('air-distractor', 'Ні, у повітрі вдвічі швидше.')] } },
  { id: 'shadow', type: 'select-one-answer', restrictions: [], content: textResources('shadow-prompt', 'Що утворюється за непрозорим предметом, який перекриває світло?'), flashcardConfig: { includeInLessonSet: true }, number: 6, weight: 1, answers: { correct: textResource('shadow-correct', 'Тінь.'), incorrect: [textResource('shadow-incorrect-1', 'Нове джерело світла.')], distractors: [textResource('shadow-distractor', 'Вакуум.')] } },
];

export const quizSectionConfig: QuizConfig = {
  id: 'light-quiz',
  sectionId: 'quiz',
  feedbackMode: 'immediate',
  grading: { mode: 'percentage', successThreshold: 70 },
  interaction: { retries: -1, showErrors: true, showCorrectAnswers: true, allowExplanations: true, allowDeferring: true, allowQuestionNavigation: true, skippable: true },
  questionBank,
  results: { visibility: 'immediate', showScore: true },
  screen: {
    welcome: { resources: textResources('quiz-welcome', 'Перевірмо, як рухається світло.') },
    ending: { success: { showDefaultContent: true }, fail: { showDefaultContent: true } },
  },
};

export const lightQuestions: SelectOneAnswerQuestion[] = [
  { id: 'direction', type: 'single-select', prompt: 'Як поширюється світло в прозорому однорідному середовищі?', options: [{ id: 'direction-circle', label: 'По колу.' }, { id: 'direction-linear', label: 'Прямолінійно.' }, { id: 'direction-curve', label: 'Завжди по кривій.' }], correctId: 'direction-linear', explanation: 'У прозорому однорідному середовищі світло поширюється прямолінійно.' },
  { id: 'ray', type: 'single-select', prompt: 'Що показує світловий промінь?', options: [{ id: 'ray-temperature', label: 'Температуру джерела.' }, { id: 'ray-particle', label: 'Розмір частинки світла.' }, { id: 'ray-direction', label: 'Напрямок поширення світла.' }], correctId: 'ray-direction', explanation: 'Світловий промінь показує напрямок поширення світла.' },
  { id: 'vacuum', type: 'single-select', prompt: 'Де світло поширюється найшвидше: у вакуумі, повітрі чи воді?', options: [{ id: 'vacuum-space', label: 'У вакуумі.' }, { id: 'vacuum-air', label: 'У повітрі.' }, { id: 'vacuum-water', label: 'У воді.' }], correctId: 'vacuum-space', explanation: 'У вакуумі світло поширюється найшвидше — приблизно 300 000 км/с.' },
  { id: 'water', type: 'single-select', prompt: 'Як змінюється швидкість світла у воді порівняно з вакуумом?', options: [{ id: 'water-faster', label: 'Збільшується.' }, { id: 'water-same', label: 'Не змінюється.' }, { id: 'water-slower', label: 'Зменшується.' }], correctId: 'water-slower', explanation: 'У воді світло рухається повільніше, ніж у вакуумі.' },
  { id: 'air', type: 'single-select', prompt: 'Чи однакова швидкість світла у повітрі та вакуумі?', options: [{ id: 'air-same', label: 'Так, абсолютно однакова.' }, { id: 'air-slower', label: 'Ні, у повітрі трохи повільніше.' }, { id: 'air-faster', label: 'Ні, у повітрі вдвічі швидше.' }], correctId: 'air-slower', explanation: 'У повітрі світло трохи повільніше, ніж у вакуумі.' },
  { id: 'shadow', type: 'single-select', prompt: 'Що утворюється за непрозорим предметом, який перекриває світло?', options: [{ id: 'shadow-shadow', label: 'Тінь.' }, { id: 'shadow-source', label: 'Нове джерело світла.' }, { id: 'shadow-vacuum', label: 'Вакуум.' }], correctId: 'shadow-shadow', explanation: 'За непрозорим предметом утворюється тінь.' },
];
