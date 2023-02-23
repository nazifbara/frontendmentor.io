<script lang="ts">
	export let href: string = '/#';
	export let variant: 'base' | 'menu' = 'base';
</script>

<a
	{href}
	class={`
    uppercase 
    font-bold 
    text-h4
    tracking-[.25em] 
    text-text
    dark:text-textDark
    hover:opacity-30
    transition-opacity
    duration-300
  `}
	on:click
	class:text-p={variant === 'menu'}
>
	<slot />
</a>
