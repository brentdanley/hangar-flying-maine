import type { Event } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/events');
	const events: Event[] = await response.json();

	// sort events descending by date
	events.sort((a, b) => {
		if (a.date && b.date) {
			return Number(new Date(b.date).getTime() - new Date(a.date).getTime());
		}
		return 0; // return 0 if dates are undefined
	});

	return { events };
}
