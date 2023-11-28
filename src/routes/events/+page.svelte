<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Local Aviation Events</h1>

<!-- Posts -->

<section>
	<ul class="events">
		{#each data.events as event}
			<li class={`event${event.organization === 'Hangar Flying Maine' ? ' hfm' : ''}`}>
				{#if event.organization}
					<p class="organization">{event.organization}</p>
				{/if}
				{#if event.date}
					<p class="date">{formatDate(String(event.date))}</p>
				{/if}
				<h3 class="title"><a href={`/events/${event.slug}`}>{event.title}</a></h3>
				{#if event.description}
					<p class="description">{event.description}</p>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.events {
		display: grid;
		padding: 0;
	}

	.event {
		list-style: none;
		margin: 0 0 1rem 0;

		&.hfm {
			padding: 1rem;
			border: 3px solid var(--dark-font);
			border-radius: 0.5rem;
		}

		.organization {
			font-size: 1.75rem;
			color: white;
			background-color: var(--dark-font);
			border-radius: 0.25rem;
			width: fit-content;
			padding: 0.5rem;
			margin: 0 0 0.5rem 0;
		}

		.title {
			margin: 0.25rem 0;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		.date {
			font-size: 1.5rem;
			margin: 0;
		}

		.description {
			margin: 0.25rem 0;
		}
	}
</style>
