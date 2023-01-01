'use client'

import '@/styles/mui.css';
import '@/styles/colors.css';
import React from 'react';

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
        <title>Example — Mui</title>
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
