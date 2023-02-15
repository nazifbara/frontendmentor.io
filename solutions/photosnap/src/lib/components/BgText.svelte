<script>
	import Button from './Button.svelte';
	import Heading from './Heading.svelte';
</script>

<article class="dark items-center relative overflow-hidden">
	<picture>
		<source media="(min-width:850px)" srcset="/assets/stories/desktop/moon-of-appalacia.jpg" />
		<source media="(min-width:500px)" srcset="/assets/stories/tablet/moon-of-appalacia.jpg" />
		<img class="w-full" src="/assets/stories/mobile/moon-of-appalacia.jpg" alt="" />
	</picture>

	<div
		class="dark:bg-bgDark grid justify-items-start gap-4 px-7 py-10 sm:p-0 sm:ml-11 sm:dark:bg-transparent sm:w-[24.375rem] lg:ml-28"
	>
		<Heading as="span" variant="h4">Last month's featured story</Heading>
		<Heading>Hazy full moon of Appalachia</Heading>
		<span class="text-textBaseDark text-[0.813rem]">
			March 2nd 2020 <b class="text-textDark">by John Appleseed</b>
		</span>
		<p>
			The dissected plateau area, while not actually made up of geological mountains, is popularly
			called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are
			not high, the terrain is extremely rugged.
		</p>
		<Button as="a" href="/#" variant="arrow">Read the story</Button>
	</div>
</article>

<style lang="postcss">
	article {
		display: grid;
	}

	@media screen(sm) {
		article {
			display: grid;
			grid-template-areas: 'stack';
		}

		article > * {
			grid-area: stack;
		}
	}

	:global(a::before) {
		content: '';
		position: absolute;
		display: block;
		left: 0;
		bottom: 0;
		width: 0;
		height: 0;
		border-radius: 50%;
		transition: box-shadow 0.3s ease-out;
		z-index: 1;
		overflow: hidden;
	}

	:global(a:hover::before) {
		box-shadow: 0 0 150px 150px hsla(28, 100%, 79%, 0.3), 0 0 200px 200px hsla(329, 36%, 59%, 0.35),
			0 0 350px 350px hsla(229, 100%, 68%, 0.3);
	}
</style>
