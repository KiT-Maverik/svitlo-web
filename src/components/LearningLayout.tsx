'use client';

import { useEffect, useState, type ReactNode } from 'react';
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
import TopNavbar from './navigation/TopNavbar';
import BottomNavbar from './navigation/BottomNavbar';
import { topics } from '@/content/topics';

export default function LearningLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);
  const pathname = usePathname();
  const currentIndex = topics.findIndex((topic) => topic.href === pathname);
  const current = topics[currentIndex];
  const previous = topics[currentIndex - 1];
  const next = topics[currentIndex + 1];

  return (
    <Box sx={{ height: '100dvh', display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto', overflow: 'hidden', bgcolor: '#fff' }}>
      <TopNavbar aria-label="Верхня навігація навчання" slots={{
        left: <>
          <IconButton aria-label={open ? 'Закрити список тем' : 'Відкрити список тем'} aria-expanded={open} aria-controls={open ? 'learning-sidebar' : undefined} onClick={() => setOpen((value) => !value)}>
            <MenuIcon />
          </IconButton>
          <Typography component={Link} href="/" sx={{ color: '#10253f', fontWeight: 800, fontSize: 20, textDecoration: 'none' }}>Світло</Typography>
        </>,
        right: <Typography sx={{ color: '#63758b', fontSize: 14 }}>Навчальна зона</Typography>,
      }} />

      <Box sx={{ position: 'relative', minHeight: 0, overflow: 'hidden' }}>
        {open && <Box component="button" aria-label="Закрити панель тем" onClick={() => setOpen(false)} sx={{ position: 'absolute', inset: 0, border: 0, bgcolor: 'rgba(16, 37, 63, .25)', zIndex: 1100, cursor: 'pointer' }} />}
        <Drawer
          variant="persistent"
          open={open}
          slotProps={{
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

      <BottomNavbar aria-label="Нижня навігація навчання" slots={{
        left: previous ? <Button component={Link} href={previous.href}>← Назад</Button> : <Button disabled>← Назад</Button>,
        center: <Typography sx={{ textAlign: 'center', color: '#63758b', fontSize: 13 }}>{current ? `Тема ${currentIndex + 1} з ${topics.length}` : 'Теми'}</Typography>,
        right: next ? <Button component={Link} href={next.href}>Далі →</Button> : <Button disabled>Далі →</Button>,
      }} slotProps={{ root: { sx: { px: { xs: 1, sm: 2 } } } }} />
    </Box>
  );
}
