<script>
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	import Wrapper from './Wrapper.svelte';

	const navlinks = [
		{ href: '/stories', text: 'stories' },
		{ href: '/features', text: 'features' },
		{ href: '/pricing', text: 'pricing' }
	];

	let isMenuOpen = false;
</script>

<header class="relative">
	<Wrapper as="nav">
		<div class="flex justify-between items-center h-[4.5rem] bg-bg">
			<a href="/"><Logo /></a>

			<div class="gap-9 hidden md:flex">
				{#each navlinks as { href, text }}
					<NavLink {href}>{text}</NavLink>
				{/each}
			</div>

			<div class="hidden md:block"><Button as="a" href="/#">get an invite</Button></div>

			<button on:click={() => (isMenuOpen = !isMenuOpen)} class="py-4 md:hidden">
				{#if isMenuOpen}
					<Icon name="close" />
				{:else}
					<Icon name="menu" />
				{/if}
			</button>
		</div>
	</Wrapper>

	{#if isMenuOpen}
		<nav
			transition:fade={{ easing: cubicOut }}
			class="absolute py-8 top-full inset-x-0 bg-bg px-2 md:hidden"
		>
			<div class="grid text-center justify-items-stretch max-w-sm mx-auto gap-5">
				{#each navlinks as { href, text }}
					<NavLink {href} variant="menu">{text}</NavLink>
				{/each}
				<hr class="opacity-25" />
				<Button as="a" href="/#">get an invite</Button>
			</div>
		</nav>
	{/if}
</header>
