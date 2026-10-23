import { WorkspaceShell } from '@/features/workspaces/WorkspaceShell';
import { TeacherDashboard } from '@/features/workspaces/TeacherDashboard';
import { lessonRepository, programRepository } from '@/features/workspaces/repositories';
export default async function TeacherPage() {
  const [lessons, programs] = await Promise.all([lessonRepository.list(), programRepository.list()]);
  return <WorkspaceShell title="Кабінет учителя" subtitle="Складіть власну програму з наявних уроків." current="/teacher"><TeacherDashboard lessons={lessons} programs={programs} /></WorkspaceShell>;
}
