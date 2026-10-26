import type { LessonRepository, ProgramRepository, ProgressRepository } from '@types';
import { demoPrograms, demoProgress, lessons } from './catalog';
const unavailable = () => ({ status: 'not-configured' as const, message: 'Збереження змін ще не підключене. Дані залишилися без змін.' });
export const programRepository: ProgramRepository = { list: async () => structuredClone(demoPrograms), save: async () => unavailable(), remove: async () => unavailable() };
export const lessonRepository: LessonRepository = { list: async () => structuredClone(lessons), proposeEdit: async () => unavailable(), proposeRemoval: async () => unavailable() };
export const progressRepository: ProgressRepository = { list: async () => structuredClone(demoProgress) };
