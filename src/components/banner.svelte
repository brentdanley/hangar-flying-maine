<script lang="ts">
	import { differenceInDays } from 'date-fns';

	const nextEventDate = new Date('2023-11-30'); // Replace with the date of the next event
	const daysUntilNextEvent = differenceInDays(nextEventDate, new Date()) + 1;
</script>

{#if daysUntilNextEvent > 0}
	<div class="banner">
		The next Hangar Flying Maine <a href="/2023-11-30_take-two">event</a> is in {daysUntilNextEvent}
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
	}
</style>
