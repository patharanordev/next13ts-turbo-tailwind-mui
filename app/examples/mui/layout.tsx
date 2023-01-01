'use client'

import '@/styles/mui.css';
import '@/styles/colors.css';
import React from 'react';

import { darkTheme } from "@/themes/theme-mui";
import { ThemeProvider, CssBaseline } from "@mui/material";

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
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
