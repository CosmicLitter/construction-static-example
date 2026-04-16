<script lang="ts">
	import { processSteps } from '$lib';
	import { fadeIn } from '$lib/fadeIn';
</script>

<section id="process" class="process">
	<div class="inner">
		<header class="head">
			<span class="label label--rust fade-in" {@attach fadeIn}>Our Process</span>
			<h2 class="display head-title fade-in" {@attach fadeIn}>
				Five steps,<br />
				zero surprises.
			</h2>
			<p class="head-intro fade-in" {@attach fadeIn}>
				The way we work has been refined over a hundred and fifty projects. Each phase has a clear
				deliverable and a clear decision point — you always know where things stand.
			</p>
		</header>

		<ol class="steps">
			{#each processSteps as step, i (step.slug)}
				<li class="step fade-in" {@attach fadeIn} style="transition-delay: {i * 100}ms">
					<div class="step-number">
						<span class="num">0{step.step}</span>
						<span class="num-mark">/0{processSteps.length}</span>
					</div>
					<div class="step-rule" aria-hidden="true"></div>
					<div class="step-content">
						<div class="step-head">
							<h3 class="step-title">{step.title}</h3>
							<span class="step-duration">{step.duration}</span>
						</div>
						<p class="step-summary">{step.summary}</p>
						<step.Body />
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.process {
		background: var(--paper-deep);
		border-top: 1px solid var(--stone-line);
		border-bottom: 1px solid var(--stone-line);
	}
	.head {
		max-width: 56rem;
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}
	.head-title {
		font-size: clamp(2.75rem, 6vw, 5rem);
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

	.steps {
		list-style: none;
		display: grid;
		gap: 0;
	}
	.step {
		display: grid;
		grid-template-columns: clamp(6rem, 12vw, 9rem) 1px minmax(0, 1fr);
		gap: clamp(1.5rem, 4vw, 3rem);
		padding: clamp(1.75rem, 4vw, 3rem) 0;
		border-top: 1px solid var(--stone-line);
		position: relative;
	}
	.step:last-child {
		border-bottom: 1px solid var(--stone-line);
	}

	.step-number {
		font-family: var(--font-display);
		font-weight: 900;
		line-height: 0.85;
		color: var(--ink);
		position: relative;
	}
	.num {
		display: block;
		font-size: clamp(4rem, 8vw, 7rem);
		letter-spacing: -0.02em;
		color: var(--rust);
	}
	.num-mark {
		display: block;
		font-family: var(--font-mono);
		font-weight: 500;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		color: var(--ink-faint);
		margin-top: 0.5rem;
	}
	.step-rule {
		width: 1px;
		background: var(--stone-line);
		justify-self: center;
	}

	.step-content {
		padding-top: 0.75rem;
		max-width: 58ch;
	}
	.step-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1.5rem;
		flex-wrap: wrap;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--stone-line);
		margin-bottom: 1rem;
	}
	.step-title {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		text-transform: uppercase;
		letter-spacing: -0.005em;
		line-height: 1;
		color: var(--ink);
	}
	.step-duration {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--rust);
	}
	.step-summary {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--ink-soft);
		margin-bottom: 0.75rem;
	}
	.step-content :global(p) {
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--ink-faint);
		margin-bottom: 0.75rem;
	}

	@media (max-width: 700px) {
		.step {
			grid-template-columns: clamp(4.5rem, 14vw, 7rem) 1px minmax(0, 1fr);
			gap: 1rem 1.25rem;
		}
		.step-head {
			flex-direction: column;
			gap: 0.4rem;
			align-items: flex-start;
		}
	}
</style>
