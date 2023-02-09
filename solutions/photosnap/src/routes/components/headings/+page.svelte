<script>
	import Heading from '$lib/components/Heading.svelte';
</script>

<div>
	<Heading variant="h1">H1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	<Heading variant="h2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	<Heading variant="h3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	<Heading variant="h4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
</div>

<div class="dark">
	<div class="dark:bg-bgDark">
		<Heading variant="h1">H1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
		<Heading variant="h2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
		<Heading variant="h3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
		<Heading variant="h4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	</div>
</div>
