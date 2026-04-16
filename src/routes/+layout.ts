// Prerender every page to plain HTML so that the build output works
// on any static host (Cloudflare Pages, GitHub Pages, Netlify, etc.).
export const prerender = true;

// Most static hosts serve /a/ rather than /a, so emit /a/index.html files.
export const trailingSlash = 'always';
