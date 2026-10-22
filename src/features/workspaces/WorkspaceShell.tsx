import type { ReactNode } from 'react';
import { Alert, Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
const links = [{ href: '/student', label: 'Учень' }, { href: '/teacher', label: 'Учитель' }, { href: '/admin/lessons', label: 'Адміністратор' }];
export function WorkspaceShell({ title, subtitle, current, children }: { title: string; subtitle: string; current: string; children: ReactNode }) {
  return <Container component="main" maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
    <Stack spacing={3}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
        <Button href="/" sx={{ fontWeight: 800, fontSize: 20 }}>Світло</Button>
        <Box component="nav" aria-label="Кабінети"><Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>{links.map(link => <Button key={link.href} href={link.href} variant={current === link.href ? 'contained' : 'text'} aria-current={current === link.href ? 'page' : undefined}>{link.label}</Button>)}</Stack></Box>
      </Stack>
      <Box><Chip label="Демонстраційний режим" size="small" sx={{ mb: 1 }} /><Typography component="h1" variant="h4">{title}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{subtitle}</Typography></Box>
      <Alert severity="info">Це попередній перегляд кабінетів із демонстраційними даними. Авторизацію й постійне зберігання ще не підключено.</Alert>
      {children}
    </Stack>
  </Container>;
}
