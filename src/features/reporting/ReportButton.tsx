'use client';
import { useId, useRef, useState } from 'react';
import { Alert, Button, IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Link, MenuItem, Stack, TextField, Typography } from '@mui/material';
import OutlinedFlag from '@mui/icons-material/OutlinedFlag';
import Flag from '@mui/icons-material/Flag';
import type { ReportCategory, ReportResponse } from './types';
import { locale } from './locales/uk-UA';
import { aria } from './ReportButton.constants';
export function ReportButton({ contentId, title }: { contentId: string; title: string }) {
  const id = useId();
  const [open, setOpen] = useState(false), [message, setMessage] = useState(''), [category, setCategory] = useState<ReportCategory>('mistake');
  const [busy, setBusy] = useState(false), [result, setResult] = useState<ReportResponse | null>(null);
  const requestId = useRef(''), sending = useRef(false);
  const edit = () => { requestId.current = crypto.randomUUID(); setResult(null); };
  async function submit() {
    if (sending.current) return;
    if (message.trim().length < 10 || message.trim().length > 2000) { setResult({ status: 'error', message: locale.errors.invalidLength }); return; }
    sending.current = true; setBusy(true); setResult(null);
    try {
      const response = await fetch('/api/reports', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ requestId: requestId.current, contentId, category, message: message.trim() }), signal: AbortSignal.timeout(15000) });
      const body: unknown = await response.json();
      if (response.ok && body && typeof body === 'object' && 'status' in body && body.status === 'created' && 'issueUrl' in body && typeof body.issueUrl === 'string' && /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/issues\/\d+$/.test(body.issueUrl) && 'issueNumber' in body && typeof body.issueNumber === 'number') setResult({ status: 'created', issueUrl: body.issueUrl, issueNumber: body.issueNumber });
      else setResult({ status: 'error', message: body && typeof body === 'object' && 'message' in body && typeof body.message === 'string' ? body.message : locale.errors.server });
    } catch { setResult({ status: 'error', message: locale.errors.network }); }
    finally { sending.current = false; setBusy(false); }
  }
  return <>
    <Tooltip title={locale.title} placement="top" arrow enterDelay={500} enterNextDelay={500}><IconButton sx={{ width: 40, height: 40, color: 'action.disabled', transition: 'color 180ms ease-in-out', '& .report-filled': { display: 'none' }, '&:hover, &.Mui-focusVisible': { color: 'error.main', '& .report-outline': { display: 'none' }, '& .report-filled': { display: 'block' } }, '@media (prefers-reduced-motion: reduce)': { transition: 'none' } }} aria-label={aria.trigger(title)} onClick={() => { if (!requestId.current || result?.status === 'created') { requestId.current = crypto.randomUUID(); setMessage(''); setResult(null); } setOpen(true); }}><OutlinedFlag className="report-outline" /><Flag className="report-filled" /></IconButton></Tooltip>
    <Dialog open={open} onClose={() => { if (!busy) setOpen(false); }} fullWidth maxWidth="sm" aria-labelledby={`${id}-title`}>
      <DialogTitle id={`${id}-title`}>{locale.title}</DialogTitle>
      <DialogContent><Stack spacing={2} sx={{ pt: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{locale.description}</Typography>
        {result?.status !== 'created' && <>
          <TextField select label={locale.fields.category} value={category} disabled={busy} onChange={e => { const value = e.target.value; if (value === 'mistake' || value === 'unclear' || value === 'technical') { setCategory(value); edit(); } }}><MenuItem value="mistake">{locale.categories.mistake}</MenuItem><MenuItem value="unclear">{locale.categories.unclear}</MenuItem><MenuItem value="technical">{locale.categories.technical}</MenuItem></TextField>
          <TextField label={locale.fields.message} multiline minRows={4} value={message} disabled={busy} onChange={e => { setMessage(e.target.value); edit(); }} helperText={locale.fields.helper(message.length)} slotProps={{ htmlInput: { maxLength: 2000 } }} />
        </>}
        {result?.status === 'error' && <Alert severity="warning" role="status">{result.message}</Alert>}
        {result?.status === 'created' && <Alert severity="success" role="status">{locale.success.created} <Link href={result.issueUrl} target="_blank" rel="noopener noreferrer">{locale.success.openIssue(result.issueNumber)}</Link></Alert>}
      </Stack></DialogContent>
      <DialogActions><Button disabled={busy} onClick={() => setOpen(false)}>{result?.status === 'created' ? locale.actions.done : locale.actions.close}</Button>{result?.status !== 'created' && <Button variant="contained" disabled={busy || message.trim().length < 10} onClick={submit}>{busy ? locale.actions.sending : locale.actions.submit}</Button>}</DialogActions>
    </Dialog>
  </>;
}
