import type { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import MuiThemeProvider from './MuiThemeProvider';

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode;
}) {
  return (
      <html lang="uk">
      <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <MuiThemeProvider>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </AppRouterCacheProvider>
      </body>
      </html>
  );
}
