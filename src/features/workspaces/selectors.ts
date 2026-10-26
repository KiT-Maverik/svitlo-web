import type { LessonProgress, LessonSummary, ProgramDraft, ProgressSummary } from '@types';
export function summarizeProgress(lesson: LessonSummary, progress?: LessonProgress): ProgressSummary {
  const valid = new Set(lesson.sections.map(section => section.id));
  const completed = new Set((progress?.lessonId === lesson.id ? progress.completedSectionIds : []).filter(id => valid.has(id))).size;
  const total = valid.size;
  return { completed, total, percent: total ? Math.round(completed / total * 100) : 0 };
}
export function validateProgram(draft: ProgramDraft, catalog: LessonSummary[]): string | null {
  if (!draft.title.trim() || draft.title.trim().length > 120) return 'Назва повинна містити від 1 до 120 символів.';
  if (!draft.lessonIds.length) return 'Оберіть хоча б один урок.';
  if (new Set(draft.lessonIds).size !== draft.lessonIds.length) return 'Уроки не повинні повторюватися.';
  if (draft.lessonIds.some(id => !catalog.some(lesson => lesson.id === id))) return 'Один з уроків більше не доступний у каталозі.';
  return null;
}
