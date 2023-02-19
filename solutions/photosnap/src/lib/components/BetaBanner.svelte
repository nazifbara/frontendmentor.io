<script lang="ts">
	import Button from './Button.svelte';
	import Heading from './Heading.svelte';
	import Wrapper from './Wrapper.svelte';
</script>

<div class="dark grid">
	<picture class="col-span-full row-span-full">
		<source media="(min-width:1110px)" srcset="/assets/shared/desktop/bg-beta.jpg" />
		<source media="(min-width:768px)" srcset="/assets/shared/tablet/bg-beta.jpg" />
		<img class="w-full" src="/assets/shared/mobile/bg-beta.jpg" alt="" />
	</picture>

	<div class="col-span-full row-span-full grid items-center relative">
		<Wrapper>
			<div
				class={`
          grid
          gap-4
          md:grid-flow-col
          md:justify-between
          md:items-center

          before:content-['']
          before:absolute
          before:bg-mainGradientRight
          before:top-0
          before:w-[40%]
          before:h-[0.375rem]

          md:before:bg-mainGradientTop
          md:before:w-[0.375rem]
          md:before:h-full
          md:before:left-0
        `}
			>
				<div class="max-w-[400px]">
					<Heading as="h2" variant="h1">We're in beta. Get your invite today!</Heading>
				</div>
				<div>
					<Button variant="arrow">get an invite</Button>
				</div>
			</div>
		</Wrapper>
	</div>
</div>
