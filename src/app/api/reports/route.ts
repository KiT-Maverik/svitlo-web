import { createReportHandler } from '@/server/reporting/handler';
import { reportTargets } from '@/server/reporting/targets';
export const POST = createReportHandler({
  config: () => ({ enabled: process.env.GITHUB_REPORTS_ENABLED === 'true', token: process.env.GITHUB_REPORTS_TOKEN, repository: process.env.GITHUB_REPORTS_REPOSITORY }),
  resolveTarget: id => reportTargets.find(target => target.id === id),
});
