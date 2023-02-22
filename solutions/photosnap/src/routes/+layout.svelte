<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Photosnap</title>
</svelte:head>

<div class="max-w-[90rem] mx-auto">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss">
	:global(body) {
		font-family: theme(fontFamily.sans);
		font-weight: theme(fontWeight.regular);
		font-size: theme(fontSize.p);
		color: theme(colors.textBase);
	}

	:global(.dark svg g) {
		stroke: theme(colors.textDark);
	}

	:global(.dark :is(p, span)) {
		color: theme(colors.textBaseDark);
	}
</style>
