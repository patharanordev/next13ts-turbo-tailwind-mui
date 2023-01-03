import * as React from 'react';

import Layout from '@/ui/common/layout/Layout';
import ArrowLink from '@/ui/common/links/ArrowLink';
import UnderlineLink from '@/ui/common/links/UnderlineLink';

export default function LandingPage() {
  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              NextJS13/Typescript + Turbopack + TailwindCSS + Mui
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for NextJS13 + Turbopack, TypeScript, TailwindCSS, and MUI with examples
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/patharanordev/next13ts-turbo-tailwind-mui'>
                See the repository
              </ArrowLink>
            </p>

            <br/>

            <h3 className='mt-4'>
              Examples
            </h3>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/examples/nextjs13'>
                NextJS13
              </ArrowLink>
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/examples/blog'>
                Blog & SEO
              </ArrowLink>
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/examples/mui'>
                MUI (Material UI)
              </ArrowLink>
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/examples/tailwindcss'>
                TailwindCSS
              </ArrowLink>
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://patharanor.dev'>
                PatharaNor
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}