<script lang="ts">
	import { highlights } from '$lib';
	import { fadeIn } from '$lib/fadeIn';

	// Minimal inline icon set keyed to frontmatter `icon` values.
	const icons: Record<string, string> = {
		'shield-check':
			'M10 2 3 5v5c0 4.5 2.9 7.8 7 9 4.1-1.2 7-4.5 7-9V5l-7-3Zm-1 12L5.5 10.5 7 9l2 2 4-4 1.5 1.5L9 14Z',
		hammer:
			'M15 2 9 8l-.8-.8a2 2 0 0 0-2.8 0L3 9.6l7.4 7.4 2.4-2.4a2 2 0 0 0 0-2.8l-.8-.8 6-6a1.4 1.4 0 0 0-2-2Z',
		clock:
			'M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm-.5 1.5v5.2l3.6 2.2.8-1.3-3-1.8V5.5Z',
		handshake:
			'M2 10v3l2.5 2.5 2-2 2 2 2-2 2 2L15 13l2.5 2.5L18 13v-3l-3-3h-4l-1.5 1.5a.7.7 0 0 1-1 0L7 7H5L2 10Z'
	};
</script>

<section class="strip" aria-label="Why choose Ironwood">
	<div class="inner">
		<ul class="rows">
			{#each highlights as h, i (h.slug)}
				<li class="row fade-in" {@attach fadeIn} style="transition-delay: {i * 80}ms">
					<span class="num">0{i + 1}</span>
					<span class="icon" aria-hidden="true">
						<svg viewBox="0 0 20 20" width="22" height="22">
							<path d={icons[h.icon] ?? icons['shield-check']} fill="currentColor" />
						</svg>
					</span>
					<span class="text">
						<span class="title">{h.title}</span>
						<span class="body">{h.body}</span>
					</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.strip {
		padding: clamp(3rem, 6vw, 5rem) var(--pad-x);
		background: var(--paper-deep);
		border-bottom: 1px solid var(--stone-line);
	}
	.rows {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0;
	}
	.row {
		display: grid;
		grid-template-columns: auto auto 1fr;
		gap: 0.9rem 1rem;
		align-items: start;
		padding: 1.25rem 1.5rem;
		border-left: 1px solid var(--stone-line);
		position: relative;
	}
	.row:first-child {
		border-left: none;
		padding-left: 0;
	}
	.row:last-child {
		padding-right: 0;
	}
	.num {
		grid-row: 1 / 2;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		color: var(--rust);
		padding-top: 2px;
	}
	.icon {
		grid-row: 1 / 2;
		color: var(--ink);
		display: inline-flex;
	}
	.text {
		grid-column: 1 / -1;
		margin-top: 0.85rem;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}
	.title {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: 1.5rem;
		line-height: 1;
		letter-spacing: -0.005em;
		text-transform: uppercase;
		color: var(--ink);
	}
	.body {
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	@media (max-width: 960px) {
		.rows {
			grid-template-columns: repeat(2, 1fr);
		}
		.row {
			border-bottom: 1px solid var(--stone-line);
			padding: 1.5rem 1.25rem;
		}
		.row:nth-child(odd) {
			border-left: none;
			padding-left: 0;
		}
		.row:nth-child(even) {
			padding-right: 0;
		}
		.row:nth-last-child(-n + 2) {
			border-bottom: none;
		}
	}
	@media (max-width: 520px) {
		.rows {
			grid-template-columns: 1fr;
		}
		.row {
			border-left: none !important;
			border-bottom: 1px solid var(--stone-line);
			padding: 1.25rem 0;
		}
		.row:last-child {
			border-bottom: none;
		}
	}
</style>
