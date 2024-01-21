<script lang="ts">
	import * as config from '$lib/config';
	import Banner from '../components/banner.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Welcome to Hangar Flying Maine!</h1>
<p>
	Embark on a journey where the skies are not the limit but the beginning. Hangar Flying Maine is
	more than just a gathering; it's a community where aviation enthusiasts unite to share their
	passion, knowledge, and stories.
</p>

<h4>Join Our Monthly Social Event</h4>
<p>
	Mark your calendars for the fourth Thursday of each month! Whether you're a seasoned pilot, a
	budding aviator, or just intrigued by the world above, our casual, agenda-free social events are
	the perfect runway for you to engage and connect with fellow aviation aficionados.
</p>

<h4>Stay in the Loop</h4>
<p>
	Never miss an event! <a href="/signup">Sign up for our mailing list</a> and get timely notifications
	about upcoming gatherings, special events, and more. Be part of a community that's all about celebrating
	the joy of flying.
</p>

<h4>Explore Local Aviation Events</h4>
<p>
	Curious about what's happening in the Maine aviation scene? Check out our <a href="/events"
		>comprehensive list of upcoming and past local aviation events</a
	>. From seminars to fly-ins, there's always something exciting on the horizon.
</p>

<h4>Discover Our Story</h4>
<p>
	Hangar Flying Maine is steeped in a rich tradition that blends the love of flying with the spirit
	of community. Visit our <a href="/about">About page</a> to learn more about how we started, our mission,
	and the people who make Hangar Flying Maine a vibrant and welcoming community.
</p>

<h4>New Feature Alert: Check Out Our Interactive Map! 🗺️</h4>
<p>
	Exciting news for our community! We've launched <a href="/map">a new interactive map</a> on our site,
	providing a dynamic way to view and connect with fellow aviators. This feature is not just a map; it's
	a window into the world of our members. We encourage all pilots to update their home airport information
	by clicking the update link on your email. Doing so will place a magenta circle on the map, symbolizing
	your spot in our growing network. It's a great way to visualize our community's reach and find fellow
	pilots near you. Don't miss out on being part of this exciting new addition – update your info and
	see our community take flight on the map!
</p>
