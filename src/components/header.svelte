<script lang="ts">
	import * as config from '$lib/config';
</script>

<header>
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
	header {
		background-color: var(--secondary-color);
		color: var(--light-font);
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-areas: 'title' 'links';
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
		background: #c81c1c;
		font-family: 'Young Serif', serif;

		li {
			list-style: none;
			padding: 1rem;
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
		.title {
			padding: 1.5rem 1rem;
		}
		.links {
			justify-content: center;
		}
	}
</style>
