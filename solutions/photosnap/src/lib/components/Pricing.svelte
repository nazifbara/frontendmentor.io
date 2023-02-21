<script lang="ts">
	import Heading from './Heading.svelte';
	import Button from './Button.svelte';

	let per: 'month' | 'year' = 'month';

	$: isMonthly = per === 'month';

	let toggle = () => (per = isMonthly ? 'year' : 'month');

	const plans = [
		{
			name: 'Basic',
			description:
				'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
			price: {
				month: '$19.00',
				year: '$190.00'
			}
		},
		{
			name: 'Pro',
			description:
				'More advanced features available. Recommended for photography veterans and professionals.',
			price: {
				month: '$39.00',
				year: '$390.00'
			}
		},
		{
			name: 'Business',
			description:
				'Additional features available such as more detailed metrics. Recommended for business owners.',
			price: {
				month: '$99.00',
				year: '$990.00'
			}
		}
	];
</script>

<div class="grid gap-12">
	<div class="text-[1.125rem] font-bold flex gap-6 items-center justify-self-center">
		<span class:text-text={isMonthly}>Monthly</span>
		<label
			on:click|preventDefault={toggle}
			on:keydown|preventDefault={(e) => e.code === 'Enter' && toggle()}
			class="relative inline-block h-8 w-16"
		>
			<input checked={!isMonthly} class="opacity-0 w-0 h-0" type="checkbox" />
			<span
				class={`
        absolute
        inset-0
        rounded-2xl
        cursor-pointer
        transition-colors
        duration-300

        before:transition-all
        before:duration-300
        before:absolute
        before:content-['']
        before:h-6
        before:w-6
        before:bg-bgDark
        before:rounded-full
        before:block
        before:my-auto
        before:top-1/2
        before:-translate-y-1/2
        before:left-1
      `}
				class:bg-gray={isMonthly}
				class:bg-bgDark={!isMonthly}
				class:before:left-[calc(100%_-_(1.5rem_+_0.25rem))]={!isMonthly}
				class:before:bg-bg={!isMonthly}
			/>
		</label>
		<span class:text-text={!isMonthly}>Yearly</span>
	</div>

	<div class="grid gap-6 lg:grid-cols-3 lg:items-center">
		{#each plans as { name, price, description }}
			<article
				class={`
          h-[25.438rem]
          grid 
          content-center
          px-8
          text-center
          relative

          md:h-[16.875rem]
          md:grid-cols-[16.875rem_auto]
          md:grid-rows-[repeat(3,_auto)]
          md:text-left
          md:px-12

          lg:grid-cols-1
          lg:grid-rows-[repeat(4,_auto)]
          lg:h-[25.438rem]
					lg:text-center
					lg:px-8

          before:content-['']
          before:h-[0.375rem]
          before:top-0
          before:w-full
          before:bg-mainGradientTop
          before:absolute

					md:before:left-0
          md:before:w-[0.375rem]
          md:before:h-full

					lg:before:h-[0.375rem]
          lg:before:top-0
          lg:before:w-full
        `}
				class:dark={name == 'Pro'}
				class:bg-[#F5F5F5]={name != 'Pro'}
				class:bg-bgDark={name == 'Pro'}
				class:before:hidden={name !== 'Pro'}
				class:before:block={name == 'Pro'}
				class:lg:h-[29.375rem]={name == 'Pro'}
			>
				<div class="md:col-start-1">
					<Heading variant="h2" toUppercase={false}>
						{name}
					</Heading>
				</div>
				<p
					class={`
            max-w-[16.875rem]
            mx-auto
            mt-4
            mb-8

            md:col-start-1
            md:mx-0

						lg:mx-auto
          `}
				>
					{description}
				</p>
				<div
					class={`
            mb-10
            flex
            flex-col

            md:col-start-2
            md:row-start-1
            md:row-span-2
            md:text-right

            lg:row-start-3
            lg:row-span-1
            lg:text-center
						lg:col-start-1
        `}
				>
					<b class="text-[2.5rem] font-bold text-text dark:text-textDark">
						{price[per]}
					</b>
					<span>per {per}</span>
				</div>
				<div class="grid md:col-start-1 lg:row-start-4">
					<Button>pick plan</Button>
				</div>
			</article>
		{/each}
	</div>
</div>
