<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Container from '$lib/components/Container.svelte';
	import { font as storeFont } from '$lib/stores';
</script>

<div class={`${$storeFont}`}>
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
