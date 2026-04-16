<script lang="ts">
	import { faqs } from '$lib';
	import { fadeIn } from '$lib/fadeIn';

	let openSlug = $state<string | null>(faqs[0]?.slug ?? null);

	function toggle(slug: string) {
		openSlug = openSlug === slug ? null : slug;
	}
</script>

<section id="faq" class="faq">
	<div class="inner grid">
		<aside class="side fade-in" {@attach fadeIn}>
			<span class="label label--rust">Questions we hear a lot</span>
			<h2 class="display head-title">Frequently<br />Asked.</h2>
			<p class="head-intro">
				If yours isn't here, give us a call or email. We answer every inquiry personally within two
				business days — usually the same day.
			</p>
			<div class="side-footer">
				<span class="side-stat">{faqs.length}</span>
				<span class="side-label">Questions on record</span>
			</div>
		</aside>

		<div class="list fade-in" {@attach fadeIn}>
			{#each faqs as faq, i (faq.slug)}
				{@const isOpen = openSlug === faq.slug}
				<div class="item" class:open={isOpen}>
					<button
						class="item-head"
						aria-expanded={isOpen}
						aria-controls="faq-{faq.slug}"
						onclick={() => toggle(faq.slug)}
					>
						<span class="item-num">0{i + 1}</span>
						<span class="item-q">{faq.question}</span>
						<span class="item-icon" aria-hidden="true">
							<svg viewBox="0 0 16 16" width="16" height="16">
								<path
									d="M4 8h8M8 4v8"
									class="icon-plus"
									fill="none"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="square"
								/>
							</svg>
						</span>
					</button>
					<div
						class="item-body"
						id="faq-{faq.slug}"
						role="region"
						aria-hidden={!isOpen}
					>
						<div class="item-body-inner">
							<faq.Body />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq {
		background: var(--paper);
		border-top: 1px solid var(--stone-line);
	}
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.3fr);
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
	}

	.side {
		position: sticky;
		top: 6rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.head-title {
		font-size: clamp(2.5rem, 5vw, 4.25rem);
		line-height: 0.92;
		margin-top: 0.5rem;
	}
	.head-intro {
		max-width: 42ch;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--ink-soft);
		margin-top: 0.75rem;
	}
	.side-footer {
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid var(--stone-line);
		display: flex;
		align-items: baseline;
		gap: 0.85rem;
	}
	.side-stat {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: 2.5rem;
		line-height: 1;
		color: var(--rust);
	}
	.side-label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}

	.list {
		border-top: 1px solid var(--ink);
	}
	.item {
		border-bottom: 1px solid var(--stone-line);
	}
	.item.open {
		background: color-mix(in srgb, var(--paper-deep) 45%, transparent);
	}

	.item-head {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1.25rem;
		align-items: center;
		width: 100%;
		padding: 1.35rem 0;
		text-align: left;
		color: var(--ink);
		cursor: pointer;
	}
	.item-num {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		color: var(--rust);
	}
	.item-q {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.15rem, 2vw, 1.4rem);
		line-height: 1.15;
		letter-spacing: -0.005em;
		text-transform: uppercase;
	}
	.item-icon {
		width: 1.75rem;
		height: 1.75rem;
		display: grid;
		place-items: center;
		border: 1px solid var(--ink);
		color: var(--ink);
		transition:
			background 0.25s ease,
			color 0.25s ease,
			transform 0.25s ease;
	}
	.item-head:hover .item-icon {
		background: var(--ink);
		color: var(--paper);
	}
	.item.open .item-icon {
		background: var(--rust);
		color: var(--paper);
		border-color: var(--rust);
		transform: rotate(45deg);
	}

	.item-body {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.item.open .item-body {
		grid-template-rows: 1fr;
	}
	.item-body-inner {
		overflow: hidden;
		min-height: 0;
	}
	.item-body-inner :global(p) {
		font-size: 1rem;
		line-height: 1.65;
		color: var(--ink-soft);
		padding: 0 0 1.4rem 2.5rem;
		max-width: 60ch;
	}

	@media (max-width: 820px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.side {
			position: static;
		}
	}
	@media (max-width: 480px) {
		.item-body-inner :global(p) {
			padding-left: 0;
		}
	}
</style>
