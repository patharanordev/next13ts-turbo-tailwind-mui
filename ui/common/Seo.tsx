'use client'

import { useEffect, useState } from 'react';

// !STARTERCONF Change these default meta
const defaultMeta:any = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  siteName: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: process.env.NEXT_PUBLIC_HOST,
  type: 'website',
  robots: 'follow, index',

  date: '',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: `${process.env.NEXT_PUBLIC_HOST}/images/large-og.png`,
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  
  const [meta, setMeta] = useState(defaultMeta);
  const [title, setTitle] = useState(meta.title);
  const [path, setPath] = useState('');

  // Initial
  useEffect(() => {
    setMeta({ ...props.meta })
    document.title = props.templateTitle
    ? props.templateTitle
    : meta.title
  }, [props])

  useEffect(() => {
    const location = `${window.location.pathname}${window.location.search}`
    setPath(location)
  }, [])

  // Ref to meta
  useEffect(() => {
    setTitle(meta.title)
    document.title = meta.title;
  }, [meta])

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <>
      <meta name='robots' key='robots' content={meta.robots} />
      <meta name='description' key='description' content={meta.description} />
      <meta property='og:url' key='og:url' content={`${meta.url}${path}`} />

      {/* Open Graph */}
      <meta property='og:type' key='og:type' content={meta.type} />
      <meta property='og:site_name' key='og:site_name' content={meta.siteName} />
      <meta property='og:description' key='og:description' content={meta.description} />
      <meta property='og:title' key='og:title' content={title} />
      <meta property='og:image' key='og:image' name='image' content={meta.image} />

      {/* Twitter */}
      <meta name='twitter:card' key='twitter:card' content='summary_large_image' />
      {/* // !STARTERCONF Remove or change to your handle */}
      {/* <meta name='twitter:site' content='@th_clarence' /> */}
      <meta name='twitter:title' key='twitter:title' content={title} />
      <meta name='twitter:description' key='twitter:description' content={meta.description} />
      <meta name='twitter:image' key='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' key='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            key='og:publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          {/* // !STARTERCONF Remove or change to your name */}
          <meta
            name='author'
            key='article:author'
            property='article:author'
            content='Theodorus Clarence'
          />
        </>
      )}

      <link rel='canonical' href={`${meta.url}${path}`} />

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' key='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' key='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' key='theme-color' content='#ffffff' />
    </>
  );
}

// !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
// ! then replace the whole /public/favicon folder and favicon.ico
const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
