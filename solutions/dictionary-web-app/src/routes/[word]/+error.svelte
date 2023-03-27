<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';

	const title: { [any: number]: string } = {
		404: 'No Definitions Found',
		500: 'Internal Error'
	};
</script>

<svelte:head>
	<title>
		{title[$page.status]}
	</title>
</svelte:head>

<section class="text-center mt-32">
	<div class="text-[4rem] mb-4">{$page.status === 404 ? '😕' : '😵'}</div>
	<h1 class="text-xl font-bold mb-6">
		{title[$page.status]}
	</h1>

	<Text element="p" color="text2">{$page.error?.message}</Text>
</section>
