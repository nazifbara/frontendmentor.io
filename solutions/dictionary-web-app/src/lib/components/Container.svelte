<script lang="ts">
	export let as = 'div';
</script>

<svelte:element
	this={as}
	class={`
    px-6
    mx-auto
    w-full
    md:w-[min(46rem,_100%)]
    md:px-0
`}
>
	<slot />
</svelte:element>
