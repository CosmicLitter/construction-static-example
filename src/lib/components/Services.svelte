<script lang="ts">
	import { servicesIntro, services } from '$lib';
	import { fadeIn } from '$lib/fadeIn';
</script>

<section id="services" class="services">
	<div class="inner">
		<header class="head fade-in" {@attach fadeIn}>
			<div class="head-meta">
				<span class="label label--rust">{servicesIntro.label}</span>
				<span class="head-count">01 — 0{services.length}</span>
			</div>
			<h2 class="display head-title">{servicesIntro.title}</h2>
			<p class="head-intro">{servicesIntro.intro}</p>
		</header>

		<ol class="list">
			{#each services as svc, i (svc.slug)}
				<li class="row fade-in" {@attach fadeIn} style="transition-delay: {i * 60}ms">
					<div class="row-head">
						<span class="serial row-serial">0{i + 1}</span>
						<h3 class="row-title">{svc.title}</h3>
					</div>

					<p class="row-summary">
						{svc.summary}
					</p>

					<dl class="row-spec">
						<div>
							<dt>Typical Range</dt>
							<dd>{svc.typicalRange}</dd>
						</div>
						<div>
							<dt>Typical Duration</dt>
							<dd>{svc.typicalDuration}</dd>
						</div>
					</dl>

					<div class="row-arrow" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="22" height="22">
							<path
								d="M5 12h14m-6-6 6 6-6 6"
								fill="none"
								stroke="currentColor"
								stroke-width="1.3"
								stroke-linecap="square"
							/>
						</svg>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.services {
		background: var(--paper);
		border-top: 1px solid var(--stone-line);
	}
	.head {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
		max-width: 64rem;
	}
	.head-meta {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--ink);
		margin-bottom: 1.5rem;
	}
	.head-count {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.head-title {
		font-size: clamp(2.5rem, 6vw, 4.75rem);
		line-height: 0.9;
		max-width: 16ch;
	}
	.head-intro {
		margin-top: 1.25rem;
		max-width: 56ch;
		font-size: 1.05rem;
		line-height: 1.65;
		color: var(--ink-soft);
	}

	.list {
		list-style: none;
		margin-top: clamp(2rem, 5vw, 4rem);
		border-top: 1px solid var(--stone-line);
	}
	.row {
		display: grid;
		grid-template-columns: minmax(200px, 1.35fr) minmax(0, 2fr) auto auto;
		gap: clamp(1rem, 3vw, 3rem);
		align-items: center;
		padding: clamp(1.75rem, 3vw, 2.5rem) 0;
		border-bottom: 1px solid var(--stone-line);
		position: relative;
		transition: background 0.3s ease;
	}
	.row:hover {
		background: color-mix(in srgb, var(--paper-deep) 55%, transparent);
	}

	.row-head {
		display: flex;
		gap: 1rem;
		align-items: baseline;
	}
	.row-serial {
		font-size: 0.85rem;
		letter-spacing: 0.1em;
	}
	.row-title {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		line-height: 0.95;
		text-transform: uppercase;
		letter-spacing: -0.005em;
		color: var(--ink);
	}
	.row-summary {
		font-size: 1rem;
		line-height: 1.55;
		color: var(--ink-soft);
		max-width: 50ch;
	}
	.row-spec {
		display: flex;
		gap: 2rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		line-height: 1.3;
	}
	.row-spec dt {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--ink-faint);
		margin-bottom: 0.3rem;
	}
	.row-spec dd {
		color: var(--ink);
		font-weight: 500;
	}

	.row-arrow {
		color: var(--ink-faint);
		transition:
			color 0.3s ease,
			transform 0.3s ease;
	}
	.row:hover .row-arrow {
		color: var(--rust);
		transform: translateX(4px);
	}

	@media (max-width: 960px) {
		.row {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
			gap: 1.25rem 1.5rem;
		}
		.row-head {
			grid-column: 1 / -1;
		}
		.row-arrow {
			position: absolute;
			top: 1.5rem;
			right: 0;
		}
		.row-spec {
			grid-column: 1 / -1;
			padding-top: 0.5rem;
			border-top: 1px solid var(--stone-thin);
		}
	}
	@media (max-width: 600px) {
		.row {
			grid-template-columns: 1fr;
		}
		.row-summary,
		.row-spec {
			grid-column: 1;
		}
		.row-spec {
			flex-wrap: wrap;
			gap: 1rem 2rem;
		}
	}
</style>
