import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;

	// For the QR printed in various places, that points tp `/qr`, redirect to the page given below
	const qr_slug = '/signup'
	if (slug === 'qr') {
		throw redirect(302, qr_slug)
	}

    try {
        const post = await import(`../../posts/${slug}.md`);

        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        console.error(e); // Log the actual error
        throw error(404, `Could not find ${slug}`);
    }
}
