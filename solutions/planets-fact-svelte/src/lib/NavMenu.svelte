<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from './Icon.svelte';
	import data from '../data.json';

	let opened = false;
</script>

<button class:opened on:click={() => (opened = !opened)}><Icon name="hamburger" /></button>

{#if opened}
	<nav transition:fade={{ easing: cubicOut }} class="nav-menu">
		{#each data as planet}
			<a href={planet.name.toLowerCase()}>
				<span>
					<span style:background-color={planet.color} class="circle" />
					{planet.name}
				</span>

				<Icon name="chevron" />
			</a>
		{/each}
	</nav>
{/if}

<style>
	.circle {
		width: 20px;
		height: 20px;
		display: block;
		border-radius: 50%;
	}

	.opened {
		opacity: var(--opacity-50);
	}

	.nav-menu {
		padding-top: 1.25rem;
		position: fixed;
		background-color: var(--bg-body);
		top: 4.25rem;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2;
		padding-inline: 1.5rem;
		font-size: var(--fs-h4-md);
		font-weight: var(--fw-bold);
		letter-spacing: 0.085rem;
		text-transform: uppercase;
	}

	.nav-menu > a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 4.063rem;
	}

	.nav-menu > a:not(:last-child) {
		border-bottom: 1px solid hsl(0 0% 100% / var(--opacity-20));
	}

	.nav-menu a > span {
		display: flex;
		gap: 1.563rem;
		align-items: center;
		line-height: 1.78;
	}
</style>
