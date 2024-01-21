<script lang="ts">
	import { page } from '$app/stores';

	$: path = $page.route.id;
	const navItems = [
		{ label: 'Map', link: '/map' },
		{ label: 'History', link: '/history' },
		{ label: 'Sign Up', link: '/signup' },
		{ label: 'Events', link: '/events' }
	];
</script>

<nav class="primary-nav">
	<ul>
		{#each navItems as item}
			<li class="link{path === item.link ? ' active' : ''}">
				<a href={item.link}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.primary-nav {
		ul {
			list-style: none;
			padding: 0;
			margin: 0;

			.link {
				display: inline-block;
				margin: 0 1rem;

				&.active {
					border-bottom: 2px solid white;
				}

				a {
					color: white;
					text-decoration: none;
					font-size: 1.9rem;
					font-weight: bold;
					text-transform: uppercase;
					letter-spacing: 0.1rem;
				}
			}
		}
	}
</style>
