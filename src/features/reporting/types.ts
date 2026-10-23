export type ReportCategory = 'mistake' | 'unclear' | 'technical';
export interface ReportInput { requestId: string; contentId: string; category: ReportCategory; message: string }
export interface ReportTarget { id: string; title: string; path: string; sourcePath: string; revision: string }
export type ReportResponse = { status: 'created'; issueUrl: string; issueNumber: number } | { status: 'error'; message: string };
