<script lang="ts">
	import ImageText from '$lib/components/ImageText.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import StoriesGrid from '$lib/components/StoriesGrid.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import FeatuesGrid from '$lib/components/FeatuesGrid.svelte';
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';

	const stories1 = [
		{
			dark: true,
			imgPosition: 'right',
			picture: {
				mobile: '/assets/home/mobile/create-and-share.jpg',
				tablet: '/assets/home/tablet/create-and-share.jpg',
				desktop: '/assets/home/desktop/create-and-share.jpg'
			},
			heading: 'Create and share your photo Stories',
			headingAs: 'h1',
			paragraph: `Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.`,
			href: '/#',
			linkText: 'Get an invite'
		},
		{
			dark: false,
			imgPosition: 'left',
			picture: {
				mobile: '/assets/home/mobile/beautiful-stories.jpg',
				tablet: '/assets/home/tablet/beautiful-stories.jpg',
				desktop: '/assets/home/desktop/beautiful-stories.jpg'
			},
			heading: 'Beautiful stories every time',
			headingAs: 'h2',
			paragraph: `We provide design templates to ensure your stories look terrific. Easily add photos, text, embed
		maps and media from other networks. Then share your story with everyone.`,
			href: '/stories',
			linkText: 'View the stories'
		},
		{
			dark: false,
			imgPosition: 'right',
			picture: {
				mobile: '/assets/home/mobile/designed-for-everyone.jpg',
				tablet: '/assets/home/tablet/designed-for-everyone.jpg',
				desktop: '/assets/home/desktop/designed-for-everyone.jpg'
			},
			heading: 'Designed for everyone',
			headingAs: 'h2',
			paragraph: `Photosnap can help you create stories that resonate with your audience. Our tool is designed for
		photographers of all levels, brands, businesses you name it.`,
			href: '/stories',
			linkText: 'View the stories'
		}
	];

	const stories2 = [
		{
			title: 'The Mountains',
			author: 'John Appleseed',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/mountains.jpg',
				mobile: '/assets/stories/mobile/mountains.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		},
		{
			title: '18 Days Voyage',
			author: 'Alexei Borodin',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/18-days-voyage.jpg',
				mobile: '/assets/stories/mobile/18-days-voyage.jpg'
			}
		},
		{
			title: 'Architecturals',
			author: 'Samantha Brooke',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/architecturals.jpg',
				mobile: '/assets/stories/mobile/architecturals.jpg'
			}
		}
	];

	const features = [
		{
			title: '100% Responsive',
			text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
			img: '/assets/features/desktop/responsive.svg'
		},
		{
			title: 'No Photo Upload Limit',
			text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
			img: '/assets/features/desktop/no-limit.svg'
		},
		{
			title: 'Available to Embed',
			text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
			img: '/assets/features/desktop/embed.svg'
		}
	];
</script>

<section>
	{#each stories1 as { dark, imgPosition, picture, heading, headingAs, href, paragraph, linkText }}
		<ImageText {dark} {imgPosition} {picture}>
			<div slot="heading">
				<Heading as={headingAs} variant="h1">{heading}</Heading>
			</div>

			<p slot="paragraph">
				{paragraph}
			</p>

			<span slot="link">
				<Button as="a" {href} variant="arrow">{linkText}</Button>
			</span>
		</ImageText>
	{/each}
</section>

<section>
	<StoriesGrid stories={stories2} />
</section>

<Wrapper>
	<SectionWrapper>
		<FeatuesGrid {features} />
	</SectionWrapper>
</Wrapper>
