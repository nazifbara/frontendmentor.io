<script>
	import Icon from './Icon.svelte';
</script>

<span class="logo"><Icon name="logo" /></span>

<style lang="postcss">
	:global(.dark .logo svg g path:first-child) {
		fill: theme(colors.textDark);
	}

	:global(.dark .logo svg g) {
		stroke: theme(colors.text);
	}
</style>
