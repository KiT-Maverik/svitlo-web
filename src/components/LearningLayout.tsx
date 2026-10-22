'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { topics } from '@/content/topics';

export default function LearningLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentIndex = topics.findIndex((topic) => topic.href === pathname);
  const current = topics[currentIndex];
  const previous = topics[currentIndex - 1];
  const next = topics[currentIndex + 1];

  return (
    <Box sx={{ height: '100dvh', display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto', overflow: 'hidden', bgcolor: '#fff' }}>
      <Box component="nav" aria-label="Верхня навігація навчання" sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, minHeight: 64, borderBottom: '1px solid #dce4ed', bgcolor: '#f7f9fc', pt: 'env(safe-area-inset-top)' }}>
        <IconButton aria-label="Відкрити список тем" aria-expanded={open} aria-controls={open ? 'learning-sidebar' : undefined} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography component={Link} href="/" sx={{ color: '#10253f', fontWeight: 800, fontSize: 20, textDecoration: 'none' }}>Світло</Typography>
        <Typography sx={{ ml: 'auto', color: '#63758b', fontSize: 14 }}>Навчальна зона</Typography>
      </Box>

      <Box sx={{ position: 'relative', minHeight: 0, overflow: 'hidden' }}>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ disablePortal: true, sx: { position: 'absolute' } }}
          slotProps={{
            backdrop: { sx: { position: 'absolute' } },
            paper: { sx: { position: 'absolute', width: 'min(320px, calc(100vw - 48px))', height: '100%', display: 'flex', overflow: 'hidden' } },
          }}
        >
          <Box id="learning-sidebar" component="nav" aria-label="Список тем" sx={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1, flexShrink: 0, borderBottom: '1px solid #dce4ed' }}>
              <Button component={Link} href="/" startIcon={<HomeOutlinedIcon />} onClick={() => setOpen(false)} sx={{ flex: 1, justifyContent: 'flex-start' }}>Home</Button>
              <IconButton aria-label="Закрити список тем" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
            </Box>
            <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', overscrollBehavior: 'contain', p: 1 }}>
              <Typography component="h2" sx={{ px: 2, py: 1, fontSize: 13, fontWeight: 700, color: '#63758b' }}>ТЕМИ</Typography>
              <List disablePadding>
                {topics.map((topic) => (
                  <ListItemButton key={topic.id} component={Link} href={topic.href} selected={pathname === topic.href} aria-current={pathname === topic.href ? 'page' : undefined} onClick={() => setOpen(false)} sx={{ borderRadius: 2 }}>
                    <ListItemText primary={topic.title} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
        <Box component="main" id="learning-content" tabIndex={-1} sx={{ height: '100%', overflowY: 'auto', overscrollBehavior: 'contain' }}>
          {children}
        </Box>
      </Box>

      <Box component="nav" aria-label="Нижня навігація навчання" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, px: { xs: 1, sm: 2 }, minHeight: 64, borderTop: '1px solid #dce4ed', bgcolor: '#f7f9fc', pb: 'env(safe-area-inset-bottom)' }}>
        {previous ? <Button component={Link} href={previous.href}>← Назад</Button> : <Button disabled>← Назад</Button>}
        <Typography sx={{ textAlign: 'center', color: '#63758b', fontSize: 13 }}>{current ? `Тема ${currentIndex + 1} з ${topics.length}` : 'Теми'}</Typography>
        {next ? <Button component={Link} href={next.href}>Далі →</Button> : <Button disabled>Далі →</Button>}
      </Box>
    </Box>
  );
}
