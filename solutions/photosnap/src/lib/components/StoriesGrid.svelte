<script lang="ts">
	import Heading from './Heading.svelte';
	import Icon from './Icon.svelte';

	type Story = {
		title: string;
		author: string;
		date?: string;
		link: string;
		img: { desktop: string; mobile: string };
	};

	export let stories: Story[] = [];
</script>

<ul class="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))]">
	{#each stories as story}
		<li>
			<a
				href={story.link}
				class={`
        grid
        relative
        transition-transform
        duration-250
        before:content-['']
        before:block 
        before:bg-storyGradient
        before:absolute
        before:inset-0
        before:z-0

        after:content-['']
        after:transition-opacity
        after:duration-250
        after:block
        after:opacity-0 
        after:bg-mainGradientTop
        after:absolute
        after:top-full
        after:w-full 
        after:h-2
        
        hover:after:opacity-100
        hover:-translate-y-6
    `}
			>
				<picture class="col-span-full row-span-full">
					<source media="(min-width:400px)" srcset={story.img.desktop} />
					<img class="w-full" src={story.img.mobile} alt="" />
				</picture>

				<div class="z-[2] dark text-textDark col-span-full row-span-full mt-auto p-10">
					{#if story.date}
						<span class="text-[0.813rem]">{story.date}</span>
					{/if}
					<Heading as="h2" variant="h3" toUppercase={false}>{story.title}</Heading>
					<span class="text-[0.813rem]">by {story.author}</span>
					<hr class="opacity-25 my-4" />
					<a
						class="flex justify-between items-center uppercase text-xs font-bold tracking-widest"
						href="/#">Read Story <Icon name="arrow" /></a
					>
				</div>
			</a>
		</li>
	{/each}
</ul>
