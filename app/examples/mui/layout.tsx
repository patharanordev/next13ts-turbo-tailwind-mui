'use client'

import '@/styles/mui.css';
import '@/styles/colors.css';
import React from 'react';
import Seo from '@/ui/common/Seo';

import { themes } from '@/themes/theme-mui';
import { ThemeProvider, CssBaseline } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head>
        <Seo
          meta={{
            title: 'Example — Mui',
            siteName: 'Example — Mui',
            description: 'Mui description',
            type: 'website',
            robots: 'follow, index'
          }}
        />
      </head>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <body>
          {/* <SwitchThemeButton colorMode={colorMode} /> */}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
