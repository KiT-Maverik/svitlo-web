'use client';
import { useState } from 'react';
import { Alert, Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import type { LearningProgram, LessonSummary } from '@types';
import { programRepository } from './repositories';
import { validateProgram } from './selectors';
import { locale } from './locales/uk-UA';
export function TeacherDashboard({ lessons, programs }: { lessons: LessonSummary[]; programs: LearningProgram[] }) {
  const [title, setTitle] = useState(''), [selected, setSelected] = useState<string[]>([]), [search, setSearch] = useState(''), [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const filtered = lessons.filter(lesson => `${lesson.title} ${lesson.subject}`.toLowerCase().includes(search.toLowerCase()));
  function move(index: number, delta: number) { const next = [...selected]; [next[index], next[index + delta]] = [next[index + delta], next[index]]; setSelected(next); setNotice(''); }
  return <Stack spacing={3}>
    <Typography component="h2" variant="h5">{locale.teacher.myPrograms}</Typography>
    {programs.map(program => <Paper key={program.id} variant="outlined" sx={{ p: 2 }}><Stack direction="row" sx={{ flexWrap: 'wrap', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}><Box><Typography variant="h6">{program.title}</Typography><Typography color="text.secondary">{locale.teacher.exampleProgram(program.lessonIds.length)}</Typography></Box><Button onClick={() => { setTitle(program.title); setSelected([...program.lessonIds]); setNotice(''); }}>{locale.teacher.openDraft}</Button></Stack></Paper>)}
    <Paper component="section" aria-label={locale.teacher.builder} variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
      <Stack spacing={3}>
        <Typography component="h2" variant="h5">{locale.teacher.compose}</Typography>
        <TextField label={locale.teacher.programTitle} value={title} onChange={e => { setTitle(e.target.value); setNotice(''); }} slotProps={{ htmlInput: { maxLength: 120 } }} />
        <TextField label={locale.teacher.search} value={search} onChange={e => setSearch(e.target.value)} />
        <Box><Typography component="h3" variant="h6">{locale.teacher.catalog}</Typography>{!filtered.length && <Typography>{locale.teacher.noResults}</Typography>}{filtered.map(lesson => <Box key={lesson.id} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}><FormControlLabel control={<Checkbox checked={selected.includes(lesson.id)} onChange={(_, checked) => { setSelected(checked ? [...selected, lesson.id] : selected.filter(id => id !== lesson.id)); setNotice(''); }} />} label={lesson.title} /><Button href={`/lessons/${lesson.id}`}>{locale.teacher.view}</Button></Box>)}</Box>
        <Box><Typography component="h3" variant="h6">{locale.teacher.order(selected.length)}</Typography>{!selected.length && <Typography color="text.secondary">{locale.teacher.selectLessons}</Typography>}<Stack component="ol" spacing={1} sx={{ pl: 3 }}>{selected.map((id, index) => <Box component="li" key={id}><Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', alignItems: 'center' }}><Typography sx={{ flex: 1 }}>{lessons.find(l => l.id === id)?.title}</Typography><Button disabled={index === 0} aria-label={locale.teacher.earlier(id)} onClick={() => move(index, -1)}>↑</Button><Button disabled={index === selected.length - 1} aria-label={locale.teacher.later(id)} onClick={() => move(index, 1)}>↓</Button><Button onClick={() => setSelected(selected.filter(value => value !== id))}>{locale.teacher.remove}</Button></Stack></Box>)}</Stack></Box>
        <Button variant="contained" disabled={busy} sx={{ alignSelf: 'flex-start' }} onClick={async () => {
          const draft = { title: title.trim(), lessonIds: [...selected] }, error = validateProgram(draft, lessons);
          if (error) { setNotice(error); return; }
          setBusy(true); try { const result = await programRepository.save(draft); setNotice(result.message); } catch { setNotice(locale.teacher.saveFailed); } finally { setBusy(false); }
        }}>{locale.teacher.prepare}</Button>
        <Typography variant="body2" color="text.secondary">{locale.teacher.draftNote}</Typography>
        {notice && <Alert role="status" severity="info">{notice}</Alert>}
      </Stack>
    </Paper>
  </Stack>;
}
