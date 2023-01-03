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
      <head>
        <Seo
          meta={{
            title: 'NextJS13/Typescript + Turbopack + TailwindCSS + Mui',
            siteName: 'NextJS13/Typescript + Turbopack + TailwindCSS + Mui',
            description: 'A starter for NextJS13 + Turbopack, TypeScript, TailwindCSS, and MUI with examples',
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