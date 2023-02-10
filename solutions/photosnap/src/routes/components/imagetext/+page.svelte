<script>
	import ImageText from '$lib/components/ImageText.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<ImageText
	dark
	imgPosition="right"
	picture={{
		mobile: '/assets/home/mobile/create-and-share.jpg',
		tablet: '/assets/home/tablet/create-and-share.jpg',
		desktop: '/assets/home/desktop/create-and-share.jpg'
	}}
>
	<div slot="heading">
		<Heading as="h2" variant="h1">Create and share your photo Stories.</Heading>
	</div>

	<p slot="paragraph">
		Photosnap is a platform for photographers and visual storytellers. We make it easy to share
		photos, tell stories and connect with others.
	</p>

	<span slot="link">
		<Button as="a" href="/#" variant="arrow">Get an invite</Button>
	</span>
</ImageText>

<ImageText
	picture={{
		mobile: '/assets/home/mobile/beautiful-stories.jpg',
		tablet: '/assets/home/tablet/beautiful-stories.jpg',
		desktop: '/assets/home/desktop/beautiful-stories.jpg'
	}}
>
	<div slot="heading">
		<Heading as="h2" variant="h1">Beautiful stories every time</Heading>
	</div>

	<p slot="paragraph">
		We provide design templates to ensure your stories look terrific. Easily add photos, text, embed
		maps and media from other networks. Then share your story with everyone.
	</p>

	<span slot="link">
		<Button as="a" href="/#" variant="arrow">View the stories</Button>
	</span>
</ImageText>
