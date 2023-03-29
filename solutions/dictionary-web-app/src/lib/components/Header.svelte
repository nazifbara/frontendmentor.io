<script lang="ts">
	import Icon from './Icon.svelte';
	import FontSelector from './FontSelector.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header class="py-6 md:py-14">
	<div class="flex justify-between">
		<Icon name="logo" />

		<div class="flex items-center">
			<FontSelector />
			<hr class="h-8 w-[1px] mx-4 border-l border-[#E9E9E9]" />
			<ThemeSwitcher />
		</div>
	</div>
</header>
