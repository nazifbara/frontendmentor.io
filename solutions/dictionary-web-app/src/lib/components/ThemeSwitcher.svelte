<script lang="ts">
	import Icon from './Icon.svelte';
	import { theme } from '$lib/stores';

	$: checked = $theme === 'dark';
</script>

<div class="flex gap-2.5 md:gap-5 items-center cursor-pointer switcher">
	<label
		on:click|preventDefault={theme.toggle}
		on:keydown|preventDefault
		class="w-10 h-5 rounded-xl relative inline-block overflow-hidden"
	>
		<input {checked} class="opacity-0 w-0 h-0" type="checkbox" />
		<span
			class={`
      bg-text2
        block 
        absolute 
        inset-0
        cursor-pointer
        before:content-['']
        hover:bg-primary
        before:w-3.5 
        before:h-3.5 
      before:bg-body
        before:block 
        before:rounded-full
        before:absolute
        before:bottom-[3px]
        before:top-[3px]
      `}
			class:before:left-[3px]={!checked}
			class:before:right-[3px]={checked}
			class:bg-primary={checked}
		/>
	</label>
	<span class:active-moon={checked}><Icon name="moon" /></span>
</div>

<style lang="postcss">
	.switcher .active-moon :global(path) {
		stroke: theme(colors.primary);
	}
</style>
