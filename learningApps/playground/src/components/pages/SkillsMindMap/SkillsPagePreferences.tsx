'use client';

import { Box, Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { useSkillsPageSettings, type SkillsPageSettings } from './SkillsPageSettingsContext';

const OPTIONS: readonly {
  key: keyof SkillsPageSettings;
  title: string;
  description: string;
}[] = [
  {
    key: 'showMastery',
    title: 'Показувати володіння навичкою',
    description: 'Відсоток та смугу рівня володіння в компактних і розгорнутих картках.',
  },
  {
    key: 'colorMastery',
    title: 'Підсвічувати рівень кольором',
    description: 'Відтінок картки та кольорова шкала залежно від відсотка. Число залишається видимим.',
  },
  {
    key: 'showPump',
    title: 'Показувати «Прокачати»',
    description: 'Кнопка переходу до уроків і програм для вибраної навички.',
  },
];

export function SkillsPagePreferences() {
  const { settings, updateSetting } = useSkillsPageSettings();
  return (
    <Box component="section" aria-label="Налаштування сторінки Skills">
      <Typography component="h3" sx={{ fontWeight: 800, mb: 0.5 }}>Skills · Відображення</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Налаштування цієї сторінки. Вони діють лише протягом поточного відкриття сторінки.
      </Typography>
      <Stack divider={<Divider flexItem />} spacing={1.5}>
        {OPTIONS.map(option => (
          <Box key={option.key} sx={{ py: 0.5 }}>
            <FormControlLabel
              sx={{ alignItems: 'center', m: 0, width: '100%', justifyContent: 'space-between', gap: 1 }}
              labelPlacement="start"
              control={
                <Switch
                  checked={settings[option.key]}
                  disabled={option.key === 'colorMastery' && !settings.showMastery}
                  onChange={event => updateSetting(option.key, event.target.checked)}
                  slotProps={{ input: { 'aria-label': option.title } }}
                />
              }
              label={<Typography variant="body2" sx={{ fontWeight: 700 }}>{option.title}</Typography>}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.6 }}>
              {option.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
