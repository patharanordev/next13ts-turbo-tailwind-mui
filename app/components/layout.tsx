import '@/styles/globals.css';
import '@/styles/colors.css';

import React from 'react';
import Seo from '@/ui/common/Seo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />
      <body className="overflow-y-scroll bg-zinc-900">
        {children}
      </body>
    </html>
  );
}