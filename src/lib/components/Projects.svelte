<script lang="ts">
	import { projectsIntro, projects, projectImagesBySlug } from '$lib';
	import { fadeIn } from '$lib/fadeIn';

	let activeCategory = $state('all');

	const categories = projectsIntro.categories ?? [{ id: 'all', label: 'All' }];

	const filtered = $derived(
		activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory)
	);

	function categoryLabel(id: string) {
		return categories.find((c) => c.id === id)?.label ?? id;
	}
</script>

<section id="work" class="projects">
	<div class="inner">
		<header class="head fade-in" {@attach fadeIn}>
			<div class="head-top">
				<span class="label label--rust">{projectsIntro.label}</span>
				<span class="head-count">{filtered.length} / {projects.length} records</span>
			</div>
			<h2 class="display head-title">{projectsIntro.title}</h2>
			<p class="head-intro">{projectsIntro.intro}</p>
		</header>

		<div class="filters fade-in" {@attach fadeIn} role="tablist" aria-label="Filter projects">
			{#each categories as cat (cat.id)}
				<button
					class="chip"
					class:active={activeCategory === cat.id}
					role="tab"
					aria-selected={activeCategory === cat.id}
					onclick={() => (activeCategory = cat.id)}
				>
					<span class="chip-label">{cat.label}</span>
					<span class="chip-count">
						{cat.id === 'all'
							? projects.length
							: projects.filter((p) => p.category === cat.id).length}
					</span>
				</button>
			{/each}
		</div>

		<ul class="grid">
			{#each filtered as project, i (project.slug)}
				<li class="card fade-in" {@attach fadeIn} style="transition-delay: {i * 70}ms">
					<div class="card-frame">
						<div class="card-image">
							{#if projectImagesBySlug[project.slug]}
								<enhanced:img
									src={projectImagesBySlug[project.slug]}
									alt={project.name}
									sizes="(min-width: 880px) 42vw, 100vw"
								/>
							{/if}
							<span class="card-tag">{categoryLabel(project.category)}</span>
						</div>

						<div class="card-body">
							<div class="card-head">
								<h3 class="card-title">{project.name}</h3>
								<span class="card-year">{project.year}</span>
							</div>
							<p class="card-summary">{project.summary}</p>

							<dl class="card-spec">
								<div>
									<dt>Location</dt>
									<dd>{project.location}</dd>
								</div>
								<div>
									<dt>Size</dt>
									<dd>{project.size}</dd>
								</div>
								<div>
									<dt>Duration</dt>
									<dd>{project.duration}</dd>
								</div>
								<div>
									<dt>Style</dt>
									<dd>{project.style}</dd>
								</div>
							</dl>

							<ul class="features" aria-label="Project features">
								{#each project.features.slice(0, 3) as feature (feature)}
									<li>
										<span class="bullet" aria-hidden="true">+</span>
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.projects {
		background: var(--paper);
		border-top: 1px solid var(--stone-line);
	}
	.head {
		max-width: 64rem;
	}
	.head-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-bottom: 1rem;
		margin-bottom: 1.5rem;
		border-bottom: 1px solid var(--ink);
	}
	.head-count {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.head-title {
		font-size: clamp(2.75rem, 6vw, 5rem);
		line-height: 0.92;
		max-width: 16ch;
	}
	.head-intro {
		margin-top: 1.25rem;
		max-width: 56ch;
		font-size: 1.05rem;
		line-height: 1.65;
		color: var(--ink-soft);
	}

	/* ─── Filters ─── */
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0;
		margin: clamp(2rem, 5vw, 3.5rem) 0 clamp(2rem, 4vw, 3rem);
		border-top: 1px solid var(--stone-line);
		border-bottom: 1px solid var(--stone-line);
	}
	.chip {
		display: inline-flex;
		align-items: baseline;
		gap: 0.5rem;
		padding: 1rem 1.35rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-faint);
		border-right: 1px solid var(--stone-line);
		position: relative;
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}
	.chip:last-child {
		border-right: none;
	}
	.chip:hover {
		color: var(--ink);
	}
	.chip-count {
		font-size: 0.65rem;
		color: var(--ink-faint);
		opacity: 0.75;
	}
	.chip.active {
		color: var(--ink);
		background: var(--paper-deep);
	}
	.chip.active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 2px;
		background: var(--rust);
	}
	.chip.active .chip-count {
		color: var(--rust);
		opacity: 1;
	}

	/* ─── Grid ─── */
	.grid {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(1.5rem, 3vw, 2.5rem);
	}

	.card-frame {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 1.25rem;
		height: 100%;
	}

	/* ─── Card image ─── */
	.card-image {
		position: relative;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		background: var(--ink);
	}
	.card-image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.card:hover .card-image :global(img) {
		transform: scale(1.04);
	}
	.card-tag {
		position: absolute;
		top: 1rem;
		left: 1rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--paper);
		background: color-mix(in srgb, var(--ink) 78%, transparent);
		padding: 0.35rem 0.65rem;
		backdrop-filter: blur(4px);
	}

	/* ─── Card body ─── */
	.card-body {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}
	.card-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--ink);
	}
	.card-title {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		line-height: 1;
		letter-spacing: -0.005em;
		text-transform: uppercase;
		color: var(--ink);
	}
	.card-year {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		color: var(--rust);
		font-variant-numeric: tabular-nums;
	}
	.card-summary {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--ink-soft);
	}

	.card-spec {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.85rem 1.25rem;
		padding-top: 0.25rem;
		border-top: 1px solid var(--stone-thin);
		padding-top: 0.85rem;
		margin-top: 0.25rem;
		font-family: var(--font-mono);
	}
	.card-spec dt {
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-bottom: 0.3rem;
	}
	.card-spec dd {
		font-size: 0.85rem;
		color: var(--ink);
		font-weight: 500;
	}

	.features {
		list-style: none;
		margin-top: 0.5rem;
		display: grid;
		gap: 0.4rem;
	}
	.features li {
		display: flex;
		gap: 0.5rem;
		font-size: 0.88rem;
		line-height: 1.45;
		color: var(--ink-soft);
	}
	.bullet {
		color: var(--rust);
		font-family: var(--font-mono);
		font-weight: 600;
	}

	@media (max-width: 780px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 520px) {
		.card-spec {
			grid-template-columns: 1fr;
		}
	}
</style>
