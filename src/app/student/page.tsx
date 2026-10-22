import { WorkspaceShell } from '@/features/workspaces/WorkspaceShell';
import { StudentDashboard } from '@/features/workspaces/StudentDashboard';
import { lessonRepository, programRepository, progressRepository } from '@/features/workspaces/repositories';
export default async function StudentPage() {
  const [lessons, programs, progress] = await Promise.all([lessonRepository.list(), programRepository.list(), progressRepository.list()]);
  return <WorkspaceShell title="Кабінет учня" subtitle="Ваші уроки, програми та наступний крок у навчанні." current="/student"><StudentDashboard lessons={lessons} programs={programs} progress={progress} /></WorkspaceShell>;
}
