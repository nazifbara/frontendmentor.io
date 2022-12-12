<script lang="ts">
	import NavMenu from './NavMenu.svelte';
</script>

<header class="header">
	<span class="appName">the planets</span>
	<NavMenu />
</header>

<style>
	.header {
		height: 4.25rem;
		border-bottom: 1px solid hsl(0 0% 100% / var(--opacity-20));
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 1.5rem;
	}

	.appName {
		font-size: 1.75rem;
		font-family: var(--ff-2);
		font-weight: var(--fw-semibold);
		letter-spacing: -0.0656rem;
		text-transform: uppercase;
	}
</style>
