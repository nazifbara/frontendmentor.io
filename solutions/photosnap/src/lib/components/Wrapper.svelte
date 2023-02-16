<script lang="ts">
	export let as = 'div';
</script>

<svelte:element this={as} class="wrapper">
	<slot />
</svelte:element>

<style lang="postcss">
	.wrapper {
		width: min(100% - 1.5rem, 69.375rem);
		margin-inline: auto;
	}

	@media screen(sm) {
		.wrapper {
			width: min(100% - 2.5rem, 69.375rem);
		}
	}

	@media screen(xl) {
		.wrapper {
			width: min(100%, 69.375rem);
		}
	}
</style>
