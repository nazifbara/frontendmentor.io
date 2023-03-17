<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Container from '$lib/components/Container.svelte';
	import { font as storeFont } from '$lib/stores';
	import { theme } from '$lib/stores';
</script>

<div class={`${$theme}`}>
	<div
		class={`${$storeFont} min-w-screen min-h-screen bg-body text-text dark:bg-body-dark dark:text-text-dark`}
	>
		<Container>
			<Header />

			<main>
				<slot />
			</main>
		</Container>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		font-size: theme(fontSize.body);
	}
</style>
