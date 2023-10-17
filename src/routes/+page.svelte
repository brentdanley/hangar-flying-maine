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
				<h3 class="title"><a href={post.slug}>{post.title}</a></h3>
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
		padding: 0;
	}

	.post {
		list-style: none;

		.title {
			margin: 0.25rem 0;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		.date {
			font-size: 0.75rem;
			color: var(--light-font);
			background-color: var(--dark-font);
			border-radius: 0.25rem;
			width: fit-content;
			padding: 0.25rem 0.5rem;
			margin: 0;
		}

		.description {
			margin: 0.25rem 0;
		}
	}
</style>
