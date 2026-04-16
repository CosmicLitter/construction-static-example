<script lang="ts">
	import { site } from '$lib/content';
	import { fadeIn } from '$lib/fadeIn';

	const year = new Date().getFullYear();
</script>

<section id="contact" class="contact">
	<div class="grain" aria-hidden="true"></div>
	<div class="inner">
		<header class="head fade-in" {@attach fadeIn}>
			<span class="label label--rust">Start a Conversation</span>
			<h2 class="display head-title">
				<span>Let's build</span><br />
				<span class="head-title--alt">something that lasts.</span>
			</h2>
		</header>

		<div class="grid">
			<!-- Column 1 — phone + email big, primary CTAs -->
			<section class="col col-cta fade-in" {@attach fadeIn} aria-label="Primary contact">
				<a class="big-link" href={site.phoneHref}>
					<span class="big-label">By phone</span>
					<span class="big-value">{site.phone}</span>
					<span class="big-arrow" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 20 20">
							<path
								d="M5 10h10m-4-4 4 4-4 4"
								fill="none"
								stroke="currentColor"
								stroke-width="1.3"
								stroke-linecap="square"
							/>
						</svg>
					</span>
				</a>

				<a class="big-link" href="mailto:hello@ironwoodconstruction.example">
					<span class="big-label">By email</span>
					<span class="big-value">hello@ironwoodconstruction.example</span>
					<span class="big-arrow" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 20 20">
							<path
								d="M5 10h10m-4-4 4 4-4 4"
								fill="none"
								stroke="currentColor"
								stroke-width="1.3"
								stroke-linecap="square"
							/>
						</svg>
					</span>
				</a>
			</section>

			<!-- Column 2 — address + hours -->
			<section class="col fade-in" {@attach fadeIn} aria-label="Office">
				<h3 class="col-title">The Shop</h3>
				<address class="addr">
					{site.address.street}<br />
					{site.address.city}, {site.address.state}
					{site.address.zip}
				</address>

				<h3 class="col-title col-title--tight">Hours</h3>
				<dl class="hours">
					{#each site.hours as h (h.days)}
						<div class="hours-row">
							<dt>{h.days}</dt>
							<dd>{h.time}</dd>
						</div>
					{/each}
				</dl>
			</section>

			<!-- Column 3 — service area + license -->
			<section class="col fade-in" {@attach fadeIn} aria-label="Credentials">
				<h3 class="col-title">Service Area</h3>
				<p class="col-body">{site.serviceArea}</p>

				<h3 class="col-title col-title--tight">Credentials</h3>
				<ul class="cred">
					<li>{site.license}</li>
					<li>{site.insurance}</li>
				</ul>

				<h3 class="col-title col-title--tight">Follow</h3>
				<ul class="social">
					{#each site.social as s (s.href)}
						<li>
							<a href={s.href} rel="noopener">
								<span>{s.label}</span>
								<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
									<path
										d="M3 9 9 3M4 3h5v5"
										fill="none"
										stroke="currentColor"
										stroke-width="1.3"
										stroke-linecap="square"
									/>
								</svg>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		</div>

		<!-- Big wordmark filling the bottom — letterpress feel -->
		<div class="mark fade-in" {@attach fadeIn} aria-hidden="true">
			<span>Ironwood</span>
		</div>

		<div class="colophon">
			<span>© {year} {site.name}. All rights reserved.</span>
			<span class="colophon-right">
				<span>Built in Bozeman</span>
				<span class="dot" aria-hidden="true">·</span>
				<span>Prerendered · Static</span>
			</span>
		</div>
	</div>
</section>

<style>
	.contact {
		background: var(--ink);
		color: var(--paper);
		position: relative;
		overflow: hidden;
		border-top: 1px solid var(--stone-line);
	}
	.grain {
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(circle at 10% 20%, rgba(162, 78, 35, 0.22), transparent 55%),
			radial-gradient(circle at 80% 90%, rgba(162, 78, 35, 0.14), transparent 50%);
		pointer-events: none;
	}
	.inner {
		position: relative;
	}

	.head {
		max-width: 56rem;
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}
	.head-title {
		font-size: clamp(3rem, 9vw, 7rem);
		line-height: 0.9;
		color: var(--paper);
		margin-top: 0.5rem;
	}
	.head-title--alt {
		color: var(--rust-bright);
	}

	.grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: 0;
		border-top: 1px solid rgba(244, 239, 230, 0.15);
	}
	.col {
		padding: clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2.5vw, 2rem);
		border-right: 1px solid rgba(244, 239, 230, 0.15);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.col:first-child {
		padding-left: 0;
	}
	.col:last-child {
		border-right: none;
		padding-right: 0;
	}
	.col-title {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--rust-bright);
		margin-bottom: 0.65rem;
	}
	.col-title--tight {
		margin-top: 1.75rem;
	}
	.col-body {
		font-size: 0.95rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--paper) 90%, transparent);
	}

	/* ─── Big contact CTAs ─── */
	.col-cta {
		gap: 0;
	}
	.big-link {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		row-gap: 0.5rem;
		align-items: center;
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(244, 239, 230, 0.15);
		transition: padding 0.25s ease;
	}
	.big-link:first-child {
		border-top: 1px solid rgba(244, 239, 230, 0.15);
		margin-top: 0;
	}
	.big-link:hover {
		padding-left: 0.5rem;
	}
	.big-label {
		grid-column: 1;
		grid-row: 1;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--rust-bright);
	}
	.big-value {
		grid-column: 1;
		grid-row: 2;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.4rem, 2.8vw, 2.1rem);
		color: var(--paper);
		letter-spacing: -0.005em;
		line-height: 1.1;
		word-break: break-word;
	}
	.big-arrow {
		grid-column: 2;
		grid-row: 1 / 3;
		align-self: center;
		color: var(--paper);
		transition: transform 0.3s ease;
	}
	.big-link:hover .big-arrow {
		transform: translateX(6px);
		color: var(--rust-bright);
	}

	/* ─── Address + hours ─── */
	.addr {
		font-style: normal;
		font-size: 0.95rem;
		line-height: 1.6;
	}
	.hours {
		display: grid;
		gap: 0.3rem;
	}
	.hours-row {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		font-size: 0.88rem;
		font-family: var(--font-mono);
		padding: 0.2rem 0;
		border-bottom: 1px dashed rgba(244, 239, 230, 0.12);
	}
	.hours-row dt {
		color: color-mix(in srgb, var(--paper) 80%, transparent);
		letter-spacing: 0.04em;
	}
	.hours-row dd {
		color: var(--paper);
		font-variant-numeric: tabular-nums;
	}

	/* ─── Credentials ─── */
	.cred {
		list-style: none;
		display: grid;
		gap: 0.5rem;
	}
	.cred li {
		font-size: 0.88rem;
		line-height: 1.5;
		color: color-mix(in srgb, var(--paper) 90%, transparent);
		padding-left: 0.9rem;
		position: relative;
	}
	.cred li::before {
		content: '+';
		position: absolute;
		left: 0;
		color: var(--rust-bright);
		font-family: var(--font-mono);
	}

	/* ─── Social ─── */
	.social {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	.social a {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid rgba(244, 239, 230, 0.25);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--paper);
		transition:
			background 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease;
	}
	.social a:hover {
		background: var(--rust);
		border-color: var(--rust);
	}

	/* ─── Big wordmark ─── */
	.mark {
		font-family: var(--font-display);
		font-weight: 900;
		text-transform: uppercase;
		line-height: 0.82;
		letter-spacing: -0.015em;
		font-size: clamp(5rem, 22vw, 18rem);
		color: var(--paper);
		margin-top: clamp(3rem, 6vw, 5rem);
		white-space: nowrap;
		overflow: hidden;
		background:
			linear-gradient(180deg, rgba(244, 239, 230, 0.08) 0%, rgba(244, 239, 230, 0.035) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		border-top: 1px solid rgba(244, 239, 230, 0.15);
		padding-top: clamp(2rem, 4vw, 3.5rem);
	}
	.mark span {
		display: block;
	}

	/* ─── Colophon ─── */
	.colophon {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(244, 239, 230, 0.15);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--paper) 65%, transparent);
	}
	.colophon-right {
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
	}
	.dot {
		opacity: 0.5;
	}

	@media (max-width: 880px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.col {
			padding: 1.75rem 0;
			border-right: none;
			border-bottom: 1px solid rgba(244, 239, 230, 0.15);
		}
		.col:last-child {
			border-bottom: none;
		}
	}
</style>
