'use client';
import { useState } from 'react';
import { Alert, Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import type { LearningProgram, LessonSummary } from '@types';
import { programRepository } from './repositories';
import { validateProgram } from './selectors';
export function TeacherDashboard({ lessons, programs }: { lessons: LessonSummary[]; programs: LearningProgram[] }) {
  const [title, setTitle] = useState(''), [selected, setSelected] = useState<string[]>([]), [search, setSearch] = useState(''), [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const filtered = lessons.filter(lesson => `${lesson.title} ${lesson.subject}`.toLowerCase().includes(search.toLowerCase()));
  function move(index: number, delta: number) { const next = [...selected]; [next[index], next[index + delta]] = [next[index + delta], next[index]]; setSelected(next); setNotice(''); }
  return <Stack spacing={3}>
    <Typography component="h2" variant="h5">Мої програми</Typography>
    {programs.map(program => <Paper key={program.id} variant="outlined" sx={{ p: 2 }}><Stack direction="row" sx={{ flexWrap: 'wrap', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}><Box><Typography variant="h6">{program.title}</Typography><Typography color="text.secondary">{program.lessonIds.length} урок · демонстраційний приклад</Typography></Box><Button onClick={() => { setTitle(program.title); setSelected([...program.lessonIds]); setNotice(''); }}>Відкрити як чернетку</Button></Stack></Paper>)}
    <Paper component="section" aria-label="Конструктор програми" variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
      <Stack spacing={3}>
        <Typography component="h2" variant="h5">Скласти програму</Typography>
        <TextField label="Назва програми" value={title} onChange={e => { setTitle(e.target.value); setNotice(''); }} slotProps={{ htmlInput: { maxLength: 120 } }} />
        <TextField label="Знайти урок" value={search} onChange={e => setSearch(e.target.value)} />
        <Box><Typography component="h3" variant="h6">Каталог уроків</Typography>{!filtered.length && <Typography>За цим запитом уроків не знайдено.</Typography>}{filtered.map(lesson => <Box key={lesson.id} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}><FormControlLabel control={<Checkbox checked={selected.includes(lesson.id)} onChange={(_, checked) => { setSelected(checked ? [...selected, lesson.id] : selected.filter(id => id !== lesson.id)); setNotice(''); }} />} label={lesson.title} /><Button href={`/lessons/${lesson.id}`}>Переглянути</Button></Box>)}</Box>
        <Box><Typography component="h3" variant="h6">Порядок уроків · {selected.length}</Typography>{!selected.length && <Typography color="text.secondary">Оберіть уроки з каталогу.</Typography>}<Stack component="ol" spacing={1} sx={{ pl: 3 }}>{selected.map((id, index) => <Box component="li" key={id}><Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', alignItems: 'center' }}><Typography sx={{ flex: 1 }}>{lessons.find(l => l.id === id)?.title}</Typography><Button disabled={index === 0} aria-label={`Раніше: ${id}`} onClick={() => move(index, -1)}>↑</Button><Button disabled={index === selected.length - 1} aria-label={`Пізніше: ${id}`} onClick={() => move(index, 1)}>↓</Button><Button onClick={() => setSelected(selected.filter(value => value !== id))}>Прибрати</Button></Stack></Box>)}</Stack></Box>
        <Button variant="contained" disabled={busy} sx={{ alignSelf: 'flex-start' }} onClick={async () => {
          const draft = { title: title.trim(), lessonIds: [...selected] }, error = validateProgram(draft, lessons);
          if (error) { setNotice(error); return; }
          setBusy(true); try { const result = await programRepository.save(draft); setNotice(result.message); } catch { setNotice('Не вдалося підготувати програму. Спробуйте ще раз.'); } finally { setBusy(false); }
        }}>Підготувати програму</Button>
        <Typography variant="body2" color="text.secondary">Чернетка зберігається лише поки відкрита ця сторінка.</Typography>
        {notice && <Alert role="status" severity="info">{notice}</Alert>}
      </Stack>
    </Paper>
  </Stack>;
}
