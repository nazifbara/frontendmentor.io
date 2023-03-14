<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let font = 'font-sans';
</script>

<div class={font}>
	<Header />

	<main>
		<slot />
	</main>
</div>
