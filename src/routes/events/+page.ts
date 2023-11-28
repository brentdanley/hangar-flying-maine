import type { Event } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/events');
	const events: Event[] = await response.json();

	// Sort posts by date
	events.sort((a, b) => {
		return new Date(b.date).valueOf() - new Date(a.date).valueOf();
	});
	return { events };
}
