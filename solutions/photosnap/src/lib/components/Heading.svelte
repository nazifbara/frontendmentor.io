<script lang="ts">
	type HeadingType = keyof typeof variants;

	export let variant: HeadingType = 'h1';
	export let as: string | null = null;

	const variants = {
		h1: {
			size: 'text-h1',
			lineHeight: 'leading-[1.2]'
		},
		h2: {
			size: 'text-h2',
			lineHeight: 'leading-[1.2]'
		},
		h3: {
			size: 'text-h3',
			lineHeight: 'leading-[1.2]'
		},
		h4: {
			size: 'text-h4',
			lineHeight: 'leading-[1.2]'
		}
	};
</script>

<svelte:element
	this={as ?? variant}
	class={`${variants[variant].size} ${variants[variant].lineHeight} text-text dark:text-textDark`}
>
	<slot />
</svelte:element>
