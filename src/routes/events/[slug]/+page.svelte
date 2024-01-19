<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { differenceInDays } from 'date-fns';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

{#if data.meta.date}
	{#if differenceInDays(new Date(data.meta.date), new Date()) >= 0}
		<span class="days-until">
			{differenceInDays(new Date(data.meta.date), new Date())} days until this event!
		</span>
	{/if}
{/if}

<article>
	<!-- Title -->
	<hgroup>
		{#if data.meta.organization}
			<h6 class="organization">{data.meta.organization}</h6>
		{/if}
		<h1 class="title">{data.meta.title}</h1>
		{#if data.meta.description}
			<h4 class="description">{data.meta.description}</h4>
		{/if}
		<p>📅 {formatDate(data.meta.date)}{data.meta.time ? ` at ${data.meta.time}` : ''}</p>
		<p>🗺️ {data.meta.location}</p>
	</hgroup>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="scss">
	.days-until {
		display: block;
		font-size: 1.25rem;
		color: var(--dark-font);
		background-color: var(--primary-font);
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		margin: 0.5rem 0;
		text-align: center;
		line-height: 1.5;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 700;
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
	}

	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;

		.organization {
			font-size: 1.75rem;
			color: white;
			background-color: var(--dark-font);
			border-radius: 0.25rem;
			width: fit-content;
			padding: 0.5rem 1rem;
			margin: 0 0 0.5rem 0;
		}

		.title {
			margin-bottom: 0.5rem;
		}

		.description {
			margin: 0 0 1rem 0;
		}
	}
</style>
