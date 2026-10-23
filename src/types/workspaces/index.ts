export type LessonStepKind = 'theory' | 'practice' | 'flashcards' | 'test';
export interface LessonSection { id: string; title: string; kind: LessonStepKind; summary: string }
export interface LessonSummary {
  id: string; title: string; description: string; subject: string; status: 'review' | 'published' | 'archived';
  revision: string; sourcePath: string; sourceUrl: string; sections: LessonSection[];
}
export interface LearningProgram { id: string; title: string; lessonIds: string[]; version: number }
export interface ProgramDraft { title: string; lessonIds: string[] }
export interface LessonProgress { lessonId: string; completedSectionIds: string[] }
export interface ProgressSummary { completed: number; total: number; percent: number }
export type MutationResult = { status: 'not-configured'; message: string };
/** Async ports to replace with authenticated API adapters; no CRUD implementation yet. */
export interface ProgramRepository {
  list(): Promise<LearningProgram[]>;
  save(draft: ProgramDraft, expectedVersion?: number): Promise<MutationResult>;
  remove(id: string, expectedVersion: number): Promise<MutationResult>;
}
export interface LessonRepository {
  list(): Promise<LessonSummary[]>;
  proposeEdit(id: string, patch: { title: string; description: string }, expectedRevision: string): Promise<MutationResult>;
  proposeRemoval(id: string, expectedRevision: string): Promise<MutationResult>;
}
export interface ProgressRepository { list(): Promise<LessonProgress[]> }
