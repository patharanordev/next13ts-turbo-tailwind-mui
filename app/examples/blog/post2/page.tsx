import * as React from 'react';

import Layout from '@/ui/common/layout/Layout';
import ArrowLink from '@/ui/common/links/ArrowLink';
import Seo from '@/ui/common/Seo';

export default function Post2() {
  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              Post2
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              Please see meta data in head tag of this page.
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink direction='left' className='mt-2' href='/examples/blog'>
                Back to Blog
              </ArrowLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}