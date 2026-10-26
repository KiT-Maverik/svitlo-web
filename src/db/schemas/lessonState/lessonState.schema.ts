import { z } from 'zod';
import type { LessonState } from '@types';

const id = z.string().min(1);

const base = { id, lessonId: id };

const progress = {
  ...base,
  startedAt: z.string(),
  currentSectionId: id.optional(),
  sectionCompletion: z.record(id, z.boolean()),
  skippedSectionIds: z.array(id),
  quizStateIds: z.record(id, id),
};

export const lessonStateSchema: z.ZodType<LessonState> = z.discriminatedUnion('status', [
  z.strictObject({ ...base, status: z.literal('new') }),
  z.strictObject({ ...progress, status: z.literal('in-progress') }),
  z.strictObject({ ...progress, status: z.literal('content-complete'), contentCompletedAt: z.string() }),
  z.strictObject({ ...progress, status: z.literal('finished'), contentCompletedAt: z.string(), completedAt: z.string() }),
]);
