import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import PlatformThemeProvider from './ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Світло — інтерактивні підручники',
  description: 'Безплатні інтерактивні підручники з відкритим доступом до навчання.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="data" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <PlatformThemeProvider>
            <CssBaseline />
            {children}
          </PlatformThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
