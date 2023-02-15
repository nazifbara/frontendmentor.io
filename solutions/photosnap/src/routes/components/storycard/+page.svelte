<script lang="ts">
	import StoriesGrid from '$lib/components/StoriesGrid.svelte';

	const stories = [
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			date: 'March 4th 2020',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			date: 'March 4th 2020',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/king-on-africa.jpg',
				mobile: '/assets/stories/mobile/king-on-africa.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/18-days-voyage.jpg',
				mobile: '/assets/stories/mobile/18-days-voyage.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/milky-way.jpg',
				mobile: '/assets/stories/mobile/milky-way.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		},
		{
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
			link: '/#',
			img: {
				desktop: '/assets/stories/desktop/cityscapes.jpg',
				mobile: '/assets/stories/mobile/cityscapes.jpg'
			}
		}
	];
</script>

<StoriesGrid {stories} />
