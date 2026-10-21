import type { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode;
}) {
  return (
      <html lang="uk">
      <body>
      <AppRouterCacheProvider>
        <CssBaseline />
        {children}
      </AppRouterCacheProvider>
      </body>
      </html>
  );
}
