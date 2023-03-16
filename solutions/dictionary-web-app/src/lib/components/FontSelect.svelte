<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<div>
	<button class="flex items-center gap-4 font-bold">
		Sans Serif <Icon name="arrowDown" />
	</button>
	<ul class="hidden">
		<li>Sans Serif</li>
		<li>Serif</li>
		<li>Mono</li>
	</ul>
</div>
