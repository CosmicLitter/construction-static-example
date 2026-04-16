// Image loaders. Drop a file into one of the directories below and it gets
// picked up automatically — no other edits required.
//
// Uses @sveltejs/enhanced-img via the `enhanced: true` query so that images
// are automatically converted to WebP/AVIF, given responsive srcset sizes,
// and stamped with intrinsic width/height to prevent layout shift.
//
// In components, render with: <enhanced:img src={image} alt="..." />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImageModule = any;

export const collect = (modules: Record<string, ImageModule>): ImageModule[] =>
	Object.entries(modules)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, image]) => image);

/**
 * Map image modules to a slug lookup, where the slug is the filename
 * without extension (e.g. `01-bridger-ridge-residence.avif` -> `01-bridger-ridge-residence`).
 * Paired collection markdown files use matching slugs so components can
 * look up images by the item slug.
 */
export const collectBySlug = (
	modules: Record<string, ImageModule>
): Record<string, ImageModule> => {
	const out: Record<string, ImageModule> = {};
	for (const [path, image] of Object.entries(modules)) {
		const slug = path.split('/').pop()!.replace(/\.[^.]+$/, '');
		out[slug] = image;
	}
	return out;
};

const heroModules = import.meta.glob('./images/hero/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

const aboutModules = import.meta.glob('./images/about/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

const galleryModules = import.meta.glob('./images/gallery/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

const projectModules = import.meta.glob('./images/projects/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

const teamModules = import.meta.glob('./images/team/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

export const heroImages = collect(heroModules);
export const aboutImages = collect(aboutModules);
export const galleryImages = collect(galleryModules);

export const projectImages = collect(projectModules);
export const projectImagesBySlug = collectBySlug(projectModules);

export const teamImages = collect(teamModules);
export const teamImagesBySlug = collectBySlug(teamModules);
