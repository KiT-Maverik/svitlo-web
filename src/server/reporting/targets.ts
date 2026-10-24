import type { ReportTarget } from '../../features/reporting/types';
import { lessons } from '../../features/workspaces/catalog';
import { exampleQuestions } from '../../components/widgets/questions/examples';
/** Trusted server catalog. Clients cannot select a repository or arbitrary source URL. */
export const reportTargets: ReportTarget[] = [
  ...lessons.flatMap(lesson => lesson.sections.map(section => ({ id: `lesson:${lesson.id}:${section.id}`, title: `${lesson.title} — ${section.title}`, path: `/lessons/${lesson.id}#${section.id}`, sourcePath: 'src/features/workspaces/catalog.ts', revision: process.env.CONTENT_REVISION || 'working-tree' }))),
  ...exampleQuestions.map(question => ({ id: `question:${question.id}`, title: question.prompt, path: '/questions', sourcePath: 'src/components/widgets/questions/examples.ts', revision: process.env.CONTENT_REVISION || 'working-tree' })),
];
