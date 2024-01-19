<script lang="ts">
	import * as config from '$lib/config';
	import EventCard from '../../components/EventCard.svelte';

	export let data;

	const upcomingEvents = data.events.filter((event) => {
		if (event.date) {
			const eventDate = new Date(event.date);
			const now = new Date();
			return eventDate >= now;
		}
	});

	const pastEvents = data.events.filter((event) => {
		if (event.date) {
			const eventDate = new Date(event.date);
			const now = new Date();
			return eventDate < now;
		}
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Community Events</h1>

<!-- Posts -->

<section>
	<h3>Upcoming Events</h3>
	<div class="events upcoming-events">
		{#each upcomingEvents as event}
			<EventCard {event} />
		{/each}
	</div>
	<h3>Past Events</h3>
	<div class="events past-events">
		{#each pastEvents as event}
			<EventCard {event} theme="past" />
		{/each}
	</div>
</section>

<style lang="scss">
	.events {
		display: grid;
		padding: 0;
		max-width: 800px;
	}
</style>
