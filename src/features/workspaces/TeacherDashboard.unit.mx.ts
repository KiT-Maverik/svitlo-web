import { vi } from 'vitest';
import { programRepository } from './repositories';

export const TeacherDashboard_mx = {
  save: (message = 'Draft prepared') =>
    vi.spyOn(programRepository, 'save').mockResolvedValue({ status: 'not-configured', message }),
  reject: () => vi.spyOn(programRepository, 'save').mockRejectedValue(new Error('Repository unavailable')),
  reset: () => vi.restoreAllMocks(),
} as const;
