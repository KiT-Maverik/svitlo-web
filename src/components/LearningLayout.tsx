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
import Tooltip from '@mui/material/Tooltip';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TopNavbar from './navigation/TopNavbar';
import BottomNavbar from './navigation/BottomNavbar';
import { topics } from '@/content/topics';

export default function LearningLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  useEffect(() => {
    if (!open && !settingsOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); setSettingsOpen(false); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, settingsOpen]);
  const pathname = usePathname();
  const currentIndex = topics.findIndex((topic) => topic.href === pathname);
  const previous = topics[currentIndex - 1];
  const next = topics[currentIndex + 1];

  return (
    <Box sx={{ height: '100dvh', display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto', overflow: 'hidden', bgcolor: '#fff' }}>
      <TopNavbar aria-label="Верхня навігація навчання" slots={{
        left: <>
          <IconButton aria-label={open ? 'Закрити список тем' : 'Відкрити список тем'} aria-expanded={open} aria-controls={open ? 'learning-sidebar' : undefined} onClick={() => { setOpen((value) => !value); setSettingsOpen(false); }}>
            <MenuIcon />
          </IconButton>
          <Typography component={Link} href="/" sx={{ color: '#10253f', fontWeight: 800, fontSize: 20, textDecoration: 'none' }}>Світло</Typography>
        </>,
        right: <>
          <Tooltip title="Профіль буде доступний після підключення авторизації"><span>
            <IconButton aria-label="Профіль" disabled><AccountCircleOutlinedIcon /></IconButton>
          </span></Tooltip>
          <IconButton aria-label={settingsOpen ? 'Закрити налаштування' : 'Відкрити налаштування'} aria-expanded={settingsOpen} aria-controls={settingsOpen ? 'settings-sidebar' : undefined} onClick={() => { setSettingsOpen((value) => !value); setOpen(false); }}>
            <SettingsOutlinedIcon />
          </IconButton>
          <Tooltip title="Вихід буде доступний після підключення авторизації"><span>
            <IconButton aria-label="Logout" disabled><LogoutIcon /></IconButton>
          </span></Tooltip>
        </>,
      }} />

      <Box sx={{ position: 'relative', minHeight: 0, overflow: 'hidden' }}>
        {(open || settingsOpen) && <Box component="button" aria-label="Закрити бічну панель" onClick={() => { setOpen(false); setSettingsOpen(false); }} sx={{ position: 'absolute', inset: 0, border: 0, bgcolor: 'rgba(16, 37, 63, .25)', zIndex: 1100, cursor: 'pointer' }} />}
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
        <Drawer
          anchor="right"
          variant="persistent"
          open={settingsOpen}
          slotProps={{ paper: { sx: { position: 'absolute', width: 'min(320px, calc(100vw - 48px))', height: '100%', overflow: 'hidden' } } }}
        >
          <Box id="settings-sidebar" component="aside" aria-label="Налаштування" sx={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1, borderBottom: '1px solid #dce4ed', flexShrink: 0 }}>
              <Typography component="h2" sx={{ flex: 1, px: 1, fontSize: 18, fontWeight: 700 }}>Налаштування</Typography>
              <IconButton aria-label="Закрити панель налаштувань" onClick={() => setSettingsOpen(false)}><CloseIcon /></IconButton>
            </Box>
            <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', p: 2 }}>
              <Typography color="text.secondary">Налаштування навчання з’являться тут.</Typography>
            </Box>
          </Box>
        </Drawer>
        <Box component="main" id="learning-content" tabIndex={-1} sx={{ height: '100%', overflowY: 'auto', overscrollBehavior: 'contain' }}>
          {children}
        </Box>
      </Box>

      <BottomNavbar aria-label="Нижня навігація навчання" slots={{
        center: <>
          {previous ? <Button component={Link} href={previous.href}>← Назад</Button> : <Button disabled>← Назад</Button>}
          {next ? <Button component={Link} href={next.href}>Далі →</Button> : <Button disabled>Далі →</Button>}
        </>,
      }} slotProps={{ root: { sx: { px: { xs: 1, sm: 2 } } } }} />
    </Box>
  );
}
