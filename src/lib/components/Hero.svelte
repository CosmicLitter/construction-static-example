<script lang="ts">
	import { site, heroImages } from '$lib';
	import { fadeIn } from '$lib/fadeIn';

	const heroImage = heroImages[0];
</script>

<section id="top" class="hero">
	<div class="grid" aria-hidden="true"></div>

	<div class="inner hero-inner">
		<!-- top metadata rail -->
		<div class="rail fade-in" {@attach fadeIn}>
			<span class="rail-item"><span class="dot"></span>Est. 2008</span>
			<span class="rail-item">{site.location}</span>
			<span class="rail-item">General Contractor</span>
			<span class="rail-item rail-spacer">
				<span class="license-label">Lic.</span>
				{site.license.replace(/^Montana Registered Contractor /, '')}
			</span>
		</div>

		<div class="body">
			<div class="text">
				<p class="label label--rust fade-in" {@attach fadeIn}>Ironwood Construction Co.</p>

				<h1 class="display headline fade-in" {@attach fadeIn}>
					{site.heroTitle}
				</h1>

				<div class="sub fade-in" {@attach fadeIn}>
					<span class="dash">—</span>
					<span class="sub-text">{site.heroSubtitle}</span>
				</div>

				<p class="description fade-in" {@attach fadeIn}>{site.heroDescription}</p>

				<div class="ctas fade-in" {@attach fadeIn}>
					<a href="#work" class="btn btn-primary">
						<span>Selected Work</span>
						<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
							<path
								d="M4 10h12m-4-4 4 4-4 4"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="square"
							/>
						</svg>
					</a>
					<a href="#contact" class="btn btn-ghost">Start a Conversation</a>
				</div>
			</div>

			<div class="figure fade-in" {@attach fadeIn}>
				<div class="figure-frame">
					{#if heroImage}
						<enhanced:img
							src={heroImage}
							alt="Ironwood Construction custom home in the Gallatin Valley"
							fetchpriority="high"
							sizes="(min-width: 960px) 55vw, 100vw"
						/>
					{/if}
					<div class="figure-scrim"></div>
					<span class="figure-tag">File 001 · Bridger Ridge</span>
				</div>
				<div class="figure-specs">
					<span><em>N</em> 45°42′</span>
					<span><em>W</em> 110°59′</span>
					<span><em>Elev.</em> 4,820ft</span>
				</div>
			</div>
		</div>

		<!-- bottom rail: hours + scroll hint -->
		<div class="bottom">
			<span class="bottom-hours">{site.hoursShort}</span>
			<span class="scroll-hint">
				<span>Scroll</span>
				<svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
					<path
						d="M6 1v12m-4-4 4 4 4-4"
						fill="none"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="square"
					/>
				</svg>
			</span>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding: 0;
		border-bottom: 1px solid var(--stone-line);
	}

	/* Subtle blueprint grid — extra character for the hero only. */
	.grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(to right, rgba(20, 16, 12, 0.035) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(20, 16, 12, 0.035) 1px, transparent 1px);
		background-size: 64px 64px;
		pointer-events: none;
		mask-image: radial-gradient(ellipse at 30% 40%, #000 10%, transparent 70%);
	}

	.hero-inner {
		padding-block: 1.5rem 2.5rem;
		position: relative;
	}

	/* ─── Top rail ─── */
	.rail {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--stone-line);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.rail-item {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
	.rail-spacer {
		margin-left: auto;
	}
	.license-label {
		color: var(--ink-faint);
		opacity: 0.8;
	}
	.dot {
		width: 7px;
		height: 7px;
		background: var(--rust);
		border-radius: 50%;
		animation: pulse 2.2s ease-in-out infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.35;
		}
	}

	/* ─── Body split ─── */
	.body {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
		gap: clamp(2rem, 5vw, 4.5rem);
		align-items: center;
		padding-block: clamp(3rem, 7vw, 6rem);
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.headline {
		font-size: clamp(3.5rem, 10vw, 8.25rem);
		margin-top: 0.5rem;
		color: var(--ink);
	}
	.headline .word {
		display: inline-block;
	}
	.sub {
		display: flex;
		gap: 1rem;
		align-items: baseline;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(1.1rem, 2.2vw, 1.55rem);
		line-height: 1.2;
		color: var(--rust-deep);
		letter-spacing: 0.01em;
		text-transform: uppercase;
		margin-top: 0.25rem;
	}
	.dash {
		color: var(--rust);
		font-weight: 500;
	}

	.description {
		max-width: 44ch;
		font-size: 1.05rem;
		line-height: 1.65;
		color: var(--ink-soft);
		margin-top: 0.5rem;
	}

	.ctas {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 1rem;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.95rem 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			transform 0.2s ease;
	}
	.btn-primary {
		background: var(--ink);
		color: var(--paper);
	}
	.btn-primary:hover {
		background: var(--rust);
	}
	.btn-ghost {
		color: var(--ink);
		border: 1px solid var(--ink);
		background: transparent;
	}
	.btn-ghost:hover {
		background: var(--ink);
		color: var(--paper);
	}

	/* ─── Figure (photo) ─── */
	.figure {
		position: relative;
	}
	.figure-frame {
		position: relative;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--ink);
		/* a thin rule + corner-tick detail like an engineering drawing */
		box-shadow:
			inset 0 0 0 1px rgba(0, 0, 0, 0.1),
			0 30px 60px -30px rgba(20, 16, 12, 0.35);
	}
	.figure-frame :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.02);
		transition: transform 1.2s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.figure-frame:hover :global(img) {
		transform: scale(1.05);
	}
	.figure-scrim {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(20, 16, 12, 0.25), transparent 40%);
		pointer-events: none;
	}
	.figure-tag {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--paper);
		background: color-mix(in srgb, var(--ink) 72%, transparent);
		padding: 0.4rem 0.7rem;
		backdrop-filter: blur(4px);
	}
	.figure-specs {
		display: flex;
		gap: 1.5rem;
		margin-top: 0.85rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--ink-faint);
		letter-spacing: 0.05em;
	}
	.figure-specs em {
		font-style: normal;
		color: var(--rust);
		margin-right: 0.25rem;
	}

	/* ─── Bottom rail ─── */
	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1.5rem;
		border-top: 1px solid var(--stone-line);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.bottom-hours {
		color: var(--ink-soft);
	}
	.scroll-hint {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--ink);
	}
	.scroll-hint svg {
		animation: float 2.4s ease-in-out infinite;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(3px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scroll-hint svg,
		.dot {
			animation: none;
		}
	}

	/* ─── Responsive ─── */
	@media (max-width: 880px) {
		.body {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.figure-frame {
			aspect-ratio: 3 / 2;
		}
		.rail-spacer {
			margin-left: 0;
		}
	}
</style>
