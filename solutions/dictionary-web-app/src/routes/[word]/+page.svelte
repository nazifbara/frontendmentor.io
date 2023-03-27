<script lang="ts">
	import type { PageServerData } from './$types';
	import Text from '$lib/components/Text.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let data: PageServerData;

	$: definition = data.definition[0];
	$: phonetic = definition.phonetics.find((p: any) => Boolean(p.audio));

	const playAudio = () => {
		const audio = new Audio(phonetic.audio);
		audio.load();
		audio.play();
	};
	console.log(data.definition[0]);
</script>

<svelte:head>
	<title>
		{definition.word}
	</title>
</svelte:head>

<div class="flex justify-between items-center my-11">
	<div>
		<Text element="h1" variant="headingL">
			{definition.word}
		</Text>
		<Text element="span" variant="headingM" color="primary">{definition.phonetic ?? ''}</Text>
	</div>

	{#if phonetic}
		<button class="player" on:click={playAudio}><Icon name="play" /></button>
	{/if}
</div>

{#each definition.meanings as meaning}
	<section class="my-10">
		<div class="mb-9">
			<span
				class="flex gap-5 items-center after:content-[''] after:flex-1 after:block after:h-[1px] after:bg-border after:dark:bg-border-dark"
			>
				<Text element="h2" variant="headingM">{meaning.partOfSpeech}</Text>
			</span>
		</div>
		<div class="mb-6">
			<Text element="h3" variant="headingS" color="text2">Meaning</Text>
		</div>
		<ul class="grid gap-3">
			{#each meaning.definitions as definition}
				<li
					class="grid grid-cols-[auto_1fr] gap-5 pl-5 before:text-primary before:font-bold before:content-['\2022']"
				>
					<div class={`grid gap-3`}>
						<span>{definition.definition}</span>
						{#if definition.example}
							<span class="text-text2">
								"{definition.example}"
							</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>

		{#if meaning.synonyms[0]}
			<div class="my-10 flex gap-5">
				<Text element="h3" variant="headingS" color="text2">Synonyms</Text>
				<p class="text-primary ">
					{#each meaning.synonyms as synonym, i}
						<a class="hover:underline" href="/{synonym}">{synonym}</a>{i + 1 ===
						meaning.synonyms.length
							? ''
							: ', '}
					{/each}
				</p>
			</div>
		{/if}
	</section>
{/each}

<hr class="border-border mb-5 dark:border-border-dark" />

<div class="flex gap-5">
	<Text element="h3" variant="headingS" color="text2" underline>Source</Text>
	<a
		target="_blank"
		rel="noreferrer"
		href={definition.sourceUrls[0]}
		class="underline flex items-center gap-2"
	>
		{definition.sourceUrls[0]}
		<Icon name="newWindow" />
	</a>
</div>

<style lang="postcss">
	.player:hover :global(svg circle) {
		opacity: 1;
	}

	.player:hover :global(svg path) {
		fill: white;
	}
</style>
