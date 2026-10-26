'use client';
import { useState } from 'react';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import type { LessonSummary } from '@types';
import { lessonRepository } from './repositories';
import { locale } from './locales/uk-UA';
import { aria } from './AdminLessons.constants';
export function AdminLessons({ lessons }: { lessons: LessonSummary[] }) {
  const [search, setSearch] = useState(''), [status, setStatus] = useState('all');
  const [editing, setEditing] = useState<LessonSummary | null>(null), [removing, setRemoving] = useState<LessonSummary | null>(null);
  const [title, setTitle] = useState(''), [description, setDescription] = useState(''), [notice, setNotice] = useState(''), [busy, setBusy] = useState(false);
  const filtered = lessons.filter(lesson => lesson.title.toLowerCase().includes(search.toLowerCase()) && (status === 'all' || lesson.status === status));
  async function save() {
    if (!editing) return;
    if (!title.trim() || title.trim().length > 160 || !description.trim()) { setNotice(locale.admin.validation); return; }
    setBusy(true);
    try { const result = await lessonRepository.proposeEdit(editing.id, { title: title.trim(), description: description.trim() }, editing.revision); setNotice(result.message); }
    catch { setNotice(locale.admin.editFailed); }
    finally { setBusy(false); }
  }
  return <Stack spacing={3}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <TextField fullWidth label={locale.admin.search} value={search} onChange={e => setSearch(e.target.value)} />
      <TextField select label={locale.admin.status} value={status} onChange={e => setStatus(e.target.value)} sx={{ minWidth: 180 }}><MenuItem value="all">{locale.admin.statusValues.all}</MenuItem><MenuItem value="review">{locale.admin.statusValues.review}</MenuItem><MenuItem value="published">{locale.admin.statusValues.published}</MenuItem><MenuItem value="archived">{locale.admin.statusValues.archived}</MenuItem></TextField>
    </Stack>
    <TableContainer sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <Table aria-label={aria.table} sx={{ minWidth: 600 }}>
        <TableHead><TableRow><TableCell>{locale.admin.columns.lesson}</TableCell><TableCell>{locale.admin.columns.status}</TableCell><TableCell>{locale.admin.columns.steps}</TableCell><TableCell>{locale.admin.columns.actions}</TableCell></TableRow></TableHead>
        <TableBody>{filtered.map(lesson => <TableRow key={lesson.id}><TableCell><Typography sx={{ fontWeight: 600 }}>{lesson.title}</Typography><Typography variant="body2" color="text.secondary">{lesson.subject}</Typography></TableCell><TableCell>{lesson.status === 'review' ? locale.admin.displayStatus.review : lesson.status === 'published' ? locale.admin.displayStatus.published : locale.admin.displayStatus.archived}</TableCell><TableCell>{lesson.sections.length}</TableCell><TableCell><Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}><Button href={`/lessons/${lesson.id}`}>{locale.admin.actions.view}</Button><Button onClick={() => { setEditing(lesson); setTitle(lesson.title); setDescription(lesson.description); setNotice(''); }}>{locale.admin.actions.edit}</Button><Button color="error" onClick={() => { setRemoving(lesson); setNotice(''); }}>{locale.admin.actions.remove}</Button></Stack></TableCell></TableRow>)}{!filtered.length && <TableRow><TableCell colSpan={4}>{locale.admin.empty}</TableCell></TableRow>}</TableBody>
      </Table>
    </TableContainer>
    <Alert severity="info">{locale.admin.notice}</Alert>
    <Dialog open={Boolean(editing)} onClose={() => { if (!busy) setEditing(null); }} fullWidth maxWidth="sm" aria-labelledby="edit-lesson-title">
      <DialogTitle id="edit-lesson-title">{locale.admin.editTitle}</DialogTitle><DialogContent><Stack spacing={2} sx={{ pt: 1 }}><TextField label={locale.admin.fields.title} value={title} onChange={e => setTitle(e.target.value)} slotProps={{ htmlInput: { maxLength: 160 } }} /><TextField label={locale.admin.fields.description} multiline minRows={3} value={description} onChange={e => setDescription(e.target.value)} slotProps={{ htmlInput: { maxLength: 2000 } }} /><Typography variant="body2">{locale.admin.editNote}</Typography>{notice && <Alert role="status" severity="info">{notice}</Alert>}</Stack></DialogContent><DialogActions><Button disabled={busy} onClick={() => setEditing(null)}>{locale.admin.actions.close}</Button><Button disabled={busy} onClick={save}>{locale.admin.actions.prepareEdit}</Button></DialogActions>
    </Dialog>
    <Dialog open={Boolean(removing)} onClose={() => { if (!busy) setRemoving(null); }} fullWidth maxWidth="sm" aria-labelledby="remove-lesson-title">
      <DialogTitle id="remove-lesson-title">{locale.admin.removeTitle}</DialogTitle><DialogContent><Typography>{locale.admin.removing(removing?.title ?? '')}</Typography><Typography sx={{ mt: 1 }}>{locale.admin.removeNote}</Typography>{notice && <Alert role="status" severity="info" sx={{ mt: 2 }}>{notice}</Alert>}</DialogContent><DialogActions><Button disabled={busy} onClick={() => setRemoving(null)}>{locale.admin.actions.cancel}</Button><Button color="error" disabled={busy} onClick={async () => { if (!removing) return; setBusy(true); try { const result = await lessonRepository.proposeRemoval(removing.id, removing.revision); setNotice(result.message); } catch { setNotice(locale.admin.removeFailed); } finally { setBusy(false); } }}>{locale.admin.actions.prepareRemove}</Button></DialogActions>
    </Dialog>
    <Box><Typography variant="body2" color="text.secondary">{locale.admin.footer}</Typography></Box>
  </Stack>;
}
