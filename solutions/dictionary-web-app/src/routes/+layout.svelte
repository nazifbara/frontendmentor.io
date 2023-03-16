<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Container from '$lib/components/Container.svelte';

	let font = 'font-sans';
</script>

<div class={`${font}`}>
	<Container>
		<Header />

		<main>
			<slot />
		</main>
	</Container>
</div>

<style lang="postcss">
	:global(body) {
		font-size: theme(fontSize.body);
	}
</style>
