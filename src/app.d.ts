// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// mdsvex compiles `.md` files into Svelte components with a `metadata` named
// export (the YAML frontmatter). Tell TypeScript so `import * from './x.md'`
// doesn't error.
declare module '*.md' {
	import type { Component } from 'svelte';
	const component: Component;
	export const metadata: Record<string, unknown>;
	export default component;
}

export {};
