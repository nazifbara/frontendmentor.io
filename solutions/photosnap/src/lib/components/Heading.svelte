<script lang="ts">
	type HeadingType = keyof typeof variants;

	export let type: HeadingType = 'h1';
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
	this={as ?? type}
	class={`${variants[type].size} ${variants[type].lineHeight} text-text dark:text-textDark`}
>
	<slot />
</svelte:element>
