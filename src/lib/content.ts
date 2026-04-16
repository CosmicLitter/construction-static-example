// Content loaders. Everything here uses Vite's `import.meta.glob` so that
// dropping a new markdown file into src/lib/content/** is the only edit needed
// to add content. Projects extend this file with their own types and loaders.
//
// Note: mdsvex compiles every `.md` file into a Svelte component (default
// export) plus a named `metadata` export that contains the YAML frontmatter.

import type { Component } from 'svelte';

// ─── Types ─────────────────────────────────────────────────────────────────

export type SiteConfig = {
	name: string;
	tagline: string;
	location: string;

	heroTitle: string;
	heroSubtitle: string;
	heroDescription: string;

	url: string;
	metaTitle: string;
	metaDescription: string;
	ogTitle: string;
	ogDescription: string;
	ogImage: string;

	address: { street: string; city: string; state: string; zip: string };
	phone: string;
	phoneHref: string;

	hours: { days: string; time: string }[];
	hoursShort: string;

	social: { label: string; href: string }[];

	license: string;
	insurance: string;
	serviceArea: string;
};

export type AboutConfig = {
	label: string;
	titleLine1: string;
	titleLine2: string;
	founded: number;
	stat1Value: string;
	stat1Label: string;
	stat2Value: string;
	stat2Label: string;
	stat3Value: string;
	stat3Label: string;
};

export type SectionIntro = {
	label: string;
	title: string;
	intro: string;
	categories?: { id: string; label: string }[];
};

export type Service = {
	slug: string;
	title: string;
	icon: string;
	summary: string;
	typicalRange: string;
	typicalDuration: string;
};

export type ProcessStep = {
	slug: string;
	step: number;
	title: string;
	duration: string;
	summary: string;
};

export type Project = {
	slug: string;
	name: string;
	category: string;
	location: string;
	year: number;
	size: string;
	duration: string;
	style: string;
	features: string[];
	summary: string;
};

export type Testimonial = {
	slug: string;
	name: string;
	role: string;
	project: string;
	quote: string;
};

export type TeamMember = {
	slug: string;
	name: string;
	title: string;
	credentials: string;
	email: string;
};

export type Highlight = {
	slug: string;
	icon: string;
	title: string;
	body: string;
};

export type Faq = {
	slug: string;
	question: string;
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

/** Variant that keeps the compiled Svelte component so callers can render the markdown body. */
export function loadCollectionWithBody<T>(
	modules: Record<string, unknown>
): ((T & { slug: string }) & { Body: Component })[] {
	return Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split('/').pop()!.replace(/\.md$/, '');
			const m = mod as MdModule<T>;
			return { slug, Body: m.default, ...m.metadata };
		})
		.sort((a, b) => a.slug.localeCompare(b.slug));
}

// ─── Site + singletons ─────────────────────────────────────────────────────

const siteModules = import.meta.glob('./content/site.md', { eager: true });
export const site = loadOne<SiteConfig>(siteModules, 'site.md').metadata;

const aboutModules = import.meta.glob('./content/about.md', { eager: true });
const aboutMod = loadOne<AboutConfig>(aboutModules, 'about.md');
export const about = aboutMod.metadata;
export const AboutBody: Component = aboutMod.default;

const servicesIntroModules = import.meta.glob('./content/services-intro.md', { eager: true });
export const servicesIntro = loadOne<SectionIntro>(
	servicesIntroModules,
	'services-intro.md'
).metadata;

const projectsIntroModules = import.meta.glob('./content/projects-intro.md', { eager: true });
export const projectsIntro = loadOne<SectionIntro>(
	projectsIntroModules,
	'projects-intro.md'
).metadata;

// ─── Collections ───────────────────────────────────────────────────────────

const serviceModules = import.meta.glob('./content/services/*.md', { eager: true });
export const services = loadCollectionWithBody<Service>(serviceModules);

const processModules = import.meta.glob('./content/process/*.md', { eager: true });
export const processSteps = loadCollectionWithBody<ProcessStep>(processModules);

const projectModules = import.meta.glob('./content/projects/*.md', { eager: true });
export const projects = loadCollectionWithBody<Project>(projectModules);

const testimonialModules = import.meta.glob('./content/testimonials/*.md', { eager: true });
export const testimonials: Testimonial[] = loadCollection<Testimonial>(testimonialModules);

const teamModules = import.meta.glob('./content/team/*.md', { eager: true });
export const team = loadCollectionWithBody<TeamMember>(teamModules);

const highlightModules = import.meta.glob('./content/highlights/*.md', { eager: true });
export const highlights: Highlight[] = loadCollection<Highlight>(highlightModules);

const faqModules = import.meta.glob('./content/faq/*.md', { eager: true });
export const faqs = loadCollectionWithBody<Faq>(faqModules);
