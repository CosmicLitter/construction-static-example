<script lang="ts">
	import { about, AboutBody, aboutImages } from '$lib';
	import { fadeIn } from '$lib/fadeIn';

	const aboutImage = aboutImages[0];
	const stats = [
		{ value: about.stat1Value, label: about.stat1Label },
		{ value: about.stat2Value, label: about.stat2Label },
		{ value: about.stat3Value, label: about.stat3Label }
	];
</script>

<section id="about" class="about">
	<div class="inner grid">
		<figure class="figure fade-in" {@attach fadeIn}>
			<div class="figure-inner">
				{#if aboutImage}
					<enhanced:img
						src={aboutImage}
						alt="Craftsman at work on an Ironwood Construction job site"
						sizes="(min-width: 880px) 42vw, 100vw"
					/>
				{/if}
			</div>
			<figcaption>
				<span class="cap-num">Fig. 01</span>
				<span class="cap-text">A job site, Gallatin Valley — {about.founded + 14}</span>
			</figcaption>
		</figure>

		<div class="content fade-in" {@attach fadeIn}>
			<p class="label label--rust">{about.label}</p>

			<h2 class="display title">
				<span class="title-line">{about.titleLine1}</span>
				<span class="title-line title-line--soft">{about.titleLine2}</span>
			</h2>

			<div class="prose body-prose">
				<AboutBody />
			</div>

			<dl class="stats">
				{#each stats as stat, i (i)}
					<div class="stat">
						<dt class="stat-value">{stat.value}</dt>
						<dd class="stat-label">{stat.label}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>

<style>
	.about {
		background: var(--paper);
	}
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
	}

	/* ─── Figure ─── */
	.figure {
		position: sticky;
		top: 6rem;
	}
	.figure-inner {
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--ink);
		box-shadow: 0 40px 80px -40px rgba(20, 16, 12, 0.35);
	}
	.figure-inner :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	figcaption {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		margin-top: 0.85rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.cap-num {
		color: var(--rust);
	}

	/* ─── Content ─── */
	.content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.title {
		font-size: clamp(2.75rem, 6vw, 5rem);
		line-height: 0.92;
		margin-top: 0.25rem;
	}
	.title-line {
		display: block;
	}
	.title-line--soft {
		color: var(--rust);
	}

	.body-prose {
		margin-top: 1rem;
		max-width: 54ch;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		margin-top: 2.5rem;
		border-top: 1px solid var(--stone-line);
	}
	.stat {
		padding: 1.5rem 1.25rem 1rem 0;
		border-right: 1px solid var(--stone-line);
		position: relative;
	}
	.stat:last-child {
		border-right: none;
		padding-right: 0;
	}
	.stat:not(:first-child) {
		padding-left: 1.25rem;
	}
	.stat-value {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: clamp(2.5rem, 5vw, 3.75rem);
		line-height: 0.9;
		color: var(--ink);
		letter-spacing: -0.01em;
	}
	.stat-label {
		margin-top: 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}

	@media (max-width: 880px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.figure {
			position: static;
		}
		.figure-inner {
			aspect-ratio: 3 / 2;
		}
	}
	@media (max-width: 520px) {
		.stats {
			grid-template-columns: 1fr;
		}
		.stat {
			border-right: none;
			border-bottom: 1px solid var(--stone-line);
			padding: 1.25rem 0;
		}
		.stat:last-child {
			border-bottom: none;
		}
		.stat:not(:first-child) {
			padding-left: 0;
		}
	}
</style>
