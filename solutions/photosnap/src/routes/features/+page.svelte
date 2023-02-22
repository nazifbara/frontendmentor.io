<script lang="ts">
	import BetaBanner from '$lib/components/BetaBanner.svelte';
	import FeatuesGrid from '$lib/components/FeatuesGrid.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ImageText from '$lib/components/ImageText.svelte';
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';

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
		},
		{
			title: 'Custom Domain',
			text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
			img: '/assets/features/desktop/custom-domain.svg'
		},
		{
			title: 'Boost Your Exposure',
			text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
			img: '/assets/features/desktop/boost-exposure.svg'
		},
		{
			title: 'Drag & Drop Image',
			text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
			img: '/assets/features/desktop/drag-drop.svg'
		}
	];
</script>

<section>
	<ImageText
		dark
		imgPosition="right"
		picture={{
			mobile: '/assets/features/mobile/hero.jpg',
			tablet: '/assets/features/tablet/hero.jpg',
			desktop: '/assets/features/desktop/hero.jpg'
		}}
	>
		<div slot="heading">
			<Heading>Features</Heading>
		</div>
		<p slot="paragraph">
			We make sure all of our features are designed to be loved by every aspiring and even
			professional photograpers who wanted to share their stories.
		</p>
	</ImageText>
</section>

<SectionWrapper>
	<Wrapper>
		<FeatuesGrid {features} />
	</Wrapper>
</SectionWrapper>

<BetaBanner />
