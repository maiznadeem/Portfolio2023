![Portfolio Banner](https://raw.githubusercontent.com/maiznadeem/Portfolio2023/main/src/assets/Banner.png)

# Portfolio2023

My portfolio website, live at **https://v1.portfolio.himaiz.com**.

It's a single-page React app (Create React App, React Router, React Bootstrap) with a page for each project, my skills and toolkit, my experience, and my video editing work. Everything is static: there's no server, API, database or form.

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
| **Routing** | `not_found_handling = "single-page-application"`: any path that isn't a file serves `index.html`, so deep links such as `/projects/homyz` work. |
| **Build output** | `build/`. [`.env.production`](.env.production) sets `INLINE_RUNTIME_CHUNK=false`, so there's no inline script and the CSP can stay strict, and `GENERATE_SOURCEMAP=false`, so no source maps are published. |

The site used to be on Vercel. That project has been deleted.

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
    - `raw.githubusercontent.com` in `img-src` for the Lifestream screenshots
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
