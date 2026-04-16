<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/content';
	import { jsonLdScript } from '$lib/schema';

	let { children } = $props();

	const structuredData = jsonLdScript({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: site.name,
		description: site.metaDescription,
		url: site.url,
		telephone: site.phone,
		address: {
			'@type': 'PostalAddress',
			streetAddress: site.address.street,
			addressLocality: site.address.city,
			addressRegion: site.address.state,
			postalCode: site.address.zip
		},
		openingHoursSpecification: site.hours
			.filter((h) => h.time.toLowerCase() !== 'closed')
			.map((h) => ({
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: h.days,
				opens: h.time.split('–')[0]?.trim(),
				closes: h.time.split('–')[1]?.trim()
			})),
		sameAs: site.social.map((s) => s.href)
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- SEO -->
	<title>{site.metaTitle}</title>
	<meta name="description" content={site.metaDescription} />
	<link rel="canonical" href={site.url} />

	<!-- Open Graph -->
	<meta property="og:title" content={site.ogTitle} />
	<meta property="og:description" content={site.ogDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={site.ogImage} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.ogTitle} />
	<meta name="twitter:description" content={site.ogDescription} />
	<meta name="twitter:image" content={site.ogImage} />

	<!-- Structured Data (JSON-LD from our own config, not user input) -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html structuredData}
</svelte:head>

<a class="skip-to-content" href="#main">Skip to content</a>

{@render children()}
