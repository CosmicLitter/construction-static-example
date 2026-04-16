<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Highlights from '$lib/components/Highlights.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Team from '$lib/components/Team.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />

<main id="main">
	<Hero />
	<Highlights />
	<Projects />
	<Services />
	<Process />
	<About />
	<Testimonials />
	<Team />
	<Faq />
	<Footer />
</main>
