import { WorkspaceShell } from '@/features/workspaces/WorkspaceShell';
import { AdminLessons } from '@/features/workspaces/AdminLessons';
import { lessonRepository } from '@/features/workspaces/repositories';
export default async function AdminLessonsPage() {
  const lessons = await lessonRepository.list();
  return <WorkspaceShell title="Керування уроками" subtitle="Перегляд каталогу та підготовка змін навчального матеріалу." current="/admin/lessons"><AdminLessons lessons={lessons} /></WorkspaceShell>;
}
