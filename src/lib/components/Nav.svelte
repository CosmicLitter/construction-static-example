<script lang="ts">
	import { site } from '$lib/content';

	let scrolled = $state(false);
	let open = $state(false);

	const links = [
		{ href: '#work', label: 'Work' },
		{ href: '#services', label: 'Services' },
		{ href: '#process', label: 'Process' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<svelte:window
	onscroll={() => {
		scrolled = window.scrollY > 40;
	}}
/>

<header class="nav" class:scrolled>
	<div class="nav-inner">
		<a href="#top" class="brand" aria-label="{site.name} — back to top">
			<span class="mark" aria-hidden="true">IW</span>
			<span class="wordmark">
				<span class="name">{site.name.replace(/ Co\.?$/, '')}</span>
				<span class="est">Est. 2008 · Bozeman MT</span>
			</span>
		</a>

		<nav aria-label="Primary">
			<ul class="links" class:open>
				{#each links as link (link.href)}
					<li>
						<a href={link.href} onclick={() => (open = false)}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a class="cta" href={site.phoneHref}>
			<span class="cta-label">Call</span>
			<span class="cta-num">{site.phone}</span>
		</a>

		<button
			class="menu-btn"
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<span class="bar" class:open></span>
			<span class="bar" class:open></span>
		</button>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: color-mix(in srgb, var(--paper) 92%, transparent);
		backdrop-filter: blur(12px) saturate(120%);
		-webkit-backdrop-filter: blur(12px) saturate(120%);
		border-bottom: 1px solid transparent;
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;
	}
	.nav.scrolled {
		border-bottom-color: var(--stone-line);
		box-shadow: 0 1px 0 rgba(20, 16, 12, 0.02);
	}
	.nav-inner {
		max-width: var(--max-w);
		margin: 0 auto;
		padding: 0.75rem var(--pad-x);
		display: grid;
		grid-template-columns: auto 1fr auto auto;
		align-items: center;
		gap: 1.5rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.mark {
		width: 2.25rem;
		height: 2.25rem;
		display: grid;
		place-items: center;
		background: var(--ink);
		color: var(--paper);
		font-family: var(--font-display);
		font-weight: 900;
		font-size: 0.95rem;
		letter-spacing: 0.02em;
		line-height: 1;
		padding-top: 2px;
	}
	.wordmark {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}
	.name {
		font-family: var(--font-display);
		font-weight: 900;
		font-size: 1.15rem;
		letter-spacing: 0.005em;
		text-transform: uppercase;
	}
	.est {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		font-weight: 400;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-top: 3px;
	}

	.links {
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 2.25rem;
	}
	.links a {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink);
		padding: 0.5rem 0;
		position: relative;
	}
	.links a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 100%;
		bottom: 0.3rem;
		height: 1px;
		background: var(--rust);
		transition: right 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.links a:hover::after {
		right: 0;
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 2px;
		line-height: 1;
		padding: 0.5rem 0.85rem;
		border-left: 1px solid var(--stone-line);
	}
	.cta-label {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.cta-num {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--ink);
		letter-spacing: 0.01em;
	}

	.menu-btn {
		display: none;
		width: 2.5rem;
		height: 2.5rem;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
	}
	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--ink);
		margin-left: auto;
		margin-right: auto;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}
	.bar:nth-child(1).open {
		transform: translateY(4px) rotate(45deg);
	}
	.bar:nth-child(2).open {
		transform: translateY(-4px) rotate(-45deg);
	}

	@media (max-width: 880px) {
		.nav-inner {
			grid-template-columns: auto 1fr auto;
		}
		.cta {
			display: none;
		}
		.menu-btn {
			display: flex;
		}
		.links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			background: var(--paper);
			padding: 1rem var(--pad-x) 2rem;
			border-top: 1px solid var(--stone-line);
			border-bottom: 1px solid var(--stone-line);
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.4s ease;
		}
		.links.open {
			max-height: 500px;
		}
		.links a {
			padding: 1rem 0;
			border-bottom: 1px solid var(--stone-thin);
			font-size: 0.9rem;
			display: block;
		}
		.links a::after {
			display: none;
		}
	}
	@media (max-width: 420px) {
		.est {
			display: none;
		}
	}
</style>
