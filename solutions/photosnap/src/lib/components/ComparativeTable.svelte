<script lang="ts">
	import Heading from './Heading.svelte';
	import Icon from './Icon.svelte';
	import Wrapper from './Wrapper.svelte';

	let headers = ['the features', 'pro', 'basic', 'business'];

	let features = [
		{ name: 'unlimited story posting', plans: [true, true, true] },
		{ name: 'unlimited photo upload', plans: [true, true, true] },
		{ name: 'embedding content', plans: [false, true, true] },
		{ name: 'customize metadata', plans: [false, true, true] },
		{ name: 'advanced metrics', plans: [false, false, true] },
		{ name: 'photo downloads', plans: [false, false, true] },
		{ name: 'search engine indexing', plans: [false, false, true] },
		{ name: 'custom analytics', plans: [false, false, true] }
	];
</script>

<div class="overflow-x-auto">
	<table class="w-full max-w-[34.5rem] mx-auto text-left">
		<tr class="header">
			{#each headers as header}
				<Heading as="th" variant="h4">{header}</Heading>
			{/each}
		</tr>

		{#each features as feature}
			<tr class="border-gray">
				<Heading as="td" variant="h4">{feature.name}</Heading>
				{#each feature.plans as plan}
					<td>
						{#if plan}
							<Icon name="check" />
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>

<style lang="postcss">
	table {
		width: min(100%, 34.5rem);
	}

	tr {
		display: grid;
		grid-template-columns: 15.625rem repeat(3, 5.25rem);
		width: 100%;
		margin-inline: auto;
		border-bottom-width: 1px;
		border-color: theme(colors.gray);
		padding: 1.5rem;
	}

	tr.header {
		border-color: theme(colors.black);
	}

	:global(tr *:not(:first-child)) {
		justify-self: center;
	}
</style>
