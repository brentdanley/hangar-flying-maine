import { json } from '@sveltejs/kit';
import type { Event } from '$lib/types';
import { add } from 'date-fns';

async function getEvents(tags?: string[]) {
	let events: Event[] = [];

	const paths = import.meta.glob('/src/events/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Event, 'slug'>;
			const event = { ...metadata, slug } satisfies Event;

			const now = new Date();
			const eventDate = add(new Date(event.date), { days: 1 });
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
