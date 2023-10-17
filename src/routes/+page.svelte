<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
	console.log('data', data);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				{#if post.date}
					<p class="date">{formatDate(post.date)}</p>
				{/if}
				<h3><a href={post.slug} class="title">{post.title}</a></h3>
				{#if post.description}
					<p class="description">{post.description}</p>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
		list-style: none;

		.title {
			text-decoration: none;
		}

		a {
			color: inherit;
		}

		.date {
			color: var(--light-font);
			background-color: var(--dark-font);
			border-radius: 0.25rem;
			width: fit-content;
			padding: 0.25rem 0.5rem;
		}
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}
</style>
