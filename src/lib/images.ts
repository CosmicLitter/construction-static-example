// Image loaders. Drop a file into one of the directories below and it gets
// picked up automatically — no other edits required.
//
// Uses @sveltejs/enhanced-img via the `enhanced: true` query so that images
// are automatically converted to WebP/AVIF, given responsive srcset sizes,
// and stamped with intrinsic width/height to prevent layout shift.
//
// In components, render with: <enhanced:img src={image} alt="..." />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const collect = (modules: Record<string, any>): any[] =>
	Object.entries(modules)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, image]) => image);

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

export const heroImages = collect(heroModules);
export const aboutImages = collect(aboutModules);
export const galleryImages = collect(galleryModules);
