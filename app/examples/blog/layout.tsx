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
    <html lang='en'>
      <head>
        <Seo
          meta={{
            title: 'Example Blog',
            siteName: 'Example Blog',
            description: 'Blog description',
            type: 'website',
            robots: 'follow, index'
          }}
        />
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        {children}
      </body>
    </html>
  );
}