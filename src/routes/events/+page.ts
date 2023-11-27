import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts?tags=event');
	const posts: Post[] = await response.json();

	// Sort posts by date
	posts.sort((a, b) => {
		return new Date(b.date).valueOf() - new Date(a.date).valueOf();
	});
	return { posts };
}
