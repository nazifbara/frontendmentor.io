<script lang="ts">
	import Heading from './Heading.svelte';

	type Feature = { img: string; title: string; text: string };

	export let features: Feature[] = [];
</script>

<ul class="grid text-center grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-7">
	{#each features as feature}
		<li>
			<article class="grid grid-rows-[110px_25px_auto] justify-items-center justify-between h-full">
				<img src={feature.img} alt="" class="self-center" />
				<Heading as="h2" variant="h3" toUppercase={false}>{feature.title}</Heading>
				<p class="mt-4">{feature.text}</p>
			</article>
		</li>
	{/each}
</ul>
