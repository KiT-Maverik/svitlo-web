import { notFound } from 'next/navigation';
import { Alert, Box, Button, Container, Link, Paper, Stack, Typography } from '@mui/material';
import { lessons } from '@/features/workspaces/catalog';
import { ReportButton } from '@/features/reporting/ReportButton';
export function generateStaticParams() { return lessons.map(lesson => ({ id: lesson.id })); }
export default async function LessonPreview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params, lesson = lessons.find(item => item.id === id);
  if (!lesson) notFound();
  return <Container component="main" maxWidth="md" sx={{ py: 4 }}><Stack spacing={3}>
    <Button href="/student" sx={{ alignSelf: 'flex-start' }}>← Кабінет учня</Button>
    <Typography component="h1" variant="h4">{lesson.title}</Typography>
    <Typography>{lesson.description}</Typography>
    <Alert severity="info">Це короткий огляд секцій уроку. <Link href={`/topics/${lesson.id}`}>Відкрити повний інтерактивний урок</Link></Alert>
    {lesson.sections.map(section => <Paper key={section.id} component="section" id={section.id} aria-label={section.title} variant="outlined" sx={{ p: 3, scrollMarginTop: 24 }}><Stack spacing={2}><Typography component="h2" variant="h5">{section.title}</Typography><Typography sx={{ lineHeight: 1.8 }}>{section.summary}</Typography><Box sx={{ display: 'flex', justifyContent: 'flex-end' }}><ReportButton contentId={`lesson:${lesson.id}:${section.id}`} title={`${lesson.title} — ${section.title}`} /></Box></Stack></Paper>)}
  </Stack></Container>;
}
