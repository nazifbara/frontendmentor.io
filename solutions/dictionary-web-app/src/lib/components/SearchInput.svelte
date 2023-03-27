<script lang="ts">
	import Icon from './Icon.svelte';

	let word = '';
	let empty = false;
</script>

<section>
	<form
		on:submit={(e) => {
			if (!word) {
				e.preventDefault();
				empty = true;
			}
		}}
		action="/{word}"
		class="relative mb-2"
	>
		<input
			placeholder="Lookup a word..."
			on:blur={() => (empty = false)}
			class={`
      text-base
    bg-body2 
      rounded-2xl 
      font-bold 
      w-full 
      px-6
      py-3.5
      border 
      border-transparent 
      focus:outline-none 
    focus:border-primary
    dark:bg-body2-dark 
    dark:text-text-dark

      md:text-xl
      md:py-4
    `}
			class:border-danger={empty}
			class:focus:border-danger={empty}
			bind:value={word}
		/>
		<button type="submit" class="px-6 absolute -translate-y-1/2 top-1/2 right-0"
			><Icon name="search" /></button
		>
	</form>
	{#if empty}
		<span class="text-danger">Whoops, can't be empty...</span>
	{/if}
</section>
