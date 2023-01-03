# NextJS13/Typescript + Turbopack + TailwindCSS + Mui

## Features

- <img src="https://emojis.slackmojis.com/emojis/images/1643514489/4730/nextjs.jpeg?1643514489" width="15" />&nbsp;Next.js 13 with new directory structure
- <img src="https://emojis.slackmojis.com/emojis/images/1666779013/61985/turbopack.png?1666779013" width="15" />&nbsp;Turbopack
- <img src="https://emojis.slackmojis.com/emojis/images/1643514155/1161/react.png?1643514155" width="15" />&nbsp;React 18
- <img src="https://emojis.slackmojis.com/emojis/images/1643514173/1383/typescript.png?1643514173" width="15" />&nbsp;TypeScript
- <img src="https://emojis.slackmojis.com/emojis/images/1643515045/10754/tailwindcss.png?1643515045" width="15" />&nbsp;Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- <img src="https://emojis.slackmojis.com/emojis/images/1643514389/3640/prettier.png?1643514389" width="15" />&nbsp;Prettier — Format your code consistently
- 👀 Default Open Graph — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 💡 MUI — or [Material UI](https://mui.com/material-ui/getting-started/installation/), Ready-to-use foundational React components
- 🗺 [Site Map](https://github.com/iamvishnusankar/next-sitemap#readme) — Automatically generate sitemap.xml

## Preparation

Install package manager :

```
brew install pnpm
```

## Usage

### Development

```sh
rm -rf .next node_modules package-lock.json yarn.lock pnpm-lock.yaml && \
pnpm i && pnpm run dev
```

## Example

- [Nextjs13](app/examples/nextjs13)
- [Blog & SEO](app/examples/blog)
- [MUI](app/examples/mui)
- [TailwindCSS](app/examples/tailwindcss)

## TODO

- <img src="https://emojis.slackmojis.com/emojis/images/1643514082/390/redux.png?1643514082" width="15" />&nbsp;Redux
- 🌐 [i18n](https://dev.to/adrai/i18n-with-nextjs-13-and-app-directory-18dm)

## Sitemap

Re-generate sitemap, just run `pnpm build && pnpm postbuild` or rebuild all with SEO `pnpm run buildwithseo`.

**Ref**. sitemap : `/public/sitemap-0.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
    xmlns:xhtml="http://www.w3.org/1999/xhtml" 
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

    <url><loc>http://localhost:3000</loc><lastmod>2023-01-03T04:04:12.942Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/blog</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/blog/post1</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/blog/post2</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/components</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/route-groups</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/route-groups/checkout</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/context</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/route-groups/blog</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/error-handling</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/hooks</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/layouts</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/loading</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/styling/css-modules</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/styling/global-css</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/streaming</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/styling</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/styling/tailwind</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/styling/styled-components</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/nextjs13/styling/styled-jsx</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/mui/other-page</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>http://localhost:3000/examples/mui</loc><lastmod>2023-01-03T04:04:12.943Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
</urlset>
```

## Issue(s)

> **__TURBOPACK__imported__module__**
> 
> ```sh
> # ...
> error - [rendering] [root of the dev server]/
>   Error during SSR Rendering
>   TypeError: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$1_biqbaboplfbrettd7655fr4n2y$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__.createContext is not a function
>     at <unknown> ...
> # ...
> ```
> 
> You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
>
> Ref. https://www.js-craft.io/blog/client-components-use-client-directive-nextjs-13/
> 
> ```js
> "use client"
> import { useState } from "react"
> // ...
> ```
>

