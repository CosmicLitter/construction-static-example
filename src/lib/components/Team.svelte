<script lang="ts">
	import { team, teamImagesBySlug } from '$lib';
	import { fadeIn } from '$lib/fadeIn';
</script>

<section id="team" class="team">
	<div class="inner">
		<header class="head fade-in" {@attach fadeIn}>
			<span class="label label--rust">The Crew</span>
			<h2 class="display head-title">Small team,<br />big ownership.</h2>
			<p class="head-intro">
				You'll know the people building your project by name. Everyone on our crew has a stake in
				the work — that's why we stay small on purpose.
			</p>
		</header>

		<ul class="grid">
			{#each team as member, i (member.slug)}
				<li class="card fade-in" {@attach fadeIn} style="transition-delay: {i * 100}ms">
					<div class="card-image">
						{#if teamImagesBySlug[member.slug]}
							<enhanced:img
								src={teamImagesBySlug[member.slug]}
								alt={member.name}
								sizes="(min-width: 880px) 30vw, 50vw"
							/>
						{/if}
						<span class="card-serial">0{i + 1}</span>
					</div>
					<div class="card-body">
						<h3 class="card-name display">{member.name}</h3>
						<p class="card-title">{member.title}</p>
						<p class="card-cred">{member.credentials}</p>
						<div class="card-bio">
							<member.Body />
						</div>
						<a class="card-contact" href="mailto:{member.email}">
							<span>Get in touch</span>
							<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
								<path
									d="M3 7h8m-3-3 3 3-3 3"
									fill="none"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linecap="square"
								/>
							</svg>
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.team {
		background: var(--paper-deep);
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
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1.5rem, 3vw, 2.5rem);
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.card-image {
		position: relative;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--ink);
	}
	.card-image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: saturate(0.9) contrast(1.02);
		transition:
			transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1),
			filter 0.4s ease;
	}
	.card:hover .card-image :global(img) {
		transform: scale(1.04);
		filter: saturate(1) contrast(1.02);
	}
	.card-serial {
		position: absolute;
		top: 1rem;
		left: 1rem;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		color: var(--paper);
		background: var(--rust);
		padding: 0.3rem 0.55rem;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.card-name {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		line-height: 1;
		margin-bottom: 0.1rem;
	}
	.card-title {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--rust);
	}
	.card-cred {
		font-size: 0.85rem;
		color: var(--ink-faint);
		line-height: 1.45;
	}
	.card-bio {
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--stone-line);
	}
	.card-bio :global(p) {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--ink-soft);
	}

	.card-contact {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
		padding: 0.55rem 0;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink);
		width: fit-content;
		border-bottom: 1px solid var(--ink);
		transition:
			color 0.2s ease,
			border-color 0.2s ease;
	}
	.card-contact:hover {
		color: var(--rust);
		border-bottom-color: var(--rust);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
