import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;

	try {
		const post = await import(`../../../events/${slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.error(e); // Log the actual error
		throw error(404, `Could not find ${slug}`);
	}
}
