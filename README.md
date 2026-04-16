# Static Template

A SvelteKit template for building markdown-driven static sites for small businesses. All content lives in markdown files — drop them in, build components around them, deploy anywhere.

## Quick start

```bash
# Spawn a new project from this template
./spawn.sh my-business ~/dev/web

# Or copy manually
cp -r . ../my-business && cd ../my-business && pnpm install
```

## New project workflow

1. Edit `src/lib/content/site.md` — fill in business name, contact info, hours, SEO fields
2. Add markdown content files to `src/lib/content/` (about, services, menu items, etc.)
3. Drop images into `src/lib/images/` subdirectories (auto-discovered + optimized at build)
4. Build Svelte components in `src/lib/components/`
5. Compose components in `src/routes/+page.svelte`
6. Customize CSS tokens in `src/app.css` (colors, fonts)
7. `pnpm build` — deploy `build/` to any static host

## What's included

### Content system (`src/lib/content.ts`)

Markdown files are compiled by mdsvex at build time. YAML frontmatter becomes typed metadata, markdown body becomes a Svelte component.

```ts
import { loadOne, loadCollection } from '$lib/content';

// Load a single file
const aboutModules = import.meta.glob('./content/about.md', { eager: true });
const about = loadOne<AboutType>(aboutModules, 'about.md');
// about.metadata — frontmatter fields
// about.default — compiled Svelte component (the markdown body)

// Load a directory of files (sorted by filename)
const itemModules = import.meta.glob('./content/items/*.md', { eager: true });
const items = loadCollection<ItemType>(itemModules);
// [{ slug: '01-first', name: '...', ... }, { slug: '02-second', ... }]
```

Number-prefix filenames (`01-`, `02-`) to control ordering.

### Image system (`src/lib/images.ts`)

Images are auto-discovered via glob and optimized at build time by `@sveltejs/enhanced-img` (WebP/AVIF conversion, responsive srcset, intrinsic dimensions).

```ts
// In your images.ts, add new directories:
const teamModules = import.meta.glob('./images/team/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});
export const teamImages = collect(teamModules);
```

Render in components with `<enhanced:img src={image} alt="..." />`.

### CSS tokens (`src/app.css`)

Re-theme by changing custom properties:

```css
:root {
	--accent: #b8652f; /* your brand color */
	--bg: #faf6f0; /* background */
	--font-display: 'Playfair Display', serif;
	--font-body: 'DM Sans', sans-serif;
}
```

Add Google Fonts with `@import url(...)` at the top of `app.css`.

### SEO (automatic)

The layout automatically sets from `site.md`:

- `<title>`, `<meta description>`, canonical URL
- Open Graph tags (title, description, image, URL)
- Twitter Card tags
- JSON-LD `LocalBusiness` structured data (drives Google's local business cards)

### Scroll animations (`src/lib/fadeIn.ts`)

```svelte
<div class="fade-in" {@attach fadeIn}>Fades in on scroll</div>
```

Respects `prefers-reduced-motion` — animations disabled for users who prefer it.

## Directory structure

```
src/lib/
├── content.ts          # Content types + loaders (extend with your own)
├── images.ts           # Image loaders (add new directories here)
├── fadeIn.ts           # Scroll animation attachment
├── content/
│   └── site.md         # Global site config (frontmatter only)
├── images/
│   ├── hero/           # Hero background images
│   ├── about/          # About section images
│   └── gallery/        # Gallery images
└── components/         # Your project-specific components
```

## Commands

| Command        | Description                   |
| -------------- | ----------------------------- |
| `pnpm dev`     | Start dev server              |
| `pnpm build`   | Build static site to `build/` |
| `pnpm preview` | Preview production build      |
| `pnpm check`   | Type-check with svelte-check  |
| `pnpm lint`    | Run Prettier + ESLint         |
| `pnpm format`  | Auto-format code              |

## Stack

- **SvelteKit** with adapter-static (prerendered HTML)
- **Svelte 5** with runes
- **mdsvex** for markdown → Svelte compilation
- **@sveltejs/enhanced-img** for build-time image optimization
- **TypeScript**, **ESLint**, **Prettier**
# construction-static-example
