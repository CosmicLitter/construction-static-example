// JSON-LD structured data serialization.
//
// Svelte doesn't support variable interpolation inside <script> tags in
// <svelte:head>, so JSON-LD must be injected via {@html}. This utility
// builds the full <script> tag as a string so the Svelte template stays clean.
//
// Usage in a layout or page:
//   {@html jsonLdScript({ "@context": "https://schema.org", ... })}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonLdScript(schema: Record<string, any>): string {
	return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
