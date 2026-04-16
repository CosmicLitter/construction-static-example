<script lang="ts">
	import { site } from '$lib/content';
	import { fadeIn } from '$lib/fadeIn';
</script>

<main id="main">
	<section>
		<div class="section-inner" style="text-align: center; padding-top: 4rem;">
			<p class="section-label fade-in" {@attach fadeIn}>{site.location}</p>
			<h1 class="section-title fade-in" {@attach fadeIn}>
				{site.heroTitle}
			</h1>
			<p class="section-intro fade-in" {@attach fadeIn} style="margin-inline: auto;">
				{site.heroDescription}
			</p>
			<p class="fade-in" {@attach fadeIn} style="font-size: 0.85rem; color: var(--text-light);">
				{site.hoursShort}
			</p>
		</div>
	</section>
</main>
