// Content loaders. Everything here uses Vite's `import.meta.glob` so that
// dropping a new markdown file into src/lib/content/** is the only edit needed
// to add content. Projects extend this file with their own types and loaders.
//
// Note: mdsvex compiles every `.md` file into a Svelte component (default
// export) plus a named `metadata` export that contains the YAML frontmatter.

import type { Component } from 'svelte';

// ─── Types ─────────────────────────────────────────────────────────────────

export type SiteConfig = {
	/** Business name displayed in nav, footer, and meta tags. */
	name: string;
	/** Short descriptor shown beneath the name. */
	tagline: string;
	/** Geographic location (e.g. "City, State"). */
	location: string;

	/** Primary hero headline. */
	heroTitle: string;
	/** Secondary hero line. Supports *emphasis* for inline styling. */
	heroSubtitle: string;
	/** Hero body text / description. */
	heroDescription: string;

	/** Canonical site URL (e.g. "https://example.com"). Used for og:url and canonical link. */
	url: string;
	/** SEO: <title> tag content. */
	metaTitle: string;
	/** SEO: <meta name="description"> content. */
	metaDescription: string;
	/** Social: og:title content. */
	ogTitle: string;
	/** Social: og:description content. */
	ogDescription: string;
	/** Social: og:image URL (absolute or relative to site root). */
	ogImage: string;

	/** Physical address. */
	address: { street: string; city: string; state: string; zip: string };
	/** Display-formatted phone number. */
	phone: string;
	/** tel: link href (e.g. "tel:+15555550100"). */
	phoneHref: string;

	/** Structured hours entries. */
	hours: { days: string; time: string }[];
	/** Single-line hours summary. */
	hoursShort: string;

	/** Social media links. */
	social: { label: string; href: string }[];
};

// ─── Helpers ───────────────────────────────────────────────────────────────

export type MdModule<T> = { metadata: T; default: Component };

export function loadOne<T>(modules: Record<string, unknown>, label: string): MdModule<T> {
	const entries = Object.values(modules) as MdModule<T>[];
	if (entries.length === 0) throw new Error(`No markdown file matched ${label}`);
	return entries[0];
}

export function loadCollection<T>(modules: Record<string, unknown>): (T & { slug: string })[] {
	return Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split('/').pop()!.replace(/\.md$/, '');
			const metadata = (mod as MdModule<T>).metadata;
			return { slug, ...metadata };
		})
		.sort((a, b) => a.slug.localeCompare(b.slug));
}

// ─── Site config ───────────────────────────────────────────────────────────

const siteModules = import.meta.glob('./content/site.md', { eager: true });
export const site = loadOne<SiteConfig>(siteModules, 'site.md').metadata;
