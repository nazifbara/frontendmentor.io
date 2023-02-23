<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export let variant: keyof typeof variants = 'base';
	export let as: 'a' | 'button' = 'button';

	const variants = {
		base: {
			bg: 'bg-bgDark hover:bg-gray dark:bg-bg dark:hover:bg-gray',
			textColor: 'text-textDark hover:text-text dark:text-text',
			decoration: 'no-underline',
			px: 'px-8'
		},
		arrow: {
			bg: 'bg-transparent hover:bg-transparent',
			textColor: 'text-text hover:text-text dark:text-textDark',
			decoration: 'hover:underline',
			px: 'px-0'
		}
	};
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={`
    ${variants[variant].bg} 
    ${variants[variant].textColor} 
    ${variants[variant].decoration} 
    ${variants[variant].px} 
    cursor-pointer
    uppercase
    font-bold 
    text-h4
    tracking-[.25em]
    transition-colors
    duration-300
		inline-block
		text-center
  `}
	on:click
	class:py-3={variant === 'base'}
>
	{#if variant === 'arrow'}
		<div class="grid grid-cols-[repeat(2,_auto)] items-center justify-items-start gap-4">
			<slot />

			<Icon name="arrow" />
		</div>
	{:else}
		<slot />
	{/if}
</svelte:element>
