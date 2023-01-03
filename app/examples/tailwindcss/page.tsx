import * as React from 'react';

import Layout from '@/ui/common/layout/Layout';
import ArrowLink from '@/ui/common/links/ArrowLink';
import ButtonLink from '@/ui/common/links/ButtonLink';
import UnderlineLink from '@/ui/common/links/UnderlineLink';
import UnstyledLink from '@/ui/common/links/UnstyledLink';

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
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See Theodorus Clarence' repository
              </ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/examples/tailwindcss/components' variant='light'>
              See all components
            </ButtonLink>

            <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}