<script>
	import Heading from '$lib/components/Heading.svelte';
</script>

<div>
	<Heading type="h1">H1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	<Heading type="h2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	<Heading type="h3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	<Heading type="h4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
</div>

<div class="dark">
	<div class="dark:bg-bgDark">
		<Heading type="h1">H1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
		<Heading type="h2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
		<Heading type="h3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
		<Heading type="h4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Heading>
	</div>
</div>
