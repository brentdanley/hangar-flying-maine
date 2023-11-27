export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description?: string;
	date?: string | number | Date;
	tags?: Categories[];
	published?: boolean;
};
