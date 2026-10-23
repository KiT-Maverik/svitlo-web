'use client';
import { useState } from 'react';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import type { LessonSummary } from '../../types/workspaces';
import { lessonRepository } from './repositories';
export function AdminLessons({ lessons }: { lessons: LessonSummary[] }) {
  const [search, setSearch] = useState(''), [status, setStatus] = useState('all');
  const [editing, setEditing] = useState<LessonSummary | null>(null), [removing, setRemoving] = useState<LessonSummary | null>(null);
  const [title, setTitle] = useState(''), [description, setDescription] = useState(''), [notice, setNotice] = useState(''), [busy, setBusy] = useState(false);
  const filtered = lessons.filter(lesson => lesson.title.toLowerCase().includes(search.toLowerCase()) && (status === 'all' || lesson.status === status));
  async function save() {
    if (!editing) return;
    if (!title.trim() || title.trim().length > 160 || !description.trim()) { setNotice('Вкажіть назву до 160 символів і опис уроку.'); return; }
    setBusy(true);
    try { const result = await lessonRepository.proposeEdit(editing.id, { title: title.trim(), description: description.trim() }, editing.revision); setNotice(result.message); }
    catch { setNotice('Не вдалося підготувати зміну. Спробуйте ще раз.'); }
    finally { setBusy(false); }
  }
  return <Stack spacing={3}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <TextField fullWidth label="Пошук уроків" value={search} onChange={e => setSearch(e.target.value)} />
      <TextField select label="Статус уроку" value={status} onChange={e => setStatus(e.target.value)} sx={{ minWidth: 180 }}><MenuItem value="all">Усі</MenuItem><MenuItem value="review">На перевірці</MenuItem><MenuItem value="published">Опубліковані</MenuItem><MenuItem value="archived">Архів</MenuItem></TextField>
    </Stack>
    <TableContainer sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <Table aria-label="Наявні уроки" sx={{ minWidth: 600 }}>
        <TableHead><TableRow><TableCell>Урок</TableCell><TableCell>Статус</TableCell><TableCell>Кроки</TableCell><TableCell>Дії</TableCell></TableRow></TableHead>
        <TableBody>{filtered.map(lesson => <TableRow key={lesson.id}><TableCell><Typography sx={{ fontWeight: 600 }}>{lesson.title}</Typography><Typography variant="body2" color="text.secondary">{lesson.subject}</Typography></TableCell><TableCell>{lesson.status === 'review' ? 'На перевірці' : lesson.status === 'published' ? 'Опублікований' : 'Архів'}</TableCell><TableCell>{lesson.sections.length}</TableCell><TableCell><Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}><Button href={`/lessons/${lesson.id}`}>Переглянути</Button><Button onClick={() => { setEditing(lesson); setTitle(lesson.title); setDescription(lesson.description); setNotice(''); }}>Редагувати</Button><Button color="error" onClick={() => { setRemoving(lesson); setNotice(''); }}>Видалити</Button></Stack></TableCell></TableRow>)}{!filtered.length && <TableRow><TableCell colSpan={4}>Уроків не знайдено.</TableCell></TableRow>}</TableBody>
      </Table>
    </TableContainer>
    <Alert severity="info">Редагування та видалення поки готують лише запит. Файли уроків і каталог не змінюються.</Alert>
    <Dialog open={Boolean(editing)} onClose={() => { if (!busy) setEditing(null); }} fullWidth maxWidth="sm" aria-labelledby="edit-lesson-title">
      <DialogTitle id="edit-lesson-title">Редагування уроку</DialogTitle><DialogContent><Stack spacing={2} sx={{ pt: 1 }}><TextField label="Назва уроку" value={title} onChange={e => setTitle(e.target.value)} slotProps={{ htmlInput: { maxLength: 160 } }} /><TextField label="Опис уроку" multiline minRows={3} value={description} onChange={e => setDescription(e.target.value)} slotProps={{ htmlInput: { maxLength: 2000 } }} /><Typography variant="body2">Зміна тексту секцій буде доступна через редактор контенту після підключення Git workflow.</Typography>{notice && <Alert role="status" severity="info">{notice}</Alert>}</Stack></DialogContent><DialogActions><Button disabled={busy} onClick={() => setEditing(null)}>Закрити</Button><Button disabled={busy} onClick={save}>Підготувати зміни</Button></DialogActions>
    </Dialog>
    <Dialog open={Boolean(removing)} onClose={() => { if (!busy) setRemoving(null); }} fullWidth maxWidth="sm" aria-labelledby="remove-lesson-title">
      <DialogTitle id="remove-lesson-title">Видалення уроку</DialogTitle><DialogContent><Typography>Урок: {removing?.title}</Typography><Typography sx={{ mt: 1 }}>Поки що урок не буде видалено. Остаточну дію буде підключено після перевірки залежних програм і прогресу учнів.</Typography>{notice && <Alert role="status" severity="info" sx={{ mt: 2 }}>{notice}</Alert>}</DialogContent><DialogActions><Button disabled={busy} onClick={() => setRemoving(null)}>Скасувати</Button><Button color="error" disabled={busy} onClick={async () => { if (!removing) return; setBusy(true); try { const result = await lessonRepository.proposeRemoval(removing.id, removing.revision); setNotice(result.message); } catch { setNotice('Не вдалося підготувати запит. Спробуйте ще раз.'); } finally { setBusy(false); } }}>Підготувати видалення</Button></DialogActions>
    </Dialog>
    <Box><Typography variant="body2" color="text.secondary">Джерело контенту — Git. Адміністративні права та справжні операції буде перевіряти сервер, коли підключимо авторизацію.</Typography></Box>
  </Stack>;
}
