import { Box, Button, Chip, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import type { LearningProgram, LessonProgress, LessonSummary } from '@types';
import { summarizeProgress } from './selectors';
import { locale } from './locales/uk-UA';
export function StudentDashboard({ lessons, progress, programs }: { lessons: LessonSummary[]; progress: LessonProgress[]; programs: LearningProgram[] }) {
  const summaries = lessons.map(lesson => summarizeProgress(lesson, progress.find(p => p.lessonId === lesson.id)));
  const completed = summaries.reduce((sum, p) => sum + p.completed, 0), total = summaries.reduce((sum, p) => sum + p.total, 0);
  return <Stack spacing={3}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      {[[locale.student.completedSteps, `${completed} / ${total}`], [locale.student.completedLessons, `${summaries.filter(p => p.total > 0 && p.completed === p.total).length} / ${lessons.length}`], [locale.student.myPrograms, String(programs.length)]].map(([label, value]) => <Paper key={label} variant="outlined" sx={{ p: 3, flex: 1 }}><Typography color="text.secondary">{label}</Typography><Typography variant="h4" component="p">{value}</Typography></Paper>)}
    </Stack>
    <Typography component="h2" variant="h5">{locale.student.continueLearning}</Typography>
    {!lessons.length && <Typography>{locale.student.noLessons}</Typography>}
    {lessons.map(lesson => {
      const record = progress.find(p => p.lessonId === lesson.id), summary = summarizeProgress(lesson, record);
      const next = lesson.sections.find(section => !record?.completedSectionIds.includes(section.id));
      return <Paper key={lesson.id} variant="outlined" sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Box><Chip label={lesson.subject} size="small" /><Typography component="h3" variant="h6" sx={{ mt: 1 }}>{lesson.title}</Typography><Typography color="text.secondary">{lesson.description}</Typography></Box>
          <Typography>{locale.student.progress(summary.percent, summary.completed, summary.total)}</Typography>
          <LinearProgress variant="determinate" value={summary.percent} aria-label={locale.student.progressLabel(lesson.title)} />
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>{lesson.sections.map(section => <Chip key={section.id} label={`${record?.completedSectionIds.includes(section.id) ? '✓ ' : ''}${section.title}`} color={record?.completedSectionIds.includes(section.id) ? 'success' : 'default'} variant="outlined" />)}</Stack>
          <Button href={`/lessons/${lesson.id}${next ? `#${next.id}` : ''}`} variant="contained" sx={{ alignSelf: 'flex-start' }}>{locale.student.continue}{next ? `: ${next.title}` : ''}</Button>
        </Stack>
      </Paper>;
    })}
    <Typography component="h2" variant="h5">Мої програми</Typography>
    {programs.map(program => <Paper key={program.id} variant="outlined" sx={{ p: 2 }}><Typography variant="h6">{program.title}</Typography><Typography color="text.secondary">{locale.student.programLessons(program.lessonIds.length)}</Typography></Paper>)}
  </Stack>;
}
