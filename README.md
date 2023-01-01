# NextJS13/Typescript + Turbopack + TailwindCSS + Mui

## Features

- ⚡️ Next.js 13 with new directory structure
- 🚀 Turbopack
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 💖 Prettier — Format your code consistently
- 👀 Default Open Graph — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 💡 MUI — or [Material UI](https://mui.com/material-ui/getting-started/installation/), Ready-to-use foundational React components

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

## TODO

- 🗺 [Site Map](https://github.com/iamvishnusankar/next-sitemap#readme) — Automatically generate sitemap.xml
- 🌐 [i18n](https://dev.to/adrai/i18n-with-nextjs-13-and-app-directory-18dm)

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

