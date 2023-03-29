<script lang="ts">
	import Icon from './Icon.svelte';
	import { font as storeFont } from '$lib/stores';

	let opened = false;

	let open = () => (opened = true);
	let close = () => (opened = false);

	$: selectedLabel = { 'font-sans': 'Sans Serif', 'font-serif': 'Serif', 'font-mono': 'Mono' }[
		$storeFont
	];
</script>

<div class="relative">
	<button on:click={open} class="flex items-center gap-4 font-bold">
		{selectedLabel}
		<Icon name="arrowDown" />
	</button>
	{#if opened}
		<button on:click={close} class="fixed inset-0 z-10 cursor-default" />

		<ul
			class={`
				z-20
        flex 
        flex-col 
        gap-2 
        p-6 
        shadow-[0px_5px_30px_rgba(0,_0,_0,_0.1)]
				bg-body
        w-[11.438rem] 
        h-[9.5rem] 
        rounded-2xl 
        absolute 
        -left-12
        top-[calc(100%_+_1rem)]

			dark:bg-body2-dark
				dark:shadow-[0px_5px_30px_#A445ED]
      `}
		>
			{#each [{ label: 'Sans Serif', font: 'font-sans' }, { label: 'Serif', font: 'font-serif' }, { label: 'Mono', font: 'font-mono' }] as font}
				<li class={`${font.font}`} class:font-bold={selectedLabel === font.label}>
					<button
						class="hover:text-primary"
						on:click={() => {
							storeFont.use(font.font);
							close();
						}}>{font.label}</button
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
