'use client';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';

const locales = DEFAULT_SUPPORTED_LANGUAGES.map(({ locale, language, nativeName, flag }) => ({
  locale,
  language,
  nativeName,
  flag,
}));

function LocaleSelector() {
  const { locale, setLocale } = useLocale();

  return <Select
    size="small"
    value={locale}
    inputProps={{ 'aria-label': 'Мова' }}
    renderValue={value => {
      const selected = locales.find(option => option.locale === value);
      return selected ? `${selected.flag} ${selected.language.toUpperCase()}` : value;
    }}
    onChange={event => {
      const selected = locales.find(option => option.locale === event.target.value);
      if (selected) setLocale(selected.locale);
    }}
    sx={{ minWidth: 92 }}
  >
    {locales.map(option => <MenuItem key={option.locale} value={option.locale}>{option.flag} {option.nativeName}</MenuItem>)}
  </Select>;
}

function ThemeSwitch() {
  const { mode, systemMode, setMode } = useColorScheme();
  const isDark = mode === 'dark' || (mode === 'system' && systemMode === 'dark');

  return <Tooltip title={isDark ? 'Темна тема' : 'Світла тема'}>
    <Switch
      checked={isDark}
      disabled={mode === undefined}
      onChange={event => setMode(event.target.checked ? 'dark' : 'light')}
      slotProps={{ input: { 'aria-label': 'Темна тема' } }}
    />
  </Tooltip>;
}

export default function NavbarPreferences() {
  return <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    <LocaleSelector />
    <ThemeSwitch />
  </Box>;
}
