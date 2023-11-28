import { json } from '@sveltejs/kit';
import type { Event } from '$lib/types';

async function getEvents(tags?: string[]) {
	let events: Event[] = [];

	const paths = import.meta.glob('/src/events/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Event, 'slug'>;
			const event = { ...metadata, slug } satisfies Event;

			// Unpublish events that have already happened
			const now = new Date();
			const eventDate = new Date(event.date);
			if (eventDate < now) {
				event.published = false;
			}
			event.published && events.push(event);
		}
	}

	return events;
}

export async function GET({ params, url }) {
	const tags = url.searchParams.get('tags')?.split(',') ?? [];
	const events = await getEvents(tags);
	return json(events);
}
