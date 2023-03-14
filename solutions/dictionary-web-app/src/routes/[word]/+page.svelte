<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const definition = data.definition[0];
</script>

<h1>{definition.word}</h1>
