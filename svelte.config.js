import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	// mdsvex 0.12.7 emits `<script context="module">` (Svelte 4 syntax) instead
	// of `<script module>`. Suppress until mdsvex ships a fix.
	onwarn: (warning, defaultHandler) => {
		if (warning.code === 'script_context_deprecated') return;
		defaultHandler(warning);
	},
	kit: {
		// adapter-static prerenders the entire site to plain HTML/CSS/JS,
		// suitable for any static host (Cloudflare Pages, GitHub Pages, Netlify, etc.).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn'
		}
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
