<!-- EventCard.svelte -->
<script lang="ts">
	import { format } from 'date-fns';
	export let event: any;
	export let theme: string = 'upcoming';

	function formatDateWithDay(dateString: string) {
		const dateParts = dateString.split('-').map((part) => parseInt(part, 10));
		const date = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2] + 1));
		return format(date, 'EEEE, MMMM do, yyyy');
	}

	let eventClass = `event ${theme}${event.organization === 'Hangar Flying Maine' ? ' hfm' : ''}`;
</script>

<div class={eventClass}>
	<h3 class="title"><a href={`/events/${event.slug}`}>{event.title}</a></h3>
	{#if event.date}
		<p class="date">
			{formatDateWithDay(String(event.date))}{event.time ? ` @ ${event.time}` : ''}
		</p>
	{/if}
	{#if event.organization && event.organization !== 'Hangar Flying Maine'}
		<p class="organization">Brought to you by {event.organization}</p>
	{/if}
	{#if event.description}
		<p class="description">{event.description}</p>
	{/if}
</div>

<style lang="scss">
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

		&.past {
			filter: saturate(0.3);
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
