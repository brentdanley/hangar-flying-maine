<script lang="ts">
	import { differenceInDays } from 'date-fns';
	import { utcToZonedTime } from 'date-fns-tz';

	const nextEventDate = utcToZonedTime(new Date('2024-01-25'), 'America/New_York'); // Replace with the date of the next event
	const nowInEasternTime = utcToZonedTime(new Date(), 'America/New_York');
	const nextEventLink = '/events/2024-01-25'; // Replace with the link to the next event
	const daysUntilNextEvent = differenceInDays(nextEventDate, nowInEasternTime) + 1;

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
		{#if daysUntilNextEvent === 1}
			The next Hangar Flying Maine <a href={nextEventLink}>event</a> is today!
		{:else}
			The next Hangar Flying Maine <a href={nextEventLink}>event</a> is in {daysUntilNextEvent} days.
		{/if}
	</div>
{/if}

<style lang="scss">
	.banner {
		background-color: var(--tertiary-color);
		color: white;
		padding: 1rem;
		text-align: center;
		border-radius: 0.5rem;
		margin: 1rem 2rem;

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
