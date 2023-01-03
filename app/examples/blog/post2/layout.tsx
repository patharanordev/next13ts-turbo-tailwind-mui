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
    <>
      <Seo
        meta={{
          title: 'Example Blog — Post2',
          siteName: 'Example Blog',
          description: 'Post2 description',
          type: 'website',
          robots: 'follow, index'
        }}
      />
      {children}
    </>
  );
}