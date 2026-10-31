'use client';

import Link from 'next/link';
import { Box, Container } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { LearningLayout, NavbarPreferences } from '@svitlo/ui-kit/learning-layout';
import { SkillsMindMap } from './SkillsMindMap';
import { SkillsPagePreferences } from './SkillsPagePreferences';
import { SkillsPageSettingsProvider, useSkillsPageSettings } from './SkillsPageSettingsContext';

const idleProgress = {
  ready: false,
  step: 0,
  lastStep: 0,
  testDone: false,
  skipped: [] as readonly string[],
} as const;
const unusedActions = { back: () => {}, next: () => {}, skip: () => {} };

function SkillsPageContent() {
  const { locale, setLocale, ready, localeError } = useSkillsPageSettings();
  const { mode, systemMode, setMode } = useColorScheme();

  // The page-scoped provider owns the switches and the active locale, while
  // the existing LearningLayout owns the navbar and right settings drawer.
  return (
    <LearningLayout
      locale={locale}
      pathname="/skills"
      progress={idleProgress}
      actions={unusedActions}
      topics={[{ id: 'skills', title: 'Skills', href: '/skills' }]}
      linkComponent={Link}
      showBottomNavbar={false}
      preferences={
        <NavbarPreferences locale={locale} onLocaleChange={setLocale}
          mode={mode} systemMode={systemMode} onThemeChange={setMode} />
      }
      settingsContent={<SkillsPagePreferences />}
    >
      <Container maxWidth={false}
        sx={{ maxWidth: '1480px', py: { xs: 2, sm: 4 }, px: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 2, fontSize: 14 }}><Link href="/">← Світло · Playground</Link></Box>
        {ready && (
          localeError
            ? <Box role="alert">{localeError}</Box>
            : <SkillsMindMap />
        )}
      </Container>
    </LearningLayout>
  );
}

export function SkillsPageShell() {
  return (
    <SkillsPageSettingsProvider>
      <SkillsPageContent />
    </SkillsPageSettingsProvider>
  );
}
