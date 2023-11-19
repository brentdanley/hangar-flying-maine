<script lang="ts">
	import * as config from '$lib/config';
</script>

<header class="header">
	<img src="/images/HFM_logo.png" alt="HFM Logo" class="logo" />

	<!-- Title -->
	<a href="/" class="title">
		{config.title}
	</a>

	<!-- Navigation -->
	<nav class="links">
		<li>
			<a href="/history">History</a>
		</li>
		<li>
			<a href="/signup">Sign Up</a>
		</li>
	</nav>
</header>

<style lang="scss">
	.header {
		background-color: var(--secondary-color);
		color: var(--light-font);
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-areas: 'logo title links';
		padding: clamp(0.5rem, 1vw, 2rem);
		align-items: center;
		justify-content: center;
	}

	.logo {
		grid-area: logo;
	}
	.title {
		grid-area: title;
		font-size: clamp(1.5rem, 3vw, 4rem);
		text-transform: capitalize;
		font-family: 'Young Serif', serif;
		text-align: center;
		padding: 2rem;
	}
	.links {
		grid-area: links;
		display: flex;
		justify-content: flex-end;
		font-family: 'Young Serif', serif;

		li {
			background: #c81c1c;
			list-style: none;
			padding: 0.5rem 1rem;
			margin: 0.3rem;
			border-radius: 0.5rem;
		}
	}

	a {
		color: inherit;
		text-decoration: none;

		&:hover {
			color: white;
		}
	}

	@media (max-width: 768px) {
		.header {
			grid-template-columns: 1fr;
			grid-template-areas: 'logo' 'title' 'links';
		}
		.logo {
			justify-self: center;
			max-width: 200px;
		}
		.title {
			padding: 1.5rem 1rem;
		}
		.links {
			justify-content: center;
		}
	}
</style>
