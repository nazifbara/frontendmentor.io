<script lang="ts">
	export let as = 'div';
</script>

<svelte:element this={as} class="container">
	<slot />
</svelte:element>

<style lang="postcss">
	.container {
		width: min(100% - 1.5rem, 69.375rem);
		margin-inline: auto;
	}

	@media screen(md) {
		.container {
			width: min(100% - 2.5rem, 69.375rem);
		}
	}

	@media screen(xl) {
		.container {
			width: min(100%, 69.375rem);
		}
	}
</style>
