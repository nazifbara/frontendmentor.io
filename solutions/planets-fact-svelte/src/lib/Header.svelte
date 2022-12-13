<script lang="ts">
	import { page } from '$app/stores';
	import NavMenu from './NavMenu.svelte';
	import data from '../data.json';
</script>

<header class="header">
	<span class="appName">the planets</span>
	<NavMenu />
	<nav class="nav">
		{#each data as planet}
			<a
				href="/planet/{planet.name.toLowerCase()}"
				style:--planet-color={planet.color}
				class:active={planet.name.toLowerCase() === $page.params.name}
				class="nav-item"
			>
				{planet.name}
			</a>
		{/each}
	</nav>
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

	.nav {
		display: none;
		gap: 2.063rem;
		text-transform: uppercase;
		font-weight: var(--fw-bold);
		letter-spacing: 0.063rem;
	}

	.nav-item {
		opacity: var(--opacity-50);
		border-top: 4px solid transparent;
		padding-block: 0.875rem 0;
	}

	.nav-item.active,
	.nav-item:hover {
		opacity: 1;
		border-color: var(--planet-color);
	}

	@media (min-width: 48rem) {
		.header {
			height: 10rem;
			flex-direction: column;
			justify-content: space-around;
		}
		.nav {
			display: flex;
		}
	}

	@media (min-width: 69.375rem) {
		.header {
			height: 5.313rem;
			/* align-items: stretch; */
			flex-direction: row;
			justify-content: space-between;
			padding-inline: 2rem;
		}

		.nav {
			height: 100%;
		}

		.nav-item {
			padding-block: 33px;
		}
	}
</style>
