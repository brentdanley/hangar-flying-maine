<script lang="ts">
	const navItems = [
		{ label: 'History', link: '/history' },
		{ label: 'Sign Up', link: '/signup' },
		{ label: 'Events', link: '/events' }
	];
</script>

<nav class="primary-nav">
	<ul>
		{#each navItems as item}
			<li><a href={item.link}>{item.label}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.primary-nav {
		ul {
			list-style: none;
			padding: 0;
			margin: 0;

			li {
				display: inline-block;
				margin: 0 1rem;

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
