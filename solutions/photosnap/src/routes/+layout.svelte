<script>
	import '../app.css';
</script>

<slot />

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

	:global(.dark :is(p)) {
		color: theme(colors.textBaseDark);
	}
</style>
