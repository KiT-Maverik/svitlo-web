import type { LearningProgram, LessonProgress, LessonSummary } from '../../types/workspaces';
// This lesson exists in PR #1. This catalog is a preview adapter until the branches join.
export const lessons: LessonSummary[] = [{
  id: 'light', title: 'Як рухається світло', subject: 'Фізика', status: 'review',
  description: 'Поширення світла, швидкість у різних середовищах і утворення тіні.',
  revision: '7542e82dd87550acdd93b6cf85bb027ad5491a5b',
  sourcePath: 'src/content/lightLesson.ts',
  sourceUrl: 'https://github.com/KiT-Maverik/svitlo-web/blob/7542e82dd87550acdd93b6cf85bb027ad5491a5b/src/content/lightLesson.ts',
  sections: [
    { id: 'theory', title: 'Теорія', kind: 'theory', summary: 'У прозорому однорідному середовищі світло поширюється прямолінійно. Світловий промінь показує напрямок його поширення.' },
    { id: 'practice', title: 'Практика', kind: 'practice', summary: 'Порівняйте швидкість світла у вакуумі, повітрі й воді. У вакуумі світло поширюється найшвидше; у воді його швидкість менша.' },
    { id: 'flashcards', title: 'Флешкартки', kind: 'flashcards', summary: 'Пригадайте поняття світлового променя, прямолінійного поширення та тіні.' },
    { id: 'test', title: 'Тестування', kind: 'test', summary: 'Перевірте, як напрямок поширення світла та непрозорі перешкоди пояснюють утворення тіні.' },
  ],
}];
export const demoPrograms: LearningProgram[] = [{ id: 'intro-light', title: 'Знайомство зі світлом', lessonIds: ['light'], version: 1 }];
export const demoProgress: LessonProgress[] = [{ lessonId: 'light', completedSectionIds: ['theory', 'practice'] }];
