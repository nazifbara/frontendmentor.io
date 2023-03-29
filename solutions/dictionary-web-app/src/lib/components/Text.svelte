<script lang="ts">
	export let element: string = 'p';
	export let variant = 'bodym';
	export let color = 'text';
	export let underline = false;

	let variantMap: { [any: string]: string } = {
		headingL: 'text-[2rem] md:text-[4rem] text-bold',
		headingM: 'text-lg md:text-2xl font-sans',
		headingS: 'text-base md:text-xl',
		bodyM: 'text-[0.938rem] md:text-lg',
		bodyS: 'text-sm'
	};

	let colorMap: { [any: string]: string } = {
		text: 'text-text dark:text-text-dark',
		text2: 'text-text2',
		primary: 'text-primary'
	};
</script>

<svelte:element
	this={element}
	class={`${variantMap[variant]} ${colorMap[color]} ${underline ? 'underline' : ''}`}
>
	<slot />
</svelte:element>
