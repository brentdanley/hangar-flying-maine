<script lang="ts">
	import { differenceInDays } from 'date-fns';

	const nextEventDate = new Date('2023-11-30'); // Replace with the date of the next event
	const nextEventLink = '/2023-11-30_take-two'; // Replace with the link to the next event
	const daysUntilNextEvent = differenceInDays(nextEventDate, new Date()) + 1;

	// set banner class based on days until next event. More than 5 days, less than 5 days, and less than three days
	let bannerClass = 'banner';
	if (daysUntilNextEvent < 5) {
		bannerClass = 'banner banner--less-than-five-days';
	}
	if (daysUntilNextEvent < 3) {
		bannerClass = 'banner banner--less-than-three-days';
	}
</script>

{#if daysUntilNextEvent > 0}
	<div class={bannerClass}>
		The next Hangar Flying Maine <a href={nextEventLink}>event</a> is in {daysUntilNextEvent}
		{daysUntilNextEvent === 1 ? 'day' : 'days'}.
	</div>
{/if}

<style lang="scss">
	.banner {
		background-color: var(--tertiary-color);
		color: white;
		padding: 1rem;
		text-align: center;
		border-radius: 0.5rem;

		a {
			font-weight: bold;
			color: inherit;
		}

		&.banner--less-than-five-days {
			background-color: #0071bc;
		}

		&.banner--less-than-three-days {
			background-color: #c81c1c;
		}
	}
</style>
