# andriytyurnikov.me

Personal site and playground — [andriytyurnikov.me](https://andriytyurnikov.me).

Built with SvelteKit 2 (Svelte 5 runes), Tailwind CSS 4 and Threlte, deployed to
Vercel as a fully prerendered static site.

## Layout

```
src/
  lib/
    glowing-ice/   GlowingIce — rule-driven page transitions (see /garage/glowing-ice)
    orientation/   Screen Orientation API exposed to CSS as a class, data-attr and custom property
    seo/           Per-route <title>/description/OG metadata, rendered once in the root layout
  routes/
    (home)/        The public site: home, garage, about, friends
    (playground)/  Unlinked experiments — reachable by URL, listed in svelte.config.js
  styles/
    default.css    Tailwind entry for the playground
    home.css       Tailwind entry for the public site
    shared/        Breakpoints, colour scales, base and component layers
```

Route groups carry their own stylesheet and font subset, so the two halves of the
site do not pay for each other's CSS.

## Development

```bash
bun install
bun run dev
```

## Checks

```bash
bun run lint       # prettier --check && eslint
bun run test       # vitest, single run
bun run test:e2e   # playwright, builds and previews first
bun run build
```

## Adding a page

Add the route under `src/routes/`, then add a title and description for its route
id to `src/lib/seo/metadata.js` — otherwise the page falls back to the site
defaults. If the page is not linked from anywhere, also add its path to
`kit.prerender.entries` in `svelte.config.js` so the crawler still reaches it.
