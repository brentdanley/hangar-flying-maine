<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
	console.log(data);
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

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
		<p>{formatDate(data.meta.date)}{data.meta.time ? ` at ${data.meta.time}` : ''}</p>
	</hgroup>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="scss">
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
