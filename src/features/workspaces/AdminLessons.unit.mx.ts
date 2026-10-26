import { vi } from 'vitest';
import { lessonRepository } from './repositories';

export const AdminLessons_mx = {
  edit: (message = 'Edit request prepared') =>
    vi.spyOn(lessonRepository, 'proposeEdit').mockResolvedValue({ status: 'not-configured', message }),
  remove: (message = 'Deletion request prepared') =>
    vi.spyOn(lessonRepository, 'proposeRemoval').mockResolvedValue({ status: 'not-configured', message }),
  rejectEdit: () => vi.spyOn(lessonRepository, 'proposeEdit').mockRejectedValue(new Error('Unavailable')),
  reset: () => vi.restoreAllMocks(),
} as const;
