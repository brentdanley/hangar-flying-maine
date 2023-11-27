import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(tags?: string[]) {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (tags?.length && post?.tags?.length) {
				if (post.tags.some((tag) => tags.includes(tag))) {
					post.published && posts.push(post);
				}
			}
		}
	}

	return posts;
}

export async function GET({ params, url }) {
	const tags = url.searchParams.get('tags')?.split(',') ?? [];
	const posts = await getPosts(tags);
	return json(posts);
}
