<script>
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import NavLink from './NavLink.svelte';
	import Wrapper from './Wrapper.svelte';
	import Button from './Button.svelte';
</script>

<footer class="dark bg-bgDark py-14">
	<Wrapper>
		<div
			class={`
        grid 
        gap-8 
        justify-items-center
        items-start
        md:grid-cols-2 
        md:grid-rows-[repeat(3,_auto)] 
        md:justify-items-start
        lg:grid-cols-[auto_auto_1fr]
        lg:gap-x-24
      `}
		>
			<Logo />
			<nav class="flex gap-3 md:col-span-1 md:row-start-3 md:row-end-4">
				<a href="/#">
					<Icon name="facebook" />
				</a>
				<a href="/#">
					<Icon name="youtube" />
				</a>
				<a href="/#">
					<Icon name="twitter" />
				</a>
				<a href="/#">
					<Icon name="pinterest" />
				</a>
				<a href="/#">
					<Icon name="instagram" />
				</a>
			</nav>

			<nav
				class={`
          grid 
          justify-items-center 
          gap-5 
          py-8 
          md:grid-flow-col 
          md:py-0 
          md:col-span-1 
          md:row-start-2 
          md:row-end-3 
          lg:col-start-2 
          lg:row-start-1
          lg:row-span-3
          lg:grid-flow-row
          lg:justify-items-start
        `}
			>
				{#each [null, 'stories', 'features', 'pricing'] as link}
					<NavLink href="/{link ?? ''}">{link ?? 'home'}</NavLink>
				{/each}
			</nav>
			<span class="md:justify-self-end">
				<Button as="a" variant="arrow" href="/#">get an invite</Button>
			</span>
			<p class="md:row-start-3 md:row-span-1 md:justify-self-end lg:col-start-3">
				Copyright 2019. All Rights Reserved
			</p>
		</div>
	</Wrapper>
</footer>
