import * as React from 'react';

import Layout from '@/ui/common/layout/Layout';
import ArrowLink from '@/ui/common/links/ArrowLink';
import Seo from '@/ui/common/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              Example Blog
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              Read my posts
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/examples/blog/post1'>
                Post1
              </ArrowLink>
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/examples/blog/post2'>
                Post2
              </ArrowLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}