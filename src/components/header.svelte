<script lang="ts">
	import * as config from '$lib/config';
	import PrimaryNavigation from './PrimaryNavigation.svelte';
</script>

<header class="header">
	<div class="logo"><a href="/"><img src="/images/HFM_logo.png" alt="HFM Logo" /></a></div>

	<!-- Title -->
	<a href="/" class="title">
		{config.title}
	</a>
	<div class="primary-navigation-wrapper">
		<PrimaryNavigation />
	</div>
</header>

<style lang="scss">
	.header {
		background-color: var(--secondary-color);
		color: var(--light-font);
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 1fr auto;
		grid-template-areas: 'logo title' 'logo primary-navigation';
		padding: clamp(0.5rem, 1vw, 2rem);
		align-items: center;
		justify-content: center;
	}

	.logo {
		grid-area: logo;

		img {
			max-width: 100%;
		}
	}
	.title {
		grid-area: title;
		font-size: clamp(1.5rem, 6vw, 6rem);
		text-transform: capitalize;
		font-family: 'Young Serif', serif;
		text-align: center;
		padding: 2rem;
		color: var(--light-green);
		-webkit-text-stroke: 1px white;
	}

	.primary-navigation-wrapper {
		grid-area: primary-navigation;
		display: flex;
		justify-content: right;
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.header {
			grid-template-columns: 1fr;
			grid-template-areas: 'logo' 'title';
		}
		.logo {
			justify-self: center;
			max-width: 200px;
		}
		.title {
			padding: 1.5rem 1rem;
		}
		.primary-navigation-wrapper {
			display: none;
		}
	}
</style>
