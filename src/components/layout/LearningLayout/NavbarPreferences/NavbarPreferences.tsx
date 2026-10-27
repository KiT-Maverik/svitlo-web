'use client';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { Flag } from '@/components/widgets/Flag';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { locale as messages } from './locales/uk-UA';
import { aria } from './NavbarPreferences.constants';

const locales = DEFAULT_SUPPORTED_LANGUAGES.map(({ locale, language, nativeName }) => ({
  locale,
  language,
  nativeName,
}));

function LocaleSelector() {
  const { locale, setLocale } = useLocale();

  return (
    <Select
      size="small"
      value={locale}
      inputProps={{ 'aria-label': aria.locale }}
      renderValue={value => {
        const selected = locales.find(option => option.locale === value);
        return selected ? (
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
            <Flag locale={selected.locale} width={20} height={14} />
            {selected.language.toUpperCase()}
          </Box>
        ) : (
          value
        );
      }}
      onChange={event => {
        const selected = locales.find(option => option.locale === event.target.value);
        if (selected) setLocale(selected.locale);
      }}
      sx={{ minWidth: 92 }}
    >
      {locales.map(option => (
        <MenuItem key={option.locale} value={option.locale}>
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
            <Flag locale={option.locale} width={20} height={14} />
            {option.nativeName}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}

function ThemeSwitch() {
  const { mode, systemMode, setMode } = useColorScheme();
  const isDark = mode === 'dark' || (mode === 'system' && systemMode === 'dark');

  return (
    <Tooltip title={isDark ? messages.theme.dark : messages.theme.light}>
      <Switch
        checked={isDark}
        disabled={mode === undefined}
        onChange={event => setMode(event.target.checked ? 'dark' : 'light')}
        slotProps={{ input: { 'aria-label': aria.theme } }}
      />
    </Tooltip>
  );
}

export default function NavbarPreferences() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <LocaleSelector />
      <ThemeSwitch />
    </Box>
  );
}
