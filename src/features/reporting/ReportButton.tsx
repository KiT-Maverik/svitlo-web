'use client';
import { useId, useRef, useState } from 'react';
import { Alert, Button, IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Link, MenuItem, Stack, TextField, Typography } from '@mui/material';
import OutlinedFlag from '@mui/icons-material/OutlinedFlag';
import type { ReportCategory, ReportResponse } from './types';
export function ReportButton({ contentId, title }: { contentId: string; title: string }) {
  const id = useId();
  const [open, setOpen] = useState(false), [message, setMessage] = useState(''), [category, setCategory] = useState<ReportCategory>('mistake');
  const [busy, setBusy] = useState(false), [result, setResult] = useState<ReportResponse | null>(null);
  const requestId = useRef(''), sending = useRef(false);
  const edit = () => { requestId.current = crypto.randomUUID(); setResult(null); };
  async function submit() {
    if (sending.current) return;
    if (message.trim().length < 10 || message.trim().length > 2000) { setResult({ status: 'error', message: 'Опишіть проблему: від 10 до 2000 символів.' }); return; }
    sending.current = true; setBusy(true); setResult(null);
    try {
      const response = await fetch('/api/reports', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ requestId: requestId.current, contentId, category, message: message.trim() }), signal: AbortSignal.timeout(15000) });
      const body: unknown = await response.json();
      if (response.ok && body && typeof body === 'object' && 'status' in body && body.status === 'created' && 'issueUrl' in body && typeof body.issueUrl === 'string' && /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/issues\/\d+$/.test(body.issueUrl) && 'issueNumber' in body && typeof body.issueNumber === 'number') setResult({ status: 'created', issueUrl: body.issueUrl, issueNumber: body.issueNumber });
      else setResult({ status: 'error', message: body && typeof body === 'object' && 'message' in body && typeof body.message === 'string' ? body.message : 'Не вдалося надіслати повідомлення. Текст залишився у формі.' });
    } catch { setResult({ status: 'error', message: 'Не вдалося підтвердити надсилання. Текст збережено у формі; перевірте GitHub перед повторною спробою.' }); }
    finally { sending.current = false; setBusy(false); }
  }
  return <>
    <Tooltip title="Повідомити про помилку"><IconButton size="small" aria-label={`Flag: ${title}`} onClick={() => { if (!requestId.current || result?.status === 'created') { requestId.current = crypto.randomUUID(); setMessage(''); setResult(null); } setOpen(true); }}><OutlinedFlag fontSize="small" /></IconButton></Tooltip>
    <Dialog open={open} onClose={() => { if (!busy) setOpen(false); }} fullWidth maxWidth="sm" aria-labelledby={`${id}-title`}>
      <DialogTitle id={`${id}-title`}>Повідомити про помилку</DialogTitle>
      <DialogContent><Stack spacing={2} sx={{ pt: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body2" color="text.secondary">Опис буде опублікований у GitHub issue разом з ID і джерелом матеріалу. Не додавайте особисті дані. Посилання сторінки передається без параметрів.</Typography>
        {result?.status !== 'created' && <>
          <TextField select label="Категорія помилки" value={category} disabled={busy} onChange={e => { const value = e.target.value; if (value === 'mistake' || value === 'unclear' || value === 'technical') { setCategory(value); edit(); } }}><MenuItem value="mistake">Помилка у матеріалі</MenuItem><MenuItem value="unclear">Незрозуміле пояснення</MenuItem><MenuItem value="technical">Технічна проблема</MenuItem></TextField>
          <TextField label="Опишіть проблему" multiline minRows={4} value={message} disabled={busy} onChange={e => { setMessage(e.target.value); edit(); }} helperText={`${message.length} / 2000 · щонайменше 10 символів`} slotProps={{ htmlInput: { maxLength: 2000 } }} />
        </>}
        {result?.status === 'error' && <Alert severity="warning" role="status">{result.message}</Alert>}
        {result?.status === 'created' && <Alert severity="success" role="status">Повідомлення створено. <Link href={result.issueUrl} target="_blank" rel="noopener noreferrer">Відкрити issue #{result.issueNumber}</Link></Alert>}
      </Stack></DialogContent>
      <DialogActions><Button disabled={busy} onClick={() => setOpen(false)}>{result?.status === 'created' ? 'Готово' : 'Закрити'}</Button>{result?.status !== 'created' && <Button variant="contained" disabled={busy || message.trim().length < 10} onClick={submit}>{busy ? 'Надсилання…' : 'Надіслати повідомлення'}</Button>}</DialogActions>
    </Dialog>
  </>;
}
