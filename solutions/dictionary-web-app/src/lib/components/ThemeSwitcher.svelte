<script lang="ts">
	import Icon from './Icon.svelte';

	let checked = false;
</script>

<div class="flex gap-2.5 md:gap-5 items-center cursor-pointer">
	<label
		on:click|preventDefault
		on:keydown|preventDefault
		class="w-10 h-5 rounded-xl relative inline-block overflow-hidden"
	>
		<input {checked} class="opacity-0 w-0 h-0" type="checkbox" />
		<span
			class={`
      bg-text2
        block absolute 
        inset-0
        cursor-pointer
        before:content-[''] 
        before:w-3.5 
        before:h-3.5 
      before:bg-body
        before:block 
        before:rounded-full
        before:absolute
        before:bottom-[3px]
        before:top-[3px]
        before:left-[3px]
      `}
		/>
	</label>
	<Icon name="moon" />
</div>
