<script lang="ts">
	import { page } from '$app/stores';

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

<h1>
	{title[$page.status]}
</h1>

<p>{$page.error?.message}</p>
