<script lang="ts">
	import { testimonials } from '$lib';
	import { fadeIn } from '$lib/fadeIn';
</script>

<section id="testimonials" class="testimonials">
	<div class="inner">
		<header class="head fade-in" {@attach fadeIn}>
			<span class="label label--rust">What Clients Say</span>
			<h2 class="display head-title">Word of mouth,<br />by design.</h2>
			<p class="head-intro">
				We don't advertise — we never have. New work finds us through past clients, the architects
				we build with, and the subs who know how we run a job site.
			</p>
		</header>

		<ul class="grid">
			{#each testimonials as t, i (t.slug)}
				<li class="quote fade-in" {@attach fadeIn} style="transition-delay: {i * 80}ms">
					<div class="quote-mark" aria-hidden="true">&ldquo;</div>

					<blockquote class="quote-body">
						<p>{t.quote}</p>
					</blockquote>

					<footer class="quote-foot">
						<div class="cite-line" aria-hidden="true"></div>
						<div class="cite">
							<span class="cite-name">{t.name}</span>
							<span class="cite-role">{t.role}</span>
						</div>
						<span class="cite-tag">{t.project}</span>
					</footer>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.testimonials {
		background: var(--paper);
		border-top: 1px solid var(--stone-line);
	}
	.head {
		max-width: 56rem;
		margin-bottom: clamp(3rem, 5vw, 4rem);
	}
	.head-title {
		font-size: clamp(2.5rem, 6vw, 4.75rem);
		line-height: 0.92;
		margin-top: 0.85rem;
	}
	.head-intro {
		margin-top: 1.25rem;
		max-width: 56ch;
		font-size: 1.05rem;
		line-height: 1.65;
		color: var(--ink-soft);
	}

	.grid {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0;
		border-top: 1px solid var(--stone-line);
		border-left: 1px solid var(--stone-line);
	}
	.quote {
		padding: clamp(2rem, 4vw, 3rem);
		border-right: 1px solid var(--stone-line);
		border-bottom: 1px solid var(--stone-line);
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: relative;
		background: transparent;
		transition: background 0.3s ease;
	}
	.quote:hover {
		background: color-mix(in srgb, var(--paper-deep) 60%, transparent);
	}

	.quote-mark {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: 5rem;
		line-height: 0.6;
		color: var(--rust);
		margin-top: -0.5rem;
	}

	.quote-body p {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(1.25rem, 2vw, 1.6rem);
		line-height: 1.25;
		color: var(--ink);
		letter-spacing: -0.005em;
	}

	.quote-foot {
		margin-top: auto;
		padding-top: 1.25rem;
		display: grid;
		grid-template-columns: 2.5rem 1fr auto;
		gap: 1rem;
		align-items: center;
	}
	.cite-line {
		height: 1px;
		background: var(--ink);
	}
	.cite {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}
	.cite-name {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: 1.05rem;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		color: var(--ink);
	}
	.cite-role {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--ink-faint);
		margin-top: 2px;
	}
	.cite-tag {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--rust);
		border: 1px solid var(--rust);
		padding: 0.3rem 0.6rem;
	}

	@media (max-width: 780px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 460px) {
		.quote-foot {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
		.cite-line {
			width: 2.5rem;
		}
		.cite-tag {
			justify-self: start;
		}
	}
</style>
