'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TopNavbar from '../Navigation/TopNavbar';
import BottomNavbar from '../Navigation/BottomNavbar';
import { topics } from '@/content/topics';
import { canAdvance, useLessonProgress } from '@/components/lesson/LessonProgress';
import NavbarPreferences from './NavbarPreferences/NavbarPreferences';

export default function LearningLayout({ children }: { children: ReactNode }) {
  const { progress, dispatch } = useLessonProgress();
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

  return (
    <Box sx={{ height: '100dvh', display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto', overflow: 'hidden', bgcolor: 'background.default', color: 'text.primary' }}>
      <TopNavbar aria-label="Верхня навігація навчання" slots={{
        left: <>
          <IconButton aria-label={open ? 'Закрити список тем' : 'Відкрити список тем'} aria-expanded={open} aria-controls={open ? 'learning-sidebar' : undefined} onClick={() => { setOpen((value) => !value); setSettingsOpen(false); }}>
            <MenuIcon />
          </IconButton>
          <Typography component={Link} href="/" sx={{ color: 'text.primary', fontWeight: 800, fontSize: 20, textDecoration: 'none' }}>Світло</Typography>
        </>,
        right: <>
          <NavbarPreferences />
          <Tooltip title="Профіль буде доступний після підключення авторизації"><Box component="span" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
            <IconButton aria-label="Профіль" disabled><AccountCircleOutlinedIcon /></IconButton>
          </Box></Tooltip>
          <IconButton aria-label={settingsOpen ? 'Закрити налаштування' : 'Відкрити налаштування'} aria-expanded={settingsOpen} aria-controls={settingsOpen ? 'settings-sidebar' : undefined} onClick={() => { setSettingsOpen((value) => !value); setOpen(false); }}>
            <SettingsOutlinedIcon />
          </IconButton>
          <Tooltip title="Вихід буде доступний після підключення авторизації"><Box component="span" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
            <IconButton aria-label="Logout" disabled><LogoutIcon /></IconButton>
          </Box></Tooltip>
        </>,
      }} />

      <Box sx={{ position: 'relative', minHeight: 0, overflow: 'hidden' }}>
        <Fade in={open || settingsOpen} timeout={{ enter: 225, exit: 195 }} unmountOnExit>
          <Box component="button" aria-label="Закрити бічну панель" tabIndex={-1} onClick={() => { setOpen(false); setSettingsOpen(false); }} sx={{
            position: 'absolute', inset: 0, border: 0, bgcolor: theme => alpha(theme.palette.common.black, 0.25), zIndex: 1100, cursor: 'pointer',
            pointerEvents: open || settingsOpen ? 'auto' : 'none',
            '@media (prefers-reduced-motion: reduce)': { transition: 'none !important' },
          }} />
        </Fade>
        <Drawer
          variant="persistent"
          open={open}
          slotProps={{
            paper: { sx: { position: 'absolute', width: 'min(320px, calc(100vw - 48px))', height: '100%', display: 'flex', overflow: 'hidden' } },
          }}
        >
          <Box id="learning-sidebar" component="nav" aria-label="Список тем" sx={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1, flexShrink: 0, borderBottom: 1, borderColor: 'divider' }}>
              <Button component={Link} href="/" startIcon={<HomeOutlinedIcon />} onClick={() => setOpen(false)} sx={{ flex: 1, justifyContent: 'flex-start' }}>Home</Button>
              <IconButton aria-label="Закрити список тем" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
            </Box>
            <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', overscrollBehavior: 'contain', p: 1 }}>
              <Typography component="h2" sx={{ px: 2, py: 1, fontSize: 13, fontWeight: 700, color: 'text.secondary' }}>ТЕМИ</Typography>
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
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1, borderBottom: 1, borderColor: 'divider', flexShrink: 0 }}>
              <Typography component="h2" sx={{ flex: 1, px: 1, fontSize: 18, fontWeight: 700 }}>Налаштування</Typography>
              <IconButton aria-label="Закрити панель налаштувань" onClick={() => setSettingsOpen(false)}><CloseIcon /></IconButton>
            </Box>
            <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', p: 2 }}>
              <Typography color="text.secondary">Налаштування навчання з’являться тут.</Typography>
            </Box>
          </Box>
        </Drawer>
        <Box component="main" id="learning-content" tabIndex={-1} sx={{ height: '100%', overflowY: 'auto', scrollbarGutter: 'stable both-edges', overscrollBehavior: 'contain' }}>
          {children}
        </Box>
      </Box>

      <BottomNavbar aria-label="Нижня навігація навчання" slots={{
        center: <>
          <Button variant="contained" disabled={progress.step === 0} onClick={() => dispatch({ type: 'back' })}>← Назад</Button>
          <Button variant="contained" disabled={!canAdvance(progress)} onClick={() => dispatch({ type: 'next' })}>Далі →</Button>
        </>,
        right: <Button variant="outlined" disabled={progress.step >= 3} onClick={() => dispatch({ type: 'skip' })}>Skip</Button>,
      }} slotProps={{ root: { sx: { px: { xs: 1, sm: 2 } } } }} />
    </Box>
  );
}
