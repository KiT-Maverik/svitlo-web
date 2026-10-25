import type { SelectOneAnswerQuestion } from '@/types/questions';
import type { Lesson_Config, LessonSection_Config } from '@/types/configs/lesson.types';
import type { QuizConfig } from '@/types/configs/quiz.types';
import type { NonEmptyResourceArray, TextResource_ChosenLocales } from '@/types/content/resources';

type UkrainianTextResource = TextResource_ChosenLocales<'uk-UA'>;

const text = (id: string, value: string): UkrainianTextResource => ({
  id,
  blockType: 'text',
  allLocales: false,
  value: { 'uk-UA': value },
});

const resources = (id: string, value: string): NonEmptyResourceArray<UkrainianTextResource> => [text(id, value)];

const questionBank: QuizConfig['questionBank'] = [
  { id: 'direction', type: 'select-one-answer', restrictions: [], content: resources('direction-prompt', 'Як поширюється світло в прозорому однорідному середовищі?'), flashcardConfig: { includeInLessonSet: true }, number: 1, weight: 1, answers: { correct: text('direction-correct', 'Прямолінійно.'), incorrect: [text('direction-incorrect-1', 'По колу.')], distractors: [text('direction-distractor', 'Завжди по кривій.')] } },
  { id: 'ray', type: 'select-one-answer', restrictions: [], content: resources('ray-prompt', 'Що показує світловий промінь?'), flashcardConfig: { includeInLessonSet: true }, number: 2, weight: 1, answers: { correct: text('ray-correct', 'Напрямок поширення світла.'), incorrect: [text('ray-incorrect-1', 'Температуру джерела.')], distractors: [text('ray-distractor', 'Розмір частинки світла.')] } },
  { id: 'vacuum', type: 'select-one-answer', restrictions: [], content: resources('vacuum-prompt', 'Де світло поширюється найшвидше: у вакуумі, повітрі чи воді?'), flashcardConfig: { includeInLessonSet: true }, number: 3, weight: 1, answers: { correct: text('vacuum-correct', 'У вакуумі.'), incorrect: [text('vacuum-incorrect-1', 'У повітрі.')], distractors: [text('vacuum-distractor', 'У воді.')] } },
  { id: 'water', type: 'select-one-answer', restrictions: [], content: resources('water-prompt', 'Як змінюється швидкість світла у воді порівняно з вакуумом?'), flashcardConfig: { includeInLessonSet: true }, number: 4, weight: 1, answers: { correct: text('water-correct', 'Зменшується.'), incorrect: [text('water-incorrect-1', 'Збільшується.')], distractors: [text('water-distractor', 'Не змінюється.')] } },
  { id: 'air', type: 'select-one-answer', restrictions: [], content: resources('air-prompt', 'Чи однакова швидкість світла у повітрі та вакуумі?'), flashcardConfig: { includeInLessonSet: true }, number: 5, weight: 1, answers: { correct: text('air-correct', 'Ні, у повітрі трохи повільніше.'), incorrect: [text('air-incorrect-1', 'Так, абсолютно однакова.')], distractors: [text('air-distractor', 'Ні, у повітрі вдвічі швидше.')] } },
  { id: 'shadow', type: 'select-one-answer', restrictions: [], content: resources('shadow-prompt', 'Що утворюється за непрозорим предметом, який перекриває світло?'), flashcardConfig: { includeInLessonSet: true }, number: 6, weight: 1, answers: { correct: text('shadow-correct', 'Тінь.'), incorrect: [text('shadow-incorrect-1', 'Нове джерело світла.')], distractors: [text('shadow-distractor', 'Вакуум.')] } },
];

const quiz: QuizConfig = {
  id: 'light-quiz', sectionId: 'quiz', feedbackMode: 'immediate',
  grading: { mode: 'percentage', successThreshold: 70 },
  interaction: { retries: -1, showErrors: true, showCorrectAnswers: true, allowExplanations: true, allowDeferring: true, allowQuestionNavigation: true, skippable: true },
  questionBank,
  results: { visibility: 'immediate', showScore: true },
  screen: { welcome: { resources: resources('quiz-welcome', 'Перевірмо, як рухається світло.') }, ending: { success: { showDefaultContent: true }, fail: { showDefaultContent: true } } },
};

const theory: LessonSection_Config = { id: 'theory', name: text('section-theory', 'Теорія'), skippable: false, content: resources('theory-content', 'Світло поширюється прямолінійно в прозорому однорідному середовищі.') };
const practice: LessonSection_Config = { id: 'practice', name: text('section-practice', 'Практика'), skippable: true, content: resources('practice-content', 'Порівняй швидкість світла у вакуумі, повітрі та воді.') };

export const lightLesson: Lesson_Config = {
  id: 'light', title: text('lesson-title', 'Як рухається світло'), requireQuiz: true,
  sections: { allowNavigation: true, allowSkipping: true, showIndexes: true, content: [theory, practice, quiz] },
};

/** Legacy view model used by the current question widget until it consumes ContentQuestion. */
export const lightQuestions: SelectOneAnswerQuestion[] = [
  { id: 'direction', type: 'single-select', prompt: 'Як поширюється світло в прозорому однорідному середовищі?', options: [{ id: 'direction-circle', label: 'По колу.' }, { id: 'direction-linear', label: 'Прямолінійно.' }, { id: 'direction-curve', label: 'Завжди по кривій.' }], correctId: 'direction-linear', explanation: 'У прозорому однорідному середовищі світло поширюється прямолінійно.' },
  { id: 'ray', type: 'single-select', prompt: 'Що показує світловий промінь?', options: [{ id: 'ray-temperature', label: 'Температуру джерела.' }, { id: 'ray-particle', label: 'Розмір частинки світла.' }, { id: 'ray-direction', label: 'Напрямок поширення світла.' }], correctId: 'ray-direction', explanation: 'Світловий промінь показує напрямок поширення світла.' },
  { id: 'vacuum', type: 'single-select', prompt: 'Де світло поширюється найшвидше: у вакуумі, повітрі чи воді?', options: [{ id: 'vacuum-space', label: 'У вакуумі.' }, { id: 'vacuum-air', label: 'У повітрі.' }, { id: 'vacuum-water', label: 'У воді.' }], correctId: 'vacuum-space', explanation: 'У вакуумі світло поширюється найшвидше — приблизно 300 000 км/с.' },
  { id: 'water', type: 'single-select', prompt: 'Як змінюється швидкість світла у воді порівняно з вакуумом?', options: [{ id: 'water-faster', label: 'Збільшується.' }, { id: 'water-same', label: 'Не змінюється.' }, { id: 'water-slower', label: 'Зменшується.' }], correctId: 'water-slower', explanation: 'У воді світло рухається повільніше, ніж у вакуумі.' },
  { id: 'air', type: 'single-select', prompt: 'Чи однакова швидкість світла у повітрі та вакуумі?', options: [{ id: 'air-same', label: 'Так, абсолютно однакова.' }, { id: 'air-slower', label: 'Ні, у повітрі трохи повільніше.' }, { id: 'air-faster', label: 'Ні, у повітрі вдвічі швидше.' }], correctId: 'air-slower', explanation: 'У повітрі світло трохи повільніше, ніж у вакуумі.' },
  { id: 'shadow', type: 'single-select', prompt: 'Що утворюється за непрозорим предметом, який перекриває світло?', options: [{ id: 'shadow-shadow', label: 'Тінь.' }, { id: 'shadow-source', label: 'Нове джерело світла.' }, { id: 'shadow-vacuum', label: 'Вакуум.' }], correctId: 'shadow-shadow', explanation: 'За непрозорим предметом утворюється тінь.' },
];

export const media = [
  { id: 'vacuum', title: 'Вакуум', index: 1 },
  { id: 'air', title: 'Повітря', index: 1.000293 },
  { id: 'water', title: 'Вода', index: 1.333 },
] as const;

export const LIGHT_SPEED_KM_S = 299792.458;
