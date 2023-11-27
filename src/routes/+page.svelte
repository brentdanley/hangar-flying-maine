<script lang="ts">
	import * as config from '$lib/config';
	import Banner from '../components/banner.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Welcome!</h1>

<p>Hangar Flying Maine is a casual monthly social event for aviation enthusiasts.</p>

<p><a href="/signup">Sign up</a> for the mailing list to be notified of future events.</p>

<p>See a list of upcoming and past <a href="/events">local aviation events</a>.</p>

<p>Read about the <a href="/history">rich history</a> of Hangar Flying Maine.</p>
