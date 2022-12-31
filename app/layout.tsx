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
        templateTitle='Landing page'
        description='Landing page layout'
        />
        <body className="overflow-y-scroll bg-zinc-900">
            {children}
        </body>
    </html>
  );
}