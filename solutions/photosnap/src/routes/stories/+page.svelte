<script lang="ts">
	import BgText from '$lib/components/BgText.svelte';
	import StoriesGrid from '$lib/components/StoriesGrid.svelte';

	const stories = [
		{
			title: 'The Mountains',
			author: 'John Appleseed',
			date: 'April 16th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/mountains.jpg',
				mobile: '/assets/stories/mobile/mountains.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			date: 'April 14th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		},
		{
			title: '18 Days Voyage',
			author: 'Alexei Borodin',
			date: 'April 11th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/18-days-voyage.jpg',
				mobile: '/assets/stories/mobile/18-days-voyage.jpg'
			}
		},
		{
			title: 'Architecturals',
			author: 'Samantha Brooke',
			date: 'April 9th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/architecturals.jpg',
				mobile: '/assets/stories/mobile/architecturals.jpg'
			}
		},
		{
			title: 'World Tour 2019',
			author: 'Timothy Wagner',
			date: 'April 7th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/world-tour.jpg',
				mobile: '/assets/stories/mobile/world-tour.jpg'
			}
		},
		{
			title: 'Unforeseen Corners',
			author: 'William Malcolm',
			date: 'April 3th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/unforeseen-corners.jpg',
				mobile: '/assets/stories/mobile/unforeseen-corners.jpg'
			}
		},
		{
			title: 'King on Africa: Part II',
			author: 'Tim Hillenburg',
			date: 'March 29th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/king-on-africa.jpg',
				mobile: '/assets/stories/mobile/king-on-africa.jpg'
			}
		},
		{
			title: 'The Trip to Nowhere',
			author: 'Felicia Rourke',
			date: 'March 21st 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/trip-to-nowhere.jpg',
				mobile: '/assets/stories/mobile/trip-to-nowhere.jpg'
			}
		},
		{
			title: 'Rage of The Sea',
			author: 'Mohammed Abdul',
			date: 'March 19th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/rage-of-the-sea.jpg',
				mobile: '/assets/stories/mobile/rage-of-the-sea.jpg'
			}
		},
		{
			title: 'Running Free',
			author: 'Michelle',
			date: 'March 16th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/running-free.jpg',
				mobile: '/assets/stories/mobile/running-free.jpg'
			}
		},
		{
			title: 'Behind the Waves',
			author: 'Lamarr Wilson',
			date: 'March 11th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/behind-the-waves.jpg',
				mobile: '/assets/stories/mobile/behind-the-waves.jpg'
			}
		},
		{
			title: 'Calm Waters',
			author: 'Samantha Brooke',
			date: 'March 9th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/calm-waters.jpg',
				mobile: '/assets/stories/mobile/calm-waters.jpg'
			}
		},
		{
			title: 'The Milky Way',
			author: 'Benjamin Cruz',
			date: 'March 5th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/milky-way.jpg',
				mobile: '/assets/stories/mobile/milky-way.jpg'
			}
		},
		{
			title: 'Night at The Dark Forest',
			author: 'Mohammed Abdul',
			date: 'March 4th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/dark-forest.jpg',
				mobile: '/assets/stories/mobile/dark-forest.jpg'
			}
		},
		{
			title: 'Somwarpet’s Beauty',
			author: 'Michelle',
			date: 'March 1st 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/somwarpet.jpg',
				mobile: '/assets/stories/mobile/somwarpet.jpg'
			}
		},
		{
			title: 'Land of Dreams',
			author: 'William Malcolm',
			date: 'February 25th 2020',
			link: '/stories',
			img: {
				desktop: '/assets/stories/desktop/land-of-dreams.jpg',
				mobile: '/assets/stories/mobile/land-of-dreams.jpg'
			}
		}
	];
</script>

<section>
	<BgText />
</section>

<section>
	<StoriesGrid {stories} />
</section>
