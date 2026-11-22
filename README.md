![Portfolio Banner](https://raw.githubusercontent.com/maiznadeem/Portfolio2023/main/src/assets/Banner.png)

# Portfolio2023

My portfolio website, live at **https://v1.portfolio.himaiz.com**.

The public address to share is **https://portfolio.himaiz.com**. It redirects to v1 via a zone rule (a 302 that keeps the path and query), so it can point at a new portfolio later without changing any links.

It's a single-page React app (Create React App, React Router, and Bootstrap's grid) with a page for each project, my skills and toolkit, my experience, and my video editing work. Everything is static: there's no server, API, database or form.

## Local development

The project uses **Yarn 1** (`yarn.lock` is a v1 lockfile).

```bash
npx yarn@1.22.19 install
npx yarn@1.22.19 start     # dev server on http://localhost:3000
npx yarn@1.22.19 build     # production build in build/
```

To preview the production build with the same headers and SPA fallback as the live site, run `npx wrangler dev` after `build`.

## Hosting

| | |
|---|---|
| **Host** | Cloudflare Workers static assets, Worker **`portfolio-v1`** ([`wrangler.toml`](wrangler.toml)). No Worker script runs, so requests are free and don't count against the account's Worker request quota. |
| **Domain** | `v1.portfolio.himaiz.com`, attached as a Worker **custom domain**. It's two levels deep, which the zone's Universal SSL certificate doesn't cover, so the custom domain carries its own certificate, issued and renewed by Cloudflare. `workers_dev` and preview URLs are off. |
| **Public address** | `portfolio.himaiz.com` redirects to v1 via a zone rule. It's a Single Redirect rule managed with the shared zone config, not by this repo: no Worker, just a proxied placeholder DNS record. |
| **Routing** | `not_found_handling = "single-page-application"`: any path that isn't a file serves `index.html`, so deep links such as `/projects/homyz` work. |
| **Build output** | `build/`. [`.env.production`](.env.production) sets `INLINE_RUNTIME_CHUNK=false`, so there's no inline script and the CSP can stay strict, and `GENERATE_SOURCEMAP=false`, so no source maps are published. |

The site used to be on Vercel. That project has been deleted.

## Performance conventions

- **Images are WebP.** Convert screenshots and art to WebP (around quality 80) before adding them under `src/assets/`. The only exceptions are the SVG tech logos, the PWA icons and favicon in `public/`, and `public/og-preview.png` (the link-preview image, kept as PNG for social crawlers).
- **Large images come in several sizes**, saved side by side as `<name>.<width>.webp` (`home.1440.webp`, `home.960.webp`, `home.720.webp`). An image 1280px or wider gets a 720px copy for phones, a 540px phone screenshot gets a 360px one, and for ordinary-density desktops wide screenshots also get a 960px copy and project cards and video thumbnails a 480px one. Skip the copy if it would be under 10 KB, because CRA would inline it into the JavaScript. Pages load a folder of images with `loadImages(require.context(...))` from [`src/utils/images.js`](src/utils/images.js), which gives each image a `src` and a `srcSet`. Spread it onto the `<img>` and add the matching `sizes` from `SIZES`, so phones download the small copy.
- **Give every `<img>` its `width` and `height`** so the layout doesn't shift while images load. Below-the-fold images get `loading="lazy"`. A project page's banner is its largest element, so it gets `fetchpriority="high"`.
- **Fonts and the hero background live in `public/`** under fixed names (`public/fonts/*.woff2`, `public/hero-bg.webp`). That way `public/index.html` can preload them and declare them inline (`@font-face` and the `.banner` background), so the text doesn't reflow when the fonts arrive and the hero paints sooner. If you change one of these files, rename it: `/fonts/*` is cached as immutable.
- **Bootstrap is trimmed.** [`src/bootstrap.scss`](src/bootstrap.scss) compiles only the parts in use (base styles, containers, the grid, `.nav-link` and the tab panes). There's no react-bootstrap: the layout is plain `container`, `row` and `col-*` classes, and the navigation and the Projects tabs are the site's own components. `sass` is pinned to `1.77.6`: newer versions print deprecation warnings for Bootstrap 5.3, which a `CI=true` build treats as errors.

## Deploys (CD): Workers Builds

Every push to `main` is built and deployed by Cloudflare **Workers Builds**, which is connected to this repo:

| Setting | Value |
|---|---|
| Branch | `main` (preview builds off) |
| Root directory | `/` |
| Build command | `yarn build` |
| Deploy command | `npx wrangler deploy` |
| Build variable | `YARN_VERSION=1.22.19` |

`YARN_VERSION` is required. The build image defaults to Yarn 4, which tries to migrate the v1 lockfile and fails with `YN0028` ("The lockfile would have been modified by this install").

Build history and logs are in the Cloudflare dashboard, under **Workers & Pages → portfolio-v1 → Deployments**. Check that a deploy succeeded there.

## CI

This repo has **no GitHub Actions workflows**. Before merging, prove a change locally: run `npx yarn@1.22.19 build` with `CI=true` (which turns warnings into errors) and check the result in a browser. Pull requests also get a GitGuardian secret scan from its GitHub App.

## Rollback

- **Dashboard:** go to **Workers & Pages → portfolio-v1 → Deployments**, pick an earlier version and choose **Rollback**.
- **CLI:** run `npx wrangler deployments list`, then `npx wrangler rollback <version-id>`. This needs a Cloudflare API token for the account with Workers edit access.

A rollback only changes what's served. The next push to `main` deploys again, so revert the commit as well if the change shouldn't come back.

## Cloudflare and security

- **WAF:** the site is served behind the `himaiz.com` zone and its WAF, following "Pattern B: static frontend on Workers static assets". The zone's managed ruleset, custom rules (scanner paths such as `/.env` and `/.git` return 403) and settings are **shared by every site on the zone and managed centrally**. Don't change them from this project. The shared zone record is kept in the private `OracleVMOps` repo (`cloudflare/README.md`).
- **Headers:** they live in [`public/_headers`](public/_headers), which the build copies into `build/` and Workers static assets applies:
  - `Content-Security-Policy`, with:
    - `script-src 'self'`, plus Wistia (`fast.wistia.com` and `fast.wistia.net`) for the showreel player, and `browser.sentry-cdn.com`, the error reporter Wistia's player loads itself
    - Wistia hosts in `img-src`, `media-src`, `connect-src`, `font-src` and `frame-src`
    - `style-src 'unsafe-inline'` for the styles Wistia injects
    - `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `upgrade-insecure-requests`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains`
  - `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` and `Permissions-Policy` (camera, microphone and geolocation off)
  - `Cache-Control: public, max-age=31536000, immutable` for the hashed files in `/static/*`

  If the site starts loading something from a new host, add the host to the CSP and check the browser console for violations.
- **Bot protection:** none is needed. The site has no forms, logins or API, so there's nothing for Turnstile or a rate limit to protect.

---

## Contact

Maiz - contact.maiznadeem@gmail.com

Project Link: [View on GitHub](https://github.com/maiznadeem/Portfolio2023)
