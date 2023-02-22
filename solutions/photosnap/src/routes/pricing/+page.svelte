<script>
	import BetaBanner from '$lib/components/BetaBanner.svelte';
	import ComparativeTable from '$lib/components/ComparativeTable.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ImageText from '$lib/components/ImageText.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
</script>

<section>
	<ImageText
		dark={true}
		imgPosition="right"
		picture={{
			mobile: '/assets/pricing/mobile/hero.jpg',
			tablet: '/assets/pricing/tablet/hero.jpg',
			desktop: '/assets/pricing/desktop/hero.jpg'
		}}
	>
		<div slot="heading">
			<Heading>Pricing</Heading>
		</div>

		<p slot="paragraph">
			Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's
			the simple way to create and share your photos.
		</p>
	</ImageText>
</section>

<Wrapper>
	<SectionWrapper>
		<Pricing />
	</SectionWrapper>

	<SectionWrapper>
		<div class="text-center mb-12"><Heading as="h2" variant="h1">Compare</Heading></div>
		<ComparativeTable />
	</SectionWrapper>
</Wrapper>

<BetaBanner />
