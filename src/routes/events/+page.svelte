<script lang="ts">
	import { format } from 'date-fns';
	import * as config from '$lib/config';

	export let data;

	function formatDateWithDay(dateString: string) {
		const dateParts = dateString.split('-').map((part) => parseInt(part, 10));
		const date = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2] + 1));
		console.log('date', dateParts[2]);
		return format(date, 'EEEE, MMMM do, yyyy');
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Community Events</h1>

<!-- Posts -->

<section>
	<div class="events">
		{#each data.events as event}
			<div class={`event${event.organization === 'Hangar Flying Maine' ? ' hfm' : ''}`}>
				<h3 class="title"><a href={`/events/${event.slug}`}>{event.title}</a></h3>
				{#if event.date}
					<p class="date">
						{formatDateWithDay(String(event.date))}{event.time ? ` @ ${event.time}` : ''}
					</p>
				{/if}
				{#if event.organization}
					<p class="organization">Brought to you by {event.organization}</p>
				{/if}
				{#if event.description}
					<p class="description">{event.description}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.events {
		display: grid;
		padding: 0;
		max-width: 800px;
	}

	.event {
		margin: 0 0 1rem 0;
		background-color: var(--dark-font);
		color: white;
		padding: 1.5rem 2rem;
		border-radius: 1rem;

		&.hfm {
			padding: 1rem;
			background-color: var(--light-green);
			color: var(--dark-font);
			border: 3px solid var(--dark-font);
		}

		.organization {
			font-size: 1.75rem;
			font-style: italic;
		}

		.title {
			margin: 0.5rem 0 1rem;
			color: inherit;
			text-align: center;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		.date {
			font-size: 1.5rem;
			font-weight: bold;
			margin: 0;
		}

		.description {
			margin: 0.25rem 0;
		}
	}
</style>
