# Content Directory

This directory contains the markdown files that define all of the site's content.
The markdown files here are the **starting point** for the entire site — you write
the content first, then design components around it.

## How it works

Each `.md` file has two parts:

1. **YAML frontmatter** (between `---` fences) — structured data fields that
   components read as typed metadata
2. **Markdown body** (below the frontmatter) — prose content that gets compiled
   into a renderable Svelte component

Files are loaded at build time via `import.meta.glob` in `content.ts`. Drop a
file here, wire up a loader, and it's available to any component.

## File types

### Singletons — one file, one purpose

These are standalone files that configure a single section or the site itself.

- **`site.md`** is always present. It holds the business identity, contact info,
  hours, and SEO fields. The layout reads it automatically for meta tags and
  structured data. Every project starts here.

### Collections — a folder of items

A folder of numbered markdown files that represent a list of things. The number
prefix controls sort order. Components load the whole folder with
`loadCollection()` and render each item.

```
content/
├── site.md                  ← singleton (always present)
├── about.md                 ← singleton (one section)
├── menu-intro.md            ← singleton (section header/config)
├── services/                ← collection
│   ├── 01-branding.md
│   ├── 02-web-design.md
│   └── 03-consulting.md
└── testimonials/            ← collection
    ├── 01-jane-doe.md
    └── 02-john-smith.md
```

---

## Examples by business type

The examples below show what content files you might create for different kinds
of businesses. Use them as a starting point — pick the patterns that fit, ignore
the rest, invent your own.

### Restaurant / Bar / Cafe

```
content/
├── site.md
├── about.md                    ← origin story, chef bio (frontmatter + body)
├── menu-intro.md               ← section title, intro text, category tabs
├── menu/
│   ├── 01-fried-green-tomatoes.md
│   ├── 02-she-crab-soup.md
│   └── ...
└── highlights/
    ├── 01-farm-sourced.md
    ├── 02-craft-bar.md
    └── 03-sunday-brunch.md
```

**about.md** — frontmatter + markdown body:
```yaml
---
label: Our Story
titleLine1: Food that remembers
titleLine2: where it came from.
---

The Copper Skillet started in 2019 with a cast iron pan and a belief
that good Southern food doesn't need to be fussy — just honest.
```

**menu/01-fried-green-tomatoes.md** — frontmatter only:
```yaml
---
name: Fried Green Tomatoes
price: 12
category: starters
description: Cornmeal-crusted, pimento cheese, pickled okra relish
---
```

**menu-intro.md** — section config with nested data:
```yaml
---
label: The Menu
title: What's cooking.
intro: Our menu shifts with the seasons.
categories:
  - id: all
    label: All
  - id: starters
    label: Starters
  - id: mains
    label: Mains
  - id: sides
    label: Sides
---
```

**highlights/01-farm-sourced.md** — short feature card:
```yaml
---
icon: "\U0001F33E"
title: Farm Sourced
body: Produce, proteins, and dairy from farms across the region.
---
```

### Service business (agency, contractor, consultant)

```
content/
├── site.md
├── about.md                    ← company story, mission, team intro
├── services/
│   ├── 01-branding.md
│   ├── 02-web-design.md
│   └── 03-seo.md
├── process/
│   ├── 01-discovery.md
│   ├── 02-design.md
│   └── 03-launch.md
├── testimonials/
│   ├── 01-jane-doe.md
│   └── 02-acme-corp.md
└── faq/
    ├── 01-how-long.md
    └── 02-pricing.md
```

**services/01-branding.md**:
```yaml
---
title: Brand Identity
icon: palette
summary: Logo, color system, typography, and brand guidelines.
---

We work with you to distill what makes your business distinct into a
visual identity that feels right from day one.
```

**process/01-discovery.md**:
```yaml
---
step: 1
title: Discovery
summary: We learn your business, audience, and goals.
---
```

**testimonials/01-jane-doe.md**:
```yaml
---
name: Jane Doe
role: Owner, Bloom Florists
quote: They understood our vision from the first call.
---
```

**faq/01-how-long.md**:
```yaml
---
question: How long does a typical project take?
---

Most projects take 4–8 weeks from kickoff to launch, depending on
scope. We'll give you a timeline during the discovery phase.
```

### Retail / Shop

```
content/
├── site.md
├── about.md
├── features/
│   ├── 01-free-shipping.md
│   ├── 02-local-pickup.md
│   └── 03-gift-wrapping.md
├── brands/
│   ├── 01-brand-a.md
│   └── 02-brand-b.md
└── policies/
    ├── 01-returns.md
    └── 02-shipping.md
```

**features/01-free-shipping.md**:
```yaml
---
icon: truck
title: Free Shipping
body: On all orders over $50. Delivered in 3–5 business days.
---
```

### Fitness / Wellness / Studio

```
content/
├── site.md
├── about.md
├── classes/
│   ├── 01-vinyasa.md
│   ├── 02-hiit.md
│   └── 03-pilates.md
├── instructors/
│   ├── 01-sarah.md
│   └── 02-mike.md
├── pricing/
│   ├── 01-drop-in.md
│   ├── 02-monthly.md
│   └── 03-annual.md
└── highlights/
    ├── 01-community.md
    └── 02-schedule.md
```

**classes/01-vinyasa.md**:
```yaml
---
name: Vinyasa Flow
duration: 60 min
level: All levels
instructor: Sarah
schedule: Mon / Wed / Fri — 7:00am
description: Breath-linked movement to build strength and flexibility.
---
```

**pricing/01-drop-in.md**:
```yaml
---
name: Drop-In
price: 20
unit: per class
description: No commitment. Show up whenever it works.
---
```

### Professional practice (law, dental, medical, accounting)

```
content/
├── site.md
├── about.md                    ← firm history, philosophy
├── team/
│   ├── 01-dr-smith.md
│   └── 02-dr-jones.md
├── services/
│   ├── 01-general.md
│   ├── 02-cosmetic.md
│   └── 03-emergency.md
├── faq/
│   ├── 01-insurance.md
│   └── 02-first-visit.md
└── highlights/
    ├── 01-same-day.md
    └── 02-family-friendly.md
```

**team/01-dr-smith.md**:
```yaml
---
name: Dr. Emily Smith
title: General Dentist
credentials: DDS, University of South Carolina
---

Dr. Smith has practiced family dentistry for over 15 years and
specializes in preventive care and patient education.
```

---

## Design principles

**Content shapes components, not the other way around.** Write your markdown
files first — the frontmatter fields you define become the props your components
will consume. If a menu item has `name`, `price`, `category`, and `description`,
that's exactly what the Menu component will render.

**Frontmatter for structured data, body for prose.** Use frontmatter fields for
anything a component needs to sort, filter, or lay out (prices, categories,
icons, titles). Use the markdown body for longer-form text that benefits from
paragraphs, emphasis, and links.

**Number prefixes for ordering.** Files in a collection folder are sorted
alphabetically by filename. Prefix with `01-`, `02-`, etc. to control the
display order.

**One file per item.** Each menu item, team member, service, or testimonial gets
its own `.md` file. This keeps diffs clean, makes reordering easy (just rename
the prefix), and lets the glob loader handle discovery automatically.

---

## Wiring content to components

After creating your content files, add loaders in `content.ts`:

```ts
// Define your type
export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
};

// Load the collection
const serviceModules = import.meta.glob('./content/services/*.md', { eager: true });
export const services: Service[] = loadCollection<Service>(serviceModules);
```

Then build a component that consumes it:

```svelte
<script lang="ts">
  import { services } from '$lib/content';
</script>

{#each services as service}
  <div>
    <h3>{service.title}</h3>
    <p>{service.summary}</p>
  </div>
{/each}
```
