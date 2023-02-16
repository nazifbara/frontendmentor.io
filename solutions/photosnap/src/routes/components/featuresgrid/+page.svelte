<script lang="ts">
	import FeatuesGrid from '$lib/components/FeatuesGrid.svelte';
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

<Wrapper as="section">
	<FeatuesGrid {features} />
</Wrapper>
