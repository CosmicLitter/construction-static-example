// Svelte 5 attachment that adds a `.visible` class once the element scrolls
// into view. Pair with the `.fade-in` class from app.css for the transition.
//
// Usage:
//   <div class="fade-in" {@attach fadeIn}>...</div>

import type { Attachment } from 'svelte/attachments';

export const fadeIn: Attachment<Element> = (node) => {
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('visible');
		return;
	}
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.1 }
	);
	observer.observe(node);
	return () => observer.disconnect();
};
