<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import Icon from '$lib/Icon.svelte';

	export let data: PageData;
	let currentTabIndex = 0;
	$: tabToInfo = {
		0: {
			info: data.overview,
			img: data.images.planet
		},
		1: {
			info: data.structure,
			img: data.images.internal
		},
		2: {
			info: data.geology,
			img: data.images.planet
		}
	};
</script>

<section
	style:padding-bottom="30px"
	style:--planet-color={data.color}
	style:--planet-sm={data.sizes.sm}
	style:--planet-md={data.sizes.md}
	style:--planet-lg={data.sizes.lg}
>
	<div class="top-tab">
		<button class:active={currentTabIndex === 0} on:click={() => (currentTabIndex = 0)}
			>overview</button
		>
		<button class:active={currentTabIndex === 1} on:click={() => (currentTabIndex = 1)}
			>structure</button
		>
		<button class:active={currentTabIndex === 2} on:click={() => (currentTabIndex = 2)}
			>surface</button
		>
	</div>

	<article class="wrapper">
		<figure>
			<img src={tabToInfo[currentTabIndex].img} alt={data.name} />
			{#if currentTabIndex === 2}
				<img
					class="geology-img"
					src={data.images.geology}
					alt=""
					transition:fly={{ y: 200, easing: cubicOut }}
				/>
			{/if}
		</figure>

		<div class="info">
			<h1 class="name">{data.name}</h1>
			<p class="description">{tabToInfo[currentTabIndex].info.content}</p>
			<p class="source">
				<span>Source : </span>
				<a href={tabToInfo[currentTabIndex].info.source}>Wikipedia <Icon name="source" /></a>
			</p>
		</div>

		<div class="tab">
			<button
				class:active={currentTabIndex === 0}
				class="tab-item"
				on:click={() => (currentTabIndex = 0)}><span>01</span>overview</button
			>
			<button
				class:active={currentTabIndex === 1}
				class="tab-item"
				on:click={() => (currentTabIndex = 1)}><span>02</span>internal structure</button
			>
			<button
				class:active={currentTabIndex === 2}
				class="tab-item"
				on:click={() => (currentTabIndex = 2)}><span>03</span>surface geology</button
			>
		</div>

		<aside>
			<article>
				<h3>rotation time</h3>
				<strong>{data.rotation}</strong>
			</article>

			<article>
				<h3>revolution time</h3>
				<strong>{data.revolution}</strong>
			</article>

			<article>
				<h3>radius</h3>
				<strong>{data.radius}</strong>
			</article>

			<article>
				<h3>average temp.</h3>
				<strong>{data.temperature}</strong>
			</article>
		</aside>
	</article>
</section>

<style>
	.top-tab {
		display: flex;
		gap: 2px;
		justify-content: space-between;
		padding-inline: 1.5rem;
		border-bottom: 1px solid hsl(0 0% 100% / var(--opacity-20));
	}

	.tab {
		display: none;
	}

	.top-tab button {
		padding-block: 1.25rem;
		border-bottom: 4px solid transparent;
	}

	.top-tab button.active {
		border-color: var(--planet-color);
	}

	button {
		text-transform: uppercase;
		font-weight: var(--fw-bold);
		letter-spacing: 1.93px;
		font-size: var(--fs-btn-sm);
	}

	figure {
		height: 19rem;
		display: grid;
		place-content: center;
		place-items: center;
		position: relative;
	}

	figure img {
		width: 100%;
		max-width: var(--planet-sm);
	}

	.geology-img {
		width: 5rem;
		position: absolute;
		bottom: 2rem;
	}

	.wrapper {
		padding-inline: 1.5rem;
		margin-inline: auto;
		max-width: 69.375rem;
	}

	.info {
		margin-block-end: 1.75rem;
	}

	.info > * {
		text-align: center;
	}

	.name {
		font-size: var(--fs-h1-sm);
		font-family: var(--ff-2);
		text-transform: uppercase;
		margin-block-end: 1rem;
	}

	.description {
		margin-block-end: 2rem;
		font-size: var(--fs-body-sm);
		line-height: 1.375rem;
	}

	.source {
		opacity: var(--opacity-50);
		font-size: var(--fs-h3-lg);
	}

	.source a {
		font-weight: var(--fw-bold);
		text-decoration: underline;
	}

	aside {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	aside article {
		border: 1px solid hsl(0 0% 100% / var(--opacity-20));
		text-transform: uppercase;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 1.5rem;
		padding-block: 1rem;
	}

	aside article h3 {
		opacity: var(--opacity-50);
		font-size: 0.5rem;
		letter-spacing: 0.73px;
	}

	aside article strong {
		font-size: var(--fs-h2-sm);
		font-family: var(--ff-2);
		letter-spacing: -0.9px;
	}

	@media (min-width: 48rem) {
		.wrapper {
			display: grid;
			grid-template-columns: 3fr 2fr;
			column-gap: 4.313rem;
			align-items: center;
			padding-inline: 39px;
		}

		.name {
			font-size: var(--fs-h1-md);
			margin-bottom: 1.5rem;
		}

		.info > * {
			text-align: left;
		}

		.geology-img {
			width: 7rem;
			bottom: 3rem;
		}

		figure {
			grid-column: span 2;
		}

		aside {
			grid-column: span 2;
		}

		button {
			font-size: var(--fs-btn-lg);
		}

		figure {
			height: 28.75rem;
		}

		figure img {
			max-width: var(--planet-md);
		}

		aside {
			flex-direction: row;
		}

		aside article {
			flex: 1;
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-start;
			padding-inline: 1rem;
		}

		aside article strong {
			font-size: var(--fs-h2-md);
		}

		.description,
		.source {
			font-size: var(--fs-body-md);
		}

		.info {
			grid-column: 1;
		}

		.top-tab {
			display: none;
		}

		.tab {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
			grid-column: 2;
		}

		.tab-item {
			height: 2.5rem;
			padding-inline: 1.25rem;
			border: 1px solid hsl(0 0% 100% / var(--opacity-20));
			text-align: left;
		}

		.tab-item.active {
			background-color: var(--planet-color);
			border: 1px solid hsl(0 0% 100% / var(--planet-color));
		}

		.tab-item.active:hover {
			background-color: var(--planet-color);
		}

		.tab-item:hover {
			background-color: var(--bg-hover);
		}

		.tab-item span {
			opacity: var(--opacity-50);
			margin-right: 1rem;
		}
	}

	@media (min-width: 69.375rem) {
		figure {
			height: 41.625rem;
			grid-column: 1;
			grid-row: 1 / 5;
		}

		.info {
			grid-column: 2;
			grid-row: 2;
		}

		.geology-img {
			width: 10.188rem;
			bottom: 5rem;
		}

		.name {
			font-size: var(--fs-h1-lg);
		}

		.tab {
			grid-column: 2;
			grid-row: 3;
		}

		.tab-item {
			height: 3rem;
			padding-inline: 1.75rem;
		}

		.description,
		.source {
			font-size: var(--fs-body-lg);
		}

		.description {
			margin-bottom: 1.5rem;
		}

		figure img {
			max-width: var(--planet-lg);
		}

		aside {
			gap: 1.875rem;
		}

		aside article h3 {
			font-size: 0.688rem;
		}

		aside article strong {
			font-size: var(--fs-h2-lg);
		}
	}
</style>
